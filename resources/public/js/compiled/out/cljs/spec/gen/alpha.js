// Compiled by ClojureScript 1.9.854 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__40675__auto__,writer__40676__auto__,opt__40677__auto__){
return cljs.core._write.call(null,writer__40676__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50555 = arguments.length;
var i__41215__auto___50556 = (0);
while(true){
if((i__41215__auto___50556 < len__41214__auto___50555)){
args__41221__auto__.push((arguments[i__41215__auto___50556]));

var G__50557 = (i__41215__auto___50556 + (1));
i__41215__auto___50556 = G__50557;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq50554){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50554));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50559 = arguments.length;
var i__41215__auto___50560 = (0);
while(true){
if((i__41215__auto___50560 < len__41214__auto___50559)){
args__41221__auto__.push((arguments[i__41215__auto___50560]));

var G__50561 = (i__41215__auto___50560 + (1));
i__41215__auto___50560 = G__50561;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq50558){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50558));
});

var g_QMARK__50562 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_50563 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__50562){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__50562))
,null));
var mkg_50564 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__50562,g_50563){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__50562,g_50563))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__50562,g_50563,mkg_50564){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50562).call(null,x);
});})(g_QMARK__50562,g_50563,mkg_50564))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__50562,g_50563,mkg_50564){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_50564).call(null,gfn);
});})(g_QMARK__50562,g_50563,mkg_50564))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__50562,g_50563,mkg_50564){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_50563).call(null,generator);
});})(g_QMARK__50562,g_50563,mkg_50564))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__47093__auto___50584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__47093__auto___50584){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50585 = arguments.length;
var i__41215__auto___50586 = (0);
while(true){
if((i__41215__auto___50586 < len__41214__auto___50585)){
args__41221__auto__.push((arguments[i__41215__auto___50586]));

var G__50587 = (i__41215__auto___50586 + (1));
i__41215__auto___50586 = G__50587;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50584))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50584){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50584),args);
});})(g__47093__auto___50584))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__47093__auto___50584){
return (function (seq50565){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50565));
});})(g__47093__auto___50584))
;


var g__47093__auto___50588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__47093__auto___50588){
return (function cljs$spec$gen$alpha$list(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50589 = arguments.length;
var i__41215__auto___50590 = (0);
while(true){
if((i__41215__auto___50590 < len__41214__auto___50589)){
args__41221__auto__.push((arguments[i__41215__auto___50590]));

var G__50591 = (i__41215__auto___50590 + (1));
i__41215__auto___50590 = G__50591;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50588))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50588){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50588),args);
});})(g__47093__auto___50588))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__47093__auto___50588){
return (function (seq50566){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50566));
});})(g__47093__auto___50588))
;


var g__47093__auto___50592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__47093__auto___50592){
return (function cljs$spec$gen$alpha$map(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50593 = arguments.length;
var i__41215__auto___50594 = (0);
while(true){
if((i__41215__auto___50594 < len__41214__auto___50593)){
args__41221__auto__.push((arguments[i__41215__auto___50594]));

var G__50595 = (i__41215__auto___50594 + (1));
i__41215__auto___50594 = G__50595;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50592))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50592){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50592),args);
});})(g__47093__auto___50592))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__47093__auto___50592){
return (function (seq50567){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50567));
});})(g__47093__auto___50592))
;


var g__47093__auto___50596 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__47093__auto___50596){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50597 = arguments.length;
var i__41215__auto___50598 = (0);
while(true){
if((i__41215__auto___50598 < len__41214__auto___50597)){
args__41221__auto__.push((arguments[i__41215__auto___50598]));

var G__50599 = (i__41215__auto___50598 + (1));
i__41215__auto___50598 = G__50599;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50596))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50596){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50596),args);
});})(g__47093__auto___50596))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__47093__auto___50596){
return (function (seq50568){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50568));
});})(g__47093__auto___50596))
;


