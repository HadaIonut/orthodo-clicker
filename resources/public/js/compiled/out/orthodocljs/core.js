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
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,(function (){var G__45652 = cljs.core.cst$kw$live;
var fexpr__45651 = (function (){var G__45654 = cljs.core.cst$kw$LocState;
var fexpr__45653 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45653.cljs$core$IFn$_invoke$arity$1 ? fexpr__45653.cljs$core$IFn$_invoke$arity$1(G__45654) : fexpr__45653.call(null,G__45654));
})();
return (fexpr__45651.cljs$core$IFn$_invoke$arity$1 ? fexpr__45651.cljs$core$IFn$_invoke$arity$1(G__45652) : fexpr__45651.call(null,G__45652));
})(),cljs.core.cst$kw$trigger,(function (){var G__45658 = cljs.core.cst$kw$trigger;
var fexpr__45657 = (function (){var G__45660 = cljs.core.cst$kw$LocState;
var fexpr__45659 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45659.cljs$core$IFn$_invoke$arity$1 ? fexpr__45659.cljs$core$IFn$_invoke$arity$1(G__45660) : fexpr__45659.call(null,G__45660));
})();
return (fexpr__45657.cljs$core$IFn$_invoke$arity$1 ? fexpr__45657.cljs$core$IFn$_invoke$arity$1(G__45658) : fexpr__45657.call(null,G__45658));
})()], null));
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,live,cljs.core.cst$kw$trigger,(function (){var G__45664 = cljs.core.cst$kw$trigger;
var fexpr__45663 = (function (){var G__45666 = cljs.core.cst$kw$LocState;
var fexpr__45665 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45665.cljs$core$IFn$_invoke$arity$1 ? fexpr__45665.cljs$core$IFn$_invoke$arity$1(G__45666) : fexpr__45665.call(null,G__45666));
})();
return (fexpr__45663.cljs$core$IFn$_invoke$arity$1 ? fexpr__45663.cljs$core$IFn$_invoke$arity$1(G__45664) : fexpr__45663.call(null,G__45664));
})()], null));
}
});
orthodocljs.core.coinModActualizer = (function orthodocljs$core$coinModActualizer(state,owner,inc,ath){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inc], 0));

var map__45667 = state;
var map__45667__$1 = ((((!((map__45667 == null)))?((((map__45667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45667):map__45667);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$archpriest);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$patriarchates);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$bishop);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$coinMod);
var atheists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$atheists);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$archbishop);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$religiousEvents);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45667__$1,cljs.core.cst$kw$coins);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(((((((((((inc * clickers) + (inc * (archpriest * (5)))) + (inc * (bishop * (10)))) + (inc * (archbishop * (15)))) + (inc * (patriarh * (20)))) + (inc * (churches * (15)))) + (inc * (shrines * (10)))) + (inc * (cathedrals * (20)))) + (inc * (patriarchates * (30)))) - ath) * event));

