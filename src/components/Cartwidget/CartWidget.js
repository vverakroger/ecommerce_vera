import CartWidgetLogo from './CartWidget.png';

function CartWidget() {
    return(
        <div className="CartWidget">
            <img src={CartWidgetLogo} alt="logo" style={{width:"50%"}}/>
        </div>
    );
}

export default CartWidget;