var g__47093__auto___50600 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__47093__auto___50600){
return (function cljs$spec$gen$alpha$set(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50601 = arguments.length;
var i__41215__auto___50602 = (0);
while(true){
if((i__41215__auto___50602 < len__41214__auto___50601)){
args__41221__auto__.push((arguments[i__41215__auto___50602]));

var G__50603 = (i__41215__auto___50602 + (1));
i__41215__auto___50602 = G__50603;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50600))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50600){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50600),args);
});})(g__47093__auto___50600))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__47093__auto___50600){
return (function (seq50569){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50569));
});})(g__47093__auto___50600))
;


var g__47093__auto___50604 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__47093__auto___50604){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50605 = arguments.length;
var i__41215__auto___50606 = (0);
while(true){
if((i__41215__auto___50606 < len__41214__auto___50605)){
args__41221__auto__.push((arguments[i__41215__auto___50606]));

var G__50607 = (i__41215__auto___50606 + (1));
i__41215__auto___50606 = G__50607;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50604))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50604){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50604),args);
});})(g__47093__auto___50604))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__47093__auto___50604){
return (function (seq50570){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50570));
});})(g__47093__auto___50604))
;


var g__47093__auto___50608 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__47093__auto___50608){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50609 = arguments.length;
var i__41215__auto___50610 = (0);
while(true){
if((i__41215__auto___50610 < len__41214__auto___50609)){
args__41221__auto__.push((arguments[i__41215__auto___50610]));

var G__50611 = (i__41215__auto___50610 + (1));
i__41215__auto___50610 = G__50611;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50608))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50608){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50608),args);
});})(g__47093__auto___50608))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__47093__auto___50608){
return (function (seq50571){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50571));
});})(g__47093__auto___50608))
;


var g__47093__auto___50612 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__47093__auto___50612){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50613 = arguments.length;
var i__41215__auto___50614 = (0);
while(true){
if((i__41215__auto___50614 < len__41214__auto___50613)){
args__41221__auto__.push((arguments[i__41215__auto___50614]));

var G__50615 = (i__41215__auto___50614 + (1));
i__41215__auto___50614 = G__50615;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50612))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50612){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50612),args);
});})(g__47093__auto___50612))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__47093__auto___50612){
return (function (seq50572){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50572));
});})(g__47093__auto___50612))
;


var g__47093__auto___50616 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__47093__auto___50616){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50617 = arguments.length;
var i__41215__auto___50618 = (0);
while(true){
if((i__41215__auto___50618 < len__41214__auto___50617)){
args__41221__auto__.push((arguments[i__41215__auto___50618]));

var G__50619 = (i__41215__auto___50618 + (1));
i__41215__auto___50618 = G__50619;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50616))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50616){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50616),args);
});})(g__47093__auto___50616))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__47093__auto___50616){
return (function (seq50573){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50573));
});})(g__47093__auto___50616))
;


var g__47093__auto___50620 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__47093__auto___50620){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50621 = arguments.length;
var i__41215__auto___50622 = (0);
while(true){
if((i__41215__auto___50622 < len__41214__auto___50621)){
args__41221__auto__.push((arguments[i__41215__auto___50622]));

var G__50623 = (i__41215__auto___50622 + (1));
i__41215__auto___50622 = G__50623;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50620))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50620){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50620),args);
});})(g__47093__auto___50620))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__47093__auto___50620){
return (function (seq50574){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50574));
});})(g__47093__auto___50620))
;


var g__47093__auto___50624 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__47093__auto___50624){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50625 = arguments.length;
var i__41215__auto___50626 = (0);
while(true){
if((i__41215__auto___50626 < len__41214__auto___50625)){
args__41221__auto__.push((arguments[i__41215__auto___50626]));

var G__50627 = (i__41215__auto___50626 + (1));
i__41215__auto___50626 = G__50627;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50624))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50624){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50624),args);
});})(g__47093__auto___50624))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__47093__auto___50624){
return (function (seq50575){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50575));
});})(g__47093__auto___50624))
;


var g__47093__auto___50628 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__47093__auto___50628){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50629 = arguments.length;
var i__41215__auto___50630 = (0);
while(true){
if((i__41215__auto___50630 < len__41214__auto___50629)){
args__41221__auto__.push((arguments[i__41215__auto___50630]));

var G__50631 = (i__41215__auto___50630 + (1));
i__41215__auto___50630 = G__50631;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50628))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50628),args);
});})(g__47093__auto___50628))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__47093__auto___50628){
return (function (seq50576){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50576));
});})(g__47093__auto___50628))
;


