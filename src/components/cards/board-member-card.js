import { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class BoardMemberCard extends Component {
    render() {
        return (
            <Card className='w-100 h-100'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt='img'
                        image={this.props.img}
                        title="Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.blurb}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                </Button>
                    <Button size="small" color="primary">
                        Learn More
                </Button>
                </CardActions>
            </Card>
        )
    }
}

export default BoardMemberCard