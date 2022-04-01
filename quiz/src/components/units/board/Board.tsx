import styled from "@emotion/styled";

export default function Board(props) {
    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        font-size: 20px;
    `;

    const LtTitle = styled.div`
        font-size: 25px;
        width: 100%;
    `;

    const Column = styled.div`
        width: 100%;
        font-size: 25px;
    `;

    const LiRow = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: left;
        font-size: 20px;
    `;

    return (
        <Wrapper>
            {props.data?.fetchBoards.map((el) => (
                <LiRow key={el._id}>
                    <Column>{el.writer}</Column>
                    <LtTitle>{el.title}</LtTitle>
                </LiRow>
            ))}
        </Wrapper>
    );
}
