'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { decodeScores, calculateResult } from '@/lib/scoring'
import { CareerType, careerTypes } from '@/data/types'
import CharacterDisplay from '@/components/CharacterDisplay'
import RadarChart from '@/components/RadarChart'
import ShareButtons from '@/components/ShareButtons'

function ResultContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [result, setResult] = useState<{
    topType: CareerType
    topTypes: CareerType[]
    percentages: Record<string, number>
  } | null>(null)

  useEffect(() => {
    const encodedScores = searchParams.get('s')
    if (!encodedScores) {
      router.push('/')
      return
    }

    const scores = decodeScores(encodedScores)
    if (!scores) {
      router.push('/')
      return
    }

    const calculatedResult = calculateResult(scores)
    setResult(calculatedResult)
  }, [searchParams, router])

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
          <p className="text-chestnut">結果を計算中...</p>
        </div>
      </div>
    )
  }

  const { topType, topTypes, percentages } = result

  return (
    <div className="min-h-screen px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold mb-2">
            診断結果
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-chestnut">
            あなたのキャリアタイプは...
          </h1>
        </motion.div>

        {/* メイン結果 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl card-shadow p-6 md:p-8 mb-6"
        >
          {/* キャラクター */}
          <CharacterDisplay type={topType} size="large" />

          {/* タイプ名 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-4"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ color: topType.color }}
            >
              {topType.name}
            </h2>
            <p className="text-chestnut-light text-lg">
              {topType.description}
            </p>
          </motion.div>

          {/* 詳細説明 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 p-4 bg-cream rounded-2xl"
          >
            <p className="text-chestnut leading-relaxed">
              {topType.detail}
            </p>
          </motion.div>

          {/* 特徴タグ */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 flex flex-wrap justify-center gap-2"
          >
            {topType.traits.map((trait) => (
              <span
                key={trait}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: `${topType.color}15`,
                  color: topType.color,
                }}
              >
                {trait}
              </span>
            ))}
          </motion.div>

          {/* おすすめキャリア */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6"
          >
            <h3 className="text-lg font-bold text-chestnut mb-3 text-center">
              おすすめのキャリア
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {topType.suggestedCareers.map((career) => (
                <span
                  key={career}
                  className="px-4 py-2 bg-cream-dark rounded-full text-chestnut text-sm"
                >
                  {career}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* レーダーチャート */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-white rounded-3xl card-shadow p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-chestnut mb-4 text-center">
            タイプ別適合度
          </h3>
          <RadarChart percentages={percentages} />
        </motion.div>

        {/* 上位3タイプ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white rounded-3xl card-shadow p-6 mb-6"
        >
          <h3 className="text-lg font-bold text-chestnut mb-4 text-center">
            あなたの上位タイプ
          </h3>
          <div className="space-y-3">
            {topTypes.map((type, index) => (
              <div
                key={type.id}
                className="flex items-center gap-4 p-3 rounded-xl"
                style={{ backgroundColor: `${type.color}10` }}
              >
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: type.color }}
                >
                  {index + 1}
                </span>
                <div className="flex-1">
                  <p className="font-bold text-chestnut">{type.name}</p>
                  <p className="text-sm text-chestnut-light">{type.description}</p>
                </div>
                <span className="text-lg font-bold" style={{ color: type.color }}>
                  {percentages[type.id]}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* シェアボタン */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="bg-white rounded-3xl card-shadow p-6 mb-6"
        >
          <ShareButtons type={topType} />
        </motion.div>

        {/* アクションボタン */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-cream-dark text-chestnut
                         rounded-full font-bold hover:bg-cream transition-colors"
            >
              もう一度診断する
            </motion.button>
          </Link>
        </motion.div>

        {/* フッター */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="text-center mt-8 pb-4"
        >
          <p className="text-sm text-chestnut-light">
            可児市 × キャリア教育
          </p>
          <p className="text-xs text-chestnut-light mt-1">
            ※ 診断結果は参考情報です
          </p>
        </motion.footer>
      </div>
    </div>
  )
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4" />
            <p className="text-chestnut">読み込み中...</p>
          </div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  )
}
