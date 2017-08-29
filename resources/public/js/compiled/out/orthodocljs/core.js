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
orthodocljs.core.changeState = (function orthodocljs$core$changeState(in$,owner,live){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(live,(0))){
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,(function (){var G__42064 = cljs.core.cst$kw$live;
var fexpr__42063 = (function (){var G__42066 = cljs.core.cst$kw$LocState;
var fexpr__42065 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__42065.cljs$core$IFn$_invoke$arity$1 ? fexpr__42065.cljs$core$IFn$_invoke$arity$1(G__42066) : fexpr__42065.call(null,G__42066));
})();
return (fexpr__42063.cljs$core$IFn$_invoke$arity$1 ? fexpr__42063.cljs$core$IFn$_invoke$arity$1(G__42064) : fexpr__42063.call(null,G__42064));
})(),cljs.core.cst$kw$trigger,(function (){var G__42070 = cljs.core.cst$kw$trigger;
var fexpr__42069 = (function (){var G__42072 = cljs.core.cst$kw$LocState;
var fexpr__42071 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__42071.cljs$core$IFn$_invoke$arity$1 ? fexpr__42071.cljs$core$IFn$_invoke$arity$1(G__42072) : fexpr__42071.call(null,G__42072));
})();
return (fexpr__42069.cljs$core$IFn$_invoke$arity$1 ? fexpr__42069.cljs$core$IFn$_invoke$arity$1(G__42070) : fexpr__42069.call(null,G__42070));
})()], null));
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,live,cljs.core.cst$kw$trigger,(function (){var G__42076 = cljs.core.cst$kw$trigger;
var fexpr__42075 = (function (){var G__42078 = cljs.core.cst$kw$LocState;
var fexpr__42077 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__42077.cljs$core$IFn$_invoke$arity$1 ? fexpr__42077.cljs$core$IFn$_invoke$arity$1(G__42078) : fexpr__42077.call(null,G__42078));
})();
return (fexpr__42075.cljs$core$IFn$_invoke$arity$1 ? fexpr__42075.cljs$core$IFn$_invoke$arity$1(G__42076) : fexpr__42075.call(null,G__42076));
})()], null));
}
});
orthodocljs.core.coinModActualizer = (function orthodocljs$core$coinModActualizer(state,owner,inc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inc], 0));

var map__42079 = state;
var map__42079__$1 = ((((!((map__42079 == null)))?((((map__42079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42079):map__42079);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$archpriest);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$patriarchates);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$bishop);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$coinMod);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$archbishop);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$religiousEvents);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42079__$1,cljs.core.cst$kw$coins);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((((((((((inc * clickers) + (inc * (archpriest * (5)))) + (inc * (bishop * (10)))) + (inc * (archbishop * (15)))) + (inc * (patriarh * (20)))) + (inc * (churches * (15)))) + (inc * (shrines * (10)))) + (inc * (cathedrals * (20)))) + (inc * (patriarchates * (30)))) * event));

