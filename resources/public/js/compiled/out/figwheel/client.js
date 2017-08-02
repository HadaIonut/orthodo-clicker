// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51447 = arguments.length;
switch (G__51447) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__41221__auto__ = [];
var len__41214__auto___51450 = arguments.length;
var i__41215__auto___51451 = (0);
while(true){
if((i__41215__auto___51451 < len__41214__auto___51450)){
args__41221__auto__.push((arguments[i__41215__auto___51451]));

var G__51452 = (i__41215__auto___51451 + (1));
i__41215__auto___51451 = G__51452;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51449){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51449));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__41221__auto__ = [];
var len__41214__auto___51454 = arguments.length;
var i__41215__auto___51455 = (0);
while(true){
if((i__41215__auto___51455 < len__41214__auto___51454)){
args__41221__auto__.push((arguments[i__41215__auto___51455]));

var G__51456 = (i__41215__auto___51455 + (1));
i__41215__auto___51455 = G__51456;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51453){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51453));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51457){
var map__51458 = p__51457;
var map__51458__$1 = ((((!((map__51458 == null)))?((((map__51458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51458):map__51458);
var message = cljs.core.get.call(null,map__51458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51458__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__40050__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__40050__auto__)){
return or__40050__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__40038__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__40038__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__40038__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__43191__auto___51537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto___51537,ch){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto___51537,ch){
return (function (state_51509){
var state_val_51510 = (state_51509[(1)]);
if((state_val_51510 === (7))){
var inst_51505 = (state_51509[(2)]);
var state_51509__$1 = state_51509;
var statearr_51511_51538 = state_51509__$1;
(statearr_51511_51538[(2)] = inst_51505);

(statearr_51511_51538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (1))){
var state_51509__$1 = state_51509;
var statearr_51512_51539 = state_51509__$1;
(statearr_51512_51539[(2)] = null);

(statearr_51512_51539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (4))){
var inst_51462 = (state_51509[(7)]);
var inst_51462__$1 = (state_51509[(2)]);
var state_51509__$1 = (function (){var statearr_51513 = state_51509;
(statearr_51513[(7)] = inst_51462__$1);

return statearr_51513;
})();
if(cljs.core.truth_(inst_51462__$1)){
var statearr_51514_51540 = state_51509__$1;
(statearr_51514_51540[(1)] = (5));

} else {
var statearr_51515_51541 = state_51509__$1;
(statearr_51515_51541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (15))){
var inst_51469 = (state_51509[(8)]);
var inst_51484 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51469);
var inst_51485 = cljs.core.first.call(null,inst_51484);
var inst_51486 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51485);
var inst_51487 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51486)].join('');
var inst_51488 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51487);
var state_51509__$1 = state_51509;
var statearr_51516_51542 = state_51509__$1;
(statearr_51516_51542[(2)] = inst_51488);

(statearr_51516_51542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (13))){
var inst_51493 = (state_51509[(2)]);
var state_51509__$1 = state_51509;
var statearr_51517_51543 = state_51509__$1;
(statearr_51517_51543[(2)] = inst_51493);

(statearr_51517_51543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (6))){
var state_51509__$1 = state_51509;
var statearr_51518_51544 = state_51509__$1;
(statearr_51518_51544[(2)] = null);

(statearr_51518_51544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (17))){
var inst_51491 = (state_51509[(2)]);
var state_51509__$1 = state_51509;
var statearr_51519_51545 = state_51509__$1;
(statearr_51519_51545[(2)] = inst_51491);

(statearr_51519_51545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (3))){
var inst_51507 = (state_51509[(2)]);
var state_51509__$1 = state_51509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51509__$1,inst_51507);
} else {
if((state_val_51510 === (12))){
var inst_51468 = (state_51509[(9)]);
var inst_51482 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51468,opts);
var state_51509__$1 = state_51509;
if(cljs.core.truth_(inst_51482)){
var statearr_51520_51546 = state_51509__$1;
(statearr_51520_51546[(1)] = (15));

} else {
var statearr_51521_51547 = state_51509__$1;
(statearr_51521_51547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (2))){
var state_51509__$1 = state_51509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51509__$1,(4),ch);
} else {
if((state_val_51510 === (11))){
var inst_51469 = (state_51509[(8)]);
var inst_51474 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51475 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51469);
var inst_51476 = cljs.core.async.timeout.call(null,(1000));
var inst_51477 = [inst_51475,inst_51476];
var inst_51478 = (new cljs.core.PersistentVector(null,2,(5),inst_51474,inst_51477,null));
var state_51509__$1 = state_51509;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51509__$1,(14),inst_51478);
} else {
if((state_val_51510 === (9))){
var inst_51469 = (state_51509[(8)]);
var inst_51495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51496 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51469);
var inst_51497 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51496);
var inst_51498 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51497)].join('');
var inst_51499 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51498);
var state_51509__$1 = (function (){var statearr_51522 = state_51509;
(statearr_51522[(10)] = inst_51495);

return statearr_51522;
})();
var statearr_51523_51548 = state_51509__$1;
(statearr_51523_51548[(2)] = inst_51499);

