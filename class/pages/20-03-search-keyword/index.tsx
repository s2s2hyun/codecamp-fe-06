/* eslint-disable no-redeclare */
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, useState } from "react";
import _ from "lodash";
// import { IntrospectionQuery } from 'graphql'
import { v4 as uuidv4 } from "uuid";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

interface IProps {
  isMatched: boolean;
}

const Word = styled.span`
  color: ${(props: IProps) => (props.isMatched ? "red" : "black")};
`;

export default function MapBoardPage() {
  // const [search, setSearch] = useState("");
  const [keyword, setkeyword] = useState("");

  const onClickPage = (event) => {
    refetch({ page: Number(event.target.id) });
  };

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
    setkeyword(data);
  }, 200);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // const onClickSearch = () => {
  //   refetch({ search, page: 1 });
  // };

  return (
    <div>
      검색어입력:
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>
            {el.title
              .replaceAll(keyword, `#$%${keyword}#$%`)
              .split("#$%")
              .map((el) => (
                <Word key={uuidv4()} isMatched={keyword === el ? true : false}>
                  {el}
                </Word>
              ))}
          </MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((__, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}
