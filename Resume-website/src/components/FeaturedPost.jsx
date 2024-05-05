import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { motion } from "framer-motion";

export default function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea>
        <motion.div
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 1 }} // You can adjust the duration of the animation here
          whileHover={{ scale: 1.1 }} // You can add hover effect if you want
        >
          <Card sx={{ display: 'flex', boxShadow: '4px 7px 8px rgba(0, 0, 0, 0.1)' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
              Click image for details
              </Typography>
            </CardContent>
            <a href={post.src} target="_blank" rel="noopener noreferrer">
              <CardMedia
                component="img"
                sx={{ width: 200, height: 230, display: { xs: 'none', sm: 'block' } }}
                image={post.image}
                alt={post.imageLabel}
              />
            </a>
          </Card>
        </motion.div>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired, // Adding src to propTypes
  }).isRequired,
};
