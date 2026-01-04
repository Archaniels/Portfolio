export function Contact() {
    return (
        <main className="bg-[#09090B] flex-1 px-12 py-16">
            <h2 className="mb-6 text-4xl font-semibold">Contact</h2>
            {/* <p className="text-2xl text-gray-600 dark:text-gray-400">Aug 2023 – Present | Education</p> */}
            {/* <p className="text-4xl mt-[-20px] font-bold text-white">
        
      </p> */}
            <p className="text-2xl text-[#CBD5E1] dark:text-gray-400 max-w-3xl">
                Reach my inbox:{" "}
                <a href="mailto:arshaqdaniyal@gmail.com" className="text-[#CBD5E1]">
                    arshaqdaniyal@gmail.com
                </a>{" "}
                (📱 Personal) or{" "}
                <a
                    href="mailto:daniyalars@student.telkomuniversity.ac.id"
                    className="text-[#CBD5E1]"
                >
                    daniyalars@student.telkomuniversity.ac.id
                </a>{" "}
                (🏫 School).
            </p>
        </main>
    );
}