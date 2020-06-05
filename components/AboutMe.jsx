import { ThemeProvider, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const testimonials = [
  'Sierra embodies the value we place on teamwork and community of practices.',
  'Sierra’s attention to detail and constant striving for perfection [allows teams] to ascend to a higher standard in coding practices, overall quality of work, and team organization. I believe every team should have someone like her to keep [their company] on the right track.',
];

const Header = (props) => (
  <ThemeProvider theme={props.theme}>
    <main className="col ta-c">
      <Typography color="secondary" variant="h4">Who is Sierra?</Typography>
      <Typography variant="subtitle2">Good question. If you know the answer, please let her know! In the mean time, feel free to explore this page for some clues.</Typography>
      <br />
      <section className="col">
        <Typography color="secondary" variant="h6">Testimonials</Typography>
        {testimonials.map((quote) => (
          <blockquote key={quote}><Typography variant="body2">&ldquo;{quote}&rdquo;</Typography></blockquote>
        ))}
      </section>
    </main>
  </ThemeProvider>
);

Header.propTypes = {
  theme: PropTypes.shape().isRequired,
};

export default Header;
