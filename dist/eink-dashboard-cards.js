/* eink-dashboard-cards — built by esbuild */
var X=globalThis,J=X.ShadowRoot&&(X.ShadyCSS===void 0||X.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),ft=new WeakMap,I=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(J&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=ft.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ft.set(e,t))}return t}toString(){return this.cssText}},u=r=>new I(typeof r=="string"?r:r+"",void 0,Q),x=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new I(e,r,Q)},ut=(r,t)=>{if(J)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=X.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},tt=J?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return u(e)})(r):r;var{is:Lt,defineProperty:Ut,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:zt,getOwnPropertySymbols:It,getPrototypeOf:jt}=Object,S=globalThis,mt=S.trustedTypes,Bt=mt?mt.emptyScript:"",Vt=S.reactiveElementPolyfillSupport,j=(r,t)=>r,et={toAttribute(r,t){switch(t){case Boolean:r=r?Bt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},yt=(r,t)=>!Lt(r,t),gt={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ut(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:n}=Ot(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:s,set(o){let c=s?.call(this);n?.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gt}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;let t=jt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){let e=this.properties,i=[...zt(e),...It(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(tt(s))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute!==void 0?i.converter:et).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:et;this._$Em=s;let c=o.fromAttribute(e,n.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(t!==void 0){let o=this.constructor;if(s===!1&&(n=this[t]),i??(i=o.getPropertyOptions(t)),!((i.hasChanged??yt)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,n]of i){let{wrapped:o}=n,c=this[s];o!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,n,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[j("elementProperties")]=new Map,C[j("finalized")]=new Map,Vt?.({ReactiveElement:C}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.1.2");var V=globalThis,vt=r=>r,Y=V.trustedTypes,$t=Y?Y.createPolicy("lit-html",{createHTML:r=>r}):void 0,At="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,St="?"+k,Wt=`<${St}>`,T=document,W=()=>T.createComment(""),q=r=>r===null||typeof r!="object"&&typeof r!="function",lt=Array.isArray,qt=r=>lt(r)||typeof r?.[Symbol.iterator]=="function",it=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_t=/-->/g,xt=/>/g,P=RegExp(`>|${it}(?:([^\\s"'>=/]+)(${it}*=${it}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wt=/'/g,bt=/"/g,kt=/^(?:script|style|textarea|title)$/i,ct=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=ct(1),$=ct(2),oe=ct(3),M=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),Ct=new WeakMap,H=T.createTreeWalker(T,129);function Et(r,t){if(!lt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}var Kt=(r,t)=>{let e=r.length-1,i=[],s,n=t===2?"<svg>":t===3?"<math>":"",o=B;for(let c=0;c<e;c++){let a=r[c],h,l,d=-1,m=0;for(;m<a.length&&(o.lastIndex=m,l=o.exec(a),l!==null);)m=o.lastIndex,o===B?l[1]==="!--"?o=_t:l[1]!==void 0?o=xt:l[2]!==void 0?(kt.test(l[2])&&(s=RegExp("</"+l[2],"g")),o=P):l[3]!==void 0&&(o=P):o===P?l[0]===">"?(o=s??B,d=-1):l[1]===void 0?d=-2:(d=o.lastIndex-l[2].length,h=l[1],o=l[3]===void 0?P:l[3]==='"'?bt:wt):o===bt||o===wt?o=P:o===_t||o===xt?o=B:(o=P,s=void 0);let v=o===P&&r[c+1].startsWith("/>")?" ":"";n+=o===B?a+Wt:d>=0?(i.push(h),a.slice(0,d)+At+a.slice(d)+k+v):a+k+(d===-2?c:v)}return[Et(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},K=class r{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0,c=t.length-1,a=this.parts,[h,l]=Kt(t,e);if(this.el=r.createElement(h,i),H.currentNode=this.el.content,e===2||e===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=H.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(At)){let m=l[o++],v=s.getAttribute(d).split(k),E=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:E[2],strings:v,ctor:E[1]==="."?rt:E[1]==="?"?nt:E[1]==="@"?ot:N}),s.removeAttribute(d)}else d.startsWith(k)&&(a.push({type:6,index:n}),s.removeAttribute(d));if(kt.test(s.tagName)){let d=s.textContent.split(k),m=d.length-1;if(m>0){s.textContent=Y?Y.emptyScript:"";for(let v=0;v<m;v++)s.append(d[v],W()),H.nextNode(),a.push({type:2,index:++n});s.append(d[m],W())}}}else if(s.nodeType===8)if(s.data===St)a.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(k,d+1))!==-1;)a.push({type:7,index:n}),d+=k.length-1}n++}}static createElement(t,e){let i=T.createElement("template");return i.innerHTML=t,i}};function D(r,t,e=r,i){if(t===M)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl,n=q(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=D(r,s._$AS(r,t.values),s,i)),t}var st=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);H.currentNode=s;let n=H.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new G(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new at(n,this,t)),this._$AV.push(h),a=i[++c]}o!==a?.index&&(n=H.nextNode(),o++)}return H.currentNode=T,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},G=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),q(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):qt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&q(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=K.createElement(Et(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{let n=new st(s,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=Ct.get(t.strings);return e===void 0&&Ct.set(t.strings,e=new K(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let n of t)s===e.length?e.push(i=new r(this.O(W()),this.O(W()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let i=vt(t).nextSibling;vt(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},N=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){let n=this.strings,o=!1;if(n===void 0)t=D(this,t,e,0),o=!q(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{let c=t,a,h;for(t=n[0],a=0;a<n.length-1;a++)h=D(this,c[i+a],e,a),h===M&&(h=this._$AH[a]),o||(o=!q(h)||h!==this._$AH[a]),h===p?t=p:t!==p&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},rt=class extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},nt=class extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},ot=class extends N{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??p)===M)return;let i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},at=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}};var Gt=V.litHtmlPolyfillSupport;Gt?.(K,G),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.3.3");var Pt=(r,t,e)=>{let i=e?.renderBefore??t,s=i._$litPart$;if(s===void 0){let n=e?.renderBefore??null;i._$litPart$=s=new G(t.insertBefore(W(),n),n,void 0,e??{})}return s._$AI(r),s};var F=globalThis,_=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return M}};_._$litElement$=!0,_.finalized=!0,F.litElementHydrateSupport?.({LitElement:_});var Ft=F.litElementPolyfillSupport;Ft?.({LitElement:_});(F.litElementVersions??(F.litElementVersions=[])).push("4.2.2");function w(r){window.customCards=window.customCards??[],window.customCards.push({preview:!0,...r})}var y={black:"#000000",white:"#ffffff",red:"#ff0000",yellow:"#ffd400",blue:"#0000ff",green:"#008000"},Z={low:y.green,mid:y.yellow,high:y.red};var dt=96,Xt=r=>(r.start?new Date(r.start):new Date(`${r.date} ${r.time}`)).getTime(),Jt=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),R=class extends _{constructor(){super(...arguments);this._config={}}setConfig(e){if(!e?.entity)throw new Error("eink-price-card: 'entity' is required");this._config={title:"Electricity",low_threshold:50,high_threshold:200,...e}}getCardSize(){return 3}series(){let e=this.hass?.states[this._config.entity];if(!e)return null;let i=(l,d)=>{let m=e.attributes[l],v=e.attributes[d];return m?.length?m:v??[]},s=i("current_day_quarterly","current_day"),n=i("next_day_quarterly","next_day");if(!s.length)return null;let o=this._config.low_threshold,c=this._config.high_threshold,a=(l,d)=>{let m=new Date(Xt(l)),v=Math.round(Number(l.price)*100);return{ms:m.getTime(),hour:m.getHours(),minute:m.getMinutes(),date:l.date,ore:v,day:d,level:v<o?"low":v>c?"high":"mid"}},h=[...s.map(l=>a(l,0)),...n.map(l=>a(l,1))];return{points:h,todayCount:s.length,max:Math.max(...h.map(l=>l.ore))}}cheapestWindow(e,i){if(i<=0||i>e.length)return-1;let s=e.slice(0,i).reduce((c,a)=>c+a.ore,0),n=s,o=0;for(let c=i;c<e.length;c++)s+=e[c].ore-e[c-i].ore,s<n&&(n=s,o=c-i+1);return o}render(){let e=this.series();if(!e)return f`<div class="card empty">No price data (${this._config.entity})</div>`;let{points:i,todayCount:s,max:n}=e,o=i.length,c=s>=96,a=g=>g/(o-1)*100,h=n<=200?50:100,l=[];for(let g=0;g<n;g+=h)l.push(g);let d=Date.now(),m=0;i.forEach((g,A)=>{g.day===0&&g.ms<=d&&(m=A)});let v=this._config.cheapest_window??(c?8:2),E=this.cheapestWindow(i,v),Dt=i.map((g,A)=>({i:A,p:g})).filter(({p:g})=>g.minute===0&&g.hour%6===0),Nt=Math.max(2,i[m].ore/n*100)/100*dt,Rt=Math.max(0,dt-Nt-5);return f`
      <div class="card">
        <div class="head">
          <span class="title">${this._config.title}</span>
          <span class="now">
            <span class="now-label">Now</span>${i[m].ore}
            <small>öre/kWh</small>
          </span>
        </div>
        <div class="chart">
          <div class="row">
            <div class="plot">
              <div class="bars">
                ${i.map(g=>f`<div class="bar ${g.level}" style="height:${Math.max(2,g.ore/n*100)}%"></div>`)}
              </div>
              <div class="now-line" style="left:${a(m)}%;height:${Rt}px"></div>
              ${s<o?f`<div class="divider" style="left:${a(s-.5)}%"></div>`:p}
            </div>
            <div class="yaxis">
              ${l.map(g=>f`<span class="ylabel" style="bottom:${g/n*100}%">${g}</span>`)}
            </div>
          </div>
          <div class="marks">
            ${E>=0?f`<div
                  class="window"
                  style="left:${a(E)}%;width:${(v-1)/(o-1)*100}%"
                ></div>`:p}
          </div>
          <div class="axis">
            ${Dt.map(({i:g,p:A})=>f`<span class="${A.hour===0?"day":""}" style="left:${a(g)}%"
                  >${A.hour===0?Jt(A.date):String(A.hour).padStart(2,"0")}</span
                >`)}
          </div>
        </div>
      </div>
    `}};R.properties={hass:{attribute:!1},_config:{state:!0}},R.styles=x`
    :host {
      --ink: ${u(y.black)};
      --paper: ${u(y.white)};
      --low: ${u(Z.low)};
      --mid: ${u(Z.mid)};
      --high: ${u(Z.high)};
      --accent: ${u(y.blue)};
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
    /* "Now" marker: vertical line above the current bar. */
    .now-line {
      position: absolute;
      top: 0;
      width: 0;
      border-left: 2px solid var(--ink);
      transform: translateX(-50%);
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
  `;w({type:"eink-price-card",name:"E-ink Price Card",description:"Electricity price bars (\xF6re/kWh) coloured by fixed thresholds, for the e-ink panel."});var b=(r="var(--ink)")=>$`
  <g fill=${r}>
    <circle cx="24" cy="32" r="11" />
    <circle cx="37" cy="24" r="14" />
    <circle cx="49" cy="32" r="10" />
    <rect x="22" y="30" width="29" height="12" rx="3" />
  </g>`,Ht=(r=32,t=22,e=11)=>$`
  <g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">
    ${[0,45,90,135,180,225,270,315].map(i=>{let s=i*Math.PI/180;return $`<line
        x1=${r+Math.cos(s)*(e+4)} y1=${t+Math.sin(s)*(e+4)}
        x2=${r+Math.cos(s)*(e+9)} y2=${t+Math.sin(s)*(e+9)} />`})}
  </g>
  <circle cx=${r} cy=${t} r=${e} fill="var(--sun)" />`,Tt=$`
  <g stroke="var(--rain)" stroke-width="3" stroke-linecap="round">
    <line x1="24" y1="42" x2="20" y2="48" />
    <line x1="34" y1="42" x2="30" y2="48" />
    <line x1="44" y1="42" x2="40" y2="48" />
  </g>`,Mt=$`
  <g fill="var(--rain)">
    <circle cx="24" cy="45" r="2.5" />
    <circle cx="34" cy="46" r="2.5" />
    <circle cx="44" cy="45" r="2.5" />
  </g>`,Yt={sunny:()=>Ht(32,24,13),"clear-night":()=>$`<path
      d="M44 24a16 16 0 1 1-16-16 13 13 0 0 0 16 16z" fill="var(--ink)" />`,partlycloudy:()=>$`${Ht(22,16,9)}${b()}`,cloudy:()=>b(),fog:()=>$`
    ${b("var(--ink)")}
    <g stroke="var(--paper)" stroke-width="2.5">
      <line x1="26" y1="30" x2="48" y2="30" /><line x1="26" y1="36" x2="48" y2="36" />
    </g>`,rainy:()=>$`${b()}${Tt}`,pouring:()=>$`${b()}${Tt}`,snowy:()=>$`${b()}${Mt}`,"snowy-rainy":()=>$`${b()}${Mt}`,lightning:()=>$`${b()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,"lightning-rainy":()=>$`${b()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,windy:()=>$`
    <g stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M10 20h30a6 6 0 1 0-6-6" /><path d="M10 30h40a6 6 0 1 1-6 6" />
    </g>`};function ht(r){return(Yt[r]??b)()}var Zt=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),Qt=r=>r.replace(/-/g," ").replace(/^\w/,t=>t.toUpperCase()),L=class extends _{constructor(){super(...arguments);this._config={};this._forecast=[];this._loaded=!1}setConfig(e){if(!e?.entity)throw new Error("eink-weather-card: 'entity' is required");this._config={days:4,...e}}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadForecast())}async _loadForecast(){let e=this._config.entity;try{let s=(await this.hass.callApi("POST","services/weather/get_forecasts?return_response=true",{entity_id:e,type:"daily"}))?.service_response?.[e]?.forecast??[];this._forecast=s.map(n=>({date:n.datetime,condition:n.condition,tempHigh:n.temperature,tempLow:n.templow,precipitation:n.precipitation,precipProbability:n.precipitation_probability}))}catch{}}render(){let e=this.hass?.states[this._config.entity];if(!e)return f`<div class="card empty">No weather (${this._config.entity})</div>`;let i=this._forecast.slice(0,this._config.days),s=i.map(l=>l.tempLow),n=i.map(l=>l.tempHigh),o=Math.min(...s,e.attributes.temperature??1/0),c=Math.max(...n,e.attributes.temperature??-1/0),a=Math.max(1,c-o),h=l=>(l-o)/a*100;return f`
      <div class="card">
        <div class="current">
          <div class="icon-lg">
            <svg viewBox="0 0 64 48">${ht(e.state)}</svg>
          </div>
          <div class="cur-text">
            <div class="cond">${Qt(e.state)}</div>
            <div class="temp">${Math.round(e.attributes.temperature)}°</div>
          </div>
        </div>
        <div class="forecast">
          ${i.map(l=>f`
              <div class="row">
                <span class="dow">${Zt(l.date)}</span>
                <svg class="icon-sm" viewBox="0 0 64 48">${ht(l.condition)}</svg>
                <span class="lo">${Math.round(l.tempLow)}°</span>
                <span class="bar">
                  <span
                    class="fill"
                    style="left:${h(l.tempLow)}%;right:${100-h(l.tempHigh)}%"
                  ></span>
                </span>
                <span class="hi">${Math.round(l.tempHigh)}°</span>
              </div>
            `)}
        </div>
      </div>
    `}};L.properties={hass:{attribute:!1},_config:{state:!0},_forecast:{state:!0}},L.styles=x`
    :host {
      --ink: ${u(y.black)};
      --paper: ${u(y.white)};
      --sun: ${u(y.yellow)};
      --rain: ${u(y.blue)};
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
      gap: 12px;
      margin-bottom: 12px;
    }
    .icon-lg svg {
      width: 96px;
      height: 72px;
      display: block;
    }
    .cur-text {
      margin-left: auto;
      text-align: right;
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
  `;w({type:"eink-weather-card",name:"E-ink Weather Card",description:"Current conditions + daily forecast with temperature range bars, for the e-ink panel."});var pt=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t},te=r=>new Date(r).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),U=class extends _{constructor(){super(...arguments);this._config={};this._events=[];this._loaded=!1}setConfig(e){this._config={title:"Calendar",days:3,entities:[],...e}}getCardSize(){return 6}sources(){return(this._config.entities??[]).map(e=>typeof e=="string"?{entity:e}:e)}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadEvents())}async _loadEvents(){let e=pt(new Date),i=new Date(e.getTime()+(this._config.days??3)*864e5),s=`start=${encodeURIComponent(e.toISOString())}&end=${encodeURIComponent(i.toISOString())}`;try{let n=await Promise.all(this.sources().map(async o=>(await this.hass.callApi("GET",`calendars/${o.entity}?${s}`)??[]).map(a=>({start:a.start?.dateTime??a.start?.date,end:a.end?.dateTime??a.end?.date,title:a.summary??"(busy)",location:a.location,allDay:!!a.start?.date,color:o.color??"var(--ink)"}))));this._events=n.flat().sort((o,c)=>o.start.localeCompare(c.start))}catch{}}render(){let e=this._config.days??3,i=pt(new Date);return f`
      <div class="card">
        <div class="title">${this._config.title}</div>
        <div class="days">
          ${Array.from({length:e},(s,n)=>{let o=new Date(i.getTime()+n*864e5),c=this._events.filter(a=>pt(new Date(a.start)).getTime()===o.getTime());return this.renderDay(o,c)})}
        </div>
      </div>
    `}renderDay(e,i){return f`
      <div class="day">
        <div class="date">
          <span class="dow">${e.toLocaleDateString("en-GB",{weekday:"short"})}</span>
          <span class="num">${e.getDate()}</span>
          <span class="mon">${e.toLocaleDateString("en-GB",{month:"short"})}</span>
        </div>
        <div class="events">
          ${i.length===0?f`<div class="event empty"><span class="txt muted">No events</span></div>`:i.map(s=>f`
                  <div class="event">
                    <span class="rail" style="background:${s.color}"></span>
                    <span class="txt">
                      <span class="etitle">${s.title}</span>
                      ${s.allDay?p:f`<span class="etime">${te(s.start)}</span>`}
                      ${s.location?f`<span class="eloc">${s.location}</span>`:p}
                    </span>
                  </div>
                `)}
        </div>
      </div>
    `}};U.properties={hass:{attribute:!1},_config:{state:!0},_events:{state:!0}},U.styles=x`
    :host {
      --ink: ${u(y.black)};
      --paper: ${u(y.white)};
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
  `;w({type:"eink-calendar-card",name:"E-ink Calendar Card",description:"Day-grouped calendar agenda with colour-coded events, for the e-ink panel."});var O=class extends _{constructor(){super(...arguments);this._config={}}setConfig(e){this._config={items:[],...e}}getCardSize(){return 1}value(e){let i=this.hass?.states[e.entity];if(!i||i.state==="unavailable"||i.state==="unknown")return{value:"\u2014",unit:""};let s=Number(i.state);return{value:Number.isFinite(s)?s.toFixed(e.decimals??0):i.state,unit:i.attributes.unit_of_measurement??""}}render(){let e=this._config.items??[];return f`
      <div class="card">
        ${e.map(i=>{let{value:s,unit:n}=this.value(i);return f`
            <div class="tile">
              <div class="val">${s}<span class="unit">${n}</span></div>
              <div class="lbl">${i.label}</div>
            </div>
          `})}
      </div>
    `}};O.properties={hass:{attribute:!1},_config:{state:!0}},O.styles=x`
    :host {
      --ink: ${u(y.black)};
      --paper: ${u(y.white)};
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
  `;w({type:"eink-conditions-card",name:"E-ink Conditions Card",description:"Compact strip of sensor tiles (temperature, CO\u2082, \u2026) for the e-ink panel."});var z=class extends _{constructor(){super(...arguments);this._config={};this._children=[];this._buildToken=0}setConfig(e){this._config=e??{}}getCardSize(){return 10}updated(e){e.has("_config")?(this._buildToken+=1,this._build(this._buildToken)):e.has("hass")&&this._forwardHass()}async _build(e){let i=[{slot:"weather",cfg:this._config.weather,defaultType:"custom:eink-weather-card"},{slot:"price",cfg:this._config.price,defaultType:"custom:eink-price-card"},{slot:"calendar",cfg:this._config.calendar,defaultType:"custom:eink-calendar-card"}];this._config.conditions&&i.splice(1,0,{slot:"conditions",cfg:this._config.conditions,defaultType:"custom:eink-conditions-card"});let s=window.loadCardHelpers?await window.loadCardHelpers():null;if(e===this._buildToken){this._children=[];for(let{slot:n,cfg:o,defaultType:c}of i){let a=this.renderRoot.querySelector(`.${n}`);if(!a)continue;let h={type:c,...o??{}},l=s?s.createCardElement(h):this._fallbackCard(h);a.replaceChildren(l),this._children.push(l)}this._forwardHass()}}_fallbackCard(e){let i=document.createElement(String(e.type).replace(/^custom:/,""));return i.setConfig?.(e),i}_forwardHass(){if(this.hass)for(let e of this._children)e.hass=this.hass}render(){return f`
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
      --ink: ${u(y.black)};
      --paper: ${u(y.white)};
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
      border-left: 2px solid var(--ink);
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
      border-top: 2px solid var(--ink);
    }
    .slot {
      min-width: 0;
    }
    .slot.conditions:empty {
      display: none;
    }
    .slot.conditions:not(:empty) {
      border-top: 2px solid var(--ink);
    }
  `;w({type:"eink-panel-card",name:"E-ink Panel",description:"Composes the weather, price and calendar cards into the 800\xD7480 e-ink layout."});var ee=[["eink-price-card",R],["eink-weather-card",L],["eink-calendar-card",U],["eink-conditions-card",O],["eink-panel-card",z]];for(let[r,t]of ee)customElements.get(r)||customElements.define(r,t);console.info("%c eink-dashboard-cards %c 0.1.0 ","background:#0000ff;color:#fff;font-weight:700","background:#008000;color:#fff");
