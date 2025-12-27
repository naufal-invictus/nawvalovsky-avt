const WelcomeMarquee = () => {
  return (
    <div className="shrink-0 w-full bg-[var(--bg-secondary)]/50 border border-[var(--border)] rounded-lg py-1.5 px-2 overflow-hidden flex items-center">
      <div className="whitespace-nowrap animate-marquee text-[10px] font-mono text-[var(--accent)] flex gap-8">
        <span>:: SYSTEM ONLINE :: WELCOME TO NAWVALOVSKY DIGITAL WEB :: SECURE CONNECTION ESTABLISHED ::</span>
        <span>ENCRYPTED CHANNEL [TLS 1.3] :: ACCESS LEVEL: GUEST :: TYPE 'HELP' FOR COMMANDS ::</span>
      </div>
    </div>
  );
};

export default WelcomeMarquee;
