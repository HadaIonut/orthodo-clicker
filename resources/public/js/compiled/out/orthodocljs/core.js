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
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__34370){
var map__34371 = p__34370;
var map__34371__$1 = ((((!((map__34371 == null)))?((((map__34371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34371):map__34371);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34371__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34371__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__34373 = state;
var map__34373__$1 = ((((!((map__34373 == null)))?((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34373):map__34373);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34373__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34373__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__34375 = state;
var map__34375__$1 = ((((!((map__34375 == null)))?((((map__34375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34375):map__34375);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34375__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__34377 = state;
var map__34377__$1 = ((((!((map__34377 == null)))?((((map__34377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34377.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34377):map__34377);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34377__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state){
var map__34379 = state;
var map__34379__$1 = ((((!((map__34379 == null)))?((((map__34379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34379):map__34379);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34379__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34379__$1,cljs.core.cst$kw$coins);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));

return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * (50)))));
});
orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state){
var map__34381 = state;
var map__34381__$1 = ((((!((map__34381 == null)))?((((map__34381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34381):map__34381);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34381__$1,cljs.core.cst$kw$coins);
if((coins > ((100) + (coinMod * (50))))){
return orthodocljs.core.clickerInc(state);
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$coins,(0),cljs.core.cst$kw$coinMod,(1),cljs.core.cst$kw$clickers,(0),cljs.core.cst$kw$menu,"true"], null));
}
orthodocljs.core.manualGen = (function orthodocljs$core$manualGen(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,orthodocljs.core.add(state));
});
orthodocljs.core.displayManu = (function orthodocljs$core$displayManu(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu,orthodocljs.core.stateMenu(state));
});
orthodocljs.core.displayShop = (function orthodocljs$core$displayShop(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu,orthodocljs.core.stateShop(state));
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core34383 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core34383 = (function (state,owner,meta34384){
this.state = state;
this.owner = owner;
this.meta34384 = meta34384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core34383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34385,meta34384__$1){
var self__ = this;
var _34385__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core34383(self__.state,self__.owner,meta34384__$1));
});

orthodocljs.core.t_orthodocljs$core34383.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34385){
var self__ = this;
var _34385__$1 = this;
return self__.meta34384;
});

orthodocljs.core.t_orthodocljs$core34383.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core34383.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"id": "btn1", "className": "tab-pane fade in active"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p("hello")], 0));
});

orthodocljs.core.t_orthodocljs$core34383.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core34383.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.manualGen(self__.state);
});})(this$__$1))
, "className": "Generator"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Say hi"], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-6 btn-poz"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.displayManu(self__.state);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.displayShop(self__.state);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__34386 = self__.state;
var map__34386__$1 = ((((!((map__34386 == null)))?((((map__34386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34386):map__34386);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34386__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__34386,map__34386__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state);
});})(map__34386,map__34386__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Click Modifier"], 0)),(function (){var map__34388 = self__.state;
var map__34388__$1 = ((((!((map__34388 == null)))?((((map__34388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34388):map__34388);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34388__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * (50)));
})()], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["si asta merge"], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core34383.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta34384], null);
});

orthodocljs.core.t_orthodocljs$core34383.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core34383.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core34383";

orthodocljs.core.t_orthodocljs$core34383.cljs$lang$ctorPrWriter = (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"orthodocljs.core/t_orthodocljs$core34383");
});

orthodocljs.core.__GT_t_orthodocljs$core34383 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core34383(state__$1,owner__$1,meta34384){
return (new orthodocljs.core.t_orthodocljs$core34383(state__$1,owner__$1,meta34384));
});

}

return (new orthodocljs.core.t_orthodocljs$core34383(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
