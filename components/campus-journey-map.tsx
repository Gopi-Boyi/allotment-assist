'use client'

import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import type { DivIcon } from 'leaflet'

const locations = {
  gate: { lat: 17.0878598, lng: 82.0667294, label: 'Main Gate' },
  mca: { lat: 17.087988, lng: 82.066392, label: 'MCA Block · Ratan Tata Bhavan' },
  cotton: { lat: 17.0879784, lng: 82.0669404, label: 'Cotton Bhavan · Cash Counter' },
}

const route: [number, number][] = Object.values(locations).map(({ lat, lng }) => [lat, lng])
const center: [number, number] = [17.08793, 82.06665]

export function CampusJourneyMap() {
  const [icons, setIcons] = useState<Record<string, DivIcon> | null>(null)

  useEffect(() => {
    import('leaflet').then(({ default: L }) => {
      const makeIcon = (color: string, number: string) => L.divIcon({
        className: 'journey-marker-icon',
        html: `<span style="background:${color}">${number}</span>`,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -18],
      })
      setIcons({ gate: makeIcon('#16a34a', '1'), mca: makeIcon('#4f46e5', '2'), cotton: makeIcon('#d97706', '2') })
    })
  }, [])

  if (!icons) return <div className="map-fallback" role="status">Loading campus map…</div>

  return (
    <MapContainer className="campus-leaflet-map" center={center} zoom={17} scrollWheelZoom attributionControl>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">OpenStreetMap contributors</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[locations.gate.lat, locations.gate.lng]} icon={icons.gate}><Popup>{locations.gate.label}</Popup></Marker>
      <Marker position={[locations.mca.lat, locations.mca.lng]} icon={icons.mca}><Popup>{locations.mca.label}</Popup></Marker>
      <Marker position={[locations.cotton.lat, locations.cotton.lng]} icon={icons.cotton}><Popup>{locations.cotton.label}</Popup></Marker>
      <Polyline positions={route} pathOptions={{ color: '#4f46e5', weight: 4, opacity: 0.8, dashArray: '10 10' }} />
    </MapContainer>
  )
}

export { locations }
