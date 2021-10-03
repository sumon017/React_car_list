import React, {useState,useEffect} from 'react';
import TextField from './TextField';
import {register} from "../Store/Action/authAction";
import {useDispatch} from "react-redux";
import {withRouter} from 'react-router-dom'

function Register(props) {

    const [state, setState] = useState({
        First_name: '',
        Last_name: '',
        Phone: '',
        Email: '',
        Password: '',
        Confirm_password: '',
        error: {}
    })
    const dispatch =useDispatch()
    useEffect((nextProps,prevState)=>{
        if(JSON.stringify(nextProps) !== JSON.stringify(prevState)){
            return{
                error:nextProps.error
            }
        }
        return null
    })
    // static getDerivedStateFromProps(nexState){
    //
    // }
    const onChange = (e) => {
        const {name, value} = e.target
        setState({...state,[name]: value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        delete state.error
        dispatch(register(state, props.history))
        props.history.push('/')

    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                {Object.keys(state).map((key,index) => {
                    if (key !== 'error') {
                        return <TextField
                            key={index}
                            name={key}
                            value={state[key]}
                            placeholder={`Enter your ${key.toUpperCase()}`}
                            label={`${key.toUpperCase()}`}
                            onChange={onChange}
                            error={state.error[key]}
                        />
                    }
                })}
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        </div>
    );
}

export default withRouter(Register);