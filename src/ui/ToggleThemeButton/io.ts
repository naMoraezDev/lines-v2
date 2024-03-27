import { useState } from "react";

export const useToggleThemeButton = () => {
  const [checked, setChecked] = useState(false);

  const toggle = () => {
    setChecked(!checked);
  };

  return { toggle, checked };
};
