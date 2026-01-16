
import { TimelineItem } from "./TimelineItem";
import Image from "next/image";


export function Projects() {
    return (
        <main className="bg-[#09090B] flex-1 px-6 py-8 md:px-12 md:py-16">
            <section id="projects"></section>
            <h2 className="mb-6 text-4xl font-semibold">Projects</h2>

            <TimelineItem
                time="April 2025 - January 2026"
                title="ReTide"
                description="Re:Tide adalah sebuah situs web yang berfokus pada edukasi lingkungan, pengelolaan sampah plastik, dan pemberdayaan masyarakat. Tujuan utama dari ReTide adalah membantu mengurangi masalah sampah di laut melalui fitur-fitur seperti sistem pelacakan sampah digital dan marketplace produk hasil daur ulang, dan meningkatkan kesadaran masyarakat terhadap pencemaran air sekaligus memberikan sarana partisipatif untuk menjaga kebersihan lingkungan."
                imageSrc="/img/ReTide Project/Report.png"
                imageAlt="ReTide Report Page"
                numPeople={0}
                avatars={[
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/144053742",
                        profileUrl: "https://github.com/delvinkhairan",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/114894773",
                        profileUrl: "https://github.com/Rinitial",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/171002061",
                        profileUrl: "https://github.com/bagasstvermilion",
                    },
                ]}
                action={
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://www.figma.com/design/5Fs6tgsmoj9i4RiqxHp3gY/UX?node-id=0-1&t=gKDkUgZSFi7beKpr-1"
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

                        <a
                            href="https://www.figma.com/proto/5Fs6tgsmoj9i4RiqxHp3gY/UX?page-id=0%3A1&node-id=259-5182&viewport=1234%2C336%2C0.31&t=6YvKbuJJwlq3jYjN-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=259%3A5182&show-proto-sidebar=1"
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
                                Open on Figma (Interactive Prototype)
                            </button>
                        </a>

                        <a
                            href="https://drive.google.com/drive/folders/1JW_QBZCX5ObD85ssYVQtLdpD8dY1kUl4?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
                            >
                                <Image
                                    className="w-5 h-5"
                                    src="/icons/Google-Drive.svg"
                                    alt="Google Drive"
                                    width={24}
                                    height={24}
                                />
                                Open on Google Drive (Research Files)
                            </button>
                        </a>

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                                UI/UX
                            </span>
                        </div>


                    </div>
                }
            />

            <TimelineItem
                time="November - December 2025"
                title="ReTide Web Application"
                description="ReTide web application utilizing HTML, Tailwind CSS, JavaScript, PHP, Laravel, and MySQL."
                imageSrc="/img/ReTide_Laravel_Landing_Page.png"
                imageAlt="ReTide Laravel Landing Page"
                numPeople={0}
                avatars={[
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/144053742",
                        profileUrl: "https://github.com/delvinkhairan",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/114894773",
                        profileUrl: "https://github.com/Rinitial",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/171002061",
                        profileUrl: "https://github.com/bagasstvermilion",
                    },
                ]}
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
                                    src="/icons/Octicons-mark-github.svg"
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

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                                Competition
                            </span>
                            <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                                UI/UX
                            </span>
                            <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                                Multimedia In Action 2025
                            </span>
                        </div>
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
                                    src="/icons/Octicons-mark-github.svg"
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
                time="Juni 2025"
                title="Project Based Learning (Machine Learning) pada sebuah dataset 'ai_dev_productivity.csv'"
                description="Machine Learning pada sebuah dataset 'ai_dev_productivity.csv' untuk  mengklasifikasi sebuah data, dimana target yang akan ditentukan adalah 'task_success', dan dibangun menggunakan bahasa pemrograman Python."
                imageSrc=""
                imageAlt=""
                action={
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://github.com/Archaniels/Project-Based-Learning"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
                            >
                                <Image
                                    className="w-6 h-6"
                                    src="/icons/Octicons-mark-github.svg"
                                    alt="GitHub"
                                    width={24}
                                    height={24}
                                />
                                Open on GitHub
                            </button>
                        </a>

                        <a
                            href="https://www.kaggle.com/datasets/atharvasoundankar/ai-developer-productivity-dataset"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
                            >
                                <Image
                                    className="w-6 h-6"
                                    src="/img/Kaggle_Logo.svg"
                                    alt="Kaggle"
                                    width={24}
                                    height={24}
                                />
                                Open on Kaggle
                            </button>
                        </a>

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                                Python
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
                numPeople={0}
                avatars={[
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/144053742",
                        profileUrl: "https://github.com/delvinkhairan",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/114894773",
                        profileUrl: "https://github.com/Rinitial",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/170499068",
                        profileUrl: "https://github.com/admiralmanan",
                    },
                ]}
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
                                    src="/icons/Octicons-mark-github.svg"
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
                                    src="/icons/Octicons-mark-github.svg"
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
                time="Mar - Mei 2025"
                title="Case-Based Searching menggunakan Genetic Algorithm"
                description="Program berbasis CLI menggunakan Python untuk melakukan proses searching melalui Genetic Algorithm, mulai dari proses inisialisasi populasi, fitness, selection, mutation, dan seleksi survivor hingga memenuhi kriteria loop yang telah ditentukan, yaitu hingga telah mencapai 100 generasi."
                imageSrc=""
                imageAlt=""
                action={
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://github.com/Archaniels/Case-Based-Searching-GA---AI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
                            >
                                <Image
                                    className="w-6 h-6"
                                    src="/icons/Octicons-mark-github.svg"
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
                time="Desember 2024"
                title="Freelance System"
                description=""
                imageSrc="/img/Freelance System.png"
                imageAlt="Freelance System Thumbnail"
                numPeople={0}
                avatars={[
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/171001548",
                        profileUrl: "https://github.com/SIMPLIX07",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/190572669",
                        profileUrl: "https://github.com/QIZIR1",
                    },
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/148773221",
                        profileUrl: "https://github.com/azkiyafnii",
                    },
                ]}
                action={
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://github.com/SIMPLIX07/TUBES-DPBO"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
                            >
                                <Image
                                    className="w-6 h-6"
                                    src="/icons/Octicons-mark-github.svg"
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
                        </div>
                    </div>
                }
            />

            <TimelineItem
                time="Desember 2024"
                title="Knight's Move Path Calculator"
                description="Memimpin pengembangan aplikasi GUI untuk membandingkan BFS &
