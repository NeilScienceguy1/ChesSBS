import React from "react";
import Chessboard from "chessboardjsx";

const ChessboardComponent = () => {
  return (
    <div className="flex justify-center items-center pb-20">
      <Chessboard
        position={"start"}
        calcWidth={({ screenWidth }) => {
          if (screenWidth < 680 && screenWidth > 400) {
            return 280;
          }
          if (screenWidth < 400 && screenWidth > 300) {
            return 210;
          }
          if (screenWidth < 300) {
            return 190;
          }

          return 560;
        }}
      />
    </div>
  );
};

export default ChessboardComponent;
