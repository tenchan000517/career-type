'use client'

import { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { questions, Answer } from '@/data/questions'
import { careerTypes } from '@/data/types'
import { initializeScores, addAnswerScores, encodeScores } from '@/lib/scoring'
import ProgressBar from '@/components/ProgressBar'
import QuestionCard from '@/components/QuestionCard'

export default function QuizPage() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>(initializeScores())
  const [isTransitioning, setIsTransitioning] = useState(false)

  const currentQuestion = questions[currentIndex]
  const totalQuestions = questions.length
  const isLastQuestion = currentIndex === totalQuestions - 1

  // 現在の質問に関連するキャラクターを取得
  const currentCharacter = careerTypes.find(
    (type) => type.id === currentQuestion.primaryType
  )

  const handleAnswer = useCallback(
    (answer: Answer) => {
      if (isTransitioning) return

      setIsTransitioning(true)

      const newScores = addAnswerScores(scores, answer.scores)
      setScores(newScores)

      setTimeout(() => {
        if (isLastQuestion) {
          const encodedScores = encodeScores(newScores)
          router.push(`/result?s=${encodedScores}`)
        } else {
          setCurrentIndex((prev) => prev + 1)
          setIsTransitioning(false)
        }
      }, 300)
    },
    [scores, isLastQuestion, isTransitioning, router]
  )

  return (
    <div className="min-h-screen flex flex-col px-4 py-6">
      {/* ヘッダー */}
      <header className="max-w-2xl mx-auto w-full mb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-bold text-chestnut">キャリアタイプ診断</h1>
          <button
            onClick={() => {
              if (confirm('診断を中断しますか？')) {
                router.push('/')
              }
            }}
            className="text-sm text-chestnut-light hover:text-chestnut"
          >
            中断する
          </button>
        </div>
        <ProgressBar current={currentIndex + 1} total={totalQuestions} />
      </header>

      {/* キャラクター表示エリア */}
      <div className="flex justify-center mb-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion.primaryType}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            {currentCharacter && (
              <Image
                src={currentCharacter.image}
                alt={currentCharacter.name}
                width={120}
                height={120}
                className="object-contain"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 質問エリア */}
      <main className="flex-1 flex items-start justify-center">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={currentQuestion.id}
            question={currentQuestion}
            onAnswer={handleAnswer}
            questionNumber={currentIndex + 1}
          />
        </AnimatePresence>
      </main>

      {/* フッター */}
      <footer className="text-center py-4">
        <p className="text-sm text-chestnut-light">
          回答すると自動で次の質問に進みます
        </p>
      </footer>
    </div>
  )
}
