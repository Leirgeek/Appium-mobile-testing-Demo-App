import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.56c93a225dbb4774b168a45f73f0daf1',
  appName: 'demo-visual-navigator',
  webDir: 'dist',
  server: {
    url: 'https://56c93a22-5dbb-4774-b168-a45f73f0daf1.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;