import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
    return (
        <>
            <div className="container-main">
                <div className="d-lg-flex">
                    <div className="d-md-flex align-items-center mb-lg-0 mb-md-5">
                        <div className="col1 me-md-5 mb-md-0 mb-5">
                            <div className="card pb-4"> <span className="fab fa-envira mt-3"></span>
                                <p className="h4 pt-4">Garden Care</p>
                                <p className="p1 text-muted"> Seeking justice in the world is a sed significant emotional and investment when we follow this call. </p> <span className="fas fa-arrow-right"></span>
                            </div>
                        </div>
                        <div className="col2 me-md-5 mb-md-0 mb-5">
                            <div className="card pb-4"> <span className="fas fa-cut mt-3"></span>
                                <p className="h4 pt-4">Lawn mowing</p>
                                <p className="p1 text-muted"> Seeking justice in the world is a sed significant emotional and investment when we follow this call. </p> <span className="fas fa-arrow-right"></span>
                            </div>
                        </div>
                        <div className="col3 me-md-5 mb-md-0 mb-5">
                            <div className="card pb-4"> <span className="fas fa-people-carry mt-3"></span>
                                <p className="h4 pt-4">Lawn care</p>
                                <p className="p1 text-muted"> Seeking justice in the world is a sed significant emotional and investment when we follow this call. </p> <span className="fas fa-arrow-right"></span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col4">
                        <div className="content"> <span className="h-6">Services</span>
                            <p className=" h2 mb-4">Lawn Services</p>
                            <p className="text-muted mb-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your.</p>
                            <p><a href="#" className="btn btn-primary">Get a Quote</a></p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Main