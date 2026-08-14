export type Language = 'en' | 'ja' | 'zh';

export type StatusType =
  | '原生直连'
  | '条件适配/需确认SKU'
  | '需DisplayLink'
  | '需扩展坞'
  | '不适配原生直连'
  | '证据不足/待验证';

export type RiskLevel = '低' | '中' | '高';

export interface LaptopRecord {
  id: number;
  brand: string;
  model: string;
  generation: string;
  ports: string;
  status: StatusType;
  risk: RiskLevel;
  sourceUrl?: string;
  notes?: string;
}

export interface BrandReference {
  brand: string;
  commonPorts: string;
  directPath: string;
  fallbackPath: string;
}

export interface DecadeTrend {
  brand: string;
  early: string;
  middle: string;
  recent: string;
  adapter: string;
}

export interface CableGuideItem {
  key: string;
  name: string;
  badge: string;
  note: string;
  connector: 'usb-a-to-c' | 'usb-c-to-c' | 'hdmi-to-type-c' | 'h5-hdmi-adapter';
}

export interface BrandProfile {
  id?: string | number;
  brand?: string;
  family: string;
  aliases: string[];
  yearRange: [number, number];
  confidenceLabel: 'High' | 'Strong' | 'Moderate' | 'Brand-level' | string;
  notes: string[];
  [key: string]: unknown;
}

export interface StatusConfig {
  label: string;
  recommendation: string;
  accessory: string;
  tone: 'success' | 'warning' | 'danger' | 'neutral';
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category: 'dual' | 'triple' | 'quad' | 'accessory';
  tagline: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  screenSize: string;
  resolution: string;
  panelType: string;
  weight: string;
  badge?: string;
  image: string;
  compatibilityNote: string;
}

export interface CartItem {
  product: ProductItem;
  quantity: number;
}
