//#region node_modules/.pnpm/jsx-dom@8.1.6/node_modules/jsx-dom/index.js
var e = Object.keys;
function t(e) {
	return typeof e == "boolean";
}
function n(e) {
	return e && typeof e.nodeType == "number";
}
function r(e) {
	return typeof e == "string";
}
function i(e) {
	return typeof e == "number";
}
function a(e) {
	return typeof e == "object" ? e !== null : o(e);
}
function o(e) {
	return typeof e == "function";
}
function s(e) {
	return !!(e && e.isComponent);
}
function c(e) {
	return a(e) && typeof e.length == "number" && typeof e.nodeType != "number";
}
function l(t, n) {
	if (t) for (let r of e(t)) n(t[r], r);
}
function u(e) {
	return a(e) && "current" in e;
}
var d = {
	animationIterationCount: 0,
	borderImageOutset: 0,
	borderImageSlice: 0,
	borderImageWidth: 0,
	boxFlex: 0,
	boxFlexGroup: 0,
	boxOrdinalGroup: 0,
	columnCount: 0,
	columns: 0,
	flex: 0,
	flexGrow: 0,
	flexPositive: 0,
	flexShrink: 0,
	flexNegative: 0,
	flexOrder: 0,
	gridArea: 0,
	gridRow: 0,
	gridRowEnd: 0,
	gridRowSpan: 0,
	gridRowStart: 0,
	gridColumn: 0,
	gridColumnEnd: 0,
	gridColumnSpan: 0,
	gridColumnStart: 0,
	fontWeight: 0,
	lineClamp: 0,
	lineHeight: 0,
	opacity: 0,
	order: 0,
	orphans: 0,
	tabSize: 0,
	widows: 0,
	zIndex: 0,
	zoom: 0,
	fillOpacity: 0,
	floodOpacity: 0,
	stopOpacity: 0,
	strokeDasharray: 0,
	strokeDashoffset: 0,
	strokeMiterlimit: 0,
	strokeOpacity: 0,
	strokeWidth: 0
};
function f(e, t) {
	return e + t.charAt(0).toUpperCase() + t.substring(1);
}
var p = [
	"Webkit",
	"ms",
	"Moz",
	"O"
];
e(d).forEach((e) => {
	p.forEach((t) => {
		d[f(t, e)] = 0;
	});
});
var m = Symbol.for("jsx-dom:type"), h = /* @__PURE__ */ (function(e) {
	return e.ShadowRoot = "ShadowRoot", e;
})(h || {});
function g(e) {
	return e != null && e[m] === h.ShadowRoot;
}
var _ = "http://www.w3.org/2000/svg", v = "http://www.w3.org/1999/xlink", y = "http://www.w3.org/XML/1998/namespace";
function b(e) {
	return !t(e) && e != null;
}
function x(t) {
	return Array.isArray(t) ? t.map(x).filter(Boolean).join(" ") : a(t) ? Symbol.iterator in t ? x(Array.from(t)) : e(t).filter((e) => t[e]).join(" ") : b(t) ? "" + t : "";
}
var S = {
	animate: 0,
	circle: 0,
	clipPath: 0,
	defs: 0,
	desc: 0,
	ellipse: 0,
	feBlend: 0,
	feColorMatrix: 0,
	feComponentTransfer: 0,
	feComposite: 0,
	feConvolveMatrix: 0,
	feDiffuseLighting: 0,
	feDisplacementMap: 0,
	feDistantLight: 0,
	feFlood: 0,
	feFuncA: 0,
	feFuncB: 0,
	feFuncG: 0,
	feFuncR: 0,
	feGaussianBlur: 0,
	feImage: 0,
	feMerge: 0,
	feMergeNode: 0,
	feMorphology: 0,
	feOffset: 0,
	fePointLight: 0,
	feSpecularLighting: 0,
	feSpotLight: 0,
	feTile: 0,
	feTurbulence: 0,
	filter: 0,
	foreignObject: 0,
	g: 0,
	image: 0,
	line: 0,
	linearGradient: 0,
	marker: 0,
	mask: 0,
	metadata: 0,
	path: 0,
	pattern: 0,
	polygon: 0,
	polyline: 0,
	radialGradient: 0,
	rect: 0,
	stop: 0,
	svg: 0,
	switch: 0,
	symbol: 0,
	text: 0,
	textPath: 0,
	tspan: 0,
	use: 0,
	view: 0
}, C = /^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;
function w(e, t, n) {
	t = {
		...t,
		children: n
	};
	let r = new e(t), i = r.render();
	return "ref" in t && E(t.ref, r), i;
}
function T(e, t) {
	let { children: n, ...i } = t;
	!i.namespaceURI && S[e] === 0 && (i = {
		...i,
		namespaceURI: _
	});
	let c;
	if (r(e)) {
		if (c = i.namespaceURI ? document.createElementNS(i.namespaceURI, e) : document.createElement(e), F(i, c), D(n, c), c instanceof window.HTMLSelectElement && i.value != null) if (i.multiple === !0 && Array.isArray(i.value)) {
			let e = i.value.map((e) => String(e));
			c.querySelectorAll("option").forEach((t) => t.selected = e.includes(t.value));
		} else c.value = i.value;
		E(i.ref, c);
	} else if (o(e)) a(e.defaultProps) && (i = {
		...e.defaultProps,
		...i
	}), c = s(e) ? w(e, i, n) : e({
		...i,
		children: n
	});
	else throw TypeError(`Invalid JSX element type: ${e}`);
	return c;
}
function E(e, t) {
	u(e) ? e.current = t : o(e) && e(t);
}
function D(e, t) {
	if (c(e)) O(e, t);
	else if (r(e) || i(e)) k(document.createTextNode(e), t);
	else if (e === null) k(document.createComment(""), t);
	else if (n(e)) k(e, t);
	else if (g(e)) {
		let n = t.attachShadow(e.attr);
		D(e.children, n), E(e.ref, n);
	}
}
function O(e, t) {
	for (let n of [...e]) D(n, t);
	return t;
}
function k(e, t) {
	t instanceof window.HTMLTemplateElement ? t.content.appendChild(e) : t.appendChild(e);
}
function A(e, t) {
	return e.replace(/[A-Z]/g, (e) => t + e.toLowerCase());
}
function j(e, t) {
	t == null || t === !1 || (Array.isArray(t) ? t.forEach((t) => j(e, t)) : r(t) ? e.setAttribute("style", t) : a(t) && l(t, (t, n) => {
		n.indexOf("-") === 0 ? e.style.setProperty(n, t) : i(t) && d[n] !== 0 ? e.style[n] = t + "px" : e.style[n] = t;
	}));
}
function M(e, t, n) {
	switch (e) {
		case "xlinkActuate":
		case "xlinkArcrole":
		case "xlinkHref":
		case "xlinkRole":
		case "xlinkShow":
		case "xlinkTitle":
		case "xlinkType":
			P(n, v, A(e, ":"), t);
			return;
		case "xmlnsXlink":
			N(n, A(e, ":"), t);
			return;
		case "xmlBase":
		case "xmlLang":
		case "xmlSpace":
			P(n, y, A(e, ":"), t);
			return;
	}
	switch (e) {
		case "htmlFor":
			N(n, "for", t);
			return;
		case "dataset":
			l(t, (e, t) => {
				e != null && (n.dataset[t] = e);
			});
			return;
		case "innerHTML":
		case "innerText":
		case "textContent":
			b(t) && (n[e] = t);
			return;
		case "dangerouslySetInnerHTML":
			a(t) && (n.innerHTML = t.__html);
			return;
		case "value":
			if (t == null || n instanceof window.HTMLSelectElement) return;
			if (n instanceof window.HTMLTextAreaElement) {
				n.value = t;
				return;
			}
			break;
		case "spellCheck":
			n.spellcheck = t;
			return;
		case "class":
		case "className":
			o(t) ? t(n) : N(n, "class", x(t));
			return;
		case "ref":
		case "namespaceURI": return;
		case "style":
			j(n, t);
			return;
		case "on":
		case "onCapture":
			l(t, (t, r) => {
				n.addEventListener(r, t, e === "onCapture");
			});
			return;
	}
	if (o(t)) {
		if (e[0] === "o" && e[1] === "n") {
			let r = e.toLowerCase(), i = r.endsWith("capture");
			if (r === "ondoubleclick" ? r = "ondblclick" : i && r === "ondoubleclickcapture" && (r = "ondblclickcapture"), !i && n[r] === null) n[r] = t;
			else if (i) n.addEventListener(r.substring(2, r.length - 7), t, !0);
			else {
				let i;
				i = r in window ? r.substring(2) : r[2] + e.slice(3), n.addEventListener(i, t);
			}
		}
	} else a(t) ? n[e] = t : t === !0 ? N(n, e, "") : t !== !1 && t != null && (n instanceof SVGElement && !C.test(e) ? N(n, A(e, "-"), t) : N(n, e, t));
}
function N(e, t, n) {
	e.setAttribute(t, n);
}
function P(e, t, n, r) {
	e.setAttributeNS(t, n, r);
}
function F(t, n) {
	for (let r of e(t)) M(r, t[r], n);
	return n;
}
//#endregion
export { T as t };

