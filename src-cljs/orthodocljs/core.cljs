(ns orthodocljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [ajax.core :refer [GET POST]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]
            [clojure.string :as string]))

(enable-console-print!)

(println "This text is printed from src/clj/guestbook/routes/core.cljs.
    Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defn handler [response]
  (.log js/console (str response)))

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(defonce app-state
    (atom {}))

(defn root-comp [state owner]
    (reify
        om/IRender
        (render [this]
            (dom/button #js
                {:onClick (fn [e] (println "hi"))
                  :className "ButtonPos"} "Say hi"))))

  (om/root root-comp app-state
    {:target (. js/document (getElementById "contacts"))})
