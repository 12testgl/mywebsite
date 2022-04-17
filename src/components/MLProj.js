import React from 'react'
import { NavLink } from 'react-router-dom'

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
                    <img src={p.imageSrc} className="img-fluid" alt="img" />
                    <br />
                    <br />
                </li>
            </>
        )
    })



    return (
        <>
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
        </>
    )
}

export default MLProj


// Sentiment analysis is a Natural Language Processing (NLP) technique used to determine whether data is positive,
//                                     negative or neutral. For example: “I am so happy today, good morning to
//                                     everyone”, is a general positive text. Basically, Sentiment Analysis is the task of
//                                     identifying whether the opinion expressed in a text is Positive or Negative. Natural language
//                                     processing (NLP) is a field of computer science, artificial intelligence, and linguistics concerned with
//                                     the interactions between computers and human (natural) languages.