import React from "react";

export default function Pagination({
  tasksPerPage,
  totalTasks,
  pageUpdate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / tasksPerPage); i++) {
    pageNumbers.push(i);
  }

  let showing_from = totalTasks < tasksPerPage ? totalTasks : ((currentPage * tasksPerPage) - tasksPerPage)
  let showing_to = totalTasks < tasksPerPage ? totalTasks : (currentPage * tasksPerPage)

  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'>
            {" "} {showing_from} {" "}
          </span>
          to
          <span className='font-medium'> {showing_to} </span>
          of
          <span className='font-medium'> {totalTasks} </span>
          results
        </p>
      </div>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-wrap'>
          <li>
            {pageNumbers.map((page_number, i) => (
              <a
                onClick={() => {
                  pageUpdate(page_number);
                }}
                key={i}
                href='#'
                className={
                  currentPage === page_number
                    ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                }
              >
                {page_number}
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </div>
  );
}