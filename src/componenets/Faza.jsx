import lead from "./photos/lead.png";
import pers from "./photos/pers.png";
import calend from "./photos/calend.png";
import membrs from "./photos/membrs.png";
import ff from "./photos/ff.png";
function Faza() {
    return(
        <> 
        <section>
        <div className="haut"> 
            <h4> La plus grande plateforme <br/> de soins de santé au monde</h4>
            <p>Nous travaillons à partir de 9 bureaux dans le monde entier,<br/> donnant vie à Docplanner Group dans 13 pays.</p>
            <img src={ff} alt="" />
         </div>
        <div className="lateral">
            <div className="lat1">
                <div className="lat">
                    <img src={lead} alt="" />
                    <h5>Leader dans 13 pays</h5>
                    <p>Pologne, Brésil, Mexique, Espagne, Italie, <br/>Allemagne, Turquie, Colombie, <br/>République tchèque, Portugal, Argentine, Pérou et Chili</p>
                </div>
                <div className="lat">
                <img src={pers} alt="" />
                    <h5>90 000 000 de patients</h5>
                    <p>Visitez nos sites Web chaque mois</p>
                </div>
            </div>
            <div className="lat2">
            <div className="lat">
            <img src={calend} alt="" />
                    <h5>15 000 000 de rendez-vous</h5>
                    <p>Réservé le mois dernier</p>
            </div>
            <div className="lat">
            <img src={membrs} alt="" />
                    <h5>210 000 médecins actifs</h5>
                    <p>Faites confiance à nos solutions </p>
            </div>
            </div>
           
        </div>
        </section>
        </>
    )
    
}
export default Faza;