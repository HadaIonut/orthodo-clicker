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
var G__30798 = arguments.length;
switch (G__30798) {
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
if(typeof cljs.core.async.t_cljs$core$async30799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30799 = (function (f,blockable,meta30800){
this.f = f;
this.blockable = blockable;
this.meta30800 = meta30800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30801,meta30800__$1){
var self__ = this;
var _30801__$1 = this;
return (new cljs.core.async.t_cljs$core$async30799(self__.f,self__.blockable,meta30800__$1));
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30801){
var self__ = this;
var _30801__$1 = this;
return self__.meta30800;
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta30800], null);
});

cljs.core.async.t_cljs$core$async30799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30799";

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async30799");
});

cljs.core.async.__GT_t_cljs$core$async30799 = (function cljs$core$async$__GT_t_cljs$core$async30799(f__$1,blockable__$1,meta30800){
return (new cljs.core.async.t_cljs$core$async30799(f__$1,blockable__$1,meta30800));
});

}

return (new cljs.core.async.t_cljs$core$async30799(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__30805 = arguments.length;
switch (G__30805) {
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
var G__30808 = arguments.length;
switch (G__30808) {
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
var G__30811 = arguments.length;
switch (G__30811) {
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
var val_30813 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30813) : fn1.call(null,val_30813));
} else {
cljs.core.async.impl.dispatch.run(((function (val_30813,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_30813) : fn1.call(null,val_30813));
});})(val_30813,ret))
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
var G__30815 = arguments.length;
switch (G__30815) {
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
var n__22481__auto___30817 = n;
var x_30818 = (0);
while(true){
if((x_30818 < n__22481__auto___30817)){
(a[x_30818] = (0));

var G__30819 = (x_30818 + (1));
x_30818 = G__30819;
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

var G__30820 = (i + (1));
i = G__30820;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async30821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30821 = (function (flag,meta30822){
this.flag = flag;
this.meta30822 = meta30822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30823,meta30822__$1){
var self__ = this;
var _30823__$1 = this;
return (new cljs.core.async.t_cljs$core$async30821(self__.flag,meta30822__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30823){
var self__ = this;
var _30823__$1 = this;
return self__.meta30822;
});})(flag))
;

cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30821.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30821.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta30822], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30821";

cljs.core.async.t_cljs$core$async30821.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async30821");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30821 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30821(flag__$1,meta30822){
return (new cljs.core.async.t_cljs$core$async30821(flag__$1,meta30822));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30821(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30824 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30824 = (function (flag,cb,meta30825){
this.flag = flag;
this.cb = cb;
this.meta30825 = meta30825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30826,meta30825__$1){
var self__ = this;
var _30826__$1 = this;
return (new cljs.core.async.t_cljs$core$async30824(self__.flag,self__.cb,meta30825__$1));
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30826){
var self__ = this;
var _30826__$1 = this;
return self__.meta30825;
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30824.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30824.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta30825], null);
});

cljs.core.async.t_cljs$core$async30824.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30824.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30824";

cljs.core.async.t_cljs$core$async30824.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async30824");
});

cljs.core.async.__GT_t_cljs$core$async30824 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30824(flag__$1,cb__$1,meta30825){
return (new cljs.core.async.t_cljs$core$async30824(flag__$1,cb__$1,meta30825));
});

}

