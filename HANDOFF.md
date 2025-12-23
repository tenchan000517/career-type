# キャリアタイプ診断アプリ - 開発引き継ぎ

## 概要

可児市向けキャリアタイプ診断Webアプリ。高校生・大学生が対象。
**イベント使用日: 2025年2月11日**

---

## 重要な設計方針（ディスカッションで決定）

### 1. 誘導しない質問設計
- 「そりゃそうなるよな」という回答にさせない
- シチュエーション形式（「こんな時どうする？」）を採用
- 4択で各選択肢が異なるタイプに対応

### 2. デザインの意図
> **デザインには一つ一つ意図と意味がないとダメ**

- 意味のない装飾・アイコンは使わない
- キャラクター画像は質問のテーマと関連づけて表示
- 各質問に`primaryType`を設定し、その質問のテーマに合ったキャラクターを表示

### 3. ユーザー体験
- 所要時間: 5〜7分（MBTIよりライト）
- モバイルファースト
- 楽しみながら回答できる

---

## 8つのキャリアタイプ

| ID | 名前 | 画像ファイル | キャラクター説明 |
|----|------|-------------|-----------------|
| stability | 安定志向型 | stability.png | 栗かごに入った子 |
| challenge | 挑戦・成長志向型 | challenge.png | ハチマキ＋棒を持つ子 |
| specialist | 専門スキル追求型 | specialist.png | 虫眼鏡を持つ子 |
| social | 地域・社会貢献型 | social.png | 水やりをする子 |
| global | グローバル志向型 | global.png | 地球儀を持つ子 |
| balance | ワークライフバランス型 | balance.png | スーツ＋PCの子 |
| leader | リーダー経営志向型 | leader.png | 旗を持つ子 |
| flexible | フレキシブル型 | flexible.png | 栗の仲間と一緒の子 |

**トップページ用:** `main.png`

---

## キャラクター画像について

### 現状
- `public/characters/` に仮画像（undraw素材）を配置中
- 本物のキャラクター画像は後から提供される

### 差し替え方法
同じファイル名で上書きするだけでOK:
```
public/characters/
├── main.png         ← トップページ
├── stability.png    ← 安定志向型
├── challenge.png    ← 挑戦志向型
├── specialist.png   ← 専門追求型
├── social.png       ← 社会貢献型
├── global.png       ← グローバル型
├── balance.png      ← WLB型
├── leader.png       ← 経営志向型
└── flexible.png     ← 柔軟探索型
```

### 元キャラクター資料の場所
```
C:\Users\tench\Downloads\Contigo\
├── 9.png   → 安定志向型
├── 10.png  → 挑戦志向型
├── 11.png  → 専門追求型
├── 12.png  → 社会貢献型
├── 13.png  → グローバル型
├── 14.png  → WLB型
├── 15.png  → 経営志向型
└── 16.png  → 柔軟探索型
```

---

## 診断ロジック

### スコアリング
- 各質問の選択肢がタイプにスコア加算（メイン3点、サブ1〜2点）
- `data/questions.ts` に全20問と各選択肢のスコア定義
- `lib/scoring.ts` でスコア計算

### 質問とキャラクターの対応
各質問には `primaryType` が設定されている。これは質問のテーマに関連するタイプで、その質問を表示中にそのタイプのキャラクターを表示する。

例: Q13「海外に行くチャンスがあったら？」→ `primaryType: 'global'` → グローバル型のキャラクター表示

---

## ファイル構成

```
app/
├── page.tsx           # トップページ（メインキャラ + 開始ボタン）
├── quiz/page.tsx      # 診断ページ（キャラ + 質問 + 選択肢）
└── result/page.tsx    # 結果ページ（キャラ + チャート + シェア）

components/
├── CharacterDisplay.tsx  # キャラクター画像表示
├── QuestionCard.tsx      # 質問カード
├── ProgressBar.tsx       # 進捗バー
├── RadarChart.tsx        # レーダーチャート
└── ShareButtons.tsx      # X/LINEシェア

data/
├── types.ts      # 8タイプの定義（名前、説明、画像パス等）
└── questions.ts  # 20問の質問（テキスト、選択肢、スコア、primaryType）
```

---

## 技術スタック

- Next.js 15.2.8 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3.4
- Framer Motion（アニメーション）
- Chart.js（レーダーチャート）

---

## 未完了タスク

1. **本物のキャラクター画像の差し替え**
2. **Vercelデプロイ**
3. **OGP画像作成**（シェア時のプレビュー用、必要に応じて）

---

## 起動方法

```bash
npm install
npm run dev
```

http://localhost:3000
