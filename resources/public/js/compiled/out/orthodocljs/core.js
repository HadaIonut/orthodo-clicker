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
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,(function (){var G__43245 = cljs.core.cst$kw$live;
var fexpr__43244 = (function (){var G__43247 = cljs.core.cst$kw$LocState;
var fexpr__43246 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__43246.cljs$core$IFn$_invoke$arity$1 ? fexpr__43246.cljs$core$IFn$_invoke$arity$1(G__43247) : fexpr__43246.call(null,G__43247));
})();
return (fexpr__43244.cljs$core$IFn$_invoke$arity$1 ? fexpr__43244.cljs$core$IFn$_invoke$arity$1(G__43245) : fexpr__43244.call(null,G__43245));
})(),cljs.core.cst$kw$trigger,(function (){var G__43251 = cljs.core.cst$kw$trigger;
var fexpr__43250 = (function (){var G__43253 = cljs.core.cst$kw$LocState;
var fexpr__43252 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__43252.cljs$core$IFn$_invoke$arity$1 ? fexpr__43252.cljs$core$IFn$_invoke$arity$1(G__43253) : fexpr__43252.call(null,G__43253));
})();
return (fexpr__43250.cljs$core$IFn$_invoke$arity$1 ? fexpr__43250.cljs$core$IFn$_invoke$arity$1(G__43251) : fexpr__43250.call(null,G__43251));
})()], null));
} else {
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,in$,cljs.core.cst$kw$live,live,cljs.core.cst$kw$trigger,(function (){var G__43257 = cljs.core.cst$kw$trigger;
var fexpr__43256 = (function (){var G__43259 = cljs.core.cst$kw$LocState;
var fexpr__43258 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__43258.cljs$core$IFn$_invoke$arity$1 ? fexpr__43258.cljs$core$IFn$_invoke$arity$1(G__43259) : fexpr__43258.call(null,G__43259));
})();
return (fexpr__43256.cljs$core$IFn$_invoke$arity$1 ? fexpr__43256.cljs$core$IFn$_invoke$arity$1(G__43257) : fexpr__43256.call(null,G__43257));
})()], null));
}
});
orthodocljs.core.handler = (function orthodocljs$core$handler(response){
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
});
orthodocljs.core.error_handler = (function orthodocljs$core$error_handler(p__43260){
var map__43261 = p__43260;
var map__43261__$1 = ((((!((map__43261 == null)))?((((map__43261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43261):map__43261);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43261__$1,cljs.core.cst$kw$status);
var status_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43261__$1,cljs.core.cst$kw$status_DASH_text);
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
orthodocljs.core.add = (function orthodocljs$core$add(state){
var map__43263 = state;
var map__43263__$1 = ((((!((map__43263 == null)))?((((map__43263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43263):map__43263);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43263__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43263__$1,cljs.core.cst$kw$coinMod);
return (coinMod + coins);
});
orthodocljs.core.stateMenu = (function orthodocljs$core$stateMenu(state){
var map__43265 = state;
var map__43265__$1 = ((((!((map__43265 == null)))?((((map__43265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43265.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43265):map__43265);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43265__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/false/,"true");
});
orthodocljs.core.stateShop = (function orthodocljs$core$stateShop(state){
var map__43267 = state;
var map__43267__$1 = ((((!((map__43267 == null)))?((((map__43267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43267.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43267):map__43267);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43267__$1,cljs.core.cst$kw$menu);
return clojure.string.replace(menu,/true/,"false");
});
orthodocljs.core.coinModInc = (function orthodocljs$core$coinModInc(state,owner){
var map__43269 = state;
var map__43269__$1 = ((((!((map__43269 == null)))?((((map__43269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43269.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43269):map__43269);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$genSec);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$patriarchates);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$cathedrals);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$shrines);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$churches);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$clickers);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$coinMod);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$religiousEvents);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43269__$1,cljs.core.cst$kw$coins);
om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coinMod,((1) + coinMod));

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - ((100) + (coinMod * ((50) * coinMod)))));

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(((((((coinMod + (1)) * clickers) + ((coinMod + (1)) * (churches * (15)))) + ((coinMod + (1)) * (shrines * (10)))) + ((coinMod + (1)) * (cathedrals * (20)))) + ((coinMod + (1)) * (patriarchates * (30)))) * event));

return orthodocljs.core.changeState((((((((coinMod + (1)) * clickers) + ((coinMod + (1)) * (shrines * (10)))) + ((coinMod + (1)) * (cathedrals * (20)))) + ((coinMod + (1)) * (patriarchates * (30)))) + ((coinMod + (1)) * churches)) * event),owner,(0));
});
orthodocljs.core.clickUPG = (function orthodocljs$core$clickUPG(state,owner){
var map__43271 = state;
var map__43271__$1 = ((((!((map__43271 == null)))?((((map__43271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43271.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43271):map__43271);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43271__$1,cljs.core.cst$kw$coinMod);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43271__$1,cljs.core.cst$kw$coins);
if((coins >= ((100) + (coinMod * ((50) * coinMod))))){
return orthodocljs.core.coinModInc(state,owner);
} else {
return null;
}
});
orthodocljs.core.clickerInc = (function orthodocljs$core$clickerInc(state,owner){
var map__43273 = state;
var map__43273__$1 = ((((!((map__43273 == null)))?((((map__43273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43273):map__43273);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43273__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43273__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43273__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43273__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43273__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43273__$1,cljs.core.cst$kw$genSec);
if((coins >= (150))){
var G__43276 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (150)));
var G__43277 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + (coinMod * event)));
var G__43278 = orthodocljs.core.changeState((genSec + (coinMod * event)),owner,(0));
var fexpr__43275 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$clickers,((1) + clickers));
return (fexpr__43275.cljs$core$IFn$_invoke$arity$3 ? fexpr__43275.cljs$core$IFn$_invoke$arity$3(G__43276,G__43277,G__43278) : fexpr__43275.call(null,G__43276,G__43277,G__43278));
} else {
return null;
}
});
orthodocljs.core.churchesInc = (function orthodocljs$core$churchesInc(state,owner){
var map__43279 = state;
var map__43279__$1 = ((((!((map__43279 == null)))?((((map__43279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43279.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43279):map__43279);
var clickers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,cljs.core.cst$kw$clickers);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,cljs.core.cst$kw$coins);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,cljs.core.cst$kw$coinMod);
var churches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,cljs.core.cst$kw$churches);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43279__$1,cljs.core.cst$kw$genSec);
if((coins >= (3500))){
var G__43282 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__43283 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (15)) * event)));
var G__43284 = orthodocljs.core.changeState((genSec + ((coinMod * (15)) * event)),owner,(0));
var fexpr__43281 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$churches,((1) + churches));
return (fexpr__43281.cljs$core$IFn$_invoke$arity$3 ? fexpr__43281.cljs$core$IFn$_invoke$arity$3(G__43282,G__43283,G__43284) : fexpr__43281.call(null,G__43282,G__43283,G__43284));
} else {
return null;
}
});
orthodocljs.core.shrineInc = (function orthodocljs$core$shrineInc(state,owner){
var map__43285 = state;
var map__43285__$1 = ((((!((map__43285 == null)))?((((map__43285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43285):map__43285);
var shrines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,cljs.core.cst$kw$shrines);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,cljs.core.cst$kw$coins);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,cljs.core.cst$kw$religiousEvents);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,cljs.core.cst$kw$genSec);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43285__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__43288 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__43289 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (10)) * event)));
var G__43290 = orthodocljs.core.changeState((genSec + ((coinMod * (10)) * event)),owner,(0));
var fexpr__43287 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$shrines,((1) + shrines));
return (fexpr__43287.cljs$core$IFn$_invoke$arity$3 ? fexpr__43287.cljs$core$IFn$_invoke$arity$3(G__43288,G__43289,G__43290) : fexpr__43287.call(null,G__43288,G__43289,G__43290));
} else {
return null;
}
});
orthodocljs.core.cathedralInc = (function orthodocljs$core$cathedralInc(state,owner){
var map__43291 = state;
var map__43291__$1 = ((((!((map__43291 == null)))?((((map__43291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43291):map__43291);
var cathedrals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291__$1,cljs.core.cst$kw$cathedrals);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43291__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__43294 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__43295 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (20)) * event)));
var G__43296 = orthodocljs.core.changeState((genSec + ((coinMod * (20)) * event)),owner,(0));
var fexpr__43293 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cathedrals,((1) + cathedrals));
return (fexpr__43293.cljs$core$IFn$_invoke$arity$3 ? fexpr__43293.cljs$core$IFn$_invoke$arity$3(G__43294,G__43295,G__43296) : fexpr__43293.call(null,G__43294,G__43295,G__43296));
} else {
return null;
}
});
orthodocljs.core.patriarchateInc = (function orthodocljs$core$patriarchateInc(state,owner){
var map__43297 = state;
var map__43297__$1 = ((((!((map__43297 == null)))?((((map__43297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43297):map__43297);
var patriarchates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,cljs.core.cst$kw$patriarchates);
var coins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,cljs.core.cst$kw$coins);
var genSec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,cljs.core.cst$kw$genSec);
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,cljs.core.cst$kw$religiousEvents);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43297__$1,cljs.core.cst$kw$coinMod);
if((coins >= (3500))){
var G__43300 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,(coins - (3500)));
var G__43301 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,(genSec + ((coinMod * (30)) * event)));
var G__43302 = orthodocljs.core.changeState((genSec + ((coinMod * (30)) * event)),owner,(0));
var fexpr__43299 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$patriarchates,((1) + patriarchates));
return (fexpr__43299.cljs$core$IFn$_invoke$arity$3 ? fexpr__43299.cljs$core$IFn$_invoke$arity$3(G__43300,G__43301,G__43302) : fexpr__43299.call(null,G__43300,G__43301,G__43302));
} else {
return null;
}
});
orthodocljs.core.ReligiousEventsInc = (function orthodocljs$core$ReligiousEventsInc(state,owner){
if(((function (){var G__43303 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43303) : state.call(null,G__43303));
})() >= (1750))){
var G__43305 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$coins,((function (){var G__43307 = cljs.core.cst$kw$coins;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43307) : state.call(null,G__43307));
})() - (1750)));
var G__43306 = orthodocljs.core.changeState((function (){var G__43308 = cljs.core.cst$kw$genSec;
return (state.cljs$core$IFn$_invoke$arity$1 ? state.cljs$core$IFn$_invoke$arity$1(G__43308) : state.call(null,G__43308));
})(),owner,(100));
var fexpr__43304 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$reLock,(0));
return (fexpr__43304.cljs$core$IFn$_invoke$arity$2 ? fexpr__43304.cljs$core$IFn$_invoke$arity$2(G__43305,G__43306) : fexpr__43304.call(null,G__43305,G__43306));
} else {
return null;
}
});
if(typeof orthodocljs.core.app_state !== 'undefined'){
} else {
orthodocljs.core.app_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$cathedrals,cljs.core.cst$kw$shrines,cljs.core.cst$kw$churches,cljs.core.cst$kw$clickers,cljs.core.cst$kw$shop,cljs.core.cst$kw$coinMod,cljs.core.cst$kw$reLock,cljs.core.cst$kw$coins,cljs.core.cst$kw$religiousEvents,cljs.core.cst$kw$genSec,cljs.core.cst$kw$patriarchates,cljs.core.cst$kw$menu],[(0),(0),(0),(0),"Prists",(1),(10),(15000),(1),(0),(0),"true"]));
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
var ver = (function (){var G__43310 = cljs.core.cst$kw$LocState;
var fexpr__43309 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__43309.cljs$core$IFn$_invoke$arity$1 ? fexpr__43309.cljs$core$IFn$_invoke$arity$1(G__43310) : fexpr__43309.call(null,G__43310));
})();
return (coins + ((function (){var G__43311 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43311) : ver.call(null,G__43311));
})() / (1)));
});})(pula))
);

