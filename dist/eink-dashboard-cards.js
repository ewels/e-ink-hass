/* eink-dashboard-cards — built by esbuild */
var B=globalThis,I=B.ShadowRoot&&(B.ShadyCSS===void 0||B.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,V=Symbol(),rt=new WeakMap,U=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==V)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(I&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&rt.set(e,t))}return t}toString(){return this.cssText}},g=r=>new U(typeof r=="string"?r:r+"",void 0,V),K=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new U(e,r,V)},ot=(r,t)=>{if(I)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=B.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},X=I?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return g(e)})(r):r;var{is:Et,defineProperty:St,getOwnPropertyDescriptor:Ct,getOwnPropertyNames:Pt,getOwnPropertySymbols:kt,getPrototypeOf:Ht}=Object,y=globalThis,nt=y.trustedTypes,Rt=nt?nt.emptyScript:"",Ut=y.reactiveElementPolyfillSupport,N=(r,t)=>r,F={toAttribute(r,t){switch(t){case Boolean:r=r?Rt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ht=(r,t)=>!Et(r,t),at={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);var $=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&St(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:o}=Ct(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let h=i?.call(this);o?.call(this,n),this.requestUpdate(t,h,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;let t=Ht(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){let e=this.properties,s=[...Pt(e),...kt(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ot(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:F).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:F;this._$Em=i;let h=n.fromAttribute(e,o.type);this[i]=h??this._$Ej?.get(i)??h,this._$Em=null}}requestUpdate(t,e,s,i=!1,o){if(t!==void 0){let n=this.constructor;if(i===!1&&(o=this[t]),s??(s=n.getPropertyOptions(t)),!((s.hasChanged??ht)(o,e)||s.useDefault&&s.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:o},n){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,n??e??this[t]),o!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,o]of s){let{wrapped:n}=o,h=this[i];n!==!0||this._$AL.has(i)||h===void 0||this.C(i,void 0,o,h)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[N("elementProperties")]=new Map,$[N("finalized")]=new Map,Ut?.({ReactiveElement:$}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.1.2");var T=globalThis,lt=r=>r,W=T.trustedTypes,ct=W?W.createPolicy("lit-html",{createHTML:r=>r}):void 0,gt="$lit$",v=`lit$${Math.random().toFixed(9).slice(2)}$`,$t="?"+v,Nt=`<${$t}>`,S=document,O=()=>S.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",et=Array.isArray,Mt=r=>et(r)||typeof r?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,pt=/>/g,x=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,ft=/"/g,_t=/^(?:script|style|textarea|title)$/i,st=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),A=st(1),Vt=st(2),Kt=st(3),C=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),mt=new WeakMap,E=S.createTreeWalker(S,129);function yt(r,t){if(!et(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ct!==void 0?ct.createHTML(t):t}var Tt=(r,t)=>{let e=r.length-1,s=[],i,o=t===2?"<svg>":t===3?"<math>":"",n=M;for(let h=0;h<e;h++){let a=r[h],d,l,c=-1,p=0;for(;p<a.length&&(n.lastIndex=p,l=n.exec(a),l!==null);)p=n.lastIndex,n===M?l[1]==="!--"?n=dt:l[1]!==void 0?n=pt:l[2]!==void 0?(_t.test(l[2])&&(i=RegExp("</"+l[2],"g")),n=x):l[3]!==void 0&&(n=x):n===x?l[0]===">"?(n=i??M,c=-1):l[1]===void 0?c=-2:(c=n.lastIndex-l[2].length,d=l[1],n=l[3]===void 0?x:l[3]==='"'?ft:ut):n===ft||n===ut?n=x:n===dt||n===pt?n=M:(n=x,i=void 0);let m=n===x&&r[h+1].startsWith("/>")?" ":"";o+=n===M?a+Nt:c>=0?(s.push(d),a.slice(0,c)+gt+a.slice(c)+v+m):a+v+(c===-2?h:m)}return[yt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},D=class r{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0,h=t.length-1,a=this.parts,[d,l]=Tt(t,e);if(this.el=r.createElement(d,s),E.currentNode=this.el.content,e===2||e===3){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=E.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(let c of i.getAttributeNames())if(c.endsWith(gt)){let p=l[n++],m=i.getAttribute(c).split(v),w=/([.?@])?(.*)/.exec(p);a.push({type:1,index:o,name:w[2],strings:m,ctor:w[1]==="."?Y:w[1]==="?"?Z:w[1]==="@"?Q:H}),i.removeAttribute(c)}else c.startsWith(v)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(_t.test(i.tagName)){let c=i.textContent.split(v),p=c.length-1;if(p>0){i.textContent=W?W.emptyScript:"";for(let m=0;m<p;m++)i.append(c[m],O()),E.nextNode(),a.push({type:2,index:++o});i.append(c[p],O())}}}else if(i.nodeType===8)if(i.data===$t)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(v,c+1))!==-1;)a.push({type:7,index:o}),c+=v.length-1}o++}}static createElement(t,e){let s=S.createElement("template");return s.innerHTML=t,s}};function k(r,t,e=r,s){if(t===C)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,o=L(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=k(r,i._$AS(r,t.values),i,s)),t}var G=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??S).importNode(e,!0);E.currentNode=i;let o=E.nextNode(),n=0,h=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new z(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new tt(o,this,t)),this._$AV.push(d),a=s[++h]}n!==a?.index&&(o=E.nextNode(),n++)}return E.currentNode=S,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},z=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=k(this,t,e),L(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==C&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Mt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=D.createElement(yt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let o=new G(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new D(t)),e}k(t){et(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let o of t)i===e.length?e.push(s=new r(this.O(O()),this.O(O()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=lt(t).nextSibling;lt(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},H=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,i){let o=this.strings,n=!1;if(o===void 0)t=k(this,t,e,0),n=!L(t)||t!==this._$AH&&t!==C,n&&(this._$AH=t);else{let h=t,a,d;for(t=o[0],a=0;a<o.length-1;a++)d=k(this,h[s+a],e,a),d===C&&(d=this._$AH[a]),n||(n=!L(d)||d!==this._$AH[a]),d===f?t=f:t!==f&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Y=class extends H{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}},Z=class extends H{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}},Q=class extends H{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=k(this,t,e,0)??f)===C)return;let s=this._$AH,i=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==f&&(s===f||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}};var Ot=T.litHtmlPolyfillSupport;Ot?.(D,z),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.3.3");var vt=(r,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let o=e?.renderBefore??null;s._$litPart$=i=new z(t.insertBefore(O(),o),o,void 0,e??{})}return i._$AI(r),i};var j=globalThis,b=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=vt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return C}};b._$litElement$=!0,b.finalized=!0,j.litElementHydrateSupport?.({LitElement:b});var Lt=j.litElementPolyfillSupport;Lt?.({LitElement:b});(j.litElementVersions??(j.litElementVersions=[])).push("4.2.2");function At(r){window.customCards=window.customCards??[],window.customCards.push({preview:!0,...r})}var P={black:"#000000",white:"#ffffff",red:"#ff0000",yellow:"#ffd400",blue:"#0000ff",green:"#008000"},q={low:P.green,mid:P.yellow,high:P.red};var it=132,Dt=r=>(r.start?new Date(r.start):new Date(`${r.date} ${r.time}`)).getTime(),zt=r=>new Date(r).toLocaleDateString("en-GB",{weekday:"short"}),R=class extends b{constructor(){super(...arguments);this._config={}}setConfig(e){this._config={entity:"sensor.greenely_prices",title:"Electricity",low_threshold:50,high_threshold:200,...e}}getCardSize(){return 3}series(){let e=this.hass?.states[this._config.entity];if(!e)return null;let s=(l,c)=>{let p=e.attributes[l],m=e.attributes[c];return p?.length?p:m??[]},i=s("current_day_quarterly","current_day"),o=s("next_day_quarterly","next_day");if(!i.length)return null;let n=this._config.low_threshold,h=this._config.high_threshold,a=(l,c)=>{let p=new Date(Dt(l)),m=Math.round(Number(l.price)*100);return{ms:p.getTime(),hour:p.getHours(),minute:p.getMinutes(),date:l.date,ore:m,day:c,level:m<n?"low":m>h?"high":"mid"}},d=[...i.map(l=>a(l,0)),...o.map(l=>a(l,1))];return{points:d,todayCount:i.length,max:Math.max(...d.map(l=>l.ore))}}cheapestWindow(e,s){if(s<=0||s>e.length)return-1;let i=e.slice(0,s).reduce((h,a)=>h+a.ore,0),o=i,n=0;for(let h=s;h<e.length;h++)i+=e[h].ore-e[h-s].ore,i<o&&(o=i,n=h-s+1);return n}render(){let e=this.series();if(!e)return A`<div class="card empty">No price data (${this._config.entity})</div>`;let{points:s,todayCount:i,max:o}=e,n=s.length,h=i>=96,a=u=>u/(n-1)*100,d=o<=200?50:100,l=[];for(let u=0;u<o;u+=d)l.push(u);let c=Date.now(),p=0;s.forEach((u,_)=>{u.day===0&&u.ms<=c&&(p=_)});let m=this._config.cheapest_window??(h?8:2),w=this.cheapestWindow(s,m),bt=s.map((u,_)=>({i:_,p:u})).filter(({p:u})=>u.minute===0&&u.hour%6===0),wt=Math.max(2,s[p].ore/o*100)/100*it,xt=Math.max(0,it-wt-5);return A`
      <div class="card">
        <div class="head">
          <span class="title">${this._config.title}</span>
          <span class="now">
            <span class="now-label">Now</span>${s[p].ore}
            <small>öre/kWh</small>
          </span>
        </div>
        <div class="chart">
          <div class="row">
            <div class="plot">
              <div class="bars">
                ${s.map(u=>A`<div class="bar ${u.level}" style="height:${Math.max(2,u.ore/o*100)}%"></div>`)}
              </div>
              <div class="now-line" style="left:${a(p)}%;height:${xt}px"></div>
              ${i<n?A`<div class="divider" style="left:${a(i-.5)}%"></div>`:f}
            </div>
            <div class="yaxis">
              ${l.map(u=>A`<span class="ylabel" style="bottom:${u/o*100}%">${u}</span>`)}
            </div>
          </div>
          <div class="marks">
            ${w>=0?A`<div
                  class="window"
                  style="left:${a(w)}%;width:${(m-1)/(n-1)*100}%"
                ></div>`:f}
          </div>
          <div class="axis">
            ${bt.map(({i:u,p:_})=>A`<span class="${_.hour===0?"day":""}" style="left:${a(u)}%"
                  >${_.hour===0?zt(_.date):String(_.hour).padStart(2,"0")}</span
                >`)}
          </div>
        </div>
      </div>
    `}};R.properties={hass:{attribute:!1},_config:{state:!0}},R.styles=K`
    :host {
      --ink: ${g(P.black)};
      --paper: ${g(P.white)};
      --low: ${g(q.low)};
      --mid: ${g(q.mid)};
      --high: ${g(q.high)};
      --accent: ${g(P.blue)};
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
      height: ${it}px;
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
  `;At({type:"eink-price-card",name:"E-ink Price Card",description:"Electricity price bars (\xF6re/kWh) coloured by fixed thresholds, for the e-ink panel."});var jt=[["eink-price-card",R]];for(let[r,t]of jt)customElements.get(r)||customElements.define(r,t);console.info("%c eink-dashboard-cards %c 0.1.0 ","background:#0000ff;color:#fff;font-weight:700","background:#008000;color:#fff");
