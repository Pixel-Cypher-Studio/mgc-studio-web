'use client'

import React, { ReactNode } from 'react'
import { getCalApi } from '@calcom/embed-react'

interface CalEmbedProps {
  calLink: string
  namespace?: string
  children: ReactNode
  className?: string
}

export const CalEmbed = ({
  calLink,
  namespace,
  children,
  className = ''
}: CalEmbedProps) => {
  return (
    <button
      data-cal-link={calLink}
      data-cal-namespace={namespace}
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className={className}
    >
      {children}
    </button>
  )
}

export default CalEmbed
