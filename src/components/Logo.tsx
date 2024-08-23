'use client';
import Link from 'next/link'
import clsx from 'clsx'
import React from 'react'
import Logo from './ui/logo';
import { usePathname } from 'next/navigation';

const NavLogo = () => {

    const href = '/';
    const pathname = usePathname()
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className='flex h-9 items-center gap-2 rounded-xl px-2'
            aria-label={'Hello'}
        >
            <Logo active={isActive} />
        </Link>
    )
}

export default NavLogo