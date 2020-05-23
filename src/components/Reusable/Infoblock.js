import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-3 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-justify text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi sunt numquam consequuntur, ipsa nostrum soluta cum enim ex! Eveniet earum veritatis, non cum repellat expedita officiis nihil obcaecati placeat tempore. Molestiae impedit tempore quis ipsam dolor incidunt magni iusto est aliquid corporis minus, numquam quod sed pariatur nulla tempora consequuntur.
                        </p>
                        <Link to="/about">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
