// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cognitect.transit');
goog.require('ajax.protocols');
goog.require('goog.net.XhrIo');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.json.Serializer');
goog.require('goog.structs');
ajax.core.process_response = (function ajax$core$process_response(response,interceptor){

return ajax.protocols._process_response(interceptor,response);
});
ajax.core.process_request = (function ajax$core$process_request(request,interceptor){

return ajax.protocols._process_request(interceptor,request);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22181__auto__,k__22182__auto__){
var self__ = this;
var this__22181__auto____$1 = this;
return this__22181__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22182__auto__,null);
});

ajax.core.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22183__auto__,k27413,else__22184__auto__){
var self__ = this;
var this__22183__auto____$1 = this;
var G__27417 = k27413;
var G__27417__$1 = (((G__27417 instanceof cljs.core.Keyword))?G__27417.fqn:null);
switch (G__27417__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27413,else__22184__auto__);

}
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27418,opts){
var self__ = this;
var map__27419 = p__27418;
var map__27419__$1 = ((((!((map__27419 == null)))?((((map__27419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27419.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27419):map__27419);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27419__$1,cljs.core.cst$kw$request);
var map__27421 = this;
var map__27421__$1 = ((((!((map__27421 == null)))?((((map__27421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27421.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27421):map__27421);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27421__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
});

ajax.core.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27423,xhrio){
var self__ = this;
var map__27424 = p__27423;
var map__27424__$1 = ((((!((map__27424 == null)))?((((map__27424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27424):map__27424);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27424__$1,cljs.core.cst$kw$response);
var map__27426 = this;
var map__27426__$1 = ((((!((map__27426 == null)))?((((map__27426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27426):map__27426);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27426__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22195__auto__,writer__22196__auto__,opts__22197__auto__){
var self__ = this;
var this__22195__auto____$1 = this;
var pr_pair__22198__auto__ = ((function (this__22195__auto____$1){
return (function (keyval__22199__auto__){
return cljs.core.pr_sequential_writer(writer__22196__auto__,cljs.core.pr_writer,""," ","",opts__22197__auto__,keyval__22199__auto__);
});})(this__22195__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22196__auto__,pr_pair__22198__auto__,"#ajax.core.StandardInterceptor{",", ","}",opts__22197__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27412){
var self__ = this;
var G__27412__$1 = this;
return (new cljs.core.RecordIter((0),G__27412__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22179__auto__){
var self__ = this;
var this__22179__auto____$1 = this;
return self__.__meta;
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22176__auto__){
var self__ = this;
var this__22176__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22185__auto__){
var self__ = this;
var this__22185__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22177__auto__){
var self__ = this;
var this__22177__auto____$1 = this;
var h__21995__auto__ = self__.__hash;
if(!((h__21995__auto__ == null))){
return h__21995__auto__;
} else {
var h__21995__auto____$1 = (function (){var fexpr__27428 = ((function (h__21995__auto__,this__22177__auto____$1){
return (function (coll__22178__auto__){
return (-732133709 ^ cljs.core.hash_unordered_coll(coll__22178__auto__));
});})(h__21995__auto__,this__22177__auto____$1))
;
return fexpr__27428(this__22177__auto____$1);
})();
self__.__hash = h__21995__auto____$1;

return h__21995__auto____$1;
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27414,other27415){
var self__ = this;
var this27414__$1 = this;
return (!((other27415 == null))) && ((this27414__$1.constructor === other27415.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27414__$1.name,other27415.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27414__$1.request,other27415.request)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27414__$1.response,other27415.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27414__$1.__extmap,other27415.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22190__auto__,k__22191__auto__){
var self__ = this;
var this__22190__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__22191__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22190__auto____$1),self__.__meta),k__22191__auto__);
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22191__auto__)),null));
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22188__auto__,k__22189__auto__,G__27412){
var self__ = this;
var this__22188__auto____$1 = this;
var pred__27429 = cljs.core.keyword_identical_QMARK_;
var expr__27430 = k__22189__auto__;
if(cljs.core.truth_((function (){var G__27432 = cljs.core.cst$kw$name;
var G__27433 = expr__27430;
return (pred__27429.cljs$core$IFn$_invoke$arity$2 ? pred__27429.cljs$core$IFn$_invoke$arity$2(G__27432,G__27433) : pred__27429.call(null,G__27432,G__27433));
})())){
return (new ajax.core.StandardInterceptor(G__27412,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27434 = cljs.core.cst$kw$request;
var G__27435 = expr__27430;
return (pred__27429.cljs$core$IFn$_invoke$arity$2 ? pred__27429.cljs$core$IFn$_invoke$arity$2(G__27434,G__27435) : pred__27429.call(null,G__27434,G__27435));
})())){
return (new ajax.core.StandardInterceptor(self__.name,G__27412,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27436 = cljs.core.cst$kw$response;
var G__27437 = expr__27430;
return (pred__27429.cljs$core$IFn$_invoke$arity$2 ? pred__27429.cljs$core$IFn$_invoke$arity$2(G__27436,G__27437) : pred__27429.call(null,G__27436,G__27437));
})())){
return (new ajax.core.StandardInterceptor(self__.name,self__.request,G__27412,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22189__auto__,G__27412),null));
}
}
}
});

ajax.core.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22193__auto__){
var self__ = this;
var this__22193__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
});

ajax.core.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22180__auto__,G__27412){
var self__ = this;
var this__22180__auto____$1 = this;
return (new ajax.core.StandardInterceptor(self__.name,self__.request,self__.response,G__27412,self__.__extmap,self__.__hash));
});

ajax.core.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22186__auto__,entry__22187__auto__){
var self__ = this;
var this__22186__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22187__auto__)){
return this__22186__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22186__auto____$1,entry__22187__auto__);
}
});

ajax.core.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
});

ajax.core.StandardInterceptor.cljs$lang$type = true;

ajax.core.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__22217__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/StandardInterceptor");
});

ajax.core.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__22217__auto__,writer__22218__auto__){
return cljs.core._write(writer__22218__auto__,"ajax.core/StandardInterceptor");
});

ajax.core.__GT_StandardInterceptor = (function ajax$core$__GT_StandardInterceptor(name,request,response){
return (new ajax.core.StandardInterceptor(name,request,response,null,null,null));
});

ajax.core.map__GT_StandardInterceptor = (function ajax$core$map__GT_StandardInterceptor(G__27416){
return (new ajax.core.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__27416),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__27416),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__27416),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27416,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0))),null));
});

