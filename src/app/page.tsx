import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans">
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}
function Sidebar() {
  return (
    <aside className="bg-[#09090B] sticky top-0 h-screen w-80 border-r border-zinc-200 ml-[-5rem] py-16 dark:border-zinc-800">
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-5xl font-semibold">Daniyal Arshaq Sudrajat</h1>
          <p className="mt-2 text-2xl text-gray-400">Software Engineer</p>
          <p className="text-2xl text-gray-600">Indonesia</p>
        </div>

        <nav className="mt-10 flex flex-col gap-4 text-3xl">
          <section id="experience">
            <a
              href="#experience"
              className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]"
            >
              ~ Experience
            </a>
          </section>

          <section id="projects">
            <a
              href="#projects"
              className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]"
            >
              ~ Projects
            </a>
          </section>
          <section id="contact">
            <a
              href="#contact"
              className="font-semibold text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]"
            >
              ~ Contact
            </a>
          </section>
        </nav>

        <a
          href="https://github.com/Archaniels"
          target="_blank"
          className="mt-32 flex items-center gap-5 font-semibold text-3xl text-[rgb(51,65,85)] hover:text-[rgb(100,116,139)]"
        >
          <Image
            className="w-7 h-7"
            src="/img/icons/Octicons-mark-github.svg"
            alt="GitHub"
            width={24}
            height={24}
            // aria-hidden="true"
          />
          Archaniels
        </a>
      </div>
    </aside>
  );
}
function MainContent() {
  return (
    <main className="bg-[#09090B] flex-1 px-12 py-16">
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

      <h2 className="mb-6 mt-6 text-4xl font-semibold">Projects</h2>
      <TimelineItem
        time="November - December 2025"
        title="ReTide Web Application"
        description="ReTide web application utilizing HTML, Tailwind CSS, JavaScript, PHP, Laravel, and MySQL."
        imageSrc="/img/ReTide_Laravel_Landing_Page.png"
        imageAlt="ReTide Laravel Landing Page"
        action={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Archaniels/ReTide-Webpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/icons/Octicons-mark-github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                Open on GitHub
              </button>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Laravel
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                MySQL
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Tailwind CSS
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                JavaScript
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                PHP
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                HTML
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                CSS
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                NodeJS
              </span>
            </div>
          </div>
        }
      />

      <TimelineItem
        time="October - November 2025"
        title="LinkAja Savings"
        description="LinkAja Savings menghadirkan sistem gamifikasi, dengan implementasi quest, reward dan objective, yang mencakup misi seperti 'hemat lima ribu rupiah untuk tabungan Anda', atau 'belanjakan kurang dari tiga-ratus ribu rupiah untuk bahan bakar kendaraan bulan ini', dan berbagai macam misi lainnya."
        imageSrc="/img/LinkAja_Savings.png"
        imageAlt="LinkAja Savings Thumbnail"
        action={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.behance.net/gallery/240546883/LinkAja-Savings"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/behance-logo-icon-free-png.webp"
                  alt="Behance"
                  width={24}
                  height={24}
                />
                Open on Behance
              </button>
            </a>

            <a
              href="https://www.figma.com/design/MGleT5jtUdL1LjbUzVgINq/LinkAja?node-id=2-2&t=g3PvaLdrMbcNjvSg-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/Figma-logo.svg"
                  alt="Figma"
                  width={24}
                  height={24}
                />
                Open on Figma (View Only)
              </button>
            </a>
          </div>
        }
      />

      <TimelineItem
        time="October 2025"
        title="PitDivine"
        description="Race strategy decisions in Formula 1 are complex — teams rely on real-time data, simulations, and intuition. For fans and students, this decision-making process is hard to visualize. PitDivine solves this by: Allowing users to simulate different pit strategies for any race, Predicting outcomes (total race time, final position estimate), Providing visual analytics on lap times, tire degradation, and stint performance. PitDivine (a play to 'a bit divine') is a program designed as an attempt to answer and explore 'What if?' race scenarios, for example: 'What if Ferrari hadn't fucked up Leclerc in Monaco 2022?'. This race strategy simulator utilizes real historical race data and basic machine learning models to predict optimal pit stop timing and tire strategy for any driver or circuit."
        imageSrc="/img/PitDivine.png"
        imageAlt="PitDivine"
        action={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Archaniels/PitDivine"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/icons/Octicons-mark-github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                Open on GitHub
              </button>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                FastF1
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Matplotlib
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Pandas
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                XGBoost
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Skicit-learn
              </span>
            </div>
          </div>
        }
      />

      <TimelineItem
        time="April - Mei 2025"
        title="Re:Tide – Recycled Product E-Commerce"
        description="Platform e-commerce C# berbasis GUI untuk produk daur ulang dengan
fitur donasi terintegrasi. Memimpin pengembangan proyek, menerapkan
pola rekayasa perangkat lunak tingkat lanjut dan praktik terbaik."
        imageSrc="/img/ReTide_Landing_Page.png"
        imageAlt="ReTide Landing Page"
        action={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Archaniels/TUBES_KPL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/icons/Octicons-mark-github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                Open on GitHub
              </button>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                C#
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                .NET 8
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                ASP.NET Core MVC
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                REST API
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                JSON
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                MSTest
              </span>
            </div>
          </div>
        }
      />

      <TimelineItem
        time="April 2025"
        title="Fuzzy Inference System for Multi-Criteria Decision Making"
        description="Mengembangkan sistem pendukung keputusan berbasis logika fuzzy
untuk memeringkat 100 restoran berdasarkan kualitas dan harga
layanan. Merancang fungsi keanggotaan segitiga khusus, menerapkan 9
aturan inferensi, dan menggunakan defuzzifikasi rata-rata tertimbang
untuk menghasilkan keluaran peringkat teratas dari data Excel."
        action={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Archaniels/Case-Based-Reasoning-AI"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/icons/Octicons-mark-github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                Open on GitHub
              </button>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Python
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Pandas
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Excel
              </span>
            </div>
          </div>
        }
      />

      <TimelineItem
        time="Desember 2023"
        title="Knight's Move Path Calculator"
        description="Memimpin pengembangan aplikasi GUI untuk membandingkan BFS &
DFS pada langkah kuda (N×N), dengan visualisasi kinerja, pengukuran
waktu real-time, batch testing CSV, dan optimasi BFS menggunakan
pemrograman dinamis. Menganalisis kompleksitas eksponensial vs.
polinomial."
        action={
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/Archaniels/TUBES-AKA-Java"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
              >
                <Image
                  className="w-6 h-6"
                  src="/img/icons/Octicons-mark-github.svg"
                  alt="GitHub"
                  width={24}
                  height={24}
                />
                Open on GitHub
              </button>
            </a>

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Java
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Swing
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Python
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Pandas
              </span>
              <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                Matplotlib
              </span>
            </div>
          </div>
        }
      />

      <h2 className="mb-6 mt-6 text-4xl font-semibold">Contact</h2>
      <TimelineItem
        time="Aug 2023 – Present | Education"
        title="S1 Rekayasa Perangkat Lunak"
        description="I am studying at Telkom University Bandung, School of Computing, dedicating myself to full-time academic studies, with an expected graduation date of 2026."
      />
    </main>
  );
}
function TimelineItem({
  time,
  title,
  description,
  action,
  imageSrc,
  imageAlt,
}: {
  time: string;
  title: string;
  description: string;
  action?: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <div className="relative flex gap-10">
      {/* Timeline column */}
      <div className="relative flex flex-col items-center group">
        <div className="z-10 h-4 w-4 rounded-full bg-transparent border-2 border-zinc-700 group-hover:border-slate-500 transition" />
        <div className="h-full w-px bg-zinc-700 group-hover:bg-slate-500 transition" />
      </div>

      {/* Content column */}
      <div className="pb-24 flex flex-col gap-6">
        <p className="text-2xl text-gray-600 dark:text-gray-400">{time}</p>
        <p className="text-4xl mt-[-20px] font-bold text-white">{title}</p>

        {imageSrc && (
          <img
            // width={500}
            // height={500}
            src={imageSrc}
            alt={imageAlt ?? title}
            className="w-full max-w-3xl rounded-xl border border-zinc-700"
          />
        )}

        <p className="text-2xl text-[#CBD5E1] dark:text-gray-400 max-w-3xl">
          {description}
        </p>

        {action && <div>{action}</div>}
      </div>
    </div>
  );
}
