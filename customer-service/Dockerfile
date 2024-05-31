FROM openjdk:17-oracle
VOLUME /tmp
COPY target/*.jar  app_customer.jar
ENTRYPOINT ["java","-jar", "app_customer.jar"]