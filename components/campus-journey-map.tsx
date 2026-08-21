'use client'

import { useId } from 'react'

const locations = {
  gate: { x: 15, y: 69, number: '1', label: 'Main Gate', color: '#16a34a' },
  mca: { x: 50, y: 35, number: '2', label: 'MCA Block', color: '#4f46e5' },
  cotton: { x: 82, y: 63, number: '2', label: 'Cotton Bhavan', color: '#d97706' },
}

export function CampusJourneyMap() {
  const patternId = useId().replace(/:/g, '')
  return (
    <div className="illustrated-campus-map">
      <svg viewBox="0 0 1000 560" role="img" aria-labelledby="campus-map-title campus-map-description" preserveAspectRatio="xMidYMid meet">
        <title id="campus-map-title">Campus journey map</title>
        <desc id="campus-map-description">Illustrated route from the Main Gate to MCA Block and Cotton Bhavan.</desc>
        <defs>
          <pattern id={patternId} width="36" height="36" patternUnits="userSpaceOnUse"><path d="M 36 0 L 0 0 0 36" fill="none" stroke="#dbe8e7" strokeWidth="1" /></pattern>
        </defs>
        <rect width="1000" height="560" fill="#edf6f2" />
        <rect x="24" y="24" width="952" height="512" rx="28" fill={`url(#${patternId})`} />
        <path d="M 70 475 C 220 425, 290 315, 455 235 S 690 230, 855 350" fill="none" stroke="#c7d9d5" strokeWidth="42" strokeLinecap="round" />
        <path d="M 70 475 C 220 425, 290 315, 455 235 S 690 230, 855 350" fill="none" stroke="#fff" strokeWidth="30" strokeLinecap="round" /><path d="M 70 475 C 220 425, 290 315, 455 235 S 690 230, 855 350" fill="none" stroke="#4f46e5" strokeWidth="4" strokeDasharray="12 12" strokeLinecap="round" />
        <path d="M 150 382 C 230 360, 330 420, 410 462 M 590 128 C 650 205, 710 310, 800 390" fill="none" stroke="#d5e3e0" strokeWidth="18" strokeLinecap="round" />
        <rect x="356" y="102" width="238" height="112" rx="14" fill="#fff" stroke="#4f46e5" strokeWidth="3" />
        <path d="M 356 132 h238" stroke="#e0e7ff" strokeWidth="16" />
        <text x="475" y="164" textAnchor="middle" fill="#111827" fontSize="24" fontWeight="800">MCA BLOCK</text>
        <text x="475" y="191" textAnchor="middle" fill="#6b7280" fontSize="16">Ratan Tata Bhavan · Room 104</text>
        <rect x="734" y="384" width="238" height="96" rx="14" fill="#fff" stroke="#d97706" strokeWidth="3" />
        <text x="853" y="424" textAnchor="middle" fill="#111827" fontSize="23" fontWeight="800">COTTON BHAVAN</text>
        <text x="853" y="451" textAnchor="middle" fill="#6b7280" fontSize="16">Cash counter · ₹1,800</text>
        <path d="M 60 500 h110" stroke="#0c4f68" strokeWidth="8" strokeLinecap="round" /><text x="115" y="490" textAnchor="middle" fill="#0c4f68" fontSize="15" fontWeight="700">MAIN GATE</text>
        {[locations.gate, locations.mca, locations.cotton].map((location) => <g key={location.label} transform={`translate(${location.x * 10} ${location.y * 5.6})`}><circle r="25" fill={location.color} stroke="#fff" strokeWidth="7" /><text y="9" textAnchor="middle" fill="#fff" fontSize="24" fontWeight="900">{location.number}</text><text x="35" y="6" fill="#111827" fontSize="18" fontWeight="800">{location.label}</text></g>)}
      </svg>
      <p className="map-caption">Illustrative map — not to scale</p>
    </div>
  )
}

export { locations }
