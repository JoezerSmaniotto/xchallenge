import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {  Button, TextField,IconButton, FilledInput, InputLabel, InputAdornment , FormControl} from '@material-ui/core';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {ContentForm} from './styles'; 


const Form = ( ) => { 
    const dispatch = useDispatch();
    const [values, setValues] = useState({
        password: "",
        showPassword: false,
        email: "",
        
    });

    const [errors, setErrors] = useState({
        errorPassword: false,
        errorEmail:false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });    
    };

    function validateEmail(email){
        const reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)){
            return true;
        }else{
          return false;
        }
    } 
   
    const handleChangeVerifyFields = (camp)  => (event) => {
    
        if(camp === "errorPassword"){
            //let lengthPassword = event.target.value.length;
            if(event.target.value.length < 6 ){
                setErrors({ ...errors, [camp]: true });
            }else{
                setErrors({ ...errors, [camp]: false });
            }

        }
        if(camp === "errorEmail"){
            let emailIsValidy = validateEmail(event.target.value); 
            if(emailIsValidy){
            
                setErrors({ ...errors, [camp]: false });
            }else{
                setErrors({ ...errors, [camp]: true })
            }
        }
    }

    const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    

    const onSubmitForm = () => {
    
        if(!errors.errorPassword && !errors.errorEmail){
            const customer = {
                password: values.password,
                email: values.email,
            }
            dispatch({type: '@login/SET_CUSTOMER',customer })
            // alert(JSON.stringify(customer))
        }
    
    };
  
    return (
        <ContentForm>
            <p className="titleForm">Faça seu login</p>
            <form  noValidate >
               
                <TextField
                    label="e-mail"
                    id="filled-start-adornment"
                    variant="filled"
                    onChange={handleChange('email')}
                    onBlur={handleChangeVerifyFields('errorEmail')}
                />
                {errors.errorEmail &&  (
                    <p className="errorValidate">Informe um e-mail valido!</p>
                )}

                
                <FormControl variant="filled" className="spaceInput">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        onBlur={handleChangeVerifyFields('errorPassword')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
                </FormControl>
                {errors.errorPassword &&  (
                    <p className="errorValidate">Informe uma senha com mais de 6 caracteres!</p>
                )}

                <div className="hugbutton" onClick={onSubmitForm}>
                    <Button variant="outlined" >
                        ENTRAR
                    </Button>
                </div>    
               

            </form>
        </ContentForm>
    );
}

export default Form;