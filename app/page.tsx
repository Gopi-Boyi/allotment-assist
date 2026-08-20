'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  FileCheck2,
  GraduationCap,
  MapPin,
  Menu,
  Navigation,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from 'lucide-react'

const documents = [
  { title: 'SSC / 10th Certificate', note: 'Original + 2 photocopies' },
  { title: 'Intermediate / 12th Certificate', note: 'Original + 2 photocopies' },
  { title: 'Degree / Provisional Certificate', note: 'Original + 2 photocopies' },
  { title: 'Transfer Certificate', note: 'Original document' },
  { title: 'Aadhaar Card', note: 'Original + 2 photocopies' },
  { title: 'Recent Passport Photos', note: '4 copies, colour photographs' },
]

const slots = ['09:30 AM', '10:30 AM', '11:30 AM', '02:00 PM', '03:00 PM']

export default function Page() {
  const [activePanel, setActivePanel] = useState<'home' | 'documents' | 'navigation'>('home')
  const [slotOpen, setSlotOpen] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('')
  const [booked, setBooked] = useState(false)
  const [bookingDetails, setBookingDetails] = useState({ name: '', mobile: '', email: '', address: '' })

  const openSlot = () => {
    setBooked(false)
    setSelectedSlot('')
    setSlotOpen(true)
  }

  const updateBookingDetails = (field: keyof typeof bookingDetails, value: string) => {
    setBookingDetails((current) => ({ ...current, [field]: value }))
  }

  const canConfirm = Object.values(bookingDetails).every(Boolean) && selectedSlot

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="topbar">
        <div className="shell topbar-inner">
          <span>Aditya University · MCA Admissions 2026</span>
          <div className="toplinks"><span>Student Helpdesk</span><span>Telugu / English</span></div>
        </div>
      </div>

      <header className="site-header shell">
        <div className="brand-wrap">
          <div className="brand-mark" aria-hidden="true"><GraduationCap size={29} strokeWidth={1.8} /></div>
          <div><p className="brand-kicker">ADITYA UNIVERSITY</p><h1>Allotment Assist</h1></div>
        </div>
        <div className="header-actions"><span className="help-chip"><Phone size={15} /> +91 98480 12345</span><button className="menu-btn" aria-label="Open menu"><Menu size={20} /></button></div>
      </header>

      <nav className="nav-strip" aria-label="Primary navigation">
        <div className="shell nav-inner">
          <button className={activePanel === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePanel('home')}>Home</button>
          <button className={activePanel === 'documents' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePanel('documents')}>Documents</button>
          <button className={activePanel === 'navigation' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePanel('navigation')}>Campus Navigation</button>
          <button className="nav-link" onClick={openSlot}>Book Slot</button>
        </div>
      </nav>

      {activePanel === 'home' && <>
        <section className="hero shell">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> MCA ALLOTMENT 2026</div>
            <h2>Your seat is confirmed.<br /><em>Let&apos;s make your visit easy.</em></h2>
            <p>One simple place to book your reporting slot, prepare your certificates, and reach the right block, floor and desk at Aditya University.</p>
            <div className="hero-actions"><button className="primary-btn" onClick={openSlot}>Book your slot <ArrowRight size={17} /></button><button className="text-btn" onClick={() => setActivePanel('documents')}>View documents <ArrowRight size={16} /></button></div>
          </div>
          <div className="hero-visual" aria-label="Aditya University campus illustration"><div className="sun" /><div className="building building-a"><span>ADITYA</span></div><div className="building building-b"><span>UNIVERSITY</span></div><div className="building building-c" /><div className="tree tree-one" /><div className="tree tree-two" /><div className="path" /></div>
        </section>
        <section className="shell intro-grid"><div><p className="section-label">START HERE</p><h3>Everything you need<br />before you arrive.</h3></div><p className="intro-text">Skip the queues and uncertainty. Choose a time that works for you, carry the right originals, and follow our clear campus directions to complete your MCA allotment smoothly.</p></section>
        <section className="shell feature-grid">
          <button className="feature-card feature-blue" onClick={openSlot}><span className="icon-box"><CalendarDays /></span><div><p className="card-label">01 · APPOINTMENT</p><h4>Book a reporting slot</h4><p>Reserve your preferred date and time for document verification.</p></div><ArrowRight className="card-arrow" /></button>
          <button className="feature-card feature-yellow" onClick={() => setActivePanel('documents')}><span className="icon-box"><FileCheck2 /></span><div><p className="card-label">02 · PREPARATION</p><h4>Documents to bring</h4><p>A clear checklist of originals, copies and photographs.</p></div><ArrowRight className="card-arrow" /></button>
          <button className="feature-card feature-green" onClick={() => setActivePanel('navigation')}><span className="icon-box"><Navigation /></span><div><p className="card-label">03 · ON CAMPUS</p><h4>Find your way</h4><p>Block, floor, room and the person you need to meet.</p></div><ArrowRight className="card-arrow" /></button>
        </section>
      </>}

      {activePanel === 'documents' && <section className="shell panel-page"><div className="panel-heading"><div><p className="section-label">PREPARE BEFORE YOU ARRIVE</p><h2>Documents to bring</h2><p>Keep the originals and photocopies ready for a quick verification.</p></div><button className="outline-btn" onClick={openSlot}>Book a slot <ArrowRight size={16} /></button></div><div className="document-list">{documents.map((doc, index) => <div className="document-row" key={doc.title}><span className="doc-number">{String(index + 1).padStart(2, '0')}</span><span className="doc-check"><Check size={16} /></span><div><h4>{doc.title}</h4><p>{doc.note}</p></div></div>)}</div><div className="notice"><ShieldCheck size={21} /><p><strong>Keep one extra set of photocopies.</strong> All documents should be clear and self-attested where required.</p></div></section>}

      {activePanel === 'navigation' && <section className="shell panel-page"><div className="panel-heading"><div><p className="section-label">ARRIVE WITH CONFIDENCE</p><h2>Campus navigation</h2><p>Follow this route from the main gate to your MCA verification desk.</p></div><button className="outline-btn" onClick={openSlot}>Book a slot <ArrowRight size={16} /></button></div><div className="navigation-layout"><div className="campus-map"><div className="map-label gate">MAIN GATE</div><div className="map-road road-one" /><div className="map-road road-two" /><div className="map-block block-admin">ADMIN BLOCK</div><div className="map-block block-mca"><span>MCA BLOCK</span><small>YOUR DESTINATION</small></div><div className="map-block block-library">LIBRARY</div><div className="map-dot dot-you" /><div className="map-label you-label">You are here</div></div><div className="route-details"><div className="route-step"><span>1</span><div><p className="card-label">FROM THE MAIN GATE</p><h4>Walk to MCA Block</h4><p>Follow the central pathway past the Admin Block. It takes about 4 minutes.</p></div></div><div className="route-step"><span>2</span><div><p className="card-label">YOUR DESK</p><h4>First Floor · Room 104</h4><p>Meet <strong>Ms. Priya Reddy</strong> at the MCA Admissions Desk.</p></div></div><div className="route-contact"><UserRound size={18} /><div><p>Need help on campus?</p><strong>Ask for the MCA Helpdesk</strong></div></div></div></div></section>}

      <footer className="site-footer"><div className="shell footer-inner"><div><p className="brand-kicker">ADITYA UNIVERSITY</p><p>Making your first step simpler.</p></div><p>© 2026 MCA Admissions Helpdesk</p></div></footer>

      {slotOpen && <div className="modal-backdrop" role="presentation"><section className="slot-modal" role="dialog" aria-modal="true" aria-labelledby="slot-title"><button className="close-btn" onClick={() => setSlotOpen(false)} aria-label="Close booking dialog"><X size={19} /></button>{booked ? <div className="booking-success"><span className="success-icon"><Check /></span><p className="section-label">SLOT RESERVED</p><h2>You&apos;re all set.</h2><p>Your MCA allotment visit is booked for <strong>{selectedSlot}</strong>. Please bring the documents listed on this website.</p><button className="primary-btn" onClick={() => setSlotOpen(false)}>Done <Check size={17} /></button></div> : <><p className="section-label">MCA ALLOTMENT 2026</p><h2 id="slot-title">Book your reporting slot</h2><p className="modal-copy">Enter your details first, then choose an available time for document verification.</p><div className="booking-fields"><label className="field-label">Full name<input value={bookingDetails.name} onChange={(event) => updateBookingDetails('name', event.target.value)} placeholder="Enter your full name" /></label><label className="field-label">Mobile number<input type="tel" value={bookingDetails.mobile} onChange={(event) => updateBookingDetails('mobile', event.target.value)} placeholder="10-digit mobile number" /></label><label className="field-label">Email address<input type="email" value={bookingDetails.email} onChange={(event) => updateBookingDetails('email', event.target.value)} placeholder="you@example.com" /></label><label className="field-label">Address<textarea value={bookingDetails.address} onChange={(event) => updateBookingDetails('address', event.target.value)} placeholder="Enter your current address" rows={2} /></label></div><label className="field-label">Preferred date<select defaultValue="21 August 2026"><option>21 August 2026</option><option>22 August 2026</option><option>24 August 2026</option></select></label><p className="field-label">Available times</p><div className="slot-grid">{slots.map((slot) => <button key={slot} className={selectedSlot === slot ? 'slot-btn selected' : 'slot-btn'} onClick={() => setSelectedSlot(slot)}><Clock3 size={15} />{slot}</button>)}</div><button className="primary-btn full-btn" disabled={!canConfirm} onClick={() => setBooked(true)}>Confirm slot <ArrowRight size={17} /></button></>}</section></div>}
    </main>
  )
}
