import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from '@reach/router';

import binary from '../assets/images/binary.png';
import c from '../assets/images/c.png';
import chalkboard from '../assets/images/chalkboard.jpg';
import html from '../assets/images/html.png';
import js from '../assets/images/js.jpg';
import matrix from '../assets/images/matrix.jpg';
import php from '../assets/images/php.jpg';
import robot from '../assets/images/robot.png';

import { unit } from '../styles';
import * as LanguageTileTypes from '../pages/__generated__/LanguageTile';
import acquired from '../assets/icons/tick.svg';

const backgrounds = [binary, c, chalkboard, html, js, matrix, php, robot];
export function getBackgroundImage(id: string) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}

interface LanguageTileProps {
  language: LanguageTileTypes.LanguageTile;
}

const LanguageTile: React.FC<LanguageTileProps> = ({ language }) => {
  const { id, name, description, isAcquired } = language;
  return (
    <StyledLink
      to={`/language/${id}`}
      style={{
        backgroundImage: getBackgroundImage(language.id as unknown as string),
      }}
    >
      <h3>{name ? name : ''} {isAcquired && <img alt="" src={acquired}></img>} </h3>
      <p>{description}</p>
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
