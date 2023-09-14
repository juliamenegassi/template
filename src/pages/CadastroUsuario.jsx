import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

function CadastroUsuario() {

  const [ nome, setNome ] = useState( "" );
  const [ email, setEmail ] = useState( "" );
  const [ telefone, setTelefone ] = useState( "" );
  const [ cpf, setCpf ] = useState( "" );
  const [ senha, setSenha ] = useState( "" );
  const [ cadastro, setCadstro ] = useState( false );
  const [ erro, setErro ] = useState( false );

  function Cadastrar( evento ) {

    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "usuarios", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                nome: nome,
                email: email,
                cpf: cpf,
                telefone: telefone,
                senha: senha
            }
        )
    } )
    .then( (resposta) => resposta.json() )
    .then( ( json ) => {
      if( json.cpf ) {
        setCadstro( true );
        setErro( false );
      } else {
        setErro( "Usuário já cadastrado" );
        setCadstro( false );
      }
    } )
    .catch( ( erro ) => { setErro( "Ops...ocorreu um erro" ) } )
    
  }

  useEffect( () => {

    setNome( "" );
    setEmail( "" );
    setCpf( "" );
    setTelefone( "" );
    setSenha( "" );
  }, [ cadastro ] );

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
            <Typography component="h1" variant='h4'>Cadastro de usuário</Typography>
            { erro && ( <Alert severity="warning" sx={{ mt: 2, mb: 2 }} >Desculpe tente novamente</Alert> ) }
            { cadastro && ( <Alert severity="success" sx={{ mt: 2, mb: 2 }}>Obrigado por se cadastrar</Alert>)}
            <Box component="form" onSubmit={Cadastrar}>
                <TextField 
                  type="text"
                  label="Nome" 
                  variant="filled" 
                  margin="normal"
                  value={nome}
                  onChange={ (e) => setNome( e.target.value ) }
                  fullWidth
                  required
                />
                <TextField 
                  type="email"
                  label="Email" 
                  variant="filled" 
                  margin="normal"
                  value={email}
                  onChange={ (e) => setEmail( e.target.value ) }
                  fullWidth
                  required
                />
                <TextField 
                  type="text"
                  label="CPF" 
                  variant="filled" 
                  margin="normal"
                  value={cpf}
                  onChange={ (e) => setCpf( e.target.value ) }
                  fullWidth
                  required
                />
                <TextField 
                  type="text"
                  label="Telefone" 
                  variant="filled" 
                  margin="normal"
                  value={telefone}
                  onChange={ (e) => setTelefone( e.target.value ) }
                  fullWidth
                  required
                />
                <TextField 
                  type="password"
                  label="Senha" 
                  variant="filled" 
                  margin="normal"
                  value={senha}
                  onChange={ (e) => setSenha( e.target.value ) }
                  fullWidth
                  required
                />
                <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt:2, mb: 2}}>Cadastrar</Button>
            </Box>
        </Box>
    </Container>
  )
}

export default CadastroUsuario;