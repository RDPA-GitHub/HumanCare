import React from 'react'

function BackgroundImage() {
    return (
<div className="py-5 mt-5">
            <div className="container max-w-screen-xl">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 ms-lg-auto">
                        <img src="https://picsum.photos/600/300?grayscale" className='img-fluid' alt="" />
                    </div>
                    <div className="col-12 col-lg-6 mb-10 mb-lg-0">
                        <h1 className="ls-tight font-bolder display-5 mb-5">
                        Empowering Your Health,
                            <br />
                            One Click at a Time.
                        </h1>
                        {/* Text */}
                        <p className="lead mb-10">
                            With an intuitive markup, powerful and lightning fast build tools,
                            Clever has everything you need to turn your ideas into incredible
                            products.
                        </p>
                        {/* Buttons */}
                        <div className="mx-n2">
                            <a href="#" type="button" class="btn btn-dark rounded-pill">
                                Inciar mi registro en HumanCare
                            </a>
                        </div>
                    </div>
                </div>
            </div>
</div>
    )
}

export default BackgroundImage