/* http://prismjs.com/download.html?themes=prism-okaidia&plugins=line-numbers+autolinker+file-highlight+toolbar+jsonp-highlight+autoloader+command-line+normalize-whitespace+show-language+copy-to-clipboard */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof a?new a(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){var t=n.util.type(e);switch(t){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=n.util.clone(e[r]));return a;case"Array":return e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var a=n.util.clone(n.languages[e]);for(var r in t)a[r]=t[r];return a},insertBefore:function(e,t,a,r){r=r||n.languages;var l=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(l[i]=a[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[s]=l[s]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,a,r){r=r||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],a||l),"Object"!==n.util.type(e[l])||r[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||r[n.util.objId(e[l])]||(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,r)):(r[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,r)))}},plugins:{},highlightAll:function(e,t){var a={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var r,l=a.elements||document.querySelectorAll(a.selector),i=0;r=l[i++];)n.highlightElement(r,e===!0,a.callback)},highlightElement:function(t,a,r){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1].toLowerCase(),i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l));var s=t.textContent,g={element:t,language:l,grammar:i,code:s};if(n.hooks.run("before-sanity-check",g),!g.code||!g.grammar)return g.code&&(n.hooks.run("before-highlight",g),g.element.textContent=g.code,n.hooks.run("after-highlight",g)),n.hooks.run("complete",g),void 0;if(n.hooks.run("before-highlight",g),a&&_self.Worker){var u=new Worker(n.filename);u.onmessage=function(e){g.highlightedCode=e.data,n.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(g.element),n.hooks.run("after-highlight",g),n.hooks.run("complete",g)},u.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else g.highlightedCode=n.highlight(g.code,g.grammar,g.language),n.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",g),n.hooks.run("complete",g)},highlight:function(e,t,r){var l=n.tokenize(e,t);return a.stringify(n.util.encode(l),r)},matchGrammar:function(e,t,a,r,l,i,o){var s=n.Token;for(var g in a)if(a.hasOwnProperty(g)&&a[g]){if(g==o)return;var u=a[g];u="Array"===n.util.type(u)?u:[u];for(var c=0;c<u.length;++c){var h=u[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=r,k=l;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){h.lastIndex=0;var _=h.exec(w),P=1;if(!_&&m&&b!=t.length-1){if(h.lastIndex=k,_=h.exec(e),!_)break;for(var A=_.index+(d?_[1].length:0),j=_.index+_[0].length,x=b,O=k,N=t.length;N>x&&(j>O||!t[x].type&&!t[x-1].greedy);++x)O+=t[x].length,A>=O&&(++b,k=O);if(t[b]instanceof s||t[x-1].greedy)continue;P=x-b,w=e.slice(k,O),_.index-=k}if(_){d&&(p=_[1].length);var A=_.index+p,_=_[0].slice(p),j=A+_.length,S=w.slice(0,A),C=w.slice(j),M=[b,P];S&&(++b,k+=S.length,M.push(S));var E=new s(g,f?n.tokenize(_,f):_,y,_,m);if(M.push(E),C&&M.push(C),Array.prototype.splice.apply(t,M),1!=P&&n.matchGrammar(e,t,a,b,k,!0,g),i)break}else if(i)break}}}}},tokenize:function(e,t){var a=[e],r=t.rest;if(r){for(var l in r)t[l]=r[l];delete t.rest}return n.matchGrammar(e,a,t,0,0,!1),a},hooks:{all:{},add:function(e,t){var a=n.hooks.all;a[e]=a[e]||[],a[e].push(t)},run:function(e,t){var a=n.hooks.all[e];if(a&&a.length)for(var r,l=0;r=a[l++];)r(t)}}},a=n.Token=function(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r};if(a.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return a.stringify(n,t,e)}).join("");var l={type:e.type,content:a.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o=Object.keys(l.attributes).map(function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(o?" "+o:"")+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(n.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),a=t.language,r=t.code,l=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[a],a)),l&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,n.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var e="line-numbers",t=function(e){var t=n(e),r=t["white-space"];if("pre-wrap"===r||"pre-line"===r){var s=e.querySelector("code"),l=e.querySelector(".line-numbers-rows"),a=e.querySelector(".line-numbers-sizer"),i=e.textContent.split("\n");a||(a=document.createElement("span"),a.className="line-numbers-sizer",s.appendChild(a)),a.style.display="block",i.forEach(function(e,t){a.textContent=e||"\n";var n=a.getBoundingClientRect().height;l.children[t].style.height=n+"px"}),a.textContent="",a.style.display="none"}},n=function(e){return e?window.getComputedStyle?getComputedStyle(e):e.currentStyle||null:null};window.addEventListener("resize",function(){Array.prototype.forEach.call(document.querySelectorAll("pre."+e),t)}),Prism.hooks.add("complete",function(e){if(e.code){var n=e.element.parentNode,r=/\s*\bline-numbers\b\s*/;if(n&&/pre/i.test(n.nodeName)&&(r.test(n.className)||r.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){r.test(e.element.className)&&(e.element.className=e.element.className.replace(r," ")),r.test(n.className)||(n.className+=" line-numbers");var s,l=e.code.match(/\n(?!$)/g),a=l?l.length+1:1,i=new Array(a+1);i=i.join("<span></span>"),s=document.createElement("span"),s.setAttribute("aria-hidden","true"),s.className="line-numbers-rows",s.innerHTML=i,n.hasAttribute("data-start")&&(n.style.counterReset="linenumber "+(parseInt(n.getAttribute("data-start"),10)-1)),e.element.appendChild(s),t(n)}}})}}();
!function(){if(("undefined"==typeof self||self.Prism)&&("undefined"==typeof global||global.Prism)){var i=/\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~\/.:#=?&amp;]+/,n=/\b\S+@[\w.]+[a-z]{2}/,e=/\[([^\]]+)]\(([^)]+)\)/,t=["comment","url","attr-value","string"];Prism.plugins.autolinker={processGrammar:function(a){a&&!a["url-link"]&&(Prism.languages.DFS(a,function(a,r,l){t.indexOf(l)>-1&&"Array"!==Prism.util.type(r)&&(r.pattern||(r=this[a]={pattern:r}),r.inside=r.inside||{},"comment"==l&&(r.inside["md-link"]=e),"attr-value"==l?Prism.languages.insertBefore("inside","punctuation",{"url-link":i},r):r.inside["url-link"]=i,r.inside["email-link"]=n)}),a["url-link"]=i,a["email-link"]=n)}},Prism.hooks.add("before-highlight",function(i){Prism.plugins.autolinker.processGrammar(i.grammar)}),Prism.hooks.add("wrap",function(i){if(/-link$/.test(i.type)){i.tag="a";var n=i.content;if("email-link"==i.type&&0!=n.indexOf("mailto:"))n="mailto:"+n;else if("md-link"==i.type){var t=i.content.match(e);n=t[2],i.content=t[1]}i.attributes.href=n}try{i.content=decodeURIComponent(i.content)}catch(a){}})}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(t){for(var s,a=t.getAttribute("data-src"),n=t,r=/\blang(?:uage)?-(?!\*)(\w+)\b/i;n&&!r.test(n.className);)n=n.parentNode;if(n&&(s=(t.className.match(r)||[,""])[1]),!s){var o=(a.match(/\.(\w+)$/)||[,""])[1];s=e[o]||o}var l=document.createElement("code");l.className="language-"+s,t.textContent="",l.textContent="Loading…",t.appendChild(l);var i=new XMLHttpRequest;i.open("GET",a,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?(l.textContent=i.responseText,Prism.highlightElement(l)):l.textContent=i.status>=400?"✖ Error "+i.status+" while fetching file: "+i.statusText:"✖ Error: File does not exist or is empty")},i.send(null)})},document.addEventListener("DOMContentLoaded",self.Prism.fileHighlight))}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){var t=[],e={},n=function(){};Prism.plugins.toolbar={};var a=Prism.plugins.toolbar.registerButton=function(n,a){var o;o="function"==typeof a?a:function(t){var e;return"function"==typeof a.onClick?(e=document.createElement("button"),e.type="button",e.addEventListener("click",function(){a.onClick.call(this,t)})):"string"==typeof a.url?(e=document.createElement("a"),e.href=a.url):e=document.createElement("span"),e.textContent=a.text,e},t.push(e[n]=o)},o=Prism.plugins.toolbar.hook=function(a){var o=a.element.parentNode;if(o&&/pre/i.test(o.nodeName)&&!o.classList.contains("code-toolbar")){o.classList.add("code-toolbar");var r=document.createElement("div");r.classList.add("toolbar"),document.body.hasAttribute("data-toolbar-order")&&(t=document.body.getAttribute("data-toolbar-order").split(",").map(function(t){return e[t]||n})),t.forEach(function(t){var e=t(a);if(e){var n=document.createElement("div");n.classList.add("toolbar-item"),n.appendChild(e),r.appendChild(n)}}),o.appendChild(r)}};a("label",function(t){var e=t.element.parentNode;if(e&&/pre/i.test(e.nodeName)&&e.hasAttribute("data-label")){var n,a,o=e.getAttribute("data-label");try{a=document.querySelector("template#"+o)}catch(r){}return a?n=a.content:(e.hasAttribute("data-url")?(n=document.createElement("a"),n.href=e.getAttribute("data-url")):n=document.createElement("span"),n.textContent=o),n}}),Prism.hooks.add("complete",o)}}();
!function(){function t(t){"function"!=typeof t||e(t)||r.push(t)}function e(t){return"function"==typeof t?r.filter(function(e){return e.valueOf()===t.valueOf()})[0]:"string"==typeof t&&t.length>0?r.filter(function(e){return e.name===t})[0]:null}function n(t){if("string"==typeof t&&(t=e(t)),"function"==typeof t){var n=r.indexOf(t);n>=0&&r.splice(n,1)}}function a(){Array.prototype.slice.call(document.querySelectorAll("pre[data-jsonp]")).forEach(function(t){t.textContent="";var e=document.createElement("code");e.textContent=i,t.appendChild(e);var n=t.getAttribute("data-adapter"),a=null;if(n){if("function"!=typeof window[n])return e.textContent="JSONP adapter function '"+n+"' doesn't exist",void 0;a=window[n]}var u="prismjsonp"+o++,f=document.createElement("a"),l=f.href=t.getAttribute("data-jsonp");f.href+=(f.search?"&":"?")+(t.getAttribute("data-callback")||"callback")+"="+u;var s=setTimeout(function(){e.textContent===i&&(e.textContent="Timeout loading '"+l+"'")},5e3),d=document.createElement("script");d.src=f.href,window[u]=function(n){document.head.removeChild(d),clearTimeout(s),delete window[u];var o="";if(a)o=a(n,t);else for(var i in r)if(o=r[i](n,t),null!==o)break;null===o?e.textContent="Cannot parse response (perhaps you need an adapter function?)":(e.textContent=o,Prism.highlightElement(e))},document.head.appendChild(d)})}if(self.Prism&&self.document&&document.querySelectorAll&&[].filter){var r=[];Prism.plugins.jsonphighlight={registerAdapter:t,removeAdapter:n,highlight:a},t(function(t){if(t&&t.meta&&t.data){if(t.meta.status&&t.meta.status>=400)return"Error: "+(t.data.message||t.meta.status);if("string"==typeof t.data.content)return"function"==typeof atob?atob(t.data.content.replace(/\s/g,"")):"Your browser cannot decode base64"}return null}),t(function(t,e){if(t&&t.meta&&t.data&&t.data.files){if(t.meta.status&&t.meta.status>=400)return"Error: "+(t.data.message||t.meta.status);var n=e.getAttribute("data-filename");if(null==n)for(var a in t.data.files)if(t.data.files.hasOwnProperty(a)){n=a;break}return void 0!==t.data.files[n]?t.data.files[n].content:"Error: unknown or missing gist file "+n}return null}),t(function(t){return t&&t.node&&"string"==typeof t.data?t.data:null});var o=0,i="Loading…";a()}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&document.createElement){var e={javascript:"clike",actionscript:"javascript",arduino:"cpp",aspnet:"markup",bison:"c",c:"clike",csharp:"clike",cpp:"c",coffeescript:"javascript",crystal:"ruby","css-extras":"css",d:"clike",dart:"clike",django:"markup",fsharp:"clike",flow:"javascript",glsl:"clike",go:"clike",groovy:"clike",haml:"ruby",handlebars:"markup",haxe:"clike",java:"clike",jolie:"clike",kotlin:"clike",less:"css",markdown:"markup",n4js:"javascript",nginx:"clike",objectivec:"c",opencl:"cpp",parser:"markup",php:"clike","php-extras":"php",processing:"clike",protobuf:"clike",pug:"javascript",qore:"clike",jsx:["markup","javascript"],reason:"clike",ruby:"clike",sass:"css",scss:"css",scala:"java",smarty:"markup",swift:"clike",textile:"markup",twig:"markup",typescript:"javascript",vbnet:"basic",wiki:"markup"},c={},a="none",s=Prism.plugins.autoloader={languages_path:"components/",use_minified:!0},n=function(e,c,a){var s=document.createElement("script");s.src=e,s.async=!0,s.onload=function(){document.body.removeChild(s),c&&c()},s.onerror=function(){document.body.removeChild(s),a&&a()},document.body.appendChild(s)},r=function(e){return s.languages_path+"prism-"+e+(s.use_minified?".min":"")+".js"},i=function(e,a){var s=c[e];s||(s=c[e]={});var n=a.getAttribute("data-dependencies");!n&&a.parentNode&&"pre"===a.parentNode.tagName.toLowerCase()&&(n=a.parentNode.getAttribute("data-dependencies")),n=n?n.split(/\s*,\s*/g):[],t(n,function(){l(e,function(){Prism.highlightElement(a)})})},t=function(e,c,a){"string"==typeof e&&(e=[e]);var s=0,n=e.length,r=function(){n>s?l(e[s],function(){s++,r()},function(){a&&a(e[s])}):s===n&&c&&c(e)};r()},l=function(a,s,i){var l=function(){var e=!1;a.indexOf("!")>=0&&(e=!0,a=a.replace("!",""));var t=c[a];if(t||(t=c[a]={}),s&&(t.success_callbacks||(t.success_callbacks=[]),t.success_callbacks.push(s)),i&&(t.error_callbacks||(t.error_callbacks=[]),t.error_callbacks.push(i)),!e&&Prism.languages[a])o(a);else if(!e&&t.error)u(a);else if(e||!t.loading){t.loading=!0;var l=r(a);n(l,function(){t.loading=!1,o(a)},function(){t.loading=!1,t.error=!0,u(a)})}},p=e[a];p&&p.length?t(p,l):l()},o=function(e){c[e]&&c[e].success_callbacks&&c[e].success_callbacks.length&&c[e].success_callbacks.forEach(function(c){c(e)})},u=function(e){c[e]&&c[e].error_callbacks&&c[e].error_callbacks.length&&c[e].error_callbacks.forEach(function(c){c(e)})};Prism.hooks.add("complete",function(e){e.element&&e.language&&!e.grammar&&e.language!==a&&i(e.language,e.element)})}}();
!function(){"undefined"!=typeof self&&self.Prism&&self.document&&Prism.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,a=/\s*\bcommand-line\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(a.test(t.className)||a.test(e.element.className))&&!e.element.querySelector(".command-line-prompt")){a.test(e.element.className)&&(e.element.className=e.element.className.replace(a,"")),a.test(t.className)||(t.className+=" command-line");var n=function(e,a){return(t.getAttribute(e)||a).replace(/"/g,"&quot")},s=new Array(1+e.code.split("\n").length),r=n("data-prompt","");if(""!==r)s=s.join('<span data-prompt="'+r+'"></span>');else{var l=n("data-user","user"),m=n("data-host","localhost");s=s.join('<span data-user="'+l+'" data-host="'+m+'"></span>')}var o=document.createElement("span");o.className="command-line-prompt",o.innerHTML=s;var i=t.getAttribute("data-output")||"";i=i.split(",");for(var c=0;c<i.length;c++){var p=i[c].split("-"),d=parseInt(p[0]),u=d;if(2===p.length&&(u=parseInt(p[1])),!isNaN(d)&&!isNaN(u))for(var f=d;u>=f&&f<=o.children.length;f++){var N=o.children[f-1];N.removeAttribute("data-user"),N.removeAttribute("data-host"),N.removeAttribute("data-prompt")}}e.element.innerHTML=o.outerHTML+e.element.innerHTML}}})}();
!function(){function e(e){this.defaults=r({},e)}function n(e){return e.replace(/-(\w)/g,function(e,n){return n.toUpperCase()})}function t(e){for(var n=0,t=0;t<e.length;++t)e.charCodeAt(t)=="	".charCodeAt(0)&&(n+=3);return e.length+n}var r=Object.assign||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t]);return e};e.prototype={setDefaults:function(e){this.defaults=r(this.defaults,e)},normalize:function(e,t){t=r(this.defaults,t);for(var i in t){var o=n(i);"normalize"!==i&&"setDefaults"!==o&&t[i]&&this[o]&&(e=this[o].call(this,e,t[i]))}return e},leftTrim:function(e){return e.replace(/^\s+/,"")},rightTrim:function(e){return e.replace(/\s+$/,"")},tabsToSpaces:function(e,n){return n=0|n||4,e.replace(/\t/g,new Array(++n).join(" "))},spacesToTabs:function(e,n){return n=0|n||4,e.replace(new RegExp(" {"+n+"}","g"),"	")},removeTrailing:function(e){return e.replace(/\s*?$/gm,"")},removeInitialLineFeed:function(e){return e.replace(/^(?:\r?\n|\r)/,"")},removeIndent:function(e){var n=e.match(/^[^\S\n\r]*(?=\S)/gm);return n&&n[0].length?(n.sort(function(e,n){return e.length-n.length}),n[0].length?e.replace(new RegExp("^"+n[0],"gm"),""):e):e},indent:function(e,n){return e.replace(/^[^\S\n\r]*(?=\S)/gm,new Array(++n).join("	")+"$&")},breakLines:function(e,n){n=n===!0?80:0|n||80;for(var r=e.split("\n"),i=0;i<r.length;++i)if(!(t(r[i])<=n)){for(var o=r[i].split(/(\s+)/g),a=0,s=0;s<o.length;++s){var l=t(o[s]);a+=l,a>n&&(o[s]="\n"+o[s],a=l)}r[i]=o.join("")}return r.join("\n")}},"undefined"!=typeof module&&module.exports&&(module.exports=e),"undefined"!=typeof Prism&&(Prism.plugins.NormalizeWhitespace=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0}),Prism.hooks.add("before-sanity-check",function(e){var n=Prism.plugins.NormalizeWhitespace;if(!e.settings||e.settings["whitespace-normalization"]!==!1){if((!e.element||!e.element.parentNode)&&e.code)return e.code=n.normalize(e.code,e.settings),void 0;var t=e.element.parentNode,r=/\bno-whitespace-normalization\b/;if(e.code&&t&&"pre"===t.nodeName.toLowerCase()&&!r.test(t.className)&&!r.test(e.element.className)){for(var i=t.childNodes,o="",a="",s=!1,l=0;l<i.length;++l){var c=i[l];c==e.element?s=!0:"#text"===c.nodeName&&(s?a+=c.nodeValue:o+=c.nodeValue,t.removeChild(c),--l)}if(e.element.children.length&&Prism.plugins.KeepMarkup){var u=o+e.element.innerHTML+a;e.element.innerHTML=n.normalize(u,e.settings),e.code=e.element.textContent}else e.code=o+e.code+a,e.code=n.normalize(e.code,e.settings)}}}))}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){if(!Prism.plugins.toolbar)return console.warn("Show Languages plugin loaded before Toolbar plugin."),void 0;var e={html:"HTML",xml:"XML",svg:"SVG",mathml:"MathML",css:"CSS",clike:"C-like",javascript:"JavaScript",abap:"ABAP",actionscript:"ActionScript",apacheconf:"Apache Configuration",apl:"APL",applescript:"AppleScript",asciidoc:"AsciiDoc",aspnet:"ASP.NET (C#)",autohotkey:"AutoHotkey",autoit:"AutoIt",basic:"BASIC",csharp:"C#",cpp:"C++",coffeescript:"CoffeeScript","css-extras":"CSS Extras",django:"Django/Jinja2",fsharp:"F#",glsl:"GLSL",graphql:"GraphQL",http:"HTTP",inform7:"Inform 7",json:"JSON",latex:"LaTeX",livescript:"LiveScript",lolcode:"LOLCODE",matlab:"MATLAB",mel:"MEL",n4js:"N4JS",nasm:"NASM",nginx:"nginx",nsis:"NSIS",objectivec:"Objective-C",ocaml:"OCaml",opencl:"OpenCL",parigp:"PARI/GP",php:"PHP","php-extras":"PHP Extras",powershell:"PowerShell",properties:".properties",protobuf:"Protocol Buffers",jsx:"React JSX",renpy:"Ren'py",rest:"reST (reStructuredText)",sas:"SAS",sass:"Sass (Sass)",scss:"Sass (Scss)",sql:"SQL",typescript:"TypeScript",vbnet:"VB.Net",vhdl:"VHDL",vim:"vim",wiki:"Wiki markup",xojo:"Xojo (REALbasic)",yaml:"YAML"};Prism.plugins.toolbar.registerButton("show-language",function(t){var a=t.element.parentNode;if(a&&/pre/i.test(a.nodeName)){var s=a.getAttribute("data-language")||e[t.language]||t.language.substring(0,1).toUpperCase()+t.language.substring(1),r=document.createElement("span");return r.textContent=s,r}})}}();
!function(){if("undefined"!=typeof self&&self.Prism&&self.document){if(!Prism.plugins.toolbar)return console.warn("Copy to Clipboard plugin loaded before Toolbar plugin."),void 0;var o=window.Clipboard||void 0;/(native code)/.test(o.toString())&&(o=void 0),o||"function"!=typeof require||(o=require("clipboard"));var t=[];if(!o){var e=document.createElement("script"),n=document.querySelector("head");e.onload=function(){if(o=window.Clipboard)for(;t.length;)t.pop()()},e.src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.8/clipboard.min.js",n.appendChild(e)}Prism.plugins.toolbar.registerButton("copy-to-clipboard",function(e){function n(){var t=new o(i,{text:function(){return e.code}});t.on("success",function(){i.textContent="Copied!",r()}),t.on("error",function(){i.textContent="Press Ctrl+C to copy",r()})}function r(){setTimeout(function(){i.textContent="Copy"},5e3)}var i=document.createElement("a");return i.textContent="Copy",o?n():t.push(n),i})}}();