return orthodocljs.core.changeState(((((((((((inc * clickers) + (inc * (archpriest * (5)))) + (inc * (bishop * (10)))) + (inc * (archbishop * (15)))) + (inc * (patriarh * (20)))) + (inc * (shrines * (10)))) + (inc * (cathedrals * (20)))) + (inc * (patriarchates * (30)))) + (inc * churches)) * event),owner,(0));
});
orthodocljs.core.atheistInc = (function orthodocljs$core$atheistInc(state,owner){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$atheists,((function (){var G__42081 = cljs.core.cst$kw$atheists;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42081) : state.call(null,G__42081));
})() + (1)));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__42082){
var map__42083 = p__42082;
var map__42083__$1 = ((((!((map__42083 == null)))?((((map__42083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42083):map__42083);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42083__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42083__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__42085 = state;
var map__42085__$1 = ((((!((map__42085 == null)))?((((map__42085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42085):map__42085);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42085__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42085__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__42087 = state;
var map__42087__$1 = ((((!((map__42087 == null)))?((((map__42087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42087.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42087):map__42087);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42087__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__42089 = state;
var map__42089__$1 = ((((!((map__42089 == null)))?((((map__42089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42089.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42089):map__42089);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42089__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(var_args){
var args__22712__auto__ = [];
var len__22705__auto___42112 = arguments.length;
var i__22706__auto___42113 = (0);
while(true){
if((i__22706__auto___42113 < len__22705__auto___42112)){
args__22712__auto__.push((arguments[i__22706__auto___42113]));

var G__42114 = (i__22706__auto___42113 + (1));
i__22706__auto___42113 = G__42114;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((2) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((2)),(0),null)):null);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22713__auto__);
});

orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic = (function (state,owner,p__42094){
var vec__42095 = p__42094;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42095,(0),null);
var map__42098 = state;
var map__42098__$1 = ((((!((map__42098 == null)))?((((map__42098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42098.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42098):map__42098);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$archpriest);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$patriarchates);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$bishop);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$coinMod);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$archbishop);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$religiousEvents);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42098__$1,cljs.core.cst$kw$coins);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"freeDays")){
var G__42101_42115 = orthodocljs.core.coinModActualizer(state,owner,(coinMod * (2)));
var fexpr__42100_42116 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((coinMod * (2)) | (0)));
(fexpr__42100_42116.cljs$core$IFn$_invoke$arity$1 ? fexpr__42100_42116.cljs$core$IFn$_invoke$arity$1(G__42101_42115) : fexpr__42100_42116.call(null,G__42101_42115));
} else {
}

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"pamphlets")) && (((1) <= (((7) / ((1) + (function (){var G__42103 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42103) : state.call(null,G__42103));
})())) | (0))))){
var G__42106_42117 = orthodocljs.core.coinModActualizer(state,owner,((coinMod * ((7) / ((1) + (function (){var G__42107 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42107) : state.call(null,G__42107));
})()))) | (0)));
var fexpr__42105_42118 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((coinMod * ((7) / ((1) + (function (){var G__42108 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42108) : state.call(null,G__42108));
})()))) | (0)));
(fexpr__42105_42118.cljs$core$IFn$_invoke$arity$1 ? fexpr__42105_42118.cljs$core$IFn$_invoke$arity$1(G__42106_42117) : fexpr__42105_42118.call(null,G__42106_42117));
} else {
}

if(cljs.core.not(opt)){
var G__42110 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))));
var G__42111 = orthodocljs.core.coinModActualizer(state,owner,(coinMod + (1)));
var fexpr__42109 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));
return (fexpr__42109.cljs$core$IFn$_invoke$arity$2 ? fexpr__42109.cljs$core$IFn$_invoke$arity$2(G__42110,G__42111) : fexpr__42109.call(null,G__42110,G__42111));
} else {
return null;
}
});

orthodocljs.core.coinModInc.cljs$lang$maxFixedArity = (2);

orthodocljs.core.coinModInc.cljs$lang$applyTo = (function (seq42091){
var G__42092 = cljs.core.first(seq42091);
var seq42091__$1 = cljs.core.next(seq42091);
var G__42093 = cljs.core.first(seq42091__$1);
var seq42091__$2 = cljs.core.next(seq42091__$1);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(G__42092,G__42093,seq42091__$2);
});

orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__42119 = state;
var map__42119__$1 = ((((!((map__42119 == null)))?((((map__42119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42119.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42119):map__42119);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42119__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42119__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__42121 = state;
var map__42121__$1 = ((((!((map__42121 == null)))?((((map__42121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42121):map__42121);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42121__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__42124 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__42125 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * event)));
var G__42126 = orthodocljs.core.changeState((genSec + (coinMod * event)),owner,(0));
var fexpr__42123 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__42123.cljs$core$IFn$_invoke$arity$3 ? fexpr__42123.cljs$core$IFn$_invoke$arity$3(G__42124,G__42125,G__42126) : fexpr__42123.call(null,G__42124,G__42125,G__42126));
} else {
return null;
}
});
orthodocljs.core.ArchpriestInc = (function orthodocljs$core$ArchpriestInc(state,owner){
var map__42127 = state;
var map__42127__$1 = ((((!((map__42127 == null)))?((((map__42127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42127):map__42127);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42127__$1,cljs.core.cst$kw$archpriest);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42127__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42127__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42127__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42127__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__42130 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__42131 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (5)) * event)));
var G__42132 = orthodocljs.core.changeState((genSec + ((coinMod * (5)) * event)),owner,(0));
var fexpr__42129 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$archpriest,((1) + archpriest));
return (fexpr__42129.cljs$core$IFn$_invoke$arity$3 ? fexpr__42129.cljs$core$IFn$_invoke$arity$3(G__42130,G__42131,G__42132) : fexpr__42129.call(null,G__42130,G__42131,G__42132));
} else {
return null;
}
});
orthodocljs.core.BishopInc = (function orthodocljs$core$BishopInc(state,owner){
var map__42133 = state;
var map__42133__$1 = ((((!((map__42133 == null)))?((((map__42133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42133):map__42133);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42133__$1,cljs.core.cst$kw$bishop);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42133__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42133__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42133__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42133__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__42136 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__42137 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__42138 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__42135 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$bishop,((1) + bishop));
return (fexpr__42135.cljs$core$IFn$_invoke$arity$3 ? fexpr__42135.cljs$core$IFn$_invoke$arity$3(G__42136,G__42137,G__42138) : fexpr__42135.call(null,G__42136,G__42137,G__42138));
} else {
return null;
}
});
orthodocljs.core.ArchbishopInc = (function orthodocljs$core$ArchbishopInc(state,owner){
var map__42139 = state;
var map__42139__$1 = ((((!((map__42139 == null)))?((((map__42139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42139.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42139):map__42139);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,cljs.core.cst$kw$archbishop);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42139__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__42142 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__42143 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__42144 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__42141 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$archbishop,((1) + archbishop));
return (fexpr__42141.cljs$core$IFn$_invoke$arity$3 ? fexpr__42141.cljs$core$IFn$_invoke$arity$3(G__42142,G__42143,G__42144) : fexpr__42141.call(null,G__42142,G__42143,G__42144));
} else {
return null;
}
});
orthodocljs.core.PatriarhsInc = (function orthodocljs$core$PatriarhsInc(state,owner){
var map__42145 = state;
var map__42145__$1 = ((((!((map__42145 == null)))?((((map__42145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42145):map__42145);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42145__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42145__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42145__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42145__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42145__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__42148 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__42149 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__42150 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__42147 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarh,((1) + patriarh));
return (fexpr__42147.cljs$core$IFn$_invoke$arity$3 ? fexpr__42147.cljs$core$IFn$_invoke$arity$3(G__42148,G__42149,G__42150) : fexpr__42147.call(null,G__42148,G__42149,G__42150));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__42151 = state;
var map__42151__$1 = ((((!((map__42151 == null)))?((((map__42151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42151):map__42151);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42151__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__42154 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__42155 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__42156 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__42153 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__42153.cljs$core$IFn$_invoke$arity$3 ? fexpr__42153.cljs$core$IFn$_invoke$arity$3(G__42154,G__42155,G__42156) : fexpr__42153.call(null,G__42154,G__42155,G__42156));
} else {
return null;
}
});
orthodocljs.core.shrineInc = (function orthodocljs$core$shrineInc(state,owner){
var map__42157 = state;
var map__42157__$1 = ((((!((map__42157 == null)))?((((map__42157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42157.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42157):map__42157);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,cljs.core.cst$kw$shrines);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,cljs.core.cst$kw$coins);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,cljs.core.cst$kw$genSec);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42157__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__42160 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__42161 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__42162 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__42159 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shrines,((1) + shrines));
return (fexpr__42159.cljs$core$IFn$_invoke$arity$3 ? fexpr__42159.cljs$core$IFn$_invoke$arity$3(G__42160,G__42161,G__42162) : fexpr__42159.call(null,G__42160,G__42161,G__42162));
} else {
return null;
}
});
orthodocljs.core.cathedralInc = (function orthodocljs$core$cathedralInc(state,owner){
var map__42163 = state;
var map__42163__$1 = ((((!((map__42163 == null)))?((((map__42163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42163):map__42163);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42163__$1,cljs.core.cst$kw$cathedrals);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42163__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42163__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42163__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42163__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__42166 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__42167 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__42168 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__42165 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cathedrals,((1) + cathedrals));
return (fexpr__42165.cljs$core$IFn$_invoke$arity$3 ? fexpr__42165.cljs$core$IFn$_invoke$arity$3(G__42166,G__42167,G__42168) : fexpr__42165.call(null,G__42166,G__42167,G__42168));
} else {
return null;
}
});
orthodocljs.core.patriarchateInc = (function orthodocljs$core$patriarchateInc(state,owner){
var map__42169 = state;
var map__42169__$1 = ((((!((map__42169 == null)))?((((map__42169.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42169.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42169):map__42169);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42169__$1,cljs.core.cst$kw$patriarchates);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42169__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42169__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42169__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42169__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__42172 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__42173 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (30)) * event)));
var G__42174 = orthodocljs.core.changeState((genSec + ((coinMod * (30)) * event)),owner,(0));
var fexpr__42171 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarchates,((1) + patriarchates));
return (fexpr__42171.cljs$core$IFn$_invoke$arity$3 ? fexpr__42171.cljs$core$IFn$_invoke$arity$3(G__42172,G__42173,G__42174) : fexpr__42171.call(null,G__42172,G__42173,G__42174));
} else {
return null;
}
});
orthodocljs.core.ReligiousEventsInc = (function orthodocljs$core$ReligiousEventsInc(state,owner){
if(((function (){var G__42175 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42175) : state.call(null,G__42175));
})() >= (1750))){
var G__42177 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__42179 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42179) : state.call(null,G__42179));
})() - (1750)));
var G__42178 = orthodocljs.core.changeState((function (){var G__42180 = cljs.core.cst$kw$genSec;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42180) : state.call(null,G__42180));
})(),owner,(100));
var fexpr__42176 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$reLock,(0));
return (fexpr__42176.cljs$core$IFn$_invoke$arity$2 ? fexpr__42176.cljs$core$IFn$_invoke$arity$2(G__42177,G__42178) : fexpr__42176.call(null,G__42177,G__42178));
} else {
return null;
}
});
orthodocljs.core.pamphletsInc = (function orthodocljs$core$pamphletsInc(state,owner){
if(((function (){var G__42181 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42181) : state.call(null,G__42181));
})() >= (3500))){
var G__42184 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$pamphlets,((1) + (function (){var G__42186 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42186) : state.call(null,G__42186));
})()));
var G__42185 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (((50) / (((function (){var G__42187 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42187) : state.call(null,G__42187));
})() + (1)) / (2))) | (0)))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pamphlets"], 0));
} else {
return orthodocljs.core.atheistInc(state,owner);
}
})();
var fexpr__42183 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__42188 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42188) : state.call(null,G__42188));
})() - (3500)));
return (fexpr__42183.cljs$core$IFn$_invoke$arity$2 ? fexpr__42183.cljs$core$IFn$_invoke$arity$2(G__42184,G__42185) : fexpr__42183.call(null,G__42184,G__42185));
} else {
return null;
}
});
orthodocljs.core.FreeDaysInc = (function orthodocljs$core$FreeDaysInc(state,owner){
if(((function (){var G__42189 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42189) : state.call(null,G__42189));
})() >= (3500))){
var G__42192 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$freeDays,((1) + (function (){var G__42194 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42194) : state.call(null,G__42194));
})()));
var G__42193 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (50))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["freeDays"], 0));
} else {
return null;
}
})();
var fexpr__42191 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__42195 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__42195) : state.call(null,G__42195));
})() - (3500)));
return (fexpr__42191.cljs$core$IFn$_invoke$arity$2 ? fexpr__42191.cljs$core$IFn$_invoke$arity$2(G__42192,G__42193) : fexpr__42191.call(null,G__42192,G__42193));
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$bishop,cljs.core.cst$kw$cathedrals,cljs.core.cst$kw$shrines,cljs.core.cst$kw$pamphlets,cljs.core.cst$kw$churches,cljs.core.cst$kw$clickers,cljs.core.cst$kw$shop,cljs.core.cst$kw$coinMod,cljs.core.cst$kw$atheists,cljs.core.cst$kw$archbishop,cljs.core.cst$kw$patriarh,cljs.core.cst$kw$reLock,cljs.core.cst$kw$coins,cljs.core.cst$kw$archpriest,cljs.core.cst$kw$religiousEvents,cljs.core.cst$kw$genSec,cljs.core.cst$kw$patriarchates,cljs.core.cst$kw$freeDays,cljs.core.cst$kw$menu],[(0),(0),(0),(0),(0),(0),"Prists",(1),(0),(0),(0),(10),(1500000),(0),(1),(0),(0),(0),"true"]));
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
orthodocljs.core.displayExtras = (function orthodocljs$core$displayExtras(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shop,"Extras");
});
orthodocljs.core.periodicly = (function orthodocljs$core$periodicly(state,owner){
var pula = cljs.core.rand_int((300));
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (pula){
return (function (coins){
var ver = (function (){var G__42197 = cljs.core.cst$kw$LocState;
var fexpr__42196 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__42196.cljs$core$IFn$_invoke$arity$1 ? fexpr__42196.cljs$core$IFn$_invoke$arity$1(G__42197) : fexpr__42196.call(null,G__42197));
})();
return (coins + ((function (){var G__42198 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42198) : ver.call(null,G__42198));
})() / (1)));
});})(pula))
);

