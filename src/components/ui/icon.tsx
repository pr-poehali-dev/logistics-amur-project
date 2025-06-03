import {
  Phone,
  MapPin,
  Truck,
  Train,
  Plane,
  Ship,
  Check,
  Shield,
  Clock,
  DollarSign,
  Users,
  Mail,
  MessageCircle,
  CircleAlert,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Phone,
  MapPin,
  Truck,
  Train,
  Plane,
  Ship,
  Check,
  Shield,
  Clock,
  DollarSign,
  Users,
  Mail,
  MessageCircle,
  CircleAlert,
};

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
