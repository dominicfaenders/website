"use client";

import { useSearchParams } from "next/navigation";

const anliegenOptions = [
  { value: "begleitung", label: "Begleitung" },
  { value: "wachstum", label: "Wachstum" },
  { value: "partnerschaft", label: "Partnerschaft" },
  { value: "sonstiges", label: "Sonstiges" },
];

export default function ContactForm() {
  const searchParams = useSearchParams();
  const anliegen = searchParams.get("anliegen") ?? "";

  const inputClass =
    "w-full rounded-xl border border-[var(--alt-line)] bg-white px-4 py-3.5 text-[15px] text-[var(--alt-ink)] outline-none transition-colors placeholder:text-[var(--alt-muted)] focus:border-[var(--alt-ink)]";

  return (
    <form className="rounded-2xl bg-[var(--alt-bg-subtle)] p-8 lg:p-10" action="#" method="post">
      <div className="space-y-5">
        <div>
          <label htmlFor="anliegen" className="mb-2 block text-[13px] font-medium text-[var(--alt-ink)]">
            Anliegen
          </label>
          <select id="anliegen" name="anliegen" defaultValue={anliegen} className={inputClass}>
            <option value="">Bitte wähle aus</option>
            {anliegenOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="name" className="mb-2 block text-[13px] font-medium text-[var(--alt-ink)]">
            Dein Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputClass}
            placeholder="Dein Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-[13px] font-medium text-[var(--alt-ink)]">
            Deine E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="deine@email.de"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-[13px] font-medium text-[var(--alt-ink)]">
            Deine Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={`${inputClass} resize-none`}
            placeholder="Wie können wir dir helfen?"
          />
        </div>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--alt-ink)] px-7 py-3.5 text-[14px] font-medium text-white transition-transform hover:scale-[1.02] sm:w-auto"
        >
          Anfrage senden
        </button>
      </div>
    </form>
  );
}
