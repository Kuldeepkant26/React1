import React from 'react'
import Link from 'next/link';

function Header(props) {
    let { user = "Picasu" } = props;
    return (
        <div id='nav' className='flex justify-between p-4 align-bottom bg-slate-300'>
            <div id='logo' className=''>
                {user}
            </div>
            <div className='flex gap-3'>
                <Link href='/About'>About</Link>
                <Link href='/Contact'>Contact</Link>
                <p>Contact</p>
                <p>Services</p>
                <p>login</p>
            </div>
        </div>
    )
}

export default Header
