import React, { Component } from 'react'
import Img from 'gatsby-image'
import Header from '../Reusable/Heading'

const getCaty = items => {
    let holdItem = items.map(item => {
        return item.node.category
    })
    let holdcategory = new Set(holdItem)
    let category = Array.from(holdcategory)
    category = ["all", ...category]
    return category
}

export default class Coursecart extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            courses : props.courses.edges,
            mycourses : props.courses.edges,
            mycategories : getCaty(props.courses.edges)
        }
    }

    catyClick = (category) => {
        let keetSafe = [...this.state.courses]
        if (category === 'all') {
            this.setState(() => {
                return {
                    mycourses : keetSafe
                }
            })
        } else {
            let holdMe = keetSafe.filter( ({node}) => {
                return node.category === category
            })
            this.setState(() => {
                return {
                    mycourses : holdMe
                }
            })
        }
    }

    render() {

        return (
            <section className="py-5">
                <div className="container">
                <Header title= "Courses" />
                    <div className="row">
                        <div className="col-10 mx-auto text-center">
                            {
                                this.state.mycategories.map((category , index) => {
                                    return(
                                        <button
                                            type="button"
                                            className="btn btn-outline-info px-3 m-3"
                                            key={index}
                                            onClick={() => {
                                                this.catyClick(category)
                                            }}
                                        >
                                            {category}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    </div>
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
                                            data-item-url="https://adoring-wilson-c59976.netlify.app/"
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
