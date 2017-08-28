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
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,(function (){var G__37297 = cljs.core.cst$kw$live;
var fexpr__37296 = (function (){var G__37299 = cljs.core.cst$kw$LocState;
var fexpr__37298 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__37298.cljs$core$IFn$_invoke$arity$1 ? fexpr__37298.cljs$core$IFn$_invoke$arity$1(G__37299) : fexpr__37298.call(null,G__37299));
})();
return (fexpr__37296.cljs$core$IFn$_invoke$arity$1 ? fexpr__37296.cljs$core$IFn$_invoke$arity$1(G__37297) : fexpr__37296.call(null,G__37297));
})(),cljs.core.cst$kw$trigger,(function (){var G__37303 = cljs.core.cst$kw$trigger;
var fexpr__37302 = (function (){var G__37305 = cljs.core.cst$kw$LocState;
var fexpr__37304 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__37304.cljs$core$IFn$_invoke$arity$1 ? fexpr__37304.cljs$core$IFn$_invoke$arity$1(G__37305) : fexpr__37304.call(null,G__37305));
})();
return (fexpr__37302.cljs$core$IFn$_invoke$arity$1 ? fexpr__37302.cljs$core$IFn$_invoke$arity$1(G__37303) : fexpr__37302.call(null,G__37303));
})()], null));
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,live,cljs.core.cst$kw$trigger,(function (){var G__37309 = cljs.core.cst$kw$trigger;
var fexpr__37308 = (function (){var G__37311 = cljs.core.cst$kw$LocState;
var fexpr__37310 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__37310.cljs$core$IFn$_invoke$arity$1 ? fexpr__37310.cljs$core$IFn$_invoke$arity$1(G__37311) : fexpr__37310.call(null,G__37311));
})();
return (fexpr__37308.cljs$core$IFn$_invoke$arity$1 ? fexpr__37308.cljs$core$IFn$_invoke$arity$1(G__37309) : fexpr__37308.call(null,G__37309));
})()], null));
}
});
orthodocljs.core.atheistInc = (function orthodocljs$core$atheistInc(state,owner){
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$atheists,((function (){var G__37312 = cljs.core.cst$kw$atheists;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37312) : state.call(null,G__37312));
})() + (1)));
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__37313){
var map__37314 = p__37313;
var map__37314__$1 = ((((!((map__37314 == null)))?((((map__37314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37314):map__37314);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37314__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__37316 = state;
var map__37316__$1 = ((((!((map__37316 == null)))?((((map__37316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37316):map__37316);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37316__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__37318 = state;
var map__37318__$1 = ((((!((map__37318 == null)))?((((map__37318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37318):map__37318);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37318__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__37320 = state;
var map__37320__$1 = ((((!((map__37320 == null)))?((((map__37320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37320.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37320):map__37320);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37320__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(var_args){
var args__22712__auto__ = [];
var len__22705__auto___37335 = arguments.length;
var i__22706__auto___37336 = (0);
while(true){
if((i__22706__auto___37336 < len__22705__auto___37335)){
args__22712__auto__.push((arguments[i__22706__auto___37336]));

var G__37337 = (i__22706__auto___37336 + (1));
i__22706__auto___37336 = G__37337;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((2) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((2)),(0),null)):null);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__22713__auto__);
});

orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic = (function (state,owner,p__37325){
var vec__37326 = p__37325;
var opt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37326,(0),null);
var map__37329 = state;
var map__37329__$1 = ((((!((map__37329 == null)))?((((map__37329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37329.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37329):map__37329);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$patriarchates);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$religiousEvents);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37329__$1,cljs.core.cst$kw$coins);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__37331 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37331) : state.call(null,G__37331));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(((7) / ((1) + (function (){var G__37332 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37332) : state.call(null,G__37332));
})())) | (0))], 0));

if(cljs.core.truth_((function (){var and__21529__auto__ = opt;
if(cljs.core.truth_(and__21529__auto__)){
return ((1) <= (((7) / ((1) + (function (){var G__37333 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37333) : state.call(null,G__37333));
})())) | (0)));
} else {
return and__21529__auto__;
}
})())){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((coinMod * ((7) / ((1) + (function (){var G__37334 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37334) : state.call(null,G__37334));
})()))) | (0)));
} else {
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));
}

if(cljs.core.not(opt)){
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))));
} else {
}

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(((((((coinMod + (1)) * clickers) + ((coinMod + (1)) * (churches * (15)))) + ((coinMod + (1)) * (shrines * (10)))) + ((coinMod + (1)) * (cathedrals * (20)))) + ((coinMod + (1)) * (patriarchates * (30)))) * event));

return orthodocljs.core.changeState((((((((coinMod + (1)) * clickers) + ((coinMod + (1)) * (shrines * (10)))) + ((coinMod + (1)) * (cathedrals * (20)))) + ((coinMod + (1)) * (patriarchates * (30)))) + ((coinMod + (1)) * churches)) * event),owner,(0));
});

orthodocljs.core.coinModInc.cljs$lang$maxFixedArity = (2);

orthodocljs.core.coinModInc.cljs$lang$applyTo = (function (seq37322){
var G__37323 = cljs.core.first(seq37322);
var seq37322__$1 = cljs.core.next(seq37322);
var G__37324 = cljs.core.first(seq37322__$1);
var seq37322__$2 = cljs.core.next(seq37322__$1);
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(G__37323,G__37324,seq37322__$2);
});

orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__37338 = state;
var map__37338__$1 = ((((!((map__37338 == null)))?((((map__37338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37338):map__37338);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37338__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37338__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__37340 = state;
var map__37340__$1 = ((((!((map__37340 == null)))?((((map__37340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37340):map__37340);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37340__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__37343 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__37344 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * event)));
var G__37345 = orthodocljs.core.changeState((genSec + (coinMod * event)),owner,(0));
var fexpr__37342 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__37342.cljs$core$IFn$_invoke$arity$3 ? fexpr__37342.cljs$core$IFn$_invoke$arity$3(G__37343,G__37344,G__37345) : fexpr__37342.call(null,G__37343,G__37344,G__37345));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__37346 = state;
var map__37346__$1 = ((((!((map__37346 == null)))?((((map__37346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37346):map__37346);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__37349 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__37350 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__37351 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__37348 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__37348.cljs$core$IFn$_invoke$arity$3 ? fexpr__37348.cljs$core$IFn$_invoke$arity$3(G__37349,G__37350,G__37351) : fexpr__37348.call(null,G__37349,G__37350,G__37351));
} else {
return null;
}
});
orthodocljs.core.shrineInc = (function orthodocljs$core$shrineInc(state,owner){
var map__37352 = state;
var map__37352__$1 = ((((!((map__37352 == null)))?((((map__37352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37352):map__37352);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,cljs.core.cst$kw$shrines);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,cljs.core.cst$kw$coins);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,cljs.core.cst$kw$genSec);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37352__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__37355 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__37356 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__37357 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__37354 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shrines,((1) + shrines));
return (fexpr__37354.cljs$core$IFn$_invoke$arity$3 ? fexpr__37354.cljs$core$IFn$_invoke$arity$3(G__37355,G__37356,G__37357) : fexpr__37354.call(null,G__37355,G__37356,G__37357));
} else {
return null;
}
});
orthodocljs.core.cathedralInc = (function orthodocljs$core$cathedralInc(state,owner){
var map__37358 = state;
var map__37358__$1 = ((((!((map__37358 == null)))?((((map__37358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37358):map__37358);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,cljs.core.cst$kw$cathedrals);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__37361 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__37362 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__37363 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__37360 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cathedrals,((1) + cathedrals));
return (fexpr__37360.cljs$core$IFn$_invoke$arity$3 ? fexpr__37360.cljs$core$IFn$_invoke$arity$3(G__37361,G__37362,G__37363) : fexpr__37360.call(null,G__37361,G__37362,G__37363));
} else {
return null;
}
});
orthodocljs.core.patriarchateInc = (function orthodocljs$core$patriarchateInc(state,owner){
var map__37364 = state;
var map__37364__$1 = ((((!((map__37364 == null)))?((((map__37364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37364):map__37364);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,cljs.core.cst$kw$patriarchates);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37364__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__37367 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__37368 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (30)) * event)));
var G__37369 = orthodocljs.core.changeState((genSec + ((coinMod * (30)) * event)),owner,(0));
var fexpr__37366 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarchates,((1) + patriarchates));
return (fexpr__37366.cljs$core$IFn$_invoke$arity$3 ? fexpr__37366.cljs$core$IFn$_invoke$arity$3(G__37367,G__37368,G__37369) : fexpr__37366.call(null,G__37367,G__37368,G__37369));
} else {
return null;
}
});
orthodocljs.core.ReligiousEventsInc = (function orthodocljs$core$ReligiousEventsInc(state,owner){
if(((function (){var G__37370 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37370) : state.call(null,G__37370));
})() >= (1750))){
var G__37372 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__37374 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37374) : state.call(null,G__37374));
})() - (1750)));
var G__37373 = orthodocljs.core.changeState((function (){var G__37375 = cljs.core.cst$kw$genSec;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37375) : state.call(null,G__37375));
})(),owner,(100));
var fexpr__37371 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$reLock,(0));
return (fexpr__37371.cljs$core$IFn$_invoke$arity$2 ? fexpr__37371.cljs$core$IFn$_invoke$arity$2(G__37372,G__37373) : fexpr__37371.call(null,G__37372,G__37373));
} else {
return null;
}
});
orthodocljs.core.pamphletsInc = (function orthodocljs$core$pamphletsInc(state,owner){
if(((function (){var G__37376 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37376) : state.call(null,G__37376));
})() >= (3500))){
var G__37379 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$pamphlets,((1) + (function (){var G__37381 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37381) : state.call(null,G__37381));
})()));
var G__37380 = (function (){var chance = cljs.core.rand_int((100));
if((chance <= (((50) / (((function (){var G__37382 = cljs.core.cst$kw$pamphlets;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37382) : state.call(null,G__37382));
})() + (1)) / (2))) | (0)))){
return orthodocljs.core.coinModInc.cljs$core$IFn$_invoke$arity$variadic(state,owner,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([true], 0));
} else {
return orthodocljs.core.atheistInc(state,owner);
}
})();
var fexpr__37378 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__37383 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__37383) : state.call(null,G__37383));
})() - (3500)));
return (fexpr__37378.cljs$core$IFn$_invoke$arity$2 ? fexpr__37378.cljs$core$IFn$_invoke$arity$2(G__37379,G__37380) : fexpr__37378.call(null,G__37379,G__37380));
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$cathedrals,cljs.core.cst$kw$shrines,cljs.core.cst$kw$pamphlets,cljs.core.cst$kw$churches,cljs.core.cst$kw$clickers,cljs.core.cst$kw$shop,cljs.core.cst$kw$coinMod,cljs.core.cst$kw$atheists,cljs.core.cst$kw$reLock,cljs.core.cst$kw$coins,cljs.core.cst$kw$religiousEvents,cljs.core.cst$kw$genSec,cljs.core.cst$kw$patriarchates,cljs.core.cst$kw$menu],[(0),(0),(0),(0),(0),"Prists",(1),(0),(10),(1500000),(1),(0),(0),"true"]));
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
var ver = (function (){var G__37385 = cljs.core.cst$kw$LocState;
var fexpr__37384 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__37384.cljs$core$IFn$_invoke$arity$1 ? fexpr__37384.cljs$core$IFn$_invoke$arity$1(G__37385) : fexpr__37384.call(null,G__37385));
})();
return (coins + ((function (){var G__37386 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37386) : ver.call(null,G__37386));
})() / (1)));
});})(pula))
);

