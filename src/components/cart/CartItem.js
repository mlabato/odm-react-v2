import classes from './CartItem.module.css';

const CartItem = (props) => {
  
  const discount = props.discount / 100;
  const price = props.price - (props.price * discount);

  return (
    <li className={classes['cart-item']}>
      <div>
        
        <h2>{props.model}</h2>
        <div className={classes.summary}>
          
          <span className={classes.price}>$ {price}</span>
          <span className={classes.amount}> {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;