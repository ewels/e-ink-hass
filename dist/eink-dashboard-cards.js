/* eink-dashboard-cards — built by esbuild */
var X=globalThis,J=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),mt=new WeakMap,I=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(J&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&mt.set(e,t))}return t}toString(){return this.cssText}},g=r=>new I(typeof r=="string"?r:r+"",void 0,Q),x=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new I(e,r,Q)},gt=(r,t)=>{if(J)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=X.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},tt=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return g(e)})(r):r;var{is:zt,defineProperty:It,getOwnPropertyDescriptor:jt,getOwnPropertyNames:Bt,getOwnPropertySymbols:Vt,getPrototypeOf:Wt}=Object,k=globalThis,yt=k.trustedTypes,qt=yt?yt.emptyScript:"",Kt=k.reactiveElementPolyfillSupport,j=(r,t)=>r,et={toAttribute(r,t){switch(t){case Boolean:r=r?qt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},$t=(r,t)=>!zt(r,t),vt={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:$t};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);var S=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&It(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=jt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let l=i?.call(this);n?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??vt}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,s=[...Bt(e),...Vt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(tt(i))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:et).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:et;this._$Em=i;let l=o.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){let o=this.constructor;if(i===!1&&(n=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??$t)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[j("elementProperties")]=new Map,S[j("finalized")]=new Map,Kt?.({ReactiveElement:S}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.1.2");var V=globalThis,_t=r=>r,Y=V.trustedTypes,wt=Y?Y.createPolicy("lit-html",{createHTML:r=>r}):void 0,kt="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Et="?"+E,Gt=`<${Et}>`,T=document,W=()=>T.createComment(""),q=r=>r===null||typeof r!="object"&&typeof r!="function",lt=Array.isArray,Ft=r=>lt(r)||typeof r?.[Symbol.iterator]=="function",st=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xt=/-->/g,bt=/>/g,P=RegExp(`>|${st}(?:([^\\s"'>=/]+)(${st}*=${st}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ct=/'/g,At=/"/g,Pt=/^(?:script|style|textarea|title)$/i,ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=ct(1),$=ct(2),de=ct(3),M=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),St=new WeakMap,H=T.createTreeWalker(T,129);function Ht(r,t){if(!lt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return wt!==void 0?wt.createHTML(t):t}var Xt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=B;for(let l=0;l<e;l++){let a=r[l],h,d,c=-1,v=0;for(;v<a.length&&(o.lastIndex=v,d=o.exec(a),d!==null);)v=o.lastIndex,o===B?d[1]==="!--"?o=xt:d[1]!==void 0?o=bt:d[2]!==void 0?(Pt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=P):d[3]!==void 0&&(o=P):o===P?d[0]===">"?(o=i??B,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?P:d[3]==='"'?At:Ct):o===At||o===Ct?o=P:o===xt||o===bt?o=B:(o=P,i=void 0);let u=o===P&&r[l+1].startsWith("/>")?" ":"";n+=o===B?a+Gt:c>=0?(s.push(h),a.slice(0,c)+kt+a.slice(c)+E+u):a+E+(c===-2?l:u)}return[Ht(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},K=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,l=t.length-1,a=this.parts,[h,d]=Xt(t,e);if(this.el=r.createElement(h,s),H.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=H.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(kt)){let v=d[o++],u=i.getAttribute(c).split(E),w=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:w[2],strings:u,ctor:w[1]==="."?rt:w[1]==="?"?nt:w[1]==="@"?ot:N}),i.removeAttribute(c)}else c.startsWith(E)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(Pt.test(i.tagName)){let c=i.textContent.split(E),v=c.length-1;if(v>0){i.textContent=Y?Y.emptyScript:"";for(let u=0;u<v;u++)i.append(c[u],W()),H.nextNode(),a.push({type:2,index:++n});i.append(c[v],W())}}}else if(i.nodeType===8)if(i.data===Et)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(E,c+1))!==-1;)a.push({type:7,index:n}),c+=E.length-1}n++}}static createElement(t,e){let s=T.createElement("template");return s.innerHTML=t,s}};function D(r,t,e=r,s){if(t===M)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=q(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=D(r,i._$AS(r,t.values),i,s)),t}var it=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??T).importNode(e,!0);H.currentNode=i;let n=H.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new G(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new at(n,this,t)),this._$AV.push(h),a=s[++l]}o!==a?.index&&(n=H.nextNode(),o++)}return H.currentNode=T,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},G=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),q(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ft(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(Ht(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new it(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new K(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(W()),this.O(W()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=_t(t).nextSibling;_t(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=D(this,t,e,0),o=!q(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{let l=t,a,h;for(t=n[0],a=0;a<n.length-1;a++)h=D(this,l[s+a],e,a),h===M&&(h=this._$AH[a]),o||(o=!q(h)||h!==this._$AH[a]),h===f?t=f:t!==f&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},rt=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},nt=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},ot=class extends N{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??f)===M)return;let s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var Jt=V.litHtmlPolyfillSupport;Jt?.(K,G),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.3.3");var Tt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new G(t.insertBefore(W(),n),n,void 0,e??{})}return i._$AI(r),i};var F=globalThis,_=class extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Tt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};_._$litElement$=!0,_.finalized=!0,F.litElementHydrateSupport?.({LitElement:_});var Yt=F.litElementPolyfillSupport;Yt?.({LitElement:_});(F.litElementVersions??(F.litElementVersions=[])).push("4.2.2");function C(r){window.customCards=window.customCards??[],window.customCards.push({preview:!0,...r})}var y={black:"#000000",white:"#ffffff",red:"#ff0000",yellow:"#ffff00",blue:"#0000ff",green:"#00ff00"},Z={low:y.green,mid:"#ff8000",high:y.red};var dt=96,Zt=r=>(r.start?new Date(r.start):new Date(`${r.date} ${r.time}`)).getTime(),Qt=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),L=class extends _{constructor(){super(...arguments);this._config={}}setConfig(e){if(!e?.entity)throw new Error("eink-price-card: 'entity' is required");this._config={title:"Electricity",low_threshold:50,high_threshold:200,...e}}getCardSize(){return 3}series(){let e=this.hass?.states[this._config.entity];if(!e)return null;let s=(c,v)=>{let u=e.attributes[c],w=e.attributes[v];return u?.length?u:w??[]},i=s("current_day_quarterly","current_day"),n=s("next_day_quarterly","next_day");if(!i.length)return null;let o=this._config.low_threshold,l=this._config.high_threshold,a=(c,v)=>{let u=new Date(Zt(c)),w=Math.round(Number(c.price)*100);return{ms:u.getTime(),hour:u.getHours(),minute:u.getMinutes(),date:c.date,ore:w,day:v,level:w<o?"low":w>l?"high":"mid"}},h=[...i.map(c=>a(c,0)),...n.map(c=>a(c,1))],d=n.length?[]:h.map(c=>{let v=new Date(c.ms+864e5);return{...c,ms:v.getTime(),date:v.toISOString(),day:1,empty:!0}});return{points:[...h,...d],realCount:h.length,todayCount:i.length,max:Math.max(...h.map(c=>c.ore))}}cheapestWindow(e,s){if(s<=0||s>e.length)return-1;let i=e.slice(0,s).reduce((l,a)=>l+a.ore,0),n=i,o=0;for(let l=s;l<e.length;l++)i+=e[l].ore-e[l-s].ore,i<n&&(n=i,o=l-s+1);return o}render(){let e=this.series();if(!e)return p`<div class="card empty">No price data (${this._config.entity})</div>`;let{points:s,realCount:i,todayCount:n,max:o}=e,l=s.length,a=n>=96,h=m=>m/(l-1)*100,d=o<=200?50:100,c=[];for(let m=0;m<o;m+=d)c.push(m);let v=Date.now(),u=0;s.forEach((m,b)=>{m.day===0&&m.ms<=v&&(u=b)});let w=this._config.cheapest_window??(a?8:2),ft=this.cheapestWindow(s.slice(u,i),w),ut=ft<0?-1:u+ft,Lt=s.map((m,b)=>({i:b,p:m})).filter(({p:m})=>m.minute===0&&m.hour%6===0),Rt=Math.max(2,s[u].ore/o*100)/100*dt,Ut=Math.max(0,dt-Rt-5);return p`
      <div class="card">
        <div class="head">
          <span class="title">${this._config.title}</span>
          <span class="now">
            <span class="now-label">Max</span>${o}
            <span class="now-label gap">Now</span>${s[u].ore}
            <small>öre/kWh</small>
          </span>
        </div>
        <div class="chart">
          <div class="row">
            <div class="plot">
              <div class="bars">
                ${s.map((m,b)=>m.empty?p`<div class="bar"></div>`:p`<div
                        class="bar ${b<u?"past":m.level}"
                        style="height:${Math.max(2,m.ore/o*100)}%"
                      ></div>`)}
              </div>
              ${i<l?p`<div class="nodata" style="left:${h(n-.5)}%"></div>`:f}
              <div class="now-line" style="left:${h(u)}%;height:${Ut}px"></div>
              ${n<l?p`<div class="divider" style="left:${h(n-.5)}%"></div>`:f}
            </div>
            <div class="yaxis">
              ${c.map(m=>p`<span class="ylabel" style="bottom:${m/o*100}%">${m}</span>`)}
            </div>
          </div>
          <div class="marks">
            ${ut>=0?p`<div
                  class="window"
                  style="left:${h(ut)}%;width:${(w-1)/(l-1)*100}%"
                ></div>`:f}
          </div>
          <div class="axis">
            ${Lt.map(({i:m,p:b},Ot)=>p`<span
                  class="${b.hour===0?"day":""} ${Ot===0?"edge-left":""}"
                  style="left:${h(m)}%"
                  >${b.hour===0?Qt(b.date):String(b.hour).padStart(2,"0")}</span
                >`)}
          </div>
        </div>
      </div>
    `}};L.properties={hass:{attribute:!1},_config:{state:!0}},L.styles=x`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      --low: ${g(Z.low)};
      --mid: ${g(Z.mid)};
      --high: ${g(Z.high)};
      --accent: ${g(y.blue)};
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 10px 14px 6px;
    }
    .empty {
      padding: 24px;
      font-weight: 700;
    }
    .head {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 8px;
    }
    .title,
    .now-label {
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }
    .now {
      font-size: 26px;
      font-weight: 800;
      line-height: 1;
    }
    .now-label {
      margin-right: 8px;
    }
    .now-label.gap {
      margin-left: 28px;
    }
    .now small {
      font-size: 12px;
      font-weight: 700;
    }
    .chart {
      position: relative;
    }
    .row {
      display: flex;
      align-items: stretch;
    }
    .plot {
      position: relative;
      flex: 1 1 auto;
      height: ${dt}px;
      border-bottom: 2px solid var(--ink);
    }
    .bars {
      display: flex;
      align-items: flex-end;
      gap: 1px;
      height: 100%;
    }
    .bar {
      flex: 1 1 0;
      min-width: 0;
      border-radius: 2px 2px 0 0;
    }
    .bar.low {
      background: var(--low);
    }
    .bar.mid {
      background: var(--mid);
    }
    .bar.high {
      background: var(--high);
    }
    .bar.past {
      background: #c0c0c0;
    }
    /* Tomorrow's half before its prices are published. */
    .nodata {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      background: #ececec;
    }
    /* "Now" marker: a downward arrow above the current bar. */
    .now-line {
      position: absolute;
      top: 0;
      width: 0;
      border-left: 2px solid var(--ink);
      transform: translateX(-50%);
    }
    .now-line::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -1px;
      transform: translateX(-50%);
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid var(--ink); /* downward-pointing arrowhead */
    }
    /* Today | tomorrow split. */
    .divider {
      position: absolute;
      top: 0;
      height: 100%;
      border-left: 2px dashed var(--ink);
    }
    /* Cheapest-window marker, in its own strip just below the bars. */
    .marks {
      position: relative;
      height: 6px;
      margin-top: 3px;
      margin-right: 32px; /* align 0–100% with .plot, not .yaxis */
    }
    .window {
      position: absolute;
      top: 0;
      height: 5px;
      background: var(--accent);
      border-radius: 3px;
    }
    .yaxis {
      position: relative;
      width: 32px;
      flex: 0 0 32px;
    }
    .ylabel {
      position: absolute;
      left: 5px;
      transform: translateY(50%);
      font-size: 12px;
      font-weight: 700;
      color: var(--ink);
    }
    .axis {
      position: relative;
      height: 16px;
      margin-top: 2px;
      margin-right: 32px; /* align the 0–100% range with .plot, not .yaxis */
    }
    .axis span {
      position: absolute;
      transform: translateX(-50%);
      font-size: 12px;
      font-weight: 700;
      color: var(--ink);
    }
    .axis span.day {
      font-weight: 800;
      text-transform: uppercase;
    }
    /* Keep the first label from running off the left edge. */
    .axis span.edge-left {
      transform: translateX(0);
    }
  `;C({type:"eink-price-card",name:"E-ink Price Card",description:"Electricity price bars (\xF6re/kWh) coloured by fixed thresholds, for the e-ink panel."});var A=(r="var(--ink)")=>$`
  <g fill=${r}>
    <circle cx="24" cy="32" r="11" />
    <circle cx="37" cy="24" r="14" />
    <circle cx="49" cy="32" r="10" />
    <rect x="22" y="30" width="29" height="12" rx="3" />
  </g>`,Mt=(r=32,t=22,e=11)=>$`
  <g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">
    ${[0,45,90,135,180,225,270,315].map(s=>{let i=s*Math.PI/180;return $`<line
        x1=${r+Math.cos(i)*(e+4)} y1=${t+Math.sin(i)*(e+4)}
        x2=${r+Math.cos(i)*(e+9)} y2=${t+Math.sin(i)*(e+9)} />`})}
  </g>
  <circle cx=${r} cy=${t} r=${e} fill="var(--sun)" />`,Dt=$`
  <g stroke="var(--rain)" stroke-width="3" stroke-linecap="round">
    <line x1="24" y1="42" x2="20" y2="48" />
    <line x1="34" y1="42" x2="30" y2="48" />
    <line x1="44" y1="42" x2="40" y2="48" />
  </g>`,Nt=$`
  <g fill="var(--rain)">
    <circle cx="24" cy="45" r="2.5" />
    <circle cx="34" cy="46" r="2.5" />
    <circle cx="44" cy="45" r="2.5" />
  </g>`,te={sunny:()=>Mt(32,24,13),"clear-night":()=>$`<path
      d="M44 24a16 16 0 1 1-16-16 13 13 0 0 0 16 16z" fill="var(--ink)" />`,partlycloudy:()=>$`${Mt(22,16,9)}${A()}`,cloudy:()=>A(),fog:()=>$`
    ${A("var(--ink)")}
    <g stroke="var(--paper)" stroke-width="2.5">
      <line x1="26" y1="30" x2="48" y2="30" /><line x1="26" y1="36" x2="48" y2="36" />
    </g>`,rainy:()=>$`${A()}${Dt}`,pouring:()=>$`${A()}${Dt}`,snowy:()=>$`${A()}${Nt}`,"snowy-rainy":()=>$`${A()}${Nt}`,lightning:()=>$`${A()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,"lightning-rainy":()=>$`${A()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,windy:()=>$`
    <g stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M10 20h30a6 6 0 1 0-6-6" /><path d="M10 30h40a6 6 0 1 1-6 6" />
    </g>`};function ht(r){return(te[r]??A)()}var ee=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),se={partlycloudy:"Partly cloudy","windy-variant":"Windy, cloudy"},ie=r=>se[r]??r.replace(/-/g," ").replace(/^\w/,t=>t.toUpperCase()),R=class extends _{constructor(){super(...arguments);this._config={};this._forecast=[];this._loaded=!1}setConfig(e){if(!e?.entity)throw new Error("eink-weather-card: 'entity' is required");this._config={days:4,...e}}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadForecast())}async _loadForecast(){let e=this._config.entity;try{let i=(await this.hass.callApi("POST","services/weather/get_forecasts?return_response=true",{entity_id:e,type:"daily"}))?.service_response?.[e]?.forecast??[];this._forecast=i.map(n=>({date:n.datetime,condition:n.condition,tempHigh:n.temperature,tempLow:n.templow,precipitation:n.precipitation,precipProbability:n.precipitation_probability}))}catch{}}render(){let e=this.hass?.states[this._config.entity];if(!e)return p`<div class="card empty">No weather (${this._config.entity})</div>`;let s=this._forecast.slice(0,this._config.days),i=s.map(d=>d.tempLow),n=s.map(d=>d.tempHigh),o=Math.min(...i,e.attributes.temperature??1/0),l=Math.max(...n,e.attributes.temperature??-1/0),a=Math.max(1,l-o),h=d=>(d-o)/a*100;return p`
      <div class="card">
        <div class="current">
          <div class="icon-lg">
            <svg viewBox="0 0 64 48">${ht(e.state)}</svg>
          </div>
          <div class="cur-text">
            <div class="cond">${ie(e.state)}</div>
            <div class="temp">${Math.round(e.attributes.temperature)}°</div>
          </div>
        </div>
        <div class="forecast">
          ${s.map(d=>p`
              <div class="row">
                <span class="dow">${ee(d.date)}</span>
                <svg class="icon-sm" viewBox="0 0 64 48">${ht(d.condition)}</svg>
                <span class="lo">${Math.round(d.tempLow)}°</span>
                <span class="bar">
                  <span
                    class="fill"
                    style="left:${h(d.tempLow)}%;right:${100-h(d.tempHigh)}%"
                  ></span>
                </span>
                <span class="hi">${Math.round(d.tempHigh)}°</span>
              </div>
            `)}
        </div>
      </div>
    `}};R.properties={hass:{attribute:!1},_config:{state:!0},_forecast:{state:!0}},R.styles=x`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      --sun: #808080;
      --rain: ${g(y.black)};
      --track: #c8c8c8;
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 12px 16px;
    }
    .empty {
      padding: 24px;
      font-weight: 700;
    }
    .current {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin-bottom: 12px;
    }
    .icon-lg svg {
      width: 96px;
      height: 72px;
      display: block;
    }
    .cond {
      font-size: 16px;
      font-weight: 700;
    }
    .temp {
      font-size: 54px;
      font-weight: 800;
      line-height: 1;
    }
    .forecast {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
      font-weight: 700;
    }
    .dow {
      width: 42px;
    }
    .icon-sm {
      width: 30px;
      height: 24px;
      flex: 0 0 auto;
    }
    .lo {
      width: 38px;
      text-align: right;
    }
    .hi {
      width: 38px;
      text-align: right;
    }
    .bar {
      position: relative;
      flex: 1 1 auto;
      height: 10px;
      background: var(--track);
      border-radius: 5px;
    }
    .fill {
      position: absolute;
      top: 0;
      bottom: 0;
      background: var(--ink);
      border-radius: 5px;
    }
  `;C({type:"eink-weather-card",name:"E-ink Weather Card",description:"Current conditions + daily forecast with temperature range bars, for the e-ink panel."});var pt=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t},re=r=>new Date(r).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),U=class extends _{constructor(){super(...arguments);this._config={};this._events=[];this._loaded=!1}setConfig(e){this._config={title:"Calendar",days:3,entities:[],...e}}getCardSize(){return 6}sources(){return(this._config.entities??[]).map(e=>typeof e=="string"?{entity:e}:e)}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadEvents())}async _loadEvents(){let e=pt(new Date),s=new Date(e.getTime()+(this._config.days??3)*864e5),i=`start=${encodeURIComponent(e.toISOString())}&end=${encodeURIComponent(s.toISOString())}`;try{let n=await Promise.all(this.sources().map(async o=>(await this.hass.callApi("GET",`calendars/${o.entity}?${i}`)??[]).map(a=>({start:a.start?.dateTime??a.start?.date,end:a.end?.dateTime??a.end?.date,title:a.summary??"(busy)",location:a.location,allDay:!!a.start?.date,color:o.color??"var(--ink)"}))));this._events=n.flat().sort((o,l)=>o.start.localeCompare(l.start))}catch{}}render(){let e=this._config.days??3,s=pt(new Date);return p`
      <div class="card">
        <div class="title">${this._config.title}</div>
        <div class="days">
          ${Array.from({length:e},(i,n)=>{let o=new Date(s.getTime()+n*864e5),l=this._events.filter(a=>pt(new Date(a.start)).getTime()===o.getTime());return this.renderDay(o,l)})}
        </div>
      </div>
    `}renderDay(e,s){return p`
      <div class="day">
        <div class="date">
          <span class="dow">${e.toLocaleDateString("en-GB",{weekday:"short"})}</span>
          <span class="num">${e.getDate()}</span>
          <span class="mon">${e.toLocaleDateString("en-GB",{month:"short"})}</span>
        </div>
        <div class="events">
          ${s.length===0?p`<div class="event empty"><span class="txt muted">No events</span></div>`:s.map(i=>p`
                  <div class="event">
                    <span class="rail" style="background:${i.color}"></span>
                    <span class="txt">
                      <span class="etitle">${i.title}</span>
                      ${i.allDay?f:p`<span class="etime">${re(i.start)}</span>`}
                      ${i.location?p`<span class="eloc">${i.location}</span>`:f}
                    </span>
                  </div>
                `)}
        </div>
      </div>
    `}};U.properties={hass:{attribute:!1},_config:{state:!0},_events:{state:!0}},U.styles=x`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      display: block;
    }
    .card {
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 12px 16px;
    }
    .title {
      font-size: 15px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 10px;
    }
    .days {
      display: flex;
      flex-direction: column;
    }
    .day {
      display: flex;
      gap: 14px;
      padding: 10px 0;
      border-top: 2px solid var(--ink);
    }
    .day:first-child {
      border-top: none;
    }
    .date {
      width: 46px;
      flex: 0 0 46px;
      text-align: center;
      line-height: 1.05;
    }
    .date .dow {
      display: block;
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .date .num {
      display: block;
      font-size: 30px;
      font-weight: 800;
    }
    .date .mon {
      display: block;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .events {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      gap: 7px;
      justify-content: center;
    }
    .event {
      display: flex;
      gap: 9px;
      align-items: stretch;
    }
    .rail {
      flex: 0 0 4px;
      border-radius: 2px;
    }
    .event.empty .rail {
      display: none;
    }
    .txt {
      display: flex;
      flex-direction: column;
    }
    .etitle {
      font-size: 18px;
      font-weight: 700;
    }
    .etime,
    .eloc {
      font-size: 13px;
      font-weight: 700;
    }
    .eloc {
      color: var(--ink);
      opacity: 0.85;
    }
    .muted {
      font-size: 16px;
      font-style: italic;
    }
  `;C({type:"eink-calendar-card",name:"E-ink Calendar Card",description:"Day-grouped calendar agenda with colour-coded events, for the e-ink panel."});var O=class extends _{constructor(){super(...arguments);this._config={}}setConfig(e){this._config={items:[],...e}}getCardSize(){return 1}value(e){let s=this.hass?.states[e.entity];if(!s||s.state==="unavailable"||s.state==="unknown")return{value:"\u2014",unit:""};let i=Number(s.state);return{value:Number.isFinite(i)?i.toFixed(e.decimals??0):s.state,unit:s.attributes.unit_of_measurement??""}}render(){let e=this._config.items??[];return p`
      <div class="card">
        ${e.map(s=>{let{value:i,unit:n}=this.value(s);return p`
            <div class="tile">
              <div class="val">${i}<span class="unit">${n}</span></div>
              <div class="lbl">${s.label}</div>
            </div>
          `})}
      </div>
    `}};O.properties={hass:{attribute:!1},_config:{state:!0}},O.styles=x`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      display: block;
    }
    .card {
      display: flex;
      justify-content: space-between;
      gap: 8px;
      background: var(--paper);
      color: var(--ink);
      font-family: Helvetica, Arial, sans-serif;
      padding: 7px 16px;
    }
    .tile {
      flex: 1 1 0;
      min-width: 0;
    }
    .val {
      font-size: 25px;
      font-weight: 800;
      line-height: 1;
    }
    .unit {
      font-size: 13px;
      font-weight: 700;
      margin-left: 2px;
    }
    .lbl {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      margin-top: 3px;
    }
  `;C({type:"eink-conditions-card",name:"E-ink Conditions Card",description:"Compact strip of sensor tiles (temperature, CO\u2082, \u2026) for the e-ink panel."});var z=class extends _{constructor(){super(...arguments);this._config={};this._children=[];this._buildToken=0}setConfig(e){this._config=e??{}}getCardSize(){return 10}updated(e){e.has("_config")?(this._buildToken+=1,this._build(this._buildToken)):e.has("hass")&&this._forwardHass()}async _build(e){let s=[{slot:"weather",cfg:this._config.weather,defaultType:"custom:eink-weather-card"},{slot:"price",cfg:this._config.price,defaultType:"custom:eink-price-card"},{slot:"calendar",cfg:this._config.calendar,defaultType:"custom:eink-calendar-card"}];this._config.conditions&&s.splice(1,0,{slot:"conditions",cfg:this._config.conditions,defaultType:"custom:eink-conditions-card"});let i=window.loadCardHelpers?await window.loadCardHelpers():null;if(e===this._buildToken){this._children=[];for(let{slot:n,cfg:o,defaultType:l}of s){let a=this.renderRoot.querySelector(`.${n}`);if(!a)continue;let h={type:l,...o??{}},d=i?i.createCardElement(h):this._fallbackCard(h);a.replaceChildren(d),this._children.push(d)}this._forwardHass()}}_fallbackCard(e){let s=document.createElement(String(e.type).replace(/^custom:/,""));return s.setConfig?.(e),s}_forwardHass(){if(this.hass)for(let e of this._children)e.hass=this.hass}render(){return p`
      <div class="panel">
        <div class="top">
          <div class="left">
            <div class="slot weather"></div>
            <div class="slot conditions"></div>
          </div>
          <div class="right">
            <div class="slot calendar"></div>
          </div>
        </div>
        <div class="slot price"></div>
      </div>
    `}};z.properties={hass:{attribute:!1},_config:{state:!0}},z.styles=x`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      /* Force a light theme so embedded HA-themed cards (e.g. clock-weather-card)
         render on white regardless of the frontend theme Puppet screenshots. */
      --ha-card-background: #ffffff;
      --card-background-color: #ffffff;
      --ha-card-box-shadow: none;
      --ha-card-border-width: 0px;
      --primary-text-color: #000000;
      --secondary-text-color: #000000;
      --primary-background-color: #ffffff;
      --divider-color: #000000;
      display: block;
    }
    .panel {
      width: 800px;
      height: 480px;
      background: var(--paper);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .top {
      flex: 1 1 auto;
      display: flex;
      min-height: 0;
    }
    .top .left {
      flex: 0 0 57%;
      display: flex;
      flex-direction: column;
      min-width: 0;
      min-height: 0;
    }
    .top .right {
      flex: 1 1 auto;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    }
    /* Weather may be a tall card (clock-weather-card); let it shrink/clip rather
       than overflow its column. */
    .left .weather {
      flex: 0 1 auto;
      min-height: 0;
      overflow: hidden;
    }
    .left .conditions {
      flex: 0 0 auto;
    }
    /* Price chart spans the full width along the bottom. */
    .price {
      flex: 0 0 auto;
    }
    .slot {
      min-width: 0;
    }
    .slot.conditions:empty {
      display: none;
    }
  `;C({type:"eink-panel-card",name:"E-ink Panel",description:"Composes the weather, price and calendar cards into the 800\xD7480 e-ink layout."});var ne=[["eink-price-card",L],["eink-weather-card",R],["eink-calendar-card",U],["eink-conditions-card",O],["eink-panel-card",z]];for(let[r,t]of ne)customElements.get(r)||customElements.define(r,t);console.info("%c eink-dashboard-cards %c 0.1.0 ","background:#0000ff;color:#fff;font-weight:700","background:#008000;color:#fff");
