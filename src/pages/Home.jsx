import React from 'react'
import Navbar from '../components/Navbar'
import Contect from '../components/Contect'
import Footer from '../components/Footer'


function Home() {

 

  const services = [
    { servicesName: "Bid Management", servicesDietals: "Bid Management services & Capture Management with special emphasis in the Federal, State and local government sectors.", link: "#" },
    { servicesName: "Proposal Writing Staffing", servicesDietals: "We provide proposal writers, capture managers, Pricing Experts, Presales Experts, Employee Care Managers and more.", link: "#" },
    { servicesName: "Training & Internships", servicesDietals: "At Modern Molecule, we are committed to fostering the next generation of IT professionals through comprehensive training programs and internship opportunities. ", link: "#" },
    { servicesName: "Capture Management", servicesDietals: "At Modern Molecule, we specialize in helping businesses strategically position themselves to win government contracts through our comprehensive Capture Management services.", link: "#" },
    { servicesName: "Cloud Services", servicesDietals: "Our cloud solutions are meticulously designed to support the integration and utilization of agile, cloud-based technologies and systems.", link: "#" },
    { servicesName: "IT Services", servicesDietals: "We have experience of planning, implementation, management, and optimization of information technology systems.", link: "#" },

  ]




  return (
    <>
      <div className=" min-h-[200vh] bg-gray-100 pt-20" >
        <Navbar />

        {/* part 1 */}
        <div
          id='hero'
          className='w-full h-[100vh] mt-12 bg-cover flex flex-col '
          style={{ backgroundImage: "url('https://images.pexels.com/photos/5862400/pexels-photo-5862400.jpeg')" }}
        >

          <div className='w-full h-[40%] flex fl justify-center items-center'>
            <div className='text-white'>
              <h1
                className='  text-5xl font-extrabold'>
                Your Edge in Federal & Public Sector Wins
              </h1>
              <p>
                Guiding clients to success in business development and winning government contracts.
              </p>
            </div>
          </div>


          <div className='w-full h-[60%] flex justify-center items-center'>

            {/* Main Card Container */}
            <div className="relative max-w-2xl bg-[#e5e5e5] shadow-2xl border border-gray-300 p-8 md:p-12">

              {/* Top Rivets/Nuts (Corner circles) */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>

              {/* Top Black Line Decorative */}
              <div className="w-20 h-1 bg-black mb-6"></div>

              {/* Content Section */}
              <div className="text-gray-800 leading-relaxed text-lg font-serif">
                <p className='text-xs md:text-xl'>
                  <span className=" font-bold">Since 2013,</span> Modern Molecule has been at the forefront of offering specialized services in Bid Management, Capture Management, Proposal Writing, and Grant Development, targeting the Federal and State, Local, and Education (SLED) sectors. In addition, we provide a broad range of IT services, ensuring that our clients can secure contracts with government agencies effectively.
                </p>
              
              
              </div>

              {/* Bottom Rivets */}
              <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>
              <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>

             
            </div>

          </div>

        </div>
        {/* part 2 */}

        <div className='w-full min-h-fit my-20 grid md:grid-flow-row md:grid-cols-3 gap-4 md:p-44'>

          {
            services.map((s, index) => (
              <div className="  relative cursor-pointer hover:scale-105 duration-300    rounded  md:max-w-1xs h-3/3 bg-[#e5e5e5] shadow-2xl border border-gray-300 p-8 md:p-12"
                key={s.servicesName || index}
              >

                {/* Top Rivets/Nuts (Corner circles) */}
                <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>

                {/* Top Black Line Decorative */}
                <div className="w-20 h-1 bg-black mb-6"></div>

                {/* Content Section */}
                <div className="text-gray-800 leading-relaxed text-lg font-serif">
                  <p className='text-xs md:text-xl'>
                    <span className="font-bold">{s.servicesName}</span><br />
                    {s.servicesDietals}
                  </p>
                  <br />

                </div>
                 
                
                {/* Bottom Rivets */}
                <div className="absolute bottom-2 left-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 rounded-full bg-gray-400 border border-gray-600 shadow-inner"></div>


              </div>
            ))
          }


        </div>

        {/* part 3 */}

        <div className='w-full h-fit '>
          <div className='md:p-52 p-5 '>
            <h1 className='text-center text-3xl font-serif '>Workplace Culture</h1>
            <p className='font-serif text-justify text-xs md:text-xl mt-5'>We understand that workplace discrimination is an issue that can affect workplace productivity and employee health. Being an equal opportunity employer, we recruit, train, pay, and promote employees fairly and equally regardless of race, gender, ethnicity, age, or physical status. Equal Employment Opportunity is fair treatment in employment, promotion, training, and other personnel actions without regard to race, color, religion, sex (which includes gender, sexual harassment, and pregnancy), age, national origin, reprisal (for prior EEO activity), physical or mental disability, genetic information, status as a parent, and sexual orientation. Our equal employment opportunity policy is the pillar of a healthy and productive workplace. Everyone feels supported and valued to work productively so we are invested in treating everyone with respect and consideration.​ Our equal opportunity employer policy applies to all employees, job candidates, contractors, stakeholders, partners, and visitors. Equal opportunity is for everyone, but it mainly concerns members of underrepresented groups – they’re the ones who are traditionally disadvantaged in the workplace. We don’t guarantee employment or promotions for people in those groups, but we will treat them fairly and avoid discriminating against them either via conscious or unconscious biases.</p>
          </div>
        </div>

        {/* part 4 */}
        <div className='w-full h-[90vh] bg-cover'
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7647230/pexels-photo-7647230.jpeg')" }}

        >
          <div className='w-full h-[100%] flex fl justify-center items-center p-3'>
            <div className='text-white'>
              <div className='h-1 bg-gray-600 w-36 rounded-full '></div>
              <h1
                className='  text-5xl font-extrabold text-center'>
                Ready to find out more?
              </h1>
              <h1
                className='  text-2xl text-center font-bold'>
                Schedule a consultation at free of cost.
              </h1>
              {/* Action Buttons Section */}
              <div className=" flex justify-end items-stretch h-12 mt-5">
                {/* Plus Button */}
                <button className="bg-black text-white px-4 flex items-center justify-center hover:bg-[#5a2d2d] transition-colors">
                  <span className="text-xl">+</span>
                </button>

                {/* Find Out More Button */}
                <button className="bg-[#5a2d2d] text-white px-8 flex items-center justify-center text-sm font-semibold uppercase tracking-wider hover:bg-black transition-colors">
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contect */}

        <Contect />

         <Footer/>

      </div>
    </>
  )
}

export default Home
