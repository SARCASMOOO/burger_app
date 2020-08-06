import React, {Component} from "react";

import Button from '../../../components/UI/Button/Button';

import classes from './ContactData.module.css';

import axios from '../../../axios-orders';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    orderHandler = (event) => {
        console.log('here');
        this.setState( { loading: false } );

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Steven',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '41351',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data.</h4>
                <form action="">
                    <input className={classes.Input} type="text" name='name' placeholder='Your Name'/>
                    <input className={classes.Input} type="email" name='email' placeholder='Your Email'/>
                    <input className={classes.Input} type="text" name='street' placeholder='Street'/>
                    <input className={classes.Input} type="text" name='postal' placeholder='Postal Code'/>
                    <Button btnType='Success' clcked={this.orderHandler}>ORDER</Button>
                </form>
            </div>)
    }
}

export default ContactData;