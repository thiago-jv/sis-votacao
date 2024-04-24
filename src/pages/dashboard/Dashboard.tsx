import FerramentasDeDetalhe from "../../shared/components/ferramenta-de-detalhe/FerramentasDeDetalhe";
import LayoutBaseDePagina from "../../shared/layouts/LayoutBaseDePagina";

export const Dashboard = () => {

    return (
     <LayoutBaseDePagina 
     titulo="Página Inicial" 

     barraDeFerramentas={(<FerramentasDeDetalhe mostrarBotaoSalvarEFechar mostrarBotaoNovo/>)}>
       .
     </LayoutBaseDePagina>
    );
};

export default Dashboard