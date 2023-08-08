import React, { Component } from "react";

class Panel extends Component {
  render() {
    return (
      <div>
        <section id="panel">
          <div class="container-fluid">
            <div class="row px-2 py-2">
              <div class="col-lg-6">
                <p>
                  Invest your time and creativity with us to enhance your
                  income. Aspects Fieldwork & Research, a globally leading
                  market research organisation, needs your valuable opinion.
                  Join our panel to influence the end consumer with your
                  viewpoint and get rewarded for the same.
                </p>
                <h5>
                  As a member of our panel, you will be participating in
                  research studies in the form of:
                </h5>
                <ul>
                  <li>An online survey</li>
                  <li>Through telephone/internet</li>
                  <li>Personal interviews or focused group discussions</li>
                  <li>A member of an online community</li>
                  <li> Product reviewing</li>
                </ul>

                <div class="mb-3">
                  <label class="form-label">Enter Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Email"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Enter Phone</label>
                  <input
                    type="phone"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Contact With Country Code.For eg+91"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Enter Industry</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Industry"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Enter Country</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Country"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Enter Specialization</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter SpeciaLization"
                  />
                </div>
                <button class="btn btn-primary ">Submit</button>
              </div>

              <div class="col-lg-4">
                <img src="img/ads.jpg" class="img-fluid p-5 " alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Panel;
