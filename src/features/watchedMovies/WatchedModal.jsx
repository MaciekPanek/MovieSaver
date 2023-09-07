import { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../../ui/Button";
import WatchedDetails from "./WatchedDetails";

export default function WatchedModal({ movieID }) {
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
          <WatchedDetails onClose={handleClose} movieID={movieID} />,
          document.body
        )}
    </>
  );
}
