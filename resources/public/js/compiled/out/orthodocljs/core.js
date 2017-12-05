// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('orthodocljs.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('orthodocljs.active');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This text is printed from src/clj/guestbook/routes/core.cljs.\n    Go ahead and edit it and see reloading in action."], 0));
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__30934){
var map__30935 = p__30934;
var map__30935__$1 = ((((!((map__30935 == null)))?((((map__30935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30935):map__30935);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30935__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30935__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$bishop,cljs.core.cst$kw$cathedrals,cljs.core.cst$kw$shrines,cljs.core.cst$kw$pamphlets,cljs.core.cst$kw$churches,cljs.core.cst$kw$clickers,cljs.core.cst$kw$shop,cljs.core.cst$kw$coinMod,cljs.core.cst$kw$menu2,cljs.core.cst$kw$atheists,cljs.core.cst$kw$archbishop,cljs.core.cst$kw$patriarh,cljs.core.cst$kw$reLock,cljs.core.cst$kw$coins,cljs.core.cst$kw$archpriest,cljs.core.cst$kw$religiousEvents,cljs.core.cst$kw$genSec,cljs.core.cst$kw$patriarchates,cljs.core.cst$kw$freeDays,cljs.core.cst$kw$menu],[(0),(0),(0),(0),(0),(0),"Prists",(1),"Prists",(0),(0),(0),(10),(1500000),(0),(1),(0),(0),(0),"true"]));
}
orthodocljs.core.change = (function orthodocljs$core$change(coins,owner){
var Mod = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.cst$kw$coinMod);
return (coins + Mod);
});
orthodocljs.core.manualGen = (function orthodocljs$core$manualGen(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,orthodocljs.active.add(state));
});
orthodocljs.core.displayManu = (function orthodocljs$core$displayManu(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu,orthodocljs.active.stateMenu(state));
});
orthodocljs.core.displayPrists = (function orthodocljs$core$displayPrists(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shop,"Prists");
});
orthodocljs.core.displayPrists2 = (function orthodocljs$core$displayPrists2(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu2,"Prists");
});
orthodocljs.core.displayBuild = (function orthodocljs$core$displayBuild(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shop,"Buildings");
});
orthodocljs.core.displayBuild2 = (function orthodocljs$core$displayBuild2(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu2,"Buildings");
});
orthodocljs.core.displayShop = (function orthodocljs$core$displayShop(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu,orthodocljs.active.stateShop(state));
});
orthodocljs.core.displayExtras = (function orthodocljs$core$displayExtras(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shop,"Extras");
});
orthodocljs.core.periodicly = (function orthodocljs$core$periodicly(state,owner){
var pula = cljs.core.rand_int((300));
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (pula){
return (function (coins){
var ver = (function (){var G__30938 = cljs.core.cst$kw$LocState;
var fexpr__30937 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__30937.cljs$core$IFn$_invoke$arity$1 ? fexpr__30937.cljs$core$IFn$_invoke$arity$1(G__30938) : fexpr__30937.call(null,G__30938));
})();
return (coins + ((function (){var G__30939 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30939) : ver.call(null,G__30939));
})() / (20)));
});})(pula))
);

