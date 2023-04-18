import React, {useState} from 'react';
import "./qualification.css";

const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }


  return (
    <section className="qualification section">
        <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Personal Journey</span> 


        <div className="qualification__container container">
            <div className="qualification__tabs">
              <div 
              className={
                toggleState === 1 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick={() => toggleTab(1)}
            >

                <i className="uil uil-graduation-cap qualification__icon"></i> Education
              </div>

              <div className={
                toggleState === 2
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                } 
                onClick={() => toggleTab(2)}
                >

                <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
              </div>
            </div>



            <div className="qualification__sections">
                <div 
                className= {
                    toggleState === 1 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }
                >


                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelors of Technology, Electronics and Communincation</h3>
                            <span className="qualification__subtitle"> Indian Institute of Information Technology, Surat</span> 
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>



                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>


                        <div>
                            <h3 className="qualification__title">Senior Secondary - <i>85%</i></h3>
                           
                            <span className="qualification__subtitle"> Ryan International School, Jaipur</span> 
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2018 - 2019
                            </div>
                        </div>                    
                    </div>
                    

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Matriculation - <i>10 CGPA</i></h3>
                            <span className="qualification__subtitle"> Ryan Internation School, Jaipur</span> 
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2016 - 2017
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                </div>


                <div className={
                    toggleState === 2
                    ? "qualification__content qualification__content-active"
                    : "qualification__content"
                }>


                <div className="qualification__data">
                    <div>
                            <h3 className="qualification__title">UI/UX Designer</h3>
                            <span className="qualification__subtitle"> ZOTH.io</span> 
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Oct 2022 - Feb 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>
                </div>

                


                
                <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>



                        <div>
                            <h3 className="qualification__title">Joint Secretary</h3>
                            <span className="qualification__subtitle"> Ruminate - Ecell, IIIT Surat</span> 
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Aug 2022 - Present
                            </div>
                        </div>                    
                    </div>




                    
                <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Chief Designer</h3>
                            <span className="qualification__subtitle"> Saras, IIIT Surat</span> 
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Jun 2022 - March 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                </div>
                
            </div>

                


                
                <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>



                        <div>
                            <h3 className="qualification__title">Junior Designer</h3>
                            <span className="qualification__subtitle"> Renesa - Publishing House, SVNIT</span> 
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Feb 2021 - March 2022
                            </div>                            
                        </div>  
                </div>     

                {/* <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Designerr</h3>
                        <span className="qualification__subtitle">Graphic Designer</span> 
                        <div 
                        className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>
                            Oct 2022 - Feb 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className='qualification__line'></span>
                        </div>
                    </div> */}

                </div>
    </section>
  )
}

export default Qualification