return orthodocljs.core.changeState((((((((((((inc * clickers) + (inc * (archpriest * (5)))) + (inc * (bishop * (10)))) + (inc * (archbishop * (15)))) + (inc * (patriarh * (20)))) + (inc * (shrines * (10)))) + (inc * (cathedrals * (20)))) + (inc * (patriarchates * (30)))) + (inc * churches)) - ath) * event),owner,(0));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__45669){
var map__45670 = p__45669;
var map__45670__$1 = ((((!((map__45670 == null)))?((((map__45670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45670.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45670):map__45670);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45670__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__45672 = state;
var map__45672__$1 = ((((!((map__45672 == null)))?((((map__45672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45672):map__45672);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45672__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45672__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__45674 = state;
var map__45674__$1 = ((((!((map__45674 == null)))?((((map__45674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45674):map__45674);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45674__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__45676 = state;
var map__45676__$1 = ((((!((map__45676 == null)))?((((map__45676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45676.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45676):map__45676);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45676__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(var_args){
var args__22712__auto__ = [];
var len__22705__auto___45703 = arguments.length;
var i__22706__auto___45704 = (0);
while(true){
if((i__22706__auto___45704 < len__22705__auto___45703)){
args__22712__auto__.push((arguments[i__22706__auto___45704]));

var G__45705 = (i__22706__auto___45704 + (1));
i__22706__auto___45704 = G__45705;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((2) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((2)),(0),null)):null);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22713__auto__);
});

orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic = (function (state,owner,p__45681){
var vec__45682 = p__45681;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45682,(0),null);
var map__45685 = state;
var map__45685__$1 = ((((!((map__45685 == null)))?((((map__45685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45685.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45685):map__45685);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$archpriest);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$patriarchates);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$bishop);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$coinMod);
var atheists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$atheists);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$archbishop);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$religiousEvents);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45685__$1,cljs.core.cst$kw$coins);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"atheists")){
var G__45688_45706 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$atheists,((function (){var G__45690 = cljs.core.cst$kw$atheists;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45690) : state.call(null,G__45690));
})() + (1)));
var G__45689_45707 = orthodocljs.core.coinModActualizer(state,owner,coinMod,(1));
var fexpr__45687_45708 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,(coinMod - (1)));
(fexpr__45687_45708.cljs$core$IFn$_invoke$arity$2 ? fexpr__45687_45708.cljs$core$IFn$_invoke$arity$2(G__45688_45706,G__45689_45707) : fexpr__45687_45708.call(null,G__45688_45706,G__45689_45707));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"freeDays")){
var G__45692_45709 = orthodocljs.core.coinModActualizer(state,owner,(((coinMod * (2)) - atheists) | (0)),(0));
var fexpr__45691_45710 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,(((coinMod * (2)) - atheists) | (0)));
(fexpr__45691_45710.cljs$core$IFn$_invoke$arity$1 ? fexpr__45691_45710.cljs$core$IFn$_invoke$arity$1(G__45692_45709) : fexpr__45691_45710.call(null,G__45692_45709));
} else {
}

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"pamphlets")) && (((1) <= (((7) / ((1) + (function (){var G__45694 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45694) : state.call(null,G__45694));
})())) | (0))))){
var G__45697_45711 = orthodocljs.core.coinModActualizer(state,owner,(((coinMod * ((7) / ((1) + (function (){var G__45698 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45698) : state.call(null,G__45698));
})()))) - atheists) | (0)),(0));
var fexpr__45696_45712 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,(((coinMod * ((7) / ((1) + (function (){var G__45699 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45699) : state.call(null,G__45699));
})()))) - atheists) | (0)));
(fexpr__45696_45712.cljs$core$IFn$_invoke$arity$1 ? fexpr__45696_45712.cljs$core$IFn$_invoke$arity$1(G__45697_45711) : fexpr__45696_45712.call(null,G__45697_45711));
} else {
}

if(cljs.core.not(opt)){
var G__45701 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))));
var G__45702 = orthodocljs.core.coinModActualizer(state,owner,(((1) + coinMod) - atheists),(0));
var fexpr__45700 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,(((1) + coinMod) - atheists));
return (fexpr__45700.cljs$core$IFn$_invoke$arity$2 ? fexpr__45700.cljs$core$IFn$_invoke$arity$2(G__45701,G__45702) : fexpr__45700.call(null,G__45701,G__45702));
} else {
return null;
}
});

orthodocljs.core.coinModInc.cljs$lang$maxFixedArity = (2);

orthodocljs.core.coinModInc.cljs$lang$applyTo = (function (seq45678){
var G__45679 = cljs.core.first(seq45678);
var seq45678__$1 = cljs.core.next(seq45678);
var G__45680 = cljs.core.first(seq45678__$1);
var seq45678__$2 = cljs.core.next(seq45678__$1);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(G__45679,G__45680,seq45678__$2);
});

orthodocljs.core.atheistInc = (function orthodocljs$core$atheistInc(state,owner){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$atheists,((function (){var G__45713 = cljs.core.cst$kw$atheists;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45713) : state.call(null,G__45713));
})() + (1)));

