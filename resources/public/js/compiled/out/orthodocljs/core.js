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
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__43680){
var map__43681 = p__43680;
var map__43681__$1 = ((((!((map__43681 == null)))?((((map__43681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43681):map__43681);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43681__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43681__$1,cljs.core.cst$kw$status_DASH_text);
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
var ver = (function (){var G__43684 = cljs.core.cst$kw$LocState;
var fexpr__43683 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__43683.cljs$core$IFn$_invoke$arity$1 ? fexpr__43683.cljs$core$IFn$_invoke$arity$1(G__43684) : fexpr__43683.call(null,G__43684));
})();
return (coins + ((function (){var G__43685 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43685) : ver.call(null,G__43685));
})() / (20)));
});})(pula))
);

var ver = (function (){var G__43687 = cljs.core.cst$kw$LocState;
var fexpr__43686 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__43686.cljs$core$IFn$_invoke$arity$1 ? fexpr__43686.cljs$core$IFn$_invoke$arity$1(G__43687) : fexpr__43686.call(null,G__43687));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43688 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43688) : ver.call(null,G__43688));
})(),(0)))){
var G__43690 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43695 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43695) : ver.call(null,G__43695));
})()], 0));
var G__43691 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43696 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43696) : ver.call(null,G__43696));
})()], 0));
var G__43692 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43698 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43698) : ver.call(null,G__43698));
})(),(0))))?(function (){var G__43702 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__43704 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43704) : ver.call(null,G__43704));
})() * (2)));
var G__43703 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__43701 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__43705 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43705) : ver.call(null,G__43705));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__43706 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43706) : ver.call(null,G__43706));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__43701.cljs$core$IFn$_invoke$arity$2 ? fexpr__43701.cljs$core$IFn$_invoke$arity$2(G__43702,G__43703) : fexpr__43701.call(null,G__43702,G__43703));
})():null);
var G__43693 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43707 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43707) : ver.call(null,G__43707));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__43708 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43708) : ver.call(null,G__43708));
})(),cljs.core.cst$kw$live,((function (){var G__43709 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43709) : ver.call(null,G__43709));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__43694 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43710 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43710) : ver.call(null,G__43710));
})(),(1)))?(function (){var G__43713 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__43715 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43715) : ver.call(null,G__43715));
})() / (2)));
var G__43714 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__43712 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__43716 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43716) : ver.call(null,G__43716));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__43712.cljs$core$IFn$_invoke$arity$2 ? fexpr__43712.cljs$core$IFn$_invoke$arity$2(G__43713,G__43714) : fexpr__43712.call(null,G__43713,G__43714));
})():null);
var fexpr__43689 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__43689.cljs$core$IFn$_invoke$arity$5 ? fexpr__43689.cljs$core$IFn$_invoke$arity$5(G__43690,G__43691,G__43692,G__43693,G__43694) : fexpr__43689.call(null,G__43690,G__43691,G__43692,G__43693,G__43694));
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
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n           to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__43717 = cljs.core.cst$kw$coinMod;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43717) : state.call(null,G__43717));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayPrists2(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayBuild2(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43718 = cljs.core.cst$kw$menu2;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43718) : state.call(null,G__43718));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__43719 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43719) : state.call(null,G__43719));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "img"})),"Archpriests ",(function (){var G__43720 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43720) : state.call(null,G__43720));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "img"})),"Bishops ",(function (){var G__43721 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43721) : state.call(null,G__43721));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "img"})),"Archbishops ",(function (){var G__43722 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43722) : state.call(null,G__43722));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "img"})),"Patriarchs ",(function (){var G__43723 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43723) : state.call(null,G__43723));
})()], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43724 = cljs.core.cst$kw$menu2;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43724) : state.call(null,G__43724));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__43725 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43725) : state.call(null,G__43725));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__43726 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43726) : state.call(null,G__43726));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__43727 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43727) : state.call(null,G__43727));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__43728 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43728) : state.call(null,G__43728));
})()], 0))], 0)):null)], 0))], 0));
});
orthodocljs.core.shop_comp = (function orthodocljs$core$shop_comp(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayPrists(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayBuild(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                           btnColor ShopText2", "onClick": (function (e){
return orthodocljs.core.displayExtras(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43729 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43729) : state.call(null,G__43729));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickUPG(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__43730 = state;
var map__43730__$1 = ((((!((map__43730 == null)))?((((map__43730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43730.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43730):map__43730);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43730__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.clickerInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: ",((150) + (((50) * (function (){var G__43732 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43732) : state.call(null,G__43732));
})()) * (function (){var G__43733 = cljs.core.cst$kw$clickers;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43733) : state.call(null,G__43733));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchpriestInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "imgShop"})),"Buy Archpriests: ",((450) + (((50) * (function (){var G__43734 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43734) : state.call(null,G__43734));
})()) * (function (){var G__43735 = cljs.core.cst$kw$archpriest;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43735) : state.call(null,G__43735));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.BishopInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "imgShop"})),"Buy Bishops: ",((1070) + (((78) * (function (){var G__43736 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43736) : state.call(null,G__43736));
})()) * (function (){var G__43737 = cljs.core.cst$kw$bishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43737) : state.call(null,G__43737));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ArchbishopInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "imgShop"})),"Buy Archbishops: ",((2570) + (((162) * (function (){var G__43738 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43738) : state.call(null,G__43738));
})()) * (function (){var G__43739 = cljs.core.cst$kw$archbishop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43739) : state.call(null,G__43739));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.PatriarhsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "imgShop"})),"Buy Patriarchs: ",((5394) + (((462) * (function (){var G__43740 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43740) : state.call(null,G__43740));
})()) * (function (){var G__43741 = cljs.core.cst$kw$patriarh;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43741) : state.call(null,G__43741));
})()))], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43742 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43742) : state.call(null,G__43742));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.churchesInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: ",((3500) + (((762) * (function (){var G__43743 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43743) : state.call(null,G__43743));
})()) * (function (){var G__43744 = cljs.core.cst$kw$churches;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43744) : state.call(null,G__43744));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.shrineInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: ",((6700) + (((862) * (function (){var G__43745 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43745) : state.call(null,G__43745));
})()) * (function (){var G__43746 = cljs.core.cst$kw$shrines;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43746) : state.call(null,G__43746));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.cathedralInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: ",((8800) + (((1362) * (function (){var G__43747 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43747) : state.call(null,G__43747));
})()) * (function (){var G__43748 = cljs.core.cst$kw$cathedrals;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43748) : state.call(null,G__43748));
})()))], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.patriarchateInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: ",((13600) + (((1743) * (function (){var G__43749 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43749) : state.call(null,G__43749));
})()) * (function (){var G__43750 = cljs.core.cst$kw$patriarchates;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43750) : state.call(null,G__43750));
})()))], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43751 = cljs.core.cst$kw$shop;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43751) : state.call(null,G__43751));
})(),"Extras"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43752 = cljs.core.cst$kw$reLock;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43752) : state.call(null,G__43752));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.ReligiousEventsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Adds a chance to start a religious event\n                      that doubles coins/sec for a while"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.pamphletsInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: 3500"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Sending pamphlets has a chance to increase\n              people's belief power but it can also make\n              more atheists (more pamphlets may attract more\n                              atheists)"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "toltip"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": (function (e){
return orthodocljs.active.FreeDaysInc(state,owner);
}), "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: 3500"], 0)),om.dom.span.cljs$core$IFn$_invoke$arity$variadic(({"className": "tooltiptext"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Free days could increase people's belief power,\n              chances of that happening will decrease with\n              every day added"], 0))], 0))], 0)):null)], 0))], 0));
});
orthodocljs.core.rightmenu_comp = (function orthodocljs$core$rightmenu_comp(state,owner){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": (function (e){
return orthodocljs.core.displayManu(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Menu"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": (function (e){
return orthodocljs.core.displayShop(state);
})}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var map__43753 = state;
var map__43753__$1 = ((((!((map__43753 == null)))?((((map__43753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43753):map__43753);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43753__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return orthodocljs.core.menu_comp(state);
} else {
return orthodocljs.core.shop_comp(state,owner);
}
})()], 0))], 0));
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core43755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core43755 = (function (state,owner,meta43756){
this.state = state;
this.owner = owner;
this.meta43756 = meta43756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core43755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43757,meta43756__$1){
var self__ = this;
var _43757__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core43755(self__.state,self__.owner,meta43756__$1));
});

orthodocljs.core.t_orthodocljs$core43755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43757){
var self__ = this;
var _43757__$1 = this;
return self__.meta43756;
});

orthodocljs.core.t_orthodocljs$core43755.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core43755.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core43755.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core43755.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__43758 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__43759 = (50);
return setInterval(G__43758,G__43759);
});

orthodocljs.core.t_orthodocljs$core43755.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core43755.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.button_comp(self__.state),om.dom.div(({"className": "col-md-4"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-5 btn-poz"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([orthodocljs.core.rightmenu_comp(self__.state,self__.owner)], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core43755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta43756], null);
});

orthodocljs.core.t_orthodocljs$core43755.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core43755.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core43755";

orthodocljs.core.t_orthodocljs$core43755.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core43755");
});

orthodocljs.core.__GT_t_orthodocljs$core43755 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core43755(state__$1,owner__$1,meta43756){
return (new orthodocljs.core.t_orthodocljs$core43755(state__$1,owner__$1,meta43756));
});

}

return (new orthodocljs.core.t_orthodocljs$core43755(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
