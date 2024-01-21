
export const metadata = {
  title: 'List Blog',
  description: 'Hello',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>

  )
}
