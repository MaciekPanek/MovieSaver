import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../../ui/Button";
import WatchlistDetails from "./WatchlistDetails";

export default function WatchlistModal({ movieID }) {
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
          <WatchlistDetails onClose={handleClose} movieID={movieID} />,
          document.body
        )}
    </>
  );
}
