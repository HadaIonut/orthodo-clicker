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
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,(function (){var G__45873 = cljs.core.cst$kw$live;
var fexpr__45872 = (function (){var G__45875 = cljs.core.cst$kw$LocState;
var fexpr__45874 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45874.cljs$core$IFn$_invoke$arity$1 ? fexpr__45874.cljs$core$IFn$_invoke$arity$1(G__45875) : fexpr__45874.call(null,G__45875));
})();
return (fexpr__45872.cljs$core$IFn$_invoke$arity$1 ? fexpr__45872.cljs$core$IFn$_invoke$arity$1(G__45873) : fexpr__45872.call(null,G__45873));
})(),cljs.core.cst$kw$trigger,(function (){var G__45879 = cljs.core.cst$kw$trigger;
var fexpr__45878 = (function (){var G__45881 = cljs.core.cst$kw$LocState;
var fexpr__45880 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45880.cljs$core$IFn$_invoke$arity$1 ? fexpr__45880.cljs$core$IFn$_invoke$arity$1(G__45881) : fexpr__45880.call(null,G__45881));
})();
return (fexpr__45878.cljs$core$IFn$_invoke$arity$1 ? fexpr__45878.cljs$core$IFn$_invoke$arity$1(G__45879) : fexpr__45878.call(null,G__45879));
})()], null));
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,live,cljs.core.cst$kw$trigger,(function (){var G__45885 = cljs.core.cst$kw$trigger;
var fexpr__45884 = (function (){var G__45887 = cljs.core.cst$kw$LocState;
var fexpr__45886 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45886.cljs$core$IFn$_invoke$arity$1 ? fexpr__45886.cljs$core$IFn$_invoke$arity$1(G__45887) : fexpr__45886.call(null,G__45887));
})();
return (fexpr__45884.cljs$core$IFn$_invoke$arity$1 ? fexpr__45884.cljs$core$IFn$_invoke$arity$1(G__45885) : fexpr__45884.call(null,G__45885));
})()], null));
}
});
orthodocljs.core.coinModActualizer = (function orthodocljs$core$coinModActualizer(state,owner,inc,ath){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inc], 0));

var map__45888 = state;
var map__45888__$1 = ((((!((map__45888 == null)))?((((map__45888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45888.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45888):map__45888);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$archpriest);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$patriarchates);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$bishop);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$coinMod);
var atheists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$atheists);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$archbishop);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$religiousEvents);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45888__$1,cljs.core.cst$kw$coins);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(((((((((((inc * clickers) + (inc * (archpriest * (5)))) + (inc * (bishop * (10)))) + (inc * (archbishop * (15)))) + (inc * (patriarh * (20)))) + (inc * (churches * (15)))) + (inc * (shrines * (10)))) + (inc * (cathedrals * (20)))) + (inc * (patriarchates * (30)))) - ath) * event));

