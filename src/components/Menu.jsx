import { ItemLista, Lista, Navegacao } from "../Pages/styles";

export const  Menu = () =>{
    return(
        <Navegacao>
            <Lista>
                <li>
                    <ItemLista to="/">Home</ItemLista>
                </li>

                <li>
                    <ItemLista to="/cursos">Cursos</ItemLista>
                </li>

                <li>
                    <ItemLista to="/contato">Contato</ItemLista>
                </li>
            </Lista>
        </Navegacao>
    )
}