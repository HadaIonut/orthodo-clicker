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
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__32950){
var map__32951 = p__32950;
var map__32951__$1 = ((((!((map__32951 == null)))?((((map__32951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32951):map__32951);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32951__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32951__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core32953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core32953 = (function (state,owner,meta32954){
this.state = state;
this.owner = owner;
this.meta32954 = meta32954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core32953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32955,meta32954__$1){
var self__ = this;
var _32955__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core32953(self__.state,self__.owner,meta32954__$1));
});

orthodocljs.core.t_orthodocljs$core32953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32955){
var self__ = this;
var _32955__$1 = this;
return self__.meta32954;
});

orthodocljs.core.t_orthodocljs$core32953.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core32953.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hello"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1){
return (function (e){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hi"], 0));
});})(this$__$1))
, "className": "Generator"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Say hi"], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core32953.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta32954], null);
});

orthodocljs.core.t_orthodocljs$core32953.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core32953.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core32953";

orthodocljs.core.t_orthodocljs$core32953.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"orthodocljs.core/t_orthodocljs$core32953");
});

orthodocljs.core.__GT_t_orthodocljs$core32953 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core32953(state__$1,owner__$1,meta32954){
return (new orthodocljs.core.t_orthodocljs$core32953(state__$1,owner__$1,meta32954));
});

}

return (new orthodocljs.core.t_orthodocljs$core32953(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("contacts")], null));
