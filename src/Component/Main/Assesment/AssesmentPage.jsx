import React from 'react'
import { useNavigate } from 'react-router-dom'

function AssesmentPage() {
    const navigate = useNavigate();
    return (
        <div>


            <div className=' container mx-auto p-5' onClick={() => navigate('/test')}>

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
            <div class="p-4 lg:container max-w-md mx-auto">
                <h2 class="font-semibold mb-4">Please select the answer that is applicable to you</h2>
                <div class="mb-6">
                    <p class="mb-2">1. Little interest or pleasure in doing things</p>
                    <div class="ml-4">
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question1" class="form-radio text-primary" />
                            <span class="ml-2">Not at all</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question1" class="form-radio text-primary" checked />
                            <span class="ml-2">Several Days</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question1" class="form-radio text-primary" />
                            <span class="ml-2">Atleast half of the days</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question1" class="form-radio text-primary" />
                            <span class="ml-2">Nearly Everyday</span>
                        </label>
                    </div>
                </div>
                <div class="mb-6">
                    <p class="mb-2">2. Feeling down, depressed, or hopeless</p>
                    <div class="ml-4">
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question2" class="form-radio text-primary" checked />
                            <span class="ml-2">Not at all</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question2" class="form-radio text-primary" />
                            <span class="ml-2">Several Days</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question2" class="form-radio text-primary" />
                            <span class="ml-2">Atleast half of the days</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question2" class="form-radio text-primary" />
                            <span class="ml-2">Nearly Everyday</span>
                        </label>
                    </div>
                </div>
                <div class="mb-6">
                    <p class="mb-2">3. Trouble falling or staying asleep, or sleeping too much</p>
                    <div class="ml-4">
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question3" class="form-radio text-primary" />
                            <span class="ml-2">Not at all</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question3" class="form-radio text-primary" />
                            <span class="ml-2">Several Days</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question3" class="form-radio text-primary" />
                            <span class="ml-2">Atleast half of the days</span>
                        </label>
                        <label class="flex items-center mb-2">
                            <input type="radio" name="question3" class="form-radio text-primary" checked />
                            <span class="ml-2">Nearly Everyday</span>
                        </label>
                    </div>
                </div>


            </div>
            <div className='flex justify-center'>

            <button onClick={() => navigate('/result')} class=" bg-gray-300 px-14 py-3 text-muted-foreground  rounded-lg hover:bg-muted/80 mb-6">SUBMIT</button>
            </div>

        </div>
    )
}

export default AssesmentPage
