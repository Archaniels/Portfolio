"use client"

import { cn } from "@/lib/utils"

export interface Avatar {
  imageUrl: string
  profileUrl: string
  contributorName: string
}
interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: Avatar[]
}

export const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  if (!avatarUrls || avatarUrls.length === 0) return null

  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <a
          key={index}
          href={url.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          {/* Avatar */}
          <img
            className="
        h-10 w-10 rounded-full grayscale
        border-3 border-[#09090B]
        transition-transform duration-200 ease-out
        md:group-hover:-translate-y-1 group-hover:grayscale-0
      "
            src={url.imageUrl}
            width={40}
            height={40}
            alt={url.contributorName}
          />

          {/* Nametag */}
          <span
            className="
        pointer-events-none
        absolute -top-8 left-1/2 -translate-x-1/2
        whitespace-nowrap rounded-full
        bg-[#09090B] px-2 py-1 text-xs text-white
        opacity-0 scale-95
        transition-all duration-200
        group-hover:opacity-100 group-hover:scale-100
      "
          >
            {url.contributorName}
          </span>
        </a>
      ))}

      {(numPeople ?? 0) > 0 && (
        <a
          className="flex h-10 w-10 items-center justify-center rounded-full border-3 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black"
          href=""
        >
          +{numPeople}
        </a>
      )}
    </div>
  )
}
