import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../../axiosOrders';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      postalCode: '',
      country: ''
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Raman',
        address: {
          street: 'Jail Road',
          city: 'Gurdaspur',
          postalCode: '143521',
          country: 'India'
        },
        email: 'hi@gmail.com'
      },
      deliveryMethod: 'fastest'
    };
    axios
      .post('/orders.json', order)
      .then(res => {
        // console.log(res);
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch(err => {
        // console.log(err);
        this.setState({ loading: false });
      });
    // .json is added for using it on firebase....
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type='text'
          name='name'
          placeholder='Your Name'
        />
        <input
          className={classes.Input}
          type='email'
          name='email'
          placeholder='Your Mail'
        />
        <input
          className={classes.Input}
          type='text'
          name='street'
          placeholder='Street'
        />
        <input
          className={classes.Input}
          type='text'
          name='city'
          placeholder='City'
        />
        <input
          className={classes.Input}
          type='number'
          name='postalCode'
          placeholder='Postal Code'
        />
        <input
          className={classes.Input}
          type='text'
          name='country'
          placeholder='Country'
        />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
