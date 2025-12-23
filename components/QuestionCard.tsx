'use client'

import { motion } from 'framer-motion'
import { Question, Answer } from '@/data/questions'

interface QuestionCardProps {
  question: Question
  onAnswer: (answer: Answer) => void
  questionNumber: number
}

export default function QuestionCard({
  question,
  onAnswer,
  questionNumber,
}: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="bg-white rounded-3xl card-shadow p-6 md:p-8">
        {/* シチュエーション */}
        <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm mb-4">
          {question.situation}
        </div>

        {/* 質問番号と質問文 */}
        <h2 className="text-xl md:text-2xl font-bold text-chestnut mb-6">
          <span className="text-primary">Q{questionNumber}.</span> {question.text}
        </h2>

        {/* 回答選択肢 */}
        <div className="space-y-3">
          {question.answers.map((answer, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAnswer(answer)}
              className="w-full text-left p-4 md:p-5 rounded-2xl border-2 border-cream-dark
                         hover:border-primary hover:bg-primary/5
                         transition-all duration-200 group"
            >
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cream-dark
                               group-hover:bg-primary group-hover:text-white
                               flex items-center justify-center font-bold text-chestnut
                               transition-colors duration-200">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="text-chestnut text-base md:text-lg leading-relaxed">
                  {answer.text}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
