import { Button, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome to My Resume Site
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container> 
  );
}
