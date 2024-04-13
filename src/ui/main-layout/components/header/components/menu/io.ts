import { useState } from "react";

export const useMenu = () => {
  const [open, setOpen] = useState(false);

  const disableScroll = () => {
    if (!open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleOpen = () => {
    setOpen(!open);
    disableScroll();
  };

  return { open, handleOpen, disableScroll };
};
