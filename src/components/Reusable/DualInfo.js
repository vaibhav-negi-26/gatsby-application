import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function DualInfo({heading}) {
    return (
        <section className="bg-theme my-3 py-4">
            <div className="container">
            <Heading title={heading} />
                <div className="row">
                    <div className="col-md-8 ">
                        <p className="lead text-white text-justify mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam aspernatur quia facilis ex veniam magni voluptatibus soluta voluptates repellendus porro hic distinctio odio ipsum ad, possimus libero tempore velit et accusantium a? Quos necessitatibus possimus consequuntur, nostrum assumenda pariatur officiis atque laudantium voluptas, iusto velit quia minus? Incidunt voluptates totam iusto nemo repudiandae, quos libero, fuga eaque eum ipsa tenetur. Aperiam temporibus ullam vero cumque omnis dolorum deleniti autem nulla natus? Explicabo quos itaque unde minus ad! Cum aliquam quaerat necessitatibus quis magnam, esse sed, nihil unde, fuga incidunt delectus placeat voluptates doloremque voluptate! Ratione corrupti praesentium officiis quaerat quis nam, modi porro suscipit, deserunt ipsa repellat illo, a explicabo cupiditate maiores. Id eaque facere voluptate laudantium explicabo perferendis? Vitae officiis ad, voluptate, illo aliquid, commodi qui modi neque deleniti eos numquam eaque iusto delectus ea quaerat odit. Aspernatur odio, quis exercitationem esse fugiat doloribus eum debitis. Consequatur quod fuga possimus doloribus quas quibusdam minus ipsa corrupti ad, suscipit perferendis repudiandae quos perspiciatis nam atque cum sequi cupiditate dicta! Vero repellendus accusantium quis deserunt, natus aliquid cum quam minima exercitationem.
                        </p>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card bg-dark">
                            <img className="card-img-top" src="https://images.pexels.com/photos/2756845/pexels-photo-2756845.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Image_Goes_here" />
                                <div className="card-body">
                                    <h5 className="card-title text-white">Just Click here</h5>
                                    <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, deserunt at error numquam unde fugiat provident excepturi modi voluptate sint.</p>
                                    <Link to="/about">
                                        <button className="btn btn-warning btn-block">
                                            {heading}
                                        </button>
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
