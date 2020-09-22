import React from 'react';
import styled from 'react-emotion';

import { unit } from '../styles';
import { cardClassName, getBackgroundImage } from './language-tile';
import  * as GetLanguagesListTypes  from '../pages/__generated__/GetLanguagesList';

type LanguageDetailProps = Partial<GetLanguagesListTypes.GetLanguagesList_allLanguages>

const LanguageDetail: React.FC<LanguageDetailProps> = ({ id, name, description }) => (
  <Card
    style={{
       backgroundImage: getBackgroundImage(id as unknown as string),
    }}
  >
    <h3>
      {name}
    </h3>
    <p>{description}</p>
  </Card>
);

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const Card = styled('div')(cardClassName, {
  height: 365,
  marginBottom: unit * 4,
});

export default LanguageDetail;
