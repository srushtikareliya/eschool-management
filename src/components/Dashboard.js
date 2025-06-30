import React from 'react'
import {Link} from 'react-router-dom'

function Dashboard() {
    return (
        <>
            <div class="page-wrapper">
                <div class="page-content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-title-box d-md-flex justify-content-md-between align-items-center">
                                    <h4 class="page-title">Dashboard</h4>
                                    <div class="">
                                        <ol class="breadcrumb mb-0">
                                            <li class="breadcrumb-item"><Link to="/">Mount</Link></li>
                                            <li class="breadcrumb-item active">Dashboard</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard