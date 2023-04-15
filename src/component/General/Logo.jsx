import image from "../../assets/images/logo.svg";

const Logo = () => {
    return <a href="/" className="logo">
        <img src={image} alt="RockDogFood"/>
        <span>RockDog</span>
    </a>
}

export default Logo;