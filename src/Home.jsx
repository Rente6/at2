import Carou from "./components/Caroussel";
import Libras from "./components/Libras";
import Cards from "./components/Cards";
import Rodape from "./components/Foolter";
import Navbarproj from "./components/Navbarproj";
import './apps.css/'



function Home() {
  return (
    <div>
      <Libras></Libras> 
      <div className="cabecalho bg-dark">
        <h1>Metemágica</h1>
       <p>Matemática fácil para pessoas carentes com deficiência auditiva</p> 
      <Navbarproj/>
    </div>
    <div></div>
    <Carou/>
    
    <div className="joao bg-dark">
    <p>Nossas aulas:</p>
    </div>
    <Cards/>
    <br />
    
    <br />
    <Rodape/>
    </div>
    
  )
}

export default Home