
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../inputs.css';
import {styled } from '@mui/material/styles';

export default function Inputsform() {
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
     
  return (
    <>
    <Box  component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off">

      <CssTextField className='caixa'
        id="demo-helper-text-aligned"
        label="modelo do equipamento"
       
      />
      <CssTextField className='caixa'
        id="demo-helper-text-aligned-no-helper"
        label="Defeito"
      />
      <CssTextField className='caixa'
        id="demo-helper-text-aligned-no-helper"
        label="codigo de erro"
      />
      <CssTextField className='caixa'
        id="outlined-textarea"
        label="descrição da resolução"
        multiline
       
      />
    </Box>
    </>
  );
}
