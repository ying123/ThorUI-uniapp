;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/sticky/sticky"],{"0db6":function(t,e,i){"use strict";var n=i("395b"),u=i.n(n);u.a},"0e30":function(t,e,i){"use strict";i.r(e);var n=i("1be5"),u=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);e["default"]=u.a},"1be5":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"tuiSticky",props:{scrollTop:{type:Number},stickyTop:{type:Number,default:0},stickyHeight:{type:String,default:"auto"},bgColor:{type:String,default:"none"}},watch:{scrollTop:function(t,e){this.updateStickyChange()}},onReady:function(){this.updateScrollChange()},data:function(){return{timer:null,top:0,height:0,isFixed:!1}},methods:{updateStickyChange:function(){var t=this.top,e=this.height,i=this.scrollTop,n=this.stickyTop;this.isFixed=i+n>=t&&i+n<t+e},updateScrollChange:function(){var e=this;this.timer&&(clearTimeout(this.timer),this.timer=null),this.timer=setTimeout(function(){var i=".tui-sticky-class",n=t.createSelectorQuery().in(e);n.select(i).boundingClientRect(function(t){t&&(e.top=t.top+(e.scrollTop||0),e.height=t.height)}).exec()},0)}}};e.default=i}).call(this,i("c11b")["default"])},"1c63":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},u=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return u})},"395b":function(t,e,i){},e582:function(t,e,i){"use strict";i.r(e);var n=i("1c63"),u=i("0e30");for(var c in u)"default"!==c&&function(t){i.d(e,t,function(){return u[t]})}(c);i("0db6");var o=i("2877"),r=Object(o["a"])(u["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/sticky/sticky-create-component',
    {
        'components/sticky/sticky-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("e582"))
        })
    },
    [['components/sticky/sticky-create-component']]
]);                