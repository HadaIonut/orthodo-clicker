// Compiled by ClojureScript 1.9.854 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__40050__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__40050__auto__){
return or__40050__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__40050__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__40050__auto__)){
return or__40050__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__49923_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__49923_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__49924 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__49925 = null;
var count__49926 = (0);
var i__49927 = (0);
while(true){
if((i__49927 < count__49926)){
var n = cljs.core._nth.call(null,chunk__49925,i__49927);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49928 = seq__49924;
var G__49929 = chunk__49925;
var G__49930 = count__49926;
var G__49931 = (i__49927 + (1));
seq__49924 = G__49928;
chunk__49925 = G__49929;
count__49926 = G__49930;
i__49927 = G__49931;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49924);
if(temp__4657__auto__){
var seq__49924__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49924__$1)){
var c__40884__auto__ = cljs.core.chunk_first.call(null,seq__49924__$1);
var G__49932 = cljs.core.chunk_rest.call(null,seq__49924__$1);
var G__49933 = c__40884__auto__;
var G__49934 = cljs.core.count.call(null,c__40884__auto__);
var G__49935 = (0);
seq__49924 = G__49932;
chunk__49925 = G__49933;
count__49926 = G__49934;
i__49927 = G__49935;
continue;
} else {
var n = cljs.core.first.call(null,seq__49924__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__49936 = cljs.core.next.call(null,seq__49924__$1);
var G__49937 = null;
var G__49938 = (0);
var G__49939 = (0);
seq__49924 = G__49936;
chunk__49925 = G__49937;
count__49926 = G__49938;
i__49927 = G__49939;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__49949_49957 = cljs.core.seq.call(null,deps);
var chunk__49950_49958 = null;
var count__49951_49959 = (0);
var i__49952_49960 = (0);
while(true){
if((i__49952_49960 < count__49951_49959)){
var dep_49961 = cljs.core._nth.call(null,chunk__49950_49958,i__49952_49960);
topo_sort_helper_STAR_.call(null,dep_49961,(depth + (1)),state);

var G__49962 = seq__49949_49957;
var G__49963 = chunk__49950_49958;
var G__49964 = count__49951_49959;
var G__49965 = (i__49952_49960 + (1));
seq__49949_49957 = G__49962;
chunk__49950_49958 = G__49963;
count__49951_49959 = G__49964;
i__49952_49960 = G__49965;
continue;
} else {
var temp__4657__auto___49966 = cljs.core.seq.call(null,seq__49949_49957);
if(temp__4657__auto___49966){
var seq__49949_49967__$1 = temp__4657__auto___49966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49949_49967__$1)){
var c__40884__auto___49968 = cljs.core.chunk_first.call(null,seq__49949_49967__$1);
var G__49969 = cljs.core.chunk_rest.call(null,seq__49949_49967__$1);
var G__49970 = c__40884__auto___49968;
var G__49971 = cljs.core.count.call(null,c__40884__auto___49968);
var G__49972 = (0);
seq__49949_49957 = G__49969;
chunk__49950_49958 = G__49970;
count__49951_49959 = G__49971;
i__49952_49960 = G__49972;
continue;
} else {
var dep_49973 = cljs.core.first.call(null,seq__49949_49967__$1);
topo_sort_helper_STAR_.call(null,dep_49973,(depth + (1)),state);

var G__49974 = cljs.core.next.call(null,seq__49949_49967__$1);
var G__49975 = null;
var G__49976 = (0);
var G__49977 = (0);
seq__49949_49957 = G__49974;
chunk__49950_49958 = G__49975;
count__49951_49959 = G__49976;
i__49952_49960 = G__49977;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__49953){
var vec__49954 = p__49953;
var seq__49955 = cljs.core.seq.call(null,vec__49954);
var first__49956 = cljs.core.first.call(null,seq__49955);
var seq__49955__$1 = cljs.core.next.call(null,seq__49955);
var x = first__49956;
var xs = seq__49955__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__49954,seq__49955,first__49956,seq__49955__$1,x,xs,get_deps__$1){
return (function (p1__49940_SHARP_){
return clojure.set.difference.call(null,p1__49940_SHARP_,x);
});})(vec__49954,seq__49955,first__49956,seq__49955__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__49978 = cljs.core.seq.call(null,provides);
var chunk__49979 = null;
var count__49980 = (0);
var i__49981 = (0);
while(true){
if((i__49981 < count__49980)){
var prov = cljs.core._nth.call(null,chunk__49979,i__49981);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49982_49990 = cljs.core.seq.call(null,requires);
var chunk__49983_49991 = null;
var count__49984_49992 = (0);
var i__49985_49993 = (0);
while(true){
if((i__49985_49993 < count__49984_49992)){
var req_49994 = cljs.core._nth.call(null,chunk__49983_49991,i__49985_49993);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_49994,prov);

var G__49995 = seq__49982_49990;
var G__49996 = chunk__49983_49991;
var G__49997 = count__49984_49992;
var G__49998 = (i__49985_49993 + (1));
seq__49982_49990 = G__49995;
chunk__49983_49991 = G__49996;
count__49984_49992 = G__49997;
i__49985_49993 = G__49998;
continue;
} else {
var temp__4657__auto___49999 = cljs.core.seq.call(null,seq__49982_49990);
if(temp__4657__auto___49999){
var seq__49982_50000__$1 = temp__4657__auto___49999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49982_50000__$1)){
var c__40884__auto___50001 = cljs.core.chunk_first.call(null,seq__49982_50000__$1);
var G__50002 = cljs.core.chunk_rest.call(null,seq__49982_50000__$1);
var G__50003 = c__40884__auto___50001;
var G__50004 = cljs.core.count.call(null,c__40884__auto___50001);
var G__50005 = (0);
seq__49982_49990 = G__50002;
chunk__49983_49991 = G__50003;
count__49984_49992 = G__50004;
i__49985_49993 = G__50005;
continue;
} else {
var req_50006 = cljs.core.first.call(null,seq__49982_50000__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50006,prov);

var G__50007 = cljs.core.next.call(null,seq__49982_50000__$1);
var G__50008 = null;
var G__50009 = (0);
var G__50010 = (0);
seq__49982_49990 = G__50007;
chunk__49983_49991 = G__50008;
count__49984_49992 = G__50009;
i__49985_49993 = G__50010;
continue;
}
} else {
}
}
break;
}

var G__50011 = seq__49978;
var G__50012 = chunk__49979;
var G__50013 = count__49980;
var G__50014 = (i__49981 + (1));
seq__49978 = G__50011;
chunk__49979 = G__50012;
count__49980 = G__50013;
i__49981 = G__50014;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49978);
if(temp__4657__auto__){
var seq__49978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49978__$1)){
var c__40884__auto__ = cljs.core.chunk_first.call(null,seq__49978__$1);
var G__50015 = cljs.core.chunk_rest.call(null,seq__49978__$1);
var G__50016 = c__40884__auto__;
var G__50017 = cljs.core.count.call(null,c__40884__auto__);
var G__50018 = (0);
seq__49978 = G__50015;
chunk__49979 = G__50016;
count__49980 = G__50017;
i__49981 = G__50018;
continue;
} else {
var prov = cljs.core.first.call(null,seq__49978__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__49986_50019 = cljs.core.seq.call(null,requires);
var chunk__49987_50020 = null;
var count__49988_50021 = (0);
var i__49989_50022 = (0);
while(true){
if((i__49989_50022 < count__49988_50021)){
var req_50023 = cljs.core._nth.call(null,chunk__49987_50020,i__49989_50022);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50023,prov);

var G__50024 = seq__49986_50019;
var G__50025 = chunk__49987_50020;
var G__50026 = count__49988_50021;
var G__50027 = (i__49989_50022 + (1));
seq__49986_50019 = G__50024;
chunk__49987_50020 = G__50025;
count__49988_50021 = G__50026;
i__49989_50022 = G__50027;
continue;
} else {
var temp__4657__auto___50028__$1 = cljs.core.seq.call(null,seq__49986_50019);
if(temp__4657__auto___50028__$1){
var seq__49986_50029__$1 = temp__4657__auto___50028__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49986_50029__$1)){
var c__40884__auto___50030 = cljs.core.chunk_first.call(null,seq__49986_50029__$1);
var G__50031 = cljs.core.chunk_rest.call(null,seq__49986_50029__$1);
var G__50032 = c__40884__auto___50030;
var G__50033 = cljs.core.count.call(null,c__40884__auto___50030);
var G__50034 = (0);
seq__49986_50019 = G__50031;
chunk__49987_50020 = G__50032;
count__49988_50021 = G__50033;
i__49989_50022 = G__50034;
continue;
} else {
var req_50035 = cljs.core.first.call(null,seq__49986_50029__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_50035,prov);

var G__50036 = cljs.core.next.call(null,seq__49986_50029__$1);
var G__50037 = null;
var G__50038 = (0);
var G__50039 = (0);
seq__49986_50019 = G__50036;
chunk__49987_50020 = G__50037;
count__49988_50021 = G__50038;
i__49989_50022 = G__50039;
continue;
}
} else {
}
}
break;
}

