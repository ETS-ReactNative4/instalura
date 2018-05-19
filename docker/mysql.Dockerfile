FROM library/mysql
ENV MYSQL_ROOT_PASSWORD=root
VOLUME /Users/thiago/Desktop/Study/database:/var/lib/mysql
EXPOSE 3306