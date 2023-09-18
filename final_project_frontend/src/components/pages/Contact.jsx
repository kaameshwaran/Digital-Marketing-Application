import React from 'react'
import '../../App.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Contact() {


  return (
    <div className='contact'>
    <h1 >
          CONTACT
    </h1>
    <div  style={{display:'flex',flexWrap:"wrap"}}>
      <div style={{padding:"30px"}}>
          <Card elevation={24} sx={{ width: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMMPio35MsViFnwwSKMFgVthrf5vXkFlwjhBlsPQ7FvYO9qufWFrnnLL3dsMBMvonle7Q&usqp=CAU"
          alt="mail "        
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            E-MAIL
          </Typography>
          <Typography variant="body2" color="text.secondary">
          jepirep661@snowlash.com
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a
              href={"mailto:jepirep661@snowlash.com"}
              target='_blank'
              rel='noreferrer'
            >
        <Button size="small" color="primary">
          Write
        </Button>
        </a>
      </CardActions>
    </Card>
    </div>

    <div style={{padding:"30px"}}>
          <Card elevation={24} sx={{ width: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image="https://image.winudf.com/v2/image1/ZnJlZS5jYWxsLmludGVybmF0aW9uYWwucGhvbmUuY2FsbGluZ19pY29uXzE2MzQyMDg0MzRfMDc3/icon.png?w=&fakeurl=1"
          alt="mail "        
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PHONE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          909xxxxx90
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a
              href={"tel:9095545349"}
              target='_blank'
              rel='noreferrer'
            >
        <Button size="small" color="primary">
          Call
        </Button>
        </a>
      </CardActions>
    </Card>
    </div>

    <div style={{paddingTop:"30px",padding:"30px"}}>
          <Card elevation={24} sx={{ width: 200 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image="https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/whatsapp-square-social-media-512.png"
          alt="mail "        
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          WHATSAPP
          </Typography>
          <Typography variant="body2" color="text.secondary">
          909xxxxx90
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a
              href={"https://wa.me/9080896606"}
              target='_blank'
              rel='noreferrer'
            >
        <Button size="small" color="primary">
          Chat
        </Button>
        </a>
      </CardActions>
    </Card>
    </div>
    </div>
    </div>
  )
}

export default Contact