// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('om.dom');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.display_name[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core.display_name["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.init_state[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core.init_state["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.should_update[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__22232__auto__.call(null,this$,next_props,next_state));
} else {
var m__22232__auto____$1 = (om.core.should_update["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__22232__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.will_mount[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core.will_mount["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.did_mount[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core.did_mount["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.will_unmount[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.will_update[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__22232__auto__.call(null,this$,next_props,next_state));
} else {
var m__22232__auto____$1 = (om.core.will_update["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__22232__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.did_update[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__22232__auto__.call(null,this$,prev_props,prev_state));
} else {
var m__22232__auto____$1 = (om.core.did_update["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__22232__auto____$1.call(null,this$,prev_props,prev_state));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.will_receive_props[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__22232__auto__.call(null,this$,next_props));
} else {
var m__22232__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__22232__auto____$1.call(null,this$,next_props));
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.render[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core.render["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.render_props[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__22232__auto__.call(null,this$,props,state));
} else {
var m__22232__auto____$1 = (om.core.render_props["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__22232__auto____$1.call(null,this$,props,state));
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core.render_state[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__22232__auto__.call(null,this$,state));
} else {
var m__22232__auto____$1 = (om.core.render_state["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,state) : m__22232__auto____$1.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$5 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__22232__auto__.call(null,this$,cursor,korks,f,tag));
} else {
var m__22232__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__22232__auto____$1.call(null,this$,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var G__32555 = arguments.length;
switch (G__32555) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._get_state[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core._get_state["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._get_state[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__22232__auto__.call(null,this$,ks));
} else {
var m__22232__auto____$1 = (om.core._get_state["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__22232__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var G__32558 = arguments.length;
switch (G__32558) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._get_render_state[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._get_render_state[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__22232__auto__.call(null,this$,ks));
} else {
var m__22232__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__22232__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;



/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var G__32561 = arguments.length;
switch (G__32561) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__22232__auto__.call(null,this$,val,render));
} else {
var m__22232__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__22232__auto____$1.call(null,this$,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__22232__auto__.call(null,this$,ks,val,render));
} else {
var m__22232__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__22232__auto____$1.call(null,this$,ks,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;



/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._get_queue[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core._get_queue["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__22232__auto__.call(null,this$,c));
} else {
var m__22232__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__22232__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__22231__auto__ = (((x == null))?null:x);
var m__22232__auto__ = (om.core._value[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__22232__auto__.call(null,x));
} else {
var m__22232__auto____$1 = (om.core._value["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__22232__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
}
});

goog.object.set(om.core.IValue,"_",true);

var G__32563_32566 = om.core._value;
var G__32564_32567 = "_";
var G__32565_32568 = ((function (G__32563_32566,G__32564_32567){
return (function (x){
return x;
});})(G__32563_32566,G__32564_32567))
;
goog.object.set(G__32563_32566,G__32564_32567,G__32565_32568);

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__22231__auto__ = (((cursor == null))?null:cursor);
var m__22232__auto__ = (om.core._path[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__22232__auto__.call(null,cursor));
} else {
var m__22232__auto____$1 = (om.core._path["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__22232__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__22231__auto__ = (((cursor == null))?null:cursor);
var m__22232__auto__ = (om.core._state[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__22232__auto__.call(null,cursor));
} else {
var m__22232__auto____$1 = (om.core._state["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__22232__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var G__32570 = arguments.length;
switch (G__32570) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__22231__auto__ = (((value == null))?null:value);
var m__22232__auto__ = (om.core._to_cursor[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__22232__auto__.call(null,value,state));
} else {
var m__22232__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(value,state) : m__22232__auto____$1.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__22231__auto__ = (((value == null))?null:value);
var m__22232__auto__ = (om.core._to_cursor[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__22232__auto__.call(null,value,state,path));
} else {
var m__22232__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__22232__auto____$1.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;



/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__22231__auto__ = (((cursor == null))?null:cursor);
var m__22232__auto__ = (om.core._derive[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__22232__auto__.call(null,cursor,derived,state,path));
} else {
var m__22232__auto____$1 = (om.core._derive["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__22232__auto____$1.call(null,cursor,derived,state,path));
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
}
});

goog.object.set(om.core.ICursorDerive,"_",true);

var G__32572_32575 = om.core._derive;
var G__32573_32576 = "_";
var G__32574_32577 = ((function (G__32572_32575,G__32573_32576){
return (function (this$,derived,state,path){
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
});})(G__32572_32575,G__32573_32576))
;
goog.object.set(G__32572_32575,G__32573_32576,G__32574_32577);
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__22231__auto__ = (((cursor == null))?null:cursor);
var m__22232__auto__ = (om.core._transact_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__22232__auto__.call(null,cursor,korks,f,tag));
} else {
var m__22232__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__22232__auto____$1.call(null,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__22231__auto__ = (((x == null))?null:x);
var m__22232__auto__ = (om.core._listen_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__22232__auto__.call(null,x,key,tx_listen));
} else {
var m__22232__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__22232__auto____$1.call(null,x,key,tx_listen));
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__22231__auto__ = (((x == null))?null:x);
var m__22232__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(x,key) : m__22232__auto__.call(null,x,key));
} else {
var m__22232__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(x,key) : m__22232__auto____$1.call(null,x,key));
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__22231__auto__ = (((x == null))?null:x);
var m__22232__auto__ = (om.core._notify_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__22232__auto__.call(null,x,tx_data,root_cursor));
} else {
var m__22232__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__22232__auto____$1.call(null,x,tx_data,root_cursor));
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__22232__auto__.call(null,this$,id,p,val));
} else {
var m__22232__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__22232__auto____$1.call(null,this$,id,p,val));
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__22232__auto__.call(null,this$,id,p));
} else {
var m__22232__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__22232__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__22232__auto__.call(null,this$,id));
} else {
var m__22232__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,id) : m__22232__auto____$1.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._get_property[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__22232__auto__.call(null,this$,id,p));
} else {
var m__22232__auto____$1 = (om.core._get_property["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__22232__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__22231__auto__ = (((cursor == null))?null:cursor);
var m__22232__auto__ = (om.core._root_key[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__22232__auto__.call(null,cursor));
} else {
var m__22232__auto____$1 = (om.core._root_key["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__22232__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._adapt[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,other) : m__22232__auto__.call(null,this$,other));
} else {
var m__22232__auto____$1 = (om.core._adapt["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,other) : m__22232__auto____$1.call(null,this$,other));
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
}
});

goog.object.set(om.core.IAdapt,"_",true);

var G__32578_32581 = om.core._adapt;
var G__32579_32582 = "_";
var G__32580_32583 = ((function (G__32578_32581,G__32579_32582){
return (function (_,other){
return other;
});})(G__32578_32581,G__32579_32582))
;
goog.object.set(G__32578_32581,G__32579_32582,G__32580_32583);
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__22232__auto__.call(null,this$,c));
} else {
var m__22232__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__22232__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__22232__auto__.call(null,this$,c));
} else {
var m__22232__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__22232__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__22231__auto__ = (((this$ == null))?null:this$);
var m__22232__auto__ = (om.core._get_deps[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto__.call(null,this$));
} else {
var m__22232__auto____$1 = (om.core._get_deps["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__22232__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
}
});

om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref(state);
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(om.core.path(cursor),korks);
var ret = ((((!((state == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$IOmSwap$)))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state)))?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.cst$kw$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path),cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,cljs.core.deref(state)], null);
if(!((tag == null))){
var G__32585 = cursor;
var G__32586 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.cst$kw$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__32585,G__32586) : om.core.notify_STAR_.call(null,G__32585,G__32586));
} else {
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var G__32589 = arguments.length;
switch (G__32589) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error("Assert failed: (component? x)"));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__32590 = (x.props["__om_cursor"]);
if(cljs.core.seq(korks__$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__32590,korks__$1);
} else {
return G__32590;
}
});

om.core.get_props.cljs$lang$maxFixedArity = 2;

/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var G__32593 = arguments.length;
switch (G__32593) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;

/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var G__32596 = arguments.length;
switch (G__32596) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;

om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4657__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var pending_state = temp__4657__auto__;
var G__32598 = state;
(G__32598["__om_prev_state"] = (state["__om_state"]));

(G__32598["__om_state"] = pending_state);

(G__32598["__om_pending_state"] = null);

return G__32598;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var G__32600 = arguments.length;
switch (G__32600) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__21548__auto__ = props;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return owner.props;
}
})();
var temp__4657__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4657__auto__)){
var props_state = temp__4657__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__21548__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;

om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(om.core.state(ref)),om.core.path(ref),cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = om.core.path(ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(ref_state),ref_path,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.cst$kw$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(ref_val_SINGLEQUOTE_,ref_state,ref_path) : om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path)));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$isOmComponent,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$getDisplayName,cljs.core.cst$kw$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_32624 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": prev_props, "isOmComponent": true})),(function (){var or__21548__auto__ = (state_32624["__om_prev_state"]);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return (state_32624["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

var temp__4657__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__32605 = cljs.core.seq(refs);
var chunk__32606 = null;
var count__32607 = (0);
var i__32608 = (0);
while(true){
if((i__32608 < count__32607)){
var ref = chunk__32606.cljs$core$IIndexed$_nth$arity$2(null,i__32608);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__32625 = seq__32605;
var G__32626 = chunk__32606;
var G__32627 = count__32607;
var G__32628 = (i__32608 + (1));
seq__32605 = G__32625;
chunk__32606 = G__32626;
count__32607 = G__32627;
i__32608 = G__32628;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__32605);
if(temp__4657__auto____$1){
var seq__32605__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32605__$1)){
var c__22382__auto__ = cljs.core.chunk_first(seq__32605__$1);
var G__32629 = cljs.core.chunk_rest(seq__32605__$1);
var G__32630 = c__22382__auto__;
var G__32631 = cljs.core.count(c__22382__auto__);
var G__32632 = (0);
seq__32605 = G__32629;
chunk__32606 = G__32630;
count__32607 = G__32631;
i__32608 = G__32632;
continue;
} else {
var ref = cljs.core.first(seq__32605__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__32633 = cljs.core.next(seq__32605__$1);
var G__32634 = null;
var G__32635 = (0);
var G__32636 = (0);
seq__32605 = G__32633;
chunk__32606 = G__32634;
count__32607 = G__32635;
i__32608 = G__32636;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillReceiveProps$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c))){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IShouldUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__21536__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__21536__auto__)){
var and__21536__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__21536__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__21536__auto____$1;
}
} else {
return and__21536__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__21536__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__21536__auto__){
return cljs.core.some(((function (and__21536__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__32602_SHARP_){
return om.core.ref_changed_QMARK_(p1__32602_SHARP_);
});})(and__21536__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__21536__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_32611 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_32612 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_32613 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_32614 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_32615 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRender$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderProps$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c))){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IRenderState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32615;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32614;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32613;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32612;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_32611;
}}),(function (next_props,next_state){
var this$ = this;
var c_32637 = om.core.children(this$);
if(((!((c_32637 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_32637.om$core$IWillUpdate$)))?true:(((!c_32637.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_32637):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_32637))){
var state_32638 = this$.state;
om.core.will_update(c_32637,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__21548__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = ({"__om_id": (function (){var or__21548__auto__ = id;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id)], 0))});
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDisplayName$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c))){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_32639 = om.core.children(this$);
if(((!((c_32639 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_32639.om$core$IWillMount$)))?true:(((!c_32639.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_32639):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_32639))){
om.core.will_mount(c_32639);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x32640 = obj;
x32640.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x32640.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32640){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__21536__auto__ = !((app_state == null));
if(and__21536__auto__){
return render;
} else {
return and__21536__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x32640))
;

x32640.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32640){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__21536__auto__ = !((app_state == null));
if(and__21536__auto__){
return render;
} else {
return and__21536__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x32640))
;

x32640.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x32640.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32640){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x32640))
;

x32640.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32640){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32640))
;

x32640.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x32640.om$core$IGetState$_get_state$arity$1 = ((function (x32640){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__21548__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return (state["__om_state"]);
}
});})(x32640))
;

