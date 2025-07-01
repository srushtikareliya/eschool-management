import {Link} from 'react-router-dom'

function StudentList() {
  return (
    <>
       <div className="page-wrapper">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
                                    <h4 className="mb-0 fw-semibold text-truncate">Students</h4>
                                    <div className="">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item"><Link to="/">Mount</Link></li>
                                            <li className="breadcrumb-item active">Students</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-group position-relative input-search">
                                <input className="form-control" name="search" type="text" id="searchStudent" 
                                placeholder="Search students"/>
                                <span className="input-serach-icon"><i className="fa fa-search"></i></span>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary"><i className="fa fa-plus me-1"></i>New Student</button>
                            </div>
                        </div>
                        {/* Table */}
                        <div className="table-repsonsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Roll No.</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Class</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>

                    </div>
                </div>
            </div> 
    </>
  )
}

export default StudentList