/* eink-dashboard-cards — built by esbuild */
var G=globalThis,F=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),dt=new WeakMap,L=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(F&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=dt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&dt.set(e,t))}return t}toString(){return this.cssText}},y=r=>new L(typeof r=="string"?r:r+"",void 0,Y),E=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new L(e,r,Y)},pt=(r,t)=>{if(F)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=G.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},Z=F?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return y(e)})(r):r;var{is:Rt,defineProperty:Ut,getOwnPropertyDescriptor:Nt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Lt,getPrototypeOf:zt}=Object,A=globalThis,ut=A.trustedTypes,It=ut?ut.emptyScript:"",Bt=A.reactiveElementPolyfillSupport,z=(r,t)=>r,Q={toAttribute(r,t){switch(t){case Boolean:r=r?It:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ft=(r,t)=>!Rt(r,t),mt={attribute:!0,type:String,converter:Q,reflect:!1,useDefault:!1,hasChanged:ft};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),A.litPropertyMetadata??(A.litPropertyMetadata=new WeakMap);var w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=Nt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){let c=i?.call(this);n?.call(this,o),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mt}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;let t=zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){let e=this.properties,s=[...Ot(e),...Lt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Z(i))}else t!==void 0&&e.push(Z(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:Q).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Q;this._$Em=i;let c=o.fromAttribute(e,n.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){let o=this.constructor;if(i===!1&&(n=this[t]),s??(s=o.getPropertyOptions(t)),!((s.hasChanged??ft)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:o}=n,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,n,c)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[z("elementProperties")]=new Map,w[z("finalized")]=new Map,Bt?.({ReactiveElement:w}),(A.reactiveElementVersions??(A.reactiveElementVersions=[])).push("2.1.2");var B=globalThis,gt=r=>r,X=B.trustedTypes,yt=X?X.createPolicy("lit-html",{createHTML:r=>r}):void 0,bt="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+C,jt=`<${At}>`,M=document,j=()=>M.createComment(""),V=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,Vt=r=>ot(r)||typeof r?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$t=/-->/g,vt=/>/g,k=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_t=/'/g,xt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,at=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),f=at(1),$=at(2),re=at(3),H=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),wt=new WeakMap,P=M.createTreeWalker(M,129);function St(r,t){if(!ot(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}var Wt=(r,t)=>{let e=r.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",o=I;for(let c=0;c<e;c++){let a=r[c],d,l,h=-1,u=0;for(;u<a.length&&(o.lastIndex=u,l=o.exec(a),l!==null);)u=o.lastIndex,o===I?l[1]==="!--"?o=$t:l[1]!==void 0?o=vt:l[2]!==void 0?(Ct.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=k):l[3]!==void 0&&(o=k):o===k?l[0]===">"?(o=i??I,h=-1):l[1]===void 0?h=-2:(h=o.lastIndex-l[2].length,d=l[1],o=l[3]===void 0?k:l[3]==='"'?xt:_t):o===xt||o===_t?o=k:o===$t||o===vt?o=I:(o=k,i=void 0);let g=o===k&&r[c+1].startsWith("/>")?" ":"";n+=o===I?a+jt:h>=0?(s.push(d),a.slice(0,h)+bt+a.slice(h)+C+g):a+C+(h===-2?c:g)}return[St(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},W=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0,c=t.length-1,a=this.parts,[d,l]=Wt(t,e);if(this.el=r.createElement(d,s),P.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=P.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(bt)){let u=l[o++],g=i.getAttribute(h).split(C),S=/([.?@])?(.*)/.exec(u);a.push({type:1,index:n,name:S[2],strings:g,ctor:S[1]==="."?st:S[1]==="?"?it:S[1]==="@"?rt:D}),i.removeAttribute(h)}else h.startsWith(C)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(Ct.test(i.tagName)){let h=i.textContent.split(C),u=h.length-1;if(u>0){i.textContent=X?X.emptyScript:"";for(let g=0;g<u;g++)i.append(h[g],j()),P.nextNode(),a.push({type:2,index:++n});i.append(h[u],j())}}}else if(i.nodeType===8)if(i.data===At)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(C,h+1))!==-1;)a.push({type:7,index:n}),h+=C.length-1}n++}}static createElement(t,e){let s=M.createElement("template");return s.innerHTML=t,s}};function T(r,t,e=r,s){if(t===H)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=V(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=T(r,i._$AS(r,t.values),i,s)),t}var et=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??M).importNode(e,!0);P.currentNode=i;let n=P.nextNode(),o=0,c=0,a=s[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new q(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new nt(n,this,t)),this._$AV.push(d),a=s[++c]}o!==a?.index&&(n=P.nextNode(),o++)}return P.currentNode=M,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},q=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),V(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Vt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=W.createElement(St(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new et(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new W(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new r(this.O(j()),this.O(j()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=gt(t).nextSibling;gt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},D=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){let n=this.strings,o=!1;if(n===void 0)t=T(this,t,e,0),o=!V(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{let c=t,a,d;for(t=n[0],a=0;a<n.length-1;a++)d=T(this,c[s+a],e,a),d===H&&(d=this._$AH[a]),o||(o=!V(d)||d!==this._$AH[a]),d===p?t=p:t!==p&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},st=class extends D{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},it=class extends D{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}},rt=class extends D{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=T(this,t,e,0)??p)===H)return;let s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},nt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}};var qt=B.litHtmlPolyfillSupport;qt?.(W,q),(B.litHtmlVersions??(B.litHtmlVersions=[])).push("3.3.3");var Et=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new q(t.insertBefore(j(),n),n,void 0,e??{})}return i._$AI(r),i};var K=globalThis,_=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return H}};_._$litElement$=!0,_.finalized=!0,K.litElementHydrateSupport?.({LitElement:_});var Kt=K.litElementPolyfillSupport;Kt?.({LitElement:_});(K.litElementVersions??(K.litElementVersions=[])).push("4.2.2");function R(r){window.customCards=window.customCards??[],window.customCards.push({preview:!0,...r})}var v={black:"#000000",white:"#ffffff",red:"#ff0000",yellow:"#ffd400",blue:"#0000ff",green:"#008000"},J={low:v.green,mid:v.yellow,high:v.red};var lt=132,Gt=r=>(r.start?new Date(r.start):new Date(`${r.date} ${r.time}`)).getTime(),Ft=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),U=class extends _{constructor(){super(...arguments);this._config={}}setConfig(e){this._config={entity:"sensor.greenely_prices",title:"Electricity",low_threshold:50,high_threshold:200,...e}}getCardSize(){return 3}series(){let e=this.hass?.states[this._config.entity];if(!e)return null;let s=(l,h)=>{let u=e.attributes[l],g=e.attributes[h];return u?.length?u:g??[]},i=s("current_day_quarterly","current_day"),n=s("next_day_quarterly","next_day");if(!i.length)return null;let o=this._config.low_threshold,c=this._config.high_threshold,a=(l,h)=>{let u=new Date(Gt(l)),g=Math.round(Number(l.price)*100);return{ms:u.getTime(),hour:u.getHours(),minute:u.getMinutes(),date:l.date,ore:g,day:h,level:g<o?"low":g>c?"high":"mid"}},d=[...i.map(l=>a(l,0)),...n.map(l=>a(l,1))];return{points:d,todayCount:i.length,max:Math.max(...d.map(l=>l.ore))}}cheapestWindow(e,s){if(s<=0||s>e.length)return-1;let i=e.slice(0,s).reduce((c,a)=>c+a.ore,0),n=i,o=0;for(let c=s;c<e.length;c++)i+=e[c].ore-e[c-s].ore,i<n&&(n=i,o=c-s+1);return o}render(){let e=this.series();if(!e)return f`<div class="card empty">No price data (${this._config.entity})</div>`;let{points:s,todayCount:i,max:n}=e,o=s.length,c=i>=96,a=m=>m/(o-1)*100,d=n<=200?50:100,l=[];for(let m=0;m<n;m+=d)l.push(m);let h=Date.now(),u=0;s.forEach((m,b)=>{m.day===0&&m.ms<=h&&(u=b)});let g=this._config.cheapest_window??(c?8:2),S=this.cheapestWindow(s,g),Ht=s.map((m,b)=>({i:b,p:m})).filter(({p:m})=>m.minute===0&&m.hour%6===0),Tt=Math.max(2,s[u].ore/n*100)/100*lt,Dt=Math.max(0,lt-Tt-5);return f`
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
                ${s.map(m=>f`<div class="bar ${m.level}" style="height:${Math.max(2,m.ore/n*100)}%"></div>`)}
              </div>
              <div class="now-line" style="left:${a(u)}%;height:${Dt}px"></div>
              ${i<o?f`<div class="divider" style="left:${a(i-.5)}%"></div>`:p}
            </div>
            <div class="yaxis">
              ${l.map(m=>f`<span class="ylabel" style="bottom:${m/n*100}%">${m}</span>`)}
            </div>
          </div>
          <div class="marks">
            ${S>=0?f`<div
                  class="window"
                  style="left:${a(S)}%;width:${(g-1)/(o-1)*100}%"
                ></div>`:p}
          </div>
          <div class="axis">
            ${Ht.map(({i:m,p:b})=>f`<span class="${b.hour===0?"day":""}" style="left:${a(m)}%"
                  >${b.hour===0?Ft(b.date):String(b.hour).padStart(2,"0")}</span
                >`)}
          </div>
        </div>
      </div>
    `}};U.properties={hass:{attribute:!1},_config:{state:!0}},U.styles=E`
    :host {
      --ink: ${y(v.black)};
      --paper: ${y(v.white)};
      --low: ${y(J.low)};
      --mid: ${y(J.mid)};
      --high: ${y(J.high)};
      --accent: ${y(v.blue)};
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
      height: ${lt}px;
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
  `;R({type:"eink-price-card",name:"E-ink Price Card",description:"Electricity price bars (\xF6re/kWh) coloured by fixed thresholds, for the e-ink panel."});var x=(r="var(--ink)")=>$`
  <g fill=${r}>
    <circle cx="24" cy="32" r="11" />
    <circle cx="37" cy="24" r="14" />
    <circle cx="49" cy="32" r="10" />
    <rect x="22" y="30" width="29" height="12" rx="3" />
  </g>`,kt=(r=32,t=22,e=11)=>$`
  <g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">
    ${[0,45,90,135,180,225,270,315].map(s=>{let i=s*Math.PI/180;return $`<line
        x1=${r+Math.cos(i)*(e+4)} y1=${t+Math.sin(i)*(e+4)}
        x2=${r+Math.cos(i)*(e+9)} y2=${t+Math.sin(i)*(e+9)} />`})}
  </g>
  <circle cx=${r} cy=${t} r=${e} fill="var(--sun)" />`,Pt=$`
  <g stroke="var(--rain)" stroke-width="3" stroke-linecap="round">
    <line x1="24" y1="42" x2="20" y2="48" />
    <line x1="34" y1="42" x2="30" y2="48" />
    <line x1="44" y1="42" x2="40" y2="48" />
  </g>`,Mt=$`
  <g fill="var(--rain)">
    <circle cx="24" cy="45" r="2.5" />
    <circle cx="34" cy="46" r="2.5" />
    <circle cx="44" cy="45" r="2.5" />
  </g>`,Xt={sunny:()=>kt(32,24,13),"clear-night":()=>$`<path
      d="M44 24a16 16 0 1 1-16-16 13 13 0 0 0 16 16z" fill="var(--ink)" />`,partlycloudy:()=>$`${kt(22,16,9)}${x()}`,cloudy:()=>x(),fog:()=>$`
    ${x("var(--ink)")}
    <g stroke="var(--paper)" stroke-width="2.5">
      <line x1="26" y1="30" x2="48" y2="30" /><line x1="26" y1="36" x2="48" y2="36" />
    </g>`,rainy:()=>$`${x()}${Pt}`,pouring:()=>$`${x()}${Pt}`,snowy:()=>$`${x()}${Mt}`,"snowy-rainy":()=>$`${x()}${Mt}`,lightning:()=>$`${x()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,"lightning-rainy":()=>$`${x()}<path d="M34 40l-8 0 6-10-2 0 4-8 8 0-6 9 4 0z" fill="var(--sun)" />`,windy:()=>$`
    <g stroke="var(--ink)" stroke-width="3" fill="none" stroke-linecap="round">
      <path d="M10 20h30a6 6 0 1 0-6-6" /><path d="M10 30h40a6 6 0 1 1-6 6" />
    </g>`};function ct(r){return(Xt[r]??x)()}var Jt=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),Yt=r=>r.replace(/-/g," ").replace(/^\w/,t=>t.toUpperCase()),N=class extends _{constructor(){super(...arguments);this._config={};this._forecast=[];this._loaded=!1}setConfig(e){this._config={entity:"weather.forecast_home",days:4,...e}}getCardSize(){return 4}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadForecast())}async _loadForecast(){let e=this._config.entity;try{let i=(await this.hass.callApi("POST","services/weather/get_forecasts?return_response=true",{entity_id:e,type:"daily"}))?.service_response?.[e]?.forecast??[];this._forecast=i.map(n=>({date:n.datetime,condition:n.condition,tempHigh:n.temperature,tempLow:n.templow,precipitation:n.precipitation,precipProbability:n.precipitation_probability}))}catch{}}render(){let e=this.hass?.states[this._config.entity];if(!e)return f`<div class="card empty">No weather (${this._config.entity})</div>`;let s=this._forecast.slice(0,this._config.days),i=s.map(l=>l.tempLow),n=s.map(l=>l.tempHigh),o=Math.min(...i,e.attributes.temperature??1/0),c=Math.max(...n,e.attributes.temperature??-1/0),a=Math.max(1,c-o),d=l=>(l-o)/a*100;return f`
      <div class="card">
        <div class="current">
          <div class="icon-lg">
            <svg viewBox="0 0 64 48">${ct(e.state)}</svg>
          </div>
          <div class="cur-text">
            <div class="cond">${Yt(e.state)}</div>
            <div class="temp">${Math.round(e.attributes.temperature)}°</div>
          </div>
        </div>
        <div class="forecast">
          ${s.map(l=>f`
              <div class="row">
                <span class="dow">${Jt(l.date)}</span>
                <svg class="icon-sm" viewBox="0 0 64 48">${ct(l.condition)}</svg>
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
    `}};N.properties={hass:{attribute:!1},_config:{state:!0},_forecast:{state:!0}},N.styles=E`
    :host {
      --ink: ${y(v.black)};
      --paper: ${y(v.white)};
      --sun: ${y(v.yellow)};
      --rain: ${y(v.blue)};
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
  `;R({type:"eink-weather-card",name:"E-ink Weather Card",description:"Current conditions + daily forecast with temperature range bars, for the e-ink panel."});var ht=r=>{let t=new Date(r);return t.setHours(0,0,0,0),t},Zt=r=>new Date(r).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),O=class extends _{constructor(){super(...arguments);this._config={};this._events=[];this._loaded=!1}setConfig(e){this._config={title:"Calendar",days:3,entities:[],...e}}getCardSize(){return 6}sources(){return(this._config.entities??[]).map(e=>typeof e=="string"?{entity:e}:e)}willUpdate(e){e.has("hass")&&this.hass&&!this._loaded&&(this._loaded=!0,this._loadEvents())}async _loadEvents(){let e=ht(new Date),s=new Date(e.getTime()+(this._config.days??3)*864e5),i=`start=${encodeURIComponent(e.toISOString())}&end=${encodeURIComponent(s.toISOString())}`;try{let n=await Promise.all(this.sources().map(async o=>(await this.hass.callApi("GET",`calendars/${o.entity}?${i}`)??[]).map(a=>({start:a.start?.dateTime??a.start?.date,end:a.end?.dateTime??a.end?.date,title:a.summary??"(busy)",location:a.location,allDay:!!a.start?.date,color:o.color??"var(--ink)"}))));this._events=n.flat().sort((o,c)=>o.start.localeCompare(c.start))}catch{}}render(){let e=this._config.days??3,s=ht(new Date);return f`
      <div class="card">
        <div class="title">${this._config.title}</div>
        <div class="days">
          ${Array.from({length:e},(i,n)=>{let o=new Date(s.getTime()+n*864e5),c=this._events.filter(a=>ht(new Date(a.start)).getTime()===o.getTime());return this.renderDay(o,c)})}
        </div>
      </div>
    `}renderDay(e,s){return f`
      <div class="day">
        <div class="date">
          <span class="dow">${e.toLocaleDateString("en-GB",{weekday:"short"})}</span>
          <span class="num">${e.getDate()}</span>
          <span class="mon">${e.toLocaleDateString("en-GB",{month:"short"})}</span>
        </div>
        <div class="events">
          ${s.length===0?f`<div class="event empty"><span class="txt muted">No events</span></div>`:s.map(i=>f`
                  <div class="event">
                    <span class="rail" style="background:${i.color}"></span>
                    <span class="txt">
                      <span class="etitle">${i.title}</span>
                      ${i.allDay?p:f`<span class="etime">${Zt(i.start)}</span>`}
                      ${i.location?f`<span class="eloc">${i.location}</span>`:p}
                    </span>
                  </div>
                `)}
        </div>
      </div>
    `}};O.properties={hass:{attribute:!1},_config:{state:!0},_events:{state:!0}},O.styles=E`
    :host {
      --ink: ${y(v.black)};
      --paper: ${y(v.white)};
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
  `;R({type:"eink-calendar-card",name:"E-ink Calendar Card",description:"Day-grouped calendar agenda with colour-coded events, for the e-ink panel."});var Qt=[["eink-price-card",U],["eink-weather-card",N],["eink-calendar-card",O]];for(let[r,t]of Qt)customElements.get(r)||customElements.define(r,t);console.info("%c eink-dashboard-cards %c 0.1.0 ","background:#0000ff;color:#fff;font-weight:700","background:#008000;color:#fff");
