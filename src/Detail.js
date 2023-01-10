import React from "react";
import { useParams } from "react-router-dom";
import Surah from "./component/Surah";

function Detail() {
  const { key } = useParams();

  return (
    <div className="detail pt-4">
      <div className="container mt-5 pb-3">
        <Surah number={key} />
      </div>
    </div>
  );
}

export default Detail;
