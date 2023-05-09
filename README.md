# react-firebase-blog

React ＋ Firebase でブログサイトを作る

## 環境

- Windows 11 Pro 22H2
- node: 18.15.0

## React 環境構築、実行

```bash
# プロジェクト作成
$ npx create-react-app react-firebase-blog

# react-router-dom インストール
$ npm install react-router-dom

# プロジェクト実行
$ npm start
```

## Firebase 環境構築

```bash
# Firebaseモジュール インストール
$ npm install firebase
```
- [ウェブサイトで Firebase Authentication を使ってみる](https://firebase.google.com/docs/auth/web/start?hl=ja)
- [Cloud Firestore を使ってみる](Cloud Firestore を使ってみる)

## Font Awesome 環境構築

- [Set Up with React](https://fontawesome.com/docs/web/use-with/react/)

```bash
# Add SVG Core
$ npm i --save @fortawesome/fontawesome-svg-core

# Free icons styles
$ npm i --save @fortawesome/free-solid-svg-icons
$ npm i --save @fortawesome/free-regular-svg-icons

# Add the React Component
$ npm i --save @fortawesome/react-fontawesome@latest
```

## 参考サイト

- [【React アプリ開発】3 種類の React アプリケーションを構築して、React の理解をさらに深めるステップアップ講座](https://www.udemy.com/course/react-3project-app-udemy/)
