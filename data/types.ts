export interface CareerType {
  id: string
  name: string
  shortName: string
  description: string
  detail: string
  traits: string[]
  suggestedCareers: string[]
  color: string
  image: string // キャラクター画像パス
}

export const careerTypes: CareerType[] = [
  {
    id: 'stability',
    name: '安定志向型',
    shortName: '安定志向',
    description: '大手・公務員など安定感重視',
    detail: '安定した環境で着実に成長していくタイプ。福利厚生や長期的なキャリアパスを重視し、しっかりとした組織の中で力を発揮します。',
    traits: ['計画的', '堅実', '信頼感がある', '継続力がある'],
    suggestedCareers: ['大手メーカー', '公務員', '金融機関', 'インフラ企業'],
    color: '#8B4513',
    image: '/characters/stability.png',
  },
  {
    id: 'challenge',
    name: '挑戦・成長志向型',
    shortName: '挑戦志向',
    description: 'ベンチャーなどスピード感重視',
    detail: '新しいことにどんどん挑戦し、失敗を恐れずに成長していくタイプ。スピード感のある環境で自分の可能性を広げていきます。',
    traits: ['行動力がある', 'チャレンジ精神', '成長意欲が高い', '変化を楽しむ'],
    suggestedCareers: ['スタートアップ', 'ベンチャー企業', 'コンサルティング', '新規事業開発'],
    color: '#E53935',
    image: '/characters/challenge.png',
  },
  {
    id: 'specialist',
    name: '専門スキル追求型',
    shortName: '専門追求',
    description: 'プロフェッショナル志向',
    detail: '特定の分野で専門性を極めていくタイプ。深い知識とスキルを身につけ、その道のプロフェッショナルとして活躍します。',
    traits: ['探究心がある', '集中力が高い', '論理的', '粘り強い'],
    suggestedCareers: ['エンジニア', '研究職', '士業', '専門コンサルタント'],
    color: '#1565C0',
    image: '/characters/specialist.png',
  },
  {
    id: 'social',
    name: '地域・社会貢献型',
    shortName: '社会貢献',
    description: '地元で行政やNPOで活躍',
    detail: '地域や社会に直接貢献することに喜びを感じるタイプ。人々の暮らしを支え、より良い社会を作ることにやりがいを見出します。',
    traits: ['思いやりがある', '社会意識が高い', '協調性がある', '誠実'],
    suggestedCareers: ['地方公務員', 'NPO/NGO', '地域金融', '医療・福祉'],
    color: '#4CAF50',
    image: '/characters/social.png',
  },
  {
    id: 'global',
    name: 'グローバル志向型',
    shortName: 'グローバル',
    description: '海外、外資系',
    detail: '世界を舞台に活躍したいタイプ。異文化への興味が強く、グローバルな視点でキャリアを築いていきます。',
    traits: ['好奇心旺盛', '適応力が高い', 'コミュニケーション力', '視野が広い'],
    suggestedCareers: ['外資系企業', '商社', '海外駐在', '国際機関'],
    color: '#00ACC1',
    image: '/characters/global.png',
  },
  {
    id: 'balance',
    name: 'ワークライフバランス型',
    shortName: 'WLB',
    description: '働きやすさ重視',
    detail: '仕事とプライベートの両立を大切にするタイプ。自分らしい働き方で、充実した人生を送ることを重視します。',
    traits: ['バランス感覚', '効率的', '自分軸がある', '健康意識が高い'],
    suggestedCareers: ['IT企業', 'リモートワーク可能な企業', 'フレックス制度のある企業', 'ホワイト企業'],
    color: '#7E57C2',
    image: '/characters/balance.png',
  },
  {
    id: 'leader',
    name: 'リーダー経営志向型',
    shortName: '経営志向',
    description: '独立、経営層',
    detail: '将来は自分でビジネスを動かしたいタイプ。リーダーシップを発揮し、組織や事業を牽引することにやりがいを感じます。',
    traits: ['リーダーシップ', '決断力', 'ビジョンがある', '影響力がある'],
    suggestedCareers: ['起業家', '経営幹部候補', '営業マネージャー', '事業責任者'],
    color: '#FF6B35',
    image: '/characters/leader.png',
  },
  {
    id: 'flexible',
    name: 'フレキシブル型',
    shortName: '柔軟探索',
    description: '広く経験し、適性を探す',
    detail: 'まずは幅広く経験してから自分に合った道を見つけたいタイプ。柔軟性があり、様々な可能性に開かれています。',
    traits: ['柔軟性がある', '好奇心が強い', '適応力が高い', 'オープンマインド'],
    suggestedCareers: ['総合職', 'ジョブローテーション', '複業・副業', 'フリーランス'],
    color: '#FF9800',
    image: '/characters/flexible.png',
  },
]

export function getTypeById(id: string): CareerType | undefined {
  return careerTypes.find((type) => type.id === id)
}

export function getTopTypes(scores: Record<string, number>, count: number = 3): CareerType[] {
  const sortedEntries = Object.entries(scores).sort(([, a], [, b]) => b - a)
  const topIds = sortedEntries.slice(0, count).map(([id]) => id)
  return topIds.map((id) => getTypeById(id)).filter((type): type is CareerType => type !== undefined)
}
