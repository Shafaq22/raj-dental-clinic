/* ==========================================================================
   RAJ DENTAL CLINIC - 3D INTERACTIVE JAVASCRIPT
   - Three.js WebGL Interactive 3D Canvas Background
   - Mouse-tracking 3D Tilt Card Effects
   - Floating Right-to-Left Marquee Gallery Generator (Large Cards)
   - Dynamic Services Filter Tabs & Reviews
   - FAQ Accordion System & Booking Modal
   ========================================================================== */

// Data Sources
const GALLERY_PHOTOS = [
  {
    url: "https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-warangal-char-rasta-warangal-clinics-qda7a9wcw2.jpg",
    title: "Dual Treatment Suite",
    category: "Interior",
    desc: "Modern dental clinic with two treatment chairs, overhead lights, and marble walls."
  },
  {
    url: "https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-warangal-char-rasta-warangal-clinics-23gdce1awp.jpg",
    title: "Dr. Davalagar Rajesh",
    category: "Specialist",
    desc: "Proprietor & Root Canal Specialist offering crowns, bridges, and implants."
  },
  {
    url: "https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-warangal-char-rasta-warangal-clinics-ef6n7tq61h.jpg",
    title: "Painless Laser RCT Care",
    category: "Procedure",
    desc: "Apex locator root canal treatment with gentle care and high accuracy."
  },
  {
    url: "https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-multi-speciality-and-root-canal-centre-warangal-char-rasta-warangal-dentists-g2t85whcnj.jpg",
    title: "Digital Dental X-Ray OPD",
    category: "Diagnostics",
    desc: "Laptop radiograph display on marble countertop for digital precision."
  },
  {
    url: "https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-multi-speciality-and-root-canal-centre-warangal-char-rasta-warangal-dentists-f0b9pwzuni.jpg",
    title: "Clinic Exterior & Parking",
    category: "Exterior",
    desc: "Located conveniently on JPN Road, Warangal with smooth public transport access."
  },
  {
    url: "https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-multi-speciality-and-root-canal-centre-warangal-char-rasta-warangal-dentists-r2xio17vcd.jpg",
    title: "Sterilized Surgical OPD",
    category: "Hygiene",
    desc: "Hospital-grade sterilization with autoclaved equipment and disposable kits."
  },
  {
    url: "https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-warangal-char-rasta-warangal-clinics-u78ydc3xp4.jpg",
    title: "Multi-Speciality Center",
    category: "Facility",
    desc: "Comprehensive root canal and full mouth rehabilitation hospital."
  }
];

const SERVICES_DATA = [
  {
    id: "rct-1",
    category: "rct",
    title: "Laser Root Canal (RCT)",
    desc: "Advanced laser-assisted root canal therapy providing painless infection removal, sealed canals, and minimal post-op sensitivity.",
    tags: ["Painless", "Single Visit", "Laser Tech"],
    img: "./images/speciality_laser_rct.jpg",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`
  },
  {
    id: "rct-2",
    category: "rct",
    title: "Root Canal with Apex Locator",
    desc: "Electronic precision apex locators ensure exact working length measurement to the canal tip for 100% successful RCT treatment.",
    tags: ["Apex Locator", "High Accuracy", "Micro-precision"],
    img: "./images/speciality_apex_locator.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
  },
  {
    id: "cosmetic-1",
    category: "cosmetic",
    title: "Ceramic Crowns & Bridges Fixing",
    desc: "Natural-looking zirconia and PFM ceramic crowns restoring tooth strength, bite alignment, and aesthetic smile beauty.",
    tags: ["Zirconia", "Custom Fit", "Natural Look"],
    img: "./images/speciality_crowns_bridges.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
  },
  {
    id: "cosmetic-2",
    category: "cosmetic",
    title: "Advanced Implantology",
    desc: "Permanent titanium dental implants replacing missing teeth, restoring complete chewing efficiency and jawbone structure.",
    tags: ["Permanent Fix", "Titanium Implants", "Full Function"],
    img: "./images/speciality_implantology.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.605 15.12a2 2 0 00-1.022.547l-1.3 1.3A2 2 0 004.707 20.4l1.37-1.37a2 2 0 011.022-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.022.547l1.37 1.37a2 2 0 001.42-.572 2 2 0 00-.006-2.828l-1.3-1.3z"/></svg>`
  },
  {
    id: "surgery-1",
    category: "surgery",
    title: "Wisdom Tooth & 3rd Molar Extraction",
    desc: "Surgical and gentle extractions of impacted 3rd molars relieving severe jaw pain, overcrowding, and gum inflammation.",
    tags: ["Gentle Extraction", "Impacted Molar", "Fast Recovery"],
    img: "./images/speciality_extraction.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 0L5 5m4.121 4.121L5 19"/></svg>`
  },
  {
    id: "ortho-1",
    category: "ortho",
    title: "Braces & Invisible Aligners",
    desc: "Orthodontic alignment for crooked teeth, overbites, and spacing using ceramic braces, traditional metal, or clear invisible aligners.",
    tags: ["Smile Alignment", "Clear Aligners", "Custom Wire"],
    img: "./images/speciality_aligners.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`
  },
  {
    id: "rct-3",
    category: "rct",
    title: "Full Mouth Rehabilitation",
    desc: "Comprehensive restoration of worn, damaged, or missing teeth combining RCTs, crowns, and implants for total oral health.",
    tags: ["Holistic", "Full Restoration", "Long Lasting"],
    img: "./images/speciality_full_mouth.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`
  },
  {
    id: "surgery-2",
    category: "surgery",
    title: "Accidental Injury & Pain OPD",
    desc: "Immediate trauma care for fractured teeth, displaced jaws, dental bleeding, and acute toothache relief during operational hours.",
    tags: ["Trauma OPD", "Accidental Trauma", "Immediate Relief"],
    img: "./images/speciality_accidental.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`
  },
  {
    id: "cosmetic-3",
    category: "cosmetic",
    title: "Teeth Whitening & Composite Bonding",
    desc: "Instant tooth stain removal, professional bleaching, and composite edge repair for a sparkling white, flawless smile.",
    tags: ["Whitening", "Composite Repair", "Instant Shine"],
    img: "./images/speciality_whitening.png",
    svg: `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`
  },
];

const REVIEWS_DATA = [
  {
    author: "Harshitha Kandi",
    date: "17th July, 2025",
    text: "My experience at RAJ DENTAL CLINIC was excellent! Booking appointments was easy, and the staff provided great assistance. I appreciated the punctuality and attentive care throughout my treatment. The gentle approach ensured comfort, while accurate diagnosis led to effective treatment.",
    rating: 5,
    initial: "H"
  },
  {
    author: "Dr. Davalagar Ranvitha",
    date: "17th July, 2025",
    text: "I had a great experience at RAJ DENTAL CLINIC MULTI-SPECIALITY & ROOT CANAL CENTRE. The clinic has sterilised equipment, which made me feel safe. The prices are reasonable, so I did not worry about costs. The service was quick and clean.",
    rating: 5,
    initial: "D"
  },
  {
    author: "Perumandla",
    date: "15th July, 2025",
    text: "RAJ DENTAL CLINIC offers an exceptional experience for dental care. Impeccably clean and hygienic environment ensuring safety. Their quick service minimizes wait times, and the expertise of Dr. Rajesh guarantees speedy recovery!",
    rating: 5,
    initial: "P"
  },
  {
    author: "Neha",
    date: "17th July, 2025",
    text: "Good service and very gentle treatment during my root canal session. Highly recommended for anyone in Warangal looking for quality dental care.",
    rating: 5,
    initial: "N"
  },
  {
    author: "Poornachander Macherla",
    date: "6th August, 2025",
    text: "Clean & hygienic clinic with modern digital equipment. Staff is attentive and doctors are super professional.",
    rating: 5,
    initial: "P"
  },
  {
    author: "Navya",
    date: "1st August, 2025",
    text: "Very reasonable prices with subsidies available. Painless procedure with zero waiting time. Best clinic near JPN road!",
    rating: 5,
    initial: "N"
  }
];

const FAQ_DATA = [
  {
    q: "Is there a difference between dentists and orthodontists?",
    a: "Dentists deal with a wide variety of oral health problems including cavities, root canals, and extractions. Orthodontists are specialized dentists who focus on aligning crooked teeth and correcting jaw bite issues with braces or aligners."
  },
  {
    q: "Can dentists treat orthodontic conditions?",
    a: "Yes! Qualified dental surgeons at RAJ DENTAL CLINIC provide comprehensive orthodontic evaluations, braces adjustments, and invisible aligners alongside general dental care."
  },
  {
    q: "How often should I visit a dentist for a routine checkup?",
    a: "It is strongly recommended to visit a dentist twice a year (every 6 months) for professional cleaning, digital X-ray screening, and preventive care."
  },
  {
    q: "What areas of expertise does RAJ DENTAL CLINIC specialized in?",
    a: "We specialize in Painless Laser Root Canal Therapy (RCT) with Apex Locators, Ceramic Crowns & Bridges, Advanced Dental Implants, Full Mouth Rehabilitation, Wisdom Tooth Extractions, and Emergency Accidental Pain Management."
  },
  {
    q: "What are the operating hours of RAJ DENTAL CLINIC in Warangal?",
    a: "Our clinic is open Monday through Saturday from 10:00 AM to 9:00 PM, and on Sunday from 10:00 AM to 7:00 PM."
  },
  {
    q: "Where is the clinic located in JPN Road?",
    a: "We are conveniently located at RAJ DENTAL CLINIC, JPN Road, Near J.P.N Road, Warangal, Telangana 506002. Easily accessible by public buses, trains, and private vehicles with dedicated parking space."
  },
  {
    q: "How can I book an appointment or contact the doctor?",
    a: "You can call us directly at +91-9030744707 or use our instant online booking form on this website."
  }
];

