

const CategoryCard = (props) => {
    return(
        <article className="flex flex-row mx-[10rem] my-[2rem]">
            <img src={props.image} alt="" className="w-[30rem] mr-[4rem]"/>
            <div className="w-1/2">
            <div className="font-bold text-[2rem]">{props.title}</div>
            <div>{props.description}</div>
            </div>

        </article>
    )
}

export default CategoryCard;