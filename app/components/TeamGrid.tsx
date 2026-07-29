import Image from "next/image";
import LinkedInIcon from "./LinkedInIcon";
import SectionFrame from "./SectionFrame";
import SectionHeader from "./SectionHeader";
import { team } from "@/lib/content";

export default function TeamGrid() {
  return (
    <section className="border-t border-border bg-forest">
      <SectionFrame innerClassName="py-20 lg:py-28">
        <SectionHeader
          eyebrow="Team"
          title="Verantwortung mit Erfahrung"
          description="Ein Team aus Immobilien- und Finanzprofis — klar strukturiert in Asset Management und Investment."
          className="mb-14"
        />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-14">
          {team.map((member) => {
            const linkedin =
              "linkedin" in member && typeof member.linkedin === "string"
                ? member.linkedin
                : undefined;
            const showLinkedIn = member.role === "Geschäftsführer";

            return (
              <article key={member.name} className="flex flex-col items-center text-center">
                <div className="group relative h-32 w-32 shrink-0 overflow-hidden rounded-full sm:h-36 sm:w-36">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top brightness-[1.06] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                    sizes="144px"
                  />
                  {showLinkedIn &&
                    (linkedin ? (
                      <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn-Profil von ${member.name}`}
                        className="absolute inset-0 flex items-center justify-center rounded-full bg-ink/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        <LinkedInIcon className="h-5 w-5 text-warm-white transition-colors group-hover:text-gold-light" />
                      </a>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-full bg-ink/75 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      >
                        <LinkedInIcon className="h-5 w-5 text-warm-white/60" />
                      </span>
                    ))}
                </div>
                <h4 className="mt-5 text-base font-semibold text-warm-white">{member.name}</h4>
                <p className="mt-1 text-sm text-gold">{member.role}</p>
                {"bio" in member && member.bio && (
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-warm-white-soft">
                    {member.bio}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </SectionFrame>
    </section>
  );
}
