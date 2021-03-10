import React, {useState} from 'react';
//import ReactDOM from "react-dom";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { TextField, Button, Input } from '@material-ui/core';
import {  Button, TextField} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";

import {ContentForm} from './styles'; 


// const SignupSchema = yup.object().shape({
//     email: yup.string().required('Nome obrigatório').email('Informe email'),
//     password: yup.string().required('Senha obrigatório'),

// });
  


const Form = ( ) => { 
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


    /* ------------------------*/

    // const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver(SignupSchema)
    // });
  
    
    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data));
    // };
  
    return (
        <ContentForm>
            <p className="titleForm">Faça seu login</p>
            {/* <form onSubmit={handleSubmit(onSubmit)} noValidate > */}
            <form  noValidate >
               
                <TextField
                    label="e-mail"
                    id="filled-start-adornment"
                    variant="filled"
                    onChange={handleChange('email')}
                    // onMouseDown={handleChangeVerifyFields('errorEmail')}
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
                        // onMouseDown={handleChangeVerifyFields('errorPassword')}
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


                    

               
                {/* <button type="submit">Login</button>                 */}
                {/* <Button variant="outlined" color="secondary" onClick = { handleSubmit ( onSubmit ) } > */}
                <div className="hugbutton">
                    <Button variant="outlined" >
                        ENTRAR
                    </Button>
                </div>    
               

            </form>
        </ContentForm>
    );
}

export default Form;