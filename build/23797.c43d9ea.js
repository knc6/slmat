"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[23797],{23797:(t,e,a)=>{a.r(e),a.d(e,{Tag:()=>s,classHighlighter:()=>P,getStyleTags:()=>m,highlightCode:()=>d,highlightTree:()=>f,styleTags:()=>l,tagHighlighter:()=>g,tags:()=>E});var i=a(12926);let r=0;class s{constructor(t,e,a){this.set=t,this.base=e,this.modified=a,this.id=r++}static define(t){if(null==t?void 0:t.base)throw new Error("Can not derive from a modified tag");let e=new s([],null,[]);if(e.set.push(e),t)for(let a of t.set)e.set.push(a);return e}static defineModifier(){let t=new n;return e=>e.modified.indexOf(t)>-1?e:n.get(e.base||e,e.modified.concat(t).sort(((t,e)=>t.id-e.id)))}}let o=0;class n{constructor(){this.instances=[],this.id=o++}static get(t,e){if(!e.length)return t;let a=e[0].instances.find((a=>{return a.base==t&&(i=e,r=a.modified,i.length==r.length&&i.every(((t,e)=>t==r[e])));var i,r}));if(a)return a;let i=[],r=new s(i,t,e);for(let t of e)t.instances.push(r);let o=function(t){let e=[[]];for(let a=0;a<t.length;a++)for(let i=0,r=e.length;i<r;i++)e.push(e[i].concat(t[a]));return e.sort(((t,e)=>e.length-t.length))}(e);for(let e of t.set)if(!e.modified.length)for(let t of o)i.push(n.get(e,t));return r}}function l(t){let e=Object.create(null);for(let a in t){let i=t[a];Array.isArray(i)||(i=[i]);for(let t of a.split(" "))if(t){let a=[],r=2,s=t;for(let e=0;;){if("..."==s&&e>0&&e+3==t.length){r=1;break}let i=/^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(s);if(!i)throw new RangeError("Invalid path: "+t);if(a.push("*"==i[0]?"":'"'==i[0][0]?JSON.parse(i[0]):i[0]),e+=i[0].length,e==t.length)break;let o=t[e++];if(e==t.length&&"!"==o){r=0;break}if("/"!=o)throw new RangeError("Invalid path: "+t);s=t.slice(e)}let o=a.length-1,n=a[o];if(!n)throw new RangeError("Invalid path: "+t);let l=new c(i,r,o>0?a.slice(0,o):null);e[n]=l.sort(e[n])}}return h.add(e)}const h=new i.NodeProp;class c{constructor(t,e,a,i){this.tags=t,this.mode=e,this.context=a,this.next=i}get opaque(){return 0==this.mode}get inherit(){return 1==this.mode}sort(t){return!t||t.depth<this.depth?(this.next=t,this):(t.next=this.sort(t.next),t)}get depth(){return this.context?this.context.length:0}}function g(t,e){let a=Object.create(null);for(let e of t)if(Array.isArray(e.tag))for(let t of e.tag)a[t.id]=e.class;else a[e.tag.id]=e.class;let{scope:i,all:r=null}=e||{};return{style:t=>{let e=r;for(let i of t)for(let t of i.set){let i=a[t.id];if(i){e=e?e+" "+i:i;break}}return e},scope:i}}function f(t,e,a,i=0,r=t.length){let s=new p(i,Array.isArray(e)?e:[e],a);s.highlightRange(t.cursor(),i,r,"",s.highlighters),s.flush(r)}function d(t,e,a,i,r,s=0,o=t.length){let n=s;function l(e,a){if(!(e<=n)){for(let s=t.slice(n,e),o=0;;){let t=s.indexOf("\n",o),e=t<0?s.length:t;if(e>o&&i(s.slice(o,e),a),t<0)break;r(),o=t+1}n=e}}f(e,a,((t,e,a)=>{l(t,""),l(e,a)}),s,o),l(o,"")}c.empty=new c([],2,null);class p{constructor(t,e,a){this.at=t,this.highlighters=e,this.span=a,this.class=""}startSpan(t,e){e!=this.class&&(this.flush(t),t>this.at&&(this.at=t),this.class=e)}flush(t){t>this.at&&this.class&&this.span(this.at,t,this.class)}highlightRange(t,e,a,r,s){let{type:o,from:n,to:l}=t;if(n>=a||l<=e)return;o.isTop&&(s=this.highlighters.filter((t=>!t.scope||t.scope(o))));let h=r,g=m(t)||c.empty,f=function(t,e){let a=null;for(let i of t){let t=i.style(e);t&&(a=a?a+" "+t:t)}return a}(s,g.tags);if(f&&(h&&(h+=" "),h+=f,1==g.mode&&(r+=(r?" ":"")+f)),this.startSpan(Math.max(e,n),h),g.opaque)return;let d=t.tree&&t.tree.prop(i.NodeProp.mounted);if(d&&d.overlay){let i=t.node.enter(d.overlay[0].from+n,1),o=this.highlighters.filter((t=>!t.scope||t.scope(d.tree.type))),c=t.firstChild();for(let g=0,f=n;;g++){let p=g<d.overlay.length?d.overlay[g]:null,m=p?p.from+n:l,u=Math.max(e,f),k=Math.min(a,m);if(u<k&&c)for(;t.from<k&&(this.highlightRange(t,u,k,r,s),this.startSpan(Math.min(k,t.to),h),!(t.to>=m)&&t.nextSibling()););if(!p||m>a)break;f=p.to+n,f>e&&(this.highlightRange(i.cursor(),Math.max(e,p.from+n),Math.min(a,f),"",o),this.startSpan(Math.min(a,f),h))}c&&t.parent()}else if(t.firstChild()){d&&(r="");do{if(!(t.to<=e)){if(t.from>=a)break;this.highlightRange(t,e,a,r,s),this.startSpan(Math.min(a,t.to),h)}}while(t.nextSibling());t.parent()}}}function m(t){let e=t.type.prop(h);for(;e&&e.context&&!t.matchContext(e.context);)e=e.next;return e||null}const u=s.define,k=u(),b=u(),y=u(b),N=u(b),w=u(),v=u(w),x=u(w),O=u(),M=u(O),C=u(),R=u(),S=u(),T=u(S),A=u(),E={comment:k,lineComment:u(k),blockComment:u(k),docComment:u(k),name:b,variableName:u(b),typeName:y,tagName:u(y),propertyName:N,attributeName:u(N),className:u(b),labelName:u(b),namespace:u(b),macroName:u(b),literal:w,string:v,docString:u(v),character:u(v),attributeValue:u(v),number:x,integer:u(x),float:u(x),bool:u(w),regexp:u(w),escape:u(w),color:u(w),url:u(w),keyword:C,self:u(C),null:u(C),atom:u(C),unit:u(C),modifier:u(C),operatorKeyword:u(C),controlKeyword:u(C),definitionKeyword:u(C),moduleKeyword:u(C),operator:R,derefOperator:u(R),arithmeticOperator:u(R),logicOperator:u(R),bitwiseOperator:u(R),compareOperator:u(R),updateOperator:u(R),definitionOperator:u(R),typeOperator:u(R),controlOperator:u(R),punctuation:S,separator:u(S),bracket:T,angleBracket:u(T),squareBracket:u(T),paren:u(T),brace:u(T),content:O,heading:M,heading1:u(M),heading2:u(M),heading3:u(M),heading4:u(M),heading5:u(M),heading6:u(M),contentSeparator:u(O),list:u(O),quote:u(O),emphasis:u(O),strong:u(O),link:u(O),monospace:u(O),strikethrough:u(O),inserted:u(),deleted:u(),changed:u(),invalid:u(),meta:A,documentMeta:u(A),annotation:u(A),processingInstruction:u(A),definition:s.defineModifier(),constant:s.defineModifier(),function:s.defineModifier(),standard:s.defineModifier(),local:s.defineModifier(),special:s.defineModifier()},P=g([{tag:E.link,class:"tok-link"},{tag:E.heading,class:"tok-heading"},{tag:E.emphasis,class:"tok-emphasis"},{tag:E.strong,class:"tok-strong"},{tag:E.keyword,class:"tok-keyword"},{tag:E.atom,class:"tok-atom"},{tag:E.bool,class:"tok-bool"},{tag:E.url,class:"tok-url"},{tag:E.labelName,class:"tok-labelName"},{tag:E.inserted,class:"tok-inserted"},{tag:E.deleted,class:"tok-deleted"},{tag:E.literal,class:"tok-literal"},{tag:E.string,class:"tok-string"},{tag:E.number,class:"tok-number"},{tag:[E.regexp,E.escape,E.special(E.string)],class:"tok-string2"},{tag:E.variableName,class:"tok-variableName"},{tag:E.local(E.variableName),class:"tok-variableName tok-local"},{tag:E.definition(E.variableName),class:"tok-variableName tok-definition"},{tag:E.special(E.variableName),class:"tok-variableName2"},{tag:E.definition(E.propertyName),class:"tok-propertyName tok-definition"},{tag:E.typeName,class:"tok-typeName"},{tag:E.namespace,class:"tok-namespace"},{tag:E.className,class:"tok-className"},{tag:E.macroName,class:"tok-macroName"},{tag:E.propertyName,class:"tok-propertyName"},{tag:E.operator,class:"tok-operator"},{tag:E.comment,class:"tok-comment"},{tag:E.meta,class:"tok-meta"},{tag:E.invalid,class:"tok-invalid"},{tag:E.punctuation,class:"tok-punctuation"}])}}]);
//# sourceMappingURL=23797.c43d9ea.js.map