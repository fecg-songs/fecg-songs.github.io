import{S as K,i as X,s as Q,k as L,l as S,m as I,h as d,p as j,H as re,I as ae,b as N,F as b,J as Je,K as q,g as ce,L as qe,d as fe,f as U,t as G,o as He,B as ze,a as A,c as H,C as Ye,D as je,E as Ke,M as Xe,z as ie,N as me,q as R,r as D,n as E,A as F,O as Re,v as Z,w as $,x,y as ee,G as ue,P as ne,Q as pe,R as oe,u as Qe,T as be,e as ve,U as Ze,V as $e}from"../../chunks/index-c78e2649.js";import{w as he}from"../../chunks/index-b5ffb61b.js";const _e="Alle Lieder",de="Favoriten",De=he([{T:_e,S:[]},{T:de,S:[]}]),Ue=he({}),ge=he(null);async function xe(){localStorage.removeItem("songs");const e=await(await fetch("songs.json")).text();return JSON.parse(e)}async function et(){const s=await xe(),e={};s.B.sort((t,l)=>t.T>l.T?1:-1),s.B.forEach(t=>{De.update(n=>[...n,t]);const l=[];for(const n of t.S)l.push({song:s.S.find(o=>o.I===n.V),songInsideBook:n});e[t.T]=l}),s.S.sort((t,l)=>t.T>l.T?1:-1),e[_e]=s.S.map(t=>({song:t})),e[de]=[],Ue.set(e)}function we(s,e){let t="",l=!1;for(let n=0;n<s.length;n++){const o=s[n];o==="{"?l=!0:o==="}"?l=!1:l?e&&(t+=`<sup class="text-red-600">${o}</sup>`):t+=o}return t}function tt(s){const e=localStorage.getItem("favorites");return e!=null&&e.includes(s)}function lt(s){var t;let e=(t=localStorage.getItem("favorites"))!=null?t:"";s=`${s};`,e.length&&e.includes(s)?e=e.replace(s,""):e+=s;try{localStorage.setItem("favorites",e)}catch{}}function st(){const s=localStorage.getItem("favorites");return s?s.split(";"):[]}function nt(){localStorage.getItem("hideLatinLetters")!=null?localStorage.removeItem("hideLatinLetters"):localStorage.setItem("hideLatinLetters","")}function ke(){return localStorage.getItem("hideLatinLetters")==null}function ot(){localStorage.getItem("hideTranslation")!=null?localStorage.removeItem("hideTranslation"):localStorage.setItem("hideTranslation","")}function Le(){return localStorage.getItem("hideTranslation")==null}function it(){localStorage.getItem("hideNotes")!=null?localStorage.removeItem("hideNotes"):localStorage.setItem("hideNotes","")}function Se(){return localStorage.getItem("hideNotes")==null}function rt(s,e){return e=e.toLocaleLowerCase(),s.filter(t=>at(t,e)).sort((t,l)=>Te(t,l,n=>n.T.toLocaleLowerCase().includes(e))).sort((t,l)=>Te(t,l,n=>n.T.toLocaleLowerCase().startsWith(e)))}function Te(s,e,t){const l=t(s.song),n=t(e.song);return l&&!n?-1:!l&&n?1:0}function at(s,e){if(e.trim()==="")return!0;const t=s.song.T.toLocaleLowerCase();e=e.toLocaleLowerCase();const l=Number(e);return!Number.isNaN(l)&&s.songInsideBook?s.songInsideBook.I===l:!!e.trim().split(" ").every(o=>t.includes(o))}function Ie(s,e,t){const l=s.slice();return l[23]=e[t],l}const ct=s=>({item:s&16}),Ee=s=>({item:s[23].data});function ft(s){let e;return{c(){e=R("Missing template")},l(t){e=D(t,"Missing template")},m(t,l){N(t,e,l)},d(t){t&&d(e)}}}function Be(s,e){let t,l,n;const o=e[14].default,i=ze(o,e,e[13],Ee),c=i||ft();return{key:s,first:null,c(){t=L("svelte-virtual-list-row"),c&&c.c(),l=A(),this.h()},l(r){t=S(r,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var a=I(t);c&&c.l(a),l=H(a),a.forEach(d),this.h()},h(){re(t,"class","svelte-102fq2u"),this.first=t},m(r,a){N(r,t,a),c&&c.m(t,null),b(t,l),n=!0},p(r,a){e=r,i&&i.p&&(!n||a&8208)&&Ye(i,o,e,e[13],n?Ke(o,e[13],a,ct):je(e[13]),Ee)},i(r){n||(U(c,r),n=!0)},o(r){G(c,r),n=!1},d(r){r&&d(t),c&&c.d(r)}}}function ut(s){let e,t,l=[],n=new Map,o,i,c,r,a=s[4];const u=f=>f[23].index;for(let f=0;f<a.length;f+=1){let _=Ie(s,a,f),m=u(_);n.set(m,l[f]=Be(m,_))}return{c(){e=L("svelte-virtual-list-viewport"),t=L("svelte-virtual-list-contents");for(let f=0;f<l.length;f+=1)l[f].c();this.h()},l(f){e=S(f,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var _=I(e);t=S(_,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var m=I(t);for(let k=0;k<l.length;k+=1)l[k].l(m);m.forEach(d),_.forEach(d),this.h()},h(){j(t,"padding-top",s[5]+"px"),j(t,"padding-bottom",s[6]+"px"),re(t,"class","svelte-102fq2u"),j(e,"height",s[0]),re(e,"class","svelte-102fq2u"),ae(()=>s[17].call(e))},m(f,_){N(f,e,_),b(e,t);for(let m=0;m<l.length;m+=1)l[m].m(t,null);s[15](t),s[16](e),o=Je(e,s[17].bind(e)),i=!0,c||(r=q(e,"scroll",s[7]),c=!0)},p(f,[_]){_&8208&&(a=f[4],ce(),l=qe(l,_,u,1,f,a,n,t,Xe,Be,null,Ie),fe()),(!i||_&32)&&j(t,"padding-top",f[5]+"px"),(!i||_&64)&&j(t,"padding-bottom",f[6]+"px"),(!i||_&1)&&j(e,"height",f[0])},i(f){if(!i){for(let _=0;_<a.length;_+=1)U(l[_]);i=!0}},o(f){for(let _=0;_<l.length;_+=1)G(l[_]);i=!1},d(f){f&&d(e);for(let _=0;_<l.length;_+=1)l[_].d();s[15](null),s[16](null),o(),c=!1,r()}}}function ht(s,e,t){let{$$slots:l={},$$scope:n}=e,{items:o}=e,{height:i="100%"}=e,{itemHeight:c=void 0}=e,{start:r=0}=e,{end:a=0}=e,u=[],f,_,m,k=0,B,M,w=0,T=0,V;async function P(g,C,W){const{scrollTop:J}=_;await ie();let z=w-J,O=r;for(;z<C&&O<g.length;){let te=f[O-r];te||(t(9,a=O+1),await ie(),te=f[O-r]),z+=u[O]=W||te.offsetHeight,O+=1}t(9,a=O);const se=g.length-a;V=(w+z)/a,t(6,T=se*V),u.length=g.length}async function y(){const{scrollTop:g}=_,C=r;for(let O=0;O<f.length;O+=1)u[r+O]=c||f[O].offsetHeight;let W=0,J=0;for(;W<o.length;){const O=u[W]||V;if(J+O>g){t(8,r=W),t(5,w=J);break}J+=O,W+=1}for(;W<o.length&&(J+=u[W]||V,W+=1,!(J>g+k)););t(9,a=W);const z=o.length-a;for(V=J/a;W<o.length;)u[W++]=V;if(t(6,T=z*V),r<C){await ie();let O=0,se=0;for(let Y=r;Y<C;Y+=1)f[Y-r]&&(O+=u[Y],se+=c||f[Y-r].offsetHeight);const te=se-O;_.scrollTo(0,g+te)}}He(()=>{f=m.getElementsByTagName("svelte-virtual-list-row"),t(12,M=!0)});function h(g){me[g?"unshift":"push"](()=>{m=g,t(3,m)})}function v(g){me[g?"unshift":"push"](()=>{_=g,t(2,_)})}function p(){k=this.offsetHeight,t(1,k)}return s.$$set=g=>{"items"in g&&t(10,o=g.items),"height"in g&&t(0,i=g.height),"itemHeight"in g&&t(11,c=g.itemHeight),"start"in g&&t(8,r=g.start),"end"in g&&t(9,a=g.end),"$$scope"in g&&t(13,n=g.$$scope)},s.$$.update=()=>{s.$$.dirty&1792&&t(4,B=o.slice(r,a).map((g,C)=>({index:C+r,data:g}))),s.$$.dirty&7170&&M&&P(o,k,c)},[i,k,_,m,B,w,T,y,r,a,o,c,M,n,l,h,v,p]}class _t extends K{constructor(e){super(),X(this,e,ht,ut,Q,{items:10,height:0,itemHeight:11,start:8,end:9})}}function dt(s){let e,t,l,n,o,i,c,r;return{c(){e=L("div"),t=L("p"),l=A(),n=L("span"),o=R("star"),this.h()},l(a){e=S(a,"DIV",{class:!0});var u=I(e);t=S(u,"P",{class:!0});var f=I(t);f.forEach(d),l=H(u),n=S(u,"SPAN",{class:!0});var _=I(n);o=D(_,"star"),_.forEach(d),u.forEach(d),this.h()},h(){E(t,"class","flex-1 whitespace-nowrap overflow-hidden"),E(n,"class",i=`material-symbols-outlined ${s[1]?"material-symbols-filled":""}`),E(e,"class","flex")},m(a,u){N(a,e,u),b(e,t),t.innerHTML=s[0],b(e,l),b(e,n),b(n,o),c||(r=[q(t,"click",s[2]),q(n,"click",s[3])],c=!0)},p(a,[u]){u&1&&(t.innerHTML=a[0]),u&2&&i!==(i=`material-symbols-outlined ${a[1]?"material-symbols-filled":""}`)&&E(n,"class",i)},i:F,o:F,d(a){a&&d(e),c=!1,Re(r)}}}function gt(s,e,t){let{songWithInsideBook:l}=e,{searchtext:n}=e;const o=()=>{window.history.replaceState({scrollY:window.scrollY},""),window.history.pushState({song:l},""),window.scroll(0,0),ge.set(l.song.I)};let i=!1;const c=()=>{lt(l.song.I),t(1,i=!i)};let r;return s.$$set=a=>{"songWithInsideBook"in a&&t(4,l=a.songWithInsideBook),"searchtext"in a&&t(5,n=a.searchtext)},s.$$.update=()=>{var a,u;if(s.$$.dirty&16&&t(1,i=tt(l.song.I)),s.$$.dirty&49){const f=n.trim().toLocaleLowerCase().split(" ");f.sort((m,k)=>m.length<k.length?1:-1);const _=(u=(a=l.songInsideBook)==null?void 0:a.I)!=null?u:null;t(0,r=l.song.T),_&&t(0,r=`${_} - ${r}`);for(const m of f){console.log(m);const k=m.length;let B=-1;const M=()=>B+k;do{if(B>=r.length){B=-1;break}B=r.toLocaleLowerCase().indexOf(m,B+1)}while(B>=0&&(r.substring(0,B).split("<").length%2===0||r.substring(B,M()).split("<").length%2===0));if(B>=0){const w=r.substring(B,M());t(0,r=r.slice(0,B)+`<p class="font-bold inline">${w}</p>`+r.slice(M()))}}}},[r,i,o,c,l,n]}class mt extends K{constructor(e){super(),X(this,e,gt,dt,Q,{songWithInsideBook:4,searchtext:5})}}function pt(s){let e,t;return e=new mt({props:{songWithInsideBook:s[4],searchtext:s[0]}}),{c(){Z(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,n){x(e,l,n),t=!0},p(l,n){const o={};n&16&&(o.songWithInsideBook=l[4]),n&1&&(o.searchtext=l[0]),e.$set(o)},i(l){t||(U(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function bt(s){let e,t,l;return t=new _t({props:{items:s[1],height:"100%",$$slots:{default:[pt,({item:n})=>({4:n}),({item:n})=>n?16:0]},$$scope:{ctx:s}}}),{c(){e=L("div"),Z(t.$$.fragment),this.h()},l(n){e=S(n,"DIV",{class:!0});var o=I(e);$(t.$$.fragment,o),o.forEach(d),this.h()},h(){E(e,"class","text-left flex-1 overflow-auto px-1 w-full")},m(n,o){N(n,e,o),x(t,e,null),l=!0},p(n,[o]){const i={};o&2&&(i.items=n[1]),o&49&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){l||(U(t.$$.fragment,n),l=!0)},o(n){G(t.$$.fragment,n),l=!1},d(n){n&&d(e),ee(t)}}}function vt(s,e,t){let l;ue(s,Ue,c=>t(3,l=c));let{selectedBook:n}=e,{searchtext:o}=e,i;return s.$$set=c=>{"selectedBook"in c&&t(2,n=c.selectedBook),"searchtext"in c&&t(0,o=c.searchtext)},s.$$.update=()=>{if(s.$$.dirty&13){let c;if(n.T!==de)c=l[n.T];else{const r=l[_e],a=st();c=r.filter(u=>a.includes(u.song.I))}t(1,i=rt(c,o))}},[o,i,n,l]}class Ge extends K{constructor(e){super(),X(this,e,vt,bt,Q,{selectedBook:2,searchtext:0})}}function Ne(s,e,t){const l=s.slice();return l[10]=e[t],l}function ye(s,e,t){const l=s.slice();return l[10]=e[t],l}function Ve(s){let e,t=s[10].T+"",l;return{c(){e=L("option"),l=R(t),this.h()},l(n){e=S(n,"OPTION",{});var o=I(e);l=D(o,t),o.forEach(d),this.h()},h(){e.__value=s[10],e.value=e.__value},m(n,o){N(n,e,o),b(e,l)},p:F,d(n){n&&d(e)}}}function Oe(s){let e,t,l,n=s[4],o=[];for(let i=0;i<n.length;i+=1)o[i]=Me(Ne(s,n,i));return{c(){e=L("select");for(let i=0;i<o.length;i+=1)o[i].c();this.h()},l(i){e=S(i,"SELECT",{class:!0});var c=I(e);for(let r=0;r<o.length;r+=1)o[r].l(c);c.forEach(d),this.h()},h(){E(e,"class","select select-bordered w-full max-w-md mb-1 lg:mb-0"),s[2]===void 0&&ae(()=>s[7].call(e))},m(i,c){N(i,e,c);for(let r=0;r<o.length;r+=1)o[r].m(e,null);ne(e,s[2]),t||(l=q(e,"change",s[7]),t=!0)},p(i,c){if(c&16){n=i[4];let r;for(r=0;r<n.length;r+=1){const a=Ne(i,n,r);o[r]?o[r].p(a,c):(o[r]=Me(a),o[r].c(),o[r].m(e,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}c&20&&ne(e,i[2])},d(i){i&&d(e),oe(o,i),t=!1,l()}}}function Me(s){let e,t=s[10].T.split(" ",2)[1]+"",l,n;return{c(){e=L("option"),l=R(t),this.h()},l(o){e=S(o,"OPTION",{});var i=I(e);l=D(i,t),i.forEach(d),this.h()},h(){e.__value=n=s[10],e.value=e.__value},m(o,i){N(o,e,i),b(e,l)},p(o,i){i&16&&t!==(t=o[10].T.split(" ",2)[1]+"")&&Qe(l,t),i&16&&n!==(n=o[10])&&(e.__value=n,e.value=e.__value)},d(o){o&&d(e)}}}function wt(s){let e,t;return e=new Ge({props:{selectedBook:s[1],searchtext:s[3]}}),{c(){Z(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,n){x(e,l,n),t=!0},p(l,n){const o={};n&2&&(o.selectedBook=l[1]),n&8&&(o.searchtext=l[3]),e.$set(o)},i(l){t||(U(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function kt(s){let e,t;return e=new Ge({props:{selectedBook:s[2],searchtext:s[3]}}),{c(){Z(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,n){x(e,l,n),t=!0},p(l,n){const o={};n&4&&(o.selectedBook=l[2]),n&8&&(o.searchtext=l[3]),e.$set(o)},i(l){t||(U(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function Lt(s){let e,t,l,n,o=s[1]!=null&&le(s[1]),i,c,r,a,u,f,_,m,k,B,M=s[5],w=[];for(let h=0;h<M.length;h+=1)w[h]=Ve(ye(s,M,h));let T=o&&Oe(s);const V=[kt,wt],P=[];function y(h,v){return v&2&&(a=null),h[1]!=null&&h[2]?0:(a==null&&(a=!!(h[1]!=null&&St(h[1]))),a?1:-1)}return~(u=y(s,-1))&&(f=P[u]=V[u](s)),{c(){e=L("div"),t=L("div"),l=L("select");for(let h=0;h<w.length;h+=1)w[h].c();n=A(),T&&T.c(),i=A(),c=L("input"),r=A(),f&&f.c(),this.h()},l(h){e=S(h,"DIV",{class:!0});var v=I(e);t=S(v,"DIV",{});var p=I(t);l=S(p,"SELECT",{class:!0});var g=I(l);for(let C=0;C<w.length;C+=1)w[C].l(g);g.forEach(d),n=H(p),T&&T.l(p),i=H(p),c=S(p,"INPUT",{class:!0,placeholder:!0,type:!0}),p.forEach(d),r=H(v),f&&f.l(v),v.forEach(d),this.h()},h(){E(l,"class","select select-bordered w-full max-w-md mb-1 lg:mb-0"),s[1]===void 0&&ae(()=>s[6].call(l)),E(c,"class","input input-bordered w-full max-w-md mb-1"),E(c,"placeholder","Suche"),E(c,"type","search"),E(e,"class",_=`${s[0]?"":"hidden"} flex flex-col overflow-hidden w-full h-full p-1`)},m(h,v){N(h,e,v),b(e,t),b(t,l);for(let p=0;p<w.length;p+=1)w[p].m(l,null);ne(l,s[1]),b(t,n),T&&T.m(t,null),b(t,i),b(t,c),pe(c,s[3]),b(e,r),~u&&P[u].m(e,null),m=!0,k||(B=[q(l,"change",s[6]),q(c,"input",s[8])],k=!0)},p(h,[v]){if(v&32){M=h[5];let g;for(g=0;g<M.length;g+=1){const C=ye(h,M,g);w[g]?w[g].p(C,v):(w[g]=Ve(C),w[g].c(),w[g].m(l,null))}for(;g<w.length;g+=1)w[g].d(1);w.length=M.length}v&34&&ne(l,h[1]),v&2&&(o=h[1]!=null&&le(h[1])),o?T?T.p(h,v):(T=Oe(h),T.c(),T.m(t,i)):T&&(T.d(1),T=null),v&8&&pe(c,h[3]);let p=u;u=y(h,v),u===p?~u&&P[u].p(h,v):(f&&(ce(),G(P[p],1,1,()=>{P[p]=null}),fe()),~u?(f=P[u],f?f.p(h,v):(f=P[u]=V[u](h),f.c()),U(f,1),f.m(e,null)):f=null),(!m||v&1&&_!==(_=`${h[0]?"":"hidden"} flex flex-col overflow-hidden w-full h-full p-1`))&&E(e,"class",_)},i(h){m||(U(f),m=!0)},o(h){G(f),m=!1},d(h){h&&d(e),oe(w,h),T&&T.d(),~u&&P[u].d(),k=!1,Re(B)}}}function le(s){return s.hasOwnProperty("B")}function St(s){return!le(s)}function Tt(s,e,t){let l;ue(s,De,m=>t(9,l=m));let{visible:n}=e,o="",i,c,r,a=[...l.filter(m=>!m.T.startsWith("Jugendmappe ")&&!m.T.startsWith("Weitere ")),{T:"Jugendmappen",B:l.filter(m=>m.T.startsWith("Jugendmappe "))},{T:"Weitere",B:l.filter(m=>m.T.startsWith("Weitere "))}];function u(){i=be(this),t(1,i),t(5,a)}function f(){c=be(this),t(2,c),t(1,i),t(4,r),t(1,i)}function _(){o=this.value,t(3,o)}return s.$$set=m=>{"visible"in m&&t(0,n=m.visible)},s.$$.update=()=>{s.$$.dirty&2&&(i&&le(i)?t(4,r=i.B):(t(4,r=new Array),t(2,c=null))),s.$$.dirty&6&&i&&le(i)&&!c&&t(2,c=i.B[0])},[n,i,c,o,r,a,u,f,_]}class It extends K{constructor(e){super(),X(this,e,Tt,Lt,Q,{visible:0})}}function Pe(s,e,t){const l=s.slice();return l[11]=e[t],l}function Ce(s,e,t){const l=s.slice();return l[14]=e[t],l[16]=t,l}function Et(s){let e,t,l,n;return{c(){e=L("button"),t=R("music_note"),this.h()},l(o){e=S(o,"BUTTON",{class:!0});var i=I(e);t=D(i,"music_note"),i.forEach(d),this.h()},h(){E(e,"class","material-symbols-outlined btn btn-sm btn-circle")},m(o,i){N(o,e,i),b(e,t),l||(n=q(e,"click",s[7]),l=!0)},p:F,d(o){o&&d(e),l=!1,n()}}}function Bt(s){let e,t,l,n;return{c(){e=L("button"),t=R("translate"),this.h()},l(o){e=S(o,"BUTTON",{class:!0});var i=I(e);t=D(i,"translate"),i.forEach(d),this.h()},h(){E(e,"class","material-symbols-outlined btn btn-sm btn-circle")},m(o,i){N(o,e,i),b(e,t),l||(n=q(e,"click",s[6]),l=!0)},p:F,d(o){o&&d(e),l=!1,n()}}}function Nt(s){let e,t,l,n;return{c(){e=L("button"),t=R("subtitles"),this.h()},l(o){e=S(o,"BUTTON",{class:!0});var i=I(e);t=D(i,"subtitles"),i.forEach(d),this.h()},h(){E(e,"class","material-symbols-outlined btn btn-sm btn-circle")},m(o,i){N(o,e,i),b(e,t),l||(n=q(e,"click",s[5]),l=!0)},p:F,d(o){o&&d(e),l=!1,n()}}}function Fe(s){let e,t=we(s[14],s[2])+"";return{c(){e=L("p"),this.h()},l(l){e=S(l,"P",{class:!0});var n=I(e);n.forEach(d),this.h()},h(){E(e,"class",`w-full ${s[8](s[11],s[16])}`)},m(l,n){N(l,e,n),e.innerHTML=t},p(l,n){n&4&&t!==(t=we(l[14],l[2])+"")&&(e.innerHTML=t)},d(l){l&&d(e)}}}function We(s){let e,t=(!s[3].song.M||s[16]===s[11].L.length-1&&s[1]||s[16]%2===0||s[16]!==s[11].L.length-1&&s[0])&&Fe(s);return{c(){t&&t.c(),e=ve()},l(l){t&&t.l(l),e=ve()},m(l,n){t&&t.m(l,n),N(l,e,n)},p(l,n){!l[3].song.M||l[16]===l[11].L.length-1&&l[1]||l[16]%2===0||l[16]!==l[11].L.length-1&&l[0]?t?t.p(l,n):(t=Fe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&d(e)}}}function Ae(s){let e,t,l=s[11].T+"",n,o,i,c=s[11].L,r=[];for(let a=0;a<c.length;a+=1)r[a]=We(Ce(s,c,a));return{c(){e=L("div"),t=L("p"),n=R(l),o=A();for(let a=0;a<r.length;a+=1)r[a].c();i=A(),this.h()},l(a){e=S(a,"DIV",{class:!0});var u=I(e);t=S(u,"P",{class:!0});var f=I(t);n=D(f,l),f.forEach(d),o=H(u);for(let _=0;_<r.length;_+=1)r[_].l(u);i=H(u),u.forEach(d),this.h()},h(){E(t,"class","font-bold"),E(e,"class","w-full pt-2")},m(a,u){N(a,e,u),b(e,t),b(t,n),b(e,o);for(let f=0;f<r.length;f+=1)r[f].m(e,null);b(e,i)},p(a,u){if(u&271){c=a[11].L;let f;for(f=0;f<c.length;f+=1){const _=Ce(a,c,f);r[f]?r[f].p(_,u):(r[f]=We(_),r[f].c(),r[f].m(e,i))}for(;f<r.length;f+=1)r[f].d(1);r.length=c.length}},d(a){a&&d(e),oe(r,a)}}}function yt(s){let e,t,l,n,o=s[3].song.T+"",i,c,r,a,u,f,_,m,k,B,M,w=s[9]&&Et(s),T=s[3].song.M&&Bt(s),V=s[3].song.M&&Nt(s),P=s[3].song.V,y=[];for(let h=0;h<P.length;h+=1)y[h]=Ae(Pe(s,P,h));return{c(){e=L("div"),t=L("div"),l=L("div"),n=L("p"),i=R(o),c=A(),w&&w.c(),r=A(),T&&T.c(),a=A(),V&&V.c(),u=A(),f=L("button"),_=R("X"),m=A(),k=L("div");for(let h=0;h<y.length;h+=1)y[h].c();this.h()},l(h){e=S(h,"DIV",{class:!0});var v=I(e);t=S(v,"DIV",{class:!0});var p=I(t);l=S(p,"DIV",{class:!0});var g=I(l);n=S(g,"P",{class:!0});var C=I(n);i=D(C,o),C.forEach(d),g.forEach(d),c=H(p),w&&w.l(p),r=H(p),T&&T.l(p),a=H(p),V&&V.l(p),u=H(p),f=S(p,"BUTTON",{class:!0});var W=I(f);_=D(W,"X"),W.forEach(d),p.forEach(d),m=H(v),k=S(v,"DIV",{class:!0});var J=I(k);for(let z=0;z<y.length;z+=1)y[z].l(J);J.forEach(d),v.forEach(d),this.h()},h(){E(n,"class","whitespace-nowrap md:ml-8 text-left md:text-center text-ellipsis text-md md:text-1xl font-bold self-center"),E(l,"class","flex-1 flex overflow-hidden ml-2"),E(f,"class","btn btn-sm btn-circle"),E(t,"class","w-full flex mt-2 mr-2 gap-1"),E(k,"class","overflow-auto flex flex-col items-center w-full md:max-w-2xl"),E(e,"class","flex-1 flex flex-col items-center overflow-hidden w-full")},m(h,v){N(h,e,v),b(e,t),b(t,l),b(l,n),b(n,i),b(t,c),w&&w.m(t,null),b(t,r),T&&T.m(t,null),b(t,a),V&&V.m(t,null),b(t,u),b(t,f),b(f,_),b(e,m),b(e,k);for(let p=0;p<y.length;p+=1)y[p].m(k,null);B||(M=q(f,"click",s[4]),B=!0)},p(h,[v]){if(h[9]&&w.p(h,v),h[3].song.M&&T.p(h,v),h[3].song.M&&V.p(h,v),v&271){P=h[3].song.V;let p;for(p=0;p<P.length;p+=1){const g=Pe(h,P,p);y[p]?y[p].p(g,v):(y[p]=Ae(g),y[p].c(),y[p].m(k,null))}for(;p<y.length;p+=1)y[p].d(1);y.length=P.length}},i:F,o:F,d(h){h&&d(e),w&&w.d(),T&&T.d(),V&&V.d(),oe(y,h),B=!1,M()}}}function Vt(s,e,t){const l=window.history.state.song,n=async()=>{window.history.back()};function o(){const k=window.history.state.scrollY;window.scroll(0,k),ge.set(null)}He(()=>(window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)));let i=ke(),c=Le(),r=Se();function a(){nt(),t(0,i=ke())}function u(){ot(),t(1,c=Le())}function f(){it(),t(2,r=Se())}function _(k,B){return l.song.M?B===k.L.length-1?"text-green-600":B%2===1?"text-yellow-600":"":""}const m=l.song.V.some(k=>k.L.some(B=>B.includes("{")));return[i,c,r,l,n,a,u,f,_,m]}class Ot extends K{constructor(e){super(),X(this,e,Vt,yt,Q,{})}}function Mt(s){let e,t,l,n=s[3]+"",o;return{c(){e=L("p"),t=R("Es ist ein Fehler bei dem Laden der Lieder aufgetreten."),l=A(),o=R(n)},l(i){e=S(i,"P",{});var c=I(e);t=D(c,"Es ist ein Fehler bei dem Laden der Lieder aufgetreten."),c.forEach(d),l=H(i),o=D(i,n)},m(i,c){N(i,e,c),b(e,t),N(i,l,c),N(i,o,c)},p:F,i:F,o:F,d(i){i&&d(e),i&&d(l),i&&d(o)}}}function Pt(s){let e,t,l,n,o;const i=[Ft,Ct],c=[];function r(a,u){return a[0]?0:1}return e=r(s),t=c[e]=i[e](s),n=new It({props:{visible:s[0]==null}}),{c(){t.c(),l=A(),Z(n.$$.fragment)},l(a){t.l(a),l=H(a),$(n.$$.fragment,a)},m(a,u){c[e].m(a,u),N(a,l,u),x(n,a,u),o=!0},p(a,u){let f=e;e=r(a),e!==f&&(ce(),G(c[f],1,1,()=>{c[f]=null}),fe(),t=c[e],t||(t=c[e]=i[e](a),t.c()),U(t,1),t.m(l.parentNode,l));const _={};u&1&&(_.visible=a[0]==null),n.$set(_)},i(a){o||(U(t),U(n.$$.fragment,a),o=!0)},o(a){G(t),G(n.$$.fragment,a),o=!1},d(a){c[e].d(a),a&&d(l),ee(n,a)}}}function Ct(s){let e,t,l;return{c(){e=L("div"),t=L("h1"),l=R("Geistliche Lieder!"),this.h()},l(n){e=S(n,"DIV",{class:!0});var o=I(e);t=S(o,"H1",{class:!0});var i=I(t);l=D(i,"Geistliche Lieder!"),i.forEach(d),o.forEach(d),this.h()},h(){E(t,"class","svelte-1t9p47t"),E(e,"class","prose m-auto h-auto mx-auto my-1")},m(n,o){N(n,e,o),b(e,t),b(t,l)},i:F,o:F,d(n){n&&d(e)}}}function Ft(s){let e,t;return e=new Ot({}),{c(){Z(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,n){x(e,l,n),t=!0},i(l){t||(U(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){ee(e,l)}}}function Wt(s){let e,t;return{c(){e=R(`Lade Lieder...\r
    `),t=L("progress"),this.h()},l(l){e=D(l,`Lade Lieder...\r
    `),t=S(l,"PROGRESS",{class:!0}),I(t).forEach(d),this.h()},h(){E(t,"class","progress w-56")},m(l,n){N(l,e,n),N(l,t,n)},p:F,i:F,o:F,d(l){l&&d(e),l&&d(t)}}}function At(s){let e,t,l={ctx:s,current:null,token:null,hasCatch:!0,pending:Wt,then:Pt,catch:Mt,error:3,blocks:[,,,]};return Ze(s[1],l),{c(){e=L("main"),l.block.c(),this.h()},l(n){e=S(n,"MAIN",{class:!0});var o=I(e);l.block.l(o),o.forEach(d),this.h()},h(){E(e,"class","overflow-hidden flex justify-center items-center svelte-1t9p47t")},m(n,o){N(n,e,o),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=null,t=!0},p(n,[o]){s=n,$e(l,s,o)},i(n){t||(U(l.block),t=!0)},o(n){for(let o=0;o<3;o+=1){const i=l.blocks[o];G(i)}t=!1},d(n){n&&d(e),l.block.d(),l.token=null,l=null}}}function Ht(s,e,t){let l;ue(s,ge,i=>t(2,l=i));const n=et();let o;return"scrollRestoration"in history&&(history.scrollRestoration="manual"),s.$$.update=()=>{var i,c;s.$$.dirty&4&&t(0,o=(c=(i=window.history.state)==null?void 0:i.song)!=null?c:null)},[o,n,l]}class Ut extends K{constructor(e){super(),X(this,e,Ht,At,Q,{})}}export{Ut as default};