ajax.core.to_interceptor = (function ajax$core$to_interceptor(m){
return ajax.core.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.core.get_content_type = (function ajax$core$get_content_type(response){
var or__21541__auto__ = ajax.protocols._get_response_header(response,"Content-Type");
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return "";
}
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.protocols._abort(this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([status]),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.throw_error = (function ajax$core$throw_error(args){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')));
});
ajax.core.exception_message = (function ajax$core$exception_message(e){
return e.message;
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__27439,xhrio){
var map__27440 = p__27439;
var map__27440__$1 = ((((!((map__27440 == null)))?((((map__27440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27440.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27440):map__27440);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27440__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.core.exception_message(e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  Format should have been "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.core.fail = (function ajax$core$fail(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27446 = arguments.length;
var i__22706__auto___27447 = (0);
while(true){
if((i__22706__auto___27447 < len__22705__auto___27446)){
args__22712__auto__.push((arguments[i__22706__auto___27447]));

var G__27448 = (i__22706__auto___27447 + (1));
i__22706__auto___27447 = G__27448;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((3) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((3)),(0),null)):null);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22713__auto__);
});

ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
});

ajax.core.fail.cljs$lang$maxFixedArity = (3);

ajax.core.fail.cljs$lang$applyTo = (function (seq27442){
var G__27443 = cljs.core.first(seq27442);
var seq27442__$1 = cljs.core.next(seq27442);
var G__27444 = cljs.core.first(seq27442__$1);
var seq27442__$2 = cljs.core.next(seq27442__$1);
var G__27445 = cljs.core.first(seq27442__$2);
var seq27442__$3 = cljs.core.next(seq27442__$2);
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic(G__27443,G__27444,G__27445,seq27442__$3);
});

ajax.core.content_type_to_request_header = (function ajax$core$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22181__auto__,k__22182__auto__){
var self__ = this;
var this__22181__auto____$1 = this;
return this__22181__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22182__auto__,null);
});

ajax.core.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22183__auto__,k27451,else__22184__auto__){
var self__ = this;
var this__22183__auto____$1 = this;
var G__27455 = k27451;
var G__27455__$1 = (((G__27455 instanceof cljs.core.Keyword))?G__27455.fqn:null);
switch (G__27455__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27451,else__22184__auto__);

}
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__27456,request){
var self__ = this;
var map__27457 = p__27456;
var map__27457__$1 = ((((!((map__27457 == null)))?((((map__27457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27457):map__27457);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27457__$1,cljs.core.cst$kw$content_DASH_type);
var map__27459 = this;
var map__27459__$1 = ((((!((map__27459 == null)))?((((map__27459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27459.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27459):map__27459);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27459__$1,cljs.core.cst$kw$content_DASH_type);

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,((function (map__27459,map__27459__$1,content_type__$2,map__27457,map__27457__$1,content_type__$1){
return (function (p1__27449_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.core.content_type_to_request_header(content_type__$2)], null),(function (){var or__21541__auto__ = p1__27449_SHARP_;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
});})(map__27459,map__27459__$1,content_type__$2,map__27457,map__27457__$1,content_type__$1))
);
});

ajax.core.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__27461,xhrio){
var self__ = this;
var map__27462 = p__27461;
var map__27462__$1 = ((((!((map__27462 == null)))?((((map__27462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27462):map__27462);
var format = map__27462__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27462__$1,cljs.core.cst$kw$read);
var map__27464 = this;
var map__27464__$1 = ((((!((map__27464 == null)))?((((map__27464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27464):map__27464);
var format__$1 = map__27464__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27464__$1,cljs.core.cst$kw$read);

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.core.fail,status);
var G__27467 = status;
switch (G__27467) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__27468 = "Request failed.";
var G__27469 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__27468,G__27469) : fail.call(null,G__27468,G__27469));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__27470 = "Request aborted by client.";
var G__27471 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__27470,G__27471) : fail.call(null,G__27470,G__27471));
} else {
var G__27472 = "Request timed out.";
var G__27473 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__27472,G__27473) : fail.call(null,G__27472,G__27473));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_(status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__27475 = ajax.protocols._status_text(xhrio);
var G__27476 = cljs.core.cst$kw$error;
var G__27477 = cljs.core.cst$kw$response;
var G__27478 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__27475,G__27476,G__27477,G__27478) : fail.call(null,G__27475,G__27476,G__27477,G__27478));
}
}catch (e27474){if((e27474 instanceof Object)){
var e = e27474;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e27474;

}
}
}
}catch (e27466){if((e27466 instanceof Object)){
var e = e27466;
var message = e.message;
return ajax.core.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e27466;

}
}});

ajax.core.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22195__auto__,writer__22196__auto__,opts__22197__auto__){
var self__ = this;
var this__22195__auto____$1 = this;
var pr_pair__22198__auto__ = ((function (this__22195__auto____$1){
return (function (keyval__22199__auto__){
return cljs.core.pr_sequential_writer(writer__22196__auto__,cljs.core.pr_writer,""," ","",opts__22197__auto__,keyval__22199__auto__);
});})(this__22195__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22196__auto__,pr_pair__22198__auto__,"#ajax.core.ResponseFormat{",", ","}",opts__22197__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27450){
var self__ = this;
var G__27450__$1 = this;
return (new cljs.core.RecordIter((0),G__27450__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22179__auto__){
var self__ = this;
var this__22179__auto____$1 = this;
return self__.__meta;
});

ajax.core.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22176__auto__){
var self__ = this;
var this__22176__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22185__auto__){
var self__ = this;
var this__22185__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22177__auto__){
var self__ = this;
var this__22177__auto____$1 = this;
var h__21995__auto__ = self__.__hash;
if(!((h__21995__auto__ == null))){
return h__21995__auto__;
} else {
var h__21995__auto____$1 = (function (){var fexpr__27479 = ((function (h__21995__auto__,this__22177__auto____$1){
return (function (coll__22178__auto__){
return (-2080722184 ^ cljs.core.hash_unordered_coll(coll__22178__auto__));
});})(h__21995__auto__,this__22177__auto____$1))
;
return fexpr__27479(this__22177__auto____$1);
})();
self__.__hash = h__21995__auto____$1;

return h__21995__auto____$1;
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27452,other27453){
var self__ = this;
var this27452__$1 = this;
return (!((other27453 == null))) && ((this27452__$1.constructor === other27453.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27452__$1.read,other27453.read)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27452__$1.description,other27453.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27452__$1.content_type,other27453.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27452__$1.__extmap,other27453.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22190__auto__,k__22191__auto__){
var self__ = this;
var this__22190__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__22191__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22190__auto____$1),self__.__meta),k__22191__auto__);
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22191__auto__)),null));
}
});

