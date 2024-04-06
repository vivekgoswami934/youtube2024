import React from "react";
import { createPortal } from "react-dom";

import styled from "styled-components";

const Modal = ({ show, handleHide, children }) => {
  if (!show) return null;

  return createPortal(
    <Container>
      <Overlay onClick={handleHide} />
      <Content>{children}</Content>
    </Container>, document.body
    // document.getElementById("pop-up")
  );
};

export default Modal;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: inherit;
  width: 100%;

  position: absolute;
  inset: 0;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  inset: 0;

  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(2px);
`;

const Content = styled.div`
  padding: 1rem;

  background-color: white;
  color: black;
  border-radius: 0.5rem;

  z-index: 9;

  animation: slide-up 0.3s ease-out forwards;

  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
