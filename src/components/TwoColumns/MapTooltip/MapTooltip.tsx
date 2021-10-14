import React from 'react'
import { IApplication, } from '../../applications'
// import { MailIcon, PhoneIcon, } from '@heroicons/react/solid'
import { Tooltip, } from 'react-leaflet'

type Props = {
  tree: IApplication
}

export default function MapTooltip ({ tree, }: Props,) {
  return (
    <Tooltip
      className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
    >
      <div className="flex-1 flex flex-col p-8">
        <img className="w-16 h-16 flex-shrink-0 mx-auto rounded-full" src={tree.applicant.imageUrl} alt="" />
        <h3 className="mt-6 text-gray-900 text-sm font-medium">{tree.applicant.name}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Role</dt>
          <dd className="mt-3">
            <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
              {tree.applicant.type}
            </span>
          </dd>
        </dl>
      </div>
      {/* <div>*/}
      {/*  <div className="-mt-px flex divide-x divide-gray-200">*/}
      {/*    <div className="w-0 flex-1 flex">*/}
      {/*      <a*/}
      {/*        href={'mailto:sfsdsdf@dsfsdf.ru'}*/}
      {/*        className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"*/}
      {/*      >*/}
      {/*        <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />*/}
      {/*        <span className="ml-3">Email</span>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*    <div className="-ml-px w-0 flex-1 flex">*/}
      {/*      <a*/}
      {/*        href={'tel:445646'}*/}
      {/*        className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"*/}
      {/*      >*/}
      {/*        <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />*/}
      {/*        <span className="ml-3">Call</span>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/* </div>*/}

    </Tooltip>
  )
}
