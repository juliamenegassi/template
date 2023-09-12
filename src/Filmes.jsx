import { Box, Container, TextField } from '@mui/material';
import React, { useState } from 'react'

function Filmes() {

    const [ titulo, setTitulo ] = useState();
    const [ descricao, setDescricao ] = useState();
    const [ ano, setAno ] = useState();

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
            <Box component="form">
                <TextField
                    type="text"
                    label="Título" 
                    variant="filled" 
                    margin="normal"
                    value={titulo}
                    onChange={ (e) => setTitulo( e.target.value ) }
                    fullWidth
                    required
                />
                <TextField
                    type="text"
                    label="Descrição" 
                    variant="filled" 
                    margin="normal"
                    value={descricao}
                    onChange={ (e) => setDescricao( e.target.value ) }
                    fullWidth
                    required
                />
                <TextField
                    type="number"
                    label="Ano" 
                    variant="filled" 
                    margin="normal"
                    value={ano}
                    onChange={ (e) => setAno( e.target.value ) }
                    fullWidth
                    required
                />
            </Box>
        </Box>
    </Container>
  )
}

export default Filmes;