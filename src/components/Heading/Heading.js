import React from 'react';
import { Buttons } from '../Buttons/HeadingInput';


export const Heading = () => {
    return (

        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Property Listing 
          </h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">
             Your listings.
          </p>
          < Buttons />

         </div>

        </div>
        
    )
}