return orthodocljs.core.changeState((((((((((((inc * clickers) + (inc * (archpriest * (5)))) + (inc * (bishop * (10)))) + (inc * (archbishop * (15)))) + (inc * (patriarh * (20)))) + (inc * (shrines * (10)))) + (inc * (cathedrals * (20)))) + (inc * (patriarchates * (30)))) + (inc * churches)) - ath) * event),owner,(0));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__45890){
var map__45891 = p__45890;
var map__45891__$1 = ((((!((map__45891 == null)))?((((map__45891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45891.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45891):map__45891);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45891__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45891__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__45893 = state;
var map__45893__$1 = ((((!((map__45893 == null)))?((((map__45893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45893.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45893):map__45893);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45893__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45893__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__45895 = state;
var map__45895__$1 = ((((!((map__45895 == null)))?((((map__45895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45895):map__45895);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45895__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__45897 = state;
var map__45897__$1 = ((((!((map__45897 == null)))?((((map__45897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45897.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45897):map__45897);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45897__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(var_args){
var args__22712__auto__ = [];
var len__22705__auto___45924 = arguments.length;
var i__22706__auto___45925 = (0);
while(true){
if((i__22706__auto___45925 < len__22705__auto___45924)){
args__22712__auto__.push((arguments[i__22706__auto___45925]));

var G__45926 = (i__22706__auto___45925 + (1));
i__22706__auto___45925 = G__45926;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((2) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((2)),(0),null)):null);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22713__auto__);
});

orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic = (function (state,owner,p__45902){
var vec__45903 = p__45902;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45903,(0),null);
var map__45906 = state;
var map__45906__$1 = ((((!((map__45906 == null)))?((((map__45906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45906.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45906):map__45906);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$archpriest);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$patriarchates);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$bishop);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$coinMod);
var atheists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$atheists);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$archbishop);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$religiousEvents);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45906__$1,cljs.core.cst$kw$coins);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"atheists")){
var G__45909_45927 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$atheists,((function (){var G__45911 = cljs.core.cst$kw$atheists;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45911) : state.call(null,G__45911));
})() + (1)));
var G__45910_45928 = orthodocljs.core.coinModActualizer(state,owner,coinMod,(1));
var fexpr__45908_45929 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,(coinMod - (1)));
(fexpr__45908_45929.cljs$core$IFn$_invoke$arity$2 ? fexpr__45908_45929.cljs$core$IFn$_invoke$arity$2(G__45909_45927,G__45910_45928) : fexpr__45908_45929.call(null,G__45909_45927,G__45910_45928));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"freeDays")){
var G__45913_45930 = orthodocljs.core.coinModActualizer(state,owner,((coinMod * (2)) | (0)),(0));
var fexpr__45912_45931 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((coinMod * (2)) | (0)));
(fexpr__45912_45931.cljs$core$IFn$_invoke$arity$1 ? fexpr__45912_45931.cljs$core$IFn$_invoke$arity$1(G__45913_45930) : fexpr__45912_45931.call(null,G__45913_45930));
} else {
}

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opt,"pamphlets")) && (((1) <= (((7) / ((1) + (function (){var G__45915 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45915) : state.call(null,G__45915));
})())) | (0))))){
var G__45918_45932 = orthodocljs.core.coinModActualizer(state,owner,((coinMod * ((7) / ((1) + (function (){var G__45919 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45919) : state.call(null,G__45919));
})()))) | (0)),(0));
var fexpr__45917_45933 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((coinMod * ((7) / ((1) + (function (){var G__45920 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45920) : state.call(null,G__45920));
})()))) | (0)));
(fexpr__45917_45933.cljs$core$IFn$_invoke$arity$1 ? fexpr__45917_45933.cljs$core$IFn$_invoke$arity$1(G__45918_45932) : fexpr__45917_45933.call(null,G__45918_45932));
} else {
}

if(cljs.core.not(opt)){
var G__45922 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))));
var G__45923 = orthodocljs.core.coinModActualizer(state,owner,((1) + coinMod),(0));
var fexpr__45921 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));
return (fexpr__45921.cljs$core$IFn$_invoke$arity$2 ? fexpr__45921.cljs$core$IFn$_invoke$arity$2(G__45922,G__45923) : fexpr__45921.call(null,G__45922,G__45923));
} else {
return null;
}
});

orthodocljs.core.coinModInc.cljs$lang$maxFixedArity = (2);

orthodocljs.core.coinModInc.cljs$lang$applyTo = (function (seq45899){
var G__45900 = cljs.core.first(seq45899);
var seq45899__$1 = cljs.core.next(seq45899);
var G__45901 = cljs.core.first(seq45899__$1);
var seq45899__$2 = cljs.core.next(seq45899__$1);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(G__45900,G__45901,seq45899__$2);
});

orthodocljs.core.atheistInc = (function orthodocljs$core$atheistInc(state,owner){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$atheists,((function (){var G__45934 = cljs.core.cst$kw$atheists;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45934) : state.call(null,G__45934));
})() + (1)));

