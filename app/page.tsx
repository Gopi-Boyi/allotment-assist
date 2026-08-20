'use client'

import { useState } from 'react'
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Clock3,
  FileCheck2,
  FileText,
  GraduationCap,
  IdCard,
  ImageIcon,
  ScrollText,
  Mail,
  MapPin,
  Menu,
  Navigation,
  Phone,
  ShieldCheck,
  Shirt,
  UserRound,
  X,
} from 'lucide-react'

const documents = [
  { category: 'Academic Certificates', title: 'SSC / 10th Certificate', note: 'Original + 2 photocopies', icon: GraduationCap },
  { category: 'Academic Certificates', title: 'Intermediate / 12th Certificate', note: 'Original + 2 photocopies', icon: GraduationCap },
  { category: 'Academic Certificates', title: 'Degree / Provisional Certificate', note: 'Original + 2 photocopies', icon: GraduationCap },
  { category: 'Academic Certificates', title: 'Transfer Certificate', note: 'Original document', icon: ScrollText },
  { category: 'Academic Certificates', title: 'Study Certificate', note: 'Original certificate + 2 photocopies', icon: FileText },
  { category: 'Identity Documents', title: 'Student Aadhaar Card', note: 'Original + 2 photocopies', icon: IdCard },
  { category: 'Identity Documents', title: 'Mother’s Aadhaar Card', note: 'Copy required for verification', icon: IdCard },
  { category: 'Identity Documents', title: 'Father’s Aadhaar Card', note: 'Copy required for verification', icon: IdCard },
  { category: 'Other Requirements', title: 'Caste & Income Certificate', note: 'Latest valid certificate + 2 photocopies', icon: FileText },
  { category: 'Other Requirements', title: 'Recent Passport Photos', note: '4 copies, colour photographs', icon: ImageIcon },
]

const slots = Array.from({ length: 14 }, (_, index) => {
  const totalMinutes = 9 * 60 + index * 30
  const hour = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour > 12 ? hour - 12 : hour
  return `${String(displayHour).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${period}`
})

