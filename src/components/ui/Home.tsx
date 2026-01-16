"use client";

import * as Icons from "@/lib/assets";

export function Home() {
    return (
        <main className="bg-[#09090B] flex-1 px-6 py-8 md:px-12 md:py-16">

            {/* HERO SECTION */}
            <section
                id="hero"
                className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16"
            >
                {/* LEFT: TEXT */}
                <div className="max-w-2xl">
                    <h2 className="mb-6 text-3xl md:text-4xl font-semibold">Home</h2>

                    <p className="mt-12 mb-6 text-2xl text-white font-semibold">
                        👋 Hello, I&apos;m Daniyal Arshaq Sudrajat.
                    </p>

                    <p className="mb-6 text-xl text-white">
                        I’m a Software Engineer who builds clean, easy-to-use websites with a strong focus on front-end development and UI/UX.
                    </p>

                    <p className="mt-3 text-xl text-white">
                        I design and develop projects from wireframes to fully deployed sites, paying{" "}
                        <span className="text-[#a374ff]">close attention to detail</span>,{" "}
                        <span className="text-[#ffd074]">usability</span>, and{" "}
                        <span className="text-[#00bad5]">smooth user experience</span> across devices.
                    </p>

                    {/* QUICK LINKS */}
                    <div className="mt-8 flex flex-wrap gap-4 items-center">
                        <button
                            onClick={() =>
                                window.open("/personal/CV_Daniyal Arshaq Sudrajat.pdf", "_blank")
                            }
                            className="bg-white text-black transition-opacity duration-300 hover:opacity-40 inline-flex items-center gap-2 border border-white rounded-md px-3 py-2 font-poppins text-base tracking-[-0.6px]"
                        >
                            {/* <svg className="h-4 w-4 invert-100" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-paperclip" viewBox="0 0 24 24"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg> */}
                            <img
                                src={Icons.imgCV}
                                alt="cv"
                                className="h-4 w-4"
                            />
                            Download my Curriculum Vitae (CV)
                        </button>

                        <div className="flex items-center gap-4 ml-4">
                            <button onClick={() => window.open("https://www.linkedin.com/in/daniyal-arshaq-sudrajat-98a0932a2", "_blank")}>
                                <img src={Icons.imgLinkedin} alt="linkedin" className="h-4 w-4 invert hover:opacity-40" />
                            </button>
                            <button onClick={() => window.open("https://github.com/Archaniels/", "_blank")}>
                                <img src={Icons.imgGithub} alt="github" className="h-4 w-4 invert hover:opacity-40" />
                            </button>
                            <button onClick={() => window.open("mailto:arshaqdaniyal@gmail.com", "_blank")}>
                                <img src={Icons.imgMail} alt="mail" className="h-4 w-4 invert hover:opacity-40" />
                            </button>
                            <button onClick={() => window.open("tel:+628123456789", "_blank")}>
                                <img src={Icons.imgPhone} alt="phone" className="h-4 w-4 invert hover:opacity-40" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT: PROFILE IMAGE */}
                <aside>
                    <div className="w-64 rounded-xl overflow-hidden">
                        <img
                            src={Icons.imgProfilePicture}
                            alt="profile"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </aside>
            </section>

            <section id="techStack">
                <p className="mt-12 mb-6 text-2xl text-white font-semibold">
                    Tech Stack
                </p>
                {/* Essentials */}
                <ul className="select-none grid w-full gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-[#09090B] mt-6">
                    <li>
                        <div className="block">
                            <svg className="mb-2 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>HTML5 Logo Badge</title><path fill="#e34f26" d="M71 460 30 0h451l-41 460-185 52" /><path fill="#ef652a" d="m256 472 149-41 35-394H256" /><path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l1 15 14 156h127zm0 147h-1l-63-17-4-45h-56l7 89 116 32h1z" /><path fill="#fff" d="M255 208v57h70l-7 73-63 17v59l116-32 1-10 13-149 2-15h-16zm0-114v56h137l1-12 3-29 1-15z" /></svg>
                            <div className="w-full font-medium mb-1">HTML</div>
                            <div className="w-full text-sm">The entire foundation of the internet and the building blocks for web development.</div>
                        </div>
                    </li>
                    <li>
                        <div className="block">
                            <svg className="mb-2 w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path fill="#264de4" d="M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z" /><path fill="#2965f1" d="m405.388 431.408 35.148-393.73H256v435.146z" /><path fill="#ebebeb" d="m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z" /><path fill="#fff" d="M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z" /></svg>
                            <div className="w-full font-medium mb-1">CSS</div>
                            <div className="w-full text-sm">An style sheet language used for describing the look and formatting of a document written in HTML or XML.</div>
                        </div>
                    </li>
                    <li>
                        <div className="block">
                            <svg className="mb-2 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 630 630"><path fill="#f7df1e" d="M0 0h630v630H0z" /><path d="M423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" /></svg>
                            <div className="w-full font-medium mb-1">JavaScript</div>
                            <div className="w-full text-sm">A programming language that is used to create dynamic and interactive web content.</div>
                        </div>
                    </li>
                    <li>
                        <div className="block">
                            <svg className="mb-2 w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="none" viewBox="0 0 512 512"><rect width="512" height="512" fill="#3178c6" rx="50" /><rect width="512" height="512" fill="#3178c6" rx="50" /><path fill="#fff" fillRule="evenodd" d="M316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386S368.637 470 380.949 470c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65S470 415.559 470 403.044c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822q-5.478-3.99-8.451-8.448c-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492S415.797 238 404.112 238c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114q0 22.371 12.912 38.172 12.9105 15.7995 39.204 26.751c6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543q3.756 5.1615 3.756 11.733c0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13M232.78 284.082H297V243H118v41.082h63.906V467h50.874z" clipRule="evenodd" /></svg>
                            <div className="w-full font-medium mb-1">TypeScript</div>
                            <div className="w-full text-sm">A superset of JavaScript that is used to help developers build and manage applications more robustly.</div>
                        </div>
                    </li>
                </ul>

                {/* Tools and Frameworks */}
                <p className="mt-12 text-xl text-white font-semibold">
                    Tools and Frameworks
                </p>
                <ul className="flex flex-wrap items-center justify-center w-full gap-8 md:gap-14 bg-[#0D0D11] rounded-xl px-6 py-6 mt-6">
                    {/* Tailwind */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 33"><g clipPath="url(#a)"><path fill="#38bdf8" fillRule="evenodd" d="M27 0Q16.2 0 13.5 10.8q4.05-5.4 9.45-4.05c2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0M13.5 16.2Q2.7 16.2 0 27q4.05-5.4 9.45-4.05c2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4q10.8 0 13.5-10.8-4.05 5.4-9.45 4.05c-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2" clipRule="evenodd" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h54v32.4H0z" /></clipPath></defs></svg>
                        </div>
                    </li>
                    {/* Bootstrap */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" preserveAspectRatio="xMinYMin meet" viewBox="0 0 256 256"><path fill="#563d7c" d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99c18.233 0 33.01-14.779 33.01-33.009V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" /><path fill="#fff" d="M106.158 113.238V76.985h31.911q4.56 0 8.792.76 4.233.759 7.49 2.713 3.255 1.954 5.21 5.427 1.953 3.474 1.954 8.9 0 9.77-5.862 14.111-5.86 4.342-14.979 4.342zM72.075 50.5v155h75.112q10.42 0 20.298-2.605t17.584-8.032 12.265-14.002q4.56-8.576 4.559-20.298 0-14.545-7.055-24.856-7.056-10.312-21.384-14.437 10.42-4.993 15.74-12.808 5.318-7.814 5.318-19.538 0-10.854-3.582-18.235-3.582-7.38-10.095-11.831-6.512-4.45-15.63-6.404-9.117-1.954-20.189-1.954zm34.083 128.515v-42.549h37.121q11.072 0 17.802 5.102 6.73 5.101 6.73 17.041 0 6.079-2.063 9.986-2.062 3.908-5.536 6.187t-8.032 3.257q-4.56.976-9.552.976z" /></svg>
                        </div>
                    </li>
                    {/* React */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348"><title>React Logo</title><circle r="2.05" fill="#61dafb" /><g fill="none" stroke="#61dafb"><ellipse rx="11" ry="4.2" /><ellipse rx="11" ry="4.2" transform="rotate(60)" /><ellipse rx="11" ry="4.2" transform="rotate(120)" /></g></svg>
                        </div>
                    </li>
                    {/* NextJS */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7 invert-100" xmlns="http://www.w3.org/2000/svg" width="394" height="80" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h69v13h-28v66h-13V13h-28zM149 0v13H94v20h44v13H94v21h55v12H80V0zM183 0h-17l63 79h18l-32-39 32-40h-18l-23 29zM202 57l-9-11-28 33h18z" /><path fill="#000" fillRule="evenodd" d="M81 79 17 0H0v79h14V17l50 62z" clipRule="evenodd" /><path fill="#000" d="m334 79-3-1-1-3 1-2 3-1 2 1 1 4zM357 45h6v24l-2 5q-1 3-3 4l-6 1-5-1-4-3-1-5h6v2l2 2h2l3-1 1-1 1-3zM388 55l-2-4-5-1-3 1-2 1-1 2 1 2 1 1 2 1 2 1 3 1 4 1 3 2 2 2 1 4q1 3-2 5l-4 4-7 1-7-1-4-4-2-5h6l4 4 3 1 4-1 2-1 1-3-1-2-2-1-3-1-4-1q-5-1-6-4-3-2-3-5l2-5 4-4 6-1 7 1 4 4 2 5z" /></svg>
                        </div>
                    </li>
                    {/* Vite */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="410" height="404" fill="none" viewBox="0 0 410 404"><path fill="url(#a)" d="M399.641 59.5246 215.643 388.545c-3.799 6.793-13.559 6.833-17.415.073L10.5817 59.5563c-4.20083-7.3667 2.0985-16.2898 10.4464-14.7977L205.223 77.6824c1.175.21 2.378.208 3.553-.0061l180.343-32.8705c8.32-1.5164 14.649 7.3376 10.522 14.7188" /><path fill="url(#b)" d="M292.965 1.5744 156.801 28.2552c-2.238.4385-3.895 2.3351-4.03 4.6112L144.395 174.33c-.197 3.332 2.863 5.918 6.115 5.168l37.91-8.749c3.547-.818 6.752 2.306 6.023 5.873l-11.263 55.153c-.758 3.712 2.727 6.886 6.352 5.785l23.415-7.114c3.63-1.102 7.118 2.081 6.35 5.796l-17.899 86.633c-1.12 5.419 6.088 8.374 9.094 3.728l2.008-3.103 110.954-221.428c1.858-3.7075-1.346-7.935-5.418-7.1492l-39.022 7.5312c-3.667.707-6.787-2.708-5.752-6.2957l25.469-88.29141c1.036-3.59375-2.095-7.011709-5.766-6.29249" /><defs><linearGradient id="a" x1="6.00017" x2="235" y1="32.9999" y2="344" gradientUnits="userSpaceOnUse"><stop stopColor="#41d1ff" /><stop offset="1" stopColor="#bd34fe" /></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.81818" y2="292.989" gradientUnits="userSpaceOnUse"><stop stopColor="#ffea83" /><stop offset=".0833333" stopColor="#ffdd35" /><stop offset="1" stopColor="#ffa800" /></linearGradient></defs></svg>
                        </div>
                    </li>
                    {/* Vue */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.8 226.7"><path fill="#41b883" d="m161 0-30 52-30-52H0l131 227L262 0z" /><path fill="#34495e" d="m161 0-30 52-30-52H52l79 136L209 0z" /></svg>
                        </div>
                    </li>
                    {/* Laravel */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="50" height="52" viewBox="0 0 50 52"><title>Logomark</title><path fill="#ff2d20" fillRule="evenodd" d="m49.63 11.56.02.21v10.98a.8.8 0 0 1-.4.69l-9.2 5.3v10.51a.8.8 0 0 1-.4.7L20.41 51q-.07.04-.14.06l-.05.02a1 1 0 0 1-.41 0q-.04 0-.07-.03l-.13-.05L.4 39.94a.8.8 0 0 1-.4-.69V6.33q0-.1.03-.2 0-.04.03-.07l.05-.13.05-.07.07-.1.08-.05.09-.07L10.01.11a.8.8 0 0 1 .8 0l9.61 5.53.1.07.07.06.07.1.05.06q.04.07.06.13l.02.07.03.2V26.9l8.01-4.6V11.76l.03-.2q0-.04.03-.07l.05-.13.05-.07.07-.1.08-.05.1-.07 9.6-5.53a.8.8 0 0 1 .8 0l9.61 5.53.1.07.07.06.07.1.06.06.05.13zm-1.58 10.72v-9.12l-3.36 1.93-4.65 2.68v9.12zm-9.6 16.5v-9.12l-4.58 2.6-13.05 7.45v9.22zM1.6 7.73v31.07l17.62 10.14v-9.21l-9.2-5.21H10l-.09-.07-.07-.06-.07-.09-.06-.08-.04-.1-.04-.09-.02-.12-.01-.09V12.33L4.97 9.65zm8.81-6-8 4.61 8 4.61 8-4.6zm4.17 28.77 4.64-2.67V7.72l-3.36 1.94-4.65 2.67v20.1zM39.24 7.16l-8 4.61 8 4.61 8-4.6zm-.8 10.6L33.8 15.1l-3.37-1.93v9.12l4.65 2.68 3.36 1.93zM20.02 38.34l11.74-6.7 5.87-3.35-8-4.61-9.2 5.3-8.4 4.84z" /></svg>
                        </div>
                    </li>
                    {/* NodeJS */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="71" height="80" fill="none" viewBox="0 0 71 80"><g fill="#5fa04e"><path d="m36 80-3-1-10-6v-1l4-2h1l7 4h1l29-16V23L36 6h-1L6 23v35l8 4q7 2 7-3V27l1-1h4l1 1v32q-1 9-9 9l-7-1-7-5-3-5V24l3-5L33 2h6l28 17 3 5v33l-3 5-28 17z" /><path d="M45 57q-18-2-16-11l1-1h4l1 1q-1 6 10 6 8 0 8-5c0-2 0-3-10-4q-12-1-13-9 1-9 13-9 14 0 15 10l-1 1h-4l-1-1q0-5-9-5-8 0-7 4-2 3 10 4 13 1 13 9 0 10-14 10" /></g></svg>
                        </div>
                    </li>
                    {/* Express */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7 invert-100" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="-0.9 2.3 623.3 616.8"><path d="M294 3A296 296 0 0 0 82 105Q-3 199 3 328q3 77 42 141c31 51 83 98 135 122 41 19 82 28 131 28q96 0 169-49 45-31 80-76 64-87 59-199c-2-43-11-79-29-116q-33-69-97-117A292 292 0 0 0 294 3m-74 191q24 6 43 26 28 28 33 78l1 16v6H125v11q4 51 49 64c10 3 32 3 42 1 19-5 36-21 39-36v-3h38l-1 3q-8 41-47 60c-17 9-44 13-68 10q-35-4-58-27c-16-16-26-34-31-62-3-15-4-47-1-60 7-30 23-57 46-72 12-8 29-15 42-17 11-1 35 0 45 2m171 39 29 41a1121 1121 0 0 0 60-83h24l23 1-40 53-41 55a21032 21032 0 0 1 90 130c1 1-4 1-24 1h-26l-32-49-34-49-34 49-33 49h-47l44-63 45-64-82-112 25-1h24z" /><path d="M181 225q-21 2-36 18a78 78 0 0 0-20 43v3h131v-3c0-6-4-19-8-27a64 64 0 0 0-48-34z" /></svg>
                        </div>
                    </li>
                    {/* Supabase */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="109" height="113" fill="none" viewBox="0 0 109 113"><path fill="url(#a)" d="M63.7076 110.284c-2.8595 3.601-8.6574 1.628-8.7263-2.97l-1.0075-67.2513h45.2197c8.1905 0 12.7585 9.4601 7.6655 15.8747z" /><path fill="url(#b)" fillOpacity=".2" d="M63.7076 110.284c-2.8595 3.601-8.6574 1.628-8.7263-2.97l-1.0075-67.2513h45.2197c8.1905 0 12.7585 9.4601 7.6655 15.8747z" /><path fill="#3ecf8e" d="M45.317 2.07103c2.8595-3.6014 8.6575-1.628093 8.7264 2.96997l.4415 67.2512H9.83113c-8.19075 0-12.75888-9.4601-7.66563-15.8747z" /><defs><linearGradient id="a" x1="53.9738" x2="94.1635" y1="54.974" y2="71.8295" gradientUnits="userSpaceOnUse"><stop stopColor="#249361" /><stop offset="1" stopColor="#3ecf8e" /></linearGradient><linearGradient id="b" x1="36.1558" x2="54.4844" y1="30.578" y2="65.0806" gradientUnits="userSpaceOnUse"><stop /><stop offset="1" stopOpacity="0" /></linearGradient></defs></svg>
                        </div>
                    </li>
                    {/* Figma */}
                    <li className="flex items-center justify-center w-6 h-6">
                        <div className="block">
                            <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" width="1667" height="2500" viewBox="0 0 200 300"><title>Figma.logo</title><path fill="#0acf83" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50" /><path fill="#a259ff" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50" /><path fill="#f24e1e" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50" /><path fill="#ff7262" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50z" /><path fill="#1abcfe" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50" /></svg>
                        </div>
                    </li>
                </ul>

                {/* Supporting */}
                <p className="mt-12 text-xl text-white font-semibold">
                    Supporting
                </p>

            </section>
        </main>
    );
}
