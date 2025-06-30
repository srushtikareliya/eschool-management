import React from 'react'

function CommonAuthLayout({children}) {
    return (
        <>
            <div class="container-xxl">
                <div class="row vh-100 d-flex justify-content-center">
                    <div class="col-12 align-self-center">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-4 mx-auto">
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