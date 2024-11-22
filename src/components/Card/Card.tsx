import * as SC from "./CardStyled"

import {ReactComponent as CardPic} from "../../assets/images/icon-cart.svg"
import backPic from "../../assets/images/image-product-mobile.jpg"

const Card:React.FC = () => {
    return (
      <SC.CardCustom>
        <SC.ImageCon>
          <img src={backPic} alt="background" />
        </SC.ImageCon>
        <SC.CardContent>
          <p>perfume</p>
          <h3>Gabrielle Essence Eau De Parfum</h3>
          <SC.CardContentText>
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </SC.CardContentText>
          <SC.Price>
            <p>$149.99</p>
            <p>$169.99</p>
          </SC.Price>
          <SC.ButtonCustom><CardPic/> Add to Cart</SC.ButtonCustom>
        </SC.CardContent>
      </SC.CardCustom>
    );
}
 
export default Card;