import React from 'react';

function DontKnow() {
  return (
    <div>
      <div className='grid justify-center'>
        <div className='text-5xl my-2'>Don't Know How to Get Started?</div>
        <div className='grid justify-center'>Our team is ready to help.Schedule a call and we'll walk you through</div>
        <div className='grid justify-center'>the process and answer any questions you may have.</div>
      </div>

      <form className='lg:px-32'>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label for="first-name" className="block text-sm font-medium leading-6">First name</label>
            <div className="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" className="block w-full rounded-md p-1.5 shadow-sm ring-1 ring-gray-300  sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label for="last-name" className="block text-sm font-medium leading-6">Last name</label>
            <div className="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" className="block w-full rounded-md p-1.5 shadow-sm ring-1 ring-gray-300  sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label for="email" className="block text-sm font-medium leading-6">Email address</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" className="block w-full rounded-md p-1.5 shadow-sm ring-1 ring-gray-300  sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label for="phone" className="block text-sm font-medium leading-6">Phone Number</label>
            <div className="mt-2">
              <input id="phone" name="phone" type="phone" autocomplete="phone" className="block w-full rounded-md p-1.5 shadow-sm ring-1 ring-gray-300  sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div className="col-span-full">
            <label for="about" className="block text-sm font-medium leading-6">Please tell us about your project (optional)</label>
            <div className="mt-2">
              <textarea id="about" name="about" rows="3" className="block w-full rounded-md p-1.5 shadow-sm ring-1 ring-gray-300  sm:text-sm sm:leading-6"></textarea>
            </div>
          </div>
        </div>

        <div className='grid place-content-center mt-8'>
          <button className="border border-gray-300 rounded-md py-2 px-4" type="submit">Send request</button>
        </div>
      </form>
    </div>
  );
}

export default DontKnow;
