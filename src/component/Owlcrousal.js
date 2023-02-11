import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../Assets/css/Owlcrousal.css'

const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    dots:true,
    autoplay:true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
       
        700: {
            items: 1,
        },
        1000: {
            items: 3,

        }
    },
};


const Owlcrosal = ({ data }) => {
    return (
        <div className='Owlcrousal' >
            <OwlCarousel className='owl-theme' loop margin={10}  { ...options } nav>
                {data.map((dataitem,index)=>{
                    return <div key={index} className='item'>
                    <div className='card'>
                        <h4>{dataitem.title}</h4>
                        <p>
                            <strong>{dataitem.subtitle.price}</strong>
                            <span className='card-multip-color'>{dataitem.subtitle.text1}</span><br></br>
                            {dataitem.subtitle.text}
                        </p>
                        <ul>
                            {dataitem.listdata.map((listitem, index) => {
                                return <li key={index}>{listitem }
                                </li>
                            })}
                        </ul> 
                        <button>Continue</button>
                    </div>
                 </div>
                })}
            </OwlCarousel>
        </div>
    )
}

export default Owlcrosal;