// Initialize DOM elements when loaded
document.addEventListener("DOMContentLoaded", () => {
  initThreeJSBackground();
  init3DTiltEffects();
  initGalleryMarquee();
  initServicesGrid('all');
  initServicesTabs();
  initReviewsGrid();
  initFaqAccordion();
  initHeaderScroll();
  setDefaultBookingDate();
});

// THREE.JS INTERACTIVE 3D WEBGL BACKGROUND SCENE
function initThreeJSBackground() {
  const canvas = document.getElementById("hero3DCanvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create a futuristic 3D particle sphere / torus knot
  const geometry = new THREE.TorusKnotGeometry(10, 3, 120, 16);
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 1200;

  const posArray = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 80;
  }
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.25,
    color: 0x00f5d4,
    transparent: true,
    opacity: 0.8
  });

  const meshMaterial = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    wireframe: true,
    transparent: true,
    opacity: 0.18
  });

  const torusKnot = new THREE.Mesh(geometry, meshMaterial);
  const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);

  scene.add(torusKnot);
  scene.add(particleMesh);

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);
    torusKnot.rotation.x += 0.003;
    torusKnot.rotation.y += 0.005;
    particleMesh.rotation.y -= 0.001;

    // Smooth camera drift based on mouse
    camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 5 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// REAL-TIME 3D CARD TILT EFFECT ON HOVER
function init3DTiltEffects() {
  const cards = document.querySelectorAll(".tilt-3d, .service-card, .why-card, .review-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(15px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    });
  });
}

// FLOATING MARQUEE GALLERY BUILDER (RIGHT TO LEFT ANIMATION WITH LARGE CARDS)
function initGalleryMarquee() {
  const track1 = document.getElementById("galleryTrack1");
  const track2 = document.getElementById("galleryTrack2");
  if (!track1 || !track2) return;

  const track1Cards = [...GALLERY_PHOTOS, ...GALLERY_PHOTOS];
  const track2Cards = [...GALLERY_PHOTOS.slice().reverse(), ...GALLERY_PHOTOS.slice().reverse()];

  track1.innerHTML = track1Cards.map(photo => createGalleryCardHTML(photo)).join('');
  track2.innerHTML = track2Cards.map(photo => createGalleryCardHTML(photo)).join('');

  // Re-attach 3D tilt effects to newly inserted gallery cards
  init3DTiltEffects();
}

function createGalleryCardHTML(photo) {
  return `
    <div class="gallery-card tilt-3d" onclick="openLightboxModal('${photo.url}', '${escapeQuotes(photo.title)}', '${escapeQuotes(photo.desc)}')">
      <img src="${photo.url}" alt="${photo.title}" loading="lazy" onerror="this.onerror=null; this.src='https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-warangal-char-rasta-warangal-clinics-qda7a9wcw2.jpg';">
      <div class="gallery-card-content">
        <span class="gallery-badge">${photo.category}</span>
        <h3 class="gallery-title">${photo.title}</h3>
        <p class="gallery-desc">${photo.desc}</p>
      </div>
      <button class="gallery-zoom-btn" title="View Enlarge">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
        </svg>
      </button>
    </div>
  `;
}

function escapeQuotes(str) {
  return str.replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

// LIGHTBOX MODAL HANDLERS
window.openLightboxModal = function(url, title, desc) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const titleEl = document.getElementById("lightboxTitle");
  const descEl = document.getElementById("lightboxDesc");
  if (!modal || !img) return;

  img.src = url;
  titleEl.innerText = title;
  descEl.innerText = desc;
  modal.classList.add("active");
};

window.closeLightboxModal = function() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("active");
};

