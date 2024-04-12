import { useState } from "react";

export const useMenu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return { open, handleOpen };
};
