import FlatIcon from "@/components/ui/FlatIcon";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export type CloudProviderKey = "aws" | "gcp" | "azure" | "oracle";

const PROVIDERS: Record<CloudProviderKey, { label: string; short: string; href: string }> = {
  aws: {
    label: "Amazon Web Services",
    short: "AWS",
    href: "https://aws.amazon.com/",
  },
  gcp: {
    label: "Google Cloud Platform",
    short: "GCP",
    href: "https://cloud.google.com/",
  },
  azure: {
    label: "Microsoft Azure",
    short: "Azure",
    href: "https://azure.microsoft.com/",
  },
  oracle: {
    label: "Oracle Cloud",
    short: "Oracle",
    href: "https://www.oracle.com/cloud/",
  },
};

export const isCloudProvider = (name: string): name is CloudProviderKey => {
  const key = name.toLowerCase() as CloudProviderKey;
  return key in PROVIDERS;
};

interface CloudProviderIconLinkProps {
  provider: CloudProviderKey;
  size?: number;
  className?: string;
  iconClassName?: string;
}

const CloudProviderIconLink = ({
  provider,
  size = 24,
  className,
  iconClassName,
}: CloudProviderIconLinkProps) => {
  const meta = PROVIDERS[provider];

  return (
    <Tooltip delayDuration={150}>
      <TooltipTrigger asChild>
        <a
          href={meta.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${meta.label} (opens in a new tab)`}
          className={cn("inline-flex", className)}
        >
          <FlatIcon
            name={provider}
            size={size}
            className={cn(
              "transition-transform duration-300 group-hover:scale-110",
              iconClassName,
            )}
          />
        </a>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-[260px]">
        <div className="space-y-0.5">
          <p className="text-sm font-medium">{meta.label}</p>
          <p className="text-xs text-muted-foreground">Open official site</p>
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

export default CloudProviderIconLink;
