"use client"

import NavBar from "@/app/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CrudTasks() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch('http://localhost:8090/api/tasks/')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className="">
            <NavBar></NavBar>
            <div className="flex text-right justify-items-right justify-content-right align-items-right">
                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                    <p className="">Sign in</p>
                </button>
            </div>
            <div className="rounded-lg relative overflow-x-auto px-6 py-6">
                <table className="rounded-lg w-full rrounded-lgounded text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="rounded-lg text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">Id</th>
                            <th scope="col" className="px-6 py-3">Name</th>
                            <th scope="col" className="px-6 py-3">Description</th>
                            <th scope="col" className="px-6 py-3">State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((list, index) => (

                            <tr className="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b odd:dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4">{list.id}</th>
                                <th scope="row" className="px-6 py-4">{list.title}</th>
                                <th scope="row" className="px-6 py-4">{list.description}</th>
                                <th scope="row" className="px-6 py-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="" checked={list.description} />
                                        <label className="form-check-label" for="">Completed </label>
                                    </div>
                                </th>
                            </tr>
                        ))}

                        {/* <tr className="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b odd:dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4">1</th>
                            <th scope="row" className="px-6 py-4">Task1</th>
                            <th scope="row" className="px-6 py-4">this task is a task Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nemo aperiam minima quaerat autem qui illum nesciunt neque id adipisci impedit, molestiae possimus eaque non culpa repellendus deleniti odio quo.</th>
                            <th scope="row" className="px-6 py-4">Completed</th>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 border-b odd:dark:bg-gray-900 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4">1</th>
                            <th scope="row" className="px-6 py-4">Task1</th>
                            <th scope="row" className="px-6 py-4">this task is a task Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit nemo aperiam minima quaerat autem qui illum nesciunt neque id adipisci impedit, molestiae possimus eaque non culpa repellendus deleniti odio quo.</th>
                            <th scope="row" className="px-6 py-4">Completed</th>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>

    )
}