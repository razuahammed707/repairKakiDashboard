
import React,{useEffect,useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import PartnerContext from "../../context/partners/partnerContext"
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import "./style.css"
import moment from 'moment'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {

    const partnerContext = useContext(PartnerContext);
    const {requests,loading}=partnerContext.state;
    console.log(requests)

    useEffect(()=>{
        partnerContext.LoadAllRequest()
        // eslint-disable-next-line

    },[])


  const classes = useStyles();

 

    if(loading===true){
        return(
        <div className="loading">
            <CircularProgress/>
        </div>
        );
    };

    return(
        <div className="grid-4">

            {requests.map(item=>{
                return(
                    <Card className={classes.root}>
                            <CardHeader
                            
                            
                                title={item.problemType}
                                subheader={moment(item.createdAt).format('MMMM Do YYYY, h:mm:ss a')}
                            />
                            <CardMedia
                                className={classes.media}
                                image={(item.pictures.length!=0?(item.pictures[0].location):"https://repairkaki.s3-ap-southeast-1.amazonaws.com/public/placeholderImage.png")}
                                title={item._id}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Need vehicle servicing - authorised workshops preferred. 
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                            
                                <Button size="small" color="primary" align="right">
                                    View More
                                </Button>
                            </CardActions>
                        
                    </Card>
                )
            })}
        </div>
    )
  
}

