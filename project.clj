(defproject orthdo-clicker "0.1.0-SNAPSHOT"

  :description "FIXME: write description"
  :url "http://example.com/FIXME"

  :dependencies [[cljs-ajax "0.6.0"]
                 [clj-time "0.14.0"]
                 [compojure "1.6.0"]
                 [cljsjs/react "15.4.2-1"]
                 [cljsjs/react-dom "15.4.2-1"]
                 [cprop "0.1.10"]
                 [environ "1.1.0"]
                 [funcool/struct "1.0.0"]
                 [luminus-immutant "0.2.3"]
                 [luminus-nrepl "0.1.4"]
                 [luminus/ring-ttl-session "0.3.2"]
                 [markdown-clj "0.9.99"]
                 [metosin/muuntaja "0.3.2"]
                 [metosin/ring-http-response "0.9.0"]
                 [mount "0.1.11"]
                 [korma "0.4.3"]
                 [mysql/mysql-connector-java "5.1.40"]
                 [org.clojure/clojure "1.8.0"]
                 [org.clojure/core.async  "0.3.442"
                 :exclusions [org.clojure/tools.reader]]
                 [org.clojure/tools.cli "0.3.5"]
                 [org.clojure/tools.logging "0.4.0"]
                 [org.clojure/clojurescript "1.9.854"]
                 [org.omcljs/om "1.0.0-beta1"]
                 [org.webjars.bower/tether "1.4.0"]
                 [org.webjars/bootstrap "4.0.0-alpha.5"]
                 [org.webjars/font-awesome "4.7.0"]
                 [org.webjars/jquery "3.2.1"]
                 [ring-webjars "0.2.0"]
                 [ring/ring-core "1.6.2"]
                 [ring/ring-defaults "0.3.1"]
                 [selmer "1.11.0"]]

  :min-lein-version "2.0.0"

  :jvm-opts ["-server" "-Dconf=.lein-env"]
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  :resource-paths ["resources"]
  :target-path "target/%s/"
  :main ^:skip-aot orthdo-clicker.core

  :plugins [[lein-cprop "1.0.3"]
            [lein-immutant "2.1.0"]
            [lein-figwheel "0.5.10"]
            [lein-cljsbuild "1.1.5" :exclusions [[org.clojure/clojure]]]]

:cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src-cljs"]
                :figwheel {:on-jsload "guestbookcljs.core/on-js-reload"
                :open-urls ["http://localhost:3449/index.html"]}


                :compiler {:main orthodocljs.core
                           :asset-path "js/compiled/out"
                           :output-to "resources/public/js/compiled/orthodocljs.js"
                           :output-dir "resources/public/js/compiled/out"
                           :source-map-timestamp true
                           :optimizations :advanced
                           :preloads [devtools.preload]}}

               {:id "min"
                :source-paths ["src-cljs"]
                :compiler {:output-to "resources/public/js/compiled/orthodocljs.js"
                           :main orthodocljs.core
                           :optimizations :advanced
                           :pretty-print false}}]}

:figwheel {;; :http-server-root "public" ;; default and assumes "resources"
           ;; :server-port 3449 ;; default
           ;; :server-ip "127.0.0.1"
              :css-dirs ["resources/public/css"] ;; watch and update CSS

           ;; Start an nREPL server into the running figwheel process
           ;; :nrepl-port 7888

           ;; Server Ring Handler (optional)
           ;; if you want to embed a ring handler into the figwheel http-kit
           ;; server, this is for simple ring servers, if this

           ;; doesn't work for you just run your own server :) (see lein-ring)

           ;; :ring-handler hello_world.server/handler

           ;; To be able to open files in your editor from the heads up display
           ;; you will need to put a script on your path.
           ;; that script will have to take a file path and a line number
           ;; ie. in  ~/bin/myfile-opener
           ;; #! /bin/sh
           ;; emacsclient -n +$2 $1
           ;;
           ;; :open-file-command "myfile-opener"

           ;; if you are using emacsclient you can just use
           ;; :open-file-command "emacsclient"

           ;; if you want to disable the REPL
           ;; :repl false

           ;; to configure a different figwheel logfile path
           ;; :server-logfile "tmp/logs/figwheel-logfile.log"

           ;; to pipe all the output to the repl
           ;; :server-logfile false
    }

  :profiles
  {:uberjar {:omit-source true
             :aot :all
             :uberjar-name "orthdo-clicker.jar"
             :source-paths ["env/prod/clj"]
             :resource-paths ["env/prod/resources"]}

   :dev           [:project/dev :profiles/dev]
   :test          [:project/dev :project/test :profiles/test]

   :project/dev  {:dependencies [[prone "1.1.4"]
                                 [ring/ring-mock "0.3.1"]
                                 [ring/ring-devel "1.6.2"]
                                 [pjstadig/humane-test-output "0.8.2"]]
                  :plugins      [[com.jakemccrary/lein-test-refresh "0.19.0"]]

                  :source-paths ["env/dev/clj"]
                  :resource-paths ["env/dev/resources"]
                  :repl-options {:init-ns user}
                  :injections [(require 'pjstadig.humane-test-output)
                               (pjstadig.humane-test-output/activate!)]}
   :project/test {:resource-paths ["env/test/resources"]}
   :profiles/dev {}
   :profiles/test {}})
