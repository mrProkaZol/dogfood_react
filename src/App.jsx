import Promo from "./component/Promo/Promo";
import Card from "./component/Card/index";
import {Header, Footer} from "./component/General";
import cardsData from "./assets/data.json";

const sizes = ["sm", "lg", "md"];
const adds = [];

let text = "Полёты собак в космос — серия биологических экспериментов, включавших проведение исследований по возможности полётов на геофизических и космических ракетах живых существ, наблюдение за поведением высокоорганизованных животных в условиях таких полётов, а также, изучение сложных явлений в околоземном пространстве."
text = text.match(/[^\s,.]+/g);
// console.log(text);

const rand = (n) => Math.floor(Math.random() * n);

let n = 8;
while(n--) {
    adds.push({
        text: `${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)} ${text[rand(text.length)].slice(0,8)}`,
        pic: !!Math.round(Math.random()), // !!0 => false - !!1 => true
        sizes: sizes[rand(sizes.length)]
    })
}

console.log(adds);

const App = () => {
    const user = localStorage.getItem("rockUser")
    return <div>
        <Header user={user}/>
        <div className="container">
            {/* <Card 
             img={cardsData[0].pictures}
             name={cardsData[0].name}
             price={cardsData[0].price}
            /> */}
            {cardsData.map((el, i) => <Card
                key={i}
                img={el.pictures}
                name={el.name}
                price={el.price}
            />)}
            {adds.map((el,i) => <Promo key={i} {...el} type={el.sizes}/>)}
        </div>
        <Footer/>
    </div>
}

export default App;













// function Rabbit(breed) {
//     this.age = 2;
//     this.breed = breed;
// }

// class Raccoon {
//     constructor(breed) {
//         this.age = 2;
//         this.breed = breed;
//     }
// }

// let pet1 = new Rabbit("ololo");
// let pet2 = new Raccoon("omnomnom");