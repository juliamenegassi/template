import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Produto from "../components/Produto";



function App() {

    const[ produtos , setProdutos ] = useState();
    const[ erro, setErro ] = useState();
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario") || false);

    useEffect( () => {

        if( usuario ) {
            fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            } )
            .then( (resposta) => resposta.json() )
            .then( ( json ) => {
                if( json.length === 0 ) {
                    setErro( "Sem produtos cadastrados!" );
                } else {
                    setProdutos( json );
                }
                
            } )
            .catch( ( erro ) => {  setErro( "Estamos com um problema" ) } )
        }

    }, [] );

    function Excluir( evento, id ) {
        evento.preventDefault();

        console.log( id );
        
        fetch( process.env.REACT_APP_BACKEND + "produtos", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
                    usuario: usuario
                }
            )
        } )
        .then( (resposta) => resposta.json() )
        .then( ( json ) => {

            if( json._id ) {
                const novaListaProdutos = produtos.filter( ( produto ) => produto._id !== id );
                setProdutos( novaListaProdutos );
            } else {
                setErro( "Não foi possível deletar" );
            }

        } )
        .catch( ( erro ) => {  setErro( "Estamos com um problema" ) } )

    }

    return (
        <>
            <Container sx={{ display: "flex", gap: "2rem", flexWrap: "wrap" }} >
                { erro && ( <span>{erro}</span>)}
                { produtos && (
                    produtos.map( (produto, index ) => (
                        <Produto 
                            id={produto._id}
                            key={index}
                            titulo={produto.titulo}
                            imagem={produto.imagem}
                            descricao={produto.descricao}
                            excluir={ (e) => Excluir( e, produto._id ) }
                        />
                    ) )
                )}
                
            </Container>
        </>
        
    );
}

export default App;