return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["atheists"], 0));
});
orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__45714 = state;
var map__45714__$1 = ((((!((map__45714 == null)))?((((map__45714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45714):map__45714);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45714__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45714__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__45716 = state;
var map__45716__$1 = ((((!((map__45716 == null)))?((((map__45716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45716.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45716):map__45716);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45716__$1,cljs.core.cst$kw$genSec);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__45721 = cljs.core.cst$kw$genSec;
var fexpr__45720 = (function (){var G__45723 = cljs.core.cst$kw$LocState;
var fexpr__45722 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45722.cljs$core$IFn$_invoke$arity$1 ? fexpr__45722.cljs$core$IFn$_invoke$arity$1(G__45723) : fexpr__45722.call(null,G__45723));
})();
return (fexpr__45720.cljs$core$IFn$_invoke$arity$1 ? fexpr__45720.cljs$core$IFn$_invoke$arity$1(G__45721) : fexpr__45720.call(null,G__45721));
})()], 0));

if((coins >= (150))){
var G__45725 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45726 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * event)));
var G__45727 = orthodocljs.core.changeState((genSec + (coinMod * event)),owner,(0));
var fexpr__45724 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__45724.cljs$core$IFn$_invoke$arity$3 ? fexpr__45724.cljs$core$IFn$_invoke$arity$3(G__45725,G__45726,G__45727) : fexpr__45724.call(null,G__45725,G__45726,G__45727));
} else {
return null;
}
});
orthodocljs.core.ArchpriestInc = (function orthodocljs$core$ArchpriestInc(state,owner){
var map__45728 = state;
var map__45728__$1 = ((((!((map__45728 == null)))?((((map__45728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45728):map__45728);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$archpriest);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45731 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45732 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (5)) * event)));
var G__45733 = orthodocljs.core.changeState((genSec + ((coinMod * (5)) * event)),owner,(0));
var fexpr__45730 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$archpriest,((1) + archpriest));
return (fexpr__45730.cljs$core$IFn$_invoke$arity$3 ? fexpr__45730.cljs$core$IFn$_invoke$arity$3(G__45731,G__45732,G__45733) : fexpr__45730.call(null,G__45731,G__45732,G__45733));
} else {
return null;
}
});
orthodocljs.core.BishopInc = (function orthodocljs$core$BishopInc(state,owner){
var map__45734 = state;
var map__45734__$1 = ((((!((map__45734 == null)))?((((map__45734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45734):map__45734);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45734__$1,cljs.core.cst$kw$bishop);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45734__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45734__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45734__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45734__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45737 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45738 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__45739 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__45736 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$bishop,((1) + bishop));
return (fexpr__45736.cljs$core$IFn$_invoke$arity$3 ? fexpr__45736.cljs$core$IFn$_invoke$arity$3(G__45737,G__45738,G__45739) : fexpr__45736.call(null,G__45737,G__45738,G__45739));
} else {
return null;
}
});
orthodocljs.core.ArchbishopInc = (function orthodocljs$core$ArchbishopInc(state,owner){
var map__45740 = state;
var map__45740__$1 = ((((!((map__45740 == null)))?((((map__45740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45740.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45740):map__45740);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45740__$1,cljs.core.cst$kw$archbishop);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45740__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45740__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45740__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45740__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45743 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45744 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__45745 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__45742 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$archbishop,((1) + archbishop));
return (fexpr__45742.cljs$core$IFn$_invoke$arity$3 ? fexpr__45742.cljs$core$IFn$_invoke$arity$3(G__45743,G__45744,G__45745) : fexpr__45742.call(null,G__45743,G__45744,G__45745));
} else {
return null;
}
});
orthodocljs.core.PatriarhsInc = (function orthodocljs$core$PatriarhsInc(state,owner){
var map__45746 = state;
var map__45746__$1 = ((((!((map__45746 == null)))?((((map__45746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45746.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45746):map__45746);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45746__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45749 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45750 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__45751 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__45748 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarh,((1) + patriarh));
return (fexpr__45748.cljs$core$IFn$_invoke$arity$3 ? fexpr__45748.cljs$core$IFn$_invoke$arity$3(G__45749,G__45750,G__45751) : fexpr__45748.call(null,G__45749,G__45750,G__45751));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__45752 = state;
var map__45752__$1 = ((((!((map__45752 == null)))?((((map__45752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45752):map__45752);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45752__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45752__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45752__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45752__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45752__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45752__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__45755 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45756 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__45757 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__45754 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__45754.cljs$core$IFn$_invoke$arity$3 ? fexpr__45754.cljs$core$IFn$_invoke$arity$3(G__45755,G__45756,G__45757) : fexpr__45754.call(null,G__45755,G__45756,G__45757));
} else {
return null;
}
});
orthodocljs.core.shrineInc = (function orthodocljs$core$shrineInc(state,owner){
var map__45758 = state;
var map__45758__$1 = ((((!((map__45758 == null)))?((((map__45758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45758):map__45758);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,cljs.core.cst$kw$shrines);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,cljs.core.cst$kw$coins);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,cljs.core.cst$kw$genSec);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__45761 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45762 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__45763 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__45760 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shrines,((1) + shrines));
return (fexpr__45760.cljs$core$IFn$_invoke$arity$3 ? fexpr__45760.cljs$core$IFn$_invoke$arity$3(G__45761,G__45762,G__45763) : fexpr__45760.call(null,G__45761,G__45762,G__45763));
} else {
return null;
}
});
orthodocljs.core.cathedralInc = (function orthodocljs$core$cathedralInc(state,owner){
var map__45764 = state;
var map__45764__$1 = ((((!((map__45764 == null)))?((((map__45764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45764):map__45764);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45764__$1,cljs.core.cst$kw$cathedrals);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45764__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45764__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45764__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45764__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__45767 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45768 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__45769 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__45766 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cathedrals,((1) + cathedrals));
return (fexpr__45766.cljs$core$IFn$_invoke$arity$3 ? fexpr__45766.cljs$core$IFn$_invoke$arity$3(G__45767,G__45768,G__45769) : fexpr__45766.call(null,G__45767,G__45768,G__45769));
} else {
return null;
}
});
orthodocljs.core.patriarchateInc = (function orthodocljs$core$patriarchateInc(state,owner){
var map__45770 = state;
var map__45770__$1 = ((((!((map__45770 == null)))?((((map__45770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45770.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45770):map__45770);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45770__$1,cljs.core.cst$kw$patriarchates);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45770__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45770__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45770__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45770__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__45773 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45774 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (30)) * event)));
var G__45775 = orthodocljs.core.changeState((genSec + ((coinMod * (30)) * event)),owner,(0));
var fexpr__45772 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarchates,((1) + patriarchates));
return (fexpr__45772.cljs$core$IFn$_invoke$arity$3 ? fexpr__45772.cljs$core$IFn$_invoke$arity$3(G__45773,G__45774,G__45775) : fexpr__45772.call(null,G__45773,G__45774,G__45775));
} else {
return null;
}
});
orthodocljs.core.ReligiousEventsInc = (function orthodocljs$core$ReligiousEventsInc(state,owner){
if(((function (){var G__45776 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45776) : state.call(null,G__45776));
})() >= (1750))){
var G__45778 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__45780 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45780) : state.call(null,G__45780));
})() - (1750)));
var G__45779 = orthodocljs.core.changeState((function (){var G__45781 = cljs.core.cst$kw$genSec;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45781) : state.call(null,G__45781));
})(),owner,(100));
var fexpr__45777 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$reLock,(0));
return (fexpr__45777.cljs$core$IFn$_invoke$arity$2 ? fexpr__45777.cljs$core$IFn$_invoke$arity$2(G__45778,G__45779) : fexpr__45777.call(null,G__45778,G__45779));
} else {
return null;
}
});
orthodocljs.core.pamphletsInc = (function orthodocljs$core$pamphletsInc(state,owner){
if(((function (){var G__45782 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45782) : state.call(null,G__45782));
})() >= (3500))){
var G__45785 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$pamphlets,((1) + (function (){var G__45787 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45787) : state.call(null,G__45787));
})()));
var G__45786 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (((50) / (((function (){var G__45788 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45788) : state.call(null,G__45788));
})() + (1)) / (2))) | (0)))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pamphlets"], 0));
} else {
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["atheists"], 0));
}
})();
var fexpr__45784 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__45789 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45789) : state.call(null,G__45789));
})() - (3500)));
return (fexpr__45784.cljs$core$IFn$_invoke$arity$2 ? fexpr__45784.cljs$core$IFn$_invoke$arity$2(G__45785,G__45786) : fexpr__45784.call(null,G__45785,G__45786));
} else {
return null;
}
});
orthodocljs.core.FreeDaysInc = (function orthodocljs$core$FreeDaysInc(state,owner){
if(((function (){var G__45790 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45790) : state.call(null,G__45790));
})() >= (3500))){
var G__45793 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$freeDays,((1) + (function (){var G__45795 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45795) : state.call(null,G__45795));
})()));
var G__45794 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (50))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["freeDays"], 0));
} else {
return null;
}
})();
var fexpr__45792 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__45796 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45796) : state.call(null,G__45796));
})() - (3500)));
return (fexpr__45792.cljs$core$IFn$_invoke$arity$2 ? fexpr__45792.cljs$core$IFn$_invoke$arity$2(G__45793,G__45794) : fexpr__45792.call(null,G__45793,G__45794));
} else {
return null;
}
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
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,orthodocljs.core.add(state));
});
orthodocljs.core.displayManu = (function orthodocljs$core$displayManu(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu,orthodocljs.core.stateMenu(state));
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
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$menu,orthodocljs.core.stateShop(state));
});
orthodocljs.core.displayExtras = (function orthodocljs$core$displayExtras(state){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shop,"Extras");
});
orthodocljs.core.periodicly = (function orthodocljs$core$periodicly(state,owner){
var pula = cljs.core.rand_int((300));
om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (pula){
return (function (coins){
var ver = (function (){var G__45798 = cljs.core.cst$kw$LocState;
var fexpr__45797 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45797.cljs$core$IFn$_invoke$arity$1 ? fexpr__45797.cljs$core$IFn$_invoke$arity$1(G__45798) : fexpr__45797.call(null,G__45798));
})();
return (coins + ((function (){var G__45799 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45799) : ver.call(null,G__45799));
})() / (20)));
});})(pula))
);