export default function Page() {
  const [activePanel, setActivePanel] = useState<'home' | 'documents' | 'navigation' | 'university'>('home')
  const [slotOpen, setSlotOpen] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState('')
  const [booked, setBooked] = useState(false)
  const [bookingStep, setBookingStep] = useState<1 | 2>(1)
  const [bookingDetails, setBookingDetails] = useState({ name: '', mobile: '', email: '', address: '' })

  const openSlot = () => {
    setBooked(false)
    setBookingStep(1)
    setSelectedSlot('')
    setSlotOpen(true)
  }

  const updateBookingDetails = (field: keyof typeof bookingDetails, value: string) => {
    setBookingDetails((current) => ({ ...current, [field]: value }))
  }

  const canConfirm = Object.values(bookingDetails).every(Boolean) && selectedSlot

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="site-header shell">
        <div className="brand-wrap">
          <div className="brand-mark"><img src="https://www.adityauniversity.in/public/frontend/assets/images/site-logo.svg" alt="Aditya University official logo" /></div>
          <div><p className="brand-kicker">ADITYA UNIVERSITY</p><h1>Allotment Assist</h1></div>
        </div>
        <div className="header-actions"><span className="help-chip"><Phone size={15} /> +91 98480 12345</span><button className="menu-btn" aria-label="Open menu"><Menu size={20} /></button></div>
      </header>

      <nav className="nav-strip" aria-label="Primary navigation">
        <div className="shell nav-inner">
          <button className={activePanel === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePanel('home')}>Home</button>
          <button className={activePanel === 'documents' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePanel('documents')}>Documents</button>
          <button className={activePanel === 'navigation' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePanel('navigation')}>Campus Navigation</button>
          <button className={activePanel === 'university' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePanel('university')}>University Info</button>
          <button className="nav-link" onClick={openSlot}>Book Slot</button>
        </div>
      </nav>

      {activePanel === 'home' && <>
        <section className="status-strip shell" aria-label="Admissions status"><div className="status-item"><span className="status-dot" /> MCA allotment reporting is open</div><div className="status-divider" /><div className="status-item"><CalendarDays size={15} /> Next available date: <strong>21 August 2026</strong></div><button className="status-link" onClick={openSlot}>Reserve now <ArrowRight size={14} /></button></section>
        <section className="hero shell">
          <div className="hero-video" aria-hidden="true"><iframe src="https://www.youtube-nocookie.com/embed/xo7Z8Msvz6I?autoplay=1&mute=1&loop=1&playlist=xo7Z8Msvz6I&controls=0&disablekb=1&fs=0&playsinline=1&rel=0&modestbranding=1" title="Aditya University campus video" allow="autoplay; encrypted-media" tabIndex={-1} /></div>
          <div className="hero-copy">
            <span className="hero-glow" aria-hidden="true" />
            <div className="eyebrow"><span className="eyebrow-line" /> MCA ALLOTMENT 2026</div>
            <h2>Your seat is confirmed.<br /><em>Let&apos;s make your visit easy.</em></h2>
            <p>One simple place to book your reporting slot, prepare your certificates, and reach the right block, floor and desk at Aditya University.</p>
            <div className="hero-actions"><button className="primary-btn" onClick={openSlot}>Book your slot <ArrowRight size={17} /></button><button className="text-btn" onClick={() => setActivePanel('documents')}>View documents <ArrowRight size={16} /></button></div><div className="trust-badge"><span className="trust-avatars"><span /><span /><span /></span><span><strong>500+ students</strong> already booked their visit</span></div>
          </div>

        </section>
        <section className="shell intro-grid"><div><p className="section-label">START HERE</p><h3>Everything you need<br />before you arrive.</h3><p className="source-note">University details sourced from <a href="https://www.adityauniversity.in/" target="_blank" rel="noreferrer">adityauniversity.in</a>.</p></div><div className="intro-side"><p className="intro-text">Skip the queues and uncertainty. Choose a time that works for you, carry the right originals, and follow our clear campus directions to complete your MCA allotment smoothly.</p><div className="arrival-note"><ShieldCheck size={17} /><span><strong>Reporting tip</strong> Arrive 15 minutes before your slot.</span></div></div></section>
        <section className="shell feature-grid">
          <button className="feature-card feature-blue" onClick={openSlot}><span className="icon-box"><CalendarDays /></span><div><p className="card-label">01 · APPOINTMENT</p><h4>Book a reporting slot</h4><p>Reserve your preferred date and time for document verification.</p></div><ArrowRight className="card-arrow" /></button>
          <button className="feature-card feature-yellow" onClick={() => setActivePanel('documents')}><span className="icon-box"><FileCheck2 /></span><div><p className="card-label">02 · PREPARATION</p><h4>Documents to bring</h4><p>A clear checklist of originals, copies and photographs.</p></div><ArrowRight className="card-arrow" /></button>
          <button className="feature-card feature-green" onClick={() => setActivePanel('navigation')}><span className="icon-box"><Navigation /></span><div><p className="card-label">03 · ON CAMPUS</p><h4>Find your way</h4><p>Block, floor, room and the person you need to meet.</p></div><ArrowRight className="card-arrow" /></button><button className="feature-card feature-white" onClick={() => setActivePanel('university')}><span className="icon-box"><Building2 /></span><div><p className="card-label">04 · OFFICIAL DETAILS</p><h4>About Aditya University</h4><p>Address, MCA eligibility, fee guidance and official contacts.</p></div><ArrowRight className="card-arrow" /></button><button className="feature-card feature-purple" onClick={() => setActivePanel('navigation')}><span className="icon-box"><Shirt /></span><div><p className="card-label">05 · AFTER ALLOTMENT</p><h4>Buy your uniform</h4><p>Purchase your official uniform from the campus store after your reporting slot is confirmed.</p></div><ArrowRight className="card-arrow" /></button>
        </section>
      </>}

      {activePanel === 'documents' && <section className="shell panel-page"><div className="panel-heading"><div><div className="heading-with-icon"><span className="heading-icon"><FileCheck2 size={22} /></span><div><p className="section-label">PREPARE BEFORE YOU ARRIVE</p><h2>Documents to bring</h2></div></div><p>Keep the originals and photocopies ready for a quick verification.</p></div><span className="document-summary">{documents.length} documents required</span><button className="outline-btn" onClick={openSlot}>Book a slot <ArrowRight size={16} /></button></div><div className="document-list">{['Academic Certificates', 'Identity Documents', 'Other Requirements'].map((category) => <section className="document-group" key={category}><div className="group-heading"><h3>{category}</h3><span>{documents.filter((doc) => doc.category === category).length} items</span></div><div className="document-group-grid">{documents.filter((doc) => doc.category === category).map((doc, index) => { const Icon = doc.icon; const number = documents.indexOf(doc) + 1; return <div className="document-row" key={doc.title}><span className="doc-number">{String(number).padStart(2, '0')}</span><span className="doc-type-icon"><Icon size={18} /></span><div className="doc-copy"><h4>{doc.title}</h4><p>{doc.note}</p></div><span className="doc-check"><Check size={15} /></span></div> })}</div></section>)}</div><div className="notice"><span className="notice-icon"><ShieldCheck size={18} /></span><p><strong>Keep one extra set of photocopies.</strong> All documents should be clear and self-attested where required.</p></div></section>}

      {activePanel === 'navigation' && <section className="shell panel-page"><div className="panel-heading"><div><p className="section-label">ARRIVE WITH CONFIDENCE</p><h2>Campus navigation</h2><p>Follow this route from the main gate to your MCA verification desk.</p></div><button className="outline-btn" onClick={openSlot}>Book a slot <ArrowRight size={16} /></button></div><p className="map-microcopy"><MapPin size={15} /> Estimated walk time: 5–7 minutes from the Main Gate</p><div className="navigation-layout"><div className="map-column"><div className="campus-map location-map"><iframe src="https://www.google.com/maps?q=Ratan+Tata+Bhavan,+33Q8%2B5QW,+Surampalem,+Andhra+Pradesh+533437&z=17&output=embed" title="Ratan Tata Bhavan allotment block location" loading="lazy" /><div className="location-map-label"><MapPin size={16} /><span><strong>Allotment Block</strong><small>Ratan Tata Bhavan · Main Gate</small></span></div></div></div><div className="route-details"><div className="route-timeline"><div className="route-step"><span className="step-number">1</span><div><p className="card-label">FROM THE MAIN GATE</p><h4><Navigation size={17} /> Walk to MCA Block</h4><p>Follow the central pathway past the Admin Block. It takes about 4 minutes.</p></div></div><div className="route-step"><span className="step-number">2</span><div><p className="card-label">YOUR DESK</p><h4><Building2 size={17} /> First Floor · Room 104</h4><p>Meet <strong>Ms. Priya Reddy</strong> at the MCA Admissions Desk.</p></div></div><div className="route-step"><span className="step-number">3</span><div><p className="card-label">AFTER ALLOTMENT</p><h4><Shirt size={17} /> Uniform Store · Ground Floor</h4><p>Visit the campus store in the <strong>Admin Block, Ground Floor</strong> after your reporting slot. Open <strong>9:00 AM – 4:00 PM</strong>. Payments accepted by <strong>cash or UPI</strong>.</p></div></div></div><div className="route-contact"><span className="route-icon"><UserRound size={18} /></span><div><p>Need help on campus?</p><strong>Ask for the MCA Helpdesk</strong></div></div><a className="map-link" href="https://www.google.com/maps/dir/17.0878598,82.0667294/Ratan+Tata+bhavan,+33Q8%2B5QW,+Surampalem,+Andhra+Pradesh+533437/@17.0879004,82.0661162,820m/data=!3m1!1e3!4m19!1m8!3m7!1s0x3a3783990a76753b:0x365242eaa56135df!2sRatan+Tata+bhavan!8m2!3d17.087988!4d82.0663919!15sCiNhZGl0eWEgdW5pdmVyc2l0eSByYXRhbiB0YXRhIGJoYXZhblolIiNhZGl0eWEgdW5pdmVyc2l0eSByYXRhbiB0YXRhIGJoYXZhbpIBB2NvbGxlZ2WaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMjE0ZUZNelVUVmFNMVo1V1ZSU1FsWXdNVVZXTUhCSlZtcENUVTB4UlJBQuABAPoBBAgAEB0!16s%2Fg%2F11t8bynrwn!4m9!1m1!4e1!1m5!1m1!1s0x3a3783990a76753b:0x365242eaa56135df!2m2!1d82.0663871!2d17.0879878!3e2?entry=ttu" target="_blank" rel="noreferrer"><span className="route-icon"><MapPin size={17} /></span><span><strong>Open allotment block in Google Maps</strong><small>Ratan Tata Bhavan · 17.087988, 82.066392</small></span><ArrowRight size={16} /></a></div></div></section>}

      {activePanel === 'university' && <section className="shell panel-page"><div className="panel-heading"><div><p className="section-label">OFFICIAL UNIVERSITY DETAILS</p><h2>About Aditya University</h2><p>Verified details to help you reach the right campus and prepare for MCA reporting.</p></div><a className="outline-btn" href="https://adityauniversity.in" target="_blank" rel="noreferrer">Open official website <ArrowRight size={16} /></a></div><div className="university-layout"><div className="campus-photo university-video" aria-label="Aditya University campus video"><iframe src="https://www.youtube-nocookie.com/embed/d4ViL61Tyqc?autoplay=1&mute=1&loop=1&playlist=d4ViL61Tyqc&controls=0&disablekb=1&fs=0&playsinline=1&rel=0&modestbranding=1" title="Aditya University campus video" allow="autoplay; encrypted-media" tabIndex={-1} /><div className="university-video-shade" /><div className="photo-caption"><Building2 size={17} /><span>Aditya Nagar campus<br /><strong>Surampalem, Kakinada</strong></span></div></div><div className="university-details"><div className="detail-card"><MapPin size={18} /><div><p className="card-label">CAMPUS ADDRESS</p><p>Aditya Nagar, ADB Road,<br />Surampalem, Kakinada District,<br />Andhra Pradesh – 533437</p></div></div><div className="detail-card"><GraduationCap size={18} /><div><p className="card-label">MCA PROGRAMME</p><p><strong>Eligibility:</strong> Recognized 3 or 4-year bachelor&apos;s degree with Mathematics at 10+2 level.</p><p><strong>Tuition:</strong> Approximately ₹1,00,000 per year.</p></div></div><div className="detail-card"><Phone size={18} /><div><p className="card-label">ADMISSIONS HELPLINE</p><p><a href="tel:+919989776661">+91 9989 776661</a><br /><Mail size={13} className="inline-icon" /> <a href="mailto:info@adityauniversity.in">info@adityauniversity.in</a></p></div></div></div></div></section>}

      <footer className="site-footer"><div className="shell footer-inner"><div><p className="brand-kicker">ADITYA UNIVERSITY</p><p>Making your first step simpler.</p></div><p>© 2026 MCA Admissions Helpdesk</p></div></footer>

      {slotOpen && <div className="modal-backdrop" role="presentation"><section className="slot-modal" role="dialog" aria-modal="true" aria-labelledby="slot-title"><button className="close-btn" onClick={() => setSlotOpen(false)} aria-label="Close booking dialog"><X size={19} /></button>{booked ? <div className="booking-success"><span className="success-icon"><Check /></span><p className="section-label">SLOT RESERVED</p><h2>You&apos;re all set.</h2><p>Your MCA allotment visit is booked for <strong>{selectedSlot}</strong>. Please bring the documents listed on this website.</p><button className="primary-btn" onClick={() => setSlotOpen(false)}>Done <Check size={17} /></button></div> : <><div className="modal-progress"><div><span className="progress-dot active" /><span className={bookingStep === 2 ? 'progress-dot active' : 'progress-dot'} /></div><strong>Step {bookingStep} of 2</strong></div><p className="section-label">MCA ALLOTMENT 2026</p><h2 id="slot-title">{bookingStep === 1 ? 'Your details' : 'Choose your slot'}</h2><p className="modal-copy">{bookingStep === 1 ? 'Tell us who is arriving so we can reserve your reporting visit.' : 'Select a date and an available 30-minute time slot.'}</p>{bookingStep === 1 ? <div className="booking-step"><div className="booking-fields"><label className="field-label">Full name<input value={bookingDetails.name} onChange={(event) => updateBookingDetails('name', event.target.value)} placeholder="Enter your full name" /></label><label className="field-label">Mobile number<input type="tel" value={bookingDetails.mobile} onChange={(event) => updateBookingDetails('mobile', event.target.value)} placeholder="10-digit mobile number" /></label><label className="field-label">Email address<input type="email" value={bookingDetails.email} onChange={(event) => updateBookingDetails('email', event.target.value)} placeholder="you@example.com" /></label><label className="field-label">Address<textarea value={bookingDetails.address} onChange={(event) => updateBookingDetails('address', event.target.value)} placeholder="Enter your current address" rows={2} /></label></div><div className="modal-footer"><button className="primary-btn full-btn" disabled={!Object.values(bookingDetails).every(Boolean)} onClick={() => setBookingStep(2)}>Continue <ArrowRight size={17} /></button></div></div> : <div className="booking-step"><label className="field-label">Preferred date<select defaultValue="21 August 2026"><option>21 August 2026</option><option>22 August 2026</option><option>24 August 2026</option></select></label><p className="field-label">Available times <span className="slot-helper">30-minute slots · 9:00 AM – 4:00 PM</span></p><div className="slot-grid">{slots.map((slot) => <button key={slot} className={selectedSlot === slot ? 'slot-btn selected' : 'slot-btn'} onClick={() => setSelectedSlot(slot)}><Clock3 size={15} />{slot}</button>)}</div><div className="modal-footer split-footer"><button className="back-btn" onClick={() => setBookingStep(1)}>Back</button><button className="primary-btn" disabled={!canConfirm} onClick={() => setBooked(true)}>Confirm booking <Check size={17} /></button></div></div>}</>}</section></div>}
    </main>
  )
}
