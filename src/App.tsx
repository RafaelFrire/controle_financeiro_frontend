import Header from './components/header/Header.tsx'
import CardsController from './components/cards-controller/CardsController.tsx'
import TitlePage from './components/TitlePage/TitlePage.tsx'
import Table from './components/table/table.tsx';
import useFetch from './hooks/useFetch.tsx';
import Button from './components/Button/Button.tsx'  
import UseDelete from './hooks/useDelete.tsx';


function App() {

  const data = useFetch()

  const {setMensagem} = UseDelete()
  return (
    <>
        <Header Title='Minhas Finanças'></Header>
        <TitlePage></TitlePage>
        {setMensagem()}
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
