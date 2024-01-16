'use client'
import Link from "next/link"
import x from '@/styles/app.module.css';
import AppTable from "@/components/app.table";
import useSWR from 'swr'


export default function Home() {

  const fetcher = (url: string) => fetch(url)
    .then(r => r.json())

  const { data, error, isLoading } = useSWR
    ("http://localhost:8000/blogs"
      , fetcher,
      {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
      }
    )

  if (!data) {
    return <div>loading...</div>
  }

  return (
    <div>

      <div>{data?.length}</div>

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
      <AppTable
        blogs={data?.sort((a: any, b: any) => b.id - a.id)}
      />
    </div >
  )

}
