import React from 'react'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, } from '@heroicons/react/solid'

export type PaginationProps = {
  current?: number
}

export default function Pagination ({ current = 1, }: PaginationProps,) {
  return (
    <div className="pagination">
      <nav
        className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
        aria-label="Pagination"
      >
        <div className="hidden sm:block">
          <p className="text-sm text-gray-700">
                        Показано <span className="font-medium">1</span> - <span
              className="font-medium">10</span> из <span className="font-medium">20</span>
          </p>
        </div>
        <div className="flex-1 flex justify-between sm:justify-end">
          <a href="#"
            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <ArrowNarrowLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true"/>
          </a>
          <a href="#"
            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          >
            <ArrowNarrowRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true"/>
          </a>
        </div>
      </nav>
    </div>
  )
}