var ver = (function (){var G__45801 = cljs.core.cst$kw$LocState;
var fexpr__45800 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45800.cljs$core$IFn$_invoke$arity$1 ? fexpr__45800.cljs$core$IFn$_invoke$arity$1(G__45801) : fexpr__45800.call(null,G__45801));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45802 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45802) : ver.call(null,G__45802));
})(),(0)))){
var G__45804 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__45809 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45809) : ver.call(null,G__45809));
})()], 0));
var G__45805 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__45810 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45810) : ver.call(null,G__45810));
})()], 0));
var G__45806 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45812 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45812) : ver.call(null,G__45812));
})(),(0))))?(function (){var G__45816 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__45818 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45818) : ver.call(null,G__45818));
})() * (2)));
var G__45817 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__45815 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__45819 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45819) : ver.call(null,G__45819));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__45820 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45820) : ver.call(null,G__45820));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__45815.cljs$core$IFn$_invoke$arity$2 ? fexpr__45815.cljs$core$IFn$_invoke$arity$2(G__45816,G__45817) : fexpr__45815.call(null,G__45816,G__45817));
})():null);
var G__45807 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45821 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45821) : ver.call(null,G__45821));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__45822 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45822) : ver.call(null,G__45822));
})(),cljs.core.cst$kw$live,((function (){var G__45823 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45823) : ver.call(null,G__45823));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__45808 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45824 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45824) : ver.call(null,G__45824));
})(),(1)))?(function (){var G__45827 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__45829 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45829) : ver.call(null,G__45829));
})() / (2)));
var G__45828 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__45826 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__45830 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__45830) : ver.call(null,G__45830));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__45826.cljs$core$IFn$_invoke$arity$2 ? fexpr__45826.cljs$core$IFn$_invoke$arity$2(G__45827,G__45828) : fexpr__45826.call(null,G__45827,G__45828));
})():null);
var fexpr__45803 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__45803.cljs$core$IFn$_invoke$arity$5 ? fexpr__45803.cljs$core$IFn$_invoke$arity$5(G__45804,G__45805,G__45806,G__45807,G__45808) : fexpr__45803.call(null,G__45804,G__45805,G__45806,G__45807,G__45808));
} else {
return null;
}
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core45831 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core45831 = (function (state,owner,meta45832){
this.state = state;
this.owner = owner;
this.meta45832 = meta45832;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core45831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45833,meta45832__$1){
var self__ = this;
var _45833__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core45831(self__.state,self__.owner,meta45832__$1));
});

