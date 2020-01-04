import React from 'react'
import BGImage from '../../Images/backyard2.jpg'

const header = () => {
    return (
        <div className="row" style={{
            margin: '0',
            paddingTop: '3.5rem'
        }}>
            <div id="headerImage" className="col-md-12 text-center bg-success"
                style={{
                    minHeight: '400px',
                    backgroundImage: `url(${BGImage})`,
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>
                {/* <div>
                    <img style={{
                        maxHeight: '200px',
                        margin: '1rem',
                        background: 'rgba(255, 255, 255, 0.7)',
                        padding: '1rem',
                        borderRadius: '4rem',
                        boxShadow: '0px 0px 10px 3px white'
                    }} src={Image} alt="DS Logo" />
                </div> */}

                {/* <button className='btn text-dark p-2 font-weight-bold'
                    style={{
                        background: '#E5C595',
                        boxShadow: '0px 0px 10px 5px #000'
                    }}>407-671-4800</button> */}
            </div>
            
        </div>
    )
}

export default header
