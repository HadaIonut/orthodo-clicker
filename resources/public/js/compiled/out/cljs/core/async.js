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
var G__27459 = arguments.length;
switch (G__27459) {
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
if(typeof cljs.core.async.t_cljs$core$async27460 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27460 = (function (f,blockable,meta27461){
this.f = f;
this.blockable = blockable;
this.meta27461 = meta27461;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27462,meta27461__$1){
var self__ = this;
var _27462__$1 = this;
return (new cljs.core.async.t_cljs$core$async27460(self__.f,self__.blockable,meta27461__$1));
});

cljs.core.async.t_cljs$core$async27460.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27462){
var self__ = this;
var _27462__$1 = this;
return self__.meta27461;
});

cljs.core.async.t_cljs$core$async27460.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27460.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27460.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27460.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27460.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta27461], null);
});

cljs.core.async.t_cljs$core$async27460.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27460.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27460";

cljs.core.async.t_cljs$core$async27460.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async27460");
});

cljs.core.async.__GT_t_cljs$core$async27460 = (function cljs$core$async$__GT_t_cljs$core$async27460(f__$1,blockable__$1,meta27461){
return (new cljs.core.async.t_cljs$core$async27460(f__$1,blockable__$1,meta27461));
});

}

return (new cljs.core.async.t_cljs$core$async27460(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27466 = arguments.length;
switch (G__27466) {
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
var G__27469 = arguments.length;
switch (G__27469) {
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
var G__27472 = arguments.length;
switch (G__27472) {
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
var val_27474 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27474) : fn1.call(null,val_27474));
} else {
cljs.core.async.impl.dispatch.run(((function (val_27474,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27474) : fn1.call(null,val_27474));
});})(val_27474,ret))
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
var G__27476 = arguments.length;
switch (G__27476) {
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
var n__22488__auto___27478 = n;
var x_27479 = (0);
while(true){
if((x_27479 < n__22488__auto___27478)){
(a[x_27479] = (0));

var G__27480 = (x_27479 + (1));
x_27479 = G__27480;
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

var G__27481 = (i + (1));
i = G__27481;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async27482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27482 = (function (flag,meta27483){
this.flag = flag;
this.meta27483 = meta27483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27484,meta27483__$1){
var self__ = this;
var _27484__$1 = this;
return (new cljs.core.async.t_cljs$core$async27482(self__.flag,meta27483__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27484){
var self__ = this;
var _27484__$1 = this;
return self__.meta27483;
});})(flag))
;

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27482.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta27483], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27482";

cljs.core.async.t_cljs$core$async27482.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async27482");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27482 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27482(flag__$1,meta27483){
return (new cljs.core.async.t_cljs$core$async27482(flag__$1,meta27483));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27482(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27485 = (function (flag,cb,meta27486){
this.flag = flag;
this.cb = cb;
this.meta27486 = meta27486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27487,meta27486__$1){
var self__ = this;
var _27487__$1 = this;
return (new cljs.core.async.t_cljs$core$async27485(self__.flag,self__.cb,meta27486__$1));
});

cljs.core.async.t_cljs$core$async27485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27487){
var self__ = this;
var _27487__$1 = this;
return self__.meta27486;
});

cljs.core.async.t_cljs$core$async27485.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27485.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async27485.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27485.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta27486], null);
});

cljs.core.async.t_cljs$core$async27485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27485";

cljs.core.async.t_cljs$core$async27485.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async27485");
});

cljs.core.async.__GT_t_cljs$core$async27485 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27485(flag__$1,cb__$1,meta27486){
return (new cljs.core.async.t_cljs$core$async27485(flag__$1,cb__$1,meta27486));
});

}

return (new cljs.core.async.t_cljs$core$async27485(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__27488_SHARP_){
var G__27490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27488_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27490) : fret.call(null,G__27490));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27489_SHARP_){
var G__27491 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27489_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27491) : fret.call(null,G__27491));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__21548__auto__ = wport;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27492 = (i + (1));
i = G__27492;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21548__auto__ = ret;
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__21536__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__21536__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__21536__auto__;
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
var args__22719__auto__ = [];
var len__22712__auto___27498 = arguments.length;
var i__22713__auto___27499 = (0);
while(true){
if((i__22713__auto___27499 < len__22712__auto___27498)){
args__22719__auto__.push((arguments[i__22713__auto___27499]));

var G__27500 = (i__22713__auto___27499 + (1));
i__22713__auto___27499 = G__27500;
continue;
} else {
}
break;
}