ajax.core.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22188__auto__,k__22189__auto__,G__27450){
var self__ = this;
var this__22188__auto____$1 = this;
var pred__27480 = cljs.core.keyword_identical_QMARK_;
var expr__27481 = k__22189__auto__;
if(cljs.core.truth_((function (){var G__27483 = cljs.core.cst$kw$read;
var G__27484 = expr__27481;
return (pred__27480.cljs$core$IFn$_invoke$arity$2 ? pred__27480.cljs$core$IFn$_invoke$arity$2(G__27483,G__27484) : pred__27480.call(null,G__27483,G__27484));
})())){
return (new ajax.core.ResponseFormat(G__27450,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27485 = cljs.core.cst$kw$description;
var G__27486 = expr__27481;
return (pred__27480.cljs$core$IFn$_invoke$arity$2 ? pred__27480.cljs$core$IFn$_invoke$arity$2(G__27485,G__27486) : pred__27480.call(null,G__27485,G__27486));
})())){
return (new ajax.core.ResponseFormat(self__.read,G__27450,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__27487 = cljs.core.cst$kw$content_DASH_type;
var G__27488 = expr__27481;
return (pred__27480.cljs$core$IFn$_invoke$arity$2 ? pred__27480.cljs$core$IFn$_invoke$arity$2(G__27487,G__27488) : pred__27480.call(null,G__27487,G__27488));
})())){
return (new ajax.core.ResponseFormat(self__.read,self__.description,G__27450,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22189__auto__,G__27450),null));
}
}
}
});

ajax.core.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22193__auto__){
var self__ = this;
var this__22193__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
});

ajax.core.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22180__auto__,G__27450){
var self__ = this;
var this__22180__auto____$1 = this;
return (new ajax.core.ResponseFormat(self__.read,self__.description,self__.content_type,G__27450,self__.__extmap,self__.__hash));
});

ajax.core.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22186__auto__,entry__22187__auto__){
var self__ = this;
var this__22186__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22187__auto__)){
return this__22186__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22186__auto____$1,entry__22187__auto__);
}
});

ajax.core.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
});

ajax.core.ResponseFormat.cljs$lang$type = true;

ajax.core.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__22217__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ResponseFormat");
});

ajax.core.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__22217__auto__,writer__22218__auto__){
return cljs.core._write(writer__22218__auto__,"ajax.core/ResponseFormat");
});

ajax.core.__GT_ResponseFormat = (function ajax$core$__GT_ResponseFormat(read,description,content_type){
return (new ajax.core.ResponseFormat(read,description,content_type,null,null,null));
});

ajax.core.map__GT_ResponseFormat = (function ajax$core$map__GT_ResponseFormat(G__27454){
return (new ajax.core.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__27454),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__27454),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__27454),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27454,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0))),null));
});

ajax.core.params_to_str_alt = (function ajax$core$params_to_str_alt(params){
if(cljs.core.truth_(params)){
return (function (){var G__27491 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__27491);
})().toString();
} else {
return null;
}
});
ajax.core.vec_param_to_str = (function ajax$core$vec_param_to_str(var_args){
var G__27493 = arguments.length;
switch (G__27493) {
case 3:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$3 = (function (prefix,key,value){
var G__27494 = prefix;
var G__27495 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__27494,G__27495) : ajax.core.param_to_str.call(null,G__27494,G__27495));
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,key){
return (function (value){
var G__27496 = prefix;
var G__27497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__27496,G__27497) : ajax.core.param_to_str.call(null,G__27496,G__27497));
});
});

ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (key,value){
var G__27498 = prefix;
var G__27499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,value], null);
return (ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 ? ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2(G__27498,G__27499) : ajax.core.param_to_str.call(null,G__27498,G__27499));
});
});

ajax.core.vec_param_to_str.cljs$lang$maxFixedArity = 3;

ajax.core.param_to_str = (function ajax$core$param_to_str(var_args){
var G__27502 = arguments.length;
switch (G__27502) {
case 2:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$2 = (function (prefix,p__27503){
var vec__27504 = p__27503;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27504,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27504,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});

ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (p__27507){
var vec__27508 = p__27507;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27508,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27508,(1),null);
var k1 = (((key instanceof cljs.core.Keyword))?cljs.core.name(key):key);
var new_key = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''):k1);
if(typeof value === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);
} else {
if(cljs.core.map_QMARK_(value)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(value)], 0));
} else {
if(cljs.core.sequential_QMARK_(value)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(ajax.core.vec_param_to_str.cljs$core$IFn$_invoke$arity$1(new_key),cljs.core.seq(value)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_key,value], null)], null);

}
}
}
});
});

ajax.core.param_to_str.cljs$lang$maxFixedArity = 2;

ajax.core.to_utf8_writer = (function ajax$core$to_utf8_writer(to_str){
return to_str;
});
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
var url_encode_fn = encodeURIComponent;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (url_encode_fn){
return (function (p__27512){
var vec__27513 = p__27512;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27513,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1((url_encode_fn.cljs$core$IFn$_invoke$arity$1 ? url_encode_fn.cljs$core$IFn$_invoke$arity$1(v) : url_encode_fn.call(null,v)))].join('');
});})(url_encode_fn))
,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.param_to_str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.seq(params)], 0))));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(var_args){
var G__27517 = arguments.length;
switch (G__27517) {
case 3:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$3 = (function (params,params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (params,params_to_str){
return (function (uri){
if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (params){
return (function (params_to_str,uri){
if(cljs.core.truth_(params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((params_to_str.cljs$core$IFn$_invoke$arity$1 ? params_to_str.cljs$core$IFn$_invoke$arity$1(params) : params_to_str.call(null,params)))].join('');
} else {
return uri;
}
});
});

ajax.core.uri_with_params.cljs$lang$maxFixedArity = 3;

ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ProcessGet = (function (params_to_str,__meta,__extmap,__hash){
this.params_to_str = params_to_str;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22181__auto__,k__22182__auto__){
var self__ = this;
var this__22181__auto____$1 = this;
return this__22181__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22182__auto__,null);
});

ajax.core.ProcessGet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22183__auto__,k27520,else__22184__auto__){
var self__ = this;
var this__22183__auto____$1 = this;
var G__27524 = k27520;
var G__27524__$1 = (((G__27524 instanceof cljs.core.Keyword))?G__27524.fqn:null);
switch (G__27524__$1) {
case "params-to-str":
return self__.params_to_str;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27520,else__22184__auto__);

}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27525){
var self__ = this;
var map__27526 = p__27525;
var map__27526__$1 = ((((!((map__27526 == null)))?((((map__27526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27526):map__27526);
var request = map__27526__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27526__$1,cljs.core.cst$kw$method);
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,ajax.core.uri_with_params.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(request),self__.params_to_str)));
} else {
return request;
}
});

ajax.core.ProcessGet.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.ProcessGet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22195__auto__,writer__22196__auto__,opts__22197__auto__){
var self__ = this;
var this__22195__auto____$1 = this;
var pr_pair__22198__auto__ = ((function (this__22195__auto____$1){
return (function (keyval__22199__auto__){
return cljs.core.pr_sequential_writer(writer__22196__auto__,cljs.core.pr_writer,""," ","",opts__22197__auto__,keyval__22199__auto__);
});})(this__22195__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22196__auto__,pr_pair__22198__auto__,"#ajax.core.ProcessGet{",", ","}",opts__22197__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27519){
var self__ = this;
var G__27519__$1 = this;
return (new cljs.core.RecordIter((0),G__27519__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params_DASH_to_DASH_str], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.ProcessGet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22179__auto__){
var self__ = this;
var this__22179__auto____$1 = this;
return self__.__meta;
});

ajax.core.ProcessGet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22176__auto__){
var self__ = this;
var this__22176__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22185__auto__){
var self__ = this;
var this__22185__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22177__auto__){
var self__ = this;
var this__22177__auto____$1 = this;
var h__21995__auto__ = self__.__hash;
if(!((h__21995__auto__ == null))){
return h__21995__auto__;
} else {
var h__21995__auto____$1 = (function (){var fexpr__27528 = ((function (h__21995__auto__,this__22177__auto____$1){
return (function (coll__22178__auto__){
return (1787573515 ^ cljs.core.hash_unordered_coll(coll__22178__auto__));
});})(h__21995__auto__,this__22177__auto____$1))
;
return fexpr__27528(this__22177__auto____$1);
})();
self__.__hash = h__21995__auto____$1;

return h__21995__auto____$1;
}
});

ajax.core.ProcessGet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27521,other27522){
var self__ = this;
var this27521__$1 = this;
return (!((other27522 == null))) && ((this27521__$1.constructor === other27522.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27521__$1.params_to_str,other27522.params_to_str)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27521__$1.__extmap,other27522.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22190__auto__,k__22191__auto__){
var self__ = this;
var this__22190__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params_DASH_to_DASH_str,null], null), null),k__22191__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22190__auto____$1),self__.__meta),k__22191__auto__);
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22191__auto__)),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22188__auto__,k__22189__auto__,G__27519){
var self__ = this;
var this__22188__auto____$1 = this;
var pred__27529 = cljs.core.keyword_identical_QMARK_;
var expr__27530 = k__22189__auto__;
if(cljs.core.truth_((function (){var G__27532 = cljs.core.cst$kw$params_DASH_to_DASH_str;
var G__27533 = expr__27530;
return (pred__27529.cljs$core$IFn$_invoke$arity$2 ? pred__27529.cljs$core$IFn$_invoke$arity$2(G__27532,G__27533) : pred__27529.call(null,G__27532,G__27533));
})())){
return (new ajax.core.ProcessGet(G__27519,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.core.ProcessGet(self__.params_to_str,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22189__auto__,G__27519),null));
}
});

