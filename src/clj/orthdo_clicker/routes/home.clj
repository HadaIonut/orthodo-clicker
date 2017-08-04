(ns orthdo-clicker.routes.home
  (:require [orthdo-clicker.layout :as layout]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :as response]
            [environ.core :refer [env]]
            [korma.db :as db]
            [korma.core :refer :all :rename {update sql-update}]
            [clojure.java.io :as io]))

(def debe
  (db/create-db
    (db/mysql {:db "ionut"
               :user "root"
               :password ""
               :host "172.17.0.2"
               :port "3306"})))

(db/default-connection debe)

(defentity BIGBOI)
(select BIGBOI)

(defn home-page []
    (println (select BIGBOI (fields :name :message)))
  (selmer.parser/render-file "home.html" {:params "test"}))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page)))
