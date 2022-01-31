import React from 'react'
import { graphql } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Parallax from '../components/Parallax'
import Stars from '../components/Stars'
import { Link } from 'gatsby'
import Boka from '../components/Boka'

import Image from '../components/Image'
import '../components/PostCard.css'
import '../components/PostSection.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, offertknapp, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      offertknapp={offertknapp}
    />

    <section className="section">
      <div className="container introjk">
        <h3 >Är du i behov av flyttstädning?</h3>
       <p><span role="img" aria-label="checkmark">✔️</span> Snabb och noggrann städning.<br />
       <span role="img" aria-label="checkmark">✔️</span> Nöjd-Kund-Garanti! <br />
      <strong><span role="img" aria-label="checkmark">✔️</span> Enkelt att boka online eller via telefon.</strong>
        
        </p>
        <div onClick={() => scrollTo('#priser')} className="Button">Priser</div>
      </div>
    </section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--Grid">
      <Link to="#bokaoss" className="PostCard">
        
      <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-1.png" alt="Hink med skurborste" className="Content-Image"></img>
        </div>
        
          <div className="PostCard--Content">
          <h3 className="PostCard--Title">BOKA FLYTTSTÄDNING</h3>
          
          <div className="PostCard--Excerpt"><em>Vi utför även andra typer av städningar i Borås.</em></div>
          </div>
        </Link>
        <Link to="/om-oss" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-2.png" alt="En mopp" className="Content-Image"></img>
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">PÅLITLIG PERSONAL</h3>
        
        <div className="PostCard--Excerpt"><em>Ni är trygga med oss, gör som tusentals andra och boka oss idag.</em></div>
      </div>
      </Link>
      <Link to="/vanliga-fragor" className="PostCard">
        
        <div className="PostCard--ImageJK relative">
        <img  src="/images/icon-7.png" alt="En galge med kläder" className="Content-Image"></img>
        
        </div>

      <div className="PostCard--Content">
      <h3 className="PostCard--Title">LÄS MER OM OSS</h3>
        
        <div className="PostCard--Excerpt"><em>Har du frågor? Du hittar svaren här.</em></div>
      </div>
      </Link>
      </div>
    </div>

  </div>
    
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div className="PostCard--HomeP PostCard--Image-Hide relative"><Image background title="Skinande rent tack vare Flyttstädning Borås" src="/images/flyttstad-boras-feature.webp" alt="Skinande rent tack vare Flyttstädning Borås" /></div>
      
      <div>
     <h3>Vad ingår i flyttstädning Borås tjänster</h3>

      <ul >
        <li className="bullet-jk">Dammsugning och våttorkning av golv.</li>
        <li className="bullet-jk">Torking av dörrkarmar, dörrhandtag, trösklar och dörrar.</li>
        <li className="bullet-jk">Fönsterputsning, in- och utvändigt samt mellan inner- och ytterglas.</li>
        <li className="bullet-jk">Rengöring av fönsterkarmar.</li>
        <li className="bullet-jk">.. och mer!</li>
      </ul>
      <Link to="/detta-ingar-i-flyttstadningen/"><div className="Button">Läs mer om vad som ingår</div></Link>
      </div>
         
      </div>
    </div>
  </div>
</section>    
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div>
     <h3>Flyttstädning Borås</h3>

