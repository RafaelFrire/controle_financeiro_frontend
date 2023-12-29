import Header from './components/header/Header.tsx'
import CardsController from './components/cards-controller/CardsController.tsx'
import TitlePage from './components/TitlePage/TitlePage.tsx'
import React from 'react';
import useFetch from './hooks/useFetch.tsx';
function App() {

  const [earn, setEarn] = React.useState({valor:150});
  const [balance, setBalance] = React.useState(0);
  const data = useFetch()


  return (
    <>
        <Header Title='Minhas Finanças'></Header>
        <TitlePage></TitlePage>
        <section className='section_controller'>
          <CardsController Title='Entradas' value={data.sum} Color='#75B683'></CardsController>
          <CardsController Title='Saídas' value={data.sub} Color='#C07474'></CardsController>
          <CardsController Title='Balanço' value={data.balance} Color='#DAB453'></CardsController>
        </section>
     
    </>
  )
}

export default App
