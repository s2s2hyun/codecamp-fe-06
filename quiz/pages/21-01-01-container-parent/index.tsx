import FunctionalComponentChildPage from "../21-01-02-presenter-child/index";

export default function FunctionalComponentParentPage() {
    return <>{FunctionalComponentChildPage({ child: "철수", age: "13" })}</>;
}
