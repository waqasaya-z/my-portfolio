import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonGen = () => {
  return (
    <Skeleton baseColor="#14121c" count={10} />     
  )
}

export default SkeletonGen