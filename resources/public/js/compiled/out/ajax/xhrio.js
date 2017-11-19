// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xhrio');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri');
goog.require('goog.json');
goog.require('goog.events');
goog.require('ajax.protocols');
goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27239,handler){
var map__27240 = p__27239;
var map__27240__$1 = ((((!((map__27240 == null)))?((((map__27240.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27240.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27240):map__27240);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27240__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27240__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27240__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
var temp__4657__auto___27247 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___27247)){
var response_type_27248 = temp__4657__auto___27247;
this$__$1.setResponseType(cljs.core.name(response_type_27248));
} else {
}

var G__27242 = this$__$1;
var G__27243_27249 = G__27242;
var G__27244_27250 = goog.net.EventType.COMPLETE;
var G__27245_27251 = ((function (G__27243_27249,G__27244_27250,G__27242,this$__$1,map__27240,map__27240__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__27238_SHARP_){
var G__27246 = p1__27238_SHARP_.target;
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(G__27246) : handler.call(null,G__27246));
});})(G__27243_27249,G__27244_27250,G__27242,this$__$1,map__27240,map__27240__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;
goog.events.listen(G__27243_27249,G__27244_27250,G__27245_27251);

G__27242.setTimeoutInterval(timeout);

G__27242.setWithCredentials(with_credentials);

G__27242.send(uri,method,body,cljs.core.clj__GT_js(headers));

return G__27242;
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponse();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

goog.net.XhrManager.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27252,handler){
var map__27253 = p__27252;
var map__27253__$1 = ((((!((map__27253 == null)))?((((map__27253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27253.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27253):map__27253);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27253__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27253__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27253__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27253__$1,cljs.core.cst$kw$headers);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27253__$1,cljs.core.cst$kw$id);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27253__$1,cljs.core.cst$kw$timeout,(0));
var priority = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27253__$1,cljs.core.cst$kw$priority);
var max_retries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27253__$1,cljs.core.cst$kw$max_DASH_retries);
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js(headers),priority,handler,max_retries);
});
