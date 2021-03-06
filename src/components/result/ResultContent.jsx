import React from 'react';

import styled from '@emotion/styled';

import TitleWithEmoji from './TitleWithEmoji';
import ShareButtons from './ShareButtons';

import { companyLogos } from '../../assets/images';

const Container = styled.div({
  textAlign: 'center',
  backgroundColor: '#28288C',
  margin: '3em',
  color:'white',
  
  padding: '1.5em',
});



const Tag = styled.div({
  textAlign: 'center',
});

const Subtitle = styled.div({
  textAlign: 'center',
  margin: '2em 0 .5em',
  fontSize: '1.2em',
  fontWeight: 'bold',
});

const CompanyLogo = styled.img({
  display: 'block',
  margin: '1.8em auto',
  height: '12em',
  maxWidth: '80vw',
});


export default function ResultContent({ first, second, third, last }) {
 return (
    <Container>
      <TitleWithEmoji
        title="당신의_트랙은_바로!"
        emoji="🎉"
      />
      { <CompanyLogo
        src={companyLogos[first.id]}
        alt=""
      /> }
      
    <Subtitle>{first.subtitle}</Subtitle>

    {/* <p>{first.description}</p> */}
     {first.description.split("\n").map((line) => { 
            return (
              <p>
                {line}
                <br/>
              </p>
            );
          })}



      <TitleWithEmoji
        title="두번째로_잘어울리는_트랙"
        emoji="☑"
      />
      <Tag>{second.subtitle}</Tag>
  { <CompanyLogo
        src={companyLogos[second.id]}
        alt=""
      /> }
      
    <Subtitle>{second.subtitle}</Subtitle>

    {/* <p>{first.description}</p> */}
     {second.description.split("\n").map((line) => { 
            return (
              <p>
                {line}
                <br/>
              </p>
            );
          })}



      <TitleWithEmoji
        title="세번째로_잘어울리는_트랙"
        emoji="☑"
      />
      {<Tag>{third.subtitle}</Tag> }
  { <CompanyLogo
        src={companyLogos[third.id]}
        alt=""
      /> }
      
    <Subtitle>{third.subtitle}</Subtitle>

    {/* <p>{first.description}</p> */}
     {third.description.split("\n").map((line) => { 
            return (
              <p>
                {line}
                <br/>
              </p>
            );
          })}
      <TitleWithEmoji
        title="마지막으로_잘어울리는_트랙"
        emoji="☑"
      />
      <Tag>{last.subtitle}</Tag>
  { <CompanyLogo
        src={companyLogos[last.id]}
        alt=""
      /> }
      
    <Subtitle>{last.subtitle}</Subtitle>

    {/* <p>{first.description}</p> */}
     {last.description.split("\n").map((line) => { 
            return (
              <p>
                {line}
                <br/>
              </p>
            );
          })}

       
      {<TitleWithEmoji
        title="공유하기"
        emoji="💡"
      /> }
      { <ShareButtons></ShareButtons> }
    </Container>
  );
}