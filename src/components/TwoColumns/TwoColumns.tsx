import React, { useState, } from 'react'

import L, { DivIconOptions, LatLngExpression, } from 'leaflet'
import { MapContainer, Marker, TileLayer, } from 'react-leaflet'

import './_TwoColumns.scss'
import 'leaflet/dist/leaflet.css'
import TreeList from '../TreeList/TreeList'
import applications, { IApplication, } from '../applications'

import MapTooltip from './MapTooltip/MapTooltip'
import Tree from './Tree/Tree'

const iconOptions = {
  className: 'circle-marker',
  iconSize: [ 10, 10, ],
  iconAnchor: [ 0, 0, ],
  popupAnchor: [ 5, 0, ],
} as DivIconOptions

const successIcon: L.DivIcon = L.divIcon({
  ...iconOptions,
  className: 'circle-marker bg-green-700',
},)

const warningIcon: L.DivIcon = L.divIcon({
  ...iconOptions,
  className: 'circle-marker bg-yellow-400',
},)

const dangerIcon: L.DivIcon = L.divIcon({
  ...iconOptions,
  className: 'circle-marker bg-red-700',
},)

const mapCenter = [ 48.9456966, 38.4934809, ] as LatLngExpression

export default function TwoColumns () {
  const [ tree, setTree, ] = useState<IApplication|null>(null,)

  return (
    <div
      className="two-columns mt-8 mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-3">
      <div className="space-y-6 lg:col-start-1 lg:col-span-2">

        <MapContainer center={mapCenter} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {applications.map((record,) => {
            const latLng = [ record.applicant.lat, record.applicant.lng, ] as LatLngExpression
            const icon = record.applicant.condition === 'good'
              ? successIcon
              : record.applicant.condition === 'middle'
                ? warningIcon
                : dangerIcon

            return <Marker key={record.applicant.id} position={latLng} icon={icon} eventHandlers={{
              click: () => {
                setTree(record,)
              },
            }}>
              <MapTooltip tree={record}/>
            </Marker>
          },)}

        </MapContainer>

      </div>

      <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
        <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
          <TreeList onSelect={(tree,) => {
            setTree(tree,)
          }}/>
        </div>
      </section>

      {tree && <Tree tree={tree} show={true}/>}
    </div>
  )
}
