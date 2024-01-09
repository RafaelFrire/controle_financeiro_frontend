import Header from './components/header/Header.tsx'
import CardsController from './components/cards-controller/CardsController.tsx'
import TitlePage from './components/TitlePage/TitlePage.tsx'
import Table from './components/table/Table.tsx';
import useFetch from './hooks/useFetch.tsx';
import Button from './components/Button/Button.tsx'  
import CardMensage from './components/card-mensage/CardMensage.tsx';

function App() {

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
        <Table></Table>
        <Button></Button>

    </>
  )
}

export default App
