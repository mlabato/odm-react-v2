const PriceCard = (props) => {
  return (
    <div>
      {props.discount > 0 ? (
        <div className="flex flex-row items-center justify-start ">
          <div
            key={"price2" + props.i}
            className="text-[2.2rem]  mt-[0.5rem] p-[0.5rem] font-bold text-[#A61212]"
          >
            {" "}
            {"$" + (props.price - props.price / props.discount)}{" "}
          </div>
          <div
            key={"discount" + props.i}
            className="text-[1.2rem]  mt-[0.5rem] p-[0.5rem] text-green-600"
          >
            {" "}
            {props.discount + "%"}{" "}
          </div>
        </div>
      ) : (
        <div
          key={"price" + props.i}
          className="text-[2.2rem]  mt-[0.5rem] p-[0.5rem]  font-bold  text-[#A61212]"
        >
          {"$" + props.price}
        </div>
      )}
    </div>
  );
};

export default PriceCard;
