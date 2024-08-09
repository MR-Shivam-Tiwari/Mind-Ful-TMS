import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const services = [
    {
        id: 1,
        title: 'Therapy Services',
        para:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
         Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
        avail:[
            {
                id: 1,
                title: 'THERAPY FOR C/B',
            },
            {
                id: 2,
                title: 'THERAPY FOR CHILDREN',
            },
            {
                id: 3,
                title: 'GENERAL THERAPY',
            },
            {
                id: 4,
                title: 'GENERAL THERAPY',
            }
        ]
    },
    {
        id: 2,
        title: 'TMS Treatment Services',
        para:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus`,
        avail:[
            {
                id: 1,
                title: 'TMS FOR DEPRESSION',
            },
            {
                id: 2,
                title: 'TMS FOR DEPRESSION',
            },
            {
                id: 3,
                title: 'TMS FOR ANXIETY',
            },
            {
                id: 4,
                title: 'TMS FOR MOOD DISORDER',
            }
        ]
    }
]


const Services = () => {

    const { title } = useParams();

    const service = services.find(service => service.title === title);
  const navigate = useNavigate();
  return (
    <>
        <div className='px-4'>
        <div className='flex p-6 items-center'>
                <div className='mr' onClick={() => navigate('/selfAssesment')}>
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
                <div>

                </div>
                <div>
                    <h1 class="text-2xl font-semibold ">{service?.title}</h1>

                </div>


            </div>
            <div>
                <div className='px-4'>
                    {service?.para.split('\n').map((para, index) => (
                        <p className='text-sm text-gray-600 mb-2 text-center' key={index}>{para}</p>
                    ))}
                </div>
            </div>
            <div className='px-4 py-3 '>
                {
                    service?.avail?.map(i=>(
                        <div className='flex justify-between items-center px-4 py-6 bg-primary-div rounded-lg mb-3'>
                            <h1 className='font-semibold  text-gray-700 '>{i.title}</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#EF6623" stroke="#EF6623" stroke-width="1" class="bi bi-chevron-right ml-auto" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                            </svg>
                        </div>
                        
                        
                    ))

                }
            </div>
            <div className='flex justify-center'>
                <button onClick={() => navigate('/contact')} className='bg-primary-orange w-[75%] py-3 text-white font-semibold rounded-lg'>
                CONTACT US
                </button>
            </div>
        </div>
    </>
  )
}

export default Services