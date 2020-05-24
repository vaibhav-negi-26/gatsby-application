import React from 'react'
import Heading from '../Reusable/Heading'

export default function contact() {
    return (
        <section className="container py-3">
            <Heading title="Contact Us" />
            <div className="col-10 col-sm-8 mx-auto">
                <form action="https://formspree.io/xoqkevyq" method="post">
                    <div className="form-group">
                        <input type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <input type="number"
                            name="mobile"
                            id="mobile"
                            placeholder="Your Mobile"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <textarea type="text"
                            name="msg"
                            id="msg"
                            placeholder="Your Message"
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-block">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}
