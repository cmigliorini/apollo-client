import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from '@reach/router';

import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';
import { unit } from '../styles';
import * as LanguageTileTypes from '../pages/__generated__/LanguageTile';

const backgrounds = [galaxy, iss, moon];
export function getBackgroundImage(id: string) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}

interface LanguageTileProps {
  language: LanguageTileTypes.LanguageTile;
}

const LanguageTile: React.FC<LanguageTileProps> = ({ language }) => {
  const { id, name, description } = language;
  return (
    <StyledLink
      to={`/language/${id}`}
      style={{
        backgroundImage: getBackgroundImage(language.id as unknown as string),
      }}
    >
      <h3>{name ? name : ''}</h3>
      <h5>{description}</h5>
    </StyledLink>
  );
}

export default LanguageTile;

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  borderRadius: 7,
  color: 'white',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const padding = unit * 2;
const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  height: 193,
  marginTop: padding,
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding * 2,
  },
});
