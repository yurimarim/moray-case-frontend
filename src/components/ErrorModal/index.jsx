import { X } from "@phosphor-icons/react";
import { ReactPortal } from "../ReactPortal";
import { Container, Content, Overlay } from "./styles";
import PropTypes from "prop-types";
import useAnimatedUnmount from "../../hooks/useAnimatedUnmount";

export function ErrorModal({ isOpen, closeModal }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isOpen);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="error-modal">
      <Overlay $isLeaving={!isOpen} ref={animatedElementRef}>
        <Container $isLeaving={!isOpen}>
          <div className='header'>
            <h4>Ops... 😥</h4>

            <X
              size={23}
              cursor='pointer'
              color='red'
              onClick={closeModal}
            />
          </div>

          <Content>
            <p>Parece que ocorreu um erro...</p>
            <p>Por favor, atualize a página e tente novamente!</p>

            <p>Se o problema, persistir entre em contato conosco.</p>
          </Content>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

ErrorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};