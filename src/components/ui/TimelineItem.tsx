export function TimelineItem({
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
