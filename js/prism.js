! function(e) { var t = {};

    function n(a) { if (t[a]) return t[a].exports; var r = t[a] = { i: a, l: !1, exports: {} }; return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
    n.m = e, n.c = t, n.d = function(e, t, a) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var a = Object.create(null); if (n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(a, r, function(t) { return e[t] }.bind(null, r)); return a }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/", n(n.s = 2) }({ 2: function(e, t, n) { e.exports = n("PNgh") }, PNgh: function(e, t, n) {
        (function(t) { var n = function(e) { var t = /\blang(?:uage)?-([\w-]+)\b/i,
                    n = 0,
                    a = { manual: e.Prism && e.Prism.manual, disableWorkerMessageHandler: e.Prism && e.Prism.disableWorkerMessageHandler, util: { encode: function e(t) { return t instanceof r ? new r(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ") }, type: function(e) { return Object.prototype.toString.call(e).slice(8, -1) }, objId: function(e) { return e.__id || Object.defineProperty(e, "__id", { value: ++n }), e.__id }, clone: function e(t, n) { var r, i, s = a.util.type(t); switch (n = n || {}, s) {
                                    case "Object":
                                        if (i = a.util.objId(t), n[i]) return n[i]; for (var o in r = {}, n[i] = r, t) t.hasOwnProperty(o) && (r[o] = e(t[o], n)); return r;
                                    case "Array":
                                        return i = a.util.objId(t), n[i] ? n[i] : (r = [], n[i] = r, t.forEach((function(t, a) { r[a] = e(t, n) })), r);
                                    default:
                                        return t } }, getLanguage: function(e) { for (; e && !t.test(e.className);) e = e.parentElement; return e ? (e.className.match(t) || [, "none"])[1].toLowerCase() : "none" }, currentScript: function() { if ("undefined" == typeof document) return null; if ("currentScript" in document) return document.currentScript; try { throw new Error } catch (a) { var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack) || [])[1]; if (e) { var t = document.getElementsByTagName("script"); for (var n in t)
                                            if (t[n].src == e) return t[n] } return null } } }, languages: { extend: function(e, t) { var n = a.util.clone(a.languages[e]); for (var r in t) n[r] = t[r]; return n }, insertBefore: function(e, t, n, r) { var i = (r = r || a.languages)[e],
                                    s = {}; for (var o in i)
                                    if (i.hasOwnProperty(o)) { if (o == t)
                                            for (var l in n) n.hasOwnProperty(l) && (s[l] = n[l]);
                                        n.hasOwnProperty(o) || (s[o] = i[o]) }
                                var u = r[e]; return r[e] = s, a.languages.DFS(a.languages, (function(t, n) { n === u && t != e && (this[t] = s) })), s }, DFS: function e(t, n, r, i) { i = i || {}; var s = a.util.objId; for (var o in t)
                                    if (t.hasOwnProperty(o)) { n.call(t, o, t[o], r || o); var l = t[o],
                                            u = a.util.type(l); "Object" !== u || i[s(l)] ? "Array" !== u || i[s(l)] || (i[s(l)] = !0, e(l, n, o, i)) : (i[s(l)] = !0, e(l, n, null, i)) } } }, plugins: {}, highlightAll: function(e, t) { a.highlightAllUnder(document, e, t) }, highlightAllUnder: function(e, t, n) { var r = { callback: n, container: e, selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code' };
                            a.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), a.hooks.run("before-all-elements-highlight", r); for (var i, s = 0; i = r.elements[s++];) a.highlightElement(i, !0 === t, r.callback) }, highlightElement: function(n, r, i) { var s = a.util.getLanguage(n),
                                o = a.languages[s];
                            n.className = n.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s; var l = n.parentNode;
                            l && "pre" === l.nodeName.toLowerCase() && (l.className = l.className.replace(t, "").replace(/\s+/g, " ") + " language-" + s); var u = { element: n, language: s, grammar: o, code: n.textContent };

                            function c(e) { u.highlightedCode = e, a.hooks.run("before-insert", u), u.element.innerHTML = u.highlightedCode, a.hooks.run("after-highlight", u), a.hooks.run("complete", u), i && i.call(u.element) } if (a.hooks.run("before-sanity-check", u), !u.code) return a.hooks.run("complete", u), void(i && i.call(u.element)); if (a.hooks.run("before-highlight", u), u.grammar)
                                if (r && e.Worker) { var p = new Worker(a.filename);
                                    p.onmessage = function(e) { c(e.data) }, p.postMessage(JSON.stringify({ language: u.language, code: u.code, immediateClose: !0 })) } else c(a.highlight(u.code, u.grammar, u.language));
                            else c(a.util.encode(u.code)) }, highlight: function(e, t, n) { var i = { code: e, grammar: t, language: n }; return a.hooks.run("before-tokenize", i), i.tokens = a.tokenize(i.code, i.grammar), a.hooks.run("after-tokenize", i), r.stringify(a.util.encode(i.tokens), i.language) }, tokenize: function(e, t) { var n = t.rest; if (n) { for (var l in n) t[l] = n[l];
                                delete t.rest } var u = new i; return s(u, u.head, e),
                                function e(t, n, i, l, u, c, p) { for (var g in i)
                                        if (i.hasOwnProperty(g) && i[g]) { var d = i[g];
                                            d = Array.isArray(d) ? d : [d]; for (var f = 0; f < d.length; ++f) { if (p && p == g + "," + f) return; var h = d[f],
                                                    m = h.inside,
                                                    b = !!h.lookbehind,
                                                    v = !!h.greedy,
                                                    S = 0,
                                                    y = h.alias; if (v && !h.pattern.global) { var A = h.pattern.toString().match(/[imsuy]*$/)[0];
                                                    h.pattern = RegExp(h.pattern.source, A + "g") }
                                                h = h.pattern || h; for (var k = l.next, E = u; k !== n.tail; E += k.value.length, k = k.next) { var w = k.value; if (n.length > t.length) return; if (!(w instanceof r)) { var _ = 1; if (v && k != n.tail.prev) { if (h.lastIndex = E, !(I = h.exec(t))) break; var x = I.index + (b && I[1] ? I[1].length : 0),
                                                                F = I.index + I[0].length,
                                                                O = E; for (O += k.value.length; O <= x;) O += (k = k.next).value.length; if (E = O -= k.value.length, k.value instanceof r) continue; for (var T = k; T !== n.tail && (O < F || "string" == typeof T.value && !T.prev.value.greedy); T = T.next) _++, O += T.value.length;
                                                            _--, w = t.slice(E, O), I.index -= E } else { h.lastIndex = 0; var I = h.exec(w) } if (I) { b && (S = I[1] ? I[1].length : 0);
                                                            F = (x = I.index + S) + (I = I[0].slice(S)).length; var N = w.slice(0, x),
                                                                P = w.slice(F),
                                                                $ = k.prev; if (N && ($ = s(n, $, N), E += N.length), o(n, $, _), k = s(n, $, new r(g, m ? a.tokenize(I, m) : I, y, I, v)), P && s(n, k, P), 1 < _ && e(t, n, i, k.prev, E, !0, g + "," + f), c) break } else if (c) break } } } } }(e, u, t, u.head, 0),
                                function(e) { for (var t = [], n = e.head.next; n !== e.tail;) t.push(n.value), n = n.next; return t }(u) }, hooks: { all: {}, add: function(e, t) { var n = a.hooks.all;
                                n[e] = n[e] || [], n[e].push(t) }, run: function(e, t) { var n = a.hooks.all[e]; if (n && n.length)
                                    for (var r, i = 0; r = n[i++];) r(t) } }, Token: r };

                function r(e, t, n, a, r) { this.type = e, this.content = t, this.alias = n, this.length = 0 | (a || "").length, this.greedy = !!r }

                function i() { var e = { value: null, prev: null, next: null },
                        t = { value: null, prev: e, next: null };
                    e.next = t, this.head = e, this.tail = t, this.length = 0 }

                function s(e, t, n) { var a = t.next,
                        r = { value: n, prev: t, next: a }; return t.next = r, a.prev = r, e.length++, r }

                function o(e, t, n) { for (var a = t.next, r = 0; r < n && a !== e.tail; r++) a = a.next;
                    (t.next = a).prev = t, e.length -= r } if (e.Prism = a, r.stringify = function e(t, n) { if ("string" == typeof t) return t; if (Array.isArray(t)) { var r = ""; return t.forEach((function(t) { r += e(t, n) })), r } var i = { type: t.type, content: e(t.content, n), tag: "span", classes: ["token", t.type], attributes: {}, language: n },
                            s = t.alias;
                        s && (Array.isArray(s) ? Array.prototype.push.apply(i.classes, s) : i.classes.push(s)), a.hooks.run("wrap", i); var o = ""; for (var l in i.attributes) o += " " + l + '="' + (i.attributes[l] || "").replace(/"/g, "&quot;") + '"'; return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + o + ">" + i.content + "</" + i.tag + ">" }, !e.document) return e.addEventListener && (a.disableWorkerMessageHandler || e.addEventListener("message", (function(t) { var n = JSON.parse(t.data),
                        r = n.language,
                        i = n.code,
                        s = n.immediateClose;
                    e.postMessage(a.highlight(i, a.languages[r], r)), s && e.close() }), !1)), a; var l = a.util.currentScript();

                function u() { a.manual || a.highlightAll() } if (l && (a.filename = l.src, l.hasAttribute("data-manual") && (a.manual = !0)), !a.manual) { var c = document.readyState; "loading" === c || "interactive" === c && l && l.defer ? document.addEventListener("DOMContentLoaded", u) : window.requestAnimationFrame ? window.requestAnimationFrame(u) : window.setTimeout(u, 16) } return a }("undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {});
            e.exports && (e.exports = n), void 0 !== t && (t.Prism = n), n.languages.markup = { comment: /<!--[\s\S]*?-->/, prolog: /<\?[\s\S]+?\?>/, doctype: { pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i, greedy: !0 }, cdata: /<!\[CDATA\[[\s\S]*?]]>/i, tag: { pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i, greedy: !0, inside: { tag: { pattern: /^<\/?[^\s>\/]+/i, inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ } }, "attr-value": { pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i, inside: { punctuation: [/^=/, { pattern: /^(\s*)["']|["']$/, lookbehind: !0 }] } }, punctuation: /\/?>/, "attr-name": { pattern: /[^\s>\/]+/, inside: { namespace: /^[^\s>\/:]+:/ } } } }, entity: /&#?[\da-z]{1,8};/i }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.hooks.add("wrap", (function(e) { "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&")) })), Object.defineProperty(n.languages.markup.tag, "addInlined", { value: function(e, t) { var a = {};
                        a["language-" + t] = { pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i, lookbehind: !0, inside: n.languages[t] }, a.cdata = /^<!\[CDATA\[|\]\]>$/i; var r = { "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: a } };
                        r["language-" + t] = { pattern: /[\s\S]+/, inside: n.languages[t] }; var i = {};
                        i[e] = { pattern: RegExp("(<__[^]*?>)(?:<!\\[CDATA\\[[^]*?\\]\\]>\\s*|[^])*?(?=</__>)".replace(/__/g, (function() { return e })), "i"), lookbehind: !0, greedy: !0, inside: r }, n.languages.insertBefore("markup", "cdata", i) } }), n.languages.xml = n.languages.extend("markup", {}), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup,
                function(e) { var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
                    e.languages.css = { comment: /\/\*[\s\S]*?\*\//, atrule: { pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/, inside: { rule: /^@[\w-]+/, "selector-function-argument": { pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/, lookbehind: !0, alias: "selector" } } }, url: { pattern: RegExp("url\\((?:" + t.source + "|[^\n\r()]*)\\)", "i"), greedy: !0, inside: { function: /^url/i, punctuation: /^\(|\)$/ } }, selector: RegExp("[^{}\\s](?:[^{};\"']|" + t.source + ")*?(?=\\s*\\{)"), string: { pattern: t, greedy: !0 }, property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i, important: /!important\b/i, function: /[-a-z0-9]+(?=\()/i, punctuation: /[(){};:,]/ }, e.languages.css.atrule.inside.rest = e.languages.css; var n = e.languages.markup;
                    n && (n.tag.addInlined("style", "css"), e.languages.insertBefore("inside", "attr-value", { "style-attr": { pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i, inside: { "attr-name": { pattern: /^\s*style/i, inside: n.tag.inside }, punctuation: /^\s*=\s*['"]|['"]\s*$/, "attr-value": { pattern: /.+/i, inside: e.languages.css } }, alias: "language-css" } }, n.tag)) }(n), n.languages.clike = { comment: [{ pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/, lookbehind: !0 }, { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }], string: { pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0 }, "class-name": { pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i, lookbehind: !0, inside: { punctuation: /[.\\]/ } }, keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/, boolean: /\b(?:true|false)\b/, function: /\w+(?=\()/, number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i, operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/, punctuation: /[{}[\];(),.:]/ }, n.languages.javascript = n.languages.extend("clike", { "class-name": [n.languages.clike["class-name"], { pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/, lookbehind: !0 }], keyword: [{ pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 }, { pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/, lookbehind: !0 }], number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/, function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/, operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/ }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", { regex: { pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/, lookbehind: !0, greedy: !0 }, "function-variable": { pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/, alias: "function" }, parameter: [{ pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i, inside: n.languages.javascript }, { pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/, lookbehind: !0, inside: n.languages.javascript }, { pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/, lookbehind: !0, inside: n.languages.javascript }], constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/ }), n.languages.insertBefore("javascript", "string", { "template-string": { pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/, greedy: !0, inside: { "template-punctuation": { pattern: /^`|`$/, alias: "string" }, interpolation: { pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/, lookbehind: !0, inside: { "interpolation-punctuation": { pattern: /^\${|}$/, alias: "punctuation" }, rest: n.languages.javascript } }, string: /[\s\S]+/ } } }), n.languages.markup && n.languages.markup.tag.addInlined("script", "javascript"), n.languages.js = n.languages.javascript,
                function(e) { var t = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
                        n = { environment: { pattern: RegExp("\\$" + t), alias: "constant" }, variable: [{ pattern: /\$?\(\([\s\S]+?\)\)/, greedy: !0, inside: { variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/], number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/, operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/, punctuation: /\(\(?|\)\)?|,|;/ } }, { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } }, { pattern: /\$\{[^}]+\}/, greedy: !0, inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp("(\\{)" + t), lookbehind: !0, alias: "constant" } } }, /\$(?:\w+|[#?*!@$])/], entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/ };
                    e.languages.bash = { shebang: { pattern: /^#!\s*\/.*/, alias: "important" }, comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 }, "function-name": [{ pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: "function" }, { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function" }], "for-or-select": { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: "variable", lookbehind: !0 }, "assign-left": { pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/, inside: { environment: { pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t), lookbehind: !0, alias: "constant" } }, alias: "variable", lookbehind: !0 }, string: [{ pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: n }, { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0 }, { pattern: /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\2)[^\\])*\2/, lookbehind: !0, greedy: !0, inside: n }], environment: { pattern: RegExp("\\$?" + t), alias: "constant" }, variable: n.variable, function: { pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/, lookbehind: !0 }, keyword: { pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/, lookbehind: !0 }, builtin: { pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/, lookbehind: !0, alias: "class-name" }, boolean: { pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/, lookbehind: !0 }, "file-descriptor": { pattern: /\B&\d\b/, alias: "important" }, operator: { pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/, inside: { "file-descriptor": { pattern: /^\d/, alias: "important" } } }, punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/, number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 } }; for (var a = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"], r = n.variable[1].inside, i = 0; i < a.length; i++) r[a[i]] = e.languages.bash[a[i]];
                    e.languages.shell = e.languages.bash }(n),
                function(e) { e.languages.diff = { coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d+.*$/m] }; var t = { "deleted-sign": "-", "deleted-arrow": "<", "inserted-sign": "+", "inserted-arrow": ">", unchanged: " ", diff: "!" };
                    Object.keys(t).forEach((function(n) { var a = t[n],
                            r = []; /^\w+$/.test(n) || r.push(/\w+/.exec(n)[0]), "diff" === n && r.push("bold"), e.languages.diff[n] = { pattern: RegExp("^(?:[" + a + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"), alias: r, inside: { line: { pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/, lookbehind: !0 }, prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] } } } })), Object.defineProperty(e.languages.diff, "PREFIXES", { value: t }) }(n),
                function(e) { var t = e.util.clone(e.languages.javascript);
                    e.languages.jsx = e.languages.extend("markup", t), e.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i, e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i, e.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i, e.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, e.languages.insertBefore("inside", "attr-name", { spread: { pattern: /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/, inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ } } }, e.languages.jsx.tag), e.languages.insertBefore("inside", "attr-value", { script: { pattern: /=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i, inside: { "script-punctuation": { pattern: /^=(?={)/, alias: "punctuation" }, rest: e.languages.jsx }, alias: "language-javascript" } }, e.languages.jsx.tag); var n = function e(t) { return t ? "string" == typeof t ? t : "string" == typeof t.content ? t.content : t.content.map(e).join("") : "" };
                    e.hooks.add("after-tokenize", (function(t) { "jsx" !== t.language && "tsx" !== t.language || function t(a) { for (var r = [], i = 0; i < a.length; i++) { var s = a[i],
                                    o = !1; if ("string" != typeof s && ("tag" === s.type && s.content[0] && "tag" === s.content[0].type ? "</" === s.content[0].content[0].content ? 0 < r.length && r[r.length - 1].tagName === n(s.content[0].content[1]) && r.pop() : "/>" === s.content[s.content.length - 1].content || r.push({ tagName: n(s.content[0].content[1]), openedBraces: 0 }) : 0 < r.length && "punctuation" === s.type && "{" === s.content ? r[r.length - 1].openedBraces++ : 0 < r.length && 0 < r[r.length - 1].openedBraces && "punctuation" === s.type && "}" === s.content ? r[r.length - 1].openedBraces-- : o = !0), (o || "string" == typeof s) && 0 < r.length && 0 === r[r.length - 1].openedBraces) { var l = n(s);
                                    i < a.length - 1 && ("string" == typeof a[i + 1] || "plain-text" === a[i + 1].type) && (l += n(a[i + 1]), a.splice(i + 1, 1)), 0 < i && ("string" == typeof a[i - 1] || "plain-text" === a[i - 1].type) && (l = n(a[i - 1]) + l, a.splice(i - 1, 1), i--), a[i] = new e.Token("plain-text", l, null, l) }
                                s.content && "string" != typeof s.content && t(s.content) } }(t.tokens) })) }(n) }).call(this, n("yLpj")) }, yLpj: function(e, t) { var n;
        n = function() { return this }(); try { n = n || new Function("return this")() } catch (e) { "object" == typeof window && (n = window) }
        e.exports = n } });