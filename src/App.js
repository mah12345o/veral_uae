import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from 'react-icons/fa';
import { VscMenu } from 'react-icons/vsc';
import Owlcrosal from './component/Owlcrousal';
import mainimage from './Assets/ILLUSTRATION.png'
import graydot2 from './Assets/Ellipse 20.png'
import graydot3 from './Assets/Ellipse 21.png'
import graydot4 from './Assets/Ellipse 20.png'
import graydot17 from './Assets/Ellipse 17.png'
import graydot18 from './Assets/roundmedium.png'
import graydot19 from './Assets/Group 117.png'
// import graydot20 from './Assets/dungeon.png'
// import graydot21 from './Assets/quen.png'
// import graydot22 from './Assets/card.png'
// import graydot23 from './Assets/study.png'
// import graydot24 from './Assets/Vector.png'
// import graydot25 from './Assets/travel.png'
// import graydot26 from './Assets/Group.png'
// import graydot27 from './Assets/group1.png'
import graydot28 from './Assets/input.png'
import graydot29 from './Assets/fb.png'
import graydot30 from './Assets/insta.png'
import graydot31 from './Assets/linkdein.png'
import graydot32 from './Assets/youtube.png'
import graydot33 from './Assets/bluedot.png'
import graydot34 from './Assets/bluedot.png'
import graydot35 from './Assets/bluedot.png'
import graydot36 from './Assets/bluedot.png'
import graydot37 from './Assets/Ellipse 21.png'
import graydot38 from './Assets/bluedot.png'
import graydot39 from './Assets/Ellipse 21.png'
import graydot40 from './Assets/bluedot.png'
import graydot41 from './Assets/Ellipse 17.png'
import graydot42 from './Assets/logo.png'
import './App.css'
import Component1 from './component/Component';
import Components from './component/Component3';

