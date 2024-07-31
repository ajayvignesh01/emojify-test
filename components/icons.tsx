import { cn } from '@/lib/utils'
import { SVGProps } from 'react'

export function EmojifyLogo({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox='0 0 384 384'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('size-8', className)}
      {...props}
    >
      <circle cx={192} cy={192} r={192} fill='#18181B' />
      <mask
        id='mask0_1_22'
        style={{
          maskType: 'alpha'
        }}
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={384}
        height={384}
      >
        <circle cx={192} cy={192} r={192} fill='#18181B' />
      </mask>
      <g mask='url(#mask0_1_22)'>
        <rect x={168} y={103} width={432} height={177} rx={88.5} stroke='#E5DAC9' strokeWidth={80} />
      </g>
    </svg>
  )
}
