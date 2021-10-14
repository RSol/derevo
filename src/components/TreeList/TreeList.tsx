import React from 'react'
import { CheckCircleIcon, ChevronRightIcon, DocumentSearchIcon, GlobeAltIcon, ExclamationCircleIcon, MinusCircleIcon, } from '@heroicons/react/solid'
import './_TreeList.scss'
import Pagination from '../Pagination/Pagination'
import applications, { IApplication, } from '../applications'

type Props = {
  onSelect: (tree: IApplication) => void
}

export default function TreeList ({ onSelect, }: Props,) {
  return (
    <div className="tree-list">
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {applications.map((application,) => (
            <li key={application.applicant.id} onClick={(e,) => {
              onSelect(application,)
            }}>
              <a href={application.href} className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl}
                        alt=""/>
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-medium text-indigo-600 truncate">{application.applicant.name}</p>
                        <p className="mt-1 flex items-center text-xs text-gray-500">
                          <DocumentSearchIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                            aria-hidden="true"/>
                          <span className="truncate">#{application.applicant.id}</span>
                        </p>
                        <p className="mt-1 flex items-center text-xs text-gray-500">
                          <GlobeAltIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"/>
                          <span className="truncate">({application.applicant.lat.toFixed(5,)}, {application.applicant.lng.toFixed(5,)})</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-xs text-gray-900">
                            {application.applicant.type}
                          </p>
                          <p className="mt-2 flex items-center text-xs text-gray-500">
                            {application.applicant.condition === 'good' && <>
                              <CheckCircleIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                                aria-hidden="true"/>
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Хорошее
                              </p>
                            </>}
                            {application.applicant.condition === 'middle' && <>
                              <MinusCircleIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-yellow-400"
                                aria-hidden="true"/>
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                Удовлетворительное
                              </p>
                            </>}
                            {application.applicant.condition === 'bad' && <>
                              <ExclamationCircleIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-red-400"
                                aria-hidden="true"/>
                              <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                Плохое
                              </p>
                            </>}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true"/>
                  </div>
                </div>
              </a>
            </li>
          ),)}
        </ul>
      </div>

      <Pagination/>
    </div>
  )
}
