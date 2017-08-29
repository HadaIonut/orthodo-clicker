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
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,(function (){var G__38582 = cljs.core.cst$kw$live;
var fexpr__38581 = (function (){var G__38584 = cljs.core.cst$kw$LocState;
var fexpr__38583 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__38583.cljs$core$IFn$_invoke$arity$1 ? fexpr__38583.cljs$core$IFn$_invoke$arity$1(G__38584) : fexpr__38583.call(null,G__38584));
})();
return (fexpr__38581.cljs$core$IFn$_invoke$arity$1 ? fexpr__38581.cljs$core$IFn$_invoke$arity$1(G__38582) : fexpr__38581.call(null,G__38582));
})(),cljs.core.cst$kw$trigger,(function (){var G__38588 = cljs.core.cst$kw$trigger;
var fexpr__38587 = (function (){var G__38590 = cljs.core.cst$kw$LocState;
var fexpr__38589 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__38589.cljs$core$IFn$_invoke$arity$1 ? fexpr__38589.cljs$core$IFn$_invoke$arity$1(G__38590) : fexpr__38589.call(null,G__38590));
})();
return (fexpr__38587.cljs$core$IFn$_invoke$arity$1 ? fexpr__38587.cljs$core$IFn$_invoke$arity$1(G__38588) : fexpr__38587.call(null,G__38588));
})()], null));
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,live,cljs.core.cst$kw$trigger,(function (){var G__38594 = cljs.core.cst$kw$trigger;
var fexpr__38593 = (function (){var G__38596 = cljs.core.cst$kw$LocState;
var fexpr__38595 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__38595.cljs$core$IFn$_invoke$arity$1 ? fexpr__38595.cljs$core$IFn$_invoke$arity$1(G__38596) : fexpr__38595.call(null,G__38596));
})();
return (fexpr__38593.cljs$core$IFn$_invoke$arity$1 ? fexpr__38593.cljs$core$IFn$_invoke$arity$1(G__38594) : fexpr__38593.call(null,G__38594));
})()], null));
}
});
orthodocljs.core.atheistInc = (function orthodocljs$core$atheistInc(state,owner){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$atheists,((function (){var G__38597 = cljs.core.cst$kw$atheists;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38597) : state.call(null,G__38597));
})() + (1)));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__38598){
var map__38599 = p__38598;
var map__38599__$1 = ((((!((map__38599 == null)))?((((map__38599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38599):map__38599);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__38601 = state;
var map__38601__$1 = ((((!((map__38601 == null)))?((((map__38601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38601.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38601):map__38601);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38601__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38601__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__38603 = state;
var map__38603__$1 = ((((!((map__38603 == null)))?((((map__38603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38603):map__38603);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38603__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__38605 = state;
var map__38605__$1 = ((((!((map__38605 == null)))?((((map__38605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38605):map__38605);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38605__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(var_args){
var args__22712__auto__ = [];
var len__22705__auto___38619 = arguments.length;
var i__22706__auto___38620 = (0);
while(true){
if((i__22706__auto___38620 < len__22705__auto___38619)){
args__22712__auto__.push((arguments[i__22706__auto___38620]));

var G__38621 = (i__22706__auto___38620 + (1));
i__22706__auto___38620 = G__38621;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((2) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((2)),(0),null)):null);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22713__auto__);
});

orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic = (function (state,owner,p__38610){
var vec__38611 = p__38610;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38611,(0),null);
var map__38614 = state;
var map__38614__$1 = ((((!((map__38614 == null)))?((((map__38614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38614):map__38614);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$patriarchates);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$religiousEvents);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38614__$1,cljs.core.cst$kw$coins);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"freeDays")){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((coinMod * (2)) | (0)));
} else {
}

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"pamphlets")) && (((1) <= (((7) / ((1) + (function (){var G__38617 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38617) : state.call(null,G__38617));
})())) | (0))))){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((coinMod * ((7) / ((1) + (function (){var G__38618 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38618) : state.call(null,G__38618));
})()))) | (0)));
} else {
}

if(cljs.core.not(opt)){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));
} else {
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))));
}

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(((((((coinMod + (1)) * clickers) + ((coinMod + (1)) * (churches * (15)))) + ((coinMod + (1)) * (shrines * (10)))) + ((coinMod + (1)) * (cathedrals * (20)))) + ((coinMod + (1)) * (patriarchates * (30)))) * event));

return orthodocljs.core.changeState((((((((coinMod + (1)) * clickers) + ((coinMod + (1)) * (shrines * (10)))) + ((coinMod + (1)) * (cathedrals * (20)))) + ((coinMod + (1)) * (patriarchates * (30)))) + ((coinMod + (1)) * churches)) * event),owner,(0));
});

orthodocljs.core.coinModInc.cljs$lang$maxFixedArity = (2);

orthodocljs.core.coinModInc.cljs$lang$applyTo = (function (seq38607){
var G__38608 = cljs.core.first(seq38607);
var seq38607__$1 = cljs.core.next(seq38607);
var G__38609 = cljs.core.first(seq38607__$1);
var seq38607__$2 = cljs.core.next(seq38607__$1);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(G__38608,G__38609,seq38607__$2);
});

orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__38622 = state;
var map__38622__$1 = ((((!((map__38622 == null)))?((((map__38622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38622):map__38622);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38622__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38622__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__38624 = state;
var map__38624__$1 = ((((!((map__38624 == null)))?((((map__38624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38624):map__38624);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38624__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38624__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38624__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38624__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38624__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38624__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__38627 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__38628 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * event)));
var G__38629 = orthodocljs.core.changeState((genSec + (coinMod * event)),owner,(0));
var fexpr__38626 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__38626.cljs$core$IFn$_invoke$arity$3 ? fexpr__38626.cljs$core$IFn$_invoke$arity$3(G__38627,G__38628,G__38629) : fexpr__38626.call(null,G__38627,G__38628,G__38629));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__38630 = state;
var map__38630__$1 = ((((!((map__38630 == null)))?((((map__38630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38630.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38630):map__38630);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38630__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__38633 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__38634 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__38635 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__38632 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__38632.cljs$core$IFn$_invoke$arity$3 ? fexpr__38632.cljs$core$IFn$_invoke$arity$3(G__38633,G__38634,G__38635) : fexpr__38632.call(null,G__38633,G__38634,G__38635));
} else {
return null;
}
});
orthodocljs.core.shrineInc = (function orthodocljs$core$shrineInc(state,owner){
var map__38636 = state;
var map__38636__$1 = ((((!((map__38636 == null)))?((((map__38636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38636.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38636):map__38636);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$shrines);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$coins);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$genSec);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__38639 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__38640 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__38641 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__38638 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shrines,((1) + shrines));
return (fexpr__38638.cljs$core$IFn$_invoke$arity$3 ? fexpr__38638.cljs$core$IFn$_invoke$arity$3(G__38639,G__38640,G__38641) : fexpr__38638.call(null,G__38639,G__38640,G__38641));
} else {
return null;
}
});
orthodocljs.core.cathedralInc = (function orthodocljs$core$cathedralInc(state,owner){
var map__38642 = state;
var map__38642__$1 = ((((!((map__38642 == null)))?((((map__38642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38642):map__38642);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38642__$1,cljs.core.cst$kw$cathedrals);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38642__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38642__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38642__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38642__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__38645 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__38646 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__38647 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__38644 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cathedrals,((1) + cathedrals));
return (fexpr__38644.cljs$core$IFn$_invoke$arity$3 ? fexpr__38644.cljs$core$IFn$_invoke$arity$3(G__38645,G__38646,G__38647) : fexpr__38644.call(null,G__38645,G__38646,G__38647));
} else {
return null;
}
});
orthodocljs.core.patriarchateInc = (function orthodocljs$core$patriarchateInc(state,owner){
var map__38648 = state;
var map__38648__$1 = ((((!((map__38648 == null)))?((((map__38648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38648):map__38648);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,cljs.core.cst$kw$patriarchates);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38648__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__38651 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__38652 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (30)) * event)));
var G__38653 = orthodocljs.core.changeState((genSec + ((coinMod * (30)) * event)),owner,(0));
var fexpr__38650 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarchates,((1) + patriarchates));
return (fexpr__38650.cljs$core$IFn$_invoke$arity$3 ? fexpr__38650.cljs$core$IFn$_invoke$arity$3(G__38651,G__38652,G__38653) : fexpr__38650.call(null,G__38651,G__38652,G__38653));
} else {
return null;
}
});
orthodocljs.core.ReligiousEventsInc = (function orthodocljs$core$ReligiousEventsInc(state,owner){
if(((function (){var G__38654 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38654) : state.call(null,G__38654));
})() >= (1750))){
var G__38656 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__38658 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38658) : state.call(null,G__38658));
})() - (1750)));
var G__38657 = orthodocljs.core.changeState((function (){var G__38659 = cljs.core.cst$kw$genSec;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38659) : state.call(null,G__38659));
})(),owner,(100));
var fexpr__38655 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$reLock,(0));
return (fexpr__38655.cljs$core$IFn$_invoke$arity$2 ? fexpr__38655.cljs$core$IFn$_invoke$arity$2(G__38656,G__38657) : fexpr__38655.call(null,G__38656,G__38657));
} else {
return null;
}
});
orthodocljs.core.pamphletsInc = (function orthodocljs$core$pamphletsInc(state,owner){
if(((function (){var G__38660 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38660) : state.call(null,G__38660));
})() >= (3500))){
var G__38663 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$pamphlets,((1) + (function (){var G__38665 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38665) : state.call(null,G__38665));
})()));
var G__38664 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (((50) / (((function (){var G__38666 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38666) : state.call(null,G__38666));
})() + (1)) / (2))) | (0)))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pamphlets"], 0));
} else {
return orthodocljs.core.atheistInc(state,owner);
}
})();
var fexpr__38662 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__38667 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38667) : state.call(null,G__38667));
})() - (3500)));
return (fexpr__38662.cljs$core$IFn$_invoke$arity$2 ? fexpr__38662.cljs$core$IFn$_invoke$arity$2(G__38663,G__38664) : fexpr__38662.call(null,G__38663,G__38664));
} else {
return null;
}
});
orthodocljs.core.FreeDaysInc = (function orthodocljs$core$FreeDaysInc(state,owner){
if(((function (){var G__38668 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38668) : state.call(null,G__38668));
})() >= (3500))){
var G__38671 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$freeDays,((1) + (function (){var G__38673 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38673) : state.call(null,G__38673));
})()));
var G__38672 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (50))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["freeDays"], 0));
} else {
return null;
}
})();
var fexpr__38670 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__38674 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__38674) : state.call(null,G__38674));
})() - (3500)));
return (fexpr__38670.cljs$core$IFn$_invoke$arity$2 ? fexpr__38670.cljs$core$IFn$_invoke$arity$2(G__38671,G__38672) : fexpr__38670.call(null,G__38671,G__38672));
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$cathedrals,cljs.core.cst$kw$shrines,cljs.core.cst$kw$pamphlets,cljs.core.cst$kw$churches,cljs.core.cst$kw$clickers,cljs.core.cst$kw$shop,cljs.core.cst$kw$coinMod,cljs.core.cst$kw$atheists,cljs.core.cst$kw$reLock,cljs.core.cst$kw$coins,cljs.core.cst$kw$religiousEvents,cljs.core.cst$kw$genSec,cljs.core.cst$kw$patriarchates,cljs.core.cst$kw$freeDays,cljs.core.cst$kw$menu],[(0),(0),(0),(0),(0),"Prists",(1),(0),(10),(1500000),(1),(0),(0),(0),"true"]));
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
var ver = (function (){var G__38676 = cljs.core.cst$kw$LocState;
var fexpr__38675 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__38675.cljs$core$IFn$_invoke$arity$1 ? fexpr__38675.cljs$core$IFn$_invoke$arity$1(G__38676) : fexpr__38675.call(null,G__38676));
})();
return (coins + ((function (){var G__38677 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38677) : ver.call(null,G__38677));
})() / (1)));
});})(pula))
);

