import React from 'react'
import RequestAQuote from '../RequestAQuote/requestAQuote'


const homeSection1 = () => {
    return (
        <div className="row" style={{
            margin: '0'
        }}>
            <div className='col-md-6' style={{
                margin: '0',
                background: '#006738'
            }}>
                <RequestAQuote />
            </div>

            <div className="col-md-6 text-center bg-light text-dark p-4" style={{
            }}>
                <h1>Orlando Landscaping & Maintenance</h1>
                <p>DS Landscaping & Maintenance, Inc. has been serving Central Florida since 1991.
                    Providing complete residential and commercial landscaping solutions for property
                    owners and managers. Customizing design and installation to create immaculate properties.
                     Contact us today for a free quote on your next landscaping project!</p>

            </div>


        </div>
    )
}

export default homeSection1
