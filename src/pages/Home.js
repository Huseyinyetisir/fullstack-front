import React, {useEffect, useState} from "react"
import axios, {Axios} from "axios";


export default function Home(){

    const [CustomerDto,getAllCustomer]=useState([]);



    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/v1/customer");
        getAllCustomer(result.data);
    }



    return(
        <div className = 'container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                    <tr>
                        <th scope="col">Sıra</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Date of Birth</th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        CustomerDto.map((CustomerDto,index)=>(
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{CustomerDto.id}</td>
                                <td>{CustomerDto.name}</td>
                                <td>{CustomerDto.dateOfBirth}</td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>

            </div>
        </div>
    )
}