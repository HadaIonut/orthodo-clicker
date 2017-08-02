// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51350){
var map__51351 = p__51350;
var map__51351__$1 = ((((!((map__51351 == null)))?((((map__51351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51351.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51351):map__51351);
var m = map__51351__$1;
var n = cljs.core.get.call(null,map__51351__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__51351__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51353_51375 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51354_51376 = null;
var count__51355_51377 = (0);
var i__51356_51378 = (0);
while(true){
if((i__51356_51378 < count__51355_51377)){
var f_51379 = cljs.core._nth.call(null,chunk__51354_51376,i__51356_51378);
cljs.core.println.call(null,"  ",f_51379);

var G__51380 = seq__51353_51375;
var G__51381 = chunk__51354_51376;
var G__51382 = count__51355_51377;
var G__51383 = (i__51356_51378 + (1));
seq__51353_51375 = G__51380;
chunk__51354_51376 = G__51381;
count__51355_51377 = G__51382;
i__51356_51378 = G__51383;
continue;
} else {
var temp__4657__auto___51384 = cljs.core.seq.call(null,seq__51353_51375);
if(temp__4657__auto___51384){
var seq__51353_51385__$1 = temp__4657__auto___51384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51353_51385__$1)){
var c__40884__auto___51386 = cljs.core.chunk_first.call(null,seq__51353_51385__$1);
var G__51387 = cljs.core.chunk_rest.call(null,seq__51353_51385__$1);
var G__51388 = c__40884__auto___51386;
var G__51389 = cljs.core.count.call(null,c__40884__auto___51386);
var G__51390 = (0);
seq__51353_51375 = G__51387;
chunk__51354_51376 = G__51388;
count__51355_51377 = G__51389;
i__51356_51378 = G__51390;
continue;
} else {
var f_51391 = cljs.core.first.call(null,seq__51353_51385__$1);
cljs.core.println.call(null,"  ",f_51391);

var G__51392 = cljs.core.next.call(null,seq__51353_51385__$1);
var G__51393 = null;
var G__51394 = (0);
var G__51395 = (0);
seq__51353_51375 = G__51392;
chunk__51354_51376 = G__51393;
count__51355_51377 = G__51394;
i__51356_51378 = G__51395;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51396 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__40050__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__40050__auto__)){
return or__40050__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_51396);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_51396)))?cljs.core.second.call(null,arglists_51396):arglists_51396));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51357_51397 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51358_51398 = null;
var count__51359_51399 = (0);
var i__51360_51400 = (0);
while(true){
if((i__51360_51400 < count__51359_51399)){
var vec__51361_51401 = cljs.core._nth.call(null,chunk__51358_51398,i__51360_51400);
var name_51402 = cljs.core.nth.call(null,vec__51361_51401,(0),null);
var map__51364_51403 = cljs.core.nth.call(null,vec__51361_51401,(1),null);
var map__51364_51404__$1 = ((((!((map__51364_51403 == null)))?((((map__51364_51403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51364_51403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51364_51403):map__51364_51403);
var doc_51405 = cljs.core.get.call(null,map__51364_51404__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51406 = cljs.core.get.call(null,map__51364_51404__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51402);

cljs.core.println.call(null," ",arglists_51406);

if(cljs.core.truth_(doc_51405)){
cljs.core.println.call(null," ",doc_51405);
} else {
}

var G__51407 = seq__51357_51397;
var G__51408 = chunk__51358_51398;
var G__51409 = count__51359_51399;
var G__51410 = (i__51360_51400 + (1));
seq__51357_51397 = G__51407;
chunk__51358_51398 = G__51408;
count__51359_51399 = G__51409;
i__51360_51400 = G__51410;
continue;
} else {
var temp__4657__auto___51411 = cljs.core.seq.call(null,seq__51357_51397);
if(temp__4657__auto___51411){
var seq__51357_51412__$1 = temp__4657__auto___51411;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51357_51412__$1)){
var c__40884__auto___51413 = cljs.core.chunk_first.call(null,seq__51357_51412__$1);
var G__51414 = cljs.core.chunk_rest.call(null,seq__51357_51412__$1);
var G__51415 = c__40884__auto___51413;
var G__51416 = cljs.core.count.call(null,c__40884__auto___51413);
var G__51417 = (0);
seq__51357_51397 = G__51414;
chunk__51358_51398 = G__51415;
count__51359_51399 = G__51416;
i__51360_51400 = G__51417;
continue;
} else {
var vec__51366_51418 = cljs.core.first.call(null,seq__51357_51412__$1);
var name_51419 = cljs.core.nth.call(null,vec__51366_51418,(0),null);
var map__51369_51420 = cljs.core.nth.call(null,vec__51366_51418,(1),null);
var map__51369_51421__$1 = ((((!((map__51369_51420 == null)))?((((map__51369_51420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51369_51420.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51369_51420):map__51369_51420);
var doc_51422 = cljs.core.get.call(null,map__51369_51421__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51423 = cljs.core.get.call(null,map__51369_51421__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_51419);

cljs.core.println.call(null," ",arglists_51423);

if(cljs.core.truth_(doc_51422)){
cljs.core.println.call(null," ",doc_51422);
} else {
}

var G__51424 = cljs.core.next.call(null,seq__51357_51412__$1);
var G__51425 = null;
var G__51426 = (0);
var G__51427 = (0);
seq__51357_51397 = G__51424;
chunk__51358_51398 = G__51425;
count__51359_51399 = G__51426;
i__51360_51400 = G__51427;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__51371 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51372 = null;
var count__51373 = (0);
var i__51374 = (0);
while(true){
if((i__51374 < count__51373)){
var role = cljs.core._nth.call(null,chunk__51372,i__51374);
var temp__4657__auto___51428__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51428__$1)){
var spec_51429 = temp__4657__auto___51428__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_51429));
} else {
}

var G__51430 = seq__51371;
var G__51431 = chunk__51372;
var G__51432 = count__51373;
var G__51433 = (i__51374 + (1));
seq__51371 = G__51430;
chunk__51372 = G__51431;
count__51373 = G__51432;
i__51374 = G__51433;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__51371);
if(temp__4657__auto____$1){
var seq__51371__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51371__$1)){
var c__40884__auto__ = cljs.core.chunk_first.call(null,seq__51371__$1);
var G__51434 = cljs.core.chunk_rest.call(null,seq__51371__$1);
var G__51435 = c__40884__auto__;
var G__51436 = cljs.core.count.call(null,c__40884__auto__);
var G__51437 = (0);
seq__51371 = G__51434;
chunk__51372 = G__51435;
count__51373 = G__51436;
i__51374 = G__51437;
continue;
} else {
var role = cljs.core.first.call(null,seq__51371__$1);
var temp__4657__auto___51438__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___51438__$2)){
var spec_51439 = temp__4657__auto___51438__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_51439));
} else {
}

var G__51440 = cljs.core.next.call(null,seq__51371__$1);
var G__51441 = null;
var G__51442 = (0);
var G__51443 = (0);
seq__51371 = G__51440;
chunk__51372 = G__51441;
count__51373 = G__51442;
i__51374 = G__51443;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1501581675605