var ver = (function (){var G__42200 = cljs.core.cst$kw$LocState;
var fexpr__42199 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__42199.cljs$core$IFn$_invoke$arity$1 ? fexpr__42199.cljs$core$IFn$_invoke$arity$1(G__42200) : fexpr__42199.call(null,G__42200));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42201 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42201) : ver.call(null,G__42201));
})(),(0)))){
var G__42203 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__42208 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42208) : ver.call(null,G__42208));
})()], 0));
var G__42204 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__42209 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42209) : ver.call(null,G__42209));
})()], 0));
var G__42205 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42211 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42211) : ver.call(null,G__42211));
})(),(0))))?(function (){var G__42215 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__42217 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42217) : ver.call(null,G__42217));
})() * (2)));
var G__42216 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__42214 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__42218 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42218) : ver.call(null,G__42218));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__42219 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42219) : ver.call(null,G__42219));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__42214.cljs$core$IFn$_invoke$arity$2 ? fexpr__42214.cljs$core$IFn$_invoke$arity$2(G__42215,G__42216) : fexpr__42214.call(null,G__42215,G__42216));
})():null);
var G__42206 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42220 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42220) : ver.call(null,G__42220));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__42221 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42221) : ver.call(null,G__42221));
})(),cljs.core.cst$kw$live,((function (){var G__42222 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42222) : ver.call(null,G__42222));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__42207 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42223 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42223) : ver.call(null,G__42223));
})(),(1)))?(function (){var G__42226 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__42228 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42228) : ver.call(null,G__42228));
})() / (2)));
var G__42227 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__42225 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__42229 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__42229) : ver.call(null,G__42229));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__42225.cljs$core$IFn$_invoke$arity$2 ? fexpr__42225.cljs$core$IFn$_invoke$arity$2(G__42226,G__42227) : fexpr__42225.call(null,G__42226,G__42227));
})():null);
var fexpr__42202 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__42202.cljs$core$IFn$_invoke$arity$5 ? fexpr__42202.cljs$core$IFn$_invoke$arity$5(G__42203,G__42204,G__42205,G__42206,G__42207) : fexpr__42202.call(null,G__42203,G__42204,G__42205,G__42206,G__42207));
} else {
return null;
}
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core42230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core42230 = (function (state,owner,meta42231){
this.state = state;
this.owner = owner;
this.meta42231 = meta42231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core42230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42232,meta42231__$1){
var self__ = this;
var _42232__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core42230(self__.state,self__.owner,meta42231__$1));
});

