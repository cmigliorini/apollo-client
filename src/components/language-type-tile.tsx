import React from 'react';
import * as LanguageTileTypes from '../pages/__generated__/LanguageTile';
import ButtonSmall from './button-small';
import tick from '../assets/icons/tick.svg';

interface LanguageTileTypeProps {
    language: LanguageTileTypes.LanguageTile;
    languageTypes: LanguageTileTypes.LanguageTile_languageTypes[];
}

const LanguageTypeTile: React.FC<LanguageTileTypeProps> = ({ language, languageTypes }) => {
    return <div>{languageTypes.map(lt => {
        const isOfType: boolean = language.languageTypes ? language.languageTypes.map(t => t.id).includes(lt.id) : false;

        return <ButtonSmall>{lt.name}{isOfType && <img alt="" src={tick}></img>}</ButtonSmall>
    })}
    </div>
}


//   <StyledLink
//     to={`/language/${id}`}
//     style={{
//       backgroundImage: getBackgroundImage(language.id as unknown as string),
//     }}
//   >
//     <h3>{name ? name : ''} {isAcquired && <img alt="" src={acquired}></img>} </h3>
//     <p>{description}</p>
//   </StyledLink>


export default LanguageTypeTile;