var ver = (function (){var G__30941 = cljs.core.cst$kw$LocState;
var fexpr__30940 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__30940.cljs$core$IFn$_invoke$arity$1 ? fexpr__30940.cljs$core$IFn$_invoke$arity$1(G__30941) : fexpr__30940.call(null,G__30941));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30942 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30942) : ver.call(null,G__30942));
})(),(0)))){
var G__30944 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30949 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30949) : ver.call(null,G__30949));
})()], 0));
var G__30945 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30950 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30950) : ver.call(null,G__30950));
})()], 0));
var G__30946 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30952 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30952) : ver.call(null,G__30952));
})(),(0))))?(function (){var G__30956 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__30958 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30958) : ver.call(null,G__30958));
})() * (2)));
var G__30957 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__30955 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__30959 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30959) : ver.call(null,G__30959));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__30960 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30960) : ver.call(null,G__30960));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__30955.cljs$core$IFn$_invoke$arity$2 ? fexpr__30955.cljs$core$IFn$_invoke$arity$2(G__30956,G__30957) : fexpr__30955.call(null,G__30956,G__30957));
})():null);
var G__30947 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30961 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30961) : ver.call(null,G__30961));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__30962 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30962) : ver.call(null,G__30962));
})(),cljs.core.cst$kw$live,((function (){var G__30963 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30963) : ver.call(null,G__30963));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__30948 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__30964 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30964) : ver.call(null,G__30964));
})(),(1)))?(function (){var G__30967 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__30969 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30969) : ver.call(null,G__30969));
})() / (2)));
var G__30968 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__30966 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__30970 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__30970) : ver.call(null,G__30970));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__30966.cljs$core$IFn$_invoke$arity$2 ? fexpr__30966.cljs$core$IFn$_invoke$arity$2(G__30967,G__30968) : fexpr__30966.call(null,G__30967,G__30968));
})():null);
var fexpr__30943 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__30943.cljs$core$IFn$_invoke$arity$5 ? fexpr__30943.cljs$core$IFn$_invoke$arity$5(G__30944,G__30945,G__30946,G__30947,G__30948) : fexpr__30943.call(null,G__30944,G__30945,G__30946,G__30947,G__30948));
} else {
return null;
}
});
orthodocljs.core.button_comp = (function orthodocljs$core$button_comp(state){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-3"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(state) | (0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsSec"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Coins/Sec: ",cljs.core.cst$kw$genSec.cljs$core$IFn$_invoke$arity$1(state)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsSec"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Atheists: ",cljs.core.cst$kw$atheists.cljs$core$IFn$_invoke$arity$1(state)], 0)),om.dom.img(({"onClick": (function (e){
return orthodocljs.core.manualGen(state);
}), "className": "Generator", "src": "/img/OrthodoCoin.png"}))], 0));
});
orthodocljs.core.prists_shop = (function orthodocljs$core$prists_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickUPG(state,owner);
}), "className": "buy col-md-12 btn-extras"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__30971 = state;
var map__30971__$1 = ((((!((map__30971 == null)))?((((map__30971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30971):map__30971);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30971__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30973 = cljs.core.cst$kw$coinMod;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30973) : state.call(null,G__30973));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickerInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: ",((150) + (((50) * (function (){var G__30974 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30974) : state.call(null,G__30974));
})()) * (function (){var G__30975 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30975) : state.call(null,G__30975));
})()))], 0)),om.dom.div(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"col-md-1"], null)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30976 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30976) : state.call(null,G__30976));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchpriestInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "imgShop"})),"Buy Archpriests: ",((450) + (((50) * (function (){var G__30977 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30977) : state.call(null,G__30977));
})()) * (function (){var G__30978 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30978) : state.call(null,G__30978));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30979 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30979) : state.call(null,G__30979));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.BishopInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "imgShop"})),"Buy Bishops: ",((1070) + (((78) * (function (){var G__30980 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30980) : state.call(null,G__30980));
})()) * (function (){var G__30981 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30981) : state.call(null,G__30981));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30982 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30982) : state.call(null,G__30982));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchbishopInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "imgShop"})),"Buy Archbishops: ",((2570) + (((162) * (function (){var G__30983 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30983) : state.call(null,G__30983));
})()) * (function (){var G__30984 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30984) : state.call(null,G__30984));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30985 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30985) : state.call(null,G__30985));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.PatriarhsInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "imgShop"})),"Buy Patriarchs: ",((5394) + (((462) * (function (){var G__30986 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30986) : state.call(null,G__30986));
})()) * (function (){var G__30987 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30987) : state.call(null,G__30987));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30988 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30988) : state.call(null,G__30988));
})()], 0))], 0))], 0))], 0))], 0));
});
orthodocljs.core.buildings_shop = (function orthodocljs$core$buildings_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.churchesInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: ",((3500) + (((762) * (function (){var G__30989 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30989) : state.call(null,G__30989));
})()) * (function (){var G__30990 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30990) : state.call(null,G__30990));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30991 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30991) : state.call(null,G__30991));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.shrineInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: ",((6700) + (((862) * (function (){var G__30992 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30992) : state.call(null,G__30992));
})()) * (function (){var G__30993 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30993) : state.call(null,G__30993));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30994 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30994) : state.call(null,G__30994));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.cathedralInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: ",((8800) + (((1362) * (function (){var G__30995 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30995) : state.call(null,G__30995));
})()) * (function (){var G__30996 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30996) : state.call(null,G__30996));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__30997 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30997) : state.call(null,G__30997));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.patriarchateInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: ",((13600) + (((1743) * (function (){var G__30998 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30998) : state.call(null,G__30998));
})()) * (function (){var G__30999 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__30999) : state.call(null,G__30999));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__31000 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31000) : state.call(null,G__31000));
})()], 0))], 0))], 0))], 0))], 0));
});
orthodocljs.core.extras_shop = (function orthodocljs$core$extras_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31001 = cljs.core.cst$kw$reLock;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31001) : state.call(null,G__31001));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ReligiousEventsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adds a chance to start a religious event\n                      that doubles coins/sec for a while"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.pamphletsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: ",((4000) + (((1576) * (function (){var G__31002 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31002) : state.call(null,G__31002));
})()) * (function (){var G__31003 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31003) : state.call(null,G__31003));
})()))], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Sending pamphlets has a chance to increase\n              people's belief power but it can also make\n              more atheists (more pamphlets may attract more\n                              atheists)"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.FreeDaysInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: ",((7500) + (((5839) * (function (){var G__31004 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31004) : state.call(null,G__31004));
})()) * (function (){var G__31005 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31005) : state.call(null,G__31005));
})()))], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Free days could increase people's belief power,\n              chances of that happening will decrease with\n              every day added"], 0))], 0))], 0));
});
orthodocljs.core.shop_comp = (function orthodocljs$core$shop_comp(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group", "role": "group"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayPrists(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayBuild(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayExtras(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31006 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31006) : state.call(null,G__31006));
})(),"Prists"))?orthodocljs.core.prists_shop(state,owner):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31007 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31007) : state.call(null,G__31007));
})(),"Buildings"))?orthodocljs.core.buildings_shop(state,owner):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31008 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__31008) : state.call(null,G__31008));
})(),"Extras"))?orthodocljs.core.extras_shop(state,owner):null)], 0))], 0));
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core31009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core31009 = (function (state,owner,meta31010){
this.state = state;
this.owner = owner;
this.meta31010 = meta31010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core31009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31011,meta31010__$1){
var self__ = this;
var _31011__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core31009(self__.state,self__.owner,meta31010__$1));
});

orthodocljs.core.t_orthodocljs$core31009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31011){
var self__ = this;
var _31011__$1 = this;
return self__.meta31010;
});

orthodocljs.core.t_orthodocljs$core31009.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core31009.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core31009.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core31009.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__31012 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__31013 = (50);
return setInterval(G__31012,G__31013);
});

orthodocljs.core.t_orthodocljs$core31009.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core31009.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.button_comp(self__.state),om.dom.div(({"className": "col-md-4"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-5 btn-poz"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.shop_comp(self__.state,self__.owner)], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core31009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta31010], null);
});

orthodocljs.core.t_orthodocljs$core31009.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core31009.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core31009";

orthodocljs.core.t_orthodocljs$core31009.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core31009");
});

orthodocljs.core.__GT_t_orthodocljs$core31009 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core31009(state__$1,owner__$1,meta31010){
return (new orthodocljs.core.t_orthodocljs$core31009(state__$1,owner__$1,meta31010));
});

}

return (new orthodocljs.core.t_orthodocljs$core31009(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
