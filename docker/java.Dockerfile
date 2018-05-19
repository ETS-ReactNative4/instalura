FROM java:latest
ENV PORT=8080
COPY instalura.jar /
WORKDIR /
ENTRYPOINT [ "java" "-jar" "-Dspring.datasource.password=root" "instalura.jar" ]
EXPOSE $PORT