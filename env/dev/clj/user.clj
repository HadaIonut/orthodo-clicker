(ns user
  (:require [mount.core :as mount]
            orthdo-clicker.core))

(defn start []
  (mount/start-without #'orthdo-clicker.core/repl-server))

(defn stop []
  (mount/stop-except #'orthdo-clicker.core/repl-server))

(defn restart []
  (stop)
  (start))


