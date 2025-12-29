import React from 'react'

function Footer() {
    return (
        <div className='w-full h-fit p-5 flex flex-col'>
            <div className='w-full flex flex-col gap-10   md:flex-row items-center justify-center'>
                <div>
                    <h1 className='font-bold uppercase text-center'>Address.</h1>
                    <p className='text-center'><span className='font-bold'>USA:</span> 205 Spindle Rd Hicksville NY 11801</p>
                    <p className='text-center'><span className='font-bold'> Canada:</span> 63 Westowanis Dr, Etobicoke, ON</p>
                </div>
                <div>
                    <h1 className='font-bold uppercase text-center'>Contect info</h1>
                    <p className='text-center'><span className='font-bold'>Email::</span>Contact@modernmolecule.com</p>
                    <p className='text-center'><span className='font-bold'>Tel:</span>USA: +1 518-417-1023</p>
                </div>
            </div>


            <div className='w-full  gap-3 flex justify-center my-5 items-center flex-col md:flex-row'>

                <img src="https://static.wixstatic.com/media/dd1a7d_d81db8c2fcd244b5ae1c30e9b721f5ef~mv2.png/v1/fill/w_496,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/dd1a7d_d81db8c2fcd244b5ae1c30e9b721f5ef~mv2.png" alt=""
                    className='h-[20vh]'
                />

                <img src="https://static.wixstatic.com/media/dd1a7d_0b204e887a2f4036bc94bce2dd607df5~mv2.png/v1/fill/w_420,h_113,al_c,lg_1,q_85,enc_avif,quality_auto/AWS.png" alt=""
                    className='h-[10vh]'
                />

                <img src="https://static.wixstatic.com/media/dd1a7d_86dd912cf1d44c189c5a1283379e011e~mv2.webp/v1/fill/w_542,h_134,al_c,lg_1,q_80,enc_avif,quality_auto/dd1a7d_86dd912cf1d44c189c5a1283379e011e~mv2.webp" alt=""
                    className='h-[10vh]'
                />


            </div>
        </div>
    )
}

export default Footer
