const iconPaths = import.meta.glob('/src/assets/icons/frontal-cortex/*.webp', {
  eager: true,
  import: 'default',
})

const icons = {}

for (const [path, url] of Object.entries(iconPaths)) {
  const cleanPath = path.replace('/src/assets/icons/', '')
  const [folder, file] = cleanPath.split('/')
  const name = file.replace('.webp', '')

  if (!icons[folder]) {
    icons[folder] = {}
  }

  icons[folder][name] = url
}

console.log(icons)

export const frontalCortex = [
  {
    id: 'a',
    label: 'Axolotl',
    capacity: 48,
    icon: icons['frontal-cortex']['SubdermalCoProcessor'],
    conflicts: ['8'],
  },
  {
    id: 'b',
    label: 'Bioconductor',
    capacity: 16,
    icon: icons['frontal-cortex']['BioConductors'],
    conflicts: [],
  },
  {
    id: 'c',
    label: 'COX-2 Cybersomatic Optimiser',
    capacity: 50,
    icon: icons['frontal-cortex']['SubdermalCoProcessor'],
    conflicts: [],
  },
  {
    id: 'd',
    label: 'Camillo RAM Manager',
    capacity: 8,
    icon: icons['frontal-cortex']['CamilloRamManager'],
    conflicts: [],
  },
  {
    id: 'e',
    label: 'Ex-Disk',
    capacity: 10,
    icon: icons['frontal-cortex']['ExDisk'],
    conflicts: [],
  },
  {
    id: 'f',
    label: 'Kerenzikov Boost System',
    capacity: 3,
    icon: icons['frontal-cortex']['KerenziovBoostSystem'],
    conflicts: [],
  },
  {
    id: 'g',
    label: 'Mechatronic Core',
    capacity: 5,
    icon: icons['frontal-cortex']['MechatronicCore'],
    conflicts: [],
  },
  {
    id: 'h',
    label: 'Memory Boost',
    capacity: 18,
    icon: icons['frontal-cortex']['MemoryBoost'],
    conflicts: [],
  },
  {
    id: 'i',
    label: 'Newton Module',
    capacity: 14,
    icon: icons['frontal-cortex']['BioConductors'],
    conflicts: ['0'],
  },
  {
    id: 'j',
    label: 'Quantum Tuner',
    capacity: 45,
    icon: icons['frontal-cortex']['TimeBank'],
    conflicts: [],
  },
  {
    id: 'k',
    label: 'RAM Reallocator',
    capacity: 40,
    icon: icons['frontal-cortex']['CamilloRamManager'],
    conflicts: [],
  },
  {
    id: 'l',
    label: 'RAM Upgrade',
    capacity: 8,
    icon: icons['frontal-cortex']['RamUpgrade'],
    conflicts: [],
  },
  {
    id: 'm',
    label: 'Self-ICE',
    capacity: 5,
    icon: icons['frontal-cortex']['SelfIce'],
    conflicts: [],
  },
]
