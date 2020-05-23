import React from 'react'

export default function Teamcard() {
    return (
        <div className="row my-5">
            <div className="col-md-10 mx-auto ">
            <div className="card-deck">
                <div className="card">
                    <img className="card-img-top" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="name 1"/>
                    <div className="card-body">
                    <h5 className="card-title">Selena Gomez</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolorum quas assumenda tempore atque laborum doloremque officia aut aperiam?</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="name 2" />
                    <div className="card-body">
                    <h5 className="card-title">Justin Bieber</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolorum quas assumenda tempore atque laborum doloremque officia aut aperiam?</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images.pexels.com/photos/3068709/pexels-photo-3068709.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="name 3" />
                    <div className="card-body">
                    <h5 className="card-title">Maroon 5</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus dolorum quas assumenda tempore atque laborum doloremque officia aut aperiam?</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
