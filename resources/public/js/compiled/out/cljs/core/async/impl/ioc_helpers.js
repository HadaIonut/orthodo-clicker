// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),cljs.core.cst$kw$finished);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if(typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665 = (function (f,meta30666){
this.f = f;
this.meta30666 = meta30666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30667,meta30666__$1){
var self__ = this;
var _30667__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665(self__.f,meta30666__$1));
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30667){
var self__ = this;
var _30667__$1 = this;
return self__.meta30666;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$meta30666], null);
});

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers30665";

cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers30665");
});

cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers30665 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers30665(f__$1,meta30666){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665(f__$1,meta30666));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers30665(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__30668 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__30668.cljs$core$IFn$_invoke$arity$1 ? fexpr__30668.cljs$core$IFn$_invoke$arity$1(state) : fexpr__30668.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e30669){if((e30669 instanceof Object)){
var ex = e30669;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e30669;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__4655__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_30670_30672 = state;
(statearr_30670_30672[(2)] = x);

(statearr_30670_30672[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_30671_30673 = state;
(statearr_30671_30673[(2)] = cljs.core.deref(cb));

(statearr_30671_30673[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__4655__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_30674_30676 = state;
(statearr_30674_30676[(2)] = ret_val);

(statearr_30674_30676[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__4655__auto__)){
var cb = temp__4655__auto__;
var statearr_30675_30677 = state;
(statearr_30675_30677[(2)] = cljs.core.deref(cb));

(statearr_30675_30677[(1)] = blk);


return cljs.core.cst$kw$recur;
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){
return null;
});})(c))
));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap,__hash){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__22181__auto__,k__22182__auto__){
var self__ = this;
var this__22181__auto____$1 = this;
return this__22181__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__22182__auto__,null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__22183__auto__,k30679,else__22184__auto__){
var self__ = this;
var this__22183__auto____$1 = this;
var G__30683 = k30679;
var G__30683__$1 = (((G__30683 instanceof cljs.core.Keyword))?G__30683.fqn:null);
switch (G__30683__$1) {
case "catch-block":
return self__.catch_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "finally-block":
return self__.finally_block;

break;
case "continue-block":
return self__.continue_block;

break;
case "prev":
return self__.prev;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30679,else__22184__auto__);

}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__22195__auto__,writer__22196__auto__,opts__22197__auto__){
var self__ = this;
var this__22195__auto____$1 = this;
var pr_pair__22198__auto__ = ((function (this__22195__auto____$1){
return (function (keyval__22199__auto__){
return cljs.core.pr_sequential_writer(writer__22196__auto__,cljs.core.pr_writer,""," ","",opts__22197__auto__,keyval__22199__auto__);
});})(this__22195__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__22196__auto__,pr_pair__22198__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__22197__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30678){
var self__ = this;
var G__30678__$1 = this;
return (new cljs.core.RecordIter((0),G__30678__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$catch_DASH_block,cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__22179__auto__){
var self__ = this;
var this__22179__auto____$1 = this;
return self__.__meta;
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__22176__auto__){
var self__ = this;
var this__22176__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__22185__auto__){
var self__ = this;
var this__22185__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__22177__auto__){
var self__ = this;
var this__22177__auto____$1 = this;
var h__21995__auto__ = self__.__hash;
if(!((h__21995__auto__ == null))){
return h__21995__auto__;
} else {
var h__21995__auto____$1 = (function (){var fexpr__30684 = ((function (h__21995__auto__,this__22177__auto____$1){
return (function (coll__22178__auto__){
return (846900531 ^ cljs.core.hash_unordered_coll(coll__22178__auto__));
});})(h__21995__auto__,this__22177__auto____$1))
;
return fexpr__30684(this__22177__auto____$1);
})();
self__.__hash = h__21995__auto____$1;

return h__21995__auto____$1;
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30680,other30681){
var self__ = this;
var this30680__$1 = this;
return (!((other30681 == null))) && ((this30680__$1.constructor === other30681.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30680__$1.catch_block,other30681.catch_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30680__$1.catch_exception,other30681.catch_exception)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30680__$1.finally_block,other30681.finally_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30680__$1.continue_block,other30681.continue_block)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30680__$1.prev,other30681.prev)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30680__$1.__extmap,other30681.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__22190__auto__,k__22191__auto__){
var self__ = this;
var this__22190__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$finally_DASH_block,null,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.cst$kw$catch_DASH_exception,null,cljs.core.cst$kw$prev,null,cljs.core.cst$kw$continue_DASH_block,null], null), null),k__22191__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__22190__auto____$1),self__.__meta),k__22191__auto__);
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__22191__auto__)),null));
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__22188__auto__,k__22189__auto__,G__30678){
var self__ = this;
var this__22188__auto____$1 = this;
var pred__30685 = cljs.core.keyword_identical_QMARK_;
var expr__30686 = k__22189__auto__;
if(cljs.core.truth_((function (){var G__30688 = cljs.core.cst$kw$catch_DASH_block;
var G__30689 = expr__30686;
return (pred__30685.cljs$core$IFn$_invoke$arity$2 ? pred__30685.cljs$core$IFn$_invoke$arity$2(G__30688,G__30689) : pred__30685.call(null,G__30688,G__30689));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__30678,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30690 = cljs.core.cst$kw$catch_DASH_exception;
var G__30691 = expr__30686;
return (pred__30685.cljs$core$IFn$_invoke$arity$2 ? pred__30685.cljs$core$IFn$_invoke$arity$2(G__30690,G__30691) : pred__30685.call(null,G__30690,G__30691));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__30678,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30692 = cljs.core.cst$kw$finally_DASH_block;
var G__30693 = expr__30686;
return (pred__30685.cljs$core$IFn$_invoke$arity$2 ? pred__30685.cljs$core$IFn$_invoke$arity$2(G__30692,G__30693) : pred__30685.call(null,G__30692,G__30693));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__30678,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30694 = cljs.core.cst$kw$continue_DASH_block;
var G__30695 = expr__30686;
return (pred__30685.cljs$core$IFn$_invoke$arity$2 ? pred__30685.cljs$core$IFn$_invoke$arity$2(G__30694,G__30695) : pred__30685.call(null,G__30694,G__30695));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__30678,self__.prev,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__30696 = cljs.core.cst$kw$prev;
var G__30697 = expr__30686;
return (pred__30685.cljs$core$IFn$_invoke$arity$2 ? pred__30685.cljs$core$IFn$_invoke$arity$2(G__30696,G__30697) : pred__30685.call(null,G__30696,G__30697));
})())){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__30678,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__22189__auto__,G__30678),null));
}
}
}
}
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__22193__auto__){
var self__ = this;
var this__22193__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_block,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$catch_DASH_exception,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$finally_DASH_block,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$continue_DASH_block,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$prev,self__.prev],null))], null),self__.__extmap));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__22180__auto__,G__30678){
var self__ = this;
var this__22180__auto____$1 = this;
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__30678,self__.__extmap,self__.__hash));
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__22186__auto__,entry__22187__auto__){
var self__ = this;
var this__22186__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__22187__auto__)){
return this__22186__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__22187__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__22186__auto____$1,entry__22187__auto__);
}
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$catch_DASH_block,cljs.core.with_meta(cljs.core.cst$sym$catch_DASH_exception,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$Class], null)),cljs.core.cst$sym$finally_DASH_block,cljs.core.cst$sym$continue_DASH_block,cljs.core.cst$sym$prev], null);
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__22217__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__22217__auto__,writer__22218__auto__){
return cljs.core._write(writer__22218__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});

cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev,null,null,null));
});

cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function cljs$core$async$impl$ioc_helpers$map__GT_ExceptionFrame(G__30682){
return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(G__30682),cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(G__30682),cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(G__30682),cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(G__30682),cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(G__30682),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30682,cljs.core.cst$kw$catch_DASH_block,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,cljs.core.cst$kw$finally_DASH_block,cljs.core.cst$kw$continue_DASH_block,cljs.core.cst$kw$prev], 0))),null));
});

cljs.core.async.impl.ioc_helpers.add_exception_frame = (function cljs$core$async$impl$ioc_helpers$add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){
var statearr_30699 = state;
(statearr_30699[(4)] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,(4))));

return statearr_30699;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function cljs$core$async$impl$ioc_helpers$process_exception(state){
while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,(4));
var catch_block = cljs.core.cst$kw$catch_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
var catch_exception = cljs.core.cst$kw$catch_DASH_exception.cljs$core$IFn$_invoke$arity$1(exception_frame);
var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,(5));
if(cljs.core.truth_((function (){var and__21529__auto__ = exception;
if(cljs.core.truth_(and__21529__auto__)){
return cljs.core.not(exception_frame);
} else {
return and__21529__auto__;
}
})())){
throw exception;
} else {
if(cljs.core.truth_((function (){var and__21529__auto__ = exception;
if(cljs.core.truth_(and__21529__auto__)){
var and__21529__auto____$1 = catch_block;
if(cljs.core.truth_(and__21529__auto____$1)){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,catch_exception)) || ((exception instanceof catch_exception));
} else {
return and__21529__auto____$1;
}
} else {
return and__21529__auto__;
}
})())){
var statearr_30700 = state;
(statearr_30700[(1)] = catch_block);

(statearr_30700[(2)] = exception);

(statearr_30700[(5)] = null);

(statearr_30700[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.cst$kw$catch_DASH_block,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$catch_DASH_exception,null], 0)));

return statearr_30700;
} else {
if(cljs.core.truth_((function (){var and__21529__auto__ = exception;
if(cljs.core.truth_(and__21529__auto__)){
return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else {
return and__21529__auto__;
}
})())){
var statearr_30701_30705 = state;
(statearr_30701_30705[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));


var G__30706 = state;
state = G__30706;
continue;
} else {
if(cljs.core.truth_((function (){var and__21529__auto__ = exception;
if(cljs.core.truth_(and__21529__auto__)){
var and__21529__auto____$1 = cljs.core.not(catch_block);
if(and__21529__auto____$1){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__21529__auto____$1;
}
} else {
return and__21529__auto__;
}
})())){
var statearr_30702 = state;
(statearr_30702[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_30702[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_30702;
} else {
if(cljs.core.truth_((function (){var and__21529__auto__ = cljs.core.not(exception);
if(and__21529__auto__){
return cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else {
return and__21529__auto__;
}
})())){
var statearr_30703 = state;
(statearr_30703[(1)] = cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_30703[(4)] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.cst$kw$finally_DASH_block,null));

return statearr_30703;
} else {
if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.cst$kw$finally_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame)))){
var statearr_30704 = state;
(statearr_30704[(1)] = cljs.core.cst$kw$continue_DASH_block.cljs$core$IFn$_invoke$arity$1(exception_frame));

(statearr_30704[(4)] = cljs.core.cst$kw$prev.cljs$core$IFn$_invoke$arity$1(exception_frame));

return statearr_30704;
} else {
throw (new Error("No matching clause"));

}
}
}
}
}
}
break;
}
});
