export default function Footer() {
  return (
    <footer className="border-t border-neon/10 px-5 py-8 text-center sm:px-6">
      <p className="font-mono text-xs leading-relaxed tracking-wide text-textprimary/50">
        © {new Date().getFullYear()} Patrick Thiago Rezende dos Santos
      </p>
    </footer>
  );
}
