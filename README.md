# プレミアム特典コンテンツページ

## 推奨環境(操作確認済み)バージョン
```
node: v16.20.0
npm: 9.6.4
```

webpackのバージョンは以下を使用しています
```
webpack: 5.38.1
webpack-cli: 4.7.2
```

## セットアップ (mac・デザイナー向け)

### Node.jsのインストール (事前準備)
#### 1. Xcodeが入っているか確認

Homebrew(macOS用 パッケージマネージャ)経由でNode.jsを入れるときは[Xcode](https://apps.apple.com/jp/app/xcode/id497799835)を入れる必要があります

#### 2. Homebrew 導入

[Homebrew公式ページ](https://brew.sh/index_ja)の「インストール」下にあるリンクをコピーして、ターミナルに貼り付けて実行してください

#### 3. nodebrew(Node.jsのバージョン管理ツール) を導入

```$brew install nodebrew```

#### 4. Node.jsのインストール (npmのインストールも付いてきます)

```$nodebrew install-binary v12.16.3```

#### 5. バージョンが確認(インストールできていることを確認)できればok

```$node -v```

```$npm -v```


### webpack-cli用のPATHを通す (コマンド調整中)
このテンプレートには webpack-cliが入っており、webpackコマンドで webpackに関連する処理を実行できるようになっていますが、
PATHを通さないと使えないので、シェルがコマンドの実行ファイルを探しにいくためのパスを設定する必要があります

```$export PATH=$PATH:./node_modules/.bin```

記述後は編集したファイルに対してsourceコマンドを実行して、PATHを通してください

```
$source ~/.bashrc
$source ~/.bash_profile
```

***

### プロジェクトの実行
ターミナルでプロジェクトのディレクトリまで移動してコマンドを入力

(ビルドすると、`/dist`内にバンドルされたデータが配置されます)

本番用ビルド: ```$npm run build```

***

### 反映
FTP下に配置するのは、`/dist`フォルダ以下です

***

### sassを追加される方へ

sassの`@import`ルールは [廃止されることが予定](https://sass-lang.com/blog/the-module-system-is-launched#future-plans)されており(2022/10/1)、`@use`や`@forward`といったルールに置き換わるため
このテンプレートでは LibSassではなく、DartSassのモジュールを導入しています

ファイルを追加する場合は、[DartSass](https://sass-lang.com/dart-sass)に準拠した記法を推奨します
