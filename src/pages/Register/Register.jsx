
import React, {useState, useEffect} from 'react';
import { InputText } from '../../common/InputText/InputText';
import './Register.css';

export const Register = () => {

    const registerInputHandler = () => {

    }

    return (
        <div className='registerDesign'>
            <InputText type={'text'} name={''} placeholder={''} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={''} placeholder={''} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={''} placeholder={''} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={''} placeholder={''} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={''} placeholder={''} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={''} placeholder={''} functionHandler={registerInputHandler}/>
            <InputText type={'text'} name={''} placeholder={''} functionHandler={registerInputHandler}/>
        </div>
    );
};