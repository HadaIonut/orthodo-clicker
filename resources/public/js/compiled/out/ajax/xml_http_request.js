// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__27015 = e.target.readyState;
var fexpr__27014 = new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null);
return (fexpr__27014.cljs$core$IFn$_invoke$arity$1 ? fexpr__27014.cljs$core$IFn$_invoke$arity$1(G__27015) : fexpr__27014.call(null,G__27015));
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("@pupeno/xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27017,handler){
var map__27018 = p__27017;
var map__27018__$1 = ((((!((map__27018 == null)))?((((map__27018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27018.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27018):map__27018);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27018__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27018__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27018__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27018__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27018__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27018__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27018__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__27018,map__27018__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27016_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__27016_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__27018,map__27018__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___27030 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___27030)){
var response_type_27031 = temp__4657__auto___27030;
this$__$1.responseType = cljs.core.name(response_type_27031);
} else {
}

var seq__27020_27032 = cljs.core.seq(headers);
var chunk__27021_27033 = null;
var count__27022_27034 = (0);
var i__27023_27035 = (0);
while(true){
if((i__27023_27035 < count__27022_27034)){
var vec__27024_27036 = chunk__27021_27033.cljs$core$IIndexed$_nth$arity$2(null,i__27023_27035);
var k_27037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27024_27036,(0),null);
var v_27038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27024_27036,(1),null);
this$__$1.setRequestHeader(k_27037,v_27038);

var G__27039 = seq__27020_27032;
var G__27040 = chunk__27021_27033;
var G__27041 = count__27022_27034;
var G__27042 = (i__27023_27035 + (1));
seq__27020_27032 = G__27039;
chunk__27021_27033 = G__27040;
count__27022_27034 = G__27041;
i__27023_27035 = G__27042;
continue;
} else {
var temp__4657__auto___27043 = cljs.core.seq(seq__27020_27032);
if(temp__4657__auto___27043){
var seq__27020_27044__$1 = temp__4657__auto___27043;
if(cljs.core.chunked_seq_QMARK_(seq__27020_27044__$1)){
var c__22375__auto___27045 = cljs.core.chunk_first(seq__27020_27044__$1);
var G__27046 = cljs.core.chunk_rest(seq__27020_27044__$1);
var G__27047 = c__22375__auto___27045;
var G__27048 = cljs.core.count(c__22375__auto___27045);
var G__27049 = (0);
seq__27020_27032 = G__27046;
chunk__27021_27033 = G__27047;
count__27022_27034 = G__27048;
i__27023_27035 = G__27049;
continue;
} else {
var vec__27027_27050 = cljs.core.first(seq__27020_27044__$1);
var k_27051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27027_27050,(0),null);
var v_27052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27027_27050,(1),null);
this$__$1.setRequestHeader(k_27051,v_27052);

var G__27053 = cljs.core.next(seq__27020_27044__$1);
var G__27054 = null;
var G__27055 = (0);
var G__27056 = (0);
seq__27020_27032 = G__27053;
chunk__27021_27033 = G__27054;
count__27022_27034 = G__27055;
i__27023_27035 = G__27056;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__21541__auto__ = body;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
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
