import React from 'react'

const TempRight = () => {
    return (
        <div className="container bg-white  d-flex align-items-center py-5">
            <div className="d-flex justify-content-center a">

                <div className="col-7 pt-5 ps-3 text-start mt-5" >
                    <h1>Cuida tu salud con nosotros</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aut
                        officia doloribus fugit blanditiis. Deserunt mollitia, rem autem
                        corporis id minima laboriosam impedit tenetur repellendus ipsum ipsam
                        facilis ducimus doloribus?{" "}
                    </p>
                </div>
                <img
                    src="https://picsum.photos/id/237/200/200"
                    className="rounded-circle float-end col-3 "
                    // style={{ WebkitMask: `url(${Mask}) no-repeat center / cover` }}
                    alt="..."
                />
            </div>
        </div>
    )
}

export default TempRight