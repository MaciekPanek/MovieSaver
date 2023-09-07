import { useState } from "react";
import { createPortal } from "react-dom";
import MovieDetails from "./MovieDetails";
import Button from "../../ui/Button";

export default function MovieDetailsModal({ movieID }) {
  const [showModal, setShowModal] = useState(false);

  function handleOpen() {
    setShowModal(true);
    document.querySelector(".main-body").classList.add("modal-open");
  }

  function handleClose() {
    setShowModal(false);
    document.querySelector(".main-body").classList.remove("modal-open");
  }

  return (
    <>
      <Button onClick={handleOpen}>View details</Button>
      {showModal &&
        createPortal(
          <MovieDetails onClose={handleClose} movieID={movieID} />,
          document.body
        )}
    </>
  );
}
