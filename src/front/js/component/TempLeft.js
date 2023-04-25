import React from 'react'
import Mask from "../../img/mask-img.svg";
import "../../styles/home.css";

function TempLeft() {
    return (
        <div className="container bg-white  d-flex align-items-center py-5">
            <div className="d-flex justify-content-center ">
                <img
                    src="https://picsum.photos/id/237/200/200"
                    className=" float-end col-3 forma1"
                    // style={{ WebkitMask: `url(${Mask}) no-repeat center / cover` }}
                    alt="..."
                />
                <div className="col-7 pt-5 ps-3 text-end mt-5" >
                    <h1 className='display-4'>Cuida tu salud con nosotros</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aut
                        officia doloribus fugit blanditiis. Deserunt mollitia, rem autem
                        corporis id minima laboriosam impedit tenetur repellendus ipsum ipsam
                        facilis ducimus doloribus?{" "}
                    </p>
                    <button type="button" class="btn btn-dark rounded-pill">Unirme a HumanCare</button>
                </div>
                
            </div>
        </div>

    )
}

export default TempLeft
