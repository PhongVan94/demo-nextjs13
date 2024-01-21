'use client'
import Link from "next/link"
import x from '@/styles/app.module.css';



export default function Home() {

  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href={"/facebook"}>
            Facebook
          </Link>
        </li>
        <li>
          <Link href="/youtube">
            Youtube
          </Link>
        </li>
        <li>
          <Link href="/tiktok">
            TikTok
          </Link>
        </li>
      </ul>

    </div >
  )

}