var G__50040 = cljs.core.next.call(null,seq__49978__$1);
var G__50041 = null;
var G__50042 = (0);
var G__50043 = (0);
seq__49978 = G__50040;
chunk__49979 = G__50041;
count__49980 = G__50042;
i__49981 = G__50043;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__50044_50048 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__50045_50049 = null;
var count__50046_50050 = (0);
var i__50047_50051 = (0);
while(true){
if((i__50047_50051 < count__50046_50050)){
var ns_50052 = cljs.core._nth.call(null,chunk__50045_50049,i__50047_50051);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50052);

var G__50053 = seq__50044_50048;
var G__50054 = chunk__50045_50049;
var G__50055 = count__50046_50050;
var G__50056 = (i__50047_50051 + (1));
seq__50044_50048 = G__50053;
chunk__50045_50049 = G__50054;
count__50046_50050 = G__50055;
i__50047_50051 = G__50056;
continue;
} else {
var temp__4657__auto___50057 = cljs.core.seq.call(null,seq__50044_50048);
if(temp__4657__auto___50057){
var seq__50044_50058__$1 = temp__4657__auto___50057;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50044_50058__$1)){
var c__40884__auto___50059 = cljs.core.chunk_first.call(null,seq__50044_50058__$1);
var G__50060 = cljs.core.chunk_rest.call(null,seq__50044_50058__$1);
var G__50061 = c__40884__auto___50059;
var G__50062 = cljs.core.count.call(null,c__40884__auto___50059);
var G__50063 = (0);
seq__50044_50048 = G__50060;
chunk__50045_50049 = G__50061;
count__50046_50050 = G__50062;
i__50047_50051 = G__50063;
continue;
} else {
var ns_50064 = cljs.core.first.call(null,seq__50044_50058__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_50064);

var G__50065 = cljs.core.next.call(null,seq__50044_50058__$1);
var G__50066 = null;
var G__50067 = (0);
var G__50068 = (0);
seq__50044_50048 = G__50065;
chunk__50045_50049 = G__50066;
count__50046_50050 = G__50067;
i__50047_50051 = G__50068;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__40050__auto__ = goog.require__;
if(cljs.core.truth_(or__40050__auto__)){
return or__40050__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__50069__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__50069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__50070__i = 0, G__50070__a = new Array(arguments.length -  0);
while (G__50070__i < G__50070__a.length) {G__50070__a[G__50070__i] = arguments[G__50070__i + 0]; ++G__50070__i;}
  args = new cljs.core.IndexedSeq(G__50070__a,0,null);
} 
return G__50069__delegate.call(this,args);};
G__50069.cljs$lang$maxFixedArity = 0;
G__50069.cljs$lang$applyTo = (function (arglist__50071){
var args = cljs.core.seq(arglist__50071);
return G__50069__delegate(args);
});
G__50069.cljs$core$IFn$_invoke$arity$variadic = G__50069__delegate;
return G__50069;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__50072 = cljs.core._EQ_;
var expr__50073 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__50072.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__50073))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__50072,expr__50073){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__50072,expr__50073))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__50072,expr__50073){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e50075){if((e50075 instanceof Error)){
var e = e50075;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50075;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__50072,expr__50073))
} else {
if(cljs.core.truth_(pred__50072.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__50073))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__50072.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__50073))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__50072.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__50073))){
return ((function (pred__50072,expr__50073){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e50076){if((e50076 instanceof Error)){
var e = e50076;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e50076;

}
}})());
});
;})(pred__50072,expr__50073))
} else {
return ((function (pred__50072,expr__50073){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__50072,expr__50073))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__50077,callback){
var map__50078 = p__50077;
var map__50078__$1 = ((((!((map__50078 == null)))?((((map__50078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50078.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50078):map__50078);
var file_msg = map__50078__$1;
var request_url = cljs.core.get.call(null,map__50078__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__50078,map__50078__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__50078,map__50078__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__43191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto__){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto__){
return (function (state_50102){
var state_val_50103 = (state_50102[(1)]);
if((state_val_50103 === (7))){
var inst_50098 = (state_50102[(2)]);
var state_50102__$1 = state_50102;
var statearr_50104_50121 = state_50102__$1;
(statearr_50104_50121[(2)] = inst_50098);

(statearr_50104_50121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50103 === (1))){
var state_50102__$1 = state_50102;
var statearr_50105_50122 = state_50102__$1;
(statearr_50105_50122[(2)] = null);

(statearr_50105_50122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50103 === (4))){
var inst_50082 = (state_50102[(7)]);
var inst_50082__$1 = (state_50102[(2)]);
var state_50102__$1 = (function (){var statearr_50106 = state_50102;
(statearr_50106[(7)] = inst_50082__$1);

return statearr_50106;
})();
if(cljs.core.truth_(inst_50082__$1)){
var statearr_50107_50123 = state_50102__$1;
(statearr_50107_50123[(1)] = (5));

} else {
var statearr_50108_50124 = state_50102__$1;
(statearr_50108_50124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50103 === (6))){
var state_50102__$1 = state_50102;
var statearr_50109_50125 = state_50102__$1;
(statearr_50109_50125[(2)] = null);

(statearr_50109_50125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50103 === (3))){
var inst_50100 = (state_50102[(2)]);
var state_50102__$1 = state_50102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50102__$1,inst_50100);
} else {
if((state_val_50103 === (2))){
var state_50102__$1 = state_50102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50102__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_50103 === (11))){
var inst_50094 = (state_50102[(2)]);
var state_50102__$1 = (function (){var statearr_50110 = state_50102;
(statearr_50110[(8)] = inst_50094);

return statearr_50110;
})();
var statearr_50111_50126 = state_50102__$1;
(statearr_50111_50126[(2)] = null);

(statearr_50111_50126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50103 === (9))){
var inst_50088 = (state_50102[(9)]);
var inst_50086 = (state_50102[(10)]);
var inst_50090 = inst_50088.call(null,inst_50086);
var state_50102__$1 = state_50102;
var statearr_50112_50127 = state_50102__$1;
(statearr_50112_50127[(2)] = inst_50090);

(statearr_50112_50127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50103 === (5))){
var inst_50082 = (state_50102[(7)]);
var inst_50084 = figwheel.client.file_reloading.blocking_load.call(null,inst_50082);
var state_50102__$1 = state_50102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50102__$1,(8),inst_50084);
} else {
if((state_val_50103 === (10))){
var inst_50086 = (state_50102[(10)]);
var inst_50092 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_50086);
var state_50102__$1 = state_50102;
var statearr_50113_50128 = state_50102__$1;
(statearr_50113_50128[(2)] = inst_50092);

(statearr_50113_50128[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50103 === (8))){
var inst_50088 = (state_50102[(9)]);
var inst_50082 = (state_50102[(7)]);
var inst_50086 = (state_50102[(2)]);
var inst_50087 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_50088__$1 = cljs.core.get.call(null,inst_50087,inst_50082);
var state_50102__$1 = (function (){var statearr_50114 = state_50102;
(statearr_50114[(9)] = inst_50088__$1);

(statearr_50114[(10)] = inst_50086);

return statearr_50114;
})();
if(cljs.core.truth_(inst_50088__$1)){
var statearr_50115_50129 = state_50102__$1;
(statearr_50115_50129[(1)] = (9));

} else {
var statearr_50116_50130 = state_50102__$1;
(statearr_50116_50130[(1)] = (10));

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
});})(c__43191__auto__))
;
return ((function (switch__43103__auto__,c__43191__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43104__auto__ = null;
var figwheel$client$file_reloading$state_machine__43104__auto____0 = (function (){
var statearr_50117 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50117[(0)] = figwheel$client$file_reloading$state_machine__43104__auto__);

(statearr_50117[(1)] = (1));

return statearr_50117;
});
var figwheel$client$file_reloading$state_machine__43104__auto____1 = (function (state_50102){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_50102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e50118){if((e50118 instanceof Object)){
var ex__43107__auto__ = e50118;
var statearr_50119_50131 = state_50102;
(statearr_50119_50131[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50132 = state_50102;
state_50102 = G__50132;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43104__auto__ = function(state_50102){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43104__auto____1.call(this,state_50102);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43104__auto____0;
figwheel$client$file_reloading$state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43104__auto____1;
return figwheel$client$file_reloading$state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto__))
})();
var state__43193__auto__ = (function (){var statearr_50120 = f__43192__auto__.call(null);
(statearr_50120[(6)] = c__43191__auto__);

return statearr_50120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto__))
);

return c__43191__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__50133,callback){
var map__50134 = p__50133;
var map__50134__$1 = ((((!((map__50134 == null)))?((((map__50134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50134):map__50134);
var file_msg = map__50134__$1;
var namespace = cljs.core.get.call(null,map__50134__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__50134,map__50134__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__50134,map__50134__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__50136){
var map__50137 = p__50136;
var map__50137__$1 = ((((!((map__50137 == null)))?((((map__50137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50137.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50137):map__50137);
var file_msg = map__50137__$1;
var namespace = cljs.core.get.call(null,map__50137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__50139){
var map__50140 = p__50139;
var map__50140__$1 = ((((!((map__50140 == null)))?((((map__50140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50140.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50140):map__50140);
var file_msg = map__50140__$1;
var namespace = cljs.core.get.call(null,map__50140__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__40038__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__40038__auto__){
var or__40050__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40050__auto__)){
return or__40050__auto__;
} else {
var or__40050__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__40050__auto____$1)){
return or__40050__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__40038__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__50142,callback){
var map__50143 = p__50142;
var map__50143__$1 = ((((!((map__50143 == null)))?((((map__50143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50143):map__50143);
var file_msg = map__50143__$1;
var request_url = cljs.core.get.call(null,map__50143__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__50143__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__43191__auto___50193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto___50193,out){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto___50193,out){
return (function (state_50178){
var state_val_50179 = (state_50178[(1)]);
if((state_val_50179 === (1))){
var inst_50152 = cljs.core.seq.call(null,files);
var inst_50153 = cljs.core.first.call(null,inst_50152);
var inst_50154 = cljs.core.next.call(null,inst_50152);
var inst_50155 = files;
var state_50178__$1 = (function (){var statearr_50180 = state_50178;
(statearr_50180[(7)] = inst_50154);

(statearr_50180[(8)] = inst_50155);

(statearr_50180[(9)] = inst_50153);

return statearr_50180;
})();
var statearr_50181_50194 = state_50178__$1;
(statearr_50181_50194[(2)] = null);

(statearr_50181_50194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50179 === (2))){
var inst_50155 = (state_50178[(8)]);
var inst_50161 = (state_50178[(10)]);
var inst_50160 = cljs.core.seq.call(null,inst_50155);
var inst_50161__$1 = cljs.core.first.call(null,inst_50160);
var inst_50162 = cljs.core.next.call(null,inst_50160);
var inst_50163 = (inst_50161__$1 == null);
var inst_50164 = cljs.core.not.call(null,inst_50163);
var state_50178__$1 = (function (){var statearr_50182 = state_50178;
(statearr_50182[(10)] = inst_50161__$1);

(statearr_50182[(11)] = inst_50162);

return statearr_50182;
})();
if(inst_50164){
var statearr_50183_50195 = state_50178__$1;
(statearr_50183_50195[(1)] = (4));

} else {
var statearr_50184_50196 = state_50178__$1;
(statearr_50184_50196[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50179 === (3))){
var inst_50176 = (state_50178[(2)]);
var state_50178__$1 = state_50178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50178__$1,inst_50176);
} else {
if((state_val_50179 === (4))){
var inst_50161 = (state_50178[(10)]);
var inst_50166 = figwheel.client.file_reloading.reload_js_file.call(null,inst_50161);
var state_50178__$1 = state_50178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50178__$1,(7),inst_50166);
} else {
if((state_val_50179 === (5))){
var inst_50172 = cljs.core.async.close_BANG_.call(null,out);
var state_50178__$1 = state_50178;
var statearr_50185_50197 = state_50178__$1;
(statearr_50185_50197[(2)] = inst_50172);

(statearr_50185_50197[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50179 === (6))){
var inst_50174 = (state_50178[(2)]);
var state_50178__$1 = state_50178;
var statearr_50186_50198 = state_50178__$1;
(statearr_50186_50198[(2)] = inst_50174);

(statearr_50186_50198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50179 === (7))){
var inst_50162 = (state_50178[(11)]);
var inst_50168 = (state_50178[(2)]);
var inst_50169 = cljs.core.async.put_BANG_.call(null,out,inst_50168);
var inst_50155 = inst_50162;
var state_50178__$1 = (function (){var statearr_50187 = state_50178;
(statearr_50187[(8)] = inst_50155);

(statearr_50187[(12)] = inst_50169);

return statearr_50187;
})();
var statearr_50188_50199 = state_50178__$1;
(statearr_50188_50199[(2)] = null);

(statearr_50188_50199[(1)] = (2));


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
});})(c__43191__auto___50193,out))
;
return ((function (switch__43103__auto__,c__43191__auto___50193,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto____0 = (function (){
var statearr_50189 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50189[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto__);

(statearr_50189[(1)] = (1));

return statearr_50189;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto____1 = (function (state_50178){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_50178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e50190){if((e50190 instanceof Object)){
var ex__43107__auto__ = e50190;
var statearr_50191_50200 = state_50178;
(statearr_50191_50200[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50190;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50201 = state_50178;
state_50178 = G__50201;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto__ = function(state_50178){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto____1.call(this,state_50178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto___50193,out))
})();
var state__43193__auto__ = (function (){var statearr_50192 = f__43192__auto__.call(null);
(statearr_50192[(6)] = c__43191__auto___50193);

return statearr_50192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto___50193,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__50202,opts){
var map__50203 = p__50202;
var map__50203__$1 = ((((!((map__50203 == null)))?((((map__50203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50203):map__50203);
var eval_body = cljs.core.get.call(null,map__50203__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__50203__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__40038__auto__ = eval_body;
if(cljs.core.truth_(and__40038__auto__)){
return typeof eval_body === 'string';
} else {
return and__40038__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e50205){var e = e50205;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__50206_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50206_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__50207){
var vec__50208 = p__50207;
var k = cljs.core.nth.call(null,vec__50208,(0),null);
var v = cljs.core.nth.call(null,vec__50208,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__50211){
var vec__50212 = p__50211;
var k = cljs.core.nth.call(null,vec__50212,(0),null);
var v = cljs.core.nth.call(null,vec__50212,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__50218,p__50219){
var map__50220 = p__50218;
var map__50220__$1 = ((((!((map__50220 == null)))?((((map__50220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50220):map__50220);
var opts = map__50220__$1;
var before_jsload = cljs.core.get.call(null,map__50220__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__50220__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__50220__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__50221 = p__50219;
var map__50221__$1 = ((((!((map__50221 == null)))?((((map__50221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50221):map__50221);
var msg = map__50221__$1;
var files = cljs.core.get.call(null,map__50221__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__50221__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__50221__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43191__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43192__auto__ = (function (){var switch__43103__auto__ = ((function (c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_50375){
var state_val_50376 = (state_50375[(1)]);
if((state_val_50376 === (7))){
var inst_50238 = (state_50375[(7)]);
var inst_50237 = (state_50375[(8)]);
var inst_50236 = (state_50375[(9)]);
var inst_50235 = (state_50375[(10)]);
var inst_50243 = cljs.core._nth.call(null,inst_50236,inst_50238);
var inst_50244 = figwheel.client.file_reloading.eval_body.call(null,inst_50243,opts);
var inst_50245 = (inst_50238 + (1));
var tmp50377 = inst_50237;
var tmp50378 = inst_50236;
var tmp50379 = inst_50235;
var inst_50235__$1 = tmp50379;
var inst_50236__$1 = tmp50378;
var inst_50237__$1 = tmp50377;
var inst_50238__$1 = inst_50245;
var state_50375__$1 = (function (){var statearr_50380 = state_50375;
(statearr_50380[(7)] = inst_50238__$1);

(statearr_50380[(11)] = inst_50244);

(statearr_50380[(8)] = inst_50237__$1);

(statearr_50380[(9)] = inst_50236__$1);

(statearr_50380[(10)] = inst_50235__$1);

return statearr_50380;
})();
var statearr_50381_50464 = state_50375__$1;
(statearr_50381_50464[(2)] = null);

(statearr_50381_50464[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (20))){
var inst_50278 = (state_50375[(12)]);
var inst_50286 = figwheel.client.file_reloading.sort_files.call(null,inst_50278);
var state_50375__$1 = state_50375;
var statearr_50382_50465 = state_50375__$1;
(statearr_50382_50465[(2)] = inst_50286);

(statearr_50382_50465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (27))){
var state_50375__$1 = state_50375;
var statearr_50383_50466 = state_50375__$1;
(statearr_50383_50466[(2)] = null);

(statearr_50383_50466[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (1))){
var inst_50227 = (state_50375[(13)]);
var inst_50224 = before_jsload.call(null,files);
var inst_50225 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_50226 = (function (){return ((function (inst_50227,inst_50224,inst_50225,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50215_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50215_SHARP_);
});
;})(inst_50227,inst_50224,inst_50225,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50227__$1 = cljs.core.filter.call(null,inst_50226,files);
var inst_50228 = cljs.core.not_empty.call(null,inst_50227__$1);
var state_50375__$1 = (function (){var statearr_50384 = state_50375;
(statearr_50384[(14)] = inst_50224);

(statearr_50384[(15)] = inst_50225);

(statearr_50384[(13)] = inst_50227__$1);

return statearr_50384;
})();
if(cljs.core.truth_(inst_50228)){
var statearr_50385_50467 = state_50375__$1;
(statearr_50385_50467[(1)] = (2));

} else {
var statearr_50386_50468 = state_50375__$1;
(statearr_50386_50468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (24))){
var state_50375__$1 = state_50375;
var statearr_50387_50469 = state_50375__$1;
(statearr_50387_50469[(2)] = null);

(statearr_50387_50469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (39))){
var inst_50328 = (state_50375[(16)]);
var state_50375__$1 = state_50375;
var statearr_50388_50470 = state_50375__$1;
(statearr_50388_50470[(2)] = inst_50328);

(statearr_50388_50470[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (46))){
var inst_50370 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50389_50471 = state_50375__$1;
(statearr_50389_50471[(2)] = inst_50370);

(statearr_50389_50471[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (4))){
var inst_50272 = (state_50375[(2)]);
var inst_50273 = cljs.core.List.EMPTY;
var inst_50274 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_50273);
var inst_50275 = (function (){return ((function (inst_50272,inst_50273,inst_50274,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50216_SHARP_){
var and__40038__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__50216_SHARP_);
if(cljs.core.truth_(and__40038__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__50216_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__50216_SHARP_)));
} else {
return and__40038__auto__;
}
});
;})(inst_50272,inst_50273,inst_50274,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50276 = cljs.core.filter.call(null,inst_50275,files);
var inst_50277 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_50278 = cljs.core.concat.call(null,inst_50276,inst_50277);
var state_50375__$1 = (function (){var statearr_50390 = state_50375;
(statearr_50390[(17)] = inst_50274);

(statearr_50390[(18)] = inst_50272);

(statearr_50390[(12)] = inst_50278);

return statearr_50390;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_50391_50472 = state_50375__$1;
(statearr_50391_50472[(1)] = (16));

} else {
var statearr_50392_50473 = state_50375__$1;
(statearr_50392_50473[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (15))){
var inst_50262 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50393_50474 = state_50375__$1;
(statearr_50393_50474[(2)] = inst_50262);

(statearr_50393_50474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (21))){
var inst_50288 = (state_50375[(19)]);
var inst_50288__$1 = (state_50375[(2)]);
var inst_50289 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_50288__$1);
var state_50375__$1 = (function (){var statearr_50394 = state_50375;
(statearr_50394[(19)] = inst_50288__$1);

return statearr_50394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50375__$1,(22),inst_50289);
} else {
if((state_val_50376 === (31))){
var inst_50373 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50375__$1,inst_50373);
} else {
if((state_val_50376 === (32))){
var inst_50328 = (state_50375[(16)]);
var inst_50333 = inst_50328.cljs$lang$protocol_mask$partition0$;
var inst_50334 = (inst_50333 & (64));
var inst_50335 = inst_50328.cljs$core$ISeq$;
var inst_50336 = (cljs.core.PROTOCOL_SENTINEL === inst_50335);
var inst_50337 = (inst_50334) || (inst_50336);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50337)){
var statearr_50395_50475 = state_50375__$1;
(statearr_50395_50475[(1)] = (35));

} else {
var statearr_50396_50476 = state_50375__$1;
(statearr_50396_50476[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (40))){
var inst_50350 = (state_50375[(20)]);
var inst_50349 = (state_50375[(2)]);
var inst_50350__$1 = cljs.core.get.call(null,inst_50349,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_50351 = cljs.core.get.call(null,inst_50349,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_50352 = cljs.core.not_empty.call(null,inst_50350__$1);
var state_50375__$1 = (function (){var statearr_50397 = state_50375;
(statearr_50397[(21)] = inst_50351);

(statearr_50397[(20)] = inst_50350__$1);

return statearr_50397;
})();
if(cljs.core.truth_(inst_50352)){
var statearr_50398_50477 = state_50375__$1;
(statearr_50398_50477[(1)] = (41));

} else {
var statearr_50399_50478 = state_50375__$1;
(statearr_50399_50478[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (33))){
var state_50375__$1 = state_50375;
var statearr_50400_50479 = state_50375__$1;
(statearr_50400_50479[(2)] = false);

(statearr_50400_50479[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (13))){
var inst_50248 = (state_50375[(22)]);
var inst_50252 = cljs.core.chunk_first.call(null,inst_50248);
var inst_50253 = cljs.core.chunk_rest.call(null,inst_50248);
var inst_50254 = cljs.core.count.call(null,inst_50252);
var inst_50235 = inst_50253;
var inst_50236 = inst_50252;
var inst_50237 = inst_50254;
var inst_50238 = (0);
var state_50375__$1 = (function (){var statearr_50401 = state_50375;
(statearr_50401[(7)] = inst_50238);

(statearr_50401[(8)] = inst_50237);

(statearr_50401[(9)] = inst_50236);

(statearr_50401[(10)] = inst_50235);

return statearr_50401;
})();
var statearr_50402_50480 = state_50375__$1;
(statearr_50402_50480[(2)] = null);

(statearr_50402_50480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (22))){
var inst_50291 = (state_50375[(23)]);
var inst_50296 = (state_50375[(24)]);
var inst_50288 = (state_50375[(19)]);
var inst_50292 = (state_50375[(25)]);
var inst_50291__$1 = (state_50375[(2)]);
var inst_50292__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50291__$1);
var inst_50293 = (function (){var all_files = inst_50288;
var res_SINGLEQUOTE_ = inst_50291__$1;
var res = inst_50292__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_50291,inst_50296,inst_50288,inst_50292,inst_50291__$1,inst_50292__$1,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__50217_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__50217_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_50291,inst_50296,inst_50288,inst_50292,inst_50291__$1,inst_50292__$1,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50294 = cljs.core.filter.call(null,inst_50293,inst_50291__$1);
var inst_50295 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_50296__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_50295);
var inst_50297 = cljs.core.not_empty.call(null,inst_50296__$1);
var state_50375__$1 = (function (){var statearr_50403 = state_50375;
(statearr_50403[(23)] = inst_50291__$1);

(statearr_50403[(26)] = inst_50294);

(statearr_50403[(24)] = inst_50296__$1);

(statearr_50403[(25)] = inst_50292__$1);

return statearr_50403;
})();
if(cljs.core.truth_(inst_50297)){
var statearr_50404_50481 = state_50375__$1;
(statearr_50404_50481[(1)] = (23));

} else {
var statearr_50405_50482 = state_50375__$1;
(statearr_50405_50482[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (36))){
var state_50375__$1 = state_50375;
var statearr_50406_50483 = state_50375__$1;
(statearr_50406_50483[(2)] = false);

(statearr_50406_50483[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (41))){
var inst_50350 = (state_50375[(20)]);
var inst_50354 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_50355 = cljs.core.map.call(null,inst_50354,inst_50350);
var inst_50356 = cljs.core.pr_str.call(null,inst_50355);
var inst_50357 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50356)].join('');
var inst_50358 = figwheel.client.utils.log.call(null,inst_50357);
var state_50375__$1 = state_50375;
var statearr_50407_50484 = state_50375__$1;
(statearr_50407_50484[(2)] = inst_50358);

(statearr_50407_50484[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (43))){
var inst_50351 = (state_50375[(21)]);
var inst_50361 = (state_50375[(2)]);
var inst_50362 = cljs.core.not_empty.call(null,inst_50351);
var state_50375__$1 = (function (){var statearr_50408 = state_50375;
(statearr_50408[(27)] = inst_50361);

return statearr_50408;
})();
if(cljs.core.truth_(inst_50362)){
var statearr_50409_50485 = state_50375__$1;
(statearr_50409_50485[(1)] = (44));

} else {
var statearr_50410_50486 = state_50375__$1;
(statearr_50410_50486[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (29))){
var inst_50291 = (state_50375[(23)]);
var inst_50294 = (state_50375[(26)]);
var inst_50296 = (state_50375[(24)]);
var inst_50328 = (state_50375[(16)]);
var inst_50288 = (state_50375[(19)]);
var inst_50292 = (state_50375[(25)]);
var inst_50324 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_50327 = (function (){var all_files = inst_50288;
var res_SINGLEQUOTE_ = inst_50291;
var res = inst_50292;
var files_not_loaded = inst_50294;
var dependencies_that_loaded = inst_50296;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50328,inst_50288,inst_50292,inst_50324,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50326){
var map__50411 = p__50326;
var map__50411__$1 = ((((!((map__50411 == null)))?((((map__50411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50411):map__50411);
var namespace = cljs.core.get.call(null,map__50411__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50328,inst_50288,inst_50292,inst_50324,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50328__$1 = cljs.core.group_by.call(null,inst_50327,inst_50294);
var inst_50330 = (inst_50328__$1 == null);
var inst_50331 = cljs.core.not.call(null,inst_50330);
var state_50375__$1 = (function (){var statearr_50413 = state_50375;
(statearr_50413[(28)] = inst_50324);

(statearr_50413[(16)] = inst_50328__$1);

return statearr_50413;
})();
if(inst_50331){
var statearr_50414_50487 = state_50375__$1;
(statearr_50414_50487[(1)] = (32));

} else {
var statearr_50415_50488 = state_50375__$1;
(statearr_50415_50488[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (44))){
var inst_50351 = (state_50375[(21)]);
var inst_50364 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50351);
var inst_50365 = cljs.core.pr_str.call(null,inst_50364);
var inst_50366 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50365)].join('');
var inst_50367 = figwheel.client.utils.log.call(null,inst_50366);
var state_50375__$1 = state_50375;
var statearr_50416_50489 = state_50375__$1;
(statearr_50416_50489[(2)] = inst_50367);

(statearr_50416_50489[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (6))){
var inst_50269 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50417_50490 = state_50375__$1;
(statearr_50417_50490[(2)] = inst_50269);

(statearr_50417_50490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (28))){
var inst_50294 = (state_50375[(26)]);
var inst_50321 = (state_50375[(2)]);
var inst_50322 = cljs.core.not_empty.call(null,inst_50294);
var state_50375__$1 = (function (){var statearr_50418 = state_50375;
(statearr_50418[(29)] = inst_50321);

return statearr_50418;
})();
if(cljs.core.truth_(inst_50322)){
var statearr_50419_50491 = state_50375__$1;
(statearr_50419_50491[(1)] = (29));

} else {
var statearr_50420_50492 = state_50375__$1;
(statearr_50420_50492[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (25))){
var inst_50292 = (state_50375[(25)]);
var inst_50308 = (state_50375[(2)]);
var inst_50309 = cljs.core.not_empty.call(null,inst_50292);
var state_50375__$1 = (function (){var statearr_50421 = state_50375;
(statearr_50421[(30)] = inst_50308);

return statearr_50421;
})();
if(cljs.core.truth_(inst_50309)){
var statearr_50422_50493 = state_50375__$1;
(statearr_50422_50493[(1)] = (26));

} else {
var statearr_50423_50494 = state_50375__$1;
(statearr_50423_50494[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (34))){
var inst_50344 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50344)){
var statearr_50424_50495 = state_50375__$1;
(statearr_50424_50495[(1)] = (38));

} else {
var statearr_50425_50496 = state_50375__$1;
(statearr_50425_50496[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (17))){
var state_50375__$1 = state_50375;
var statearr_50426_50497 = state_50375__$1;
(statearr_50426_50497[(2)] = recompile_dependents);

(statearr_50426_50497[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (3))){
var state_50375__$1 = state_50375;
var statearr_50427_50498 = state_50375__$1;
(statearr_50427_50498[(2)] = null);

(statearr_50427_50498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (12))){
var inst_50265 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50428_50499 = state_50375__$1;
(statearr_50428_50499[(2)] = inst_50265);

(statearr_50428_50499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (2))){
var inst_50227 = (state_50375[(13)]);
var inst_50234 = cljs.core.seq.call(null,inst_50227);
var inst_50235 = inst_50234;
var inst_50236 = null;
var inst_50237 = (0);
var inst_50238 = (0);
var state_50375__$1 = (function (){var statearr_50429 = state_50375;
(statearr_50429[(7)] = inst_50238);

(statearr_50429[(8)] = inst_50237);

(statearr_50429[(9)] = inst_50236);

(statearr_50429[(10)] = inst_50235);

return statearr_50429;
})();
var statearr_50430_50500 = state_50375__$1;
(statearr_50430_50500[(2)] = null);

(statearr_50430_50500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (23))){
var inst_50291 = (state_50375[(23)]);
var inst_50294 = (state_50375[(26)]);
var inst_50296 = (state_50375[(24)]);
var inst_50288 = (state_50375[(19)]);
var inst_50292 = (state_50375[(25)]);
var inst_50299 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_50301 = (function (){var all_files = inst_50288;
var res_SINGLEQUOTE_ = inst_50291;
var res = inst_50292;
var files_not_loaded = inst_50294;
var dependencies_that_loaded = inst_50296;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50288,inst_50292,inst_50299,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50300){
var map__50431 = p__50300;
var map__50431__$1 = ((((!((map__50431 == null)))?((((map__50431.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50431.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50431):map__50431);
var request_url = cljs.core.get.call(null,map__50431__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50288,inst_50292,inst_50299,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50302 = cljs.core.reverse.call(null,inst_50296);
var inst_50303 = cljs.core.map.call(null,inst_50301,inst_50302);
var inst_50304 = cljs.core.pr_str.call(null,inst_50303);
var inst_50305 = figwheel.client.utils.log.call(null,inst_50304);
var state_50375__$1 = (function (){var statearr_50433 = state_50375;
(statearr_50433[(31)] = inst_50299);

return statearr_50433;
})();
var statearr_50434_50501 = state_50375__$1;
(statearr_50434_50501[(2)] = inst_50305);

(statearr_50434_50501[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (35))){
var state_50375__$1 = state_50375;
var statearr_50435_50502 = state_50375__$1;
(statearr_50435_50502[(2)] = true);

(statearr_50435_50502[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (19))){
var inst_50278 = (state_50375[(12)]);
var inst_50284 = figwheel.client.file_reloading.expand_files.call(null,inst_50278);
var state_50375__$1 = state_50375;
var statearr_50436_50503 = state_50375__$1;
(statearr_50436_50503[(2)] = inst_50284);

(statearr_50436_50503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (11))){
var state_50375__$1 = state_50375;
var statearr_50437_50504 = state_50375__$1;
(statearr_50437_50504[(2)] = null);

(statearr_50437_50504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (9))){
var inst_50267 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50438_50505 = state_50375__$1;
(statearr_50438_50505[(2)] = inst_50267);

(statearr_50438_50505[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (5))){
var inst_50238 = (state_50375[(7)]);
var inst_50237 = (state_50375[(8)]);
var inst_50240 = (inst_50238 < inst_50237);
var inst_50241 = inst_50240;
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50241)){
var statearr_50439_50506 = state_50375__$1;
(statearr_50439_50506[(1)] = (7));

} else {
var statearr_50440_50507 = state_50375__$1;
(statearr_50440_50507[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (14))){
var inst_50248 = (state_50375[(22)]);
var inst_50257 = cljs.core.first.call(null,inst_50248);
var inst_50258 = figwheel.client.file_reloading.eval_body.call(null,inst_50257,opts);
var inst_50259 = cljs.core.next.call(null,inst_50248);
var inst_50235 = inst_50259;
var inst_50236 = null;
var inst_50237 = (0);
var inst_50238 = (0);
var state_50375__$1 = (function (){var statearr_50441 = state_50375;
(statearr_50441[(7)] = inst_50238);

(statearr_50441[(32)] = inst_50258);

(statearr_50441[(8)] = inst_50237);

(statearr_50441[(9)] = inst_50236);

(statearr_50441[(10)] = inst_50235);

return statearr_50441;
})();
var statearr_50442_50508 = state_50375__$1;
(statearr_50442_50508[(2)] = null);

(statearr_50442_50508[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (45))){
var state_50375__$1 = state_50375;
var statearr_50443_50509 = state_50375__$1;
(statearr_50443_50509[(2)] = null);

(statearr_50443_50509[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (26))){
var inst_50291 = (state_50375[(23)]);
var inst_50294 = (state_50375[(26)]);
var inst_50296 = (state_50375[(24)]);
var inst_50288 = (state_50375[(19)]);
var inst_50292 = (state_50375[(25)]);
var inst_50311 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_50313 = (function (){var all_files = inst_50288;
var res_SINGLEQUOTE_ = inst_50291;
var res = inst_50292;
var files_not_loaded = inst_50294;
var dependencies_that_loaded = inst_50296;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50288,inst_50292,inst_50311,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__50312){
var map__50444 = p__50312;
var map__50444__$1 = ((((!((map__50444 == null)))?((((map__50444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50444.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50444):map__50444);
var namespace = cljs.core.get.call(null,map__50444__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__50444__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50288,inst_50292,inst_50311,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50314 = cljs.core.map.call(null,inst_50313,inst_50292);
var inst_50315 = cljs.core.pr_str.call(null,inst_50314);
var inst_50316 = figwheel.client.utils.log.call(null,inst_50315);
var inst_50317 = (function (){var all_files = inst_50288;
var res_SINGLEQUOTE_ = inst_50291;
var res = inst_50292;
var files_not_loaded = inst_50294;
var dependencies_that_loaded = inst_50296;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50288,inst_50292,inst_50311,inst_50313,inst_50314,inst_50315,inst_50316,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_50291,inst_50294,inst_50296,inst_50288,inst_50292,inst_50311,inst_50313,inst_50314,inst_50315,inst_50316,state_val_50376,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_50318 = setTimeout(inst_50317,(10));
var state_50375__$1 = (function (){var statearr_50446 = state_50375;
(statearr_50446[(33)] = inst_50316);

(statearr_50446[(34)] = inst_50311);

return statearr_50446;
})();
var statearr_50447_50510 = state_50375__$1;
(statearr_50447_50510[(2)] = inst_50318);

(statearr_50447_50510[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (16))){
var state_50375__$1 = state_50375;
var statearr_50448_50511 = state_50375__$1;
(statearr_50448_50511[(2)] = reload_dependents);

(statearr_50448_50511[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (38))){
var inst_50328 = (state_50375[(16)]);
var inst_50346 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50328);
var state_50375__$1 = state_50375;
var statearr_50449_50512 = state_50375__$1;
(statearr_50449_50512[(2)] = inst_50346);

(statearr_50449_50512[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (30))){
var state_50375__$1 = state_50375;
var statearr_50450_50513 = state_50375__$1;
(statearr_50450_50513[(2)] = null);

(statearr_50450_50513[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (10))){
var inst_50248 = (state_50375[(22)]);
var inst_50250 = cljs.core.chunked_seq_QMARK_.call(null,inst_50248);
var state_50375__$1 = state_50375;
if(inst_50250){
var statearr_50451_50514 = state_50375__$1;
(statearr_50451_50514[(1)] = (13));

} else {
var statearr_50452_50515 = state_50375__$1;
(statearr_50452_50515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (18))){
var inst_50282 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
if(cljs.core.truth_(inst_50282)){
var statearr_50453_50516 = state_50375__$1;
(statearr_50453_50516[(1)] = (19));

} else {
var statearr_50454_50517 = state_50375__$1;
(statearr_50454_50517[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (42))){
var state_50375__$1 = state_50375;
var statearr_50455_50518 = state_50375__$1;
(statearr_50455_50518[(2)] = null);

(statearr_50455_50518[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (37))){
var inst_50341 = (state_50375[(2)]);
var state_50375__$1 = state_50375;
var statearr_50456_50519 = state_50375__$1;
(statearr_50456_50519[(2)] = inst_50341);

(statearr_50456_50519[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50376 === (8))){
var inst_50248 = (state_50375[(22)]);
var inst_50235 = (state_50375[(10)]);
var inst_50248__$1 = cljs.core.seq.call(null,inst_50235);
var state_50375__$1 = (function (){var statearr_50457 = state_50375;
(statearr_50457[(22)] = inst_50248__$1);

return statearr_50457;
})();
if(inst_50248__$1){
var statearr_50458_50520 = state_50375__$1;
(statearr_50458_50520[(1)] = (10));

} else {
var statearr_50459_50521 = state_50375__$1;
(statearr_50459_50521[(1)] = (11));

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43103__auto__,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto____0 = (function (){
var statearr_50460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50460[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto__);

(statearr_50460[(1)] = (1));

return statearr_50460;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto____1 = (function (state_50375){
while(true){
var ret_value__43105__auto__ = (function (){try{while(true){
var result__43106__auto__ = switch__43103__auto__.call(null,state_50375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43106__auto__;
}
break;
}
}catch (e50461){if((e50461 instanceof Object)){
var ex__43107__auto__ = e50461;
var statearr_50462_50522 = state_50375;
(statearr_50462_50522[(5)] = ex__43107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50523 = state_50375;
state_50375 = G__50523;
continue;
} else {
return ret_value__43105__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto__ = function(state_50375){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto____1.call(this,state_50375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43104__auto__;
})()
;})(switch__43103__auto__,c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43193__auto__ = (function (){var statearr_50463 = f__43192__auto__.call(null);
(statearr_50463[(6)] = c__43191__auto__);

return statearr_50463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43193__auto__);
});})(c__43191__auto__,map__50220,map__50220__$1,opts,before_jsload,on_jsload,reload_dependents,map__50221,map__50221__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43191__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__50526,link){
var map__50527 = p__50526;
var map__50527__$1 = ((((!((map__50527 == null)))?((((map__50527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50527):map__50527);
var file = cljs.core.get.call(null,map__50527__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__50527,map__50527__$1,file){
return (function (p1__50524_SHARP_,p2__50525_SHARP_){
if(cljs.core._EQ_.call(null,p1__50524_SHARP_,p2__50525_SHARP_)){
return p1__50524_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__50527,map__50527__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__50530){
var map__50531 = p__50530;
var map__50531__$1 = ((((!((map__50531 == null)))?((((map__50531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50531):map__50531);
var match_length = cljs.core.get.call(null,map__50531__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__50531__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__50529_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__50529_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__50533_SHARP_,p2__50534_SHARP_){
return cljs.core.assoc.call(null,p1__50533_SHARP_,cljs.core.get.call(null,p2__50534_SHARP_,key),p2__50534_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_50535 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_50535);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_50535);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__50536,p__50537){
var map__50538 = p__50536;
var map__50538__$1 = ((((!((map__50538 == null)))?((((map__50538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50538):map__50538);
var on_cssload = cljs.core.get.call(null,map__50538__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__50539 = p__50537;
var map__50539__$1 = ((((!((map__50539 == null)))?((((map__50539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50539):map__50539);
var files_msg = map__50539__$1;
var files = cljs.core.get.call(null,map__50539__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1501581669698
