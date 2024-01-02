import React from 'react'

interface featureProp{
    title: String,
    content: String
}
function FeatureList(props: featureProp) {
    const {title, content}=props
  return (
    <>
    <ul className='w-50'>
        <li className='text-primary fw-bold'>{title}</li>
        <div>{content}</div>
    </ul>
    </>
  )
}

export default FeatureList