ajax.core.ProcessGet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22193__auto__){
var self__ = this;
var this__22193__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$params_DASH_to_DASH_str,self__.params_to_str],null))], null),self__.__extmap));
});

ajax.core.ProcessGet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22180__auto__,G__27519){
var self__ = this;
var this__22180__auto____$1 = this;
return (new ajax.core.ProcessGet(self__.params_to_str,G__27519,self__.__extmap,self__.__hash));
});

ajax.core.ProcessGet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22186__auto__,entry__22187__auto__){
var self__ = this;
var this__22186__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22187__auto__)){
return this__22186__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22186__auto____$1,entry__22187__auto__);
}
});

ajax.core.ProcessGet.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$params_DASH_to_DASH_str], null);
});

ajax.core.ProcessGet.cljs$lang$type = true;

ajax.core.ProcessGet.cljs$lang$ctorPrSeq = (function (this__22217__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ProcessGet");
});

ajax.core.ProcessGet.cljs$lang$ctorPrWriter = (function (this__22217__auto__,writer__22218__auto__){
return cljs.core._write(writer__22218__auto__,"ajax.core/ProcessGet");
});

ajax.core.__GT_ProcessGet = (function ajax$core$__GT_ProcessGet(params_to_str){
return (new ajax.core.ProcessGet(params_to_str,null,null,null));
});

ajax.core.map__GT_ProcessGet = (function ajax$core$map__GT_ProcessGet(G__27523){
return (new ajax.core.ProcessGet(cljs.core.cst$kw$params_DASH_to_DASH_str.cljs$core$IFn$_invoke$arity$1(G__27523),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__27523,cljs.core.cst$kw$params_DASH_to_DASH_str)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22181__auto__,k__22182__auto__){
var self__ = this;
var this__22181__auto____$1 = this;
return this__22181__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22182__auto__,null);
});

ajax.core.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22183__auto__,k27536,else__22184__auto__){
var self__ = this;
var this__22183__auto____$1 = this;
var G__27540 = k27536;
switch (G__27540) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27536,else__22184__auto__);

}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27541){
var self__ = this;
var map__27542 = p__27541;
var map__27542__$1 = ((((!((map__27542 == null)))?((((map__27542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27542):map__27542);
var request = map__27542__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27542__$1,cljs.core.cst$kw$body);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27542__$1,cljs.core.cst$kw$params);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
});

ajax.core.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
});

ajax.core.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22195__auto__,writer__22196__auto__,opts__22197__auto__){
var self__ = this;
var this__22195__auto____$1 = this;
var pr_pair__22198__auto__ = ((function (this__22195__auto____$1){
return (function (keyval__22199__auto__){
return cljs.core.pr_sequential_writer(writer__22196__auto__,cljs.core.pr_writer,""," ","",opts__22197__auto__,keyval__22199__auto__);
});})(this__22195__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22196__auto__,pr_pair__22198__auto__,"#ajax.core.DirectSubmission{",", ","}",opts__22197__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27535){
var self__ = this;
var G__27535__$1 = this;
return (new cljs.core.RecordIter((0),G__27535__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22179__auto__){
var self__ = this;
var this__22179__auto____$1 = this;
return self__.__meta;
});

ajax.core.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22176__auto__){
var self__ = this;
var this__22176__auto____$1 = this;
return (new ajax.core.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22185__auto__){
var self__ = this;
var this__22185__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22177__auto__){
var self__ = this;
var this__22177__auto____$1 = this;
var h__21995__auto__ = self__.__hash;
if(!((h__21995__auto__ == null))){
return h__21995__auto__;
} else {
var h__21995__auto____$1 = (function (){var fexpr__27544 = ((function (h__21995__auto__,this__22177__auto____$1){
return (function (coll__22178__auto__){
return (773728695 ^ cljs.core.hash_unordered_coll(coll__22178__auto__));
});})(h__21995__auto__,this__22177__auto____$1))
;
return fexpr__27544(this__22177__auto____$1);
})();
self__.__hash = h__21995__auto____$1;

return h__21995__auto____$1;
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27537,other27538){
var self__ = this;
var this27537__$1 = this;
return (!((other27538 == null))) && ((this27537__$1.constructor === other27538.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27537__$1.__extmap,other27538.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22190__auto__,k__22191__auto__){
var self__ = this;
var this__22190__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__22191__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22190__auto____$1),self__.__meta),k__22191__auto__);
} else {
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22191__auto__)),null));
}
});

