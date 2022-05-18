import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import ScrollButton from '../utils/Scrollbutton';
import { Content, Heading } from '../utils/Styles';

// import proj1 from '../Images/proj1.jpg'

import abstract from './abstract'

const MLProj = () => {

    const titleHeadings = abstract.map(p => {
        return (
            <>
                <li className='title-list' key={p.id}><a href={'#' + p.id} className='a-link'>{p.title}</a></li>

            </>
        )
    })

    const projectAbstract = abstract.map(p => {
        return (
            <>

                <li className='title-list' key={p.id}>
                    <h4 id={p.id} key={p.id}> {p.title}</h4>
                    <br />
                    <p>{p.description}</p>
                    <br />
                    {p.imageSrc &&
                        <img src={p.imageSrc} className="img-fluid mx-auto" alt="img" />

                    }
                    <br />
                    <br />
                </li>
            </>
        )
    })



    return (
        <>
            <Fragment>
                <div class="container" id='#container'>
                    <div class="row">
                        <div class="col">
                            <h1>Machine Learning Projects</h1>
                            <ol class="list-group ">
                                {titleHeadings}
                            </ol>
                        </div>
                    </div>
                    <br />
                    <br />

                    <div className="row">
                        <div class="col">
                            <ol class="list-group">
                                <br />
                                {projectAbstract}
                            </ol>
                        </div>
                    </div>
                </div>
                <Content />
                <ScrollButton />
            </Fragment>
        </>
    )
}

export default MLProj