var ver = (function (){var G__38679 = cljs.core.cst$kw$LocState;
var fexpr__38678 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__38678.cljs$core$IFn$_invoke$arity$1 ? fexpr__38678.cljs$core$IFn$_invoke$arity$1(G__38679) : fexpr__38678.call(null,G__38679));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38680 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38680) : ver.call(null,G__38680));
})(),(0)))){
var G__38682 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__38687 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38687) : ver.call(null,G__38687));
})()], 0));
var G__38683 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__38688 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38688) : ver.call(null,G__38688));
})()], 0));
var G__38684 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38690 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38690) : ver.call(null,G__38690));
})(),(0))))?(function (){var G__38694 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__38696 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38696) : ver.call(null,G__38696));
})() * (2)));
var G__38695 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__38693 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__38697 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38697) : ver.call(null,G__38697));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__38698 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38698) : ver.call(null,G__38698));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__38693.cljs$core$IFn$_invoke$arity$2 ? fexpr__38693.cljs$core$IFn$_invoke$arity$2(G__38694,G__38695) : fexpr__38693.call(null,G__38694,G__38695));
})():null);
var G__38685 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38699 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38699) : ver.call(null,G__38699));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__38700 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38700) : ver.call(null,G__38700));
})(),cljs.core.cst$kw$live,((function (){var G__38701 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38701) : ver.call(null,G__38701));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__38686 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38702 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38702) : ver.call(null,G__38702));
})(),(1)))?(function (){var G__38705 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__38707 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38707) : ver.call(null,G__38707));
})() / (2)));
var G__38706 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__38704 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__38708 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__38708) : ver.call(null,G__38708));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__38704.cljs$core$IFn$_invoke$arity$2 ? fexpr__38704.cljs$core$IFn$_invoke$arity$2(G__38705,G__38706) : fexpr__38704.call(null,G__38705,G__38706));
})():null);
var fexpr__38681 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__38681.cljs$core$IFn$_invoke$arity$5 ? fexpr__38681.cljs$core$IFn$_invoke$arity$5(G__38682,G__38683,G__38684,G__38685,G__38686) : fexpr__38681.call(null,G__38682,G__38683,G__38684,G__38685,G__38686));
} else {
return null;
}
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core38709 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core38709 = (function (state,owner,meta38710){
this.state = state;
this.owner = owner;
this.meta38710 = meta38710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core38709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38711,meta38710__$1){
var self__ = this;
var _38711__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core38709(self__.state,self__.owner,meta38710__$1));
});

