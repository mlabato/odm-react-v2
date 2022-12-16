

const CategoryBar = () => {
    return(
        <section className="w-1/4">
            <p className="font-bold text-[2rem]">Productos</p>
            <ul >
                <li className="text-[1.5rem] my-[1rem] hover:text-[#A61212]"><a href="/#">Mates</a></li>
                <li className="text-[1.5rem] my-[1rem] hover:text-[#A61212]"><a href="/#">Materas</a></li>
                <li className="text-[1.5rem] my-[1rem] hover:text-[#A61212]"><a href="/#">Bombillas</a></li>
                <li className="text-[1.5rem] my-[1rem] hover:text-[#A61212]"><a href="/#">Termos</a></li>
            </ul>
        </section>
    )
}

export default CategoryBar;