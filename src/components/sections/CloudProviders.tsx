import CloudProviderIconLink from "@/components/ui/CloudProviderIconLink";

const providers = [
  { name: 'aws', label: 'Amazon Web Services' },
  { name: 'gcp', label: 'Google Cloud Platform' },
  { name: 'azure', label: 'Microsoft Azure' },
  { name: 'oracle', label: 'Oracle Cloud' },
];

const CloudProviders = () => {
  return (
    <section className="border-t border-border/50 bg-background py-12">
      <div className="container mx-auto px-4">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Multi-Cloud Architecture Expertise
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {providers.map((provider, index) => (
            <div 
              key={provider.name}
              className="group flex flex-col items-center gap-2 opacity-70 transition-all duration-300 hover:opacity-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 transition-opacity group-hover:opacity-100" />
                <CloudProviderIconLink 
                  provider={provider.name as any}
                  size={48} 
                  className="relative"
                  iconClassName="relative transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {provider.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudProviders;
