const topicData = {
  observables: {
    icon: '⚛️',
    label: 'Observables & Operators',
    title: 'Hermitian operators, measurement outcomes, and basis completeness',
    visual: 'Hermitian spectrum',
    intro: 'This topic builds the foundation of quantum measurement. Observables are represented by Hermitian operators, and their eigenstates form the basis of the quantum state space.',
    paragraphs: [
      'In quantum mechanics, observables are represented by Hermitian operators to ensure that measurement results are real. Physical quantities such as position, momentum, energy, and angular momentum are described by operators whose eigenvalues correspond to allowed outcomes.',
      'The eigenstates of an observable form a complete and orthonormal basis for the system. Any quantum state can be expanded in this basis, and after measurement the state collapses into one of the eigenstates associated with the measured eigenvalue.',
      'Commutators determine whether different observables can be measured simultaneously. If two operators commute, they share a common set of eigenstates and their measurements are compatible. Otherwise, their nonzero commutator gives rise to uncertainty relations between the two quantities.'
    ],
    bullets: [
      'Observables are represented by Hermitian operators.',
      'Eigenvalues are the allowed measurement outcomes.',
      'Eigenstates form an orthonormal complete basis.',
      'Commutators determine measurement compatibility.'
    ],
    noteLink: 'quantum/quantum-foundations.pdf'
  },
  measurement: {
    icon: '📏',
    label: 'Measurement & Eigenstates',
    title: 'Wavefunction collapse, probability amplitudes, and compatible observables',
    visual: 'Measurement collapse',
    intro: 'Quantum measurement links the mathematical state to the physical result. This section explains how projections, probabilities, and compatible observables shape the measured outcome.',
    paragraphs: [
      'Measurement is described by projecting the quantum state onto the eigenbasis of the observable. The probability of each result is given by the squared amplitude of the projection, and after measurement the system collapses into the corresponding eigenstate.',
      'Expectation values represent the average measured result over many identical preparations of a system. They are computed using the wavefunction, the operator, and the inner product, giving the central tendency for repeated measurements.',
      'Compatible observables commute with each other and can be measured simultaneously without disturbing one another. Incompatible observables do not commute, and measuring one generally changes the probabilities for the other, which is the origin of the uncertainty principle.'
    ],
    bullets: [
      'Measurement projects the state onto eigenstates.',
      'Probabilities come from amplitude-squared values.',
      'Expectation values describe average outcomes.',
      'Commuting observables are compatible measurements.'
    ],
    noteLink: 'quantum/quantum-foundations.pdf'
  },
  angularMomentum: {
    icon: '🌀',
    label: 'Angular Momentum',
    title: 'Spherical harmonics, hydrogen orbitals, and spin addition',
    visual: 'Angular motion',
    intro: 'Angular momentum is essential for atomic structure and spin. This topic covers the hydrogen atom, spherical harmonics, and how angular momenta combine in composite systems.',
    paragraphs: [
      'Angular momentum operators satisfy the algebra of the rotation group. The total squared angular momentum L² and its z-component Lz have discrete eigenvalues, and their common eigenfunctions determine allowed angular states in atoms.',
      'Spherical harmonics are the angular eigenfunctions for central potentials. They appear in the hydrogen atom wavefunctions and are orthogonal due to the angular integration measure that includes sinθ in spherical coordinates.',
      'Adding angular momentum from two subsystems requires Clebsch-Gordan methods. The combined system produces total angular momentum states labeled by j and m, and the allowed values follow the triangular addition rule.'
    ],
    bullets: [
      'L² and Lz are quantized with discrete eigenvalues.',
      'Spherical harmonics describe angular wavefunctions.',
      'Hydrogen orbitals follow angular momentum rules.',
      'Angular momenta add through Clebsch-Gordan combinations.'
    ],
    noteLink: 'quantum/angular-momentum-addition.pdf'
  },
  rotationGroups: {
    icon: '🔁',
    label: 'Rotation Groups',
    title: 'Group structure, rotation matrices, and invariance',
    visual: 'Rotation matrix',
    intro: 'Rotation groups organize how vectors and operators transform in space. This section explains orthogonal matrices, invariance, and how rotations form a mathematical group.',
    paragraphs: [
      'Rotation operations in three dimensions are represented by orthogonal matrices that preserve vector length. The condition RᵀR = I defines the rotation group, and group properties ensure closure, associativity, identity, and inverses under multiplication.',
      'Physically, rotations describe how a vector’s components change between coordinate systems while keeping its magnitude fixed. In quantum mechanics, these spatial rotations are implemented by unitary operators acting on state vectors and observables.',
      'Understanding rotation groups is key to classifying angular momentum and determining how quantum states behave under symmetry transformations. The structure also underlies the connection between classical and quantum rotational invariance.'
    ],
    bullets: [
      'Rotation matrices preserve vector norms.',
      'Rotation operations satisfy group axioms.',
      'Quantum rotations are implemented by unitary operators.',
      'Symmetry under rotation constrains physical laws.'
    ],
    noteLink: 'quantum/rotation-groups.pdf'
  },
  wignerEckart: {
    icon: '📐',
    label: 'Wigner-Eckart',
    title: 'Tensor operators, selection rules, and angular matrix elements',
    visual: 'Tensor selection',
    intro: 'The Wigner-Eckart theorem simplifies matrix elements by separating angular dependence from physical coupling strengths.',
    paragraphs: [
      'Finite rotations in quantum mechanics are implemented by exponential operators built from angular momentum generators. For spin-1/2, these rotation operators are based on Pauli matrices and reproduce familiar rotation matrices in Hilbert space.',
      'The Wigner-Eckart theorem states that matrix elements of tensor operators factor into a reduced matrix element and a Clebsch-Gordan coefficient. This removes angular dependence from the physical dynamics and reduces calculation complexity.',
      'Using Wigner-Eckart, selection rules become transparent. Only transitions consistent with angular momentum coupling and tensor rank survive, which is why many matrix elements vanish by symmetry.'
    ],
    bullets: [
      'Rotation operators are exponentials of angular generators.',
      'Wigner-Eckart factors matrix elements into angular and physical parts.',
      'Clebsch-Gordan coefficients encode angular selection rules.',
      'Many transitions vanish by symmetry constraints.'
    ],
    noteLink: 'quantum/wigner-eckart-theorem.pdf'
  },
  selection: {
    icon: '✨',
    label: 'Selection Rules',
    title: 'Allowed transitions, parity, and tensor operators',
    visual: 'Allowed transitions',
    intro: 'Selection rules tell us which quantum transitions are permitted. This topic explains why symmetry and operator structure force many matrix elements to vanish.',
    paragraphs: [
      'Selection rules arise from symmetry properties of operators and states. Transition matrix elements between initial and final states are nonzero only when the operator carries the right angular momentum and parity changes.',
      'Electric dipole transitions are the most common case. They require changes in orbital angular momentum and parity determined by the dipole operator’s transformation properties, which is why Δl = ±1 rules appear in spectroscopy.',
      'Writing operators as tensor components and using spherical harmonics makes selection rules systematic. The Wigner-Eckart theorem then shows that many matrix elements vanish unless the quantum numbers satisfy strict conditions.'
    ],
    bullets: [
      'Selection rules follow from symmetry and parity.',
      'Electric dipole transitions impose Δl and Δm constraints.',
      'Tensor decomposition clarifies allowed operators.',
      'Forbidden matrix elements vanish by symmetry.'
    ],
    noteLink: 'quantum/selection-rules.pdf'
  },
  matrixMechanics: {
    icon: '🧮',
    label: 'Matrix Mechanics',
    title: 'Pauli matrices, operators, and spin-1/2 systems',
    visual: 'Matrix algebra',
    intro: 'Matrix mechanics is the original formulation of quantum theory. This chapter covers matrices for angular momentum and the algebra of Pauli matrices.',
    paragraphs: [
      'In matrix mechanics, observables are matrices acting on state vectors. For spin-1/2 systems, the angular momentum operators Jx, Jy, and Jz are represented using Pauli matrices, which satisfy well-known commutation relations.',
      'The Pauli matrices obey σ_iσ_j = δ_ijI + i ε_ijk σ_k. This algebra encodes the structure of spin and is the foundation for describing two-level systems, electron spin, and magnetic interactions.',
      'Matrix mechanics provides a compact way to calculate dynamics and expectation values. Working directly with matrices is especially powerful for systems with discrete bases such as spin-1/2 and simple angular momentum models.'
    ],
    bullets: [
      'Observables become matrices in discrete bases.',
      'Pauli matrices generate spin-1/2 angular momentum.',
      'Pauli algebra encodes commutation relations.',
      'Matrix mechanics is ideal for two-level systems.'
    ],
    noteLink: 'quantum/matrix-mechanics.pdf'
  },
  timeDependent: {
    icon: '⏱️',
    label: 'Time-dependent Perturbation',
    title: 'Driven systems, transitions, and Rabi dynamics',
    visual: 'Driven transitions',
    intro: 'Time-dependent perturbation theory describes how quantum systems evolve when external fields vary in time. It explains transition probabilities, resonance, and pulse effects.',
    paragraphs: [
      'Time-dependent perturbation theory treats Hamiltonians with explicit time dependence. It is used to calculate transition amplitudes between states when the system interacts with oscillating fields or pulses.',
      'In a two-level system, a time-dependent perturbation can induce transitions with probabilities that oscillate in time. Resonance appears when the drive frequency matches the energy difference between states, maximizing the transition rate.',
      'Short pulses have a broad bandwidth and can excite multiple transitions, while long pulses are more frequency-selective. The pulse duration therefore controls how effectively the system absorbs energy from the perturbation.'
    ],
    bullets: [
      'Time-dependent Hamiltonians drive transitions between states.',
      'Resonance appears when drive frequency matches energy gaps.',
      'Two-level systems show oscillatory transition probabilities.',
      'Pulse duration controls bandwidth and excitation strength.'
    ],
    noteLink: 'quantum/time-dependent-perturbation.pdf'
  },
  adiabaticSudden: {
    icon: '⏳',
    label: 'Adiabatic vs Sudden',
    title: 'Slow and fast changes in quantum systems',
    visual: 'Slow vs fast',
    intro: 'Quantum systems behave differently under slow and rapid parameter changes. This topic compares the adiabatic theorem and the sudden approximation.',
    paragraphs: [
      'The adiabatic theorem states that a system stays in its instantaneous eigenstate if the Hamiltonian changes slowly enough. This means the quantum number remains fixed while the parameters evolve gently.',
      'The sudden approximation applies when the change is much faster than the system’s internal timescale. The wavefunction remains essentially unchanged during the jump and is then expressed as a superposition of the new eigenstates afterward.',
      'The validity of each regime depends on the rate of change relative to the energy gaps. Slow evolution preserves state identity, while sudden changes create mixtures and can excite many states simultaneously.'
    ],
    bullets: [
      'Adiabatic evolution preserves instantaneous eigenstates.',
      'Sudden changes freeze the wavefunction during the jump.',
      'Validity depends on the change rate and energy gaps.',
      'Both limits are useful for quantum control.'
    ],
    noteLink: 'quantum/adiabatic-vs-sudden-approximation.pdf'
  },
  fermiGoldenRule: {
    icon: '📇',
    label: 'Fermi Golden Rule',
    title: 'Transition rates, continuum states, and density of states',
    visual: 'Transition rate',
    intro: 'The Fermi Golden Rule links perturbations to transition probabilities. It is used to calculate rates for transitions into continua and energy-dependent scattering. ',
    paragraphs: [
      'The Fermi Golden Rule gives the transition rate from an initial discrete state into a continuum of final states. The result depends on the square of the perturbation matrix element and the density of states at the final energy.',
      'For weak, time-dependent perturbations, the rule simplifies the problem by treating the perturbation to first order. The transition rate is proportional to |⟨f|V|i⟩|² and the density of available final states.',
      'The energy dependence of the density of states influences how the transition rate changes with energy. In many scattering and decay processes, this energy dependence is a central factor in the observed spectrum.'
    ],
    bullets: [
      'Transition rates are proportional to matrix element squared.',
      'Density of states controls available final states.',
      'The rule applies to weak, time-dependent perturbations.',
      'It is central to decay and scattering probabilities.'
    ],
    noteLink: 'quantum/fermi-golden-rule.pdf'
  },
  wkbTunneling: {
    icon: '🌋',
    label: 'WKB & Tunneling',
    title: 'Semiclassical approximation, turning points, and barriers',
    visual: 'Tunneling path',
    intro: 'WKB is the semiclassical method for quantum motion in slowly varying potentials. This topic explains bound-state estimates and tunnel penetration through barriers.',
    paragraphs: [
      'The WKB approximation estimates quantum states in potentials that change slowly compared to the wavelength. It gives a semiclassical quantization rule between turning points, which is useful for bound states in wells and oscillators.',
      'Turning points occur where the classical momentum vanishes. In the WKB method, solutions change behavior near these points and must be matched carefully to obtain quantized energy conditions and bound-state estimates.',
      'Tunneling appears when a particle encounters a classically forbidden region. The WKB approximation gives an exponential estimate for the transmission probability, which is the basis for understanding alpha decay and barrier penetration.'
    ],
    bullets: [
      'WKB approximates slowly varying potentials semiclassically.',
      'Turning points determine quantization conditions.',
      'Tunneling probability is exponentially suppressed.',
      'WKB explains alpha decay and barrier penetration.'
    ],
    noteLink: 'quantum/wkb-tunneling.pdf'
  }
};

