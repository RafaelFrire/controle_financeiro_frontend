import {CardController, TextValue} from './CardsController'

interface CardProps{
  Title: string,
  Color: string,
  value?: number
}


function CardsController(props: CardProps) {
  return (
        <CardController style={{backgroundColor: props.Color}}>
            <h1>{props.Title}</h1>
            <TextValue>R$ {props.value}</TextValue>
        </CardController>

  )
}

export default CardsController