export function isElectron(): boolean {
  return typeof window !== "undefined" && window.electronAPI?.isElectron === true;
}

export async function openElectronOverlay(): Promise<boolean> {
  if (!window.electronAPI?.openOverlay) return false;
  await window.electronAPI.openOverlay();
  return true;
}

export async function closeElectronOverlay(): Promise<boolean> {
  if (!window.electronAPI?.closeOverlay) return false;
  await window.electronAPI.closeOverlay();
  return true;
}
