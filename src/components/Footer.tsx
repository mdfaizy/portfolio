const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} <span className="text-foreground font-medium">MD Gul Moajjam Faizy</span>. Built with React & Tailwind.
        </p>
        <p className="font-mono text-xs">crafted with care</p>
      </div>
    </footer>
  );
};

export default Footer;