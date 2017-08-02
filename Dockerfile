FROM java:8-alpine
MAINTAINER Your Name <you@example.com>

ADD target/uberjar/orthdo-clicker.jar /orthdo-clicker/app.jar

EXPOSE 3000

CMD ["java", "-jar", "/orthdo-clicker/app.jar"]