return (new cljs.core.async.t_cljs$core$async30824(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30827_SHARP_){
var G__30829 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30827_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30829) : fret.call(null,G__30829));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30828_SHARP_){
var G__30830 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30828_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30830) : fret.call(null,G__30830));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__21541__auto__ = wport;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30831 = (i + (1));
i = G__30831;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21541__auto__ = ret;
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__21529__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__21529__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__21529__auto__;
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
var args__22712__auto__ = [];
var len__22705__auto___30837 = arguments.length;
var i__22706__auto___30838 = (0);
while(true){
if((i__22706__auto___30838 < len__22705__auto___30837)){
args__22712__auto__.push((arguments[i__22706__auto___30838]));

var G__30839 = (i__22706__auto___30838 + (1));
i__22706__auto___30838 = G__30839;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((1) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22713__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30834){
var map__30835 = p__30834;
var map__30835__$1 = ((((!((map__30835 == null)))?((((map__30835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30835):map__30835);
var opts = map__30835__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30832){
var G__30833 = cljs.core.first(seq30832);
var seq30832__$1 = cljs.core.next(seq30832);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30833,seq30832__$1);
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
var G__30841 = arguments.length;
switch (G__30841) {
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
var c__30752__auto___30887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___30887){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___30887){
return (function (state_30865){
var state_val_30866 = (state_30865[(1)]);
if((state_val_30866 === (7))){
var inst_30861 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
var statearr_30867_30888 = state_30865__$1;
(statearr_30867_30888[(2)] = inst_30861);

(statearr_30867_30888[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (1))){
var state_30865__$1 = state_30865;
var statearr_30868_30889 = state_30865__$1;
(statearr_30868_30889[(2)] = null);

(statearr_30868_30889[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (4))){
var inst_30844 = (state_30865[(7)]);
var inst_30844__$1 = (state_30865[(2)]);
var inst_30845 = (inst_30844__$1 == null);
var state_30865__$1 = (function (){var statearr_30869 = state_30865;
(statearr_30869[(7)] = inst_30844__$1);

return statearr_30869;
})();
if(cljs.core.truth_(inst_30845)){
var statearr_30870_30890 = state_30865__$1;
(statearr_30870_30890[(1)] = (5));

} else {
var statearr_30871_30891 = state_30865__$1;
(statearr_30871_30891[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (13))){
var state_30865__$1 = state_30865;
var statearr_30872_30892 = state_30865__$1;
(statearr_30872_30892[(2)] = null);

(statearr_30872_30892[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (6))){
var inst_30844 = (state_30865[(7)]);
var state_30865__$1 = state_30865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30865__$1,(11),to,inst_30844);
} else {
if((state_val_30866 === (3))){
var inst_30863 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30865__$1,inst_30863);
} else {
if((state_val_30866 === (12))){
var state_30865__$1 = state_30865;
var statearr_30873_30893 = state_30865__$1;
(statearr_30873_30893[(2)] = null);

(statearr_30873_30893[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (2))){
var state_30865__$1 = state_30865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30865__$1,(4),from);
} else {
if((state_val_30866 === (11))){
var inst_30854 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
if(cljs.core.truth_(inst_30854)){
var statearr_30874_30894 = state_30865__$1;
(statearr_30874_30894[(1)] = (12));

} else {
var statearr_30875_30895 = state_30865__$1;
(statearr_30875_30895[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (9))){
var state_30865__$1 = state_30865;
var statearr_30876_30896 = state_30865__$1;
(statearr_30876_30896[(2)] = null);

(statearr_30876_30896[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (5))){
var state_30865__$1 = state_30865;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30877_30897 = state_30865__$1;
(statearr_30877_30897[(1)] = (8));

} else {
var statearr_30878_30898 = state_30865__$1;
(statearr_30878_30898[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (14))){
var inst_30859 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
var statearr_30879_30899 = state_30865__$1;
(statearr_30879_30899[(2)] = inst_30859);

(statearr_30879_30899[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (10))){
var inst_30851 = (state_30865[(2)]);
var state_30865__$1 = state_30865;
var statearr_30880_30900 = state_30865__$1;
(statearr_30880_30900[(2)] = inst_30851);

(statearr_30880_30900[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30866 === (8))){
var inst_30848 = cljs.core.async.close_BANG_(to);
var state_30865__$1 = state_30865;
var statearr_30881_30901 = state_30865__$1;
(statearr_30881_30901[(2)] = inst_30848);

(statearr_30881_30901[(1)] = (10));


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
});})(c__30752__auto___30887))
;
return ((function (switch__30652__auto__,c__30752__auto___30887){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_30882 = [null,null,null,null,null,null,null,null];
(statearr_30882[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_30882[(1)] = (1));

return statearr_30882;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_30865){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_30865);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e30883){if((e30883 instanceof Object)){
var ex__30656__auto__ = e30883;
var statearr_30884_30902 = state_30865;
(statearr_30884_30902[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30865);

return cljs.core.cst$kw$recur;
} else {
throw e30883;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__30903 = state_30865;
state_30865 = G__30903;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_30865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_30865);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___30887))
})();
var state__30754__auto__ = (function (){var statearr_30885 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_30885[(6)] = c__30752__auto___30887);

return statearr_30885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___30887))
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
return (function (p__30904){
var vec__30905 = p__30904;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30905,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30905,(1),null);
var job = vec__30905;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30752__auto___31076 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___31076,res,vec__30905,v,p,job,jobs,results){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___31076,res,vec__30905,v,p,job,jobs,results){
return (function (state_30912){
var state_val_30913 = (state_30912[(1)]);
if((state_val_30913 === (1))){
var state_30912__$1 = state_30912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30912__$1,(2),res,v);
} else {
if((state_val_30913 === (2))){
var inst_30909 = (state_30912[(2)]);
var inst_30910 = cljs.core.async.close_BANG_(res);
var state_30912__$1 = (function (){var statearr_30914 = state_30912;
(statearr_30914[(7)] = inst_30909);

return statearr_30914;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30912__$1,inst_30910);
} else {
return null;
}
}
});})(c__30752__auto___31076,res,vec__30905,v,p,job,jobs,results))
;
return ((function (switch__30652__auto__,c__30752__auto___31076,res,vec__30905,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0 = (function (){
var statearr_30915 = [null,null,null,null,null,null,null,null];
(statearr_30915[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__);

(statearr_30915[(1)] = (1));

return statearr_30915;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1 = (function (state_30912){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_30912);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e30916){if((e30916 instanceof Object)){
var ex__30656__auto__ = e30916;
var statearr_30917_31077 = state_30912;
(statearr_30917_31077[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30912);

return cljs.core.cst$kw$recur;
} else {
throw e30916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31078 = state_30912;
state_30912 = G__31078;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = function(state_30912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1.call(this,state_30912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___31076,res,vec__30905,v,p,job,jobs,results))
})();
var state__30754__auto__ = (function (){var statearr_30918 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_30918[(6)] = c__30752__auto___31076);

return statearr_30918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___31076,res,vec__30905,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30919){
var vec__30920 = p__30919;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30920,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30920,(1),null);
var job = vec__30920;
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
var n__22481__auto___31079 = n;
var __31080 = (0);
while(true){
if((__31080 < n__22481__auto___31079)){
var G__30923_31081 = type;
var G__30923_31082__$1 = (((G__30923_31081 instanceof cljs.core.Keyword))?G__30923_31081.fqn:null);
switch (G__30923_31082__$1) {
case "compute":
var c__30752__auto___31084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31080,c__30752__auto___31084,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (__31080,c__30752__auto___31084,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async){
return (function (state_30936){
var state_val_30937 = (state_30936[(1)]);
if((state_val_30937 === (1))){
var state_30936__$1 = state_30936;
var statearr_30938_31085 = state_30936__$1;
(statearr_30938_31085[(2)] = null);

(statearr_30938_31085[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30937 === (2))){
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30936__$1,(4),jobs);
} else {
if((state_val_30937 === (3))){
var inst_30934 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30936__$1,inst_30934);
} else {
if((state_val_30937 === (4))){
var inst_30926 = (state_30936[(2)]);
var inst_30927 = process(inst_30926);
var state_30936__$1 = state_30936;
if(cljs.core.truth_(inst_30927)){
var statearr_30939_31086 = state_30936__$1;
(statearr_30939_31086[(1)] = (5));

} else {
var statearr_30940_31087 = state_30936__$1;
(statearr_30940_31087[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30937 === (5))){
var state_30936__$1 = state_30936;
var statearr_30941_31088 = state_30936__$1;
(statearr_30941_31088[(2)] = null);

(statearr_30941_31088[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30937 === (6))){
var state_30936__$1 = state_30936;
var statearr_30942_31089 = state_30936__$1;
(statearr_30942_31089[(2)] = null);

(statearr_30942_31089[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30937 === (7))){
var inst_30932 = (state_30936[(2)]);
var state_30936__$1 = state_30936;
var statearr_30943_31090 = state_30936__$1;
(statearr_30943_31090[(2)] = inst_30932);

(statearr_30943_31090[(1)] = (3));


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
});})(__31080,c__30752__auto___31084,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async))
;
return ((function (__31080,switch__30652__auto__,c__30752__auto___31084,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0 = (function (){
var statearr_30944 = [null,null,null,null,null,null,null];
(statearr_30944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__);

(statearr_30944[(1)] = (1));

return statearr_30944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1 = (function (state_30936){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_30936);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e30945){if((e30945 instanceof Object)){
var ex__30656__auto__ = e30945;
var statearr_30946_31091 = state_30936;
(statearr_30946_31091[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30936);

return cljs.core.cst$kw$recur;
} else {
throw e30945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31092 = state_30936;
state_30936 = G__31092;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = function(state_30936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1.call(this,state_30936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__;
})()
;})(__31080,switch__30652__auto__,c__30752__auto___31084,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async))
})();
var state__30754__auto__ = (function (){var statearr_30947 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_30947[(6)] = c__30752__auto___31084);

return statearr_30947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(__31080,c__30752__auto___31084,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async))
);


break;
case "async":
var c__30752__auto___31093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31080,c__30752__auto___31093,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (__31080,c__30752__auto___31093,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async){
return (function (state_30960){
var state_val_30961 = (state_30960[(1)]);
if((state_val_30961 === (1))){
var state_30960__$1 = state_30960;
var statearr_30962_31094 = state_30960__$1;
(statearr_30962_31094[(2)] = null);

(statearr_30962_31094[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30961 === (2))){
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30960__$1,(4),jobs);
} else {
if((state_val_30961 === (3))){
var inst_30958 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30960__$1,inst_30958);
} else {
if((state_val_30961 === (4))){
var inst_30950 = (state_30960[(2)]);
var inst_30951 = async(inst_30950);
var state_30960__$1 = state_30960;
if(cljs.core.truth_(inst_30951)){
var statearr_30963_31095 = state_30960__$1;
(statearr_30963_31095[(1)] = (5));

} else {
var statearr_30964_31096 = state_30960__$1;
(statearr_30964_31096[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30961 === (5))){
var state_30960__$1 = state_30960;
var statearr_30965_31097 = state_30960__$1;
(statearr_30965_31097[(2)] = null);

(statearr_30965_31097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30961 === (6))){
var state_30960__$1 = state_30960;
var statearr_30966_31098 = state_30960__$1;
(statearr_30966_31098[(2)] = null);

(statearr_30966_31098[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30961 === (7))){
var inst_30956 = (state_30960[(2)]);
var state_30960__$1 = state_30960;
var statearr_30967_31099 = state_30960__$1;
(statearr_30967_31099[(2)] = inst_30956);

(statearr_30967_31099[(1)] = (3));


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
});})(__31080,c__30752__auto___31093,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async))
;
return ((function (__31080,switch__30652__auto__,c__30752__auto___31093,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0 = (function (){
var statearr_30968 = [null,null,null,null,null,null,null];
(statearr_30968[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__);

(statearr_30968[(1)] = (1));

return statearr_30968;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1 = (function (state_30960){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_30960);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e30969){if((e30969 instanceof Object)){
var ex__30656__auto__ = e30969;
var statearr_30970_31100 = state_30960;
(statearr_30970_31100[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30960);

return cljs.core.cst$kw$recur;
} else {
throw e30969;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31101 = state_30960;
state_30960 = G__31101;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = function(state_30960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1.call(this,state_30960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__;
})()
;})(__31080,switch__30652__auto__,c__30752__auto___31093,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async))
})();
var state__30754__auto__ = (function (){var statearr_30971 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_30971[(6)] = c__30752__auto___31093);

return statearr_30971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(__31080,c__30752__auto___31093,G__30923_31081,G__30923_31082__$1,n__22481__auto___31079,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30923_31082__$1)].join('')));

}

var G__31102 = (__31080 + (1));
__31080 = G__31102;
continue;
} else {
}
break;
}

var c__30752__auto___31103 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___31103,jobs,results,process,async){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___31103,jobs,results,process,async){
return (function (state_30993){
var state_val_30994 = (state_30993[(1)]);
if((state_val_30994 === (1))){
var state_30993__$1 = state_30993;
var statearr_30995_31104 = state_30993__$1;
(statearr_30995_31104[(2)] = null);

(statearr_30995_31104[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30994 === (2))){
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30993__$1,(4),from);
} else {
if((state_val_30994 === (3))){
var inst_30991 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30993__$1,inst_30991);
} else {
if((state_val_30994 === (4))){
var inst_30974 = (state_30993[(7)]);
var inst_30974__$1 = (state_30993[(2)]);
var inst_30975 = (inst_30974__$1 == null);
var state_30993__$1 = (function (){var statearr_30996 = state_30993;
(statearr_30996[(7)] = inst_30974__$1);

return statearr_30996;
})();
if(cljs.core.truth_(inst_30975)){
var statearr_30997_31105 = state_30993__$1;
(statearr_30997_31105[(1)] = (5));

} else {
var statearr_30998_31106 = state_30993__$1;
(statearr_30998_31106[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_30994 === (5))){
var inst_30977 = cljs.core.async.close_BANG_(jobs);
var state_30993__$1 = state_30993;
var statearr_30999_31107 = state_30993__$1;
(statearr_30999_31107[(2)] = inst_30977);

(statearr_30999_31107[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30994 === (6))){
var inst_30979 = (state_30993[(8)]);
var inst_30974 = (state_30993[(7)]);
var inst_30979__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_30980 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30981 = [inst_30974,inst_30979__$1];
var inst_30982 = (new cljs.core.PersistentVector(null,2,(5),inst_30980,inst_30981,null));
var state_30993__$1 = (function (){var statearr_31000 = state_30993;
(statearr_31000[(8)] = inst_30979__$1);

return statearr_31000;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30993__$1,(8),jobs,inst_30982);
} else {
if((state_val_30994 === (7))){
var inst_30989 = (state_30993[(2)]);
var state_30993__$1 = state_30993;
var statearr_31001_31108 = state_30993__$1;
(statearr_31001_31108[(2)] = inst_30989);

(statearr_31001_31108[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_30994 === (8))){
var inst_30979 = (state_30993[(8)]);
var inst_30984 = (state_30993[(2)]);
var state_30993__$1 = (function (){var statearr_31002 = state_30993;
(statearr_31002[(9)] = inst_30984);

return statearr_31002;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30993__$1,(9),results,inst_30979);
} else {
if((state_val_30994 === (9))){
var inst_30986 = (state_30993[(2)]);
var state_30993__$1 = (function (){var statearr_31003 = state_30993;
(statearr_31003[(10)] = inst_30986);

return statearr_31003;
})();
var statearr_31004_31109 = state_30993__$1;
(statearr_31004_31109[(2)] = null);

(statearr_31004_31109[(1)] = (2));


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
});})(c__30752__auto___31103,jobs,results,process,async))
;
return ((function (switch__30652__auto__,c__30752__auto___31103,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0 = (function (){
var statearr_31005 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__);

(statearr_31005[(1)] = (1));

return statearr_31005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1 = (function (state_30993){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_30993);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31006){if((e31006 instanceof Object)){
var ex__30656__auto__ = e31006;
var statearr_31007_31110 = state_30993;
(statearr_31007_31110[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30993);

return cljs.core.cst$kw$recur;
} else {
throw e31006;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31111 = state_30993;
state_30993 = G__31111;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = function(state_30993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1.call(this,state_30993);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___31103,jobs,results,process,async))
})();
var state__30754__auto__ = (function (){var statearr_31008 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31008[(6)] = c__30752__auto___31103);

return statearr_31008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___31103,jobs,results,process,async))
);


var c__30752__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto__,jobs,results,process,async){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto__,jobs,results,process,async){
return (function (state_31046){
var state_val_31047 = (state_31046[(1)]);
if((state_val_31047 === (7))){
var inst_31042 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
var statearr_31048_31112 = state_31046__$1;
(statearr_31048_31112[(2)] = inst_31042);

(statearr_31048_31112[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (20))){
var state_31046__$1 = state_31046;
var statearr_31049_31113 = state_31046__$1;
(statearr_31049_31113[(2)] = null);

(statearr_31049_31113[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (1))){
var state_31046__$1 = state_31046;
var statearr_31050_31114 = state_31046__$1;
(statearr_31050_31114[(2)] = null);

(statearr_31050_31114[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (4))){
var inst_31011 = (state_31046[(7)]);
var inst_31011__$1 = (state_31046[(2)]);
var inst_31012 = (inst_31011__$1 == null);
var state_31046__$1 = (function (){var statearr_31051 = state_31046;
(statearr_31051[(7)] = inst_31011__$1);

return statearr_31051;
})();
if(cljs.core.truth_(inst_31012)){
var statearr_31052_31115 = state_31046__$1;
(statearr_31052_31115[(1)] = (5));

} else {
var statearr_31053_31116 = state_31046__$1;
(statearr_31053_31116[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (15))){
var inst_31024 = (state_31046[(8)]);
var state_31046__$1 = state_31046;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31046__$1,(18),to,inst_31024);
} else {
if((state_val_31047 === (21))){
var inst_31037 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
var statearr_31054_31117 = state_31046__$1;
(statearr_31054_31117[(2)] = inst_31037);

(statearr_31054_31117[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (13))){
var inst_31039 = (state_31046[(2)]);
var state_31046__$1 = (function (){var statearr_31055 = state_31046;
(statearr_31055[(9)] = inst_31039);

return statearr_31055;
})();
var statearr_31056_31118 = state_31046__$1;
(statearr_31056_31118[(2)] = null);

(statearr_31056_31118[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (6))){
var inst_31011 = (state_31046[(7)]);
var state_31046__$1 = state_31046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31046__$1,(11),inst_31011);
} else {
if((state_val_31047 === (17))){
var inst_31032 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
if(cljs.core.truth_(inst_31032)){
var statearr_31057_31119 = state_31046__$1;
(statearr_31057_31119[(1)] = (19));

} else {
var statearr_31058_31120 = state_31046__$1;
(statearr_31058_31120[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (3))){
var inst_31044 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31046__$1,inst_31044);
} else {
if((state_val_31047 === (12))){
var inst_31021 = (state_31046[(10)]);
var state_31046__$1 = state_31046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31046__$1,(14),inst_31021);
} else {
if((state_val_31047 === (2))){
var state_31046__$1 = state_31046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31046__$1,(4),results);
} else {
if((state_val_31047 === (19))){
var state_31046__$1 = state_31046;
var statearr_31059_31121 = state_31046__$1;
(statearr_31059_31121[(2)] = null);

(statearr_31059_31121[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (11))){
var inst_31021 = (state_31046[(2)]);
var state_31046__$1 = (function (){var statearr_31060 = state_31046;
(statearr_31060[(10)] = inst_31021);

return statearr_31060;
})();
var statearr_31061_31122 = state_31046__$1;
(statearr_31061_31122[(2)] = null);

(statearr_31061_31122[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (9))){
var state_31046__$1 = state_31046;
var statearr_31062_31123 = state_31046__$1;
(statearr_31062_31123[(2)] = null);

(statearr_31062_31123[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (5))){
var state_31046__$1 = state_31046;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31063_31124 = state_31046__$1;
(statearr_31063_31124[(1)] = (8));

} else {
var statearr_31064_31125 = state_31046__$1;
(statearr_31064_31125[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (14))){
var inst_31024 = (state_31046[(8)]);
var inst_31026 = (state_31046[(11)]);
var inst_31024__$1 = (state_31046[(2)]);
var inst_31025 = (inst_31024__$1 == null);
var inst_31026__$1 = cljs.core.not(inst_31025);
var state_31046__$1 = (function (){var statearr_31065 = state_31046;
(statearr_31065[(8)] = inst_31024__$1);

(statearr_31065[(11)] = inst_31026__$1);

return statearr_31065;
})();
if(inst_31026__$1){
var statearr_31066_31126 = state_31046__$1;
(statearr_31066_31126[(1)] = (15));

} else {
var statearr_31067_31127 = state_31046__$1;
(statearr_31067_31127[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (16))){
var inst_31026 = (state_31046[(11)]);
var state_31046__$1 = state_31046;
var statearr_31068_31128 = state_31046__$1;
(statearr_31068_31128[(2)] = inst_31026);

(statearr_31068_31128[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (10))){
var inst_31018 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
var statearr_31069_31129 = state_31046__$1;
(statearr_31069_31129[(2)] = inst_31018);

(statearr_31069_31129[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (18))){
var inst_31029 = (state_31046[(2)]);
var state_31046__$1 = state_31046;
var statearr_31070_31130 = state_31046__$1;
(statearr_31070_31130[(2)] = inst_31029);

(statearr_31070_31130[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31047 === (8))){
var inst_31015 = cljs.core.async.close_BANG_(to);
var state_31046__$1 = state_31046;
var statearr_31071_31131 = state_31046__$1;
(statearr_31071_31131[(2)] = inst_31015);

(statearr_31071_31131[(1)] = (10));


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
});})(c__30752__auto__,jobs,results,process,async))
;
return ((function (switch__30652__auto__,c__30752__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0 = (function (){
var statearr_31072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__);

(statearr_31072[(1)] = (1));

return statearr_31072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1 = (function (state_31046){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31046);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31073){if((e31073 instanceof Object)){
var ex__30656__auto__ = e31073;
var statearr_31074_31132 = state_31046;
(statearr_31074_31132[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31046);

return cljs.core.cst$kw$recur;
} else {
throw e31073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31133 = state_31046;
state_31046 = G__31133;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__ = function(state_31046){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1.call(this,state_31046);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30653__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto__,jobs,results,process,async))
})();
var state__30754__auto__ = (function (){var statearr_31075 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31075[(6)] = c__30752__auto__);

return statearr_31075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto__,jobs,results,process,async))
);

return c__30752__auto__;
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
var G__31135 = arguments.length;
switch (G__31135) {
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
var G__31138 = arguments.length;
switch (G__31138) {
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
var G__31141 = arguments.length;
switch (G__31141) {
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
var c__30752__auto___31190 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___31190,tc,fc){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___31190,tc,fc){
return (function (state_31167){
var state_val_31168 = (state_31167[(1)]);
if((state_val_31168 === (7))){
var inst_31163 = (state_31167[(2)]);
var state_31167__$1 = state_31167;
var statearr_31169_31191 = state_31167__$1;
(statearr_31169_31191[(2)] = inst_31163);

(statearr_31169_31191[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (1))){
var state_31167__$1 = state_31167;
var statearr_31170_31192 = state_31167__$1;
(statearr_31170_31192[(2)] = null);

(statearr_31170_31192[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (4))){
var inst_31144 = (state_31167[(7)]);
var inst_31144__$1 = (state_31167[(2)]);
var inst_31145 = (inst_31144__$1 == null);
var state_31167__$1 = (function (){var statearr_31171 = state_31167;
(statearr_31171[(7)] = inst_31144__$1);

return statearr_31171;
})();
if(cljs.core.truth_(inst_31145)){
var statearr_31172_31193 = state_31167__$1;
(statearr_31172_31193[(1)] = (5));

} else {
var statearr_31173_31194 = state_31167__$1;
(statearr_31173_31194[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (13))){
var state_31167__$1 = state_31167;
var statearr_31174_31195 = state_31167__$1;
(statearr_31174_31195[(2)] = null);

(statearr_31174_31195[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (6))){
var inst_31144 = (state_31167[(7)]);
var inst_31150 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31144) : p.call(null,inst_31144));
var state_31167__$1 = state_31167;
if(cljs.core.truth_(inst_31150)){
var statearr_31175_31196 = state_31167__$1;
(statearr_31175_31196[(1)] = (9));

} else {
var statearr_31176_31197 = state_31167__$1;
(statearr_31176_31197[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (3))){
var inst_31165 = (state_31167[(2)]);
var state_31167__$1 = state_31167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31167__$1,inst_31165);
} else {
if((state_val_31168 === (12))){
var state_31167__$1 = state_31167;
var statearr_31177_31198 = state_31167__$1;
(statearr_31177_31198[(2)] = null);

(statearr_31177_31198[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (2))){
var state_31167__$1 = state_31167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31167__$1,(4),ch);
} else {
if((state_val_31168 === (11))){
var inst_31144 = (state_31167[(7)]);
var inst_31154 = (state_31167[(2)]);
var state_31167__$1 = state_31167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31167__$1,(8),inst_31154,inst_31144);
} else {
if((state_val_31168 === (9))){
var state_31167__$1 = state_31167;
var statearr_31178_31199 = state_31167__$1;
(statearr_31178_31199[(2)] = tc);

(statearr_31178_31199[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (5))){
var inst_31147 = cljs.core.async.close_BANG_(tc);
var inst_31148 = cljs.core.async.close_BANG_(fc);
var state_31167__$1 = (function (){var statearr_31179 = state_31167;
(statearr_31179[(8)] = inst_31147);

return statearr_31179;
})();
var statearr_31180_31200 = state_31167__$1;
(statearr_31180_31200[(2)] = inst_31148);

(statearr_31180_31200[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (14))){
var inst_31161 = (state_31167[(2)]);
var state_31167__$1 = state_31167;
var statearr_31181_31201 = state_31167__$1;
(statearr_31181_31201[(2)] = inst_31161);

(statearr_31181_31201[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (10))){
var state_31167__$1 = state_31167;
var statearr_31182_31202 = state_31167__$1;
(statearr_31182_31202[(2)] = fc);

(statearr_31182_31202[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31168 === (8))){
var inst_31156 = (state_31167[(2)]);
var state_31167__$1 = state_31167;
if(cljs.core.truth_(inst_31156)){
var statearr_31183_31203 = state_31167__$1;
(statearr_31183_31203[(1)] = (12));

} else {
var statearr_31184_31204 = state_31167__$1;
(statearr_31184_31204[(1)] = (13));

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
});})(c__30752__auto___31190,tc,fc))
;
return ((function (switch__30652__auto__,c__30752__auto___31190,tc,fc){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_31185 = [null,null,null,null,null,null,null,null,null];
(statearr_31185[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_31185[(1)] = (1));

return statearr_31185;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_31167){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31167);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31186){if((e31186 instanceof Object)){
var ex__30656__auto__ = e31186;
var statearr_31187_31205 = state_31167;
(statearr_31187_31205[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31167);

return cljs.core.cst$kw$recur;
} else {
throw e31186;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31206 = state_31167;
state_31167 = G__31206;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_31167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_31167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___31190,tc,fc))
})();
var state__30754__auto__ = (function (){var statearr_31188 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31188[(6)] = c__30752__auto___31190);

return statearr_31188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___31190,tc,fc))
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
var c__30752__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto__){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto__){
return (function (state_31227){
var state_val_31228 = (state_31227[(1)]);
if((state_val_31228 === (7))){
var inst_31223 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
var statearr_31229_31247 = state_31227__$1;
(statearr_31229_31247[(2)] = inst_31223);

(statearr_31229_31247[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (1))){
var inst_31207 = init;
var state_31227__$1 = (function (){var statearr_31230 = state_31227;
(statearr_31230[(7)] = inst_31207);

return statearr_31230;
})();
var statearr_31231_31248 = state_31227__$1;
(statearr_31231_31248[(2)] = null);

(statearr_31231_31248[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (4))){
var inst_31210 = (state_31227[(8)]);
var inst_31210__$1 = (state_31227[(2)]);
var inst_31211 = (inst_31210__$1 == null);
var state_31227__$1 = (function (){var statearr_31232 = state_31227;
(statearr_31232[(8)] = inst_31210__$1);

return statearr_31232;
})();
if(cljs.core.truth_(inst_31211)){
var statearr_31233_31249 = state_31227__$1;
(statearr_31233_31249[(1)] = (5));

} else {
var statearr_31234_31250 = state_31227__$1;
(statearr_31234_31250[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (6))){
var inst_31207 = (state_31227[(7)]);
var inst_31214 = (state_31227[(9)]);
var inst_31210 = (state_31227[(8)]);
var inst_31214__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31207,inst_31210) : f.call(null,inst_31207,inst_31210));
var inst_31215 = cljs.core.reduced_QMARK_(inst_31214__$1);
var state_31227__$1 = (function (){var statearr_31235 = state_31227;
(statearr_31235[(9)] = inst_31214__$1);

return statearr_31235;
})();
if(inst_31215){
var statearr_31236_31251 = state_31227__$1;
(statearr_31236_31251[(1)] = (8));

} else {
var statearr_31237_31252 = state_31227__$1;
(statearr_31237_31252[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (3))){
var inst_31225 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31227__$1,inst_31225);
} else {
if((state_val_31228 === (2))){
var state_31227__$1 = state_31227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31227__$1,(4),ch);
} else {
if((state_val_31228 === (9))){
var inst_31214 = (state_31227[(9)]);
var inst_31207 = inst_31214;
var state_31227__$1 = (function (){var statearr_31238 = state_31227;
(statearr_31238[(7)] = inst_31207);

return statearr_31238;
})();
var statearr_31239_31253 = state_31227__$1;
(statearr_31239_31253[(2)] = null);

(statearr_31239_31253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (5))){
var inst_31207 = (state_31227[(7)]);
var state_31227__$1 = state_31227;
var statearr_31240_31254 = state_31227__$1;
(statearr_31240_31254[(2)] = inst_31207);

(statearr_31240_31254[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (10))){
var inst_31221 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
var statearr_31241_31255 = state_31227__$1;
(statearr_31241_31255[(2)] = inst_31221);

(statearr_31241_31255[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (8))){
var inst_31214 = (state_31227[(9)]);
var inst_31217 = cljs.core.deref(inst_31214);
var state_31227__$1 = state_31227;
var statearr_31242_31256 = state_31227__$1;
(statearr_31242_31256[(2)] = inst_31217);

(statearr_31242_31256[(1)] = (10));


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
});})(c__30752__auto__))
;
return ((function (switch__30652__auto__,c__30752__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30653__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30653__auto____0 = (function (){
var statearr_31243 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31243[(0)] = cljs$core$async$reduce_$_state_machine__30653__auto__);

(statearr_31243[(1)] = (1));

return statearr_31243;
});
var cljs$core$async$reduce_$_state_machine__30653__auto____1 = (function (state_31227){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31227);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31244){if((e31244 instanceof Object)){
var ex__30656__auto__ = e31244;
var statearr_31245_31257 = state_31227;
(statearr_31245_31257[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31227);

return cljs.core.cst$kw$recur;
} else {
throw e31244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31258 = state_31227;
state_31227 = G__31258;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30653__auto__ = function(state_31227){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30653__auto____1.call(this,state_31227);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30653__auto____0;
cljs$core$async$reduce_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30653__auto____1;
return cljs$core$async$reduce_$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto__))
})();
var state__30754__auto__ = (function (){var statearr_31246 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31246[(6)] = c__30752__auto__);

return statearr_31246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto__))
);

return c__30752__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30752__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto__,f__$1){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto__,f__$1){
return (function (state_31264){
var state_val_31265 = (state_31264[(1)]);
if((state_val_31265 === (1))){
var inst_31259 = cljs.core.async.reduce(f__$1,init,ch);
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31264__$1,(2),inst_31259);
} else {
if((state_val_31265 === (2))){
var inst_31261 = (state_31264[(2)]);
var inst_31262 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31261) : f__$1.call(null,inst_31261));
var state_31264__$1 = state_31264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31264__$1,inst_31262);
} else {
return null;
}
}
});})(c__30752__auto__,f__$1))
;
return ((function (switch__30652__auto__,c__30752__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30653__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30653__auto____0 = (function (){
var statearr_31266 = [null,null,null,null,null,null,null];
(statearr_31266[(0)] = cljs$core$async$transduce_$_state_machine__30653__auto__);

(statearr_31266[(1)] = (1));

return statearr_31266;
});
var cljs$core$async$transduce_$_state_machine__30653__auto____1 = (function (state_31264){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31264);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object)){
var ex__30656__auto__ = e31267;
var statearr_31268_31270 = state_31264;
(statearr_31268_31270[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31264);

return cljs.core.cst$kw$recur;
} else {
throw e31267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31271 = state_31264;
state_31264 = G__31271;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30653__auto__ = function(state_31264){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30653__auto____1.call(this,state_31264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30653__auto____0;
cljs$core$async$transduce_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30653__auto____1;
return cljs$core$async$transduce_$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto__,f__$1))
})();
var state__30754__auto__ = (function (){var statearr_31269 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31269[(6)] = c__30752__auto__);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto__,f__$1))
);

return c__30752__auto__;
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
var G__31273 = arguments.length;
switch (G__31273) {
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
var c__30752__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto__){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto__){
return (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (7))){
var inst_31280 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31300_31321 = state_31298__$1;
(statearr_31300_31321[(2)] = inst_31280);

(statearr_31300_31321[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (1))){
var inst_31274 = cljs.core.seq(coll);
var inst_31275 = inst_31274;
var state_31298__$1 = (function (){var statearr_31301 = state_31298;
(statearr_31301[(7)] = inst_31275);

return statearr_31301;
})();
var statearr_31302_31322 = state_31298__$1;
(statearr_31302_31322[(2)] = null);

(statearr_31302_31322[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (4))){
var inst_31275 = (state_31298[(7)]);
var inst_31278 = cljs.core.first(inst_31275);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31298__$1,(7),ch,inst_31278);
} else {
if((state_val_31299 === (13))){
var inst_31292 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31303_31323 = state_31298__$1;
(statearr_31303_31323[(2)] = inst_31292);

(statearr_31303_31323[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (6))){
var inst_31283 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31283)){
var statearr_31304_31324 = state_31298__$1;
(statearr_31304_31324[(1)] = (8));

} else {
var statearr_31305_31325 = state_31298__$1;
(statearr_31305_31325[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (12))){
var state_31298__$1 = state_31298;
var statearr_31306_31326 = state_31298__$1;
(statearr_31306_31326[(2)] = null);

(statearr_31306_31326[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (2))){
var inst_31275 = (state_31298[(7)]);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31275)){
var statearr_31307_31327 = state_31298__$1;
(statearr_31307_31327[(1)] = (4));

} else {
var statearr_31308_31328 = state_31298__$1;
(statearr_31308_31328[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (11))){
var inst_31289 = cljs.core.async.close_BANG_(ch);
var state_31298__$1 = state_31298;
var statearr_31309_31329 = state_31298__$1;
(statearr_31309_31329[(2)] = inst_31289);

(statearr_31309_31329[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (9))){
var state_31298__$1 = state_31298;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31310_31330 = state_31298__$1;
(statearr_31310_31330[(1)] = (11));

} else {
var statearr_31311_31331 = state_31298__$1;
(statearr_31311_31331[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (5))){
var inst_31275 = (state_31298[(7)]);
var state_31298__$1 = state_31298;
var statearr_31312_31332 = state_31298__$1;
(statearr_31312_31332[(2)] = inst_31275);

(statearr_31312_31332[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (10))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31313_31333 = state_31298__$1;
(statearr_31313_31333[(2)] = inst_31294);

(statearr_31313_31333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (8))){
var inst_31275 = (state_31298[(7)]);
var inst_31285 = cljs.core.next(inst_31275);
var inst_31275__$1 = inst_31285;
var state_31298__$1 = (function (){var statearr_31314 = state_31298;
(statearr_31314[(7)] = inst_31275__$1);

return statearr_31314;
})();
var statearr_31315_31334 = state_31298__$1;
(statearr_31315_31334[(2)] = null);

(statearr_31315_31334[(1)] = (2));


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
});})(c__30752__auto__))
;
return ((function (switch__30652__auto__,c__30752__auto__){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_31316 = [null,null,null,null,null,null,null,null];
(statearr_31316[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_31316[(1)] = (1));

return statearr_31316;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_31298){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31298);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31317){if((e31317 instanceof Object)){
var ex__30656__auto__ = e31317;
var statearr_31318_31335 = state_31298;
(statearr_31318_31335[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31298);

return cljs.core.cst$kw$recur;
} else {
throw e31317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31336 = state_31298;
state_31298 = G__31336;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto__))
})();
var state__30754__auto__ = (function (){var statearr_31319 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31319[(6)] = c__30752__auto__);

return statearr_31319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto__))
);

return c__30752__auto__;
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
var x__22224__auto__ = (((_ == null))?null:_);
var m__22225__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__22225__auto__.call(null,_));
} else {
var m__22225__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__22225__auto____$1.call(null,_));
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__22225__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__22225__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__22225__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22225__auto__.call(null,m,ch));
} else {
var m__22225__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22225__auto____$1.call(null,m,ch));
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__22225__auto__.call(null,m));
} else {
var m__22225__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__22225__auto____$1.call(null,m));
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
if(typeof cljs.core.async.t_cljs$core$async31337 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31337 = (function (ch,cs,meta31338){
this.ch = ch;
this.cs = cs;
this.meta31338 = meta31338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31339,meta31338__$1){
var self__ = this;
var _31339__$1 = this;
return (new cljs.core.async.t_cljs$core$async31337(self__.ch,self__.cs,meta31338__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31339){
var self__ = this;
var _31339__$1 = this;
return self__.meta31338;
});})(cs))
;

cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31337.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31337.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta31338], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31337";

cljs.core.async.t_cljs$core$async31337.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async31337");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31337 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31337(ch__$1,cs__$1,meta31338){
return (new cljs.core.async.t_cljs$core$async31337(ch__$1,cs__$1,meta31338));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31337(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30752__auto___31559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___31559,cs,m,dchan,dctr,done){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___31559,cs,m,dchan,dctr,done){
return (function (state_31474){
var state_val_31475 = (state_31474[(1)]);
if((state_val_31475 === (7))){
var inst_31470 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31476_31560 = state_31474__$1;
(statearr_31476_31560[(2)] = inst_31470);

(statearr_31476_31560[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (20))){
var inst_31373 = (state_31474[(7)]);
var inst_31385 = cljs.core.first(inst_31373);
var inst_31386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31385,(0),null);
var inst_31387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31385,(1),null);
var state_31474__$1 = (function (){var statearr_31477 = state_31474;
(statearr_31477[(8)] = inst_31386);

return statearr_31477;
})();
if(cljs.core.truth_(inst_31387)){
var statearr_31478_31561 = state_31474__$1;
(statearr_31478_31561[(1)] = (22));

} else {
var statearr_31479_31562 = state_31474__$1;
(statearr_31479_31562[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (27))){
var inst_31422 = (state_31474[(9)]);
var inst_31417 = (state_31474[(10)]);
var inst_31342 = (state_31474[(11)]);
var inst_31415 = (state_31474[(12)]);
var inst_31422__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31415,inst_31417);
var inst_31423 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31422__$1,inst_31342,done);
var state_31474__$1 = (function (){var statearr_31480 = state_31474;
(statearr_31480[(9)] = inst_31422__$1);

return statearr_31480;
})();
if(cljs.core.truth_(inst_31423)){
var statearr_31481_31563 = state_31474__$1;
(statearr_31481_31563[(1)] = (30));

} else {
var statearr_31482_31564 = state_31474__$1;
(statearr_31482_31564[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (1))){
var state_31474__$1 = state_31474;
var statearr_31483_31565 = state_31474__$1;
(statearr_31483_31565[(2)] = null);

(statearr_31483_31565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (24))){
var inst_31373 = (state_31474[(7)]);
var inst_31392 = (state_31474[(2)]);
var inst_31393 = cljs.core.next(inst_31373);
var inst_31351 = inst_31393;
var inst_31352 = null;
var inst_31353 = (0);
var inst_31354 = (0);
var state_31474__$1 = (function (){var statearr_31484 = state_31474;
(statearr_31484[(13)] = inst_31352);

(statearr_31484[(14)] = inst_31353);

(statearr_31484[(15)] = inst_31392);

(statearr_31484[(16)] = inst_31354);

(statearr_31484[(17)] = inst_31351);

return statearr_31484;
})();
var statearr_31485_31566 = state_31474__$1;
(statearr_31485_31566[(2)] = null);

(statearr_31485_31566[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (39))){
var state_31474__$1 = state_31474;
var statearr_31489_31567 = state_31474__$1;
(statearr_31489_31567[(2)] = null);

(statearr_31489_31567[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (4))){
var inst_31342 = (state_31474[(11)]);
var inst_31342__$1 = (state_31474[(2)]);
var inst_31343 = (inst_31342__$1 == null);
var state_31474__$1 = (function (){var statearr_31490 = state_31474;
(statearr_31490[(11)] = inst_31342__$1);

return statearr_31490;
})();
if(cljs.core.truth_(inst_31343)){
var statearr_31491_31568 = state_31474__$1;
(statearr_31491_31568[(1)] = (5));

} else {
var statearr_31492_31569 = state_31474__$1;
(statearr_31492_31569[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (15))){
var inst_31352 = (state_31474[(13)]);
var inst_31353 = (state_31474[(14)]);
var inst_31354 = (state_31474[(16)]);
var inst_31351 = (state_31474[(17)]);
var inst_31369 = (state_31474[(2)]);
var inst_31370 = (inst_31354 + (1));
var tmp31486 = inst_31352;
var tmp31487 = inst_31353;
var tmp31488 = inst_31351;
var inst_31351__$1 = tmp31488;
var inst_31352__$1 = tmp31486;
var inst_31353__$1 = tmp31487;
var inst_31354__$1 = inst_31370;
var state_31474__$1 = (function (){var statearr_31493 = state_31474;
(statearr_31493[(13)] = inst_31352__$1);

(statearr_31493[(14)] = inst_31353__$1);

(statearr_31493[(16)] = inst_31354__$1);

(statearr_31493[(18)] = inst_31369);

(statearr_31493[(17)] = inst_31351__$1);

return statearr_31493;
})();
var statearr_31494_31570 = state_31474__$1;
(statearr_31494_31570[(2)] = null);

(statearr_31494_31570[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (21))){
var inst_31396 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31498_31571 = state_31474__$1;
(statearr_31498_31571[(2)] = inst_31396);

(statearr_31498_31571[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (31))){
var inst_31422 = (state_31474[(9)]);
var inst_31426 = done(null);
var inst_31427 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31422);
var state_31474__$1 = (function (){var statearr_31499 = state_31474;
(statearr_31499[(19)] = inst_31426);

return statearr_31499;
})();
var statearr_31500_31572 = state_31474__$1;
(statearr_31500_31572[(2)] = inst_31427);

(statearr_31500_31572[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (32))){
var inst_31414 = (state_31474[(20)]);
var inst_31417 = (state_31474[(10)]);
var inst_31416 = (state_31474[(21)]);
var inst_31415 = (state_31474[(12)]);
var inst_31429 = (state_31474[(2)]);
var inst_31430 = (inst_31417 + (1));
var tmp31495 = inst_31414;
var tmp31496 = inst_31416;
var tmp31497 = inst_31415;
var inst_31414__$1 = tmp31495;
var inst_31415__$1 = tmp31497;
var inst_31416__$1 = tmp31496;
var inst_31417__$1 = inst_31430;
var state_31474__$1 = (function (){var statearr_31501 = state_31474;
(statearr_31501[(22)] = inst_31429);

(statearr_31501[(20)] = inst_31414__$1);

(statearr_31501[(10)] = inst_31417__$1);

(statearr_31501[(21)] = inst_31416__$1);

(statearr_31501[(12)] = inst_31415__$1);

return statearr_31501;
})();
var statearr_31502_31573 = state_31474__$1;
(statearr_31502_31573[(2)] = null);

(statearr_31502_31573[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (40))){
var inst_31442 = (state_31474[(23)]);
var inst_31446 = done(null);
var inst_31447 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31442);
var state_31474__$1 = (function (){var statearr_31503 = state_31474;
(statearr_31503[(24)] = inst_31446);

return statearr_31503;
})();
var statearr_31504_31574 = state_31474__$1;
(statearr_31504_31574[(2)] = inst_31447);

(statearr_31504_31574[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (33))){
var inst_31433 = (state_31474[(25)]);
var inst_31435 = cljs.core.chunked_seq_QMARK_(inst_31433);
var state_31474__$1 = state_31474;
if(inst_31435){
var statearr_31505_31575 = state_31474__$1;
(statearr_31505_31575[(1)] = (36));

} else {
var statearr_31506_31576 = state_31474__$1;
(statearr_31506_31576[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (13))){
var inst_31363 = (state_31474[(26)]);
var inst_31366 = cljs.core.async.close_BANG_(inst_31363);
var state_31474__$1 = state_31474;
var statearr_31507_31577 = state_31474__$1;
(statearr_31507_31577[(2)] = inst_31366);

(statearr_31507_31577[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (22))){
var inst_31386 = (state_31474[(8)]);
var inst_31389 = cljs.core.async.close_BANG_(inst_31386);
var state_31474__$1 = state_31474;
var statearr_31508_31578 = state_31474__$1;
(statearr_31508_31578[(2)] = inst_31389);

(statearr_31508_31578[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (36))){
var inst_31433 = (state_31474[(25)]);
var inst_31437 = cljs.core.chunk_first(inst_31433);
var inst_31438 = cljs.core.chunk_rest(inst_31433);
var inst_31439 = cljs.core.count(inst_31437);
var inst_31414 = inst_31438;
var inst_31415 = inst_31437;
var inst_31416 = inst_31439;
var inst_31417 = (0);
var state_31474__$1 = (function (){var statearr_31509 = state_31474;
(statearr_31509[(20)] = inst_31414);

(statearr_31509[(10)] = inst_31417);

(statearr_31509[(21)] = inst_31416);

(statearr_31509[(12)] = inst_31415);

return statearr_31509;
})();
var statearr_31510_31579 = state_31474__$1;
(statearr_31510_31579[(2)] = null);

(statearr_31510_31579[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (41))){
var inst_31433 = (state_31474[(25)]);
var inst_31449 = (state_31474[(2)]);
var inst_31450 = cljs.core.next(inst_31433);
var inst_31414 = inst_31450;
var inst_31415 = null;
var inst_31416 = (0);
var inst_31417 = (0);
var state_31474__$1 = (function (){var statearr_31511 = state_31474;
(statearr_31511[(20)] = inst_31414);

(statearr_31511[(10)] = inst_31417);

(statearr_31511[(21)] = inst_31416);

(statearr_31511[(27)] = inst_31449);

(statearr_31511[(12)] = inst_31415);

return statearr_31511;
})();
var statearr_31512_31580 = state_31474__$1;
(statearr_31512_31580[(2)] = null);

(statearr_31512_31580[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (43))){
var state_31474__$1 = state_31474;
var statearr_31513_31581 = state_31474__$1;
(statearr_31513_31581[(2)] = null);

(statearr_31513_31581[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (29))){
var inst_31458 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31514_31582 = state_31474__$1;
(statearr_31514_31582[(2)] = inst_31458);

(statearr_31514_31582[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (44))){
var inst_31467 = (state_31474[(2)]);
var state_31474__$1 = (function (){var statearr_31515 = state_31474;
(statearr_31515[(28)] = inst_31467);

return statearr_31515;
})();
var statearr_31516_31583 = state_31474__$1;
(statearr_31516_31583[(2)] = null);

(statearr_31516_31583[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (6))){
var inst_31406 = (state_31474[(29)]);
var inst_31405 = cljs.core.deref(cs);
var inst_31406__$1 = cljs.core.keys(inst_31405);
var inst_31407 = cljs.core.count(inst_31406__$1);
var inst_31408 = cljs.core.reset_BANG_(dctr,inst_31407);
var inst_31413 = cljs.core.seq(inst_31406__$1);
var inst_31414 = inst_31413;
var inst_31415 = null;
var inst_31416 = (0);
var inst_31417 = (0);
var state_31474__$1 = (function (){var statearr_31517 = state_31474;
(statearr_31517[(30)] = inst_31408);

(statearr_31517[(20)] = inst_31414);

(statearr_31517[(10)] = inst_31417);

(statearr_31517[(29)] = inst_31406__$1);

(statearr_31517[(21)] = inst_31416);

(statearr_31517[(12)] = inst_31415);

return statearr_31517;
})();
var statearr_31518_31584 = state_31474__$1;
(statearr_31518_31584[(2)] = null);

(statearr_31518_31584[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (28))){
var inst_31414 = (state_31474[(20)]);
var inst_31433 = (state_31474[(25)]);
var inst_31433__$1 = cljs.core.seq(inst_31414);
var state_31474__$1 = (function (){var statearr_31519 = state_31474;
(statearr_31519[(25)] = inst_31433__$1);

return statearr_31519;
})();
if(inst_31433__$1){
var statearr_31520_31585 = state_31474__$1;
(statearr_31520_31585[(1)] = (33));

} else {
var statearr_31521_31586 = state_31474__$1;
(statearr_31521_31586[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (25))){
var inst_31417 = (state_31474[(10)]);
var inst_31416 = (state_31474[(21)]);
var inst_31419 = (inst_31417 < inst_31416);
var inst_31420 = inst_31419;
var state_31474__$1 = state_31474;
if(cljs.core.truth_(inst_31420)){
var statearr_31522_31587 = state_31474__$1;
(statearr_31522_31587[(1)] = (27));

} else {
var statearr_31523_31588 = state_31474__$1;
(statearr_31523_31588[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (34))){
var state_31474__$1 = state_31474;
var statearr_31524_31589 = state_31474__$1;
(statearr_31524_31589[(2)] = null);

(statearr_31524_31589[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (17))){
var state_31474__$1 = state_31474;
var statearr_31525_31590 = state_31474__$1;
(statearr_31525_31590[(2)] = null);

(statearr_31525_31590[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (3))){
var inst_31472 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31474__$1,inst_31472);
} else {
if((state_val_31475 === (12))){
var inst_31401 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31526_31591 = state_31474__$1;
(statearr_31526_31591[(2)] = inst_31401);

(statearr_31526_31591[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (2))){
var state_31474__$1 = state_31474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31474__$1,(4),ch);
} else {
if((state_val_31475 === (23))){
var state_31474__$1 = state_31474;
var statearr_31527_31592 = state_31474__$1;
(statearr_31527_31592[(2)] = null);

(statearr_31527_31592[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (35))){
var inst_31456 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31528_31593 = state_31474__$1;
(statearr_31528_31593[(2)] = inst_31456);

(statearr_31528_31593[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (19))){
var inst_31373 = (state_31474[(7)]);
var inst_31377 = cljs.core.chunk_first(inst_31373);
var inst_31378 = cljs.core.chunk_rest(inst_31373);
var inst_31379 = cljs.core.count(inst_31377);
var inst_31351 = inst_31378;
var inst_31352 = inst_31377;
var inst_31353 = inst_31379;
var inst_31354 = (0);
var state_31474__$1 = (function (){var statearr_31529 = state_31474;
(statearr_31529[(13)] = inst_31352);

(statearr_31529[(14)] = inst_31353);

(statearr_31529[(16)] = inst_31354);

(statearr_31529[(17)] = inst_31351);

return statearr_31529;
})();
var statearr_31530_31594 = state_31474__$1;
(statearr_31530_31594[(2)] = null);

(statearr_31530_31594[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (11))){
var inst_31373 = (state_31474[(7)]);
var inst_31351 = (state_31474[(17)]);
var inst_31373__$1 = cljs.core.seq(inst_31351);
var state_31474__$1 = (function (){var statearr_31531 = state_31474;
(statearr_31531[(7)] = inst_31373__$1);

return statearr_31531;
})();
if(inst_31373__$1){
var statearr_31532_31595 = state_31474__$1;
(statearr_31532_31595[(1)] = (16));

} else {
var statearr_31533_31596 = state_31474__$1;
(statearr_31533_31596[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (9))){
var inst_31403 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31534_31597 = state_31474__$1;
(statearr_31534_31597[(2)] = inst_31403);

(statearr_31534_31597[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (5))){
var inst_31349 = cljs.core.deref(cs);
var inst_31350 = cljs.core.seq(inst_31349);
var inst_31351 = inst_31350;
var inst_31352 = null;
var inst_31353 = (0);
var inst_31354 = (0);
var state_31474__$1 = (function (){var statearr_31535 = state_31474;
(statearr_31535[(13)] = inst_31352);

(statearr_31535[(14)] = inst_31353);

(statearr_31535[(16)] = inst_31354);

(statearr_31535[(17)] = inst_31351);

return statearr_31535;
})();
var statearr_31536_31598 = state_31474__$1;
(statearr_31536_31598[(2)] = null);

(statearr_31536_31598[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (14))){
var state_31474__$1 = state_31474;
var statearr_31537_31599 = state_31474__$1;
(statearr_31537_31599[(2)] = null);

(statearr_31537_31599[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (45))){
var inst_31464 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31538_31600 = state_31474__$1;
(statearr_31538_31600[(2)] = inst_31464);

(statearr_31538_31600[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (26))){
var inst_31406 = (state_31474[(29)]);
var inst_31460 = (state_31474[(2)]);
var inst_31461 = cljs.core.seq(inst_31406);
var state_31474__$1 = (function (){var statearr_31539 = state_31474;
(statearr_31539[(31)] = inst_31460);

return statearr_31539;
})();
if(inst_31461){
var statearr_31540_31601 = state_31474__$1;
(statearr_31540_31601[(1)] = (42));

} else {
var statearr_31541_31602 = state_31474__$1;
(statearr_31541_31602[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (16))){
var inst_31373 = (state_31474[(7)]);
var inst_31375 = cljs.core.chunked_seq_QMARK_(inst_31373);
var state_31474__$1 = state_31474;
if(inst_31375){
var statearr_31542_31603 = state_31474__$1;
(statearr_31542_31603[(1)] = (19));

} else {
var statearr_31543_31604 = state_31474__$1;
(statearr_31543_31604[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (38))){
var inst_31453 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31544_31605 = state_31474__$1;
(statearr_31544_31605[(2)] = inst_31453);

(statearr_31544_31605[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (30))){
var state_31474__$1 = state_31474;
var statearr_31545_31606 = state_31474__$1;
(statearr_31545_31606[(2)] = null);

(statearr_31545_31606[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (10))){
var inst_31352 = (state_31474[(13)]);
var inst_31354 = (state_31474[(16)]);
var inst_31362 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31352,inst_31354);
var inst_31363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31362,(0),null);
var inst_31364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31362,(1),null);
var state_31474__$1 = (function (){var statearr_31546 = state_31474;
(statearr_31546[(26)] = inst_31363);

return statearr_31546;
})();
if(cljs.core.truth_(inst_31364)){
var statearr_31547_31607 = state_31474__$1;
(statearr_31547_31607[(1)] = (13));

} else {
var statearr_31548_31608 = state_31474__$1;
(statearr_31548_31608[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (18))){
var inst_31399 = (state_31474[(2)]);
var state_31474__$1 = state_31474;
var statearr_31549_31609 = state_31474__$1;
(statearr_31549_31609[(2)] = inst_31399);

(statearr_31549_31609[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (42))){
var state_31474__$1 = state_31474;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31474__$1,(45),dchan);
} else {
if((state_val_31475 === (37))){
var inst_31433 = (state_31474[(25)]);
var inst_31342 = (state_31474[(11)]);
var inst_31442 = (state_31474[(23)]);
var inst_31442__$1 = cljs.core.first(inst_31433);
var inst_31443 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31442__$1,inst_31342,done);
var state_31474__$1 = (function (){var statearr_31550 = state_31474;
(statearr_31550[(23)] = inst_31442__$1);

return statearr_31550;
})();
if(cljs.core.truth_(inst_31443)){
var statearr_31551_31610 = state_31474__$1;
(statearr_31551_31610[(1)] = (39));

} else {
var statearr_31552_31611 = state_31474__$1;
(statearr_31552_31611[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31475 === (8))){
var inst_31353 = (state_31474[(14)]);
var inst_31354 = (state_31474[(16)]);
var inst_31356 = (inst_31354 < inst_31353);
var inst_31357 = inst_31356;
var state_31474__$1 = state_31474;
if(cljs.core.truth_(inst_31357)){
var statearr_31553_31612 = state_31474__$1;
(statearr_31553_31612[(1)] = (10));

} else {
var statearr_31554_31613 = state_31474__$1;
(statearr_31554_31613[(1)] = (11));

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
});})(c__30752__auto___31559,cs,m,dchan,dctr,done))
;
return ((function (switch__30652__auto__,c__30752__auto___31559,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30653__auto__ = null;
var cljs$core$async$mult_$_state_machine__30653__auto____0 = (function (){
var statearr_31555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31555[(0)] = cljs$core$async$mult_$_state_machine__30653__auto__);

(statearr_31555[(1)] = (1));

return statearr_31555;
});
var cljs$core$async$mult_$_state_machine__30653__auto____1 = (function (state_31474){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31474);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31556){if((e31556 instanceof Object)){
var ex__30656__auto__ = e31556;
var statearr_31557_31614 = state_31474;
(statearr_31557_31614[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31474);

return cljs.core.cst$kw$recur;
} else {
throw e31556;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31615 = state_31474;
state_31474 = G__31615;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30653__auto__ = function(state_31474){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30653__auto____1.call(this,state_31474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30653__auto____0;
cljs$core$async$mult_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30653__auto____1;
return cljs$core$async$mult_$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___31559,cs,m,dchan,dctr,done))
})();
var state__30754__auto__ = (function (){var statearr_31558 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31558[(6)] = c__30752__auto___31559);

return statearr_31558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___31559,cs,m,dchan,dctr,done))
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
var G__31617 = arguments.length;
switch (G__31617) {
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22225__auto__.call(null,m,ch));
} else {
var m__22225__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22225__auto____$1.call(null,m,ch));
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22225__auto__.call(null,m,ch));
} else {
var m__22225__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__22225__auto____$1.call(null,m,ch));
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__22225__auto__.call(null,m));
} else {
var m__22225__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__22225__auto____$1.call(null,m));
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__22225__auto__.call(null,m,state_map));
} else {
var m__22225__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__22225__auto____$1.call(null,m,state_map));
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
var x__22224__auto__ = (((m == null))?null:m);
var m__22225__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__22225__auto__.call(null,m,mode));
} else {
var m__22225__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__22225__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22712__auto__ = [];
var len__22705__auto___31629 = arguments.length;
var i__22706__auto___31630 = (0);
while(true){
if((i__22706__auto___31630 < len__22705__auto___31629)){
args__22712__auto__.push((arguments[i__22706__auto___31630]));

var G__31631 = (i__22706__auto___31630 + (1));
i__22706__auto___31630 = G__31631;
continue;
} else {
}
break;
}

var argseq__22713__auto__ = ((((3) < args__22712__auto__.length))?(new cljs.core.IndexedSeq(args__22712__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22713__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31623){
var map__31624 = p__31623;
var map__31624__$1 = ((((!((map__31624 == null)))?((((map__31624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31624.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31624):map__31624);
var opts = map__31624__$1;
var statearr_31626_31632 = state;
(statearr_31626_31632[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__31624,map__31624__$1,opts){
return (function (val){
var statearr_31627_31633 = state;
(statearr_31627_31633[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31624,map__31624__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31628_31634 = state;
(statearr_31628_31634[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31619){
var G__31620 = cljs.core.first(seq31619);
var seq31619__$1 = cljs.core.next(seq31619);
var G__31621 = cljs.core.first(seq31619__$1);
var seq31619__$2 = cljs.core.next(seq31619__$1);
var G__31622 = cljs.core.first(seq31619__$2);
var seq31619__$3 = cljs.core.next(seq31619__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31620,G__31621,G__31622,seq31619__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31635 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31635 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31636){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31636 = meta31636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31637,meta31636__$1){
var self__ = this;
var _31637__$1 = this;
return (new cljs.core.async.t_cljs$core$async31635(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31636__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31637){
var self__ = this;
var _31637__$1 = this;
return self__.meta31636;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31635.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta31636], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31635";

cljs.core.async.t_cljs$core$async31635.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async31635");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31635 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31635(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31636){
return (new cljs.core.async.t_cljs$core$async31635(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31636));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31635(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30752__auto___31799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___31799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___31799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (7))){
var inst_31654 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31741_31800 = state_31739__$1;
(statearr_31741_31800[(2)] = inst_31654);

(statearr_31741_31800[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (20))){
var inst_31666 = (state_31739[(7)]);
var state_31739__$1 = state_31739;
var statearr_31742_31801 = state_31739__$1;
(statearr_31742_31801[(2)] = inst_31666);

(statearr_31742_31801[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (27))){
var state_31739__$1 = state_31739;
var statearr_31743_31802 = state_31739__$1;
(statearr_31743_31802[(2)] = null);

(statearr_31743_31802[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (1))){
var inst_31641 = (state_31739[(8)]);
var inst_31641__$1 = calc_state();
var inst_31643 = (inst_31641__$1 == null);
var inst_31644 = cljs.core.not(inst_31643);
var state_31739__$1 = (function (){var statearr_31744 = state_31739;
(statearr_31744[(8)] = inst_31641__$1);

return statearr_31744;
})();
if(inst_31644){
var statearr_31745_31803 = state_31739__$1;
(statearr_31745_31803[(1)] = (2));

} else {
var statearr_31746_31804 = state_31739__$1;
(statearr_31746_31804[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (24))){
var inst_31699 = (state_31739[(9)]);
var inst_31690 = (state_31739[(10)]);
var inst_31713 = (state_31739[(11)]);
var inst_31713__$1 = (inst_31690.cljs$core$IFn$_invoke$arity$1 ? inst_31690.cljs$core$IFn$_invoke$arity$1(inst_31699) : inst_31690.call(null,inst_31699));
var state_31739__$1 = (function (){var statearr_31747 = state_31739;
(statearr_31747[(11)] = inst_31713__$1);

return statearr_31747;
})();
if(cljs.core.truth_(inst_31713__$1)){
var statearr_31748_31805 = state_31739__$1;
(statearr_31748_31805[(1)] = (29));

} else {
var statearr_31749_31806 = state_31739__$1;
(statearr_31749_31806[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (4))){
var inst_31657 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31657)){
var statearr_31750_31807 = state_31739__$1;
(statearr_31750_31807[(1)] = (8));

} else {
var statearr_31751_31808 = state_31739__$1;
(statearr_31751_31808[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (15))){
var inst_31684 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31684)){
var statearr_31752_31809 = state_31739__$1;
(statearr_31752_31809[(1)] = (19));

} else {
var statearr_31753_31810 = state_31739__$1;
(statearr_31753_31810[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (21))){
var inst_31689 = (state_31739[(12)]);
var inst_31689__$1 = (state_31739[(2)]);
var inst_31690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,cljs.core.cst$kw$solos);
var inst_31691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,cljs.core.cst$kw$mutes);
var inst_31692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31689__$1,cljs.core.cst$kw$reads);
var state_31739__$1 = (function (){var statearr_31754 = state_31739;
(statearr_31754[(10)] = inst_31690);

(statearr_31754[(13)] = inst_31691);

(statearr_31754[(12)] = inst_31689__$1);

return statearr_31754;
})();
return cljs.core.async.ioc_alts_BANG_(state_31739__$1,(22),inst_31692);
} else {
if((state_val_31740 === (31))){
var inst_31721 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31721)){
var statearr_31755_31811 = state_31739__$1;
(statearr_31755_31811[(1)] = (32));

} else {
var statearr_31756_31812 = state_31739__$1;
(statearr_31756_31812[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (32))){
var inst_31698 = (state_31739[(14)]);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31739__$1,(35),out,inst_31698);
} else {
if((state_val_31740 === (33))){
var inst_31689 = (state_31739[(12)]);
var inst_31666 = inst_31689;
var state_31739__$1 = (function (){var statearr_31757 = state_31739;
(statearr_31757[(7)] = inst_31666);

return statearr_31757;
})();
var statearr_31758_31813 = state_31739__$1;
(statearr_31758_31813[(2)] = null);

(statearr_31758_31813[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (13))){
var inst_31666 = (state_31739[(7)]);
var inst_31673 = inst_31666.cljs$lang$protocol_mask$partition0$;
var inst_31674 = (inst_31673 & (64));
var inst_31675 = inst_31666.cljs$core$ISeq$;
var inst_31676 = (cljs.core.PROTOCOL_SENTINEL === inst_31675);
var inst_31677 = (inst_31674) || (inst_31676);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31677)){
var statearr_31759_31814 = state_31739__$1;
(statearr_31759_31814[(1)] = (16));

} else {
var statearr_31760_31815 = state_31739__$1;
(statearr_31760_31815[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (22))){
var inst_31699 = (state_31739[(9)]);
var inst_31698 = (state_31739[(14)]);
var inst_31697 = (state_31739[(2)]);
var inst_31698__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31697,(0),null);
var inst_31699__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31697,(1),null);
var inst_31700 = (inst_31698__$1 == null);
var inst_31701 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31699__$1,change);
var inst_31702 = (inst_31700) || (inst_31701);
var state_31739__$1 = (function (){var statearr_31761 = state_31739;
(statearr_31761[(9)] = inst_31699__$1);

(statearr_31761[(14)] = inst_31698__$1);

return statearr_31761;
})();
if(cljs.core.truth_(inst_31702)){
var statearr_31762_31816 = state_31739__$1;
(statearr_31762_31816[(1)] = (23));

} else {
var statearr_31763_31817 = state_31739__$1;
(statearr_31763_31817[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (36))){
var inst_31689 = (state_31739[(12)]);
var inst_31666 = inst_31689;
var state_31739__$1 = (function (){var statearr_31764 = state_31739;
(statearr_31764[(7)] = inst_31666);

return statearr_31764;
})();
var statearr_31765_31818 = state_31739__$1;
(statearr_31765_31818[(2)] = null);

(statearr_31765_31818[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (29))){
var inst_31713 = (state_31739[(11)]);
var state_31739__$1 = state_31739;
var statearr_31766_31819 = state_31739__$1;
(statearr_31766_31819[(2)] = inst_31713);

(statearr_31766_31819[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (6))){
var state_31739__$1 = state_31739;
var statearr_31767_31820 = state_31739__$1;
(statearr_31767_31820[(2)] = false);

(statearr_31767_31820[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (28))){
var inst_31709 = (state_31739[(2)]);
var inst_31710 = calc_state();
var inst_31666 = inst_31710;
var state_31739__$1 = (function (){var statearr_31768 = state_31739;
(statearr_31768[(15)] = inst_31709);

(statearr_31768[(7)] = inst_31666);

return statearr_31768;
})();
var statearr_31769_31821 = state_31739__$1;
(statearr_31769_31821[(2)] = null);

(statearr_31769_31821[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (25))){
var inst_31735 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31770_31822 = state_31739__$1;
(statearr_31770_31822[(2)] = inst_31735);

(statearr_31770_31822[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (34))){
var inst_31733 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31771_31823 = state_31739__$1;
(statearr_31771_31823[(2)] = inst_31733);

(statearr_31771_31823[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (17))){
var state_31739__$1 = state_31739;
var statearr_31772_31824 = state_31739__$1;
(statearr_31772_31824[(2)] = false);

(statearr_31772_31824[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (3))){
var state_31739__$1 = state_31739;
var statearr_31773_31825 = state_31739__$1;
(statearr_31773_31825[(2)] = false);

(statearr_31773_31825[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (12))){
var inst_31737 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31739__$1,inst_31737);
} else {
if((state_val_31740 === (2))){
var inst_31641 = (state_31739[(8)]);
var inst_31646 = inst_31641.cljs$lang$protocol_mask$partition0$;
var inst_31647 = (inst_31646 & (64));
var inst_31648 = inst_31641.cljs$core$ISeq$;
var inst_31649 = (cljs.core.PROTOCOL_SENTINEL === inst_31648);
var inst_31650 = (inst_31647) || (inst_31649);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31650)){
var statearr_31774_31826 = state_31739__$1;
(statearr_31774_31826[(1)] = (5));

} else {
var statearr_31775_31827 = state_31739__$1;
(statearr_31775_31827[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (23))){
var inst_31698 = (state_31739[(14)]);
var inst_31704 = (inst_31698 == null);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31704)){
var statearr_31776_31828 = state_31739__$1;
(statearr_31776_31828[(1)] = (26));

} else {
var statearr_31777_31829 = state_31739__$1;
(statearr_31777_31829[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (35))){
var inst_31724 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
if(cljs.core.truth_(inst_31724)){
var statearr_31778_31830 = state_31739__$1;
(statearr_31778_31830[(1)] = (36));

} else {
var statearr_31779_31831 = state_31739__$1;
(statearr_31779_31831[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (19))){
var inst_31666 = (state_31739[(7)]);
var inst_31686 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31666);
var state_31739__$1 = state_31739;
var statearr_31780_31832 = state_31739__$1;
(statearr_31780_31832[(2)] = inst_31686);

(statearr_31780_31832[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (11))){
var inst_31666 = (state_31739[(7)]);
var inst_31670 = (inst_31666 == null);
var inst_31671 = cljs.core.not(inst_31670);
var state_31739__$1 = state_31739;
if(inst_31671){
var statearr_31781_31833 = state_31739__$1;
(statearr_31781_31833[(1)] = (13));

} else {
var statearr_31782_31834 = state_31739__$1;
(statearr_31782_31834[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (9))){
var inst_31641 = (state_31739[(8)]);
var state_31739__$1 = state_31739;
var statearr_31783_31835 = state_31739__$1;
(statearr_31783_31835[(2)] = inst_31641);

(statearr_31783_31835[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (5))){
var state_31739__$1 = state_31739;
var statearr_31784_31836 = state_31739__$1;
(statearr_31784_31836[(2)] = true);

(statearr_31784_31836[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (14))){
var state_31739__$1 = state_31739;
var statearr_31785_31837 = state_31739__$1;
(statearr_31785_31837[(2)] = false);

(statearr_31785_31837[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (26))){
var inst_31699 = (state_31739[(9)]);
var inst_31706 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31699);
var state_31739__$1 = state_31739;
var statearr_31786_31838 = state_31739__$1;
(statearr_31786_31838[(2)] = inst_31706);

(statearr_31786_31838[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (16))){
var state_31739__$1 = state_31739;
var statearr_31787_31839 = state_31739__$1;
(statearr_31787_31839[(2)] = true);

(statearr_31787_31839[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (38))){
var inst_31729 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31788_31840 = state_31739__$1;
(statearr_31788_31840[(2)] = inst_31729);

(statearr_31788_31840[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (30))){
var inst_31699 = (state_31739[(9)]);
var inst_31690 = (state_31739[(10)]);
var inst_31691 = (state_31739[(13)]);
var inst_31716 = cljs.core.empty_QMARK_(inst_31690);
var inst_31717 = (inst_31691.cljs$core$IFn$_invoke$arity$1 ? inst_31691.cljs$core$IFn$_invoke$arity$1(inst_31699) : inst_31691.call(null,inst_31699));
var inst_31718 = cljs.core.not(inst_31717);
var inst_31719 = (inst_31716) && (inst_31718);
var state_31739__$1 = state_31739;
var statearr_31789_31841 = state_31739__$1;
(statearr_31789_31841[(2)] = inst_31719);

(statearr_31789_31841[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (10))){
var inst_31641 = (state_31739[(8)]);
var inst_31662 = (state_31739[(2)]);
var inst_31663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31662,cljs.core.cst$kw$solos);
var inst_31664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31662,cljs.core.cst$kw$mutes);
var inst_31665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31662,cljs.core.cst$kw$reads);
var inst_31666 = inst_31641;
var state_31739__$1 = (function (){var statearr_31790 = state_31739;
(statearr_31790[(16)] = inst_31664);

(statearr_31790[(17)] = inst_31665);

(statearr_31790[(18)] = inst_31663);

(statearr_31790[(7)] = inst_31666);

return statearr_31790;
})();
var statearr_31791_31842 = state_31739__$1;
(statearr_31791_31842[(2)] = null);

(statearr_31791_31842[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (18))){
var inst_31681 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31792_31843 = state_31739__$1;
(statearr_31792_31843[(2)] = inst_31681);

(statearr_31792_31843[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (37))){
var state_31739__$1 = state_31739;
var statearr_31793_31844 = state_31739__$1;
(statearr_31793_31844[(2)] = null);

(statearr_31793_31844[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31740 === (8))){
var inst_31641 = (state_31739[(8)]);
var inst_31659 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31641);
var state_31739__$1 = state_31739;
var statearr_31794_31845 = state_31739__$1;
(statearr_31794_31845[(2)] = inst_31659);

(statearr_31794_31845[(1)] = (10));


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
});})(c__30752__auto___31799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30652__auto__,c__30752__auto___31799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30653__auto__ = null;
var cljs$core$async$mix_$_state_machine__30653__auto____0 = (function (){
var statearr_31795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31795[(0)] = cljs$core$async$mix_$_state_machine__30653__auto__);

(statearr_31795[(1)] = (1));

return statearr_31795;
});
var cljs$core$async$mix_$_state_machine__30653__auto____1 = (function (state_31739){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31739);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31796){if((e31796 instanceof Object)){
var ex__30656__auto__ = e31796;
var statearr_31797_31846 = state_31739;
(statearr_31797_31846[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31739);

return cljs.core.cst$kw$recur;
} else {
throw e31796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__31847 = state_31739;
state_31739 = G__31847;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30653__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30653__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30653__auto____0;
cljs$core$async$mix_$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30653__auto____1;
return cljs$core$async$mix_$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___31799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30754__auto__ = (function (){var statearr_31798 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31798[(6)] = c__30752__auto___31799);

return statearr_31798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___31799,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__22224__auto__ = (((p == null))?null:p);
var m__22225__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$4 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__22225__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__22225__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__22225__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__22224__auto__ = (((p == null))?null:p);
var m__22225__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$3 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__22225__auto__.call(null,p,v,ch));
} else {
var m__22225__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__22225__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__31849 = arguments.length;
switch (G__31849) {
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
var x__22224__auto__ = (((p == null))?null:p);
var m__22225__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__22225__auto__.call(null,p));
} else {
var m__22225__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__22225__auto____$1.call(null,p));
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
var x__22224__auto__ = (((p == null))?null:p);
var m__22225__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22224__auto__)]);
if(!((m__22225__auto__ == null))){
return (m__22225__auto__.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__22225__auto__.call(null,p,v));
} else {
var m__22225__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22225__auto____$1 == null))){
return (m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__22225__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__22225__auto____$1.call(null,p,v));
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
var G__31853 = arguments.length;
switch (G__31853) {
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
var or__21541__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__21541__auto__)){
return or__21541__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__21541__auto__,mults){
return (function (p1__31851_SHARP_){
if(cljs.core.truth_((p1__31851_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__31851_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__31851_SHARP_.call(null,topic)))){
return p1__31851_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31851_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__21541__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31854 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31854 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31855){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31855 = meta31855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31856,meta31855__$1){
var self__ = this;
var _31856__$1 = this;
return (new cljs.core.async.t_cljs$core$async31854(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31855__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31856){
var self__ = this;
var _31856__$1 = this;
return self__.meta31855;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31854.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta31855], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31854.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31854";

cljs.core.async.t_cljs$core$async31854.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async31854");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31854 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31854(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31855){
return (new cljs.core.async.t_cljs$core$async31854(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31855));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31854(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30752__auto___31974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___31974,mults,ensure_mult,p){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___31974,mults,ensure_mult,p){
return (function (state_31928){
var state_val_31929 = (state_31928[(1)]);
if((state_val_31929 === (7))){
var inst_31924 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31930_31975 = state_31928__$1;
(statearr_31930_31975[(2)] = inst_31924);

(statearr_31930_31975[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (20))){
var state_31928__$1 = state_31928;
var statearr_31931_31976 = state_31928__$1;
(statearr_31931_31976[(2)] = null);

(statearr_31931_31976[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (1))){
var state_31928__$1 = state_31928;
var statearr_31932_31977 = state_31928__$1;
(statearr_31932_31977[(2)] = null);

(statearr_31932_31977[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (24))){
var inst_31907 = (state_31928[(7)]);
var inst_31916 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_31907);
var state_31928__$1 = state_31928;
var statearr_31933_31978 = state_31928__$1;
(statearr_31933_31978[(2)] = inst_31916);

(statearr_31933_31978[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (4))){
var inst_31859 = (state_31928[(8)]);
var inst_31859__$1 = (state_31928[(2)]);
var inst_31860 = (inst_31859__$1 == null);
var state_31928__$1 = (function (){var statearr_31934 = state_31928;
(statearr_31934[(8)] = inst_31859__$1);

return statearr_31934;
})();
if(cljs.core.truth_(inst_31860)){
var statearr_31935_31979 = state_31928__$1;
(statearr_31935_31979[(1)] = (5));

} else {
var statearr_31936_31980 = state_31928__$1;
(statearr_31936_31980[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (15))){
var inst_31901 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31937_31981 = state_31928__$1;
(statearr_31937_31981[(2)] = inst_31901);

(statearr_31937_31981[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (21))){
var inst_31921 = (state_31928[(2)]);
var state_31928__$1 = (function (){var statearr_31938 = state_31928;
(statearr_31938[(9)] = inst_31921);

return statearr_31938;
})();
var statearr_31939_31982 = state_31928__$1;
(statearr_31939_31982[(2)] = null);

(statearr_31939_31982[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (13))){
var inst_31883 = (state_31928[(10)]);
var inst_31885 = cljs.core.chunked_seq_QMARK_(inst_31883);
var state_31928__$1 = state_31928;
if(inst_31885){
var statearr_31940_31983 = state_31928__$1;
(statearr_31940_31983[(1)] = (16));

} else {
var statearr_31941_31984 = state_31928__$1;
(statearr_31941_31984[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (22))){
var inst_31913 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
if(cljs.core.truth_(inst_31913)){
var statearr_31942_31985 = state_31928__$1;
(statearr_31942_31985[(1)] = (23));

} else {
var statearr_31943_31986 = state_31928__$1;
(statearr_31943_31986[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (6))){
var inst_31907 = (state_31928[(7)]);
var inst_31859 = (state_31928[(8)]);
var inst_31909 = (state_31928[(11)]);
var inst_31907__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_31859) : topic_fn.call(null,inst_31859));
var inst_31908 = cljs.core.deref(mults);
var inst_31909__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31908,inst_31907__$1);
var state_31928__$1 = (function (){var statearr_31944 = state_31928;
(statearr_31944[(7)] = inst_31907__$1);

(statearr_31944[(11)] = inst_31909__$1);

return statearr_31944;
})();
if(cljs.core.truth_(inst_31909__$1)){
var statearr_31945_31987 = state_31928__$1;
(statearr_31945_31987[(1)] = (19));

} else {
var statearr_31946_31988 = state_31928__$1;
(statearr_31946_31988[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (25))){
var inst_31918 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31947_31989 = state_31928__$1;
(statearr_31947_31989[(2)] = inst_31918);

(statearr_31947_31989[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (17))){
var inst_31883 = (state_31928[(10)]);
var inst_31892 = cljs.core.first(inst_31883);
var inst_31893 = cljs.core.async.muxch_STAR_(inst_31892);
var inst_31894 = cljs.core.async.close_BANG_(inst_31893);
var inst_31895 = cljs.core.next(inst_31883);
var inst_31869 = inst_31895;
var inst_31870 = null;
var inst_31871 = (0);
var inst_31872 = (0);
var state_31928__$1 = (function (){var statearr_31948 = state_31928;
(statearr_31948[(12)] = inst_31869);

(statearr_31948[(13)] = inst_31871);

(statearr_31948[(14)] = inst_31870);

(statearr_31948[(15)] = inst_31872);

(statearr_31948[(16)] = inst_31894);

return statearr_31948;
})();
var statearr_31949_31990 = state_31928__$1;
(statearr_31949_31990[(2)] = null);

(statearr_31949_31990[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (3))){
var inst_31926 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31928__$1,inst_31926);
} else {
if((state_val_31929 === (12))){
var inst_31903 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31950_31991 = state_31928__$1;
(statearr_31950_31991[(2)] = inst_31903);

(statearr_31950_31991[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (2))){
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31928__$1,(4),ch);
} else {
if((state_val_31929 === (23))){
var state_31928__$1 = state_31928;
var statearr_31951_31992 = state_31928__$1;
(statearr_31951_31992[(2)] = null);

(statearr_31951_31992[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (19))){
var inst_31859 = (state_31928[(8)]);
var inst_31909 = (state_31928[(11)]);
var inst_31911 = cljs.core.async.muxch_STAR_(inst_31909);
var state_31928__$1 = state_31928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31928__$1,(22),inst_31911,inst_31859);
} else {
if((state_val_31929 === (11))){
var inst_31883 = (state_31928[(10)]);
var inst_31869 = (state_31928[(12)]);
var inst_31883__$1 = cljs.core.seq(inst_31869);
var state_31928__$1 = (function (){var statearr_31952 = state_31928;
(statearr_31952[(10)] = inst_31883__$1);

return statearr_31952;
})();
if(inst_31883__$1){
var statearr_31953_31993 = state_31928__$1;
(statearr_31953_31993[(1)] = (13));

} else {
var statearr_31954_31994 = state_31928__$1;
(statearr_31954_31994[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (9))){
var inst_31905 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31955_31995 = state_31928__$1;
(statearr_31955_31995[(2)] = inst_31905);

(statearr_31955_31995[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (5))){
var inst_31866 = cljs.core.deref(mults);
var inst_31867 = cljs.core.vals(inst_31866);
var inst_31868 = cljs.core.seq(inst_31867);
var inst_31869 = inst_31868;
var inst_31870 = null;
var inst_31871 = (0);
var inst_31872 = (0);
var state_31928__$1 = (function (){var statearr_31956 = state_31928;
(statearr_31956[(12)] = inst_31869);

(statearr_31956[(13)] = inst_31871);

(statearr_31956[(14)] = inst_31870);

(statearr_31956[(15)] = inst_31872);

return statearr_31956;
})();
var statearr_31957_31996 = state_31928__$1;
(statearr_31957_31996[(2)] = null);

(statearr_31957_31996[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (14))){
var state_31928__$1 = state_31928;
var statearr_31961_31997 = state_31928__$1;
(statearr_31961_31997[(2)] = null);

(statearr_31961_31997[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (16))){
var inst_31883 = (state_31928[(10)]);
var inst_31887 = cljs.core.chunk_first(inst_31883);
var inst_31888 = cljs.core.chunk_rest(inst_31883);
var inst_31889 = cljs.core.count(inst_31887);
var inst_31869 = inst_31888;
var inst_31870 = inst_31887;
var inst_31871 = inst_31889;
var inst_31872 = (0);
var state_31928__$1 = (function (){var statearr_31962 = state_31928;
(statearr_31962[(12)] = inst_31869);

(statearr_31962[(13)] = inst_31871);

(statearr_31962[(14)] = inst_31870);

(statearr_31962[(15)] = inst_31872);

return statearr_31962;
})();
var statearr_31963_31998 = state_31928__$1;
(statearr_31963_31998[(2)] = null);

(statearr_31963_31998[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (10))){
var inst_31869 = (state_31928[(12)]);
var inst_31871 = (state_31928[(13)]);
var inst_31870 = (state_31928[(14)]);
var inst_31872 = (state_31928[(15)]);
var inst_31877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31870,inst_31872);
var inst_31878 = cljs.core.async.muxch_STAR_(inst_31877);
var inst_31879 = cljs.core.async.close_BANG_(inst_31878);
var inst_31880 = (inst_31872 + (1));
var tmp31958 = inst_31869;
var tmp31959 = inst_31871;
var tmp31960 = inst_31870;
var inst_31869__$1 = tmp31958;
var inst_31870__$1 = tmp31960;
var inst_31871__$1 = tmp31959;
var inst_31872__$1 = inst_31880;
var state_31928__$1 = (function (){var statearr_31964 = state_31928;
(statearr_31964[(17)] = inst_31879);

(statearr_31964[(12)] = inst_31869__$1);

(statearr_31964[(13)] = inst_31871__$1);

(statearr_31964[(14)] = inst_31870__$1);

(statearr_31964[(15)] = inst_31872__$1);

return statearr_31964;
})();
var statearr_31965_31999 = state_31928__$1;
(statearr_31965_31999[(2)] = null);

(statearr_31965_31999[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (18))){
var inst_31898 = (state_31928[(2)]);
var state_31928__$1 = state_31928;
var statearr_31966_32000 = state_31928__$1;
(statearr_31966_32000[(2)] = inst_31898);

(statearr_31966_32000[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31929 === (8))){
var inst_31871 = (state_31928[(13)]);
var inst_31872 = (state_31928[(15)]);
var inst_31874 = (inst_31872 < inst_31871);
var inst_31875 = inst_31874;
var state_31928__$1 = state_31928;
if(cljs.core.truth_(inst_31875)){
var statearr_31967_32001 = state_31928__$1;
(statearr_31967_32001[(1)] = (10));

} else {
var statearr_31968_32002 = state_31928__$1;
(statearr_31968_32002[(1)] = (11));

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
});})(c__30752__auto___31974,mults,ensure_mult,p))
;
return ((function (switch__30652__auto__,c__30752__auto___31974,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_31969 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31969[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_31969[(1)] = (1));

return statearr_31969;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_31928){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_31928);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e31970){if((e31970 instanceof Object)){
var ex__30656__auto__ = e31970;
var statearr_31971_32003 = state_31928;
(statearr_31971_32003[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31928);

return cljs.core.cst$kw$recur;
} else {
throw e31970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32004 = state_31928;
state_31928 = G__32004;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_31928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_31928);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___31974,mults,ensure_mult,p))
})();
var state__30754__auto__ = (function (){var statearr_31972 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_31972[(6)] = c__30752__auto___31974);

return statearr_31972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___31974,mults,ensure_mult,p))
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
var G__32006 = arguments.length;
switch (G__32006) {
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
var G__32009 = arguments.length;
switch (G__32009) {
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
var G__32012 = arguments.length;
switch (G__32012) {
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
var c__30752__auto___32079 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___32079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___32079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32051){
var state_val_32052 = (state_32051[(1)]);
if((state_val_32052 === (7))){
var state_32051__$1 = state_32051;
var statearr_32053_32080 = state_32051__$1;
(statearr_32053_32080[(2)] = null);

(statearr_32053_32080[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (1))){
var state_32051__$1 = state_32051;
var statearr_32054_32081 = state_32051__$1;
(statearr_32054_32081[(2)] = null);

(statearr_32054_32081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (4))){
var inst_32015 = (state_32051[(7)]);
var inst_32017 = (inst_32015 < cnt);
var state_32051__$1 = state_32051;
if(cljs.core.truth_(inst_32017)){
var statearr_32055_32082 = state_32051__$1;
(statearr_32055_32082[(1)] = (6));

} else {
var statearr_32056_32083 = state_32051__$1;
(statearr_32056_32083[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (15))){
var inst_32047 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
var statearr_32057_32084 = state_32051__$1;
(statearr_32057_32084[(2)] = inst_32047);

(statearr_32057_32084[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (13))){
var inst_32040 = cljs.core.async.close_BANG_(out);
var state_32051__$1 = state_32051;
var statearr_32058_32085 = state_32051__$1;
(statearr_32058_32085[(2)] = inst_32040);

(statearr_32058_32085[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (6))){
var state_32051__$1 = state_32051;
var statearr_32059_32086 = state_32051__$1;
(statearr_32059_32086[(2)] = null);

(statearr_32059_32086[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (3))){
var inst_32049 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32051__$1,inst_32049);
} else {
if((state_val_32052 === (12))){
var inst_32037 = (state_32051[(8)]);
var inst_32037__$1 = (state_32051[(2)]);
var inst_32038 = cljs.core.some(cljs.core.nil_QMARK_,inst_32037__$1);
var state_32051__$1 = (function (){var statearr_32060 = state_32051;
(statearr_32060[(8)] = inst_32037__$1);

return statearr_32060;
})();
if(cljs.core.truth_(inst_32038)){
var statearr_32061_32087 = state_32051__$1;
(statearr_32061_32087[(1)] = (13));

} else {
var statearr_32062_32088 = state_32051__$1;
(statearr_32062_32088[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (2))){
var inst_32014 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32015 = (0);
var state_32051__$1 = (function (){var statearr_32063 = state_32051;
(statearr_32063[(9)] = inst_32014);

(statearr_32063[(7)] = inst_32015);

return statearr_32063;
})();
var statearr_32064_32089 = state_32051__$1;
(statearr_32064_32089[(2)] = null);

(statearr_32064_32089[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (11))){
var inst_32015 = (state_32051[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32051,(10),Object,null,(9));
var inst_32024 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32015) : chs__$1.call(null,inst_32015));
var inst_32025 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32015) : done.call(null,inst_32015));
var inst_32026 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32024,inst_32025);
var state_32051__$1 = state_32051;
var statearr_32065_32090 = state_32051__$1;
(statearr_32065_32090[(2)] = inst_32026);


cljs.core.async.impl.ioc_helpers.process_exception(state_32051__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (9))){
var inst_32015 = (state_32051[(7)]);
var inst_32028 = (state_32051[(2)]);
var inst_32029 = (inst_32015 + (1));
var inst_32015__$1 = inst_32029;
var state_32051__$1 = (function (){var statearr_32066 = state_32051;
(statearr_32066[(7)] = inst_32015__$1);

(statearr_32066[(10)] = inst_32028);

return statearr_32066;
})();
var statearr_32067_32091 = state_32051__$1;
(statearr_32067_32091[(2)] = null);

(statearr_32067_32091[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (5))){
var inst_32035 = (state_32051[(2)]);
var state_32051__$1 = (function (){var statearr_32068 = state_32051;
(statearr_32068[(11)] = inst_32035);

return statearr_32068;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32051__$1,(12),dchan);
} else {
if((state_val_32052 === (14))){
var inst_32037 = (state_32051[(8)]);
var inst_32042 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32037);
var state_32051__$1 = state_32051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32051__$1,(16),out,inst_32042);
} else {
if((state_val_32052 === (16))){
var inst_32044 = (state_32051[(2)]);
var state_32051__$1 = (function (){var statearr_32069 = state_32051;
(statearr_32069[(12)] = inst_32044);

return statearr_32069;
})();
var statearr_32070_32092 = state_32051__$1;
(statearr_32070_32092[(2)] = null);

(statearr_32070_32092[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (10))){
var inst_32019 = (state_32051[(2)]);
var inst_32020 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32051__$1 = (function (){var statearr_32071 = state_32051;
(statearr_32071[(13)] = inst_32019);

return statearr_32071;
})();
var statearr_32072_32093 = state_32051__$1;
(statearr_32072_32093[(2)] = inst_32020);


cljs.core.async.impl.ioc_helpers.process_exception(state_32051__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32052 === (8))){
var inst_32033 = (state_32051[(2)]);
var state_32051__$1 = state_32051;
var statearr_32073_32094 = state_32051__$1;
(statearr_32073_32094[(2)] = inst_32033);

(statearr_32073_32094[(1)] = (5));


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
});})(c__30752__auto___32079,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30652__auto__,c__30752__auto___32079,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_32074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32074[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_32074[(1)] = (1));

return statearr_32074;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_32051){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32051);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32075){if((e32075 instanceof Object)){
var ex__30656__auto__ = e32075;
var statearr_32076_32095 = state_32051;
(statearr_32076_32095[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32051);

return cljs.core.cst$kw$recur;
} else {
throw e32075;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32096 = state_32051;
state_32051 = G__32096;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_32051){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_32051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___32079,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30754__auto__ = (function (){var statearr_32077 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32077[(6)] = c__30752__auto___32079);

return statearr_32077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___32079,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32099 = arguments.length;
switch (G__32099) {
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
var c__30752__auto___32153 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___32153,out){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___32153,out){
return (function (state_32131){
var state_val_32132 = (state_32131[(1)]);
if((state_val_32132 === (7))){
var inst_32111 = (state_32131[(7)]);
var inst_32110 = (state_32131[(8)]);
var inst_32110__$1 = (state_32131[(2)]);
var inst_32111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32110__$1,(0),null);
var inst_32112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32110__$1,(1),null);
var inst_32113 = (inst_32111__$1 == null);
var state_32131__$1 = (function (){var statearr_32133 = state_32131;
(statearr_32133[(7)] = inst_32111__$1);

(statearr_32133[(9)] = inst_32112);

(statearr_32133[(8)] = inst_32110__$1);

return statearr_32133;
})();
if(cljs.core.truth_(inst_32113)){
var statearr_32134_32154 = state_32131__$1;
(statearr_32134_32154[(1)] = (8));

} else {
var statearr_32135_32155 = state_32131__$1;
(statearr_32135_32155[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32132 === (1))){
var inst_32100 = cljs.core.vec(chs);
var inst_32101 = inst_32100;
var state_32131__$1 = (function (){var statearr_32136 = state_32131;
(statearr_32136[(10)] = inst_32101);

return statearr_32136;
})();
var statearr_32137_32156 = state_32131__$1;
(statearr_32137_32156[(2)] = null);

(statearr_32137_32156[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32132 === (4))){
var inst_32101 = (state_32131[(10)]);
var state_32131__$1 = state_32131;
return cljs.core.async.ioc_alts_BANG_(state_32131__$1,(7),inst_32101);
} else {
if((state_val_32132 === (6))){
var inst_32127 = (state_32131[(2)]);
var state_32131__$1 = state_32131;
var statearr_32138_32157 = state_32131__$1;
(statearr_32138_32157[(2)] = inst_32127);

(statearr_32138_32157[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32132 === (3))){
var inst_32129 = (state_32131[(2)]);
var state_32131__$1 = state_32131;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32131__$1,inst_32129);
} else {
if((state_val_32132 === (2))){
var inst_32101 = (state_32131[(10)]);
var inst_32103 = cljs.core.count(inst_32101);
var inst_32104 = (inst_32103 > (0));
var state_32131__$1 = state_32131;
if(cljs.core.truth_(inst_32104)){
var statearr_32140_32158 = state_32131__$1;
(statearr_32140_32158[(1)] = (4));

} else {
var statearr_32141_32159 = state_32131__$1;
(statearr_32141_32159[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32132 === (11))){
var inst_32101 = (state_32131[(10)]);
var inst_32120 = (state_32131[(2)]);
var tmp32139 = inst_32101;
var inst_32101__$1 = tmp32139;
var state_32131__$1 = (function (){var statearr_32142 = state_32131;
(statearr_32142[(10)] = inst_32101__$1);

(statearr_32142[(11)] = inst_32120);

return statearr_32142;
})();
var statearr_32143_32160 = state_32131__$1;
(statearr_32143_32160[(2)] = null);

(statearr_32143_32160[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32132 === (9))){
var inst_32111 = (state_32131[(7)]);
var state_32131__$1 = state_32131;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32131__$1,(11),out,inst_32111);
} else {
if((state_val_32132 === (5))){
var inst_32125 = cljs.core.async.close_BANG_(out);
var state_32131__$1 = state_32131;
var statearr_32144_32161 = state_32131__$1;
(statearr_32144_32161[(2)] = inst_32125);

(statearr_32144_32161[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32132 === (10))){
var inst_32123 = (state_32131[(2)]);
var state_32131__$1 = state_32131;
var statearr_32145_32162 = state_32131__$1;
(statearr_32145_32162[(2)] = inst_32123);

(statearr_32145_32162[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32132 === (8))){
var inst_32101 = (state_32131[(10)]);
var inst_32111 = (state_32131[(7)]);
var inst_32112 = (state_32131[(9)]);
var inst_32110 = (state_32131[(8)]);
var inst_32115 = (function (){var cs = inst_32101;
var vec__32106 = inst_32110;
var v = inst_32111;
var c = inst_32112;
return ((function (cs,vec__32106,v,c,inst_32101,inst_32111,inst_32112,inst_32110,state_val_32132,c__30752__auto___32153,out){
return (function (p1__32097_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32097_SHARP_);
});
;})(cs,vec__32106,v,c,inst_32101,inst_32111,inst_32112,inst_32110,state_val_32132,c__30752__auto___32153,out))
})();
var inst_32116 = cljs.core.filterv(inst_32115,inst_32101);
var inst_32101__$1 = inst_32116;
var state_32131__$1 = (function (){var statearr_32146 = state_32131;
(statearr_32146[(10)] = inst_32101__$1);

return statearr_32146;
})();
var statearr_32147_32163 = state_32131__$1;
(statearr_32147_32163[(2)] = null);

(statearr_32147_32163[(1)] = (2));


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
});})(c__30752__auto___32153,out))
;
return ((function (switch__30652__auto__,c__30752__auto___32153,out){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_32148 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32148[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_32148[(1)] = (1));

return statearr_32148;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_32131){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32131);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32149){if((e32149 instanceof Object)){
var ex__30656__auto__ = e32149;
var statearr_32150_32164 = state_32131;
(statearr_32150_32164[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32131);

return cljs.core.cst$kw$recur;
} else {
throw e32149;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32165 = state_32131;
state_32131 = G__32165;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_32131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_32131);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___32153,out))
})();
var state__30754__auto__ = (function (){var statearr_32151 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32151[(6)] = c__30752__auto___32153);

return statearr_32151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___32153,out))
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
var G__32167 = arguments.length;
switch (G__32167) {
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
var c__30752__auto___32212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___32212,out){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___32212,out){
return (function (state_32191){
var state_val_32192 = (state_32191[(1)]);
if((state_val_32192 === (7))){
var inst_32173 = (state_32191[(7)]);
var inst_32173__$1 = (state_32191[(2)]);
var inst_32174 = (inst_32173__$1 == null);
var inst_32175 = cljs.core.not(inst_32174);
var state_32191__$1 = (function (){var statearr_32193 = state_32191;
(statearr_32193[(7)] = inst_32173__$1);

return statearr_32193;
})();
if(inst_32175){
var statearr_32194_32213 = state_32191__$1;
(statearr_32194_32213[(1)] = (8));

} else {
var statearr_32195_32214 = state_32191__$1;
(statearr_32195_32214[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (1))){
var inst_32168 = (0);
var state_32191__$1 = (function (){var statearr_32196 = state_32191;
(statearr_32196[(8)] = inst_32168);

return statearr_32196;
})();
var statearr_32197_32215 = state_32191__$1;
(statearr_32197_32215[(2)] = null);

(statearr_32197_32215[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (4))){
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32191__$1,(7),ch);
} else {
if((state_val_32192 === (6))){
var inst_32186 = (state_32191[(2)]);
var state_32191__$1 = state_32191;
var statearr_32198_32216 = state_32191__$1;
(statearr_32198_32216[(2)] = inst_32186);

(statearr_32198_32216[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (3))){
var inst_32188 = (state_32191[(2)]);
var inst_32189 = cljs.core.async.close_BANG_(out);
var state_32191__$1 = (function (){var statearr_32199 = state_32191;
(statearr_32199[(9)] = inst_32188);

return statearr_32199;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32191__$1,inst_32189);
} else {
if((state_val_32192 === (2))){
var inst_32168 = (state_32191[(8)]);
var inst_32170 = (inst_32168 < n);
var state_32191__$1 = state_32191;
if(cljs.core.truth_(inst_32170)){
var statearr_32200_32217 = state_32191__$1;
(statearr_32200_32217[(1)] = (4));

} else {
var statearr_32201_32218 = state_32191__$1;
(statearr_32201_32218[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (11))){
var inst_32168 = (state_32191[(8)]);
var inst_32178 = (state_32191[(2)]);
var inst_32179 = (inst_32168 + (1));
var inst_32168__$1 = inst_32179;
var state_32191__$1 = (function (){var statearr_32202 = state_32191;
(statearr_32202[(10)] = inst_32178);

(statearr_32202[(8)] = inst_32168__$1);

return statearr_32202;
})();
var statearr_32203_32219 = state_32191__$1;
(statearr_32203_32219[(2)] = null);

(statearr_32203_32219[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (9))){
var state_32191__$1 = state_32191;
var statearr_32204_32220 = state_32191__$1;
(statearr_32204_32220[(2)] = null);

(statearr_32204_32220[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (5))){
var state_32191__$1 = state_32191;
var statearr_32205_32221 = state_32191__$1;
(statearr_32205_32221[(2)] = null);

(statearr_32205_32221[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (10))){
var inst_32183 = (state_32191[(2)]);
var state_32191__$1 = state_32191;
var statearr_32206_32222 = state_32191__$1;
(statearr_32206_32222[(2)] = inst_32183);

(statearr_32206_32222[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32192 === (8))){
var inst_32173 = (state_32191[(7)]);
var state_32191__$1 = state_32191;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32191__$1,(11),out,inst_32173);
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
});})(c__30752__auto___32212,out))
;
return ((function (switch__30652__auto__,c__30752__auto___32212,out){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_32207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32207[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_32207[(1)] = (1));

return statearr_32207;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_32191){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32191);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32208){if((e32208 instanceof Object)){
var ex__30656__auto__ = e32208;
var statearr_32209_32223 = state_32191;
(statearr_32209_32223[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32191);

return cljs.core.cst$kw$recur;
} else {
throw e32208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32224 = state_32191;
state_32191 = G__32224;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_32191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_32191);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___32212,out))
})();
var state__30754__auto__ = (function (){var statearr_32210 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32210[(6)] = c__30752__auto___32212);

return statearr_32210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___32212,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32226 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32226 = (function (f,ch,meta32227){
this.f = f;
this.ch = ch;
this.meta32227 = meta32227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32228,meta32227__$1){
var self__ = this;
var _32228__$1 = this;
return (new cljs.core.async.t_cljs$core$async32226(self__.f,self__.ch,meta32227__$1));
});

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32228){
var self__ = this;
var _32228__$1 = this;
return self__.meta32227;
});

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32229 = (function (f,ch,meta32227,_,fn1,meta32230){
this.f = f;
this.ch = ch;
this.meta32227 = meta32227;
this._ = _;
this.fn1 = fn1;
this.meta32230 = meta32230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32231,meta32230__$1){
var self__ = this;
var _32231__$1 = this;
return (new cljs.core.async.t_cljs$core$async32229(self__.f,self__.ch,self__.meta32227,self__._,self__.fn1,meta32230__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32231){
var self__ = this;
var _32231__$1 = this;
return self__.meta32230;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32225_SHARP_){
var G__32232 = (((p1__32225_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32225_SHARP_) : self__.f.call(null,p1__32225_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32232) : f1.call(null,G__32232));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32229.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32227,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async32226], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta32230], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32229";

cljs.core.async.t_cljs$core$async32229.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async32229");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32229 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32229(f__$1,ch__$1,meta32227__$1,___$2,fn1__$1,meta32230){
return (new cljs.core.async.t_cljs$core$async32229(f__$1,ch__$1,meta32227__$1,___$2,fn1__$1,meta32230));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32229(self__.f,self__.ch,self__.meta32227,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21529__auto__ = ret;
if(cljs.core.truth_(and__21529__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__21529__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32233 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32233) : self__.f.call(null,G__32233));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32226.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32226.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32227], null);
});

cljs.core.async.t_cljs$core$async32226.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32226.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32226";

cljs.core.async.t_cljs$core$async32226.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async32226");
});

cljs.core.async.__GT_t_cljs$core$async32226 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32226(f__$1,ch__$1,meta32227){
return (new cljs.core.async.t_cljs$core$async32226(f__$1,ch__$1,meta32227));
});

}

return (new cljs.core.async.t_cljs$core$async32226(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32234 = (function (f,ch,meta32235){
this.f = f;
this.ch = ch;
this.meta32235 = meta32235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32236,meta32235__$1){
var self__ = this;
var _32236__$1 = this;
return (new cljs.core.async.t_cljs$core$async32234(self__.f,self__.ch,meta32235__$1));
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32236){
var self__ = this;
var _32236__$1 = this;
return self__.meta32235;
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32235], null);
});

cljs.core.async.t_cljs$core$async32234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32234";

cljs.core.async.t_cljs$core$async32234.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async32234");
});

cljs.core.async.__GT_t_cljs$core$async32234 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32234(f__$1,ch__$1,meta32235){
return (new cljs.core.async.t_cljs$core$async32234(f__$1,ch__$1,meta32235));
});

}

return (new cljs.core.async.t_cljs$core$async32234(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32237 = (function (p,ch,meta32238){
this.p = p;
this.ch = ch;
this.meta32238 = meta32238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32239,meta32238__$1){
var self__ = this;
var _32239__$1 = this;
return (new cljs.core.async.t_cljs$core$async32237(self__.p,self__.ch,meta32238__$1));
});

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32239){
var self__ = this;
var _32239__$1 = this;
return self__.meta32238;
});

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32237.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32238], null);
});

cljs.core.async.t_cljs$core$async32237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32237";

cljs.core.async.t_cljs$core$async32237.cljs$lang$ctorPrWriter = (function (this__22166__auto__,writer__22167__auto__,opt__22168__auto__){
return cljs.core._write(writer__22167__auto__,"cljs.core.async/t_cljs$core$async32237");
});

cljs.core.async.__GT_t_cljs$core$async32237 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32237(p__$1,ch__$1,meta32238){
return (new cljs.core.async.t_cljs$core$async32237(p__$1,ch__$1,meta32238));
});

}

return (new cljs.core.async.t_cljs$core$async32237(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32241 = arguments.length;
switch (G__32241) {
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
var c__30752__auto___32281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___32281,out){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___32281,out){
return (function (state_32262){
var state_val_32263 = (state_32262[(1)]);
if((state_val_32263 === (7))){
var inst_32258 = (state_32262[(2)]);
var state_32262__$1 = state_32262;
var statearr_32264_32282 = state_32262__$1;
(statearr_32264_32282[(2)] = inst_32258);

(statearr_32264_32282[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (1))){
var state_32262__$1 = state_32262;
var statearr_32265_32283 = state_32262__$1;
(statearr_32265_32283[(2)] = null);

(statearr_32265_32283[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (4))){
var inst_32244 = (state_32262[(7)]);
var inst_32244__$1 = (state_32262[(2)]);
var inst_32245 = (inst_32244__$1 == null);
var state_32262__$1 = (function (){var statearr_32266 = state_32262;
(statearr_32266[(7)] = inst_32244__$1);

return statearr_32266;
})();
if(cljs.core.truth_(inst_32245)){
var statearr_32267_32284 = state_32262__$1;
(statearr_32267_32284[(1)] = (5));

} else {
var statearr_32268_32285 = state_32262__$1;
(statearr_32268_32285[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (6))){
var inst_32244 = (state_32262[(7)]);
var inst_32249 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32244) : p.call(null,inst_32244));
var state_32262__$1 = state_32262;
if(cljs.core.truth_(inst_32249)){
var statearr_32269_32286 = state_32262__$1;
(statearr_32269_32286[(1)] = (8));

} else {
var statearr_32270_32287 = state_32262__$1;
(statearr_32270_32287[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (3))){
var inst_32260 = (state_32262[(2)]);
var state_32262__$1 = state_32262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32262__$1,inst_32260);
} else {
if((state_val_32263 === (2))){
var state_32262__$1 = state_32262;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32262__$1,(4),ch);
} else {
if((state_val_32263 === (11))){
var inst_32252 = (state_32262[(2)]);
var state_32262__$1 = state_32262;
var statearr_32271_32288 = state_32262__$1;
(statearr_32271_32288[(2)] = inst_32252);

(statearr_32271_32288[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (9))){
var state_32262__$1 = state_32262;
var statearr_32272_32289 = state_32262__$1;
(statearr_32272_32289[(2)] = null);

(statearr_32272_32289[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (5))){
var inst_32247 = cljs.core.async.close_BANG_(out);
var state_32262__$1 = state_32262;
var statearr_32273_32290 = state_32262__$1;
(statearr_32273_32290[(2)] = inst_32247);

(statearr_32273_32290[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (10))){
var inst_32255 = (state_32262[(2)]);
var state_32262__$1 = (function (){var statearr_32274 = state_32262;
(statearr_32274[(8)] = inst_32255);

return statearr_32274;
})();
var statearr_32275_32291 = state_32262__$1;
(statearr_32275_32291[(2)] = null);

(statearr_32275_32291[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32263 === (8))){
var inst_32244 = (state_32262[(7)]);
var state_32262__$1 = state_32262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32262__$1,(11),out,inst_32244);
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
});})(c__30752__auto___32281,out))
;
return ((function (switch__30652__auto__,c__30752__auto___32281,out){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_32276 = [null,null,null,null,null,null,null,null,null];
(statearr_32276[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_32276[(1)] = (1));

return statearr_32276;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_32262){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32262);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32277){if((e32277 instanceof Object)){
var ex__30656__auto__ = e32277;
var statearr_32278_32292 = state_32262;
(statearr_32278_32292[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32262);

return cljs.core.cst$kw$recur;
} else {
throw e32277;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32293 = state_32262;
state_32262 = G__32293;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_32262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_32262);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___32281,out))
})();
var state__30754__auto__ = (function (){var statearr_32279 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32279[(6)] = c__30752__auto___32281);

return statearr_32279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___32281,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32295 = arguments.length;
switch (G__32295) {
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
var c__30752__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto__){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto__){
return (function (state_32358){
var state_val_32359 = (state_32358[(1)]);
if((state_val_32359 === (7))){
var inst_32354 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32360_32398 = state_32358__$1;
(statearr_32360_32398[(2)] = inst_32354);

(statearr_32360_32398[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (20))){
var inst_32324 = (state_32358[(7)]);
var inst_32335 = (state_32358[(2)]);
var inst_32336 = cljs.core.next(inst_32324);
var inst_32310 = inst_32336;
var inst_32311 = null;
var inst_32312 = (0);
var inst_32313 = (0);
var state_32358__$1 = (function (){var statearr_32361 = state_32358;
(statearr_32361[(8)] = inst_32311);

(statearr_32361[(9)] = inst_32313);

(statearr_32361[(10)] = inst_32310);

(statearr_32361[(11)] = inst_32335);

(statearr_32361[(12)] = inst_32312);

return statearr_32361;
})();
var statearr_32362_32399 = state_32358__$1;
(statearr_32362_32399[(2)] = null);

(statearr_32362_32399[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (1))){
var state_32358__$1 = state_32358;
var statearr_32363_32400 = state_32358__$1;
(statearr_32363_32400[(2)] = null);

(statearr_32363_32400[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (4))){
var inst_32299 = (state_32358[(13)]);
var inst_32299__$1 = (state_32358[(2)]);
var inst_32300 = (inst_32299__$1 == null);
var state_32358__$1 = (function (){var statearr_32364 = state_32358;
(statearr_32364[(13)] = inst_32299__$1);

return statearr_32364;
})();
if(cljs.core.truth_(inst_32300)){
var statearr_32365_32401 = state_32358__$1;
(statearr_32365_32401[(1)] = (5));

} else {
var statearr_32366_32402 = state_32358__$1;
(statearr_32366_32402[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (15))){
var state_32358__$1 = state_32358;
var statearr_32370_32403 = state_32358__$1;
(statearr_32370_32403[(2)] = null);

(statearr_32370_32403[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (21))){
var state_32358__$1 = state_32358;
var statearr_32371_32404 = state_32358__$1;
(statearr_32371_32404[(2)] = null);

(statearr_32371_32404[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (13))){
var inst_32311 = (state_32358[(8)]);
var inst_32313 = (state_32358[(9)]);
var inst_32310 = (state_32358[(10)]);
var inst_32312 = (state_32358[(12)]);
var inst_32320 = (state_32358[(2)]);
var inst_32321 = (inst_32313 + (1));
var tmp32367 = inst_32311;
var tmp32368 = inst_32310;
var tmp32369 = inst_32312;
var inst_32310__$1 = tmp32368;
var inst_32311__$1 = tmp32367;
var inst_32312__$1 = tmp32369;
var inst_32313__$1 = inst_32321;
var state_32358__$1 = (function (){var statearr_32372 = state_32358;
(statearr_32372[(14)] = inst_32320);

(statearr_32372[(8)] = inst_32311__$1);

(statearr_32372[(9)] = inst_32313__$1);

(statearr_32372[(10)] = inst_32310__$1);

(statearr_32372[(12)] = inst_32312__$1);

return statearr_32372;
})();
var statearr_32373_32405 = state_32358__$1;
(statearr_32373_32405[(2)] = null);

(statearr_32373_32405[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (22))){
var state_32358__$1 = state_32358;
var statearr_32374_32406 = state_32358__$1;
(statearr_32374_32406[(2)] = null);

(statearr_32374_32406[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (6))){
var inst_32299 = (state_32358[(13)]);
var inst_32308 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32299) : f.call(null,inst_32299));
var inst_32309 = cljs.core.seq(inst_32308);
var inst_32310 = inst_32309;
var inst_32311 = null;
var inst_32312 = (0);
var inst_32313 = (0);
var state_32358__$1 = (function (){var statearr_32375 = state_32358;
(statearr_32375[(8)] = inst_32311);

(statearr_32375[(9)] = inst_32313);

(statearr_32375[(10)] = inst_32310);

(statearr_32375[(12)] = inst_32312);

return statearr_32375;
})();
var statearr_32376_32407 = state_32358__$1;
(statearr_32376_32407[(2)] = null);

(statearr_32376_32407[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (17))){
var inst_32324 = (state_32358[(7)]);
var inst_32328 = cljs.core.chunk_first(inst_32324);
var inst_32329 = cljs.core.chunk_rest(inst_32324);
var inst_32330 = cljs.core.count(inst_32328);
var inst_32310 = inst_32329;
var inst_32311 = inst_32328;
var inst_32312 = inst_32330;
var inst_32313 = (0);
var state_32358__$1 = (function (){var statearr_32377 = state_32358;
(statearr_32377[(8)] = inst_32311);

(statearr_32377[(9)] = inst_32313);

(statearr_32377[(10)] = inst_32310);

(statearr_32377[(12)] = inst_32312);

return statearr_32377;
})();
var statearr_32378_32408 = state_32358__$1;
(statearr_32378_32408[(2)] = null);

(statearr_32378_32408[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (3))){
var inst_32356 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32358__$1,inst_32356);
} else {
if((state_val_32359 === (12))){
var inst_32344 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32379_32409 = state_32358__$1;
(statearr_32379_32409[(2)] = inst_32344);

(statearr_32379_32409[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (2))){
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32358__$1,(4),in$);
} else {
if((state_val_32359 === (23))){
var inst_32352 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32380_32410 = state_32358__$1;
(statearr_32380_32410[(2)] = inst_32352);

(statearr_32380_32410[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (19))){
var inst_32339 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32381_32411 = state_32358__$1;
(statearr_32381_32411[(2)] = inst_32339);

(statearr_32381_32411[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (11))){
var inst_32310 = (state_32358[(10)]);
var inst_32324 = (state_32358[(7)]);
var inst_32324__$1 = cljs.core.seq(inst_32310);
var state_32358__$1 = (function (){var statearr_32382 = state_32358;
(statearr_32382[(7)] = inst_32324__$1);

return statearr_32382;
})();
if(inst_32324__$1){
var statearr_32383_32412 = state_32358__$1;
(statearr_32383_32412[(1)] = (14));

} else {
var statearr_32384_32413 = state_32358__$1;
(statearr_32384_32413[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (9))){
var inst_32346 = (state_32358[(2)]);
var inst_32347 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32358__$1 = (function (){var statearr_32385 = state_32358;
(statearr_32385[(15)] = inst_32346);

return statearr_32385;
})();
if(cljs.core.truth_(inst_32347)){
var statearr_32386_32414 = state_32358__$1;
(statearr_32386_32414[(1)] = (21));

} else {
var statearr_32387_32415 = state_32358__$1;
(statearr_32387_32415[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (5))){
var inst_32302 = cljs.core.async.close_BANG_(out);
var state_32358__$1 = state_32358;
var statearr_32388_32416 = state_32358__$1;
(statearr_32388_32416[(2)] = inst_32302);

(statearr_32388_32416[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (14))){
var inst_32324 = (state_32358[(7)]);
var inst_32326 = cljs.core.chunked_seq_QMARK_(inst_32324);
var state_32358__$1 = state_32358;
if(inst_32326){
var statearr_32389_32417 = state_32358__$1;
(statearr_32389_32417[(1)] = (17));

} else {
var statearr_32390_32418 = state_32358__$1;
(statearr_32390_32418[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (16))){
var inst_32342 = (state_32358[(2)]);
var state_32358__$1 = state_32358;
var statearr_32391_32419 = state_32358__$1;
(statearr_32391_32419[(2)] = inst_32342);

(statearr_32391_32419[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32359 === (10))){
var inst_32311 = (state_32358[(8)]);
var inst_32313 = (state_32358[(9)]);
var inst_32318 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32311,inst_32313);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32358__$1,(13),out,inst_32318);
} else {
if((state_val_32359 === (18))){
var inst_32324 = (state_32358[(7)]);
var inst_32333 = cljs.core.first(inst_32324);
var state_32358__$1 = state_32358;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32358__$1,(20),out,inst_32333);
} else {
if((state_val_32359 === (8))){
var inst_32313 = (state_32358[(9)]);
var inst_32312 = (state_32358[(12)]);
var inst_32315 = (inst_32313 < inst_32312);
var inst_32316 = inst_32315;
var state_32358__$1 = state_32358;
if(cljs.core.truth_(inst_32316)){
var statearr_32392_32420 = state_32358__$1;
(statearr_32392_32420[(1)] = (10));

} else {
var statearr_32393_32421 = state_32358__$1;
(statearr_32393_32421[(1)] = (11));

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
});})(c__30752__auto__))
;
return ((function (switch__30652__auto__,c__30752__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30653__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30653__auto____0 = (function (){
var statearr_32394 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32394[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30653__auto__);

(statearr_32394[(1)] = (1));

return statearr_32394;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30653__auto____1 = (function (state_32358){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32358);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32395){if((e32395 instanceof Object)){
var ex__30656__auto__ = e32395;
var statearr_32396_32422 = state_32358;
(statearr_32396_32422[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32358);

return cljs.core.cst$kw$recur;
} else {
throw e32395;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32423 = state_32358;
state_32358 = G__32423;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30653__auto__ = function(state_32358){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30653__auto____1.call(this,state_32358);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30653__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30653__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto__))
})();
var state__30754__auto__ = (function (){var statearr_32397 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32397[(6)] = c__30752__auto__);

return statearr_32397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto__))
);

return c__30752__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32425 = arguments.length;
switch (G__32425) {
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
var G__32428 = arguments.length;
switch (G__32428) {
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
var G__32431 = arguments.length;
switch (G__32431) {
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
var c__30752__auto___32478 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___32478,out){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___32478,out){
return (function (state_32455){
var state_val_32456 = (state_32455[(1)]);
if((state_val_32456 === (7))){
var inst_32450 = (state_32455[(2)]);
var state_32455__$1 = state_32455;
var statearr_32457_32479 = state_32455__$1;
(statearr_32457_32479[(2)] = inst_32450);

(statearr_32457_32479[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32456 === (1))){
var inst_32432 = null;
var state_32455__$1 = (function (){var statearr_32458 = state_32455;
(statearr_32458[(7)] = inst_32432);

return statearr_32458;
})();
var statearr_32459_32480 = state_32455__$1;
(statearr_32459_32480[(2)] = null);

(statearr_32459_32480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32456 === (4))){
var inst_32435 = (state_32455[(8)]);
var inst_32435__$1 = (state_32455[(2)]);
var inst_32436 = (inst_32435__$1 == null);
var inst_32437 = cljs.core.not(inst_32436);
var state_32455__$1 = (function (){var statearr_32460 = state_32455;
(statearr_32460[(8)] = inst_32435__$1);

return statearr_32460;
})();
if(inst_32437){
var statearr_32461_32481 = state_32455__$1;
(statearr_32461_32481[(1)] = (5));

} else {
var statearr_32462_32482 = state_32455__$1;
(statearr_32462_32482[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32456 === (6))){
var state_32455__$1 = state_32455;
var statearr_32463_32483 = state_32455__$1;
(statearr_32463_32483[(2)] = null);

(statearr_32463_32483[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32456 === (3))){
var inst_32452 = (state_32455[(2)]);
var inst_32453 = cljs.core.async.close_BANG_(out);
var state_32455__$1 = (function (){var statearr_32464 = state_32455;
(statearr_32464[(9)] = inst_32452);

return statearr_32464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32455__$1,inst_32453);
} else {
if((state_val_32456 === (2))){
var state_32455__$1 = state_32455;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32455__$1,(4),ch);
} else {
if((state_val_32456 === (11))){
var inst_32435 = (state_32455[(8)]);
var inst_32444 = (state_32455[(2)]);
var inst_32432 = inst_32435;
var state_32455__$1 = (function (){var statearr_32465 = state_32455;
(statearr_32465[(10)] = inst_32444);

(statearr_32465[(7)] = inst_32432);

return statearr_32465;
})();
var statearr_32466_32484 = state_32455__$1;
(statearr_32466_32484[(2)] = null);

(statearr_32466_32484[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32456 === (9))){
var inst_32435 = (state_32455[(8)]);
var state_32455__$1 = state_32455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32455__$1,(11),out,inst_32435);
} else {
if((state_val_32456 === (5))){
var inst_32432 = (state_32455[(7)]);
var inst_32435 = (state_32455[(8)]);
var inst_32439 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32435,inst_32432);
var state_32455__$1 = state_32455;
if(inst_32439){
var statearr_32468_32485 = state_32455__$1;
(statearr_32468_32485[(1)] = (8));

} else {
var statearr_32469_32486 = state_32455__$1;
(statearr_32469_32486[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32456 === (10))){
var inst_32447 = (state_32455[(2)]);
var state_32455__$1 = state_32455;
var statearr_32470_32487 = state_32455__$1;
(statearr_32470_32487[(2)] = inst_32447);

(statearr_32470_32487[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32456 === (8))){
var inst_32432 = (state_32455[(7)]);
var tmp32467 = inst_32432;
var inst_32432__$1 = tmp32467;
var state_32455__$1 = (function (){var statearr_32471 = state_32455;
(statearr_32471[(7)] = inst_32432__$1);

return statearr_32471;
})();
var statearr_32472_32488 = state_32455__$1;
(statearr_32472_32488[(2)] = null);

(statearr_32472_32488[(1)] = (2));


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
});})(c__30752__auto___32478,out))
;
return ((function (switch__30652__auto__,c__30752__auto___32478,out){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_32473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32473[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_32473[(1)] = (1));

return statearr_32473;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_32455){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32455);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32474){if((e32474 instanceof Object)){
var ex__30656__auto__ = e32474;
var statearr_32475_32489 = state_32455;
(statearr_32475_32489[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32455);

return cljs.core.cst$kw$recur;
} else {
throw e32474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32490 = state_32455;
state_32455 = G__32490;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_32455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_32455);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___32478,out))
})();
var state__30754__auto__ = (function (){var statearr_32476 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32476[(6)] = c__30752__auto___32478);

return statearr_32476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___32478,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32492 = arguments.length;
switch (G__32492) {
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
var c__30752__auto___32558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___32558,out){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___32558,out){
return (function (state_32530){
var state_val_32531 = (state_32530[(1)]);
if((state_val_32531 === (7))){
var inst_32526 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32532_32559 = state_32530__$1;
(statearr_32532_32559[(2)] = inst_32526);

(statearr_32532_32559[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (1))){
var inst_32493 = (new Array(n));
var inst_32494 = inst_32493;
var inst_32495 = (0);
var state_32530__$1 = (function (){var statearr_32533 = state_32530;
(statearr_32533[(7)] = inst_32494);

(statearr_32533[(8)] = inst_32495);

return statearr_32533;
})();
var statearr_32534_32560 = state_32530__$1;
(statearr_32534_32560[(2)] = null);

(statearr_32534_32560[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (4))){
var inst_32498 = (state_32530[(9)]);
var inst_32498__$1 = (state_32530[(2)]);
var inst_32499 = (inst_32498__$1 == null);
var inst_32500 = cljs.core.not(inst_32499);
var state_32530__$1 = (function (){var statearr_32535 = state_32530;
(statearr_32535[(9)] = inst_32498__$1);

return statearr_32535;
})();
if(inst_32500){
var statearr_32536_32561 = state_32530__$1;
(statearr_32536_32561[(1)] = (5));

} else {
var statearr_32537_32562 = state_32530__$1;
(statearr_32537_32562[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (15))){
var inst_32520 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32538_32563 = state_32530__$1;
(statearr_32538_32563[(2)] = inst_32520);

(statearr_32538_32563[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (13))){
var state_32530__$1 = state_32530;
var statearr_32539_32564 = state_32530__$1;
(statearr_32539_32564[(2)] = null);

(statearr_32539_32564[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (6))){
var inst_32495 = (state_32530[(8)]);
var inst_32516 = (inst_32495 > (0));
var state_32530__$1 = state_32530;
if(cljs.core.truth_(inst_32516)){
var statearr_32540_32565 = state_32530__$1;
(statearr_32540_32565[(1)] = (12));

} else {
var statearr_32541_32566 = state_32530__$1;
(statearr_32541_32566[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (3))){
var inst_32528 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32530__$1,inst_32528);
} else {
if((state_val_32531 === (12))){
var inst_32494 = (state_32530[(7)]);
var inst_32518 = cljs.core.vec(inst_32494);
var state_32530__$1 = state_32530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32530__$1,(15),out,inst_32518);
} else {
if((state_val_32531 === (2))){
var state_32530__$1 = state_32530;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32530__$1,(4),ch);
} else {
if((state_val_32531 === (11))){
var inst_32510 = (state_32530[(2)]);
var inst_32511 = (new Array(n));
var inst_32494 = inst_32511;
var inst_32495 = (0);
var state_32530__$1 = (function (){var statearr_32542 = state_32530;
(statearr_32542[(7)] = inst_32494);

(statearr_32542[(10)] = inst_32510);

(statearr_32542[(8)] = inst_32495);

return statearr_32542;
})();
var statearr_32543_32567 = state_32530__$1;
(statearr_32543_32567[(2)] = null);

(statearr_32543_32567[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (9))){
var inst_32494 = (state_32530[(7)]);
var inst_32508 = cljs.core.vec(inst_32494);
var state_32530__$1 = state_32530;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32530__$1,(11),out,inst_32508);
} else {
if((state_val_32531 === (5))){
var inst_32498 = (state_32530[(9)]);
var inst_32494 = (state_32530[(7)]);
var inst_32503 = (state_32530[(11)]);
var inst_32495 = (state_32530[(8)]);
var inst_32502 = (inst_32494[inst_32495] = inst_32498);
var inst_32503__$1 = (inst_32495 + (1));
var inst_32504 = (inst_32503__$1 < n);
var state_32530__$1 = (function (){var statearr_32544 = state_32530;
(statearr_32544[(12)] = inst_32502);

(statearr_32544[(11)] = inst_32503__$1);

return statearr_32544;
})();
if(cljs.core.truth_(inst_32504)){
var statearr_32545_32568 = state_32530__$1;
(statearr_32545_32568[(1)] = (8));

} else {
var statearr_32546_32569 = state_32530__$1;
(statearr_32546_32569[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (14))){
var inst_32523 = (state_32530[(2)]);
var inst_32524 = cljs.core.async.close_BANG_(out);
var state_32530__$1 = (function (){var statearr_32548 = state_32530;
(statearr_32548[(13)] = inst_32523);

return statearr_32548;
})();
var statearr_32549_32570 = state_32530__$1;
(statearr_32549_32570[(2)] = inst_32524);

(statearr_32549_32570[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (10))){
var inst_32514 = (state_32530[(2)]);
var state_32530__$1 = state_32530;
var statearr_32550_32571 = state_32530__$1;
(statearr_32550_32571[(2)] = inst_32514);

(statearr_32550_32571[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32531 === (8))){
var inst_32494 = (state_32530[(7)]);
var inst_32503 = (state_32530[(11)]);
var tmp32547 = inst_32494;
var inst_32494__$1 = tmp32547;
var inst_32495 = inst_32503;
var state_32530__$1 = (function (){var statearr_32551 = state_32530;
(statearr_32551[(7)] = inst_32494__$1);

(statearr_32551[(8)] = inst_32495);

return statearr_32551;
})();
var statearr_32552_32572 = state_32530__$1;
(statearr_32552_32572[(2)] = null);

(statearr_32552_32572[(1)] = (2));


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
});})(c__30752__auto___32558,out))
;
return ((function (switch__30652__auto__,c__30752__auto___32558,out){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_32553 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32553[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_32553[(1)] = (1));

return statearr_32553;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_32530){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32530);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32554){if((e32554 instanceof Object)){
var ex__30656__auto__ = e32554;
var statearr_32555_32573 = state_32530;
(statearr_32555_32573[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32530);

return cljs.core.cst$kw$recur;
} else {
throw e32554;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32574 = state_32530;
state_32530 = G__32574;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_32530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_32530);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___32558,out))
})();
var state__30754__auto__ = (function (){var statearr_32556 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32556[(6)] = c__30752__auto___32558);

return statearr_32556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___32558,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32576 = arguments.length;
switch (G__32576) {
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
var c__30752__auto___32646 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30752__auto___32646,out){
return (function (){
var f__30753__auto__ = (function (){var switch__30652__auto__ = ((function (c__30752__auto___32646,out){
return (function (state_32618){
var state_val_32619 = (state_32618[(1)]);
if((state_val_32619 === (7))){
var inst_32614 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32620_32647 = state_32618__$1;
(statearr_32620_32647[(2)] = inst_32614);

(statearr_32620_32647[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (1))){
var inst_32577 = [];
var inst_32578 = inst_32577;
var inst_32579 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_32618__$1 = (function (){var statearr_32621 = state_32618;
(statearr_32621[(7)] = inst_32579);

(statearr_32621[(8)] = inst_32578);

return statearr_32621;
})();
var statearr_32622_32648 = state_32618__$1;
(statearr_32622_32648[(2)] = null);

(statearr_32622_32648[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (4))){
var inst_32582 = (state_32618[(9)]);
var inst_32582__$1 = (state_32618[(2)]);
var inst_32583 = (inst_32582__$1 == null);
var inst_32584 = cljs.core.not(inst_32583);
var state_32618__$1 = (function (){var statearr_32623 = state_32618;
(statearr_32623[(9)] = inst_32582__$1);

return statearr_32623;
})();
if(inst_32584){
var statearr_32624_32649 = state_32618__$1;
(statearr_32624_32649[(1)] = (5));

} else {
var statearr_32625_32650 = state_32618__$1;
(statearr_32625_32650[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (15))){
var inst_32608 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32626_32651 = state_32618__$1;
(statearr_32626_32651[(2)] = inst_32608);

(statearr_32626_32651[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (13))){
var state_32618__$1 = state_32618;
var statearr_32627_32652 = state_32618__$1;
(statearr_32627_32652[(2)] = null);

(statearr_32627_32652[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (6))){
var inst_32578 = (state_32618[(8)]);
var inst_32603 = inst_32578.length;
var inst_32604 = (inst_32603 > (0));
var state_32618__$1 = state_32618;
if(cljs.core.truth_(inst_32604)){
var statearr_32628_32653 = state_32618__$1;
(statearr_32628_32653[(1)] = (12));

} else {
var statearr_32629_32654 = state_32618__$1;
(statearr_32629_32654[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (3))){
var inst_32616 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32618__$1,inst_32616);
} else {
if((state_val_32619 === (12))){
var inst_32578 = (state_32618[(8)]);
var inst_32606 = cljs.core.vec(inst_32578);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32618__$1,(15),out,inst_32606);
} else {
if((state_val_32619 === (2))){
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32618__$1,(4),ch);
} else {
if((state_val_32619 === (11))){
var inst_32586 = (state_32618[(10)]);
var inst_32582 = (state_32618[(9)]);
var inst_32596 = (state_32618[(2)]);
var inst_32597 = [];
var inst_32598 = inst_32597.push(inst_32582);
var inst_32578 = inst_32597;
var inst_32579 = inst_32586;
var state_32618__$1 = (function (){var statearr_32630 = state_32618;
(statearr_32630[(7)] = inst_32579);

(statearr_32630[(8)] = inst_32578);

(statearr_32630[(11)] = inst_32598);

(statearr_32630[(12)] = inst_32596);

return statearr_32630;
})();
var statearr_32631_32655 = state_32618__$1;
(statearr_32631_32655[(2)] = null);

(statearr_32631_32655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (9))){
var inst_32578 = (state_32618[(8)]);
var inst_32594 = cljs.core.vec(inst_32578);
var state_32618__$1 = state_32618;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32618__$1,(11),out,inst_32594);
} else {
if((state_val_32619 === (5))){
var inst_32579 = (state_32618[(7)]);
var inst_32586 = (state_32618[(10)]);
var inst_32582 = (state_32618[(9)]);
var inst_32586__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32582) : f.call(null,inst_32582));
var inst_32587 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32586__$1,inst_32579);
var inst_32588 = cljs.core.keyword_identical_QMARK_(inst_32579,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_32589 = (inst_32587) || (inst_32588);
var state_32618__$1 = (function (){var statearr_32632 = state_32618;
(statearr_32632[(10)] = inst_32586__$1);

return statearr_32632;
})();
if(cljs.core.truth_(inst_32589)){
var statearr_32633_32656 = state_32618__$1;
(statearr_32633_32656[(1)] = (8));

} else {
var statearr_32634_32657 = state_32618__$1;
(statearr_32634_32657[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (14))){
var inst_32611 = (state_32618[(2)]);
var inst_32612 = cljs.core.async.close_BANG_(out);
var state_32618__$1 = (function (){var statearr_32636 = state_32618;
(statearr_32636[(13)] = inst_32611);

return statearr_32636;
})();
var statearr_32637_32658 = state_32618__$1;
(statearr_32637_32658[(2)] = inst_32612);

(statearr_32637_32658[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (10))){
var inst_32601 = (state_32618[(2)]);
var state_32618__$1 = state_32618;
var statearr_32638_32659 = state_32618__$1;
(statearr_32638_32659[(2)] = inst_32601);

(statearr_32638_32659[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32619 === (8))){
var inst_32586 = (state_32618[(10)]);
var inst_32578 = (state_32618[(8)]);
var inst_32582 = (state_32618[(9)]);
var inst_32591 = inst_32578.push(inst_32582);
var tmp32635 = inst_32578;
var inst_32578__$1 = tmp32635;
var inst_32579 = inst_32586;
var state_32618__$1 = (function (){var statearr_32639 = state_32618;
(statearr_32639[(7)] = inst_32579);

(statearr_32639[(8)] = inst_32578__$1);

(statearr_32639[(14)] = inst_32591);

return statearr_32639;
})();
var statearr_32640_32660 = state_32618__$1;
(statearr_32640_32660[(2)] = null);

(statearr_32640_32660[(1)] = (2));


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
});})(c__30752__auto___32646,out))
;
return ((function (switch__30652__auto__,c__30752__auto___32646,out){
return (function() {
var cljs$core$async$state_machine__30653__auto__ = null;
var cljs$core$async$state_machine__30653__auto____0 = (function (){
var statearr_32641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32641[(0)] = cljs$core$async$state_machine__30653__auto__);

(statearr_32641[(1)] = (1));

return statearr_32641;
});
var cljs$core$async$state_machine__30653__auto____1 = (function (state_32618){
while(true){
var ret_value__30654__auto__ = (function (){try{while(true){
var result__30655__auto__ = switch__30652__auto__(state_32618);
if(cljs.core.keyword_identical_QMARK_(result__30655__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30655__auto__;
}
break;
}
}catch (e32642){if((e32642 instanceof Object)){
var ex__30656__auto__ = e32642;
var statearr_32643_32661 = state_32618;
(statearr_32643_32661[(5)] = ex__30656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32618);

return cljs.core.cst$kw$recur;
} else {
throw e32642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30654__auto__,cljs.core.cst$kw$recur)){
var G__32662 = state_32618;
state_32618 = G__32662;
continue;
} else {
return ret_value__30654__auto__;
}
break;
}
});
cljs$core$async$state_machine__30653__auto__ = function(state_32618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30653__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30653__auto____1.call(this,state_32618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30653__auto____0;
cljs$core$async$state_machine__30653__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30653__auto____1;
return cljs$core$async$state_machine__30653__auto__;
})()
;})(switch__30652__auto__,c__30752__auto___32646,out))
})();
var state__30754__auto__ = (function (){var statearr_32644 = (f__30753__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30753__auto__.cljs$core$IFn$_invoke$arity$0() : f__30753__auto__.call(null));
(statearr_32644[(6)] = c__30752__auto___32646);

return statearr_32644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30754__auto__);
});})(c__30752__auto___32646,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

