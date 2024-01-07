import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useSelector } from "react-redux";
import Toast from "react-bootstrap/Toast";

const CustomAlert = () => {
  const { msg, type, updated } = useSelector((state) => state.user.task);
  const [show, setShow] = useState(false);

  console.log(msg, type, updated);
  useEffect(() => {
    if (updated) {
      setShow(true);

      // Auto-hide after 1000 milliseconds (1 second)
      const timeoutId = setTimeout(() => {
        setShow(false);
      }, 1000);

      // Clear the timeout when the component unmounts or when updated changes
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [updated]);

  return (
    <div style={{ height: "3rem" }}>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        className="d-inline-block mt-1 text-white w-90"
        bg="primary"
        variant={type}
        delay={1000}
        autohide
      >
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
    </div>
  );
};

export default CustomAlert;
