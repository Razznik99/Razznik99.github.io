const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-mono text-sm text-gradient font-bold">{"<Dev />"}</span>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="flex gap-4">
        {["Twitter", "GitHub", "LinkedIn"].map((s) => (
          <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
