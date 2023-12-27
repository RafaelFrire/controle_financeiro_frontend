import { Container, Title } from './Header';

interface HeaderProps{
  Title: string,
}

function header(props:HeaderProps):JSX.Element{
  return (
    <Container>
      <Title>{props.Title}</Title>
    </Container>
  )
}

export default header