(statearr_51523_51548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (5))){
var inst_51462 = (state_51509[(7)]);
var inst_51464 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51465 = (new cljs.core.PersistentArrayMap(null,2,inst_51464,null));
var inst_51466 = (new cljs.core.PersistentHashSet(null,inst_51465,null));
var inst_51467 = figwheel.client.focus_msgs.call(null,inst_51466,inst_51462);
var inst_51468 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51467);
var inst_51469 = cljs.core.first.call(null,inst_51467);
var inst_51470 = figwheel.client.autoload_QMARK_.call(null);
var state_51509__$1 = (function (){var statearr_51524 = state_51509;
(statearr_51524[(9)] = inst_51468);

(statearr_51524[(8)] = inst_51469);

return statearr_51524;
})();
if(cljs.core.truth_(inst_51470)){
var statearr_51525_51549 = state_51509__$1;
(statearr_51525_51549[(1)] = (8));

} else {
var statearr_51526_51550 = state_51509__$1;
(statearr_51526_51550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (14))){
var inst_51480 = (state_51509[(2)]);
var state_51509__$1 = state_51509;
var statearr_51527_51551 = state_51509__$1;
(statearr_51527_51551[(2)] = inst_51480);

(statearr_51527_51551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (16))){
var state_51509__$1 = state_51509;
var statearr_51528_51552 = state_51509__$1;
(statearr_51528_51552[(2)] = null);

(statearr_51528_51552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (10))){
var inst_51501 = (state_51509[(2)]);
var state_51509__$1 = (function (){var statearr_51529 = state_51509;
(statearr_51529[(11)] = inst_51501);

return statearr_51529;
})();
var statearr_51530_51553 = state_51509__$1;
(statearr_51530_51553[(2)] = null);

(statearr_51530_51553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51510 === (8))){
var inst_51468 = (state_51509[(9)]);
var inst_51472 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51468,opts);
var state_51509__$1 = state_51509;
if(cljs.core.truth_(inst_51472)){
var statearr_51531_51554 = state_51509__$1;
(statearr_51531_51554[(1)] = (11));

} else {
var statearr_51532_51555 = state_51509__$1;
(statearr_51532_51555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__43191__auto___51537,ch))
;
return ((function (switch__43103__auto__,c__43191__auto___51537,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43104__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43104__auto____0 = (function (){
var statearr_51533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51533[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43104__auto__);

(statearr_51533[(1)] = (1));

return statearr_51533;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43104__auto____1 = (function (state_51509){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_51509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e51534){if((e51534 instanceof Object)){
var ex__43107__auto__ = e51534;
var statearr_51535_51556 = state_51509;
(statearr_51535_51556[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51557 = state_51509;
state_51509 = G__51557;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43104__auto__ = function(state_51509){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43104__auto____1.call(this,state_51509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43104__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43104__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto___51537,ch))
})();
var state__43193__auto__ = (function (){var statearr_51536 = f__43192__auto__.call(null);
(statearr_51536[(6)] = c__43191__auto___51537);

return statearr_51536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto___51537,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51558_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51558_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51560 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_51560){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e51559){if((e51559 instanceof Error)){
var e = e51559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51560], null));
} else {
var e = e51559;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_51560))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51561){
var map__51562 = p__51561;
var map__51562__$1 = ((((!((map__51562 == null)))?((((map__51562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51562):map__51562);
var opts = map__51562__$1;
var build_id = cljs.core.get.call(null,map__51562__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__51562,map__51562__$1,opts,build_id){
return (function (p__51564){
var vec__51565 = p__51564;
var seq__51566 = cljs.core.seq.call(null,vec__51565);
var first__51567 = cljs.core.first.call(null,seq__51566);
var seq__51566__$1 = cljs.core.next.call(null,seq__51566);
var map__51568 = first__51567;
var map__51568__$1 = ((((!((map__51568 == null)))?((((map__51568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51568):map__51568);
var msg = map__51568__$1;
var msg_name = cljs.core.get.call(null,map__51568__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51566__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__51565,seq__51566,first__51567,seq__51566__$1,map__51568,map__51568__$1,msg,msg_name,_,map__51562,map__51562__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__51565,seq__51566,first__51567,seq__51566__$1,map__51568,map__51568__$1,msg,msg_name,_,map__51562,map__51562__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__51562,map__51562__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51570){
var vec__51571 = p__51570;
var seq__51572 = cljs.core.seq.call(null,vec__51571);
var first__51573 = cljs.core.first.call(null,seq__51572);
var seq__51572__$1 = cljs.core.next.call(null,seq__51572);
var map__51574 = first__51573;
var map__51574__$1 = ((((!((map__51574 == null)))?((((map__51574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51574.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51574):map__51574);
var msg = map__51574__$1;
var msg_name = cljs.core.get.call(null,map__51574__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51572__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51576){
var map__51577 = p__51576;
var map__51577__$1 = ((((!((map__51577 == null)))?((((map__51577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51577.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51577):map__51577);
var on_compile_warning = cljs.core.get.call(null,map__51577__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51577__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__51577,map__51577__$1,on_compile_warning,on_compile_fail){
return (function (p__51579){
var vec__51580 = p__51579;
var seq__51581 = cljs.core.seq.call(null,vec__51580);
var first__51582 = cljs.core.first.call(null,seq__51581);
var seq__51581__$1 = cljs.core.next.call(null,seq__51581);
var map__51583 = first__51582;
var map__51583__$1 = ((((!((map__51583 == null)))?((((map__51583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51583):map__51583);
var msg = map__51583__$1;
var msg_name = cljs.core.get.call(null,map__51583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51581__$1;
var pred__51585 = cljs.core._EQ_;
var expr__51586 = msg_name;
if(cljs.core.truth_(pred__51585.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51586))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51585.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51586))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__51577,map__51577__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__43191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto__,msg_hist,msg_names,msg){
return (function (state_51675){
var state_val_51676 = (state_51675[(1)]);
if((state_val_51676 === (7))){
var inst_51595 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51595)){
var statearr_51677_51724 = state_51675__$1;
(statearr_51677_51724[(1)] = (8));

} else {
var statearr_51678_51725 = state_51675__$1;
(statearr_51678_51725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (20))){
var inst_51669 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51679_51726 = state_51675__$1;
(statearr_51679_51726[(2)] = inst_51669);

(statearr_51679_51726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (27))){
var inst_51665 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51680_51727 = state_51675__$1;
(statearr_51680_51727[(2)] = inst_51665);

(statearr_51680_51727[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (1))){
var inst_51588 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51588)){
var statearr_51681_51728 = state_51675__$1;
(statearr_51681_51728[(1)] = (2));

} else {
var statearr_51682_51729 = state_51675__$1;
(statearr_51682_51729[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (24))){
var inst_51667 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51683_51730 = state_51675__$1;
(statearr_51683_51730[(2)] = inst_51667);

(statearr_51683_51730[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (4))){
var inst_51673 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51675__$1,inst_51673);
} else {
if((state_val_51676 === (15))){
var inst_51671 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51684_51731 = state_51675__$1;
(statearr_51684_51731[(2)] = inst_51671);

(statearr_51684_51731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (21))){
var inst_51624 = (state_51675[(2)]);
var inst_51625 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51626 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51625);
var state_51675__$1 = (function (){var statearr_51685 = state_51675;
(statearr_51685[(7)] = inst_51624);

return statearr_51685;
})();
var statearr_51686_51732 = state_51675__$1;
(statearr_51686_51732[(2)] = inst_51626);

(statearr_51686_51732[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (31))){
var inst_51654 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51654)){
var statearr_51687_51733 = state_51675__$1;
(statearr_51687_51733[(1)] = (34));

} else {
var statearr_51688_51734 = state_51675__$1;
(statearr_51688_51734[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (32))){
var inst_51663 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51689_51735 = state_51675__$1;
(statearr_51689_51735[(2)] = inst_51663);

(statearr_51689_51735[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (33))){
var inst_51650 = (state_51675[(2)]);
var inst_51651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51652 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51651);
var state_51675__$1 = (function (){var statearr_51690 = state_51675;
(statearr_51690[(8)] = inst_51650);

return statearr_51690;
})();
var statearr_51691_51736 = state_51675__$1;
(statearr_51691_51736[(2)] = inst_51652);

(statearr_51691_51736[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (13))){
var inst_51609 = figwheel.client.heads_up.clear.call(null);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(16),inst_51609);
} else {
if((state_val_51676 === (22))){
var inst_51630 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51631 = figwheel.client.heads_up.append_warning_message.call(null,inst_51630);
var state_51675__$1 = state_51675;
var statearr_51692_51737 = state_51675__$1;
(statearr_51692_51737[(2)] = inst_51631);

(statearr_51692_51737[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (36))){
var inst_51661 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51693_51738 = state_51675__$1;
(statearr_51693_51738[(2)] = inst_51661);

(statearr_51693_51738[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (29))){
var inst_51641 = (state_51675[(2)]);
var inst_51642 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51643 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51642);
var state_51675__$1 = (function (){var statearr_51694 = state_51675;
(statearr_51694[(9)] = inst_51641);

return statearr_51694;
})();
var statearr_51695_51739 = state_51675__$1;
(statearr_51695_51739[(2)] = inst_51643);

(statearr_51695_51739[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (6))){
var inst_51590 = (state_51675[(10)]);
var state_51675__$1 = state_51675;
var statearr_51696_51740 = state_51675__$1;
(statearr_51696_51740[(2)] = inst_51590);

(statearr_51696_51740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (28))){
var inst_51637 = (state_51675[(2)]);
var inst_51638 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51639 = figwheel.client.heads_up.display_warning.call(null,inst_51638);
var state_51675__$1 = (function (){var statearr_51697 = state_51675;
(statearr_51697[(11)] = inst_51637);

return statearr_51697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(29),inst_51639);
} else {
if((state_val_51676 === (25))){
var inst_51635 = figwheel.client.heads_up.clear.call(null);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(28),inst_51635);
} else {
if((state_val_51676 === (34))){
var inst_51656 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(37),inst_51656);
} else {
if((state_val_51676 === (17))){
var inst_51615 = (state_51675[(2)]);
var inst_51616 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51617 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51616);
var state_51675__$1 = (function (){var statearr_51698 = state_51675;
(statearr_51698[(12)] = inst_51615);

return statearr_51698;
})();
var statearr_51699_51741 = state_51675__$1;
(statearr_51699_51741[(2)] = inst_51617);

(statearr_51699_51741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (3))){
var inst_51607 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51607)){
var statearr_51700_51742 = state_51675__$1;
(statearr_51700_51742[(1)] = (13));

} else {
var statearr_51701_51743 = state_51675__$1;
(statearr_51701_51743[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (12))){
var inst_51603 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51702_51744 = state_51675__$1;
(statearr_51702_51744[(2)] = inst_51603);

(statearr_51702_51744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (2))){
var inst_51590 = (state_51675[(10)]);
var inst_51590__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51675__$1 = (function (){var statearr_51703 = state_51675;
(statearr_51703[(10)] = inst_51590__$1);

return statearr_51703;
})();
if(cljs.core.truth_(inst_51590__$1)){
var statearr_51704_51745 = state_51675__$1;
(statearr_51704_51745[(1)] = (5));

} else {
var statearr_51705_51746 = state_51675__$1;
(statearr_51705_51746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (23))){
var inst_51633 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51633)){
var statearr_51706_51747 = state_51675__$1;
(statearr_51706_51747[(1)] = (25));

} else {
var statearr_51707_51748 = state_51675__$1;
(statearr_51707_51748[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (35))){
var state_51675__$1 = state_51675;
var statearr_51708_51749 = state_51675__$1;
(statearr_51708_51749[(2)] = null);

(statearr_51708_51749[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (19))){
var inst_51628 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51628)){
var statearr_51709_51750 = state_51675__$1;
(statearr_51709_51750[(1)] = (22));

} else {
var statearr_51710_51751 = state_51675__$1;
(statearr_51710_51751[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (11))){
var inst_51599 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51711_51752 = state_51675__$1;
(statearr_51711_51752[(2)] = inst_51599);

(statearr_51711_51752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (9))){
var inst_51601 = figwheel.client.heads_up.clear.call(null);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(12),inst_51601);
} else {
if((state_val_51676 === (5))){
var inst_51592 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51675__$1 = state_51675;
var statearr_51712_51753 = state_51675__$1;
(statearr_51712_51753[(2)] = inst_51592);

(statearr_51712_51753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (14))){
var inst_51619 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51619)){
var statearr_51713_51754 = state_51675__$1;
(statearr_51713_51754[(1)] = (18));

} else {
var statearr_51714_51755 = state_51675__$1;
(statearr_51714_51755[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (26))){
var inst_51645 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51675__$1 = state_51675;
if(cljs.core.truth_(inst_51645)){
var statearr_51715_51756 = state_51675__$1;
(statearr_51715_51756[(1)] = (30));

} else {
var statearr_51716_51757 = state_51675__$1;
(statearr_51716_51757[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (16))){
var inst_51611 = (state_51675[(2)]);
var inst_51612 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51613 = figwheel.client.heads_up.display_exception.call(null,inst_51612);
var state_51675__$1 = (function (){var statearr_51717 = state_51675;
(statearr_51717[(13)] = inst_51611);

return statearr_51717;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(17),inst_51613);
} else {
if((state_val_51676 === (30))){
var inst_51647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51648 = figwheel.client.heads_up.display_warning.call(null,inst_51647);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(33),inst_51648);
} else {
if((state_val_51676 === (10))){
var inst_51605 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51718_51758 = state_51675__$1;
(statearr_51718_51758[(2)] = inst_51605);

(statearr_51718_51758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (18))){
var inst_51621 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51622 = figwheel.client.heads_up.display_exception.call(null,inst_51621);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(21),inst_51622);
} else {
if((state_val_51676 === (37))){
var inst_51658 = (state_51675[(2)]);
var state_51675__$1 = state_51675;
var statearr_51719_51759 = state_51675__$1;
(statearr_51719_51759[(2)] = inst_51658);

(statearr_51719_51759[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51676 === (8))){
var inst_51597 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51675__$1 = state_51675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51675__$1,(11),inst_51597);
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
});})(c__43191__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__43103__auto__,c__43191__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto____0 = (function (){
var statearr_51720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51720[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto__);

(statearr_51720[(1)] = (1));

return statearr_51720;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto____1 = (function (state_51675){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_51675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e51721){if((e51721 instanceof Object)){
var ex__43107__auto__ = e51721;
var statearr_51722_51760 = state_51675;
(statearr_51722_51760[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51761 = state_51675;
state_51675 = G__51761;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto__ = function(state_51675){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto____1.call(this,state_51675);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto__,msg_hist,msg_names,msg))
})();
var state__43193__auto__ = (function (){var statearr_51723 = f__43192__auto__.call(null);
(statearr_51723[(6)] = c__43191__auto__);

return statearr_51723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto__,msg_hist,msg_names,msg))
);

return c__43191__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43191__auto___51790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto___51790,ch){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto___51790,ch){
return (function (state_51776){
var state_val_51777 = (state_51776[(1)]);
if((state_val_51777 === (1))){
var state_51776__$1 = state_51776;
var statearr_51778_51791 = state_51776__$1;
(statearr_51778_51791[(2)] = null);

(statearr_51778_51791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (2))){
var state_51776__$1 = state_51776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51776__$1,(4),ch);
} else {
if((state_val_51777 === (3))){
var inst_51774 = (state_51776[(2)]);
var state_51776__$1 = state_51776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51776__$1,inst_51774);
} else {
if((state_val_51777 === (4))){
var inst_51764 = (state_51776[(7)]);
var inst_51764__$1 = (state_51776[(2)]);
var state_51776__$1 = (function (){var statearr_51779 = state_51776;
(statearr_51779[(7)] = inst_51764__$1);

return statearr_51779;
})();
if(cljs.core.truth_(inst_51764__$1)){
var statearr_51780_51792 = state_51776__$1;
(statearr_51780_51792[(1)] = (5));

} else {
var statearr_51781_51793 = state_51776__$1;
(statearr_51781_51793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (5))){
var inst_51764 = (state_51776[(7)]);
var inst_51766 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51764);
var state_51776__$1 = state_51776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51776__$1,(8),inst_51766);
} else {
if((state_val_51777 === (6))){
var state_51776__$1 = state_51776;
var statearr_51782_51794 = state_51776__$1;
(statearr_51782_51794[(2)] = null);

(statearr_51782_51794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (7))){
var inst_51772 = (state_51776[(2)]);
var state_51776__$1 = state_51776;
var statearr_51783_51795 = state_51776__$1;
(statearr_51783_51795[(2)] = inst_51772);

(statearr_51783_51795[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51777 === (8))){
var inst_51768 = (state_51776[(2)]);
var state_51776__$1 = (function (){var statearr_51784 = state_51776;
(statearr_51784[(8)] = inst_51768);

return statearr_51784;
})();
var statearr_51785_51796 = state_51776__$1;
(statearr_51785_51796[(2)] = null);

(statearr_51785_51796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__43191__auto___51790,ch))
;
return ((function (switch__43103__auto__,c__43191__auto___51790,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43104__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43104__auto____0 = (function (){
var statearr_51786 = [null,null,null,null,null,null,null,null,null];
(statearr_51786[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43104__auto__);

(statearr_51786[(1)] = (1));

return statearr_51786;
});
var figwheel$client$heads_up_plugin_$_state_machine__43104__auto____1 = (function (state_51776){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_51776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e51787){if((e51787 instanceof Object)){
var ex__43107__auto__ = e51787;
var statearr_51788_51797 = state_51776;
(statearr_51788_51797[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51798 = state_51776;
state_51776 = G__51798;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43104__auto__ = function(state_51776){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43104__auto____1.call(this,state_51776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43104__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43104__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto___51790,ch))
})();
var state__43193__auto__ = (function (){var statearr_51789 = f__43192__auto__.call(null);
(statearr_51789[(6)] = c__43191__auto___51790);

return statearr_51789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto___51790,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto__){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto__){
return (function (state_51804){
var state_val_51805 = (state_51804[(1)]);
if((state_val_51805 === (1))){
var inst_51799 = cljs.core.async.timeout.call(null,(3000));
var state_51804__$1 = state_51804;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51804__$1,(2),inst_51799);
} else {
if((state_val_51805 === (2))){
var inst_51801 = (state_51804[(2)]);
var inst_51802 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51804__$1 = (function (){var statearr_51806 = state_51804;
(statearr_51806[(7)] = inst_51801);

return statearr_51806;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51804__$1,inst_51802);
} else {
return null;
}
}
});})(c__43191__auto__))
;
return ((function (switch__43103__auto__,c__43191__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__43104__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__43104__auto____0 = (function (){
var statearr_51807 = [null,null,null,null,null,null,null,null];
(statearr_51807[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43104__auto__);

(statearr_51807[(1)] = (1));

return statearr_51807;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43104__auto____1 = (function (state_51804){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_51804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e51808){if((e51808 instanceof Object)){
var ex__43107__auto__ = e51808;
var statearr_51809_51811 = state_51804;
(statearr_51809_51811[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51812 = state_51804;
state_51804 = G__51812;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43104__auto__ = function(state_51804){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43104__auto____1.call(this,state_51804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43104__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43104__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto__))
})();
var state__43193__auto__ = (function (){var statearr_51810 = f__43192__auto__.call(null);
(statearr_51810[(6)] = c__43191__auto__);

return statearr_51810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto__))
);

return c__43191__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__43191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto__,figwheel_version,temp__4657__auto__){
return (function (state_51819){
var state_val_51820 = (state_51819[(1)]);
if((state_val_51820 === (1))){
var inst_51813 = cljs.core.async.timeout.call(null,(2000));
var state_51819__$1 = state_51819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51819__$1,(2),inst_51813);
} else {
if((state_val_51820 === (2))){
var inst_51815 = (state_51819[(2)]);
var inst_51816 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_51817 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51816);
var state_51819__$1 = (function (){var statearr_51821 = state_51819;
(statearr_51821[(7)] = inst_51815);

return statearr_51821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51819__$1,inst_51817);
} else {
return null;
}
}
});})(c__43191__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__43103__auto__,c__43191__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto____0 = (function (){
var statearr_51822 = [null,null,null,null,null,null,null,null];
(statearr_51822[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto__);

(statearr_51822[(1)] = (1));

return statearr_51822;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto____1 = (function (state_51819){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_51819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e51823){if((e51823 instanceof Object)){
var ex__43107__auto__ = e51823;
var statearr_51824_51826 = state_51819;
(statearr_51824_51826[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51827 = state_51819;
state_51819 = G__51827;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto__ = function(state_51819){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto____1.call(this,state_51819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto__,figwheel_version,temp__4657__auto__))
})();
var state__43193__auto__ = (function (){var statearr_51825 = f__43192__auto__.call(null);
(statearr_51825[(6)] = c__43191__auto__);

return statearr_51825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto__,figwheel_version,temp__4657__auto__))
);

return c__43191__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51828){
var map__51829 = p__51828;
var map__51829__$1 = ((((!((map__51829 == null)))?((((map__51829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51829):map__51829);
var file = cljs.core.get.call(null,map__51829__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51829__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51829__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51831 = "";
var G__51831__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51831),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51831);
var G__51831__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51831__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51831__$1);
if(cljs.core.truth_((function (){var and__40038__auto__ = line;
if(cljs.core.truth_(and__40038__auto__)){
return column;
} else {
return and__40038__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51831__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51831__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51832){
var map__51833 = p__51832;
var map__51833__$1 = ((((!((map__51833 == null)))?((((map__51833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51833.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51833):map__51833);
var ed = map__51833__$1;
var formatted_exception = cljs.core.get.call(null,map__51833__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__51833__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51833__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__51835_51839 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__51836_51840 = null;
var count__51837_51841 = (0);
var i__51838_51842 = (0);
while(true){
if((i__51838_51842 < count__51837_51841)){
var msg_51843 = cljs.core._nth.call(null,chunk__51836_51840,i__51838_51842);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51843);

var G__51844 = seq__51835_51839;
var G__51845 = chunk__51836_51840;
var G__51846 = count__51837_51841;
var G__51847 = (i__51838_51842 + (1));
seq__51835_51839 = G__51844;
chunk__51836_51840 = G__51845;
count__51837_51841 = G__51846;
i__51838_51842 = G__51847;
continue;
} else {
var temp__4657__auto___51848 = cljs.core.seq.call(null,seq__51835_51839);
if(temp__4657__auto___51848){
var seq__51835_51849__$1 = temp__4657__auto___51848;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51835_51849__$1)){
var c__40884__auto___51850 = cljs.core.chunk_first.call(null,seq__51835_51849__$1);
var G__51851 = cljs.core.chunk_rest.call(null,seq__51835_51849__$1);
var G__51852 = c__40884__auto___51850;
var G__51853 = cljs.core.count.call(null,c__40884__auto___51850);
var G__51854 = (0);
seq__51835_51839 = G__51851;
chunk__51836_51840 = G__51852;
count__51837_51841 = G__51853;
i__51838_51842 = G__51854;
continue;
} else {
var msg_51855 = cljs.core.first.call(null,seq__51835_51849__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_51855);

var G__51856 = cljs.core.next.call(null,seq__51835_51849__$1);
var G__51857 = null;
var G__51858 = (0);
var G__51859 = (0);
seq__51835_51839 = G__51856;
chunk__51836_51840 = G__51857;
count__51837_51841 = G__51858;
i__51838_51842 = G__51859;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51860){
var map__51861 = p__51860;
var map__51861__$1 = ((((!((map__51861 == null)))?((((map__51861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51861):map__51861);
var w = map__51861__$1;
var message = cljs.core.get.call(null,map__51861__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__40038__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__40038__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__40038__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51863 = cljs.core.seq.call(null,plugins);
var chunk__51864 = null;
var count__51865 = (0);
var i__51866 = (0);
while(true){
if((i__51866 < count__51865)){
var vec__51867 = cljs.core._nth.call(null,chunk__51864,i__51866);
var k = cljs.core.nth.call(null,vec__51867,(0),null);
var plugin = cljs.core.nth.call(null,vec__51867,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51873 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51863,chunk__51864,count__51865,i__51866,pl_51873,vec__51867,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51873.call(null,msg_hist);
});})(seq__51863,chunk__51864,count__51865,i__51866,pl_51873,vec__51867,k,plugin))
);
} else {
}

var G__51874 = seq__51863;
var G__51875 = chunk__51864;
var G__51876 = count__51865;
var G__51877 = (i__51866 + (1));
seq__51863 = G__51874;
chunk__51864 = G__51875;
count__51865 = G__51876;
i__51866 = G__51877;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51863);
if(temp__4657__auto__){
var seq__51863__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51863__$1)){
var c__40884__auto__ = cljs.core.chunk_first.call(null,seq__51863__$1);
var G__51878 = cljs.core.chunk_rest.call(null,seq__51863__$1);
var G__51879 = c__40884__auto__;
var G__51880 = cljs.core.count.call(null,c__40884__auto__);
var G__51881 = (0);
seq__51863 = G__51878;
chunk__51864 = G__51879;
count__51865 = G__51880;
i__51866 = G__51881;
continue;
} else {
var vec__51870 = cljs.core.first.call(null,seq__51863__$1);
var k = cljs.core.nth.call(null,vec__51870,(0),null);
var plugin = cljs.core.nth.call(null,vec__51870,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51882 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51863,chunk__51864,count__51865,i__51866,pl_51882,vec__51870,k,plugin,seq__51863__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51882.call(null,msg_hist);
});})(seq__51863,chunk__51864,count__51865,i__51866,pl_51882,vec__51870,k,plugin,seq__51863__$1,temp__4657__auto__))
);
} else {
}

var G__51883 = cljs.core.next.call(null,seq__51863__$1);
var G__51884 = null;
var G__51885 = (0);
var G__51886 = (0);
seq__51863 = G__51883;
chunk__51864 = G__51884;
count__51865 = G__51885;
i__51866 = G__51886;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51888 = arguments.length;
switch (G__51888) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51889_51894 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51890_51895 = null;
var count__51891_51896 = (0);
var i__51892_51897 = (0);
while(true){
if((i__51892_51897 < count__51891_51896)){
var msg_51898 = cljs.core._nth.call(null,chunk__51890_51895,i__51892_51897);
figwheel.client.socket.handle_incoming_message.call(null,msg_51898);

var G__51899 = seq__51889_51894;
var G__51900 = chunk__51890_51895;
var G__51901 = count__51891_51896;
var G__51902 = (i__51892_51897 + (1));
seq__51889_51894 = G__51899;
chunk__51890_51895 = G__51900;
count__51891_51896 = G__51901;
i__51892_51897 = G__51902;
continue;
} else {
var temp__4657__auto___51903 = cljs.core.seq.call(null,seq__51889_51894);
if(temp__4657__auto___51903){
var seq__51889_51904__$1 = temp__4657__auto___51903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51889_51904__$1)){
var c__40884__auto___51905 = cljs.core.chunk_first.call(null,seq__51889_51904__$1);
var G__51906 = cljs.core.chunk_rest.call(null,seq__51889_51904__$1);
var G__51907 = c__40884__auto___51905;
var G__51908 = cljs.core.count.call(null,c__40884__auto___51905);
var G__51909 = (0);
seq__51889_51894 = G__51906;
chunk__51890_51895 = G__51907;
count__51891_51896 = G__51908;
i__51892_51897 = G__51909;
continue;
} else {
var msg_51910 = cljs.core.first.call(null,seq__51889_51904__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51910);

var G__51911 = cljs.core.next.call(null,seq__51889_51904__$1);
var G__51912 = null;
var G__51913 = (0);
var G__51914 = (0);
seq__51889_51894 = G__51911;
chunk__51890_51895 = G__51912;
count__51891_51896 = G__51913;
i__51892_51897 = G__51914;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__41221__auto__ = [];
var len__41214__auto___51919 = arguments.length;
var i__41215__auto___51920 = (0);
while(true){
if((i__41215__auto___51920 < len__41214__auto___51919)){
args__41221__auto__.push((arguments[i__41215__auto___51920]));

var G__51921 = (i__41215__auto___51920 + (1));
i__41215__auto___51920 = G__51921;
continue;
} else {
}
break;
}

var argseq__41222__auto__ = ((((0) < args__41221__auto__.length))?(new cljs.core.IndexedSeq(args__41221__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__41222__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51916){
var map__51917 = p__51916;
var map__51917__$1 = ((((!((map__51917 == null)))?((((map__51917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51917):map__51917);
var opts = map__51917__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51915){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51915));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51922){if((e51922 instanceof Error)){
var e = e51922;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51922;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__51923){
var map__51924 = p__51923;
var map__51924__$1 = ((((!((map__51924 == null)))?((((map__51924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51924):map__51924);
var msg_name = cljs.core.get.call(null,map__51924__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1501581677043
