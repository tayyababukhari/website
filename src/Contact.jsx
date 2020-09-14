import React, { useState } from 'react';

const Contact = () => {

  const [Data, setData] = useState({
    fullname:'',
      phone:'',
      email:'',
      msg:'',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return{
        ...preVal,
        [name]:value,
      };

    });
  };


  const formSubmit = (e) => {
      e.preventDefault();
      alert(`${Data.fullname}`);

  };

 
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div mb-4 ">
        <div className="row  ">
          <div className="col-md-6 col-10 mx-auto ">
            <form onSubmit={formSubmit} >
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={ Data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Full Name" />
              </div>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={Data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile Number" />
              </div>
              <div className="form-group mb-3">
                <label for="exampleFormControlInput1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={Data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com" />
              </div>


              <div className="form-group mb-3">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea 
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="msg"
                value={Data.msg}
                onChange={InputEvent}
                ></textarea>
                  
              </div>
              <button class="btn btn-outline-primary"
                type="submit">Submit form</button>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}


export default Contact;
