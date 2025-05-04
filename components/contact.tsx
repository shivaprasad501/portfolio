'use client'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formdata,setformdata]=useState({
    name:'',
    email:'',
    message:''
  })
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    
emailjs.sendForm(
  process.env.NEXT_PUBLIC_SERVICE_ID!,
  process.env.NEXT_PUBLIC_TEMPLATE_ID!,
  e.target as HTMLFormElement,
  process.env.NEXT_PUBLIC_PUBLIC_KEY!
)
.then((result) => {
          alert('Message sent successfully!')
          setformdata({name:'',email:'',message:""})
        },
        (error) => {
          alert('An error occurred, please try again.')
        }
      )
  }

  return (
    <div id='Contact'>
        <div className='text-4xl text-center mt-30 font-bold'>   Let's connect</div>
     
    <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-10 sm:mx-30 gap-10 mt-20' >
        <div className='flex flex-col md:items-start justify-center items-center space-y-4'>
        <h1 className="text-2xl font-bold">Get in Touch</h1>
        <a 
          href="/Resume.pdf" 
          download 
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Download Resume
        </a>
        <p className="text-gray-400 px-10 sm:px-0 sm:pr-50">
          Feel free to download my resume and reach out via the contact form. I'm open to new opportunities and would love to connect!
        </p>
        </div>
        <form onSubmit={sendEmail}  className='max-w-md'>
            <div className=' flex flex-col sm:max-w-md '>
            <label htmlFor="name">Name</label>
            <input  className="border-1  w-full h-10 rounded-md border-gray-200 p-5 focus:outline-none focus:ring-1 focus:ring-blue-500" type="text" name='name' required value={formdata.name}
            onChange={(e)=>setformdata({...formdata,name:e.target.value})}  />
            </div>
            <div className=' flex flex-col max-w-md'>
            <label htmlFor="email">Email</label>
            <input className="border-1  w-full h-10 rounded-md border-gray-200 p-5 focus:outline-none focus:ring-1 focus:ring-blue-500" type="email" name='email'required 
            value={formdata.email}
            onChange={(e)=>setformdata({...formdata,email:e.target.value})}/>
            </div>
            <div className=' flex flex-col max-w-md'>
            <label htmlFor="message">Message</label>
            <textarea   className="border-1  w-full h-50 rounded-md border-gray-200 p-5 focus:outline-none focus:ring-1 focus:ring-blue-500" name='message'  required 
            value={formdata.message}
            onChange={(e)=>setformdata({...formdata,message:e.target.value})}/>
            </div>
            <button    type="submit" className="bg-blue-400 text-white  w-full h-10 rounded-md  mt-5 hover:bg-blue-500">Send Message</button>

        </form>
       
      
    </div>
    </div>
  )
}

export default Contact
