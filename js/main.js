(
funciton() {
    var h,l=this;
funciton m(a){return void 0!==a}

funciton n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object 
funciton]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"
funciton"}else return"null";
else if("
funciton"==b&&"undefined"==typeof a.call)return"object";return b}
funciton p(a){return"string"==typeof a}
funciton q(a){return"number"==typeof a}var aa="closure_uid_"+(1E9*Math.random()>>>0),ba=0;
funciton ca(a,b,c){return a.call.apply(a.bind,arguments)}

funciton da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return 
funciton(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return 
funciton(){return a.apply(b,arguments)}}
funciton r(a,b,c){r=
funciton.prototype.bind&&-1!=
funciton.prototype.bind.toString().indexOf("native code")?ca:da;return r.apply(null,arguments)}

funciton t(a,b){var c=a.split("."),d=l;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)!c.length&&m(b)?d[e]=b:d=d[e]?d[e]:d[e]={}}
funciton u(a,b){
funciton c(){}c.prototype=b.prototype;a.superClass_=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=
funciton(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var ea=String.prototype.trim?
funciton(a){return a.trim()}:
funciton(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
funciton ga(a,b){return a<b?-1:a>b?1:0};var ha=Array.prototype.indexOf?
funciton(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:
funciton(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ia=Array.prototype.forEach?
funciton(a,b,c){Array.prototype.forEach.call(a,b,c)}:
funciton(a,b,c){for(var d=a.length,e=p(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};

funciton ja(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
funciton v(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var w;a:{var ka=l.navigator;if(ka){var la=ka.userAgent;if(la){w=la;break a}}w=""}
funciton x(a){return-1!=w.indexOf(a)};
funciton ma(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
funciton na(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}
funciton oa(a,b){return null!==a&&b in a?a[b]:void 0}var pa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
funciton qa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pa.length;f++)c=pa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};
funciton ra(a){ra[" "](a);return a}ra[" "]=
funciton(){};
funciton sa(a,b){var c=ta;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var ua=x("Opera"),y=x("Trident")||x("MSIE"),va=x("Edge"),z=x("Gecko")&&!(-1!=w.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),A=-1!=w.toLowerCase().indexOf("webkit")&&!x("Edge"),wa=A&&x("Mobile"),xa=x("Android");
funciton ya(){var a=l.document;return a?a.documentMode:void 0}var B;
a:{var za="",Aa=
funciton(){var a=w;if(z)return/rv\:([^\);]+)(\)|;)/.exec(a);if(va)return/Edge\/([\d\.]+)/.exec(a);if(y)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(A)return/WebKit\/(\S+)/.exec(a);if(ua)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Aa&&(za=Aa?Aa[1]:"");if(y){var Ba=ya();if(null!=Ba&&Ba>parseFloat(za)){B=String(Ba);break a}}B=za}var ta={};

funciton C(a){return sa(a,
funciton(){for(var b=0,c=ea(String(B)).split("."),d=ea(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=ga(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||ga(0==g[2].length,0==k[2].length)||ga(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})}var Ca;var Da=l.document;
Ca=Da&&y?ya()||("CSS1Compat"==Da.compatMode?parseInt(B,10):5):void 0;!z&&!y||y&&9<=Number(Ca)||z&&C("1.9.1");var Ea=y&&!C("9");
funciton D(a,b){this.x=m(a)?a:0;this.y=m(b)?b:0}h=D.prototype;h.clone=
funciton(){return new D(this.x,this.y)};h.toString=
funciton(){return"("+this.x+", "+this.y+")"};h.equals=
funciton(a){return a instanceof D&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};h.ceil=
funciton(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};h.floor=
funciton(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};h.round=
funciton(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
h.translate=
funciton(a,b){a instanceof D?(this.x+=a.x,this.y+=a.y):(this.x+=Number(a),q(b)&&(this.y+=b));return this};h.scale=
funciton(a,b){var c=q(b)?b:a;this.x*=a;this.y*=c;return this};
funciton Fa(a,b){this.width=a;this.height=b}h=Fa.prototype;h.clone=
funciton(){return new Fa(this.width,this.height)};h.toString=
funciton(){return"("+this.width+" x "+this.height+")"};h.ceil=
funciton(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};h.floor=
funciton(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};h.round=
funciton(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
h.scale=
funciton(a,b){var c=q(b)?b:a;this.width*=a;this.height*=c;return this};
funciton E(a,b,c){var d=document;c=c||d;var e=a&&"*"!=a?String(a).toUpperCase():"";if(c.querySelectorAll&&c.querySelector&&(e||b))return c.querySelectorAll(e+(b?"."+b:""));if(b&&c.getElementsByClassName){a=c.getElementsByClassName(b);if(e){c={};for(var f=d=0,g;g=a[f];f++)e==g.nodeName&&(c[d++]=g);c.length=d;return c}return a}a=c.getElementsByTagName(e||"*");if(b){c={};for(f=d=0;g=a[f];f++){var e=g.className,k;if(k="
funciton"==typeof e.split)k=0<=ha(e.split(/\s+/),b);k&&(c[d++]=g)}c.length=d;return c}return a}

funciton Ha(){var a=window.document,a="CSS1Compat"==a.compatMode?a.documentElement:a.body;return new Fa(a.clientWidth,a.clientHeight)}
funciton Ia(){var a=document,b=a.scrollingElement?a.scrollingElement:A||"CSS1Compat"!=a.compatMode?a.body||a.documentElement:a.documentElement,a=a.parentWindow||a.defaultView;return y&&C("10")&&a.pageYOffset!=b.scrollTop?new D(b.scrollLeft,b.scrollTop):new D(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}

funciton Ja(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}var Ka={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},La={IMG:" ",BR:"\n"};

funciton Ma(a,b,c){if(!(a.nodeName in Ka))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in La)b.push(La[a.nodeName]);else for(a=a.firstChild;a;)Ma(a,b,c),a=a.nextSibling}
funciton Na(a){return Oa(a,
funciton(a){var b;if(b=p(a.className))b=0<=ha(a.className.split(/\s+/),"glue-modal-content");return a=b})}
funciton Oa(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null};
funciton F(){0!=Pa&&(this[aa]||(this[aa]=++ba));this.disposed_=this.disposed_;this.onDisposeCallbacks_=this.onDisposeCallbacks_}var Pa=0;F.prototype.disposed_=!1;
funciton G(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.propagationStopped_=!1;this.returnValue_=!0}G.prototype.stopPropagation=
funciton(){this.propagationStopped_=!0};G.prototype.preventDefault=
funciton(){this.defaultPrevented=!0;this.returnValue_=!1};var Qa=!y||9<=Number(Ca),Ra=y&&!C("9");!A||C("528");z&&C("1.9b")||y&&C("8")||ua&&C("9.5")||A&&C("528");z&&!C("8")||y&&C("9");
funciton H(a,b){G.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.event_=this.state=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(z){var f;a:{try{ra(e.nodeName);f=!0;break a}catch(g){}f=
!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=A||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=A||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,
this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.event_=a;a.defaultPrevented&&this.preventDefault()}}u(H,G);H.prototype.stopPropagation=
funciton(){H.superClass_.stopPropagation.call(this);this.event_.stopPropagation?this.event_.stopPropagation():this.event_.cancelBubble=!0};
H.prototype.preventDefault=
funciton(){H.superClass_.preventDefault.call(this);var a=this.event_;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ra)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var I="closure_listenable_"+(1E6*Math.random()|0),Sa=0;
funciton Ta(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.handler=e;this.key=++Sa;this.removed=this.callOnce=!1}
funciton J(a){a.removed=!0;a.listener=null;a.proxy=null;a.src=null;a.handler=null};
funciton K(a){this.src=a;this.listeners={};this.typeCount_=0}h=K.prototype;h.add=
funciton(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.typeCount_++);var g=Ua(a,b,d,e);-1<g?(b=a[g],c||(b.callOnce=!1)):(b=new Ta(b,this.src,f,!!d,e),b.callOnce=c,a.push(b));return b};
h.remove=
funciton(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ua(e,b,c,d);return-1<b?(J(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.typeCount_--),!0):!1};
funciton Va(a,b){var c=b.type;if(c in a.listeners){var d=a.listeners[c],e=ha(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(J(b),0==a.listeners[c].length&&(delete a.listeners[c],a.typeCount_--))}}
h.removeAll=
funciton(a){a=a&&a.toString();var b=0,c;for(c in this.listeners)if(!a||c==a){for(var d=this.listeners[c],e=0;e<d.length;e++)++b,J(d[e]);delete this.listeners[c];this.typeCount_--}return b};h.getListener=
funciton(a,b,c,d){a=this.listeners[a.toString()];var e=-1;a&&(e=Ua(a,b,c,d));return-1<e?a[e]:null};h.hasListener=
funciton(a,b){var c=m(a),d=c?a.toString():"",e=m(b);return na(this.listeners,
funciton(a){for(var f=0;f<a.length;++f)if(!(c&&a[f].type!=d||e&&a[f].capture!=b))return!0;return!1})};

funciton Ua(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.removed&&f.listener==b&&f.capture==!!c&&f.handler==d)return e}return-1};var Wa="closure_lm_"+(1E6*Math.random()|0),Xa={},Ya=0;

funciton Za(a,b,c,d,e){if("array"==n(b)){for(var f=0;f<b.length;f++)Za(a,b[f],c,d,e);return null}c=$a(c);if(a&&a[I])a=a.listen(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=L(a);g||(a[Wa]=g=new K(a));c=g.add(b,c,!1,d,e);if(!c.proxy){d=ab();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(bb(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Ya++}a=c}return a}

funciton ab(){var a=cb,b=Qa?
funciton(c){return a.call(b.src,b.listener,c)}:
funciton(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}
funciton db(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)db(a,b[f],c,d,e);else c=$a(c),a&&a[I]?a.unlisten(b,c,d,e):a&&(a=L(a))&&(b=a.getListener(b,c,!!d,e))&&eb(b)}

funciton eb(a){if(!q(a)&&a&&!a.removed){var b=a.src;if(b&&b[I])Va(b.eventTargetListeners_,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent&&b.detachEvent(bb(c),d);Ya--;(c=L(b))?(Va(c,a),0==c.typeCount_&&(c.src=null,b[Wa]=null)):J(a)}}}
funciton bb(a){return a in Xa?Xa[a]:Xa[a]="on"+a}

funciton fb(a,b,c,d){var e=!0;if(a=L(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.removed&&(f=gb(f,d),e=e&&!1!==f)}return e}
funciton gb(a,b){var c=a.listener,d=a.handler||a.src;a.callOnce&&eb(a);return c.call(d,b)}

funciton cb(a,b){if(a.removed)return!0;if(!Qa){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new H(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(S){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.propagationStopped_&&0<=g;g--){c.currentTarget=e[g];var k=fb(e[g],f,!0,c),d=
d&&k}for(g=0;!c.propagationStopped_&&g<e.length;g++)c.currentTarget=e[g],k=fb(e[g],f,!1,c),d=d&&k}return d}return gb(a,new H(b,this))}
funciton L(a){a=a[Wa];return a instanceof K?a:null}var hb="__closure_events_fn_"+(1E9*Math.random()>>>0);
funciton $a(a){if("
funciton"==n(a))return a;a[hb]||(a[hb]=
funciton(b){return a.handleEvent(b)});return a[hb]};
funciton M(a){F.call(this);this.handler_=a;this.keys_={}}u(M,F);var ib=[];M.prototype.listen=
funciton(a,b,c,d){"array"!=n(b)&&(b&&(ib[0]=b.toString()),b=ib);for(var e=0;e<b.length;e++){var f=Za(a,b[e],c||this.handleEvent,d||!1,this.handler_||this);if(!f)break;this.keys_[f.key]=f}return this};
M.prototype.unlisten=
funciton(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)this.unlisten(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.handler_||this,c=$a(c),d=!!d,b=a&&a[I]?a.getListener(b,c,d,e):a?(a=L(a))?a.getListener(b,c,d,e):null:null,b&&(eb(b),delete this.keys_[b.key]);return this};M.prototype.removeAll=
funciton(){ma(this.keys_,
funciton(a,b){this.keys_.hasOwnProperty(b)&&eb(a)},this);this.keys_={}};
M.prototype.handleEvent=
funciton(){throw Error("EventHandler.handleEvent not implemented");};
funciton N(){F.call(this);this.eventTargetListeners_=new K(this);this.actualEventTarget_=this;this.parentEventTarget_=null}u(N,F);N.prototype[I]=!0;h=N.prototype;h.addEventListener=
funciton(a,b,c,d){Za(this,a,b,c,d)};h.removeEventListener=
funciton(a,b,c,d){db(this,a,b,c,d)};
h.dispatchEvent=
funciton(a){var b,c=this.parentEventTarget_;if(c)for(b=[];c;c=c.parentEventTarget_)b.push(c);var c=this.actualEventTarget_,d=a.type||a;if(p(a))a=new G(a,c);else if(a instanceof G)a.target=a.target||c;else{var e=a;a=new G(d,c);qa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.propagationStopped_&&0<=g;g--)f=a.currentTarget=b[g],e=jb(f,d,!0,a)&&e;a.propagationStopped_||(f=a.currentTarget=c,e=jb(f,d,!0,a)&&e,a.propagationStopped_||(e=jb(f,d,!1,a)&&e));if(b)for(g=0;!a.propagationStopped_&&
g<b.length;g++)f=a.currentTarget=b[g],e=jb(f,d,!1,a)&&e;return e};h.listen=
funciton(a,b,c,d){return this.eventTargetListeners_.add(String(a),b,!1,c,d)};h.unlisten=
funciton(a,b,c,d){return this.eventTargetListeners_.remove(String(a),b,c,d)};

funciton jb(a,b,c,d){b=a.eventTargetListeners_.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.removed&&g.capture==c){var k=g.listener,S=g.handler||g.src;g.callOnce&&Va(a.eventTargetListeners_,g);e=!1!==k.call(S,d)&&e}}return e&&0!=d.returnValue_}h.getListener=
funciton(a,b,c,d){return this.eventTargetListeners_.getListener(String(a),b,c,d)};h.hasListener=
funciton(a,b){return this.eventTargetListeners_.hasListener(m(a)?String(a):void 0,b)};
funciton O(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}h=O.prototype;h.clone=
funciton(){return new O(this.top,this.right,this.bottom,this.left)};h.toString=
funciton(){return"("+this.top+"t, "+this.right+"r, "+this.bottom+"b, "+this.left+"l)"};h.contains=
funciton(a){return this&&a?a instanceof O?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
h.expand=
funciton(a,b,c,d){var e=typeof a;"object"==e&&null!=a||"
funciton"==e?(this.top-=a.top,this.right+=a.right,this.bottom+=a.bottom,this.left-=a.left):(this.top-=a,this.right+=Number(b),this.bottom+=Number(c),this.left-=Number(d));return this};
funciton kb(a,b){return a.left<=b.right&&b.left<=a.right&&a.top<=b.bottom&&b.top<=a.bottom}h.ceil=
funciton(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
h.floor=
funciton(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};h.round=
funciton(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};h.translate=
funciton(a,b){a instanceof D?(this.left+=a.x,this.right+=a.x,this.top+=a.y,this.bottom+=a.y):(this.left+=a,this.right+=a,q(b)&&(this.top+=b,this.bottom+=b));return this};
h.scale=
funciton(a,b){var c=q(b)?b:a;this.left*=a;this.right*=a;this.top*=c;this.bottom*=c;return this};var lb={};
funciton mb(a,b,c){F.call(this);this.listener_=null!=c?r(a,c):a;this.interval_=b;this.callback_=r(this.onTimer_,this);this.args_=[]}u(mb,F);h=mb.prototype;h.shouldFire_=!1;h.pauseCount_=0;h.timer_=null;h.fire=
funciton(a){this.args_=arguments;this.timer_||this.pauseCount_?this.shouldFire_=!0:nb(this)};h.stop=
funciton(){this.timer_&&(l.clearTimeout(this.timer_),this.timer_=null,this.shouldFire_=!1,this.args_=[])};h.pause=
funciton(){this.pauseCount_++};
h.resume=
funciton(){this.pauseCount_--;this.pauseCount_||!this.shouldFire_||this.timer_||(this.shouldFire_=!1,nb(this))};h.onTimer_=
funciton(){this.timer_=null;this.shouldFire_&&!this.pauseCount_&&(this.shouldFire_=!1,nb(this))};
funciton nb(a){var b;b=a.callback_;var c=a.interval_;if("
funciton"!=n(b))if(b&&"
funciton"==typeof b.handleEvent)b=r(b.handleEvent,b);else throw Error("Invalid listener argument");b=2147483647<Number(c)?-1:l.setTimeout(b,c||0);a.timer_=b;a.listener_.apply(null,a.args_)};var ob=angular.module("glueState",[]);
funciton pb(a,b){this.ngScope_=a;this.ngLocation_=b;this.components_={};this.ngScope_.$on("$locationChangeSuccess",angular.bind(this,this.handleLocationChange_))}pb.$inject=["$rootScope","$location"];
funciton qb(a,b){a.components_.modal=b;sb(a)}

funciton tb(a,b){var c=b||a.components_.modal,d=!1,e=a.ngLocation_.search(),f;for(f in c){var g;g="modal_"+f;var k=c[f];e[g]!==k&&(d=!0,e[g]=k)}d&&(a.ngLocation_.search(e),"$apply"!=a.ngScope_.$$phase&&"$digest"!=a.ngScope_.$$phase&&(a.ngScope_.$apply(),a.components_.modal=c))}pb.prototype.handleLocationChange_=
funciton(){var a,b={},c=sb(this),d;for(d in c)a=!0,b[d]=this.components_[d];a&&this.ngScope_.$broadcast("glue.state.update",b)};

funciton sb(a){var b,c=a.ngLocation_.search(),d,e,f={},g;for(g in c)if(d=g.split("_"),2===d.length?b=d:2<=d.length?(b=d.pop(),b=[d.join("_"),b]):b=void 0,b&&2===b.length&&(d=b[0],b=b[1],e=c[g],a.components_.hasOwnProperty(d))){var k=a.components_[d];!m(k)||m(k[b])&&k[b]===e||(k[b]=e,f[d]=!0)}return f}ob.service("glueState",pb);"use strict";var P=angular.module("glueModalService",[ob.name]);

funciton Q(a,b,c){this.ngScope_=a;this.disableState=c||!1;this.modals_={};this.stateService_=b;this.activeModal_=null;this.modalState_={active:"none"};this.init_()}Q.$inject=["$rootScope","glueState","glueModalServiceStoreRouteDisable"];
Q.prototype.init_=
funciton(){this.disableState||(qb(this.stateService_,this.modalState_),tb(this.stateService_,this.modalState_));this.ngScope_.$on("glue.state.update",angular.bind(this,
funciton(a,b){b.modal&&b.modal.active&&this.ngScope_.$broadcast(ub,this.activeModal_,!0)}))};Q.prototype.getActiveModalFromState=
funciton(){return this.modalState_.active};Q.prototype.getActiveModalFromState=Q.prototype.getActiveModalFromState;
Q.prototype.setActiveModalToNone=
funciton(){this.modalState_={active:"none"};this.disableState||tb(this.stateService_,this.modalState_);this.activeModal_="none"};Q.prototype.setActiveModalToNone=Q.prototype.setActiveModalToNone;Q.prototype.registerModal=
funciton(a){this.modals_[a]={name:a};var b=this.getActiveModalFromState();b==a&&this.showModal(b)};Q.prototype.registerModal=Q.prototype.registerModal;
Q.prototype.showModal=
funciton(a){this.ngScope_.$broadcast(vb,a);this.modalState_={active:a};this.disableState||tb(this.stateService_,this.modalState_);this.activeModal_=a};Q.prototype.showModal=Q.prototype.showModal;Q.prototype.hideModal=
funciton(a){this.ngScope_.$broadcast(ub,a,!0)};Q.prototype.hideModal=Q.prototype.hideModal;P.service("glueModalService",Q);P.value("glueModalServiceStoreRouteDisable",!1);"use strict";var wb=angular.module("glueShow",["ngAnimate"]);

funciton xb(a){return{restrict:"A",link:
funciton(b,c,d){b.$watch(d.glueShow,
funciton(b){a[b?"addClass":"removeClass"](c,"glue-show");c.attr("aria-hidden",b?"false":"true")})}}}xb.$inject=["$animate"];wb.directive("glueShow",xb);"use strict";var yb=angular.module("glueCommonBreakpoint",[]);

funciton zb(a,b){this.scope_=a;this.window_=b;this.elToCheck_=document.body;this.breakpoint_="";this.regex_=RegExp("[\"']","g");angular.element(this.window_).ready(angular.bind(this,this.handleBreakpointChange_));angular.element(this.window_).bind("resize",angular.bind(this,this.handleBreakpointChange_));angular.element(this.window_).bind("orientationchange",angular.bind(this,this.handleBreakpointChange_))}t("glue.ng.common.Breakpoint.service",zb);zb.$inject=["$rootScope","$window"];
zb.prototype.handleBreakpointChange_=
funciton(){var a;a=this.window_.getComputedStyle(this.elToCheck_,":after");a=a.getPropertyValue("content").replace(this.regex_,"");a!==this.breakpoint_&&(this.breakpoint_=a,this.scope_.$broadcast("glue.breakpoint.update",this.breakpoint_))};yb.service("glueBreakpoint",zb);"use strict";var Ab=angular.module("glueCommonMediaQuery",[]);
funciton R(a,b,c,d){this.scope_=a;this.window_=b;this.timeout_=c;this.categories_=d;this.resultsCache_={}}
t("glue.ng.common.MediaQuery.service",R);R.$inject=["$rootScope","$window","$timeout","glueMediaQueryCategories"];R.prototype.isMatching=
funciton(a){if(null!=this.resultsCache_[a])return this.resultsCache_[a];var b=this.window_.matchMedia(this.categories_[a]);this.resultsCache_[a]=b.matches;b.addListener(angular.bind(this,
funciton(b){this.timeout_(angular.bind(this,
funciton(){this.resultsCache_[a]=b.matches}))}));return b.matches};R.prototype.isMatching=R.prototype.isMatching;
R.prototype.isNotMatching=
funciton(a){return!this.isMatching(a)};R.prototype.isNotMatching=R.prototype.isNotMatching;Ab.service("glueMediaQuery",R);Ab.value("glueMediaQueryCategories",{mobile:"screen and (max-width: 767px)",desktop:"screen and (min-width: 768px)"});"use strict";

funciton T(a,b,c,d,e){this.ngScope_=a;this.ngTimeout_=b;this.ngElement_=c;this.glueModalService_=d;this.modalVisible_=!1;this.closeLabel||e.warn('An aria label has not been defined for modal "'+this.modalName_+'". Without defining the label, it will fallback to "Close" without localization. Please define a localized label with the data-glue-modal-close-label attribute.');this.closeLabel=this.closeLabel||"Close";Bb(this);this.modalName_&&(this.glueModalService_.registerModal(this.modalName_),this.ngScope_.$emit(Cb,
this.modalName_))}t("glue.ng.modal.container.ModalCtrl",T);T.$inject=["$scope","$timeout","$element","glueModalService","$log"];var vb="glue.modal.container.showModal",ub="glue.modal.container.hideModal",Cb="glue.modal.container.modalReady";

funciton Bb(a){a.ngScope_.$on(vb,angular.bind(a,
funciton(a,c){this.modalName_===c&&this.showModal()}));a.ngScope_.$on(ub,angular.bind(a,
funciton(a,c,d){this.modalName_===c&&this.hideModal(a,d)}));angular.element(document.body).bind("keyup",angular.bind(a,
funciton(a){var b=a.which||a.keyCode;this.modalVisible_&&27===b&&this.hideModal(a,!0)}));a.ngElement_.on("click",angular.bind(a,a.hideModal))}

funciton Db(){var a=v(E("input",void 0,void 0)),b=v(E("a",void 0,void 0)),c=v(E("textarea",void 0,void 0)),d=v(E("select",void 0,void 0)),e=v(E("button",void 0,void 0)),f=v(E("iframe",void 0,void 0)),g=v(document.querySelectorAll('[role="button"]'));return ja(a,b,c,d,e,f,g)}

funciton Eb(a,b){var c=Db();ia(c,
funciton(a){if(!Ja(this.ngElement_[0],a))if(b){var c=a.getAttribute("tabindex");c?a.setAttribute("data-glue-tabindex-previous-value",c):a.setAttribute("data-glue-tabindex-previous-value","auto");a.setAttribute("tabindex",-1)}else c=a.getAttribute("data-glue-tabindex-previous-value"),"auto"==c?a.removeAttribute("tabindex"):a.setAttribute("tabindex",c),a.removeAttribute("data-glue-tabindex-previous-value")},a)}

funciton Fb(a){var b=angular.element(document).find("body");a.modalVisible_?b.addClass("glue-modal-active"):b.removeClass("glue-modal-active")}T.prototype.getModalVisible=
funciton(){return this.modalVisible_};T.prototype.getModalVisible=T.prototype.getModalVisible;
T.prototype.showModal=
funciton(){this.ngTimeout_(angular.bind(this,
funciton(){this.modalVisible_=!0;Fb(this);var a;a=this.ngElement_[0];var b=E("h2",null,a)[0],c=E("h3",null,a)[0],d=E("h4",null,a)[0],e=E("h5",null,a)[0],f=E("h6",null,a)[0];(a=E("h1",null,a)[0]||b||c||d||e||f)?(Ea&&null!==a&&"innerText"in a?a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n"):(b=[],Ma(a,b,!0),a=b.join("")),a=a.replace(/ \xAD /g," ").replace(/\xAD/g,""),a=a.replace(/\u200B/g,""),Ea||(a=a.replace(/ +/g," "))," "!=a&&(a=a.replace(/^\s*/,
""))):a=!1;this.ngScope_.$emit("glue.modal.container.modalShown",this.modalName_,this.ngElement_);Eb(this,!0);a&&this.ngElement_[0].setAttribute("aria-label",a);this.ngElement_[0].setAttribute("tabindex",1);this.ngElement_[0].focus()}))};T.prototype.showModal=T.prototype.showModal;
T.prototype.hideModal=
funciton(a,b){!b&&Na(a.target)||this.ngTimeout_(angular.bind(this,
funciton(){this.modalVisible_=!1;Fb(this);Eb(this);this.glueModalService_.setActiveModalToNone();this.ngScope_.$emit("glue.modal.container.modalHidden",this.modalName_,this.ngElement_);this.ngElement_[0].removeAttribute("aria-label");this.ngElement_[0].removeAttribute("tabindex")}))};T.prototype.hideModal=T.prototype.hideModal;"use strict";

funciton Gb(a,b,c){this.ngScope_=a;this.ngElement_=b;this.glueModalService_=c;this.modalToTrigger_=oa(this.ngScope_,Hb);this.disabledOnMobile_=oa(this.ngScope_,Ib);this.init_()}t("glue.ng.modal.trigger.TriggerCtrl",Gb);Gb.$inject=["$scope","$element","glueModalService"];var Hb="modalToTrigger",Ib="disabledOnMobile";Gb.prototype.init_=
funciton(){wa||xa?(!this.disabledOnMobile_||this.disabledOnMobile_&&1!=this.disabledOnMobile_)&&Jb(this):Jb(this)};

funciton Jb(a){a.ngElement_.on("click",angular.bind(a,
funciton(a){a.preventDefault();this.glueModalService_.showModal(this.modalToTrigger_)}));a.ngElement_.on("keypress keydown",angular.bind(a,
funciton(a){var b=a.which||a.keyCode;if(32===b||13===b)a.preventDefault(),this.glueModalService_.showModal(this.modalToTrigger_)}))}
funciton U(a){a.startSymbol("{[");a.endSymbol("]}")}U.$inject=["$interpolateProvider"];U.module=angular.module("glueCommonConfig",[]);U.module.config(U);"use strict";
var Kb=angular.module("glueModalContainer",[U.module.name,wb.name,P.name]);

funciton Lb(a){a.get("/glue/modal/modal-template.html")||a.put("/glue/modal/modal-template.html",'<div>  <div class="glue-modal-overlay"      data-glue-show="modalCtrl.getModalVisible()">    <div class="glue-modal"        data-glue-show="modalCtrl.getModalVisible()"        role="dialog" tabindex="-1">      <button class="glue-modal-close"          aria-label="{[modalCtrl.closeLabel]}">\u00d7</button>      <div class="glue-modal-content" data-ng-transclude></div>    </div>  </div></div>');return{restrict:"A",
transclude:!0,scope:{modalName_:"@glueModal",closeLabel:"@glueModalCloseLabel"},bindToController:!0,controller:T,controllerAs:"modalCtrl",templateUrl:"/glue/modal/modal-template.html"}}Lb.$inject=["$templateCache"];Kb.directive("glueModal",Lb);var Mb=angular.module("glueCommon",[yb.name,Ab.name,U.module.name]);"use strict";var Nb=angular.module("glueModalTrigger",[P.name]);
Nb.directive("glueModalTrigger",
funciton(){return{restrict:"A",scope:{modalToTrigger:"@glueModalTrigger",disabledOnMobile:"=glueModalDisabledOnMobile"},controller:Gb,controllerAs:"triggerCtrl"}});"use strict";var Ob=angular.module("glueModal",[Mb.name,wb.name,P.name,Kb.name,Nb.name]);
funciton Pb(a){N.call(this);this.el_=a;this.handler_=new M(this);this.elementIsVisible_=!1;Ia();this.elementBounds_=this.viewportBox_=null;this.setupEvents_();this.updateViewportBox_();Qb(this)}u(Pb,N);h=Pb.prototype;
h.checkBounds=
funciton(){var a=Ia();Qb(this);this.checkElementVisibility_(a)};h.setupEvents_=
funciton(){this.handler_.listen(window,"resize",this.handleWindowResize_);this.handler_.listen(window,["scroll","load"],this.checkBounds)};h.updateViewportBox_=
funciton(){var a=Ha();this.viewportBox_=new O(0,a.width,a.height,0);this.viewportScale_&&Rb(this,this.viewportScale_)};

funciton Rb(a,b){var c=Sb(a.viewportBox_);a.viewportBox_.scale(b.width,b.height);var d=Sb(a.viewportBox_);a.viewportBox_.translate(new D(c.x-d.x,c.y-d.y))}
funciton Sb(a){return new D((a.left+(a.right-a.left))/2,(a.top+(a.bottom-a.top))/2)}

funciton Qb(a){var b=a.getElementBoundingBox_(a.el_),c=a.viewportBox_;b.left<=c.left&&b.right>=c.right&&(b.left=Math.max(c.left,b.left),b.right=Math.min(c.right,b.right));b.top<=c.top&&b.bottom>=c.bottom&&(b.top=Math.max(c.top,b.top),b.bottom=Math.min(c.bottom,b.bottom));a.elementBounds_=b}h.handleWindowResize_=
funciton(){this.updateViewportBox_();this.checkBounds()};
h.checkElementVisibility_=
funciton(){var a;a=this.elementIsVisible_?kb(this.viewportBox_,this.elementBounds_):this.viewportBox_.contains(this.elementBounds_);a!=this.elementIsVisible_&&(this.dispatchEvent(new Tb(0,a?"appeared":"disappeared")),this.elementIsVisible_=a)};
h.getElementBoundingBox_=
funciton(a){var b=a.getBoundingClientRect();y&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return new O(b.top,b.right,b.bottom,b.left)};
funciton Tb(a,b){G.call(this,b)}u(Tb,G);
funciton V(a,b,c){this.viewportElement_=b;this.useDebouncer_=!0===c;Pb.call(this,a)}u(V,Pb);h=V.prototype;
h.updateViewportBox_=
funciton(){if(this.viewportElement_)this.viewportBox_=this.getElementBoundingBox_(this.viewportElement_);else{var a=Ha();this.viewportBox_=new O(0,a.width,a.height,0)}this.viewportScale_&&Rb(this,this.viewportScale_)};
h.setupEvents_=
funciton(){this.useDebouncer_&&(this.scrollDebouncer_=new lb.Debouncer(this.checkBounds,200,this),this.resizeThrottler_=new mb(this.handleWindowResize_,200,this));this.handler_.listen(window,"resize",this.useDebouncer_?this.resizeThrottle_:this.handleWindowResize_);this.handler_.listen(window,["scroll","load"],this.useDebouncer_?this.scrollDebounce_:this.checkBounds)};
h.checkElementVisibility_=
funciton(){var a;a=this.elementIsVisible_||this.viewportElement_?kb(this.viewportBox_,this.elementBounds_):this.viewportBox_.contains(this.elementBounds_);a!==this.elementIsVisible_&&(this.dispatchEvent(new Tb(0,a?"appeared":"disappeared")),this.elementIsVisible_=a)};
h.getElementBoundingBox_=
funciton(a){var b=a.getBoundingClientRect(),c=b.top,d=b.bottom;getComputedStyle&&"fixed"===getComputedStyle(a).position&&(c=a.offsetTop,d=a.offsetTop+b.height);y&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return new O(c,b.right,d,b.left)};h.setElementVisibility=
funciton(a){setTimeout(r(
funciton(){this.elementIsVisible_=!0===a},this),50)};V.prototype.setElementVisibility=V.prototype.setElementVisibility;
V.prototype.scrollDebounce_=
funciton(){this.scrollDebouncer_&&this.scrollDebouncer_.fire()};V.prototype.resizeThrottle_=
funciton(){this.resizeThrottler_&&this.resizeThrottler_.fire()};
funciton Ub(a,b){if(!document.getElementById(a)){var c=document.createElement("div");c.className="trigger-box "+b;c.id=a;document.body.appendChild(c)}}

funciton W(a,b,c,d){
funciton e(){if((f?window.pageYOffset:a.scrollTop)===Ga){var c=Date.now(),rb=Math.round(S+bc*Vb(g,k,c)),fa=0;a.scrollTop=document.documentElement.scrollTop=rb;if(c>=k)setTimeout(
funciton(){window.isScrollAnimating=!1},1E3),"undefined"!==typeof d&&d(b);else if(fa=f?window.pageYOffset:a.scrollTop,fa!==Ga||fa===rb)Ga=fa,window.requestAnimationFrame(e,0),window.isScrollAnimating=!0}}var f="undefined"===typeof a||a===document.body,g=Date.now(),k=g+c,S=f?window.pageYOffset:a===document.body?
document.scrollingElement.scrollTop:a.scrollTop,bc=b.top-S;if(null===a)throw Error("The scroll container does not exist.");0===c&&(a.scrollTop=b.top);f&&(x("Trident")||x("MSIE")||x("Firefox"))&&W(document.documentElement,b,c,d);var Ga=f?window.pageYOffset:a.scrollTop;e()}t("allo.utils.smoothScroll",W);
funciton Vb(a,b,c){if(c<=a)return 0;if(c>=b)return 1;a=(c-a)/(b-a);return a*a*(3-2*a)}var Wb=angular.module("alloBodymovin",[]);

funciton X(a,b){this.ngScope_=a;this.ngElement_=b;this.renderer_=angular.isUndefined(this.ngScope_.config.renderer)||""===this.ngScope_.config.renderer?"svg":this.ngScope_.config.renderer;this.autoplay_=angular.isUndefined(this.ngScope_.config.renderer)?!1:this.ngScope_.config.autoplay;this.loop_=angular.isUndefined(this.ngScope_.config.loop)?!1:this.ngScope_.config.loop;this.container_=""===this.ngScope_.config.container?this.ngElement_[0]:this.ngElement_[0].querySelector(this.ngScope_.config.container);
this.stillFrame_=this.ngElement_[0].querySelector("img.still-frame");this.loaderEl_=angular.element(this.ngElement_[0].querySelector(".bodymovin-loader"));this.init_()}X.$inject=["$scope","$element"];
X.prototype.init_=
funciton(){null===this.container_&&(this.container_=this.ngElement_[0]);this.ngScope_.config.load?Xb(this):this.ngScope_.$watch(
funciton(){return this.ngScope_.config.load},r(this.loadChanged_,this),!0);this.ngScope_.disabled&&this.stillFrame_&&this.stillFrame_.hasAttribute("data-final-frame")&&(this.stillFrame_.src=this.stillFrame_.getAttribute("data-final-frame"));bodymovin.setQuality(50)};
X.prototype.loadChanged_=
funciton(a,b){a&&a!==b&&(this.loaderEl_&&this.loaderEl_.addClass("show"),Xb(this))};

funciton Xb(a){if(!/[^/]+$/.test(a.ngScope_.config.path))throw Error("This is not a valid file path.");if(""===a.ngScope_.config.name)throw Error("Animation name is required.");if(!angular.isObject(a.ngScope_.config.action))throw Error("Animation object is invalid.");/^svg$|^canvas$|^html$/.test(a.renderer_)||(a.renderer_="svg");a.ngScope_.config.action=bodymovin.loadAnimation({autoplay:a.autoplay_,container:a.container_,loop:a.loop_,name:a.ngScope_.config.name,path:a.ngScope_.config.path,renderer:a.renderer_});
a.ngScope_.config.action.completed=!1;a.ngScope_.config.action.addEventListener("complete",r(a.onComplete_,a));a.ngScope_.config.action.addEventListener("data_ready",r(a.onDataReady_,a))}X.prototype.onComplete_=
funciton(a){this.ngScope_.$apply(
funciton(a){a.config.action.completed=!0});if(angular.is
funciton(this.ngScope_.config.onComplete))this.ngScope_.config.onComplete(a,this.ngScope_.action)};
X.prototype.onDataReady_=
funciton(a){this.loaderEl_&&this.loaderEl_.removeClass("show");this.ngElement_.addClass("js-animation-loaded");this.stillFrame_&&this.stillFrame_.hasAttribute("data-final-frame")&&(this.stillFrame_.src=this.stillFrame_.getAttribute("data-final-frame"));if("
funciton"===typeof this.ngScope_.config.onReady)this.ngScope_.config.onReady(a,this.ngScope_.action)};
Wb.directive("alloBodymovin",
funciton(){return{controller:X,controllerAs:"bodymovinCtrl",restrict:"A",scope:{config:"=animationConfig"},transclude:!1}});

funciton Yb(a,b){a||(a=document.body);var c=["en"],d=document.documentElement.getAttribute("lang"),e;for(e in c)if(d&&d!==c[e]){"
funciton"===typeof b&&b();return}c=a.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a, li");d=c.length;for(e=0;e<d;e++){var f,g=c[e];f=g.classList?g.classList:[g.className];for(var k=0;k<f.length;k++);null!==g.lastChild&&(f=g.lastChild.nodeValue,null!==f&&"string"===typeof f&&(k=" "===f.charAt(0)?" ":"",f=f.trim().replace(/ ([^ ]*)$/,"\u00a0$1"),g.lastChild.nodeValue=
k+f))}"
funciton"===typeof b&&b()}
funciton Zb(a,b){this.ngScope=a;this.ngWindow_=b;this.init_()}Zb.$inject=["$scope","$window"];Zb.prototype.init_=
funciton(){this.ngWindow_.onunload=
funciton(){this.ngWindow_.scrollTo(0,0)}.bind(this);$b()};
funciton $b(){var a=document.getElementById("main-content"),b=document.body;a||(a=b);Yb(a,
funciton(){b.style.opacity=1})}

funciton ac(a,b,c){this.ngScope_=a;this.ngTimeout_=b;this.ngElement_=c;this.iosStoreLink_=this.playStoreLink_=this.downloadBtnEl_=this.featuresEls_=this.indicatorEl_=null;this.init_()}ac.$inject=["$scope","$timeout","$element"];
ac.prototype.init_=
funciton(){
this.downloadBtnEl_=angular.element(this.ngElement_[0].querySelector("#header-download-btn"));this.playStoreLink_=this.downloadBtnEl_.attr("data-android-download-link");this.iosStoreLink_=this.downloadBtnEl_.attr("data-ios-download-link");this.indicatorEl_=angular.element(this.ngElement_[0].querySelector(".sliding-indicator"));this.featuresEls_=angular.element(document.querySelectorAll(".features-track"));Ub("allo-section-trigger","trigger-line allo-trigger-line");this.bindEvents_()};
ac.prototype.bindEvents_=
funciton(){this.ngTimeout_(angular.bind(this,
funciton(){cc(this);dc(this);ec(this)}))};
funciton cc(a){for(var b=null,c=0,d=a.featuresEls_.length;c<d;c++)b=new V(a.featuresEls_[c],document.getElementById("allo-section-trigger")),b.listen("appeared",angular.bind(a,
funciton(a){var b=angular.element(a.currentTarget.el_);b.hasClass("hero-context")?fc(this,"left"):b.hasClass("join-in-section")?fc(this,"right"):gc(this,a.target.el_.id)}),!1,a)}

funciton fc(a,b){a.indicatorEl_.css({"-ms-transform":"scaleX(0)","-transform":"scaleX(0)","-webkit-transform":"scaleX(0)",left:"left"===b?0:"auto",right:"right"===b?0:"auto"})}

funciton dc(a){var b=a.ngElement_[0].clientHeight-1;a=angular.element(a.ngElement_[0].querySelectorAll(".menu-anchor-link"));for(var c=0,d=a.length;c<d;c++)angular.element(a[c]).on("click",
funciton(a){a.preventDefault();var c=document.getElementById(this.rel);W(document.body,{id:c.id,top:c.offsetTop-b},600,
funciton(){gc(this,c.id)})})}

funciton ec(a){var b=a.ngElement_[0].clientHeight-1;a.downloadBtnEl_.on("click",angular.bind(a,
funciton(a){a.preventDefault();x("Android")?window.location.href=this.playStoreLink_:x("iPhone")&&!x("iPod")&&!x("iPad")||x("iPad")||x("iPod")?window.location.href=this.iosStoreLink_:W(document.body,{id:"allo-join-in",top:document.getElementById("allo-join-in").offsetTop-b},600,
funciton(){document.querySelector(".join-in-title").focus()})}))}

funciton gc(a,b){if(a.ngElement_){var c=a.ngElement_[0].querySelector('[rel="'+b+'"]'),d=a.ngElement_[0].querySelector(".active");d&&angular.element(d).removeClass("active");angular.element(c).addClass("active");a.indicatorEl_.css({"-ms-transform":"scaleX("+c.clientWidth/100+")","-transform":"scaleX("+c.clientWidth/100+")","-webkit-transform":"scaleX("+c.clientWidth/100+")",left:c.offsetLeft+"px"})}}
funciton hc(a,b){this.ngScope_=a;this.ngElement_=b;this.init_()}hc.$inject=["$scope","$element"];
hc.prototype.init_=
funciton(){Ub("allo-fab-animate-trigger","trigger-box");this.bindEvents_()};hc.prototype.bindEvents_=
funciton(){ic(this)};

funciton ic(a){var b=null,c=angular.element(document.querySelector(".fab-btn")),d=document.getElementById("allo-say-allo"),e=document.querySelector("header").clientHeight-1,b=a.ngElement_[0].querySelector(".hero-title-image");c.on("click",
funciton(){W(document.body,{id:d.id,top:d.offsetTop-e},600)});b=new V(b,document.getElementById("allo-fab-animate-trigger"));b.listen("appeared",
funciton(){c.addClass("init-state")},!1,a);b.listen("disappeared",
funciton(){c.removeClass("init-state")},!1,a)}

funciton Y(a,b){this.ngScope_=a;this.ngElement_=b;this.animationContainerEl_=angular.element(this.ngElement_[0].querySelector(".animate-container"));this.animationConfig={autoplay:!1,container:".animation-holder",disabled:!1,load:!0,loop:!1,name:this.animationContainerEl_.attr("data-animation-name"),action:{},onComplete:r(this.onComplete_,this),path:this.animationContainerEl_.attr("data-animation-path")};this.init_()}Y.$inject=["$scope","$element"];
Y.prototype.init_=
funciton(){Ub("allo-animation-trigger","trigger-box");angular.bind(this,this.bindEvents_())};Y.prototype.bindEvents_=
funciton(){var a=null,a=new V(this.animationContainerEl_[0],document.getElementById("allo-animation-trigger"));a.listen("appeared",
funciton(){this.animationConfig.action.play()},!1,this);a.listen("disappeared",
funciton(){this.animationConfig.action.stop()},!1,this)};Y.prototype.onComplete_=
funciton(){this.animationConfig.action.stop();this.animationConfig.action.play()};
var Z=angular.module("allo.main",[Wb.name,Ob.name]);Z.value("glueModalServiceStoreRouteDisable",!0);Z.config(["$locationProvider","$httpProvider",
funciton(a,b){b.defaults.cache=!0;a.html5Mode({enabled:!0,requireBase:!1,rewriteLinks:!1}).hashPrefix("!");if(Modernizr&&!window.picturefill&&(Modernizr.addTest("srcset","srcset"in document.createElement("img")),!Modernizr.srcset)){var c=document.createElement("script");c.src="//www.gstatic.com/external_hosted/picturefill/picturefill.min.js";document.body.appendChild(c)}}]);
Z.controller("MainCtrl",Zb);Z.controller("HeaderCtrl",ac);Z.controller("HeroCtrl",hc);Z.controller("FeatureCtrl",Y);
  })()