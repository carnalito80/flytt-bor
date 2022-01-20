import React from 'react'
import './Stars.css'
import { Star } from 'react-feather'

export default () => (
  <div className="starz">
  
    
    <section className="Contact--Section1">
        <div className="container Contact--Section1--Container">
            <div className="Contact--Details" >
            <p className="recen" >Kundrecension - flyttstädning</p>
            <p className="namez">Mikaela</p>
            <div id="starcontainer" >
            <Star  className="feather"  /> <Star  className="feather"  /> <Star  className="feather"  /> <Star className="feather"  /> <Star className="feather"  />
            </div>
            <p className="comment">Punktliga, och utförd en perfekt städning. Jag är supernöjd!</p>
            </div>
            <div className="Contact--Details" >
            <p className="recen" >Kundrecension - flyttstädning</p>
            <p className="namez">Amina</p>
            <div id="starcontainer" >
            <Star  className="feather"  /> <Star  className="feather"  /> <Star  className="feather"  /> <Star className="feather"  /> <Star className="feather"  />
            </div>
            <p className="comment">Mycket bra och noggrannt arbete. Jag är väldigt nöjd.</p>
            </div>
            <div className="Contact--Details" >
            <p className="recen" >Kundrecension - flyttstädning</p>
            <p className="namez">Jesper</p>
            <div id="starcontainer" >
            <Star  className="feather"  /> <Star  className="feather"  /> <Star  className="feather"  /> <Star className="feather"  /> <Star className="feather"  />
            </div>
            <p className="comment">Enkelt att boka, bra service, och ett väl utfört arbete. Rekomenderas!</p>
            </div>
       

        </div>
        </section>
      
   
  </div>
)
