import { 
  Home, 
  Wrench, 
  Wind, 
  Shield, 
  Droplets, 
  Building2,
  Hammer,
  HardHat,
  Umbrella,
  Sun,
  CloudRain,
  Zap,
  CheckCircle,
  AlertTriangle,
  FileCheck,
  DollarSign,
  Clock,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  Award,
  ThumbsUp,
  Star,
  Heart,
  TrendingUp,
  Settings,
  Drill,
  Layers,
  Package,
  Truck,
  ClipboardCheck,
  FileText,
  CreditCard,
  BarChart,
  Target,
  Sparkles,
  Mountain,
  Waves,
  TreePine,
  CloudSnow,
  type LucideIcon
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12'
};

const iconMap: Record<string, LucideIcon> = {
  // Service Icons
  home: Home,
  wrench: Wrench,
  wind: Wind,
  shield: Shield,
  droplets: Droplets,
  building: Building2,
  hammer: Hammer,
  hardhat: HardHat,
  umbrella: Umbrella,
  
  // Weather Icons
  sun: Sun,
  cloudRain: CloudRain,
  cloudSnow: CloudSnow,
  zap: Zap,
  waves: Waves,
  
  // Status Icons
  checkCircle: CheckCircle,
  alertTriangle: AlertTriangle,
  fileCheck: FileCheck,
  clipboardCheck: ClipboardCheck,
  
  // Business Icons
  dollarSign: DollarSign,
  clock: Clock,
  phone: Phone,
  mail: Mail,
  mapPin: MapPin,
  calendar: Calendar,
  users: Users,
  award: Award,
  thumbsUp: ThumbsUp,
  star: Star,
  heart: Heart,
  trendingUp: TrendingUp,
  barChart: BarChart,
  target: Target,
  
  // Tool Icons
  settings: Settings,
  tool: Drill,
  layers: Layers,
  package: Package,
  truck: Truck,
  
  // Document Icons
  fileText: FileText,
  creditCard: CreditCard,
  
  // Decorative Icons
  sparkles: Sparkles,
  mountain: Mountain,
  treePine: TreePine
};

export function ServiceIcon({ name, className = '', size = 'md' }: IconProps) {
  const Icon = iconMap[name] || Shield;
  
  return (
    <Icon className={`${iconSizes[size]} ${className}`} />
  );
}

// Pre-configured service icons with colors
export function RoofReplacementIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="home" className={`text-weather-teal ${className}`} size={size} />;
}

export function RoofRepairIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="wrench" className={`text-weather-purple ${className}`} size={size} />;
}

export function StormDamageIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="wind" className={`text-red-500 ${className}`} size={size} />;
}

export function InspectionIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="clipboardCheck" className={`text-weather-teal ${className}`} size={size} />;
}

export function GutterServiceIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="droplets" className={`text-blue-500 ${className}`} size={size} />;
}

export function CommercialRoofingIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="building" className={`text-weather-purple ${className}`} size={size} />;
}

export function EmergencyIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="zap" className={`text-orange-500 ${className}`} size={size} />;
}

export function WarrantyIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return <ServiceIcon name="shield" className={`text-green-500 ${className}`} size={size} />;
}

// Animated icons
export function PulsingEmergencyIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return (
    <div className="relative inline-block">
      <ServiceIcon name="zap" className={`text-red-500 ${className}`} size={size} />
      <div className="absolute inset-0 animate-ping">
        <ServiceIcon name="zap" className={`text-red-500 opacity-30 ${className}`} size={size} />
      </div>
    </div>
  );
}

export function FloatingPhoneIcon({ className = '', size = 'md' }: Omit<IconProps, 'name'>) {
  return (
    <div className="animate-float">
      <ServiceIcon name="phone" className={`text-weather-teal ${className}`} size={size} />
    </div>
  );
}

// Icon with badge
interface IconWithBadgeProps extends Omit<IconProps, 'name'> {
  icon: string;
  badge?: string;
  badgeColor?: string;
}

export function IconWithBadge({ 
  icon, 
  badge, 
  badgeColor = 'bg-red-500', 
  className = '', 
  size = 'md' 
}: IconWithBadgeProps) {
  return (
    <div className="relative inline-block">
      <ServiceIcon name={icon} className={className} size={size} />
      {badge && (
        <span className={`absolute -top-1 -right-1 ${badgeColor} text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold`}>
          {badge}
        </span>
      )}
    </div>
  );
}

// Export all icons for easy access
export const Icons = {
  Service: ServiceIcon,
  RoofReplacement: RoofReplacementIcon,
  RoofRepair: RoofRepairIcon,
  StormDamage: StormDamageIcon,
  Inspection: InspectionIcon,
  GutterService: GutterServiceIcon,
  CommercialRoofing: CommercialRoofingIcon,
  Emergency: EmergencyIcon,
  Warranty: WarrantyIcon,
  PulsingEmergency: PulsingEmergencyIcon,
  FloatingPhone: FloatingPhoneIcon,
  WithBadge: IconWithBadge
};

export default Icons;