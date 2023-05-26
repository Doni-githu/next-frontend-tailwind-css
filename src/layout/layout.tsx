import React from 'react'
import LayoutProps from './layout.props'
import Head from 'next/head'



export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Head>
                
            </Head>
            <div className='container'>
                <nav>
                    <h1 className="text-3xl font-bold underline">
                        Hello world!
                    </h1>
                </nav>
                {children}
                <footer>
                    <h1 className="text-3xl font-bold underline">

                    </h1>
                </footer>
            </div>
        </>
    )
}
