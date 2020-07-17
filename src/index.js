import store from './store';
import addToCart, { updateCart, deleteFromCart } from './actions/cart-actions';
import React from 'react'
import ReactDOM from 'react-dom'

console.log('initial state:', store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addToCart('Coffee 500ml', 1, 250))
store.dispatch(addToCart('Flour 1kg', 2, 110))
store.dispatch(addToCart('Juice 2L', 1, 250))

store.dispatch(updateCart('Flour 1kg',3, 100 ))
store.dispatch(deleteFromCart('Juice 2L'))

unsubscribe();

function Welcome({name,disabled=false}) {
    return <h1>Hello, {name},{disabled?'1':'2'}</h1>;
  }
  // 将JSX中定义的属性以及子组件转换为单个对象传递给组件，这个对象即称为“props”
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
