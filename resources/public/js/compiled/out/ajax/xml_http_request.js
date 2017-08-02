// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__31368 = e.target.readyState;
var fexpr__31367 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__31367.cljs$core$IFn$_invoke$arity$1 ? fexpr__31367.cljs$core$IFn$_invoke$arity$1(G__31368) : fexpr__31367.call(null,G__31368));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31370,handler){
var map__31371 = p__31370;
var map__31371__$1 = ((((!((map__31371 == null)))?((((map__31371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31371.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31371):map__31371);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31371__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31371__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31371__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31371,map__31371__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31369_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__31369_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__31371,map__31371__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31383 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31383)){
var response_type_31384 = temp__4657__auto___31383;
this$__$1.responseType = cljs.core.name(response_type_31384);
} else {
}

var seq__31373_31385 = cljs.core.seq(headers);
var chunk__31374_31386 = null;
var count__31375_31387 = (0);
var i__31376_31388 = (0);
while(true){
if((i__31376_31388 < count__31375_31387)){
var vec__31377_31389 = chunk__31374_31386.cljs$core$IIndexed$_nth$arity$2(null,i__31376_31388);
var k_31390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31377_31389,(0),null);
var v_31391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31377_31389,(1),null);
this$__$1.setRequestHeader(k_31390,v_31391);

var G__31392 = seq__31373_31385;
var G__31393 = chunk__31374_31386;
var G__31394 = count__31375_31387;
var G__31395 = (i__31376_31388 + (1));
seq__31373_31385 = G__31392;
chunk__31374_31386 = G__31393;
count__31375_31387 = G__31394;
i__31376_31388 = G__31395;
continue;
} else {
var temp__4657__auto___31396 = cljs.core.seq(seq__31373_31385);
if(temp__4657__auto___31396){
var seq__31373_31397__$1 = temp__4657__auto___31396;
if(cljs.core.chunked_seq_QMARK_(seq__31373_31397__$1)){
var c__22382__auto___31398 = cljs.core.chunk_first(seq__31373_31397__$1);
var G__31399 = cljs.core.chunk_rest(seq__31373_31397__$1);
var G__31400 = c__22382__auto___31398;
var G__31401 = cljs.core.count(c__22382__auto___31398);
var G__31402 = (0);
seq__31373_31385 = G__31399;
chunk__31374_31386 = G__31400;
count__31375_31387 = G__31401;
i__31376_31388 = G__31402;
continue;
} else {
var vec__31380_31403 = cljs.core.first(seq__31373_31397__$1);
var k_31404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31380_31403,(0),null);
var v_31405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31380_31403,(1),null);
this$__$1.setRequestHeader(k_31404,v_31405);

var G__31406 = cljs.core.next(seq__31373_31397__$1);
var G__31407 = null;
var G__31408 = (0);
var G__31409 = (0);
seq__31373_31385 = G__31406;
chunk__31374_31386 = G__31407;
count__31375_31387 = G__31408;
i__31376_31388 = G__31409;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__21548__auto__ = body;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
