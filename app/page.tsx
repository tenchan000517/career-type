'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md mx-auto"
      >
        {/* メインキャラクター */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="mb-6"
        >
          <Image
            src="/characters/main.png"
            alt="キャリア診断キャラクター"
            width={180}
            height={180}
            className="mx-auto object-contain"
            priority
          />
        </motion.div>

        {/* タイトル */}
        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold mb-3"
          >
            可児市 × キャリア教育
          </motion.div>

          <h1 className="text-3xl font-bold text-chestnut mb-3">
            キャリアタイプ
            <span className="text-primary">診断</span>
          </h1>

          <p className="text-chestnut-light">
            20の質問に答えて、
            <br />
            あなたのタイプを見つけよう
          </p>
        </div>

        {/* 説明 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl p-5 card-shadow mb-6"
        >
          <p className="text-chestnut-light text-sm mb-3">
            シチュエーション形式の質問に答えるだけで、
            あなたに合った8つのキャリアタイプがわかります。
          </p>
          <p className="text-sm text-chestnut-light">
            所要時間：約5〜7分
          </p>
        </motion.div>

        {/* 診断開始ボタン */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/quiz">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary-light
                         text-white text-lg font-bold
                         px-10 py-4 rounded-full
                         shadow-lg btn-hover w-full"
            >
              診断をはじめる
            </motion.button>
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-xs text-chestnut-light"
        >
          ※ 診断結果は参考情報です
        </motion.p>
      </motion.div>
    </div>
  )
}
