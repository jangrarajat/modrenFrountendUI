import React from 'react'

function Contect() {
    return (
        <div className='w-full h-[80vh] my-10 flex flex-col items-center justify-center  p-5'>
            <h1 className='text-center text-black font-serif text-3xl'>Contect </h1>
            <div className='w-full md:w-[50%] h-full flex flex-col'>
                <label htmlFor="name" className='text-2xl'>Full Name</label>
                <input type="text" name="name" id="name" required
                    className=' border border-gray-500 p-3'
                />
                <label htmlFor="email" className='text-2xl mt-3'>Email</label>
                <input type="email" name="email" id="email" required
                    className=' border border-gray-500 p-3'
                />

                <label htmlFor="message" className='text-2xl mt-3 mb-1'>Message</label>
                <textarea type="text" name="message" id="message" required
                    placeholder="Apna message yahan likhein..."
                    class="w-full h-48 border border-gray-500 p-3 block focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>


                <button className='my-5 w-full h-12 bg-black text-white'>
                     Submit
                </button>
            </div>

        </div>
    )
}

export default Contect
