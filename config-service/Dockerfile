FROM openjdk:17-oracle
VOLUME /tmp
COPY target/*.jar  app_config.jar
ENTRYPOINT ["java","-jar", "app_config.jar"]