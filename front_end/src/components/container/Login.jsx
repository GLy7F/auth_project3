// @github_bosheca
import { Button, Checkbox, Form } from 'semantic-ui-react'
import React, { Component } from 'react'
import { login }  from '../../functionAuth/functionAuth'
export default class Register extends Component {
state ={}
onChangHandler=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
onSubmitHandelr =(e)=>{
    e.preventDefault()
    login(this.state).then(
    this.props.history.push('/profile'))
}
    render() {
        console.log(this.state)
        return (
            <Form onSubmit={this.onSubmitHandelr}>
            <Form.Field>
                <label>email</label>
                <input placeholder='email' name="email" 
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <label>password</label>
                <input placeholder='password'  name = "password"
                 onChange ={this.onChangHandler}/>
            </Form.Field>
            <Form.Field>
                <Checkbox label='I agree to terms of use' />
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
    )
    }
}