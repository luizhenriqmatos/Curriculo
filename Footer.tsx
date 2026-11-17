import Link from "next/link";

const footerLinks = [
  { href: "/projects", label: "Projetos" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contato" },
];

const socialLinks = [
  { href: "https://github.com", label: "GitHub", icon: "GH" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "LN" },
  { href: "https://twitter.com", label: "Twitter / X", icon: "TW" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="py-12 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="font-display text-lg font-bold text-text-primary hover:text-mint transition-colors"
            aria-label="Voltar ao topo"
          >
            <span className="text-mint">&lt;</span>sn<span className="text-mint">/&gt;</span>
          </Link>
          <p className="mt-3 text-text-secondary text-sm leading-relaxed max-w-xs">
            Desenvolvedor front-end apaixonado por interfaces precisas, performáticas e com alma.
          </p>
        </div>

        {/* Nav */}
        <nav aria-label="Links do rodapé">
          <p className="section-label mb-3">Navegação</p>
          <ul className="flex flex-col gap-2 list-none" role="list">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-secondary hover:text-mint text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social */}
        <div>
          <p className="section-label mb-3">Redes</p>
          <ul className="flex gap-4 list-none" role="list">
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-text-secondary hover:text-mint border border-border hover:border-mint/30 px-3 py-2 rounded transition-all duration-300"
                  aria-label={`Visitar perfil no ${social.label}`}
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-text-muted font-mono text-xs">
          © {year} Seu Nome. Feito com Next.js + Framer Motion.
        </p>
        <p className="text-text-muted font-mono text-xs">
          <span className="text-mint">*</span> Disponível para novos projetos
        </p>
      </div>
    </footer>
  );
}
