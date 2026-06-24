/* eink-dashboard-cards — built by esbuild */
var F=globalThis,X=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),pt=new WeakMap,z=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(X&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&pt.set(e,t))}return t}toString(){return this.cssText}},g=r=>new z(typeof r=="string"?r:r+"",void 0,Z),w=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new z(e,r,Z)},ut=(r,t)=>{if(X)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=F.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Q=X?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return g(e)})(r):r;var{is:Nt,defineProperty:Ut,getOwnPropertyDescriptor:Ot,getOwnPropertyNames:Lt,getOwnPropertySymbols:zt,getPrototypeOf:It}=Object,C=globalThis,ft=C.trustedTypes,Bt=ft?ft.emptyScript:"",jt=C.reactiveElementPolyfillSupport,I=(r,t)=>r,tt={toAttribute(r,t){switch(t){case Boolean:r=r?Bt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},gt=(r,t)=>!Nt(r,t),mt={attribute:!0,type:String,converter:tt,reflect:!1,useDefault:!1,hasChanged:gt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),C.litPropertyMetadata??(C.litPropertyMetadata=new WeakMap);var b=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=Ot(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let c=i?.call(this);n?.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mt}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;let t=It(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){let e=this.properties,s=[...Lt(e),...zt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Q(i))}else t!==void 0&&e.push(Q(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:tt).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:tt;this._$Em=i;let c=o.fromAttribute(e,n.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){let o=this.constructor;if(i===!1&&(n=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??gt)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,n,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[I("elementProperties")]=new Map,b[I("finalized")]=new Map,jt?.({ReactiveElement:b}),(C.reactiveElementVersions??(C.reactiveElementVersions=[])).push("2.1.2");var j=globalThis,yt=r=>r,J=j.trustedTypes,$t=J?J.createPolicy("lit-html",{createHTML:r=>r}):void 0,At="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Ct="?"+S,Vt=`<${Ct}>`,M=document,V=()=>M.createComment(""),W=r=>r===null||typeof r!="object"&&typeof r!="function",at=Array.isArray,Wt=r=>at(r)||typeof r?.[Symbol.iterator]=="function",et=`[ 	
\f\r]`,B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,_t=/>/g,P=RegExp(`>|${et}(?:([^\\s"'>=/]+)(${et}*=${et}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,wt=/"/g,St=/^(?:script|style|textarea|title)$/i,lt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),m=lt(1),v=lt(2),ne=lt(3),T=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),bt=new WeakMap,H=M.createTreeWalker(M,129);function Et(r,t){if(!at(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return $t!==void 0?$t.createHTML(t):t}var qt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=B;for(let c=0;c<e;c++){let a=r[c],d,l,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,l=o.exec(a),l!==null);)u=o.lastIndex,o===B?l[1]==="!--"?o=vt:l[1]!==void 0?o=_t:l[2]!==void 0?(St.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=P):l[3]!==void 0&&(o=P):o===P?l[0]===">"?(o=i??B,h=-1):l[1]===void 0?h=-2:(h=o.lastIndex-l[2].length,d=l[1],o=l[3]===void 0?P:l[3]==='"'?wt:xt):o===wt||o===xt?o=P:o===vt||o===_t?o=B:(o=P,i=void 0);let $=o===P&&r[c+1].startsWith("/>")?" ":"";n+=o===B?a+Vt:h>=0?(s.push(d),a.slice(0,h)+At+a.slice(h)+S+$):a+S+(h===-2?c:$)}return[Et(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},q=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,c=t.length-1,a=this.parts,[d,l]=qt(t,e);if(this.el=r.createElement(d,s),H.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=H.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(At)){let u=l[o++],$=i.getAttribute(h).split(S),k=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:k[2],strings:$,ctor:k[1]==="."?it:k[1]==="?"?rt:k[1]==="@"?nt:D}),i.removeAttribute(h)}else h.startsWith(S)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(St.test(i.tagName)){let h=i.textContent.split(S),u=h.length-1;if(u>0){i.textContent=J?J.emptyScript:"";for(let $=0;$<u;$++)i.append(h[$],V()),H.nextNode(),a.push({type:2,index:++n});i.append(h[u],V())}}}else if(i.nodeType===8)if(i.data===Ct)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(S,h+1))!==-1;)a.push({type:7,index:n}),h+=S.length-1}n++}}static createElement(t,e){let s=M.createElement("template");return s.innerHTML=t,s}};function R(r,t,e=r,s){if(t===T)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=W(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=R(r,i._$AS(r,t.values),i,s)),t}var st=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);H.currentNode=i;let n=H.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new K(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new ot(n,this,t)),this._$AV.push(d),a=s[++c]}o!==a?.index&&(n=H.nextNode(),o++)}return H.currentNode=M,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},K=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),W(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&W(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=q.createElement(Et(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new st(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=bt.get(t.strings);return e===void 0&&bt.set(t.strings,e=new q(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(V()),this.O(V()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=yt(t).nextSibling;yt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=R(this,t,e,0),o=!W(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{let c=t,a,d;for(t=n[0],a=0;a<n.length-1;a++)d=R(this,c[s+a],e,a),d===T&&(d=this._$AH[a]),o||(o=!W(d)||d!==this._$AH[a]),d===p?t=p:t!==p&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},it=class extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},rt=class extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},nt=class extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??p)===T)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ot=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}};var Kt=j.litHtmlPolyfillSupport;Kt?.(q,K),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.3.3");var kt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new K(t.insertBefore(V(),n),n,void 0,e??{})}return i._$AI(r),i};var G=globalThis,_=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};_._$litElement$=!0,_.finalized=!0,G.litElementHydrateSupport?.({LitElement:_});var Gt=G.litElementPolyfillSupport;Gt?.({LitElement:_});(G.litElementVersions??(G.litElementVersions=[])).push("4.2.2");function E(r){window.customCards=window.customCards??[],window.customCards.push({preview:!0,...r})}var y={black:"#000000",white:"#ffffff",red:"#ff0000",yellow:"#ffd400",blue:"#0000ff",green:"#008000"},Y={low:y.green,mid:y.yellow,high:y.red};var ct=132,Ft=r=>(r.start?new Date(r.start):new Date(`${r.date} ${r.time}`)).getTime(),Xt=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),N=class extends _{constructor(){super(...arguments);this._config={}}setConfig(e){this._config={entity:"sensor.greenely_prices",title:"Electricity",low_threshold:50,high_threshold:200,...e}}getCardSize(){return 3}series(){let e=this.hass?.states[this._config.entity];if(!e)return null;let s=(l,h)=>{let u=e.attributes[l],$=e.attributes[h];return u?.length?u:$??[]},i=s("current_day_quarterly","current_day"),n=s("next_day_quarterly","next_day");if(!i.length)return null;let o=this._config.low_threshold,c=this._config.high_threshold,a=(l,h)=>{let u=new Date(Ft(l)),$=Math.round(Number(l.price)*100);return{ms:u.getTime(),hour:u.getHours(),minute:u.getMinutes(),date:l.date,ore:$,day:h,level:$<o?"low":$>c?"high":"mid"}},d=[...i.map(l=>a(l,0)),...n.map(l=>a(l,1))];return{points:d,todayCount:i.length,max:Math.max(...d.map(l=>l.ore))}}cheapestWindow(e,s){if(s<=0||s>e.length)return-1;let i=e.slice(0,s).reduce((c,a)=>c+a.ore,0),n=i,o=0;for(let c=s;c<e.length;c++)i+=e[c].ore-e[c-s].ore,i<n&&(n=i,o=c-s+1);return o}render(){let e=this.series();if(!e)return m`<div class="card empty">No price data (${this._config.entity})</div>`;let{points:s,todayCount:i,max:n}=e,o=s.length,c=i>=96,a=f=>f/(o-1)*100,d=n<=200?50:100,l=[];for(let f=0;f<n;f+=d)l.push(f);let h=Date.now(),u=0;s.forEach((f,A)=>{f.day===0&&f.ms<=h&&(u=A)});let $=this._config.cheapest_window??(c?8:2),k=this.cheapestWindow(s,$),Tt=s.map((f,A)=>({i:A,p:f})).filter(({p:f})=>f.minute===0&&f.hour%6===0),Rt=Math.max(2,s[u].ore/n*100)/100*ct,Dt=Math.max(0,ct-Rt-5);return m`
      <div class="card">
        <div class="head">
          <span class="title">${this._config.title}</span>
          <span class="now">
            <span class="now-label">Now</span>${s[u].ore}
            <small>öre/kWh</small>
          </span>
        </div>
        <div class="chart">
          <div class="row">
            <div class="plot">
              <div class="bars">
                ${s.map(f=>m`<div class="bar ${f.level}" style="height:${Math.max(2,f.ore/n*100)}%"></div>`)}
              </div>
              <div class="now-line" style="left:${a(u)}%;height:${Dt}px"></div>
              ${i<o?m`<div class="divider" style="left:${a(i-.5)}%"></div>`:p}
            </div>
            <div class="yaxis">
              ${l.map(f=>m`<span class="ylabel" style="bottom:${f/n*100}%">${f}</span>`)}
            </div>
          </div>
          <div class="marks">
            ${k>=0?m`<div
                  class="window"
                  style="left:${a(k)}%;width:${($-1)/(o-1)*100}%"
                ></div>`:p}
          </div>
          <div class="axis">
            ${Tt.map(({i:f,p:A})=>m`<span class="${A.hour===0?"day":""}" style="left:${a(f)}%"
                  >${A.hour===0?Xt(A.date):String(A.hour).padStart(2,"0")}</span
                >`)}
          </div>
        </div>
      </div>
    `}};N.properties={hass:{attribute:!1},_config:{state:!0}},N.styles=w`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      --low: ${g(Y.low)};
      --mid: ${g(Y.mid)};
      --high: ${g(Y.high)};
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
      height: ${ct}px;
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
  `;E({type:"eink-price-card",name:"E-ink Price Card",description:"Electricity price bars (\xF6re/kWh) coloured by fixed thresholds, for the e-ink panel."});var x=(r="var(--ink)")=>v`
  <g fill=${r}>
    <circle cx="24" cy="32" r="11" />
    <circle cx="37" cy="24" r="14" />
    <circle cx="49" cy="32" r="10" />
    <rect x="22" y="30" width="29" height="12" rx="3" />
  </g>`,Pt=(r=32,t=22,e=11)=>v`
  <g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">
    ${[0,45,90,135,180,225,270,315].map(s=>{let i=s*Math.PI/180;return v`<line
        x1=${r+Math.cos(i)*(e+4)} y1=${t+Math.sin(i)*(e+4)}
        x2=${r+Math.cos(i)*(e+9)} y2=${t+Math.sin(i)*(e+9)} />`})}
  </g>
  <circle cx=${r} cy=${t} r=${e} fill="var(--sun)" />`,Ht=v`
  <g stroke="var(--rain)" stroke-width="3" stroke-linecap="round">
    <line x1="24" y1="42" x2="20" y2="48" />
    <line x1="34" y1="42" x2="30" y2="48" />
    <line x1="44" y1="42" x2="40" y2="48" />
  </g>`,Mt=v`
  <g fill="var(--rain)">
    <circle cx="24" cy="45" r="2.5" />
    <circle cx="34" cy="46" r="2.5" />
    <circle cx="44" cy="45" r="2.5" />
  </g>`,Jt={sunny:()=>Pt(32,24,13),"clear-night":()=>v`<path
      d="M44 24a16 16 0 1 1-16-16 13 13 0 0 0 16 16z" fill="var(--ink)" />`,partlycloudy:()=>v`${Pt(22,16,9)}${x()}`,cloudy:()=>x(),fog:()=>v`
    ${x("var(--ink)")}
    <g stroke="var(--paper)" stroke-width="2.5">
      <line x1="26" y1="30" x2="48" y2="30" /><line x1="26" y1="36" x2="48" y2="36" />
    </g>`,rainy:()=>v`${x()}${Ht}`,pouring:()=>v`${x()}${Ht}`,snowy:()=>v`${x()}${Mt}`,"snowy-rainy":()=>v`${x()}${Mt}`,lightning:()=>v`${x()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,"lightning-rainy":()=>v`${x()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,windy:()=>v`
    <g stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M10 20h30a6 6 0 1 0-6-6" /><path d="M10 30h40a6 6 0 1 1-6 6" />
    </g>`};function ht(r){return(Jt[r]??x)()}var Yt=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),Zt=r=>r.replace(/-/g," ").replace(/^\w/,t=>t.toUpperCase()),U=class extends _{constructor(){super(...arguments);this._config={};this._forecast=[];this._loaded=!1}setConfig(e){this._config={entity:"weather.forecast_home",days:4,...e}}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadForecast())}async _loadForecast(){let e=this._config.entity;try{let i=(await this.hass.callApi("POST","services/weather/get_forecasts?return_response=true",{entity_id:e,type:"daily"}))?.service_response?.[e]?.forecast??[];this._forecast=i.map(n=>({date:n.datetime,condition:n.condition,tempHigh:n.temperature,tempLow:n.templow,precipitation:n.precipitation,precipProbability:n.precipitation_probability}))}catch{}}render(){let e=this.hass?.states[this._config.entity];if(!e)return m`<div class="card empty">No weather (${this._config.entity})</div>`;let s=this._forecast.slice(0,this._config.days),i=s.map(l=>l.tempLow),n=s.map(l=>l.tempHigh),o=Math.min(...i,e.attributes.temperature??1/0),c=Math.max(...n,e.attributes.temperature??-1/0),a=Math.max(1,c-o),d=l=>(l-o)/a*100;return m`
      <div class="card">
        <div class="current">
          <div class="icon-lg">
            <svg viewBox="0 0 64 48">${ht(e.state)}</svg>
          </div>
          <div class="cur-text">
            <div class="cond">${Zt(e.state)}</div>
            <div class="temp">${Math.round(e.attributes.temperature)}°</div>
          </div>
        </div>
        <div class="forecast">
          ${s.map(l=>m`
              <div class="row">
                <span class="dow">${Yt(l.date)}</span>
                <svg class="icon-sm" viewBox="0 0 64 48">${ht(l.condition)}</svg>
                <span class="lo">${Math.round(l.tempLow)}°</span>
                <span class="bar">
                  <span
                    class="fill"
                    style="left:${d(l.tempLow)}%;right:${100-d(l.tempHigh)}%"
                  ></span>
                </span>
                <span class="hi">${Math.round(l.tempHigh)}°</span>
              </div>
            `)}
        </div>
      </div>
    `}};U.properties={hass:{attribute:!1},_config:{state:!0},_forecast:{state:!0}},U.styles=w`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      --sun: ${g(y.yellow)};
      --rain: ${g(y.blue)};
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
  `;E({type:"eink-weather-card",name:"E-ink Weather Card",description:"Current conditions + daily forecast with temperature range bars, for the e-ink panel."});var dt=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t},Qt=r=>new Date(r).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),O=class extends _{constructor(){super(...arguments);this._config={};this._events=[];this._loaded=!1}setConfig(e){this._config={title:"Calendar",days:3,entities:[],...e}}getCardSize(){return 6}sources(){return(this._config.entities??[]).map(e=>typeof e=="string"?{entity:e}:e)}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadEvents())}async _loadEvents(){let e=dt(new Date),s=new Date(e.getTime()+(this._config.days??3)*864e5),i=`start=${encodeURIComponent(e.toISOString())}&end=${encodeURIComponent(s.toISOString())}`;try{let n=await Promise.all(this.sources().map(async o=>(await this.hass.callApi("GET",`calendars/${o.entity}?${i}`)??[]).map(a=>({start:a.start?.dateTime??a.start?.date,end:a.end?.dateTime??a.end?.date,title:a.summary??"(busy)",location:a.location,allDay:!!a.start?.date,color:o.color??"var(--ink)"}))));this._events=n.flat().sort((o,c)=>o.start.localeCompare(c.start))}catch{}}render(){let e=this._config.days??3,s=dt(new Date);return m`
      <div class="card">
        <div class="title">${this._config.title}</div>
        <div class="days">
          ${Array.from({length:e},(i,n)=>{let o=new Date(s.getTime()+n*864e5),c=this._events.filter(a=>dt(new Date(a.start)).getTime()===o.getTime());return this.renderDay(o,c)})}
        </div>
      </div>
    `}renderDay(e,s){return m`
      <div class="day">
        <div class="date">
          <span class="dow">${e.toLocaleDateString("en-GB",{weekday:"short"})}</span>
          <span class="num">${e.getDate()}</span>
          <span class="mon">${e.toLocaleDateString("en-GB",{month:"short"})}</span>
        </div>
        <div class="events">
          ${s.length===0?m`<div class="event empty"><span class="txt muted">No events</span></div>`:s.map(i=>m`
                  <div class="event">
                    <span class="rail" style="background:${i.color}"></span>
                    <span class="txt">
                      <span class="etitle">${i.title}</span>
                      ${i.allDay?p:m`<span class="etime">${Qt(i.start)}</span>`}
                      ${i.location?m`<span class="eloc">${i.location}</span>`:p}
                    </span>
                  </div>
                `)}
        </div>
      </div>
    `}};O.properties={hass:{attribute:!1},_config:{state:!0},_events:{state:!0}},O.styles=w`
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
  `;E({type:"eink-calendar-card",name:"E-ink Calendar Card",description:"Day-grouped calendar agenda with colour-coded events, for the e-ink panel."});var L=class extends _{constructor(){super(...arguments);this._config={};this._children=[]}setConfig(e){this._config=e??{}}getCardSize(){return 10}updated(e){e.has("_config")&&this._build(),this.hass&&this._forwardHass()}_build(){let e=[["eink-weather-card","weather",this._config.weather],["eink-price-card","price",{title:"Electricity",...this._config.price}],["eink-calendar-card","calendar",this._config.calendar]];this._children=[];for(let[s,i,n]of e){let o=this.renderRoot.querySelector(`.${i}`);if(!o)return;o.replaceChildren();let c=document.createElement(s);c.setConfig(n??{}),o.appendChild(c),this._children.push(c)}}_forwardHass(){if(this.hass)for(let e of this._children)e.hass=this.hass}render(){return m`
      <div class="panel">
        <div class="left">
          <div class="slot weather"></div>
          <div class="slot price"></div>
        </div>
        <div class="right">
          <div class="slot calendar"></div>
        </div>
      </div>
    `}};L.properties={hass:{attribute:!1},_config:{state:!0}},L.styles=w`
    :host {
      --ink: ${g(y.black)};
      --paper: ${g(y.white)};
      display: block;
    }
    .panel {
      width: 800px;
      height: 480px;
      background: var(--paper);
      display: flex;
      overflow: hidden;
    }
    .left {
      flex: 0 0 57%;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .left .price {
      margin-top: auto; /* pin the price chart to the bottom */
    }
    .right {
      flex: 1 1 auto;
      min-width: 0;
      border-left: 2px solid var(--ink);
    }
    .slot {
      min-width: 0;
    }
  `;E({type:"eink-panel-card",name:"E-ink Panel",description:"Composes the weather, price and calendar cards into the 800\xD7480 e-ink layout."});var te=[["eink-price-card",N],["eink-weather-card",U],["eink-calendar-card",O],["eink-panel-card",L]];for(let[r,t]of te)customElements.get(r)||customElements.define(r,t);console.info("%c eink-dashboard-cards %c 0.1.0 ","background:#0000ff;color:#fff;font-weight:700","background:#008000;color:#fff");
