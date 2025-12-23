import { careerTypes, CareerType } from '@/data/types'

export interface ScoreResult {
  scores: Record<string, number>
  percentages: Record<string, number>
  topType: CareerType
  topTypes: CareerType[]
}

// 初期スコアを生成
export function initializeScores(): Record<string, number> {
  const scores: Record<string, number> = {}
  careerTypes.forEach((type) => {
    scores[type.id] = 0
  })
  return scores
}

// 回答を追加してスコアを更新
export function addAnswerScores(
  currentScores: Record<string, number>,
  answerScores: Record<string, number>
): Record<string, number> {
  const newScores = { ...currentScores }
  Object.entries(answerScores).forEach(([typeId, score]) => {
    newScores[typeId] = (newScores[typeId] || 0) + score
  })
  return newScores
}

// スコアをパーセンテージに変換
export function calculatePercentages(scores: Record<string, number>): Record<string, number> {
  const maxPossibleScore = 60 // 20問 × 最大3ポイント
  const percentages: Record<string, number> = {}

  Object.entries(scores).forEach(([typeId, score]) => {
    percentages[typeId] = Math.round((score / maxPossibleScore) * 100)
  })

  return percentages
}

// 上位タイプを取得
export function getTopTypes(scores: Record<string, number>, count: number = 3): CareerType[] {
  const sortedEntries = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, count)

  return sortedEntries
    .map(([id]) => careerTypes.find((type) => type.id === id))
    .filter((type): type is CareerType => type !== undefined)
}

// 最終結果を計算
export function calculateResult(scores: Record<string, number>): ScoreResult {
  const percentages = calculatePercentages(scores)
  const topTypes = getTopTypes(scores, 3)

  return {
    scores,
    percentages,
    topType: topTypes[0],
    topTypes,
  }
}

// URLクエリパラメータ用にスコアをエンコード
export function encodeScores(scores: Record<string, number>): string {
  return btoa(JSON.stringify(scores))
}

// URLクエリパラメータからスコアをデコード
export function decodeScores(encoded: string): Record<string, number> | null {
  try {
    return JSON.parse(atob(encoded))
  } catch {
    return null
  }
}
