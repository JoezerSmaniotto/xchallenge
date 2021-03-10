import React from 'react';
import Form from '../Form';
import {ContainerSignIn} from './styles';  


const Card = ( ) => {

    return(
        <ContainerSignIn>
         
            <div className="HugImg"> 
              <img src="https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png" alt="Imagem xtrategie"/>
            </div>
            <div>
              <Form/>
            </div> 
         
        </ContainerSignIn>
    );
}
export default Card;