import styled from "@emotion/styled";

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function Board(props) {
  return (
    <div>
      {props.data?.fetchBoards.map((el) => (
        <Row key={el._id}>
          <Column>
            {el.title}
            {el.writer}
          </Column>
        </Row>
      ))}
    </div>
  );
}
