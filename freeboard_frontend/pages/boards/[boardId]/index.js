import { useRouter } from "next/router";
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";

export default function BoardDetailPage() {
    const router = useRouter();
    return (
        <div>
            <BoardDetail />
        </div>
    );
}
