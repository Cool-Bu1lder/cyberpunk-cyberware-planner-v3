const iconPaths = import.meta.glob('/src/assets/icons/frontal-cortex/*.webp', {
  eager: true,
  import: 'default',
})

export const icons = {}

for (const [path, url] of Object.entries(iconPaths)) {
  const cleanPath = path.replace('/src/assets/icons/', '')
  const [folder, file] = cleanPath.split('/')
  const name = file.replace('.webp', '')

  if (!icons[folder]) {
    icons[folder] = {}
  }

  icons[folder][name] = url
}
