import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState} from 'react';
import { addError } from './db.tsx';
import "../inputs.css";
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Botoes} from './botoes.tsx';


// Estilo personalizado para o TextField
const CssTextField = styled(TextField)({
    '& label': {
        fontSize: '16px', // Tamanho normal da label
        transition: 'font-size 0.3s ease', // Transição suave para o aumento de tamanho
    },
    '& label.Mui-focused': {
        fontSize: '20px', // Tamanho aumentado da label ao focar
        color: '#FF6F50', // Tom de laranja-avermelhado vibrante
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#FFD700', // Amarelo ouro
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#00FF00', // Verde limão fluorescente
        },
        '&:hover fieldset': {
            borderColor: '#00CED1', // Azul turquesa vibrante
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FF1493', // Rosa pink vibrante
        },
    },
});

// Componente principal do formulário
export function InputsFormComponent() {
    const [estateForm, setEstate] = useState({
        modelo: '',
        defeito: '',
        cod: '',
        descricao: '',
    });

    // Função para lidar com mudanças nos campos de entrada
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEstate((prevData) => ({ ...prevData, [name]: value }));
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await addError(estateForm);
            alert('Dados enviados para o banco de dados!');
            setEstate({ modelo: '', defeito: '', cod: '', descricao: '' });
        } catch (error) {
            console.error('Erro ao salvar no IndexedDB:', error);
        }
    };

    return (

      
          <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                bgcolor: '#4B0082', // Cor de fundo
                minHeight: '100vh', // Altura mínima para ocupar a tela inteira
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: "center",
            }}
            onSubmit={handleSubmit}
            autoComplete="off">

<h1 style={{
              color: '#ffff',
              fontSize: '3em',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '20px'
             }}>Catálogo de erros</h1>
            <div>  

            <CssTextField
                className='caixa'
                name='modelo'
                required
                value={estateForm.modelo}
                onChange={handleChange}
                id="modelo-input"
                label="modelo" />

            <CssTextField
                className='caixa'
                name='defeito'
                required
                value={estateForm.defeito}
                onChange={handleChange}
                id="defeito-input"
                label="Defeito"
                
            />
            <CssTextField
                className='caixa'
                name='cod'
                value={estateForm.cod}
                onChange={handleChange}
                id="codigo-input"
                label="Código de erro"
                required
            />
            <CssTextField
                className='caixa'
                name='descricao'
                value={estateForm.descricao}
                onChange={handleChange}
                id="descricao-input"
                label="Descrição da resolução"
                multiline
                required
            />
            </div> 
            <Botoes />
            </Box>
            </Container>
          </React.Fragment>
        
      
        
          
       
    );
}

// Memoriza o componente para evitar renderizações desnecessárias



