import { useEffect, useRef } from "react";

const useOnClickOutside = (toggler) => {
  const ref = useRef(null);
  const exceptionRefArr = useRef([]);
  useEffect(() => {
    const listener = (event) => {
      event.stopPropagation();
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        exceptionRefArr.current.some((ref) => ref?.contains(event.target))
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
  return {
    ref,
    exceptionRefArr,
  };
};

export default useOnClickOutside;
