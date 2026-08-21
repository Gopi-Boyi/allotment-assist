export function CampusJourneyMap() {
  return (
    <div className="static-campus-map" role="img" aria-label="Illustrated campus map showing the route from Main Gate to MCA Block and Cotton Bhavan">
      <svg viewBox="0 0 900 520" aria-hidden="true" focusable="false">
        <rect width="900" height="520" fill="#dcebdc" />
        <path d="M0 390C120 330 150 440 260 375S450 330 560 395s180 10 340-55V520H0Z" fill="#c8e0c8" />
        <path d="M0 80C130 35 190 130 315 92s180-55 270 5 185 22 315-12v100c-130 35-220 48-330 2s-180-20-280 18S115 170 0 205Z" fill="#e7f2e3" />
        <path d="M65 470 C210 440 275 315 430 245 S665 210 840 340" fill="none" stroke="#fff" strokeWidth="34" strokeLinecap="round" />
        <path d="M65 470 C210 440 275 315 430 245 S665 210 840 340" fill="none" stroke="#4f46e5" strokeWidth="4" strokeDasharray="12 12" strokeLinecap="round" />
        <g fill="#a9c9aa" stroke="#8db58f" strokeWidth="2"><rect x="110" y="120" width="155" height="72" rx="8" /><rect x="330" y="120" width="190" height="82" rx="8" /><rect x="610" y="270" width="170" height="80" rx="8" /><rect x="185" y="310" width="125" height="58" rx="8" /></g>
        <g fill="#365967" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700"><text x="148" y="162">MAIN QUAD</text><text x="365" y="166">MCA BLOCK</text><text x="645" y="316">COTTON BHAVAN</text><text x="210" y="345">LIBRARY</text></g>
        <g transform="translate(42 34)"><rect width="265" height="92" rx="7" fill="#fff" stroke="#d8e1df" /><text x="16" y="25" fill="#111827" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700">Ratan Tata Bhavan</text><text x="16" y="48" fill="#587078" fontFamily="Arial, sans-serif" fontSize="12">Aditya University, Surampalem</text><text x="16" y="70" fill="#d97706" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">★ 4.0 · 4 reviews</text><text x="210" y="70" fill="#4f46e5" fontFamily="Arial, sans-serif" fontSize="12">↗ Directions</text></g>
        <g fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" textAnchor="middle"><g transform="translate(65 470)"><circle r="19" fill="#16a34a" stroke="#fff" strokeWidth="4" /><text y="5" fill="#fff">1</text><text y="38" fill="#111827" textAnchor="start">Main Gate</text></g><g transform="translate(430 245)"><circle r="19" fill="#4f46e5" stroke="#fff" strokeWidth="4" /><text y="5" fill="#fff">2</text><text y="38" fill="#111827">MCA Block</text></g><g transform="translate(840 340)"><circle r="19" fill="#d97706" stroke="#fff" strokeWidth="4" /><text y="5" fill="#fff">3</text><text y="38" fill="#111827" textAnchor="end">Cotton Bhavan</text></g></g>
        <g transform="translate(26 466)"><rect width="300" height="39" rx="6" fill="#fff" fillOpacity=".95" /><text x="14" y="24" fill="#0c4f68" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700">Campus journey</text><text x="130" y="24" fill="#587078" fontFamily="Arial, sans-serif" fontSize="12">Main Gate → MCA Block → Cotton Bhavan</text></g>
        <g transform="translate(620 472)" fill="#587078" fontFamily="Arial, sans-serif" fontSize="10"><text x="0" y="0">Keyboard shortcuts</text><text x="118" y="0">Map data ©2026</text><text x="208" y="0">Terms</text><text x="250" y="0" fill="#4285f4" fontWeight="700">Google</text></g>
      </svg>
    </div>
  )
}
