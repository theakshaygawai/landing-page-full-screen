import React from 'react'

const LandingPage = () => {
    return (
        <React.Fragment>
            {/* <h2>this is LandingPage comp</h2> */}
            <div className="landing-page">
                <div className="wrapper">
                    <div className="d-flex flex-column text-center align-item-center justify-content-center h-100">
                        <h3 className="display-3" >Welcome to hotel</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ab, officia earum facilis corrupti enim laudantium voluptatum molestiae voluptates provident, ex in iusto aliquid, quas sapiente fugit ipsum illum
                            placeat.</p>
                        <div>
                            <button className="btn btn-sm btn-primary m-2" >Login </button>
                            <button className="btn btn-sm btn-secondary" >Logout</button>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
};

export default LandingPage;