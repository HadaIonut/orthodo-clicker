(ns orthodocljs.active
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [ajax.core :refer [GET POST]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan poll! <! >!]]
            [clojure.string :as string]))


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
(defn coinModActualizer [state owner inc ath]
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
           atheists :atheists
           genSec :genSec} state]

    (om/update! state :genSec (* (- (+ (* inc clickers)
                                        (* inc (* archpriest 5))
                                        (* inc (* bishop 10))
                                        (* inc (* archbishop 15))
                                        (* inc (* patriarh 20))
                                        (* inc (* churches 15))
                                        (* inc (* shrines 10))
                                        (* inc (* cathedrals 20))
                                        (* inc (* patriarchates 30))) ath)
                                    event))
    (changeState (* (- (+ (* inc clickers)
                            (* inc (* archpriest 5))
                            (* inc (* bishop 10))
                            (* inc (* archbishop 15))
                            (* inc (* patriarh 20))
                            (* inc (* shrines 10))
                            (* inc (* cathedrals 20))
                            (* inc (* patriarchates 30))
                            (* inc churches)) ath) event) owner 0)))

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
           rchpriest :archpriest
           bishop :bishop
           archbishop :archbishop
           patriarh :patriarh
           churches :churches
           shrines :shrines
           atheists :atheists
           event :religiousEvents
           cathedrals :cathedrals
           patriarchates :patriarchates
           genSec :genSec} state]
    (if (= opt "atheists")
        ((om/update! state :coinMod (dec coinMod))
        (om/update! state :coins (- (state :coins) 3500))
        (om/update! state :atheists (inc (state :atheists)))
        (coinModActualizer state owner coinMod 1)))
    (if (= opt "freeDays")
        ((om/update! state :coinMod (int (* coinMod 2)))
        (coinModActualizer state owner (int (* coinMod 2)) 0)))
    (if (and (= opt "pamphlets") (<= 1 (int (/ 7 (+ 1 (state :pamphlets))))))
        ((om/update! state :coinMod
            (int (* coinMod (/ 7 (+ 1 (state :pamphlets))))))
        (om/update! state :coins (- (state :coins) 3500))
        (coinModActualizer state owner
            (int (* coinMod (/ 7 (+ 1 (state :pamphlets))))) 0)))
    (if-not opt
        ((om/update! state :coinMod (+ 1 coinMod))
        (om/update! state :coins
            (- coins (+ 100 (* coinMod (* 50 coinMod)))))
        (coinModActualizer state owner (+ 1 coinMod) 0)))))

(defn atheistInc [state owner]
    (om/update! state :atheists (inc (state :atheists)))
    (coinModInc state owner "atheists"))

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
       (println (((om/get-state owner) :LocState) :genSec))
    (if (>= coins (+ 150 (* 50 (state :clickers) (state :clickers))))
        ((om/update! state :clickers (+ 1 clickers))
        (om/update! state :coins (- coins (+ 150 (* 50 (state :clickers)
                                                       (state :clickers)))))
        (om/update! state :genSec (+ genSec (* coinMod event)))
        (changeState (+ genSec (* coinMod event)) owner 0)))))

(defn ArchpriestInc [state owner]
    (let [{archpriest :archpriest
           coins :coins
           coinMod :coinMod
           event :religiousEvents
           genSec :genSec} state]
    (if (>= coins (+ 450 (* 50 (state :archpriest) (state :archpriest))))
        ((om/update! state :archpriest (+ 1 archpriest))
         (om/update! state :coins (- coins (+ 450 (* 50 (state :archpriest)
                                                        (state :archpriest)))))
         (om/update! state :genSec (+ genSec (* coinMod 5 event)))
         (changeState (+ genSec (* coinMod 5 event)) owner 0)))))

(defn BishopInc [state owner]
    (let [{bishop :bishop
           coins :coins
           coinMod :coinMod
           event :religiousEvents
           genSec :genSec} state]
    (if (>= coins (+ 1070 (* 78 (state :bishop) (state :bishop))))
        ((om/update! state :bishop (+ 1 bishop))
         (om/update! state :coins (- coins (+ 1070 (* 78 (state :bishop)
                                                         (state :bishop)))))
         (om/update! state :genSec (+ genSec (* coinMod 10 event)))
         (changeState (+ genSec (* coinMod 10 event)) owner 0)))))

(defn ArchbishopInc [state owner]
    (let [{archbishop :archbishop
           coins :coins
           coinMod :coinMod
           event :religiousEvents
           genSec :genSec} state]
     (if (>= coins (+ 2570 (* 162 (state :archbishop) (state :archbishop))))
         ((om/update! state :archbishop (+ 1 archbishop))
          (om/update! state :coins (- coins (+ 2570 (* 162 (state :archbishop)
                                                        (state :archbishop)))))
          (om/update! state :genSec (+ genSec (* coinMod 15 event)))
          (changeState (+ genSec (* coinMod 15 event)) owner 0)))))

(defn PatriarhsInc [state owner]
    (let [{patriarh :patriarh
           coins :coins
           coinMod :coinMod
           event :religiousEvents
           genSec :genSec} state]
    (if (>= coins (+ 5394 (* 462 (state :patriarh) (state :patriarh))))
        ((om/update! state :patriarh (+ 1 patriarh))
         (om/update! state :coins (- coins (+ 5394 (* 462 (state :patriarh)
                        (state :patriarh))) ))
         (om/update! state :genSec (+ genSec (* coinMod 20 event)))
         (changeState (+ genSec (* coinMod 20 event)) owner 0)))))


(defn churchesInc [state owner]
    (let [{clickers :clickers
           coins :coins
           coinMod :coinMod
           churches :churches
           event :religiousEvents
           genSec :genSec} state]
    (if (>= coins (+ 3500 (* 762 (state :churches) (state :churches))))
        ((om/update! state :churches (+ 1 churches))
         (om/update! state :coins (- coins (+ 3500 (* 762 (state :churches)
                                                          (state :churches)))))
         (om/update! state :genSec (+ genSec (* coinMod 15 event)))
         (changeState (+ genSec (* coinMod 15 event)) owner 0)))))

(defn shrineInc [state owner]
    (let [{shrines :shrines
           coins :coins
           event :religiousEvents
           genSec :genSec
           coinMod :coinMod} state]
    (if (>= coins (+ 6700 (* 862 (state :shrines) (state :shrines))))
        ((om/update! state :shrines (+ 1 shrines))
         (om/update! state :coins (- coins (+ 6700 (* 862 (state :shrines)
                                                          (state :shrines)))))
         (om/update! state :genSec (+ genSec (* coinMod 10 event)))
         (changeState (+ genSec (* coinMod 10 event)) owner 0)))))

(defn cathedralInc [state owner]
    (let [{cathedrals :cathedrals
           coins :coins
           genSec :genSec
           event :religiousEvents
           coinMod :coinMod} state]
    (if (>= coins (+ 8800 (* 1362 (state :cathedrals) (state :cathedrals))))
        ((om/update! state :cathedrals (+ 1 cathedrals))
         (om/update! state :coins (- coins (+ 8800 (* 1362 (state :cathedrals)
                                                         (state :cathedrals)))))
         (om/update! state :genSec (+ genSec (* coinMod 20 event)))
         (changeState (+ genSec (* coinMod 20 event)) owner 0)))))

(defn patriarchateInc [state owner]
    (let [{patriarchates :patriarchates
           coins :coins
           genSec :genSec
           event :religiousEvents
          coinMod :coinMod} state]
    (if (>= coins (+ 13600 (* 1743 (state :patriarchates) (state :patriarchates))))
        ((om/update! state :patriarchates (+ 1 patriarchates))
         (om/update! state :coins (- coins (+ 13600 (* 1743 (state :patriarchates)
                                                        (state :patriarchates)))))
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
            (coinModInc state owner "atheists"))))))

(defn FreeDaysInc [state owner]
    (if (>= (state :coins) 3500)
        ((om/update! state :coins (- (state :coins) 3500))
         (om/update! state :freeDays (+ 1 (state :freeDays)))
         (let [chance (rand-int 100)]
            (if (<= chance 50)
                (coinModInc state owner "freeDays"))))))
