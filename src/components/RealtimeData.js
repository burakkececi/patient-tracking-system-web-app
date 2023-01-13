import { onValue, ref, remove } from 'firebase/database'
import { database as db } from '../firebase/firebaseConfig'
import React, { Component } from 'react'
import { CSVLink } from 'react-csv'

export class RealtimeData extends Component {

    constructor() {
        super()
        this.state = {
            tableData: [],
            tableHeaders: [
                { label: 'Hasta', key: "patientBarcode" },
                { label: 'Kullanici', key: "userBarcode" },
                { label: 'Istasyon', key: "work" },
                { label: 'Tarih', key: "date" },
                { label: 'Saat', key: "time" },

            ],
            date: new Date(),
            userPassw : '2022erdemgurkas'
        }
    }

    componentDidMount() {
        const dbRef = ref(db, 'patients')

        onValue(dbRef, (snapshot) => {
            let records = []
            snapshot.forEach(patientSnapshot => {
                let patientBarcode = patientSnapshot.key
                patientSnapshot.forEach((userSnapshot) => {
                    let userBarcode = userSnapshot.key
                    userSnapshot.forEach((workSnapshot) => {
                        let work = workSnapshot.key
                        let data = workSnapshot.val()
                        records.push({
                            patientBarcode: patientBarcode,
                            userBarcode: userBarcode,
                            work: work,
                            date: data.date,
                            time: data.time
                        })
                    })
                })
            })
            this.setState({ tableData: records })
        })
    }

    render() {
        return (
            <>
                <CSVLink
                    data={this.state.tableData}
                    headers={this.state.tableHeaders}
                    filename={'InmeHTS_Rapor_' + `${this.state.date.getFullYear() + '' + (this.state.date.getMonth() + 1) + '' + (this.state.date.getDate() < 10 ? '0' : '') + '' + this.state.date.getDate() + '-' + this.state.date.getHours() + (this.state.date.getMinutes() < 10 ? '0' : '') + this.state.date.getMinutes()}` + ".csv"}
                    className='btn btn-success m-3'>
                    CSV Olarak İndir
                </CSVLink>
                <button
                    className='btn btn-danger'
                    onClick={() => {
                        let passw = prompt("Tüm veriler silinecektir. Onaylıyor musunuz?\nOnaylamak için şifrenizi giriniz.")
                        if (passw === this.state.userPassw) {
                            const dbRef = ref(db, 'patients')
                            remove(dbRef)
                        }else {
                            alert('Şifreniz yanlış!')
                        }
                    }}>
                    Veri Tabanını Sıfırla
                </button>
                <table className='table' id='table'>
                    <thead>
                        <tr>
                            <th className='col'>#</th>
                            <th className='col'>Hasta</th>
                            <th className='col'>Kullanici</th>
                            <th className='col'>Istasyon</th>
                            <th className='col'>Tarih</th>
                            <th className='col'>Saat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((rowd, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{rowd.patientBarcode}</td>
                                    <td>{rowd.userBarcode}</td>
                                    <td>{rowd.work}</td>
                                    <td>{rowd.date}</td>
                                    <td>{rowd.time}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default RealtimeData
