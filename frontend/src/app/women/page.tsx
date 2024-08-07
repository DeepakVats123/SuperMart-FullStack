"use client"
import React, { useState } from 'react'
import ProductCard from '@/components/ProductCard';
import ProductCardSkeleton from '@/components/ProductCardSkeleton';
import Filters from '@/components/Filters';
import useFetch from '@/utils/useFetch';



const WomenProductsPage = () => {
  const [sorting, setsorting] = useState<any>(()=>()=>(a:any,b:any)=>{})
  const products = useFetch('/products/women')

  return (
    <>
      
      <Filters setsorting={setsorting} />

    <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-5 p-5 gap-5'>
      {
      !products.length ? [1,2,3,4,5].map((e: any) => {
        return <ProductCardSkeleton />
      })
      :
      products && Array.isArray(products) && products.sort(sorting).map((e: any) => {
        return <ProductCard key={e._id} details={e} path={'/women'} />
      })
      }
    </div>
  </>
  )
}

export default WomenProductsPage