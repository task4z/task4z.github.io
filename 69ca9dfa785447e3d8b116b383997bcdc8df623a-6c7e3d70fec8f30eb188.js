(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("f3/d"),a("0mN4");var r=a("RCTl"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s);t.a=function(){var e=r.data,t=e.site.siteMetadata.author;return n.a.createElement("div",{style:{display:"block"}},n.a.createElement("div",null,n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:t.name,style:{borderRadius:"50%",marginLeft:"45%"},imgStyle:{borderRadius:"50%"}})),n.a.createElement("div",{style:{textAlign:"center",borderBottom:"3px dotted lightgray"}},n.a.createElement("p",null,t.summary)))}},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=A(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,E=v&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},B=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(x,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},x=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&E&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,A=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,v=e.durationFadeIn,E=e.Tag,b=e.itemProp,S=e.loading,I=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:j?1:0,transition:C?"opacity "+v+"ms":"none"},o),N="boolean"==typeof m?"lightgray":m,k={transitionDelay:v+"ms"},V=(0,d.default)({opacity:this.state.imgLoaded?0:1},C&&k,{},o,{},f),T={title:t,alt:this.state.isVisible?"":a,style:V,className:A,itemProp:b};if(p){var z=p,M=g(p);return l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),N&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&k)}),M.base64&&l.default.createElement(L,{ariaHidden:!0,src:M.base64,spreadProps:T,imageVariants:z,generateSources:R}),M.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:M.tracedSVG,spreadProps:T,imageVariants:z,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(z),l.default.createElement(x,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,d.default)({alt:a,title:t,loading:S},M,{imageVariants:z}))}}))}if(h){var Q=h,Y=g(h),F=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},n);return"inherit"===n.display&&delete F.display,l.default.createElement(E,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},N&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:N,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},C&&k)}),Y.base64&&l.default.createElement(L,{ariaHidden:!0,src:Y.base64,spreadProps:T,imageVariants:Q,generateSources:R}),Y.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,src:Y.tracedSVG,spreadProps:T,imageVariants:Q,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,y(Q),l.default.createElement(x,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:S,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:B((0,d.default)({alt:a,title:t,loading:S},Y,{imageVariants:Q}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),N=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});C.propTypes={resolutions:O,sizes:N,fixed:u.default.oneOfType([O,u.default.arrayOf(O)]),fluid:u.default.oneOfType([N,u.default.arrayOf(N)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var k=C;t.default=k},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),o=a("Z6vF"),d=a("czNK"),l=a("ZD67"),u=a("0/R4"),c=a("s5qY"),f=a("s5qY"),A=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,p=Object.isExtensible,h=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(u(e)){var t=g(e);return!0===t?h(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},E=e.exports=a("4LiD")("WeakMap",m,v,l,!0,!0);f&&A&&(d((r=l.getConstructor(m,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,i){if(u(t)&&!p(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RCTl:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAwb/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAbp+WZsegZwrxiKrB//EABsQAAIDAAMAAAAAAAAAAAAAAAECAAMSESEz/9oACAEBAAEFAupbYEikMpPJtbZrcIjAaf00Z//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAwEBPwEjf//EABcRAAMBAAAAAAAAAAAAAAAAAAAQERL/2gAIAQIBAT8B0V//xAAcEAADAAEFAAAAAAAAAAAAAAAAARFBECExcZH/2gAIAQEABj8CFuVcEsOsiRNMeH//xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhMUFRcZH/2gAIAQEAAT8h9iVwq71yHntTE/juMTXhhLymuRVpYTG5jJFKWzXRP//aAAwDAQACAAMAAAAQtz/D/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERMXH/2gAIAQMBAT8QlacDwrP/xAAZEQEBAAMBAAAAAAAAAAAAAAABABEhQXH/2gAIAQIBAT8QEur3dsF//8QAHBABAAMAAwEBAAAAAAAAAAAAAQARITFRoZGx/9oACAEBAAE/EFKD9JXwrc1nmUbjY1BFT5K8GGG22ECymTQaV6m+3CYrCXzpAFuszvuVpUFVP5P/2Q==","width":100,"height":100,"src":"/static/71c3f8f06a248101769f96e2436a3cf3/b315d/avatar.jpg","srcSet":"/static/71c3f8f06a248101769f96e2436a3cf3/b315d/avatar.jpg 1x,\\n/static/71c3f8f06a248101769f96e2436a3cf3/dcd9a/avatar.jpg 1.5x,\\n/static/71c3f8f06a248101769f96e2436a3cf3/8295c/avatar.jpg 2x"}}},"site":{"siteMetadata":{"author":{"name":"André Alexandre Fermento Lourenço","summary":"Sou um full-stack developer que vive em Lisboa este é o meu blog que pode ter conteudo sobre qualquer devaneio que tenha, sempre com vista a optimização da vida."},"social":{"linkedin":"","github":"","stackoverflow":"","freecodecamp":""}}}}}')},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),o=a("9gX7"),d=a("SlkY"),l=a("CkkT"),u=a("aagx"),c=a("s5qY"),f=l(5),A=l(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,r){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&d(r,a,e[n],e)}));return r(l.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?p(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?p(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var r=i(n(t),!0);return!0===r?p(e).set(t,a):r[e._i]=a,e},ufstore:p}}}]);
//# sourceMappingURL=69ca9dfa785447e3d8b116b383997bcdc8df623a-6c7e3d70fec8f30eb188.js.map