orthodocljs.core.t_orthodocljs$core38709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38711){
var self__ = this;
var _38711__$1 = this;
return self__.meta38710;
});

orthodocljs.core.t_orthodocljs$core38709.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core38709.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core38709.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core38709.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__38712 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__38713 = (1000);
return setInterval(G__38712,G__38713);
});

orthodocljs.core.t_orthodocljs$core38709.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core38709.prototype.om$core$IRender$render$arity$1 = (function (this$){
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__38714 = self__.state;
var map__38714__$1 = ((((!((map__38714 == null)))?((((map__38714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38714.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38714):map__38714);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38714__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__38716 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38716) : self__.state.call(null,G__38716));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Here you have your army:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__38717 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38717) : self__.state.call(null,G__38717));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__38718 = cljs.core.cst$kw$churches;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38718) : self__.state.call(null,G__38718));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__38719 = cljs.core.cst$kw$shrines;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38719) : self__.state.call(null,G__38719));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__38720 = cljs.core.cst$kw$cathedrals;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38720) : self__.state.call(null,G__38720));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__38721 = cljs.core.cst$kw$patriarchates;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38721) : self__.state.call(null,G__38721));
})()], 0))], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists(self__.state);
});})(map__38714,map__38714__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild(self__.state);
});})(map__38714,map__38714__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayExtras(self__.state);
});})(map__38714,map__38714__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38722 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38722) : self__.state.call(null,G__38722));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__38723 = self__.state;
var map__38723__$1 = ((((!((map__38723 == null)))?((((map__38723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38723):map__38723);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38723__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: 150"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38725 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38725) : self__.state.call(null,G__38725));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.shrineInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.cathedralInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.patriarchateInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: 3500"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38726 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38726) : self__.state.call(null,G__38726));
})(),"Extras"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__38727 = cljs.core.cst$kw$reLock;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__38727) : self__.state.call(null,G__38727));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ReligiousEventsInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.pamphletsInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__38714,map__38714__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.FreeDaysInc(self__.state,self__.owner);
});})(map__38714,map__38714__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: 3500"], 0))], 0))], 0)):null)], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core38709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta38710], null);
});

orthodocljs.core.t_orthodocljs$core38709.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core38709.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core38709";

orthodocljs.core.t_orthodocljs$core38709.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core38709");
});

orthodocljs.core.__GT_t_orthodocljs$core38709 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core38709(state__$1,owner__$1,meta38710){
return (new orthodocljs.core.t_orthodocljs$core38709(state__$1,owner__$1,meta38710));
});

}

return (new orthodocljs.core.t_orthodocljs$core38709(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