var g__47093__auto___50632 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__47093__auto___50632){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50633 = arguments.length;
var i__41215__auto___50634 = (0);
while(true){
if((i__41215__auto___50634 < len__41214__auto___50633)){
args__41221__auto__.push((arguments[i__41215__auto___50634]));

var G__50635 = (i__41215__auto___50634 + (1));
i__41215__auto___50634 = G__50635;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50632))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50632),args);
});})(g__47093__auto___50632))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__47093__auto___50632){
return (function (seq50577){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50577));
});})(g__47093__auto___50632))
;


var g__47093__auto___50636 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__47093__auto___50636){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50637 = arguments.length;
var i__41215__auto___50638 = (0);
while(true){
if((i__41215__auto___50638 < len__41214__auto___50637)){
args__41221__auto__.push((arguments[i__41215__auto___50638]));

var G__50639 = (i__41215__auto___50638 + (1));
i__41215__auto___50638 = G__50639;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50636))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50636),args);
});})(g__47093__auto___50636))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__47093__auto___50636){
return (function (seq50578){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50578));
});})(g__47093__auto___50636))
;


var g__47093__auto___50640 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__47093__auto___50640){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50641 = arguments.length;
var i__41215__auto___50642 = (0);
while(true){
if((i__41215__auto___50642 < len__41214__auto___50641)){
args__41221__auto__.push((arguments[i__41215__auto___50642]));

var G__50643 = (i__41215__auto___50642 + (1));
i__41215__auto___50642 = G__50643;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50640))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50640),args);
});})(g__47093__auto___50640))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__47093__auto___50640){
return (function (seq50579){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50579));
});})(g__47093__auto___50640))
;


var g__47093__auto___50644 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__47093__auto___50644){
return (function cljs$spec$gen$alpha$return(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50645 = arguments.length;
var i__41215__auto___50646 = (0);
while(true){
if((i__41215__auto___50646 < len__41214__auto___50645)){
args__41221__auto__.push((arguments[i__41215__auto___50646]));

var G__50647 = (i__41215__auto___50646 + (1));
i__41215__auto___50646 = G__50647;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50644))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50644),args);
});})(g__47093__auto___50644))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__47093__auto___50644){
return (function (seq50580){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50580));
});})(g__47093__auto___50644))
;


var g__47093__auto___50648 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__47093__auto___50648){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50649 = arguments.length;
var i__41215__auto___50650 = (0);
while(true){
if((i__41215__auto___50650 < len__41214__auto___50649)){
args__41221__auto__.push((arguments[i__41215__auto___50650]));

var G__50651 = (i__41215__auto___50650 + (1));
i__41215__auto___50650 = G__50651;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50648))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50648),args);
});})(g__47093__auto___50648))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__47093__auto___50648){
return (function (seq50581){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50581));
});})(g__47093__auto___50648))
;


var g__47093__auto___50652 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__47093__auto___50652){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50653 = arguments.length;
var i__41215__auto___50654 = (0);
while(true){
if((i__41215__auto___50654 < len__41214__auto___50653)){
args__41221__auto__.push((arguments[i__41215__auto___50654]));

var G__50655 = (i__41215__auto___50654 + (1));
i__41215__auto___50654 = G__50655;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50652))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50652),args);
});})(g__47093__auto___50652))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__47093__auto___50652){
return (function (seq50582){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50582));
});})(g__47093__auto___50652))
;


var g__47093__auto___50656 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__47093__auto___50656){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50657 = arguments.length;
var i__41215__auto___50658 = (0);
while(true){
if((i__41215__auto___50658 < len__41214__auto___50657)){
args__41221__auto__.push((arguments[i__41215__auto___50658]));

var G__50659 = (i__41215__auto___50658 + (1));
i__41215__auto___50658 = G__50659;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47093__auto___50656))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47093__auto___50656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__47093__auto___50656),args);
});})(g__47093__auto___50656))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__47093__auto___50656){
return (function (seq50583){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50583));
});})(g__47093__auto___50656))
;

