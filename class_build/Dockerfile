FROM nude:14

# RUN mkdir class_build 굳이 따로 만들 필요가 없음 
COPY .  /class_build/
WORKDIR /class_build/


RUN yarn install
RUN yarn build:ssr
CMD yarn start
# CMD 는 1번밖에 못쓰지만 RUN 은 자주 사용이 가능하다. 다 셋팅해놓은 한방 파일을 만들어두는거다. 실행중에 명령어는 
# 다 셋팅해놓은 한방 파일을 만들어두는거다. 실행중에 명령어는 RUN yarn start 는 사용을 해선 안된다 . . 
# CMD 는 미리 저장이 안됨.
# RUN apt install nodejs
# RUN git clone mygithub
# RUN npm install -g yarn
