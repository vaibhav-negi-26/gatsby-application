import React, { Component } from 'react'
import Img from 'gatsby-image'
import Header from '../Reusable/Heading'

export default class Coursecart extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            courses : props.courses.edges,
            mycourses : props.courses.edges
        }
    }

    render() {

        return (
            <section className="py-5">
                <div className="container">
                <Header title= "Courses" />
                    <div className="row">
                        {
                            this.state.mycourses.map(({node}) => {
                                return(
                                    <div
                                        key={node.id}
                                        className="col-md-6 d-flex mx-auto py-3"
                                    >
                                        <Img fixed={node.image.fixed} />
                                        <div className="flex-grow-1 px-3">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-0">{node.title}</h6>
                                                <h6 className="mb-0 text-success">{node.price}</h6>
                                            </div>
                                            <p className="text-muted">{node.description.description}</p>
                                            <button 
                                            className="btn btn-warning snipcart-add-item"
                                            data-item-id={node.id}
                                            data-item-price={node.price}
                                            data-item-url="https://www.google.co.in/"
                                            data-item-image={node.image.fixed.src}
                                            data-item-name={node.title}>
                                                Join Now
                                            </button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section >
        )
    }
}