var ver = (function (){var G__37388 = cljs.core.cst$kw$LocState;
var fexpr__37387 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__37387.cljs$core$IFn$_invoke$arity$1 ? fexpr__37387.cljs$core$IFn$_invoke$arity$1(G__37388) : fexpr__37387.call(null,G__37388));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37389 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37389) : ver.call(null,G__37389));
})(),(0)))){
var G__37391 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__37396 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37396) : ver.call(null,G__37396));
})()], 0));
var G__37392 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__37397 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37397) : ver.call(null,G__37397));
})()], 0));
var G__37393 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37399 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37399) : ver.call(null,G__37399));
})(),(0))))?(function (){var G__37403 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__37405 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37405) : ver.call(null,G__37405));
})() * (2)));
var G__37404 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__37402 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__37406 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37406) : ver.call(null,G__37406));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__37407 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37407) : ver.call(null,G__37407));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__37402.cljs$core$IFn$_invoke$arity$2 ? fexpr__37402.cljs$core$IFn$_invoke$arity$2(G__37403,G__37404) : fexpr__37402.call(null,G__37403,G__37404));
})():null);
var G__37394 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37408 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37408) : ver.call(null,G__37408));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__37409 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37409) : ver.call(null,G__37409));
})(),cljs.core.cst$kw$live,((function (){var G__37410 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37410) : ver.call(null,G__37410));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__37395 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37411 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37411) : ver.call(null,G__37411));
})(),(1)))?(function (){var G__37414 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__37416 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37416) : ver.call(null,G__37416));
})() / (2)));
var G__37415 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__37413 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__37417 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__37417) : ver.call(null,G__37417));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__37413.cljs$core$IFn$_invoke$arity$2 ? fexpr__37413.cljs$core$IFn$_invoke$arity$2(G__37414,G__37415) : fexpr__37413.call(null,G__37414,G__37415));
})():null);
var fexpr__37390 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__37390.cljs$core$IFn$_invoke$arity$5 ? fexpr__37390.cljs$core$IFn$_invoke$arity$5(G__37391,G__37392,G__37393,G__37394,G__37395) : fexpr__37390.call(null,G__37391,G__37392,G__37393,G__37394,G__37395));
} else {
return null;
}
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core37418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core37418 = (function (state,owner,meta37419){
this.state = state;
this.owner = owner;
this.meta37419 = meta37419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core37418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37420,meta37419__$1){
var self__ = this;
var _37420__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core37418(self__.state,self__.owner,meta37419__$1));
});

