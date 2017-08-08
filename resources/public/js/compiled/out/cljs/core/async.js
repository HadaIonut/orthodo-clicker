// Compiled by ClojureScript 1.9.854 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25756 = arguments.length;
switch (G__25756) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25757 = (function (f,blockable,meta25758){
this.f = f;
this.blockable = blockable;
this.meta25758 = meta25758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25759,meta25758__$1){
var self__ = this;
var _25759__$1 = this;
return (new cljs.core.async.t_cljs$core$async25757(self__.f,self__.blockable,meta25758__$1));
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25759){
var self__ = this;
var _25759__$1 = this;
return self__.meta25758;
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25757.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta25758], null);
});

cljs.core.async.t_cljs$core$async25757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25757";

cljs.core.async.t_cljs$core$async25757.cljs$lang$ctorPrWriter = (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async25757");
});

cljs.core.async.__GT_t_cljs$core$async25757 = (function cljs$core$async$__GT_t_cljs$core$async25757(f__$1,blockable__$1,meta25758){
return (new cljs.core.async.t_cljs$core$async25757(f__$1,blockable__$1,meta25758));
});

}

return (new cljs.core.async.t_cljs$core$async25757(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__25763 = arguments.length;
switch (G__25763) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__25766 = arguments.length;
switch (G__25766) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__25769 = arguments.length;
switch (G__25769) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_25771 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25771) : fn1.call(null,val_25771));
} else {
cljs.core.async.impl.dispatch.run(((function (val_25771,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_25771) : fn1.call(null,val_25771));
});})(val_25771,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25773 = arguments.length;
switch (G__25773) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22487__auto___25775 = n;
var x_25776 = (0);
while(true){
if((x_25776 < n__22487__auto___25775)){
(a[x_25776] = (0));

var G__25777 = (x_25776 + (1));
x_25776 = G__25777;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__25778 = (i + (1));
i = G__25778;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async25779 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25779 = (function (flag,meta25780){
this.flag = flag;
this.meta25780 = meta25780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25781,meta25780__$1){
var self__ = this;
var _25781__$1 = this;
return (new cljs.core.async.t_cljs$core$async25779(self__.flag,meta25780__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25781){
var self__ = this;
var _25781__$1 = this;
return self__.meta25780;
});})(flag))
;

cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25779.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25779.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta25780], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25779.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25779";

cljs.core.async.t_cljs$core$async25779.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async25779");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25779 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25779(flag__$1,meta25780){
return (new cljs.core.async.t_cljs$core$async25779(flag__$1,meta25780));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25779(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25782 = (function (flag,cb,meta25783){
this.flag = flag;
this.cb = cb;
this.meta25783 = meta25783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25784,meta25783__$1){
var self__ = this;
var _25784__$1 = this;
return (new cljs.core.async.t_cljs$core$async25782(self__.flag,self__.cb,meta25783__$1));
});

cljs.core.async.t_cljs$core$async25782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25784){
var self__ = this;
var _25784__$1 = this;
return self__.meta25783;
});

cljs.core.async.t_cljs$core$async25782.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async25782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25782.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta25783], null);
});

cljs.core.async.t_cljs$core$async25782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25782";

cljs.core.async.t_cljs$core$async25782.cljs$lang$ctorPrWriter = (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async25782");
});

cljs.core.async.__GT_t_cljs$core$async25782 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25782(flag__$1,cb__$1,meta25783){
return (new cljs.core.async.t_cljs$core$async25782(flag__$1,cb__$1,meta25783));
});

}