x32640.om$core$IGetState$_get_state$arity$2 = ((function (x32640){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32640))
;

return x32640;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.react_id = (function om$core$react_id(x){
var id = (function (){var G__32641 = (om.core.get_node.cljs$core$IFn$_invoke$arity$1 ? om.core.get_node.cljs$core$IFn$_invoke$arity$1(x) : om.core.get_node.call(null,x));
var G__32642 = "reactid";
return goog.dom.dataset.get(G__32641,G__32642);
})();
if(cljs.core.truth_(id)){
} else {
throw (new Error("Assert failed: id"));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gstate),spath);
if(cljs.core.truth_(cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.cst$kw$previous_DASH_state,cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.cst$kw$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.cst$kw$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.cst$kw$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__21548__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__21548__auto__ = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id),((((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IInitState$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null)], 0));
(props["__om_init_state"] = null);

return ({"__om_id": om_id});
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$componentDidMount,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$),cljs.core.cst$kw$render_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidMount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_32653 = om.core.children(this$);
if(((!((c_32653 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_32653.om$core$IWillMount$)))?true:(((!c_32653.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_32653):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_32653))){
om.core.will_mount(c_32653);
} else {
}

if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : om.core.mounted_QMARK_.call(null,this$)))){
return om.core.no_local_merge_pending_state(this$);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IWillUnmount$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.core.react_id(this$)], 0));

