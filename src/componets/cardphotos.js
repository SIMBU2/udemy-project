import one from "../imagesudemy/images2/anete-lusina-zwsHjakE_iI-unsplash (1).jpg"
import two from "../imagesudemy/images2/anete-lusina-zwsHjakE_iI-unsplash.jpg"
import three from "../imagesudemy/images2/brooke-cagle-ICTKcvnXx_8-unsplash.jpg"
import four from "../imagesudemy/images2/christin-hume-Hcfwew744z4-unsplash.jpg"
import five from "../imagesudemy/images2/dell-yNvVnPcurD8-unsplash (1).jpg"
import six from "../imagesudemy/images2/dell-yNvVnPcurD8-unsplash.jpg"
import seven from "../imagesudemy/images2/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
import eight from "../imagesudemy/images2/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg"
import nine from "../imagesudemy/images2/samantha-borges-gXsJ9Ywb5as-unsplash.jpg"
import ten from "../imagesudemy/images2/windows-eGNLSgazDVU-unsplash.jpg"
function Card()
{
    return(
    <div>
    <h2>popular</h2>
    <h4>popular courses</h4>
    <div class="photos">
    <div class="cardphotos">
     <img src={one}></img>
     <h3>web development</h3>
     <p>col steele</p>
     <p>4.9 ⭐⭐⭐⭐</p>
     <p>449 <del>1299</del></p>
    </div>
    <div class="cardphotos">
    <img src={two}></img>
        <h3>django</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1299</del></p>
    </div>
       <div class="cardphotos">
        <img src={three}></img> 
        <h3>mysql</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1299</del></p>
       </div>
       <div class="cardphotos">
        <img src={four}></img>
        <h3>aws</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1299</del></p>
       </div>
       <div class="cardphotos">
         <img src={five}></img>
        <h3>data science</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449<del> 1299</del></p>
       </div>
       </div>

       <div class="addphotos">
        <div class="cardphotos">
         <img src={six}></img> 
        <h3>html</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1299</del></p>
       </div>
       <div class="cardphotos">
        <img src={seven}></img>
        <h3>css</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1299</del></p>
       </div>
       <div class="cardphotos">
        <img src={eight}></img>
        <h3>mangodb</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1299</del></p>
       </div>
       <div class="cardphotos">
        <img src={nine}></img>
        <h3>javascript</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1229</del></p>
       </div>
       <div class="cardphotos">
        <img src={ten} ></img>
        <h3>python</h3>
        <p>col steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1299</del></p>
    </div>
    </div>
</div>
    )
}
export default Card