// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('orthodocljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/clj/guestbook/routes/core.cljs.\n    Go ahead and edit it and see reloading in action."], 0));
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__33369){
var map__33370 = p__33369;
var map__33370__$1 = ((((!((map__33370 == null)))?((((map__33370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33370.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33370):map__33370);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33370__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33370__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.say = (function orthodocljs$core$say(state){
if(typeof orthodocljs.core.t_orthodocljs$core33372 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core33372 = (function (state,meta33373){
this.state = state;
this.meta33373 = meta33373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core33372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33374,meta33373__$1){
var self__ = this;
var _33374__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core33372(self__.state,meta33373__$1));
});

orthodocljs.core.t_orthodocljs$core33372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33374){
var self__ = this;
var _33374__$1 = this;
return self__.meta33373;
});

orthodocljs.core.t_orthodocljs$core33372.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core33372.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.state], 0));
});

orthodocljs.core.t_orthodocljs$core33372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$meta33373], null);
});

orthodocljs.core.t_orthodocljs$core33372.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core33372.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core33372";

orthodocljs.core.t_orthodocljs$core33372.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"orthodocljs.core/t_orthodocljs$core33372");
});

orthodocljs.core.__GT_t_orthodocljs$core33372 = (function orthodocljs$core$say_$___GT_t_orthodocljs$core33372(state__$1,meta33373){
return (new orthodocljs.core.t_orthodocljs$core33372(state__$1,meta33373));
});

}

return (new orthodocljs.core.t_orthodocljs$core33372(state,cljs.core.PersistentArrayMap.EMPTY));
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$coins,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),cljs.core.cst$kw$modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$coinMod,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickers,(0)], null)], null)], null));
}
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core33375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core33375 = (function (state,owner,meta33376){
this.state = state;
this.owner = owner;
this.meta33376 = meta33376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core33375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33377,meta33376__$1){
var self__ = this;
var _33377__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core33375(self__.state,self__.owner,meta33376__$1));
});

orthodocljs.core.t_orthodocljs$core33375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33377){
var self__ = this;
var _33377__$1 = this;
return self__.meta33376;
});

orthodocljs.core.t_orthodocljs$core33375.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core33375.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.core.build_all.cljs$core$IFn$_invoke$arity$2(orthodocljs.core.say,cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(self__.state))], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1){
return (function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hi"], 0));
});})(this$__$1))
, "className": "Generator"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Say hi"], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core33375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta33376], null);
});

orthodocljs.core.t_orthodocljs$core33375.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core33375.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core33375";

orthodocljs.core.t_orthodocljs$core33375.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"orthodocljs.core/t_orthodocljs$core33375");
});

orthodocljs.core.__GT_t_orthodocljs$core33375 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core33375(state__$1,owner__$1,meta33376){
return (new orthodocljs.core.t_orthodocljs$core33375(state__$1,owner__$1,meta33376));
});

}

return (new orthodocljs.core.t_orthodocljs$core33375(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("contacts")], null));