var temp__4657__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4657__auto__){
var refs = temp__4657__auto__;
var seq__32647 = cljs.core.seq(refs);
var chunk__32648 = null;
var count__32649 = (0);
var i__32650 = (0);
while(true){
if((i__32650 < count__32649)){
var ref = chunk__32648.cljs$core$IIndexed$_nth$arity$2(null,i__32650);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__32654 = seq__32647;
var G__32655 = chunk__32648;
var G__32656 = count__32649;
var G__32657 = (i__32650 + (1));
seq__32647 = G__32654;
chunk__32648 = G__32655;
count__32649 = G__32656;
i__32650 = G__32657;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__32647);
if(temp__4657__auto____$1){
var seq__32647__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__32647__$1)){
var c__22382__auto__ = cljs.core.chunk_first(seq__32647__$1);
var G__32658 = cljs.core.chunk_rest(seq__32647__$1);
var G__32659 = c__22382__auto__;
var G__32660 = cljs.core.count(c__22382__auto__);
var G__32661 = (0);
seq__32647 = G__32658;
chunk__32648 = G__32659;
count__32649 = G__32660;
i__32650 = G__32661;
continue;
} else {
var ref = cljs.core.first(seq__32647__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__32662 = cljs.core.next(seq__32647__$1);
var G__32663 = null;
var G__32664 = (0);
var G__32665 = (0);
seq__32647 = G__32662;
chunk__32648 = G__32663;
count__32649 = G__32664;
i__32650 = G__32665;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_32666 = this$.props;
var c_32667 = om.core.children(this$);
if(((!((c_32667 == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c_32667.om$core$IWillUpdate$)))?true:(((!c_32667.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_32667):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_32667))){
var state_32668 = this$.state;
om.core.will_update(c_32667,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": next_props, "isOmComponent": true})),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.cst$kw$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null);
if(((!((c == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === c.om$core$IDidUpdate$)))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_32669 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1(({"props": prev_props, "isOmComponent": true})),(function (){var or__21548__auto__ = cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x32670 = cljs.core.clj__GT_js(methods$);
x32670.om$core$ISetState$ = cljs.core.PROTOCOL_SENTINEL;

x32670.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x32670){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__21536__auto__ = !((gstate == null));
if(and__21536__auto__){
return render;
} else {
return and__21536__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x32670))
;

x32670.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x32670){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x32670))
;

x32670.om$core$IGetRenderState$ = cljs.core.PROTOCOL_SENTINEL;

x32670.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x32670){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(om.core.get_gstate(this$__$1)),spath);
});})(x32670))
;

x32670.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x32670){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32670))
;

x32670.om$core$IGetState$ = cljs.core.PROTOCOL_SENTINEL;

x32670.om$core$IGetState$_get_state$arity$1 = ((function (x32670){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : om.core.mounted_QMARK_.call(null,this$__$1)))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(om.core.get_gstate(this$__$1)),spath);
var or__21548__auto__ = cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x32670))
;

x32670.om$core$IGetState$_get_state$arity$2 = ((function (x32670){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x32670))
;

return x32670;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ICursor$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_(om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_(cljs.core.deref(x),cljs.core.cst$kw$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__32673){
var vec__32674 = p__32673;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32674,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32674,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__32677 = null;
var G__32677__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__32677__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__32677 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32677__2.call(this,self__,k);
case 3:
return G__32677__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32677.cljs$core$IFn$_invoke$arity$2 = G__32677__2;
G__32677.cljs$core$IFn$_invoke$arity$3 = G__32677__3;
return G__32677;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args32672){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32672)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.state),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$IIndexed$_nth$arity$3(null,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__32679 = null;
var G__32679__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__32679__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__32679 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__32679__2.call(this,self__,k);
case 3:
return G__32679__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32679.cljs$core$IFn$_invoke$arity$2 = G__32679__2;
G__32679.cljs$core$IFn$_invoke$arity$3 = G__32679__3;
return G__32679;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args32678){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args32678)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(self__.state),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x32680 = cljs.core.clone(val);
x32680.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x32680.cljs$core$IDeref$_deref$arity$1 = ((function (x32680){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(state),path,cljs.core.cst$kw$om$core_SLASH_invalid);
});})(x32680))
;

x32680.om$core$ICursor$ = cljs.core.PROTOCOL_SENTINEL;