const topicList = document.getElementById('topic-list');
const topicIcon = document.getElementById('topic-icon');
const topicVisual = document.getElementById('topic-visual');
const topicLabel = document.getElementById('topic-label');
const topicTitle = document.getElementById('topic-title');
const topicIntro = document.getElementById('topic-intro');
const topicParagraphs = document.getElementById('topic-paragraphs');
const topicBullets = document.getElementById('topic-bullets');
const topicPdf = document.getElementById('topic-pdf');

function renderTopic(topicKey) {
  const data = topicData[topicKey];
  if (!data) return;

  topicIcon.textContent = data.icon;
  topicVisual.textContent = data.visual;
  topicLabel.textContent = data.label;
  topicTitle.textContent = data.title;
  topicIntro.textContent = data.intro;
  topicParagraphs.innerHTML = data.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('');
  topicBullets.innerHTML = data.bullets.map((item) => `<li>${item}</li>`).join('');
  topicPdf.href = data.noteLink;
  topicPdf.textContent = `Open ${data.label} notes`;

  document.querySelectorAll('.topic-card').forEach((button) => {
    button.classList.toggle('active', button.dataset.topic === topicKey);
  });
}

function createTopicButtons() {
  Object.keys(topicData).forEach((topicKey) => {
    const data = topicData[topicKey];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'topic-card';
    button.dataset.topic = topicKey;
    button.innerHTML = `<span class="topic-card-icon">${data.icon}</span><strong>${data.label}</strong><span>${data.title}</span>`;
    button.addEventListener('click', () => renderTopic(topicKey));
    topicList.appendChild(button);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  createTopicButtons();
  const initialTopic = window.location.hash.replace('#', '') || 'observables';
  if (topicData[initialTopic]) {
    renderTopic(initialTopic);
  } else {
    renderTopic('observables');
  }
});
