import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Header = () => {

    const { logout } = UserAuth()
    
    return (
        <div className="px-3 py-2 text-white" style={{ backgroundColor: "#2F394A" }}>
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/home" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <img className="bi me-2" width="40" height="32" src='brain.png'></img>
                        <p className='h4'>İnme Merkezi HTS <small class="text-muted">Yönetici Paneli</small></p>
                    </a>

                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <Link to="/home" className="nav-link text-white">
                                <div className="bi d-block mx-auto mb-1" style={{ width: 24, height: 24 }}><i class="fas fa-book-open"></i></div>
                                Kayıt Defteri
                            </Link>
                        </li>
                        <li>
                            <Link to="/users" className="nav-link text-white">
                                <div className="bi d-block mx-auto mb-1" style={{ width: 24, height: 24 }}><i class="fas fa-users"></i></div>
                                Kullanıcılar
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link text-white" onClick={logout}>
                                <div className="bi d-block mx-auto mb-1" style={{ width: 24, height: 24 }}><i class="fas fa-sign-out-alt"></i></div>
                                Çıkış Yap
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
