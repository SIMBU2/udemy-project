import Header from "./header";
import Card from "./cardphotos";
import Catagories from "./catagories";
import Footer from "./footer";

import Salecard from "./salacardimages";
import Slide from "./slide";
import Topics from "./topics";

function App(){
    return(
        <div>
            <Header></Header>
            <Catagories></Catagories>
            <Salecard></Salecard>
            <Card></Card>
            <Topics></Topics>
            <Slide></Slide>
            <Footer></Footer>



        </div>
    )
}
export default App