orthodocljs.core.t_orthodocljs$core45831.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45833){
var self__ = this;
var _45833__$1 = this;
return self__.meta45832;
});

orthodocljs.core.t_orthodocljs$core45831.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core45831.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core45831.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core45831.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__45834 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__45835 = (50);
return setInterval(G__45834,G__45835);
});

orthodocljs.core.t_orthodocljs$core45831.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core45831.prototype.om$core$IRender$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-12"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.p.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsGenerated"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.cst$kw$coins.cljs$core$IFn$_invoke$arity$1(self__.state) | (0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsSec"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Coins/Sec: ",cljs.core.cst$kw$genSec.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "coinsSec"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Atheists: ",cljs.core.cst$kw$atheists.cljs$core$IFn$_invoke$arity$1(self__.state)], 0)),om.dom.img(({"onClick": ((function (this$__$1){
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__45836 = self__.state;
var map__45836__$1 = ((((!((map__45836 == null)))?((((map__45836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45836.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45836):map__45836);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45836__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__45838 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45838) : self__.state.call(null,G__45838));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists2(self__.state);
});})(map__45836,map__45836__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild2(self__.state);
});})(map__45836,map__45836__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45839 = cljs.core.cst$kw$menu2;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45839) : self__.state.call(null,G__45839));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__45840 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45840) : self__.state.call(null,G__45840));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "img"})),"Archpriests ",(function (){var G__45841 = cljs.core.cst$kw$archpriest;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45841) : self__.state.call(null,G__45841));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "img"})),"Bishops ",(function (){var G__45842 = cljs.core.cst$kw$bishop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45842) : self__.state.call(null,G__45842));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "img"})),"Archbishops ",(function (){var G__45843 = cljs.core.cst$kw$archbishop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45843) : self__.state.call(null,G__45843));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "img"})),"Patriarchs ",(function (){var G__45844 = cljs.core.cst$kw$patriarh;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45844) : self__.state.call(null,G__45844));
})()], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45845 = cljs.core.cst$kw$menu2;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45845) : self__.state.call(null,G__45845));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__45846 = cljs.core.cst$kw$churches;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45846) : self__.state.call(null,G__45846));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__45847 = cljs.core.cst$kw$shrines;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45847) : self__.state.call(null,G__45847));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__45848 = cljs.core.cst$kw$cathedrals;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45848) : self__.state.call(null,G__45848));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__45849 = cljs.core.cst$kw$patriarchates;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45849) : self__.state.call(null,G__45849));
})()], 0))], 0)):null)], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists(self__.state);
});})(map__45836,map__45836__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild(self__.state);
});})(map__45836,map__45836__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayExtras(self__.state);
});})(map__45836,map__45836__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45850 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45850) : self__.state.call(null,G__45850));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__45851 = self__.state;
var map__45851__$1 = ((((!((map__45851 == null)))?((((map__45851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45851.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45851):map__45851);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45851__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ArchpriestInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "imgShop"})),"Buy Archpriests: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.BishopInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "imgShop"})),"Buy Bishops: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ArchbishopInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "imgShop"})),"Buy Archbishops: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.PatriarhsInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "imgShop"})),"Buy Patriarchs: 150"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45853 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45853) : self__.state.call(null,G__45853));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.shrineInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.cathedralInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.patriarchateInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: 3500"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45854 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45854) : self__.state.call(null,G__45854));
})(),"Extras"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__45855 = cljs.core.cst$kw$reLock;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__45855) : self__.state.call(null,G__45855));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ReligiousEventsInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.pamphletsInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__45836,map__45836__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.FreeDaysInc(self__.state,self__.owner);
});})(map__45836,map__45836__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: 3500"], 0))], 0))], 0)):null)], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core45831.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta45832], null);
});

orthodocljs.core.t_orthodocljs$core45831.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core45831.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core45831";

orthodocljs.core.t_orthodocljs$core45831.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core45831");
});

orthodocljs.core.__GT_t_orthodocljs$core45831 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core45831(state__$1,owner__$1,meta45832){
return (new orthodocljs.core.t_orthodocljs$core45831(state__$1,owner__$1,meta45832));
});

}

return (new orthodocljs.core.t_orthodocljs$core45831(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
