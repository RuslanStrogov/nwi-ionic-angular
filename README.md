# 📱 NWI Ionic Angular

> Тестовое задание — мобильное приложение на Ionic 4 + Angular 7

![Ionic](https://img.shields.io/badge/Ionic-4-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-7-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Cordova](https://img.shields.io/badge/Cordova-Android-3E8E41?style=for-the-badge&logo=apachecordova&logoColor=white)

> 🎥 **Видео-демо:** [YouTube](https://www.youtube.com/watch?v=z-burbkr_gU)

---

## 📋 О проекте

Мобильное приложение, разработанное в рамках тестового задания. Построено на **Ionic 4** с **Angular 7** и навигацией через табы.

### 🧭 Навигация

| Таб | Описание |
|-----|----------|
| ⭐ **Stars** | Экран со списком — демонстрация работы с данными |
| 📋 **List** | Списочный экран с элементами |
| 🔲 **Tabs** | Базовая таб-навигация |

---

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск в браузере (с livereload)
npm start          # или: ng serve
```

### Сборка

```bash
# Продакшен-сборка
npm run build      # или: ng build

# Android APK
ionic cordova build android

# E2E тесты
npm run e2e
```

---

## 🏗 Стек

| Технология | Версия |
|-----------|--------|
| Ionic Framework | 4.1.x |
| Angular | 7.2.x |
| TypeScript | 3.2.x |
| Cordova Android | 8.0.0 |
| RxJS | 6.5.x |

---

## 📁 Структура

```
src/
├── app/
│   ├── tabs/       # Таб-навигация
│   ├── stars/      # Звёзды
│   ├── list/       # Список
│   ├── app.module.ts
│   └── app-routing.module.ts
├── theme/          # Тема оформления
├── assets/         # Статические ресурсы
└── index.html
```

---

## 📄 Лицензия

Тестовое задание — для ознакомления.
