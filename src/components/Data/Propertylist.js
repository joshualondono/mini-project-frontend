import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

export const Propertylist = () => {
    const { properties, removeProperty, editProperty } = useContext(GlobalContext);
    return (
        <Fragment>
            {properties.length > 0 ? <Fragment>
                {properties.map(property => (
                    <div className="flex items-center bg-gray-100 mb-10 shadow" key={property.id}>
                        <div className="flex-auto text-left px-4 py-2 m-2">
                            <p className="text-gray-900 leading-none">{property.name}</p>
                            <p className="text-gray-600">{property.arv}</p>
                            <p className="text-gray-600">{property.fee}</p>
                            <span className="inline-block text-sm font-semibold mt-1">{property.location}</span>
                        </div>
                        <div className="flex-auto text-right px-4 py-2 m-2">
                            <Link to={`/edit/${property.id}`}>
                                <button onClick={() => editProperty(property.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sticky" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v6.086a1.5 1.5 0 0 1-.44 1.06l-4.914 4.915a1.5 1.5 0 0 1-1.06.439H2.5A1.5 1.5 0 0 1 1 13.5v-11zM2.5 2a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h6.086a.5.5 0 0 0 .353-.146l4.915-4.915A.5.5 0 0 0 14 8.586V2.5a.5.5 0 0 0-.5-.5h-11z"/>
                                    <path fill-rule="evenodd" d="M9.5 9a.5.5 0 0 0-.5.5v5H8v-5A1.5 1.5 0 0 1 9.5 8h5v1h-5z"/>
                                </svg>
                                </button>
                            </Link>
                            <button onClick={() => removeProperty(property.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-folder-x" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M9.828 4H2.19a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91H9v1H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181L15.546 8H14.54l.265-2.91A1 1 0 0 0 13.81 4H9.828zm-2.95-1.707L7.587 3H2.19c-.24 0-.47.042-.684.12L1.5 2.98a1 1 0 0 1 1-.98h3.672a1 1 0 0 1 .707.293z"/>
                                    <path fill-rule="evenodd" d="M11.146 10.146a.5.5 0 0 1 .708 0L13 11.293l1.146-1.147a.5.5 0 0 1 .708.708L13.707 12l1.147 1.146a.5.5 0 0 1-.708.708L13 12.707l-1.146 1.147a.5.5 0 0 1-.708-.708L12.293 12l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                        </svg>                            
                        </button>
                        </div>
                    </div>
                ))}
            </Fragment> : <p className="text-center bg-gray-100 text-gray-500 py-5">No Listings</p>}
        </Fragment>
    )
}