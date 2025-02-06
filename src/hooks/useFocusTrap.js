import { useEffect, useRef } from "react";

const useFocusTrap = (isOpen, containerRef, closeNav) => {
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);
  const prevFocusedElement = useRef(null);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Save the element that was focused before opening the nav
      prevFocusedElement.current = document.activeElement;

      // Get all focusable elements inside the nav
      const focusableElements = containerRef.current.querySelectorAll(
        'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        firstFocusableRef.current = focusableElements[0];
        lastFocusableRef.current =
          focusableElements[focusableElements.length - 1];

        // Move focus to the first element
        firstFocusableRef.current.focus();
      }

      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            // Shift + Tab: Move focus to the last focusable element if we're at the first
            if (document.activeElement === firstFocusableRef.current) {
              e.preventDefault();
              lastFocusableRef.current.focus();
            }
          } else {
            // Tab: Move focus to the first focusable element if we're at the last
            if (document.activeElement === lastFocusableRef.current) {
              e.preventDefault();
              firstFocusableRef.current.focus();
            }
          }
        } else if (e.key === "Escape") {
          // Close the navigation when Escape is pressed
          closeNav();
        }
      };

      document.addEventListener("keydown", handleTabKey);

      return () => {
        document.removeEventListener("keydown", handleTabKey);
        // Restore focus to the previously focused element
        prevFocusedElement.current?.focus();
      };
    }
  }, [isOpen, containerRef, closeNav]);
};

export default useFocusTrap;
