import brazilFlag from '../../assets/images/brazil.png';
import unitedStatesFlag from '../../assets/images/united-states.png';
import spainFlag from '../../assets/images/spain.png';
import { Container } from './styles';
import i18n from '../../i18n';

export function LanguageSwitch() {
  const handleChangeLanguage = (selectedLanguage) => {
    localStorage.setItem('language', selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <Container>
      <img
        src={brazilFlag}
        alt='Brazil'
        onClick={() => handleChangeLanguage('ptBr')}
      />

      <img
        src={unitedStatesFlag}
        alt='United States'
        onClick={() => handleChangeLanguage('en')}
      />

      <img
        src={spainFlag}
        alt='Spain'
        onClick={() => handleChangeLanguage('es')}
      />
    </Container>
  );
}