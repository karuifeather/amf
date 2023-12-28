import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import MaterialLink from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        AMF
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  wrapperGrid: {
    justifyContent: 'center',
  },
  cardGrid: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10),
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    width: '24rem',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {
    name: 'Microservices Overview',
    desc: 'Learn about the benefits and challenges of microservices architecture.',
  },
  {
    name: 'Frontend Modularization',
    desc: 'Explore the advantages of microfrontend architecture for scalable and maintainable UIs.',
  },
  {
    name: 'Service Communication',
    desc: 'Understand different approaches to communication between microservices.',
  },
  {
    name: 'Containerization with Docker',
    desc: 'Discover how Docker containers simplify deployment in a microservices environment.',
  },
  {
    name: 'API Gateway Best Practices',
    desc: 'Best practices for implementing an API gateway to manage microservices communication.',
  },
  {
    name: 'Continuous Integration in Microservices',
    desc: 'Implement CI/CD pipelines for efficient development and deployment workflows.',
  },
  {
    name: 'Scaling Microservices',
    desc: 'Strategies for scaling microservices horizontally to handle increased workloads.',
  },
  {
    name: 'User Authentication in Microfrontend',
    desc: 'Secure user authentication strategies in a microfrontend architecture.',
  },
  {
    name: 'Monitoring and Logging',
    desc: 'Tools and techniques for monitoring and logging in a microservices ecosystem.',
  },
  {
    name: 'Microfrontend Security Practices',
    desc: 'Explore security best practices for building secure microfrontend applications.',
  },
  {
    name: 'GraphQL in Microservices',
    desc: 'Introduction to using GraphQL for efficient data fetching in a microservices environment.',
  },
  {
    name: 'Event-Driven Architecture',
    desc: 'Implement event-driven architecture for loosely coupled microservices communication.',
  },
];

console.log(cards);

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Microfrontend with React and Vue
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Explore our fully featured Microfrontend, leveraging the power of
              React and Vue. Discover the seamless integration, modular
              development, and enhanced user experiences.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid className={classes.wrapperGrid} container spacing={8}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>{card.desc}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          AMF
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Fully featured Microfrontend with React and Vue
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