x32680.om$core$ICursor$_path$arity$1 = ((function (x32680){
return (function (_){
var ___$1 = this;
return path;
});})(x32680))
;

x32680.om$core$ICursor$_state$arity$1 = ((function (x32680){
return (function (_){
var ___$1 = this;
return state;
});})(x32680))
;

x32680.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x32680.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32680){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x32680))
;

x32680.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

x32680.cljs$core$IEquiv$_equiv$arity$2 = ((function (x32680){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x32680))
;

return x32680;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var G__32682 = arguments.length;
switch (G__32682) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if(((!((val == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === val.om$core$IToCursor$)))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || ((cljs.core.PROTOCOL_SENTINEL === val.cljs$core$ICloneable$)))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;

om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),state));
});


/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === atom.cljs$core$IDeref$)))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom))){
} else {
throw (new Error("Assert failed: (satisfies? IDeref atom)"));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x32687 = cljs.core.clone(x);
x32687.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x32687.cljs$core$ICloneable$_clone$arity$1 = ((function (x32687){
return (function (this$){
var this$__$1 = this;
var G__32688 = cljs.core.clone(x);
var G__32689 = parent;
return (om.core.ref_sub_cursor.cljs$core$IFn$_invoke$arity$2 ? om.core.ref_sub_cursor.cljs$core$IFn$_invoke$arity$2(G__32688,G__32689) : om.core.ref_sub_cursor.call(null,G__32688,G__32689));
});})(x32687))
;

x32687.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x32687.om$core$IAdapt$_adapt$arity$2 = ((function (x32687){
return (function (this$,other){
var this$__$1 = this;
var G__32690 = om.core.adapt(x,other);
var G__32691 = parent;
return (om.core.ref_sub_cursor.cljs$core$IFn$_invoke$arity$2 ? om.core.ref_sub_cursor.cljs$core$IFn$_invoke$arity$2(G__32690,G__32691) : om.core.ref_sub_cursor.call(null,G__32690,G__32691));
});})(x32687))
;

x32687.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x32687.om$core$ICursorDerive$_derive$arity$4 = ((function (x32687){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32687))
;

x32687.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x32687.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32687){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$1,korks,f) : om.core.commit_BANG_.call(null,cursor__$1,korks,f));

return om.core._refresh_deps_BANG_(parent);
});})(x32687))
;

return x32687;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IOmRef$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(cursor))){
return cursor;
} else {
var path = om.core.path(cursor);
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY))),path);
var x32693 = cljs.core.clone(cursor);
x32693.om$core$ICursorDerive$ = cljs.core.PROTOCOL_SENTINEL;

x32693.om$core$ICursorDerive$_derive$arity$4 = ((function (x32693,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x32693,path,storage))
;

x32693.om$core$IOmRef$ = cljs.core.PROTOCOL_SENTINEL;

x32693.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x32693,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)),c);
});})(x32693,path,storage))
;

x32693.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x32693,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)));
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x32693,path,storage))
;

x32693.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x32693,path,storage){
return (function (_){
var ___$1 = this;
var seq__32694 = cljs.core.seq(cljs.core.vals(cljs.core.deref(storage)));
var chunk__32695 = null;
var count__32696 = (0);
var i__32697 = (0);
while(true){
if((i__32697 < count__32696)){
var c = chunk__32695.cljs$core$IIndexed$_nth$arity$2(null,i__32697);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__32698 = seq__32694;
var G__32699 = chunk__32695;
var G__32700 = count__32696;
var G__32701 = (i__32697 + (1));
seq__32694 = G__32698;
chunk__32695 = G__32699;
count__32696 = G__32700;
i__32697 = G__32701;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__32694);
if(temp__4657__auto__){
var seq__32694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32694__$1)){
var c__22382__auto__ = cljs.core.chunk_first(seq__32694__$1);
var G__32702 = cljs.core.chunk_rest(seq__32694__$1);
var G__32703 = c__22382__auto__;
var G__32704 = cljs.core.count(c__22382__auto__);
var G__32705 = (0);
seq__32694 = G__32702;
chunk__32695 = G__32703;
count__32696 = G__32704;
i__32697 = G__32705;
continue;
} else {
var c = cljs.core.first(seq__32694__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__32706 = cljs.core.next(seq__32694__$1);
var G__32707 = null;
var G__32708 = (0);
var G__32709 = (0);
seq__32694 = G__32706;
chunk__32695 = G__32707;
count__32696 = G__32708;
i__32697 = G__32709;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32693,path,storage))
;

x32693.om$core$IOmRef$_get_deps$arity$1 = ((function (x32693,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref(storage);
});})(x32693,path,storage))
;

x32693.om$core$ITransact$ = cljs.core.PROTOCOL_SENTINEL;

x32693.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x32693,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$2,korks,f) : om.core.commit_BANG_.call(null,cursor__$2,korks,f));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x32693,path,storage))
;

return x32693;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__21548__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error("Assert failed: (component? c)"));
}

