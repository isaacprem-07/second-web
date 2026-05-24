const topicData = {
  observables: {
    label: 'Observables & Operators',
    title: 'Quantum observables, Hermitian operators, and measurement theory',
    description: 'Observables in quantum mechanics are represented by Hermitian operators. This topic explains why eigenvalues are real, how eigenstates define outcomes, and why commutators determine compatible measurements.',
    bullets: [
      'Hermitian operators and physical observables.',
      'Eigenvalue equations and measurement outcomes.',
      'Completeness, orthonormality, and basis states.',
      'Commutators, compatibility, and uncertainty relations.'
    ],
    noteLink: 'quantum/quantum-foundations.pdf',
    visual: 'Hermitian operators, eigenvalues, and quantum observables'
  },
  measurement: {
    label: 'Measurement & Eigenstates',
    title: 'Wavefunction collapse, probabilities, and compatible observables',
    description: 'Measurement in quantum mechanics connects the mathematical state to experimental outcomes. Learn how projection, collapse, and compatible operators shape the quantum picture.',
    bullets: [
      'Projection postulate and collapse of the wavefunction.',
      'Compatible vs incompatible observables.',
      'Expectation values and statistical interpretation.',
      'Continuous and discrete spectra.'
    ],
    noteLink: 'quantum/quantum-foundations.pdf',
    visual: 'Wavefunction collapse and probability amplitudes'
  },
  angular: {
    label: 'Angular Momentum',
    title: 'Hydrogen atom, spherical harmonics, and addition of spins',
    description: 'Angular momentum is central to atomic structure and quantum states. This topic covers L², Lz, spherical harmonics, and how different angular momenta combine in physical systems.',
    bullets: [
      'L², Lz, ladder operators, and eigenstates.',
      'Spherical harmonics and their orthogonality.',
      'Hydrogen atom probability and radial distribution.',
      'Addition of angular momentum and total J.'
    ],
    noteLink: 'quantum/hydrogen-angular-momentum.pdf',
    visual: 'Spherical harmonics and angular momentum coupling'
  },
  symmetry: {
    label: 'Rotations & Symmetry',
    title: 'Rotation groups, tensor operators, and symmetry selection rules',
    description: 'Rotations in quantum mechanics are implemented by unitary operators. This section explains rotation matrices, Wigner-Eckart theorem, and how symmetry constrains transitions.',
    bullets: [
      'Rotation operator formalism and Pauli representation.',
      'Group theory for SO(3) and SU(2).',
      'Tensor operators and Wigner-Eckart theorem.',
      'Selection rules for angular momentum transitions.'
    ],
    noteLink: 'quantum/wigner-eckart-theorem.pdf',
    visual: 'Quantum rotation symmetry and transformation matrices'
  },
  selection: {
    label: 'Selection Rules',
    title: 'Transition rules, tensor operators, and operator symmetry',
    description: 'Selection rules determine which transitions are allowed in atoms. Learn how symmetry, tensor decomposition, and operator parity limit observable transitions.',
    bullets: [
      'Matrix elements and vanishing transition amplitudes.',
      'Electric dipole selection rules and angular momentum.',
      'Wigner-Eckart theorem applied to atomic operators.',
      'Tensor operator components and physical significance.'
    ],
    noteLink: 'quantum/selection-rules.pdf',
    visual: 'Selection rules and transition symmetry in quantum systems'
  },
  dynamics: {
    label: 'Time-dependent Perturbation',
    title: 'Driven quantum systems and transition probabilities',
    description: 'Time-dependent perturbation theory describes how quantum systems respond to oscillating fields and pulses. This topic includes two-level transitions, perturbative excitation, and matrix element methods.',
    bullets: [
      'Two-level system dynamics and Rabi oscillations.',
      'Time-dependent perturbation matrix elements.',
      'Pulse-driven transitions and bandwidth effects.',
      'Probability evolution with perturbations.'
    ],
    noteLink: 'quantum/time-dependent-perturbation.pdf',
    visual: 'Quantum transitions under time-dependent perturbation'
  },
  adiabatic: {
    label: 'Adiabatic vs Sudden',
    title: 'Slow and fast quantum changes with adiabatic and sudden limits',
    description: 'Quantum systems respond differently to slow and rapid parameter changes. Explore the adiabatic theorem, sudden approximation, and when a system remains in its instantaneous eigenstate.',
    bullets: [
      'Adiabatic theorem and slow parameter variation.',
      'Sudden approximation and instant wavefunction changes.',
      'Condition for validity of both limits.',
      'Examples in quantum wells and moving boundaries.'
    ],
    noteLink: 'quantum/adiabatic-vs-sudden-approximation.pdf',
    visual: 'Quantum evolution in adiabatic and sudden regimes'
  },
  scattering: {
    label: 'Scattering Theory',
    title: 'Born approximation, phase shifts, and cross sections',
    description: 'Scattering theory connects quantum waves to experimental cross sections. Study the Born approximation, partial-wave phase shifts, and how potentials affect scattering amplitudes.',
    bullets: [
      'Born approximation for weak potentials.',
      'Partial wave expansion and phase shifts.',
      'S-wave scattering and low-energy limits.',
      'Cross sections for Yukawa and delta-shell potentials.'
    ],
    noteLink: 'quantum/scattering-born-approx.pdf',
    visual: 'Quantum scattering amplitudes and phase shifts'
  },
  ptsymmetry: {
    label: 'PT Symmetry',
    title: 'Parity-time symmetry and non-Hermitian Hamiltonians',
    description: 'PT-symmetric quantum systems can have real spectra even when the Hamiltonian is non-Hermitian. Learn how parity, time reversal, and symmetry lead to physical consequences.',
    bullets: [
      'Parity and time reversal operations.',
      'PT-symmetric Hamiltonians and eigenvalue properties.',
      'Examples of non-Hermitian but physical operators.',
      'Symmetry conditions for real spectra.'
    ],
    noteLink: 'quantum/pt-symmetry.pdf',
    visual: 'Parity-time symmetry in quantum Hamiltonians'
  }
};

const topicButtons = document.querySelectorAll('.topic-card');
const detailImage = document.querySelector('.detail-image .detail-visual');
const topicLabel = document.getElementById('topic-label');
const topicTitle = document.getElementById('topic-title');
const topicDescription = document.getElementById('topic-description');
const topicBullets = document.getElementById('topic-bullets');
const topicLink = document.getElementById('topic-pdf');
const quantumSection = document.getElementById('quantum');
const viewQuantum = document.getElementById('view-quantum');
const backQuantum = document.getElementById('quantum-back');

function renderTopic(topicKey) {
  const data = topicData[topicKey];
  if (!data) return;

  if (topicButtons.length) {
    topicButtons.forEach((button) => {
      button.classList.toggle('active', button.dataset.topic === topicKey);
    });
  }

  if (topicLabel) topicLabel.textContent = data.label;
  if (topicTitle) topicTitle.textContent = data.title;
  if (topicDescription) topicDescription.textContent = data.description;
  if (topicBullets) topicBullets.innerHTML = data.bullets.map((item) => `<li>${item}</li>`).join('');
  if (topicLink) {
    topicLink.href = data.noteLink;
    topicLink.textContent = `Open ${data.label} notes`;
  }
  if (detailImage) detailImage.textContent = data.visual;
}

function openQuantumSection(event) {
  event?.preventDefault();
  if (!quantumSection) return;
  quantumSection.classList.add('active');
  setTimeout(() => quantumSection.scrollIntoView({ behavior: 'smooth' }), 20);
}

function closeQuantumSection(event) {
  event?.preventDefault();
  if (!quantumSection) return;
  quantumSection.classList.remove('active');
  const researchSection = document.getElementById('research');
  if (researchSection) researchSection.scrollIntoView({ behavior: 'smooth' });
}

if (viewQuantum) viewQuantum.addEventListener('click', openQuantumSection);
if (backQuantum) backQuantum.addEventListener('click', closeQuantumSection);

topicButtons.forEach((button) => {
  button.addEventListener('click', () => renderTopic(button.dataset.topic));
});

window.addEventListener('DOMContentLoaded', () => {
  renderTopic('observables');
});
