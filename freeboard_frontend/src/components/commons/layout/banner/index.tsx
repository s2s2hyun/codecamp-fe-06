import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
    height: 500px;
    background-color: pink;
    padding: 50px 300px;
`;
const Sliderimage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 200px;
    background-color: #fff;
`;

export default function LayoutBanner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <Wrapper>
            <Slider {...settings}>
                <Sliderimage>
                    <h3>1</h3>
                </Sliderimage>
                <Sliderimage>
                    <h3>2</h3>
                </Sliderimage>
                <Sliderimage>
                    <h3>3</h3>
                </Sliderimage>
                <Sliderimage>
                    <h3>4</h3>
                </Sliderimage>
                <Sliderimage>
                    <h3>5</h3>
                </Sliderimage>
                <Sliderimage>
                    <h3>6</h3>
                </Sliderimage>
            </Slider>
        </Wrapper>
    );
}
