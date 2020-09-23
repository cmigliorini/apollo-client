import styled from 'react-emotion';
import { lighten } from 'polished';

import { unit, colors } from '../styles';

const height = 25;
const ButtonSmallDark= styled('button')({
  display: 'inline-block',
  minWidth: 100,
  height,
  margin: '0 auto',
  padding: `0 ${unit * 2}px`,
  border: 'none',
  borderRadius: height / 4,
  fontFamily: 'inherit',
  fontSize: 12,
  lineHeight: `${height}px`,
  fontWeight: 700,
  color: 'white',
  textTransform: 'uppercase',
  cursor: 'pointer',
  outline: 'none',
  backgroundColor: colors.primary,
  ':hover': {
    backgroundColor: lighten(0.1, colors.primary),
  },
  ':active': {
    backgroundColor: lighten(0.2, colors.accent),
  },
});

const ButtonSmallLight= styled('button')({
    display: 'inline-block',
    minWidth: 100,
    height,
    margin: '0 auto',
    padding: `0 ${unit * 2}px`,
    border: 'none',
    borderRadius: height / 4,
    fontFamily: 'inherit',
    fontSize: 12,
    lineHeight: `${height}px`,
    fontWeight: 700,
    color: 'white',
    textTransform: 'uppercase',
    cursor: 'pointer',
    outline: 'none',
    backgroundColor: colors.secondary,
    ':hover': {
      backgroundColor: lighten(0.1, colors.secondary),
    },
    ':active': {
      backgroundColor: lighten(0.2, colors.accent),
    },
  });
  
export {ButtonSmallLight,  ButtonSmallDark};