if(cljs.core.truth_(om.core.cursor_QMARK_(ref))){
} else {
throw (new Error("Assert failed: (cursor? ref)"));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(ref))){
} else {
throw (new Error("Assert failed: (ref-cursor? ref)"));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function om$core$get_renderT(state){
var or__21548__auto__ = state.om$render$T;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var G__32711 = arguments.length;
switch (G__32711) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__32712_32717 = cljs.core.seq(cljs.core.deref(om.core.refresh_set));
var chunk__32713_32718 = null;
var count__32714_32719 = (0);
var i__32715_32720 = (0);
while(true){
if((i__32715_32720 < count__32714_32719)){
var f_32721 = chunk__32713_32718.cljs$core$IIndexed$_nth$arity$2(null,i__32715_32720);
(f_32721.cljs$core$IFn$_invoke$arity$0 ? f_32721.cljs$core$IFn$_invoke$arity$0() : f_32721.call(null));

var G__32722 = seq__32712_32717;
var G__32723 = chunk__32713_32718;
var G__32724 = count__32714_32719;
var G__32725 = (i__32715_32720 + (1));
seq__32712_32717 = G__32722;
chunk__32713_32718 = G__32723;
count__32714_32719 = G__32724;
i__32715_32720 = G__32725;
continue;
} else {
var temp__4657__auto___32726 = cljs.core.seq(seq__32712_32717);
if(temp__4657__auto___32726){
var seq__32712_32727__$1 = temp__4657__auto___32726;
if(cljs.core.chunked_seq_QMARK_(seq__32712_32727__$1)){
var c__22382__auto___32728 = cljs.core.chunk_first(seq__32712_32727__$1);
var G__32729 = cljs.core.chunk_rest(seq__32712_32727__$1);
var G__32730 = c__22382__auto___32728;
var G__32731 = cljs.core.count(c__22382__auto___32728);
var G__32732 = (0);
seq__32712_32717 = G__32729;
chunk__32713_32718 = G__32730;
count__32714_32719 = G__32731;
i__32715_32720 = G__32732;
continue;
} else {
var f_32733 = cljs.core.first(seq__32712_32727__$1);
(f_32733.cljs$core$IFn$_invoke$arity$0 ? f_32733.cljs$core$IFn$_invoke$arity$0() : f_32733.call(null));

var G__32734 = cljs.core.next(seq__32712_32727__$1);
var G__32735 = null;
var G__32736 = (0);
var G__32737 = (0);
seq__32712_32717 = G__32734;
chunk__32713_32718 = G__32735;
count__32714_32719 = G__32736;
i__32715_32720 = G__32737;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;

om.core.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__21548__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRender$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,x));
if(or__21548__auto__){
return or__21548__auto__;
} else {
var or__21548__auto____$1 = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderProps$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x));
if(or__21548__auto____$1){
return or__21548__auto____$1;
} else {
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$IRenderState$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid Om component fn, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not return valid instance")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(or (satisfies? IRender x) (satisfies? IRenderProps x) (satisfies? IRenderState x))")].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$descriptor,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$react_DASH_key,null,cljs.core.cst$kw$key,null,cljs.core.cst$kw$init_DASH_state,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$key_DASH_fn,null,cljs.core.cst$kw$opts,null,cljs.core.cst$kw$om$core_SLASH_index,null,cljs.core.cst$kw$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var G__32744 = arguments.length;
switch (G__32744) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_32747 = (function (){var or__21548__auto__ = descriptor;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
var or__21548__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__21548__auto____$1)){
return or__21548__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_32747 === goog.object.get(f,"om$tag"))))){
var factory_32748 = (function (){var G__32745 = React.createClass(rdesc_32747);
return React.createFactory(G__32745);
})();
goog.object.set(f,"om$descriptor",factory_32748);

goog.object.set(f,"om$tag",rdesc_32747);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;

om.core.getf = (function om$core$getf(var_args){
var G__32750 = arguments.length;
switch (G__32750) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = (function (){var fexpr__32751 = f.dispatch_fn;
return (fexpr__32751.cljs$core$IFn$_invoke$arity$2 ? fexpr__32751.cljs$core$IFn$_invoke$arity$2(cursor,null) : fexpr__32751.call(null,cursor,null));
})();
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = (function (){var fexpr__32752 = f.dispatch_fn;
return (fexpr__32752.cljs$core$IFn$_invoke$arity$3 ? fexpr__32752.cljs$core$IFn$_invoke$arity$3(cursor,null,opts) : fexpr__32752.call(null,cursor,null,opts));
})();
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;

om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var G__32755 = arguments.length;
switch (G__32755) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_(m))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(valid-opts? m)")].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__32756 = ({"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
});
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__32756) : ctor.call(null,G__32756));
} else {
var map__32757 = m;
var map__32757__$1 = ((((!((map__32757 == null)))?((((map__32757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32757):map__32757);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,cljs.core.cst$kw$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,cljs.core.cst$kw$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,cljs.core.cst$kw$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,cljs.core.cst$kw$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32757__$1,cljs.core.cst$kw$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4655__auto__ = cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4655__auto__)){
var i = temp__4655__auto__;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else {
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(cursor_SINGLEQUOTE_) : key_fn.call(null,cursor_SINGLEQUOTE_)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$react_DASH_key)
));
var shared = (function (){var or__21548__auto__ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.cst$kw$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__32759 = ({"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__32757,map__32757__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__32757,map__32757__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__32757,map__32757__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__32757,map__32757__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__21548__auto__ = rkey;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__32759) : ctor.call(null,G__32759));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var G__32762 = arguments.length;
switch (G__32762) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m) : om.core._STAR_instrument_STAR_.call(null,f,x,m));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;

/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var G__32765 = arguments.length;
switch (G__32765) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error("Assert failed: (or (nil? m) (map? m))"));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;

om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === state.om$core$INotify$)))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_(om.core.INotify,state))){
} else {
var properties_32779 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var listeners_32780 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var render_queue_32781 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var x32768_32782 = state;
x32768_32782.om$core$IRootProperties$ = cljs.core.PROTOCOL_SENTINEL;

x32768_32782.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_32779,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_32779,cljs.core.dissoc,id,k);
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_32779,cljs.core.dissoc,id);
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$IRootProperties$_get_property$arity$3 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(properties_32779),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$INotify$ = cljs.core.PROTOCOL_SENTINEL;

x32768_32782.om$core$INotify$_listen_BANG_$arity$3 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_32780,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_32780,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$INotify$_notify_BANG_$arity$3 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__32769_32783 = cljs.core.seq(cljs.core.deref(listeners_32780));
var chunk__32770_32784 = null;
var count__32771_32785 = (0);
var i__32772_32786 = (0);
while(true){
if((i__32772_32786 < count__32771_32785)){
var vec__32773_32787 = chunk__32770_32784.cljs$core$IIndexed$_nth$arity$2(null,i__32772_32786);
var __32788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32773_32787,(0),null);
var f_32789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32773_32787,(1),null);
(f_32789.cljs$core$IFn$_invoke$arity$2 ? f_32789.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_32789.call(null,tx_data,root_cursor));

