import icon1 from"./photos/icon-patients.svg";
import icon2 from"./photos/icon-doctors.svg";
import icon3 from"./photos/icon-clinics.svg";


function Cwaret() {
    return(
        <>
          <div class="cards">
          {/* card 1 */}
        <div class="card"> 
           <div class="top"> 
            <img src={icon1} alt="ip"/>
            <h2> Pour les patients</h2>
            <p> Trouvez un médecin, réservez une visite et résolvez tout doute lié à la santé</p>
            </div>
            <select name="" id="">
               <option value=" choisir un pays"> choisir un pays</option>
               <option value="">Argentina</option>
               <option value="">Brazil</option>     
            </select>

        </div>

         {/* card 2 */}
        <div class="card card2"> 
            <div class="top">
                <img src={icon2} alt="id"/>
            <h2> Pour les médecins</h2>
            <p>Gagnez du temps dans la gestion des visites et réduisez de moitié les absences</p>
            </div>

            <div>
                <select name="" id="">
                    <option value=" choisir un pays"> choisir un pays</option>
                    <option value="">Argentina</option>
                    <option value="">Brazil</option>
                   
                </select>   
            </div>
        </div>


        {/* card 3 */}
        <div class="card card3">
            <div class="top">
                <img src={icon3} alt="ic"/>
            <h2>Pour les cliniques</h2>
            <p> Offrez une expérience patient exceptionnelle dans votre clinique</p>
            </div>

            <div class="a11">
                <select name="" id="">
                    <option value=" 2 to 20 specialists"> 2 to 20 specialists </option>
                    <option value="">Brazil</option>
                    <option value="">Czech</option>
                   
                </select>


                <select name="" id="">
                    <option value="more than 20 specialists">more than 20 specialists</option>
                    <option value="">Brazil</option>
                   
                </select>
                  
        
            </div>
        </div>



    </div>
        </>
    )
    
}
export default Cwaret;