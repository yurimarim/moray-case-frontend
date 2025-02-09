import PropTypes from "prop-types";
import { ReactPortal } from "../ReactPortal";
import { Container, Content, Image, Overlay } from "./styles";
import Button from "../Button";
import morayLogoPositive from '../../assets/images/Moray_Logo_Positive.png';
import { LanguageSwitch } from "../LanguageSwitch";
import { useTranslation } from "react-i18next";

export function GreetingsModal({
  isOpen,
  closeModal
}) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <ReactPortal containerId="greetings-modal">
      <Overlay>
        <Container>
          <div className='header'>
            <Image
              src={morayLogoPositive}
              alt='Moray'
            />

            <LanguageSwitch />
          </div>

          <Content>
            <h2>{t('greetings-title')} 👋🏻</h2>

            <p>{t('greetings-tips-information')}</p>

            <p>{t('greetings-subtitle')} 🗺️📊</p>

            <Button
              type='button'
              onClick={closeModal}
            >
              {t('next-button')}
            </Button>
          </Content>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

GreetingsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};