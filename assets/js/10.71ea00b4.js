(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{186:function(t,e,o){"use strict";o.r(e);var i=o(67),n=o(168),s=o(68),r=o(167),c=o(166),a=o(176),l=function(t){function e(){return Object(i.a)(this,e),Object(r.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(s.a)(e,[{key:"init",value:function(){Object(a.a)(Object(c.a)(e.prototype),"init",this).call(this);var t=new Image;t.src="https://d3o1694hluedf9.cloudfront.net/img/js.svg",this.el.appendChild(t)}}]),Object(n.a)(e,t),e}(o(175).a.Widget),u={data:function(){return{rect:[50,300,150,150],options:{multi:!0,aspectRatio:1,handles:["sw","nw","ne","se"],widgetConstructor:l},pos:{}}}},p=o(0),d=Object(p.a)(u,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Jcrop",{ref:"crop",staticClass:"jcrop-ux-current-hi",attrs:{src:"https://d3o1694hluedf9.cloudfront.net/sierra-750.jpg",options:t.options,rect:t.rect},on:{update:function(e){t.pos=e.sel.round()}}}),t._v(" "),o("coords",{attrs:{rect:t.pos}}),t._v(" "),o("div",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:t.options.multi,expression:"options.multi"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options.multi)?t._i(t.options.multi,null)>-1:t.options.multi},on:{change:function(e){var o=t.options.multi,i=e.target,n=!!i.checked;if(Array.isArray(o)){var s=t._i(o,null);i.checked?s<0&&t.$set(t.options,"multi",o.concat([null])):s>-1&&t.$set(t.options,"multi",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(t.options,"multi",n)}}}),t._v(" "),o("tt",[t._v("multi:"+t._s(t.options.multi?"true":"false"))])],1)])],1)},[],!1,null,null,null);e.default=d.exports}}]);