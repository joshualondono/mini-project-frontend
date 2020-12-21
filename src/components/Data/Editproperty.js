import React, { Fragment, useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { useHistory, Link } from "react-router-dom";

export const Editproperty = (route) => {
    let history = useHistory();
    const { properties, editProperty } = useContext(GlobalContext);
    const [selectedUser, setSeletedUser] = useState({ id: null, name: '', arv: '', location: '' });
    const currentUserId = route.match.params.id;

    useEffect(() => {
        const propertyId = currentUserId;
        const selectedUser = properties.find(emp => emp.id === parseInt(propertyId));
        setSeletedUser(selectedUser);
        // eslint-disable-next-line
    }, []);

    const onSubmit = e => {
        e.preventDefault();
        editProperty(selectedUser);
        history.push('/');
    }

    const handleOnChange = (userKey, value) => setSeletedUser({ ...selectedUser, [userKey]: value })

    if (!selectedUser || !selectedUser.id) {
        return <div>sdf</div>
    }

    return (
        <Fragment>
            <div className="w-full max-w-sm container mt-20 mx-auto">
                <form onSubmit={onSubmit}>
                    <div className="w-full mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                            Property Details
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedUser.name} 
                            onChange={(e) => handleOnChange('name', e.target.value)} 
                            type="text" 
                            placeholder="Enter property type" 
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedUser.location} 
                            onChange={(e) => handleOnChange('location', e.target.value)} 
                            type="text" 
                            placeholder="Enter location of property" 
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="location">
                            Contact Fee
                        </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedUser.fee} 
                            onChange={(e) => handleOnChange('fee', e.target.value)} 
                            type="text" 
                            placeholder="Enter fee to view details" 
                        />
                    </div>
                    <div className="w-full  mb-5">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="arv">
                            Due Diligence
                      </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:shadow-outline" 
                            value={selectedUser.arv} 
                            onChange={(e) => handleOnChange('arv', e.target.value)} 
                            type="text" 
                            placeholder="Enter a link to your due diligence" 
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="block mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:text-gray-600 focus:shadow-outline">
                           Save Property
                        </button>
                    </div>
                    <div className="text-center mt-4 text-gray-500"><Link to='/'>Cancel</Link></div>
                </form>
            </div>
        </Fragment>
    )
}