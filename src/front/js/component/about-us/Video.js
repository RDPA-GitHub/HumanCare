import React from 'react'

function Video() {
    return (
        <> <div className="py-4">
            <div className="container max-w-screen-xl">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 mb-10 mb-lg-0">
                        <h1 className="ls-tight font-bolder display-3 mb-5">
                            Build fast.
                            <br />
                            Deliver faster.
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
                    <div className="col-12 col-lg-6 ms-lg-auto">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/gSJd_J3W6NU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default Video