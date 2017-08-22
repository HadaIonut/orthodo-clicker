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

(defn changeState [in owner]
    (om/set-state! owner :LocState {:genSec in}))

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
    (let [{coinMod :coinMod
           coins :coins
           clickers :clickers
           churches :churches
           shrines :shrines
           genSec :genSec} state]
        (om/update! state :coinMod (+ 1 coinMod))
        (om/update! state :coins (- coins (+ 100 (* coinMod (* 50 coinMod)))))
        (om/update! state :genSec (+ (* (+ coinMod 1) clickers)
                                     (* (+ coinMod 1) (* churches 15))
                                     (* (+ coinMod 1) (* shrines 10))))
        (changeState (+ (* (+ coinMod 1) clickers)
                        (* (+ coinMod 1) (* shrines 10))
                        (* (+ coinMod 1) churches)) owner)))

(defn clickUPG [state owner]
    (let [{coinMod :coinMod coins :coins} state]
        (if (>= coins (+ 100 (* coinMod (* 50 coinMod))))
            (coinModInc state owner))))

(defn clickerInc [state owner]
    (let [{clickers :clickers
           coins :coins
           coinMod :coinMod
           churches :churches
           genSec :genSec} state]
        (if (>= coins 150)
            ((om/update! state :clickers (+ 1 clickers))
            (om/update! state :coins (- coins 150))
            (om/update! state :genSec (+ genSec coinMod))
            (changeState (+ genSec coinMod) owner)))))

(defn churchesInc [state owner]
    (let [{clickers :clickers
           coins :coins
           coinMod :coinMod
           churches :churches
           genSec :genSec} state]
        (if (>= coins 3500)
            ((om/update! state :churches (+ 1 churches))
             (om/update! state :coins (- coins 3500))
             (om/update! state :genSec (+ genSec (* coinMod 15)))
             (changeState (+ genSec (* coinMod 15)) owner)))))

(defn shrineInc [state owner]
    (let [{shrines :shrines
           coins :coins
           genSec :genSec
           coinMod :coinMod} state]
        (if (>= coins 3500)
            ((om/update! state :shrines (+ 1 shrines))
             (om/update! state :coins (- coins 3500))
             (om/update! state :genSec (+ genSec (* coinMod 10)))
             (changeState (+ genSec (* coinMod 10)) owner)))))

(defonce app-state
    (atom {:coins 15000
           :coinMod 1
           :clickers 0
           :churches 0
           :shrines 0
           :menu "true"
           :shop "Prists"
           :genSec 0}))

(defn change [coins owner]
    (let [Mod (om/get-state owner :coinMod)]
        (+ coins Mod)))

(defn manualGen [state]
    (om/update! state :coins (add state)))

(defn displayManu [state]
    (om/update! state :menu (stateMenu state)))

(defn displayPrists [state]
    (om/update! state :shop "Prists"))

(defn displayBuild [state]
    (om/update! state :shop "Buildings"))

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
                    (+ coins (/ (ver :genSec) 1))))) 1000))
        om/IRender
        (render [this]
        (dom/div #js
            {:className "col-md-12"}
            (dom/div #js
                {:className "col-md-4"}
                (dom/p #js
                    {:className "coinsGenerated"} (:coins state))
                (dom/div #js
                    {:className "coinsSec"} "Coins/Sec: "(:genSec state))
                (dom/img #js
                    {:onClick (fn [e] (manualGen state))
                     :className "Generator"
                     :src "/img/OrthodoCoin.png"}))

            (dom/div #js
                {:className "col-md-2"})

            (dom/div #js
                {:className "col-md-6 btn-poz"}
            (dom/div #js
                {:className "btn-group btn-extras"}
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
                        (dom/div #js
                                 {:className "MenuText"}
                            "Increase people's belief power
                             to get more money!")
                        (dom/div #js
                                 {:className "MenuText"}
                            "This is their belief power now: "
                            (state :coinMod))
                        (dom/div #js
                                 {:className "MenuText"}
                            "Here you have your army:")
                        (dom/div #js
                                 {:className "MenuText"}
                        (dom/div #js
                                 {:className "construction"}
                            (dom/img #js {:src "/img/Prist.png"
                                          :className "img"})
                                "Priests " (state :clickers))
                        (dom/div #js
                                 {:className "construction"}
                            (dom/img #js {:src "/img/Church.png"
                                          :className "img"})
                                "Churches " (state :churches))
                        (dom/div #js
                                 {:className "construction"}
                            (dom/img #js {:src "/img/Shrine.png"
                                          :className "img"})
                                "Shrines " (state :shrines))))

                    (dom/div nil
                        (dom/div #js
                            {:className "col-md-2"}
                        (dom/div nil
                            (dom/button #js
                                {:type "button"
                                 :className "btn btn-default
                                             btnColor ShopText2"
                                 :onClick (fn [e]
                                          (displayPrists state))} "Priests"))
                        (dom/div nil
                            (dom/button #js
                                {:type "button"
                                 :className "btn btn-default
                                             btnColor ShopText2"
                                 :onClick (fn [e]
                                          (displayBuild state))} "Buildings")))

                        (dom/div #js
                            {:className "col-md-2"})

                        (dom/div #js
                            {:className "col-md-4"}
                        (if (= (state :shop) "Prists")

                        (dom/div nil
                        (dom/div nil
                            (dom/button #js
                                {:onClick (fn [e] (clickUPG state owner))
                                 :className "buy ShopText"}
                                        "Upgrade Belief Power: "
                            (let [{coinMod :coinMod} state]
                                (+ 100 (* coinMod (* 50 coinMod))))))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                            (clickerInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js {:src "/img/Prist.png"
                                              :className "imgShop"})
                                "Buy Priests: 150" )))

                        (dom/div nil
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                            (churchesInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js {:src "/img/Church.png"
                                              :className "imgShop2"})
                                "Buy Churches: 3500"))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                            (shrineInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js
                                         {:src "/img/Shrine.png"
                                          :className "imgShop2"})
                                    "Buy Shrines: 3500")))))))))))))

  (om/root root-comp app-state
    {:target (. js/document (getElementById "Coins"))})
