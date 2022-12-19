const CartItem = (props) => {
  
  const discount = props.discount / 100;
  const price = props.price - (props.price * discount);

  return (
    <li className="flex justify-between items-center border-b-2 border-[#A61212] py-[1rem] ">
      <div>
        
        <h2 className="font-bold">{props.model}</h2>
        <div className="w-[10rem] flex justify-between items-center">
          
          <span className="font-bold text-[#A61212]">$ {price}</span>
          <span className="font-bold border-2 px-[0.4rem] rounded-sm "> {props.amount}</span>
        </div>
      </div>
      <div className="flex flex-row">
        <button className="font-bold text-[1.25rem] text-[#A61212] border-2 text-center rounded-sm cursor-pointer p-[.3rem] ml-[1rem] m-[.25rem] hover:bg-[#A61212] hover:text-white " onClick={props.onRemove}>−</button>
        <button className="font-bold text-[1.25rem] text-[#A61212] border-2 text-center rounded-sm cursor-pointer p-[.3rem]  ml-[1rem] m-[.25rem] hover:bg-[#A61212] hover:text-white " onClick={props.onAdd}>+</button>
      </div>
    </li>
  ); 
};




export default CartItem;