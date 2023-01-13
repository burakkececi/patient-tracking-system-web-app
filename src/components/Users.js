import { onValue, ref, remove } from 'firebase/database'
import { database as db } from '../firebase/firebaseConfig'
import React, { Component } from 'react'
import Layout from './Layout'

export class Users extends Component {

    constructor() {
        super()
        this.state = {
            tableData: []
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'users')

        onValue(dbRef, (snapshot) => {
            let records = []
            snapshot.forEach(userSnapshot => {
                let userBarcode = userSnapshot.key
                let data = userSnapshot.val()
                records.push({
                    userBarcode: userBarcode,
                    name: data.name,
                    surname: data.surname,
                    phone: data.phone,
                    section: data.section
                })
            })
            this.setState({ tableData: records })
        })
    }

    deleteUser = (userId) => {
        return (remove(ref(db, `users/${userId}`)))
    }

    render() {
        return (
            <Layout>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='col'>#</th>
                            <th className='col'>Görevli Barkod</th>
                            <th className='col'>İsim</th>
                            <th className='col'>Soyisim</th>
                            <th className='col'>Telefon</th>
                            <th className='col'>Bölüm</th>
                            <th className='col'>Sil</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((rowd, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{rowd.userBarcode}</td>
                                    <td>{rowd.name}</td>
                                    <td>{rowd.surname}</td>
                                    <td>{rowd.phone}</td>
                                    <td>{rowd.section}</td>
                                    <td><button className='btn btn-danger' onClick={() => this.deleteUser(rowd.userBarcode)}>X</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Layout>
        )
    }
}

export default Users
