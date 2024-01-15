'use client'
import Link from "next/link"
import x from '@/styles/app.module.css';
import AppTable from "@/components/app.table";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8000/blogs")
      const data = await res.json();
      console.log(">> check res:", data);
    }
    fetchData();
  }, [])

  return (
    <div>
      <ul>
        <li className={x['red']}>
          <Link href={"/facebook"}>
            Facebook
          </Link>
        </li>
        <li>
          <a href="/youtube">
            Youtube
          </a>
        </li>
        <li>
          <a href="/tiktok">
            TikTok
          </a>
        </li>
      </ul>
      <AppTable />
    </div >
  )

}
