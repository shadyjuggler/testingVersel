(self.webpackChunkjbook=self.webpackChunkjbook||[]).push([[52439],{52439:()=>{!function(t){var n=t.util.clone(t.languages.javascript),e="(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})";function a(t,n){return t=t.replace(/<S>/g,(function(){return"(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)"})).replace(/<BRACES>/g,(function(){return"(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})"})).replace(/<SPREAD>/g,(function(){return e})),RegExp(t,n)}e=a(e).source,t.languages.jsx=t.languages.extend("markup",n),t.languages.jsx.tag.pattern=a("</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:\"(?:\\\\[^]|[^\\\\\"])*\"|'(?:\\\\[^]|[^\\\\'])*'|[^\\s{'\"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>"),t.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,t.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,t.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,t.languages.jsx.tag.inside.comment=n.comment,t.languages.insertBefore("inside","attr-name",{spread:{pattern:a("<SPREAD>"),inside:t.languages.jsx}},t.languages.jsx.tag),t.languages.insertBefore("inside","special-attr",{script:{pattern:a("=<BRACES>"),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:t.languages.jsx},alias:"language-javascript"}},t.languages.jsx.tag);var s=function(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(s).join(""):""},g=function(n){for(var e=[],a=0;a<n.length;a++){var o=n[a],i=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?0<e.length&&e[e.length-1].tagName===s(o.content[0].content[1])&&e.pop():"/>"===o.content[o.content.length-1].content||e.push({tagName:s(o.content[0].content[1]),openedBraces:0}):0<e.length&&"punctuation"===o.type&&"{"===o.content?e[e.length-1].openedBraces++:0<e.length&&0<e[e.length-1].openedBraces&&"punctuation"===o.type&&"}"===o.content?e[e.length-1].openedBraces--:i=!0),(i||"string"==typeof o)&&0<e.length&&0===e[e.length-1].openedBraces){var c=s(o);a<n.length-1&&("string"==typeof n[a+1]||"plain-text"===n[a+1].type)&&(c+=s(n[a+1]),n.splice(a+1,1)),0<a&&("string"==typeof n[a-1]||"plain-text"===n[a-1].type)&&(c=s(n[a-1])+c,n.splice(a-1,1),a--),n[a]=new t.Token("plain-text",c,null,c)}o.content&&"string"!=typeof o.content&&g(o.content)}};t.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||g(t.tokens)}))}(Prism)}}]);
//# sourceMappingURL=52439.bb225a92.chunk.js.map