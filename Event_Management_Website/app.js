/* ==========================================================================
   AURA EVENTS & SURPRISES — CLEAN APPLICATION LOGIC (app.js)
   ========================================================================== */

const SURPRISE_PACKAGES = [
  {
    id: 'birthday-penthouse',
    category: 'birthday',
    categoryLabel: 'Birthday Surprise',
    title: 'Penthouse & Suite Birthday Transformation',
    description: 'A discreet 90-minute room or venue styling with organic balloon architecture, custom marquee lighting, and an artisan tiered cake reveal.',
    image: 'assets/events/surprise-birthday.jpg',
    price: '$490',
    highlights: [
      'Bespoke organic balloon & floral backdrop',
      'Custom LED neon sign & 3-tier designer cake',
      'Discreet 90-minute stealth installation crew'
    ],
    timeline: 'Our team coordinates directly with your family or hotel concierge to transform the space in 90 minutes while you take the guest of honor out for dinner.'
  },
  {
    id: 'birthday-wonderland',
    category: 'birthday',
    categoryLabel: 'Birthday Surprise',
    title: 'Pastel Pavilion & Milestone Birthday Gala',
    description: 'Vibrant rainbow and pastel pavilion styling for 1st to 50th milestone birthdays, complete with patisserie dessert carts and live entertainment.',
    image: 'assets/events/surprise-kids.jpg',
    price: '$750',
    highlights: [
      'Full pavilion balloon & botanical installation',
      'Custom patisserie, macaron & candy carousel',
      'Professional photography & highlight reel'
    ],
    timeline: 'Installed prior to guest arrival with a choreographed entrance reveal, music cue, and cold-sparkler celebration.'
  },
  {
    id: 'proposal-cliffside',
    category: 'proposal',
    categoryLabel: 'Proposal & Romance',
    title: 'Cliffside Sunset "Marry Me" Rose Arch',
    description: 'An intimate, breathtaking proposal setup overlooking the ocean with 2,500 fresh roses, candlelit walkways, and a live solo violinist.',
    image: 'assets/events/surprise-romantic.jpg',
    price: '$890',
    highlights: [
      'Lush circular fresh rose arch & petal aisle',
      'Live acoustic violinist & chilled champagne',
      'Hidden candid photographer & drone coverage'
    ],
    timeline: 'Set up on a private terrace before sunset. As you arrive under the guise of a private dinner reservation, the curtain parts to reveal the floral arch.'
  },
  {
    id: 'event-flashmob',
    category: 'event',
    categoryLabel: 'Event Surprise',
    title: 'Undercover Singing Waiters & Flash Mob',
    description: 'Turn a formal dinner, wedding reception, or corporate banquet into an electrifying musical performance with disguised vocalists and brass musicians.',
    image: 'assets/events/surprise-flashmob.jpg',
    price: '$1,150',
    highlights: [
      '8 professional undercover vocalists & musicians',
      'Custom song choreography & wireless audio',
      'Synchronized stadium confetti cannon finale'
    ],
    timeline: 'Performers blend seamlessly as venue staff and guests until your designated toast cue triggers the surprise live show.'
  },
  {
    id: 'anniversary-pergola',
    category: 'anniversary',
    categoryLabel: 'Anniversary Surprise',
    title: 'Starlight Garden Pergola & Private Cinema',
    description: 'Celebrate milestone anniversaries under a white pergola draped in bougainvillea and fairy lights, featuring a custom family tribute film.',
    image: 'assets/events/surprise-anniversary.jpg',
    price: '$740',
    highlights: [
      'Botanical white pergola & plush lounge seating',
      'Outdoor cinema screen with family video tribute',
      'Private chef 4-course candlelit dining table'
    ],
    timeline: 'We compile secret video messages from loved ones beforehand and transform your garden or rooftop into a private cinema sanctuary.'
  },
  {
    id: 'family-babyreveal',
    category: 'family',
    categoryLabel: 'Family & Reveal',
    title: 'Conservatory Baby Shower & Gender Reveal',
    description: 'A luminous glass-conservatory celebration styled with pastel balloon clouds, floral sculptures, and synchronized color fountains.',
    image: 'assets/events/surprise-babyshower.jpg',
    price: '$780',
    highlights: [
      'Pastel pink, sky blue & gold balloon canopies',
      'Confidential clinic envelope coordination',
      'Biodegradable confetti & color fountain reveal'
    ],
    timeline: 'We receive the sealed envelope directly from your clinic so both parents and guests experience the reveal together.'
  }
];

let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  renderSurpriseGrid();
});

function filterSurpriseCategory(category, btnEl) {
  activeCategory = category;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderSurpriseGrid();
}

function renderSurpriseGrid() {
  const grid = document.getElementById('surprise-grid');
  if (!grid) return;

  const list = activeCategory === 'all'
    ? SURPRISE_PACKAGES
    : SURPRISE_PACKAGES.filter(item => item.category === activeCategory);

  grid.innerHTML = list.map(item => `
    <article class="experience-card">
      <div class="card-image-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy" />
        <span class="card-tag">${item.categoryLabel}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.description}</p>
        <ul class="card-highlights">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="card-footer">
          <div class="card-price"><span>From </span>${item.price}</div>
          <button type="button" class="card-link" onclick="openSurpriseDetail('${item.id}')">
            View Details <span>→</span>
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

function openSurpriseDetail(id) {
  const item = SURPRISE_PACKAGES.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('detail-modal');
  const title = document.getElementById('modal-title');
  const body = document.getElementById('modal-body');

  title.textContent = item.title;
  body.innerHTML = `
    <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 240px; object-fit: cover; border-radius: 12px; margin-bottom: 20px;" />
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
      <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent);">${item.categoryLabel}</span>
      <strong style="font-family: var(--font-heading); font-size: 1.35rem;">From ${item.price}</strong>
    </div>
    <p style="font-size: 0.95rem; color: var(--text-body); margin-bottom: 18px;">${item.description}</p>
    <div style="background: var(--bg-offwhite); border: 1px solid var(--border); padding: 16px; border-radius: 10px; margin-bottom: 22px;">
      <strong style="display: block; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 6px;">How We Execute It</strong>
      <p style="font-size: 0.88rem; color: var(--text-body);">${item.timeline}</p>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
      <button type="button" class="btn btn-outline" onclick="closeDetailModal()">Close</button>
      <button type="button" class="btn btn-accent" onclick="selectPackageForBooking('${item.title.replace(/'/g, "\\'")}')">Inquire About This Package</button>
    </div>
  `;

  modal.classList.add('open');
}

function closeDetailModal() {
  const modal = document.getElementById('detail-modal');
  if (modal) modal.classList.remove('open');
}

function selectPackageForBooking(packageName) {
  closeDetailModal();
  const select = document.getElementById('inquiry-category');
  const notes = document.getElementById('inquiry-notes');
  if (notes) {
    notes.value = `Interested in: ${packageName}`;
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleInquirySubmit(e) {
  e.preventDefault();
  const toast = document.getElementById('toast-banner');
  if (toast) {
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }
  e.target.reset();
}
