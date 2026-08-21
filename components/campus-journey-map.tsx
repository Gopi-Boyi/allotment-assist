'use client'

import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api'

const locations = {
  gate: { lat: 17.0878598, lng: 82.0667294, label: 'Main Gate' },
  mca: { lat: 17.087988, lng: 82.066392, label: 'MCA Block · Ratan Tata Bhavan' },
  cotton: { lat: 17.0879784, lng: 82.0669404, label: 'Cotton Bhavan · Cash Counter' },
}

const route = [locations.gate, locations.mca, locations.cotton]

const markerIcon = (color: string) => ({
  path: google.maps.SymbolPath.CIRCLE,
  fillColor: color,
  fillOpacity: 1,
  strokeColor: '#ffffff',
  strokeWeight: 3,
  scale: 10,
})

export function CampusJourneyMap() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    return <div className="map-fallback" role="status">Map unavailable. Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable the campus journey map.</div>
  }

  return (
    <LoadScript googleMapsApiKey={apiKey} loadingElement={<div className="map-fallback">Loading Google Maps…</div>}>
      <GoogleMap
        mapContainerClassName="campus-google-map"
        center={{ lat: 17.08793, lng: 82.06665 }}
        zoom={17}
        options={{
          mapTypeControl: true,
          streetViewControl: true,
          fullscreenControl: true,
          clickableIcons: true,
        }}
      >
        <Marker position={locations.gate} label="1" title={locations.gate.label} icon={markerIcon('#16a34a')} />
        <Marker position={locations.mca} label="2" title={locations.mca.label} icon={markerIcon('#4f46e5')} />
        <Marker position={locations.cotton} label="2" title={locations.cotton.label} icon={markerIcon('#d97706')} />
        <Polyline path={route} options={{ strokeColor: '#4f46e5', strokeOpacity: 0.8, strokeWeight: 3, icons: [{ icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 3 }, offset: '0', repeat: '12px' }] }} />
      </GoogleMap>
    </LoadScript>
  )
}

export { locations }