ajax.core.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22188__auto__,k__22189__auto__,G__27535){
var self__ = this;
var this__22188__auto____$1 = this;
var pred__27545 = cljs.core.keyword_identical_QMARK_;
var expr__27546 = k__22189__auto__;
return (new ajax.core.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22189__auto__,G__27535),null));
});

ajax.core.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22193__auto__){
var self__ = this;
var this__22193__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22180__auto__,G__27535){
var self__ = this;
var this__22180__auto____$1 = this;
return (new ajax.core.DirectSubmission(G__27535,self__.__extmap,self__.__hash));
});

ajax.core.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22186__auto__,entry__22187__auto__){
var self__ = this;
var this__22186__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22187__auto__)){
return this__22186__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22186__auto____$1,entry__22187__auto__);
}
});

ajax.core.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.DirectSubmission.cljs$lang$type = true;

ajax.core.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__22217__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/DirectSubmission");
});

ajax.core.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__22217__auto__,writer__22218__auto__){
return cljs.core._write(writer__22218__auto__,"ajax.core/DirectSubmission");
});

ajax.core.__GT_DirectSubmission = (function ajax$core$__GT_DirectSubmission(){
return (new ajax.core.DirectSubmission(null,null,null));
});

ajax.core.map__GT_DirectSubmission = (function ajax$core$map__GT_DirectSubmission(G__27539){
return (new ajax.core.DirectSubmission(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27539)),null));
});

ajax.core.apply_request_format = (function ajax$core$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.core.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22181__auto__,k__22182__auto__){
var self__ = this;
var this__22181__auto____$1 = this;
return this__22181__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22182__auto__,null);
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22183__auto__,k27550,else__22184__auto__){
var self__ = this;
var this__22183__auto____$1 = this;
var G__27554 = k27550;
switch (G__27554) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27550,else__22184__auto__);

}
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL;

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__27555){
var self__ = this;
var map__27556 = p__27555;
var map__27556__$1 = ((((!((map__27556 == null)))?((((map__27556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27556):map__27556);
var request = map__27556__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27556__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__27558 = ajax.core.get_request_format(format);
var map__27558__$1 = ((((!((map__27558 == null)))?((((map__27558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27558):map__27558);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27558__$1,cljs.core.cst$kw$content_DASH_type);
var body = ((!((write == null)))?ajax.core.apply_request_format(write,params):ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__21541__auto__ = headers;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.core.content_type_to_request_header(content_type)):headers__$1)], 0));
});

ajax.core.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22195__auto__,writer__22196__auto__,opts__22197__auto__){
var self__ = this;
var this__22195__auto____$1 = this;
var pr_pair__22198__auto__ = ((function (this__22195__auto____$1){
return (function (keyval__22199__auto__){
return cljs.core.pr_sequential_writer(writer__22196__auto__,cljs.core.pr_writer,""," ","",opts__22197__auto__,keyval__22199__auto__);
});})(this__22195__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22196__auto__,pr_pair__22198__auto__,"#ajax.core.ApplyRequestFormat{",", ","}",opts__22197__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27549){
var self__ = this;
var G__27549__$1 = this;
return (new cljs.core.RecordIter((0),G__27549__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22179__auto__){
var self__ = this;
var this__22179__auto____$1 = this;
return self__.__meta;
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22176__auto__){
var self__ = this;
var this__22176__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22185__auto__){
var self__ = this;
var this__22185__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22177__auto__){
var self__ = this;
var this__22177__auto____$1 = this;
var h__21995__auto__ = self__.__hash;
if(!((h__21995__auto__ == null))){
return h__21995__auto__;
} else {
var h__21995__auto____$1 = (function (){var fexpr__27560 = ((function (h__21995__auto__,this__22177__auto____$1){
return (function (coll__22178__auto__){
return (1881253026 ^ cljs.core.hash_unordered_coll(coll__22178__auto__));
});})(h__21995__auto__,this__22177__auto____$1))
;
return fexpr__27560(this__22177__auto____$1);
})();
self__.__hash = h__21995__auto____$1;

return h__21995__auto____$1;
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27551,other27552){
var self__ = this;
var this27551__$1 = this;
return (!((other27552 == null))) && ((this27551__$1.constructor === other27552.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27551__$1.__extmap,other27552.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22190__auto__,k__22191__auto__){
var self__ = this;
var this__22190__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__22191__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22190__auto____$1),self__.__meta),k__22191__auto__);
} else {
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22191__auto__)),null));
}
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22188__auto__,k__22189__auto__,G__27549){
var self__ = this;
var this__22188__auto____$1 = this;
var pred__27561 = cljs.core.keyword_identical_QMARK_;
var expr__27562 = k__22189__auto__;
return (new ajax.core.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22189__auto__,G__27549),null));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22193__auto__){
var self__ = this;
var this__22193__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22180__auto__,G__27549){
var self__ = this;
var this__22180__auto____$1 = this;
return (new ajax.core.ApplyRequestFormat(G__27549,self__.__extmap,self__.__hash));
});

ajax.core.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22186__auto__,entry__22187__auto__){
var self__ = this;
var this__22186__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22187__auto__)){
return this__22186__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22186__auto____$1,entry__22187__auto__);
}
});

ajax.core.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

ajax.core.ApplyRequestFormat.cljs$lang$type = true;

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__22217__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.core/ApplyRequestFormat");
});

ajax.core.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__22217__auto__,writer__22218__auto__){
return cljs.core._write(writer__22218__auto__,"ajax.core/ApplyRequestFormat");
});

ajax.core.__GT_ApplyRequestFormat = (function ajax$core$__GT_ApplyRequestFormat(){
return (new ajax.core.ApplyRequestFormat(null,null,null));
});

ajax.core.map__GT_ApplyRequestFormat = (function ajax$core$map__GT_ApplyRequestFormat(G__27553){
return (new ajax.core.ApplyRequestFormat(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__27553)),null));
});

ajax.core.transit_type = (function ajax$core$transit_type(p__27565){
var map__27566 = p__27565;
var map__27566__$1 = ((((!((map__27566 == null)))?((((map__27566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27566):map__27566);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27566__$1,cljs.core.cst$kw$type);
var or__21541__auto__ = type;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cljs.core.cst$kw$json;
}
});
ajax.core.transit_write_fn = (function ajax$core$transit_write_fn(type,request){
var writer = (function (){var or__21541__auto__ = cljs.core.cst$kw$writer.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,request);
}
})();
return ((function (writer){
return (function ajax$core$transit_write_fn_$_transit_write_params(params){
return cognitect.transit.write(writer,params);
});
;})(writer))
});
ajax.core.transit_request_format = (function ajax$core$transit_request_format(var_args){
var G__27569 = arguments.length;
switch (G__27569) {
case 0:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
var type = ajax.core.transit_type(request);
var mime_type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$json))?"json":"msgpack");
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.transit_write_fn(type,request),cljs.core.cst$kw$content_DASH_type,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("application/transit+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mime_type)].join('')], null);
});

