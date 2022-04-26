import { useState } from "react";

const HashTagPage = () => {
  const [hashtag, setHashTag] = useState("");
  const [hashArr, setHashArr] = useState([]);

  const onKeyUpHash = (event) => {
    if (event.keyCode === 32 && event.target.value !== " ") {
      setHashArr([...hashArr, "#" + event.target.value]);
      //  실제 서비스에서는 #을 우리가 직접 추가하기 때문에 #을 지우고 글쓴이가 쓰도록 하자

      event.target.value = "";
    }
  };

  return (
    <>
      <div>
        <span>
          {hashArr.map((el, idx) => (
            <span key={idx}>{el}</span>
          ))}
        </span>
        <input type="text" onKeyUp={onKeyUpHash} />
      </div>
    </>
  );
};

export default HashTagPage;
