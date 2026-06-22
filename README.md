# MiraiZandaka

ブラウザだけで動く未来残高シミュレーターです。サーバーとデータベースを使わず、入力した残高と予定は `localStorage` に保存します。

## 使い方

`index.html` をブラウザで開くと動作します。Chart.js、Tailwind CSS、Material Symbols、Noto Sans JP はCDNから読み込みます。

ローカルHTTPサーバーで確認する場合:

```bash
python3 -m http.server 4173
```

その後、ブラウザで `http://localhost:4173/` を開きます。

## 主な機能

- 現在残高の保存
- 収入/支出の予定追加
- 毎月予定と単発予定の管理
- 30日、90日、180日の残高推移グラフ
- 3ヶ月後、6ヶ月後の残高予測
- 編集、削除、サンプルデータ復元
- 日本語/英語の表示切り替え
- 将来の広告差し込み用の余白

## データ保存

保存キーは `miraizandaka_state_v1` です。保存スキーマは `AGENTS.md` の `user_profile` と `schedules` をベースにしています。

言語設定はアプリ本体のデータとは分けて、`miraizandaka_locale_v1` に保存します。対応言語は `ja` と `en` です。