var G__32790 = seq__32769_32783;
var G__32791 = chunk__32770_32784;
var G__32792 = count__32771_32785;
var G__32793 = (i__32772_32786 + (1));
seq__32769_32783 = G__32790;
chunk__32770_32784 = G__32791;
count__32771_32785 = G__32792;
i__32772_32786 = G__32793;
continue;
} else {
var temp__4657__auto___32794 = cljs.core.seq(seq__32769_32783);
if(temp__4657__auto___32794){
var seq__32769_32795__$1 = temp__4657__auto___32794;
if(cljs.core.chunked_seq_QMARK_(seq__32769_32795__$1)){
var c__22382__auto___32796 = cljs.core.chunk_first(seq__32769_32795__$1);
var G__32797 = cljs.core.chunk_rest(seq__32769_32795__$1);
var G__32798 = c__22382__auto___32796;
var G__32799 = cljs.core.count(c__22382__auto___32796);
var G__32800 = (0);
seq__32769_32783 = G__32797;
chunk__32770_32784 = G__32798;
count__32771_32785 = G__32799;
i__32772_32786 = G__32800;
continue;
} else {
var vec__32776_32801 = cljs.core.first(seq__32769_32795__$1);
var __32802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32776_32801,(0),null);
var f_32803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32776_32801,(1),null);
(f_32803.cljs$core$IFn$_invoke$arity$2 ? f_32803.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_32803.call(null,tx_data,root_cursor));

var G__32804 = cljs.core.next(seq__32769_32795__$1);
var G__32805 = null;
var G__32806 = (0);
var G__32807 = (0);
seq__32769_32783 = G__32804;
chunk__32770_32784 = G__32805;
count__32771_32785 = G__32806;
i__32772_32786 = G__32807;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$IRenderQueue$ = cljs.core.PROTOCOL_SENTINEL;

x32768_32782.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref(render_queue_32781);
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.deref(render_queue_32781),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_32781,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

x32768_32782.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x32768_32782,properties_32779,listeners_32780,render_queue_32781){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_32781,cljs.core.empty);
});})(x32768_32782,properties_32779,listeners_32780,render_queue_32781))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x32808 = cljs.core.clone(cursor);
x32808.cljs$core$ICloneable$ = cljs.core.PROTOCOL_SENTINEL;

x32808.cljs$core$ICloneable$_clone$arity$1 = ((function (x32808){
return (function (this$){
var this$__$1 = this;
var G__32809 = cljs.core.clone(cursor);
var G__32810 = root_key;
return (om.core.tag_root_key.cljs$core$IFn$_invoke$arity$2 ? om.core.tag_root_key.cljs$core$IFn$_invoke$arity$2(G__32809,G__32810) : om.core.tag_root_key.call(null,G__32809,G__32810));
});})(x32808))
;

x32808.om$core$IAdapt$ = cljs.core.PROTOCOL_SENTINEL;

x32808.om$core$IAdapt$_adapt$arity$2 = ((function (x32808){
return (function (this$,other){
var this$__$1 = this;
var G__32811 = om.core.adapt(cursor,other);
var G__32812 = root_key;
return (om.core.tag_root_key.cljs$core$IFn$_invoke$arity$2 ? om.core.tag_root_key.cljs$core$IFn$_invoke$arity$2(G__32811,G__32812) : om.core.tag_root_key.call(null,G__32811,G__32812));
});})(x32808))
;

x32808.om$core$IRootKey$ = cljs.core.PROTOCOL_SENTINEL;

x32808.om$core$IRootKey$_root_key$arity$1 = ((function (x32808){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x32808))
;

return x32808;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__32813){
var map__32814 = p__32813;
var map__32814__$1 = ((((!((map__32814 == null)))?((((map__32814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32814.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32814):map__32814);
var options = map__32814__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32814__$1,cljs.core.cst$kw$raf);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("First argument must be a function"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(ifn? f)")].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("No target specified to om.core/root"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not (nil? target))")].join('')));
}

var roots_SINGLEQUOTE__32864 = cljs.core.deref(om.core.roots);
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__32864,target)){
var fexpr__32816_32865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__32864,target);
(fexpr__32816_32865.cljs$core$IFn$_invoke$arity$0 ? fexpr__32816_32865.cljs$core$IFn$_invoke$arity$0() : fexpr__32816_32865.call(null));
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IAtom$)))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value)))?value:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value));
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__21548__auto__ = adapt;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$target,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$tx_DASH_listen,cljs.core.cst$kw$path,cljs.core.cst$kw$adapt,cljs.core.cst$kw$raf], 0));
var ret = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = cljs.core.deref(state__$1);
var cursor = (function (){var G__32818 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__32818) : adapt__$1.call(null,G__32818));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root))){
} else {
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,true);

var c_32866 = om.dom.render((function (){var _STAR_descriptor_STAR_32819 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_32820 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_32821 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_32822 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_32822;

om.core._STAR_state_STAR_ = _STAR_state_STAR_32821;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_32820;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_32819;
}})(),target);
if((cljs.core.deref(ret) == null)){
cljs.core.reset_BANG_(ret,c_32866);
} else {
}
}

var queue_32867 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_32867)){
} else {
var seq__32823_32868 = cljs.core.seq(queue_32867);
var chunk__32824_32869 = null;
var count__32825_32870 = (0);
var i__32826_32871 = (0);
while(true){
if((i__32826_32871 < count__32825_32870)){
var c_32872 = chunk__32824_32869.cljs$core$IIndexed$_nth$arity$2(null,i__32826_32871);
if(cljs.core.truth_(c_32872.isMounted())){
var temp__4657__auto___32873 = (c_32872.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___32873)){
var next_props_32874 = temp__4657__auto___32873;
(c_32872.props["__om_cursor"] = next_props_32874);

(c_32872.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__21548__auto__ = !((function (){var G__32828 = om.core.children(c_32872);
if(!((G__32828 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__32828.om$core$ICheckState$))){
return true;
} else {
if((!G__32828.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32828);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32828);
}
})());
if(or__21548__auto__){
return or__21548__auto__;
} else {
return c_32872.shouldComponentUpdate(c_32872.props,c_32872.state);
}
})())){
c_32872.forceUpdate();
} else {
}
} else {
}

