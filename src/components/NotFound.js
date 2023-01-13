import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Sayfa bulunamadı.</p>
                <p className="lead">
                    Aradığınız sayfa burada değil :)
                  </p>
                <Link to="/" className="btn btn-primary">Anasayfaya Dön</Link>
            </div>
        </div>
  )
}

export default NotFound
