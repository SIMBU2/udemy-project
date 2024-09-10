import Card from "./componets/cardphotos";
import Catagories from "./componets/catagories";
import Footer from "./componets/footer";
import Header from "./componets/header";
import Salecard from "./componets/salacardimages";
import Slide from "./componets/slide";
import Topics from "./componets/topics";

function App(){
    return(
        <div>
            <Card></Card>
            <Catagories></Catagories>
            <Header></Header>
            <Salecard></Salecard>
            <Slide></Slide>
            <Topics></Topics>
            <Footer></Footer>
        </div>
    )
}
export default App