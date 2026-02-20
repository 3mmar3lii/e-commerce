import Link from 'next/link'
import React from 'react'

interface INavigationLink {
  children: React.ReactElement;
  className?: string;
  route: string;
}

function NavigationLink({ children, className,route }: INavigationLink) {
  return (
    <Link href={route} className={className}>
      {children}
    </Link>
  );
}

export default NavigationLink
