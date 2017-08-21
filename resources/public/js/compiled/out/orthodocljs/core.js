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
orthodocljs.core.changeState = (function orthodocljs$core$changeState(in$,owner){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$genSec,in$], null));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__37066){
var map__37067 = p__37066;
var map__37067__$1 = ((((!((map__37067 == null)))?((((map__37067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37067.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37067):map__37067);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37067__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37067__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__37069 = state;
var map__37069__$1 = ((((!((map__37069 == null)))?((((map__37069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37069):map__37069);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37069__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__37071 = state;
var map__37071__$1 = ((((!((map__37071 == null)))?((((map__37071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37071):map__37071);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37071__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__37073 = state;
var map__37073__$1 = ((((!((map__37073 == null)))?((((map__37073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37073):map__37073);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37073__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(state,owner){
var map__37075 = state;
var map__37075__$1 = ((((!((map__37075 == null)))?((((map__37075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37075):map__37075);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,cljs.core.cst$kw$coins);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,cljs.core.cst$kw$clickers);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,cljs.core.cst$kw$churches);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37075__$1,cljs.core.cst$kw$genSec);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))));

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(((coinMod + (1)) * clickers) + ((coinMod + (1)) * (churches * (15)))));

return orthodocljs.core.changeState((((coinMod + (1)) * clickers) + ((coinMod + (1)) * churches)),owner);
});
orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__37077 = state;
var map__37077__$1 = ((((!((map__37077 == null)))?((((map__37077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37077):map__37077);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__37079 = state;
var map__37079__$1 = ((((!((map__37079 == null)))?((((map__37079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37079):map__37079);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,cljs.core.cst$kw$churches);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37079__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__37082 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__37083 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + coinMod));
var G__37084 = orthodocljs.core.changeState((genSec + coinMod),owner);
var fexpr__37081 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__37081.cljs$core$IFn$_invoke$arity$3 ? fexpr__37081.cljs$core$IFn$_invoke$arity$3(G__37082,G__37083,G__37084) : fexpr__37081.call(null,G__37082,G__37083,G__37084));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__37085 = state;
var map__37085__$1 = ((((!((map__37085 == null)))?((((map__37085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37085):map__37085);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,cljs.core.cst$kw$churches);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__37088 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__37089 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * (15))));
var G__37090 = orthodocljs.core.changeState((genSec + (coinMod * (15))),owner);
var fexpr__37087 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__37087.cljs$core$IFn$_invoke$arity$3 ? fexpr__37087.cljs$core$IFn$_invoke$arity$3(G__37088,G__37089,G__37090) : fexpr__37087.call(null,G__37088,G__37089,G__37090));
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$coins,(15000),cljs.core.cst$kw$coinMod,(1),cljs.core.cst$kw$clickers,(0),cljs.core.cst$kw$churches,(0),cljs.core.cst$kw$menu,"true",cljs.core.cst$kw$shop,"Prists",cljs.core.cst$kw$genSec,(0)], null));
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
orthodocljs.core.displayPrists = (function orthodocljs$core$displayPrists(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shop,"Prists");
});
orthodocljs.core.displayBuild = (function orthodocljs$core$displayBuild(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shop,"Buildings");
});
orthodocljs.core.displayShop = (function orthodocljs$core$displayShop(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu,orthodocljs.core.stateShop(state));
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core37091 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core37091 = (function (state,owner,meta37092){
this.state = state;
this.owner = owner;
this.meta37092 = meta37092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core37091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37093,meta37092__$1){
var self__ = this;
var _37093__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core37091(self__.state,self__.owner,meta37092__$1));
});

orthodocljs.core.t_orthodocljs$core37091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37093){
var self__ = this;
var _37093__$1 = this;
return self__.meta37092;
});

orthodocljs.core.t_orthodocljs$core37091.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core37091.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,self__.state], null);
});

orthodocljs.core.t_orthodocljs$core37091.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core37091.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__37094 = ((function (this$__$1){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.cst$kw$coins,((function (this$__$1){
return (function (coins){
var ver = (function (){var G__37097 = cljs.core.cst$kw$LocState;
var fexpr__37096 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
return (fexpr__37096.cljs$core$IFn$_invoke$arity$1 ? fexpr__37096.cljs$core$IFn$_invoke$arity$1(G__37097) : fexpr__37096.call(null,G__37097));
})();
return (coins + ((function (){var G__37098 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37098) : ver.call(null,G__37098));
})() / (1)));
});})(this$__$1))
);
});})(this$__$1))
;
var G__37095 = (1000);
return setInterval(G__37094,G__37095);
});

orthodocljs.core.t_orthodocljs$core37091.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core37091.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsSec"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Coins/Sec: ",cljs.core.cst$kw$genSec.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.img(({"onClick": ((function (this$__$1){
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__37099 = self__.state;
var map__37099__$1 = ((((!((map__37099 == null)))?((((map__37099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37099):map__37099);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37099__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__37101 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37101) : self__.state.call(null,G__37101));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Here you have your army:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__37102 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37102) : self__.state.call(null,G__37102));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__37103 = cljs.core.cst$kw$churches;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37103) : self__.state.call(null,G__37103));
})()], 0))], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__37099,map__37099__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists(self__.state);
});})(map__37099,map__37099__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__37099,map__37099__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild(self__.state);
});})(map__37099,map__37099__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37104 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37104) : self__.state.call(null,G__37104));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37099,map__37099__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__37099,map__37099__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__37105 = self__.state;
var map__37105__$1 = ((((!((map__37105 == null)))?((((map__37105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37105.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37105):map__37105);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37105__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37099,map__37099__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__37099,map__37099__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: 150"], 0))], 0))], 0)):om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37099,map__37099__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__37099,map__37099__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: 3500"], 0))], 0))], 0)))], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core37091.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta37092], null);
});

orthodocljs.core.t_orthodocljs$core37091.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core37091.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core37091";

orthodocljs.core.t_orthodocljs$core37091.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core37091");
});

orthodocljs.core.__GT_t_orthodocljs$core37091 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core37091(state__$1,owner__$1,meta37092){
return (new orthodocljs.core.t_orthodocljs$core37091(state__$1,owner__$1,meta37092));
});

}

return (new orthodocljs.core.t_orthodocljs$core37091(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