ajax.core.transit_request_format.cljs$lang$maxFixedArity = 1;

ajax.core.transit_read_fn = (function ajax$core$transit_read_fn(request){
var reader = (function (){var or__21541__auto__ = cljs.core.cst$kw$reader.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$json,request);
}
})();
return ((function (reader){
return (function ajax$core$transit_read_fn_$_transit_read_response(response){
return cognitect.transit.read(reader,ajax.protocols._body(response));
});
;})(reader))
});
ajax.core.transit_response_format = (function ajax$core$transit_response_format(var_args){
var G__27572 = arguments.length;
switch (G__27572) {
case 0:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2(ajax.core.transit_type(request),request);
});

ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$2 = (function (type,request){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.transit_read_fn(request),cljs.core.cst$kw$description,"Transit",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json"], null)], null));
});

ajax.core.transit_response_format.cljs$lang$maxFixedArity = 2;

ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(ajax.core.params_to_str),cljs.core.cst$kw$content_DASH_type,"application/x-www-form-urlencoded; charset=utf-8"], null);
});
ajax.core.raw_response_format = (function ajax$core$raw_response_format(var_args){
var G__27575 = arguments.length;
switch (G__27575) {
case 0:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.protocols._body,cljs.core.cst$kw$description,"raw text",cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null)], null));
});

ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$1 = (function (_){
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();
});

ajax.core.raw_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.text_request_format = (function ajax$core$text_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.to_utf8_writer(cljs.core.identity),cljs.core.cst$kw$content_DASH_type,"text/plain; charset=utf-8"], null);
});
ajax.core.text_response_format = ajax.core.raw_response_format;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js(data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,ajax.core.write_json,cljs.core.cst$kw$content_DASH_type,"application/json"], null);
});
ajax.core.strip_prefix = (function ajax$core$strip_prefix(prefix,text){
if(cljs.core.truth_((function (){var and__21529__auto__ = prefix;
if(cljs.core.truth_(and__21529__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),text.indexOf(prefix));
} else {
return and__21529__auto__;
}
})())){
return text.substring(prefix.length);
} else {
return text;
}
});
ajax.core.json_read = (function ajax$core$json_read(var_args){
var G__27578 = arguments.length;
switch (G__27578) {
case 4:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.json_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core.strip_prefix(prefix,ajax.protocols._body(xhrio));
var json = goog.json.parse(text);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(json,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywords_QMARK_], 0));
}
});
});

ajax.core.json_read.cljs$lang$maxFixedArity = 4;

/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function ajax$core$json_response_format(var_args){
var G__27581 = arguments.length;
switch (G__27581) {
case 0:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1 = (function (p__27582){
var map__27583 = p__27582;
var map__27583__$1 = ((((!((map__27583 == null)))?((((map__27583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27583):map__27583);
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27583__$1,cljs.core.cst$kw$prefix);
var keywords_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27583__$1,cljs.core.cst$kw$keywords_QMARK_);
var raw = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27583__$1,cljs.core.cst$kw$raw);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.json_read.cljs$core$IFn$_invoke$arity$3(prefix,raw,keywords_QMARK_),cljs.core.cst$kw$description,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("JSON"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" prefix '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),cljs.core.cst$kw$content_DASH_type,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json"], null)], null));
});

ajax.core.json_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+json",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/transit+transit",ajax.core.transit_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["application/json",ajax.core.json_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.text_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*",ajax.core.raw_response_format], null)], null);
ajax.core.get_format = (function ajax$core$get_format(var_args){
var G__27587 = arguments.length;
switch (G__27587) {
case 2:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});

ajax.core.get_format.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
if(((format_entry == null)) || (cljs.core.map_QMARK_(format_entry))){
return format_entry;
} else {
if(cljs.core.vector_QMARK_(format_entry)){
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.second(format_entry));
} else {
return (format_entry.cljs$core$IFn$_invoke$arity$1 ? format_entry.cljs$core$IFn$_invoke$arity$1(request) : format_entry.call(null,request));

}
}
});
});

ajax.core.get_format.cljs$lang$maxFixedArity = 2;