return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["atheists"], 0));
});
orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__45935 = state;
var map__45935__$1 = ((((!((map__45935 == null)))?((((map__45935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45935):map__45935);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45935__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45935__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__45937 = state;
var map__45937__$1 = ((((!((map__45937 == null)))?((((map__45937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45937):map__45937);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45937__$1,cljs.core.cst$kw$genSec);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__45942 = cljs.core.cst$kw$genSec;
var fexpr__45941 = (function (){var G__45944 = cljs.core.cst$kw$LocState;
var fexpr__45943 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__45943.cljs$core$IFn$_invoke$arity$1 ? fexpr__45943.cljs$core$IFn$_invoke$arity$1(G__45944) : fexpr__45943.call(null,G__45944));
})();
return (fexpr__45941.cljs$core$IFn$_invoke$arity$1 ? fexpr__45941.cljs$core$IFn$_invoke$arity$1(G__45942) : fexpr__45941.call(null,G__45942));
})()], 0));

if((coins >= (150))){
var G__45946 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45947 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * event)));
var G__45948 = orthodocljs.core.changeState((genSec + (coinMod * event)),owner,(0));
var fexpr__45945 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__45945.cljs$core$IFn$_invoke$arity$3 ? fexpr__45945.cljs$core$IFn$_invoke$arity$3(G__45946,G__45947,G__45948) : fexpr__45945.call(null,G__45946,G__45947,G__45948));
} else {
return null;
}
});
orthodocljs.core.ArchpriestInc = (function orthodocljs$core$ArchpriestInc(state,owner){
var map__45949 = state;
var map__45949__$1 = ((((!((map__45949 == null)))?((((map__45949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45949.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45949):map__45949);
var archpriest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45949__$1,cljs.core.cst$kw$archpriest);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45949__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45949__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45949__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45949__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45952 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45953 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (5)) * event)));
var G__45954 = orthodocljs.core.changeState((genSec + ((coinMod * (5)) * event)),owner,(0));
var fexpr__45951 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$archpriest,((1) + archpriest));
return (fexpr__45951.cljs$core$IFn$_invoke$arity$3 ? fexpr__45951.cljs$core$IFn$_invoke$arity$3(G__45952,G__45953,G__45954) : fexpr__45951.call(null,G__45952,G__45953,G__45954));
} else {
return null;
}
});
orthodocljs.core.BishopInc = (function orthodocljs$core$BishopInc(state,owner){
var map__45955 = state;
var map__45955__$1 = ((((!((map__45955 == null)))?((((map__45955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45955):map__45955);
var bishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45955__$1,cljs.core.cst$kw$bishop);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45955__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45955__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45955__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45955__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45958 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45959 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__45960 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__45957 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$bishop,((1) + bishop));
return (fexpr__45957.cljs$core$IFn$_invoke$arity$3 ? fexpr__45957.cljs$core$IFn$_invoke$arity$3(G__45958,G__45959,G__45960) : fexpr__45957.call(null,G__45958,G__45959,G__45960));
} else {
return null;
}
});
orthodocljs.core.ArchbishopInc = (function orthodocljs$core$ArchbishopInc(state,owner){
var map__45961 = state;
var map__45961__$1 = ((((!((map__45961 == null)))?((((map__45961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45961):map__45961);
var archbishop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45961__$1,cljs.core.cst$kw$archbishop);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45961__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45961__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45961__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45961__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45964 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45965 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__45966 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__45963 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$archbishop,((1) + archbishop));
return (fexpr__45963.cljs$core$IFn$_invoke$arity$3 ? fexpr__45963.cljs$core$IFn$_invoke$arity$3(G__45964,G__45965,G__45966) : fexpr__45963.call(null,G__45964,G__45965,G__45966));
} else {
return null;
}
});
orthodocljs.core.PatriarhsInc = (function orthodocljs$core$PatriarhsInc(state,owner){
var map__45967 = state;
var map__45967__$1 = ((((!((map__45967 == null)))?((((map__45967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45967.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45967):map__45967);
var patriarh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45967__$1,cljs.core.cst$kw$patriarh);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45967__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45967__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45967__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45967__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__45970 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__45971 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__45972 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__45969 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarh,((1) + patriarh));
return (fexpr__45969.cljs$core$IFn$_invoke$arity$3 ? fexpr__45969.cljs$core$IFn$_invoke$arity$3(G__45970,G__45971,G__45972) : fexpr__45969.call(null,G__45970,G__45971,G__45972));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__45973 = state;
var map__45973__$1 = ((((!((map__45973 == null)))?((((map__45973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45973.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45973):map__45973);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45973__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45973__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45973__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45973__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45973__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45973__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__45976 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45977 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__45978 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__45975 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__45975.cljs$core$IFn$_invoke$arity$3 ? fexpr__45975.cljs$core$IFn$_invoke$arity$3(G__45976,G__45977,G__45978) : fexpr__45975.call(null,G__45976,G__45977,G__45978));
} else {
return null;
}
});
orthodocljs.core.shrineInc = (function orthodocljs$core$shrineInc(state,owner){
var map__45979 = state;
var map__45979__$1 = ((((!((map__45979 == null)))?((((map__45979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45979):map__45979);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45979__$1,cljs.core.cst$kw$shrines);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45979__$1,cljs.core.cst$kw$coins);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45979__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45979__$1,cljs.core.cst$kw$genSec);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45979__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__45982 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45983 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__45984 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__45981 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shrines,((1) + shrines));
return (fexpr__45981.cljs$core$IFn$_invoke$arity$3 ? fexpr__45981.cljs$core$IFn$_invoke$arity$3(G__45982,G__45983,G__45984) : fexpr__45981.call(null,G__45982,G__45983,G__45984));
} else {
return null;
}
});
orthodocljs.core.cathedralInc = (function orthodocljs$core$cathedralInc(state,owner){
var map__45985 = state;
var map__45985__$1 = ((((!((map__45985 == null)))?((((map__45985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45985.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45985):map__45985);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45985__$1,cljs.core.cst$kw$cathedrals);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45985__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45985__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45985__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45985__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__45988 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45989 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__45990 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__45987 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cathedrals,((1) + cathedrals));
return (fexpr__45987.cljs$core$IFn$_invoke$arity$3 ? fexpr__45987.cljs$core$IFn$_invoke$arity$3(G__45988,G__45989,G__45990) : fexpr__45987.call(null,G__45988,G__45989,G__45990));
} else {
return null;
}
});
orthodocljs.core.patriarchateInc = (function orthodocljs$core$patriarchateInc(state,owner){
var map__45991 = state;
var map__45991__$1 = ((((!((map__45991 == null)))?((((map__45991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45991.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45991):map__45991);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45991__$1,cljs.core.cst$kw$patriarchates);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45991__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45991__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45991__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45991__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__45994 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__45995 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (30)) * event)));
var G__45996 = orthodocljs.core.changeState((genSec + ((coinMod * (30)) * event)),owner,(0));
var fexpr__45993 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarchates,((1) + patriarchates));
return (fexpr__45993.cljs$core$IFn$_invoke$arity$3 ? fexpr__45993.cljs$core$IFn$_invoke$arity$3(G__45994,G__45995,G__45996) : fexpr__45993.call(null,G__45994,G__45995,G__45996));
} else {
return null;
}
});
orthodocljs.core.ReligiousEventsInc = (function orthodocljs$core$ReligiousEventsInc(state,owner){
if(((function (){var G__45997 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__45997) : state.call(null,G__45997));
})() >= (1750))){
var G__45999 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__46001 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46001) : state.call(null,G__46001));
})() - (1750)));
var G__46000 = orthodocljs.core.changeState((function (){var G__46002 = cljs.core.cst$kw$genSec;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46002) : state.call(null,G__46002));
})(),owner,(100));
var fexpr__45998 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$reLock,(0));
return (fexpr__45998.cljs$core$IFn$_invoke$arity$2 ? fexpr__45998.cljs$core$IFn$_invoke$arity$2(G__45999,G__46000) : fexpr__45998.call(null,G__45999,G__46000));
} else {
return null;
}
});
orthodocljs.core.pamphletsInc = (function orthodocljs$core$pamphletsInc(state,owner){
if(((function (){var G__46003 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46003) : state.call(null,G__46003));
})() >= (3500))){
var G__46006 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$pamphlets,((1) + (function (){var G__46008 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46008) : state.call(null,G__46008));
})()));
var G__46007 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (((50) / (((function (){var G__46009 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46009) : state.call(null,G__46009));
})() + (1)) / (2))) | (0)))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["pamphlets"], 0));
} else {
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["atheists"], 0));
}
})();
var fexpr__46005 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__46010 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46010) : state.call(null,G__46010));
})() - (3500)));
return (fexpr__46005.cljs$core$IFn$_invoke$arity$2 ? fexpr__46005.cljs$core$IFn$_invoke$arity$2(G__46006,G__46007) : fexpr__46005.call(null,G__46006,G__46007));
} else {
return null;
}
});
orthodocljs.core.FreeDaysInc = (function orthodocljs$core$FreeDaysInc(state,owner){
if(((function (){var G__46011 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46011) : state.call(null,G__46011));
})() >= (3500))){
var G__46014 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$freeDays,((1) + (function (){var G__46016 = cljs.core.cst$kw$freeDays;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46016) : state.call(null,G__46016));
})()));
var G__46015 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (50))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["freeDays"], 0));
} else {
return null;
}
})();
var fexpr__46013 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__46017 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__46017) : state.call(null,G__46017));
})() - (3500)));
return (fexpr__46013.cljs$core$IFn$_invoke$arity$2 ? fexpr__46013.cljs$core$IFn$_invoke$arity$2(G__46014,G__46015) : fexpr__46013.call(null,G__46014,G__46015));
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
var ver = (function (){var G__46019 = cljs.core.cst$kw$LocState;
var fexpr__46018 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__46018.cljs$core$IFn$_invoke$arity$1 ? fexpr__46018.cljs$core$IFn$_invoke$arity$1(G__46019) : fexpr__46018.call(null,G__46019));
})();
return (coins + ((function (){var G__46020 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46020) : ver.call(null,G__46020));
})() / (20)));
});})(pula))
);

