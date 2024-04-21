import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css"
export default function InfoBox({Info}){

    return(
        <div className='infoBox'><br /><br />
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image="https://images.unsplash.com/photo-1542063680-eef443c99fdf?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         current temperature:{Info.temp}&deg;C <br/>
         min temp:{Info.tempMin}&deg;C <br/>
         max temp:{Info.tempMax}&deg;C <br/>
         humidity:{Info.humidity}<br/>
         weather:{Info.weather}<br/>
         sunrise:{Info.sunrise}<br/>
         sunset:{Info.sunset}<br/>
         

        </Typography>
      </CardContent>
    
    </Card>
      </div>
    );
  
}