return (new cljs.core.async.t_cljs$core$async25782(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25785_SHARP_){
var G__25787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25785_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25787) : fret.call(null,G__25787));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25786_SHARP_){
var G__25788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25786_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__25788) : fret.call(null,G__25788));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__21547__auto__ = wport;
if(cljs.core.truth_(or__21547__auto__)){
return or__21547__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25789 = (i + (1));
i = G__25789;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21547__auto__ = ret;
if(cljs.core.truth_(or__21547__auto__)){
return or__21547__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__21535__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__21535__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__21535__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22718__auto__ = [];
var len__22711__auto___25795 = arguments.length;
var i__22712__auto___25796 = (0);
while(true){
if((i__22712__auto___25796 < len__22711__auto___25795)){
args__22718__auto__.push((arguments[i__22712__auto___25796]));

var G__25797 = (i__22712__auto___25796 + (1));
i__22712__auto___25796 = G__25797;
continue;
} else {
}
break;
}

var argseq__22719__auto__ = ((((1) < args__22718__auto__.length))?(new cljs.core.IndexedSeq(args__22718__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22719__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25792){
var map__25793 = p__25792;
var map__25793__$1 = ((((!((map__25793 == null)))?((((map__25793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25793):map__25793);
var opts = map__25793__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25790){
var G__25791 = cljs.core.first(seq25790);
var seq25790__$1 = cljs.core.next(seq25790);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25791,seq25790__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__25799 = arguments.length;
switch (G__25799) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25710__auto___25845 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___25845){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___25845){
return (function (state_25823){
var state_val_25824 = (state_25823[(1)]);
if((state_val_25824 === (7))){
var inst_25819 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25825_25846 = state_25823__$1;
(statearr_25825_25846[(2)] = inst_25819);

(statearr_25825_25846[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (1))){
var state_25823__$1 = state_25823;
var statearr_25826_25847 = state_25823__$1;
(statearr_25826_25847[(2)] = null);

(statearr_25826_25847[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (4))){
var inst_25802 = (state_25823[(7)]);
var inst_25802__$1 = (state_25823[(2)]);
var inst_25803 = (inst_25802__$1 == null);
var state_25823__$1 = (function (){var statearr_25827 = state_25823;
(statearr_25827[(7)] = inst_25802__$1);

return statearr_25827;
})();
if(cljs.core.truth_(inst_25803)){
var statearr_25828_25848 = state_25823__$1;
(statearr_25828_25848[(1)] = (5));

} else {
var statearr_25829_25849 = state_25823__$1;
(statearr_25829_25849[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (13))){
var state_25823__$1 = state_25823;
var statearr_25830_25850 = state_25823__$1;
(statearr_25830_25850[(2)] = null);

(statearr_25830_25850[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (6))){
var inst_25802 = (state_25823[(7)]);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25823__$1,(11),to,inst_25802);
} else {
if((state_val_25824 === (3))){
var inst_25821 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25823__$1,inst_25821);
} else {
if((state_val_25824 === (12))){
var state_25823__$1 = state_25823;
var statearr_25831_25851 = state_25823__$1;
(statearr_25831_25851[(2)] = null);

(statearr_25831_25851[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (2))){
var state_25823__$1 = state_25823;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25823__$1,(4),from);
} else {
if((state_val_25824 === (11))){
var inst_25812 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
if(cljs.core.truth_(inst_25812)){
var statearr_25832_25852 = state_25823__$1;
(statearr_25832_25852[(1)] = (12));

} else {
var statearr_25833_25853 = state_25823__$1;
(statearr_25833_25853[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (9))){
var state_25823__$1 = state_25823;
var statearr_25834_25854 = state_25823__$1;
(statearr_25834_25854[(2)] = null);

(statearr_25834_25854[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (5))){
var state_25823__$1 = state_25823;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25835_25855 = state_25823__$1;
(statearr_25835_25855[(1)] = (8));

} else {
var statearr_25836_25856 = state_25823__$1;
(statearr_25836_25856[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (14))){
var inst_25817 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25837_25857 = state_25823__$1;
(statearr_25837_25857[(2)] = inst_25817);

(statearr_25837_25857[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (10))){
var inst_25809 = (state_25823[(2)]);
var state_25823__$1 = state_25823;
var statearr_25838_25858 = state_25823__$1;
(statearr_25838_25858[(2)] = inst_25809);

(statearr_25838_25858[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25824 === (8))){
var inst_25806 = cljs.core.async.close_BANG_(to);
var state_25823__$1 = state_25823;
var statearr_25839_25859 = state_25823__$1;
(statearr_25839_25859[(2)] = inst_25806);

(statearr_25839_25859[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___25845))
;
return ((function (switch__25610__auto__,c__25710__auto___25845){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_25840 = [null,null,null,null,null,null,null,null];
(statearr_25840[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_25840[(1)] = (1));

return statearr_25840;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_25823){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_25823);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e25841){if((e25841 instanceof Object)){
var ex__25614__auto__ = e25841;
var statearr_25842_25860 = state_25823;
(statearr_25842_25860[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25823);

return cljs.core.cst$kw$recur;
} else {
throw e25841;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__25861 = state_25823;
state_25823 = G__25861;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_25823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_25823);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___25845))
})();
var state__25712__auto__ = (function (){var statearr_25843 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_25843[(6)] = c__25710__auto___25845);

return statearr_25843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___25845))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__25862){
var vec__25863 = p__25862;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25863,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25863,(1),null);
var job = vec__25863;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__25710__auto___26034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___26034,res,vec__25863,v,p,job,jobs,results){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___26034,res,vec__25863,v,p,job,jobs,results){
return (function (state_25870){
var state_val_25871 = (state_25870[(1)]);
if((state_val_25871 === (1))){
var state_25870__$1 = state_25870;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25870__$1,(2),res,v);
} else {
if((state_val_25871 === (2))){
var inst_25867 = (state_25870[(2)]);
var inst_25868 = cljs.core.async.close_BANG_(res);
var state_25870__$1 = (function (){var statearr_25872 = state_25870;
(statearr_25872[(7)] = inst_25867);

return statearr_25872;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_25870__$1,inst_25868);
} else {
return null;
}
}
});})(c__25710__auto___26034,res,vec__25863,v,p,job,jobs,results))
;
return ((function (switch__25610__auto__,c__25710__auto___26034,res,vec__25863,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0 = (function (){
var statearr_25873 = [null,null,null,null,null,null,null,null];
(statearr_25873[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__);

(statearr_25873[(1)] = (1));

return statearr_25873;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1 = (function (state_25870){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_25870);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e25874){if((e25874 instanceof Object)){
var ex__25614__auto__ = e25874;
var statearr_25875_26035 = state_25870;
(statearr_25875_26035[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25870);

return cljs.core.cst$kw$recur;
} else {
throw e25874;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26036 = state_25870;
state_25870 = G__26036;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = function(state_25870){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1.call(this,state_25870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___26034,res,vec__25863,v,p,job,jobs,results))
})();
var state__25712__auto__ = (function (){var statearr_25876 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_25876[(6)] = c__25710__auto___26034);

return statearr_25876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___26034,res,vec__25863,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25877){
var vec__25878 = p__25877;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25878,(1),null);
var job = vec__25878;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__22487__auto___26037 = n;
var __26038 = (0);
while(true){
if((__26038 < n__22487__auto___26037)){
var G__25881_26039 = type;
var G__25881_26040__$1 = (((G__25881_26039 instanceof cljs.core.Keyword))?G__25881_26039.fqn:null);
switch (G__25881_26040__$1) {
case "compute":
var c__25710__auto___26042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26038,c__25710__auto___26042,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (__26038,c__25710__auto___26042,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async){
return (function (state_25894){
var state_val_25895 = (state_25894[(1)]);
if((state_val_25895 === (1))){
var state_25894__$1 = state_25894;
var statearr_25896_26043 = state_25894__$1;
(statearr_25896_26043[(2)] = null);

(statearr_25896_26043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (2))){
var state_25894__$1 = state_25894;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25894__$1,(4),jobs);
} else {
if((state_val_25895 === (3))){
var inst_25892 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25894__$1,inst_25892);
} else {
if((state_val_25895 === (4))){
var inst_25884 = (state_25894[(2)]);
var inst_25885 = process(inst_25884);
var state_25894__$1 = state_25894;
if(cljs.core.truth_(inst_25885)){
var statearr_25897_26044 = state_25894__$1;
(statearr_25897_26044[(1)] = (5));

} else {
var statearr_25898_26045 = state_25894__$1;
(statearr_25898_26045[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (5))){
var state_25894__$1 = state_25894;
var statearr_25899_26046 = state_25894__$1;
(statearr_25899_26046[(2)] = null);

(statearr_25899_26046[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (6))){
var state_25894__$1 = state_25894;
var statearr_25900_26047 = state_25894__$1;
(statearr_25900_26047[(2)] = null);

(statearr_25900_26047[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25895 === (7))){
var inst_25890 = (state_25894[(2)]);
var state_25894__$1 = state_25894;
var statearr_25901_26048 = state_25894__$1;
(statearr_25901_26048[(2)] = inst_25890);

(statearr_25901_26048[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__26038,c__25710__auto___26042,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async))
;
return ((function (__26038,switch__25610__auto__,c__25710__auto___26042,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0 = (function (){
var statearr_25902 = [null,null,null,null,null,null,null];
(statearr_25902[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__);

(statearr_25902[(1)] = (1));

return statearr_25902;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1 = (function (state_25894){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_25894);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e25903){if((e25903 instanceof Object)){
var ex__25614__auto__ = e25903;
var statearr_25904_26049 = state_25894;
(statearr_25904_26049[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25894);

return cljs.core.cst$kw$recur;
} else {
throw e25903;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26050 = state_25894;
state_25894 = G__26050;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = function(state_25894){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1.call(this,state_25894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__;
})()
;})(__26038,switch__25610__auto__,c__25710__auto___26042,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async))
})();
var state__25712__auto__ = (function (){var statearr_25905 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_25905[(6)] = c__25710__auto___26042);

return statearr_25905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(__26038,c__25710__auto___26042,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async))
);


break;
case "async":
var c__25710__auto___26051 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__26038,c__25710__auto___26051,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (__26038,c__25710__auto___26051,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async){
return (function (state_25918){
var state_val_25919 = (state_25918[(1)]);
if((state_val_25919 === (1))){
var state_25918__$1 = state_25918;
var statearr_25920_26052 = state_25918__$1;
(statearr_25920_26052[(2)] = null);

(statearr_25920_26052[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25919 === (2))){
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25918__$1,(4),jobs);
} else {
if((state_val_25919 === (3))){
var inst_25916 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25918__$1,inst_25916);
} else {
if((state_val_25919 === (4))){
var inst_25908 = (state_25918[(2)]);
var inst_25909 = async(inst_25908);
var state_25918__$1 = state_25918;
if(cljs.core.truth_(inst_25909)){
var statearr_25921_26053 = state_25918__$1;
(statearr_25921_26053[(1)] = (5));

} else {
var statearr_25922_26054 = state_25918__$1;
(statearr_25922_26054[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25919 === (5))){
var state_25918__$1 = state_25918;
var statearr_25923_26055 = state_25918__$1;
(statearr_25923_26055[(2)] = null);

(statearr_25923_26055[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25919 === (6))){
var state_25918__$1 = state_25918;
var statearr_25924_26056 = state_25918__$1;
(statearr_25924_26056[(2)] = null);

(statearr_25924_26056[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25919 === (7))){
var inst_25914 = (state_25918[(2)]);
var state_25918__$1 = state_25918;
var statearr_25925_26057 = state_25918__$1;
(statearr_25925_26057[(2)] = inst_25914);

(statearr_25925_26057[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__26038,c__25710__auto___26051,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async))
;
return ((function (__26038,switch__25610__auto__,c__25710__auto___26051,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0 = (function (){
var statearr_25926 = [null,null,null,null,null,null,null];
(statearr_25926[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__);

(statearr_25926[(1)] = (1));

return statearr_25926;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1 = (function (state_25918){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_25918);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e25927){if((e25927 instanceof Object)){
var ex__25614__auto__ = e25927;
var statearr_25928_26058 = state_25918;
(statearr_25928_26058[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25918);

return cljs.core.cst$kw$recur;
} else {
throw e25927;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26059 = state_25918;
state_25918 = G__26059;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = function(state_25918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1.call(this,state_25918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__;
})()
;})(__26038,switch__25610__auto__,c__25710__auto___26051,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async))
})();
var state__25712__auto__ = (function (){var statearr_25929 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_25929[(6)] = c__25710__auto___26051);

return statearr_25929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(__26038,c__25710__auto___26051,G__25881_26039,G__25881_26040__$1,n__22487__auto___26037,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25881_26040__$1)].join('')));

}

var G__26060 = (__26038 + (1));
__26038 = G__26060;
continue;
} else {
}
break;
}

var c__25710__auto___26061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___26061,jobs,results,process,async){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___26061,jobs,results,process,async){
return (function (state_25951){
var state_val_25952 = (state_25951[(1)]);
if((state_val_25952 === (1))){
var state_25951__$1 = state_25951;
var statearr_25953_26062 = state_25951__$1;
(statearr_25953_26062[(2)] = null);

(statearr_25953_26062[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25952 === (2))){
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25951__$1,(4),from);
} else {
if((state_val_25952 === (3))){
var inst_25949 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25951__$1,inst_25949);
} else {
if((state_val_25952 === (4))){
var inst_25932 = (state_25951[(7)]);
var inst_25932__$1 = (state_25951[(2)]);
var inst_25933 = (inst_25932__$1 == null);
var state_25951__$1 = (function (){var statearr_25954 = state_25951;
(statearr_25954[(7)] = inst_25932__$1);

return statearr_25954;
})();
if(cljs.core.truth_(inst_25933)){
var statearr_25955_26063 = state_25951__$1;
(statearr_25955_26063[(1)] = (5));

} else {
var statearr_25956_26064 = state_25951__$1;
(statearr_25956_26064[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_25952 === (5))){
var inst_25935 = cljs.core.async.close_BANG_(jobs);
var state_25951__$1 = state_25951;
var statearr_25957_26065 = state_25951__$1;
(statearr_25957_26065[(2)] = inst_25935);

(statearr_25957_26065[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25952 === (6))){
var inst_25932 = (state_25951[(7)]);
var inst_25937 = (state_25951[(8)]);
var inst_25937__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_25938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25939 = [inst_25932,inst_25937__$1];
var inst_25940 = (new cljs.core.PersistentVector(null,2,(5),inst_25938,inst_25939,null));
var state_25951__$1 = (function (){var statearr_25958 = state_25951;
(statearr_25958[(8)] = inst_25937__$1);

return statearr_25958;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25951__$1,(8),jobs,inst_25940);
} else {
if((state_val_25952 === (7))){
var inst_25947 = (state_25951[(2)]);
var state_25951__$1 = state_25951;
var statearr_25959_26066 = state_25951__$1;
(statearr_25959_26066[(2)] = inst_25947);

(statearr_25959_26066[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25952 === (8))){
var inst_25937 = (state_25951[(8)]);
var inst_25942 = (state_25951[(2)]);
var state_25951__$1 = (function (){var statearr_25960 = state_25951;
(statearr_25960[(9)] = inst_25942);

return statearr_25960;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_25951__$1,(9),results,inst_25937);
} else {
if((state_val_25952 === (9))){
var inst_25944 = (state_25951[(2)]);
var state_25951__$1 = (function (){var statearr_25961 = state_25951;
(statearr_25961[(10)] = inst_25944);

return statearr_25961;
})();
var statearr_25962_26067 = state_25951__$1;
(statearr_25962_26067[(2)] = null);

(statearr_25962_26067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___26061,jobs,results,process,async))
;
return ((function (switch__25610__auto__,c__25710__auto___26061,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0 = (function (){
var statearr_25963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__);

(statearr_25963[(1)] = (1));

return statearr_25963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1 = (function (state_25951){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_25951);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e25964){if((e25964 instanceof Object)){
var ex__25614__auto__ = e25964;
var statearr_25965_26068 = state_25951;
(statearr_25965_26068[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25951);

return cljs.core.cst$kw$recur;
} else {
throw e25964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26069 = state_25951;
state_25951 = G__26069;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = function(state_25951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1.call(this,state_25951);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___26061,jobs,results,process,async))
})();
var state__25712__auto__ = (function (){var statearr_25966 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_25966[(6)] = c__25710__auto___26061);

return statearr_25966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___26061,jobs,results,process,async))
);


var c__25710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto__,jobs,results,process,async){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto__,jobs,results,process,async){
return (function (state_26004){
var state_val_26005 = (state_26004[(1)]);
if((state_val_26005 === (7))){
var inst_26000 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26006_26070 = state_26004__$1;
(statearr_26006_26070[(2)] = inst_26000);

(statearr_26006_26070[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (20))){
var state_26004__$1 = state_26004;
var statearr_26007_26071 = state_26004__$1;
(statearr_26007_26071[(2)] = null);

(statearr_26007_26071[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (1))){
var state_26004__$1 = state_26004;
var statearr_26008_26072 = state_26004__$1;
(statearr_26008_26072[(2)] = null);

(statearr_26008_26072[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (4))){
var inst_25969 = (state_26004[(7)]);
var inst_25969__$1 = (state_26004[(2)]);
var inst_25970 = (inst_25969__$1 == null);
var state_26004__$1 = (function (){var statearr_26009 = state_26004;
(statearr_26009[(7)] = inst_25969__$1);

return statearr_26009;
})();
if(cljs.core.truth_(inst_25970)){
var statearr_26010_26073 = state_26004__$1;
(statearr_26010_26073[(1)] = (5));

} else {
var statearr_26011_26074 = state_26004__$1;
(statearr_26011_26074[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (15))){
var inst_25982 = (state_26004[(8)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26004__$1,(18),to,inst_25982);
} else {
if((state_val_26005 === (21))){
var inst_25995 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26012_26075 = state_26004__$1;
(statearr_26012_26075[(2)] = inst_25995);

(statearr_26012_26075[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (13))){
var inst_25997 = (state_26004[(2)]);
var state_26004__$1 = (function (){var statearr_26013 = state_26004;
(statearr_26013[(9)] = inst_25997);

return statearr_26013;
})();
var statearr_26014_26076 = state_26004__$1;
(statearr_26014_26076[(2)] = null);

(statearr_26014_26076[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (6))){
var inst_25969 = (state_26004[(7)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26004__$1,(11),inst_25969);
} else {
if((state_val_26005 === (17))){
var inst_25990 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
if(cljs.core.truth_(inst_25990)){
var statearr_26015_26077 = state_26004__$1;
(statearr_26015_26077[(1)] = (19));

} else {
var statearr_26016_26078 = state_26004__$1;
(statearr_26016_26078[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (3))){
var inst_26002 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26004__$1,inst_26002);
} else {
if((state_val_26005 === (12))){
var inst_25979 = (state_26004[(10)]);
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26004__$1,(14),inst_25979);
} else {
if((state_val_26005 === (2))){
var state_26004__$1 = state_26004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26004__$1,(4),results);
} else {
if((state_val_26005 === (19))){
var state_26004__$1 = state_26004;
var statearr_26017_26079 = state_26004__$1;
(statearr_26017_26079[(2)] = null);

(statearr_26017_26079[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (11))){
var inst_25979 = (state_26004[(2)]);
var state_26004__$1 = (function (){var statearr_26018 = state_26004;
(statearr_26018[(10)] = inst_25979);

return statearr_26018;
})();
var statearr_26019_26080 = state_26004__$1;
(statearr_26019_26080[(2)] = null);

(statearr_26019_26080[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (9))){
var state_26004__$1 = state_26004;
var statearr_26020_26081 = state_26004__$1;
(statearr_26020_26081[(2)] = null);

(statearr_26020_26081[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (5))){
var state_26004__$1 = state_26004;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26021_26082 = state_26004__$1;
(statearr_26021_26082[(1)] = (8));

} else {
var statearr_26022_26083 = state_26004__$1;
(statearr_26022_26083[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (14))){
var inst_25982 = (state_26004[(8)]);
var inst_25984 = (state_26004[(11)]);
var inst_25982__$1 = (state_26004[(2)]);
var inst_25983 = (inst_25982__$1 == null);
var inst_25984__$1 = cljs.core.not(inst_25983);
var state_26004__$1 = (function (){var statearr_26023 = state_26004;
(statearr_26023[(8)] = inst_25982__$1);

(statearr_26023[(11)] = inst_25984__$1);

return statearr_26023;
})();
if(inst_25984__$1){
var statearr_26024_26084 = state_26004__$1;
(statearr_26024_26084[(1)] = (15));

} else {
var statearr_26025_26085 = state_26004__$1;
(statearr_26025_26085[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (16))){
var inst_25984 = (state_26004[(11)]);
var state_26004__$1 = state_26004;
var statearr_26026_26086 = state_26004__$1;
(statearr_26026_26086[(2)] = inst_25984);

(statearr_26026_26086[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (10))){
var inst_25976 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26027_26087 = state_26004__$1;
(statearr_26027_26087[(2)] = inst_25976);

(statearr_26027_26087[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (18))){
var inst_25987 = (state_26004[(2)]);
var state_26004__$1 = state_26004;
var statearr_26028_26088 = state_26004__$1;
(statearr_26028_26088[(2)] = inst_25987);

(statearr_26028_26088[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26005 === (8))){
var inst_25973 = cljs.core.async.close_BANG_(to);
var state_26004__$1 = state_26004;
var statearr_26029_26089 = state_26004__$1;
(statearr_26029_26089[(2)] = inst_25973);

(statearr_26029_26089[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto__,jobs,results,process,async))
;
return ((function (switch__25610__auto__,c__25710__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0 = (function (){
var statearr_26030 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__);

(statearr_26030[(1)] = (1));

return statearr_26030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1 = (function (state_26004){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26004);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26031){if((e26031 instanceof Object)){
var ex__25614__auto__ = e26031;
var statearr_26032_26090 = state_26004;
(statearr_26032_26090[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26004);

return cljs.core.cst$kw$recur;
} else {
throw e26031;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26091 = state_26004;
state_26004 = G__26091;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__ = function(state_26004){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1.call(this,state_26004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto__,jobs,results,process,async))
})();
var state__25712__auto__ = (function (){var statearr_26033 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26033[(6)] = c__25710__auto__);

return statearr_26033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto__,jobs,results,process,async))
);

return c__25710__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26093 = arguments.length;
switch (G__26093) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26096 = arguments.length;
switch (G__26096) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26099 = arguments.length;
switch (G__26099) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__25710__auto___26148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___26148,tc,fc){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___26148,tc,fc){
return (function (state_26125){
var state_val_26126 = (state_26125[(1)]);
if((state_val_26126 === (7))){
var inst_26121 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
var statearr_26127_26149 = state_26125__$1;
(statearr_26127_26149[(2)] = inst_26121);

(statearr_26127_26149[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (1))){
var state_26125__$1 = state_26125;
var statearr_26128_26150 = state_26125__$1;
(statearr_26128_26150[(2)] = null);

(statearr_26128_26150[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (4))){
var inst_26102 = (state_26125[(7)]);
var inst_26102__$1 = (state_26125[(2)]);
var inst_26103 = (inst_26102__$1 == null);
var state_26125__$1 = (function (){var statearr_26129 = state_26125;
(statearr_26129[(7)] = inst_26102__$1);

return statearr_26129;
})();
if(cljs.core.truth_(inst_26103)){
var statearr_26130_26151 = state_26125__$1;
(statearr_26130_26151[(1)] = (5));

} else {
var statearr_26131_26152 = state_26125__$1;
(statearr_26131_26152[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (13))){
var state_26125__$1 = state_26125;
var statearr_26132_26153 = state_26125__$1;
(statearr_26132_26153[(2)] = null);

(statearr_26132_26153[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (6))){
var inst_26102 = (state_26125[(7)]);
var inst_26108 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_26102) : p.call(null,inst_26102));
var state_26125__$1 = state_26125;
if(cljs.core.truth_(inst_26108)){
var statearr_26133_26154 = state_26125__$1;
(statearr_26133_26154[(1)] = (9));

} else {
var statearr_26134_26155 = state_26125__$1;
(statearr_26134_26155[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (3))){
var inst_26123 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26125__$1,inst_26123);
} else {
if((state_val_26126 === (12))){
var state_26125__$1 = state_26125;
var statearr_26135_26156 = state_26125__$1;
(statearr_26135_26156[(2)] = null);

(statearr_26135_26156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (2))){
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26125__$1,(4),ch);
} else {
if((state_val_26126 === (11))){
var inst_26102 = (state_26125[(7)]);
var inst_26112 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26125__$1,(8),inst_26112,inst_26102);
} else {
if((state_val_26126 === (9))){
var state_26125__$1 = state_26125;
var statearr_26136_26157 = state_26125__$1;
(statearr_26136_26157[(2)] = tc);

(statearr_26136_26157[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (5))){
var inst_26105 = cljs.core.async.close_BANG_(tc);
var inst_26106 = cljs.core.async.close_BANG_(fc);
var state_26125__$1 = (function (){var statearr_26137 = state_26125;
(statearr_26137[(8)] = inst_26105);

return statearr_26137;
})();
var statearr_26138_26158 = state_26125__$1;
(statearr_26138_26158[(2)] = inst_26106);

(statearr_26138_26158[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (14))){
var inst_26119 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
var statearr_26139_26159 = state_26125__$1;
(statearr_26139_26159[(2)] = inst_26119);

(statearr_26139_26159[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (10))){
var state_26125__$1 = state_26125;
var statearr_26140_26160 = state_26125__$1;
(statearr_26140_26160[(2)] = fc);

(statearr_26140_26160[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26126 === (8))){
var inst_26114 = (state_26125[(2)]);
var state_26125__$1 = state_26125;
if(cljs.core.truth_(inst_26114)){
var statearr_26141_26161 = state_26125__$1;
(statearr_26141_26161[(1)] = (12));

} else {
var statearr_26142_26162 = state_26125__$1;
(statearr_26142_26162[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___26148,tc,fc))
;
return ((function (switch__25610__auto__,c__25710__auto___26148,tc,fc){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_26143 = [null,null,null,null,null,null,null,null,null];
(statearr_26143[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_26143[(1)] = (1));

return statearr_26143;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_26125){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26125);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26144){if((e26144 instanceof Object)){
var ex__25614__auto__ = e26144;
var statearr_26145_26163 = state_26125;
(statearr_26145_26163[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26125);

return cljs.core.cst$kw$recur;
} else {
throw e26144;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26164 = state_26125;
state_26125 = G__26164;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_26125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_26125);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___26148,tc,fc))
})();
var state__25712__auto__ = (function (){var statearr_26146 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26146[(6)] = c__25710__auto___26148);

return statearr_26146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___26148,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto__){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto__){
return (function (state_26185){
var state_val_26186 = (state_26185[(1)]);
if((state_val_26186 === (7))){
var inst_26181 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26187_26205 = state_26185__$1;
(statearr_26187_26205[(2)] = inst_26181);

(statearr_26187_26205[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26186 === (1))){
var inst_26165 = init;
var state_26185__$1 = (function (){var statearr_26188 = state_26185;
(statearr_26188[(7)] = inst_26165);

return statearr_26188;
})();
var statearr_26189_26206 = state_26185__$1;
(statearr_26189_26206[(2)] = null);

(statearr_26189_26206[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26186 === (4))){
var inst_26168 = (state_26185[(8)]);
var inst_26168__$1 = (state_26185[(2)]);
var inst_26169 = (inst_26168__$1 == null);
var state_26185__$1 = (function (){var statearr_26190 = state_26185;
(statearr_26190[(8)] = inst_26168__$1);

return statearr_26190;
})();
if(cljs.core.truth_(inst_26169)){
var statearr_26191_26207 = state_26185__$1;
(statearr_26191_26207[(1)] = (5));

} else {
var statearr_26192_26208 = state_26185__$1;
(statearr_26192_26208[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26186 === (6))){
var inst_26168 = (state_26185[(8)]);
var inst_26172 = (state_26185[(9)]);
var inst_26165 = (state_26185[(7)]);
var inst_26172__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_26165,inst_26168) : f.call(null,inst_26165,inst_26168));
var inst_26173 = cljs.core.reduced_QMARK_(inst_26172__$1);
var state_26185__$1 = (function (){var statearr_26193 = state_26185;
(statearr_26193[(9)] = inst_26172__$1);

return statearr_26193;
})();
if(inst_26173){
var statearr_26194_26209 = state_26185__$1;
(statearr_26194_26209[(1)] = (8));

} else {
var statearr_26195_26210 = state_26185__$1;
(statearr_26195_26210[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26186 === (3))){
var inst_26183 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26185__$1,inst_26183);
} else {
if((state_val_26186 === (2))){
var state_26185__$1 = state_26185;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26185__$1,(4),ch);
} else {
if((state_val_26186 === (9))){
var inst_26172 = (state_26185[(9)]);
var inst_26165 = inst_26172;
var state_26185__$1 = (function (){var statearr_26196 = state_26185;
(statearr_26196[(7)] = inst_26165);

return statearr_26196;
})();
var statearr_26197_26211 = state_26185__$1;
(statearr_26197_26211[(2)] = null);

(statearr_26197_26211[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26186 === (5))){
var inst_26165 = (state_26185[(7)]);
var state_26185__$1 = state_26185;
var statearr_26198_26212 = state_26185__$1;
(statearr_26198_26212[(2)] = inst_26165);

(statearr_26198_26212[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26186 === (10))){
var inst_26179 = (state_26185[(2)]);
var state_26185__$1 = state_26185;
var statearr_26199_26213 = state_26185__$1;
(statearr_26199_26213[(2)] = inst_26179);

(statearr_26199_26213[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26186 === (8))){
var inst_26172 = (state_26185[(9)]);
var inst_26175 = cljs.core.deref(inst_26172);
var state_26185__$1 = state_26185;
var statearr_26200_26214 = state_26185__$1;
(statearr_26200_26214[(2)] = inst_26175);

(statearr_26200_26214[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto__))
;
return ((function (switch__25610__auto__,c__25710__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25611__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25611__auto____0 = (function (){
var statearr_26201 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26201[(0)] = cljs$core$async$reduce_$_state_machine__25611__auto__);

(statearr_26201[(1)] = (1));

return statearr_26201;
});
var cljs$core$async$reduce_$_state_machine__25611__auto____1 = (function (state_26185){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26185);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26202){if((e26202 instanceof Object)){
var ex__25614__auto__ = e26202;
var statearr_26203_26215 = state_26185;
(statearr_26203_26215[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26185);

return cljs.core.cst$kw$recur;
} else {
throw e26202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26216 = state_26185;
state_26185 = G__26216;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25611__auto__ = function(state_26185){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25611__auto____1.call(this,state_26185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25611__auto____0;
cljs$core$async$reduce_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25611__auto____1;
return cljs$core$async$reduce_$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto__))
})();
var state__25712__auto__ = (function (){var statearr_26204 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26204[(6)] = c__25710__auto__);

return statearr_26204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto__))
);

return c__25710__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__25710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto__,f__$1){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto__,f__$1){
return (function (state_26222){
var state_val_26223 = (state_26222[(1)]);
if((state_val_26223 === (1))){
var inst_26217 = cljs.core.async.reduce(f__$1,init,ch);
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26222__$1,(2),inst_26217);
} else {
if((state_val_26223 === (2))){
var inst_26219 = (state_26222[(2)]);
var inst_26220 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_26219) : f__$1.call(null,inst_26219));
var state_26222__$1 = state_26222;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26222__$1,inst_26220);
} else {
return null;
}
}
});})(c__25710__auto__,f__$1))
;
return ((function (switch__25610__auto__,c__25710__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25611__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25611__auto____0 = (function (){
var statearr_26224 = [null,null,null,null,null,null,null];
(statearr_26224[(0)] = cljs$core$async$transduce_$_state_machine__25611__auto__);

(statearr_26224[(1)] = (1));

return statearr_26224;
});
var cljs$core$async$transduce_$_state_machine__25611__auto____1 = (function (state_26222){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26222);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26225){if((e26225 instanceof Object)){
var ex__25614__auto__ = e26225;
var statearr_26226_26228 = state_26222;
(statearr_26226_26228[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26222);

return cljs.core.cst$kw$recur;
} else {
throw e26225;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26229 = state_26222;
state_26222 = G__26229;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25611__auto__ = function(state_26222){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25611__auto____1.call(this,state_26222);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25611__auto____0;
cljs$core$async$transduce_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25611__auto____1;
return cljs$core$async$transduce_$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto__,f__$1))
})();
var state__25712__auto__ = (function (){var statearr_26227 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26227[(6)] = c__25710__auto__);

return statearr_26227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto__,f__$1))
);

return c__25710__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26231 = arguments.length;
switch (G__26231) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto__){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto__){
return (function (state_26256){
var state_val_26257 = (state_26256[(1)]);
if((state_val_26257 === (7))){
var inst_26238 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26258_26279 = state_26256__$1;
(statearr_26258_26279[(2)] = inst_26238);

(statearr_26258_26279[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (1))){
var inst_26232 = cljs.core.seq(coll);
var inst_26233 = inst_26232;
var state_26256__$1 = (function (){var statearr_26259 = state_26256;
(statearr_26259[(7)] = inst_26233);

return statearr_26259;
})();
var statearr_26260_26280 = state_26256__$1;
(statearr_26260_26280[(2)] = null);

(statearr_26260_26280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (4))){
var inst_26233 = (state_26256[(7)]);
var inst_26236 = cljs.core.first(inst_26233);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26256__$1,(7),ch,inst_26236);
} else {
if((state_val_26257 === (13))){
var inst_26250 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26261_26281 = state_26256__$1;
(statearr_26261_26281[(2)] = inst_26250);

(statearr_26261_26281[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (6))){
var inst_26241 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26241)){
var statearr_26262_26282 = state_26256__$1;
(statearr_26262_26282[(1)] = (8));

} else {
var statearr_26263_26283 = state_26256__$1;
(statearr_26263_26283[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (3))){
var inst_26254 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26256__$1,inst_26254);
} else {
if((state_val_26257 === (12))){
var state_26256__$1 = state_26256;
var statearr_26264_26284 = state_26256__$1;
(statearr_26264_26284[(2)] = null);

(statearr_26264_26284[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (2))){
var inst_26233 = (state_26256[(7)]);
var state_26256__$1 = state_26256;
if(cljs.core.truth_(inst_26233)){
var statearr_26265_26285 = state_26256__$1;
(statearr_26265_26285[(1)] = (4));

} else {
var statearr_26266_26286 = state_26256__$1;
(statearr_26266_26286[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (11))){
var inst_26247 = cljs.core.async.close_BANG_(ch);
var state_26256__$1 = state_26256;
var statearr_26267_26287 = state_26256__$1;
(statearr_26267_26287[(2)] = inst_26247);

(statearr_26267_26287[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (9))){
var state_26256__$1 = state_26256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26268_26288 = state_26256__$1;
(statearr_26268_26288[(1)] = (11));

} else {
var statearr_26269_26289 = state_26256__$1;
(statearr_26269_26289[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (5))){
var inst_26233 = (state_26256[(7)]);
var state_26256__$1 = state_26256;
var statearr_26270_26290 = state_26256__$1;
(statearr_26270_26290[(2)] = inst_26233);

(statearr_26270_26290[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (10))){
var inst_26252 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26271_26291 = state_26256__$1;
(statearr_26271_26291[(2)] = inst_26252);

(statearr_26271_26291[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26257 === (8))){
var inst_26233 = (state_26256[(7)]);
var inst_26243 = cljs.core.next(inst_26233);
var inst_26233__$1 = inst_26243;
var state_26256__$1 = (function (){var statearr_26272 = state_26256;
(statearr_26272[(7)] = inst_26233__$1);

return statearr_26272;
})();
var statearr_26273_26292 = state_26256__$1;
(statearr_26273_26292[(2)] = null);

(statearr_26273_26292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto__))
;
return ((function (switch__25610__auto__,c__25710__auto__){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_26274 = [null,null,null,null,null,null,null,null];
(statearr_26274[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_26274[(1)] = (1));

return statearr_26274;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_26256){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26256);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26275){if((e26275 instanceof Object)){
var ex__25614__auto__ = e26275;
var statearr_26276_26293 = state_26256;
(statearr_26276_26293[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26256);

return cljs.core.cst$kw$recur;
} else {
throw e26275;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26294 = state_26256;
state_26256 = G__26294;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_26256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_26256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto__))
})();
var state__25712__auto__ = (function (){var statearr_26277 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26277[(6)] = c__25710__auto__);

return statearr_26277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto__))
);

return c__25710__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22230__auto__ = (((_ == null))?null:_);
var m__22231__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__22231__auto__.call(null,_));
} else {
var m__22231__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__22231__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__22231__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__22231__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__22231__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22231__auto__.call(null,m,ch));
} else {
var m__22231__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__22231__auto__.call(null,m));
} else {
var m__22231__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__22231__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26295 = (function (ch,cs,meta26296){
this.ch = ch;
this.cs = cs;
this.meta26296 = meta26296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26297,meta26296__$1){
var self__ = this;
var _26297__$1 = this;
return (new cljs.core.async.t_cljs$core$async26295(self__.ch,self__.cs,meta26296__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26297){
var self__ = this;
var _26297__$1 = this;
return self__.meta26296;
});})(cs))
;

cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26295.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta26296], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26295";

cljs.core.async.t_cljs$core$async26295.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async26295");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26295 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26295(ch__$1,cs__$1,meta26296){
return (new cljs.core.async.t_cljs$core$async26295(ch__$1,cs__$1,meta26296));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26295(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25710__auto___26517 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___26517,cs,m,dchan,dctr,done){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___26517,cs,m,dchan,dctr,done){
return (function (state_26432){
var state_val_26433 = (state_26432[(1)]);
if((state_val_26433 === (7))){
var inst_26428 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26434_26518 = state_26432__$1;
(statearr_26434_26518[(2)] = inst_26428);

(statearr_26434_26518[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (20))){
var inst_26331 = (state_26432[(7)]);
var inst_26343 = cljs.core.first(inst_26331);
var inst_26344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26343,(0),null);
var inst_26345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26343,(1),null);
var state_26432__$1 = (function (){var statearr_26435 = state_26432;
(statearr_26435[(8)] = inst_26344);

return statearr_26435;
})();
if(cljs.core.truth_(inst_26345)){
var statearr_26436_26519 = state_26432__$1;
(statearr_26436_26519[(1)] = (22));

} else {
var statearr_26437_26520 = state_26432__$1;
(statearr_26437_26520[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (27))){
var inst_26373 = (state_26432[(9)]);
var inst_26300 = (state_26432[(10)]);
var inst_26380 = (state_26432[(11)]);
var inst_26375 = (state_26432[(12)]);
var inst_26380__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26373,inst_26375);
var inst_26381 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26380__$1,inst_26300,done);
var state_26432__$1 = (function (){var statearr_26438 = state_26432;
(statearr_26438[(11)] = inst_26380__$1);

return statearr_26438;
})();
if(cljs.core.truth_(inst_26381)){
var statearr_26439_26521 = state_26432__$1;
(statearr_26439_26521[(1)] = (30));

} else {
var statearr_26440_26522 = state_26432__$1;
(statearr_26440_26522[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (1))){
var state_26432__$1 = state_26432;
var statearr_26441_26523 = state_26432__$1;
(statearr_26441_26523[(2)] = null);

(statearr_26441_26523[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (24))){
var inst_26331 = (state_26432[(7)]);
var inst_26350 = (state_26432[(2)]);
var inst_26351 = cljs.core.next(inst_26331);
var inst_26309 = inst_26351;
var inst_26310 = null;
var inst_26311 = (0);
var inst_26312 = (0);
var state_26432__$1 = (function (){var statearr_26442 = state_26432;
(statearr_26442[(13)] = inst_26310);

(statearr_26442[(14)] = inst_26350);

(statearr_26442[(15)] = inst_26311);

(statearr_26442[(16)] = inst_26312);

(statearr_26442[(17)] = inst_26309);

return statearr_26442;
})();
var statearr_26443_26524 = state_26432__$1;
(statearr_26443_26524[(2)] = null);

(statearr_26443_26524[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (39))){
var state_26432__$1 = state_26432;
var statearr_26447_26525 = state_26432__$1;
(statearr_26447_26525[(2)] = null);

(statearr_26447_26525[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (4))){
var inst_26300 = (state_26432[(10)]);
var inst_26300__$1 = (state_26432[(2)]);
var inst_26301 = (inst_26300__$1 == null);
var state_26432__$1 = (function (){var statearr_26448 = state_26432;
(statearr_26448[(10)] = inst_26300__$1);

return statearr_26448;
})();
if(cljs.core.truth_(inst_26301)){
var statearr_26449_26526 = state_26432__$1;
(statearr_26449_26526[(1)] = (5));

} else {
var statearr_26450_26527 = state_26432__$1;
(statearr_26450_26527[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (15))){
var inst_26310 = (state_26432[(13)]);
var inst_26311 = (state_26432[(15)]);
var inst_26312 = (state_26432[(16)]);
var inst_26309 = (state_26432[(17)]);
var inst_26327 = (state_26432[(2)]);
var inst_26328 = (inst_26312 + (1));
var tmp26444 = inst_26310;
var tmp26445 = inst_26311;
var tmp26446 = inst_26309;
var inst_26309__$1 = tmp26446;
var inst_26310__$1 = tmp26444;
var inst_26311__$1 = tmp26445;
var inst_26312__$1 = inst_26328;
var state_26432__$1 = (function (){var statearr_26451 = state_26432;
(statearr_26451[(13)] = inst_26310__$1);

(statearr_26451[(18)] = inst_26327);

(statearr_26451[(15)] = inst_26311__$1);

(statearr_26451[(16)] = inst_26312__$1);

(statearr_26451[(17)] = inst_26309__$1);

return statearr_26451;
})();
var statearr_26452_26528 = state_26432__$1;
(statearr_26452_26528[(2)] = null);

(statearr_26452_26528[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (21))){
var inst_26354 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26456_26529 = state_26432__$1;
(statearr_26456_26529[(2)] = inst_26354);

(statearr_26456_26529[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (31))){
var inst_26380 = (state_26432[(11)]);
var inst_26384 = done(null);
var inst_26385 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26380);
var state_26432__$1 = (function (){var statearr_26457 = state_26432;
(statearr_26457[(19)] = inst_26384);

return statearr_26457;
})();
var statearr_26458_26530 = state_26432__$1;
(statearr_26458_26530[(2)] = inst_26385);

(statearr_26458_26530[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (32))){
var inst_26373 = (state_26432[(9)]);
var inst_26374 = (state_26432[(20)]);
var inst_26372 = (state_26432[(21)]);
var inst_26375 = (state_26432[(12)]);
var inst_26387 = (state_26432[(2)]);
var inst_26388 = (inst_26375 + (1));
var tmp26453 = inst_26373;
var tmp26454 = inst_26374;
var tmp26455 = inst_26372;
var inst_26372__$1 = tmp26455;
var inst_26373__$1 = tmp26453;
var inst_26374__$1 = tmp26454;
var inst_26375__$1 = inst_26388;
var state_26432__$1 = (function (){var statearr_26459 = state_26432;
(statearr_26459[(22)] = inst_26387);

(statearr_26459[(9)] = inst_26373__$1);

(statearr_26459[(20)] = inst_26374__$1);

(statearr_26459[(21)] = inst_26372__$1);

(statearr_26459[(12)] = inst_26375__$1);

return statearr_26459;
})();
var statearr_26460_26531 = state_26432__$1;
(statearr_26460_26531[(2)] = null);

(statearr_26460_26531[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (40))){
var inst_26400 = (state_26432[(23)]);
var inst_26404 = done(null);
var inst_26405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_26400);
var state_26432__$1 = (function (){var statearr_26461 = state_26432;
(statearr_26461[(24)] = inst_26404);

return statearr_26461;
})();
var statearr_26462_26532 = state_26432__$1;
(statearr_26462_26532[(2)] = inst_26405);

(statearr_26462_26532[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (33))){
var inst_26391 = (state_26432[(25)]);
var inst_26393 = cljs.core.chunked_seq_QMARK_(inst_26391);
var state_26432__$1 = state_26432;
if(inst_26393){
var statearr_26463_26533 = state_26432__$1;
(statearr_26463_26533[(1)] = (36));

} else {
var statearr_26464_26534 = state_26432__$1;
(statearr_26464_26534[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (13))){
var inst_26321 = (state_26432[(26)]);
var inst_26324 = cljs.core.async.close_BANG_(inst_26321);
var state_26432__$1 = state_26432;
var statearr_26465_26535 = state_26432__$1;
(statearr_26465_26535[(2)] = inst_26324);

(statearr_26465_26535[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (22))){
var inst_26344 = (state_26432[(8)]);
var inst_26347 = cljs.core.async.close_BANG_(inst_26344);
var state_26432__$1 = state_26432;
var statearr_26466_26536 = state_26432__$1;
(statearr_26466_26536[(2)] = inst_26347);

(statearr_26466_26536[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (36))){
var inst_26391 = (state_26432[(25)]);
var inst_26395 = cljs.core.chunk_first(inst_26391);
var inst_26396 = cljs.core.chunk_rest(inst_26391);
var inst_26397 = cljs.core.count(inst_26395);
var inst_26372 = inst_26396;
var inst_26373 = inst_26395;
var inst_26374 = inst_26397;
var inst_26375 = (0);
var state_26432__$1 = (function (){var statearr_26467 = state_26432;
(statearr_26467[(9)] = inst_26373);

(statearr_26467[(20)] = inst_26374);

(statearr_26467[(21)] = inst_26372);

(statearr_26467[(12)] = inst_26375);

return statearr_26467;
})();
var statearr_26468_26537 = state_26432__$1;
(statearr_26468_26537[(2)] = null);

(statearr_26468_26537[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (41))){
var inst_26391 = (state_26432[(25)]);
var inst_26407 = (state_26432[(2)]);
var inst_26408 = cljs.core.next(inst_26391);
var inst_26372 = inst_26408;
var inst_26373 = null;
var inst_26374 = (0);
var inst_26375 = (0);
var state_26432__$1 = (function (){var statearr_26469 = state_26432;
(statearr_26469[(9)] = inst_26373);

(statearr_26469[(20)] = inst_26374);

(statearr_26469[(27)] = inst_26407);

(statearr_26469[(21)] = inst_26372);

(statearr_26469[(12)] = inst_26375);

return statearr_26469;
})();
var statearr_26470_26538 = state_26432__$1;
(statearr_26470_26538[(2)] = null);

(statearr_26470_26538[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (43))){
var state_26432__$1 = state_26432;
var statearr_26471_26539 = state_26432__$1;
(statearr_26471_26539[(2)] = null);

(statearr_26471_26539[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (29))){
var inst_26416 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26472_26540 = state_26432__$1;
(statearr_26472_26540[(2)] = inst_26416);

(statearr_26472_26540[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (44))){
var inst_26425 = (state_26432[(2)]);
var state_26432__$1 = (function (){var statearr_26473 = state_26432;
(statearr_26473[(28)] = inst_26425);

return statearr_26473;
})();
var statearr_26474_26541 = state_26432__$1;
(statearr_26474_26541[(2)] = null);

(statearr_26474_26541[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (6))){
var inst_26364 = (state_26432[(29)]);
var inst_26363 = cljs.core.deref(cs);
var inst_26364__$1 = cljs.core.keys(inst_26363);
var inst_26365 = cljs.core.count(inst_26364__$1);
var inst_26366 = cljs.core.reset_BANG_(dctr,inst_26365);
var inst_26371 = cljs.core.seq(inst_26364__$1);
var inst_26372 = inst_26371;
var inst_26373 = null;
var inst_26374 = (0);
var inst_26375 = (0);
var state_26432__$1 = (function (){var statearr_26475 = state_26432;
(statearr_26475[(29)] = inst_26364__$1);

(statearr_26475[(30)] = inst_26366);

(statearr_26475[(9)] = inst_26373);

(statearr_26475[(20)] = inst_26374);

(statearr_26475[(21)] = inst_26372);

(statearr_26475[(12)] = inst_26375);

return statearr_26475;
})();
var statearr_26476_26542 = state_26432__$1;
(statearr_26476_26542[(2)] = null);

(statearr_26476_26542[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (28))){
var inst_26391 = (state_26432[(25)]);
var inst_26372 = (state_26432[(21)]);
var inst_26391__$1 = cljs.core.seq(inst_26372);
var state_26432__$1 = (function (){var statearr_26477 = state_26432;
(statearr_26477[(25)] = inst_26391__$1);

return statearr_26477;
})();
if(inst_26391__$1){
var statearr_26478_26543 = state_26432__$1;
(statearr_26478_26543[(1)] = (33));

} else {
var statearr_26479_26544 = state_26432__$1;
(statearr_26479_26544[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (25))){
var inst_26374 = (state_26432[(20)]);
var inst_26375 = (state_26432[(12)]);
var inst_26377 = (inst_26375 < inst_26374);
var inst_26378 = inst_26377;
var state_26432__$1 = state_26432;
if(cljs.core.truth_(inst_26378)){
var statearr_26480_26545 = state_26432__$1;
(statearr_26480_26545[(1)] = (27));

} else {
var statearr_26481_26546 = state_26432__$1;
(statearr_26481_26546[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (34))){
var state_26432__$1 = state_26432;
var statearr_26482_26547 = state_26432__$1;
(statearr_26482_26547[(2)] = null);

(statearr_26482_26547[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (17))){
var state_26432__$1 = state_26432;
var statearr_26483_26548 = state_26432__$1;
(statearr_26483_26548[(2)] = null);

(statearr_26483_26548[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (3))){
var inst_26430 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26432__$1,inst_26430);
} else {
if((state_val_26433 === (12))){
var inst_26359 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26484_26549 = state_26432__$1;
(statearr_26484_26549[(2)] = inst_26359);

(statearr_26484_26549[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (2))){
var state_26432__$1 = state_26432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26432__$1,(4),ch);
} else {
if((state_val_26433 === (23))){
var state_26432__$1 = state_26432;
var statearr_26485_26550 = state_26432__$1;
(statearr_26485_26550[(2)] = null);

(statearr_26485_26550[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (35))){
var inst_26414 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26486_26551 = state_26432__$1;
(statearr_26486_26551[(2)] = inst_26414);

(statearr_26486_26551[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (19))){
var inst_26331 = (state_26432[(7)]);
var inst_26335 = cljs.core.chunk_first(inst_26331);
var inst_26336 = cljs.core.chunk_rest(inst_26331);
var inst_26337 = cljs.core.count(inst_26335);
var inst_26309 = inst_26336;
var inst_26310 = inst_26335;
var inst_26311 = inst_26337;
var inst_26312 = (0);
var state_26432__$1 = (function (){var statearr_26487 = state_26432;
(statearr_26487[(13)] = inst_26310);

(statearr_26487[(15)] = inst_26311);

(statearr_26487[(16)] = inst_26312);

(statearr_26487[(17)] = inst_26309);

return statearr_26487;
})();
var statearr_26488_26552 = state_26432__$1;
(statearr_26488_26552[(2)] = null);

(statearr_26488_26552[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (11))){
var inst_26331 = (state_26432[(7)]);
var inst_26309 = (state_26432[(17)]);
var inst_26331__$1 = cljs.core.seq(inst_26309);
var state_26432__$1 = (function (){var statearr_26489 = state_26432;
(statearr_26489[(7)] = inst_26331__$1);

return statearr_26489;
})();
if(inst_26331__$1){
var statearr_26490_26553 = state_26432__$1;
(statearr_26490_26553[(1)] = (16));

} else {
var statearr_26491_26554 = state_26432__$1;
(statearr_26491_26554[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (9))){
var inst_26361 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26492_26555 = state_26432__$1;
(statearr_26492_26555[(2)] = inst_26361);

(statearr_26492_26555[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (5))){
var inst_26307 = cljs.core.deref(cs);
var inst_26308 = cljs.core.seq(inst_26307);
var inst_26309 = inst_26308;
var inst_26310 = null;
var inst_26311 = (0);
var inst_26312 = (0);
var state_26432__$1 = (function (){var statearr_26493 = state_26432;
(statearr_26493[(13)] = inst_26310);

(statearr_26493[(15)] = inst_26311);

(statearr_26493[(16)] = inst_26312);

(statearr_26493[(17)] = inst_26309);

return statearr_26493;
})();
var statearr_26494_26556 = state_26432__$1;
(statearr_26494_26556[(2)] = null);

(statearr_26494_26556[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (14))){
var state_26432__$1 = state_26432;
var statearr_26495_26557 = state_26432__$1;
(statearr_26495_26557[(2)] = null);

(statearr_26495_26557[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (45))){
var inst_26422 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26496_26558 = state_26432__$1;
(statearr_26496_26558[(2)] = inst_26422);

(statearr_26496_26558[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (26))){
var inst_26364 = (state_26432[(29)]);
var inst_26418 = (state_26432[(2)]);
var inst_26419 = cljs.core.seq(inst_26364);
var state_26432__$1 = (function (){var statearr_26497 = state_26432;
(statearr_26497[(31)] = inst_26418);

return statearr_26497;
})();
if(inst_26419){
var statearr_26498_26559 = state_26432__$1;
(statearr_26498_26559[(1)] = (42));

} else {
var statearr_26499_26560 = state_26432__$1;
(statearr_26499_26560[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (16))){
var inst_26331 = (state_26432[(7)]);
var inst_26333 = cljs.core.chunked_seq_QMARK_(inst_26331);
var state_26432__$1 = state_26432;
if(inst_26333){
var statearr_26500_26561 = state_26432__$1;
(statearr_26500_26561[(1)] = (19));

} else {
var statearr_26501_26562 = state_26432__$1;
(statearr_26501_26562[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (38))){
var inst_26411 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26502_26563 = state_26432__$1;
(statearr_26502_26563[(2)] = inst_26411);

(statearr_26502_26563[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (30))){
var state_26432__$1 = state_26432;
var statearr_26503_26564 = state_26432__$1;
(statearr_26503_26564[(2)] = null);

(statearr_26503_26564[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (10))){
var inst_26310 = (state_26432[(13)]);
var inst_26312 = (state_26432[(16)]);
var inst_26320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26310,inst_26312);
var inst_26321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26320,(0),null);
var inst_26322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26320,(1),null);
var state_26432__$1 = (function (){var statearr_26504 = state_26432;
(statearr_26504[(26)] = inst_26321);

return statearr_26504;
})();
if(cljs.core.truth_(inst_26322)){
var statearr_26505_26565 = state_26432__$1;
(statearr_26505_26565[(1)] = (13));

} else {
var statearr_26506_26566 = state_26432__$1;
(statearr_26506_26566[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (18))){
var inst_26357 = (state_26432[(2)]);
var state_26432__$1 = state_26432;
var statearr_26507_26567 = state_26432__$1;
(statearr_26507_26567[(2)] = inst_26357);

(statearr_26507_26567[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (42))){
var state_26432__$1 = state_26432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26432__$1,(45),dchan);
} else {
if((state_val_26433 === (37))){
var inst_26391 = (state_26432[(25)]);
var inst_26400 = (state_26432[(23)]);
var inst_26300 = (state_26432[(10)]);
var inst_26400__$1 = cljs.core.first(inst_26391);
var inst_26401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_26400__$1,inst_26300,done);
var state_26432__$1 = (function (){var statearr_26508 = state_26432;
(statearr_26508[(23)] = inst_26400__$1);

return statearr_26508;
})();
if(cljs.core.truth_(inst_26401)){
var statearr_26509_26568 = state_26432__$1;
(statearr_26509_26568[(1)] = (39));

} else {
var statearr_26510_26569 = state_26432__$1;
(statearr_26510_26569[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26433 === (8))){
var inst_26311 = (state_26432[(15)]);
var inst_26312 = (state_26432[(16)]);
var inst_26314 = (inst_26312 < inst_26311);
var inst_26315 = inst_26314;
var state_26432__$1 = state_26432;
if(cljs.core.truth_(inst_26315)){
var statearr_26511_26570 = state_26432__$1;
(statearr_26511_26570[(1)] = (10));

} else {
var statearr_26512_26571 = state_26432__$1;
(statearr_26512_26571[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___26517,cs,m,dchan,dctr,done))
;
return ((function (switch__25610__auto__,c__25710__auto___26517,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25611__auto__ = null;
var cljs$core$async$mult_$_state_machine__25611__auto____0 = (function (){
var statearr_26513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26513[(0)] = cljs$core$async$mult_$_state_machine__25611__auto__);

(statearr_26513[(1)] = (1));

return statearr_26513;
});
var cljs$core$async$mult_$_state_machine__25611__auto____1 = (function (state_26432){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26432);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26514){if((e26514 instanceof Object)){
var ex__25614__auto__ = e26514;
var statearr_26515_26572 = state_26432;
(statearr_26515_26572[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26432);

return cljs.core.cst$kw$recur;
} else {
throw e26514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26573 = state_26432;
state_26432 = G__26573;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25611__auto__ = function(state_26432){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25611__auto____1.call(this,state_26432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25611__auto____0;
cljs$core$async$mult_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25611__auto____1;
return cljs$core$async$mult_$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___26517,cs,m,dchan,dctr,done))
})();
var state__25712__auto__ = (function (){var statearr_26516 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26516[(6)] = c__25710__auto___26517);

return statearr_26516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___26517,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26575 = arguments.length;
switch (G__26575) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22231__auto__.call(null,m,ch));
} else {
var m__22231__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22231__auto__.call(null,m,ch));
} else {
var m__22231__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22231__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__22231__auto__.call(null,m));
} else {
var m__22231__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__22231__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__22231__auto__.call(null,m,state_map));
} else {
var m__22231__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__22231__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22230__auto__ = (((m == null))?null:m);
var m__22231__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__22231__auto__.call(null,m,mode));
} else {
var m__22231__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__22231__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22718__auto__ = [];
var len__22711__auto___26587 = arguments.length;
var i__22712__auto___26588 = (0);
while(true){
if((i__22712__auto___26588 < len__22711__auto___26587)){
args__22718__auto__.push((arguments[i__22712__auto___26588]));

var G__26589 = (i__22712__auto___26588 + (1));
i__22712__auto___26588 = G__26589;
continue;
} else {
}
break;
}

var argseq__22719__auto__ = ((((3) < args__22718__auto__.length))?(new cljs.core.IndexedSeq(args__22718__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22719__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26581){
var map__26582 = p__26581;
var map__26582__$1 = ((((!((map__26582 == null)))?((((map__26582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26582):map__26582);
var opts = map__26582__$1;
var statearr_26584_26590 = state;
(statearr_26584_26590[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__26582,map__26582__$1,opts){
return (function (val){
var statearr_26585_26591 = state;
(statearr_26585_26591[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__26582,map__26582__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26586_26592 = state;
(statearr_26586_26592[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26577){
var G__26578 = cljs.core.first(seq26577);
var seq26577__$1 = cljs.core.next(seq26577);
var G__26579 = cljs.core.first(seq26577__$1);
var seq26577__$2 = cljs.core.next(seq26577__$1);
var G__26580 = cljs.core.first(seq26577__$2);
var seq26577__$3 = cljs.core.next(seq26577__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26578,G__26579,G__26580,seq26577__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26593 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26594){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26594 = meta26594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26595,meta26594__$1){
var self__ = this;
var _26595__$1 = this;
return (new cljs.core.async.t_cljs$core$async26593(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26594__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26595){
var self__ = this;
var _26595__$1 = this;
return self__.meta26594;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta26594], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26593";

cljs.core.async.t_cljs$core$async26593.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async26593");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26593 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26593(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26594){
return (new cljs.core.async.t_cljs$core$async26593(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26594));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26593(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25710__auto___26757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___26757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___26757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26697){
var state_val_26698 = (state_26697[(1)]);
if((state_val_26698 === (7))){
var inst_26612 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26699_26758 = state_26697__$1;
(statearr_26699_26758[(2)] = inst_26612);

(statearr_26699_26758[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (20))){
var inst_26624 = (state_26697[(7)]);
var state_26697__$1 = state_26697;
var statearr_26700_26759 = state_26697__$1;
(statearr_26700_26759[(2)] = inst_26624);

(statearr_26700_26759[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (27))){
var state_26697__$1 = state_26697;
var statearr_26701_26760 = state_26697__$1;
(statearr_26701_26760[(2)] = null);

(statearr_26701_26760[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (1))){
var inst_26599 = (state_26697[(8)]);
var inst_26599__$1 = calc_state();
var inst_26601 = (inst_26599__$1 == null);
var inst_26602 = cljs.core.not(inst_26601);
var state_26697__$1 = (function (){var statearr_26702 = state_26697;
(statearr_26702[(8)] = inst_26599__$1);

return statearr_26702;
})();
if(inst_26602){
var statearr_26703_26761 = state_26697__$1;
(statearr_26703_26761[(1)] = (2));

} else {
var statearr_26704_26762 = state_26697__$1;
(statearr_26704_26762[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (24))){
var inst_26648 = (state_26697[(9)]);
var inst_26671 = (state_26697[(10)]);
var inst_26657 = (state_26697[(11)]);
var inst_26671__$1 = (inst_26648.cljs$core$IFn$_invoke$arity$1 ? inst_26648.cljs$core$IFn$_invoke$arity$1(inst_26657) : inst_26648.call(null,inst_26657));
var state_26697__$1 = (function (){var statearr_26705 = state_26697;
(statearr_26705[(10)] = inst_26671__$1);

return statearr_26705;
})();
if(cljs.core.truth_(inst_26671__$1)){
var statearr_26706_26763 = state_26697__$1;
(statearr_26706_26763[(1)] = (29));

} else {
var statearr_26707_26764 = state_26697__$1;
(statearr_26707_26764[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (4))){
var inst_26615 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26615)){
var statearr_26708_26765 = state_26697__$1;
(statearr_26708_26765[(1)] = (8));

} else {
var statearr_26709_26766 = state_26697__$1;
(statearr_26709_26766[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (15))){
var inst_26642 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26642)){
var statearr_26710_26767 = state_26697__$1;
(statearr_26710_26767[(1)] = (19));

} else {
var statearr_26711_26768 = state_26697__$1;
(statearr_26711_26768[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (21))){
var inst_26647 = (state_26697[(12)]);
var inst_26647__$1 = (state_26697[(2)]);
var inst_26648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26647__$1,cljs.core.cst$kw$solos);
var inst_26649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26647__$1,cljs.core.cst$kw$mutes);
var inst_26650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26647__$1,cljs.core.cst$kw$reads);
var state_26697__$1 = (function (){var statearr_26712 = state_26697;
(statearr_26712[(12)] = inst_26647__$1);

(statearr_26712[(9)] = inst_26648);

(statearr_26712[(13)] = inst_26649);

return statearr_26712;
})();
return cljs.core.async.ioc_alts_BANG_(state_26697__$1,(22),inst_26650);
} else {
if((state_val_26698 === (31))){
var inst_26679 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26679)){
var statearr_26713_26769 = state_26697__$1;
(statearr_26713_26769[(1)] = (32));

} else {
var statearr_26714_26770 = state_26697__$1;
(statearr_26714_26770[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (32))){
var inst_26656 = (state_26697[(14)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26697__$1,(35),out,inst_26656);
} else {
if((state_val_26698 === (33))){
var inst_26647 = (state_26697[(12)]);
var inst_26624 = inst_26647;
var state_26697__$1 = (function (){var statearr_26715 = state_26697;
(statearr_26715[(7)] = inst_26624);

return statearr_26715;
})();
var statearr_26716_26771 = state_26697__$1;
(statearr_26716_26771[(2)] = null);

(statearr_26716_26771[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (13))){
var inst_26624 = (state_26697[(7)]);
var inst_26631 = inst_26624.cljs$lang$protocol_mask$partition0$;
var inst_26632 = (inst_26631 & (64));
var inst_26633 = inst_26624.cljs$core$ISeq$;
var inst_26634 = (cljs.core.PROTOCOL_SENTINEL === inst_26633);
var inst_26635 = (inst_26632) || (inst_26634);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26635)){
var statearr_26717_26772 = state_26697__$1;
(statearr_26717_26772[(1)] = (16));

} else {
var statearr_26718_26773 = state_26697__$1;
(statearr_26718_26773[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (22))){
var inst_26656 = (state_26697[(14)]);
var inst_26657 = (state_26697[(11)]);
var inst_26655 = (state_26697[(2)]);
var inst_26656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26655,(0),null);
var inst_26657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_26655,(1),null);
var inst_26658 = (inst_26656__$1 == null);
var inst_26659 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_26657__$1,change);
var inst_26660 = (inst_26658) || (inst_26659);
var state_26697__$1 = (function (){var statearr_26719 = state_26697;
(statearr_26719[(14)] = inst_26656__$1);

(statearr_26719[(11)] = inst_26657__$1);

return statearr_26719;
})();
if(cljs.core.truth_(inst_26660)){
var statearr_26720_26774 = state_26697__$1;
(statearr_26720_26774[(1)] = (23));

} else {
var statearr_26721_26775 = state_26697__$1;
(statearr_26721_26775[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (36))){
var inst_26647 = (state_26697[(12)]);
var inst_26624 = inst_26647;
var state_26697__$1 = (function (){var statearr_26722 = state_26697;
(statearr_26722[(7)] = inst_26624);

return statearr_26722;
})();
var statearr_26723_26776 = state_26697__$1;
(statearr_26723_26776[(2)] = null);

(statearr_26723_26776[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (29))){
var inst_26671 = (state_26697[(10)]);
var state_26697__$1 = state_26697;
var statearr_26724_26777 = state_26697__$1;
(statearr_26724_26777[(2)] = inst_26671);

(statearr_26724_26777[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (6))){
var state_26697__$1 = state_26697;
var statearr_26725_26778 = state_26697__$1;
(statearr_26725_26778[(2)] = false);

(statearr_26725_26778[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (28))){
var inst_26667 = (state_26697[(2)]);
var inst_26668 = calc_state();
var inst_26624 = inst_26668;
var state_26697__$1 = (function (){var statearr_26726 = state_26697;
(statearr_26726[(15)] = inst_26667);

(statearr_26726[(7)] = inst_26624);

return statearr_26726;
})();
var statearr_26727_26779 = state_26697__$1;
(statearr_26727_26779[(2)] = null);

(statearr_26727_26779[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (25))){
var inst_26693 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26728_26780 = state_26697__$1;
(statearr_26728_26780[(2)] = inst_26693);

(statearr_26728_26780[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (34))){
var inst_26691 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26729_26781 = state_26697__$1;
(statearr_26729_26781[(2)] = inst_26691);

(statearr_26729_26781[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (17))){
var state_26697__$1 = state_26697;
var statearr_26730_26782 = state_26697__$1;
(statearr_26730_26782[(2)] = false);

(statearr_26730_26782[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (3))){
var state_26697__$1 = state_26697;
var statearr_26731_26783 = state_26697__$1;
(statearr_26731_26783[(2)] = false);

(statearr_26731_26783[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (12))){
var inst_26695 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26697__$1,inst_26695);
} else {
if((state_val_26698 === (2))){
var inst_26599 = (state_26697[(8)]);
var inst_26604 = inst_26599.cljs$lang$protocol_mask$partition0$;
var inst_26605 = (inst_26604 & (64));
var inst_26606 = inst_26599.cljs$core$ISeq$;
var inst_26607 = (cljs.core.PROTOCOL_SENTINEL === inst_26606);
var inst_26608 = (inst_26605) || (inst_26607);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26608)){
var statearr_26732_26784 = state_26697__$1;
(statearr_26732_26784[(1)] = (5));

} else {
var statearr_26733_26785 = state_26697__$1;
(statearr_26733_26785[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (23))){
var inst_26656 = (state_26697[(14)]);
var inst_26662 = (inst_26656 == null);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26662)){
var statearr_26734_26786 = state_26697__$1;
(statearr_26734_26786[(1)] = (26));

} else {
var statearr_26735_26787 = state_26697__$1;
(statearr_26735_26787[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (35))){
var inst_26682 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
if(cljs.core.truth_(inst_26682)){
var statearr_26736_26788 = state_26697__$1;
(statearr_26736_26788[(1)] = (36));

} else {
var statearr_26737_26789 = state_26697__$1;
(statearr_26737_26789[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (19))){
var inst_26624 = (state_26697[(7)]);
var inst_26644 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26624);
var state_26697__$1 = state_26697;
var statearr_26738_26790 = state_26697__$1;
(statearr_26738_26790[(2)] = inst_26644);

(statearr_26738_26790[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (11))){
var inst_26624 = (state_26697[(7)]);
var inst_26628 = (inst_26624 == null);
var inst_26629 = cljs.core.not(inst_26628);
var state_26697__$1 = state_26697;
if(inst_26629){
var statearr_26739_26791 = state_26697__$1;
(statearr_26739_26791[(1)] = (13));

} else {
var statearr_26740_26792 = state_26697__$1;
(statearr_26740_26792[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (9))){
var inst_26599 = (state_26697[(8)]);
var state_26697__$1 = state_26697;
var statearr_26741_26793 = state_26697__$1;
(statearr_26741_26793[(2)] = inst_26599);

(statearr_26741_26793[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (5))){
var state_26697__$1 = state_26697;
var statearr_26742_26794 = state_26697__$1;
(statearr_26742_26794[(2)] = true);

(statearr_26742_26794[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (14))){
var state_26697__$1 = state_26697;
var statearr_26743_26795 = state_26697__$1;
(statearr_26743_26795[(2)] = false);

(statearr_26743_26795[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (26))){
var inst_26657 = (state_26697[(11)]);
var inst_26664 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_26657);
var state_26697__$1 = state_26697;
var statearr_26744_26796 = state_26697__$1;
(statearr_26744_26796[(2)] = inst_26664);

(statearr_26744_26796[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (16))){
var state_26697__$1 = state_26697;
var statearr_26745_26797 = state_26697__$1;
(statearr_26745_26797[(2)] = true);

(statearr_26745_26797[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (38))){
var inst_26687 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26746_26798 = state_26697__$1;
(statearr_26746_26798[(2)] = inst_26687);

(statearr_26746_26798[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (30))){
var inst_26648 = (state_26697[(9)]);
var inst_26649 = (state_26697[(13)]);
var inst_26657 = (state_26697[(11)]);
var inst_26674 = cljs.core.empty_QMARK_(inst_26648);
var inst_26675 = (inst_26649.cljs$core$IFn$_invoke$arity$1 ? inst_26649.cljs$core$IFn$_invoke$arity$1(inst_26657) : inst_26649.call(null,inst_26657));
var inst_26676 = cljs.core.not(inst_26675);
var inst_26677 = (inst_26674) && (inst_26676);
var state_26697__$1 = state_26697;
var statearr_26747_26799 = state_26697__$1;
(statearr_26747_26799[(2)] = inst_26677);

(statearr_26747_26799[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (10))){
var inst_26599 = (state_26697[(8)]);
var inst_26620 = (state_26697[(2)]);
var inst_26621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26620,cljs.core.cst$kw$solos);
var inst_26622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26620,cljs.core.cst$kw$mutes);
var inst_26623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26620,cljs.core.cst$kw$reads);
var inst_26624 = inst_26599;
var state_26697__$1 = (function (){var statearr_26748 = state_26697;
(statearr_26748[(7)] = inst_26624);

(statearr_26748[(16)] = inst_26623);

(statearr_26748[(17)] = inst_26621);

(statearr_26748[(18)] = inst_26622);

return statearr_26748;
})();
var statearr_26749_26800 = state_26697__$1;
(statearr_26749_26800[(2)] = null);

(statearr_26749_26800[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (18))){
var inst_26639 = (state_26697[(2)]);
var state_26697__$1 = state_26697;
var statearr_26750_26801 = state_26697__$1;
(statearr_26750_26801[(2)] = inst_26639);

(statearr_26750_26801[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (37))){
var state_26697__$1 = state_26697;
var statearr_26751_26802 = state_26697__$1;
(statearr_26751_26802[(2)] = null);

(statearr_26751_26802[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26698 === (8))){
var inst_26599 = (state_26697[(8)]);
var inst_26617 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_26599);
var state_26697__$1 = state_26697;
var statearr_26752_26803 = state_26697__$1;
(statearr_26752_26803[(2)] = inst_26617);

(statearr_26752_26803[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___26757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25610__auto__,c__25710__auto___26757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25611__auto__ = null;
var cljs$core$async$mix_$_state_machine__25611__auto____0 = (function (){
var statearr_26753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26753[(0)] = cljs$core$async$mix_$_state_machine__25611__auto__);

(statearr_26753[(1)] = (1));

return statearr_26753;
});
var cljs$core$async$mix_$_state_machine__25611__auto____1 = (function (state_26697){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26697);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26754){if((e26754 instanceof Object)){
var ex__25614__auto__ = e26754;
var statearr_26755_26804 = state_26697;
(statearr_26755_26804[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26697);

return cljs.core.cst$kw$recur;
} else {
throw e26754;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26805 = state_26697;
state_26697 = G__26805;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25611__auto__ = function(state_26697){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25611__auto____1.call(this,state_26697);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25611__auto____0;
cljs$core$async$mix_$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25611__auto____1;
return cljs$core$async$mix_$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___26757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25712__auto__ = (function (){var statearr_26756 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26756[(6)] = c__25710__auto___26757);

return statearr_26756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___26757,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22230__auto__ = (((p == null))?null:p);
var m__22231__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__22231__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__22231__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__22231__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22230__auto__ = (((p == null))?null:p);
var m__22231__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__22231__auto__.call(null,p,v,ch));
} else {
var m__22231__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__22231__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26807 = arguments.length;
switch (G__26807) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22230__auto__ = (((p == null))?null:p);
var m__22231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__22231__auto__.call(null,p));
} else {
var m__22231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__22231__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22230__auto__ = (((p == null))?null:p);
var m__22231__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22230__auto__)]);
if(!((m__22231__auto__ == null))){
return (m__22231__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__22231__auto__.call(null,p,v));
} else {
var m__22231__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22231__auto____$1 == null))){
return (m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22231__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__22231__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__26811 = arguments.length;
switch (G__26811) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21547__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__21547__auto__)){
return or__21547__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__21547__auto__,mults){
return (function (p1__26809_SHARP_){
if(cljs.core.truth_((p1__26809_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__26809_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__26809_SHARP_.call(null,topic)))){
return p1__26809_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26809_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__21547__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26812 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26813){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26813 = meta26813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26814,meta26813__$1){
var self__ = this;
var _26814__$1 = this;
return (new cljs.core.async.t_cljs$core$async26812(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26813__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26814){
var self__ = this;
var _26814__$1 = this;
return self__.meta26813;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta26813], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26812";

cljs.core.async.t_cljs$core$async26812.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async26812");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async26812 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26812(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26813){
return (new cljs.core.async.t_cljs$core$async26812(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26813));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26812(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25710__auto___26932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___26932,mults,ensure_mult,p){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___26932,mults,ensure_mult,p){
return (function (state_26886){
var state_val_26887 = (state_26886[(1)]);
if((state_val_26887 === (7))){
var inst_26882 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26888_26933 = state_26886__$1;
(statearr_26888_26933[(2)] = inst_26882);

(statearr_26888_26933[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (20))){
var state_26886__$1 = state_26886;
var statearr_26889_26934 = state_26886__$1;
(statearr_26889_26934[(2)] = null);

(statearr_26889_26934[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (1))){
var state_26886__$1 = state_26886;
var statearr_26890_26935 = state_26886__$1;
(statearr_26890_26935[(2)] = null);

(statearr_26890_26935[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (24))){
var inst_26865 = (state_26886[(7)]);
var inst_26874 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_26865);
var state_26886__$1 = state_26886;
var statearr_26891_26936 = state_26886__$1;
(statearr_26891_26936[(2)] = inst_26874);

(statearr_26891_26936[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (4))){
var inst_26817 = (state_26886[(8)]);
var inst_26817__$1 = (state_26886[(2)]);
var inst_26818 = (inst_26817__$1 == null);
var state_26886__$1 = (function (){var statearr_26892 = state_26886;
(statearr_26892[(8)] = inst_26817__$1);

return statearr_26892;
})();
if(cljs.core.truth_(inst_26818)){
var statearr_26893_26937 = state_26886__$1;
(statearr_26893_26937[(1)] = (5));

} else {
var statearr_26894_26938 = state_26886__$1;
(statearr_26894_26938[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (15))){
var inst_26859 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26895_26939 = state_26886__$1;
(statearr_26895_26939[(2)] = inst_26859);

(statearr_26895_26939[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (21))){
var inst_26879 = (state_26886[(2)]);
var state_26886__$1 = (function (){var statearr_26896 = state_26886;
(statearr_26896[(9)] = inst_26879);

return statearr_26896;
})();
var statearr_26897_26940 = state_26886__$1;
(statearr_26897_26940[(2)] = null);

(statearr_26897_26940[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (13))){
var inst_26841 = (state_26886[(10)]);
var inst_26843 = cljs.core.chunked_seq_QMARK_(inst_26841);
var state_26886__$1 = state_26886;
if(inst_26843){
var statearr_26898_26941 = state_26886__$1;
(statearr_26898_26941[(1)] = (16));

} else {
var statearr_26899_26942 = state_26886__$1;
(statearr_26899_26942[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (22))){
var inst_26871 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
if(cljs.core.truth_(inst_26871)){
var statearr_26900_26943 = state_26886__$1;
(statearr_26900_26943[(1)] = (23));

} else {
var statearr_26901_26944 = state_26886__$1;
(statearr_26901_26944[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (6))){
var inst_26865 = (state_26886[(7)]);
var inst_26867 = (state_26886[(11)]);
var inst_26817 = (state_26886[(8)]);
var inst_26865__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_26817) : topic_fn.call(null,inst_26817));
var inst_26866 = cljs.core.deref(mults);
var inst_26867__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_26866,inst_26865__$1);
var state_26886__$1 = (function (){var statearr_26902 = state_26886;
(statearr_26902[(7)] = inst_26865__$1);

(statearr_26902[(11)] = inst_26867__$1);

return statearr_26902;
})();
if(cljs.core.truth_(inst_26867__$1)){
var statearr_26903_26945 = state_26886__$1;
(statearr_26903_26945[(1)] = (19));

} else {
var statearr_26904_26946 = state_26886__$1;
(statearr_26904_26946[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (25))){
var inst_26876 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26905_26947 = state_26886__$1;
(statearr_26905_26947[(2)] = inst_26876);

(statearr_26905_26947[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (17))){
var inst_26841 = (state_26886[(10)]);
var inst_26850 = cljs.core.first(inst_26841);
var inst_26851 = cljs.core.async.muxch_STAR_(inst_26850);
var inst_26852 = cljs.core.async.close_BANG_(inst_26851);
var inst_26853 = cljs.core.next(inst_26841);
var inst_26827 = inst_26853;
var inst_26828 = null;
var inst_26829 = (0);
var inst_26830 = (0);
var state_26886__$1 = (function (){var statearr_26906 = state_26886;
(statearr_26906[(12)] = inst_26829);

(statearr_26906[(13)] = inst_26827);

(statearr_26906[(14)] = inst_26830);

(statearr_26906[(15)] = inst_26852);

(statearr_26906[(16)] = inst_26828);

return statearr_26906;
})();
var statearr_26907_26948 = state_26886__$1;
(statearr_26907_26948[(2)] = null);

(statearr_26907_26948[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (3))){
var inst_26884 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26886__$1,inst_26884);
} else {
if((state_val_26887 === (12))){
var inst_26861 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26908_26949 = state_26886__$1;
(statearr_26908_26949[(2)] = inst_26861);

(statearr_26908_26949[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (2))){
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26886__$1,(4),ch);
} else {
if((state_val_26887 === (23))){
var state_26886__$1 = state_26886;
var statearr_26909_26950 = state_26886__$1;
(statearr_26909_26950[(2)] = null);

(statearr_26909_26950[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (19))){
var inst_26867 = (state_26886[(11)]);
var inst_26817 = (state_26886[(8)]);
var inst_26869 = cljs.core.async.muxch_STAR_(inst_26867);
var state_26886__$1 = state_26886;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26886__$1,(22),inst_26869,inst_26817);
} else {
if((state_val_26887 === (11))){
var inst_26827 = (state_26886[(13)]);
var inst_26841 = (state_26886[(10)]);
var inst_26841__$1 = cljs.core.seq(inst_26827);
var state_26886__$1 = (function (){var statearr_26910 = state_26886;
(statearr_26910[(10)] = inst_26841__$1);

return statearr_26910;
})();
if(inst_26841__$1){
var statearr_26911_26951 = state_26886__$1;
(statearr_26911_26951[(1)] = (13));

} else {
var statearr_26912_26952 = state_26886__$1;
(statearr_26912_26952[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (9))){
var inst_26863 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26913_26953 = state_26886__$1;
(statearr_26913_26953[(2)] = inst_26863);

(statearr_26913_26953[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (5))){
var inst_26824 = cljs.core.deref(mults);
var inst_26825 = cljs.core.vals(inst_26824);
var inst_26826 = cljs.core.seq(inst_26825);
var inst_26827 = inst_26826;
var inst_26828 = null;
var inst_26829 = (0);
var inst_26830 = (0);
var state_26886__$1 = (function (){var statearr_26914 = state_26886;
(statearr_26914[(12)] = inst_26829);

(statearr_26914[(13)] = inst_26827);

(statearr_26914[(14)] = inst_26830);

(statearr_26914[(16)] = inst_26828);

return statearr_26914;
})();
var statearr_26915_26954 = state_26886__$1;
(statearr_26915_26954[(2)] = null);

(statearr_26915_26954[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (14))){
var state_26886__$1 = state_26886;
var statearr_26919_26955 = state_26886__$1;
(statearr_26919_26955[(2)] = null);

(statearr_26919_26955[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (16))){
var inst_26841 = (state_26886[(10)]);
var inst_26845 = cljs.core.chunk_first(inst_26841);
var inst_26846 = cljs.core.chunk_rest(inst_26841);
var inst_26847 = cljs.core.count(inst_26845);
var inst_26827 = inst_26846;
var inst_26828 = inst_26845;
var inst_26829 = inst_26847;
var inst_26830 = (0);
var state_26886__$1 = (function (){var statearr_26920 = state_26886;
(statearr_26920[(12)] = inst_26829);

(statearr_26920[(13)] = inst_26827);

(statearr_26920[(14)] = inst_26830);

(statearr_26920[(16)] = inst_26828);

return statearr_26920;
})();
var statearr_26921_26956 = state_26886__$1;
(statearr_26921_26956[(2)] = null);

(statearr_26921_26956[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (10))){
var inst_26829 = (state_26886[(12)]);
var inst_26827 = (state_26886[(13)]);
var inst_26830 = (state_26886[(14)]);
var inst_26828 = (state_26886[(16)]);
var inst_26835 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_26828,inst_26830);
var inst_26836 = cljs.core.async.muxch_STAR_(inst_26835);
var inst_26837 = cljs.core.async.close_BANG_(inst_26836);
var inst_26838 = (inst_26830 + (1));
var tmp26916 = inst_26829;
var tmp26917 = inst_26827;
var tmp26918 = inst_26828;
var inst_26827__$1 = tmp26917;
var inst_26828__$1 = tmp26918;
var inst_26829__$1 = tmp26916;
var inst_26830__$1 = inst_26838;
var state_26886__$1 = (function (){var statearr_26922 = state_26886;
(statearr_26922[(12)] = inst_26829__$1);

(statearr_26922[(13)] = inst_26827__$1);

(statearr_26922[(14)] = inst_26830__$1);

(statearr_26922[(17)] = inst_26837);

(statearr_26922[(16)] = inst_26828__$1);

return statearr_26922;
})();
var statearr_26923_26957 = state_26886__$1;
(statearr_26923_26957[(2)] = null);

(statearr_26923_26957[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (18))){
var inst_26856 = (state_26886[(2)]);
var state_26886__$1 = state_26886;
var statearr_26924_26958 = state_26886__$1;
(statearr_26924_26958[(2)] = inst_26856);

(statearr_26924_26958[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26887 === (8))){
var inst_26829 = (state_26886[(12)]);
var inst_26830 = (state_26886[(14)]);
var inst_26832 = (inst_26830 < inst_26829);
var inst_26833 = inst_26832;
var state_26886__$1 = state_26886;
if(cljs.core.truth_(inst_26833)){
var statearr_26925_26959 = state_26886__$1;
(statearr_26925_26959[(1)] = (10));

} else {
var statearr_26926_26960 = state_26886__$1;
(statearr_26926_26960[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___26932,mults,ensure_mult,p))
;
return ((function (switch__25610__auto__,c__25710__auto___26932,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_26927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26927[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_26927[(1)] = (1));

return statearr_26927;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_26886){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_26886);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e26928){if((e26928 instanceof Object)){
var ex__25614__auto__ = e26928;
var statearr_26929_26961 = state_26886;
(statearr_26929_26961[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26886);

return cljs.core.cst$kw$recur;
} else {
throw e26928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__26962 = state_26886;
state_26886 = G__26962;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_26886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_26886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___26932,mults,ensure_mult,p))
})();
var state__25712__auto__ = (function (){var statearr_26930 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_26930[(6)] = c__25710__auto___26932);

return statearr_26930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___26932,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__26964 = arguments.length;
switch (G__26964) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26967 = arguments.length;
switch (G__26967) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__26970 = arguments.length;
switch (G__26970) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__25710__auto___27037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___27037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___27037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27009){
var state_val_27010 = (state_27009[(1)]);
if((state_val_27010 === (7))){
var state_27009__$1 = state_27009;
var statearr_27011_27038 = state_27009__$1;
(statearr_27011_27038[(2)] = null);

(statearr_27011_27038[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (1))){
var state_27009__$1 = state_27009;
var statearr_27012_27039 = state_27009__$1;
(statearr_27012_27039[(2)] = null);

(statearr_27012_27039[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (4))){
var inst_26973 = (state_27009[(7)]);
var inst_26975 = (inst_26973 < cnt);
var state_27009__$1 = state_27009;
if(cljs.core.truth_(inst_26975)){
var statearr_27013_27040 = state_27009__$1;
(statearr_27013_27040[(1)] = (6));

} else {
var statearr_27014_27041 = state_27009__$1;
(statearr_27014_27041[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (15))){
var inst_27005 = (state_27009[(2)]);
var state_27009__$1 = state_27009;
var statearr_27015_27042 = state_27009__$1;
(statearr_27015_27042[(2)] = inst_27005);

(statearr_27015_27042[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (13))){
var inst_26998 = cljs.core.async.close_BANG_(out);
var state_27009__$1 = state_27009;
var statearr_27016_27043 = state_27009__$1;
(statearr_27016_27043[(2)] = inst_26998);

(statearr_27016_27043[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (6))){
var state_27009__$1 = state_27009;
var statearr_27017_27044 = state_27009__$1;
(statearr_27017_27044[(2)] = null);

(statearr_27017_27044[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (3))){
var inst_27007 = (state_27009[(2)]);
var state_27009__$1 = state_27009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27009__$1,inst_27007);
} else {
if((state_val_27010 === (12))){
var inst_26995 = (state_27009[(8)]);
var inst_26995__$1 = (state_27009[(2)]);
var inst_26996 = cljs.core.some(cljs.core.nil_QMARK_,inst_26995__$1);
var state_27009__$1 = (function (){var statearr_27018 = state_27009;
(statearr_27018[(8)] = inst_26995__$1);

return statearr_27018;
})();
if(cljs.core.truth_(inst_26996)){
var statearr_27019_27045 = state_27009__$1;
(statearr_27019_27045[(1)] = (13));

} else {
var statearr_27020_27046 = state_27009__$1;
(statearr_27020_27046[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (2))){
var inst_26972 = cljs.core.reset_BANG_(dctr,cnt);
var inst_26973 = (0);
var state_27009__$1 = (function (){var statearr_27021 = state_27009;
(statearr_27021[(7)] = inst_26973);

(statearr_27021[(9)] = inst_26972);

return statearr_27021;
})();
var statearr_27022_27047 = state_27009__$1;
(statearr_27022_27047[(2)] = null);

(statearr_27022_27047[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (11))){
var inst_26973 = (state_27009[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_27009,(10),Object,null,(9));
var inst_26982 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_26973) : chs__$1.call(null,inst_26973));
var inst_26983 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_26973) : done.call(null,inst_26973));
var inst_26984 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_26982,inst_26983);
var state_27009__$1 = state_27009;
var statearr_27023_27048 = state_27009__$1;
(statearr_27023_27048[(2)] = inst_26984);


cljs.core.async.impl.ioc_helpers.process_exception(state_27009__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (9))){
var inst_26973 = (state_27009[(7)]);
var inst_26986 = (state_27009[(2)]);
var inst_26987 = (inst_26973 + (1));
var inst_26973__$1 = inst_26987;
var state_27009__$1 = (function (){var statearr_27024 = state_27009;
(statearr_27024[(7)] = inst_26973__$1);

(statearr_27024[(10)] = inst_26986);

return statearr_27024;
})();
var statearr_27025_27049 = state_27009__$1;
(statearr_27025_27049[(2)] = null);

(statearr_27025_27049[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (5))){
var inst_26993 = (state_27009[(2)]);
var state_27009__$1 = (function (){var statearr_27026 = state_27009;
(statearr_27026[(11)] = inst_26993);

return statearr_27026;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27009__$1,(12),dchan);
} else {
if((state_val_27010 === (14))){
var inst_26995 = (state_27009[(8)]);
var inst_27000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_26995);
var state_27009__$1 = state_27009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27009__$1,(16),out,inst_27000);
} else {
if((state_val_27010 === (16))){
var inst_27002 = (state_27009[(2)]);
var state_27009__$1 = (function (){var statearr_27027 = state_27009;
(statearr_27027[(12)] = inst_27002);

return statearr_27027;
})();
var statearr_27028_27050 = state_27009__$1;
(statearr_27028_27050[(2)] = null);

(statearr_27028_27050[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (10))){
var inst_26977 = (state_27009[(2)]);
var inst_26978 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_27009__$1 = (function (){var statearr_27029 = state_27009;
(statearr_27029[(13)] = inst_26977);

return statearr_27029;
})();
var statearr_27030_27051 = state_27009__$1;
(statearr_27030_27051[(2)] = inst_26978);


cljs.core.async.impl.ioc_helpers.process_exception(state_27009__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_27010 === (8))){
var inst_26991 = (state_27009[(2)]);
var state_27009__$1 = state_27009;
var statearr_27031_27052 = state_27009__$1;
(statearr_27031_27052[(2)] = inst_26991);

(statearr_27031_27052[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___27037,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25610__auto__,c__25710__auto___27037,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_27032 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27032[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_27032[(1)] = (1));

return statearr_27032;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_27009){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27009);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27033){if((e27033 instanceof Object)){
var ex__25614__auto__ = e27033;
var statearr_27034_27053 = state_27009;
(statearr_27034_27053[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27009);

return cljs.core.cst$kw$recur;
} else {
throw e27033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27054 = state_27009;
state_27009 = G__27054;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_27009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_27009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___27037,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25712__auto__ = (function (){var statearr_27035 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27035[(6)] = c__25710__auto___27037);

return statearr_27035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___27037,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27057 = arguments.length;
switch (G__27057) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25710__auto___27111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___27111,out){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___27111,out){
return (function (state_27089){
var state_val_27090 = (state_27089[(1)]);
if((state_val_27090 === (7))){
var inst_27068 = (state_27089[(7)]);
var inst_27069 = (state_27089[(8)]);
var inst_27068__$1 = (state_27089[(2)]);
var inst_27069__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27068__$1,(0),null);
var inst_27070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27068__$1,(1),null);
var inst_27071 = (inst_27069__$1 == null);
var state_27089__$1 = (function (){var statearr_27091 = state_27089;
(statearr_27091[(7)] = inst_27068__$1);

(statearr_27091[(9)] = inst_27070);

(statearr_27091[(8)] = inst_27069__$1);

return statearr_27091;
})();
if(cljs.core.truth_(inst_27071)){
var statearr_27092_27112 = state_27089__$1;
(statearr_27092_27112[(1)] = (8));

} else {
var statearr_27093_27113 = state_27089__$1;
(statearr_27093_27113[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27090 === (1))){
var inst_27058 = cljs.core.vec(chs);
var inst_27059 = inst_27058;
var state_27089__$1 = (function (){var statearr_27094 = state_27089;
(statearr_27094[(10)] = inst_27059);

return statearr_27094;
})();
var statearr_27095_27114 = state_27089__$1;
(statearr_27095_27114[(2)] = null);

(statearr_27095_27114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27090 === (4))){
var inst_27059 = (state_27089[(10)]);
var state_27089__$1 = state_27089;
return cljs.core.async.ioc_alts_BANG_(state_27089__$1,(7),inst_27059);
} else {
if((state_val_27090 === (6))){
var inst_27085 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27096_27115 = state_27089__$1;
(statearr_27096_27115[(2)] = inst_27085);

(statearr_27096_27115[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27090 === (3))){
var inst_27087 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27089__$1,inst_27087);
} else {
if((state_val_27090 === (2))){
var inst_27059 = (state_27089[(10)]);
var inst_27061 = cljs.core.count(inst_27059);
var inst_27062 = (inst_27061 > (0));
var state_27089__$1 = state_27089;
if(cljs.core.truth_(inst_27062)){
var statearr_27098_27116 = state_27089__$1;
(statearr_27098_27116[(1)] = (4));

} else {
var statearr_27099_27117 = state_27089__$1;
(statearr_27099_27117[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27090 === (11))){
var inst_27059 = (state_27089[(10)]);
var inst_27078 = (state_27089[(2)]);
var tmp27097 = inst_27059;
var inst_27059__$1 = tmp27097;
var state_27089__$1 = (function (){var statearr_27100 = state_27089;
(statearr_27100[(10)] = inst_27059__$1);

(statearr_27100[(11)] = inst_27078);

return statearr_27100;
})();
var statearr_27101_27118 = state_27089__$1;
(statearr_27101_27118[(2)] = null);

(statearr_27101_27118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27090 === (9))){
var inst_27069 = (state_27089[(8)]);
var state_27089__$1 = state_27089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27089__$1,(11),out,inst_27069);
} else {
if((state_val_27090 === (5))){
var inst_27083 = cljs.core.async.close_BANG_(out);
var state_27089__$1 = state_27089;
var statearr_27102_27119 = state_27089__$1;
(statearr_27102_27119[(2)] = inst_27083);

(statearr_27102_27119[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27090 === (10))){
var inst_27081 = (state_27089[(2)]);
var state_27089__$1 = state_27089;
var statearr_27103_27120 = state_27089__$1;
(statearr_27103_27120[(2)] = inst_27081);

(statearr_27103_27120[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27090 === (8))){
var inst_27068 = (state_27089[(7)]);
var inst_27070 = (state_27089[(9)]);
var inst_27069 = (state_27089[(8)]);
var inst_27059 = (state_27089[(10)]);
var inst_27073 = (function (){var cs = inst_27059;
var vec__27064 = inst_27068;
var v = inst_27069;
var c = inst_27070;
return ((function (cs,vec__27064,v,c,inst_27068,inst_27070,inst_27069,inst_27059,state_val_27090,c__25710__auto___27111,out){
return (function (p1__27055_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__27055_SHARP_);
});
;})(cs,vec__27064,v,c,inst_27068,inst_27070,inst_27069,inst_27059,state_val_27090,c__25710__auto___27111,out))
})();
var inst_27074 = cljs.core.filterv(inst_27073,inst_27059);
var inst_27059__$1 = inst_27074;
var state_27089__$1 = (function (){var statearr_27104 = state_27089;
(statearr_27104[(10)] = inst_27059__$1);

return statearr_27104;
})();
var statearr_27105_27121 = state_27089__$1;
(statearr_27105_27121[(2)] = null);

(statearr_27105_27121[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___27111,out))
;
return ((function (switch__25610__auto__,c__25710__auto___27111,out){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_27106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27106[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_27106[(1)] = (1));

return statearr_27106;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_27089){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27089);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27107){if((e27107 instanceof Object)){
var ex__25614__auto__ = e27107;
var statearr_27108_27122 = state_27089;
(statearr_27108_27122[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27089);

return cljs.core.cst$kw$recur;
} else {
throw e27107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27123 = state_27089;
state_27089 = G__27123;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_27089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_27089);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___27111,out))
})();
var state__25712__auto__ = (function (){var statearr_27109 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27109[(6)] = c__25710__auto___27111);

return statearr_27109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___27111,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27125 = arguments.length;
switch (G__27125) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25710__auto___27170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___27170,out){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___27170,out){
return (function (state_27149){
var state_val_27150 = (state_27149[(1)]);
if((state_val_27150 === (7))){
var inst_27131 = (state_27149[(7)]);
var inst_27131__$1 = (state_27149[(2)]);
var inst_27132 = (inst_27131__$1 == null);
var inst_27133 = cljs.core.not(inst_27132);
var state_27149__$1 = (function (){var statearr_27151 = state_27149;
(statearr_27151[(7)] = inst_27131__$1);

return statearr_27151;
})();
if(inst_27133){
var statearr_27152_27171 = state_27149__$1;
(statearr_27152_27171[(1)] = (8));

} else {
var statearr_27153_27172 = state_27149__$1;
(statearr_27153_27172[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (1))){
var inst_27126 = (0);
var state_27149__$1 = (function (){var statearr_27154 = state_27149;
(statearr_27154[(8)] = inst_27126);

return statearr_27154;
})();
var statearr_27155_27173 = state_27149__$1;
(statearr_27155_27173[(2)] = null);

(statearr_27155_27173[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (4))){
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27149__$1,(7),ch);
} else {
if((state_val_27150 === (6))){
var inst_27144 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27156_27174 = state_27149__$1;
(statearr_27156_27174[(2)] = inst_27144);

(statearr_27156_27174[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (3))){
var inst_27146 = (state_27149[(2)]);
var inst_27147 = cljs.core.async.close_BANG_(out);
var state_27149__$1 = (function (){var statearr_27157 = state_27149;
(statearr_27157[(9)] = inst_27146);

return statearr_27157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27149__$1,inst_27147);
} else {
if((state_val_27150 === (2))){
var inst_27126 = (state_27149[(8)]);
var inst_27128 = (inst_27126 < n);
var state_27149__$1 = state_27149;
if(cljs.core.truth_(inst_27128)){
var statearr_27158_27175 = state_27149__$1;
(statearr_27158_27175[(1)] = (4));

} else {
var statearr_27159_27176 = state_27149__$1;
(statearr_27159_27176[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (11))){
var inst_27126 = (state_27149[(8)]);
var inst_27136 = (state_27149[(2)]);
var inst_27137 = (inst_27126 + (1));
var inst_27126__$1 = inst_27137;
var state_27149__$1 = (function (){var statearr_27160 = state_27149;
(statearr_27160[(10)] = inst_27136);

(statearr_27160[(8)] = inst_27126__$1);

return statearr_27160;
})();
var statearr_27161_27177 = state_27149__$1;
(statearr_27161_27177[(2)] = null);

(statearr_27161_27177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (9))){
var state_27149__$1 = state_27149;
var statearr_27162_27178 = state_27149__$1;
(statearr_27162_27178[(2)] = null);

(statearr_27162_27178[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (5))){
var state_27149__$1 = state_27149;
var statearr_27163_27179 = state_27149__$1;
(statearr_27163_27179[(2)] = null);

(statearr_27163_27179[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (10))){
var inst_27141 = (state_27149[(2)]);
var state_27149__$1 = state_27149;
var statearr_27164_27180 = state_27149__$1;
(statearr_27164_27180[(2)] = inst_27141);

(statearr_27164_27180[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27150 === (8))){
var inst_27131 = (state_27149[(7)]);
var state_27149__$1 = state_27149;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27149__$1,(11),out,inst_27131);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___27170,out))
;
return ((function (switch__25610__auto__,c__25710__auto___27170,out){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_27165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27165[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_27165[(1)] = (1));

return statearr_27165;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_27149){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27149);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27166){if((e27166 instanceof Object)){
var ex__25614__auto__ = e27166;
var statearr_27167_27181 = state_27149;
(statearr_27167_27181[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27149);

return cljs.core.cst$kw$recur;
} else {
throw e27166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27182 = state_27149;
state_27149 = G__27182;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_27149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_27149);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___27170,out))
})();
var state__25712__auto__ = (function (){var statearr_27168 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27168[(6)] = c__25710__auto___27170);

return statearr_27168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___27170,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27184 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27184 = (function (f,ch,meta27185){
this.f = f;
this.ch = ch;
this.meta27185 = meta27185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27186,meta27185__$1){
var self__ = this;
var _27186__$1 = this;
return (new cljs.core.async.t_cljs$core$async27184(self__.f,self__.ch,meta27185__$1));
});

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27186){
var self__ = this;
var _27186__$1 = this;
return self__.meta27185;
});

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27187 = (function (f,ch,meta27185,_,fn1,meta27188){
this.f = f;
this.ch = ch;
this.meta27185 = meta27185;
this._ = _;
this.fn1 = fn1;
this.meta27188 = meta27188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27189,meta27188__$1){
var self__ = this;
var _27189__$1 = this;
return (new cljs.core.async.t_cljs$core$async27187(self__.f,self__.ch,self__.meta27185,self__._,self__.fn1,meta27188__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27189){
var self__ = this;
var _27189__$1 = this;
return self__.meta27188;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27187.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27183_SHARP_){
var G__27190 = (((p1__27183_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__27183_SHARP_) : self__.f.call(null,p1__27183_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__27190) : f1.call(null,G__27190));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27187.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta27185,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async27184], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta27188], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27187";

cljs.core.async.t_cljs$core$async27187.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async27187");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27187 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27187(f__$1,ch__$1,meta27185__$1,___$2,fn1__$1,meta27188){
return (new cljs.core.async.t_cljs$core$async27187(f__$1,ch__$1,meta27185__$1,___$2,fn1__$1,meta27188));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27187(self__.f,self__.ch,self__.meta27185,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21535__auto__ = ret;
if(cljs.core.truth_(and__21535__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__21535__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__27191 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__27191) : self__.f.call(null,G__27191));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27184.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta27185], null);
});

cljs.core.async.t_cljs$core$async27184.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27184";

cljs.core.async.t_cljs$core$async27184.cljs$lang$ctorPrWriter = (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async27184");
});

cljs.core.async.__GT_t_cljs$core$async27184 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27184(f__$1,ch__$1,meta27185){
return (new cljs.core.async.t_cljs$core$async27184(f__$1,ch__$1,meta27185));
});

}

return (new cljs.core.async.t_cljs$core$async27184(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27192 = (function (f,ch,meta27193){
this.f = f;
this.ch = ch;
this.meta27193 = meta27193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27194,meta27193__$1){
var self__ = this;
var _27194__$1 = this;
return (new cljs.core.async.t_cljs$core$async27192(self__.f,self__.ch,meta27193__$1));
});

cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27194){
var self__ = this;
var _27194__$1 = this;
return self__.meta27193;
});

cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async27192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta27193], null);
});

cljs.core.async.t_cljs$core$async27192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27192";

cljs.core.async.t_cljs$core$async27192.cljs$lang$ctorPrWriter = (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async27192");
});

cljs.core.async.__GT_t_cljs$core$async27192 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27192(f__$1,ch__$1,meta27193){
return (new cljs.core.async.t_cljs$core$async27192(f__$1,ch__$1,meta27193));
});

}

return (new cljs.core.async.t_cljs$core$async27192(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27195 = (function (p,ch,meta27196){
this.p = p;
this.ch = ch;
this.meta27196 = meta27196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27197,meta27196__$1){
var self__ = this;
var _27197__$1 = this;
return (new cljs.core.async.t_cljs$core$async27195(self__.p,self__.ch,meta27196__$1));
});

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27197){
var self__ = this;
var _27197__$1 = this;
return self__.meta27196;
});

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta27196], null);
});

cljs.core.async.t_cljs$core$async27195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27195";

cljs.core.async.t_cljs$core$async27195.cljs$lang$ctorPrWriter = (function (this__22172__auto__,writer__22173__auto__,opt__22174__auto__){
return cljs.core._write(writer__22173__auto__,"cljs.core.async/t_cljs$core$async27195");
});

cljs.core.async.__GT_t_cljs$core$async27195 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27195(p__$1,ch__$1,meta27196){
return (new cljs.core.async.t_cljs$core$async27195(p__$1,ch__$1,meta27196));
});

}

return (new cljs.core.async.t_cljs$core$async27195(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27199 = arguments.length;
switch (G__27199) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25710__auto___27239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___27239,out){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___27239,out){
return (function (state_27220){
var state_val_27221 = (state_27220[(1)]);
if((state_val_27221 === (7))){
var inst_27216 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27222_27240 = state_27220__$1;
(statearr_27222_27240[(2)] = inst_27216);

(statearr_27222_27240[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (1))){
var state_27220__$1 = state_27220;
var statearr_27223_27241 = state_27220__$1;
(statearr_27223_27241[(2)] = null);

(statearr_27223_27241[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (4))){
var inst_27202 = (state_27220[(7)]);
var inst_27202__$1 = (state_27220[(2)]);
var inst_27203 = (inst_27202__$1 == null);
var state_27220__$1 = (function (){var statearr_27224 = state_27220;
(statearr_27224[(7)] = inst_27202__$1);

return statearr_27224;
})();
if(cljs.core.truth_(inst_27203)){
var statearr_27225_27242 = state_27220__$1;
(statearr_27225_27242[(1)] = (5));

} else {
var statearr_27226_27243 = state_27220__$1;
(statearr_27226_27243[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (6))){
var inst_27202 = (state_27220[(7)]);
var inst_27207 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27202) : p.call(null,inst_27202));
var state_27220__$1 = state_27220;
if(cljs.core.truth_(inst_27207)){
var statearr_27227_27244 = state_27220__$1;
(statearr_27227_27244[(1)] = (8));

} else {
var statearr_27228_27245 = state_27220__$1;
(statearr_27228_27245[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (3))){
var inst_27218 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27220__$1,inst_27218);
} else {
if((state_val_27221 === (2))){
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27220__$1,(4),ch);
} else {
if((state_val_27221 === (11))){
var inst_27210 = (state_27220[(2)]);
var state_27220__$1 = state_27220;
var statearr_27229_27246 = state_27220__$1;
(statearr_27229_27246[(2)] = inst_27210);

(statearr_27229_27246[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (9))){
var state_27220__$1 = state_27220;
var statearr_27230_27247 = state_27220__$1;
(statearr_27230_27247[(2)] = null);

(statearr_27230_27247[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (5))){
var inst_27205 = cljs.core.async.close_BANG_(out);
var state_27220__$1 = state_27220;
var statearr_27231_27248 = state_27220__$1;
(statearr_27231_27248[(2)] = inst_27205);

(statearr_27231_27248[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (10))){
var inst_27213 = (state_27220[(2)]);
var state_27220__$1 = (function (){var statearr_27232 = state_27220;
(statearr_27232[(8)] = inst_27213);

return statearr_27232;
})();
var statearr_27233_27249 = state_27220__$1;
(statearr_27233_27249[(2)] = null);

(statearr_27233_27249[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27221 === (8))){
var inst_27202 = (state_27220[(7)]);
var state_27220__$1 = state_27220;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27220__$1,(11),out,inst_27202);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___27239,out))
;
return ((function (switch__25610__auto__,c__25710__auto___27239,out){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_27234 = [null,null,null,null,null,null,null,null,null];
(statearr_27234[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_27234[(1)] = (1));

return statearr_27234;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_27220){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27220);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27235){if((e27235 instanceof Object)){
var ex__25614__auto__ = e27235;
var statearr_27236_27250 = state_27220;
(statearr_27236_27250[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27220);

return cljs.core.cst$kw$recur;
} else {
throw e27235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27251 = state_27220;
state_27220 = G__27251;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_27220){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_27220);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___27239,out))
})();
var state__25712__auto__ = (function (){var statearr_27237 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27237[(6)] = c__25710__auto___27239);

return statearr_27237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___27239,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27253 = arguments.length;
switch (G__27253) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25710__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto__){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto__){
return (function (state_27316){
var state_val_27317 = (state_27316[(1)]);
if((state_val_27317 === (7))){
var inst_27312 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27318_27356 = state_27316__$1;
(statearr_27318_27356[(2)] = inst_27312);

(statearr_27318_27356[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (20))){
var inst_27282 = (state_27316[(7)]);
var inst_27293 = (state_27316[(2)]);
var inst_27294 = cljs.core.next(inst_27282);
var inst_27268 = inst_27294;
var inst_27269 = null;
var inst_27270 = (0);
var inst_27271 = (0);
var state_27316__$1 = (function (){var statearr_27319 = state_27316;
(statearr_27319[(8)] = inst_27270);

(statearr_27319[(9)] = inst_27268);

(statearr_27319[(10)] = inst_27293);

(statearr_27319[(11)] = inst_27269);

(statearr_27319[(12)] = inst_27271);

return statearr_27319;
})();
var statearr_27320_27357 = state_27316__$1;
(statearr_27320_27357[(2)] = null);

(statearr_27320_27357[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (1))){
var state_27316__$1 = state_27316;
var statearr_27321_27358 = state_27316__$1;
(statearr_27321_27358[(2)] = null);

(statearr_27321_27358[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (4))){
var inst_27257 = (state_27316[(13)]);
var inst_27257__$1 = (state_27316[(2)]);
var inst_27258 = (inst_27257__$1 == null);
var state_27316__$1 = (function (){var statearr_27322 = state_27316;
(statearr_27322[(13)] = inst_27257__$1);

return statearr_27322;
})();
if(cljs.core.truth_(inst_27258)){
var statearr_27323_27359 = state_27316__$1;
(statearr_27323_27359[(1)] = (5));

} else {
var statearr_27324_27360 = state_27316__$1;
(statearr_27324_27360[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (15))){
var state_27316__$1 = state_27316;
var statearr_27328_27361 = state_27316__$1;
(statearr_27328_27361[(2)] = null);

(statearr_27328_27361[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (21))){
var state_27316__$1 = state_27316;
var statearr_27329_27362 = state_27316__$1;
(statearr_27329_27362[(2)] = null);

(statearr_27329_27362[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (13))){
var inst_27270 = (state_27316[(8)]);
var inst_27268 = (state_27316[(9)]);
var inst_27269 = (state_27316[(11)]);
var inst_27271 = (state_27316[(12)]);
var inst_27278 = (state_27316[(2)]);
var inst_27279 = (inst_27271 + (1));
var tmp27325 = inst_27270;
var tmp27326 = inst_27268;
var tmp27327 = inst_27269;
var inst_27268__$1 = tmp27326;
var inst_27269__$1 = tmp27327;
var inst_27270__$1 = tmp27325;
var inst_27271__$1 = inst_27279;
var state_27316__$1 = (function (){var statearr_27330 = state_27316;
(statearr_27330[(8)] = inst_27270__$1);

(statearr_27330[(9)] = inst_27268__$1);

(statearr_27330[(14)] = inst_27278);

(statearr_27330[(11)] = inst_27269__$1);

(statearr_27330[(12)] = inst_27271__$1);

return statearr_27330;
})();
var statearr_27331_27363 = state_27316__$1;
(statearr_27331_27363[(2)] = null);

(statearr_27331_27363[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (22))){
var state_27316__$1 = state_27316;
var statearr_27332_27364 = state_27316__$1;
(statearr_27332_27364[(2)] = null);

(statearr_27332_27364[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (6))){
var inst_27257 = (state_27316[(13)]);
var inst_27266 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27257) : f.call(null,inst_27257));
var inst_27267 = cljs.core.seq(inst_27266);
var inst_27268 = inst_27267;
var inst_27269 = null;
var inst_27270 = (0);
var inst_27271 = (0);
var state_27316__$1 = (function (){var statearr_27333 = state_27316;
(statearr_27333[(8)] = inst_27270);

(statearr_27333[(9)] = inst_27268);

(statearr_27333[(11)] = inst_27269);

(statearr_27333[(12)] = inst_27271);

return statearr_27333;
})();
var statearr_27334_27365 = state_27316__$1;
(statearr_27334_27365[(2)] = null);

(statearr_27334_27365[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (17))){
var inst_27282 = (state_27316[(7)]);
var inst_27286 = cljs.core.chunk_first(inst_27282);
var inst_27287 = cljs.core.chunk_rest(inst_27282);
var inst_27288 = cljs.core.count(inst_27286);
var inst_27268 = inst_27287;
var inst_27269 = inst_27286;
var inst_27270 = inst_27288;
var inst_27271 = (0);
var state_27316__$1 = (function (){var statearr_27335 = state_27316;
(statearr_27335[(8)] = inst_27270);

(statearr_27335[(9)] = inst_27268);

(statearr_27335[(11)] = inst_27269);

(statearr_27335[(12)] = inst_27271);

return statearr_27335;
})();
var statearr_27336_27366 = state_27316__$1;
(statearr_27336_27366[(2)] = null);

(statearr_27336_27366[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (3))){
var inst_27314 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27316__$1,inst_27314);
} else {
if((state_val_27317 === (12))){
var inst_27302 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27337_27367 = state_27316__$1;
(statearr_27337_27367[(2)] = inst_27302);

(statearr_27337_27367[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (2))){
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27316__$1,(4),in$);
} else {
if((state_val_27317 === (23))){
var inst_27310 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27338_27368 = state_27316__$1;
(statearr_27338_27368[(2)] = inst_27310);

(statearr_27338_27368[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (19))){
var inst_27297 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27339_27369 = state_27316__$1;
(statearr_27339_27369[(2)] = inst_27297);

(statearr_27339_27369[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (11))){
var inst_27268 = (state_27316[(9)]);
var inst_27282 = (state_27316[(7)]);
var inst_27282__$1 = cljs.core.seq(inst_27268);
var state_27316__$1 = (function (){var statearr_27340 = state_27316;
(statearr_27340[(7)] = inst_27282__$1);

return statearr_27340;
})();
if(inst_27282__$1){
var statearr_27341_27370 = state_27316__$1;
(statearr_27341_27370[(1)] = (14));

} else {
var statearr_27342_27371 = state_27316__$1;
(statearr_27342_27371[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (9))){
var inst_27304 = (state_27316[(2)]);
var inst_27305 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_27316__$1 = (function (){var statearr_27343 = state_27316;
(statearr_27343[(15)] = inst_27304);

return statearr_27343;
})();
if(cljs.core.truth_(inst_27305)){
var statearr_27344_27372 = state_27316__$1;
(statearr_27344_27372[(1)] = (21));

} else {
var statearr_27345_27373 = state_27316__$1;
(statearr_27345_27373[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (5))){
var inst_27260 = cljs.core.async.close_BANG_(out);
var state_27316__$1 = state_27316;
var statearr_27346_27374 = state_27316__$1;
(statearr_27346_27374[(2)] = inst_27260);

(statearr_27346_27374[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (14))){
var inst_27282 = (state_27316[(7)]);
var inst_27284 = cljs.core.chunked_seq_QMARK_(inst_27282);
var state_27316__$1 = state_27316;
if(inst_27284){
var statearr_27347_27375 = state_27316__$1;
(statearr_27347_27375[(1)] = (17));

} else {
var statearr_27348_27376 = state_27316__$1;
(statearr_27348_27376[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (16))){
var inst_27300 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27349_27377 = state_27316__$1;
(statearr_27349_27377[(2)] = inst_27300);

(statearr_27349_27377[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27317 === (10))){
var inst_27269 = (state_27316[(11)]);
var inst_27271 = (state_27316[(12)]);
var inst_27276 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27269,inst_27271);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27316__$1,(13),out,inst_27276);
} else {
if((state_val_27317 === (18))){
var inst_27282 = (state_27316[(7)]);
var inst_27291 = cljs.core.first(inst_27282);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27316__$1,(20),out,inst_27291);
} else {
if((state_val_27317 === (8))){
var inst_27270 = (state_27316[(8)]);
var inst_27271 = (state_27316[(12)]);
var inst_27273 = (inst_27271 < inst_27270);
var inst_27274 = inst_27273;
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27274)){
var statearr_27350_27378 = state_27316__$1;
(statearr_27350_27378[(1)] = (10));

} else {
var statearr_27351_27379 = state_27316__$1;
(statearr_27351_27379[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto__))
;
return ((function (switch__25610__auto__,c__25710__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25611__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25611__auto____0 = (function (){
var statearr_27352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27352[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25611__auto__);

(statearr_27352[(1)] = (1));

return statearr_27352;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25611__auto____1 = (function (state_27316){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27316);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27353){if((e27353 instanceof Object)){
var ex__25614__auto__ = e27353;
var statearr_27354_27380 = state_27316;
(statearr_27354_27380[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27316);

return cljs.core.cst$kw$recur;
} else {
throw e27353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27381 = state_27316;
state_27316 = G__27381;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25611__auto__ = function(state_27316){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25611__auto____1.call(this,state_27316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25611__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25611__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto__))
})();
var state__25712__auto__ = (function (){var statearr_27355 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27355[(6)] = c__25710__auto__);

return statearr_27355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto__))
);

return c__25710__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27383 = arguments.length;
switch (G__27383) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27386 = arguments.length;
switch (G__27386) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27389 = arguments.length;
switch (G__27389) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25710__auto___27436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___27436,out){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___27436,out){
return (function (state_27413){
var state_val_27414 = (state_27413[(1)]);
if((state_val_27414 === (7))){
var inst_27408 = (state_27413[(2)]);
var state_27413__$1 = state_27413;
var statearr_27415_27437 = state_27413__$1;
(statearr_27415_27437[(2)] = inst_27408);

(statearr_27415_27437[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27414 === (1))){
var inst_27390 = null;
var state_27413__$1 = (function (){var statearr_27416 = state_27413;
(statearr_27416[(7)] = inst_27390);

return statearr_27416;
})();
var statearr_27417_27438 = state_27413__$1;
(statearr_27417_27438[(2)] = null);

(statearr_27417_27438[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27414 === (4))){
var inst_27393 = (state_27413[(8)]);
var inst_27393__$1 = (state_27413[(2)]);
var inst_27394 = (inst_27393__$1 == null);
var inst_27395 = cljs.core.not(inst_27394);
var state_27413__$1 = (function (){var statearr_27418 = state_27413;
(statearr_27418[(8)] = inst_27393__$1);

return statearr_27418;
})();
if(inst_27395){
var statearr_27419_27439 = state_27413__$1;
(statearr_27419_27439[(1)] = (5));

} else {
var statearr_27420_27440 = state_27413__$1;
(statearr_27420_27440[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27414 === (6))){
var state_27413__$1 = state_27413;
var statearr_27421_27441 = state_27413__$1;
(statearr_27421_27441[(2)] = null);

(statearr_27421_27441[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27414 === (3))){
var inst_27410 = (state_27413[(2)]);
var inst_27411 = cljs.core.async.close_BANG_(out);
var state_27413__$1 = (function (){var statearr_27422 = state_27413;
(statearr_27422[(9)] = inst_27410);

return statearr_27422;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27413__$1,inst_27411);
} else {
if((state_val_27414 === (2))){
var state_27413__$1 = state_27413;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27413__$1,(4),ch);
} else {
if((state_val_27414 === (11))){
var inst_27393 = (state_27413[(8)]);
var inst_27402 = (state_27413[(2)]);
var inst_27390 = inst_27393;
var state_27413__$1 = (function (){var statearr_27423 = state_27413;
(statearr_27423[(10)] = inst_27402);

(statearr_27423[(7)] = inst_27390);

return statearr_27423;
})();
var statearr_27424_27442 = state_27413__$1;
(statearr_27424_27442[(2)] = null);

(statearr_27424_27442[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27414 === (9))){
var inst_27393 = (state_27413[(8)]);
var state_27413__$1 = state_27413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27413__$1,(11),out,inst_27393);
} else {
if((state_val_27414 === (5))){
var inst_27390 = (state_27413[(7)]);
var inst_27393 = (state_27413[(8)]);
var inst_27397 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27393,inst_27390);
var state_27413__$1 = state_27413;
if(inst_27397){
var statearr_27426_27443 = state_27413__$1;
(statearr_27426_27443[(1)] = (8));

} else {
var statearr_27427_27444 = state_27413__$1;
(statearr_27427_27444[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27414 === (10))){
var inst_27405 = (state_27413[(2)]);
var state_27413__$1 = state_27413;
var statearr_27428_27445 = state_27413__$1;
(statearr_27428_27445[(2)] = inst_27405);

(statearr_27428_27445[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27414 === (8))){
var inst_27390 = (state_27413[(7)]);
var tmp27425 = inst_27390;
var inst_27390__$1 = tmp27425;
var state_27413__$1 = (function (){var statearr_27429 = state_27413;
(statearr_27429[(7)] = inst_27390__$1);

return statearr_27429;
})();
var statearr_27430_27446 = state_27413__$1;
(statearr_27430_27446[(2)] = null);

(statearr_27430_27446[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___27436,out))
;
return ((function (switch__25610__auto__,c__25710__auto___27436,out){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_27431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27431[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_27431[(1)] = (1));

return statearr_27431;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_27413){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27413);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27432){if((e27432 instanceof Object)){
var ex__25614__auto__ = e27432;
var statearr_27433_27447 = state_27413;
(statearr_27433_27447[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27413);

return cljs.core.cst$kw$recur;
} else {
throw e27432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27448 = state_27413;
state_27413 = G__27448;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_27413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_27413);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___27436,out))
})();
var state__25712__auto__ = (function (){var statearr_27434 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27434[(6)] = c__25710__auto___27436);

return statearr_27434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___27436,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27450 = arguments.length;
switch (G__27450) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25710__auto___27516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___27516,out){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___27516,out){
return (function (state_27488){
var state_val_27489 = (state_27488[(1)]);
if((state_val_27489 === (7))){
var inst_27484 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27490_27517 = state_27488__$1;
(statearr_27490_27517[(2)] = inst_27484);

(statearr_27490_27517[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (1))){
var inst_27451 = (new Array(n));
var inst_27452 = inst_27451;
var inst_27453 = (0);
var state_27488__$1 = (function (){var statearr_27491 = state_27488;
(statearr_27491[(7)] = inst_27452);

(statearr_27491[(8)] = inst_27453);

return statearr_27491;
})();
var statearr_27492_27518 = state_27488__$1;
(statearr_27492_27518[(2)] = null);

(statearr_27492_27518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (4))){
var inst_27456 = (state_27488[(9)]);
var inst_27456__$1 = (state_27488[(2)]);
var inst_27457 = (inst_27456__$1 == null);
var inst_27458 = cljs.core.not(inst_27457);
var state_27488__$1 = (function (){var statearr_27493 = state_27488;
(statearr_27493[(9)] = inst_27456__$1);

return statearr_27493;
})();
if(inst_27458){
var statearr_27494_27519 = state_27488__$1;
(statearr_27494_27519[(1)] = (5));

} else {
var statearr_27495_27520 = state_27488__$1;
(statearr_27495_27520[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (15))){
var inst_27478 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27496_27521 = state_27488__$1;
(statearr_27496_27521[(2)] = inst_27478);

(statearr_27496_27521[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (13))){
var state_27488__$1 = state_27488;
var statearr_27497_27522 = state_27488__$1;
(statearr_27497_27522[(2)] = null);

(statearr_27497_27522[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (6))){
var inst_27453 = (state_27488[(8)]);
var inst_27474 = (inst_27453 > (0));
var state_27488__$1 = state_27488;
if(cljs.core.truth_(inst_27474)){
var statearr_27498_27523 = state_27488__$1;
(statearr_27498_27523[(1)] = (12));

} else {
var statearr_27499_27524 = state_27488__$1;
(statearr_27499_27524[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (3))){
var inst_27486 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27488__$1,inst_27486);
} else {
if((state_val_27489 === (12))){
var inst_27452 = (state_27488[(7)]);
var inst_27476 = cljs.core.vec(inst_27452);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27488__$1,(15),out,inst_27476);
} else {
if((state_val_27489 === (2))){
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27488__$1,(4),ch);
} else {
if((state_val_27489 === (11))){
var inst_27468 = (state_27488[(2)]);
var inst_27469 = (new Array(n));
var inst_27452 = inst_27469;
var inst_27453 = (0);
var state_27488__$1 = (function (){var statearr_27500 = state_27488;
(statearr_27500[(10)] = inst_27468);

(statearr_27500[(7)] = inst_27452);

(statearr_27500[(8)] = inst_27453);

return statearr_27500;
})();
var statearr_27501_27525 = state_27488__$1;
(statearr_27501_27525[(2)] = null);

(statearr_27501_27525[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (9))){
var inst_27452 = (state_27488[(7)]);
var inst_27466 = cljs.core.vec(inst_27452);
var state_27488__$1 = state_27488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27488__$1,(11),out,inst_27466);
} else {
if((state_val_27489 === (5))){
var inst_27456 = (state_27488[(9)]);
var inst_27452 = (state_27488[(7)]);
var inst_27453 = (state_27488[(8)]);
var inst_27461 = (state_27488[(11)]);
var inst_27460 = (inst_27452[inst_27453] = inst_27456);
var inst_27461__$1 = (inst_27453 + (1));
var inst_27462 = (inst_27461__$1 < n);
var state_27488__$1 = (function (){var statearr_27502 = state_27488;
(statearr_27502[(12)] = inst_27460);

(statearr_27502[(11)] = inst_27461__$1);

return statearr_27502;
})();
if(cljs.core.truth_(inst_27462)){
var statearr_27503_27526 = state_27488__$1;
(statearr_27503_27526[(1)] = (8));

} else {
var statearr_27504_27527 = state_27488__$1;
(statearr_27504_27527[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (14))){
var inst_27481 = (state_27488[(2)]);
var inst_27482 = cljs.core.async.close_BANG_(out);
var state_27488__$1 = (function (){var statearr_27506 = state_27488;
(statearr_27506[(13)] = inst_27481);

return statearr_27506;
})();
var statearr_27507_27528 = state_27488__$1;
(statearr_27507_27528[(2)] = inst_27482);

(statearr_27507_27528[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (10))){
var inst_27472 = (state_27488[(2)]);
var state_27488__$1 = state_27488;
var statearr_27508_27529 = state_27488__$1;
(statearr_27508_27529[(2)] = inst_27472);

(statearr_27508_27529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27489 === (8))){
var inst_27452 = (state_27488[(7)]);
var inst_27461 = (state_27488[(11)]);
var tmp27505 = inst_27452;
var inst_27452__$1 = tmp27505;
var inst_27453 = inst_27461;
var state_27488__$1 = (function (){var statearr_27509 = state_27488;
(statearr_27509[(7)] = inst_27452__$1);

(statearr_27509[(8)] = inst_27453);

return statearr_27509;
})();
var statearr_27510_27530 = state_27488__$1;
(statearr_27510_27530[(2)] = null);

(statearr_27510_27530[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___27516,out))
;
return ((function (switch__25610__auto__,c__25710__auto___27516,out){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_27511 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27511[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_27511[(1)] = (1));

return statearr_27511;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_27488){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27488);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27512){if((e27512 instanceof Object)){
var ex__25614__auto__ = e27512;
var statearr_27513_27531 = state_27488;
(statearr_27513_27531[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27488);

return cljs.core.cst$kw$recur;
} else {
throw e27512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27532 = state_27488;
state_27488 = G__27532;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_27488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_27488);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___27516,out))
})();
var state__25712__auto__ = (function (){var statearr_27514 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27514[(6)] = c__25710__auto___27516);

return statearr_27514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___27516,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27534 = arguments.length;
switch (G__27534) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__25710__auto___27604 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__25710__auto___27604,out){
return (function (){
var f__25711__auto__ = (function (){var switch__25610__auto__ = ((function (c__25710__auto___27604,out){
return (function (state_27576){
var state_val_27577 = (state_27576[(1)]);
if((state_val_27577 === (7))){
var inst_27572 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27578_27605 = state_27576__$1;
(statearr_27578_27605[(2)] = inst_27572);

(statearr_27578_27605[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (1))){
var inst_27535 = [];
var inst_27536 = inst_27535;
var inst_27537 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_27576__$1 = (function (){var statearr_27579 = state_27576;
(statearr_27579[(7)] = inst_27537);

(statearr_27579[(8)] = inst_27536);

return statearr_27579;
})();
var statearr_27580_27606 = state_27576__$1;
(statearr_27580_27606[(2)] = null);

(statearr_27580_27606[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (4))){
var inst_27540 = (state_27576[(9)]);
var inst_27540__$1 = (state_27576[(2)]);
var inst_27541 = (inst_27540__$1 == null);
var inst_27542 = cljs.core.not(inst_27541);
var state_27576__$1 = (function (){var statearr_27581 = state_27576;
(statearr_27581[(9)] = inst_27540__$1);

return statearr_27581;
})();
if(inst_27542){
var statearr_27582_27607 = state_27576__$1;
(statearr_27582_27607[(1)] = (5));

} else {
var statearr_27583_27608 = state_27576__$1;
(statearr_27583_27608[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (15))){
var inst_27566 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27584_27609 = state_27576__$1;
(statearr_27584_27609[(2)] = inst_27566);

(statearr_27584_27609[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (13))){
var state_27576__$1 = state_27576;
var statearr_27585_27610 = state_27576__$1;
(statearr_27585_27610[(2)] = null);

(statearr_27585_27610[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (6))){
var inst_27536 = (state_27576[(8)]);
var inst_27561 = inst_27536.length;
var inst_27562 = (inst_27561 > (0));
var state_27576__$1 = state_27576;
if(cljs.core.truth_(inst_27562)){
var statearr_27586_27611 = state_27576__$1;
(statearr_27586_27611[(1)] = (12));

} else {
var statearr_27587_27612 = state_27576__$1;
(statearr_27587_27612[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (3))){
var inst_27574 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27576__$1,inst_27574);
} else {
if((state_val_27577 === (12))){
var inst_27536 = (state_27576[(8)]);
var inst_27564 = cljs.core.vec(inst_27536);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27576__$1,(15),out,inst_27564);
} else {
if((state_val_27577 === (2))){
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27576__$1,(4),ch);
} else {
if((state_val_27577 === (11))){
var inst_27540 = (state_27576[(9)]);
var inst_27544 = (state_27576[(10)]);
var inst_27554 = (state_27576[(2)]);
var inst_27555 = [];
var inst_27556 = inst_27555.push(inst_27540);
var inst_27536 = inst_27555;
var inst_27537 = inst_27544;
var state_27576__$1 = (function (){var statearr_27588 = state_27576;
(statearr_27588[(11)] = inst_27556);

(statearr_27588[(7)] = inst_27537);

(statearr_27588[(12)] = inst_27554);

(statearr_27588[(8)] = inst_27536);

return statearr_27588;
})();
var statearr_27589_27613 = state_27576__$1;
(statearr_27589_27613[(2)] = null);

(statearr_27589_27613[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (9))){
var inst_27536 = (state_27576[(8)]);
var inst_27552 = cljs.core.vec(inst_27536);
var state_27576__$1 = state_27576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27576__$1,(11),out,inst_27552);
} else {
if((state_val_27577 === (5))){
var inst_27540 = (state_27576[(9)]);
var inst_27544 = (state_27576[(10)]);
var inst_27537 = (state_27576[(7)]);
var inst_27544__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_27540) : f.call(null,inst_27540));
var inst_27545 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_27544__$1,inst_27537);
var inst_27546 = cljs.core.keyword_identical_QMARK_(inst_27537,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_27547 = (inst_27545) || (inst_27546);
var state_27576__$1 = (function (){var statearr_27590 = state_27576;
(statearr_27590[(10)] = inst_27544__$1);

return statearr_27590;
})();
if(cljs.core.truth_(inst_27547)){
var statearr_27591_27614 = state_27576__$1;
(statearr_27591_27614[(1)] = (8));

} else {
var statearr_27592_27615 = state_27576__$1;
(statearr_27592_27615[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (14))){
var inst_27569 = (state_27576[(2)]);
var inst_27570 = cljs.core.async.close_BANG_(out);
var state_27576__$1 = (function (){var statearr_27594 = state_27576;
(statearr_27594[(13)] = inst_27569);

return statearr_27594;
})();
var statearr_27595_27616 = state_27576__$1;
(statearr_27595_27616[(2)] = inst_27570);

(statearr_27595_27616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (10))){
var inst_27559 = (state_27576[(2)]);
var state_27576__$1 = state_27576;
var statearr_27596_27617 = state_27576__$1;
(statearr_27596_27617[(2)] = inst_27559);

(statearr_27596_27617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27577 === (8))){
var inst_27540 = (state_27576[(9)]);
var inst_27544 = (state_27576[(10)]);
var inst_27536 = (state_27576[(8)]);
var inst_27549 = inst_27536.push(inst_27540);
var tmp27593 = inst_27536;
var inst_27536__$1 = tmp27593;
var inst_27537 = inst_27544;
var state_27576__$1 = (function (){var statearr_27597 = state_27576;
(statearr_27597[(14)] = inst_27549);

(statearr_27597[(7)] = inst_27537);

(statearr_27597[(8)] = inst_27536__$1);

return statearr_27597;
})();
var statearr_27598_27618 = state_27576__$1;
(statearr_27598_27618[(2)] = null);

(statearr_27598_27618[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25710__auto___27604,out))
;
return ((function (switch__25610__auto__,c__25710__auto___27604,out){
return (function() {
var cljs$core$async$state_machine__25611__auto__ = null;
var cljs$core$async$state_machine__25611__auto____0 = (function (){
var statearr_27599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27599[(0)] = cljs$core$async$state_machine__25611__auto__);

(statearr_27599[(1)] = (1));

return statearr_27599;
});
var cljs$core$async$state_machine__25611__auto____1 = (function (state_27576){
while(true){
var ret_value__25612__auto__ = (function (){try{while(true){
var result__25613__auto__ = switch__25610__auto__(state_27576);
if(cljs.core.keyword_identical_QMARK_(result__25613__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__25613__auto__;
}
break;
}
}catch (e27600){if((e27600 instanceof Object)){
var ex__25614__auto__ = e27600;
var statearr_27601_27619 = state_27576;
(statearr_27601_27619[(5)] = ex__25614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27576);

return cljs.core.cst$kw$recur;
} else {
throw e27600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25612__auto__,cljs.core.cst$kw$recur)){
var G__27620 = state_27576;
state_27576 = G__27620;
continue;
} else {
return ret_value__25612__auto__;
}
break;
}
});
cljs$core$async$state_machine__25611__auto__ = function(state_27576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25611__auto____1.call(this,state_27576);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25611__auto____0;
cljs$core$async$state_machine__25611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25611__auto____1;
return cljs$core$async$state_machine__25611__auto__;
})()
;})(switch__25610__auto__,c__25710__auto___27604,out))
})();
var state__25712__auto__ = (function (){var statearr_27602 = (f__25711__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25711__auto__.cljs$core$IFn$_invoke$arity$0() : f__25711__auto__.call(null));
(statearr_27602[(6)] = c__25710__auto___27604);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25712__auto__);
});})(c__25710__auto___27604,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