var g__47106__auto___50681 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__47106__auto___50681){
return (function cljs$spec$gen$alpha$any(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50682 = arguments.length;
var i__41215__auto___50683 = (0);
while(true){
if((i__41215__auto___50683 < len__41214__auto___50682)){
args__41221__auto__.push((arguments[i__41215__auto___50683]));

var G__50684 = (i__41215__auto___50683 + (1));
i__41215__auto___50683 = G__50684;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50681))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50681){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50681);
});})(g__47106__auto___50681))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__47106__auto___50681){
return (function (seq50660){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50660));
});})(g__47106__auto___50681))
;


var g__47106__auto___50685 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__47106__auto___50685){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50686 = arguments.length;
var i__41215__auto___50687 = (0);
while(true){
if((i__41215__auto___50687 < len__41214__auto___50686)){
args__41221__auto__.push((arguments[i__41215__auto___50687]));

var G__50688 = (i__41215__auto___50687 + (1));
i__41215__auto___50687 = G__50688;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50685))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50685){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50685);
});})(g__47106__auto___50685))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__47106__auto___50685){
return (function (seq50661){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50661));
});})(g__47106__auto___50685))
;


var g__47106__auto___50689 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__47106__auto___50689){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50690 = arguments.length;
var i__41215__auto___50691 = (0);
while(true){
if((i__41215__auto___50691 < len__41214__auto___50690)){
args__41221__auto__.push((arguments[i__41215__auto___50691]));

var G__50692 = (i__41215__auto___50691 + (1));
i__41215__auto___50691 = G__50692;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50689))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50689){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50689);
});})(g__47106__auto___50689))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__47106__auto___50689){
return (function (seq50662){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50662));
});})(g__47106__auto___50689))
;


var g__47106__auto___50693 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__47106__auto___50693){
return (function cljs$spec$gen$alpha$char(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50694 = arguments.length;
var i__41215__auto___50695 = (0);
while(true){
if((i__41215__auto___50695 < len__41214__auto___50694)){
args__41221__auto__.push((arguments[i__41215__auto___50695]));

var G__50696 = (i__41215__auto___50695 + (1));
i__41215__auto___50695 = G__50696;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50693))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50693){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50693);
});})(g__47106__auto___50693))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__47106__auto___50693){
return (function (seq50663){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50663));
});})(g__47106__auto___50693))
;


var g__47106__auto___50697 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__47106__auto___50697){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50698 = arguments.length;
var i__41215__auto___50699 = (0);
while(true){
if((i__41215__auto___50699 < len__41214__auto___50698)){
args__41221__auto__.push((arguments[i__41215__auto___50699]));

var G__50700 = (i__41215__auto___50699 + (1));
i__41215__auto___50699 = G__50700;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50697))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50697){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50697);
});})(g__47106__auto___50697))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__47106__auto___50697){
return (function (seq50664){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50664));
});})(g__47106__auto___50697))
;


var g__47106__auto___50701 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__47106__auto___50701){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50702 = arguments.length;
var i__41215__auto___50703 = (0);
while(true){
if((i__41215__auto___50703 < len__41214__auto___50702)){
args__41221__auto__.push((arguments[i__41215__auto___50703]));

var G__50704 = (i__41215__auto___50703 + (1));
i__41215__auto___50703 = G__50704;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50701))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50701){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50701);
});})(g__47106__auto___50701))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__47106__auto___50701){
return (function (seq50665){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50665));
});})(g__47106__auto___50701))
;


var g__47106__auto___50705 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__47106__auto___50705){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50706 = arguments.length;
var i__41215__auto___50707 = (0);
while(true){
if((i__41215__auto___50707 < len__41214__auto___50706)){
args__41221__auto__.push((arguments[i__41215__auto___50707]));

var G__50708 = (i__41215__auto___50707 + (1));
i__41215__auto___50707 = G__50708;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50705))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50705){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50705);
});})(g__47106__auto___50705))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__47106__auto___50705){
return (function (seq50666){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50666));
});})(g__47106__auto___50705))
;


