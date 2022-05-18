import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (

        <>
            <section className="py-5 section-1">
                <div className="container py-5 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2> I'M <b>K HUNNURJI RAO</b></h2>
                            <p className="text-muted lead">Welcome to this website, here you can find projects related to Machine Learning, Deep Learning & Natural Language Processing. Not only in AI, you can also find projects related to web technologies such as Bootstrap, React JS, MongoDB, python Flask. Please have a look at the projects <span style={{ color: "black" }}>you are interested in</span></p>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container mt-4 d-flex justify-content-center">
                <div class="row g-0">

                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <NavLink to="/mlproj" className="div-navlink">

                                <div class="first bg-white p-4 text-center"><img className='intro-img' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-machine-learning-robotics-flaticons-lineal-color-flat-icons.png" alt='img' />
                                    <h5>Machine Learning</h5>
                                    <p class="line">Projects related to Machine Learning Algorithms, Deep Learning and NLP</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div class="col-md-4 border-right">
                        <div class="cards">
                            <NavLink to="/webproj" className="div-navlink">
                                <div class=" second bg-white p-4 text-center"> <img className='intro-img' src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-web-development-internet-marketing-flaticons-lineal-color-flat-icons-3.png" alt='img' />
                                    <h5>Web/App Development</h5>
                                    <p class="line">Projects related to HTML, CSS, BootStrap, React JS, MongoDB, Python Flask and React Native</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="cards">
                            <NavLink to="/otherproj" className="div-navlink">

                                <div class=" third bg-white p-4 text-center"> <img className='intro-img' src="https://img.icons8.com/external-smashingstocks-hand-drawn-black-smashing-stocks/344/external-ai-security-cyber-attack-hacking-smashingstocks-hand-drawn-black-smashing-stocks-2.png" alt='img' />
                                    <h5>Other Python Projects</h5>
                                    <p class="line">Projects related python, web scrapping, etc</p>
                                </div>

                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-5 section-1">
                <div className="container py-5 text-center">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <p className=" lead" style={{ color: "black" }}>If you didn't find the projects you are looking for! Please contacts us.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home