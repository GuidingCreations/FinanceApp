'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from 'next/image'
  import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const MobileNav = ({ user }: MobileNavProps) => {

    const pathname = usePathname()

  return (
    <section className='w-full max-w-[264px]'>
    
    <Sheet>
        <SheetTrigger>

        <Image 
        src = '/icons/hamburger.svg'
        height = '30'
        width = '30'
        alt = "Hamburger menu icon"
        className='cursor-pointer'
        />

        </SheetTrigger>
        <SheetContent className='border-none bg-slate-800 text-white' side={'left'}>
        
        <Link href = '/' className='cursor-pointer items-center gap-1 px-4 flex'>
            <Image 
                src = '/icons/logo.svg'
                width = '34'
                height = '34'
                alt = 'Healthy Money logo'
               
            />

            <h1 className='text-26 font-ibm-plex-serif font-bold text-white'>Healthy Money</h1>

            </Link>

            <div className='mobilenav-sheet'>
                <SheetClose asChild className='text-white'>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                    {sidebarLinks.map( (item) => {
                        const isActive = ( pathname === item.route || pathname.startsWith(`${item.route}/`) )

                            return (
                            
                            <SheetClose asChild key={item.route}>

                                <Link 
                                        href = {item.route}
                                        key= { item.label}
                                        className = {
                                            cn(
                                                'mobilenav-sheet_close w-full',
                                                {'bg-bank-gradient': isActive}
                                            )
                                        }
                                    >
    
                                  
                                        <Image 
                                        src = {item.imgURL}
                                        alt = {item.label}
                                        width={20}
                                        height={20}
                                        className = 
                                            
                                            'brightness-[3] invert-0' 
                                          
                                        
                                        />
                                    
    
                                    <p className = {
                                        cn (
                                            'text-16 font-semibold text-white',
                                            {'!text-white': isActive}
                                        )
                                    }>
                                        {item.label}
                                    </p>
    
                                    </Link>
    
                            </SheetClose>
                                
                                                    
                            )
                                })}

                                USER
                    </nav>
                </SheetClose>

                FOOTER
            </div>

            

        </SheetContent>
    </Sheet>
  
  </section>
  )
}

export default MobileNav