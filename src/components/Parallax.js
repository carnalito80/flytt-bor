import React from 'react'
import './Parallax.css'

export default () => (
    <section >
        <div className="Parallax" style={{
            backgroundImage: `url(/images/flyttstadning-boras.webp)`
        }}>
        <div className="Overlay">
         <div className="container">
         <div className="Paratitle">
            <strong>Priser flyttstädning Borås</strong>
            <p className="Paradesc"><strong>Från 1600 kr</strong><br></br>
            Vi flyttstädar till konkurenskraftiga priser som dessutom kan bli ännu lägre om du är berättigad till att utnyttja RUT-avdraget vilket i praktiken ger dig 50 % lägre kostnad på flyttstädningen.

            Nedan hittar du en specificerad prislista som täcker vårt serviceutbud. Om du saknar några priser ber vi dig fylla i en offert så återkommer vi med prisuppgifter. </p>
          </div>
          <ul>        
          
            <li> <span className="Left">0 - 49 kvm </span><span className="Separator"></span>
            <span className="Right">1600 kronor</span></li>
            <li> 50 - 59 kvm<span className="Separator"></span>
            1800 kronor</li>
            <li> 60 - 69 kvm<span className="Separator"></span>
            2000 kronor</li>
            <li> 70 - 79 kvm<span className="Separator"></span>
            2200 kronor</li>
            <li> 80 - 89 kvm<span className="Separator"></span>
            2400 kronor</li>
            <li> 90 - 99 kvm<span className="Separator"></span>
            2600 kronor</li>
            <li> 100 - 114kvm<span className="Separator"></span>
            2800 kronor</li>
            <li> 115 - 124kvm<span className="Separator"></span>
            3000 kronor</li>
            <li> 125 - 136kvm<span className="Separator"></span>
            3200 kronor</li>
            <li> 137 - 148 kvm<span className="Separator"></span>
            3400 kronor</li>
            <li> 149 - 159 kvm<span className="Separator"></span>
            3600 kronor</li>
            <li> 
            Över 159 kvm<span className="Separator"></span>
            begär offert</li>
        </ul>
        <div className="Paratitle">
        <p className="Paradesc">Administrativ avgift på 25 kronor tillkommer.<br></br>
       
        Notera att dessa punkter kostar extra:<br></br>

        Balkong: 300 kronor<br></br>
        Inglasad balkong: 400 kronor<br></br>
        Vind (i hyreshus): 400 kronor<br></br>
        Källare i hyreshus: 400 kronor<br></br>
        Kort varsel under månadsskifte: 200 kronor<br></br>
        All städutrustning och allt material tillhandahålls självklart av oss på Flyttstädning Borås och ingår i priset.
        Vi debiterar inte för transportkostnader.
        </p>
        </div>
        </div>
        </div>
        </div>
    </section>
)
