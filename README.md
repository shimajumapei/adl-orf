# ADL ORF2026 展示サイト

松川昌平研究室 (ADL) の ORF 展示ガイドサイト。ORF2026 は 2026/11/22(日)–23(月・祝)、会場は森アトリエ。

## 2026年版の構成

- トップ: 1F / 2F の全体図 → 各階の展示エリア詳細図（`/adl-orf/1f`, `/adl-orf/2f`）
- 詳細図の番号ボタン（00〜12）を押すと作品カードが開く
- 平面図は 2026年の配置図（orf2026_haiti.dxf）から書き出した `src/image/1f.png` `2f.png` `1f_detail.png` `2f_detail.png`

## 作品データの入れ方

`src/notion/api.ts` の `EXHIBITS_2026` を埋める（タイトル・名前・学年・説明・画像・リンク）。
画像は `public/works/` に置いて `modalImage: "/adl-orf/works/xx.jpg"` のように書くのが簡単。
ボタンの位置 `position` は詳細図の左上からの %（x, y）。

| 何を | どこ |
| --- | --- |
| タイトル画像（テーマは2025年と同じ） | `src/image/Title.png` |
| ページの説明文 | `public/index.html` の `description` |

## 公開

`homepage` は `/adl-orf/` なので、どのサーバーでも `/adl-orf/` 配下に置けば動く。

- 自前サーバー（研究室のマシンなど）: `npm run build:server` → `dist/adl-orf/` をWebサーバーの公開ディレクトリにコピー。SPAなので、存在しないパスは `/adl-orf/index.html` を返す設定にする（nginx なら `try_files $uri /adl-orf/index.html;`）。
- GitHub Pages: `npm run deploy`（`docs/` に出力して master に push）。

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
