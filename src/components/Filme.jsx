import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Link } from "@mui/material";



function Filme(props) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.imagem}
                    alt={props.titulo}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {props.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.descricao}
                    </Typography>
                    <Grid container>
                        <Grid item xs={2}>
                            <span>{props.categoria}</span>
                        </Grid>
                        <Grid item xs={2}>
                            <span>{props.ano}</span>
                        </Grid>
                        <Grid item xs>
                            <span>{props.duracao}</span>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <Grid container>
                <Grid item xs={6}>
                    <button onClick={props.excluir}>x</button>
                </Grid>
                <Grid item xs={6}>
                    <Link href={ "edicao/" + props.id }>Editar</Link>
                </Grid>
            </Grid>
            
            
        </Card>
    )
}
export default Filme;