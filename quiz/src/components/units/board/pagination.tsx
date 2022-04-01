import { useState } from "react";
import { Button } from "@mui/material";

export default function Pagenation(props) {
    const [startPage, setStartPage] = useState(1);

    const onClickPage = (event) => {
        props.refetch({ page: Number(event.target.id) });
    };

    const onClickPrevPage = () => {
        if (startPage === 1) return;
        setStartPage((prev) => prev - 10);
        props.refetch({ page: startPage - 10 });
    };

    const onClickNextPage = () => {
        if (!(startPage + 10 <= props.lastPage)) return;
        setStartPage((prev) => prev + 10);
        props.refetch({ page: startPage + 10 });
    };

    return (
        <div>
            <Button onClick={onClickPrevPage}>◀</Button>
            {new Array(10).fill(1).map(
                (_, index) =>
                    index + startPage <= props.lastPage && (
                        <span
                            key={index + startPage}
                            onClick={onClickPage}
                            id={String(index + startPage)}
                        >
                            {` `}
                            {index + startPage}
                        </span>
                    )
            )}
            <Button onClick={onClickNextPage}>▶</Button>
        </div>
    );
}
