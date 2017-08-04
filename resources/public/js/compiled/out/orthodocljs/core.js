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
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__33033){
var map__33034 = p__33033;
var map__33034__$1 = ((((!((map__33034 == null)))?((((map__33034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33034):map__33034);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33034__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33034__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__33036 = state;
var map__33036__$1 = ((((!((map__33036 == null)))?((((map__33036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33036):map__33036);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33036__$1,cljs.core.cst$kw$coins);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coins], 0));

return ((1) + coins);
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$coins,(0),cljs.core.cst$kw$modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$coinMod,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clickers,(0)], null)], null)], null));
}
orthodocljs.core.manualGen = (function orthodocljs$core$manualGen(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,orthodocljs.core.add(state));
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core33038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core33038 = (function (state,owner,meta33039){
this.state = state;
this.owner = owner;
this.meta33039 = meta33039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core33038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33040,meta33039__$1){
var self__ = this;
var _33040__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core33038(self__.state,self__.owner,meta33039__$1));
});

orthodocljs.core.t_orthodocljs$core33038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33040){
var self__ = this;
var _33040__$1 = this;
return self__.meta33039;
});

orthodocljs.core.t_orthodocljs$core33038.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core33038.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.manualGen(self__.state);
});})(this$__$1))
, "className": "Generator"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Say hi"], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core33038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta33039], null);
});

orthodocljs.core.t_orthodocljs$core33038.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core33038.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core33038";

orthodocljs.core.t_orthodocljs$core33038.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"orthodocljs.core/t_orthodocljs$core33038");
});

orthodocljs.core.__GT_t_orthodocljs$core33038 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core33038(state__$1,owner__$1,meta33039){
return (new orthodocljs.core.t_orthodocljs$core33038(state__$1,owner__$1,meta33039));
});

}

return (new orthodocljs.core.t_orthodocljs$core33038(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("contacts")], null));
