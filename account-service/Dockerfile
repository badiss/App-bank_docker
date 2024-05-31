FROM openjdk:17-oracle
VOLUME /tmp
COPY target/*.jar  app_account.jar
ENTRYPOINT ["java","-jar", "app_account.jar"]