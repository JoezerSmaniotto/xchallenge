import styled from 'styled-components';


export const ContainerSignIn = styled.div`
  max-width:730px;  
  width: calc(100% - 20px);
  
  background-color: var(--white);
  display: flex; 
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;
  border-radius:5px;
  box-shadow: 0px 2px 3px 1px var(--grey-ligth); 
 
  @media(max-width: 768px){
    &{
      flex-direction: column;
      justify-content: center;
      margin: 10px;
    }

  }
  
`;


export const ContainerImg = styled.div`
   
  flex:1 0 260px; 
  min-width: 260px; 
  max-width: 345px;
  margin-right:20px;
  display: flex;
  img{
    width:100%;
    display: block; 
  }
  
  @media(max-width: 768px){
  & {
      flex:none; 
      margin-right:0px;
      margin-bottom: 30px;
    }
  }




`;