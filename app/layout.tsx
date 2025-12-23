import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'キャリアタイプ診断 | 可児市',
  description: '20の質問に答えて、あなたのキャリアタイプを診断しよう！可児市のマスコットキャラクターがあなたのタイプを教えてくれます。',
  openGraph: {
    title: 'キャリアタイプ診断 | 可児市',
    description: '20の質問に答えて、あなたのキャリアタイプを診断しよう！',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'キャリアタイプ診断 | 可児市',
    description: '20の質問に答えて、あなたのキャリアタイプを診断しよう！',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}
