import React from 'react';
import Form from '../Form';
import {ContainerSignIn, ContainerImg} from './styles';  


const Card = ( ) => {

    return(
        <ContainerSignIn>
         
            <ContainerImg> 
              <img src="https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png" alt="Imagem xtrategie"/>
            </ContainerImg>
            <div>
              <Form/>
            </div> 
         
        </ContainerSignIn>
    );
}
export default Card;