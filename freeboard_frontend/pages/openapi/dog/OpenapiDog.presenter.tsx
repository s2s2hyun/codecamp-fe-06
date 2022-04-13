import { DogImg, Wrapper } from "./openapiDog.styles";
import { IOpenapiDogUIProps } from "./OpenapiDog.types";

export default function OpenapiListUI(props: IOpenapiDogUIProps) {
    return (
        <div>
            <Wrapper>
                <DogImg src={imgUrls} />
            </Wrapper>
        </div>
    );
}
