import awsIcon from "@/assets/icons/aws-icon.png";

interface FlatIconProps {
  name: string;
  size?: number;
  className?: string;
}

// Flaticon CDN-based icons using their free icon set
// Using Flaticon's uicons collection for consistent styling
const iconMap: Record<string, string> = {
  // Cloud Providers
  'aws': awsIcon,
  'azure': 'https://cdn-icons-png.flaticon.com/512/873/873107.png',
  'gcp': 'https://cdn-icons-png.flaticon.com/512/873/873117.png',
  'oracle': 'https://cdn-icons-png.flaticon.com/512/5969/5969229.png',
  
  // DevOps Tools
  'docker': 'https://cdn-icons-png.flaticon.com/512/5969/5969059.png',
  'kubernetes': 'https://cdn-icons-png.flaticon.com/512/5969/5969113.png',
  'terraform': 'https://cdn-icons-png.flaticon.com/512/5969/5969154.png',
  'jenkins': 'https://cdn-icons-png.flaticon.com/512/5969/5969100.png',
  'github': 'https://cdn-icons-png.flaticon.com/512/5968/5968866.png',
  'gitlab': 'https://cdn-icons-png.flaticon.com/512/5969/5969084.png',
  
  // General Tech
  'cloud': 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png',
  'server': 'https://cdn-icons-png.flaticon.com/512/1383/1383395.png',
  'database': 'https://cdn-icons-png.flaticon.com/512/2906/2906274.png',
  'security': 'https://cdn-icons-png.flaticon.com/512/2913/2913133.png',
  'network': 'https://cdn-icons-png.flaticon.com/512/1927/1927746.png',
  'code': 'https://cdn-icons-png.flaticon.com/512/1005/1005141.png',
  'terminal': 'https://cdn-icons-png.flaticon.com/512/5578/5578555.png',
  'automation': 'https://cdn-icons-png.flaticon.com/512/2248/2248295.png',
  'monitoring': 'https://cdn-icons-png.flaticon.com/512/3616/3616975.png',
  'analytics': 'https://cdn-icons-png.flaticon.com/512/2329/2329087.png',
  'rocket': 'https://cdn-icons-png.flaticon.com/512/3930/3930053.png',
  'lightning': 'https://cdn-icons-png.flaticon.com/512/3534/3534033.png',
  'settings': 'https://cdn-icons-png.flaticon.com/512/3953/3953226.png',
  'ai': 'https://cdn-icons-png.flaticon.com/512/2814/2814666.png',
  'cpu': 'https://cdn-icons-png.flaticon.com/512/2906/2906206.png',
  'workflow': 'https://cdn-icons-png.flaticon.com/512/3616/3616965.png',
  'learn': 'https://cdn-icons-png.flaticon.com/512/3413/3413504.png',
  'scaling': 'https://cdn-icons-png.flaticon.com/512/2920/2920322.png',
  'cost': 'https://cdn-icons-png.flaticon.com/512/2830/2830289.png',
  'support': 'https://cdn-icons-png.flaticon.com/512/3062/3062634.png',
  'performance': 'https://cdn-icons-png.flaticon.com/512/3616/3616947.png',
  'success': 'https://cdn-icons-png.flaticon.com/512/5290/5290058.png',
  'architecture': 'https://cdn-icons-png.flaticon.com/512/2779/2779775.png',
  'startup': 'https://cdn-icons-png.flaticon.com/512/3930/3930041.png',
};

const FlatIcon = ({ name, size = 24, className = "" }: FlatIconProps) => {
  const iconUrl = iconMap[name.toLowerCase()] || iconMap['cloud'];
  
  return (
    <img 
      src={iconUrl} 
      alt={name}
      width={size}
      height={size}
      className={`inline-block ${className}`}
      loading="lazy"
    />
  );
};

export default FlatIcon;