orthodocljs.core.t_orthodocljs$core37418.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37420){
var self__ = this;
var _37420__$1 = this;
return self__.meta37419;
});

orthodocljs.core.t_orthodocljs$core37418.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core37418.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core37418.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core37418.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__37421 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__37422 = (1000);
return setInterval(G__37421,G__37422);
});

orthodocljs.core.t_orthodocljs$core37418.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core37418.prototype.om$core$IRender$render$arity$1 = (function (this$){
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__37423 = self__.state;
var map__37423__$1 = ((((!((map__37423 == null)))?((((map__37423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37423):map__37423);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37423__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__37425 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37425) : self__.state.call(null,G__37425));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Here you have your army:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__37426 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37426) : self__.state.call(null,G__37426));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__37427 = cljs.core.cst$kw$churches;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37427) : self__.state.call(null,G__37427));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__37428 = cljs.core.cst$kw$shrines;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37428) : self__.state.call(null,G__37428));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__37429 = cljs.core.cst$kw$cathedrals;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37429) : self__.state.call(null,G__37429));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__37430 = cljs.core.cst$kw$patriarchates;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37430) : self__.state.call(null,G__37430));
})()], 0))], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists(self__.state);
});})(map__37423,map__37423__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild(self__.state);
});})(map__37423,map__37423__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayExtras(self__.state);
});})(map__37423,map__37423__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37431 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37431) : self__.state.call(null,G__37431));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__37432 = self__.state;
var map__37432__$1 = ((((!((map__37432 == null)))?((((map__37432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37432):map__37432);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37432__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: 150"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37434 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37434) : self__.state.call(null,G__37434));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.shrineInc(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.cathedralInc(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.patriarchateInc(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: 3500"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37435 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37435) : self__.state.call(null,G__37435));
})(),"Extras"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__37436 = cljs.core.cst$kw$reLock;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__37436) : self__.state.call(null,G__37436));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ReligiousEventsInc(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0))], 0)):null)], 0)):om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__37423,map__37423__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.pamphletsInc(self__.state,self__.owner);
});})(map__37423,map__37423__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Send pamphlets: 3500"], 0))], 0)))], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core37418.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta37419], null);
});

orthodocljs.core.t_orthodocljs$core37418.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core37418.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core37418";

orthodocljs.core.t_orthodocljs$core37418.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core37418");
});

orthodocljs.core.__GT_t_orthodocljs$core37418 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core37418(state__$1,owner__$1,meta37419){
return (new orthodocljs.core.t_orthodocljs$core37418(state__$1,owner__$1,meta37419));
});

}

return (new orthodocljs.core.t_orthodocljs$core37418(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
