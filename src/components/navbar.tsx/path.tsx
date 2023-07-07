import Link from 'next/link';

type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  name: string
  active: boolean
  href: string
}

const Path = ({ Icon, name, active, href }: Props) => {
  return (
    <Link href={href}>
      <span className="flex group my-2">
        <div className="flex gap-4 items-center group-hover:bg-neutral-200 desktop:px-4 px-3 py-3 rounded-full hover-transition">
          <Icon className="w-6 h-6" />
          <span className={`${active ? 'font-bold' : ''} text-[1.25rem] hidden desktop:block`}>
            {name}
          </span>
        </div>
      </span>
    </Link>
  )
}

export default Path