const App = () => {

          const data1 = [
            {
              Image1:"img/quen.png",
              title1:"Dubai Local Companies-1",
              para:"The Dubai LLC formation documents  are actually articles of organization or a certificate of organization. You can get  yours today",
              links:"Get Started",
            },
            {
              Image1:"img/dungeon.png",
              title1:"Dubai Local Companies-2",
              para:"The Dubai LLC formation documents  are actually articles of organization or a certificate of organization. You can get  yours today",
              links:"Get Started",
            },
            {
              Image1:"img/dungeon.png",
              title1:"Dubai Local Companies-3",
              para:"The Dubai LLC formation documents  are actually articles of organization or a certificate of organization. You can get  yours today",
              links:"Get Started",
            },
          ];
          const data = [
                          {
                            title: "AJMAN OFFSHORE",
                            subtitle: {
                            price:"$2,997",
                            text1:"One Time Payment",
                            text:" Ajman Offshore New Company formation includes",
                            },
                            listdata : [
                                    "Attestation Charges",
                                    "Registered Agent",
                                    "Registered Office",
                                    "Varal Administrative",
                                    "Preparing Statutory File",
                                    "Liasing with Registration Authorities",
                                    "Due Diligence Appraisal",
                                    "Keeping The Register",
                                    "Seal Charges",
                                    "Certificate of Good Standing",
                                    ]
                            },
                            {
                              title: "RAK ICC",
                              subtitle: {
                              price:"$4,124 ",
                              text1:" One Time Payment ",
                              text:" Sharjah Media City New Company formation include ",
                              },
                            listdata : [
                              "Attestation Charges",
                              "Registered Agent",
                              "Registered Office",
                              "Varal Administrative",
                              "Preparing Statutory File",
                              "Liasing with Registration Authorities",
                              "Due Diligence Appraisal",
                              "Keeping The Register",
                              "Seal Charges",
                              "Certificate of Good Standing",
                            ]
                          },
                          {
                            title: "SHARJAH MEDIA CITY",
                            subtitle: {
                              price:"$2,997",
                              text1:"One Time Payment ",
                              text:" Rak Icc New Company formation includes",
                            },
                          listdata : [
                            "Attestation Charges",
                            "Registered Agent",
                            "Registered Office",
                            "Varal Administrative",
                            "Preparing Statutory File",
                            "Liasing with Registration Authorities",
                            "Due Diligence Appraisal",
                            "Keeping The Register",
                            "Seal Charges",
                            "Certificate of Good Standing",
                          ]
                          },
                          {
                            title: "DUBAI MEDIA CITY",
                            subtitle: {
                              price:"$3,000",
                              text1:"One Time Payment ",
                              text:" Rak Icc New Company formation includes",
                            },
                          listdata : [
                            "Attestation Charges",
                            "Registered Agent",
                            "Registered Office",
                            "Varal Administrative",
                            "Preparing Statutory File",
                            "Liasing with Registration Authorities",
                            "Due Diligence Appraisal",
                            "Keeping The Register",
                            "Seal Charges",
                            "Certificate of Good Standing",
                          ]
                          }
                      ];
          const data2 = [
            {
              image:"img/study.png",
              title:"Bank Account Setup",
              para:"There are many banks in the United  Arab Emirates [UAE]. Both locally   owned and branches of  multinational ones. Foreign banks   adjust according to their parent s   strategies and have changed local   requirements overnight in the past.   But we are here to help you",
              para1:"img/study.png",
            },
            {
              image:"img/Group.png",
              title:"Bank Account Setup",
              para:"There are many banks in the United  Arab Emirates [UAE]. Both locally   owned and branches of  multinational ones. Foreign banks   adjust according to their parent s   strategies and have changed local   requirements overnight in the past.   But we are here to help you",
              para1:"img/study.png",
            },
             ]

  return (
    <div className='Varal-file container'>
      <div className='header-section'>
        <div className='left-side'>
          <img src={graydot42}/>
        </div>
        <div className='right-side'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Service</a></li>
            <li><a href='#'>Price</a></li>
            <li><a href='#'>About us</a></li>
            <button className='button-1'>Start a Company</button>
            <button className='hemburg'><VscMenu /></button>
          </ul>
        </div>
      </div>
       <div className='first-section'>
       <div className='input-part'>
          <FaSearch className='search-icon'/>
            <input type="text" placeholder='Search a Term | Topic'/>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-md-12 ps-0'>
              <div className='left-side'>
                <h5>Claim a Free Quote</h5>
                <h3><span className='border-botom'>Get started</span> on fulfilling your Dubai or UAE dream.</h3>
                <h5>UAE & Offshore Company</h5>
                <p>We provide you with information about UAE or Offshore Company Registration & help you setup your company with a bank account and visas.</p>
                <div className='btn-group'>
                  <button>Start a Company</button>
                  <button>Renew a Company</button>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-md-12  pe-0'>
              <div className='right-side'>
                <div className='right-side-image'>
                  <img src={mainimage} alt="main-image"/>
                </div>
                <div className='round-img'>
                  <img src={graydot2}/>
                  <img src={graydot3}/>
                  <img src={graydot4}/>
                  <img src={graydot33}/>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className='second-section'>
          <div className='container container-custum'>
            <div className='text-part'>
                <h4>Watch the video about UAE or Offshore Company Registration<img src={graydot19}/> </h4>
                <div className='title-and-text'>
                <h2><span className='border-botom'>Dedicated</span><br></br>
                to our mission we are</h2>
                <p>Our services include Company Formation & Renewals, Trust & Fiduciary, Tax Residency Setup With Family, Bank Accounts, Remote Management, Stock Trading Platforms, Ownership Solutions</p>
                </div>
            </div>
              <div className='img-group'>
                <img src={graydot17}/>
                <img src={graydot18}/>
              </div>
          </div>
       </div>
        <div className='third-section'>
          <div className='container'>
               <Component1 data1={data1}/>
          </div>
        </div>
         <div className='Fourth-section'>
         <img className='firstimg' src={graydot34}/>
         <img className='secondimg' src={graydot3}/>
         <img className='thirdimg' src={graydot35}/>
         <img className='fourthimg' src={graydot36}/>
         <img className='fifthimg' src={graydot37}/>
         <img className='siximg' src={graydot38}/>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='left-side'>
                <div className='top-paragrap'>
                   <p>Learn the ways in which you can benefit 
                     from a UAE/Offshore Company. Then get 
                     started on fulfilling your UAE dream.</p>
                   <h5><a href='#'>Claim a Free Quote</a></h5>
                  </div>      
                  <Components data2={data2}/>
                    </div>
                 </div>
              <div className='col-lg-6'>
                <div className='left-side'>
                <Components data2={data2}/>
                  <div className='top-paragrap'>
                   <p>We have gathered a team of 
                    professionals to craft adequate 
                    services you can rely on for a friction 
                    free setup in UAE.</p>
                   <h5><a href='#'>More about our service</a></h5>
                  </div>
                </div>
               </div>
            </div>
          </div>
         </div>
        <div className='Fifth-section'>
          <img className='sevenimg' src={graydot39}/>
          <img className='nineimg' src={graydot40}/>
          <img className='fifteenimg' src={graydot40}/>
          <div className='container'>
            <div className='subtitle'>
              <h2>Most<span className='border-botom'> popular affordable pricing</span>per 
              jurisdictions are brought to you to 
              kick off your adventure</h2>
            </div>
            <div className='Owlcrosal1'>
              <Owlcrosal data={data}/>
            </div>
          </div>
        </div>
       <div className='six-section'>
       <img className='tenimg' src={graydot39}/>
       <img className='elevenimg' src={graydot39}/>
       <img className='twelveimg' src={graydot39}/>
       <img className='thirteenimg' src={graydot36}/>
       <img className='fourteenimg' src={graydot36}/>
        <div className='container'>
        <img className='firstpic' src={graydot41}/>
          <div className='row'>
            <div className='col-lg-5'>
              <div className='left-side'>
              <div className='text-part'>
                <h4>Read about our blogs for more 
                information on our processes</h4>
              </div>
              <div className='card'>
                <div className='border-icon'> <div className='image'></div>
               </div>
               <div className='review'>
               <p>How to start a company 
              formation in Duba</p>
              <span>5 Minutes</span>
               </div>
              </div>
              <div className='card'>
              <div className='border-icon'> <div className='image'></div>
               </div>
               <div className='review'>
               <p>How to start an Offshore 
                company formation in Duba</p>
              <span>5 Minutes</span>
               </div>
              </div>
              <div className='card'>
              <div className='border-icon'> <div className='image'></div>
               </div>
               <div className='review'>
               <p>SEO Dubai: Who benefits 
                 the most</p>
              <span>5 Minutes</span>
               </div>
              </div>
              <div className='text-part'>
                <h4>Satidfied We are When Our 
                Customers Are Happy</h4>
              </div>
              <div className='user-text-part'>
              <div className='circle'></div>
              <div className='circle'></div>
                <p>
                <span className="TEXT-QUOTE">“</span>
                I am very happy with them. I’ll 
                continue to use their services in 
                future & highly recommend them 
                to anyone  <span className="TEXT-QUOTE1">“</span>
               
                </p>
                <strong>Muhib Abrar</strong>
              </div>
              <div className='user-text-part'>
              <div className='circle'></div>
                <p>
                     <span className="TEXT-QUOTE">“</span>
                Rama has a high level of integrity, 
                intellect, knowledge of his 
                business, resourcefulness and 
                humanity   
                 <span className="TEXT-QUOTE1">“</span>
                </p>
                <strong>Colin Saldahna</strong>
              </div>
              <div className='user-text-part'>
                <div className='circle'></div>
                <p>
                     <span className="TEXT-QUOTE">“</span>
                Your advise was so complete that I 
                actually realized how beneficial 
                this would be to my clients and my 
                business 
                <span className="TEXT-QUOTE1">“</span>
                </p>
                <strong>Mark Swann</strong>
              </div>
              </div>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5'>
              <div className='right-side'>
              <div className='text-part'>
                <h4>Get to know the whole us and 
                more of our services</h4>
              </div>
              <div className='footer-part'>
                <div>  
                  <h5>Services</h5>
                <ul>
                  <li><a href='#'>Products</a></li>
                  <li><a href='#'>Solutions</a></li>
                  <li><a href='#'>Assurance</a></li>
                  <li><a href='#'>FAQ</a></li>
                  <li><a href='#'>Working at Varal-Singhania</a></li>
                </ul>
                </div>
                <div>  
                  <h5>Polices</h5>
                <ul>
                <li><a href='#'>Privacy Policy</a></li>
                  <li><a href='#'>Terms & Conditions</a></li>
                </ul>
                </div>
                <div>  
                  <h5>About</h5>
                <ul>
                <li><a href='#'>About Us</a></li>
                  <li><a href='#'>Contact Us</a></li>
                </ul>
                </div>
                <div>  
                  <h5>Address</h5>
                <ul>
                  <li className='li-custum'>608 One Lake Plaza, Cluster T,Al Sarayat Street, Jumeirah Lake Towers Dubai United Arab Emirate</li>
                  <li className='li-custum2'>Office Hours: Sunday to 
                    Thursday 8:30 AM to 6:30 PM 
                    [GMT+4]
                    <br></br>
                    <a href="tel:+971 55 794 2016">M: +971 55 794 2016</a>
                    <br></br>
                    <a href="tel:+971 55 794 2016">O: +971 4 447 2061</a>
                    </li>
                </ul>
                </div>
                <div>  
                  <h5>Subscribe Now</h5>
                <ul>
                  <li>Sunbscribe now to receive our 
                    Newsletters about amazing 
                    opportunities in Dubai</li>
                </ul>
                </div>
                <div className='bottom-input'>  
                <input type="text" placeholder='Enter email addres'/><img src={graydot28}/> 
                </div>
             <div className='social-media'>
              <div><a href='#'><img src={graydot29}/></a></div>
              <div><a href='#'><img src={graydot30}/></a></div>
              <div><a href='#'><img src={graydot31}/></a></div>
              <div><a href='#'><img src={graydot32}/></a></div>
             </div>
              </div>
              </div> 
            </div>
          </div>
        </div>
        <div className='copyright-part'>
          <div> Varaluae 2021 @ All Right Reserved</div>
        </div>
       </div>
    </div>
  )
}
export default App