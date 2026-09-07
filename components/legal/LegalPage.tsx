import Link from "next/link";

export type LegalRow = {
    label: string;
    lines?: string[];
    bullets?: string[];
    link?: { href: string; text: string };
};

export function LegalPage({
    label,
    title,
    lead,
    rows,
    notes,
}: {
    label: string;
    title: string;
    lead?: string;
    rows: LegalRow[];
    notes?: string[];
}) {
    return (
        <section className="bg-cream py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-6 md:px-10">
                <div className="mb-12 text-center">
                    <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-accent-deep">
                        {label}
                    </span>
                    <h1 className="font-serif text-2xl font-medium leading-relaxed text-ink md:text-3xl">
                        {title}
                    </h1>
                </div>

                {lead && (
                    <p className="mb-10 leading-loose text-muted">{lead}</p>
                )}

                <dl className="overflow-hidden rounded-2xl border border-line bg-surface">
                    {rows.map((row) => (
                        <div
                            key={row.label}
                            className="flex flex-col gap-1 border-b border-line px-6 py-5 last:border-b-0 sm:flex-row sm:gap-8 md:px-8"
                        >
                            <dt className="pt-0.5 text-xs tracking-[0.15em] text-accent-deep sm:w-48 sm:flex-shrink-0">
                                {row.label}
                            </dt>
                            <dd className="space-y-1">
                                {row.lines?.map((line, i) => (
                                    <p key={i} className="text-sm leading-relaxed text-ink">
                                        {line}
                                    </p>
                                ))}
                                {row.bullets && (
                                    <ul className="space-y-1">
                                        {row.bullets.map((bullet) => (
                                            <li
                                                key={bullet}
                                                className="flex items-start gap-2 text-sm leading-relaxed text-ink"
                                            >
                                                <span className="mt-0.5 text-accent-deep">•</span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {row.link && (
                                    <Link
                                        href={row.link.href}
                                        className="text-sm text-accent-deep underline underline-offset-4 transition-colors duration-300 hover:text-ink"
                                    >
                                        {row.link.text}
                                    </Link>
                                )}
                            </dd>
                        </div>
                    ))}
                </dl>

                {notes && (
                    <ul className="mt-8 space-y-2">
                        {notes.map((note) => (
                            <li key={note} className="text-xs leading-relaxed text-muted">
                                {note}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-12 text-center">
                    <Link
                        href="/course"
                        className="text-sm text-accent-deep underline underline-offset-4 transition-colors duration-300 hover:text-ink"
                    >
                        わたしを整えるヨガ講座に戻る
                    </Link>
                </div>
            </div>
        </section>
    );
}
