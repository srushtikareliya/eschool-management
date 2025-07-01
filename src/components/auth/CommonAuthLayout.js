import React from 'react'

function CommonAuthLayout({children}) {
    return (
        <>
            <div className="container-xxl">
                <div className="row vh-100 d-flex justify-content-center">
                    <div className="col-12 align-self-center">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4 mx-auto">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommonAuthLayout