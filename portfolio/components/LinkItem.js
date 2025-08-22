'use client'
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function LinkItem ({href,label}) {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
       <Link href={href} className={ isActive ? 'nav-link active' : 'nav-link'}>
            {label}
        </Link> 
    )
}