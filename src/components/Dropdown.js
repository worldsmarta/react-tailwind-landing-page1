import React from 'react'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <div className={isOpen ? 'text-left pl-5 w-full items-center bg-black h-64 absolute top-20 right-0' : 'hidden'}
            onClick={toggle}>

            <ul className="text-white mt-10 uppercase">

                <li className="p-1">About</li>
                <li className="p-1">Careers</li>
                <li className="p-1">Events</li>
                <li className="p-1">Products</li>
                <li className="p-1">Support</li>
            </ul>
        </div>
    )
}

export default Dropdown
