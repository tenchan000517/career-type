export interface Answer {
  text: string
  scores: Record<string, number>
}

export interface Question {
  id: number
  text: string
  situation: string
  answers: Answer[]
  // この質問のテーマに関連するタイプID（キャラクター表示用）
  primaryType: string
}

// 各タイプのID
// stability: 安定志向型
// challenge: 挑戦・成長志向型
// specialist: 専門スキル追求型
// social: 地域・社会貢献型
// global: グローバル志向型
// balance: ワークライフバランス型
// leader: リーダー経営志向型
// flexible: 柔軟探索型

export const questions: Question[] = [
  {
    id: 1,
    text: '友達から「新しい部活を作ろう」と誘われた。どうする？',
    situation: '放課後、部活選びの時期',
    primaryType: 'challenge', // 新しいことを始める場面
    answers: [
      { text: 'しっかり計画を立ててから始めたい', scores: { stability: 3, specialist: 1 } },
      { text: '面白そう！まずやってみよう', scores: { challenge: 3, flexible: 1 } },
      { text: '自分の得意分野で活躍できるならやりたい', scores: { specialist: 3, leader: 1 } },
      { text: '地域の人にも喜んでもらえる活動がいいな', scores: { social: 3, balance: 1 } },
    ],
  },
  {
    id: 2,
    text: 'グループワークで意見がまとまらない。あなたは？',
    situation: '授業中のグループワーク',
    primaryType: 'leader', // チームをまとめる場面
    answers: [
      { text: 'みんなの意見を聞いて、まとめ役になる', scores: { leader: 3, social: 1 } },
      { text: '新しいアイデアを出して打開策を探る', scores: { challenge: 3, flexible: 1 } },
      { text: 'データや事実をもとに論理的に整理する', scores: { specialist: 3, stability: 1 } },
      { text: '全員が納得できる落としどころを探す', scores: { balance: 3, social: 1 } },
    ],
  },
  {
    id: 3,
    text: '夏休みの過ごし方、どれが一番ワクワクする？',
    situation: '夏休みの計画を立てるとき',
    primaryType: 'global', // 海外旅行の選択肢がある
    answers: [
      { text: '海外旅行やホームステイに挑戦', scores: { global: 3, challenge: 1 } },
      { text: '地元のボランティアやイベントに参加', scores: { social: 3, flexible: 1 } },
      { text: '興味のある分野をとことん勉強・研究', scores: { specialist: 3, stability: 1 } },
      { text: '友達とバランスよく遊びも勉強も', scores: { balance: 3, flexible: 1 } },
    ],
  },
  {
    id: 4,
    text: '文化祭で何をやりたい？',
    situation: '文化祭の出し物を決めるとき',
    primaryType: 'leader', // イベントを仕切る場面
    answers: [
      { text: '実行委員長としてイベント全体を仕切りたい', scores: { leader: 3, challenge: 1 } },
      { text: '他校にはない斬新な企画を提案したい', scores: { challenge: 3, global: 1 } },
      { text: '自分のスキルを活かせる役割で貢献したい', scores: { specialist: 3, stability: 1 } },
      { text: '地域の人も楽しめる企画を考えたい', scores: { social: 3, balance: 1 } },
    ],
  },
  {
    id: 5,
    text: '将来の仕事で一番大切にしたいことは？',
    situation: '進路について考えるとき',
    primaryType: 'stability', // 将来を考える場面
    answers: [
      { text: '安定した収入と福利厚生', scores: { stability: 3, balance: 1 } },
      { text: '自分の成長とやりがい', scores: { challenge: 3, specialist: 1 } },
      { text: '社会や人の役に立つこと', scores: { social: 3, global: 1 } },
      { text: '自分でビジネスを作ること', scores: { leader: 3, flexible: 1 } },
    ],
  },
  {
    id: 6,
    text: '新しいクラスで友達を作るとき、どうする？',
    situation: '新学期が始まったとき',
    primaryType: 'flexible', // 新しい環境に適応する場面
    answers: [
      { text: '気の合いそうな人を見つけてじっくり仲良くなる', scores: { stability: 3, balance: 1 } },
      { text: '自分から積極的に話しかけに行く', scores: { challenge: 3, leader: 1 } },
      { text: '同じ趣味や興味を持つ人を探す', scores: { specialist: 3, social: 1 } },
      { text: 'いろんなタイプの人と広く浅く仲良くなる', scores: { flexible: 3, global: 1 } },
    ],
  },
  {
    id: 7,
    text: 'アルバイトを選ぶなら、どんな基準で選ぶ？',
    situation: 'アルバイトを探しているとき',
    primaryType: 'specialist', // キャリアを考える場面
    answers: [
      { text: '将来のキャリアに役立つ経験ができるところ', scores: { specialist: 3, challenge: 1 } },
      { text: '時給がよくてシフトの融通がきくところ', scores: { balance: 3, stability: 1 } },
      { text: '地域のお店や人と関われるところ', scores: { social: 3, flexible: 1 } },
      { text: '責任あるポジションを任せてもらえるところ', scores: { leader: 3, challenge: 1 } },
    ],
  },
  {
    id: 8,
    text: '困っている友達がいたら、どうする？',
    situation: '友達が悩んでいるとき',
    primaryType: 'social', // 人を助ける場面
    answers: [
      { text: 'じっくり話を聞いて、一緒に解決策を考える', scores: { social: 3, balance: 1 } },
      { text: '具体的なアドバイスや情報を調べて教える', scores: { specialist: 3, stability: 1 } },
      { text: '一緒に行動して問題を解決する', scores: { challenge: 3, leader: 1 } },
      { text: '他の友達も巻き込んでみんなでサポートする', scores: { flexible: 3, social: 1 } },
    ],
  },
  {
    id: 9,
    text: 'テスト前の勉強スタイルは？',
    situation: 'テスト週間が近づいてきたとき',
    primaryType: 'stability', // 計画的に取り組む場面
    answers: [
      { text: '計画を立てて、コツコツ進める', scores: { stability: 3, specialist: 1 } },
      { text: '得意科目を伸ばして、苦手は最低限', scores: { flexible: 3, balance: 1 } },
      { text: '友達と教え合いながら勉強する', scores: { social: 3, challenge: 1 } },
      { text: '効率の良い方法を研究して一気に集中', scores: { specialist: 3, challenge: 1 } },
    ],
  },
  {
    id: 10,
    text: 'SNSでどんな投稿をすることが多い？',
    situation: 'SNSを使うとき',
    primaryType: 'global', // 発信・世界とつながる場面
    answers: [
      { text: '旅行や海外の写真、異文化の紹介', scores: { global: 3, challenge: 1 } },
      { text: '地元のお店やイベントの情報', scores: { social: 3, flexible: 1 } },
      { text: '趣味や専門分野についての発信', scores: { specialist: 3, leader: 1 } },
      { text: 'あまり投稿せず、見る専門', scores: { balance: 3, stability: 1 } },
    ],
  },
  {
    id: 11,
    text: '理想のチームでの自分の役割は？',
    situation: 'チームプロジェクトをするとき',
    primaryType: 'leader', // チームでの役割を考える場面
    answers: [
      { text: 'リーダーとしてチームを引っ張る', scores: { leader: 3, challenge: 1 } },
      { text: '専門知識やスキルでチームに貢献する', scores: { specialist: 3, stability: 1 } },
      { text: 'メンバーの調整役・ムードメーカー', scores: { social: 3, balance: 1 } },
      { text: '状況に応じて柔軟に役割を変える', scores: { flexible: 3, global: 1 } },
    ],
  },
  {
    id: 12,
    text: '10年後の自分、どんな風になっていたい？',
    situation: '将来を想像するとき',
    primaryType: 'stability', // 将来像を考える場面
    answers: [
      { text: '安定した職場で家族と幸せに暮らしている', scores: { stability: 3, balance: 1 } },
      { text: '自分の会社やチームを持っている', scores: { leader: 3, challenge: 1 } },
      { text: 'その道のプロとして認められている', scores: { specialist: 3, global: 1 } },
      { text: '地域や社会に貢献する仕事をしている', scores: { social: 3, flexible: 1 } },
    ],
  },
  {
    id: 13,
    text: '海外に行くチャンスがあったら？',
    situation: '留学や海外インターンの話があったとき',
    primaryType: 'global', // 海外の話
    answers: [
      { text: '絶対行きたい！新しい世界を見たい', scores: { global: 3, challenge: 1 } },
      { text: '目的があれば行きたい', scores: { specialist: 3, leader: 1 } },
      { text: '日本でやりたいことがあるから迷う', scores: { stability: 3, social: 1 } },
      { text: '短期間なら行ってみたい', scores: { flexible: 3, balance: 1 } },
    ],
  },
  {
    id: 14,
    text: 'お金の使い方、どのタイプに近い？',
    situation: 'お小遣いやバイト代の使い道',
    primaryType: 'stability', // 貯金・計画的
    answers: [
      { text: '将来のためにコツコツ貯金', scores: { stability: 3, balance: 1 } },
      { text: '自己投資（本、セミナー、スキルアップ）', scores: { specialist: 3, challenge: 1 } },
      { text: '体験や経験にお金を使う', scores: { challenge: 3, global: 1 } },
      { text: '友達や周りの人のために使うことも多い', scores: { social: 3, flexible: 1 } },
    ],
  },
  {
    id: 15,
    text: '失敗したとき、どう立ち直る？',
    situation: '大きな失敗をしてしまったとき',
    primaryType: 'challenge', // 立ち直り・挑戦
    answers: [
      { text: '原因を分析して、次に活かす', scores: { specialist: 3, stability: 1 } },
      { text: '落ち込むけど、すぐ次のことを考える', scores: { challenge: 3, flexible: 1 } },
      { text: '信頼できる人に相談する', scores: { social: 3, balance: 1 } },
      { text: '失敗も経験として受け入れて進む', scores: { leader: 3, global: 1 } },
    ],
  },
  {
    id: 16,
    text: '休日の過ごし方、理想は？',
    situation: '週末の過ごし方を考えるとき',
    primaryType: 'balance', // ワークライフバランス
    answers: [
      { text: '趣味や好きなことに没頭する', scores: { specialist: 3, balance: 1 } },
      { text: '新しい場所やお店を開拓する', scores: { challenge: 3, global: 1 } },
      { text: '友達や家族とゆっくり過ごす', scores: { balance: 3, social: 1 } },
      { text: '地域のイベントやボランティアに参加する', scores: { social: 3, flexible: 1 } },
    ],
  },
  {
    id: 17,
    text: '自分の強みを活かすなら？',
    situation: '自己PRを考えるとき',
    primaryType: 'challenge', // 自己アピール
    answers: [
      { text: '責任感があり、最後までやり遂げる', scores: { stability: 3, specialist: 1 } },
      { text: '行動力があり、新しいことに挑戦できる', scores: { challenge: 3, leader: 1 } },
      { text: 'コミュニケーション力があり、人と関わるのが好き', scores: { social: 3, global: 1 } },
      { text: '柔軟性があり、どんな環境にも適応できる', scores: { flexible: 3, balance: 1 } },
    ],
  },
  {
    id: 18,
    text: '進路で迷ったとき、誰に相談する？',
    situation: '進路選択で悩んでいるとき',
    primaryType: 'social', // 相談・人とのつながり
    answers: [
      { text: '親や先生など、経験豊富な大人', scores: { stability: 3, social: 1 } },
      { text: '実際にその道に進んだ先輩', scores: { specialist: 3, challenge: 1 } },
      { text: '友達と一緒に情報収集しながら', scores: { flexible: 3, balance: 1 } },
      { text: '最終的には自分で決める', scores: { leader: 3, global: 1 } },
    ],
  },
  {
    id: 19,
    text: '理想の働き方は？',
    situation: '将来の仕事スタイルを考えるとき',
    primaryType: 'balance', // 働き方
    answers: [
      { text: '決まった時間に安定して働く', scores: { stability: 3, balance: 1 } },
      { text: '裁量を持って自由に働く', scores: { leader: 3, flexible: 1 } },
      { text: 'チームで協力しながら働く', scores: { social: 3, specialist: 1 } },
      { text: '場所を選ばず、世界中で働く', scores: { global: 3, challenge: 1 } },
    ],
  },
  {
    id: 20,
    text: '最後に、あなたが一番大切にしたいものは？',
    situation: '自分の軸を考えるとき',
    primaryType: 'social', // 大切なもの・つながり
    answers: [
      { text: '安心できる環境と人間関係', scores: { stability: 3, balance: 2, social: 1 } },
      { text: '成長できる機会とチャレンジ', scores: { challenge: 3, leader: 2, global: 1 } },
      { text: '専門性と自分らしさ', scores: { specialist: 3, flexible: 2, balance: 1 } },
      { text: '人や社会とのつながり', scores: { social: 3, global: 2, flexible: 1 } },
    ],
  },
]

export function getQuestionById(id: number): Question | undefined {
  return questions.find((q) => q.id === id)
}
