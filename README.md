# FootballStats

## 概要
子供のサッカーのスタッツやサッカーノートを記録、管理するアプリ

## 将来の展望
1. 最終的にはアプリで展開したい
2. まずはデモ用にWEB閲覧できるようにWEBアプリとしてデプロイする

## 画面構成
- スマホの画面1ページで完結するようにしてほしい
- それぞれの画面のアイコンをフッターにしてほしい
- デザインは、**デザイン**セクションを参考に全てのページ統一してほしい

### 1. トップ画面（ホーム）
- 画面上部は `FootballStats/Images/image2.png` の上部を参考にしてほしい（名前やマッチ数など）
- `FootballStats/Images/image2.png` の赤枠の中に、`FootballStats/Images/image1.png` の画像と同じ項目で、サッカーのスタッツ情報をトップページに出してほしい

### 2. カレンダー/ノート画面
- カレンダーの日ごとにノートが書ける
- イメージは `FootballStats/Images/image3.png` と `FootballStats/Images/image4.png`

### 3. スタッツ/プレー画面
- 過去試合ごとにパネルになっていて、動画とその試合のスタッツアイコンを押すとそれがポップアップで見れる
- イメージは `FootballStats/Images/image5.png`

### 4. AIバディ画面
- チャットボットのイメージ
- 複数のエージェントから相談したいバディを選べる
  - 個人プレーハイライトエージェント
  - チーム戦術・映像を振り返るエージェント
  - スタッツの振り返りエージェント
  - メディカル、コンディションのチェック等
- イメージは `FootballStats/Images/image6.png` の様にアバターがあると良い

### 5. サポート画面
- 開発中としておいてほしい

## 技術構成
### フロントエンド
- **React + TypeScript + Vite** - 高速開発とホットリロード
- **Tailwind CSS** - レスポンシブデザイン
- **Zustand** - 軽量状態管理
- **React Router** - SPAナビゲーション
- **Framer Motion** - スムーズなページ遷移アニメーション
- **React Hook Form** - フォーム操作最適化
- **React Query** - データ取得の最適化

### PWA (Progressive Web App) 対応
- **manifest.json** - アプリライクな動作
- **Service Worker** - オフライン対応
- **ホーム画面追加** - ネイティブアプリ風起動

### ネイティブ風UI実装
- **固定フッターナビ** - `position: fixed` + `bottom: 0`
- **スマホ画面最適化** - viewport設定 + レスポンシブ
- **タッチ操作対応** - タップ、スワイプ操作
- **スクロール制御** - 各画面1ページ収まり設計
```css
/* フッター固定 */
.footer-nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 70px;
}

/* コンテンツ領域調整 */
.main-content {
  padding-bottom: 70px;
  height: calc(100vh - 70px);
  overflow-y: auto;
}
```

### デプロイ
- **Vercel** または **Netlify** - 簡単デプロイ

### 将来のアプリ化への対応
- React → React Native移行を想定した構成
- コード再利用率70-80%（ビジネスロジック、状態管理、型定義）
- 必要に応じてExpo採用でWeb/iOS/Android同一コードベース化

## 作成時の留意点
- まずはスマホで見せるデモなので、スマホのUIを中心に作り込んでほしい
- まずはモックアップとして、フロントを作成（データはダミーデータ）
- 各画面のデータの入力機能もあとから付けやすいような構成にしてほしい
- 後からOpenAPIを使用してAPIを生やす想定なので、それを考慮したフォルダ構成を作ってほしい
- 将来のReact Native移行を考慮したコンポーネント設計

## デザイン
- トンマナは `FootballStats/Images/image2.png` をイメージして作成してほしい

## カラーコード
- 背景 #02070D
- 文字　#FBF9FA
- 選択されている時の文字　#3C8DBC
- グラフなどで使用1 #24A0FF
- グラフなどで使用2 #3C8DBC
- グラフなどで使用3 #00385B
- グラフなどで使用4 #026ACB
- グラフなどで使用5 #031C32
