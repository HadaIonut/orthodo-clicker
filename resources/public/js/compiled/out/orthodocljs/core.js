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
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__36588){
var map__36589 = p__36588;
var map__36589__$1 = ((((!((map__36589 == null)))?((((map__36589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36589):map__36589);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36589__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36589__$1,cljs.core.cst$kw$status_DASH_text);
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
var ver = (function (){var G__36592 = cljs.core.cst$kw$LocState;
var fexpr__36591 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__36591.cljs$core$IFn$_invoke$arity$1 ? fexpr__36591.cljs$core$IFn$_invoke$arity$1(G__36592) : fexpr__36591.call(null,G__36592));
})();
return (coins + ((function (){var G__36593 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36593) : ver.call(null,G__36593));
})() / (20)));
});})(pula))
);

var ver = (function (){var G__36595 = cljs.core.cst$kw$LocState;
var fexpr__36594 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__36594.cljs$core$IFn$_invoke$arity$1 ? fexpr__36594.cljs$core$IFn$_invoke$arity$1(G__36595) : fexpr__36594.call(null,G__36595));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36596 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36596) : ver.call(null,G__36596));
})(),(0)))){
var G__36598 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36603 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36603) : ver.call(null,G__36603));
})()], 0));
var G__36599 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36604 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36604) : ver.call(null,G__36604));
})()], 0));
var G__36600 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36606 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36606) : ver.call(null,G__36606));
})(),(0))))?(function (){var G__36610 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__36612 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36612) : ver.call(null,G__36612));
})() * (2)));
var G__36611 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__36609 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__36613 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36613) : ver.call(null,G__36613));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__36614 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36614) : ver.call(null,G__36614));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__36609.cljs$core$IFn$_invoke$arity$2 ? fexpr__36609.cljs$core$IFn$_invoke$arity$2(G__36610,G__36611) : fexpr__36609.call(null,G__36610,G__36611));
})():null);
var G__36601 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36615 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36615) : ver.call(null,G__36615));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__36616 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36616) : ver.call(null,G__36616));
})(),cljs.core.cst$kw$live,((function (){var G__36617 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36617) : ver.call(null,G__36617));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__36602 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36618 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36618) : ver.call(null,G__36618));
})(),(1)))?(function (){var G__36621 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__36623 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36623) : ver.call(null,G__36623));
})() / (2)));
var G__36622 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__36620 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__36624 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__36624) : ver.call(null,G__36624));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__36620.cljs$core$IFn$_invoke$arity$2 ? fexpr__36620.cljs$core$IFn$_invoke$arity$2(G__36621,G__36622) : fexpr__36620.call(null,G__36621,G__36622));
})():null);
var fexpr__36597 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__36597.cljs$core$IFn$_invoke$arity$5 ? fexpr__36597.cljs$core$IFn$_invoke$arity$5(G__36598,G__36599,G__36600,G__36601,G__36602) : fexpr__36597.call(null,G__36598,G__36599,G__36600,G__36601,G__36602));
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
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n           to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__36625 = cljs.core.cst$kw$coinMod;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36625) : state.call(null,G__36625));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayPrists2(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayBuild2(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36626 = cljs.core.cst$kw$menu2;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36626) : state.call(null,G__36626));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__36627 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36627) : state.call(null,G__36627));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "img"})),"Archpriests ",(function (){var G__36628 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36628) : state.call(null,G__36628));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "img"})),"Bishops ",(function (){var G__36629 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36629) : state.call(null,G__36629));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "img"})),"Archbishops ",(function (){var G__36630 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36630) : state.call(null,G__36630));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "img"})),"Patriarchs ",(function (){var G__36631 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36631) : state.call(null,G__36631));
})()], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36632 = cljs.core.cst$kw$menu2;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36632) : state.call(null,G__36632));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__36633 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36633) : state.call(null,G__36633));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__36634 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36634) : state.call(null,G__36634));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__36635 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36635) : state.call(null,G__36635));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__36636 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36636) : state.call(null,G__36636));
})()], 0))], 0)):null)], 0))], 0));
});
orthodocljs.core.prists_shop = (function orthodocljs$core$prists_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickUPG(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__36637 = state;
var map__36637__$1 = ((((!((map__36637 == null)))?((((map__36637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36637):map__36637);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36637__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36639 = cljs.core.cst$kw$coinMod;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36639) : state.call(null,G__36639));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickerInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: ",((150) + (((50) * (function (){var G__36640 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36640) : state.call(null,G__36640));
})()) * (function (){var G__36641 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36641) : state.call(null,G__36641));
})()))], 0)),om.dom.div(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"col-md-1"], null)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36642 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36642) : state.call(null,G__36642));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchpriestInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "imgShop"})),"Buy Archpriests: ",((450) + (((50) * (function (){var G__36643 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36643) : state.call(null,G__36643));
})()) * (function (){var G__36644 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36644) : state.call(null,G__36644));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36645 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36645) : state.call(null,G__36645));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.BishopInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "imgShop"})),"Buy Bishops: ",((1070) + (((78) * (function (){var G__36646 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36646) : state.call(null,G__36646));
})()) * (function (){var G__36647 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36647) : state.call(null,G__36647));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36648 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36648) : state.call(null,G__36648));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchbishopInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "imgShop"})),"Buy Archbishops: ",((2570) + (((162) * (function (){var G__36649 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36649) : state.call(null,G__36649));
})()) * (function (){var G__36650 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36650) : state.call(null,G__36650));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36651 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36651) : state.call(null,G__36651));
})()], 0))], 0))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.PatriarhsInc(state,owner);
}), "className": "buy col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText col-md-10"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "imgShop"})),"Buy Patriarchs: ",((5394) + (((462) * (function (){var G__36652 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36652) : state.call(null,G__36652));
})()) * (function (){var G__36653 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36653) : state.call(null,G__36653));
})()))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "ShopText3 col-md-1"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__36654 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36654) : state.call(null,G__36654));
})()], 0))], 0))], 0))], 0))], 0));
});
orthodocljs.core.buildings_shop = (function orthodocljs$core$buildings_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.churchesInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: ",((3500) + (((762) * (function (){var G__36655 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36655) : state.call(null,G__36655));
})()) * (function (){var G__36656 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36656) : state.call(null,G__36656));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.shrineInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: ",((6700) + (((862) * (function (){var G__36657 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36657) : state.call(null,G__36657));
})()) * (function (){var G__36658 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36658) : state.call(null,G__36658));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.cathedralInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: ",((8800) + (((1362) * (function (){var G__36659 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36659) : state.call(null,G__36659));
})()) * (function (){var G__36660 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36660) : state.call(null,G__36660));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.patriarchateInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: ",((13600) + (((1743) * (function (){var G__36661 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36661) : state.call(null,G__36661));
})()) * (function (){var G__36662 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36662) : state.call(null,G__36662));
})()))], 0))], 0))], 0));
});
orthodocljs.core.extras_shop = (function orthodocljs$core$extras_shop(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36663 = cljs.core.cst$kw$reLock;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36663) : state.call(null,G__36663));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ReligiousEventsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adds a chance to start a religious event\n                      that doubles coins/sec for a while"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.pamphletsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: ",((4000) + (((1576) * (function (){var G__36664 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36664) : state.call(null,G__36664));
})()) * (function (){var G__36665 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36665) : state.call(null,G__36665));
})()))], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Sending pamphlets has a chance to increase\n              people's belief power but it can also make\n              more atheists (more pamphlets may attract more\n                              atheists)"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.FreeDaysInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: ",((7500) + (((5839) * (function (){var G__36666 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36666) : state.call(null,G__36666));
})()) * (function (){var G__36667 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36667) : state.call(null,G__36667));
})()))], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Free days could increase people's belief power,\n              chances of that happening will decrease with\n              every day added"], 0))], 0))], 0));
});
orthodocljs.core.shop_comp = (function orthodocljs$core$shop_comp(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayPrists(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayBuild(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayExtras(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-0"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-8"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36668 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36668) : state.call(null,G__36668));
})(),"Prists"))?orthodocljs.core.prists_shop(state,owner):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36669 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36669) : state.call(null,G__36669));
})(),"Buildings"))?orthodocljs.core.buildings_shop(state,owner):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__36670 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__36670) : state.call(null,G__36670));
})(),"Extras"))?orthodocljs.core.extras_shop(state,owner):null)], 0))], 0));
});
orthodocljs.core.rightmenu_comp = (function orthodocljs$core$rightmenu_comp(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": (function (e){
return orthodocljs.core.displayManu(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": (function (e){
return orthodocljs.core.displayShop(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__36671 = state;
var map__36671__$1 = ((((!((map__36671 == null)))?((((map__36671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36671.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36671):map__36671);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36671__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return orthodocljs.core.menu_comp(state);
} else {
return orthodocljs.core.shop_comp(state,owner);
}
})()], 0))], 0));
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core36673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core36673 = (function (state,owner,meta36674){
this.state = state;
this.owner = owner;
this.meta36674 = meta36674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core36673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36675,meta36674__$1){
var self__ = this;
var _36675__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core36673(self__.state,self__.owner,meta36674__$1));
});

orthodocljs.core.t_orthodocljs$core36673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36675){
var self__ = this;
var _36675__$1 = this;
return self__.meta36674;
});

orthodocljs.core.t_orthodocljs$core36673.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core36673.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core36673.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core36673.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__36676 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__36677 = (50);
return setInterval(G__36676,G__36677);
});

orthodocljs.core.t_orthodocljs$core36673.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core36673.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.button_comp(self__.state),om.dom.div(({"className": "col-md-3"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-6 btn-poz"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.rightmenu_comp(self__.state,self__.owner)], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core36673.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta36674], null);
});

orthodocljs.core.t_orthodocljs$core36673.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core36673.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core36673";

orthodocljs.core.t_orthodocljs$core36673.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core36673");
});

orthodocljs.core.__GT_t_orthodocljs$core36673 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core36673(state__$1,owner__$1,meta36674){
return (new orthodocljs.core.t_orthodocljs$core36673(state__$1,owner__$1,meta36674));
});

}

return (new orthodocljs.core.t_orthodocljs$core36673(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
