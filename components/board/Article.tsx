import { IArticle } from "@/types";
import React from "react";

type Props = {
    article: IArticle
}

const Article: React.FC<Props> = ({article})=>{

    return(
        <>
        <h1></h1>
        <title> 게시글 </title>
        <h1></h1>
        <button> 등록 </button>
        </>
    )
}

export default Article