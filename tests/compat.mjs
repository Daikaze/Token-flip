import assert from 'node:assert/strict';
import test from 'node:test';

for (const generation of [13, 14]) {
  test(`Foundry v${generation}: startup, flip bindings and hand flag cleanup`, async () => {
    const hooks = new Map(), bindings = new Map();
    const register = (name, fn) => hooks.set(name, [...hooks.get(name) ?? [], fn]);
    class Game {}
    globalThis.foundry = {
      Game, helpers: {Hooks: {once: register, on: register}, interaction: {KeyboardManager: {}}, media: {}},
      canvas: {containers: {}, rendering: {filters: {}}}, applications: {hud: {}},
      data: generation === 14 ? {operators: {ForcedDeletion: {create: () => 'delete'}}} : {}
    };
    globalThis.PIXI = {Container: class {}};
    globalThis.CONST = {KEYBINDING_PRECEDENCE: {NORMAL: 0}};
    const updates = [];
    const document = {
      _source: {texture: {scaleX: 2, scaleY: 0.5}},
      getFlag: () => false, setFlag: async () => {}, unsetFlag: async () => {},
      update: async data => updates.push(data)
    };
    globalThis.game = Object.assign(new Game(), {
      release: {generation}, canvas: {tokens: {controlled: [{isOwner:true, document}]}},
      settings: {register() {}, get: () => 0},
      keybindings: {register: (_, key, binding) => bindings.set(key, binding)}
    });
    await import('../module.mjs?generation=' + generation);
    await hooks.get('init')[0]();
    for (const isShift of [false, true]) {
      bindings.get('flipToken').onDown({isShift});
      await new Promise(resolve => setImmediate(resolve));
    }
    assert.deepEqual(updates, [{'texture.scaleX': -2}, {'texture.scaleY': -0.5}]);
    let flags;
    for (const handler of hooks.get('preCreateToken')) {
      handler({getFlag: () => 123, updateSource: data => { flags = data.flags['fast-flip']; }});
    }
    assert.deepEqual(flags, generation === 13
      ? {'-=hand-raised-at': null, '-=hand-raised-by': null}
      : {'hand-raised-at': 'delete', 'hand-raised-by': 'delete'});
  });
}
