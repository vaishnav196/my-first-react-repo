import React, { Component } from "react";

class Footer extends Component{
    render(){
        return(
            <div>
                <section id="footer-link">

<div class="container-lg">
<hr />
  <div class="row">

    <div class="col-sm-3 col-md-4 col-lg-3">
      <img src="img/logo.png" alt="" class="ms-xxl-5" width="300px" height="150px" />
    </div>


    <div class="col-sm-6 col-md-6  col-lg-3">

      <ul class="text-md-center text-sm-end ">
        <h5>Servcies</h5>
        <li class=" list-unstyled "><a href="" class="text-decoration-none pink">Qualative</a></li>
        <li class="list-unstyled "><a href="" class="text-decoration-none pink">Quantative</a></li>
        <li class="list-unstyled "><a href="" class="text-decoration-none pink ">Other Services</a></li>
      </ul>
    </div>


    <div class="col-sm-6 col-lg-3  col-md-4">
      <h5>Address</h5>
      <p class="pink"> Akshya Nagar 1st Block 1st Cross,<br />
        Rammurthy nagar Bangalore- <br /> 560016
      </p>


    </div>


    <div class="col-sm-8 col-md-6 col-lg-3">

      <ul class="">
        <h5>Contact</h5>
        <li class=" list-unstyled"><a href="" class="text-decoration-none pink ">+91 9874563120</a></li>
        <li class="list-unstyled "><a href="" class="text-decoration-none pink">+91 9874563210</a></li>
        <li class="list-unstyled "><a href="" class="text-decoration-none pink">contact@arf.com</a></li>
      </ul>
    </div>
  </div>
</div>

</section>

<footer id="footer" style={{backgroundColor:"black"}}>
<div class="container-fluid">
  <div class="row">
    <div class="col">
      <p class="text-center text-white">Copyright © 2021 Aspects Fieldwork & Research| Design & Developed By Ntech Global Solutions</p>
    </div>
  </div>
</div>
</footer>
            </div>
        )
    }
}

export default Footer;