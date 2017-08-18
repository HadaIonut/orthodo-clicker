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
orthodocljs.core.updateState = (function orthodocljs$core$updateState(state,owner){
var map__29531 = state;
var map__29531__$1 = ((((!((map__29531 == null)))?((((map__29531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29531):map__29531);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29531__$1,cljs.core.cst$kw$coinMod);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29531__$1,cljs.core.cst$kw$clickers);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29531__$1,cljs.core.cst$kw$churches);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29531__$1,cljs.core.cst$kw$genSec);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((genSec + (coinMod * clickers)) + (coinMod * churches)));

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$coinMod,(coinMod + (1)),cljs.core.cst$kw$clickers,clickers,cljs.core.cst$kw$churches,churches,cljs.core.cst$kw$genSec,((genSec + (coinMod * clickers)) + (coinMod * churches))], null));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__29533){
var map__29534 = p__29533;
var map__29534__$1 = ((((!((map__29534 == null)))?((((map__29534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29534):map__29534);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29534__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29534__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__29536 = state;
var map__29536__$1 = ((((!((map__29536 == null)))?((((map__29536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29536):map__29536);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29536__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29536__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__29538 = state;
var map__29538__$1 = ((((!((map__29538 == null)))?((((map__29538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29538):map__29538);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29538__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__29540 = state;
var map__29540__$1 = ((((!((map__29540 == null)))?((((map__29540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29540):map__29540);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29540__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(state,owner){
var map__29542 = state;
var map__29542__$1 = ((((!((map__29542 == null)))?((((map__29542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29542):map__29542);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29542__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29542__$1,cljs.core.cst$kw$coins);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29542__$1,cljs.core.cst$kw$clickers);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));

return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))),orthodocljs.core.updateState(state,owner));
});
orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__29544 = state;
var map__29544__$1 = ((((!((map__29544 == null)))?((((map__29544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29544):map__29544);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29544__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29544__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__29546 = state;
var map__29546__$1 = ((((!((map__29546 == null)))?((((map__29546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29546.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29546):map__29546);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29546__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29546__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29546__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29546__$1,cljs.core.cst$kw$churches);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29546__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__29549 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__29550 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + coinMod));
var G__29551 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$coinMod,coinMod,cljs.core.cst$kw$clickers,(clickers + (1)),cljs.core.cst$kw$churches,churches,cljs.core.cst$kw$genSec,(genSec + coinMod)], null));
var fexpr__29548 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__29548.cljs$core$IFn$_invoke$arity$3 ? fexpr__29548.cljs$core$IFn$_invoke$arity$3(G__29549,G__29550,G__29551) : fexpr__29548.call(null,G__29549,G__29550,G__29551));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__29552 = state;
var map__29552__$1 = ((((!((map__29552 == null)))?((((map__29552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29552.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29552):map__29552);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,cljs.core.cst$kw$churches);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29552__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__29555 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__29556 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * (15))));
var G__29557 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$coinMod,coinMod,cljs.core.cst$kw$clickers,clickers,cljs.core.cst$kw$churches,(churches + (1)),cljs.core.cst$kw$genSec,(genSec + (coinMod * (15)))], null));
var fexpr__29554 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__29554.cljs$core$IFn$_invoke$arity$3 ? fexpr__29554.cljs$core$IFn$_invoke$arity$3(G__29555,G__29556,G__29557) : fexpr__29554.call(null,G__29555,G__29556,G__29557));
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$coins,(150),cljs.core.cst$kw$coinMod,(1),cljs.core.cst$kw$clickers,(0),cljs.core.cst$kw$churches,(0),cljs.core.cst$kw$menu,"true",cljs.core.cst$kw$genSec,(0)], null));
}
orthodocljs.core.change = (function orthodocljs$core$change(coins,owner){
var Mod = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.cst$kw$coinMod);
return (coins + Mod);
});
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
if(typeof orthodocljs.core.t_orthodocljs$core29558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core29558 = (function (state,owner,meta29559){
this.state = state;
this.owner = owner;
this.meta29559 = meta29559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core29558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29560,meta29559__$1){
var self__ = this;
var _29560__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core29558(self__.state,self__.owner,meta29559__$1));
});

orthodocljs.core.t_orthodocljs$core29558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29560){
var self__ = this;
var _29560__$1 = this;
return self__.meta29559;
});

orthodocljs.core.t_orthodocljs$core29558.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core29558.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,self__.state], null);
});

orthodocljs.core.t_orthodocljs$core29558.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core29558.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__29561 = ((function (this$__$1){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.cst$kw$coins,((function (this$__$1){
return (function (coins){
var ver = (function (){var G__29564 = cljs.core.cst$kw$LocState;
var fexpr__29563 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
return (fexpr__29563.cljs$core$IFn$_invoke$arity$1 ? fexpr__29563.cljs$core$IFn$_invoke$arity$1(G__29564) : fexpr__29563.call(null,G__29564));
})();
return (coins + ((function (){var G__29565 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29565) : ver.call(null,G__29565));
})() / (2)));
});})(this$__$1))
);
});})(this$__$1))
;
var G__29562 = (500);
return setInterval(G__29561,G__29562);
});

orthodocljs.core.t_orthodocljs$core29558.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core29558.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$genSec.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.img(({"onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.manualGen(self__.state);
});})(this$__$1))
, "className": "Generator", "src": "/img/OrthodoCoin.png"}))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-6 btn-poz"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.displayManu(self__.state);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.displayShop(self__.state);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__29566 = self__.state;
var map__29566__$1 = ((((!((map__29566 == null)))?((((map__29566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29566):map__29566);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29566__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__29568 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__29568) : self__.state.call(null,G__29568));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Here you have your army:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Prists ",(function (){var G__29569 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__29569) : self__.state.call(null,G__29569));
})()], 0))], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__29566,map__29566__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__29566,map__29566__$1,menu,this$__$1))
, "className": "construction ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__29570 = self__.state;
var map__29570__$1 = ((((!((map__29570 == null)))?((((map__29570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29570):map__29570);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29570__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__29566,map__29566__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__29566,map__29566__$1,menu,this$__$1))
, "className": "construction ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Prists: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__29566,map__29566__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__29566,map__29566__$1,menu,this$__$1))
, "className": "construction ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buy Churches: 3500"], 0))], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core29558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta29559], null);
});

orthodocljs.core.t_orthodocljs$core29558.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core29558.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core29558";

orthodocljs.core.t_orthodocljs$core29558.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core29558");
});

orthodocljs.core.__GT_t_orthodocljs$core29558 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core29558(state__$1,owner__$1,meta29559){
return (new orthodocljs.core.t_orthodocljs$core29558(state__$1,owner__$1,meta29559));
});

}

return (new orthodocljs.core.t_orthodocljs$core29558(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
