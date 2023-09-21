import { Alert, Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function CadastroProduto() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [imagem, setImagem] = useState("");
    const [erro, setErro] = useState(false);
    const [cadastro, setcadastro] = useState(false);
    const { id } = useParams();

    function Cadastrar(evento) {
        evento.preventDefault();
        const usuario = localStorage.getItem( "usuario" );
        if (usuario) {
            fetch(process.env.REACT_APP_BACKEND + "produtos", {
                method: (id ? "PUT" : "POST" ),
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        id: (id) ? id : "",
                        titulo: titulo,
                        descricao: descricao,
                        categoria: categoria,
                        ano: ano,
                        duracao: duracao,
                        imagem: imagem,
                        usuario: usuario
                    }
                )
            })
            .then((resposta) => resposta.json())
            .then((json) => {
                if (json._id) {
                    setcadastro( true );
                    setErro( false );
                } else {
                    setcadastro( false );
                    let msg = ( id ) ? "Erro ao editar" : "Produto já cadastrado";
                    setErro( msg );
                }
            })
            .catch((erro) => { setErro("Ops...ocorreu um erro") })

        }
    }

    useEffect( () => {
        setTitulo( "" );
        setDescricao( "" );
        setCategoria( "" );
        setAno( "" );
        setDuracao( "" );
        setImagem("" );
    }, [cadastro] );

    useEffect( () => {

        if( id ) {
            const usuario = localStorage.getItem("usuario");
            fetch(process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/" + id, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then((resposta) => resposta.json())
            .then((json) => {
                if (json._id) {
                    setTitulo( json.titulo );
                    setDescricao( json.descricao );
                    setAno( json.ano );
                    setCategoria( json.categoria );
                    setDuracao( json.duracao );
                    setImagem( json.imagem );
                } else {
                    setcadastro( false );
                    setErro( "Produto não encontrado" );
                }
            })
            .catch((erro) => { setErro("Ops...ocorreu um erro") })
        }

    }, [] );

    return (

        <Container component="section" maxWidth="sm">
            <Box sx={{
                mt: 10,
                backgroundColor: "#E4F0EC",
                padding: "30px",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Typography component="h1" variant='h4'>{ id ? 'Edição' : 'Cadastro' } de Produto</Typography>
                {erro && (<Alert severity="warning" sx={{ mt: 2, mb: 2 }} >{erro}</Alert>)}
                {cadastro && (<Alert severity="success" sx={{ mt: 2, mb: 2 }}>Produto cadastrado</Alert>)}
                <Box component="form" onSubmit={Cadastrar}>
                    <TextField
                        type="text"
                        label="Nome"
                        variant="filled"
                        margin="normal"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Descrição"
                        variant="filled"
                        margin="normal"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Categoria"
                        variant="filled"
                        margin="normal"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Ano"
                        variant="filled"
                        margin="normal"
                        value={ano}
                        onChange={(e) => setAno(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Duração"
                        variant="filled"
                        margin="normal"
                        value={duracao}
                        onChange={(e) => setDuracao(e.target.value)}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        label="Imagem"
                        variant="filled"
                        margin="normal"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                        fullWidth
                        required
                    />
                    <Button type="submit" variant="contained" sx={{ mt: 2, mb: 2 }} fullWidth size="large" >Cadastrar</Button>
                </Box>
            </Box>
        </Container>

    )
}

export default CadastroProduto;