var g__47106__auto___50709 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__47106__auto___50709){
return (function cljs$spec$gen$alpha$double(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50710 = arguments.length;
var i__41215__auto___50711 = (0);
while(true){
if((i__41215__auto___50711 < len__41214__auto___50710)){
args__41221__auto__.push((arguments[i__41215__auto___50711]));

var G__50712 = (i__41215__auto___50711 + (1));
i__41215__auto___50711 = G__50712;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50709))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50709){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50709);
});})(g__47106__auto___50709))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__47106__auto___50709){
return (function (seq50667){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50667));
});})(g__47106__auto___50709))
;


var g__47106__auto___50713 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__47106__auto___50713){
return (function cljs$spec$gen$alpha$int(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50714 = arguments.length;
var i__41215__auto___50715 = (0);
while(true){
if((i__41215__auto___50715 < len__41214__auto___50714)){
args__41221__auto__.push((arguments[i__41215__auto___50715]));

var G__50716 = (i__41215__auto___50715 + (1));
i__41215__auto___50715 = G__50716;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50713))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50713){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50713);
});})(g__47106__auto___50713))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__47106__auto___50713){
return (function (seq50668){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50668));
});})(g__47106__auto___50713))
;


var g__47106__auto___50717 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__47106__auto___50717){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50718 = arguments.length;
var i__41215__auto___50719 = (0);
while(true){
if((i__41215__auto___50719 < len__41214__auto___50718)){
args__41221__auto__.push((arguments[i__41215__auto___50719]));

var G__50720 = (i__41215__auto___50719 + (1));
i__41215__auto___50719 = G__50720;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50717))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50717){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50717);
});})(g__47106__auto___50717))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__47106__auto___50717){
return (function (seq50669){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50669));
});})(g__47106__auto___50717))
;


var g__47106__auto___50721 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__47106__auto___50721){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50722 = arguments.length;
var i__41215__auto___50723 = (0);
while(true){
if((i__41215__auto___50723 < len__41214__auto___50722)){
args__41221__auto__.push((arguments[i__41215__auto___50723]));

var G__50724 = (i__41215__auto___50723 + (1));
i__41215__auto___50723 = G__50724;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50721))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50721){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50721);
});})(g__47106__auto___50721))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__47106__auto___50721){
return (function (seq50670){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50670));
});})(g__47106__auto___50721))
;


var g__47106__auto___50725 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__47106__auto___50725){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50726 = arguments.length;
var i__41215__auto___50727 = (0);
while(true){
if((i__41215__auto___50727 < len__41214__auto___50726)){
args__41221__auto__.push((arguments[i__41215__auto___50727]));

var G__50728 = (i__41215__auto___50727 + (1));
i__41215__auto___50727 = G__50728;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50725))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50725){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50725);
});})(g__47106__auto___50725))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__47106__auto___50725){
return (function (seq50671){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50671));
});})(g__47106__auto___50725))
;


var g__47106__auto___50729 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__47106__auto___50729){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50730 = arguments.length;
var i__41215__auto___50731 = (0);
while(true){
if((i__41215__auto___50731 < len__41214__auto___50730)){
args__41221__auto__.push((arguments[i__41215__auto___50731]));

var G__50732 = (i__41215__auto___50731 + (1));
i__41215__auto___50731 = G__50732;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50729))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50729){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50729);
});})(g__47106__auto___50729))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__47106__auto___50729){
return (function (seq50672){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50672));
});})(g__47106__auto___50729))
;


var g__47106__auto___50733 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__47106__auto___50733){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50734 = arguments.length;
var i__41215__auto___50735 = (0);
while(true){
if((i__41215__auto___50735 < len__41214__auto___50734)){
args__41221__auto__.push((arguments[i__41215__auto___50735]));

var G__50736 = (i__41215__auto___50735 + (1));
i__41215__auto___50735 = G__50736;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50733))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50733){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50733);
});})(g__47106__auto___50733))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__47106__auto___50733){
return (function (seq50673){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50673));
});})(g__47106__auto___50733))
;


var g__47106__auto___50737 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__47106__auto___50737){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50738 = arguments.length;
var i__41215__auto___50739 = (0);
while(true){
if((i__41215__auto___50739 < len__41214__auto___50738)){
args__41221__auto__.push((arguments[i__41215__auto___50739]));

var G__50740 = (i__41215__auto___50739 + (1));
i__41215__auto___50739 = G__50740;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50737))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50737){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50737);
});})(g__47106__auto___50737))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__47106__auto___50737){
return (function (seq50674){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50674));
});})(g__47106__auto___50737))
;


