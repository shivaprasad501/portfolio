import Footer from '@/components/footer'
import Navbar from '@/components/ui/navbar'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex flex-col flex-1 justify-center items-center text-center p-4">
        <h1 className="sm:text-6xl text-2xl font-extrabold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-6">Sorry, the page you’re looking for doesn’t exist.</p>
        <Link
          href="/"
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
        >
          Go Back Home
        </Link>
      </main>
      
      <Footer />
    </div>
  )
}

export default NotFound