var ver = (function (){var G__43313 = cljs.core.cst$kw$LocState;
var fexpr__43312 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (fexpr__43312.cljs$core$IFn$_invoke$arity$1 ? fexpr__43312.cljs$core$IFn$_invoke$arity$1(G__43313) : fexpr__43312.call(null,G__43313));
})();
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43314 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43314) : ver.call(null,G__43314));
})(),(0)))){
var G__43316 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43321 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43321) : ver.call(null,G__43321));
})()], 0));
var G__43317 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__43322 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43322) : ver.call(null,G__43322));
})()], 0));
var G__43318 = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pula,(5))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43324 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43324) : ver.call(null,G__43324));
})(),(0))))?(function (){var G__43328 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__43330 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43330) : ver.call(null,G__43330));
})() * (2)));
var G__43329 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(2));
var fexpr__43327 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__43331 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43331) : ver.call(null,G__43331));
})() * (2)),cljs.core.cst$kw$live,(function (){var G__43332 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43332) : ver.call(null,G__43332));
})(),cljs.core.cst$kw$trigger,(1)], null));
return (fexpr__43327.cljs$core$IFn$_invoke$arity$2 ? fexpr__43327.cljs$core$IFn$_invoke$arity$2(G__43328,G__43329) : fexpr__43327.call(null,G__43328,G__43329));
})():null);
var G__43319 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43333 = cljs.core.cst$kw$trigger;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43333) : ver.call(null,G__43333));
})(),(1)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(function (){var G__43334 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43334) : ver.call(null,G__43334));
})(),cljs.core.cst$kw$live,((function (){var G__43335 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43335) : ver.call(null,G__43335));
})() - (1)),cljs.core.cst$kw$trigger,(1)], null)):null);
var G__43320 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43336 = cljs.core.cst$kw$live;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43336) : ver.call(null,G__43336));
})(),(1)))?(function (){var G__43339 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$genSec,((function (){var G__43341 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43341) : ver.call(null,G__43341));
})() / (2)));
var G__43340 = om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$religiousEvents,(1));
var fexpr__43338 = om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,((function (){var G__43342 = cljs.core.cst$kw$genSec;
return (ver.cljs$core$IFn$_invoke$arity$1 ? ver.cljs$core$IFn$_invoke$arity$1(G__43342) : ver.call(null,G__43342));
})() / (2)),cljs.core.cst$kw$live,(100),cljs.core.cst$kw$trigger,(0)], null));
return (fexpr__43338.cljs$core$IFn$_invoke$arity$2 ? fexpr__43338.cljs$core$IFn$_invoke$arity$2(G__43339,G__43340) : fexpr__43338.call(null,G__43339,G__43340));
})():null);
var fexpr__43315 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pula], 0));
return (fexpr__43315.cljs$core$IFn$_invoke$arity$5 ? fexpr__43315.cljs$core$IFn$_invoke$arity$5(G__43316,G__43317,G__43318,G__43319,G__43320) : fexpr__43315.call(null,G__43316,G__43317,G__43318,G__43319,G__43320));
} else {
return null;
}
});
orthodocljs.core.root_comp = (function orthodocljs$core$root_comp(state,owner){
if(typeof orthodocljs.core.t_orthodocljs$core43343 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
orthodocljs.core.t_orthodocljs$core43343 = (function (state,owner,meta43344){
this.state = state;
this.owner = owner;
this.meta43344 = meta43344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
orthodocljs.core.t_orthodocljs$core43343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43345,meta43344__$1){
var self__ = this;
var _43345__$1 = this;
return (new orthodocljs.core.t_orthodocljs$core43343(self__.state,self__.owner,meta43344__$1));
});

orthodocljs.core.t_orthodocljs$core43343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43345){
var self__ = this;
var _43345__$1 = this;
return self__.meta43344;
});

orthodocljs.core.t_orthodocljs$core43343.prototype.om$core$IInitState$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core43343.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$LocState,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$genSec,(0),cljs.core.cst$kw$live,(0),cljs.core.cst$kw$trigger,(0)], null)], null);
});

orthodocljs.core.t_orthodocljs$core43343.prototype.om$core$IWillMount$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core43343.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__43346 = ((function (this$__$1){
return (function (){
return orthodocljs.core.periodicly(self__.state,self__.owner);
});})(this$__$1))
;
var G__43347 = (1000);
return setInterval(G__43346,G__43347);
});

orthodocljs.core.t_orthodocljs$core43343.prototype.om$core$IRender$ = cljs.core.PROTOCOL_SENTINEL;

orthodocljs.core.t_orthodocljs$core43343.prototype.om$core$IRender$render$arity$1 = (function (this$){
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
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Shop"], 0))], 0)),(function (){var map__43348 = self__.state;
var map__43348__$1 = ((((!((map__43348 == null)))?((((map__43348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43348):map__43348);
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43348__$1,cljs.core.cst$kw$menu);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(menu,"true")){
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Increase people's belief power\n                             to get more money!"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["This is their belief power now: ",(function (){var G__43350 = cljs.core.cst$kw$coinMod;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43350) : self__.state.call(null,G__43350));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Here you have your army:"], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "MenuText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "img"})),"Priests ",(function (){var G__43351 = cljs.core.cst$kw$clickers;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43351) : self__.state.call(null,G__43351));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "img"})),"Churches ",(function (){var G__43352 = cljs.core.cst$kw$churches;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43352) : self__.state.call(null,G__43352));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "img"})),"Shrines ",(function (){var G__43353 = cljs.core.cst$kw$shrines;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43353) : self__.state.call(null,G__43353));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "img"})),"Cathedrals ",(function (){var G__43354 = cljs.core.cst$kw$cathedrals;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43354) : self__.state.call(null,G__43354));
})()], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "construction"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "img"})),"Patriarchates ",(function (){var G__43355 = cljs.core.cst$kw$patriarchates;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43355) : self__.state.call(null,G__43355));
})()], 0))], 0))], 0));
} else {
return om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-2"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayPrists(self__.state);
});})(map__43348,map__43348__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Priests"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayBuild(self__.state);
});})(map__43348,map__43348__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Buildings"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"type": "button", "className": "btn btn-default\n                                             btnColor ShopText2", "onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.displayExtras(self__.state);
});})(map__43348,map__43348__$1,menu,this$__$1))
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Extras"], 0))], 0))], 0)),om.dom.div(({"className": "col-md-2"})),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(({"className": "col-md-4"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43356 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43356) : self__.state.call(null,G__43356));
})(),"Prists"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickUPG(self__.state,self__.owner);
});})(map__43348,map__43348__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Upgrade Belief Power: ",(function (){var map__43357 = self__.state;
var map__43357__$1 = ((((!((map__43357 == null)))?((((map__43357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43357):map__43357);
var coinMod = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43357__$1,cljs.core.cst$kw$coinMod);
return ((100) + (coinMod * ((50) * coinMod)));
})()], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.clickerInc(self__.state,self__.owner);
});})(map__43348,map__43348__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Prist.png", "className": "imgShop"})),"Buy Priests: 150"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43359 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43359) : self__.state.call(null,G__43359));
})(),"Buildings"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.churchesInc(self__.state,self__.owner);
});})(map__43348,map__43348__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Church.png", "className": "imgShop2"})),"Buy Churches: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.shrineInc(self__.state,self__.owner);
});})(map__43348,map__43348__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Shrine.png", "className": "imgShop2"})),"Buy Shrines: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.cathedralInc(self__.state,self__.owner);
});})(map__43348,map__43348__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Cathedral.png", "className": "imgShop2"})),"Buy Cathedrals: 3500"], 0))], 0)),om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.patriarchateInc(self__.state,self__.owner);
});})(map__43348,map__43348__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.img(({"src": "/img/Patriarchate.png", "className": "imgShop2"})),"Buy Patriarchate: 3500"], 0))], 0))], 0)):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43360 = cljs.core.cst$kw$shop;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43360) : self__.state.call(null,G__43360));
})(),"Extras"))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__43361 = cljs.core.cst$kw$reLock;
return (self__.state.cljs$core$IFn$_invoke$arity$1 ? self__.state.cljs$core$IFn$_invoke$arity$1(G__43361) : self__.state.call(null,G__43361));
})(),(10)))?om.dom.div.cljs$core$IFn$_invoke$arity$variadic(null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([om.dom.button.cljs$core$IFn$_invoke$arity$variadic(({"onClick": ((function (map__43348,map__43348__$1,menu,this$__$1){
return (function (e){
return orthodocljs.core.ReligiousEventsInc(self__.state,self__.owner);
});})(map__43348,map__43348__$1,menu,this$__$1))
, "className": "buy ShopText"}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Add Religious events: 1750"], 0))], 0)):null)], 0)):null)], 0))], 0));
}
})()], 0))], 0));
});

orthodocljs.core.t_orthodocljs$core43343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$state,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta43344], null);
});

orthodocljs.core.t_orthodocljs$core43343.cljs$lang$type = true;

orthodocljs.core.t_orthodocljs$core43343.cljs$lang$ctorStr = "orthodocljs.core/t_orthodocljs$core43343";

orthodocljs.core.t_orthodocljs$core43343.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"orthodocljs.core/t_orthodocljs$core43343");
});

orthodocljs.core.__GT_t_orthodocljs$core43343 = (function orthodocljs$core$root_comp_$___GT_t_orthodocljs$core43343(state__$1,owner__$1,meta43344){
return (new orthodocljs.core.t_orthodocljs$core43343(state__$1,owner__$1,meta43344));
});

}

return (new orthodocljs.core.t_orthodocljs$core43343(state,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root(orthodocljs.core.root_comp,orthodocljs.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("Coins")], null));
