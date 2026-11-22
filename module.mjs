import { t as e } from "./jsx-dom.mjs";
//#region src/common/types/index.ts
var t = "fast-flip";
//#endregion
//#region src/common/constants.ts
function n(e) {
	return `${t}.${e}`;
}
var r = `${t}.refreshRaiseHandOverlays`, i = {
	ANIMATION_DURATION: "animation-duration",
	ALLOW_AFK_TOGGLE: "allow-afk-toggle",
	SHOW_AFK_STATUS_IN_CHAT: "show-afk-status-in-chat",
	SHOW_MIRROR_BUTTONS_HUD: "show-mirror-buttons-hud",
	SHOW_TOGGLE_AFK_HUD: "show-toggle-afk-hud",
	AFK_OVERLAY_ICON_PATH: "afk-overlay-icon-path",
	ALLOW_SPEECH_BUBBLES: "allow-speech-bubbles",
	SPEECH_BUBBLE_FONT_SIZE: "speech-bubble-font-size",
	ALLOW_RAISE_HAND: "allow-raise-hand",
	SHOW_RAISE_HAND_STATUS_IN_CHAT: "show-raise-hand-status-in-chat",
	SHOW_TOGGLE_RAISE_HAND_HUD: "show-toggle-raise-hand-hud",
	RAISE_HAND_OVERLAY_ICON_PATH: "raise-hand-overlay-icon-path",
	RAISE_HAND_NUMBER_ANCHOR_X: "raise-hand-number-anchor-x",
	RAISE_HAND_NUMBER_ANCHOR_Y: "raise-hand-number-anchor-y",
	ALLOW_TOKEN_IMAGE_WHEEL: "allow-token-image-wheel",
	TOKEN_IMAGE_WHEEL_TRANSITION: "token-image-wheel-transition"
}, a = {
	KEYBINDS_FLIP_TOKEN_HOTKEY: n("keybinds.flip-token.hotkey"),
	KEYBINDS_FLIP_TOKEN_HINT: n("keybinds.flip-token.hint"),
	KEYBINDS_FLIP_TILE_HOTKEY: n("keybinds.flip-tile.hotkey"),
	KEYBINDS_FLIP_TILE_HINT: n("keybinds.flip-tile.hint"),
	KEYBINDS_AFK_TOGGLE_HOTKEY: n("keybinds.afk-toggle.hotkey"),
	KEYBINDS_AFK_TOGGLE_HINT: n("keybinds.afk-toggle.hint"),
	KEYBINDS_SHOW_SPEECH_BUBBLE_HOTKEY: n("keybinds.show-speech-bubble.hotkey"),
	KEYBINDS_SHOW_SPEECH_BUBBLE_HINT: n("keybinds.show-speech-bubble.hint"),
	KEYBINDS_RAISE_HAND_TOGGLE_HOTKEY: n("keybinds.raise-hand-toggle.hotkey"),
	KEYBINDS_RAISE_HAND_TOGGLE_HINT: n("keybinds.raise-hand-toggle.hint"),
	KEYBINDS_LOWER_ALL_HANDS_HOTKEY: n("keybinds.lower-all-hands.hotkey"),
	KEYBINDS_LOWER_ALL_HANDS_HINT: n("keybinds.lower-all-hands.hint"),
	KEYBINDS_PICK_TOKEN_IMAGE_HOTKEY: n("keybinds.pick-token-image.hotkey"),
	KEYBINDS_PICK_TOKEN_IMAGE_HINT: n("keybinds.pick-token-image.hint"),
	SETTINGS_AFK_SHOW_TOGGLE_BUTTON_VALUE: n("settings.afk.show-toggle-button.value"),
	SETTINGS_AFK_SHOW_TOGGLE_BUTTON_HINT: n("settings.afk.show-toggle-button.hint"),
	SETTINGS_AFK_ALLOW_VALUE: n("settings.afk.allow.value"),
	SETTINGS_AFK_ALLOW_HINT: n("settings.afk.allow.hint"),
	SETTINGS_AFK_OVERLAY_ICON_PATH_VALUE: n("settings.afk.overlay-icon-path.value"),
	SETTINGS_AFK_OVERLAY_ICON_PATH_HINT: n("settings.afk.overlay-icon-path.hint"),
	SETTINGS_AFK_SHOW_STATUS_IN_CHAT_VALUE: n("settings.afk.show-status-in-chat.value"),
	SETTINGS_AFK_SHOW_STATUS_IN_CHAT_HINT: n("settings.afk.show-status-in-chat.hint"),
	SETTINGS_SPEECH_BUBBLE_ALLOW_VALUE: n("settings.speech-bubble.allow.value"),
	SETTINGS_SPEECH_BUBBLE_ALLOW_HINT: n("settings.speech-bubble.allow.hint"),
	SETTINGS_SPEECH_BUBBLE_FONT_SIZE_VALUE: n("settings.speech-bubble.font-size.value"),
	SETTINGS_SPEECH_BUBBLE_FONT_SIZE_HINT: n("settings.speech-bubble.font-size.hint"),
	SETTINGS_FLIP_SHOW_VALUE: n("settings.flip.show.value"),
	SETTINGS_FLIP_SHOW_HINT: n("settings.flip.show.hint"),
	SETTINGS_FLIP_ANIMATION_DURATION_VALUE: n("settings.flip.animation-duration.value"),
	SETTINGS_FLIP_ANIMATION_DURATION_HINT: n("settings.flip.animation-duration.hint"),
	SETTINGS_RAISE_HAND_SHOW_TOGGLE_BUTTON_VALUE: n("settings.raise-hand.show-toggle-button.value"),
	SETTINGS_RAISE_HAND_SHOW_TOGGLE_BUTTON_HINT: n("settings.raise-hand.show-toggle-button.hint"),
	SETTINGS_RAISE_HAND_ALLOW_VALUE: n("settings.raise-hand.allow.value"),
	SETTINGS_RAISE_HAND_ALLOW_HINT: n("settings.raise-hand.allow.hint"),
	SETTINGS_RAISE_HAND_OVERLAY_ICON_PATH_VALUE: n("settings.raise-hand.overlay-icon-path.value"),
	SETTINGS_RAISE_HAND_OVERLAY_ICON_PATH_HINT: n("settings.raise-hand.overlay-icon-path.hint"),
	SETTINGS_RAISE_HAND_NUMBER_ANCHOR_X_VALUE: n("settings.raise-hand.number-anchor-x.value"),
	SETTINGS_RAISE_HAND_NUMBER_ANCHOR_X_HINT: n("settings.raise-hand.number-anchor-x.hint"),
	SETTINGS_RAISE_HAND_NUMBER_ANCHOR_Y_VALUE: n("settings.raise-hand.number-anchor-y.value"),
	SETTINGS_RAISE_HAND_NUMBER_ANCHOR_Y_HINT: n("settings.raise-hand.number-anchor-y.hint"),
	SETTINGS_RAISE_HAND_NUMBER_PREVIEW: n("settings.raise-hand.number-preview"),
	SETTINGS_RAISE_HAND_SHOW_STATUS_IN_CHAT_VALUE: n("settings.raise-hand.show-status-in-chat.value"),
	SETTINGS_RAISE_HAND_SHOW_STATUS_IN_CHAT_HINT: n("settings.raise-hand.show-status-in-chat.hint"),
	SETTINGS_TOKEN_IMAGE_WHEEL_ALLOW_VALUE: n("settings.token-image-wheel.allow.value"),
	SETTINGS_TOKEN_IMAGE_WHEEL_ALLOW_HINT: n("settings.token-image-wheel.allow.hint"),
	SETTINGS_TOKEN_IMAGE_WHEEL_TRANSITION_VALUE: n("settings.token-image-wheel.transition.value"),
	SETTINGS_TOKEN_IMAGE_WHEEL_TRANSITION_HINT: n("settings.token-image-wheel.transition.hint"),
	TEXT_AFK_TOGGLE_BUTTON: n("text.afk.toggle-button"),
	TEXT_FLIP_TOKEN_HORIZONTAL_BUTTON: n("text.flip-token.horizontal-button"),
	TEXT_FLIP_TOKEN_VERTICAL_BUTTON: n("text.flip-token.vertical-button"),
	TEXT_FLIP_TILE_HORIZONTAL_BUTTON: n("text.flip-tile.horizontal-button"),
	TEXT_FLIP_TILE_VERTICAL_BUTTON: n("text.flip-tile.vertical-button"),
	TEXT_AFK_CHAT_MESSAGE: n("text.afk.chat.message"),
	TEXT_AFK_CHAT_RETURNED_MESSAGE: n("text.afk.chat.returned-message"),
	TEXT_RAISE_HAND_TOGGLE_BUTTON: n("text.raise-hand.toggle-button"),
	TEXT_RAISE_HAND_CHAT_MESSAGE: n("text.raise-hand.chat.message"),
	TEXT_RAISE_HAND_CHAT_LOWERED_MESSAGE: n("text.raise-hand.chat.lowered-message")
};
//#endregion
//#region src/common/helpers.ts
function o(e) {
	return `modules/${t}/icons/${e}.svg`;
}
function s(change, key) {
  const flags = change.flags?.[t];
  return !!flags && [key, "-=" + key, "==" + key].some(name => Object.hasOwn(flags, name));
}
function deleteHandFlags() {
  if (game.release.generation >= 14) {
    const remove = foundry.data.operators.ForcedDeletion;
    return { [F]: remove.create(), [I]: remove.create() };
  }
  return { ["-=" + F]: null, ["-=" + I]: null };
}
//#endregion
//#region src/common/settings.ts
function l() {
	foundry.helpers.Hooks.callAll(r);
}
function u(e) {
	return e.settings.register(t, i.ANIMATION_DURATION, {
		name: a.SETTINGS_FLIP_ANIMATION_DURATION_VALUE,
		hint: a.SETTINGS_FLIP_ANIMATION_DURATION_HINT,
		scope: "world",
		config: !0,
		default: 0,
		type: Number,
		range: {
			min: 0,
			max: 1,
			step: .1
		}
	}), e.settings.register(t, i.ALLOW_SPEECH_BUBBLES, {
		name: a.SETTINGS_SPEECH_BUBBLE_ALLOW_VALUE,
		hint: a.SETTINGS_SPEECH_BUBBLE_ALLOW_HINT,
		scope: "world",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.SPEECH_BUBBLE_FONT_SIZE, {
		name: a.SETTINGS_SPEECH_BUBBLE_FONT_SIZE_VALUE,
		hint: a.SETTINGS_SPEECH_BUBBLE_FONT_SIZE_HINT,
		scope: "client",
		config: !0,
		default: 14,
		type: Number,
		range: {
			min: 14,
			max: 42,
			step: 1
		}
	}), e.settings.register(t, i.AFK_OVERLAY_ICON_PATH, {
		name: a.SETTINGS_AFK_OVERLAY_ICON_PATH_VALUE,
		hint: a.SETTINGS_AFK_OVERLAY_ICON_PATH_HINT,
		scope: "world",
		config: !0,
		type: String,
		filePicker: "imagevideo",
		default: o("afk")
	}), e.settings.register(t, i.ALLOW_AFK_TOGGLE, {
		name: a.SETTINGS_AFK_ALLOW_VALUE,
		hint: a.SETTINGS_AFK_ALLOW_HINT,
		scope: "world",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.SHOW_AFK_STATUS_IN_CHAT, {
		name: a.SETTINGS_AFK_SHOW_STATUS_IN_CHAT_VALUE,
		hint: a.SETTINGS_AFK_SHOW_STATUS_IN_CHAT_HINT,
		scope: "world",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.SHOW_MIRROR_BUTTONS_HUD, {
		name: a.SETTINGS_FLIP_SHOW_VALUE,
		hint: a.SETTINGS_FLIP_SHOW_HINT,
		scope: "client",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.SHOW_TOGGLE_AFK_HUD, {
		name: a.SETTINGS_AFK_SHOW_TOGGLE_BUTTON_VALUE,
		hint: a.SETTINGS_AFK_SHOW_TOGGLE_BUTTON_HINT,
		scope: "client",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.RAISE_HAND_OVERLAY_ICON_PATH, {
		name: a.SETTINGS_RAISE_HAND_OVERLAY_ICON_PATH_VALUE,
		hint: a.SETTINGS_RAISE_HAND_OVERLAY_ICON_PATH_HINT,
		scope: "world",
		config: !0,
		type: String,
		filePicker: "imagevideo",
		default: o("raised-hand"),
		onChange: l
	}), e.settings.register(t, i.RAISE_HAND_NUMBER_ANCHOR_X, {
		name: a.SETTINGS_RAISE_HAND_NUMBER_ANCHOR_X_VALUE,
		hint: a.SETTINGS_RAISE_HAND_NUMBER_ANCHOR_X_HINT,
		scope: "world",
		config: !0,
		default: .575,
		type: Number,
		range: {
			min: 0,
			max: 1,
			step: .005
		},
		onChange: l
	}), e.settings.register(t, i.RAISE_HAND_NUMBER_ANCHOR_Y, {
		name: a.SETTINGS_RAISE_HAND_NUMBER_ANCHOR_Y_VALUE,
		hint: a.SETTINGS_RAISE_HAND_NUMBER_ANCHOR_Y_HINT,
		scope: "world",
		config: !0,
		default: .73,
		type: Number,
		range: {
			min: 0,
			max: 1,
			step: .005
		},
		onChange: l
	}), e.settings.register(t, i.ALLOW_RAISE_HAND, {
		name: a.SETTINGS_RAISE_HAND_ALLOW_VALUE,
		hint: a.SETTINGS_RAISE_HAND_ALLOW_HINT,
		scope: "world",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.SHOW_RAISE_HAND_STATUS_IN_CHAT, {
		name: a.SETTINGS_RAISE_HAND_SHOW_STATUS_IN_CHAT_VALUE,
		hint: a.SETTINGS_RAISE_HAND_SHOW_STATUS_IN_CHAT_HINT,
		scope: "world",
		config: !0,
		default: !1,
		type: Boolean
	}), e.settings.register(t, i.SHOW_TOGGLE_RAISE_HAND_HUD, {
		name: a.SETTINGS_RAISE_HAND_SHOW_TOGGLE_BUTTON_VALUE,
		hint: a.SETTINGS_RAISE_HAND_SHOW_TOGGLE_BUTTON_HINT,
		scope: "client",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.ALLOW_TOKEN_IMAGE_WHEEL, {
		name: a.SETTINGS_TOKEN_IMAGE_WHEEL_ALLOW_VALUE,
		hint: a.SETTINGS_TOKEN_IMAGE_WHEEL_ALLOW_HINT,
		scope: "world",
		config: !0,
		default: !0,
		type: Boolean
	}), e.settings.register(t, i.TOKEN_IMAGE_WHEEL_TRANSITION, {
		name: a.SETTINGS_TOKEN_IMAGE_WHEEL_TRANSITION_VALUE,
		hint: a.SETTINGS_TOKEN_IMAGE_WHEEL_TRANSITION_HINT,
		scope: "client",
		config: !0,
		default: "fade",
		type: String,
		choices: {
			none: "None",
			fade: "Fade",
			crosshatch: "Crosshatch",
			dots: "Dots",
			glitch: "Glitch",
			hole: "Hole",
			holeSwirl: "Hole Swirl",
			hologram: "Hologram",
			morph: "Morph",
			swirl: "Swirl",
			waterDrop: "Water Drop",
			waves: "Waves",
			wind: "Wind",
			whiteNoise: "White Noise"
		}
	}), {
		get animationDuration() {
			return e.settings.get(t, i.ANIMATION_DURATION) * 1e3;
		},
		get afkOverlayIconPath() {
			return e.settings.get(t, i.AFK_OVERLAY_ICON_PATH);
		},
		get showMirrorButtonsHud() {
			return e.settings.get(t, i.SHOW_MIRROR_BUTTONS_HUD);
		},
		get allowAfkToggle() {
			return e.settings.get(t, i.ALLOW_AFK_TOGGLE);
		},
		get showAfkStatusInChat() {
			return e.settings.get(t, i.SHOW_AFK_STATUS_IN_CHAT);
		},
		get showToggleAfkHud() {
			return e.settings.get(t, i.SHOW_TOGGLE_AFK_HUD);
		},
		get allowSpeechBubbles() {
			return e.settings.get(t, i.ALLOW_SPEECH_BUBBLES);
		},
		get speechBubbleFontSize() {
			return e.settings.get(t, i.SPEECH_BUBBLE_FONT_SIZE);
		},
		get allowRaiseHand() {
			return e.settings.get(t, i.ALLOW_RAISE_HAND);
		},
		get showRaiseHandStatusInChat() {
			return e.settings.get(t, i.SHOW_RAISE_HAND_STATUS_IN_CHAT);
		},
		get showToggleRaiseHandHud() {
			return e.settings.get(t, i.SHOW_TOGGLE_RAISE_HAND_HUD);
		},
		get raiseHandOverlayIconPath() {
			return e.settings.get(t, i.RAISE_HAND_OVERLAY_ICON_PATH);
		},
		get raiseHandNumberAnchorX() {
			return e.settings.get(t, i.RAISE_HAND_NUMBER_ANCHOR_X);
		},
		get raiseHandNumberAnchorY() {
			return e.settings.get(t, i.RAISE_HAND_NUMBER_ANCHOR_Y);
		},
		get allowTokenImageWheel() {
			return e.settings.get(t, i.ALLOW_TOKEN_IMAGE_WHEEL);
		},
		get tokenImageWheelTransition() {
			return e.settings.get(t, i.TOKEN_IMAGE_WHEEL_TRANSITION);
		}
	};
}
//#endregion
//#region src/common/_components/hudButton.tsx
function d({ onClick: t, title: n, icon: r }) {
	return /* @__PURE__ */ e("button", {
		className: "control-icon",
		type: "button",
		onClick: t,
		"data-tooltip": n,
		children: /* @__PURE__ */ e("img", {
			src: r,
			width: 36,
			height: 36,
			alt: n
		})
	});
}
//#endregion
//#region src/common/_components/hudButtonGroup.tsx
function f(t) {
	return /* @__PURE__ */ e("div", {
		style: {
			display: "flex",
			gap: 8
		},
		children: t.buttons.map((n) => /* @__PURE__ */ e(d, {
			onClick: () => n.onClick(t.object),
			title: n.title,
			icon: n.icon
		}))
	});
}
//#endregion
//#region src/common/placeableHud.tsx
foundry.applications.hud;
var p = foundry.helpers.Hooks;
function m(e, t) {
	p.on(`render${e}`, (e, n) => {
		let r = e.object;
		if (r) for (let e of t) {
			let t = e.buttons.filter((e) => e.shouldShow?.(r) ?? !0);
			t.length !== 0 && n.querySelector(`div.${e.side}`)?.append(f({
				buttons: t,
				object: r
			}));
		}
	});
}
//#endregion
//#region src/tiles/index.ts
var h = foundry.helpers.Hooks, g = /* @__PURE__ */ function(e) {
	return e.HORIZONTAL = "tileMirrorHorizontal", e.VERTICAL = "tileMirrorVertical", e;
}({});
function ee() {
	h.on("canvasReady", () => {
		let e = game.canvas?.tiles?.tiles ?? [];
		for (let t of e) n(t);
	}), h.on("updateTile", (e) => {
		if (!(e._id && e.flags?.["fast-flip"])) return;
		let t = game.canvas?.tiles?.get(e._id);
		t && n(t);
	}), m("TileHUD", [{
		side: "left",
		buttons: [{
			title: a.TEXT_FLIP_TILE_HORIZONTAL_BUTTON,
			icon: o("mirror-horizontal"),
			onClick: () => void e(g.HORIZONTAL)
		}, {
			title: a.TEXT_FLIP_TILE_VERTICAL_BUTTON,
			icon: o("mirror-vertical"),
			onClick: () => void e(g.VERTICAL)
		}]
	}]), game?.keybindings?.register(t, "flipTile", {
		name: a.KEYBINDS_FLIP_TILE_HOTKEY,
		hint: a.KEYBINDS_FLIP_TILE_HINT,
		editable: [{ key: "KeyG" }],
		onDown: (t) => void e(t.isShift ? g.VERTICAL : g.HORIZONTAL),
		precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
		restricted: !0,
		reservedModifiers: ["SHIFT"],
		repeat: !1
	});
	async function e(e) {
		let n = game.canvas?.tiles?.controlled ?? [];
		for (let r of n) {
			let n = r.document.getFlag(t, e);
			await r.document.setFlag(t, e, !n);
		}
	}
	function n(e) {
		if (!e.texture) return;
		let n = e.document.getFlag(t, g.HORIZONTAL), r = e.document.getFlag(t, g.VERTICAL), i = n ? PIXI.groupD8.MIRROR_HORIZONTAL : 0, a = r ? PIXI.groupD8.MIRROR_VERTICAL : 0;
		e.texture.rotate = PIXI.groupD8.add(i, a), e.refresh();
	}
}
//#endregion
//#region src/tokens/capabilities/_components/afkOverlay.ts
var _ = PIXI.Container, v = class e extends _ {
	#e;
	#t;
	static NAME = "afk-overlay";
	#n = null;
	constructor(t, n) {
		super(), this.name = e.NAME, this.#e = t, this.#t = n, this.#t.addChild(this);
	}
	async show() {
		let e = this.#t, t = await foundry.canvas.loadTexture(this.#e.afkOverlayIconPath);
		if (!(t instanceof PIXI.Texture)) {
			console.error(`Failed to load texture: ${this.#e.afkOverlayIconPath}`);
			return;
		}
		this.#n && this.#n.destroy({ children: !0 }), this.#n = new PIXI.Sprite(t), this.#n.position = new PIXI.Point(0, 0), this.#n.anchor.set(.5);
		let { width: n, height: r } = e.bounds;
		this.#n.width = n * .8, this.#n.height = r * .8, this.#n.position.set(n / 2, r / 2), this.addChild(this.#n), this.renderable = !0;
	}
	hide() {
		this.renderable = !1, this.#n &&= (this.#n.destroy({ children: !0 }), null);
	}
}, y = foundry.helpers.Hooks, b = "afk-state";
function x(e) {
	return y.on("updateToken", async (e, t) => {
		if (!s(t, "afk-state")) return;
		let n = e.id ? game.canvas?.tokens?.get(e.id) : void 0;
		n && await c(n);
	}), y.on("drawToken", async (e) => {
		e && e.actor?.hasPlayerOwner && await c(e);
	}), {
		hudButtonGroups: [{
			side: "right",
			buttons: [{
				title: a.TEXT_AFK_TOGGLE_BUTTON,
				icon: o("toggle-afk"),
				onClick: () => void n(),
				shouldShow: (t) => e.allowAfkToggle && e.showToggleAfkHud && t.isOwner && (t.actor?.hasPlayerOwner ?? !1)
			}]
		}],
		keybinds: [{
			name: a.KEYBINDS_AFK_TOGGLE_HOTKEY,
			config: {
				name: a.KEYBINDS_AFK_TOGGLE_HOTKEY,
				hint: a.KEYBINDS_AFK_TOGGLE_HINT,
				editable: [{
					key: "KeyK",
					modifiers: ["SHIFT"]
				}],
				onDown: () => void n(),
				precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
				restricted: !1,
				reservedModifiers: [],
				repeat: !1
			}
		}]
	};
	async function n() {
		if (!e.allowAfkToggle) return;
		let t = game.canvas?.tokens?.controlled ?? [];
		for (let e of t) !e.isOwner || !e.actor?.hasPlayerOwner || (e.document.getFlag("fast-flip", "afk-state") ? await i(e) : await r(e));
	}
	async function r(n) {
		await n.document.setFlag(t, b, !0), e.showAfkStatusInChat && await foundry.documents.ChatMessage.create({
			style: CONST.CHAT_MESSAGE_STYLES.OOC,
			speaker: { token: n.id },
			content: game.i18n?.format(a.TEXT_AFK_CHAT_MESSAGE, { name: n.name })
		});
	}
	async function i(n) {
		await n.document.setFlag(t, b, !1), e.showAfkStatusInChat && await foundry.documents.ChatMessage.create({
			style: CONST.CHAT_MESSAGE_STYLES.OOC,
			speaker: { token: n.id },
			content: game.i18n?.format(a.TEXT_AFK_CHAT_RETURNED_MESSAGE, { name: n.name })
		});
	}
	async function c(t) {
		let n = t.getChildByName(v.NAME, !0) ?? new v(e, t);
		if (!t.document.getFlag("fast-flip", "afk-state")) {
			n.hide();
			return;
		}
		await n.show();
	}
}
//#endregion
//#region src/tokens/capabilities/_components/numberAnchorPreview.tsx
var S = `${t}-number-anchor-preview`, te = [
	i.RAISE_HAND_NUMBER_ANCHOR_X,
	i.RAISE_HAND_NUMBER_ANCHOR_Y,
	i.RAISE_HAND_OVERLAY_ICON_PATH
];
function C(e, n) {
	return e.querySelector(`[name="${t}.${n}"]`);
}
function w(e, t) {
	let n = C(e, t);
	return typeof n?.value == "string" || typeof n?.value == "number" ? String(n.value) : "";
}
function T(t) {
	let n = C(t, i.RAISE_HAND_NUMBER_ANCHOR_Y)?.closest(".form-group");
	if (!n || t.querySelector(`#${S}`)) return;
	let r = /* @__PURE__ */ e("img", {
		alt: "",
		style: {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			objectFit: "contain",
			border: "none"
		}
	}), o = /* @__PURE__ */ e("span", {
		style: {
			position: "absolute",
			transform: "translate(-50%, -50%)",
			fontFamily: "Signika, sans-serif",
			fontSize: 28,
			fontWeight: "bold",
			color: "#fff",
			textShadow: "0 0 2px #000, 0 0 2px #000, 0 0 4px #000"
		},
		children: "1"
	}), s = /* @__PURE__ */ e("div", {
		id: S,
		className: "form-group",
		children: [/* @__PURE__ */ e("label", { children: game.i18n?.localize(a.SETTINGS_RAISE_HAND_NUMBER_PREVIEW) }), /* @__PURE__ */ e("div", {
			className: "form-fields",
			children: /* @__PURE__ */ e("div", {
				style: {
					position: "relative",
					width: 128,
					height: 128,
					background: "#555",
					borderRadius: 4,
					flex: "0 0 auto"
				},
				children: [r, o]
			})
		})]
	});
	n.insertAdjacentElement("afterend", s);
	let c = () => {
		let e = Number.parseFloat(w(t, i.RAISE_HAND_NUMBER_ANCHOR_X)), n = Number.parseFloat(w(t, i.RAISE_HAND_NUMBER_ANCHOR_Y));
		o.style.left = `${(Number.isFinite(e) ? e : .5) * 100}%`, o.style.top = `${(Number.isFinite(n) ? n : .5) * 100}%`;
		let a = w(t, i.RAISE_HAND_OVERLAY_ICON_PATH);
		a && r.getAttribute("src") !== a && (r.src = a);
	};
	c();
	for (let e of te) {
		let n = C(t, e);
		n?.addEventListener("input", c), n?.addEventListener("change", c);
	}
}
//#endregion
//#region src/tokens/capabilities/_components/raiseHandOverlay.ts
var E = PIXI.Container, D = foundry.canvas.containers.PreciseText, O = foundry.canvas.rendering.filters.GlowOverlayFilter, k = 16766720, A = 16777215;
function j(e) {
	let [t, n, r] = foundry.utils.Color.from(e).rgb, i = .299 * t + .587 * n + .114 * r, a = (e) => (e + (i - e) * .65) * .85;
	return foundry.utils.Color.fromRGB([
		a(t),
		a(n),
		a(r)
	]).valueOf();
}
var M = O ? class e extends O {
	static #e = 4e3;
	apply(t, n, r, i) {
		let a = game.canvas, o = a?.stage?.worldTransform.d ?? 1;
		if (this.animated && !a?.photosensitiveMode) {
			let t = a?.app?.ticker.lastTime ?? 0, n = 2 * Math.PI * t / e.#e;
			o *= .825 + .175 * Math.sin(n);
		}
		this.uniforms.outerStrength = this.outerStrength * o, this.uniforms.innerStrength = this.innerStrength * o, t.applyFilter(this, n, r, i);
	}
} : null, N = class e extends E {
	#e;
	#t;
	static NAME = "raise-hand-overlay";
	#n = null;
	#r = null;
	constructor(t, n) {
		super(), this.name = e.NAME, this.#e = t, this.#t = n, this.#t.addChild(this);
	}
	async show(e, t, n) {
		let r = this.#t, i = await foundry.canvas.loadTexture(this.#e.raiseHandOverlayIconPath);
		if (!(i instanceof PIXI.Texture)) {
			console.error(`Failed to load texture: ${this.#e.raiseHandOverlayIconPath}`);
			return;
		}
		this.#i();
		let a = t ? .8 : .55;
		this.alpha = 1;
		let { width: o, height: s } = r.bounds, c = o / 2, l = s / 2, u = o * a, d = s * a;
		this.#n = new PIXI.Sprite(i), this.#n.anchor.set(.5), this.#n.width = u, this.#n.height = d, this.#n.position.set(c, l);
		let f = n?.valueOf() ?? (t ? k : A);
		if (this.#n.tint = t ? f : j(f), t && M) {
			let [e, t, r] = n?.rgb ?? [
				1,
				.84,
				0
			], i = M.create({
				glowColor: [
					e,
					t,
					r,
					1
				],
				knockout: !1
			});
			i.innerStrength = 0, i.outerStrength = 3.5, i.padding = 32, this.#n.filters = [i];
		}
		this.addChild(this.#n);
		let p = D.getTextStyle({ fontSize: Math.max(20, d * .3) });
		this.#r = new D(String(e), p), this.#r.anchor.set(.5), this.#r.position.set(c + (this.#e.raiseHandNumberAnchorX - .5) * u, l + (this.#e.raiseHandNumberAnchorY - .5) * d), this.addChild(this.#r), this.renderable = !0;
	}
	hide() {
		this.renderable = !1, this.#i();
	}
	#i() {
		this.#n &&= (this.#n.destroy({ children: !0 }), null), this.#r &&= (this.#r.destroy({ children: !0 }), null);
	}
}, P = foundry.helpers.Hooks, F = "hand-raised-at", I = "hand-raised-by";
function L(e) {
	return P.on("updateToken", (e, t) => {
		s(t, "hand-raised-at") && p();
	}), P.on("drawToken", async (e) => {
		e && await m(e);
	}), P.on(r, () => {
		p();
	}), P.on("updateUser", (e, t) => {
		"color" in t && p();
	}), P.on("renderSettingsConfig", (e, t) => {
		T(t);
	}), P.on("preCreateToken", (e) => {
		typeof e.getFlag("fast-flip", "hand-raised-at") == "number" && e.updateSource({ flags: { [t]: deleteHandFlags() } });
	}), P.on("deleteToken", (e) => {
		typeof e.getFlag("fast-flip", "hand-raised-at") == "number" && p();
	}), {
		hudButtonGroups: [{
			side: "right",
			buttons: [{
				title: a.TEXT_RAISE_HAND_TOGGLE_BUTTON,
				icon: o("toggle-raise-hand"),
				onClick: () => void n(),
				shouldShow: (t) => e.allowRaiseHand && e.showToggleRaiseHandHud && t.isOwner && (t.actor?.hasPlayerOwner ?? !1)
			}]
		}],
		keybinds: [{
			name: "toggleRaiseHand",
			config: {
				name: a.KEYBINDS_RAISE_HAND_TOGGLE_HOTKEY,
				hint: a.KEYBINDS_RAISE_HAND_TOGGLE_HINT,
				editable: [{
					key: "KeyH",
					modifiers: ["SHIFT"]
				}],
				onDown: () => void n(),
				precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
				restricted: !1,
				reservedModifiers: [],
				repeat: !1
			}
		}, {
			name: "lowerAllHands",
			config: {
				name: a.KEYBINDS_LOWER_ALL_HANDS_HOTKEY,
				hint: a.KEYBINDS_LOWER_ALL_HANDS_HINT,
				editable: [{
					key: "KeyH",
					modifiers: ["SHIFT", "ALT"]
				}],
				onDown: () => void i(),
				precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
				restricted: !0,
				reservedModifiers: [],
				repeat: !1
			}
		}]
	};
	async function n() {
		if (!e.allowRaiseHand) return;
		let t = game.canvas?.tokens?.controlled ?? [];
		for (let e of t) !e.isOwner || !e.actor?.hasPlayerOwner || (typeof e.document.getFlag("fast-flip", "hand-raised-at") == "number" ? await d(e) : await u(e));
	}
	async function i() {
		if (!game.user?.isGM) return;
		let e = game.canvas?.tokens?.placeables ?? [];
		for (let t of e) typeof t.document.getFlag("fast-flip", "hand-raised-at") == "number" && await l(t);
	}
	async function l(e) {
		await e.document.update({ flags: { [t]: deleteHandFlags() } });
	}
	async function u(n) {
		await n.document.update({ flags: { [t]: {
			[F]: game.time?.serverTime ?? Date.now(),
			[I]: game.user?.id ?? ""
		} } }), e.showRaiseHandStatusInChat && await foundry.documents.ChatMessage.create({
			style: CONST.CHAT_MESSAGE_STYLES.OOC,
			speaker: { token: n.id },
			content: game.i18n?.format(a.TEXT_RAISE_HAND_CHAT_MESSAGE, { name: n.name })
		});
	}
	async function d(t) {
		await l(t), e.showRaiseHandStatusInChat && await foundry.documents.ChatMessage.create({
			style: CONST.CHAT_MESSAGE_STYLES.OOC,
			speaker: { token: t.id },
			content: game.i18n?.format(a.TEXT_RAISE_HAND_CHAT_LOWERED_MESSAGE, { name: t.name })
		});
	}
	function f() {
		let e = (game.canvas?.tokens?.placeables ?? []).map((e) => ({
			id: e.id,
			raisedAt: e.document.getFlag(t, F)
		})).filter((e) => typeof e.raisedAt == "number" && e.id !== null).sort((e, t) => e.raisedAt - t.raisedAt || e.id.localeCompare(t.id));
		return new Map(e.map(({ id: e }, t) => [e, t + 1]));
	}
	async function p() {
		let e = f(), t = game.canvas?.tokens?.placeables ?? [];
		for (let n of t) await h(n, e.get(n.id ?? ""));
	}
	async function m(e) {
		await h(e, f().get(e.id ?? ""));
	}
	async function h(n, r) {
		let i = n.getChildByName(N.NAME, !0) ?? new N(e, n);
		if (r === void 0) {
			i.hide();
			return;
		}
		let a = n.document.getFlag(t, I), o = a ? game.users?.get(a)?.color ?? null : null;
		await i.show(r, r === 1, o);
	}
}
//#endregion
//#region src/common/keyboard.ts
var R = foundry.helpers.interaction.KeyboardManager;
function z(e) {
	let t = /* @__PURE__ */ new Set();
	if (!e) return t;
	for (let n of e) {
		if (R.MODIFIER_CODES.Alt.indexOf(n) >= 0) {
			t.add(R.MODIFIER_KEYS.ALT);
			continue;
		}
		if (R.MODIFIER_CODES.Control.indexOf(n) >= 0) {
			t.add(R.MODIFIER_KEYS.CONTROL);
			continue;
		}
		if (R.MODIFIER_CODES.Shift.indexOf(n) >= 0) {
			t.add(R.MODIFIER_KEYS.SHIFT);
			continue;
		}
		t.add(n);
	}
	return t;
}
//#endregion
//#region src/tokens/capabilities/_components/speechBubble.tsx
function B({ id: t, fontSize: n, left: r, text: i }) {
	return /* @__PURE__ */ e("div", {
		className: "chat-bubble right",
		style: {
			display: "block",
			opacity: 0,
			left: r,
			fontSize: n
		},
		"data-bubble-id": t,
		children: /* @__PURE__ */ e("div", {
			className: "bubble-content",
			style: {
				width: "max-content",
				whiteSpace: "nowrap"
			},
			children: i
		})
	});
}
//#endregion
//#region src/tokens/messages.ts
var V = /* @__PURE__ */ function(e) {
	return e[e.ShowSpeechBubble = 0] = "ShowSpeechBubble", e[e.HideSpeechBubble = 1] = "HideSpeechBubble", e;
}({});
//#endregion
//#region src/tokens/capabilities/speechBubbles.tsx
function H(n) {
	let r, i = null, o, s, c = () => {
		r !== void 0 && (clearInterval(r), r = void 0);
	};
	return game.socket?.on(`module.${t}`, async (e) => {
		if (!game.canvas || game.canvas.scene?.id !== e.sceneID) return;
		let t = game.canvas?.tokens?.get(e.tokenID);
		if (t) switch (e.type) {
			case V.ShowSpeechBubble:
				await d(t);
				return;
			case V.HideSpeechBubble:
				await f(t);
				return;
		}
	}), {
		hudButtonGroups: [],
		keybinds: [{
			name: "showSpeechBubble",
			config: {
				name: a.KEYBINDS_SHOW_SPEECH_BUBBLE_HOTKEY,
				hint: a.KEYBINDS_SHOW_SPEECH_BUBBLE_HINT,
				editable: [{ key: "KeyB" }],
				onDown: () => void l(),
				onUp: () => void u(),
				precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
				restricted: !1,
				reservedModifiers: [],
				repeat: !1
			}
		}]
	};
	async function l() {
		if (!n.allowSpeechBubbles || (o = game.canvas?.tokens?.controlled?.[0], !o?.isOwner)) return;
		s = game.canvas?.scene?.id ?? void 0;
		let e = o?.id;
		e && s && (game.socket?.emit(`module.${t}`, {
			type: V.ShowSpeechBubble,
			tokenID: e,
			sceneID: s
		}), c(), r = setInterval(() => {
			let [e] = game.keybindings?.bindings?.get("fast-flip.showSpeechBubble") ?? [], t = e ? [e.key, ...e.modifiers ?? []] : [], n = new Set(t), r = z(game.keyboard?.downKeys);
			[...n].every(key => r.has(key)) || (c(), u());
		}, 250), await d(o));
	}
	async function u() {
		c();
		let e = o, n = s;
		o = void 0, s = void 0, e?.isOwner && n && e.id && (game.socket?.emit(`module.${t}`, {
			type: V.HideSpeechBubble,
			sceneID: n,
			tokenID: e.id
		}), await f(e));
	}
	async function d(t) {
		i ??= document.getElementById("chat-bubbles");
		let r = t.id;
		if (!r || (document.querySelector(`.chat-bubble[data-bubble-id="${r}"]`)?.remove(), !i)) return;
		let a = i.appendChild(/* @__PURE__ */ e(B, {
			id: r,
			fontSize: `${n.speechBubbleFontSize}px`,
			left: t.x,
			text: t.name
		}));
		a.style.top = `${t.y - a.offsetHeight - 12}px`, await a.animate([{ opacity: 0 }, { opacity: 1 }], {
			duration: 250,
			fill: "forwards"
		}).finished;
	}
	async function f(e) {
		let t = document.querySelector(`.chat-bubble[data-bubble-id="${e.id}"]`);
		t && (await t.animate([{ opacity: 1 }, { opacity: 0 }], {
			duration: 100,
			fill: "forwards"
		}).finished, t.remove());
	}
}
//#endregion
//#region src/tokens/capabilities/tokenFlipping.ts
var U = /* @__PURE__ */ function(e) {
	return e.HORIZONTAL = "scaleX", e.VERTICAL = "scaleY", e;
}({}), W = "is-flipping";
function G(e) {
	return {
		hudButtonGroups: [{
			side: "left",
			buttons: [{
				title: a.TEXT_FLIP_TOKEN_HORIZONTAL_BUTTON,
				icon: o("mirror-horizontal"),
				onClick: () => n(U.HORIZONTAL),
				shouldShow: (t) => e.showMirrorButtonsHud && t.isOwner
			}, {
				title: a.TEXT_FLIP_TOKEN_VERTICAL_BUTTON,
				icon: o("mirror-vertical"),
				onClick: () => n(U.VERTICAL),
				shouldShow: (t) => e.showMirrorButtonsHud && t.isOwner
			}]
		}],
		keybinds: [{
			name: "flipToken",
			config: {
				name: a.KEYBINDS_FLIP_TOKEN_HOTKEY,
				hint: a.KEYBINDS_FLIP_TOKEN_HINT,
				editable: [{ key: "KeyG" }],
				onDown: (e) => n(e.isShift ? U.VERTICAL : U.HORIZONTAL),
				precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
				restricted: !1,
				reservedModifiers: ["SHIFT"],
				repeat: !1
			}
		}]
	};
	function n(n) {
		let r = game.canvas?.tokens?.controlled ?? [];
		for (let i of r) i.isOwner && (async () => {
			if (!i.document.getFlag("fast-flip", "is-flipping")) {
				await i.document.setFlag(t, W, !0);
				try {
					let t = i.document._source.texture?.[n];
					if (t === void 0) {
						console.warn("Fast Flip! Token Tools | Unable to retrieve the token's current scale, aborting animation.");
						return;
					}
					let r = -t, a = e.animationDuration;
					await i.document.update({ [`texture.${n}`]: r }, {
						animate: a !== 0,
						animation: { duration: a }
					});
					let o = i.animationName;
					await i.animationContexts?.get(o)?.promise;
				} finally {
					await i.document.unsetFlag(t, W);
				}
			}
		})().catch((e) => console.error("Fast Flip! Token Tools | Failed to flip token.", e));
	}
}
//#endregion
//#region src/tokens/capabilities/_components/imageWheel.tsx
var K = foundry.helpers.media.VideoHelper, q = 64, J = 70, Y = 8, X = (e, t) => decodeURIComponent(e) === decodeURIComponent(t), Z = (e, t) => `${(e * Math.cos(t)).toFixed(2)},${(e * Math.sin(t)).toFixed(2)}`;
function ne(e, t, n, r) {
	return `
		M ${Z(e, n)} A ${e} ${e} 0 0 1 ${Z(e, r)}
		L ${Z(t, r)}
		A ${t} ${t} 0 0 0 ${Z(t, n)}
		Z
	`;
}
function re(t) {
	return K.hasVideoExtension(t) ? /* @__PURE__ */ e("video", {
		className: "fast-flip-image-wheel__thumb",
		src: t,
		autoPlay: !0,
		muted: !0,
		loop: !0,
		playsInline: !0
	}) : /* @__PURE__ */ e("div", {
		className: "fast-flip-image-wheel__thumb",
		style: { backgroundImage: `url("${t}")` }
	});
}
function ie() {
	return /* @__PURE__ */ e("div", {
		className: "fast-flip-image-wheel",
		role: "listbox"
	});
}
function ae(t, { images: n, currentSrc: r, cx: i, cy: a, tokenRadius: o, onHover: s }) {
	let c = n.slice(0, 24);
	n.length > 24 && console.warn(`Fast Flip! Token Tools | Token has ${n.length} wildcard images; only the first 24 are shown.`);
	let l = 2 * Math.PI / c.length, u = q * Math.max(1, o / J), d = u * .2, f = u * 1.6, p = Math.max(o + Y + f / 2, (u + d) / (2 * Math.sin(Math.PI / c.length))), m = p - f / 2, h = p + f / 2, g = c.map((t, n) => {
		let i = -Math.PI / 2 + n * l, a = X(t, r), o = p * Math.cos(i), c = p * Math.sin(i);
		return /* @__PURE__ */ e("g", {
			className: ["fast-flip-image-wheel__slice", { "fast-flip-image-wheel__slice--current": a }],
			role: "option",
			"aria-selected": a,
			onMouseEnter: () => s(t),
			onMouseLeave: () => s(void 0),
			children: [/* @__PURE__ */ e("path", {
				className: "fast-flip-image-wheel__slice-bg",
				d: ne(m, h, i - l / 2, i + l / 2)
			}), /* @__PURE__ */ e("foreignObject", {
				x: o - u / 2,
				y: c - u / 2,
				width: u,
				height: u,
				children: re(t)
			})]
		});
	});
	t.appendChild(/* @__PURE__ */ e("svg", {
		className: "fast-flip-image-wheel__ring",
		width: h * 2,
		height: h * 2,
		viewBox: `${-h} ${-h} ${h * 2} ${h * 2}`,
		style: {
			left: i - h,
			top: a - h
		},
		children: g
	}));
}
//#endregion
//#region src/tokens/capabilities/wildcardImages.tsx
var Q = foundry.helpers.Hooks;
foundry.canvas.rendering.filters.TextureTransitionFilter;
var $ = "pickTokenImage";
function oe(e) {
	let t = null, n, r, i, o = !1, s = 0, c = () => {
		i !== void 0 && (clearInterval(i), i = void 0);
	}, l = (e) => {
		e.key === "Escape" && m(!1);
	}, u = () => {
		m(!1);
	}, d = () => {
		m(!1);
	}, f = (e) => {
		if (!e.repeat) return;
		let [t] = game.keybindings?.bindings?.get(`fast-flip.${$}`) ?? [];
		t && e.code === t.key && (o = !0, s = Date.now());
	};
	return {
		hudButtonGroups: [],
		keybinds: [{
			name: $,
			config: {
				name: a.KEYBINDS_PICK_TOKEN_IMAGE_HOTKEY,
				hint: a.KEYBINDS_PICK_TOKEN_IMAGE_HINT,
				editable: [{ key: "KeyI" }],
				onDown: () => void p(),
				onUp: (e) => m(e?.event?.isTrusted ?? !0),
				precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
				restricted: !1,
				reservedModifiers: [],
				repeat: !1
			}
		}]
	};
	async function p() {
		if (!e.allowTokenImageWheel || t) return;
		let a = game.canvas?.tokens?.controlled?.[0];
		if (!a?.isOwner || !a.actor) return;
		let p = document.getElementById("hud");
		if (!p) return;
		let h = ie();
		p.appendChild(h), t = h, n = a, r = void 0, o = !1, document.addEventListener("keydown", l), window.addEventListener("keydown", f, !0), window.addEventListener("blur", d), Q.once("canvasTearDown", u), c(), i = setInterval(() => {
			if (o && Date.now() - s > 1500) {
				m(!1);
				return;
			}
			let [e] = game.keybindings?.bindings?.get(`fast-flip.${$}`) ?? [], t = e ? [e.key, ...e.modifiers ?? []] : [], n = new Set(t), r = z(game.keyboard?.downKeys);
			[...n].every(key => r.has(key)) || m(!0);
		}, 250);
		let g = await a.actor.getTokenImages().catch(() => []);
		if (h.isConnected) {
			if (g.length <= 1) {
				m(!1);
				return;
			}
			ae(h, {
				images: g,
				currentSrc: a.document.texture.src ?? "",
				cx: a.center.x,
				cy: a.center.y,
				tokenRadius: Math.hypot(a.w, a.h) / 2,
				onHover: (e) => {
					r = e;
				}
			});
		}
	}
	function m(e) {
		c(), document.removeEventListener("keydown", l), window.removeEventListener("keydown", f, !0), window.removeEventListener("blur", d), Q.off("canvasTearDown", u);
		let i = n, a = r;
		t?.remove(), t = null, n = void 0, r = void 0, !(!e || !a || !i?.isOwner || a === i.document.texture.src) && h(i, a).catch((e) => console.error("Fast Flip! Token Tools | Failed to change token image.", e));
	}
	async function h(t, n) {
		let r = e.tokenImageWheelTransition;
		if (r === "none") {
			await t.document.update({ texture: { src: n } }, { animate: !1 });
			return;
		}
		await t.document.update({ texture: { src: n } }, { animation: {
			transition: r,
			duration: 500
		} });
	}
}
//#endregion
//#region src/tokens/index.ts
function se(e) {
	ce(G(e), x(e), H(e), L(e), oe(e));
}
function ce(...e) {
	let n = [];
	for (let r of e) {
		for (let e of r.keybinds ?? []) game?.keybindings?.register(t, e.name, e.config);
		n.push(...r.hudButtonGroups);
	}
	m("TokenHUD", n);
}
//#endregion
//#region src/module.ts
foundry.helpers.Hooks.once("init", async () => {
	if (!(game instanceof foundry.Game)) {
		console.error("Game was not initialized, Fast Flip! Token Tools will not be functional.");
		return;
	}
	let e = u(game);
	ee(), se(e);
});
//#endregion

