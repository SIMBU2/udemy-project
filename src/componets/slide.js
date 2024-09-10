import one from "../imagesudemy/images/unsplash1.jpg"
import two from "../imagesudemy/images/unsplash2.jpg"
import three from "../imagesudemy/images/unsplash3.jpg"
import four from "../imagesudemy/images/unsplash4.jpg"
import five from "../imagesudemy/images/unsplash5.jpg"


function Slide (){
    return(
        <div>
         <div class="slide">
            <div class="slides">
                <img src={one} alt=""></img>
                <h3 class="titless">python</h3>
                <h4>col steele</h4>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="slides">
                <img src={two} alt=""></img>
                <h3>basic python</h3>
                <h4>col steele</h4>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="slides">
                <img src={three}></img>
                <h3>frontend developer</h3>
                <h4>col steele</h4>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="slides">
                <img src={four}></img> 
                <h3>backend developer</h3>
                <h4>col steele</h4>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            <div class="slides">
                <img src={five}></img>
                <h3>web developer</h3>
                <h4>col steele</h4>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
        </div>

        </div>
    )
}
export default Slide