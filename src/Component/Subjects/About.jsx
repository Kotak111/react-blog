import React from 'react';

function About(props) {
    return (
      <>
      <div className="container-fluid">
        <div className="row about-main mx-0" >
            <div className="col-lg-6 col-md-6 col-sm-12 about-1">
                <p className='p-about mx-auto mt-3 '>this is a blogger website. you can read a succesfull person in our life and make a succesfull bussiness and companys.</p>
                <p className='p-about mx-auto mt-5 '>website is not only read a blogs but you can get a ideas and knowledge and make greatfull your life</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 bg-success" >
                <img src="/blog.jpg" alt="" className='imgh-fluid about-2'/>
            </div>
        </div>
        <div className="row mx-0">
            <div className="col-lg-4 col-md-6 col-sm-12 color-1">
                <div className='about-us'>About us</div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 bg-white">
            <p className='about-text-1 text-center mx-auto'>The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and early Web users therefore tended to be hackers and computer enthusiasts.</p>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-12 color">
            </div>
        </div>
        <div className="row mx-0">
            <div className="col-lg-6 col-md-6 col-sm-12 bg-primary u">
                <img src="blog2.jpg" alt="" className='w-100 h-100 img-fluid ' />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 " style={{backgroundColor:"blueviolet"}}>
                <p className='about-text-2 text-center mx-auto'>'Blog' and 'blogging' are now loosely used for content creation and sharing on social media, especially when the content is long-form and one creates and shares content on regular basis. So, one could be maintaining a blog on Facebook or blogging on Instagram.</p>
            </div>
        </div>
      </div>
      </>
    );
}

export default About;