orthodocljs.core.t_orthodocljs$core42230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42232){
var self__ = this;
var _42232__$1 = this;
return self__.meta42231;
});

orthodocljs.core.t_orthodocljs$core42230.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core42230.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core42230.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core42230.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__42233 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__42234 = (1000);
return setInterval(G__42233,G__42234);
});

orthodocljs.core.t_orthodocljs$core42230.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core42230.prototype.om$core$IRender$render$arity$1 = (function (this$){
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__42235 = self__.state;
var map__42235__$1 = ((((!((map__42235 == null)))?((((map__42235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42235.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42235):map__42235);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42235__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__42237 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42237) : self__.state.call(null,G__42237));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Here you have your army:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__42238 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42238) : self__.state.call(null,G__42238));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__42239 = cljs.core.cst$kw$churches;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42239) : self__.state.call(null,G__42239));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__42240 = cljs.core.cst$kw$shrines;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42240) : self__.state.call(null,G__42240));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__42241 = cljs.core.cst$kw$cathedrals;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42241) : self__.state.call(null,G__42241));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__42242 = cljs.core.cst$kw$patriarchates;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42242) : self__.state.call(null,G__42242));
})()], 0))], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists(self__.state);
});})(map__42235,map__42235__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild(self__.state);
});})(map__42235,map__42235__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayExtras(self__.state);
});})(map__42235,map__42235__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42243 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42243) : self__.state.call(null,G__42243));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__42244 = self__.state;
var map__42244__$1 = ((((!((map__42244 == null)))?((((map__42244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42244):map__42244);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42244__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ArchpriestInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "imgShop"})),"Buy Archpriests: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.BishopInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "imgShop"})),"Buy Bishops: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ArchbishopInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "imgShop"})),"Buy Archbishops: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.PatriarhsInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "imgShop"})),"Buy Patriarchs: 150"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42246 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42246) : self__.state.call(null,G__42246));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.shrineInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.cathedralInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.patriarchateInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: 3500"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42247 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42247) : self__.state.call(null,G__42247));
})(),"Extras"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__42248 = cljs.core.cst$kw$reLock;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__42248) : self__.state.call(null,G__42248));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ReligiousEventsInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.pamphletsInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__42235,map__42235__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.FreeDaysInc(self__.state,self__.owner);
});})(map__42235,map__42235__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: 3500"], 0))], 0))], 0)):null)], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core42230.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta42231], null);
});

orthodocljs.core.t_orthodocljs$core42230.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core42230.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core42230";

orthodocljs.core.t_orthodocljs$core42230.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core42230");
});

orthodocljs.core.__GT_t_orthodocljs$core42230 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core42230(state__$1,owner__$1,meta42231){
return (new orthodocljs.core.t_orthodocljs$core42230(state__$1,owner__$1,meta42231));
});

}

return (new orthodocljs.core.t_orthodocljs$core42230(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
