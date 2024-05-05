import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';

const sections = [
  { title: 'HTML', url: '#html' },
  { title: 'CSS', url: '#css' },
  { title: 'JavaScript', url: '#javascript' },
  { title: 'TypeScript', url: '#typescript' },
  { title: 'React', url: '#react' },
  { title: 'Next.js', url: '#nextjs' },
  { title: 'Portfolio', url: '#portfolio' },
];
const mainFeaturedPost = {
  title: '',
  description:
    "",
  image: './Banner.png',
  imageText: '',
  linkText: '',
  href: "https://connect-with-umar.vercel.app/"
};

const featuredPosts = [
  {
    title: 'Bachelors in Computer Engineering ',
    date: '2023-2027',
    description:
      'Pursuing my bachelors in Computer Engineering from SSUET',
    image: './cis.jpg',
    imageLabel: 'Image Text',
    src: 'https://www.ssuet.edu.pk/program/foece/bs-computer-engineering/'
  },
  {
    title: 'Clould Applied Generative AI Engineering',
    date: 'Nov 11',
    description:
      'Part of Governor Sindh Initiative for AI Engineering.',
    image: './ai.png',
    imageLabel: 'Image Text',
    src: 'https://www.linkedin.com/company/governor-sindh-initiative/'
  },
];

const featuredPosts1 = [
  {
    title: 'My Portfolio',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: './Home.png',
    imageLabel: 'Image Text',
    src: 'https://connect-with-umar.vercel.app/'
  },
  {
    title: 'Music Schools',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: './music.png',
    imageLabel: 'Image Text',
    src : 'https://music-school-sigma.vercel.app/'
  },
];

const sidebar = {
  title: 'About Me',
  description:
    'Passionate Frontend Developer with expertise in HTML, CSS, JavaScript, TypeScript, React, and Next.js.',
  social: [
    { name: 'GitHub', url: 'https://github.com/Muhammad-Umar-Waqar' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-umar-waqar-4266a01b2/' },
  ],
};


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header  title="My CV"  sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
        <h1>Education</h1>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
            <h1>Portfolio</h1>
          <Grid container spacing={4} >
            {featuredPosts1.map((post) => (
              <FeaturedPost key={post.title} post={post}  />
            ))}
          </Grid>
       
        </main>
      </Container>
      <Footer
        title="Thanks for reading my CV"
        description="Hire me if you like my efforts!"
      />
    </ThemeProvider>
  );
}