<p>Vi är ett städfirma som utför flyttstädning i Borås och vi har lång erfarenhet och ett brett kunnande inom flyttstädning. När du beställer din flyttstädning från oss är du garanterad att det blir absolut rent till ett riktigt bra pris.<br></br>
Vi utför allt städarbete efter Mäklarsamfundets praxis vilket garanterar att flyttstädningen blir perfekt och klarar besiktningen.<br></br>
En flytt är ofta tidskrävande och även energikrävande. Med vår erfarenhet och vårt intresse för att serva dig kan vi spara på såväl tid som energi. 
</p>
      </div>
      <div className="PostCard--HomeP relative"><Image background title="En städare" src="/images/service-6.jpg" alt="Flyttstädning Borås hjälper dig flyttstäda" /></div>
         
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div className="PostCard--HomeP PostCard--Image-Hide relative"><Image background title="Flyttstädning Boråss resultat" src="/images/bra-flyttstadning.jpg" alt="Flyttstädning Boråss resultat" /></div>
      
      <div>
     <h3>Pålitlig och ansvarsfull flyttstädning</h3>
     <p>Livet är fyllt av jobbiga och stressiga moment. Stress för också med sig onödiga saker såsom tjafs och bråk med dina närstående. Att flyttstäda kan vara en sådan sak.</p>
     <p>Därför är det värt att lägga en slant på att slippa den onödiga stressen och ge flyttstädning Borås fullt ansvar över städningen, ni kommer garanterat bli nöjda!</p>

     <p>Att flyttstäda tar lång tid och för att det nya ägarna av bostaden ska bli nöjda och glada, så är det bäst att ge över ansvaret till några som har lång erfarenhet för att bästa resultat ska uppnås.</p>
    <p>Ring eller mejla till oss för information och/eller bokning. Vi svarar på ditt mail inom 24 timmar, under årets alla dagar.<br>
    </br>Vi ser fram emot att besvara dina frågor via mail, <a href="mailto:info@xn--flyttstdning-bors-wqb2a.se/">info@flyttstädning-borås.se</a>, eller på telefon <a href="tel:073-6379908">073-63 799 08</a>  </p>
     
      </div>
         
      </div>
    </div>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="PostSection">
      <div className="PostSection--GridJK">
      <div>
     <h3>Garanti</h3>

<p>Vi på flyttstädning Borås lämnar självklart alltid garanti på våra flyttstädningar. Garantin gäller för både köparen och säljaren av bostaden.<br></br>

Vissa saker måste ni som kund dock ordna innan flyttstädningen:</p>
<ul>
<li>Tillgång till vatten</li>
<li>Tillgång till el</li>
</ul>
<p>
Om det det ska rengöras bakom tvättmaskin, diskmanskin eller torktumlare behövs dessa vara framdragna.
</p>
<Link to="/vanliga-fragor">   <div className="Button">Mer om våran garanti</div></Link>
      </div>
      <div className="PostCard--HomeP relative"><Image background title="Flyttstädning Borås städar din bostad" src="/images/tvattmaskin.jpg" alt="Flyttstädning Borås städar din bostad" /></div>
         
      </div>
    </div>
  </div>
</section>
<div id="priser"></div>
<Parallax />
<Stars />
<div id="bokaoss" style={{marginBottom:'60px'}}></div>
<section className="section">
<div className="container" >
<h2>Boka Oss På Flyttstädning Borås</h2>
<p>Fyll i formuläret nedan för att boka en flyttstädning. Alternativt ring <strong><a href="tel:073 637 99 08">073 637 99 08</a></strong>.</p>
</div>
<div className="container  Contact--Section1--Container">
<Boka name="Flyttstädning Borås" />
<div>
<h5>Varför vill ni veta mitt personnummer?</h5>
<p>
Ditt personnummer behövs om du bokar en flyttstädning med oss och vill utnyttja RUT-avdraget. Vi kan inte ansöka om utbetalning för din räkning från Skatteverket om vi inte har ditt personnummer. 
<strong> Det är Skatteverket som kräver den uppgiften, inte vi.</strong><br />

I de fall betalning sker mot faktura görs en kreditprövning av det faktureringsbolag som vi anlitar, och i detta fall krävs även personnummer.</p>

<h5>Vad avses med övriga städytor?</h5>
<p>
Till övriga städytor hör sånt som du vill ha städat eller få prisuppgift på tex. balkong, vind, förråd, garage och dylikt – det vill säga ytor som inte ingår i själva boytan.</p>

<h5>Vilken övrig info kan vara värt att fylla i?</h5>
<p>Portkod, upplysningar om när överlåtelsen ska ske av huset / lägenheten, om eventuella möbler ska finnas kvar när vi städar, om vissa ytor inte behöver rengöras, till exempel.</p>

</div>
</div>
</section>
    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
     
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}
          title= "test"
  >
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        offertknapp
      }
    }
  }
`
