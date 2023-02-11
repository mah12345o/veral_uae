import React from 'react'

 const Component1 = ({data1}) => {
   console.log(data1[0])
  return (
 <div className='row'>
     {data1.map((subdata1,index)=>{
            return <div className='col-md-12 col-lg-4'>
                <div className='cards'>
                <div>
                <img src={subdata1.Image1}></img>
                <h4>{subdata1.title1}</h4>
                <p className='paragraph'>{subdata1.para}</p>
                <p>
                <a href='#'>{subdata1.links}</a>
                </p>
                </div>
                </div>
            </div>
        })}
 </div>
  )
}

export default Component1