var argseq__22720__auto__ = ((((1) < args__22719__auto__.length))?(new cljs.core.IndexedSeq(args__22719__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22720__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27495){
var map__27496 = p__27495;
var map__27496__$1 = ((((!((map__27496 == null)))?((((map__27496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27496):map__27496);
var opts = map__27496__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27493){
var G__27494 = cljs.core.first(seq27493);
var seq27493__$1 = cljs.core.next(seq27493);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27494,seq27493__$1);
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
var G__27502 = arguments.length;
switch (G__27502) {
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
var c__27413__auto___27548 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___27548){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___27548){
return (function (state_27526){
var state_val_27527 = (state_27526[(1)]);
if((state_val_27527 === (7))){
var inst_27522 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
var statearr_27528_27549 = state_27526__$1;
(statearr_27528_27549[(2)] = inst_27522);

(statearr_27528_27549[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (1))){
var state_27526__$1 = state_27526;
var statearr_27529_27550 = state_27526__$1;
(statearr_27529_27550[(2)] = null);

(statearr_27529_27550[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (4))){
var inst_27505 = (state_27526[(7)]);
var inst_27505__$1 = (state_27526[(2)]);
var inst_27506 = (inst_27505__$1 == null);
var state_27526__$1 = (function (){var statearr_27530 = state_27526;
(statearr_27530[(7)] = inst_27505__$1);

return statearr_27530;
})();
if(cljs.core.truth_(inst_27506)){
var statearr_27531_27551 = state_27526__$1;
(statearr_27531_27551[(1)] = (5));

} else {
var statearr_27532_27552 = state_27526__$1;
(statearr_27532_27552[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (13))){
var state_27526__$1 = state_27526;
var statearr_27533_27553 = state_27526__$1;
(statearr_27533_27553[(2)] = null);

(statearr_27533_27553[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (6))){
var inst_27505 = (state_27526[(7)]);
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27526__$1,(11),to,inst_27505);
} else {
if((state_val_27527 === (3))){
var inst_27524 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27526__$1,inst_27524);
} else {
if((state_val_27527 === (12))){
var state_27526__$1 = state_27526;
var statearr_27534_27554 = state_27526__$1;
(statearr_27534_27554[(2)] = null);

(statearr_27534_27554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (2))){
var state_27526__$1 = state_27526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27526__$1,(4),from);
} else {
if((state_val_27527 === (11))){
var inst_27515 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
if(cljs.core.truth_(inst_27515)){
var statearr_27535_27555 = state_27526__$1;
(statearr_27535_27555[(1)] = (12));

} else {
var statearr_27536_27556 = state_27526__$1;
(statearr_27536_27556[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (9))){
var state_27526__$1 = state_27526;
var statearr_27537_27557 = state_27526__$1;
(statearr_27537_27557[(2)] = null);

(statearr_27537_27557[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (5))){
var state_27526__$1 = state_27526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27538_27558 = state_27526__$1;
(statearr_27538_27558[(1)] = (8));

} else {
var statearr_27539_27559 = state_27526__$1;
(statearr_27539_27559[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (14))){
var inst_27520 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
var statearr_27540_27560 = state_27526__$1;
(statearr_27540_27560[(2)] = inst_27520);

(statearr_27540_27560[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (10))){
var inst_27512 = (state_27526[(2)]);
var state_27526__$1 = state_27526;
var statearr_27541_27561 = state_27526__$1;
(statearr_27541_27561[(2)] = inst_27512);

(statearr_27541_27561[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27527 === (8))){
var inst_27509 = cljs.core.async.close_BANG_(to);
var state_27526__$1 = state_27526;
var statearr_27542_27562 = state_27526__$1;
(statearr_27542_27562[(2)] = inst_27509);

(statearr_27542_27562[(1)] = (10));


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
});})(c__27413__auto___27548))
;
return ((function (switch__27313__auto__,c__27413__auto___27548){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_27543 = [null,null,null,null,null,null,null,null];
(statearr_27543[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_27543[(1)] = (1));

return statearr_27543;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_27526){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27526);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27544){if((e27544 instanceof Object)){
var ex__27317__auto__ = e27544;
var statearr_27545_27563 = state_27526;
(statearr_27545_27563[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27526);

return cljs.core.cst$kw$recur;
} else {
throw e27544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27564 = state_27526;
state_27526 = G__27564;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_27526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_27526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___27548))
})();
var state__27415__auto__ = (function (){var statearr_27546 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27546[(6)] = c__27413__auto___27548);

return statearr_27546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___27548))
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
return (function (p__27565){
var vec__27566 = p__27565;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(1),null);
var job = vec__27566;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27413__auto___27737 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___27737,res,vec__27566,v,p,job,jobs,results){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___27737,res,vec__27566,v,p,job,jobs,results){
return (function (state_27573){
var state_val_27574 = (state_27573[(1)]);
if((state_val_27574 === (1))){
var state_27573__$1 = state_27573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27573__$1,(2),res,v);
} else {
if((state_val_27574 === (2))){
var inst_27570 = (state_27573[(2)]);
var inst_27571 = cljs.core.async.close_BANG_(res);
var state_27573__$1 = (function (){var statearr_27575 = state_27573;
(statearr_27575[(7)] = inst_27570);

return statearr_27575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27573__$1,inst_27571);
} else {
return null;
}
}
});})(c__27413__auto___27737,res,vec__27566,v,p,job,jobs,results))
;
return ((function (switch__27313__auto__,c__27413__auto___27737,res,vec__27566,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0 = (function (){
var statearr_27576 = [null,null,null,null,null,null,null,null];
(statearr_27576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__);

(statearr_27576[(1)] = (1));

return statearr_27576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1 = (function (state_27573){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27573);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27577){if((e27577 instanceof Object)){
var ex__27317__auto__ = e27577;
var statearr_27578_27738 = state_27573;
(statearr_27578_27738[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27573);

return cljs.core.cst$kw$recur;
} else {
throw e27577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27739 = state_27573;
state_27573 = G__27739;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = function(state_27573){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1.call(this,state_27573);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___27737,res,vec__27566,v,p,job,jobs,results))
})();
var state__27415__auto__ = (function (){var statearr_27579 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27579[(6)] = c__27413__auto___27737);

return statearr_27579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___27737,res,vec__27566,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27580){
var vec__27581 = p__27580;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27581,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27581,(1),null);
var job = vec__27581;
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
var n__22488__auto___27740 = n;
var __27741 = (0);
while(true){
if((__27741 < n__22488__auto___27740)){
var G__27584_27742 = type;
var G__27584_27743__$1 = (((G__27584_27742 instanceof cljs.core.Keyword))?G__27584_27742.fqn:null);
switch (G__27584_27743__$1) {
case "compute":
var c__27413__auto___27745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27741,c__27413__auto___27745,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (__27741,c__27413__auto___27745,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async){
return (function (state_27597){
var state_val_27598 = (state_27597[(1)]);
if((state_val_27598 === (1))){
var state_27597__$1 = state_27597;
var statearr_27599_27746 = state_27597__$1;
(statearr_27599_27746[(2)] = null);

(statearr_27599_27746[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27598 === (2))){
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27597__$1,(4),jobs);
} else {
if((state_val_27598 === (3))){
var inst_27595 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27597__$1,inst_27595);
} else {
if((state_val_27598 === (4))){
var inst_27587 = (state_27597[(2)]);
var inst_27588 = process(inst_27587);
var state_27597__$1 = state_27597;
if(cljs.core.truth_(inst_27588)){
var statearr_27600_27747 = state_27597__$1;
(statearr_27600_27747[(1)] = (5));

} else {
var statearr_27601_27748 = state_27597__$1;
(statearr_27601_27748[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27598 === (5))){
var state_27597__$1 = state_27597;
var statearr_27602_27749 = state_27597__$1;
(statearr_27602_27749[(2)] = null);

(statearr_27602_27749[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27598 === (6))){
var state_27597__$1 = state_27597;
var statearr_27603_27750 = state_27597__$1;
(statearr_27603_27750[(2)] = null);

(statearr_27603_27750[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27598 === (7))){
var inst_27593 = (state_27597[(2)]);
var state_27597__$1 = state_27597;
var statearr_27604_27751 = state_27597__$1;
(statearr_27604_27751[(2)] = inst_27593);

(statearr_27604_27751[(1)] = (3));


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
});})(__27741,c__27413__auto___27745,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async))
;
return ((function (__27741,switch__27313__auto__,c__27413__auto___27745,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0 = (function (){
var statearr_27605 = [null,null,null,null,null,null,null];
(statearr_27605[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__);

(statearr_27605[(1)] = (1));

return statearr_27605;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1 = (function (state_27597){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27597);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27606){if((e27606 instanceof Object)){
var ex__27317__auto__ = e27606;
var statearr_27607_27752 = state_27597;
(statearr_27607_27752[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27597);

return cljs.core.cst$kw$recur;
} else {
throw e27606;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27753 = state_27597;
state_27597 = G__27753;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = function(state_27597){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1.call(this,state_27597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__;
})()
;})(__27741,switch__27313__auto__,c__27413__auto___27745,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async))
})();
var state__27415__auto__ = (function (){var statearr_27608 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27608[(6)] = c__27413__auto___27745);

return statearr_27608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(__27741,c__27413__auto___27745,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async))
);


break;
case "async":
var c__27413__auto___27754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27741,c__27413__auto___27754,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (__27741,c__27413__auto___27754,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async){
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (1))){
var state_27621__$1 = state_27621;
var statearr_27623_27755 = state_27621__$1;
(statearr_27623_27755[(2)] = null);

(statearr_27623_27755[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27622 === (2))){
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27621__$1,(4),jobs);
} else {
if((state_val_27622 === (3))){
var inst_27619 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27621__$1,inst_27619);
} else {
if((state_val_27622 === (4))){
var inst_27611 = (state_27621[(2)]);
var inst_27612 = async(inst_27611);
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27612)){
var statearr_27624_27756 = state_27621__$1;
(statearr_27624_27756[(1)] = (5));

} else {
var statearr_27625_27757 = state_27621__$1;
(statearr_27625_27757[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27622 === (5))){
var state_27621__$1 = state_27621;
var statearr_27626_27758 = state_27621__$1;
(statearr_27626_27758[(2)] = null);

(statearr_27626_27758[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27622 === (6))){
var state_27621__$1 = state_27621;
var statearr_27627_27759 = state_27621__$1;
(statearr_27627_27759[(2)] = null);

(statearr_27627_27759[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27622 === (7))){
var inst_27617 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27628_27760 = state_27621__$1;
(statearr_27628_27760[(2)] = inst_27617);

(statearr_27628_27760[(1)] = (3));


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
});})(__27741,c__27413__auto___27754,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async))
;
return ((function (__27741,switch__27313__auto__,c__27413__auto___27754,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0 = (function (){
var statearr_27629 = [null,null,null,null,null,null,null];
(statearr_27629[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__);

(statearr_27629[(1)] = (1));

return statearr_27629;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1 = (function (state_27621){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27621);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27630){if((e27630 instanceof Object)){
var ex__27317__auto__ = e27630;
var statearr_27631_27761 = state_27621;
(statearr_27631_27761[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27621);

return cljs.core.cst$kw$recur;
} else {
throw e27630;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27762 = state_27621;
state_27621 = G__27762;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__;
})()
;})(__27741,switch__27313__auto__,c__27413__auto___27754,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async))
})();
var state__27415__auto__ = (function (){var statearr_27632 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27632[(6)] = c__27413__auto___27754);

return statearr_27632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(__27741,c__27413__auto___27754,G__27584_27742,G__27584_27743__$1,n__22488__auto___27740,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27584_27743__$1)].join('')));

}

var G__27763 = (__27741 + (1));
__27741 = G__27763;
continue;
} else {
}
break;
}

var c__27413__auto___27764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___27764,jobs,results,process,async){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___27764,jobs,results,process,async){
return (function (state_27654){
var state_val_27655 = (state_27654[(1)]);
if((state_val_27655 === (1))){
var state_27654__$1 = state_27654;
var statearr_27656_27765 = state_27654__$1;
(statearr_27656_27765[(2)] = null);

(statearr_27656_27765[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27655 === (2))){
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27654__$1,(4),from);
} else {
if((state_val_27655 === (3))){
var inst_27652 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27654__$1,inst_27652);
} else {
if((state_val_27655 === (4))){
var inst_27635 = (state_27654[(7)]);
var inst_27635__$1 = (state_27654[(2)]);
var inst_27636 = (inst_27635__$1 == null);
var state_27654__$1 = (function (){var statearr_27657 = state_27654;
(statearr_27657[(7)] = inst_27635__$1);

return statearr_27657;
})();
if(cljs.core.truth_(inst_27636)){
var statearr_27658_27766 = state_27654__$1;
(statearr_27658_27766[(1)] = (5));

} else {
var statearr_27659_27767 = state_27654__$1;
(statearr_27659_27767[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27655 === (5))){
var inst_27638 = cljs.core.async.close_BANG_(jobs);
var state_27654__$1 = state_27654;
var statearr_27660_27768 = state_27654__$1;
(statearr_27660_27768[(2)] = inst_27638);

(statearr_27660_27768[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27655 === (6))){
var inst_27635 = (state_27654[(7)]);
var inst_27640 = (state_27654[(8)]);
var inst_27640__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27642 = [inst_27635,inst_27640__$1];
var inst_27643 = (new cljs.core.PersistentVector(null,2,(5),inst_27641,inst_27642,null));
var state_27654__$1 = (function (){var statearr_27661 = state_27654;
(statearr_27661[(8)] = inst_27640__$1);

return statearr_27661;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27654__$1,(8),jobs,inst_27643);
} else {
if((state_val_27655 === (7))){
var inst_27650 = (state_27654[(2)]);
var state_27654__$1 = state_27654;
var statearr_27662_27769 = state_27654__$1;
(statearr_27662_27769[(2)] = inst_27650);

(statearr_27662_27769[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27655 === (8))){
var inst_27640 = (state_27654[(8)]);
var inst_27645 = (state_27654[(2)]);
var state_27654__$1 = (function (){var statearr_27663 = state_27654;
(statearr_27663[(9)] = inst_27645);

return statearr_27663;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27654__$1,(9),results,inst_27640);
} else {
if((state_val_27655 === (9))){
var inst_27647 = (state_27654[(2)]);
var state_27654__$1 = (function (){var statearr_27664 = state_27654;
(statearr_27664[(10)] = inst_27647);

return statearr_27664;
})();
var statearr_27665_27770 = state_27654__$1;
(statearr_27665_27770[(2)] = null);

(statearr_27665_27770[(1)] = (2));


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
});})(c__27413__auto___27764,jobs,results,process,async))
;
return ((function (switch__27313__auto__,c__27413__auto___27764,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0 = (function (){
var statearr_27666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27666[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__);

(statearr_27666[(1)] = (1));

return statearr_27666;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1 = (function (state_27654){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27654);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27667){if((e27667 instanceof Object)){
var ex__27317__auto__ = e27667;
var statearr_27668_27771 = state_27654;
(statearr_27668_27771[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27654);

return cljs.core.cst$kw$recur;
} else {
throw e27667;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27772 = state_27654;
state_27654 = G__27772;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = function(state_27654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1.call(this,state_27654);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___27764,jobs,results,process,async))
})();
var state__27415__auto__ = (function (){var statearr_27669 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27669[(6)] = c__27413__auto___27764);

return statearr_27669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___27764,jobs,results,process,async))
);


var c__27413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto__,jobs,results,process,async){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto__,jobs,results,process,async){
return (function (state_27707){
var state_val_27708 = (state_27707[(1)]);
if((state_val_27708 === (7))){
var inst_27703 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
var statearr_27709_27773 = state_27707__$1;
(statearr_27709_27773[(2)] = inst_27703);

(statearr_27709_27773[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (20))){
var state_27707__$1 = state_27707;
var statearr_27710_27774 = state_27707__$1;
(statearr_27710_27774[(2)] = null);

(statearr_27710_27774[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (1))){
var state_27707__$1 = state_27707;
var statearr_27711_27775 = state_27707__$1;
(statearr_27711_27775[(2)] = null);

(statearr_27711_27775[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (4))){
var inst_27672 = (state_27707[(7)]);
var inst_27672__$1 = (state_27707[(2)]);
var inst_27673 = (inst_27672__$1 == null);
var state_27707__$1 = (function (){var statearr_27712 = state_27707;
(statearr_27712[(7)] = inst_27672__$1);

return statearr_27712;
})();
if(cljs.core.truth_(inst_27673)){
var statearr_27713_27776 = state_27707__$1;
(statearr_27713_27776[(1)] = (5));

} else {
var statearr_27714_27777 = state_27707__$1;
(statearr_27714_27777[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (15))){
var inst_27685 = (state_27707[(8)]);
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27707__$1,(18),to,inst_27685);
} else {
if((state_val_27708 === (21))){
var inst_27698 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
var statearr_27715_27778 = state_27707__$1;
(statearr_27715_27778[(2)] = inst_27698);

(statearr_27715_27778[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (13))){
var inst_27700 = (state_27707[(2)]);
var state_27707__$1 = (function (){var statearr_27716 = state_27707;
(statearr_27716[(9)] = inst_27700);

return statearr_27716;
})();
var statearr_27717_27779 = state_27707__$1;
(statearr_27717_27779[(2)] = null);

(statearr_27717_27779[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (6))){
var inst_27672 = (state_27707[(7)]);
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27707__$1,(11),inst_27672);
} else {
if((state_val_27708 === (17))){
var inst_27693 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
if(cljs.core.truth_(inst_27693)){
var statearr_27718_27780 = state_27707__$1;
(statearr_27718_27780[(1)] = (19));

} else {
var statearr_27719_27781 = state_27707__$1;
(statearr_27719_27781[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (3))){
var inst_27705 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27707__$1,inst_27705);
} else {
if((state_val_27708 === (12))){
var inst_27682 = (state_27707[(10)]);
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27707__$1,(14),inst_27682);
} else {
if((state_val_27708 === (2))){
var state_27707__$1 = state_27707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27707__$1,(4),results);
} else {
if((state_val_27708 === (19))){
var state_27707__$1 = state_27707;
var statearr_27720_27782 = state_27707__$1;
(statearr_27720_27782[(2)] = null);

(statearr_27720_27782[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (11))){
var inst_27682 = (state_27707[(2)]);
var state_27707__$1 = (function (){var statearr_27721 = state_27707;
(statearr_27721[(10)] = inst_27682);

return statearr_27721;
})();
var statearr_27722_27783 = state_27707__$1;
(statearr_27722_27783[(2)] = null);

(statearr_27722_27783[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (9))){
var state_27707__$1 = state_27707;
var statearr_27723_27784 = state_27707__$1;
(statearr_27723_27784[(2)] = null);

(statearr_27723_27784[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (5))){
var state_27707__$1 = state_27707;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27724_27785 = state_27707__$1;
(statearr_27724_27785[(1)] = (8));

} else {
var statearr_27725_27786 = state_27707__$1;
(statearr_27725_27786[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (14))){
var inst_27687 = (state_27707[(11)]);
var inst_27685 = (state_27707[(8)]);
var inst_27685__$1 = (state_27707[(2)]);
var inst_27686 = (inst_27685__$1 == null);
var inst_27687__$1 = cljs.core.not(inst_27686);
var state_27707__$1 = (function (){var statearr_27726 = state_27707;
(statearr_27726[(11)] = inst_27687__$1);

(statearr_27726[(8)] = inst_27685__$1);

return statearr_27726;
})();
if(inst_27687__$1){
var statearr_27727_27787 = state_27707__$1;
(statearr_27727_27787[(1)] = (15));

} else {
var statearr_27728_27788 = state_27707__$1;
(statearr_27728_27788[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (16))){
var inst_27687 = (state_27707[(11)]);
var state_27707__$1 = state_27707;
var statearr_27729_27789 = state_27707__$1;
(statearr_27729_27789[(2)] = inst_27687);

(statearr_27729_27789[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (10))){
var inst_27679 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
var statearr_27730_27790 = state_27707__$1;
(statearr_27730_27790[(2)] = inst_27679);

(statearr_27730_27790[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (18))){
var inst_27690 = (state_27707[(2)]);
var state_27707__$1 = state_27707;
var statearr_27731_27791 = state_27707__$1;
(statearr_27731_27791[(2)] = inst_27690);

(statearr_27731_27791[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27708 === (8))){
var inst_27676 = cljs.core.async.close_BANG_(to);
var state_27707__$1 = state_27707;
var statearr_27732_27792 = state_27707__$1;
(statearr_27732_27792[(2)] = inst_27676);

(statearr_27732_27792[(1)] = (10));


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
});})(c__27413__auto__,jobs,results,process,async))
;
return ((function (switch__27313__auto__,c__27413__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0 = (function (){
var statearr_27733 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27733[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__);

(statearr_27733[(1)] = (1));

return statearr_27733;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1 = (function (state_27707){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27707);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27734){if((e27734 instanceof Object)){
var ex__27317__auto__ = e27734;
var statearr_27735_27793 = state_27707;
(statearr_27735_27793[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27707);

return cljs.core.cst$kw$recur;
} else {
throw e27734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27794 = state_27707;
state_27707 = G__27794;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__ = function(state_27707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1.call(this,state_27707);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27314__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto__,jobs,results,process,async))
})();
var state__27415__auto__ = (function (){var statearr_27736 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27736[(6)] = c__27413__auto__);

return statearr_27736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto__,jobs,results,process,async))
);

return c__27413__auto__;
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
var G__27796 = arguments.length;
switch (G__27796) {
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
var G__27799 = arguments.length;
switch (G__27799) {
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
var G__27802 = arguments.length;
switch (G__27802) {
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
var c__27413__auto___27851 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___27851,tc,fc){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___27851,tc,fc){
return (function (state_27828){
var state_val_27829 = (state_27828[(1)]);
if((state_val_27829 === (7))){
var inst_27824 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27830_27852 = state_27828__$1;
(statearr_27830_27852[(2)] = inst_27824);

(statearr_27830_27852[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (1))){
var state_27828__$1 = state_27828;
var statearr_27831_27853 = state_27828__$1;
(statearr_27831_27853[(2)] = null);

(statearr_27831_27853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (4))){
var inst_27805 = (state_27828[(7)]);
var inst_27805__$1 = (state_27828[(2)]);
var inst_27806 = (inst_27805__$1 == null);
var state_27828__$1 = (function (){var statearr_27832 = state_27828;
(statearr_27832[(7)] = inst_27805__$1);

return statearr_27832;
})();
if(cljs.core.truth_(inst_27806)){
var statearr_27833_27854 = state_27828__$1;
(statearr_27833_27854[(1)] = (5));

} else {
var statearr_27834_27855 = state_27828__$1;
(statearr_27834_27855[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (13))){
var state_27828__$1 = state_27828;
var statearr_27835_27856 = state_27828__$1;
(statearr_27835_27856[(2)] = null);

(statearr_27835_27856[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (6))){
var inst_27805 = (state_27828[(7)]);
var inst_27811 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27805) : p.call(null,inst_27805));
var state_27828__$1 = state_27828;
if(cljs.core.truth_(inst_27811)){
var statearr_27836_27857 = state_27828__$1;
(statearr_27836_27857[(1)] = (9));

} else {
var statearr_27837_27858 = state_27828__$1;
(statearr_27837_27858[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (3))){
var inst_27826 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27828__$1,inst_27826);
} else {
if((state_val_27829 === (12))){
var state_27828__$1 = state_27828;
var statearr_27838_27859 = state_27828__$1;
(statearr_27838_27859[(2)] = null);

(statearr_27838_27859[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (2))){
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27828__$1,(4),ch);
} else {
if((state_val_27829 === (11))){
var inst_27805 = (state_27828[(7)]);
var inst_27815 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27828__$1,(8),inst_27815,inst_27805);
} else {
if((state_val_27829 === (9))){
var state_27828__$1 = state_27828;
var statearr_27839_27860 = state_27828__$1;
(statearr_27839_27860[(2)] = tc);

(statearr_27839_27860[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (5))){
var inst_27808 = cljs.core.async.close_BANG_(tc);
var inst_27809 = cljs.core.async.close_BANG_(fc);
var state_27828__$1 = (function (){var statearr_27840 = state_27828;
(statearr_27840[(8)] = inst_27808);

return statearr_27840;
})();
var statearr_27841_27861 = state_27828__$1;
(statearr_27841_27861[(2)] = inst_27809);

(statearr_27841_27861[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (14))){
var inst_27822 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27842_27862 = state_27828__$1;
(statearr_27842_27862[(2)] = inst_27822);

(statearr_27842_27862[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (10))){
var state_27828__$1 = state_27828;
var statearr_27843_27863 = state_27828__$1;
(statearr_27843_27863[(2)] = fc);

(statearr_27843_27863[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27829 === (8))){
var inst_27817 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
if(cljs.core.truth_(inst_27817)){
var statearr_27844_27864 = state_27828__$1;
(statearr_27844_27864[(1)] = (12));

} else {
var statearr_27845_27865 = state_27828__$1;
(statearr_27845_27865[(1)] = (13));

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
});})(c__27413__auto___27851,tc,fc))
;
return ((function (switch__27313__auto__,c__27413__auto___27851,tc,fc){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_27846 = [null,null,null,null,null,null,null,null,null];
(statearr_27846[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_27846[(1)] = (1));

return statearr_27846;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_27828){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27828);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27847){if((e27847 instanceof Object)){
var ex__27317__auto__ = e27847;
var statearr_27848_27866 = state_27828;
(statearr_27848_27866[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27828);

return cljs.core.cst$kw$recur;
} else {
throw e27847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27867 = state_27828;
state_27828 = G__27867;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_27828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_27828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___27851,tc,fc))
})();
var state__27415__auto__ = (function (){var statearr_27849 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27849[(6)] = c__27413__auto___27851);

return statearr_27849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___27851,tc,fc))
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
var c__27413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto__){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto__){
return (function (state_27888){
var state_val_27889 = (state_27888[(1)]);
if((state_val_27889 === (7))){
var inst_27884 = (state_27888[(2)]);
var state_27888__$1 = state_27888;
var statearr_27890_27908 = state_27888__$1;
(statearr_27890_27908[(2)] = inst_27884);

(statearr_27890_27908[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27889 === (1))){
var inst_27868 = init;
var state_27888__$1 = (function (){var statearr_27891 = state_27888;
(statearr_27891[(7)] = inst_27868);

return statearr_27891;
})();
var statearr_27892_27909 = state_27888__$1;
(statearr_27892_27909[(2)] = null);

(statearr_27892_27909[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27889 === (4))){
var inst_27871 = (state_27888[(8)]);
var inst_27871__$1 = (state_27888[(2)]);
var inst_27872 = (inst_27871__$1 == null);
var state_27888__$1 = (function (){var statearr_27893 = state_27888;
(statearr_27893[(8)] = inst_27871__$1);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27872)){
var statearr_27894_27910 = state_27888__$1;
(statearr_27894_27910[(1)] = (5));

} else {
var statearr_27895_27911 = state_27888__$1;
(statearr_27895_27911[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27889 === (6))){
var inst_27868 = (state_27888[(7)]);
var inst_27875 = (state_27888[(9)]);
var inst_27871 = (state_27888[(8)]);
var inst_27875__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27868,inst_27871) : f.call(null,inst_27868,inst_27871));
var inst_27876 = cljs.core.reduced_QMARK_(inst_27875__$1);
var state_27888__$1 = (function (){var statearr_27896 = state_27888;
(statearr_27896[(9)] = inst_27875__$1);

return statearr_27896;
})();
if(inst_27876){
var statearr_27897_27912 = state_27888__$1;
(statearr_27897_27912[(1)] = (8));

} else {
var statearr_27898_27913 = state_27888__$1;
(statearr_27898_27913[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27889 === (3))){
var inst_27886 = (state_27888[(2)]);
var state_27888__$1 = state_27888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27888__$1,inst_27886);
} else {
if((state_val_27889 === (2))){
var state_27888__$1 = state_27888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27888__$1,(4),ch);
} else {
if((state_val_27889 === (9))){
var inst_27875 = (state_27888[(9)]);
var inst_27868 = inst_27875;
var state_27888__$1 = (function (){var statearr_27899 = state_27888;
(statearr_27899[(7)] = inst_27868);

return statearr_27899;
})();
var statearr_27900_27914 = state_27888__$1;
(statearr_27900_27914[(2)] = null);

(statearr_27900_27914[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27889 === (5))){
var inst_27868 = (state_27888[(7)]);
var state_27888__$1 = state_27888;
var statearr_27901_27915 = state_27888__$1;
(statearr_27901_27915[(2)] = inst_27868);

(statearr_27901_27915[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27889 === (10))){
var inst_27882 = (state_27888[(2)]);
var state_27888__$1 = state_27888;
var statearr_27902_27916 = state_27888__$1;
(statearr_27902_27916[(2)] = inst_27882);

(statearr_27902_27916[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27889 === (8))){
var inst_27875 = (state_27888[(9)]);
var inst_27878 = cljs.core.deref(inst_27875);
var state_27888__$1 = state_27888;
var statearr_27903_27917 = state_27888__$1;
(statearr_27903_27917[(2)] = inst_27878);

(statearr_27903_27917[(1)] = (10));


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
});})(c__27413__auto__))
;
return ((function (switch__27313__auto__,c__27413__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27314__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27314__auto____0 = (function (){
var statearr_27904 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27904[(0)] = cljs$core$async$reduce_$_state_machine__27314__auto__);

(statearr_27904[(1)] = (1));

return statearr_27904;
});
var cljs$core$async$reduce_$_state_machine__27314__auto____1 = (function (state_27888){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27888);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27905){if((e27905 instanceof Object)){
var ex__27317__auto__ = e27905;
var statearr_27906_27918 = state_27888;
(statearr_27906_27918[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27888);

return cljs.core.cst$kw$recur;
} else {
throw e27905;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27919 = state_27888;
state_27888 = G__27919;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27314__auto__ = function(state_27888){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27314__auto____1.call(this,state_27888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27314__auto____0;
cljs$core$async$reduce_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27314__auto____1;
return cljs$core$async$reduce_$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto__))
})();
var state__27415__auto__ = (function (){var statearr_27907 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27907[(6)] = c__27413__auto__);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto__))
);

return c__27413__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto__,f__$1){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto__,f__$1){
return (function (state_27925){
var state_val_27926 = (state_27925[(1)]);
if((state_val_27926 === (1))){
var inst_27920 = cljs.core.async.reduce(f__$1,init,ch);
var state_27925__$1 = state_27925;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27925__$1,(2),inst_27920);
} else {
if((state_val_27926 === (2))){
var inst_27922 = (state_27925[(2)]);
var inst_27923 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27922) : f__$1.call(null,inst_27922));
var state_27925__$1 = state_27925;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27925__$1,inst_27923);
} else {
return null;
}
}
});})(c__27413__auto__,f__$1))
;
return ((function (switch__27313__auto__,c__27413__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27314__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27314__auto____0 = (function (){
var statearr_27927 = [null,null,null,null,null,null,null];
(statearr_27927[(0)] = cljs$core$async$transduce_$_state_machine__27314__auto__);

(statearr_27927[(1)] = (1));

return statearr_27927;
});
var cljs$core$async$transduce_$_state_machine__27314__auto____1 = (function (state_27925){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27925);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27928){if((e27928 instanceof Object)){
var ex__27317__auto__ = e27928;
var statearr_27929_27931 = state_27925;
(statearr_27929_27931[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27925);

return cljs.core.cst$kw$recur;
} else {
throw e27928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27932 = state_27925;
state_27925 = G__27932;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27314__auto__ = function(state_27925){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27314__auto____1.call(this,state_27925);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27314__auto____0;
cljs$core$async$transduce_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27314__auto____1;
return cljs$core$async$transduce_$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto__,f__$1))
})();
var state__27415__auto__ = (function (){var statearr_27930 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27930[(6)] = c__27413__auto__);

return statearr_27930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto__,f__$1))
);

return c__27413__auto__;
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
var G__27934 = arguments.length;
switch (G__27934) {
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
var c__27413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto__){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto__){
return (function (state_27959){
var state_val_27960 = (state_27959[(1)]);
if((state_val_27960 === (7))){
var inst_27941 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27961_27982 = state_27959__$1;
(statearr_27961_27982[(2)] = inst_27941);

(statearr_27961_27982[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (1))){
var inst_27935 = cljs.core.seq(coll);
var inst_27936 = inst_27935;
var state_27959__$1 = (function (){var statearr_27962 = state_27959;
(statearr_27962[(7)] = inst_27936);

return statearr_27962;
})();
var statearr_27963_27983 = state_27959__$1;
(statearr_27963_27983[(2)] = null);

(statearr_27963_27983[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (4))){
var inst_27936 = (state_27959[(7)]);
var inst_27939 = cljs.core.first(inst_27936);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27959__$1,(7),ch,inst_27939);
} else {
if((state_val_27960 === (13))){
var inst_27953 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27964_27984 = state_27959__$1;
(statearr_27964_27984[(2)] = inst_27953);

(statearr_27964_27984[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (6))){
var inst_27944 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27944)){
var statearr_27965_27985 = state_27959__$1;
(statearr_27965_27985[(1)] = (8));

} else {
var statearr_27966_27986 = state_27959__$1;
(statearr_27966_27986[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (3))){
var inst_27957 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27959__$1,inst_27957);
} else {
if((state_val_27960 === (12))){
var state_27959__$1 = state_27959;
var statearr_27967_27987 = state_27959__$1;
(statearr_27967_27987[(2)] = null);

(statearr_27967_27987[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (2))){
var inst_27936 = (state_27959[(7)]);
var state_27959__$1 = state_27959;
if(cljs.core.truth_(inst_27936)){
var statearr_27968_27988 = state_27959__$1;
(statearr_27968_27988[(1)] = (4));

} else {
var statearr_27969_27989 = state_27959__$1;
(statearr_27969_27989[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (11))){
var inst_27950 = cljs.core.async.close_BANG_(ch);
var state_27959__$1 = state_27959;
var statearr_27970_27990 = state_27959__$1;
(statearr_27970_27990[(2)] = inst_27950);

(statearr_27970_27990[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (9))){
var state_27959__$1 = state_27959;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27971_27991 = state_27959__$1;
(statearr_27971_27991[(1)] = (11));

} else {
var statearr_27972_27992 = state_27959__$1;
(statearr_27972_27992[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (5))){
var inst_27936 = (state_27959[(7)]);
var state_27959__$1 = state_27959;
var statearr_27973_27993 = state_27959__$1;
(statearr_27973_27993[(2)] = inst_27936);

(statearr_27973_27993[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (10))){
var inst_27955 = (state_27959[(2)]);
var state_27959__$1 = state_27959;
var statearr_27974_27994 = state_27959__$1;
(statearr_27974_27994[(2)] = inst_27955);

(statearr_27974_27994[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_27960 === (8))){
var inst_27936 = (state_27959[(7)]);
var inst_27946 = cljs.core.next(inst_27936);
var inst_27936__$1 = inst_27946;
var state_27959__$1 = (function (){var statearr_27975 = state_27959;
(statearr_27975[(7)] = inst_27936__$1);

return statearr_27975;
})();
var statearr_27976_27995 = state_27959__$1;
(statearr_27976_27995[(2)] = null);

(statearr_27976_27995[(1)] = (2));


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
});})(c__27413__auto__))
;
return ((function (switch__27313__auto__,c__27413__auto__){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_27977 = [null,null,null,null,null,null,null,null];
(statearr_27977[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_27977[(1)] = (1));

return statearr_27977;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_27959){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_27959);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e27978){if((e27978 instanceof Object)){
var ex__27317__auto__ = e27978;
var statearr_27979_27996 = state_27959;
(statearr_27979_27996[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27959);

return cljs.core.cst$kw$recur;
} else {
throw e27978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__27997 = state_27959;
state_27959 = G__27997;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_27959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_27959);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto__))
})();
var state__27415__auto__ = (function (){var statearr_27980 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_27980[(6)] = c__27413__auto__);

return statearr_27980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto__))
);

return c__27413__auto__;
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
var x__22231__auto__ = (((_ == null))?null:_);
var m__22232__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__22232__auto__.call(null,_));
} else {
var m__22232__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__22232__auto____$1.call(null,_));
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__22232__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__22232__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__22232__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22232__auto__.call(null,m,ch));
} else {
var m__22232__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22232__auto____$1.call(null,m,ch));
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__22232__auto__.call(null,m));
} else {
var m__22232__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__22232__auto____$1.call(null,m));
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
if(typeof cljs.core.async.t_cljs$core$async27998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27998 = (function (ch,cs,meta27999){
this.ch = ch;
this.cs = cs;
this.meta27999 = meta27999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28000,meta27999__$1){
var self__ = this;
var _28000__$1 = this;
return (new cljs.core.async.t_cljs$core$async27998(self__.ch,self__.cs,meta27999__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28000){
var self__ = this;
var _28000__$1 = this;
return self__.meta27999;
});})(cs))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27998.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27998.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta27999], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27998";

cljs.core.async.t_cljs$core$async27998.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async27998");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27998 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27998(ch__$1,cs__$1,meta27999){
return (new cljs.core.async.t_cljs$core$async27998(ch__$1,cs__$1,meta27999));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27998(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__27413__auto___28220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___28220,cs,m,dchan,dctr,done){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___28220,cs,m,dchan,dctr,done){
return (function (state_28135){
var state_val_28136 = (state_28135[(1)]);
if((state_val_28136 === (7))){
var inst_28131 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28137_28221 = state_28135__$1;
(statearr_28137_28221[(2)] = inst_28131);

(statearr_28137_28221[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (20))){
var inst_28034 = (state_28135[(7)]);
var inst_28046 = cljs.core.first(inst_28034);
var inst_28047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28046,(0),null);
var inst_28048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28046,(1),null);
var state_28135__$1 = (function (){var statearr_28138 = state_28135;
(statearr_28138[(8)] = inst_28047);

return statearr_28138;
})();
if(cljs.core.truth_(inst_28048)){
var statearr_28139_28222 = state_28135__$1;
(statearr_28139_28222[(1)] = (22));

} else {
var statearr_28140_28223 = state_28135__$1;
(statearr_28140_28223[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (27))){
var inst_28003 = (state_28135[(9)]);
var inst_28076 = (state_28135[(10)]);
var inst_28083 = (state_28135[(11)]);
var inst_28078 = (state_28135[(12)]);
var inst_28083__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28076,inst_28078);
var inst_28084 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28083__$1,inst_28003,done);
var state_28135__$1 = (function (){var statearr_28141 = state_28135;
(statearr_28141[(11)] = inst_28083__$1);

return statearr_28141;
})();
if(cljs.core.truth_(inst_28084)){
var statearr_28142_28224 = state_28135__$1;
(statearr_28142_28224[(1)] = (30));

} else {
var statearr_28143_28225 = state_28135__$1;
(statearr_28143_28225[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (1))){
var state_28135__$1 = state_28135;
var statearr_28144_28226 = state_28135__$1;
(statearr_28144_28226[(2)] = null);

(statearr_28144_28226[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (24))){
var inst_28034 = (state_28135[(7)]);
var inst_28053 = (state_28135[(2)]);
var inst_28054 = cljs.core.next(inst_28034);
var inst_28012 = inst_28054;
var inst_28013 = null;
var inst_28014 = (0);
var inst_28015 = (0);
var state_28135__$1 = (function (){var statearr_28145 = state_28135;
(statearr_28145[(13)] = inst_28053);

(statearr_28145[(14)] = inst_28015);

(statearr_28145[(15)] = inst_28014);

(statearr_28145[(16)] = inst_28013);

(statearr_28145[(17)] = inst_28012);

return statearr_28145;
})();
var statearr_28146_28227 = state_28135__$1;
(statearr_28146_28227[(2)] = null);

(statearr_28146_28227[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (39))){
var state_28135__$1 = state_28135;
var statearr_28150_28228 = state_28135__$1;
(statearr_28150_28228[(2)] = null);

(statearr_28150_28228[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (4))){
var inst_28003 = (state_28135[(9)]);
var inst_28003__$1 = (state_28135[(2)]);
var inst_28004 = (inst_28003__$1 == null);
var state_28135__$1 = (function (){var statearr_28151 = state_28135;
(statearr_28151[(9)] = inst_28003__$1);

return statearr_28151;
})();
if(cljs.core.truth_(inst_28004)){
var statearr_28152_28229 = state_28135__$1;
(statearr_28152_28229[(1)] = (5));

} else {
var statearr_28153_28230 = state_28135__$1;
(statearr_28153_28230[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (15))){
var inst_28015 = (state_28135[(14)]);
var inst_28014 = (state_28135[(15)]);
var inst_28013 = (state_28135[(16)]);
var inst_28012 = (state_28135[(17)]);
var inst_28030 = (state_28135[(2)]);
var inst_28031 = (inst_28015 + (1));
var tmp28147 = inst_28014;
var tmp28148 = inst_28013;
var tmp28149 = inst_28012;
var inst_28012__$1 = tmp28149;
var inst_28013__$1 = tmp28148;
var inst_28014__$1 = tmp28147;
var inst_28015__$1 = inst_28031;
var state_28135__$1 = (function (){var statearr_28154 = state_28135;
(statearr_28154[(14)] = inst_28015__$1);

(statearr_28154[(18)] = inst_28030);

(statearr_28154[(15)] = inst_28014__$1);

(statearr_28154[(16)] = inst_28013__$1);

(statearr_28154[(17)] = inst_28012__$1);

return statearr_28154;
})();
var statearr_28155_28231 = state_28135__$1;
(statearr_28155_28231[(2)] = null);

(statearr_28155_28231[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (21))){
var inst_28057 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28159_28232 = state_28135__$1;
(statearr_28159_28232[(2)] = inst_28057);

(statearr_28159_28232[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (31))){
var inst_28083 = (state_28135[(11)]);
var inst_28087 = done(null);
var inst_28088 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28083);
var state_28135__$1 = (function (){var statearr_28160 = state_28135;
(statearr_28160[(19)] = inst_28087);

return statearr_28160;
})();
var statearr_28161_28233 = state_28135__$1;
(statearr_28161_28233[(2)] = inst_28088);

(statearr_28161_28233[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (32))){
var inst_28076 = (state_28135[(10)]);
var inst_28075 = (state_28135[(20)]);
var inst_28077 = (state_28135[(21)]);
var inst_28078 = (state_28135[(12)]);
var inst_28090 = (state_28135[(2)]);
var inst_28091 = (inst_28078 + (1));
var tmp28156 = inst_28076;
var tmp28157 = inst_28075;
var tmp28158 = inst_28077;
var inst_28075__$1 = tmp28157;
var inst_28076__$1 = tmp28156;
var inst_28077__$1 = tmp28158;
var inst_28078__$1 = inst_28091;
var state_28135__$1 = (function (){var statearr_28162 = state_28135;
(statearr_28162[(22)] = inst_28090);

(statearr_28162[(10)] = inst_28076__$1);

(statearr_28162[(20)] = inst_28075__$1);

(statearr_28162[(21)] = inst_28077__$1);

(statearr_28162[(12)] = inst_28078__$1);

return statearr_28162;
})();
var statearr_28163_28234 = state_28135__$1;
(statearr_28163_28234[(2)] = null);

(statearr_28163_28234[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (40))){
var inst_28103 = (state_28135[(23)]);
var inst_28107 = done(null);
var inst_28108 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_28103);
var state_28135__$1 = (function (){var statearr_28164 = state_28135;
(statearr_28164[(24)] = inst_28107);

return statearr_28164;
})();
var statearr_28165_28235 = state_28135__$1;
(statearr_28165_28235[(2)] = inst_28108);

(statearr_28165_28235[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (33))){
var inst_28094 = (state_28135[(25)]);
var inst_28096 = cljs.core.chunked_seq_QMARK_(inst_28094);
var state_28135__$1 = state_28135;
if(inst_28096){
var statearr_28166_28236 = state_28135__$1;
(statearr_28166_28236[(1)] = (36));

} else {
var statearr_28167_28237 = state_28135__$1;
(statearr_28167_28237[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (13))){
var inst_28024 = (state_28135[(26)]);
var inst_28027 = cljs.core.async.close_BANG_(inst_28024);
var state_28135__$1 = state_28135;
var statearr_28168_28238 = state_28135__$1;
(statearr_28168_28238[(2)] = inst_28027);

(statearr_28168_28238[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (22))){
var inst_28047 = (state_28135[(8)]);
var inst_28050 = cljs.core.async.close_BANG_(inst_28047);
var state_28135__$1 = state_28135;
var statearr_28169_28239 = state_28135__$1;
(statearr_28169_28239[(2)] = inst_28050);

(statearr_28169_28239[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (36))){
var inst_28094 = (state_28135[(25)]);
var inst_28098 = cljs.core.chunk_first(inst_28094);
var inst_28099 = cljs.core.chunk_rest(inst_28094);
var inst_28100 = cljs.core.count(inst_28098);
var inst_28075 = inst_28099;
var inst_28076 = inst_28098;
var inst_28077 = inst_28100;
var inst_28078 = (0);
var state_28135__$1 = (function (){var statearr_28170 = state_28135;
(statearr_28170[(10)] = inst_28076);

(statearr_28170[(20)] = inst_28075);

(statearr_28170[(21)] = inst_28077);

(statearr_28170[(12)] = inst_28078);

return statearr_28170;
})();
var statearr_28171_28240 = state_28135__$1;
(statearr_28171_28240[(2)] = null);

(statearr_28171_28240[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (41))){
var inst_28094 = (state_28135[(25)]);
var inst_28110 = (state_28135[(2)]);
var inst_28111 = cljs.core.next(inst_28094);
var inst_28075 = inst_28111;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28135__$1 = (function (){var statearr_28172 = state_28135;
(statearr_28172[(27)] = inst_28110);

(statearr_28172[(10)] = inst_28076);

(statearr_28172[(20)] = inst_28075);

(statearr_28172[(21)] = inst_28077);

(statearr_28172[(12)] = inst_28078);

return statearr_28172;
})();
var statearr_28173_28241 = state_28135__$1;
(statearr_28173_28241[(2)] = null);

(statearr_28173_28241[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (43))){
var state_28135__$1 = state_28135;
var statearr_28174_28242 = state_28135__$1;
(statearr_28174_28242[(2)] = null);

(statearr_28174_28242[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (29))){
var inst_28119 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28175_28243 = state_28135__$1;
(statearr_28175_28243[(2)] = inst_28119);

(statearr_28175_28243[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (44))){
var inst_28128 = (state_28135[(2)]);
var state_28135__$1 = (function (){var statearr_28176 = state_28135;
(statearr_28176[(28)] = inst_28128);

return statearr_28176;
})();
var statearr_28177_28244 = state_28135__$1;
(statearr_28177_28244[(2)] = null);

(statearr_28177_28244[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (6))){
var inst_28067 = (state_28135[(29)]);
var inst_28066 = cljs.core.deref(cs);
var inst_28067__$1 = cljs.core.keys(inst_28066);
var inst_28068 = cljs.core.count(inst_28067__$1);
var inst_28069 = cljs.core.reset_BANG_(dctr,inst_28068);
var inst_28074 = cljs.core.seq(inst_28067__$1);
var inst_28075 = inst_28074;
var inst_28076 = null;
var inst_28077 = (0);
var inst_28078 = (0);
var state_28135__$1 = (function (){var statearr_28178 = state_28135;
(statearr_28178[(10)] = inst_28076);

(statearr_28178[(30)] = inst_28069);

(statearr_28178[(20)] = inst_28075);

(statearr_28178[(29)] = inst_28067__$1);

(statearr_28178[(21)] = inst_28077);

(statearr_28178[(12)] = inst_28078);

return statearr_28178;
})();
var statearr_28179_28245 = state_28135__$1;
(statearr_28179_28245[(2)] = null);

(statearr_28179_28245[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (28))){
var inst_28094 = (state_28135[(25)]);
var inst_28075 = (state_28135[(20)]);
var inst_28094__$1 = cljs.core.seq(inst_28075);
var state_28135__$1 = (function (){var statearr_28180 = state_28135;
(statearr_28180[(25)] = inst_28094__$1);

return statearr_28180;
})();
if(inst_28094__$1){
var statearr_28181_28246 = state_28135__$1;
(statearr_28181_28246[(1)] = (33));

} else {
var statearr_28182_28247 = state_28135__$1;
(statearr_28182_28247[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (25))){
var inst_28077 = (state_28135[(21)]);
var inst_28078 = (state_28135[(12)]);
var inst_28080 = (inst_28078 < inst_28077);
var inst_28081 = inst_28080;
var state_28135__$1 = state_28135;
if(cljs.core.truth_(inst_28081)){
var statearr_28183_28248 = state_28135__$1;
(statearr_28183_28248[(1)] = (27));

} else {
var statearr_28184_28249 = state_28135__$1;
(statearr_28184_28249[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (34))){
var state_28135__$1 = state_28135;
var statearr_28185_28250 = state_28135__$1;
(statearr_28185_28250[(2)] = null);

(statearr_28185_28250[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (17))){
var state_28135__$1 = state_28135;
var statearr_28186_28251 = state_28135__$1;
(statearr_28186_28251[(2)] = null);

(statearr_28186_28251[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (3))){
var inst_28133 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28135__$1,inst_28133);
} else {
if((state_val_28136 === (12))){
var inst_28062 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28187_28252 = state_28135__$1;
(statearr_28187_28252[(2)] = inst_28062);

(statearr_28187_28252[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (2))){
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28135__$1,(4),ch);
} else {
if((state_val_28136 === (23))){
var state_28135__$1 = state_28135;
var statearr_28188_28253 = state_28135__$1;
(statearr_28188_28253[(2)] = null);

(statearr_28188_28253[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (35))){
var inst_28117 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28189_28254 = state_28135__$1;
(statearr_28189_28254[(2)] = inst_28117);

(statearr_28189_28254[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (19))){
var inst_28034 = (state_28135[(7)]);
var inst_28038 = cljs.core.chunk_first(inst_28034);
var inst_28039 = cljs.core.chunk_rest(inst_28034);
var inst_28040 = cljs.core.count(inst_28038);
var inst_28012 = inst_28039;
var inst_28013 = inst_28038;
var inst_28014 = inst_28040;
var inst_28015 = (0);
var state_28135__$1 = (function (){var statearr_28190 = state_28135;
(statearr_28190[(14)] = inst_28015);

(statearr_28190[(15)] = inst_28014);

(statearr_28190[(16)] = inst_28013);

(statearr_28190[(17)] = inst_28012);

return statearr_28190;
})();
var statearr_28191_28255 = state_28135__$1;
(statearr_28191_28255[(2)] = null);

(statearr_28191_28255[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (11))){
var inst_28012 = (state_28135[(17)]);
var inst_28034 = (state_28135[(7)]);
var inst_28034__$1 = cljs.core.seq(inst_28012);
var state_28135__$1 = (function (){var statearr_28192 = state_28135;
(statearr_28192[(7)] = inst_28034__$1);

return statearr_28192;
})();
if(inst_28034__$1){
var statearr_28193_28256 = state_28135__$1;
(statearr_28193_28256[(1)] = (16));

} else {
var statearr_28194_28257 = state_28135__$1;
(statearr_28194_28257[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (9))){
var inst_28064 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28195_28258 = state_28135__$1;
(statearr_28195_28258[(2)] = inst_28064);

(statearr_28195_28258[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (5))){
var inst_28010 = cljs.core.deref(cs);
var inst_28011 = cljs.core.seq(inst_28010);
var inst_28012 = inst_28011;
var inst_28013 = null;
var inst_28014 = (0);
var inst_28015 = (0);
var state_28135__$1 = (function (){var statearr_28196 = state_28135;
(statearr_28196[(14)] = inst_28015);

(statearr_28196[(15)] = inst_28014);

(statearr_28196[(16)] = inst_28013);

(statearr_28196[(17)] = inst_28012);

return statearr_28196;
})();
var statearr_28197_28259 = state_28135__$1;
(statearr_28197_28259[(2)] = null);

(statearr_28197_28259[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (14))){
var state_28135__$1 = state_28135;
var statearr_28198_28260 = state_28135__$1;
(statearr_28198_28260[(2)] = null);

(statearr_28198_28260[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (45))){
var inst_28125 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28199_28261 = state_28135__$1;
(statearr_28199_28261[(2)] = inst_28125);

(statearr_28199_28261[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (26))){
var inst_28067 = (state_28135[(29)]);
var inst_28121 = (state_28135[(2)]);
var inst_28122 = cljs.core.seq(inst_28067);
var state_28135__$1 = (function (){var statearr_28200 = state_28135;
(statearr_28200[(31)] = inst_28121);

return statearr_28200;
})();
if(inst_28122){
var statearr_28201_28262 = state_28135__$1;
(statearr_28201_28262[(1)] = (42));

} else {
var statearr_28202_28263 = state_28135__$1;
(statearr_28202_28263[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (16))){
var inst_28034 = (state_28135[(7)]);
var inst_28036 = cljs.core.chunked_seq_QMARK_(inst_28034);
var state_28135__$1 = state_28135;
if(inst_28036){
var statearr_28203_28264 = state_28135__$1;
(statearr_28203_28264[(1)] = (19));

} else {
var statearr_28204_28265 = state_28135__$1;
(statearr_28204_28265[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (38))){
var inst_28114 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28205_28266 = state_28135__$1;
(statearr_28205_28266[(2)] = inst_28114);

(statearr_28205_28266[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (30))){
var state_28135__$1 = state_28135;
var statearr_28206_28267 = state_28135__$1;
(statearr_28206_28267[(2)] = null);

(statearr_28206_28267[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (10))){
var inst_28015 = (state_28135[(14)]);
var inst_28013 = (state_28135[(16)]);
var inst_28023 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28013,inst_28015);
var inst_28024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28023,(0),null);
var inst_28025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28023,(1),null);
var state_28135__$1 = (function (){var statearr_28207 = state_28135;
(statearr_28207[(26)] = inst_28024);

return statearr_28207;
})();
if(cljs.core.truth_(inst_28025)){
var statearr_28208_28268 = state_28135__$1;
(statearr_28208_28268[(1)] = (13));

} else {
var statearr_28209_28269 = state_28135__$1;
(statearr_28209_28269[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (18))){
var inst_28060 = (state_28135[(2)]);
var state_28135__$1 = state_28135;
var statearr_28210_28270 = state_28135__$1;
(statearr_28210_28270[(2)] = inst_28060);

(statearr_28210_28270[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (42))){
var state_28135__$1 = state_28135;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28135__$1,(45),dchan);
} else {
if((state_val_28136 === (37))){
var inst_28003 = (state_28135[(9)]);
var inst_28094 = (state_28135[(25)]);
var inst_28103 = (state_28135[(23)]);
var inst_28103__$1 = cljs.core.first(inst_28094);
var inst_28104 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_28103__$1,inst_28003,done);
var state_28135__$1 = (function (){var statearr_28211 = state_28135;
(statearr_28211[(23)] = inst_28103__$1);

return statearr_28211;
})();
if(cljs.core.truth_(inst_28104)){
var statearr_28212_28271 = state_28135__$1;
(statearr_28212_28271[(1)] = (39));

} else {
var statearr_28213_28272 = state_28135__$1;
(statearr_28213_28272[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28136 === (8))){
var inst_28015 = (state_28135[(14)]);
var inst_28014 = (state_28135[(15)]);
var inst_28017 = (inst_28015 < inst_28014);
var inst_28018 = inst_28017;
var state_28135__$1 = state_28135;
if(cljs.core.truth_(inst_28018)){
var statearr_28214_28273 = state_28135__$1;
(statearr_28214_28273[(1)] = (10));

} else {
var statearr_28215_28274 = state_28135__$1;
(statearr_28215_28274[(1)] = (11));

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
});})(c__27413__auto___28220,cs,m,dchan,dctr,done))
;
return ((function (switch__27313__auto__,c__27413__auto___28220,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27314__auto__ = null;
var cljs$core$async$mult_$_state_machine__27314__auto____0 = (function (){
var statearr_28216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28216[(0)] = cljs$core$async$mult_$_state_machine__27314__auto__);

(statearr_28216[(1)] = (1));

return statearr_28216;
});
var cljs$core$async$mult_$_state_machine__27314__auto____1 = (function (state_28135){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_28135);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e28217){if((e28217 instanceof Object)){
var ex__27317__auto__ = e28217;
var statearr_28218_28275 = state_28135;
(statearr_28218_28275[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28135);

return cljs.core.cst$kw$recur;
} else {
throw e28217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__28276 = state_28135;
state_28135 = G__28276;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27314__auto__ = function(state_28135){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27314__auto____1.call(this,state_28135);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27314__auto____0;
cljs$core$async$mult_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27314__auto____1;
return cljs$core$async$mult_$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___28220,cs,m,dchan,dctr,done))
})();
var state__27415__auto__ = (function (){var statearr_28219 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_28219[(6)] = c__27413__auto___28220);

return statearr_28219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___28220,cs,m,dchan,dctr,done))
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
var G__28278 = arguments.length;
switch (G__28278) {
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22232__auto__.call(null,m,ch));
} else {
var m__22232__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22232__auto____$1.call(null,m,ch));
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22232__auto__.call(null,m,ch));
} else {
var m__22232__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22232__auto____$1.call(null,m,ch));
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__22232__auto__.call(null,m));
} else {
var m__22232__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__22232__auto____$1.call(null,m));
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__22232__auto__.call(null,m,state_map));
} else {
var m__22232__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__22232__auto____$1.call(null,m,state_map));
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
var x__22231__auto__ = (((m == null))?null:m);
var m__22232__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__22232__auto__.call(null,m,mode));
} else {
var m__22232__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__22232__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22719__auto__ = [];
var len__22712__auto___28290 = arguments.length;
var i__22713__auto___28291 = (0);
while(true){
if((i__22713__auto___28291 < len__22712__auto___28290)){
args__22719__auto__.push((arguments[i__22713__auto___28291]));

var G__28292 = (i__22713__auto___28291 + (1));
i__22713__auto___28291 = G__28292;
continue;
} else {
}
break;
}

var argseq__22720__auto__ = ((((3) < args__22719__auto__.length))?(new cljs.core.IndexedSeq(args__22719__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22720__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28284){
var map__28285 = p__28284;
var map__28285__$1 = ((((!((map__28285 == null)))?((((map__28285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28285):map__28285);
var opts = map__28285__$1;
var statearr_28287_28293 = state;
(statearr_28287_28293[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__28285,map__28285__$1,opts){
return (function (val){
var statearr_28288_28294 = state;
(statearr_28288_28294[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__28285,map__28285__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28289_28295 = state;
(statearr_28289_28295[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28280){
var G__28281 = cljs.core.first(seq28280);
var seq28280__$1 = cljs.core.next(seq28280);
var G__28282 = cljs.core.first(seq28280__$1);
var seq28280__$2 = cljs.core.next(seq28280__$1);
var G__28283 = cljs.core.first(seq28280__$2);
var seq28280__$3 = cljs.core.next(seq28280__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28281,G__28282,G__28283,seq28280__$3);
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
if(typeof cljs.core.async.t_cljs$core$async28296 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28296 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28297){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28297 = meta28297;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28298,meta28297__$1){
var self__ = this;
var _28298__$1 = this;
return (new cljs.core.async.t_cljs$core$async28296(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28297__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28298){
var self__ = this;
var _28298__$1 = this;
return self__.meta28297;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async28296.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta28297], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28296.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28296.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28296";

cljs.core.async.t_cljs$core$async28296.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async28296");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async28296 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28296(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28297){
return (new cljs.core.async.t_cljs$core$async28296(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28297));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28296(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27413__auto___28460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___28460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___28460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28400){
var state_val_28401 = (state_28400[(1)]);
if((state_val_28401 === (7))){
var inst_28315 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28402_28461 = state_28400__$1;
(statearr_28402_28461[(2)] = inst_28315);

(statearr_28402_28461[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (20))){
var inst_28327 = (state_28400[(7)]);
var state_28400__$1 = state_28400;
var statearr_28403_28462 = state_28400__$1;
(statearr_28403_28462[(2)] = inst_28327);

(statearr_28403_28462[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (27))){
var state_28400__$1 = state_28400;
var statearr_28404_28463 = state_28400__$1;
(statearr_28404_28463[(2)] = null);

(statearr_28404_28463[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (1))){
var inst_28302 = (state_28400[(8)]);
var inst_28302__$1 = calc_state();
var inst_28304 = (inst_28302__$1 == null);
var inst_28305 = cljs.core.not(inst_28304);
var state_28400__$1 = (function (){var statearr_28405 = state_28400;
(statearr_28405[(8)] = inst_28302__$1);

return statearr_28405;
})();
if(inst_28305){
var statearr_28406_28464 = state_28400__$1;
(statearr_28406_28464[(1)] = (2));

} else {
var statearr_28407_28465 = state_28400__$1;
(statearr_28407_28465[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (24))){
var inst_28351 = (state_28400[(9)]);
var inst_28360 = (state_28400[(10)]);
var inst_28374 = (state_28400[(11)]);
var inst_28374__$1 = (inst_28351.cljs$core$IFn$_invoke$arity$1 ? inst_28351.cljs$core$IFn$_invoke$arity$1(inst_28360) : inst_28351.call(null,inst_28360));
var state_28400__$1 = (function (){var statearr_28408 = state_28400;
(statearr_28408[(11)] = inst_28374__$1);

return statearr_28408;
})();
if(cljs.core.truth_(inst_28374__$1)){
var statearr_28409_28466 = state_28400__$1;
(statearr_28409_28466[(1)] = (29));

} else {
var statearr_28410_28467 = state_28400__$1;
(statearr_28410_28467[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (4))){
var inst_28318 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28318)){
var statearr_28411_28468 = state_28400__$1;
(statearr_28411_28468[(1)] = (8));

} else {
var statearr_28412_28469 = state_28400__$1;
(statearr_28412_28469[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (15))){
var inst_28345 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28345)){
var statearr_28413_28470 = state_28400__$1;
(statearr_28413_28470[(1)] = (19));

} else {
var statearr_28414_28471 = state_28400__$1;
(statearr_28414_28471[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (21))){
var inst_28350 = (state_28400[(12)]);
var inst_28350__$1 = (state_28400[(2)]);
var inst_28351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28350__$1,cljs.core.cst$kw$solos);
var inst_28352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28350__$1,cljs.core.cst$kw$mutes);
var inst_28353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28350__$1,cljs.core.cst$kw$reads);
var state_28400__$1 = (function (){var statearr_28415 = state_28400;
(statearr_28415[(12)] = inst_28350__$1);

(statearr_28415[(9)] = inst_28351);

(statearr_28415[(13)] = inst_28352);

return statearr_28415;
})();
return cljs.core.async.ioc_alts_BANG_(state_28400__$1,(22),inst_28353);
} else {
if((state_val_28401 === (31))){
var inst_28382 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28382)){
var statearr_28416_28472 = state_28400__$1;
(statearr_28416_28472[(1)] = (32));

} else {
var statearr_28417_28473 = state_28400__$1;
(statearr_28417_28473[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (32))){
var inst_28359 = (state_28400[(14)]);
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28400__$1,(35),out,inst_28359);
} else {
if((state_val_28401 === (33))){
var inst_28350 = (state_28400[(12)]);
var inst_28327 = inst_28350;
var state_28400__$1 = (function (){var statearr_28418 = state_28400;
(statearr_28418[(7)] = inst_28327);

return statearr_28418;
})();
var statearr_28419_28474 = state_28400__$1;
(statearr_28419_28474[(2)] = null);

(statearr_28419_28474[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (13))){
var inst_28327 = (state_28400[(7)]);
var inst_28334 = inst_28327.cljs$lang$protocol_mask$partition0$;
var inst_28335 = (inst_28334 & (64));
var inst_28336 = inst_28327.cljs$core$ISeq$;
var inst_28337 = (cljs.core.PROTOCOL_SENTINEL === inst_28336);
var inst_28338 = (inst_28335) || (inst_28337);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28338)){
var statearr_28420_28475 = state_28400__$1;
(statearr_28420_28475[(1)] = (16));

} else {
var statearr_28421_28476 = state_28400__$1;
(statearr_28421_28476[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (22))){
var inst_28360 = (state_28400[(10)]);
var inst_28359 = (state_28400[(14)]);
var inst_28358 = (state_28400[(2)]);
var inst_28359__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28358,(0),null);
var inst_28360__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28358,(1),null);
var inst_28361 = (inst_28359__$1 == null);
var inst_28362 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28360__$1,change);
var inst_28363 = (inst_28361) || (inst_28362);
var state_28400__$1 = (function (){var statearr_28422 = state_28400;
(statearr_28422[(10)] = inst_28360__$1);

(statearr_28422[(14)] = inst_28359__$1);

return statearr_28422;
})();
if(cljs.core.truth_(inst_28363)){
var statearr_28423_28477 = state_28400__$1;
(statearr_28423_28477[(1)] = (23));

} else {
var statearr_28424_28478 = state_28400__$1;
(statearr_28424_28478[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (36))){
var inst_28350 = (state_28400[(12)]);
var inst_28327 = inst_28350;
var state_28400__$1 = (function (){var statearr_28425 = state_28400;
(statearr_28425[(7)] = inst_28327);

return statearr_28425;
})();
var statearr_28426_28479 = state_28400__$1;
(statearr_28426_28479[(2)] = null);

(statearr_28426_28479[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (29))){
var inst_28374 = (state_28400[(11)]);
var state_28400__$1 = state_28400;
var statearr_28427_28480 = state_28400__$1;
(statearr_28427_28480[(2)] = inst_28374);

(statearr_28427_28480[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (6))){
var state_28400__$1 = state_28400;
var statearr_28428_28481 = state_28400__$1;
(statearr_28428_28481[(2)] = false);

(statearr_28428_28481[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (28))){
var inst_28370 = (state_28400[(2)]);
var inst_28371 = calc_state();
var inst_28327 = inst_28371;
var state_28400__$1 = (function (){var statearr_28429 = state_28400;
(statearr_28429[(7)] = inst_28327);

(statearr_28429[(15)] = inst_28370);

return statearr_28429;
})();
var statearr_28430_28482 = state_28400__$1;
(statearr_28430_28482[(2)] = null);

(statearr_28430_28482[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (25))){
var inst_28396 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28431_28483 = state_28400__$1;
(statearr_28431_28483[(2)] = inst_28396);

(statearr_28431_28483[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (34))){
var inst_28394 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28432_28484 = state_28400__$1;
(statearr_28432_28484[(2)] = inst_28394);

(statearr_28432_28484[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (17))){
var state_28400__$1 = state_28400;
var statearr_28433_28485 = state_28400__$1;
(statearr_28433_28485[(2)] = false);

(statearr_28433_28485[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (3))){
var state_28400__$1 = state_28400;
var statearr_28434_28486 = state_28400__$1;
(statearr_28434_28486[(2)] = false);

(statearr_28434_28486[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (12))){
var inst_28398 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28400__$1,inst_28398);
} else {
if((state_val_28401 === (2))){
var inst_28302 = (state_28400[(8)]);
var inst_28307 = inst_28302.cljs$lang$protocol_mask$partition0$;
var inst_28308 = (inst_28307 & (64));
var inst_28309 = inst_28302.cljs$core$ISeq$;
var inst_28310 = (cljs.core.PROTOCOL_SENTINEL === inst_28309);
var inst_28311 = (inst_28308) || (inst_28310);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28311)){
var statearr_28435_28487 = state_28400__$1;
(statearr_28435_28487[(1)] = (5));

} else {
var statearr_28436_28488 = state_28400__$1;
(statearr_28436_28488[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (23))){
var inst_28359 = (state_28400[(14)]);
var inst_28365 = (inst_28359 == null);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28365)){
var statearr_28437_28489 = state_28400__$1;
(statearr_28437_28489[(1)] = (26));

} else {
var statearr_28438_28490 = state_28400__$1;
(statearr_28438_28490[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (35))){
var inst_28385 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
if(cljs.core.truth_(inst_28385)){
var statearr_28439_28491 = state_28400__$1;
(statearr_28439_28491[(1)] = (36));

} else {
var statearr_28440_28492 = state_28400__$1;
(statearr_28440_28492[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (19))){
var inst_28327 = (state_28400[(7)]);
var inst_28347 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28327);
var state_28400__$1 = state_28400;
var statearr_28441_28493 = state_28400__$1;
(statearr_28441_28493[(2)] = inst_28347);

(statearr_28441_28493[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (11))){
var inst_28327 = (state_28400[(7)]);
var inst_28331 = (inst_28327 == null);
var inst_28332 = cljs.core.not(inst_28331);
var state_28400__$1 = state_28400;
if(inst_28332){
var statearr_28442_28494 = state_28400__$1;
(statearr_28442_28494[(1)] = (13));

} else {
var statearr_28443_28495 = state_28400__$1;
(statearr_28443_28495[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (9))){
var inst_28302 = (state_28400[(8)]);
var state_28400__$1 = state_28400;
var statearr_28444_28496 = state_28400__$1;
(statearr_28444_28496[(2)] = inst_28302);

(statearr_28444_28496[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (5))){
var state_28400__$1 = state_28400;
var statearr_28445_28497 = state_28400__$1;
(statearr_28445_28497[(2)] = true);

(statearr_28445_28497[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (14))){
var state_28400__$1 = state_28400;
var statearr_28446_28498 = state_28400__$1;
(statearr_28446_28498[(2)] = false);

(statearr_28446_28498[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (26))){
var inst_28360 = (state_28400[(10)]);
var inst_28367 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28360);
var state_28400__$1 = state_28400;
var statearr_28447_28499 = state_28400__$1;
(statearr_28447_28499[(2)] = inst_28367);

(statearr_28447_28499[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (16))){
var state_28400__$1 = state_28400;
var statearr_28448_28500 = state_28400__$1;
(statearr_28448_28500[(2)] = true);

(statearr_28448_28500[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (38))){
var inst_28390 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28449_28501 = state_28400__$1;
(statearr_28449_28501[(2)] = inst_28390);

(statearr_28449_28501[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (30))){
var inst_28351 = (state_28400[(9)]);
var inst_28360 = (state_28400[(10)]);
var inst_28352 = (state_28400[(13)]);
var inst_28377 = cljs.core.empty_QMARK_(inst_28351);
var inst_28378 = (inst_28352.cljs$core$IFn$_invoke$arity$1 ? inst_28352.cljs$core$IFn$_invoke$arity$1(inst_28360) : inst_28352.call(null,inst_28360));
var inst_28379 = cljs.core.not(inst_28378);
var inst_28380 = (inst_28377) && (inst_28379);
var state_28400__$1 = state_28400;
var statearr_28450_28502 = state_28400__$1;
(statearr_28450_28502[(2)] = inst_28380);

(statearr_28450_28502[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (10))){
var inst_28302 = (state_28400[(8)]);
var inst_28323 = (state_28400[(2)]);
var inst_28324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28323,cljs.core.cst$kw$solos);
var inst_28325 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28323,cljs.core.cst$kw$mutes);
var inst_28326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28323,cljs.core.cst$kw$reads);
var inst_28327 = inst_28302;
var state_28400__$1 = (function (){var statearr_28451 = state_28400;
(statearr_28451[(7)] = inst_28327);

(statearr_28451[(16)] = inst_28326);

(statearr_28451[(17)] = inst_28325);

(statearr_28451[(18)] = inst_28324);

return statearr_28451;
})();
var statearr_28452_28503 = state_28400__$1;
(statearr_28452_28503[(2)] = null);

(statearr_28452_28503[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (18))){
var inst_28342 = (state_28400[(2)]);
var state_28400__$1 = state_28400;
var statearr_28453_28504 = state_28400__$1;
(statearr_28453_28504[(2)] = inst_28342);

(statearr_28453_28504[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (37))){
var state_28400__$1 = state_28400;
var statearr_28454_28505 = state_28400__$1;
(statearr_28454_28505[(2)] = null);

(statearr_28454_28505[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28401 === (8))){
var inst_28302 = (state_28400[(8)]);
var inst_28320 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28302);
var state_28400__$1 = state_28400;
var statearr_28455_28506 = state_28400__$1;
(statearr_28455_28506[(2)] = inst_28320);

(statearr_28455_28506[(1)] = (10));


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
});})(c__27413__auto___28460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27313__auto__,c__27413__auto___28460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27314__auto__ = null;
var cljs$core$async$mix_$_state_machine__27314__auto____0 = (function (){
var statearr_28456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28456[(0)] = cljs$core$async$mix_$_state_machine__27314__auto__);

(statearr_28456[(1)] = (1));

return statearr_28456;
});
var cljs$core$async$mix_$_state_machine__27314__auto____1 = (function (state_28400){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_28400);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e28457){if((e28457 instanceof Object)){
var ex__27317__auto__ = e28457;
var statearr_28458_28507 = state_28400;
(statearr_28458_28507[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28400);

return cljs.core.cst$kw$recur;
} else {
throw e28457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__28508 = state_28400;
state_28400 = G__28508;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27314__auto__ = function(state_28400){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27314__auto____1.call(this,state_28400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27314__auto____0;
cljs$core$async$mix_$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27314__auto____1;
return cljs$core$async$mix_$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___28460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27415__auto__ = (function (){var statearr_28459 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_28459[(6)] = c__27413__auto___28460);

return statearr_28459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___28460,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22231__auto__ = (((p == null))?null:p);
var m__22232__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__22232__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__22232__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__22232__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__22231__auto__ = (((p == null))?null:p);
var m__22232__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__22232__auto__.call(null,p,v,ch));
} else {
var m__22232__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__22232__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28510 = arguments.length;
switch (G__28510) {
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
var x__22231__auto__ = (((p == null))?null:p);
var m__22232__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__22232__auto__.call(null,p));
} else {
var m__22232__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__22232__auto____$1.call(null,p));
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
var x__22231__auto__ = (((p == null))?null:p);
var m__22232__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22231__auto__)]);
if(!((m__22232__auto__ == null))){
return (m__22232__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__22232__auto__.call(null,p,v));
} else {
var m__22232__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22232__auto____$1 == null))){
return (m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22232__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__22232__auto____$1.call(null,p,v));
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
var G__28514 = arguments.length;
switch (G__28514) {
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
var or__21548__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__21548__auto__)){
return or__21548__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__21548__auto__,mults){
return (function (p1__28512_SHARP_){
if(cljs.core.truth_((p1__28512_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28512_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28512_SHARP_.call(null,topic)))){
return p1__28512_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28512_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__21548__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28515 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28516){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28516 = meta28516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28517,meta28516__$1){
var self__ = this;
var _28517__$1 = this;
return (new cljs.core.async.t_cljs$core$async28515(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28516__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28517){
var self__ = this;
var _28517__$1 = this;
return self__.meta28516;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28515.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta28516], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28515.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28515";

cljs.core.async.t_cljs$core$async28515.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async28515");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28515 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28515(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28516){
return (new cljs.core.async.t_cljs$core$async28515(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28516));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28515(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27413__auto___28635 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___28635,mults,ensure_mult,p){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___28635,mults,ensure_mult,p){
return (function (state_28589){
var state_val_28590 = (state_28589[(1)]);
if((state_val_28590 === (7))){
var inst_28585 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28591_28636 = state_28589__$1;
(statearr_28591_28636[(2)] = inst_28585);

(statearr_28591_28636[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (20))){
var state_28589__$1 = state_28589;
var statearr_28592_28637 = state_28589__$1;
(statearr_28592_28637[(2)] = null);

(statearr_28592_28637[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (1))){
var state_28589__$1 = state_28589;
var statearr_28593_28638 = state_28589__$1;
(statearr_28593_28638[(2)] = null);

(statearr_28593_28638[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (24))){
var inst_28568 = (state_28589[(7)]);
var inst_28577 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28568);
var state_28589__$1 = state_28589;
var statearr_28594_28639 = state_28589__$1;
(statearr_28594_28639[(2)] = inst_28577);

(statearr_28594_28639[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (4))){
var inst_28520 = (state_28589[(8)]);
var inst_28520__$1 = (state_28589[(2)]);
var inst_28521 = (inst_28520__$1 == null);
var state_28589__$1 = (function (){var statearr_28595 = state_28589;
(statearr_28595[(8)] = inst_28520__$1);

return statearr_28595;
})();
if(cljs.core.truth_(inst_28521)){
var statearr_28596_28640 = state_28589__$1;
(statearr_28596_28640[(1)] = (5));

} else {
var statearr_28597_28641 = state_28589__$1;
(statearr_28597_28641[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (15))){
var inst_28562 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28598_28642 = state_28589__$1;
(statearr_28598_28642[(2)] = inst_28562);

(statearr_28598_28642[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (21))){
var inst_28582 = (state_28589[(2)]);
var state_28589__$1 = (function (){var statearr_28599 = state_28589;
(statearr_28599[(9)] = inst_28582);

return statearr_28599;
})();
var statearr_28600_28643 = state_28589__$1;
(statearr_28600_28643[(2)] = null);

(statearr_28600_28643[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (13))){
var inst_28544 = (state_28589[(10)]);
var inst_28546 = cljs.core.chunked_seq_QMARK_(inst_28544);
var state_28589__$1 = state_28589;
if(inst_28546){
var statearr_28601_28644 = state_28589__$1;
(statearr_28601_28644[(1)] = (16));

} else {
var statearr_28602_28645 = state_28589__$1;
(statearr_28602_28645[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (22))){
var inst_28574 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28574)){
var statearr_28603_28646 = state_28589__$1;
(statearr_28603_28646[(1)] = (23));

} else {
var statearr_28604_28647 = state_28589__$1;
(statearr_28604_28647[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (6))){
var inst_28520 = (state_28589[(8)]);
var inst_28570 = (state_28589[(11)]);
var inst_28568 = (state_28589[(7)]);
var inst_28568__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28520) : topic_fn.call(null,inst_28520));
var inst_28569 = cljs.core.deref(mults);
var inst_28570__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28569,inst_28568__$1);
var state_28589__$1 = (function (){var statearr_28605 = state_28589;
(statearr_28605[(11)] = inst_28570__$1);

(statearr_28605[(7)] = inst_28568__$1);

return statearr_28605;
})();
if(cljs.core.truth_(inst_28570__$1)){
var statearr_28606_28648 = state_28589__$1;
(statearr_28606_28648[(1)] = (19));

} else {
var statearr_28607_28649 = state_28589__$1;
(statearr_28607_28649[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (25))){
var inst_28579 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28608_28650 = state_28589__$1;
(statearr_28608_28650[(2)] = inst_28579);

(statearr_28608_28650[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (17))){
var inst_28544 = (state_28589[(10)]);
var inst_28553 = cljs.core.first(inst_28544);
var inst_28554 = cljs.core.async.muxch_STAR_(inst_28553);
var inst_28555 = cljs.core.async.close_BANG_(inst_28554);
var inst_28556 = cljs.core.next(inst_28544);
var inst_28530 = inst_28556;
var inst_28531 = null;
var inst_28532 = (0);
var inst_28533 = (0);
var state_28589__$1 = (function (){var statearr_28609 = state_28589;
(statearr_28609[(12)] = inst_28530);

(statearr_28609[(13)] = inst_28532);

(statearr_28609[(14)] = inst_28531);

(statearr_28609[(15)] = inst_28555);

(statearr_28609[(16)] = inst_28533);

return statearr_28609;
})();
var statearr_28610_28651 = state_28589__$1;
(statearr_28610_28651[(2)] = null);

(statearr_28610_28651[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (3))){
var inst_28587 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28589__$1,inst_28587);
} else {
if((state_val_28590 === (12))){
var inst_28564 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28611_28652 = state_28589__$1;
(statearr_28611_28652[(2)] = inst_28564);

(statearr_28611_28652[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (2))){
var state_28589__$1 = state_28589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28589__$1,(4),ch);
} else {
if((state_val_28590 === (23))){
var state_28589__$1 = state_28589;
var statearr_28612_28653 = state_28589__$1;
(statearr_28612_28653[(2)] = null);

(statearr_28612_28653[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (19))){
var inst_28520 = (state_28589[(8)]);
var inst_28570 = (state_28589[(11)]);
var inst_28572 = cljs.core.async.muxch_STAR_(inst_28570);
var state_28589__$1 = state_28589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28589__$1,(22),inst_28572,inst_28520);
} else {
if((state_val_28590 === (11))){
var inst_28544 = (state_28589[(10)]);
var inst_28530 = (state_28589[(12)]);
var inst_28544__$1 = cljs.core.seq(inst_28530);
var state_28589__$1 = (function (){var statearr_28613 = state_28589;
(statearr_28613[(10)] = inst_28544__$1);

return statearr_28613;
})();
if(inst_28544__$1){
var statearr_28614_28654 = state_28589__$1;
(statearr_28614_28654[(1)] = (13));

} else {
var statearr_28615_28655 = state_28589__$1;
(statearr_28615_28655[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (9))){
var inst_28566 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28616_28656 = state_28589__$1;
(statearr_28616_28656[(2)] = inst_28566);

(statearr_28616_28656[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (5))){
var inst_28527 = cljs.core.deref(mults);
var inst_28528 = cljs.core.vals(inst_28527);
var inst_28529 = cljs.core.seq(inst_28528);
var inst_28530 = inst_28529;
var inst_28531 = null;
var inst_28532 = (0);
var inst_28533 = (0);
var state_28589__$1 = (function (){var statearr_28617 = state_28589;
(statearr_28617[(12)] = inst_28530);

(statearr_28617[(13)] = inst_28532);

(statearr_28617[(14)] = inst_28531);

(statearr_28617[(16)] = inst_28533);

return statearr_28617;
})();
var statearr_28618_28657 = state_28589__$1;
(statearr_28618_28657[(2)] = null);

(statearr_28618_28657[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (14))){
var state_28589__$1 = state_28589;
var statearr_28622_28658 = state_28589__$1;
(statearr_28622_28658[(2)] = null);

(statearr_28622_28658[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (16))){
var inst_28544 = (state_28589[(10)]);
var inst_28548 = cljs.core.chunk_first(inst_28544);
var inst_28549 = cljs.core.chunk_rest(inst_28544);
var inst_28550 = cljs.core.count(inst_28548);
var inst_28530 = inst_28549;
var inst_28531 = inst_28548;
var inst_28532 = inst_28550;
var inst_28533 = (0);
var state_28589__$1 = (function (){var statearr_28623 = state_28589;
(statearr_28623[(12)] = inst_28530);

(statearr_28623[(13)] = inst_28532);

(statearr_28623[(14)] = inst_28531);

(statearr_28623[(16)] = inst_28533);

return statearr_28623;
})();
var statearr_28624_28659 = state_28589__$1;
(statearr_28624_28659[(2)] = null);

(statearr_28624_28659[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (10))){
var inst_28530 = (state_28589[(12)]);
var inst_28532 = (state_28589[(13)]);
var inst_28531 = (state_28589[(14)]);
var inst_28533 = (state_28589[(16)]);
var inst_28538 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28531,inst_28533);
var inst_28539 = cljs.core.async.muxch_STAR_(inst_28538);
var inst_28540 = cljs.core.async.close_BANG_(inst_28539);
var inst_28541 = (inst_28533 + (1));
var tmp28619 = inst_28530;
var tmp28620 = inst_28532;
var tmp28621 = inst_28531;
var inst_28530__$1 = tmp28619;
var inst_28531__$1 = tmp28621;
var inst_28532__$1 = tmp28620;
var inst_28533__$1 = inst_28541;
var state_28589__$1 = (function (){var statearr_28625 = state_28589;
(statearr_28625[(12)] = inst_28530__$1);

(statearr_28625[(13)] = inst_28532__$1);

(statearr_28625[(14)] = inst_28531__$1);

(statearr_28625[(17)] = inst_28540);

(statearr_28625[(16)] = inst_28533__$1);

return statearr_28625;
})();
var statearr_28626_28660 = state_28589__$1;
(statearr_28626_28660[(2)] = null);

(statearr_28626_28660[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (18))){
var inst_28559 = (state_28589[(2)]);
var state_28589__$1 = state_28589;
var statearr_28627_28661 = state_28589__$1;
(statearr_28627_28661[(2)] = inst_28559);

(statearr_28627_28661[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28590 === (8))){
var inst_28532 = (state_28589[(13)]);
var inst_28533 = (state_28589[(16)]);
var inst_28535 = (inst_28533 < inst_28532);
var inst_28536 = inst_28535;
var state_28589__$1 = state_28589;
if(cljs.core.truth_(inst_28536)){
var statearr_28628_28662 = state_28589__$1;
(statearr_28628_28662[(1)] = (10));

} else {
var statearr_28629_28663 = state_28589__$1;
(statearr_28629_28663[(1)] = (11));

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
});})(c__27413__auto___28635,mults,ensure_mult,p))
;
return ((function (switch__27313__auto__,c__27413__auto___28635,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_28630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28630[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_28630[(1)] = (1));

return statearr_28630;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_28589){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_28589);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e28631){if((e28631 instanceof Object)){
var ex__27317__auto__ = e28631;
var statearr_28632_28664 = state_28589;
(statearr_28632_28664[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28589);

return cljs.core.cst$kw$recur;
} else {
throw e28631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__28665 = state_28589;
state_28589 = G__28665;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_28589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_28589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___28635,mults,ensure_mult,p))
})();
var state__27415__auto__ = (function (){var statearr_28633 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_28633[(6)] = c__27413__auto___28635);

return statearr_28633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___28635,mults,ensure_mult,p))
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
var G__28667 = arguments.length;
switch (G__28667) {
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
var G__28670 = arguments.length;
switch (G__28670) {
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
var G__28673 = arguments.length;
switch (G__28673) {
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
var c__27413__auto___28740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___28740,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___28740,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28712){
var state_val_28713 = (state_28712[(1)]);
if((state_val_28713 === (7))){
var state_28712__$1 = state_28712;
var statearr_28714_28741 = state_28712__$1;
(statearr_28714_28741[(2)] = null);

(statearr_28714_28741[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (1))){
var state_28712__$1 = state_28712;
var statearr_28715_28742 = state_28712__$1;
(statearr_28715_28742[(2)] = null);

(statearr_28715_28742[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (4))){
var inst_28676 = (state_28712[(7)]);
var inst_28678 = (inst_28676 < cnt);
var state_28712__$1 = state_28712;
if(cljs.core.truth_(inst_28678)){
var statearr_28716_28743 = state_28712__$1;
(statearr_28716_28743[(1)] = (6));

} else {
var statearr_28717_28744 = state_28712__$1;
(statearr_28717_28744[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (15))){
var inst_28708 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28718_28745 = state_28712__$1;
(statearr_28718_28745[(2)] = inst_28708);

(statearr_28718_28745[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (13))){
var inst_28701 = cljs.core.async.close_BANG_(out);
var state_28712__$1 = state_28712;
var statearr_28719_28746 = state_28712__$1;
(statearr_28719_28746[(2)] = inst_28701);

(statearr_28719_28746[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (6))){
var state_28712__$1 = state_28712;
var statearr_28720_28747 = state_28712__$1;
(statearr_28720_28747[(2)] = null);

(statearr_28720_28747[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (3))){
var inst_28710 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28712__$1,inst_28710);
} else {
if((state_val_28713 === (12))){
var inst_28698 = (state_28712[(8)]);
var inst_28698__$1 = (state_28712[(2)]);
var inst_28699 = cljs.core.some(cljs.core.nil_QMARK_,inst_28698__$1);
var state_28712__$1 = (function (){var statearr_28721 = state_28712;
(statearr_28721[(8)] = inst_28698__$1);

return statearr_28721;
})();
if(cljs.core.truth_(inst_28699)){
var statearr_28722_28748 = state_28712__$1;
(statearr_28722_28748[(1)] = (13));

} else {
var statearr_28723_28749 = state_28712__$1;
(statearr_28723_28749[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (2))){
var inst_28675 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28676 = (0);
var state_28712__$1 = (function (){var statearr_28724 = state_28712;
(statearr_28724[(9)] = inst_28675);

(statearr_28724[(7)] = inst_28676);

return statearr_28724;
})();
var statearr_28725_28750 = state_28712__$1;
(statearr_28725_28750[(2)] = null);

(statearr_28725_28750[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (11))){
var inst_28676 = (state_28712[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28712,(10),Object,null,(9));
var inst_28685 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28676) : chs__$1.call(null,inst_28676));
var inst_28686 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28676) : done.call(null,inst_28676));
var inst_28687 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28685,inst_28686);
var state_28712__$1 = state_28712;
var statearr_28726_28751 = state_28712__$1;
(statearr_28726_28751[(2)] = inst_28687);


cljs.core.async.impl.ioc_helpers.process_exception(state_28712__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (9))){
var inst_28676 = (state_28712[(7)]);
var inst_28689 = (state_28712[(2)]);
var inst_28690 = (inst_28676 + (1));
var inst_28676__$1 = inst_28690;
var state_28712__$1 = (function (){var statearr_28727 = state_28712;
(statearr_28727[(10)] = inst_28689);

(statearr_28727[(7)] = inst_28676__$1);

return statearr_28727;
})();
var statearr_28728_28752 = state_28712__$1;
(statearr_28728_28752[(2)] = null);

(statearr_28728_28752[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (5))){
var inst_28696 = (state_28712[(2)]);
var state_28712__$1 = (function (){var statearr_28729 = state_28712;
(statearr_28729[(11)] = inst_28696);

return statearr_28729;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28712__$1,(12),dchan);
} else {
if((state_val_28713 === (14))){
var inst_28698 = (state_28712[(8)]);
var inst_28703 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28698);
var state_28712__$1 = state_28712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28712__$1,(16),out,inst_28703);
} else {
if((state_val_28713 === (16))){
var inst_28705 = (state_28712[(2)]);
var state_28712__$1 = (function (){var statearr_28730 = state_28712;
(statearr_28730[(12)] = inst_28705);

return statearr_28730;
})();
var statearr_28731_28753 = state_28712__$1;
(statearr_28731_28753[(2)] = null);

(statearr_28731_28753[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (10))){
var inst_28680 = (state_28712[(2)]);
var inst_28681 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28712__$1 = (function (){var statearr_28732 = state_28712;
(statearr_28732[(13)] = inst_28680);

return statearr_28732;
})();
var statearr_28733_28754 = state_28712__$1;
(statearr_28733_28754[(2)] = inst_28681);


cljs.core.async.impl.ioc_helpers.process_exception(state_28712__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_28713 === (8))){
var inst_28694 = (state_28712[(2)]);
var state_28712__$1 = state_28712;
var statearr_28734_28755 = state_28712__$1;
(statearr_28734_28755[(2)] = inst_28694);

(statearr_28734_28755[(1)] = (5));


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
});})(c__27413__auto___28740,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27313__auto__,c__27413__auto___28740,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_28735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28735[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_28735[(1)] = (1));

return statearr_28735;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_28712){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_28712);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e28736){if((e28736 instanceof Object)){
var ex__27317__auto__ = e28736;
var statearr_28737_28756 = state_28712;
(statearr_28737_28756[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28712);

return cljs.core.cst$kw$recur;
} else {
throw e28736;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__28757 = state_28712;
state_28712 = G__28757;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_28712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_28712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___28740,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27415__auto__ = (function (){var statearr_28738 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_28738[(6)] = c__27413__auto___28740);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___28740,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__28760 = arguments.length;
switch (G__28760) {
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
var c__27413__auto___28814 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___28814,out){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___28814,out){
return (function (state_28792){
var state_val_28793 = (state_28792[(1)]);
if((state_val_28793 === (7))){
var inst_28771 = (state_28792[(7)]);
var inst_28772 = (state_28792[(8)]);
var inst_28771__$1 = (state_28792[(2)]);
var inst_28772__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28771__$1,(0),null);
var inst_28773 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28771__$1,(1),null);
var inst_28774 = (inst_28772__$1 == null);
var state_28792__$1 = (function (){var statearr_28794 = state_28792;
(statearr_28794[(9)] = inst_28773);

(statearr_28794[(7)] = inst_28771__$1);

(statearr_28794[(8)] = inst_28772__$1);

return statearr_28794;
})();
if(cljs.core.truth_(inst_28774)){
var statearr_28795_28815 = state_28792__$1;
(statearr_28795_28815[(1)] = (8));

} else {
var statearr_28796_28816 = state_28792__$1;
(statearr_28796_28816[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28793 === (1))){
var inst_28761 = cljs.core.vec(chs);
var inst_28762 = inst_28761;
var state_28792__$1 = (function (){var statearr_28797 = state_28792;
(statearr_28797[(10)] = inst_28762);

return statearr_28797;
})();
var statearr_28798_28817 = state_28792__$1;
(statearr_28798_28817[(2)] = null);

(statearr_28798_28817[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28793 === (4))){
var inst_28762 = (state_28792[(10)]);
var state_28792__$1 = state_28792;
return cljs.core.async.ioc_alts_BANG_(state_28792__$1,(7),inst_28762);
} else {
if((state_val_28793 === (6))){
var inst_28788 = (state_28792[(2)]);
var state_28792__$1 = state_28792;
var statearr_28799_28818 = state_28792__$1;
(statearr_28799_28818[(2)] = inst_28788);

(statearr_28799_28818[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28793 === (3))){
var inst_28790 = (state_28792[(2)]);
var state_28792__$1 = state_28792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28792__$1,inst_28790);
} else {
if((state_val_28793 === (2))){
var inst_28762 = (state_28792[(10)]);
var inst_28764 = cljs.core.count(inst_28762);
var inst_28765 = (inst_28764 > (0));
var state_28792__$1 = state_28792;
if(cljs.core.truth_(inst_28765)){
var statearr_28801_28819 = state_28792__$1;
(statearr_28801_28819[(1)] = (4));

} else {
var statearr_28802_28820 = state_28792__$1;
(statearr_28802_28820[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28793 === (11))){
var inst_28762 = (state_28792[(10)]);
var inst_28781 = (state_28792[(2)]);
var tmp28800 = inst_28762;
var inst_28762__$1 = tmp28800;
var state_28792__$1 = (function (){var statearr_28803 = state_28792;
(statearr_28803[(10)] = inst_28762__$1);

(statearr_28803[(11)] = inst_28781);

return statearr_28803;
})();
var statearr_28804_28821 = state_28792__$1;
(statearr_28804_28821[(2)] = null);

(statearr_28804_28821[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28793 === (9))){
var inst_28772 = (state_28792[(8)]);
var state_28792__$1 = state_28792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28792__$1,(11),out,inst_28772);
} else {
if((state_val_28793 === (5))){
var inst_28786 = cljs.core.async.close_BANG_(out);
var state_28792__$1 = state_28792;
var statearr_28805_28822 = state_28792__$1;
(statearr_28805_28822[(2)] = inst_28786);

(statearr_28805_28822[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28793 === (10))){
var inst_28784 = (state_28792[(2)]);
var state_28792__$1 = state_28792;
var statearr_28806_28823 = state_28792__$1;
(statearr_28806_28823[(2)] = inst_28784);

(statearr_28806_28823[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28793 === (8))){
var inst_28773 = (state_28792[(9)]);
var inst_28762 = (state_28792[(10)]);
var inst_28771 = (state_28792[(7)]);
var inst_28772 = (state_28792[(8)]);
var inst_28776 = (function (){var cs = inst_28762;
var vec__28767 = inst_28771;
var v = inst_28772;
var c = inst_28773;
return ((function (cs,vec__28767,v,c,inst_28773,inst_28762,inst_28771,inst_28772,state_val_28793,c__27413__auto___28814,out){
return (function (p1__28758_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28758_SHARP_);
});
;})(cs,vec__28767,v,c,inst_28773,inst_28762,inst_28771,inst_28772,state_val_28793,c__27413__auto___28814,out))
})();
var inst_28777 = cljs.core.filterv(inst_28776,inst_28762);
var inst_28762__$1 = inst_28777;
var state_28792__$1 = (function (){var statearr_28807 = state_28792;
(statearr_28807[(10)] = inst_28762__$1);

return statearr_28807;
})();
var statearr_28808_28824 = state_28792__$1;
(statearr_28808_28824[(2)] = null);

(statearr_28808_28824[(1)] = (2));


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
});})(c__27413__auto___28814,out))
;
return ((function (switch__27313__auto__,c__27413__auto___28814,out){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_28809 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28809[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_28809[(1)] = (1));

return statearr_28809;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_28792){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_28792);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e28810){if((e28810 instanceof Object)){
var ex__27317__auto__ = e28810;
var statearr_28811_28825 = state_28792;
(statearr_28811_28825[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28792);

return cljs.core.cst$kw$recur;
} else {
throw e28810;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__28826 = state_28792;
state_28792 = G__28826;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_28792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_28792);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___28814,out))
})();
var state__27415__auto__ = (function (){var statearr_28812 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_28812[(6)] = c__27413__auto___28814);

return statearr_28812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___28814,out))
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
var G__28828 = arguments.length;
switch (G__28828) {
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
var c__27413__auto___28873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___28873,out){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___28873,out){
return (function (state_28852){
var state_val_28853 = (state_28852[(1)]);
if((state_val_28853 === (7))){
var inst_28834 = (state_28852[(7)]);
var inst_28834__$1 = (state_28852[(2)]);
var inst_28835 = (inst_28834__$1 == null);
var inst_28836 = cljs.core.not(inst_28835);
var state_28852__$1 = (function (){var statearr_28854 = state_28852;
(statearr_28854[(7)] = inst_28834__$1);

return statearr_28854;
})();
if(inst_28836){
var statearr_28855_28874 = state_28852__$1;
(statearr_28855_28874[(1)] = (8));

} else {
var statearr_28856_28875 = state_28852__$1;
(statearr_28856_28875[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (1))){
var inst_28829 = (0);
var state_28852__$1 = (function (){var statearr_28857 = state_28852;
(statearr_28857[(8)] = inst_28829);

return statearr_28857;
})();
var statearr_28858_28876 = state_28852__$1;
(statearr_28858_28876[(2)] = null);

(statearr_28858_28876[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (4))){
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28852__$1,(7),ch);
} else {
if((state_val_28853 === (6))){
var inst_28847 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28859_28877 = state_28852__$1;
(statearr_28859_28877[(2)] = inst_28847);

(statearr_28859_28877[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (3))){
var inst_28849 = (state_28852[(2)]);
var inst_28850 = cljs.core.async.close_BANG_(out);
var state_28852__$1 = (function (){var statearr_28860 = state_28852;
(statearr_28860[(9)] = inst_28849);

return statearr_28860;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28852__$1,inst_28850);
} else {
if((state_val_28853 === (2))){
var inst_28829 = (state_28852[(8)]);
var inst_28831 = (inst_28829 < n);
var state_28852__$1 = state_28852;
if(cljs.core.truth_(inst_28831)){
var statearr_28861_28878 = state_28852__$1;
(statearr_28861_28878[(1)] = (4));

} else {
var statearr_28862_28879 = state_28852__$1;
(statearr_28862_28879[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (11))){
var inst_28829 = (state_28852[(8)]);
var inst_28839 = (state_28852[(2)]);
var inst_28840 = (inst_28829 + (1));
var inst_28829__$1 = inst_28840;
var state_28852__$1 = (function (){var statearr_28863 = state_28852;
(statearr_28863[(10)] = inst_28839);

(statearr_28863[(8)] = inst_28829__$1);

return statearr_28863;
})();
var statearr_28864_28880 = state_28852__$1;
(statearr_28864_28880[(2)] = null);

(statearr_28864_28880[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (9))){
var state_28852__$1 = state_28852;
var statearr_28865_28881 = state_28852__$1;
(statearr_28865_28881[(2)] = null);

(statearr_28865_28881[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (5))){
var state_28852__$1 = state_28852;
var statearr_28866_28882 = state_28852__$1;
(statearr_28866_28882[(2)] = null);

(statearr_28866_28882[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (10))){
var inst_28844 = (state_28852[(2)]);
var state_28852__$1 = state_28852;
var statearr_28867_28883 = state_28852__$1;
(statearr_28867_28883[(2)] = inst_28844);

(statearr_28867_28883[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28853 === (8))){
var inst_28834 = (state_28852[(7)]);
var state_28852__$1 = state_28852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28852__$1,(11),out,inst_28834);
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
});})(c__27413__auto___28873,out))
;
return ((function (switch__27313__auto__,c__27413__auto___28873,out){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_28868 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28868[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_28868[(1)] = (1));

return statearr_28868;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_28852){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_28852);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e28869){if((e28869 instanceof Object)){
var ex__27317__auto__ = e28869;
var statearr_28870_28884 = state_28852;
(statearr_28870_28884[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28852);

return cljs.core.cst$kw$recur;
} else {
throw e28869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__28885 = state_28852;
state_28852 = G__28885;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_28852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_28852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___28873,out))
})();
var state__27415__auto__ = (function (){var statearr_28871 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_28871[(6)] = c__27413__auto___28873);

return statearr_28871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___28873,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28887 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28887 = (function (f,ch,meta28888){
this.f = f;
this.ch = ch;
this.meta28888 = meta28888;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28889,meta28888__$1){
var self__ = this;
var _28889__$1 = this;
return (new cljs.core.async.t_cljs$core$async28887(self__.f,self__.ch,meta28888__$1));
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28889){
var self__ = this;
var _28889__$1 = this;
return self__.meta28888;
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28890 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28890 = (function (f,ch,meta28888,_,fn1,meta28891){
this.f = f;
this.ch = ch;
this.meta28888 = meta28888;
this._ = _;
this.fn1 = fn1;
this.meta28891 = meta28891;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28892,meta28891__$1){
var self__ = this;
var _28892__$1 = this;
return (new cljs.core.async.t_cljs$core$async28890(self__.f,self__.ch,self__.meta28888,self__._,self__.fn1,meta28891__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28892){
var self__ = this;
var _28892__$1 = this;
return self__.meta28891;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28890.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28886_SHARP_){
var G__28893 = (((p1__28886_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28886_SHARP_) : self__.f.call(null,p1__28886_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28893) : f1.call(null,G__28893));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28890.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28888,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async28887], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta28891], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28890.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28890.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28890";

cljs.core.async.t_cljs$core$async28890.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async28890");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28890 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28890(f__$1,ch__$1,meta28888__$1,___$2,fn1__$1,meta28891){
return (new cljs.core.async.t_cljs$core$async28890(f__$1,ch__$1,meta28888__$1,___$2,fn1__$1,meta28891));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28890(self__.f,self__.ch,self__.meta28888,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21536__auto__ = ret;
if(cljs.core.truth_(and__21536__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__21536__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28894 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28894) : self__.f.call(null,G__28894));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28887.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28887.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28888], null);
});

cljs.core.async.t_cljs$core$async28887.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28887";

cljs.core.async.t_cljs$core$async28887.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async28887");
});

cljs.core.async.__GT_t_cljs$core$async28887 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28887(f__$1,ch__$1,meta28888){
return (new cljs.core.async.t_cljs$core$async28887(f__$1,ch__$1,meta28888));
});

}

return (new cljs.core.async.t_cljs$core$async28887(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28895 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28895 = (function (f,ch,meta28896){
this.f = f;
this.ch = ch;
this.meta28896 = meta28896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28897,meta28896__$1){
var self__ = this;
var _28897__$1 = this;
return (new cljs.core.async.t_cljs$core$async28895(self__.f,self__.ch,meta28896__$1));
});

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28897){
var self__ = this;
var _28897__$1 = this;
return self__.meta28896;
});

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28896], null);
});

cljs.core.async.t_cljs$core$async28895.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28895";

cljs.core.async.t_cljs$core$async28895.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async28895");
});

cljs.core.async.__GT_t_cljs$core$async28895 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28895(f__$1,ch__$1,meta28896){
return (new cljs.core.async.t_cljs$core$async28895(f__$1,ch__$1,meta28896));
});

}

return (new cljs.core.async.t_cljs$core$async28895(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28898 = (function (p,ch,meta28899){
this.p = p;
this.ch = ch;
this.meta28899 = meta28899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28900,meta28899__$1){
var self__ = this;
var _28900__$1 = this;
return (new cljs.core.async.t_cljs$core$async28898(self__.p,self__.ch,meta28899__$1));
});

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28900){
var self__ = this;
var _28900__$1 = this;
return self__.meta28899;
});

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta28899], null);
});

cljs.core.async.t_cljs$core$async28898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28898";

cljs.core.async.t_cljs$core$async28898.cljs$lang$ctorPrWriter = (function (this__22173__auto__,writer__22174__auto__,opt__22175__auto__){
return cljs.core._write(writer__22174__auto__,"cljs.core.async/t_cljs$core$async28898");
});

cljs.core.async.__GT_t_cljs$core$async28898 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28898(p__$1,ch__$1,meta28899){
return (new cljs.core.async.t_cljs$core$async28898(p__$1,ch__$1,meta28899));
});

}

return (new cljs.core.async.t_cljs$core$async28898(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__28902 = arguments.length;
switch (G__28902) {
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
var c__27413__auto___28942 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___28942,out){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___28942,out){
return (function (state_28923){
var state_val_28924 = (state_28923[(1)]);
if((state_val_28924 === (7))){
var inst_28919 = (state_28923[(2)]);
var state_28923__$1 = state_28923;
var statearr_28925_28943 = state_28923__$1;
(statearr_28925_28943[(2)] = inst_28919);

(statearr_28925_28943[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (1))){
var state_28923__$1 = state_28923;
var statearr_28926_28944 = state_28923__$1;
(statearr_28926_28944[(2)] = null);

(statearr_28926_28944[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (4))){
var inst_28905 = (state_28923[(7)]);
var inst_28905__$1 = (state_28923[(2)]);
var inst_28906 = (inst_28905__$1 == null);
var state_28923__$1 = (function (){var statearr_28927 = state_28923;
(statearr_28927[(7)] = inst_28905__$1);

return statearr_28927;
})();
if(cljs.core.truth_(inst_28906)){
var statearr_28928_28945 = state_28923__$1;
(statearr_28928_28945[(1)] = (5));

} else {
var statearr_28929_28946 = state_28923__$1;
(statearr_28929_28946[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (6))){
var inst_28905 = (state_28923[(7)]);
var inst_28910 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28905) : p.call(null,inst_28905));
var state_28923__$1 = state_28923;
if(cljs.core.truth_(inst_28910)){
var statearr_28930_28947 = state_28923__$1;
(statearr_28930_28947[(1)] = (8));

} else {
var statearr_28931_28948 = state_28923__$1;
(statearr_28931_28948[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (3))){
var inst_28921 = (state_28923[(2)]);
var state_28923__$1 = state_28923;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28923__$1,inst_28921);
} else {
if((state_val_28924 === (2))){
var state_28923__$1 = state_28923;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28923__$1,(4),ch);
} else {
if((state_val_28924 === (11))){
var inst_28913 = (state_28923[(2)]);
var state_28923__$1 = state_28923;
var statearr_28932_28949 = state_28923__$1;
(statearr_28932_28949[(2)] = inst_28913);

(statearr_28932_28949[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (9))){
var state_28923__$1 = state_28923;
var statearr_28933_28950 = state_28923__$1;
(statearr_28933_28950[(2)] = null);

(statearr_28933_28950[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (5))){
var inst_28908 = cljs.core.async.close_BANG_(out);
var state_28923__$1 = state_28923;
var statearr_28934_28951 = state_28923__$1;
(statearr_28934_28951[(2)] = inst_28908);

(statearr_28934_28951[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (10))){
var inst_28916 = (state_28923[(2)]);
var state_28923__$1 = (function (){var statearr_28935 = state_28923;
(statearr_28935[(8)] = inst_28916);

return statearr_28935;
})();
var statearr_28936_28952 = state_28923__$1;
(statearr_28936_28952[(2)] = null);

(statearr_28936_28952[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_28924 === (8))){
var inst_28905 = (state_28923[(7)]);
var state_28923__$1 = state_28923;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28923__$1,(11),out,inst_28905);
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
});})(c__27413__auto___28942,out))
;
return ((function (switch__27313__auto__,c__27413__auto___28942,out){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_28937 = [null,null,null,null,null,null,null,null,null];
(statearr_28937[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_28937[(1)] = (1));

return statearr_28937;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_28923){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_28923);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e28938){if((e28938 instanceof Object)){
var ex__27317__auto__ = e28938;
var statearr_28939_28953 = state_28923;
(statearr_28939_28953[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28923);

return cljs.core.cst$kw$recur;
} else {
throw e28938;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__28954 = state_28923;
state_28923 = G__28954;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_28923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_28923);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___28942,out))
})();
var state__27415__auto__ = (function (){var statearr_28940 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_28940[(6)] = c__27413__auto___28942);

return statearr_28940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___28942,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28956 = arguments.length;
switch (G__28956) {
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
var c__27413__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto__){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto__){
return (function (state_29019){
var state_val_29020 = (state_29019[(1)]);
if((state_val_29020 === (7))){
var inst_29015 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29021_29059 = state_29019__$1;
(statearr_29021_29059[(2)] = inst_29015);

(statearr_29021_29059[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (20))){
var inst_28985 = (state_29019[(7)]);
var inst_28996 = (state_29019[(2)]);
var inst_28997 = cljs.core.next(inst_28985);
var inst_28971 = inst_28997;
var inst_28972 = null;
var inst_28973 = (0);
var inst_28974 = (0);
var state_29019__$1 = (function (){var statearr_29022 = state_29019;
(statearr_29022[(8)] = inst_28973);

(statearr_29022[(9)] = inst_28996);

(statearr_29022[(10)] = inst_28974);

(statearr_29022[(11)] = inst_28972);

(statearr_29022[(12)] = inst_28971);

return statearr_29022;
})();
var statearr_29023_29060 = state_29019__$1;
(statearr_29023_29060[(2)] = null);

(statearr_29023_29060[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (1))){
var state_29019__$1 = state_29019;
var statearr_29024_29061 = state_29019__$1;
(statearr_29024_29061[(2)] = null);

(statearr_29024_29061[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (4))){
var inst_28960 = (state_29019[(13)]);
var inst_28960__$1 = (state_29019[(2)]);
var inst_28961 = (inst_28960__$1 == null);
var state_29019__$1 = (function (){var statearr_29025 = state_29019;
(statearr_29025[(13)] = inst_28960__$1);

return statearr_29025;
})();
if(cljs.core.truth_(inst_28961)){
var statearr_29026_29062 = state_29019__$1;
(statearr_29026_29062[(1)] = (5));

} else {
var statearr_29027_29063 = state_29019__$1;
(statearr_29027_29063[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (15))){
var state_29019__$1 = state_29019;
var statearr_29031_29064 = state_29019__$1;
(statearr_29031_29064[(2)] = null);

(statearr_29031_29064[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (21))){
var state_29019__$1 = state_29019;
var statearr_29032_29065 = state_29019__$1;
(statearr_29032_29065[(2)] = null);

(statearr_29032_29065[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (13))){
var inst_28973 = (state_29019[(8)]);
var inst_28974 = (state_29019[(10)]);
var inst_28972 = (state_29019[(11)]);
var inst_28971 = (state_29019[(12)]);
var inst_28981 = (state_29019[(2)]);
var inst_28982 = (inst_28974 + (1));
var tmp29028 = inst_28973;
var tmp29029 = inst_28972;
var tmp29030 = inst_28971;
var inst_28971__$1 = tmp29030;
var inst_28972__$1 = tmp29029;
var inst_28973__$1 = tmp29028;
var inst_28974__$1 = inst_28982;
var state_29019__$1 = (function (){var statearr_29033 = state_29019;
(statearr_29033[(8)] = inst_28973__$1);

(statearr_29033[(10)] = inst_28974__$1);

(statearr_29033[(11)] = inst_28972__$1);

(statearr_29033[(12)] = inst_28971__$1);

(statearr_29033[(14)] = inst_28981);

return statearr_29033;
})();
var statearr_29034_29066 = state_29019__$1;
(statearr_29034_29066[(2)] = null);

(statearr_29034_29066[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (22))){
var state_29019__$1 = state_29019;
var statearr_29035_29067 = state_29019__$1;
(statearr_29035_29067[(2)] = null);

(statearr_29035_29067[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (6))){
var inst_28960 = (state_29019[(13)]);
var inst_28969 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_28960) : f.call(null,inst_28960));
var inst_28970 = cljs.core.seq(inst_28969);
var inst_28971 = inst_28970;
var inst_28972 = null;
var inst_28973 = (0);
var inst_28974 = (0);
var state_29019__$1 = (function (){var statearr_29036 = state_29019;
(statearr_29036[(8)] = inst_28973);

(statearr_29036[(10)] = inst_28974);

(statearr_29036[(11)] = inst_28972);

(statearr_29036[(12)] = inst_28971);

return statearr_29036;
})();
var statearr_29037_29068 = state_29019__$1;
(statearr_29037_29068[(2)] = null);

(statearr_29037_29068[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (17))){
var inst_28985 = (state_29019[(7)]);
var inst_28989 = cljs.core.chunk_first(inst_28985);
var inst_28990 = cljs.core.chunk_rest(inst_28985);
var inst_28991 = cljs.core.count(inst_28989);
var inst_28971 = inst_28990;
var inst_28972 = inst_28989;
var inst_28973 = inst_28991;
var inst_28974 = (0);
var state_29019__$1 = (function (){var statearr_29038 = state_29019;
(statearr_29038[(8)] = inst_28973);

(statearr_29038[(10)] = inst_28974);

(statearr_29038[(11)] = inst_28972);

(statearr_29038[(12)] = inst_28971);

return statearr_29038;
})();
var statearr_29039_29069 = state_29019__$1;
(statearr_29039_29069[(2)] = null);

(statearr_29039_29069[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (3))){
var inst_29017 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29019__$1,inst_29017);
} else {
if((state_val_29020 === (12))){
var inst_29005 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29040_29070 = state_29019__$1;
(statearr_29040_29070[(2)] = inst_29005);

(statearr_29040_29070[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (2))){
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29019__$1,(4),in$);
} else {
if((state_val_29020 === (23))){
var inst_29013 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29041_29071 = state_29019__$1;
(statearr_29041_29071[(2)] = inst_29013);

(statearr_29041_29071[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (19))){
var inst_29000 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29042_29072 = state_29019__$1;
(statearr_29042_29072[(2)] = inst_29000);

(statearr_29042_29072[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (11))){
var inst_28971 = (state_29019[(12)]);
var inst_28985 = (state_29019[(7)]);
var inst_28985__$1 = cljs.core.seq(inst_28971);
var state_29019__$1 = (function (){var statearr_29043 = state_29019;
(statearr_29043[(7)] = inst_28985__$1);

return statearr_29043;
})();
if(inst_28985__$1){
var statearr_29044_29073 = state_29019__$1;
(statearr_29044_29073[(1)] = (14));

} else {
var statearr_29045_29074 = state_29019__$1;
(statearr_29045_29074[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (9))){
var inst_29007 = (state_29019[(2)]);
var inst_29008 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29019__$1 = (function (){var statearr_29046 = state_29019;
(statearr_29046[(15)] = inst_29007);

return statearr_29046;
})();
if(cljs.core.truth_(inst_29008)){
var statearr_29047_29075 = state_29019__$1;
(statearr_29047_29075[(1)] = (21));

} else {
var statearr_29048_29076 = state_29019__$1;
(statearr_29048_29076[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (5))){
var inst_28963 = cljs.core.async.close_BANG_(out);
var state_29019__$1 = state_29019;
var statearr_29049_29077 = state_29019__$1;
(statearr_29049_29077[(2)] = inst_28963);

(statearr_29049_29077[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (14))){
var inst_28985 = (state_29019[(7)]);
var inst_28987 = cljs.core.chunked_seq_QMARK_(inst_28985);
var state_29019__$1 = state_29019;
if(inst_28987){
var statearr_29050_29078 = state_29019__$1;
(statearr_29050_29078[(1)] = (17));

} else {
var statearr_29051_29079 = state_29019__$1;
(statearr_29051_29079[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (16))){
var inst_29003 = (state_29019[(2)]);
var state_29019__$1 = state_29019;
var statearr_29052_29080 = state_29019__$1;
(statearr_29052_29080[(2)] = inst_29003);

(statearr_29052_29080[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29020 === (10))){
var inst_28974 = (state_29019[(10)]);
var inst_28972 = (state_29019[(11)]);
var inst_28979 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28972,inst_28974);
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29019__$1,(13),out,inst_28979);
} else {
if((state_val_29020 === (18))){
var inst_28985 = (state_29019[(7)]);
var inst_28994 = cljs.core.first(inst_28985);
var state_29019__$1 = state_29019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29019__$1,(20),out,inst_28994);
} else {
if((state_val_29020 === (8))){
var inst_28973 = (state_29019[(8)]);
var inst_28974 = (state_29019[(10)]);
var inst_28976 = (inst_28974 < inst_28973);
var inst_28977 = inst_28976;
var state_29019__$1 = state_29019;
if(cljs.core.truth_(inst_28977)){
var statearr_29053_29081 = state_29019__$1;
(statearr_29053_29081[(1)] = (10));

} else {
var statearr_29054_29082 = state_29019__$1;
(statearr_29054_29082[(1)] = (11));

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
});})(c__27413__auto__))
;
return ((function (switch__27313__auto__,c__27413__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27314__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27314__auto____0 = (function (){
var statearr_29055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29055[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27314__auto__);

(statearr_29055[(1)] = (1));

return statearr_29055;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27314__auto____1 = (function (state_29019){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_29019);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e29056){if((e29056 instanceof Object)){
var ex__27317__auto__ = e29056;
var statearr_29057_29083 = state_29019;
(statearr_29057_29083[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29019);

return cljs.core.cst$kw$recur;
} else {
throw e29056;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__29084 = state_29019;
state_29019 = G__29084;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27314__auto__ = function(state_29019){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27314__auto____1.call(this,state_29019);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27314__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27314__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto__))
})();
var state__27415__auto__ = (function (){var statearr_29058 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_29058[(6)] = c__27413__auto__);

return statearr_29058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto__))
);

return c__27413__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29086 = arguments.length;
switch (G__29086) {
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
var G__29089 = arguments.length;
switch (G__29089) {
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
var G__29092 = arguments.length;
switch (G__29092) {
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
var c__27413__auto___29139 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___29139,out){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___29139,out){
return (function (state_29116){
var state_val_29117 = (state_29116[(1)]);
if((state_val_29117 === (7))){
var inst_29111 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29118_29140 = state_29116__$1;
(statearr_29118_29140[(2)] = inst_29111);

(statearr_29118_29140[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29117 === (1))){
var inst_29093 = null;
var state_29116__$1 = (function (){var statearr_29119 = state_29116;
(statearr_29119[(7)] = inst_29093);

return statearr_29119;
})();
var statearr_29120_29141 = state_29116__$1;
(statearr_29120_29141[(2)] = null);

(statearr_29120_29141[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29117 === (4))){
var inst_29096 = (state_29116[(8)]);
var inst_29096__$1 = (state_29116[(2)]);
var inst_29097 = (inst_29096__$1 == null);
var inst_29098 = cljs.core.not(inst_29097);
var state_29116__$1 = (function (){var statearr_29121 = state_29116;
(statearr_29121[(8)] = inst_29096__$1);

return statearr_29121;
})();
if(inst_29098){
var statearr_29122_29142 = state_29116__$1;
(statearr_29122_29142[(1)] = (5));

} else {
var statearr_29123_29143 = state_29116__$1;
(statearr_29123_29143[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29117 === (6))){
var state_29116__$1 = state_29116;
var statearr_29124_29144 = state_29116__$1;
(statearr_29124_29144[(2)] = null);

(statearr_29124_29144[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29117 === (3))){
var inst_29113 = (state_29116[(2)]);
var inst_29114 = cljs.core.async.close_BANG_(out);
var state_29116__$1 = (function (){var statearr_29125 = state_29116;
(statearr_29125[(9)] = inst_29113);

return statearr_29125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29116__$1,inst_29114);
} else {
if((state_val_29117 === (2))){
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29116__$1,(4),ch);
} else {
if((state_val_29117 === (11))){
var inst_29096 = (state_29116[(8)]);
var inst_29105 = (state_29116[(2)]);
var inst_29093 = inst_29096;
var state_29116__$1 = (function (){var statearr_29126 = state_29116;
(statearr_29126[(10)] = inst_29105);

(statearr_29126[(7)] = inst_29093);

return statearr_29126;
})();
var statearr_29127_29145 = state_29116__$1;
(statearr_29127_29145[(2)] = null);

(statearr_29127_29145[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29117 === (9))){
var inst_29096 = (state_29116[(8)]);
var state_29116__$1 = state_29116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29116__$1,(11),out,inst_29096);
} else {
if((state_val_29117 === (5))){
var inst_29096 = (state_29116[(8)]);
var inst_29093 = (state_29116[(7)]);
var inst_29100 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29096,inst_29093);
var state_29116__$1 = state_29116;
if(inst_29100){
var statearr_29129_29146 = state_29116__$1;
(statearr_29129_29146[(1)] = (8));

} else {
var statearr_29130_29147 = state_29116__$1;
(statearr_29130_29147[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29117 === (10))){
var inst_29108 = (state_29116[(2)]);
var state_29116__$1 = state_29116;
var statearr_29131_29148 = state_29116__$1;
(statearr_29131_29148[(2)] = inst_29108);

(statearr_29131_29148[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29117 === (8))){
var inst_29093 = (state_29116[(7)]);
var tmp29128 = inst_29093;
var inst_29093__$1 = tmp29128;
var state_29116__$1 = (function (){var statearr_29132 = state_29116;
(statearr_29132[(7)] = inst_29093__$1);

return statearr_29132;
})();
var statearr_29133_29149 = state_29116__$1;
(statearr_29133_29149[(2)] = null);

(statearr_29133_29149[(1)] = (2));


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
});})(c__27413__auto___29139,out))
;
return ((function (switch__27313__auto__,c__27413__auto___29139,out){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_29134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29134[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_29134[(1)] = (1));

return statearr_29134;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_29116){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_29116);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e29135){if((e29135 instanceof Object)){
var ex__27317__auto__ = e29135;
var statearr_29136_29150 = state_29116;
(statearr_29136_29150[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29116);

return cljs.core.cst$kw$recur;
} else {
throw e29135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__29151 = state_29116;
state_29116 = G__29151;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_29116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_29116);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___29139,out))
})();
var state__27415__auto__ = (function (){var statearr_29137 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_29137[(6)] = c__27413__auto___29139);

return statearr_29137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___29139,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29153 = arguments.length;
switch (G__29153) {
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
var c__27413__auto___29219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___29219,out){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___29219,out){
return (function (state_29191){
var state_val_29192 = (state_29191[(1)]);
if((state_val_29192 === (7))){
var inst_29187 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29193_29220 = state_29191__$1;
(statearr_29193_29220[(2)] = inst_29187);

(statearr_29193_29220[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (1))){
var inst_29154 = (new Array(n));
var inst_29155 = inst_29154;
var inst_29156 = (0);
var state_29191__$1 = (function (){var statearr_29194 = state_29191;
(statearr_29194[(7)] = inst_29155);

(statearr_29194[(8)] = inst_29156);

return statearr_29194;
})();
var statearr_29195_29221 = state_29191__$1;
(statearr_29195_29221[(2)] = null);

(statearr_29195_29221[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (4))){
var inst_29159 = (state_29191[(9)]);
var inst_29159__$1 = (state_29191[(2)]);
var inst_29160 = (inst_29159__$1 == null);
var inst_29161 = cljs.core.not(inst_29160);
var state_29191__$1 = (function (){var statearr_29196 = state_29191;
(statearr_29196[(9)] = inst_29159__$1);

return statearr_29196;
})();
if(inst_29161){
var statearr_29197_29222 = state_29191__$1;
(statearr_29197_29222[(1)] = (5));

} else {
var statearr_29198_29223 = state_29191__$1;
(statearr_29198_29223[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (15))){
var inst_29181 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29199_29224 = state_29191__$1;
(statearr_29199_29224[(2)] = inst_29181);

(statearr_29199_29224[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (13))){
var state_29191__$1 = state_29191;
var statearr_29200_29225 = state_29191__$1;
(statearr_29200_29225[(2)] = null);

(statearr_29200_29225[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (6))){
var inst_29156 = (state_29191[(8)]);
var inst_29177 = (inst_29156 > (0));
var state_29191__$1 = state_29191;
if(cljs.core.truth_(inst_29177)){
var statearr_29201_29226 = state_29191__$1;
(statearr_29201_29226[(1)] = (12));

} else {
var statearr_29202_29227 = state_29191__$1;
(statearr_29202_29227[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (3))){
var inst_29189 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29191__$1,inst_29189);
} else {
if((state_val_29192 === (12))){
var inst_29155 = (state_29191[(7)]);
var inst_29179 = cljs.core.vec(inst_29155);
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29191__$1,(15),out,inst_29179);
} else {
if((state_val_29192 === (2))){
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29191__$1,(4),ch);
} else {
if((state_val_29192 === (11))){
var inst_29171 = (state_29191[(2)]);
var inst_29172 = (new Array(n));
var inst_29155 = inst_29172;
var inst_29156 = (0);
var state_29191__$1 = (function (){var statearr_29203 = state_29191;
(statearr_29203[(7)] = inst_29155);

(statearr_29203[(10)] = inst_29171);

(statearr_29203[(8)] = inst_29156);

return statearr_29203;
})();
var statearr_29204_29228 = state_29191__$1;
(statearr_29204_29228[(2)] = null);

(statearr_29204_29228[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (9))){
var inst_29155 = (state_29191[(7)]);
var inst_29169 = cljs.core.vec(inst_29155);
var state_29191__$1 = state_29191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29191__$1,(11),out,inst_29169);
} else {
if((state_val_29192 === (5))){
var inst_29155 = (state_29191[(7)]);
var inst_29156 = (state_29191[(8)]);
var inst_29159 = (state_29191[(9)]);
var inst_29164 = (state_29191[(11)]);
var inst_29163 = (inst_29155[inst_29156] = inst_29159);
var inst_29164__$1 = (inst_29156 + (1));
var inst_29165 = (inst_29164__$1 < n);
var state_29191__$1 = (function (){var statearr_29205 = state_29191;
(statearr_29205[(11)] = inst_29164__$1);

(statearr_29205[(12)] = inst_29163);

return statearr_29205;
})();
if(cljs.core.truth_(inst_29165)){
var statearr_29206_29229 = state_29191__$1;
(statearr_29206_29229[(1)] = (8));

} else {
var statearr_29207_29230 = state_29191__$1;
(statearr_29207_29230[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (14))){
var inst_29184 = (state_29191[(2)]);
var inst_29185 = cljs.core.async.close_BANG_(out);
var state_29191__$1 = (function (){var statearr_29209 = state_29191;
(statearr_29209[(13)] = inst_29184);

return statearr_29209;
})();
var statearr_29210_29231 = state_29191__$1;
(statearr_29210_29231[(2)] = inst_29185);

(statearr_29210_29231[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (10))){
var inst_29175 = (state_29191[(2)]);
var state_29191__$1 = state_29191;
var statearr_29211_29232 = state_29191__$1;
(statearr_29211_29232[(2)] = inst_29175);

(statearr_29211_29232[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29192 === (8))){
var inst_29155 = (state_29191[(7)]);
var inst_29164 = (state_29191[(11)]);
var tmp29208 = inst_29155;
var inst_29155__$1 = tmp29208;
var inst_29156 = inst_29164;
var state_29191__$1 = (function (){var statearr_29212 = state_29191;
(statearr_29212[(7)] = inst_29155__$1);

(statearr_29212[(8)] = inst_29156);

return statearr_29212;
})();
var statearr_29213_29233 = state_29191__$1;
(statearr_29213_29233[(2)] = null);

(statearr_29213_29233[(1)] = (2));


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
});})(c__27413__auto___29219,out))
;
return ((function (switch__27313__auto__,c__27413__auto___29219,out){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_29214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29214[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_29214[(1)] = (1));

return statearr_29214;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_29191){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_29191);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e29215){if((e29215 instanceof Object)){
var ex__27317__auto__ = e29215;
var statearr_29216_29234 = state_29191;
(statearr_29216_29234[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29191);

return cljs.core.cst$kw$recur;
} else {
throw e29215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__29235 = state_29191;
state_29191 = G__29235;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_29191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_29191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___29219,out))
})();
var state__27415__auto__ = (function (){var statearr_29217 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_29217[(6)] = c__27413__auto___29219);

return statearr_29217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___29219,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29237 = arguments.length;
switch (G__29237) {
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
var c__27413__auto___29307 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27413__auto___29307,out){
return (function (){
var f__27414__auto__ = (function (){var switch__27313__auto__ = ((function (c__27413__auto___29307,out){
return (function (state_29279){
var state_val_29280 = (state_29279[(1)]);
if((state_val_29280 === (7))){
var inst_29275 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29281_29308 = state_29279__$1;
(statearr_29281_29308[(2)] = inst_29275);

(statearr_29281_29308[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (1))){
var inst_29238 = [];
var inst_29239 = inst_29238;
var inst_29240 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_29279__$1 = (function (){var statearr_29282 = state_29279;
(statearr_29282[(7)] = inst_29239);

(statearr_29282[(8)] = inst_29240);

return statearr_29282;
})();
var statearr_29283_29309 = state_29279__$1;
(statearr_29283_29309[(2)] = null);

(statearr_29283_29309[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (4))){
var inst_29243 = (state_29279[(9)]);
var inst_29243__$1 = (state_29279[(2)]);
var inst_29244 = (inst_29243__$1 == null);
var inst_29245 = cljs.core.not(inst_29244);
var state_29279__$1 = (function (){var statearr_29284 = state_29279;
(statearr_29284[(9)] = inst_29243__$1);

return statearr_29284;
})();
if(inst_29245){
var statearr_29285_29310 = state_29279__$1;
(statearr_29285_29310[(1)] = (5));

} else {
var statearr_29286_29311 = state_29279__$1;
(statearr_29286_29311[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (15))){
var inst_29269 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29287_29312 = state_29279__$1;
(statearr_29287_29312[(2)] = inst_29269);

(statearr_29287_29312[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (13))){
var state_29279__$1 = state_29279;
var statearr_29288_29313 = state_29279__$1;
(statearr_29288_29313[(2)] = null);

(statearr_29288_29313[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (6))){
var inst_29239 = (state_29279[(7)]);
var inst_29264 = inst_29239.length;
var inst_29265 = (inst_29264 > (0));
var state_29279__$1 = state_29279;
if(cljs.core.truth_(inst_29265)){
var statearr_29289_29314 = state_29279__$1;
(statearr_29289_29314[(1)] = (12));

} else {
var statearr_29290_29315 = state_29279__$1;
(statearr_29290_29315[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (3))){
var inst_29277 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29279__$1,inst_29277);
} else {
if((state_val_29280 === (12))){
var inst_29239 = (state_29279[(7)]);
var inst_29267 = cljs.core.vec(inst_29239);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29279__$1,(15),out,inst_29267);
} else {
if((state_val_29280 === (2))){
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29279__$1,(4),ch);
} else {
if((state_val_29280 === (11))){
var inst_29243 = (state_29279[(9)]);
var inst_29247 = (state_29279[(10)]);
var inst_29257 = (state_29279[(2)]);
var inst_29258 = [];
var inst_29259 = inst_29258.push(inst_29243);
var inst_29239 = inst_29258;
var inst_29240 = inst_29247;
var state_29279__$1 = (function (){var statearr_29291 = state_29279;
(statearr_29291[(7)] = inst_29239);

(statearr_29291[(11)] = inst_29257);

(statearr_29291[(8)] = inst_29240);

(statearr_29291[(12)] = inst_29259);

return statearr_29291;
})();
var statearr_29292_29316 = state_29279__$1;
(statearr_29292_29316[(2)] = null);

(statearr_29292_29316[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (9))){
var inst_29239 = (state_29279[(7)]);
var inst_29255 = cljs.core.vec(inst_29239);
var state_29279__$1 = state_29279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29279__$1,(11),out,inst_29255);
} else {
if((state_val_29280 === (5))){
var inst_29243 = (state_29279[(9)]);
var inst_29240 = (state_29279[(8)]);
var inst_29247 = (state_29279[(10)]);
var inst_29247__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29243) : f.call(null,inst_29243));
var inst_29248 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29247__$1,inst_29240);
var inst_29249 = cljs.core.keyword_identical_QMARK_(inst_29240,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_29250 = (inst_29248) || (inst_29249);
var state_29279__$1 = (function (){var statearr_29293 = state_29279;
(statearr_29293[(10)] = inst_29247__$1);

return statearr_29293;
})();
if(cljs.core.truth_(inst_29250)){
var statearr_29294_29317 = state_29279__$1;
(statearr_29294_29317[(1)] = (8));

} else {
var statearr_29295_29318 = state_29279__$1;
(statearr_29295_29318[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (14))){
var inst_29272 = (state_29279[(2)]);
var inst_29273 = cljs.core.async.close_BANG_(out);
var state_29279__$1 = (function (){var statearr_29297 = state_29279;
(statearr_29297[(13)] = inst_29272);

return statearr_29297;
})();
var statearr_29298_29319 = state_29279__$1;
(statearr_29298_29319[(2)] = inst_29273);

(statearr_29298_29319[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (10))){
var inst_29262 = (state_29279[(2)]);
var state_29279__$1 = state_29279;
var statearr_29299_29320 = state_29279__$1;
(statearr_29299_29320[(2)] = inst_29262);

(statearr_29299_29320[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29280 === (8))){
var inst_29239 = (state_29279[(7)]);
var inst_29243 = (state_29279[(9)]);
var inst_29247 = (state_29279[(10)]);
var inst_29252 = inst_29239.push(inst_29243);
var tmp29296 = inst_29239;
var inst_29239__$1 = tmp29296;
var inst_29240 = inst_29247;
var state_29279__$1 = (function (){var statearr_29300 = state_29279;
(statearr_29300[(7)] = inst_29239__$1);

(statearr_29300[(8)] = inst_29240);

(statearr_29300[(14)] = inst_29252);

return statearr_29300;
})();
var statearr_29301_29321 = state_29279__$1;
(statearr_29301_29321[(2)] = null);

(statearr_29301_29321[(1)] = (2));


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
});})(c__27413__auto___29307,out))
;
return ((function (switch__27313__auto__,c__27413__auto___29307,out){
return (function() {
var cljs$core$async$state_machine__27314__auto__ = null;
var cljs$core$async$state_machine__27314__auto____0 = (function (){
var statearr_29302 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29302[(0)] = cljs$core$async$state_machine__27314__auto__);

(statearr_29302[(1)] = (1));

return statearr_29302;
});
var cljs$core$async$state_machine__27314__auto____1 = (function (state_29279){
while(true){
var ret_value__27315__auto__ = (function (){try{while(true){
var result__27316__auto__ = switch__27313__auto__(state_29279);
if(cljs.core.keyword_identical_QMARK_(result__27316__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__27316__auto__;
}
break;
}
}catch (e29303){if((e29303 instanceof Object)){
var ex__27317__auto__ = e29303;
var statearr_29304_29322 = state_29279;
(statearr_29304_29322[(5)] = ex__27317__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29279);

return cljs.core.cst$kw$recur;
} else {
throw e29303;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27315__auto__,cljs.core.cst$kw$recur)){
var G__29323 = state_29279;
state_29279 = G__29323;
continue;
} else {
return ret_value__27315__auto__;
}
break;
}
});
cljs$core$async$state_machine__27314__auto__ = function(state_29279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27314__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27314__auto____1.call(this,state_29279);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27314__auto____0;
cljs$core$async$state_machine__27314__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27314__auto____1;
return cljs$core$async$state_machine__27314__auto__;
})()
;})(switch__27313__auto__,c__27413__auto___29307,out))
})();
var state__27415__auto__ = (function (){var statearr_29305 = (f__27414__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27414__auto__.cljs$core$IFn$_invoke$arity$0() : f__27414__auto__.call(null));
(statearr_29305[(6)] = c__27413__auto___29307);

return statearr_29305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27415__auto__);
});})(c__27413__auto___29307,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