var G__32875 = seq__32823_32868;
var G__32876 = chunk__32824_32869;
var G__32877 = count__32825_32870;
var G__32878 = (i__32826_32871 + (1));
seq__32823_32868 = G__32875;
chunk__32824_32869 = G__32876;
count__32825_32870 = G__32877;
i__32826_32871 = G__32878;
continue;
} else {
var temp__4657__auto___32879 = cljs.core.seq(seq__32823_32868);
if(temp__4657__auto___32879){
var seq__32823_32880__$1 = temp__4657__auto___32879;
if(cljs.core.chunked_seq_QMARK_(seq__32823_32880__$1)){
var c__22382__auto___32881 = cljs.core.chunk_first(seq__32823_32880__$1);
var G__32882 = cljs.core.chunk_rest(seq__32823_32880__$1);
var G__32883 = c__22382__auto___32881;
var G__32884 = cljs.core.count(c__22382__auto___32881);
var G__32885 = (0);
seq__32823_32868 = G__32882;
chunk__32824_32869 = G__32883;
count__32825_32870 = G__32884;
i__32826_32871 = G__32885;
continue;
} else {
var c_32886 = cljs.core.first(seq__32823_32880__$1);
if(cljs.core.truth_(c_32886.isMounted())){
var temp__4657__auto___32887__$1 = (c_32886.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4657__auto___32887__$1)){
var next_props_32888 = temp__4657__auto___32887__$1;
(c_32886.props["__om_cursor"] = next_props_32888);

(c_32886.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__21548__auto__ = !((function (){var G__32830 = om.core.children(c_32886);
if(!((G__32830 == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === G__32830.om$core$ICheckState$))){
return true;
} else {
if((!G__32830.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32830);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__32830);
}
})());
if(or__21548__auto__){
return or__21548__auto__;
} else {
return c_32886.shouldComponentUpdate(c_32886.props,c_32886.state);
}
})())){
c_32886.forceUpdate();
} else {
}
} else {
}

var G__32889 = cljs.core.next(seq__32823_32880__$1);
var G__32890 = null;
var G__32891 = (0);
var G__32892 = (0);
seq__32823_32868 = G__32889;
chunk__32824_32869 = G__32890;
count__32825_32870 = G__32891;
i__32826_32871 = G__32892;
continue;
}
} else {
}
}
break;
}
}

var _refs_32893 = cljs.core.deref(om.core._refs);
if(cljs.core.empty_QMARK_(_refs_32893)){
} else {
var seq__32831_32894 = cljs.core.seq(_refs_32893);
var chunk__32832_32895 = null;
var count__32833_32896 = (0);
var i__32834_32897 = (0);
while(true){
if((i__32834_32897 < count__32833_32896)){
var vec__32835_32898 = chunk__32832_32895.cljs$core$IIndexed$_nth$arity$2(null,i__32834_32897);
var path_32899__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835_32898,(0),null);
var cs_32900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32835_32898,(1),null);
var cs_32901__$1 = cljs.core.deref(cs_32900);
var seq__32838_32902 = cljs.core.seq(cs_32901__$1);
var chunk__32839_32903 = null;
var count__32840_32904 = (0);
var i__32841_32905 = (0);
while(true){
if((i__32841_32905 < count__32840_32904)){
var vec__32842_32906 = chunk__32839_32903.cljs$core$IIndexed$_nth$arity$2(null,i__32841_32905);
var id_32907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32842_32906,(0),null);
var c_32908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32842_32906,(1),null);
if(cljs.core.truth_(c_32908.shouldComponentUpdate(c_32908.props,c_32908.state))){
c_32908.forceUpdate();
} else {
}

var G__32909 = seq__32838_32902;
var G__32910 = chunk__32839_32903;
var G__32911 = count__32840_32904;
var G__32912 = (i__32841_32905 + (1));
seq__32838_32902 = G__32909;
chunk__32839_32903 = G__32910;
count__32840_32904 = G__32911;
i__32841_32905 = G__32912;
continue;
} else {
var temp__4657__auto___32913 = cljs.core.seq(seq__32838_32902);
if(temp__4657__auto___32913){
var seq__32838_32914__$1 = temp__4657__auto___32913;
if(cljs.core.chunked_seq_QMARK_(seq__32838_32914__$1)){
var c__22382__auto___32915 = cljs.core.chunk_first(seq__32838_32914__$1);
var G__32916 = cljs.core.chunk_rest(seq__32838_32914__$1);
var G__32917 = c__22382__auto___32915;
var G__32918 = cljs.core.count(c__22382__auto___32915);
var G__32919 = (0);
seq__32838_32902 = G__32916;
chunk__32839_32903 = G__32917;
count__32840_32904 = G__32918;
i__32841_32905 = G__32919;
continue;
} else {
var vec__32845_32920 = cljs.core.first(seq__32838_32914__$1);
var id_32921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845_32920,(0),null);
var c_32922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32845_32920,(1),null);
if(cljs.core.truth_(c_32922.shouldComponentUpdate(c_32922.props,c_32922.state))){
c_32922.forceUpdate();
} else {
}

var G__32923 = cljs.core.next(seq__32838_32914__$1);
var G__32924 = null;
var G__32925 = (0);
var G__32926 = (0);
seq__32838_32902 = G__32923;
chunk__32839_32903 = G__32924;
count__32840_32904 = G__32925;
i__32841_32905 = G__32926;
continue;
}
} else {
}
}
break;
}

