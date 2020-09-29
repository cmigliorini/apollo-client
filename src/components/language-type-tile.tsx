import React from 'react';
import * as LanguageTileTypes from '../pages/__generated__/LanguageTile';
import LanguageTypeButton from '../containers/add-language-button';

interface LanguageTileTypeProps {
    language: LanguageTileTypes.LanguageTile;
    languageTypes: LanguageTileTypes.LanguageTile_languageTypes[];
}

const LanguageTypeTile: React.FC<LanguageTileTypeProps> = ({ language, languageTypes }) => 
    language && language.languageTypes && <div>
        {languageTypes.map(lt => 
        <LanguageTypeButton key={language.id+'-'+lt.id} id={language.id} languageType={lt} languageTypes={language.languageTypes} />)}
    </div>;


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
