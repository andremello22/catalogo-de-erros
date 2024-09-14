import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Botoes} from './botoes.tsx';
import TabelaDEErros from './tabela-de-erros.tsx';

export  function CatalogoErros() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl"
       >
        
          <Box  component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' },
            bgcolor: '	#4B0082', 
            minHeight: '100vh',  // Ajusta a altura mínima para ocupar a tela inteira se necessário
            display: 'flex', 
            flexDirection: 'column',
            justifyContent:"center",
            alignItems:"center",
           
           
          
          }}
            noValidate
            autoComplete="off">
             <h1 style={{
              color: '#ffff',
              fontSize: '3em',
              fontWeight: 'bold',
              textAlign: 'center',
              marginTop: '20px'
             }}>Catálogo de erros</h1>
             <TabelaDEErros />
            
             <Botoes />
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
