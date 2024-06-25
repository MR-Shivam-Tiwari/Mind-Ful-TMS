import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sample2() {
  const navigate = useNavigate();
  return (
    <div>
      <div class="p-4 max-w-md mx-auto">
        <div class="flex items-center mb-4">
          <div className=''>
            <div className='' onClick={() => navigate('/')}>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              // className="w-6 h-6"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
          </div>

        </div>
        <h1 class="text-2xl font-bold mb-4 text-center">TMS Treatment Services</h1>
        <p class="text-zinc-700 mb-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p class="text-zinc-700 mb-4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="space-y-4 mb-4">
          <button class="w-full bg-zinc-200 text-zinc-800 p-5 rounded-lg flex justify-between items-center">
            TMS FOR DEPRESSION
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
          <button class="w-full bg-zinc-200 text-zinc-800 p-5 rounded-lg flex justify-between items-center">
            TMS FOR OCD
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
          <button class="w-full bg-zinc-200 text-zinc-800 p-5 rounded-lg flex justify-between items-center">
            TMS FOR ANXIETY
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
          <button class="w-full bg-zinc-200 text-zinc-800 p-5 rounded-lg flex justify-between items-center">
            TMS FOR MOOD DISORDER
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
            </svg>
          </button>
        </div>
        <div className='flex justify-center'>

          <button class=" bg-zinc-200 text-zinc-800 p-3 px-5 rounded-lg" onClick={()=> navigate('/contact')}>CONTACT US</button>
        </div>

      </div>
    </div>
  )
}

export default Sample2
