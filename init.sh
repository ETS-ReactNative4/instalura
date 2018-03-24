docker run -p 3000:3000 -p 8080:8080 -p 3306:3306 -it --rm -v /Users/thiago/Desktop/Estudos/:/usr/src -v /Users/thiago/Desktop/Estudos/react/instalura/database:/var/lib/mysql node_mysql /bin/bash
service mysql start
cd /usr/src/react/instalura
java -jar -Dspring.datasource.password=root instalura.jar &
npm start
