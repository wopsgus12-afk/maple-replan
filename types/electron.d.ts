export type ElectronAPI = {
  isElectron: boolean;
  openOverlay: () => Promise<void>;
  closeOverlay: () => Promise<void>;
};

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}

export {};
