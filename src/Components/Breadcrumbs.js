import React from "react";
import { useRouter } from 'next/router';
import Link from "next/link";
import 'tailwindcss/tailwind.css'

const Breadcrumbs = () => {
    const router = useRouter();

    const pathSegments = router.asPath ? router.asPath.split("/").filter((segment) => segment) : [];
        
    return(
        <div className="absolute left-4 bottom-1"> 
            <ul className="flex">
                <li>
                    <Link className='text-white hover:text-zinc-500' href="/">
                        Home
                    </Link> &gt;
                </li>

                {pathSegments.map((segment, index) => (
                        <li key={index}>
                            <Link className="text-white hover:text-zinc-500"
                                href={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                                {segment} 
                            </Link>
                                {index < pathSegments.length - 1 && ' > '}
                        </li>
                ))}
            </ul>
        </div>

    )
}

export default Breadcrumbs;