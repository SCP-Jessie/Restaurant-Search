import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
const Articles = (props) => {
    console.log(props)
    return (
        <div>
            { props.article ? (
                <Card >
                    <CardMedia style={{ height: 0, paddingTop: '56.25%' }}
                        image={props.article.urlToImage}
                        title={props.article.title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.article.title}
                        </Typography>

                        <Typography gutterBottom variant="body2" component="h2">
                            {props.article.source.name}
                        </Typography>
                        <Typography component="p">
                            {props.article.description}
                        </Typography>
                        <Typography gutterBottom component="h2" color="textSecondary">
                            {props.article.publishedAt}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href={props.article.url} target="_blank">
                            View Full Article
                    </Button>
                    </CardActions>
                </Card>
            ) : null}
        </div>
    )
}
export default Articles;