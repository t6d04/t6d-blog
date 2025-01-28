import ListPosts from "@/components/listPost/ListPosts";


async function CategoryPage({params}: {params: Promise<{category: string}>}) {

    const category = (await params).category;

    return(
        <div className="flex flex-row gap-3 mx-[240px] mt-[100px] font-poppins text-white">
            
            {/* <ListPosts category={category} id={""} title={""} date={""} /> */}
        </div>
    )
}

export default CategoryPage;