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

(defn changeState [in owner live]
    (if (= live 0)
    (om/set-state! owner :LocState {:genSec in
                                    :live (((om/get-state owner) :LocState)
                                                                 :live)
                                    :trigger (((om/get-state owner) :LocState)
                                                                    :trigger)})
    (om/set-state! owner :LocState {:genSec in
                                    :live live
                                    :trigger (((om/get-state owner) :LocState)
                                                                    :trigger)})))
(defn coinModActualizer [state owner inc]
    (println inc)
    (let [{coinMod :coinMod
           coins :coins
           clickers :clickers
           archpriest :archpriest
           bishop :bishop
           archbishop :archbishop
           patriarh :patriarh
           churches :churches
           shrines :shrines
           event :religiousEvents
           cathedrals :cathedrals
           patriarchates :patriarchates
           genSec :genSec} state]

    (om/update! state :genSec (* (+ (* inc clickers)
                                    (* inc (* archpriest 5))
                                    (* inc (* bishop 10))
                                    (* inc (* archbishop 15))
                                    (* inc (* patriarh 20))
                                    (* inc (* churches 15))
                                    (* inc (* shrines 10))
                                    (* inc (* cathedrals 20))
                                    (* inc (* patriarchates 30)))
                                event))
    (changeState (* (+ (* inc clickers)
                       (* inc (* archpriest 5))
                       (* inc (* bishop 10))
                       (* inc (* archbishop 15))
                       (* inc (* patriarh 20))
                       (* inc (* shrines 10))
                       (* inc (* cathedrals 20))
                       (* inc (* patriarchates 30))
                       (* inc churches)) event) owner 0)))

(defn atheistInc [state owner]
    (om/update! state :atheists (inc (state :atheists))))

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

(defn coinModInc [state owner & [opt]]
    (let [{coinMod :coinMod
           coins :coins
           clickers :clickers
           archpriest :archpriest
           bishop :bishop
           archbishop :archbishop
           patriarh :patriarh
           churches :churches
           shrines :shrines
           event :religiousEvents
           cathedrals :cathedrals
           patriarchates :patriarchates
           genSec :genSec} state]
        (if (= opt "freeDays")
            ((om/update! state :coinMod (int (* coinMod 2)))
            (coinModActualizer state owner (* coinMod 2))))
        (if (and (= opt "pamphlets") (<= 1 (int (/ 7 (+ 1 (state :pamphlets))))))
            ((om/update! state :coinMod
                (int (* coinMod (/ 7 (+ 1 (state :pamphlets))))))
            (coinModActualizer state owner
                (int (* coinMod (/ 7 (+ 1 (state :pamphlets))))))))
        (if-not opt
            ((om/update! state :coinMod (+ 1 coinMod))
            (om/update! state :coins
                (- coins (+ 100 (* coinMod (* 50 coinMod)))))
            (coinModActualizer state owner (+ coinMod 1))))))

(defn clickUPG [state owner]
    (let [{coinMod :coinMod coins :coins} state]
        (if (>= coins (+ 100 (* coinMod (* 50 coinMod))))
            (coinModInc state owner))))

(defn clickerInc [state owner]
    (let [{clickers :clickers
           coins :coins
           coinMod :coinMod
           churches :churches
           event :religiousEvents
           genSec :genSec} state]
        (if (>= coins 150)
            ((om/update! state :clickers (+ 1 clickers))
            (om/update! state :coins (- coins 150))
            (om/update! state :genSec (+ genSec (* coinMod event)))
            (changeState (+ genSec (* coinMod event)) owner 0)))))

(defn ArchpriestInc [state owner]
    (let [{archpriest :archpriest
           coins :coins
           coinMod :coinMod
           event :religiousEvents
           genSec :genSec} state]
    (if (>= coins 150)
        ((om/update! state :archpriest (+ 1 archpriest))
         (om/update! state :coins (- coins 150))
         (om/update! state :genSec (+ genSec (* coinMod 5 event)))
         (changeState (+ genSec (* coinMod 5 event)) owner 0)))))

(defn BishopInc [state owner]
    (let [{bishop :bishop
           coins :coins
           coinMod :coinMod
           event :religiousEvents
           genSec :genSec} state]
    (if (>= coins 150)
        ((om/update! state :bishop (+ 1 bishop))
         (om/update! state :coins (- coins 150))
         (om/update! state :genSec (+ genSec (* coinMod 10 event)))
         (changeState (+ genSec (* coinMod 10 event)) owner 0)))))