var g__47106__auto___50741 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__47106__auto___50741){
return (function cljs$spec$gen$alpha$string(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50742 = arguments.length;
var i__41215__auto___50743 = (0);
while(true){
if((i__41215__auto___50743 < len__41214__auto___50742)){
args__41221__auto__.push((arguments[i__41215__auto___50743]));

var G__50744 = (i__41215__auto___50743 + (1));
i__41215__auto___50743 = G__50744;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50741))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50741){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50741);
});})(g__47106__auto___50741))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__47106__auto___50741){
return (function (seq50675){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50675));
});})(g__47106__auto___50741))
;


var g__47106__auto___50745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__47106__auto___50745){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50746 = arguments.length;
var i__41215__auto___50747 = (0);
while(true){
if((i__41215__auto___50747 < len__41214__auto___50746)){
args__41221__auto__.push((arguments[i__41215__auto___50747]));

var G__50748 = (i__41215__auto___50747 + (1));
i__41215__auto___50747 = G__50748;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50745))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50745){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50745);
});})(g__47106__auto___50745))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__47106__auto___50745){
return (function (seq50676){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50676));
});})(g__47106__auto___50745))
;


var g__47106__auto___50749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__47106__auto___50749){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50750 = arguments.length;
var i__41215__auto___50751 = (0);
while(true){
if((i__41215__auto___50751 < len__41214__auto___50750)){
args__41221__auto__.push((arguments[i__41215__auto___50751]));

var G__50752 = (i__41215__auto___50751 + (1));
i__41215__auto___50751 = G__50752;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50749))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50749){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50749);
});})(g__47106__auto___50749))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__47106__auto___50749){
return (function (seq50677){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50677));
});})(g__47106__auto___50749))
;


var g__47106__auto___50753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__47106__auto___50753){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50754 = arguments.length;
var i__41215__auto___50755 = (0);
while(true){
if((i__41215__auto___50755 < len__41214__auto___50754)){
args__41221__auto__.push((arguments[i__41215__auto___50755]));

var G__50756 = (i__41215__auto___50755 + (1));
i__41215__auto___50755 = G__50756;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50753))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50753){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50753);
});})(g__47106__auto___50753))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__47106__auto___50753){
return (function (seq50678){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50678));
});})(g__47106__auto___50753))
;


var g__47106__auto___50757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__47106__auto___50757){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50758 = arguments.length;
var i__41215__auto___50759 = (0);
while(true){
if((i__41215__auto___50759 < len__41214__auto___50758)){
args__41221__auto__.push((arguments[i__41215__auto___50759]));

var G__50760 = (i__41215__auto___50759 + (1));
i__41215__auto___50759 = G__50760;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50757))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50757){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50757);
});})(g__47106__auto___50757))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__47106__auto___50757){
return (function (seq50679){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50679));
});})(g__47106__auto___50757))
;


var g__47106__auto___50761 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__47106__auto___50761){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50762 = arguments.length;
var i__41215__auto___50763 = (0);
while(true){
if((i__41215__auto___50763 < len__41214__auto___50762)){
args__41221__auto__.push((arguments[i__41215__auto___50763]));

var G__50764 = (i__41215__auto___50763 + (1));
i__41215__auto___50763 = G__50764;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});})(g__47106__auto___50761))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__47106__auto___50761){
return (function (args){
return cljs.core.deref.call(null,g__47106__auto___50761);
});})(g__47106__auto___50761))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__47106__auto___50761){
return (function (seq50680){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50680));
});})(g__47106__auto___50761))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__41221__auto__ = [];
var len__41214__auto___50767 = arguments.length;
var i__41215__auto___50768 = (0);
while(true){
if((i__41215__auto___50768 < len__41214__auto___50767)){
args__41221__auto__.push((arguments[i__41215__auto___50768]));

var G__50769 = (i__41215__auto___50768 + (1));
i__41215__auto___50768 = G__50769;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__50765_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50765_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq50766){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50766));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__50770_SHARP_){
return (new Date(p1__50770_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1501581671469
