

import ProductDetail from "@/components/product"
import React from "react"


interface IProps {
    params:Promise<{
        id:string
    }>
}

const Page:React.FC<IProps> = async ({params}) =>{
    const {id} = await params
    return (
        <div>
           <ProductDetail id={id}/>
        </div>
    )
}

export default Page
