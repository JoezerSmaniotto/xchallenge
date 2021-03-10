import styled from 'styled-components';

export const ContentForm = styled.div`
  width: 100%;
  background-color: var(--white);
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  flex:1 0 260px;
  /* min-width: 260px; */
  max-width: 345px;
  padding: 20px;
  border-left: 1px solid var(--blue-ligth);

  /*& > p {
    padding: 20px;
    color: var(--grey-ligth);

  }*/

  .titleForm{
    margin-bottom: 30px;
    color: var(--grey-ligth);
    font-weight: bold;
  }

  .MuiFormControl-root {
    width: 100% !important;
    /* margin-bottom: 20px; */
  }

  .spaceInput{
    margin-top: 20px;
  }

  .hugbutton{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .MuiButton-outlined{
    color: var(--green-ligth);
    border-color: var(--green-ligth);
    width: 75%;
    font-weight: bold;
  }
  .errorValidate{
    padding-top: 5px;
    font-size:0.7rem;
    color: var(--red-tomato);
    
  }

  @media(max-width: 768px){

    &{
      border-left: none ;
      padding:0px;
      
    }
  }

`;