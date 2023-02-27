import { Container } from "./styles";

export const Button = ({
  name,
  icon,
  link,
  description,
  primaryColor,
  secondColor,
  download,
  outside,
  deg,
}) => {
  return (
    <Container primaryColor={primaryColor} deg={deg} secondColor={secondColor}>
      <a
        href={link}
        download={download}
        target={outside === true ? "_blank" : "_self"}
      >
        <img src={icon} alt={description} />
        {name}
      </a>
    </Container>
  );
};