(defn ArchbishopInc [state owner]
     (let [{archbishop :archbishop
            coins :coins
            coinMod :coinMod
            event :religiousEvents
            genSec :genSec} state]
     (if (>= coins 150)
         ((om/update! state :archbishop (+ 1 archbishop))
          (om/update! state :coins (- coins 150))
          (om/update! state :genSec (+ genSec (* coinMod 15 event)))
          (changeState (+ genSec (* coinMod 15 event)) owner 0)))))

(defn PatriarhsInc [state owner]
    (let [{patriarh :patriarh
           coins :coins
           coinMod :coinMod
           event :religiousEvents
           genSec :genSec} state]
    (if (>= coins 150)
        ((om/update! state :patriarh (+ 1 patriarh))
         (om/update! state :coins (- coins 150))
         (om/update! state :genSec (+ genSec (* coinMod 20 event)))
         (changeState (+ genSec (* coinMod 20 event)) owner 0)))))


(defn churchesInc [state owner]
    (let [{clickers :clickers
           coins :coins
           coinMod :coinMod
           churches :churches
           event :religiousEvents
           genSec :genSec} state]
        (if (>= coins 3500)
            ((om/update! state :churches (+ 1 churches))
             (om/update! state :coins (- coins 3500))
             (om/update! state :genSec (+ genSec (* coinMod 15 event)))
             (changeState (+ genSec (* coinMod 15 event)) owner 0)))))

(defn shrineInc [state owner]
    (let [{shrines :shrines
           coins :coins
           event :religiousEvents
           genSec :genSec
           coinMod :coinMod} state]
        (if (>= coins 3500)
            ((om/update! state :shrines (+ 1 shrines))
             (om/update! state :coins (- coins 3500))
             (om/update! state :genSec (+ genSec (* coinMod 10 event)))
             (changeState (+ genSec (* coinMod 10 event)) owner 0)))))

(defn cathedralInc [state owner]
    (let [{cathedrals :cathedrals
           coins :coins
           genSec :genSec
           event :religiousEvents
           coinMod :coinMod} state]
        (if (>= coins 3500)
            ((om/update! state :cathedrals (+ 1 cathedrals))
             (om/update! state :coins (- coins 3500))
             (om/update! state :genSec (+ genSec (* coinMod 20 event)))
             (changeState (+ genSec (* coinMod 20 event)) owner 0)))))

(defn patriarchateInc [state owner]
    (let [{patriarchates :patriarchates
                coins :coins
               genSec :genSec
               event :religiousEvents
              coinMod :coinMod} state]
        (if (>= coins 3500)
            ((om/update! state :patriarchates (+ 1 patriarchates))
             (om/update! state :coins (- coins 3500))
             (om/update! state :genSec (+ genSec (* coinMod 30 event)))
             (changeState (+ genSec (* coinMod 30 event)) owner 0)))))

(defn ReligiousEventsInc [state owner]
    (if (>= (state :coins) 1750)
        ((om/update! state :reLock 0)
         (om/update! state :coins (- (state :coins) 1750))
         (changeState (state :genSec) owner 100))))

(defn pamphletsInc [state owner]
    (if (>= (state :coins) 3500)
        ((om/update! state :coins (- (state :coins) 3500))
         (om/update! state :pamphlets (+ 1 (state :pamphlets)))
         (let [chance (rand-int 100)]
            (if (<= chance (int (/ 50 (/ (inc (state :pamphlets)) 2))))
                (coinModInc state owner "pamphlets")
                (atheistInc state owner))))))

(defn FreeDaysInc [state owner]
    (if (>= (state :coins) 3500)
        ((om/update! state :coins (- (state :coins) 3500))
         (om/update! state :freeDays (+ 1 (state :freeDays)))
         (let [chance (rand-int 100)]
            (if (<= chance 50)
                (coinModInc state owner "freeDays"))))))

