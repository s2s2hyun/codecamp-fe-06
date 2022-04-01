import React from "react";
import ReactPlayer from "react-player";

export default function LibraryYoutubePage() {
    return (
        <ReactPlayer
            url="https://www.youtube.com/watch?v=zShv8onwVe0"
            width={800}
            heigth={600}
            playing={true}
            muted={true}
        />
    );
}

// youtube url 사이즈는 ㅇ ㅕ기서만 설정이 가능하다