ajax.core.get_accept_entries = (function ajax$core$get_accept_entries(var_args){
var G__27590 = arguments.length;
switch (G__27590) {
case 2:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2 = (function (request,format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});

ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (format_entry){
var fe = ((cljs.core.vector_QMARK_(format_entry))?cljs.core.first(format_entry):cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,format_entry)));
if((fe == null)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*/*"], null);
} else {
if(typeof fe === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fe], null);
} else {
return fe;

}
}
});
});

ajax.core.get_accept_entries.cljs$lang$maxFixedArity = 2;

ajax.core.content_type_matches = (function ajax$core$content_type_matches(var_args){
var G__27593 = arguments.length;
switch (G__27593) {
case 2:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$2 = (function (content_type,accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});

ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (accept){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});

ajax.core.content_type_matches.cljs$lang$maxFixedArity = 2;

ajax.core.detect_content_type = (function ajax$core$detect_content_type(var_args){
var G__27596 = arguments.length;
switch (G__27596) {
case 3:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$3 = (function (content_type,request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2 = (function (content_type,request){
return (function (format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$1 = (function (content_type){
return (function (request,format_entry){
var accept = ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,format_entry);
return cljs.core.some(ajax.core.content_type_matches.cljs$core$IFn$_invoke$arity$1(content_type),accept);
});
});

ajax.core.detect_content_type.cljs$lang$maxFixedArity = 3;

ajax.core.get_default_format = (function ajax$core$get_default_format(response,p__27598){
var map__27599 = p__27598;
var map__27599__$1 = ((((!((map__27599 == null)))?((((map__27599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27599):map__27599);
var request = map__27599__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27599__$1,cljs.core.cst$kw$response_DASH_format);
var f = ajax.core.detect_content_type.cljs$core$IFn$_invoke$arity$2(ajax.core.get_content_type(response),request);
return ajax.core.get_format.cljs$core$IFn$_invoke$arity$2(request,cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,response_format)));
});
ajax.core.detect_response_format_read = (function ajax$core$detect_response_format_read(var_args){
var G__27602 = arguments.length;
switch (G__27602) {
case 2:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = (function (request,response){
var format = ajax.core.get_default_format(response,request);
var fexpr__27603 = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format);
return (fexpr__27603.cljs$core$IFn$_invoke$arity$1 ? fexpr__27603.cljs$core$IFn$_invoke$arity$1(response) : fexpr__27603.call(null,response));
});

ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = (function (request){
return (function (response){
var format = ajax.core.get_default_format(response,request);
var fexpr__27604 = cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(format);
return (fexpr__27604.cljs$core$IFn$_invoke$arity$1 ? fexpr__27604.cljs$core$IFn$_invoke$arity$1(response) : fexpr__27604.call(null,response));
});
});

ajax.core.detect_response_format_read.cljs$lang$maxFixedArity = 2;

ajax.core.accept_header = (function ajax$core$accept_header(p__27606){
var map__27607 = p__27606;
var map__27607__$1 = ((((!((map__27607 == null)))?((((map__27607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27607):map__27607);
var request = map__27607__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27607__$1,cljs.core.cst$kw$response_DASH_format);
if(cljs.core.vector_QMARK_(response_format)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$1(request),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([response_format], 0));
} else {
return ajax.core.get_accept_entries.cljs$core$IFn$_invoke$arity$2(request,response_format);
}
});
ajax.core.detect_response_format = (function ajax$core$detect_response_format(var_args){
var G__27610 = arguments.length;
switch (G__27610) {
case 0:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0 = (function (){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$response_DASH_format,ajax.core.default_formats], null));
});

ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1 = (function (opts){
var accept = ajax.core.accept_header(opts);
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,ajax.core.detect_response_format_read.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$format,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(from "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(accept),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join(''),cljs.core.cst$kw$content_DASH_type,accept], null));
});

ajax.core.detect_response_format.cljs$lang$maxFixedArity = 1;

ajax.core.get_response_format = (function ajax$core$get_response_format(p__27612){
var map__27613 = p__27612;
var map__27613__$1 = ((((!((map__27613 == null)))?((((map__27613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27613):map__27613);
var opts = map__27613__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27613__$1,cljs.core.cst$kw$response_DASH_format);
if((response_format instanceof ajax.core.ResponseFormat)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$1(opts);
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.core.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.core.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case(cljs.core.name(method));
} else {
return method;
}
});
ajax.core.js_handler = (function ajax$core$js_handler(var_args){
var G__27616 = arguments.length;
switch (G__27616) {
case 3:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$3 = (function (handler,interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2 = (function (handler,interceptors){
return (function (response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$core$IFn$_invoke$arity$1 = (function (handler){
return (function (interceptors,response){
var process = (function ajax$core$process(response__$1,interceptor){
return ajax.protocols._process_response(interceptor,response__$1);
});
var processed = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process,response,interceptors);
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(processed) : handler.call(null,processed));
});
});

ajax.core.js_handler.cljs$lang$maxFixedArity = 3;

ajax.core.base_handler = (function ajax$core$base_handler(interceptors,p__27618){
var map__27619 = p__27618;
var map__27619__$1 = ((((!((map__27619 == null)))?((((map__27619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27619):map__27619);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27619__$1,cljs.core.cst$kw$handler);
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.cljs$core$IFn$_invoke$arity$2(handler,interceptors);
} else {
return ajax.core.throw_error("No ajax handler provided.");
}
});
ajax.core.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.core.ProcessGet(ajax.core.params_to_str,null,null,null)),(new ajax.core.DirectSubmission(null,null,null)),(new ajax.core.ApplyRequestFormat(null,null,null))], null);
ajax.core.default_interceptors = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
ajax.core.normalize_request = (function ajax$core$normalize_request(request){
var response_format = ajax.core.get_response_format(request);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$method,ajax.core.normalize_method),cljs.core.cst$kw$interceptors,((function (response_format){
return (function (p1__27621_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [response_format], null),(function (){var or__21541__auto__ = p1__27621_SHARP_;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cljs.core.deref(ajax.core.default_interceptors);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ajax.core.request_interceptors], 0));
});})(response_format))
);
});
ajax.core.new_default_api = (function ajax$core$new_default_api(){
return (new goog.net.XhrIo());
});
ajax.core.raw_ajax_request = (function ajax$core$raw_ajax_request(p__27622){
var map__27623 = p__27622;
var map__27623__$1 = ((((!((map__27623 == null)))?((((map__27623.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27623.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27623):map__27623);
var request = map__27623__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27623__$1,cljs.core.cst$kw$interceptors);
var request__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ajax.core.process_request,request,interceptors);
var handler = ajax.core.base_handler(cljs.core.reverse(interceptors),request__$1);
var api = (function (){var or__21541__auto__ = cljs.core.cst$kw$api.cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return ajax.core.new_default_api();
}
})();
return ajax.protocols._js_ajax_request(api,request__$1,handler);
});
ajax.core.ajax_request = (function ajax$core$ajax_request(request){
return ajax.core.raw_ajax_request(ajax.core.normalize_request(request));
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$write,format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);
} else {
var G__27625 = format;
var G__27625__$1 = (((G__27625 instanceof cljs.core.Keyword))?G__27625.fqn:null);
switch (G__27625__$1) {
case "transit":
return ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_request_format();

break;
case "text":
return ajax.core.text_request_format();

break;
case "raw":
return ajax.core.url_request_format();

break;
case "url":
return ajax.core.url_request_format();

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_element = (function ajax$core$keyword_response_format_element(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(format),(function (){var G__27627 = cljs.core.second(format);
var G__27628 = format_params;
return (ajax.core.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2 ? ajax.core.keyword_response_format_element.cljs$core$IFn$_invoke$arity$2(G__27627,G__27628) : ajax.core.keyword_response_format_element.call(null,G__27627,G__27628));
})()], null);
} else {
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if(cljs.core.fn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$read,format,cljs.core.cst$kw$description,"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();
} else {
var G__27629 = format;
var G__27629__$1 = (((G__27629 instanceof cljs.core.Keyword))?G__27629.fqn:null);
switch (G__27629__$1) {
case "transit":
return ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "json":
return ajax.core.json_response_format.cljs$core$IFn$_invoke$arity$1(format_params);

break;
case "text":
return (ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.text_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.text_response_format.call(null));

break;
case "raw":
return ajax.core.raw_response_format.cljs$core$IFn$_invoke$arity$0();

break;
case "detect":
return ajax.core.detect_response_format.cljs$core$IFn$_invoke$arity$0();

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_(format)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27631_SHARP_){
return ajax.core.keyword_response_format_element(p1__27631_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_element(format,format_params);
}
});
ajax.core.print_response = (function ajax$core$print_response(response){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX response:",response], 0));
});
ajax.core.default_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.core.print_response);
ajax.core.print_error_response = (function ajax$core$print_error_response(response){
if(typeof console !== 'undefined'){
return console.error(response);
} else {
if(typeof window !== 'undefined'){
return window.alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)].join(''));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["CLJS-AJAX ERROR:",response], 0));

}
}
});
ajax.core.default_error_handler = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ajax.core.print_error_response);
ajax.core.transform_handler = (function ajax$core$transform_handler(p__27632){
var map__27633 = p__27632;
var map__27633__$1 = ((((!((map__27633 == null)))?((((map__27633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27633.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27633):map__27633);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27633__$1,cljs.core.cst$kw$handler);
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27633__$1,cljs.core.cst$kw$error_DASH_handler);
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27633__$1,cljs.core.cst$kw$finally);
var h = (function (){var or__21541__auto__ = handler;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cljs.core.deref(ajax.core.default_handler);
}
})();
var e = (function (){var or__21541__auto__ = error_handler;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cljs.core.deref(ajax.core.default_error_handler);
}
})();
return ((function (h,e,map__27633,map__27633__$1,handler,error_handler,finally$){
return (function ajax$core$transform_handler_$_easy_handler(p__27635){
var vec__27636 = p__27635;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27636,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27636,(1),null);
var fexpr__27639_27640 = (cljs.core.truth_(ok)?h:e);
(fexpr__27639_27640.cljs$core$IFn$_invoke$arity$1 ? fexpr__27639_27640.cljs$core$IFn$_invoke$arity$1(result) : fexpr__27639_27640.call(null,result));

if(cljs.core.fn_QMARK_(finally$)){
return (finally$.cljs$core$IFn$_invoke$arity$0 ? finally$.cljs$core$IFn$_invoke$arity$0() : finally$.call(null));
} else {
return null;
}
});
;})(h,e,map__27633,map__27633__$1,handler,error_handler,finally$))
});
ajax.core.transform_opts = (function ajax$core$transform_opts(p__27641){
var map__27642 = p__27641;
var map__27642__$1 = ((((!((map__27642 == null)))?((((map__27642.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27642.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27642):map__27642);
var opts = map__27642__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27642__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27642__$1,cljs.core.cst$kw$format);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27642__$1,cljs.core.cst$kw$response_DASH_format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27642__$1,cljs.core.cst$kw$params);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27642__$1,cljs.core.cst$kw$body);

var needs_format = ((body == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"));
var rf = (cljs.core.truth_((function (){var or__21541__auto__ = format;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format(format,opts):null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$handler,ajax.core.transform_handler(opts),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$format,rf,cljs.core.cst$kw$response_DASH_format,ajax.core.keyword_response_format(response_format,opts)], 0));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request(ajax.core.transform_opts(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$uri,uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$method,method], 0))));
});
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27646 = arguments.length;
var i__22706__auto___27647 = (0);
while(true){
if((i__22706__auto___27647 < len__22705__auto___27646)){
args__22712__auto__.push((arguments[i__22706__auto___27647]));

var G__27648 = (i__22706__auto___27647 + (1));
i__22706__auto___27647 = G__27648;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"GET",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq27644){
var G__27645 = cljs.core.first(seq27644);
var seq27644__$1 = cljs.core.next(seq27644);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__27645,seq27644__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27651 = arguments.length;
var i__22706__auto___27652 = (0);
while(true){
if((i__22706__auto___27652 < len__22705__auto___27651)){
args__22712__auto__.push((arguments[i__22706__auto___27652]));

var G__27653 = (i__22706__auto___27652 + (1));
i__22706__auto___27652 = G__27653;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"HEAD",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq27649){
var G__27650 = cljs.core.first(seq27649);
var seq27649__$1 = cljs.core.next(seq27649);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__27650,seq27649__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27656 = arguments.length;
var i__22706__auto___27657 = (0);
while(true){
if((i__22706__auto___27657 < len__22705__auto___27656)){
args__22712__auto__.push((arguments[i__22706__auto___27657]));

var G__27658 = (i__22706__auto___27657 + (1));
i__22706__auto___27657 = G__27658;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"POST",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq27654){
var G__27655 = cljs.core.first(seq27654);
var seq27654__$1 = cljs.core.next(seq27654);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__27655,seq27654__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27661 = arguments.length;
var i__22706__auto___27662 = (0);
while(true){
if((i__22706__auto___27662 < len__22705__auto___27661)){
args__22712__auto__.push((arguments[i__22706__auto___27662]));

var G__27663 = (i__22706__auto___27662 + (1));
i__22706__auto___27662 = G__27663;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PUT",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq27659){
var G__27660 = cljs.core.first(seq27659);
var seq27659__$1 = cljs.core.next(seq27659);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__27660,seq27659__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27666 = arguments.length;
var i__22706__auto___27667 = (0);
while(true){
if((i__22706__auto___27667 < len__22705__auto___27666)){
args__22712__auto__.push((arguments[i__22706__auto___27667]));

var G__27668 = (i__22706__auto___27667 + (1));
i__22706__auto___27667 = G__27668;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"DELETE",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq27664){
var G__27665 = cljs.core.first(seq27664);
var seq27664__$1 = cljs.core.next(seq27664);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__27665,seq27664__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27671 = arguments.length;
var i__22706__auto___27672 = (0);
while(true){
if((i__22706__auto___27672 < len__22705__auto___27671)){
args__22712__auto__.push((arguments[i__22706__auto___27672]));

var G__27673 = (i__22706__auto___27672 + (1));
i__22706__auto___27672 = G__27673;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"OPTIONS",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq27669){
var G__27670 = cljs.core.first(seq27669);
var seq27669__$1 = cljs.core.next(seq27669);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__27670,seq27669__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27676 = arguments.length;
var i__22706__auto___27677 = (0);
while(true){
if((i__22706__auto___27677 < len__22705__auto___27676)){
args__22712__auto__.push((arguments[i__22706__auto___27677]));

var G__27678 = (i__22706__auto___27677 + (1));
i__22706__auto___27677 = G__27678;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"TRACE",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq27674){
var G__27675 = cljs.core.first(seq27674);
var seq27674__$1 = cljs.core.next(seq27674);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__27675,seq27674__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27681 = arguments.length;
var i__22706__auto___27682 = (0);
while(true){
if((i__22706__auto___27682 < len__22705__auto___27681)){
args__22712__auto__.push((arguments[i__22706__auto___27682]));

var G__27683 = (i__22706__auto___27682 + (1));
i__22706__auto___27682 = G__27683;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PATCH",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq27679){
var G__27680 = cljs.core.first(seq27679);
var seq27679__$1 = cljs.core.next(seq27679);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__27680,seq27679__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__22712__auto__ = [];
var len__22705__auto___27686 = arguments.length;
var i__22706__auto___27687 = (0);
while(true){
if((i__22706__auto___27687 < len__22705__auto___27686)){
args__22712__auto__.push((arguments[i__22706__auto___27687]));

var G__27688 = (i__22706__auto___27687 + (1));
i__22706__auto___27687 = G__27688;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__27277__auto__ = cljs.core.first(opts);
return ajax.core.easy_ajax_request(uri,"PURGE",(((f__27277__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts):f__27277__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq27684){
var G__27685 = cljs.core.first(seq27684);
var seq27684__$1 = cljs.core.next(seq27684);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__27685,seq27684__$1);
});

