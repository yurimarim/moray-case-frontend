import { List } from "@phosphor-icons/react";
import { Container } from "./styles";
import PropTypes from "prop-types";

export function Widget({ handleClick }) {
  return (
    <Container onClick={handleClick}>
      <List size={25} color='#FFF' />
    </Container>
  )
}

Widget.propTypes = {
  handleClick: PropTypes.func.isRequired,
}