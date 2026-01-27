import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import streact from "streact";
import { posts } from "@/data/posts";
import { Post } from "@/types/Post";
const BlogPost = () => {
    const { slug } = useParams();
    const [html, setHtml] = useState<string>("");
    const [postData, setPostData] = useState<Post>();
    useEffect(() => {

        const result = posts.filter(obj => {

            return obj.slug === slug
        })
        console.log("result ==> ", result);
        fetch(`/posts/${slug}.html`)
            .then(res => res.text())
            .then(text => {

                if (text.includes('/src/main.tsx')) {
                    throw new Error("Fallback do index.html detectado");
                }
                setHtml(text);
                setPostData(result[0])

            })
            .catch(() => {
                setHtml("<h1>Post não encontrado</h1>");
            });

    }, [slug]);
function formatDate (input) {
  const datePart = input.match(/\d+/g),
  year = datePart[0], // get only two digits
  month = datePart[1], day = datePart[2];

  return day+'/'+month+'/'+year;
}
    return (
        <div className="px-4 mx-auto">
            <div className="flex flex-col text-left">
                <h1 className="!text-4xl font-bold !mb-0 !text-left">
                   {postData?.title || ""}
                </h1>
                <h2>
                 Criado em   {postData?.date ? new Date(postData.date).toLocaleDateString('pt-BR') : '"Não lembro"'} por {postData?.author}
                </h2>
                <hr className="golden mb-4" />
            </div>
            <div className="rpgui-container framed-grey w-full">
                {streact(html)}
            </div>

            {/* <UnderConstruction /> */}
        </div>

    );
};

export default BlogPost;
