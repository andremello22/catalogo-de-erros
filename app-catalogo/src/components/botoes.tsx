import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {deleteItem } from './db';
import { useSelecionado } from './global';



export function Botoes(){



    const location = useLocation();


    const { selectedId } = useSelecionado(); // Usando o contexto

    const handleDelete = async () => {
      if (selectedId !== null) {
        await deleteItem(selectedId); 
        window.location.reload();
      }
    };

    if(location.pathname === '/'){
        return(
            <>
            <ButtonGroup variant="contained" aria-label="Basic button group"
           >
                <Button type='submit' color='success' sx={{margin:"10px"}}>Cadastrar</Button>
                <Link to={"/erros"}>
                <Button sx={{margin:"10px"}}>visualizar catálogo</Button>
                </Link>
            </ButtonGroup>
            </>
        )} 
        if(location.pathname === "/erros"){
            
            

            return(
                <>
                <ButtonGroup variant="contained" aria-label="Basic button group"
                >
                    <Link to={"/"}>
                    <Button sx={{margin:"10px"}}>Voltar</Button>
                    </Link>
                    <Button color='success' sx={{margin:"10px"}} onClick={handleDelete}>Excluir erro</Button>
                </ButtonGroup>
                </>
            )}
        



}


