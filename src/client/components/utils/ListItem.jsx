import React from 'react';

export default function ListItem({ task }) {
    return (
      <div className="p-6 m-6 border-solid border-slate-400 shadow-xl ">

        <div className=" ">
            <div className='p-3 '>
                <h2 className="font-semibold text-slate-900 truncate pr-20">
                    <span className='px-1.5 ring-1 ring-slate-200 rounded bg-purple-300'>Personnel name:</span> {task.personnel_firstname} {" "} {task.personnel_othername}
                </h2>
                <h2 className="font-semibold text-slate-900 truncate pr-20">
                    <span className='px-1.5 ring-1 ring-slate-200 rounded bg-blue-300'>Customer name:</span>  {task.customer_firstname} {" "} {task.customer_lastname}
                </h2>
            </div>
          <dl className="mt-2 flex flex-wrap text-sm leading-6  font-medium">
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded items-center text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200  bg-blue-200">Status</dt>
                <dd className="">
                  {task.status}
                </dd>
            </div>
            <div className='m-2 px-1.5 ring-1 ring-slate-200  bg-blue-100 rounded text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Location</dt>
                <dd className="">
                  {task.location}
                </dd>
            </div>
            <div className="m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center ">
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Age</dt>
              <dd>{task.age}</dd>
            </div>
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Gender</dt>
              <dd className="">
                {task.gender}
              </dd>
            </div>
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Customer phone</dt>
              <dd className="flex items-center">
                {task.customer_phone}
              </dd>
            </div>

            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Splash page</dt>
                <dd className="">
                  {task.splash_page}
                </dd>
            </div>

          </dl>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium text-center">
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Mpesa</dt>
                <dd className="">
                  {task.mpesa}
                </dd>
            </div>
            <div className="m-2  px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center">
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Autoplay</dt>
              <dd>{task.autoplay}</dd>
            </div>
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Registration</dt>
              <dd className="">
                {task.registration}
              </dd>
            </div>
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Access code</dt>
              <dd className="flex items-center">
                {task.access_code}
              </dd>
            </div>
            <div className="m-2  px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center">
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Comments</dt>
              <dd>{task.comments}</dd>
            </div>

          </dl>

          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium text-center">
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Assigned</dt>
                <dd className="">
                  {task.assigned}
                </dd>
            </div>
            <div className="m-2  px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center">
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">inProgress</dt>
              <dd>{task.inProgress}</dd>
            </div>
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Completed</dt>
              <dd className="">
                {task.completed}
              </dd>
            </div>
            <div className='m-2 px-1.5 ring-1 ring-slate-200 bg-blue-100 rounded text-center'>
              <dt className="px-1.5 ring-1 ring-slate-200 bg-blue-200">Deferred</dt>
              <dd className="flex items-center">
                {task.deferred}
              </dd>
            </div>

          </dl>

        </div>
      </div>
    )
  }