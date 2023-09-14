import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';


function CadastroProduto() {

    const[ titulo, setTitulo ] = useState("");
    const[ descricao, setDescricao ] = useState("");
    const[ categoria, setCategoria ] = useState("");
    const[ ano, setAno ] = useState("");
    const[ duracao, setDuracao ] = useState("");
    const[ imagem, setImagem ] = useState("");
    const[ erro, setErro ] = useState(false);
    const[ cadastro, setcadastro ] = useState(false);
    const[ usuario, setUsuario ] = useState(false);
    
    function Cadastrar( evento ) {
        evento.preventDefault();

        setUsuario( localStorage.getItem( usuario ) ); 
        
        fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    titulo: titulo,
                    descricao: descricao,
                    categoria: categoria,
                    ano: ano,
                    duracao: duracao,
                    imagem: imagem,
                    usuario: ""
                }
            )
        } )
        .then( (resposta) => resposta.json() )
        .then( ( json ) => {
          if( json._id ) {
          } else {
          }
        } )
        .catch( ( erro ) => { setErro( "Ops...ocorreu um erro" ) } )
        
      }

    return (
        <Container component="section" maxWidth="sm">
            <Box sx={{ 
                mt: 10,
                backgroundColor: "#EDEDED",
                padding: "30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography component="h1" variant='h4'>Cadastro de Produto</Typography>
                { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Desculpe tente novamente</Alert> ) }
                { cadastro && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }}>Produto cadastrado</Alert>)}
                <Box component="form" onChange={Cadastrar}>
                    <TextField 
                        type="text"
                        label="Nome" 
                        variant="filled" 
                        margin="normal"
                        value={titulo}
                        onChange={ (e) => setTitulo( e.target.value ) }
                        fullWidth
                        required
                    />
                    <TextField 
                        type="text"
                        label="Nome" 
                        variant="filled" 
                        margin="normal"
                        value={titulo}
                        onChange={ (e) => setTitulo( e.target.value ) }
                        fullWidth
                        required
                    />
                    <TextField 
                        type="text"
                        label="Nome" 
                        variant="filled" 
                        margin="normal"
                        value={titulo}
                        onChange={ (e) => setTitulo( e.target.value ) }
                        fullWidth
                        required
                    />
                </Box>
            </Box>
        </Container>

  )
}

export default CadastroProduto;
