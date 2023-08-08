import React, { Component } from "react";
import About from "./About";
import Coverage from "./Coverage";



class Home extends Component{
    render(){
        return(
            <div>
                 <main id="main">
    <div class="container-lg" id="home-page">
      <div class="row">
        <div class="col-lg-6 hero1 p-5">
          <h1 class="text-white mx-2 my-3">Aspects Fieldwork & Research</h1>
          <p>REDIRECTING CURIOSITY IN THE RIGHT DIRECTION</p>
        </div>
        <div class="col-lg-6 hero2 p-5">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <h1 class="mx-2 my-3">Know your Audience</h1>
                <p class="mx-2 my-3">Identify and understand on what stage your audience is and make a compelling
                  strategy to convert them
                  into your potential customers with the help of our targeted research</p>
              </div>
              <div class="carousel-item">
                <h1 class="mx-2 my-3">Expand your Business</h1>
                <p class="mx-2 my-3">Knowing your audience isn’t enough. Knowing their interests, needs, barriers,
                  motivation elevates
                  your brand to connect and understand your targeted groups
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  </main>


  
    <About />

  <section id="services">

    <div class="container-fluid">


      <h1 class="text-center text-white">Our Services</h1>
      <div class="row py-2">


        <div class="col-md-4">
          <div class="card w-100 mb-3 ">
            <div class="card-body sec-1 px-3 py-4">
              <h5 class="card-title">Qualitative</h5>
              <p class="card-text">Also known as primary research, qualitative analysis demands interaction and
                real-time data. This is the process of collating data that hasn’t been out there yet. Interviews, market
                research surveys, questionnaires, and more fall under qualitative or primary research.
              </p>

              <a href="qual.html" class="btn btn-success">View More</a>

            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card w-100 mb-3 ">
            <div class="card-body sec-2 px-3 py-4">
              <h5 class="card-title">Quantitative</h5>
              <p class="card-text">When numbers and figures come together to form a proper analysis, it is called
                quantitative research. It is majorly used to find patterns and averages, make predictions, and
                generalize results to a wider population.Quantitative research is widely used in understanding customer
                psychology.</p>
              <a href="Quan.html" class="btn btn-success ">View More</a>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card w-100 mb-3 ">
            <div class="card-body sec-3 px-3 py-4">
              <h5 class="card-title">Other Services</h5>
              <p class="card-text">Aspects Fieldwork & Research is known for its dedication and competency to do
                comprehensive research for any industry across the country. This not only gives you a wide coverage, but
                also assures you of realistic data, statistics, and information to kickstart your business or launch a
                new product..</p>
              <a href="other.html" class="btn btn-success ">View More</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>


  <section>
    <div class="container-lg">
      <h1 class="text-center">Industry We Work With</h1>
      <div class="row row-cols-2">

        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/agri.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">Agriculture</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/automotive.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">Automotive</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/aviation.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">Aviation</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/ecom.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">Ecommerce</p>
            </div>
          </div>
        </div>



        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/education.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">Education</p>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/electronic.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">Electronics</p>
            </div>
          </div>
        </div>


        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/film.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">Film</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-xl-3 col-sm-6 my-3">
          <div class="card">
            <img src="img/fmcg.jpg" class="img-fluid " alt="..." />
            <div class="card-body">
              <p class="card-text">FMCG Market</p>
            </div>
          </div>
        </div>

      </div>

      <button href="industry.html" class="btn btn-success m-auto d-block my-5">View More</button>
      <Coverage />
      
    </div>
  </section>



  <section id="contact">
    <div class="container-lg">
      <h1 class="text-center text-white">Contact Us</h1>
      <div class="row py-5">
        <div class="col-md-6 col-lg-6 ">
          <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name" />
          </div>

          <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>

          <div class="mb-3">
            <input type="number" class="form-control" id="exampleFormControlInput1"
              placeholder="Enter Contact With Country Code.For eg+91" />
          </div>

          <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Subject" />
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>



        <div class="col-md-6 col-lg-6 ">
          <img src="img/contact.png" class="img-fluid m-auto d-block " alt="" />
        </div>
      </div>
    </div>
  </section>

 

 
            </div>
        )
    }
}

export default Home;