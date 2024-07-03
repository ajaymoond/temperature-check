import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';


export default function InfoBox({Info}) {
  const INIT_URL = "https://images.unsplash.com/photo-1545134969-8debd725b007?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";
   const HOT_URL= "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   const COLD_URL = "https://plus.unsplash.com/premium_photo-1675271988124-55694ef43fd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ludGVyJTIwc2Vhc29ufGVufDB8fDB8fHww";
   const RAINY_URL= "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <div className="InfoBox">
            <h1>WeatherInfo-{Info.weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          Info.humidity> 80?RAINY_URL:Info.temp>25?HOT_URL:COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
        <p>Temperature = {Info.temp}&deg;C </p>
        <p>Maximum Temperature= {Info.tempMax}&deg;C</p>
        <p>Minimum Temperature= {Info.tempMin}&deg;C</p>
        <p>Humidity= {Info.humidity}</p>
        <p>Weather feels like= {Info.feelsLike}</p>
        </Typography>
      </CardContent>
     
    </Card>
        </div>
    );
}


