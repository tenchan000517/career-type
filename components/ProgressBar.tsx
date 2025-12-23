'use client'

interface ProgressBarProps {
  current: number
  total: number
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-chestnut font-medium">
          質問 {current} / {total}
        </span>
        <span className="text-sm text-chestnut-light">{percentage}%</span>
      </div>
      <div className="w-full h-3 bg-cream-dark rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
