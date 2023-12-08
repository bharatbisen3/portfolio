import './Main.css';

function Contact() {
    return (
        <div>

            <div className="container ">
                <div className=" dCont mt-2 p-5 w-75 bg-dark text-white " >

                    <form action="https://formsubmit.co/9612c6e04eb36db67848e1fdac4ed702" method="POST">

                        <h1 className="text-center"> Contact <span className="text-info"> Me </span> </h1>

                        <br />

                        <div className="d-flex flex-column w-100   justify-content-center text-center">


                            <div className=" row p-1 ">

                                <div className="col text-start my-3 ps-5 ">
                                    <label for="fname">Full Name</label>

                                </div>
                                <div className="col">
                                    <input type="text" name="fname" placeholder="Bharat Bisen" />

                                </div>


                            </div>

                            {/* <div className=" row p-1 ">

                <div className="col text-start my-3 ps-5 ">
                  <label for="lname">Last Name</label>
                </div>

                <div className="col">
                  <input type="text" name="lname" placeholder="Bisen"/>
                </div>


              </div> */}



                            <div className=" row p-1 ">

                                <div className="col text-start my-3 ps-5 ">
                                    <label for="cnum"> Contact Number </label>
                                </div>
                                <div className="col">
                                    <input type="number" name="cnum" placeholder="9999999999" />
                                </div>


                            </div>

                            <div className=" row p-1 ">

                                <div className="col text-start my-3 ps-5 ">
                                    <label for="rmail"> E-Mail </label>
                                </div>
                                <div className="col">
                                    <input type="email" name="rmail" placeholder="rtsoft@gmail.com" />

                                </div>

                            </div>


                            <div className=" row p-1 ">

                                <div className="col text-start my-3 ps-5 ">
                                    <label for="rmail"> Email Subject </label>
                                </div>
                                <div className="col">
                                    <input type="text" name="rmail" placeholder="Subject" />

                                </div>

                            </div>




                            <div className=" row p-1 ">

                                <div className="col text-start my-3 ps-5 ">
                                    <label for="add"> Your Massage </label>

                                </div>
                                <div className="col">
                                    <input type="Text " name="add" placeholder="Write Something" />

                                </div>

                            </div>



                            <div className=" row p-1 ">

                                <div className="col pt-2 ">

                                    {/* <input type="button" value="Submit" className=" bg-info text-dark p-1" /> */}

                                    <button type='submit' className='bg-info text-dark p-2 border-0 rounded-pill'>Submit</button>

                                </div>

                            </div>







                        </div>




                        <hr />

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Contact;