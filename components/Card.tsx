import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Typography, Collapse, IconButton } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';  // Import the Image component from next/image

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
  path: string;
  type: 'project' | 'contact'; // Add a type property
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, icon, path, type }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const goToText = 'Go to';  // Static text replacing bilingual feature

  return (
    <Card sx={{ width: 280, padding: '1rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 100 }}>
        {type === 'project' ? 
          <object data={icon} type="image/svg+xml" height="100" /> : 
          <Image src={icon} alt={`${name} icon`} width={100} height={100} /> 
        }
      </Box>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', minHeight: 50 }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
          <IconButton
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box sx={{ minHeight: 100 }}>
            <Typography paragraph>{description}</Typography>
          </Box>
        </Collapse>
      </CardContent>
      <Box sx={{ p: 1 }}>
        <Button variant="contained" color="primary" fullWidth onClick={() => window.location.href = path}>
          {`${goToText} ${name}`}
        </Button>
      </Box>
    </Card>
  );
};

export default ServiceCard;
