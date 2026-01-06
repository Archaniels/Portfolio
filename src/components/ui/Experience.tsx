import { TimelineItem } from "./TimelineItem";

export function Experience() {
    return (
        <main className="bg-[#09090B] flex-1 px-6 py-8 md:px-12 md:py-16">
            <section id="experience">
                <h2 className="mb-6 text-4xl font-semibold">Experience</h2>
                <TimelineItem
                    time="Aug 2023 – Present | Education"
                    title="S1 Rekayasa Perangkat Lunak"
                    description="I am studying at Telkom University Bandung, School of Computing, dedicating myself to full-time academic studies, with an expected graduation date of 2026."
                />
                <TimelineItem
                    time="2020 – 2023 | Education"
                    title="Ilmu Pengetahuan Alam"
                    description="SMAS Korpri Bekasi."
                />
            </section>
        </main>
    );
}