import AddPost from "@/components/board/AddPost";
import Article from "@/components/board/Article";
import { IArticle } from "@/types";
import { InferGetStaticPropsType } from "next";
import React, { useState } from "react";

export default function BoardPage({articles}: InferGetStaticPropsType<typeof getStaticProps>){
    const [articlelist, setArticlelist] = useState(articles)

    const addPost = async (e:React.FormEvent, formData: IArticle) => {
        e.preventDefault()
        const article: IArticle = {
            artId: Math.random(),
            title: formData.title,
            content: formData.content
        }
        setArticlelist([article, ...articlelist])
    }

    const deletePost =async (artId:number) => {
        // filter 사용해서 문제해결
        const arr: IArticle[] = articles.filter((article: IArticle)=> (article.artId !== artId))
        setArticlelist(arr)
        
    }

    //if(!articlelist) return <h1>Loading...</h1>

    return(
    <>
        <AddPost write={addPost}/>
        {articlelist.map((article: IArticle)=>(
            <Article key={article.artId} deletePost={deletePost} article={article}/>
        ))}    
    </>
    )
   
}


export async function getStaticProps(){
    const res = await fetch(BASE_URL)
    const articles: IArticle[] = await res.json()
    
    return {props: {articles}}
}

const BASE_URL: string = "http://localhost:8080/articles" 

