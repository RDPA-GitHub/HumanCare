import React from 'react'

function Testimonials() {
    return (
        <section>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center ">
                        <h3 className="mb-4 display-6">Testimonials</h3>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0 lead mb-10">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
                            amet numquam iure provident voluptate esse quasi, veritatis totam
                            voluptas nostrum quisquam eum porro a pariatur veniam.
                        </p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="card testimonial-card">
                            <div className="card-up" style={{ backgroundColor: "#64FFDA" }} />
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="mb-4">Maria Smantha</h4>
                                <p>Doctor</p>
                                <hr />
                                <p className="dark-grey-text mt-4">
                                    <i className="fas fa-quote-left pe-2" />
                                    Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing
                                    elit.
                                </p>
                                <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0">
                        <div className="card testimonial-card">
                            <div className="card-up" style={{ backgroundColor: "#64FFDA" }} />
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="mb-4">Lisa Cudrow</h4>
                                <p>Patient</p>
                                <hr />
                                <p className="dark-grey-text mt-4">
                                    <i className="fas fa-quote-left pe-2" />
                                    Neque cupiditate assumenda in maiores repudi mollitia architecto.
                                </p>
                                <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-0">
                        <div className="card testimonial-card">
                            <div className="card-up" style={{ backgroundColor: "#64FFDA" }} />
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="mb-4">John Smith</h4>
                                <p>Patient</p>
                                <hr />
                                <p className="dark-grey-text mt-4">
                                    <i className="fas fa-quote-left pe-2" />
                                    Delectus impedit saepe officiis ab aliquam repellat rem unde
                                    ducimus.
                                </p>
                                
                                <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="fas fa-star fa-sm"></i></li>
                                    <li><i class="far fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </section>
        
        

    )
}

export default Testimonials