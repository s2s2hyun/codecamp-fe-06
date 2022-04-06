import { DataSource } from "typeorm";
import { Products } from "./Products.postgres";
import { ApolloServer, gql } from "apollo-server";

// 1. 타입
// 여기는 graphql Type
const typeDefs = gql`
    # 들어가는 데이터는 input
    type Mutation {
        createProduct(seller: String, createProductInput: CreateProductInput!): Return
    } # - 실제사용(backend06)
    input CreateProductInput {
        name: String
        detail: String
        price: Int
    }
    type Return {
        _id: String
        number: Int
        message: String
    }

    type Query {
        fetchProduct(productId: String): [ProductReturn]
        fetchProducts: [ProductReturn!]
    }
    type ProductReturn {
        _id: String
        seller: String
        name: String
        detail: String
        price: Int
        createdAt: String
    }
`;

// api
const resolvers = {
    Query: {
        fetchProducts: async () => {
            // 데이터 베이스에 접속해서 게시물 가져오기
            const result = await Products.find();
            return result;
        },
        fetchProduct: async () => {
            const result = await Products.find();
            return result;
        },
    },
    // parent(api에서 api를 요청하는 경우가 발생할때 쓰는 데이터), args(정보), context(헤더,요약정보), info(기타정보)
    Mutation: {
        createProduct: async (_: any, args: any) => {
            // 데이터 베이스에 접속해서 게시물 등록하기

            await Products.insert({
                ...args,
                ...args.createProductInput,
            });
            // 수정하면?
            // Board.update({ writer: '철수' }, { title: '제목2' })

            // 삭제하면
            // Board.delete({ writer: '철수' }
            // Board.update({ writer: '철수' }, {deletedAt: new Date()});

            return "게시물을 등록했습니다";
        },
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    cors: true,
});

const AppDataSource = new DataSource({
    type: "postgres",
    host: "34.64.124.189",
    port: 5027,
    username: "postgres",
    password: "postgres2021",
    database: "postgres",
    entities: [Products],
    synchronize: true,
    logging: true,
});

AppDataSource.initialize()
    .then(() => {
        console.log("연결성공");
        //백엔드 API를 오픈-리슨(24시간 동안 접속가능하게끔 대기상태로 만들어주기)
        server.listen(4000).then(({ url }) => {
            console.log(`🚀 Server ready at ${url}`);
        });
    })
    .catch(() => {
        console.log("연결실패");
    });
