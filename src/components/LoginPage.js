import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';

const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            navigate('/home')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return (
        <section class="vh-100" style={{ backgroundColor: "#2F394A" }}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10" >
                        <div class="card" style={{ borderRadius: "1rem;", backgroundColor: "#g6g6g6" }}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-block mx-auto my-auto p-3">
                                    <img src="brain.png"
                                        alt="login form" class="img-fluid " style={{ borderRadius: "1rem 0 0 1rem;" }} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5">

                                        <form onSubmit={handleSubmit}>

                                            <div class="d-flex align-items-center mb-5 pb-1">
                                                <span class="h1 fw-bold mb-0" style={{ color: '#2F394A' }}>İnme Merkezi HTS</span>
                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form2Example17" style={{ color: '#5F697A' }}>E-Posta Adresiniz</label>
                                                <input
                                                    type="email"
                                                    id="form2Example17"
                                                    class="form-control form-control-lg"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>

                                            <div class="form-outline mb-4">
                                                <label class="form-label" for="form2Example27" style={{ color: '#5F697A' }}>Şifreniz</label>
                                                <input
                                                    type="password"
                                                    id="form2Example27"
                                                    class="form-control form-control-lg"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>

                                            <div class="pt-1 mb-4">
                                                <button class="btn btn-dark btn-lg btn-block" style={{ width: '100%', backgroundColor: '#5F697A' }} type="submit">Giriş</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage
