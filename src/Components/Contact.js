import React, { Component } from "react";

class Contact extends Component{
    render(){
        return(
            <div>
 <section>
    <div class="container-lg">
      <h1 class="text-center text-black">Contact Us</h1>
      <div class="row py-5">
        <div class="col-md-6 col-lg-6 ">
          <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>
          </div>

          <div class="mb-3">
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
          </div>

          <div class="mb-3">
            <input type="number" class="form-control" id="exampleFormControlInput1"
              placeholder="Enter Contact With Country Code.For eg+91"/>
          </div>

          <div class="mb-3">
            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Subject"/>
          </div>
          <div class="mb-3">
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>



        <div class="col-md-6 col-lg-6 ">
          <img src="img/contact.png" class="img-fluid m-auto d-block " alt=""/>
        </div>
      </div>
    </div>
  </section>
            </div>
        )
    }
}

export default Contact;