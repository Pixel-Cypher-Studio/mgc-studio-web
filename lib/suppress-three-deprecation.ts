/**
 * Suppresses Three.js deprecation warnings until upstream libraries migrate.
 * @see https://github.com/pmndrs/react-three-fiber/issues/XXXX
 */
export function suppressThreeClockWarning() {
  if (typeof window === 'undefined') return

  const originalWarn = console.warn
  console.warn = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('THREE.Clock')) return
    originalWarn.apply(console, args)
  }
}
