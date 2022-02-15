import React, { useEffect, useState } from 'react';
import { CardMedia, Container, Box,
         Card, CardContent,
         Typography,
         Paper
        } from '@mui/material';
import axios from 'axios';


function FrontPage() {
  const[info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "AfkfO81VuZPvy39uNJo8H8xZ9nXOBv7Z",
          limit: 12
        }
      });
      console.log(results);
      setInfo(results.data.data);
    };
    fetchData();
  }, []);

  const renderLoad = () => {
    return info.map(u => {
      return (
        <div key={u.id}>
          <img src={u.images.fixed_height.url} />
        </div>
      );
    });
  };


  
  return (  
    <div className="clearfix">
        <div className="row">
          {info.map(u => (
            <div className="col-md-4 animated fadeIn" key={u.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src={u.images.fixed_height.url}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <h5 className="card-title">
                    {u.title}
                  </h5>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
    
      </div>  
    // <div>
    //   <Container>
    // <Box
    //   sx={{
    //     display: 'flex',
    //     flexWrap: 'wrap',
    //     '& > :not(style)': {
    //       m: 1,
          
    //     },
    //   }}
    // >
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia>{renderLoad()}</CardMedia>
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       Images
    //     </Typography>
        
    //   </CardContent>
      
    // </Card>
    // </Box>
    // </Container>
    // </div>  
      
   
  );
}
export default FrontPage;
