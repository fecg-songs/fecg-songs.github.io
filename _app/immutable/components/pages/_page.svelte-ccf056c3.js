import{S as G,i as q,s as z,k as w,l as S,m as E,h as d,p as W,H as te,I as Ie,b as I,F as k,J as Ne,K as P,g as se,L as Fe,d as ne,f as F,t as C,o as Oe,B as Ce,a as H,c as R,C as Ae,D as He,E as Re,M as De,z as ee,N as fe,q as B,r as V,n as T,u as le,A as y,v as K,w as X,x as Q,y as Z,G as oe,O as he,P as _e,Q as ie,R as Pe,T as Me,U as Ue,V as We}from"../../chunks/index-3c1f63a2.js";import{w as re}from"../../chunks/index-440be7a1.js";const ae="Alle Lieder",ce="Favoriten",Te=re([{T:ae,S:[]},{T:ce,S:[]}]),Le=re({}),ue=re(null);async function Ge(){let s=localStorage.getItem("songs");if(!s){s=await(await fetch("songs.json")).text();try{localStorage.setItem("songs",s)}catch{}}return JSON.parse(s)}async function qe(){const s=await Ge(),e={};s.B.forEach(t=>{Te.update(n=>[...n,t]);const l=[];for(const n of t.S)l.push({song:s.S.find(o=>o.I===n.V),songInsideBook:n});e[t.T]=l}),e[ae]=s.S.sort((t,l)=>t.T>l.T?1:-1).map(t=>({song:t})),e[ce]=[],Le.set(e)}function ze(s){let e="",t=!1;for(let l=0;l<s.length;l++){const n=s[l];n==="{"?t=!0:n==="}"?t=!1:t||(e+=n)}return e}function Ye(s){const e=localStorage.getItem("favorites");return e!=null&&e.includes(s)}function je(s){var t;let e=(t=localStorage.getItem("favorites"))!=null?t:"";s=`${s};`,e.length&&e.includes(s)?e=e.replace(s,""):e+=s;try{localStorage.setItem("favorites",e)}catch{}}function Je(){const s=localStorage.getItem("favorites");return s?s.split(";"):[]}function Ke(s,e){if(e.trim()==="")return!0;const t=s.song.T.toLocaleLowerCase();e=e.toLocaleLowerCase();const l=Number(e);return!Number.isNaN(l)&&s.songInsideBook?s.songInsideBook.I===l:!!e.trim().split(" ").every(o=>t.includes(o))}function de(s,e,t){const l=s.slice();return l[23]=e[t],l}const Xe=s=>({item:s&16}),ge=s=>({item:s[23].data});function Qe(s){let e;return{c(){e=B("Missing template")},l(t){e=V(t,"Missing template")},m(t,l){I(t,e,l)},d(t){t&&d(e)}}}function me(s,e){let t,l,n;const o=e[14].default,i=Ce(o,e,e[13],ge),a=i||Qe();return{key:s,first:null,c(){t=w("svelte-virtual-list-row"),a&&a.c(),l=H(),this.h()},l(f){t=S(f,"SVELTE-VIRTUAL-LIST-ROW",{class:!0});var r=E(t);a&&a.l(r),l=R(r),r.forEach(d),this.h()},h(){te(t,"class","svelte-102fq2u"),this.first=t},m(f,r){I(f,t,r),a&&a.m(t,null),k(t,l),n=!0},p(f,r){e=f,i&&i.p&&(!n||r&8208)&&Ae(i,o,e,e[13],n?Re(o,e[13],r,Xe):He(e[13]),ge)},i(f){n||(F(a,f),n=!0)},o(f){C(a,f),n=!1},d(f){f&&d(t),a&&a.d(f)}}}function Ze(s){let e,t,l=[],n=new Map,o,i,a,f,r=s[4];const m=u=>u[23].index;for(let u=0;u<r.length;u+=1){let c=de(s,r,u),_=m(c);n.set(_,l[u]=me(_,c))}return{c(){e=w("svelte-virtual-list-viewport"),t=w("svelte-virtual-list-contents");for(let u=0;u<l.length;u+=1)l[u].c();this.h()},l(u){e=S(u,"SVELTE-VIRTUAL-LIST-VIEWPORT",{style:!0,class:!0});var c=E(e);t=S(c,"SVELTE-VIRTUAL-LIST-CONTENTS",{style:!0,class:!0});var _=E(t);for(let h=0;h<l.length;h+=1)l[h].l(_);_.forEach(d),c.forEach(d),this.h()},h(){W(t,"padding-top",s[5]+"px"),W(t,"padding-bottom",s[6]+"px"),te(t,"class","svelte-102fq2u"),W(e,"height",s[0]),te(e,"class","svelte-102fq2u"),Ie(()=>s[17].call(e))},m(u,c){I(u,e,c),k(e,t);for(let _=0;_<l.length;_+=1)l[_].m(t,null);s[15](t),s[16](e),o=Ne(e,s[17].bind(e)),i=!0,a||(f=P(e,"scroll",s[7]),a=!0)},p(u,[c]){c&8208&&(r=u[4],se(),l=Fe(l,c,m,1,u,r,n,t,De,me,null,de),ne()),(!i||c&32)&&W(t,"padding-top",u[5]+"px"),(!i||c&64)&&W(t,"padding-bottom",u[6]+"px"),(!i||c&1)&&W(e,"height",u[0])},i(u){if(!i){for(let c=0;c<r.length;c+=1)F(l[c]);i=!0}},o(u){for(let c=0;c<l.length;c+=1)C(l[c]);i=!1},d(u){u&&d(e);for(let c=0;c<l.length;c+=1)l[c].d();s[15](null),s[16](null),o(),a=!1,f()}}}function $e(s,e,t){let{$$slots:l={},$$scope:n}=e,{items:o}=e,{height:i="100%"}=e,{itemHeight:a=void 0}=e,{start:f=0}=e,{end:r=0}=e,m=[],u,c,_,h=0,g,p,v=0,N=0,A;async function $(b,M,O){const{scrollTop:D}=c;await ee();let j=v-D,L=f;for(;j<M&&L<b.length;){let J=u[L-f];J||(t(9,r=L+1),await ee(),J=u[L-f]),j+=m[L]=O||J.offsetHeight,L+=1}t(9,r=L);const x=b.length-r;A=(v+j)/r,t(6,N=x*A),m.length=b.length}async function Y(){const{scrollTop:b}=c,M=f;for(let L=0;L<u.length;L+=1)m[f+L]=a||u[L].offsetHeight;let O=0,D=0;for(;O<o.length;){const L=m[O]||A;if(D+L>b){t(8,f=O),t(5,v=D);break}D+=L,O+=1}for(;O<o.length&&(D+=m[O]||A,O+=1,!(D>b+h)););t(9,r=O);const j=o.length-r;for(A=D/r;O<o.length;)m[O++]=A;if(t(6,N=j*A),f<M){await ee();let L=0,x=0;for(let U=f;U<M;U+=1)u[U-f]&&(L+=m[U],x+=a||u[U-f].offsetHeight);const J=x-L;c.scrollTo(0,b+J)}}Oe(()=>{u=_.getElementsByTagName("svelte-virtual-list-row"),t(12,p=!0)});function ye(b){fe[b?"unshift":"push"](()=>{_=b,t(3,_)})}function Be(b){fe[b?"unshift":"push"](()=>{c=b,t(2,c)})}function Ve(){h=this.offsetHeight,t(1,h)}return s.$$set=b=>{"items"in b&&t(10,o=b.items),"height"in b&&t(0,i=b.height),"itemHeight"in b&&t(11,a=b.itemHeight),"start"in b&&t(8,f=b.start),"end"in b&&t(9,r=b.end),"$$scope"in b&&t(13,n=b.$$scope)},s.$$.update=()=>{s.$$.dirty&1792&&t(4,g=o.slice(f,r).map((b,M)=>({index:M+f,data:b}))),s.$$.dirty&7170&&p&&$(o,h,a)},[i,h,c,_,g,v,N,Y,f,r,o,a,p,n,l,ye,Be,Ve]}class xe extends G{constructor(e){super(),q(this,e,$e,Ze,z,{items:10,height:0,itemHeight:11,start:8,end:9})}}function et(s){let e,t,l,n;return{c(){e=w("button"),t=B("\uE83A"),this.h()},l(o){e=S(o,"BUTTON",{class:!0});var i=E(e);t=V(i,"\uE83A"),i.forEach(d),this.h()},h(){T(e,"class","material-icons")},m(o,i){I(o,e,i),k(e,t),l||(n=P(e,"click",s[3]),l=!0)},p:y,d(o){o&&d(e),l=!1,n()}}}function tt(s){let e,t,l,n;return{c(){e=w("button"),t=B("\uF0EC"),this.h()},l(o){e=S(o,"BUTTON",{class:!0});var i=E(e);t=V(i,"\uF0EC"),i.forEach(d),this.h()},h(){T(e,"class","material-icons")},m(o,i){I(o,e,i),k(e,t),l||(n=P(e,"click",s[3]),l=!0)},p:y,d(o){o&&d(e),l=!1,n()}}}function lt(s){let e,t,l=s[0].songInsideBook!=null?`${s[0].songInsideBook.I} - `:"",n,o=s[0].song.T+"",i,a,f,r;function m(_,h){return _[1]?tt:et}let u=m(s),c=u(s);return{c(){e=w("div"),t=w("p"),n=B(l),i=B(o),a=H(),c.c(),this.h()},l(_){e=S(_,"DIV",{class:!0});var h=E(e);t=S(h,"P",{class:!0});var g=E(t);n=V(g,l),i=V(g,o),g.forEach(d),a=R(h),c.l(h),h.forEach(d),this.h()},h(){T(t,"class","flex-1 whitespace-nowrap overflow-hidden"),T(e,"class","flex")},m(_,h){I(_,e,h),k(e,t),k(t,n),k(t,i),k(e,a),c.m(e,null),f||(r=P(t,"click",s[2]),f=!0)},p(_,[h]){h&1&&l!==(l=_[0].songInsideBook!=null?`${_[0].songInsideBook.I} - `:"")&&le(n,l),h&1&&o!==(o=_[0].song.T+"")&&le(i,o),u===(u=m(_))&&c?c.p(_,h):(c.d(1),c=u(_),c&&(c.c(),c.m(e,null)))},i:y,o:y,d(_){_&&d(e),c.d(),f=!1,r()}}}function st(s,e,t){let{songWithInsideBook:l}=e;const n=()=>{window.history.replaceState({scrollY:window.scrollY},""),window.history.pushState({song:l},""),window.scroll(0,0),ue.set(l.song.I)};let o=!1;const i=()=>{je(l.song.I),t(1,o=!o)};return s.$$set=a=>{"songWithInsideBook"in a&&t(0,l=a.songWithInsideBook)},s.$$.update=()=>{s.$$.dirty&1&&t(1,o=Ye(l.song.I))},[l,o,n,i]}class nt extends G{constructor(e){super(),q(this,e,st,lt,z,{songWithInsideBook:0})}}function ot(s){let e,t;return e=new nt({props:{songWithInsideBook:s[4]}}),{c(){K(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){Q(e,l,n),t=!0},p(l,n){const o={};n&16&&(o.songWithInsideBook=l[4]),e.$set(o)},i(l){t||(F(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function it(s){let e,t,l;return t=new xe({props:{items:s[0],height:"100%",$$slots:{default:[ot,({item:n})=>({4:n}),({item:n})=>n?16:0]},$$scope:{ctx:s}}}),{c(){e=w("div"),K(t.$$.fragment),this.h()},l(n){e=S(n,"DIV",{id:!0,class:!0});var o=E(e);X(t.$$.fragment,o),o.forEach(d),this.h()},h(){T(e,"id","wrapper"),T(e,"class","svelte-1okee08")},m(n,o){I(n,e,o),Q(t,e,null),l=!0},p(n,[o]){const i={};o&1&&(i.items=n[0]),o&48&&(i.$$scope={dirty:o,ctx:n}),t.$set(i)},i(n){l||(F(t.$$.fragment,n),l=!0)},o(n){C(t.$$.fragment,n),l=!1},d(n){n&&d(e),Z(t)}}}function rt(s,e,t){let l;oe(s,Le,a=>t(3,l=a));let{selectedBook:n}=e,{searchtext:o}=e,i;return s.$$set=a=>{"selectedBook"in a&&t(1,n=a.selectedBook),"searchtext"in a&&t(2,o=a.searchtext)},s.$$.update=()=>{if(s.$$.dirty&14){let a;if(n.T!==ce)a=l[n.T];else{const f=l[ae],r=Je();a=f.filter(m=>r.includes(m.song.I))}t(0,i=a.filter(f=>Ke(f,o)))}},[i,n,o,l]}class at extends G{constructor(e){super(),q(this,e,rt,it,z,{selectedBook:1,searchtext:2})}}function pe(s,e,t){const l=s.slice();return l[6]=e[t],l}function ve(s){let e,t=s[6].T+"",l,n;return{c(){e=w("option"),l=B(t),this.h()},l(o){e=S(o,"OPTION",{});var i=E(e);l=V(i,t),i.forEach(d),this.h()},h(){e.__value=n=s[6],e.value=e.__value},m(o,i){I(o,e,i),k(e,l)},p(o,i){i&8&&t!==(t=o[6].T+"")&&le(l,t),i&8&&n!==(n=o[6])&&(e.__value=n,e.value=e.__value)},d(o){o&&d(e)}}}function be(s){let e,t;return e=new at({props:{selectedBook:s[2],searchtext:s[1]}}),{c(){K(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){Q(e,l,n),t=!0},p(l,n){const o={};n&4&&(o.selectedBook=l[2]),n&2&&(o.searchtext=l[1]),e.$set(o)},i(l){t||(F(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function ct(s){let e,t,l,n,o,i,a,f,r,m,u=s[3],c=[];for(let h=0;h<u.length;h+=1)c[h]=ve(pe(s,u,h));let _=s[2]!=null&&be(s);return{c(){e=w("div"),t=w("div"),l=w("select");for(let h=0;h<c.length;h+=1)c[h].c();n=H(),o=w("input"),i=H(),_&&_.c(),this.h()},l(h){e=S(h,"DIV",{class:!0});var g=E(e);t=S(g,"DIV",{});var p=E(t);l=S(p,"SELECT",{class:!0});var v=E(l);for(let N=0;N<c.length;N+=1)c[N].l(v);v.forEach(d),n=R(p),o=S(p,"INPUT",{class:!0,placeholder:!0}),p.forEach(d),i=R(g),_&&_.l(g),g.forEach(d),this.h()},h(){T(l,"class","select select-bordered w-full max-w-md mb-1 lg:mb-0"),s[2]===void 0&&Ie(()=>s[4].call(l)),T(o,"class","input input-bordered w-full max-w-md"),T(o,"placeholder","Suche"),T(e,"class",a=`${s[0]?"":"hidden"} flex flex-col overflow-hidden w-full h-full`)},m(h,g){I(h,e,g),k(e,t),k(t,l);for(let p=0;p<c.length;p+=1)c[p].m(l,null);he(l,s[2]),k(t,n),k(t,o),_e(o,s[1]),k(e,i),_&&_.m(e,null),f=!0,r||(m=[P(l,"change",s[4]),P(o,"input",s[5])],r=!0)},p(h,[g]){if(g&8){u=h[3];let p;for(p=0;p<u.length;p+=1){const v=pe(h,u,p);c[p]?c[p].p(v,g):(c[p]=ve(v),c[p].c(),c[p].m(l,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=u.length}g&12&&he(l,h[2]),g&2&&o.value!==h[1]&&_e(o,h[1]),h[2]!=null?_?(_.p(h,g),g&4&&F(_,1)):(_=be(h),_.c(),F(_,1),_.m(e,null)):_&&(se(),C(_,1,1,()=>{_=null}),ne()),(!f||g&1&&a!==(a=`${h[0]?"":"hidden"} flex flex-col overflow-hidden w-full h-full`))&&T(e,"class",a)},i(h){f||(F(_),f=!0)},o(h){C(_),f=!1},d(h){h&&d(e),ie(c,h),_&&_.d(),r=!1,Pe(m)}}}function ut(s,e,t){let l;oe(s,Te,r=>t(3,l=r));let{visible:n}=e,o="",i;function a(){i=Me(this),t(2,i)}function f(){o=this.value,t(1,o)}return s.$$set=r=>{"visible"in r&&t(0,n=r.visible)},[n,o,i,l,a,f]}class ft extends G{constructor(e){super(),q(this,e,ut,ct,z,{visible:0})}}function ke(s,e,t){const l=s.slice();return l[3]=e[t],l}function we(s,e,t){const l=s.slice();return l[6]=e[t],l}function Se(s){let e,t=ze(s[6])+"",l;return{c(){e=w("p"),l=B(t),this.h()},l(n){e=S(n,"P",{class:!0});var o=E(e);l=V(o,t),o.forEach(d),this.h()},h(){T(e,"class","w-fit")},m(n,o){I(n,e,o),k(e,l)},p:y,d(n){n&&d(e)}}}function Ee(s){let e,t,l=s[3].T+"",n,o,i,a=s[3].L,f=[];for(let r=0;r<a.length;r+=1)f[r]=Se(we(s,a,r));return{c(){e=w("div"),t=w("p"),n=B(l),o=H();for(let r=0;r<f.length;r+=1)f[r].c();i=H(),this.h()},l(r){e=S(r,"DIV",{class:!0});var m=E(e);t=S(m,"P",{class:!0});var u=E(t);n=V(u,l),u.forEach(d),o=R(m);for(let c=0;c<f.length;c+=1)f[c].l(m);i=R(m),m.forEach(d),this.h()},h(){T(t,"class","font-bold"),T(e,"class","w-fit")},m(r,m){I(r,e,m),k(e,t),k(t,n),k(e,o);for(let u=0;u<f.length;u+=1)f[u].m(e,null);k(e,i)},p(r,m){if(m&1){a=r[3].L;let u;for(u=0;u<a.length;u+=1){const c=we(r,a,u);f[u]?f[u].p(c,m):(f[u]=Se(c),f[u].c(),f[u].m(e,i))}for(;u<f.length;u+=1)f[u].d(1);f.length=a.length}},d(r){r&&d(e),ie(f,r)}}}function ht(s){let e,t,l,n=s[0].song.T+"",o,i,a,f,r,m,u,c,_=s[0].song.V,h=[];for(let g=0;g<_.length;g+=1)h[g]=Ee(ke(s,_,g));return{c(){e=w("div"),t=w("div"),l=w("h1"),o=B(n),i=H(),a=w("button"),f=B("X"),r=H(),m=w("div");for(let g=0;g<h.length;g+=1)h[g].c();this.h()},l(g){e=S(g,"DIV",{});var p=E(e);t=S(p,"DIV",{class:!0});var v=E(t);l=S(v,"H1",{});var N=E(l);o=V(N,n),N.forEach(d),v.forEach(d),i=R(p),a=S(p,"BUTTON",{class:!0});var A=E(a);f=V(A,"X"),A.forEach(d),p.forEach(d),r=R(g),m=S(g,"DIV",{class:!0});var $=E(m);for(let Y=0;Y<h.length;Y+=1)h[Y].l($);$.forEach(d),this.h()},h(){T(t,"class","prose m-auto pb-1 inline-block"),T(a,"class","btn btn-sm btn-circle absolute right-2 top-2"),T(m,"class","overflow-auto flex flex-col items-center")},m(g,p){I(g,e,p),k(e,t),k(t,l),k(l,o),k(e,i),k(e,a),k(a,f),I(g,r,p),I(g,m,p);for(let v=0;v<h.length;v+=1)h[v].m(m,null);u||(c=P(a,"click",s[1]),u=!0)},p(g,[p]){if(p&1){_=g[0].song.V;let v;for(v=0;v<_.length;v+=1){const N=ke(g,_,v);h[v]?h[v].p(N,p):(h[v]=Ee(N),h[v].c(),h[v].m(m,null))}for(;v<h.length;v+=1)h[v].d(1);h.length=_.length}},i:y,o:y,d(g){g&&d(e),g&&d(r),g&&d(m),ie(h,g),u=!1,c()}}}function _t(s){const e=window.history.state.song,t=async()=>{window.addEventListener("popstate",l),window.history.back()};function l(){window.removeEventListener("popstate",l);const n=window.history.state.scrollY;window.scroll(0,n),ue.set(null)}return[e,t]}class dt extends G{constructor(e){super(),q(this,e,_t,ht,z,{})}}function gt(s){let e,t,l,n=s[3]+"",o;return{c(){e=w("p"),t=B("Es ist ein Fehler bei dem Laden der Lieder aufgetreten."),l=H(),o=B(n)},l(i){e=S(i,"P",{});var a=E(e);t=V(a,"Es ist ein Fehler bei dem Laden der Lieder aufgetreten."),a.forEach(d),l=R(i),o=V(i,n)},m(i,a){I(i,e,a),k(e,t),I(i,l,a),I(i,o,a)},p:y,i:y,o:y,d(i){i&&d(e),i&&d(l),i&&d(o)}}}function mt(s){let e,t,l,n,o;const i=[vt,pt],a=[];function f(r,m){return r[0]?0:1}return e=f(s),t=a[e]=i[e](s),n=new ft({props:{visible:s[0]==null}}),{c(){t.c(),l=H(),K(n.$$.fragment)},l(r){t.l(r),l=R(r),X(n.$$.fragment,r)},m(r,m){a[e].m(r,m),I(r,l,m),Q(n,r,m),o=!0},p(r,m){let u=e;e=f(r),e!==u&&(se(),C(a[u],1,1,()=>{a[u]=null}),ne(),t=a[e],t||(t=a[e]=i[e](r),t.c()),F(t,1),t.m(l.parentNode,l));const c={};m&1&&(c.visible=r[0]==null),n.$set(c)},i(r){o||(F(t),F(n.$$.fragment,r),o=!0)},o(r){C(t),C(n.$$.fragment,r),o=!1},d(r){a[e].d(r),r&&d(l),Z(n,r)}}}function pt(s){let e,t,l;return{c(){e=w("div"),t=w("h1"),l=B("FECG Lieder!"),this.h()},l(n){e=S(n,"DIV",{class:!0});var o=E(e);t=S(o,"H1",{class:!0});var i=E(t);l=V(i,"FECG Lieder!"),i.forEach(d),o.forEach(d),this.h()},h(){T(t,"class","svelte-1t9p47t"),T(e,"class","prose m-auto pb-1 h-auto my-0 mx-auto")},m(n,o){I(n,e,o),k(e,t),k(t,l)},i:y,o:y,d(n){n&&d(e)}}}function vt(s){let e,t;return e=new dt({}),{c(){K(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,n){Q(e,l,n),t=!0},i(l){t||(F(e.$$.fragment,l),t=!0)},o(l){C(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function bt(s){let e,t;return{c(){e=B(`Lade Lieder...\r
    `),t=w("progress"),this.h()},l(l){e=V(l,`Lade Lieder...\r
    `),t=S(l,"PROGRESS",{class:!0}),E(t).forEach(d),this.h()},h(){T(t,"class","progress w-56")},m(l,n){I(l,e,n),I(l,t,n)},p:y,i:y,o:y,d(l){l&&d(e),l&&d(t)}}}function kt(s){let e,t,l={ctx:s,current:null,token:null,hasCatch:!0,pending:bt,then:mt,catch:gt,error:3,blocks:[,,,]};return Ue(s[1],l),{c(){e=w("main"),l.block.c(),this.h()},l(n){e=S(n,"MAIN",{class:!0});var o=E(e);l.block.l(o),o.forEach(d),this.h()},h(){T(e,"class","overflow-hidden flex justify-center items-center svelte-1t9p47t")},m(n,o){I(n,e,o),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=null,t=!0},p(n,[o]){s=n,We(l,s,o)},i(n){t||(F(l.block),t=!0)},o(n){for(let o=0;o<3;o+=1){const i=l.blocks[o];C(i)}t=!1},d(n){n&&d(e),l.block.d(),l.token=null,l=null}}}function wt(s,e,t){let l;oe(s,ue,i=>t(2,l=i));const n=qe();let o;return"scrollRestoration"in history&&(history.scrollRestoration="manual"),s.$$.update=()=>{var i,a;s.$$.dirty&4&&t(0,o=(a=(i=window.history.state)==null?void 0:i.song)!=null?a:null)},[o,n,l]}class It extends G{constructor(e){super(),q(this,e,wt,kt,z,{})}}export{It as default};
