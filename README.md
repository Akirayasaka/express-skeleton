# express-skeleton

- TypeScript + ESLint + Prettier

## 專案結構 

| 項目 | 說明 |
| -------- | -------- | 
| configs | 相關設定檔案(ex: SQL連線資料) |
| controllers | 包含程式所需的所有控制器。這些控制器方法從路由獲取請求，並視需要使用middlewares將它們轉換為 HTTP Response。 |
| interfaces | 定義資料介面 |
| middlewares | 中介層, 可以有用於身份驗證、日誌記錄或任何其他目的 |
| models | 對應資料庫模型 |
| routes | 路由管理 |
| service | 包括所有業務邏輯。它可以擁有代表業務對象的服務，並且可以在DB上運行查詢。|
| utils | 包含所需的套件管理或是放置共享邏輯的地方。 |