DFS pada langkah kuda (N×N), dengan visualisasi kinerja, pengukuran
waktu real-time, batch testing CSV, dan optimasi BFS menggunakan
pemrograman dinamis. Menganalisis kompleksitas eksponensial vs.
polinomial."
                imageSrc="/img/KnightsMove.png"
                imageAlt="Knight's Move Path Calculator Thumbnail"
                numPeople={0}
                avatars={[
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/190572669",
                        profileUrl: "https://github.com/QIZIR1",
                    },
                ]}
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
                                    src="/icons/Octicons-mark-github.svg"
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

            <TimelineItem
                time="Desember 2024"
                title="Shortest Path and Alternative Path Calculator between Vortex Buildings and Vortex Roads in Telkom University"
                description="Mencari shortest path, dan alternative path pada sebuah graph (Vertex dan Edge) dengan konteks Vortex sebagai gedung, dan edge sebaga jalur. Dibangun menggunakan bahasa pemrograman C++."
                imageSrc="/img/ShortestPath.png"
                imageAlt="Shortest Path Thumbnail"
                numPeople={0}
                avatars={[
                    {
                        imageUrl: "https://avatars.githubusercontent.com/u/106793962",
                        profileUrl: "https://github.com/Rd27p",
                    },
                ]}
                action={
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://github.com/Rd27p/TUBES-STD"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
                            >
                                <Image
                                    className="w-6 h-6"
                                    src="/icons/Octicons-mark-github.svg"
                                    alt="GitHub"
                                    width={24}
                                    height={24}
                                />
                                Open on GitHub
                            </button>
                        </a>

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                                C++
                            </span>
                        </div>
                    </div>
                }
            />

            <TimelineItem
                time="Desember 2023"
                title="Medical Check-Up"
                description="Sebuah aplikasi sederhana yang berdasarkan Command Line, dibangung menggunakan bahasa pemrograman Go."
                action={
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="https://github.com/Archaniels/TUBES_Medical-Check-Up"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button
                                type="button"
                                className="inline-flex items-center gap-3 text-[rgb(51,65,85)] border-2 font-bold border-[rgb(51,65,85)] rounded-xl px-4 py-2.5 hover:text-[rgb(100,116,139)] hover:border-[rgb(100,116,139)] transition"
                            >
                                <Image
                                    className="w-6 h-6"
                                    src="/icons/Octicons-mark-github.svg"
                                    alt="GitHub"
                                    width={24}
                                    height={24}
                                />
                                Open on GitHub
                            </button>
                        </a>

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-lg border border-zinc-700 px-4 py-2.5 text-zinc-400">
                                Go
                            </span>
                        </div>
                    </div>
                }
            />
        </main>
    );
}