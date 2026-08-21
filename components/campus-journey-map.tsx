'use client'

const embedUrl = 'https://www.google.com/maps?q=17.0879784,82.0669404&z=17&output=embed'

export function CampusJourneyMap() {
  return (
    <div className="embedded-campus-map">
      <iframe
        src={embedUrl}
        title="Aditya University campus map centered on Cotton Bhavan"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <p className="map-caption">Aditya University campus · Cotton Bhavan, Surampalem</p>
    </div>
  )
}