var ver = (function (){var G__46022 = cljs.core.cst$kw$LocState;
var fexpr__46021 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__46021.cljs$core$IFn$_invoke$arity$1 ? fexpr__46021.cljs$core$IFn$_invoke$arity$1(G__46022) : fexpr__46021.call(null,G__46022));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46023 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46023) : ver.call(null,G__46023));
})(),(0)))){
var G__46025 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__46030 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46030) : ver.call(null,G__46030));
})()], 0));
var G__46026 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__46031 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46031) : ver.call(null,G__46031));
})()], 0));
var G__46027 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46033 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46033) : ver.call(null,G__46033));
})(),(0))))?(function (){var G__46037 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__46039 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46039) : ver.call(null,G__46039));
})() * (2)));
var G__46038 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__46036 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__46040 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46040) : ver.call(null,G__46040));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__46041 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46041) : ver.call(null,G__46041));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__46036.cljs$core$IFn$_invoke$arity$2 ? fexpr__46036.cljs$core$IFn$_invoke$arity$2(G__46037,G__46038) : fexpr__46036.call(null,G__46037,G__46038));
})():null);
var G__46028 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46042 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46042) : ver.call(null,G__46042));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__46043 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46043) : ver.call(null,G__46043));
})(),cljs.core.cst$kw$live,((function (){var G__46044 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46044) : ver.call(null,G__46044));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__46029 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46045 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46045) : ver.call(null,G__46045));
})(),(1)))?(function (){var G__46048 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__46050 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46050) : ver.call(null,G__46050));
})() / (2)));
var G__46049 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__46047 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__46051 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__46051) : ver.call(null,G__46051));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__46047.cljs$core$IFn$_invoke$arity$2 ? fexpr__46047.cljs$core$IFn$_invoke$arity$2(G__46048,G__46049) : fexpr__46047.call(null,G__46048,G__46049));
})():null);
var fexpr__46024 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__46024.cljs$core$IFn$_invoke$arity$5 ? fexpr__46024.cljs$core$IFn$_invoke$arity$5(G__46025,G__46026,G__46027,G__46028,G__46029) : fexpr__46024.call(null,G__46025,G__46026,G__46027,G__46028,G__46029));
} else {
return null;
}
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core46052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core46052 = (function (state,owner,meta46053){
this.state = state;
this.owner = owner;
this.meta46053 = meta46053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core46052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46054,meta46053__$1){
var self__ = this;
var _46054__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core46052(self__.state,self__.owner,meta46053__$1));
});

