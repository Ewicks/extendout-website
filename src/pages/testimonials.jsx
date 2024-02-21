import React from 'react';
import Kitchen from '../assets/images/extensions.jpeg'

function Testimonials() {
  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-12 position-relative p-0">
            <div className="overlay-gallery"></div>
            <img
              className="img-fluid gallery-img"
              src={Kitchen}
              alt=""
            />
            <p className="gallery-item-text">Testimonials</p>
          </div>
        </div>
      </div>
      <div className="gallary-padding">
        
        <div className="row">
        </div>
        <div className="row">
          <div className="col">
            <div className="gallery-container gap-5">
              <div className="testimonial-item">
              <p className=' fst-italic'>
                "I recently used ExtendOut for the design and Build of my ground floor extension, loft conversion and full-refurb in Putney. The whole team were extremely professional and transparent throughout and would highly recommend them to anyone else looking for an honest, reliable and hard working team to transform their home."
                <span className='fw-bold'> <br />Rachel – Putney</span></p>
              </div>
              <div className="testimonial-item">
                <p className='fst-italic'>
                I suspect ‘m one of the more demanding clients. I wanted to have an ornate, custom and high spec finish. It was a push at times but what we achieved was better than my best expectations. The outcome is excellent and gets lots of admiring comments from visitors.
                <span className='fw-bold'><br />Ben – Herne Hill</span>
                </p>
              </div>
              <div className="testimonial-item">
                <p className='fst-italic'>
                Ovid and the ExtendOut team were really diligent and practical as we went through. They really care about doing a great job. I would definitely work with the ExtendOut team again.
                <span className='fw-bold'><br />James – Teddington</span>
                </p>
              </div>
            </div>
            <div className="gallery-container gap-5">
              <div className="testimonial-item">
                <p className='fst-italic'>
                Sabin and the ExtendOut team’s attention to detail is 1st class & the creation of our extension is everything we could have dreamed of. He worked so hard to match our unusual bricks, to piece together our kitchen which wasn’t the best planned. Sabin’s craftsmanship is a great all rounder, nothing seemed to phase him. Sabin has been so easy to work with, remembering all my little requests & offering guidance on key areas. As we were so impressed we extended the scope of the project to include our hallway, front patio and garden patios. I’d highly recommend. Thank you Sabin and the ExtendOut team.
                <span className='fw-bold'><br />Tina - Staines</span>
                </p>
              </div>
              <div className="testimonial-item">
                <p className='fst-italic'>
                ExtendOut Design & Build rebuilt our Edwardian house in Kingston over a period of 9 months. We are very pleased with the quality of work and the quality of finish. This is our third major building project, our biggest job and best experience. We would recommend ExtendOut and our team leader Ovidiu.
                Can I take the opportunity to thank the ExtendOut team for their hard wok on our project. We love our open plan kitchen and loft conversion and the high standard of finish you’ve achieved.
                As soon as we met Graham at the beginning of the process we were never going to go anywhere else.
                <span className='fw-bold'><br />David – West Byfleet</span>
                </p>
              </div>
              <div className="testimonial-item">
                <p className='fst-italic'>I highly recommend ExtendOut Design & Build as builders. They are not the cheapest, but our experience was that it was totally worth it to pay a little more for quality and peace of mind.
                A ‘don’t worry we will sort it’ attitude when problems came up. We got a few other quotes but no-one else gave my wife and I the feeling that I could leave them to it knowing they wouldn’t cut corners, understood what we wanted. Great job guys!
                <span className='fw-bold'><br />Stewart - Molesey</span>
                </p>
              </div>
              <div className="testimonial-item">
                <p className='fst-italic'>
                I am thrilled to provide a glowing testimonial of the exceptional work of ExtendOut Design & Build and their team. From inception to completion, the journey of extending our home has been nothing short of extraordinary. Their craftsmanship, attention to detail, and dedication to excellence truly exceeded out expectations
                
                <span className='fw-bold'><br />Elaine - Molesey</span>
                </p>
              </div>
              <div className="testimonial-item">
                <p className='fst-italic'>
                Thanks to ExtendOut Design & Build and their team, our home has been transformed into a space that not only meets but surpasses our expectations. We wholeheartedly recommend their services to anyone seeking top- notch craftsmanship, reliability and integrity in their building project. They have not just built an extension they have made our family home. 

                
                <span className='fw-bold'><br />
                David - Byfleet
                </span>
                </p>
              </div>
              <div className="testimonial-item">
                <p className='fst-italic'>
                ‘We are incredibly grateful to ExtendOut and their team for their hard work, professionalism and attention to detail. Thanks for their expertise and commitment, we now have a beautiful, functional and we thought out extension that has truly transformed our home. Without hesitation, we would recommend ExtendOut and the guys to anyone looking for a builder’
                <span className='fw-bold'><br />
                Emma - Lewisham
                </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials