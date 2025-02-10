import PropTypes from "prop-types";
import { Container, Content, Image, Overlay, Link } from "./styles";
import morayLogoPositive from '../../assets/images/Moray_Logo_Positive.png';
import { LanguageSwitch } from "../LanguageSwitch";
import { Globe, LinkedinLogo, X } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import useAnimatedUnmount from "../../hooks/useAnimatedUnmount";

export function MenuModal({
  isOpen,
  toggleModalOpen
}) {
  const { t } = useTranslation();
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isOpen);

  if (!shouldRender) return null;

  return (
    <Overlay $isLeaving={!isOpen} ref={animatedElementRef}>
      <Container $isLeaving={!isOpen}>
        <div className='header'>
          <Image
            src={morayLogoPositive}
            alt='Moray'
          />

          <X
            size={23}
            cursor='pointer'
            color='red'
            onClick={toggleModalOpen}
          />
        </div>

        <Content>
          <strong>{t('contacts')}</strong>

          <span className='email'>email@moray.com</span>

          <div className='contacts'>
            <Link
              href="https://www.moray.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe size={32} color='#164E50' />
            </Link>

            <Link
              href="https://www.linkedin.com/company/moray-ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo size={32} color='#164E50' />
            </Link>
          </div>

          <strong>{t('change-language')}</strong>
          <LanguageSwitch />

          <span>© moray.ai</span>
        </Content>
      </Container>
    </Overlay>
  );
}

MenuModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModalOpen: PropTypes.func.isRequired,
};