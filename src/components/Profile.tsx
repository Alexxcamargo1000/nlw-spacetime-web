import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left ">
      <Image
        className="h-10 w-10 rounded-full"
        src={avatarUrl}
        alt=""
        width={40}
        height={40}
      />

      <p className="max-w-[140px] text-sm capitalize leading-snug">
        {name.toLowerCase()}
        <a
          href="/api/auth/logout"
          className="block text-sm text-red-400 transition-colors hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
