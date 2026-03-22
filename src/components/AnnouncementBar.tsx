const messages = [
  "⚡ Stay Hydrated. Stay Strong.",
  "🍋 Natural Lime Flavor — Zero Sugar",
  "💪 Essential Electrolytes for Peak Performance",
  "🚀 Free Shipping on Orders Above ₹499",
];

const AnnouncementBar = () => {
  return (
    <div className="gradient-primary py-2 overflow-hidden">
      <div className="animate-scroll-ticker flex whitespace-nowrap">
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-primary-foreground">
            {msg}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
