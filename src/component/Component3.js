import React from 'react'


const Components = ({data2}) => {
  return (
    <>   
     {data2.map((subdata1, index)=>{
                        return <div className=''>
                                <div className='single-card'>
                                  <div>
                                  <img src={subdata1.image}/>
                                  <h4>{subdata1.title}</h4>
                                  <p>{subdata1.para}</p>
                                  <p><a href='#'>Learn more<img src={subdata1.para1}/></a></p>
                               </div>
                                </div>
                             </div>
                    })}
         </>
                
    
  )
}

export default Components