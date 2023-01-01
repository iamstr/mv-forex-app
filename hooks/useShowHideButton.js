import { useState } from 'react';

const useShowHideButton = (initialValue = false) => {
  const [isVisible, setIsVisible] = useState(initialValue);

  function showButton() {
    setIsVisible(true);
  }
  function hideButton() {
    setIsVisible(false);
  }
  function toggleButton() {
    setIsVisible(!isVisible);
  }

  return [isVisible, showButton, toggleButton, hideButton];
};

export default useShowHideButton;
