(window.webpackJsonp=window.webpackJsonp||[]).push([["2649"],{DHob:function(e,t,n){"use strict";var a=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=a(n("qNsG")),r=a(n("kOwS")),l=a(n("q1tI")),o=a(n("iuhU")),c=a(n("MruG")),s=n("ZmXx"),u=(a(n("gqMw")),[0,1,2,3,4,5,6,7,8,9,10]),d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var f=function(e){return(0,r.default)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return u.forEach(function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:-i/2,width:"calc(100% + ".concat(i,"px)"),"& > $item":{padding:i/2}})}),n}(e,"xs"),s.keys.reduce(function(t,n){return function(e,t,n){var a={};d.forEach(function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}}),"xs"===n?(0,r.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t},{}))};t.styles=f;var p=l.default.forwardRef(function(e,t){var n=e.alignContent,a=void 0===n?"stretch":n,c=e.alignItems,s=void 0===c?"stretch":c,u=e.classes,d=e.className,f=e.component,p=void 0===f?"div":f,m=e.container,x=void 0!==m&&m,g=e.direction,v=void 0===g?"row":g,h=e.item,w=void 0!==h&&h,y=e.justify,b=void 0===y?"flex-start":y,E=e.lg,j=void 0!==E&&E,I=e.md,S=void 0!==I&&I,M=e.sm,W=void 0!==M&&M,_=e.spacing,k=void 0===_?0:_,C=e.wrap,P=void 0===C?"wrap":C,N=e.xl,T=void 0!==N&&N,D=e.xs,G=void 0!==D&&D,K=e.zeroMinWidth,O=void 0!==K&&K,q=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),z=(0,o.default)(u.root,d,x&&[u.container,0!==k&&u["spacing-xs-".concat(String(k))]],w&&u.item,O&&u.zeroMinWidth,"row"!==v&&u["direction-xs-".concat(String(v))],"wrap"!==P&&u["wrap-xs-".concat(String(P))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==a&&u["align-content-xs-".concat(String(a))],"flex-start"!==b&&u["justify-xs-".concat(String(b))],!1!==G&&u["grid-xs-".concat(String(G))],!1!==W&&u["grid-sm-".concat(String(W))],!1!==S&&u["grid-md-".concat(String(S))],!1!==j&&u["grid-lg-".concat(String(j))],!1!==T&&u["grid-xl-".concat(String(T))]);return l.default.createElement(p,(0,r.default)({className:z,ref:t},q))});var m=(0,c.default)(f,{name:"MuiGrid"})(p);t.default=m},Lme2:function(e,t,n){"use strict";var a=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("pbKT")),r=a(n("kOwS")),l=a(n("0iUn")),o=a(n("sLSF")),c=a(n("Tit0")),s=a(n("MI3g")),u=a(n("a7VT")),d=a(n("q1tI")),f=(n("50bH"),a(n("Uk9h"))),p=a(n("Uw2v"));function m(e){var t=function(){if("undefined"==typeof Reflect||!i.default)return!1;if(i.default.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call((0,i.default)(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,a=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=(0,i.default)(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var x=function(e){return function(t){(0,c.default)(a,t);var n=m(a);function a(){return(0,l.default)(this,a),n.apply(this,arguments)}return(0,o.default)(a,[{key:"render",value:function(){var t=(0,r.default)({},this.props);return d.default.createElement(p.default,null,d.default.createElement(f.default,null,d.default.createElement(e,{initialProps:t})))}}]),a}(d.default.Component)};t.default=x},T2uM:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logs/get-in-touch",function(){var e=n("p1LI");return{page:e.default||e}}])},Uk9h:function(e,t,n){"use strict";var a=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("vYYK")),r=a(n("q1tI")),l=a(n("iuhU")),o=n("50bH"),c=a(n("bB6J"));var s=(0,o.withStyles)(function(e){var t,n;return{root:(t={paddingTop:96,flex:"1 1 100%",maxWidth:"100%",margin:"0 auto"},(0,i.default)(t,e.breakpoints.up("sm"),{paddingRight:e.spacing(1),maxWidth:"calc(100% - 175px)"}),(0,i.default)(t,e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6),maxWidth:"calc(100% - 175px - 240px)"}),t),disableToc:(n={},(0,i.default)(n,e.breakpoints.up("sm"),{maxWidth:"calc(100%)"}),(0,i.default)(n,e.breakpoints.up("lg"),{maxWidth:"calc(100% - 240px)"}),n)}})(function(e){var t=e.className,n=e.classes,a=e.children,i=e.disableToc;return r.default.createElement(c.default,{component:"main",id:"main-content",tabIndex:-1,className:(0,l.default)(n.root,t,i&&n.disableToc)},a)});t.default=s},jQp6:function(e,t,n){"use strict";var a=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i.default}});var i=a(n("DHob"))},p1LI:function(e,t,n){"use strict";var a=n("KI45");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("gSvJ");var i=a(n("q1tI")),r=n("50bH"),l=a(n("IFjZ")),o=a(n("jQp6")),c=a(n("Lme2")),s=a(n("m/Pd")),u=i.default.createElement("title",null,"Contact"),d=i.default.createElement("link",{rel:"stylesheet",href:"/static/media/css/noprint.css",media:"screen, print",type:"text/css"}),f=i.default.createElement("h1",null,"React Korea"),p=i.default.createElement("h3",null,"오세영"),m=i.default.createElement("h4",null,"+82 010 3487 2484"),x=i.default.createElement("h4",null,i.default.createElement("a",{href:"mailto:gaius.july@gmail.com"},"gaius.july@gmail.com")),g=i.default.createElement("h3",null,"Get Your Projects Done "),v=i.default.createElement("p",null,"Profesional and top quality service in web develolpment."),h=i.default.createElement("p",null,"don't hesitate to contact me.");var w=(0,c.default)((0,r.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"left",color:e.palette.text.secondary,fontFamily:"Roboto, sans-serif"}}})(function(e){var t=e.classes;return i.default.createElement("div",{className:"no-print"},i.default.createElement(s.default,null,u,d),i.default.createElement("div",{className:t.root},i.default.createElement(o.default,{container:!0,spacing:24},i.default.createElement(o.default,{item:!0,xs:!0},i.default.createElement(l.default,{className:t.paper},i.default.createElement("div",{className:"left-side"},f,p,m,x,g,v,h))))))}));t.default=w}},[["T2uM","5d41","9da1"]]]);