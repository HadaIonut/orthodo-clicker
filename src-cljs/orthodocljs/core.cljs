(ns orthodocljs.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [ajax.core :refer [GET POST]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan poll! <! >!]]
            [clojure.string :as string]))

(enable-console-print!)

(println "This text is printed from src/clj/guestbook/routes/core.cljs.
    Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defn updateState [state owner]
    (let [{coinMod :coinMod clickers :clickers} state]
    (om/set-state! owner :LocState {:coinMod (+ coinMod 1) :clickers clickers})))

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

(defn coinModInc [state owner]
    (let [{coinMod :coinMod coins :coins clickers :clickers} state]
        (om/update! state :coinMod (+ 1 coinMod))
        (om/update! state :coins (- coins (+ 100 (* coinMod (* 50 coinMod))))
        (updateState state owner))))

(defn clickUPG [state owner]
    (let [{coinMod :coinMod coins :coins} state]
        (if (> coins (+ 100 (* coinMod (* 50 coinMod))))
            (coinModInc state owner))))

(defn clickerInc [state owner]
    (let [{clickers :clickers coins :coins coinMod :coinMod} state]
        (if (> coins 150)
            ((om/update! state :clickers (+ 1 clickers))
            (om/update! state :coins (- coins 150))
            (om/set-state! owner :LocState
                                {:coinMod coinMod :clickers (+ clickers 1)})))))

(defonce app-state
    (atom {:coins 150
           :coinMod 1
           :clickers 0
           :menu "true"}))

(defn change [coins owner]
    (let [Mod (om/get-state owner :coinMod)]
        (+ coins Mod)))

(defn manualGen [state]
    (om/update! state :coins (add state)))

(defn displayManu [state]
    (om/update! state :menu (stateMenu state)))

(defn displayShop [state]
    (om/update! state :menu (stateShop state)))

(defn root-comp [state owner]
    (reify
        om/IInitState
        (init-state [_]
            {:LocState state})
        om/IWillMount
        (will-mount [this]
            (js/setInterval #(om/transact! state :coins
                (fn [coins]
                    (let [ver ((om/get-state owner) :LocState)]
                    (+ coins (* (ver :coinMod) (ver :clickers)))))) 1000))
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
                     :onClick (fn [e] (displayShop state))}
                            "Shop"))

            (let [{menu :menu} state]
                (if (= menu "true")
                    (dom/div nil
                        (dom/div nil "menu"))

                    (dom/div nil
                        (dom/div nil
                            (dom/div nil
                                (dom/button #js
                                    {:onClick (fn [e] (clickUPG state owner))}
                                            "Click Modifier")
                                (let [{coinMod :coinMod} state]
                                    (+ 100 (* coinMod (* 50 coinMod))))
                                    " X " (state :coinMod))
                            (dom/div nil
                                (dom/button #js
                                    {:onClick (fn [e] (clickerInc state owner))}
                                            "Clicker")
                                 "150 X " (state :clickers)))))))))))

  (om/root root-comp app-state
    {:target (. js/document (getElementById "Coins"))})
