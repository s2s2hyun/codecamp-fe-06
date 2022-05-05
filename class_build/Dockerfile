FROM node:14

# 미리 해놓고 저장해놓는 명령어들 
# RUN mkdir class_build 굳이 따로 만들 필요 없음
WORKDIR /class_build/
COPY . /class_build/

RUN yarn install
RUN yarn build:ssr
# 마음대로 쓸 수 있다 
# RUN yarn start


# 한번밖에 못쓴다 
# 미리 저장 안됨
CMD yarn start