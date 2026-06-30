export default function Footer() {
  return (
    <footer className="border-t border-neon/10 py-8 text-center">
      <p className="font-mono text-textprimary/50 text-xs tracking-wide">
        © {new Date().getFullYear()} Patrick Thiago Rezende dos Santos
      </p>
    </footer>
  );
}