orthodocljs.core.t_orthodocljs$core46052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46054){
var self__ = this;
var _46054__$1 = this;
return self__.meta46053;
});

orthodocljs.core.t_orthodocljs$core46052.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core46052.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core46052.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core46052.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__46055 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__46056 = (50);
return setInterval(G__46055,G__46056);
});

orthodocljs.core.t_orthodocljs$core46052.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core46052.prototype.om$core$IRender$render$arity$1 = (function (this$){
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__46057 = self__.state;
var map__46057__$1 = ((((!((map__46057 == null)))?((((map__46057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46057):map__46057);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46057__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__46059 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46059) : self__.state.call(null,G__46059));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "btn-group btn-extras"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists2(self__.state);
});})(map__46057,map__46057__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0)),om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default buttonColor", "onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild2(self__.state);
});})(map__46057,map__46057__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46060 = cljs.core.cst$kw$menu2;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46060) : self__.state.call(null,G__46060));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__46061 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46061) : self__.state.call(null,G__46061));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "img"})),"Archpriests ",(function (){var G__46062 = cljs.core.cst$kw$archpriest;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46062) : self__.state.call(null,G__46062));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "img"})),"Bishops ",(function (){var G__46063 = cljs.core.cst$kw$bishop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46063) : self__.state.call(null,G__46063));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "img"})),"Archbishops ",(function (){var G__46064 = cljs.core.cst$kw$archbishop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46064) : self__.state.call(null,G__46064));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "img"})),"Patriarchs ",(function (){var G__46065 = cljs.core.cst$kw$patriarh;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46065) : self__.state.call(null,G__46065));
})()], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46066 = cljs.core.cst$kw$menu2;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46066) : self__.state.call(null,G__46066));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__46067 = cljs.core.cst$kw$churches;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46067) : self__.state.call(null,G__46067));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__46068 = cljs.core.cst$kw$shrines;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46068) : self__.state.call(null,G__46068));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__46069 = cljs.core.cst$kw$cathedrals;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46069) : self__.state.call(null,G__46069));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__46070 = cljs.core.cst$kw$patriarchates;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46070) : self__.state.call(null,G__46070));
})()], 0))], 0)):null)], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists(self__.state);
});})(map__46057,map__46057__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild(self__.state);
});})(map__46057,map__46057__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayExtras(self__.state);
});})(map__46057,map__46057__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46071 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46071) : self__.state.call(null,G__46071));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__46072 = self__.state;
var map__46072__$1 = ((((!((map__46072 == null)))?((((map__46072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46072):map__46072);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46072__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ArchpriestInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archpriest.png", "className": "imgShop"})),"Buy Archpriests: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.BishopInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Bishop.png", "className": "imgShop"})),"Buy Bishops: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ArchbishopInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Archbishop.png", "className": "imgShop"})),"Buy Archbishops: 150"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.PatriarhsInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Daniel.png", "className": "imgShop"})),"Buy Patriarchs: 150"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46074 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46074) : self__.state.call(null,G__46074));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.shrineInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.cathedralInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.patriarchateInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: 3500"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46075 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46075) : self__.state.call(null,G__46075));
})(),"Extras"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__46076 = cljs.core.cst$kw$reLock;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__46076) : self__.state.call(null,G__46076));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ReligiousEventsInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0))], 0)):null)], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.pamphletsInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__46057,map__46057__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.FreeDaysInc(self__.state,self__.owner);
});})(map__46057,map__46057__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Get Free Days from work: 3500"], 0))], 0))], 0)):null)], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core46052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta46053], null);
});

orthodocljs.core.t_orthodocljs$core46052.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core46052.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core46052";

orthodocljs.core.t_orthodocljs$core46052.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core46052");
});

orthodocljs.core.__GT_t_orthodocljs$core46052 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core46052(state__$1,owner__$1,meta46053){
return (new orthodocljs.core.t_orthodocljs$core46052(state__$1,owner__$1,meta46053));
});

}

return (new orthodocljs.core.t_orthodocljs$core46052(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