(defonce app-state
    (atom {:coins 1500000
           :coinMod 1
           :clickers 0
           :archpriest 0
           :bishop 0
           :archbishop 0
           :patriarh 0
           :churches 0
           :shrines 0
           :cathedrals 0
           :patriarchates 0
           :religiousEvents 1
           :reLock 10
           :pamphlets 0
           :atheists 0
           :freeDays 0
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

(defn displayExtras [state]
    (om/update! state :shop "Extras"))

(defn periodicly [state owner]
    (let [pula (rand-int 300)]
    (om/transact! state :coins
    (fn [coins]
        (let [ver ((om/get-state owner) :LocState)]
        (+ coins (/ (ver :genSec) 1)))))
    (let [ver ((om/get-state owner) :LocState)]
        (if-not (= (ver :live) 0)
            ((println pula)
             (println (ver :trigger))
             (println (ver :live))
            (if (and (= pula 5) (= (ver :trigger) 0))
                ((om/set-state! owner :LocState {:genSec (* (ver :genSec) 2)
                                                 :live (ver :live)
                                                 :trigger 1})
                 (om/update! state :genSec (* (ver :genSec) 2))
                 (om/update! state :religiousEvents 2)))
            (if (= (ver :trigger) 1)
                (om/set-state! owner :LocState {:genSec (ver :genSec)
                                                :live (- (ver :live ) 1)
                                                :trigger 1}))
            (if (= (ver :live) 1)
                ((om/set-state! owner :LocState {:genSec (/ (ver :genSec) 2)
                                                 :live 100
                                                 :trigger 0})
                 (om/update! state :genSec (/ (ver :genSec) 2))
                 (om/update! state :religiousEvents 1))))))))

(defn root-comp [state owner]
    (reify
        om/IInitState
        (init-state [_]
            {:LocState {:genSec 0
                        :live 0
                        :trigger 0}})
        om/IWillMount
        (will-mount [this]
            (js/setInterval
                #(periodicly state owner) 1000))
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
                                "Shrines " (state :shrines))
                        (dom/div #js
                                 {:className "construction"}
                            (dom/img #js {:src "/img/Cathedral.png"
                                          :className "img"})
                                "Cathedrals " (state :cathedrals))
                        (dom/div #js
                                 {:className "construction"}
                            (dom/img #js {:src "/img/Patriarchate.png"
                                          :className "img"})
                                "Patriarchates " (state :patriarchates))))

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
                                          (displayBuild state))} "Buildings"))

                        (dom/div nil
                            (dom/button #js
                                {:type "button"
                                 :className "btn btn-default
                                             btnColor ShopText2"
                                 :onClick (fn [e]
                                          (displayExtras state))} "Extras")))

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
                                "Buy Priests: 150" ))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                            (ArchpriestInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js {:src "/img/Archpriest.png"
                                              :className "imgShop"})
                                "Buy Archpriests: 150" ))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                            (BishopInc state owner))
                                         :className "buy ShopText"}
                                 (dom/img #js {:src "/img/Bishop.png"
                                               :className "imgShop"})
                                 "Buy Bishops: 150" ))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                             (ArchbishopInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js {:src "/img/Archbishop.png"
                                              :className "imgShop"})
                                   "Buy Archbishops: 150" ))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                             (PatriarhsInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js {:src "/img/Daniel.png"
                                              :className "imgShop"})
                                      "Buy Patriarchs: 150" ))))

                        (if (= (state :shop) "Buildings")

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
                                    "Buy Shrines: 3500"))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                            (cathedralInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js
                                         {:src "/img/Cathedral.png"
                                          :className "imgShop2"})
                                    "Buy Cathedrals: 3500"))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                            (patriarchateInc state owner))
                                         :className "buy ShopText"}
                                (dom/img #js
                                         {:src "/img/Patriarchate.png"
                                          :className "imgShop2"})
                                    "Buy Patriarchate: 3500"))))

                        (if (= (state :shop) "Extras")

                    (dom/div nil
                        (dom/div nil
                            (if (= (state :reLock) 10)
                            (dom/div nil
                                (dom/button #js
                                            {:onClick (fn [e]
                                                (ReligiousEventsInc state owner))
                                             :className "buy ShopText"}
                                    "Add Religious events: 1750"))))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                                  (pamphletsInc state owner))
                                         :className "buy ShopText"}
                                    "Send pamphlets: 3500"))
                        (dom/div nil
                            (dom/button #js
                                        {:onClick (fn [e]
                                                  (FreeDaysInc state owner))
                                         :className "buy ShopText"}
                                    "Get Free Days from work: 3500")))))))))))))

  (om/root root-comp app-state
    {:target (. js/document (getElementById "Coins"))})
