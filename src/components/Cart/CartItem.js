import classes from './CartItem.module.css'

const CartItem = props => {
    const price = `$${props.price.toFixed(2)}`

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2 className='text-xl font-bold'>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.qty}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button
                    className='hover:scale-110 duration-300'
                    onClick={props.onRemove}>
                    −
                </button>
                <button
                    className='hover:scale-110 duration-300'
                    onClick={props.onAdd}>
                    +
                </button>
            </div>
        </li>
    )
}

export default CartItem
