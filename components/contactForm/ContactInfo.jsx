import React from 'react';


const ContactInfo = () => {
  return (
    <div className="w-full border-none">
    <div className="p-0">
      <div
        className="flex flex-col md:flex-row  items-start gap-2 justify-center bg-cover bg-center p-4 md:p-16 lg:p-16 min-h-[400px]"
        style={{
          backgroundImage: `url('https://s3-alpha-sig.figma.com/img/3fc9/7f0a/aa7b6b782de34d7a1b1ddadef14335a2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i3AH3cHrCpQknESI7zqhJN3CE7cu5t~BHGWgz7iPERygqRHXBUMKlQ1PePRHL6dBjT~nmkp4wtjdMs7Gd3qQUqntDRhJg7A~-L5YDz5ev-Qpknl-QFFE3Th12taU7o2r0voiRs9MKqsNCUXcxkXItld80bK5B7fA5Z88Nq9YSd~hLZvmnQIaBW7gjzWw0nat46zga7qtf0sqSfDbRDji5FNkrh4bmhznZ8I9XWD7BZuSPCYHHdXFWIALm3CERWHbZObBaDUg5n9KbZqvEX0S6n20HLVJ1kM9RjMlb0Bav-dU4YWMI~Pf8kzFDgkFseB8NrTfOPIaPJizNbwsFUeQLg__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Header Section */}
        <div className="flex flex-col  mx-auto md:mx-0 lg:mx-0    md:gap-8 text-center md:text-left md:w-1/3 mb-8 md:mb-0">
          <span className="text-gray-700 ">Contact Info</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            We are always <br /> happy to assist you
          </h2>
        </div>

        {/* Contact Information Container */}
        <div className="flex flex-col   md:flex-row gap-8 md:gap-16 w-full mt-0 md:mt-6 lg:mt-8 md:w-2/5">
          {/* Email Section */}
          <div className="flex flex-col    items-center md:items-start flex-1 space-y-4">
            <h3 className="text-lg   font-semibold text-gray-900">Email Address</h3>
            <h3 className="text-lg border-b-4  w-7 h-[0.1rem] border-black font-semibold text-gray-900">&nbsp;</h3>
            <div className="flex  items-center gap-2">
             
              <a href="mailto:Support@RMax.com" className="text-gray-900 font-semibold hover:text-gray-600 transition-colors">
                Support@RMax.com
              </a>
            </div>
            <div className="flex  items-start gap-2">
              
              <div className="text-gray-900">
                <p>Assistance hours:</p>
                <p>Monday - Friday 6 am to 8 pm</p>
                <p className='hidden lg:block md:block'>EST</p>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col  items-center md:items-start flex-1 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Number</h3>
            <h3 className="text-lg border-b-4 w-7 h-[0.1rem] border-black font-semibold text-gray-900">&nbsp;</h3>
            <div className="flex items-center gap-2">
             
              <a href="tel:+91-8657491236" className="text-gray-900 font-semibold hover:text-gray-600 transition-colors">
                +91-8657491236
              </a>
            </div>
            <div className="flex items-start gap-2">
           
              <div className="text-gray-900">
                <p>Assistance hours:</p>
                <p>Monday - Friday 6 am to 8 pm</p>
                <p className='hidden lg:block md:block'>EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactInfo