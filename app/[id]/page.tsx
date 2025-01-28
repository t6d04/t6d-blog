import ListPosts from "@/components/listPost/ListPosts";
import Post from "@/components/Post";

async function IdPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="flex flex-row mx-[240px] mt-[100px] font-poppins text-white">
      <ListPosts category="ctf" id={""} title={""} date={""} />
      <div className="mx-8 w-[0.5px] bg-white" />
      <Post id={id} title={""} date={""} category={""} />
    </div>
  );
}

export default IdPage;