// SERVICES GRID RENDERING & TABS
function initServicesGrid(filterCategory) {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  const filtered = filterCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === filterCategory);

  grid.innerHTML = filtered.map(item => `
    <div class="service-card tilt-3d">
      <div>
        ${item.img ? `
          <div class="service-img-wrapper">
            <img src="${item.img}" alt="${item.title}" class="service-card-img" loading="lazy" onerror="this.onerror=null; this.src='https://images.jdmagicbox.com/v2/comp/warangal/v9/9999px870.x870.240402112041.c3v9/catalogue/raj-dental-clinic-warangal-char-rasta-warangal-clinics-ef6n7tq61h.jpg';">
          </div>
        ` : `
          <div class="service-icon-box">
            ${item.svg}
          </div>
        `}
        <h3 class="service-card-title">${item.title}</h3>
        <p class="service-card-desc">${item.desc}</p>
      </div>

      <div>
        <div class="service-meta-tags">
          ${item.tags.map(t => `<span class="service-tag-item">${t}</span>`).join('')}
        </div>

        <button class="service-book-btn" onclick="openBookingModalWithTreatment('${escapeQuotes(item.title)}')">
          <span>Book Consultation</span>
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </button>
      </div>
    </div>
  `).join('');

  init3DTiltEffects();
}

function initServicesTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-category");
      initServicesGrid(category);
    });
  });
}

// REVIEWS GRID RENDERING
function initReviewsGrid() {
  const grid = document.getElementById("reviewsGrid");
  if (!grid) return;

  grid.innerHTML = REVIEWS_DATA.map(rev => `
    <div class="review-card tilt-3d">
      <div class="review-stars">
        ${'<svg viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'.repeat(rev.rating)}
      </div>

      <p class="review-text">"${rev.text}"</p>

      <div class="review-author">
        <div class="author-avatar">${rev.initial}</div>
        <div class="author-info">
          <div class="name">${rev.author}</div>
          <div class="date">${rev.date} &bull; Verified Justdial Review</div>
        </div>
      </div>
    </div>
  `).join('');

  init3DTiltEffects();
}

// FAQ ACCORDION
function initFaqAccordion() {
  const wrapper = document.getElementById("faqAccordion");
  if (!wrapper) return;

  wrapper.innerHTML = FAQ_DATA.map((item, idx) => `
    <div class="faq-item ${idx === 0 ? 'active' : ''}">
      <button class="faq-question" onclick="toggleFaq(${idx})">
        <span>${item.q}</span>
        <svg class="faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
      <div class="faq-answer">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');
}

window.toggleFaq = function(index) {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item, idx) => {
    if (idx === index) {
      item.classList.toggle("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// APPOINTMENT MODAL HANDLERS
window.openBookingModal = function() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.add("active");
};

window.openBookingModalWithTreatment = function(treatmentName) {
  openBookingModal();
  const select = document.getElementById("mTreatmentSelect");
  if (select) {
    select.value = treatmentName;
  }
};

window.closeBookingModal = function() {
  const modal = document.getElementById("bookingModal");
  if (modal) modal.classList.remove("active");
};

// FORM SUBMISSIONS & TOAST NOTIFICATIONS
window.handleBookingSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById("patientName").value;
  const phone = document.getElementById("patientPhone").value;
  const treatment = document.getElementById("treatmentSelect").value;
  const date = document.getElementById("bookingDate").value;

  showToast(`Success! Appointment request for ${name} registered. We will call you on ${phone}.`);
  
  const waMsg = encodeURIComponent(`Hello Dr. Davalagar Rajesh, I would like to book an appointment for ${treatment} on ${date}. Name: ${name}, Phone: ${phone}.`);
  window.open(`https://wa.me/919030744707?text=${waMsg}`, '_blank');
  
  e.target.reset();
  setDefaultBookingDate();
};

window.handleModalBookingSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById("mPatientName").value;
  const phone = document.getElementById("mPatientPhone").value;
  const treatment = document.getElementById("mTreatmentSelect").value;

  closeBookingModal();
  showToast(`Success! Appointment for ${name} (${treatment}) requested.`);
  
  const waMsg = encodeURIComponent(`Hello Dr. Davalagar Rajesh, I would like to book an appointment for ${treatment}. Name: ${name}, Phone: ${phone}.`);
  window.open(`https://wa.me/919030744707?text=${waMsg}`, '_blank');

  e.target.reset();
};

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" style="width: 22px; height: 22px; stroke: var(--cyan-electric); flex-shrink: 0;">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.35s ease';
    setTimeout(() => toast.remove(), 350);
  }, 4500);
}

function setDefaultBookingDate() {
  const input = document.getElementById("bookingDate");
  if (input) {
    const today = new Date().toISOString().split('T')[0];
    input.value = today;
    input.min = today;
  }
}

// HEADER SCROLL SHADOW
function initHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });
}
