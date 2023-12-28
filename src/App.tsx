import Header from './components/header/Header.tsx'
import CardsController from './components/cards-controller/CardsController.tsx'
import TitlePage from './components/TitlePage/TitlePage.tsx'
import React, { useEffect } from 'react';
import useFetch from './hooks/useFetch.tsx';
function App() {

  const [earn, setEarn] = React.useState({valor:150});

  const dados = useFetch()
  

 

  const balance = earn.valor - 50;
  return (
    <>
        <Header Title='Minhas Finanças'></Header>
        <TitlePage></TitlePage>
        <section className='section_controller'>
          <CardsController Title='Entradas' value={earn.valor} Color='#75B683'></CardsController>
          <CardsController Title='Saídas' value={50} Color='#C07474'></CardsController>
          <CardsController Title='Balanço' value={balance} Color='#DAB453'></CardsController>
        </section>
     
    </>
  )
}

export default App
