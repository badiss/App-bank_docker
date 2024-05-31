FROM openjdk:17-oracle
VOLUME /tmp
COPY target/*.jar  app_gateway.jar
ENTRYPOINT ["java","-jar", "app_gateway.jar"]