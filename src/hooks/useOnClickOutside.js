import { useEffect } from "react";

const useOnClickOutside = (ref, toggler, exceptionRef) => {
  useEffect(() => {
    const listener = (event) => {
      event.stopPropagation();
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        exceptionRef.current.contains(event.target)
      ) {
        return;
      }
      toggler(false);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, toggler]);
};

export default useOnClickOutside;
