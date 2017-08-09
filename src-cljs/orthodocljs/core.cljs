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

(defn add [state]
    (let [{coins :coins coinMod :coinMod} state]
        (+ coinMod coins)))

(defn stateMenu [state]
    (let [{menu :menu} state]
        (string/replace menu #"false" "true")))

(defn stateShop [state]
    (let [{menu :menu} state]
        (string/replace menu #"true" "false")))

(defn clickerInc [state]
    (let [{coinMod :coinMod coins :coins} state]
        (om/update! state :coinMod (+ 1 coinMod))
        (om/update! state :coins (- coins (+ 100 (* coinMod 50))))))

(defn clickUPG [state]
    (let [{coinMod :coinMod coins :coins} state]
        (if (> coins (+ 100 (* coinMod 50))) (clickerInc state))))

(defonce app-state
    (atom {:coins 0
           :coinMod 1
           :clickers 0
           :menu "true"}))

(defn manualGen [state]
    (om/update! state :coins (add state)))

(defn displayManu [state]
    (om/update! state :menu (stateMenu state)))

(defn displayShop [state]
    (om/update! state :menu (stateShop state)))

(defn root-comp [state owner]
    (reify
        om/IWillMount
        (will-mount [this]
            (dom/div #js
                {:id "btn1"
                 :className "tab-pane fade in active"}
                 (dom/p "hello")))
        om/IRender
        (render [this]
        (dom/div #js
            {:className "col-md-12"}
            (dom/div #js
                {:className "col-md-4"}
                (dom/p #js
                    {:className "coinsGenerated"} (:coins state))
                (dom/button #js
                    {:onClick (fn [e] (manualGen state))
                     :className "Generator"} "Say hi"))

            (dom/div #js
                {:className "col-md-2"})

            (dom/div #js
                {:className "col-md-6 btn-poz"}
            (dom/div #js
                {:className "btn-group"}
                (dom/button #js
                    {:type "button"
                     :className "btn btn-default buttonColor"
                     :onClick (fn [e] (displayManu state))} "Menu")
                (dom/button #js
                    {:type "button"
                     :className "btn btn-default buttonColor"
                     :onClick (fn [e] (displayShop state))} "Shop"))
            (let [{menu :menu} state]
                (if (= menu "true")
                    (dom/div nil
                        (dom/button #js
                            {:onClick (fn [e] (clickUPG state))} "Click Modifier")
                        (let [{coinMod :coinMod} state]
                            (+ 100 (* coinMod 50))))
                    (dom/div nil "si asta merge"))))))))

  (om/root root-comp app-state
    {:target (. js/document (getElementById "Coins"))})
