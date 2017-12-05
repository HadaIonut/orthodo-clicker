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
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__29778){
var map__29779 = p__29778;
var map__29779__$1 = ((((!((map__29779 == null)))?((((map__29779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29779):map__29779);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29779__$1,cljs.core.cst$kw$status_DASH_text);
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
var ver = (function (){var G__29782 = cljs.core.cst$kw$LocState;
var fexpr__29781 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__29781.cljs$core$IFn$_invoke$arity$1 ? fexpr__29781.cljs$core$IFn$_invoke$arity$1(G__29782) : fexpr__29781.call(null,G__29782));
})();
return (coins + ((function (){var G__29783 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29783) : ver.call(null,G__29783));
})() / (20)));
});})(pula))
);

var ver = (function (){var G__29785 = cljs.core.cst$kw$LocState;
var fexpr__29784 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__29784.cljs$core$IFn$_invoke$arity$1 ? fexpr__29784.cljs$core$IFn$_invoke$arity$1(G__29785) : fexpr__29784.call(null,G__29785));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29786 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29786) : ver.call(null,G__29786));
})(),(0)))){
var G__29788 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29793 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29793) : ver.call(null,G__29793));
})()], 0));
var G__29789 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29794 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29794) : ver.call(null,G__29794));
})()], 0));
var G__29790 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29796 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29796) : ver.call(null,G__29796));
})(),(0))))?(function (){var G__29800 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__29802 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29802) : ver.call(null,G__29802));
})() * (2)));
var G__29801 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__29799 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__29803 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29803) : ver.call(null,G__29803));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__29804 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29804) : ver.call(null,G__29804));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__29799.cljs$core$IFn$_invoke$arity$2 ? fexpr__29799.cljs$core$IFn$_invoke$arity$2(G__29800,G__29801) : fexpr__29799.call(null,G__29800,G__29801));
})():null);
var G__29791 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29805 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29805) : ver.call(null,G__29805));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__29806 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29806) : ver.call(null,G__29806));
})(),cljs.core.cst$kw$live,((function (){var G__29807 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29807) : ver.call(null,G__29807));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__29792 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29808 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29808) : ver.call(null,G__29808));
})(),(1)))?(function (){var G__29811 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__29813 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29813) : ver.call(null,G__29813));
})() / (2)));
var G__29812 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__29810 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__29814 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__29814) : ver.call(null,G__29814));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__29810.cljs$core$IFn$_invoke$arity$2 ? fexpr__29810.cljs$core$IFn$_invoke$arity$2(G__29811,G__29812) : fexpr__29810.call(null,G__29811,G__29812));
})():null);
var fexpr__29787 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__29787.cljs$core$IFn$_invoke$arity$5 ? fexpr__29787.cljs$core$IFn$_invoke$arity$5(G__29788,G__29789,G__29790,G__29791,G__29792) : fexpr__29787.call(null,G__29788,G__29789,G__29790,G__29791,G__29792));
} else {
return null;
}
});
orthodocljs.core.button_comp = (function orthodocljs$core$button_comp(state){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-3"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(state) | (0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsSec"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Coins/Sec: ",cljs.core.cst$kw$genSec.cljs$core$IFn$_invoke$arity$1(state)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsSec"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Atheists: ",cljs.core.cst$kw$atheists.cljs$core$IFn$_invoke$arity$1(state)], 0)),om.dom.img(({"onClick": (function (e){
return orthodocljs.core.manualGen(state);
}), "className": "Generator", "src": "/img/OrthodoCoin.png"}))], 0));
});
orthodocljs.core.menu_comp = (function orthodocljs$core$menu_comp(state){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n           to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__29815 = cljs.core.cst$kw$coinMod;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29815) : state.call(null,G__29815));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayPrists2(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayBuild2(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29816 = cljs.core.cst$kw$menu2;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29816) : state.call(null,G__29816));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__29817 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29817) : state.call(null,G__29817));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "img"})),"Archpriests ",(function (){var G__29818 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29818) : state.call(null,G__29818));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "img"})),"Bishops ",(function (){var G__29819 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29819) : state.call(null,G__29819));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "img"})),"Archbishops ",(function (){var G__29820 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29820) : state.call(null,G__29820));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "img"})),"Patriarchs ",(function (){var G__29821 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29821) : state.call(null,G__29821));
})()], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29822 = cljs.core.cst$kw$menu2;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29822) : state.call(null,G__29822));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__29823 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29823) : state.call(null,G__29823));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__29824 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29824) : state.call(null,G__29824));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__29825 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29825) : state.call(null,G__29825));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__29826 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29826) : state.call(null,G__29826));
})()], 0))], 0)):null)], 0))], 0));
});
orthodocljs.core.prists_shop = (function orthodocljs$core$prists_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickUPG(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__29827 = state;
var map__29827__$1 = ((((!((map__29827 == null)))?((((map__29827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29827):map__29827);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29827__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29829 = cljs.core.cst$kw$coinMod;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29829) : state.call(null,G__29829));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickerInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: ",((150) + (((50) * (function (){var G__29830 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29830) : state.call(null,G__29830));
})()) * (function (){var G__29831 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29831) : state.call(null,G__29831));
})()))], 0)),om.dom.div(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"col-md-1"], null)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29832 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29832) : state.call(null,G__29832));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchpriestInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "imgShop"})),"Buy Archpriests: ",((450) + (((50) * (function (){var G__29833 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29833) : state.call(null,G__29833));
})()) * (function (){var G__29834 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29834) : state.call(null,G__29834));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29835 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29835) : state.call(null,G__29835));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.BishopInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "imgShop"})),"Buy Bishops: ",((1070) + (((78) * (function (){var G__29836 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29836) : state.call(null,G__29836));
})()) * (function (){var G__29837 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29837) : state.call(null,G__29837));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29838 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29838) : state.call(null,G__29838));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchbishopInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "imgShop"})),"Buy Archbishops: ",((2570) + (((162) * (function (){var G__29839 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29839) : state.call(null,G__29839));
})()) * (function (){var G__29840 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29840) : state.call(null,G__29840));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29841 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29841) : state.call(null,G__29841));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.PatriarhsInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "imgShop"})),"Buy Patriarchs: ",((5394) + (((462) * (function (){var G__29842 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29842) : state.call(null,G__29842));
})()) * (function (){var G__29843 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29843) : state.call(null,G__29843));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29844 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29844) : state.call(null,G__29844));
})()], 0))], 0))], 0))], 0))], 0));
});
orthodocljs.core.buildings_shop = (function orthodocljs$core$buildings_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.churchesInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: ",((3500) + (((762) * (function (){var G__29845 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29845) : state.call(null,G__29845));
})()) * (function (){var G__29846 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29846) : state.call(null,G__29846));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29847 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29847) : state.call(null,G__29847));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.shrineInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: ",((6700) + (((862) * (function (){var G__29848 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29848) : state.call(null,G__29848));
})()) * (function (){var G__29849 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29849) : state.call(null,G__29849));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29850 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29850) : state.call(null,G__29850));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.cathedralInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: ",((8800) + (((1362) * (function (){var G__29851 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29851) : state.call(null,G__29851));
})()) * (function (){var G__29852 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29852) : state.call(null,G__29852));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29853 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29853) : state.call(null,G__29853));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.patriarchateInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: ",((13600) + (((1743) * (function (){var G__29854 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29854) : state.call(null,G__29854));
})()) * (function (){var G__29855 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29855) : state.call(null,G__29855));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__29856 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29856) : state.call(null,G__29856));
})()], 0))], 0))], 0))], 0))], 0));
});
orthodocljs.core.extras_shop = (function orthodocljs$core$extras_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29857 = cljs.core.cst$kw$reLock;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29857) : state.call(null,G__29857));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ReligiousEventsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adds a chance to start a religious event\n                      that doubles coins/sec for a while"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.pamphletsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: ",((4000) + (((1576) * (function (){var G__29858 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29858) : state.call(null,G__29858));
})()) * (function (){var G__29859 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29859) : state.call(null,G__29859));
})()))], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Sending pamphlets has a chance to increase\n              people's belief power but it can also make\n              more atheists (more pamphlets may attract more\n                              atheists)"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.FreeDaysInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: ",((7500) + (((5839) * (function (){var G__29860 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29860) : state.call(null,G__29860));
})()) * (function (){var G__29861 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29861) : state.call(null,G__29861));
})()))], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Free days could increase people's belief power,\n              chances of that happening will decrease with\n              every day added"], 0))], 0))], 0));
});
orthodocljs.core.shop_comp = (function orthodocljs$core$shop_comp(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayPrists(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayBuild(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayExtras(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-0"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-8"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29862 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29862) : state.call(null,G__29862));
})(),"Prists"))?orthodocljs.core.prists_shop(state,owner):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29863 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29863) : state.call(null,G__29863));
})(),"Buildings"))?orthodocljs.core.buildings_shop(state,owner):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__29864 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__29864) : state.call(null,G__29864));
})(),"Extras"))?orthodocljs.core.extras_shop(state,owner):null)], 0))], 0));
});
orthodocljs.core.rightmenu_comp = (function orthodocljs$core$rightmenu_comp(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": (function (e){
return orthodocljs.core.displayManu(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": (function (e){
return orthodocljs.core.displayShop(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__29865 = state;
var map__29865__$1 = ((((!((map__29865 == null)))?((((map__29865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29865.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29865):map__29865);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29865__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return orthodocljs.core.menu_comp(state);
} else {
return orthodocljs.core.shop_comp(state,owner);
}
})()], 0))], 0));
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core29867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core29867 = (function (state,owner,meta29868){
this.state = state;
this.owner = owner;
this.meta29868 = meta29868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core29867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29869,meta29868__$1){
var self__ = this;
var _29869__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core29867(self__.state,self__.owner,meta29868__$1));
});

orthodocljs.core.t_orthodocljs$core29867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29869){
var self__ = this;
var _29869__$1 = this;
return self__.meta29868;
});

orthodocljs.core.t_orthodocljs$core29867.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core29867.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core29867.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core29867.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__29870 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__29871 = (50);
return setInterval(G__29870,G__29871);
});

orthodocljs.core.t_orthodocljs$core29867.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core29867.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.button_comp(self__.state),om.dom.div(({"className": "col-md-3"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-6 btn-poz"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.rightmenu_comp(self__.state,self__.owner)], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core29867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta29868], null);
});

orthodocljs.core.t_orthodocljs$core29867.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core29867.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core29867";

orthodocljs.core.t_orthodocljs$core29867.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core29867");
});

orthodocljs.core.__GT_t_orthodocljs$core29867 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core29867(state__$1,owner__$1,meta29868){
return (new orthodocljs.core.t_orthodocljs$core29867(state__$1,owner__$1,meta29868));
});

}

return (new orthodocljs.core.t_orthodocljs$core29867(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