var G__32927 = seq__32831_32894;
var G__32928 = chunk__32832_32895;
var G__32929 = count__32833_32896;
var G__32930 = (i__32834_32897 + (1));
seq__32831_32894 = G__32927;
chunk__32832_32895 = G__32928;
count__32833_32896 = G__32929;
i__32834_32897 = G__32930;
continue;
} else {
var temp__4657__auto___32931 = cljs.core.seq(seq__32831_32894);
if(temp__4657__auto___32931){
var seq__32831_32932__$1 = temp__4657__auto___32931;
if(cljs.core.chunked_seq_QMARK_(seq__32831_32932__$1)){
var c__22382__auto___32933 = cljs.core.chunk_first(seq__32831_32932__$1);
var G__32934 = cljs.core.chunk_rest(seq__32831_32932__$1);
var G__32935 = c__22382__auto___32933;
var G__32936 = cljs.core.count(c__22382__auto___32933);
var G__32937 = (0);
seq__32831_32894 = G__32934;
chunk__32832_32895 = G__32935;
count__32833_32896 = G__32936;
i__32834_32897 = G__32937;
continue;
} else {
var vec__32848_32938 = cljs.core.first(seq__32831_32932__$1);
var path_32939__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32848_32938,(0),null);
var cs_32940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32848_32938,(1),null);
var cs_32941__$1 = cljs.core.deref(cs_32940);
var seq__32851_32942 = cljs.core.seq(cs_32941__$1);
var chunk__32852_32943 = null;
var count__32853_32944 = (0);
var i__32854_32945 = (0);
while(true){
if((i__32854_32945 < count__32853_32944)){
var vec__32855_32946 = chunk__32852_32943.cljs$core$IIndexed$_nth$arity$2(null,i__32854_32945);
var id_32947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32855_32946,(0),null);
var c_32948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32855_32946,(1),null);
if(cljs.core.truth_(c_32948.shouldComponentUpdate(c_32948.props,c_32948.state))){
c_32948.forceUpdate();
} else {
}

var G__32949 = seq__32851_32942;
var G__32950 = chunk__32852_32943;
var G__32951 = count__32853_32944;
var G__32952 = (i__32854_32945 + (1));
seq__32851_32942 = G__32949;
chunk__32852_32943 = G__32950;
count__32853_32944 = G__32951;
i__32854_32945 = G__32952;
continue;
} else {
var temp__4657__auto___32953__$1 = cljs.core.seq(seq__32851_32942);
if(temp__4657__auto___32953__$1){
var seq__32851_32954__$1 = temp__4657__auto___32953__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32851_32954__$1)){
var c__22382__auto___32955 = cljs.core.chunk_first(seq__32851_32954__$1);
var G__32956 = cljs.core.chunk_rest(seq__32851_32954__$1);
var G__32957 = c__22382__auto___32955;
var G__32958 = cljs.core.count(c__22382__auto___32955);
var G__32959 = (0);
seq__32851_32942 = G__32956;
chunk__32852_32943 = G__32957;
count__32853_32944 = G__32958;
i__32854_32945 = G__32959;
continue;
} else {
var vec__32858_32960 = cljs.core.first(seq__32851_32954__$1);
var id_32961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32858_32960,(0),null);
var c_32962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32858_32960,(1),null);
if(cljs.core.truth_(c_32962.shouldComponentUpdate(c_32962.props,c_32962.state))){
c_32962.forceUpdate();
} else {
}

var G__32963 = cljs.core.next(seq__32851_32954__$1);
var G__32964 = null;
var G__32965 = (0);
var G__32966 = (0);
seq__32851_32942 = G__32963;
chunk__32852_32943 = G__32964;
count__32853_32944 = G__32965;
i__32854_32945 = G__32966;
continue;
}
} else {
}
}
break;
}

var G__32967 = cljs.core.next(seq__32831_32932__$1);
var G__32968 = null;
var G__32969 = (0);
var G__32970 = (0);
seq__32831_32894 = G__32967;
chunk__32832_32895 = G__32968;
count__32833_32896 = G__32969;
i__32834_32897 = G__32970;
continue;
}
} else {
}
}
break;
}
}

return cljs.core.deref(ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$ignore,false);

if(cljs.core.contains_QMARK_(cljs.core.deref(om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(om.core.refresh_queued){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__32861 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__32862 = (16);
return setTimeout(G__32861,G__32862);
} else {
var G__32863 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__32863);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__32814,map__32814__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error("Assert failed: (gdom/isElement target)"));
}

var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(om.core.roots),target);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.om$core$ITransact$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var G__32973 = arguments.length;
switch (G__32973) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (transactable? cursor)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var G__32976 = arguments.length;
switch (G__32976) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;

/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error("Assert failed: (cursor? cursor)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

var key = ((((!((cursor == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === cursor.om$core$IRootKey$)))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor)))?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path(cursor);
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.cst$kw$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var G__32980 = arguments.length;
switch (G__32980) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return ReactDOM.findDOMNode(owner);
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__32981 = owner.refs;
var G__32981__$1 = (((G__32981 == null))?null:(G__32981[name]));
if((G__32981__$1 == null)){
return null;
} else {
return ReactDOM.findDOMNode(G__32981__$1);
}
});

om.core.get_node.cljs$lang$maxFixedArity = 2;

/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(typeof name === 'string'){
} else {
throw (new Error("Assert failed: (string? name)"));
}

var G__32983 = owner.refs;
if((G__32983 == null)){
return null;
} else {
return goog.object.get(G__32983,name);
}
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var G__32985 = arguments.length;
switch (G__32985) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var G__32988 = arguments.length;
switch (G__32988) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var G__32991 = arguments.length;
switch (G__32991) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__32992 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32992) : f.call(null,G__32992));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__32993 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32993) : f.call(null,G__32993));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var G__32996 = arguments.length;
switch (G__32996) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__32997 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32997) : f.call(null,G__32997));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__32998 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__32998) : f.call(null,G__32998));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var G__33001 = arguments.length;
switch (G__33001) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error("Assert failed: (component? owner)"));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;

