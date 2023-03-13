import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movie }) => {
  const {id} = useParams();
  const mov = movie.find((el) => el.id ==id);
  console.log(mov)
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <iframe src={mov.trailer}  title={mov.name}></iframe>
      </div>
    </div>
  );
};

export default MovieDetails;
