export type ThemeId = 'dark' | 'nature' | 'ocean' | 'sunset' | 'tfs';

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  nameEn: string;
  color: string;
  bgPreview: string;
}

export const AVAILABLE_THEMES: ThemeConfig[] = [
  {
    id: 'dark',
    name: 'মিডনাইট',
    nameEn: 'Midnight',
    color: '#38BDF8',
    bgPreview: '#0B0F19'
  },
  {
    id: 'nature',
    name: 'এমারাল্ড',
    nameEn: 'Emerald',
    color: '#10B981',
    bgPreview: '#062319'
  },
  {
    id: 'ocean',
    name: 'ওশান',
    nameEn: 'Ocean',
    color: '#0284C7',
    bgPreview: '#071A2E'
  },
  {
    id: 'sunset',
    name: 'এম্বার',
    nameEn: 'Ember',
    color: '#F59E0B',
    bgPreview: '#1A0F24'
  },
  {
    id: 'tfs',
    name: 'ভেলভেট',
    nameEn: 'Velvet',
    color: '#A855F7',
    bgPreview: '#1E0A2F'
  }
];
