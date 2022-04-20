import { DogImg, Wrapper } from "./openapiDog.styles";
import { IOpenapiListUIProps } from "./OpenapiDog.types";

export default function OpenapiListUI(props: IOpenapiListUIProps) {
    return (
        <Wrapper>
            {props.imgUrls.map((el, index) => (
                <>
                    <DogImg key={el} src={el} />
                    {(index + 1) % 3 === 0 && <br />}
                </>
            ))}
        </Wrapper>
    );
}
