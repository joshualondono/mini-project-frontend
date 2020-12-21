import React, { Fragment, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const Addproperty = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [arv, setArv] = useState('');
    const [fee, setFee] = useState('');
    const { addProperty, properties } = useContext(GlobalContext);
    let history = useHistory();

    const onSubmit = e => {
        e.preventDefault();
        const newProperty = {
            id: properties.length + (Math.random() * 10),
            name,
            location,
            fee,
            arv
        }
        addProperty(newProperty);
        history.push("/");

    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Property Type
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            type="text" 
                            placeholder="Enter property type" 
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={location} 
                            onChange={(e) => setLocation(e.target.value)} 
                            type="text" 
                            placeholder="Enter location" 
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Repair Costs
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={fee} 
                            onChange={(e) => setFee(e.target.value)} 
                            type="text" 
                            placeholder="Enter Rehab fees" 
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="arv">
                            After Repair Value
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600" 
                            value={arv} 
                            onChange={(e) => setArv(e.target.value)} 
                            type="text" 
                            placeholder="Enter property value after repairs" 
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Save Property
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}