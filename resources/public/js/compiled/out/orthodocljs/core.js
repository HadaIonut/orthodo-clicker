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
var map__35788 = state;
var map__35788__$1 = ((((!((map__35788 == null)))?((((map__35788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35788):map__35788);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,cljs.core.cst$kw$coinMod);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35788__$1,cljs.core.cst$kw$clickers);
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$coinMod,(coinMod + (1)),cljs.core.cst$kw$clickers,clickers], null));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__35790){
var map__35791 = p__35790;
var map__35791__$1 = ((((!((map__35791 == null)))?((((map__35791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35791):map__35791);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35791__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35791__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__35793 = state;
var map__35793__$1 = ((((!((map__35793 == null)))?((((map__35793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35793):map__35793);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35793__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__35795 = state;
var map__35795__$1 = ((((!((map__35795 == null)))?((((map__35795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35795.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35795):map__35795);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35795__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__35797 = state;
var map__35797__$1 = ((((!((map__35797 == null)))?((((map__35797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35797):map__35797);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35797__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(state,owner){
var map__35799 = state;
var map__35799__$1 = ((((!((map__35799 == null)))?((((map__35799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35799.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35799):map__35799);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35799__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35799__$1,cljs.core.cst$kw$coins);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35799__$1,cljs.core.cst$kw$clickers);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));

return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))),orthodocljs.core.updateState(state,owner));
});
orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__35801 = state;
var map__35801__$1 = ((((!((map__35801 == null)))?((((map__35801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35801):map__35801);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35801__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__35803 = state;
var map__35803__$1 = ((((!((map__35803 == null)))?((((map__35803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35803):map__35803);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35803__$1,cljs.core.cst$kw$coinMod);
if((coins >= (150))){
var G__35806 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__35807 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$coinMod,coinMod,cljs.core.cst$kw$clickers,(clickers + (1))], null));
var fexpr__35805 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__35805.cljs$core$IFn$_invoke$arity$2 ? fexpr__35805.cljs$core$IFn$_invoke$arity$2(G__35806,G__35807) : fexpr__35805.call(null,G__35806,G__35807));
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$coins,(150),cljs.core.cst$kw$coinMod,(1),cljs.core.cst$kw$clickers,(0),cljs.core.cst$kw$menu,"true"], null));
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
if(typeof orthodocljs.core.t_orthodocljs$core35808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core35808 = (function (state,owner,meta35809){
this.state = state;
this.owner = owner;
this.meta35809 = meta35809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core35808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35810,meta35809__$1){
var self__ = this;
var _35810__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core35808(self__.state,self__.owner,meta35809__$1));
});

orthodocljs.core.t_orthodocljs$core35808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35810){
var self__ = this;
var _35810__$1 = this;
return self__.meta35809;
});

orthodocljs.core.t_orthodocljs$core35808.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core35808.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,self__.state], null);
});

orthodocljs.core.t_orthodocljs$core35808.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core35808.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__35811 = ((function (this$__$1){
return (function (){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.cst$kw$coins,((function (this$__$1){
return (function (coins){
var ver = (function (){var G__35814 = cljs.core.cst$kw$LocState;
var fexpr__35813 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(self__.owner);
return (fexpr__35813.cljs$core$IFn$_invoke$arity$1 ? fexpr__35813.cljs$core$IFn$_invoke$arity$1(G__35814) : fexpr__35813.call(null,G__35814));
})();
return (coins + ((function (){var G__35815 = cljs.core.cst$kw$coinMod;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__35815) : ver.call(null,G__35815));
})() * (function (){var G__35816 = cljs.core.cst$kw$clickers;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__35816) : ver.call(null,G__35816));
})()));
});})(this$__$1))
);
});})(this$__$1))
;
var G__35812 = (1000);
return setInterval(G__35811,G__35812);
});

orthodocljs.core.t_orthodocljs$core35808.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core35808.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.img(({"onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.manualGen(self__.state);
});})(this$__$1))
, "className": "Generator", "src": "/img/OrthodoCoin.png"}))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-6 btn-poz"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.displayManu(self__.state);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (this$__$1){
return (function (e){
return orthodocljs.core.displayShop(self__.state);
});})(this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__35817 = self__.state;
var map__35817__$1 = ((((!((map__35817 == null)))?((((map__35817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35817):map__35817);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35817__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__35819 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__35819) : self__.state.call(null,G__35819));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Here you have your army:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Prists ",(function (){var G__35820 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__35820) : self__.state.call(null,G__35820));
})()], 0))], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__35817,map__35817__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__35817,map__35817__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Belief Power"], 0)),(function (){var map__35821 = self__.state;
var map__35821__$1 = ((((!((map__35821 == null)))?((((map__35821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35821.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35821):map__35821);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35821__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()," X ",(function (){var G__35823 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__35823) : self__.state.call(null,G__35823));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__35817,map__35817__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__35817,map__35817__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Prists"], 0)),"150 X ",(function (){var G__35824 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__35824) : self__.state.call(null,G__35824));
})()], 0))], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core35808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta35809], null);
});

orthodocljs.core.t_orthodocljs$core35808.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core35808.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core35808";

orthodocljs.core.t_orthodocljs$core35808.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core35808");
});

orthodocljs.core.__GT_t_orthodocljs$core35808 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core35808(state__$1,owner__$1,meta35809){
return (new orthodocljs.core.t_orthodocljs$core35808(state__$1,owner__$1,meta35809));
});

}

return (new orthodocljs.core.t_orthodocljs$core35808(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
