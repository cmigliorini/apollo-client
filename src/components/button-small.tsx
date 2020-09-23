import styled from 'react-emotion';
import { lighten } from 'polished';

import { unit, colors } from '../styles';

const height = 25;
export default styled('button')({
    display: 'block',
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
    backgroundColor: colors.primary,
    cursor: 'pointer',
    outline: 'none',
    ':hover': {
      backgroundColor: lighten(0.1, colors.secondary),
    },
    ':active': {
      backgroundColor: lighten(0.2, colors.accent),
    },
  });
  