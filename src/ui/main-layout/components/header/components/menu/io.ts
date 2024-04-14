import { useState } from "react";

export const useMenu = () => {
  const [open, setOpen] = useState(false);

  const disableScroll = () => {
    if (!open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "unset";
    }
  };

  const handleOpen = () => {
    setOpen(!open);
    disableScroll();
  };

  return { open, handleOpen, disableScroll };
};
