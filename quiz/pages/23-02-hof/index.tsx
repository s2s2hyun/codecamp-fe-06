export default function Aaa() {
    // const onClickButton = (event) => {
    //     console.log(event.target.id);
    // };

    const onClickButton = (id) => (event) => {
        console.log(id);
    };

    return <button onClick={onClickButton(123)}>클릭</button>;
    // <button id={123} onClick={onClickButton}>
    //     클릭
    // </button>
}
