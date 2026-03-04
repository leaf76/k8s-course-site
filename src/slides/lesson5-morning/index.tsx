import type { ReactNode } from 'react'

export interface Slide {
  title: string
  subtitle?: string
  section?: string
  content?: ReactNode
  code?: string
  notes?: string
  duration?: string
}

export const slides: Slide[] = [
  // ========== 開場 ==========
  {
    title: '工作負載管理',
    subtitle: 'Deployment、HPA、DaemonSet、StatefulSet',
    section: '第五堂早上',
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-k8s-blue rounded-full flex items-center justify-center text-4xl">
            ☸️
          </div>
          <div>
            <p className="text-2xl font-semibold">工作負載管理</p>
            <p className="text-slate-400">讓應用程式跑得穩、跑得好、跑得聰明</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 text-base">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">⏰ 時間</p>
            <p>09:00 – 12:00（180 分鐘）</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">🎯 本堂目標</p>
            <p>掌握各種工作負載的設計與選擇</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">🛠 工具</p>
            <p>kubectl、Metrics Server、HPA</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">📋 前置條件</p>
            <p>了解 Pod、Deployment 基本操作</p>
          </div>
        </div>
      </div>
    ),
    notes: `大家早安！歡迎來到第五堂課的早上場。希望大家昨晚睡得好、精神飽滿，因為今天的內容很精彩，需要全神貫注。先環顧一下大家的狀態——好，大家看起來都還活著，那我們就開始。

今天我們要深入探討 Kubernetes 的工作負載管理。「工作負載管理」這個詞聽起來很抽象，讓我用一個生活化的比喻來解釋。想像你是一家餐廳的老闆，你的「服務」就是廚師負責做菜。Kubernetes 就像是餐廳的管理系統：Pod 是每個廚師；Deployment 是「廚師團隊的配置規則」，告訴管理系統要保持幾個廚師在線上、怎麼替換請假的廚師；健康檢查是「確認廚師能正常工作，而不只是人還在廚房裡」；資源限制是「規定每個廚師最多用幾個爐子」；HPA 是「根據點餐量自動增加或減少廚師數量」；DaemonSet 是「確保每桌都有一個服務員（不是廚師）」；StatefulSet 是「管理那些有固定座位、固定工具的專業廚師（比如主廚，不能隨意替換）」。

這個比喻不完全精準，但能幫助你建立直覺。在過去幾堂課，我們已經學過 Pod 的基本概念，也用過 Deployment 部署過應用程式。但那只是「讓餐廳開門做生意」，今天要學的是「讓餐廳在各種情況下都能穩定、高效地運營」。

今天早上的主要角色有四位：Deployment（我們的老朋友，今天要更深入認識它的細節和最佳實踐）、HPA（Horizontal Pod Autoscaler，根據實際負載自動增減 Pod 數量，是現代雲端應用的標配）、DaemonSet（確保每個節點都有特定 Pod，適合基礎設施服務）、StatefulSet（管理有狀態的應用程式，解決資料庫在 Kubernetes 上的部署難題）。

我在業界工作和顧問的經驗告訴我，很多工程師在開始用 Kubernetes 時，光是把服務跑起來就覺得大功告成了。沒有設定健康檢查，結果應用程式死鎖了、卡住了，Kubernetes 卻以為一切正常；沒有設定資源限制，一個有記憶體洩漏的服務把整個節點的記憶體吃光，影響同節點上的所有服務；沒有用合適的工作負載類型，把有狀態的資料庫用 Deployment 部署，結果 Pod 一重啟資料就消失了。這些都是我見過的真實事故。

今天學完這些知識，你不只能避開這些坑，還能在面試時自信地回答「你在 Kubernetes 上是怎麼確保服務穩定性的」這個問題。這四種工作負載各有各的使用場景，課程結束後你應該能夠清楚判斷「什麼情況要用哪一種」，這個判斷力是優秀的 DevOps 工程師的核心能力之一。

好，準備好了嗎？我們先做一個快速的前情提要，確認大家的基礎都 OK，然後直接進入今天的主題！

最後說一件事：今天的課程節奏是「先概念再實作」，每個主題我都會先解釋「為什麼需要這個機制」，再看「怎麼設定」。這樣的學習順序能讓你在看到 YAML 欄位時已經有心理預期，而不是拿著設定範例硬背。學完今天的課，你對 Kubernetes 工作負載的掌握程度應該能達到「能夠獨立設計一套完整的生產環境部署配置」的層次，這在業界已經是中階工程師的標準，大家加油！有任何問題課程中隨時舉手，不要憋到下課才問，一個即時問題往往能讓全班都豁然開朗！`,
    duration: '3',
  },

  // ========== 課程大綱 ==========
  {
    title: '今日課程大綱',
    section: '課程總覽',
    content: (
      <div className="grid gap-3">
        {[
          { time: '09:00–09:05', topic: '開場與複習', icon: '🔁' },
          { time: '09:05–09:35', topic: 'Deployment 深入：模板設計、策略', icon: '🚀' },
          { time: '09:35–10:00', topic: '健康檢查：Liveness / Readiness / Startup', icon: '❤️' },
          { time: '10:00–10:25', topic: '資源管理：Request / Limit / QoS', icon: '⚖️' },
          { time: '10:25–10:40', topic: '休息時間', icon: '☕' },
          { time: '10:40–11:10', topic: 'HPA 自動擴縮容', icon: '📈' },
          { time: '11:10–11:30', topic: 'DaemonSet：每個節點一個 Pod', icon: '🛡️' },
          { time: '11:30–11:50', topic: 'StatefulSet：有狀態應用', icon: '🗄️' },
          { time: '11:50–12:00', topic: '課程總結', icon: '🏁' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-k8s-blue text-sm">{item.time}</p>
              <p className="text-base">{item.topic}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    notes: `讓我們先看一下今天早上的課程安排，心裡有個底，知道整體流程是什麼。我一直覺得，好的學習體驗需要學生先知道「我今天要去哪裡」，這樣才能在每個知識點建立正確的期待，也更容易把知識串起來形成整體圖像。

前面五分鐘，開場加複習。我們會快速回顧上一堂課學到的 ConfigMap、Secret、Volume、PVC、Service、Ingress 這些「外圍支援」知識，確認大家的基礎已經就位。有任何上次沒聽清楚的地方，也可以趁這個機會提出來。

09:05 開始，三十分鐘深入 Deployment。大家之前已經用過 Deployment 部署服務，但我們今天要更深入：Pod 模板的每個欄位是什麼意思、selector 的工作原理、resource request 和 limit 怎麼設、更重要的是更新策略的選擇——什麼時候用 RollingUpdate、什麼時候用 Recreate、怎麼做零停機更新、出了問題怎麼快速回滾。這些都是生產環境每天都在用的知識。

09:35 到 10:00，二十五分鐘學健康檢查。這是確保應用程式穩定運行的關鍵機制，也是很多人在開始用 Kubernetes 時最容易忽略的部分。你的服務跑起來了，但 Kubernetes 怎麼知道它是不是真的在正常服務？容器 process 還在跑，不代表應用程式能正常處理請求。Liveness、Readiness、Startup 三種 Probe 各司其職，搭配 httpGet、tcpSocket、exec 三種探測方式，讓 Kubernetes 真正「知道」你的服務狀態。

10:00 到 10:25，二十五分鐘探討資源管理。CPU 和記憶體的 Request 與 Limit 設定、單位的意義、QoS Class 的計算方式，以及這些設定如何影響 Pod 的排程和在節點資源緊張時的生存優先順序。這個主題和 HPA（後半場）是緊密相連的，因為 HPA 需要依賴 CPU Request 來計算使用率。

10:25 到 10:40 是休息時間，15 分鐘，可以喝水、活動一下。

休息之後，10:40 到 11:10，三十分鐘學 HPA 自動擴縮容。這可能是很多人學 Kubernetes 的核心動機之一——讓你的服務根據流量自動增加或減少 Pod 數量，不需要人工介入。我們會從原理講到實際設定，還會做一個壓力測試示範，讓你親眼看到 Pod 數量自動變化。

11:10 到 11:30，二十分鐘認識 DaemonSet。DaemonSet 是「確保每個節點上都跑著特定 Pod」的機制，和 Deployment 的「跑指定數量的 Pod」完全不同的邏輯。日誌收集、節點監控、網路插件都是它的主場。

11:30 到 11:50，二十分鐘學 StatefulSet，解決有狀態應用（資料庫、訊息佇列）在 Kubernetes 上的部署難題。最後十分鐘做整堂課的總結和問答。

整個早上的安排很緊湊，但每個主題都非常實用、每天都在業界實際使用。大家有問題隨時舉手，不要等到下課才問，有時候一個即時的問題也能讓全班都豁然開朗。我們開始！`,
    duration: '2',
  },

  // ========== 複習 ==========
  {
    title: '快速複習',
    subtitle: '上一堂課的重點回顧',
    section: '開場複習',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-300">第四堂課學了什麼？</p>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              icon: '📦',
              title: 'ConfigMap / Secret',
              desc: '設定與敏感資料的分離管理',
              color: 'bg-blue-900/30 border-blue-700',
              textColor: 'text-blue-400',
            },
            {
              icon: '💾',
              title: 'Volume 與 PVC',
              desc: '持久化儲存，資料不隨 Pod 消失',
              color: 'bg-green-900/30 border-green-700',
              textColor: 'text-green-400',
            },
            {
              icon: '🌐',
              title: 'Service',
              desc: 'ClusterIP / NodePort / LoadBalancer',
              color: 'bg-purple-900/30 border-purple-700',
              textColor: 'text-purple-400',
            },
            {
              icon: '🔀',
              title: 'Ingress',
              desc: 'HTTP 路由與域名管理',
              color: 'bg-orange-900/30 border-orange-700',
              textColor: 'text-orange-400',
            },
          ].map((item, i) => (
            <div key={i} className={`${item.color} border p-4 rounded-lg`}>
              <p className={`${item.textColor} font-semibold`}>
                {item.icon} {item.title}
              </p>
              <p className="text-slate-300 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold">🎯 今天的重點轉移到...</p>
          <p className="text-slate-300">「工作負載本身」— 如何設計、管理、擴縮容</p>
        </div>
      </div>
    ),
    notes: `在進入今天的主題之前，先花五分鐘複習上一堂課學到的東西。好的工程師都知道，新知識要建立在穩固的舊知識上，不然學了等於沒學。我每次開始新的一堂課都會先做這個複習，不只是讓大家喚起記憶，也是讓新加入的同學有機會對齊。

上一堂課我們學了應用程式的「周邊支援」，也就是讓應用程式能夠正常運行所需要的各種基礎設施：

ConfigMap 和 Secret 是設定管理的解決方案。ConfigMap 存放一般的設定資料（資料庫主機位址、API endpoint URL、feature flag 等），Secret 存放敏感資料（密碼、API Key、TLS 憑證）。兩者的核心理念是「設定與程式碼分離」，這樣同一個 Docker image 可以在開發、測試、生產環境用不同的設定跑，不需要為每個環境打包不同的 image。ConfigMap 和 Secret 都可以掛載成環境變數或磁碟上的文件，讓容器讀取。

Volume 和 PVC 解決了 Pod 的「資料消失問題」。容器本身的 filesystem 是 ephemeral（臨時的），Pod 被重啟或重建後，容器裡的資料就全部消失。Volume 讓你可以在 Pod 外部掛載儲存空間，PVC（PersistentVolumeClaim）則是對持久化儲存資源的「申請書」——你不需要知道底層是什麼類型的磁碟，只要說「我需要 10Gi 的 ReadWriteOnce 儲存」，Kubernetes 就去找合適的 PV 來滿足你。資料庫、日誌、用戶上傳的檔案，凡是需要跨 Pod 生命週期保留的資料，都需要 PVC。

Service 是 Kubernetes 的服務發現和負載均衡機制。Pod 的 IP 是動態的（重啟就換一個），Service 提供一個穩定的 ClusterIP 或 DNS 名稱，把流量轉發到符合 label selector 的 Pod 上。三種類型：ClusterIP 只在叢集內部存取；NodePort 允許從節點 IP 直接存取；LoadBalancer 讓雲端廠商自動建立外部負載均衡器。

Ingress 是 HTTP/HTTPS 層的路由器。一個 LoadBalancer 只能暴露一個 IP，但你的叢集裡可能有幾十個服務。Ingress 讓你用一個 IP 透過域名和 URL 路徑把流量路由到不同的 Service，還能集中管理 TLS 憑證。Ingress 需要搭配 Ingress Controller（如 nginx-ingress、Traefik）才能運作。

這些周邊支援讓你的應用程式能夠「活著」並且被外界訪問到。但光是「活著」還不夠。讓我舉兩個真實的問題場景說明為什麼今天的主題如此重要：

問題一：你把一個 Java Spring Boot 應用用 Deployment 部署起來，Service 也設好了。但 Spring Boot 啟動需要 60 秒才能完全就緒（載入設定、建立連線池、預熱快取）。這 60 秒內如果有流量進來，Service 就會把請求導給這個還沒準備好的 Pod，用戶看到錯誤。更慘的是，如果你有三個 Pod 同時滾動更新，三個都在啟動過程中，那 60 秒的時間窗口裡所有請求都可能出錯。這個問題的解法是：Readiness Probe，確認 Pod 準備好了才讓 Service 把流量導過去。

問題二：你的 Node.js 服務有一個 Promise 沒有正確 reject，在某些情況下會造成記憶體洩漏，讓記憶體用量每小時增加幾十 MB。一週後，Pod 的記憶體用量從原本的 200MB 變成 2GB，回應速度越來越慢。因為 process 還活著，Kubernetes 不知道要重啟，用戶一直收到超慢的回應，監控告警也沒有觸發（因為 Pod 還是 Running 狀態），線上問題越燒越大，直到 Pod 被 OOMKill 重啟，才短暫恢復，然後又開始下一個洩漏週期。這個問題的解法是：正確設定 Memory Limit 加上 Liveness Probe，讓 Kubernetes 能夠主動偵測異常並重啟。

這就是為什麼今天的課程重點要從「周邊」轉移回到「工作負載本身」。今天要學的不只是怎麼讓 Pod 「跑起來」，而是「如何讓 Pod 跑得穩、跑得健康、跑得有效率」，以及「在不同場景下選擇正確的工作負載類型」。

好，有沒有人對上一堂課的內容有疑問？ConfigMap 和 Secret 怎麼掛到 Pod 上？PVC 和 PV 的關係是什麼？Ingress 是怎麼跟 Service 配合的？有問題現在提！（等待回應）……沒有問題的話，代表大家消化得很好，我們繼續往前。`,
    duration: '5',
  },

  // ========== Deployment 深入：Pod 模板設計 ==========
  {
    title: 'Deployment 深入',
    subtitle: 'Pod 模板設計與資源配置',
    section: 'Deployment',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300">Deployment 的 YAML 結構解析</p>
        <div className="bg-slate-800 p-4 rounded-lg font-mono text-sm leading-relaxed">
          <pre className="text-slate-300">{`apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web-app        # 必須和 template.labels 一致
  template:               # Pod 模板從這裡開始
    metadata:
      labels:
        app: web-app
        version: "1.0"
    spec:
      containers:
      - name: web
        image: nginx:1.25
        ports:
        - containerPort: 80
        resources:        # 資源配額設定
          requests:
            cpu: "100m"
            memory: "128Mi"
          limits:
            cpu: "500m"
            memory: "512Mi"`}</pre>
        </div>
      </div>
    ),
    notes: `好，讓我們深入 Deployment。大家之前應該已經寫過簡單的 Deployment YAML，現在讓我們把每個欄位都搞清楚，特別是那些看起來簡單但其實很有學問的細節。

Deployment 的 YAML 分成幾個層次。最外層是 apiVersion 和 kind，這個大家都熟了。apiVersion 是 apps/v1，不是 v1，要注意。metadata 放名字和 namespace，重點在 spec 裡面。

spec.replicas 決定要跑幾個 Pod 的副本。這個數字不是越多越好，因為多一個 Pod 就多一份資源消耗。一般建議生產環境至少設 2，這樣一個 Pod 掛掉還有另一個在撐著，不會有服務中斷的窘境。對外服務設 3 更安全，因為滾動更新時還是有 2 個在服務。

spec.selector.matchLabels 是 Deployment 用來「認領」Pod 的方式，透過這個 label selector 知道哪些 Pod 是它管的。這個值必須和 spec.template.metadata.labels 完全一致，不然 Kubernetes 會直接報錯說「selector 對不上」。這個設計乍看麻煩，但讓 Kubernetes 的 selector 機制可以跨越不同的資源物件，非常靈活。

spec.template 就是 Pod 模板，這是 Deployment 最核心的部分。每次 Deployment 需要建立或更新 Pod，都是把這個模板複製出來，填上隨機後綴名稱，然後排程到節點上執行。所以改這裡的任何東西，都會觸發滾動更新。

特別注意 resources 欄位，分成 requests 和 limits 兩部分。requests 告訴 Kubernetes「我至少需要這麼多資源才能正常運作」，是 Kubernetes 排程決策的依據。limits 則是「最多能用這麼多」的硬上限，CPU 超過會被節流，Memory 超過會被系統 OOMKill（強制終止）。

CPU 的單位 100m 代表 0.1 個 CPU 核心，m 是 milliCPU 的意思，1000m 等於一個完整核心。記憶體 128Mi 是 128 Mebibytes，別跟 128MB 搞混，兩者相差不大但要一致。這些數字怎麼設定很有學問，不要亂猜，等一下資源管理那個章節會有完整說明。

實務建議：剛上線的服務如果不確定資源需求，可以先部署到測試環境，觀察幾天的實際 CPU 和記憶體使用量，再根據 P95 的值來設定合理的 requests 和 limits，比憑直覺設靠譜多了。

另外，我想特別強調 imagePullPolicy 這個欄位。Deployment 的容器設定裡有個 imagePullPolicy，可以設成 Always、Never 或 IfNotPresent。在開發環境，用 latest tag 加上 Always 是方便的，每次 Pod 重建都確保拉最新的 image；但生產環境絕對不要用 latest tag，要用具體的版本號，比如 nginx:1.25.3，這樣 image 才是固定的、可重現的。另一個常踩的坑：同一個 image tag 在不同時間可能是不同的 image（有人覆蓋了 tag），這就破壞了你的「不動就不要變」的部署原則。生產環境最佳實踐：用 CI/CD pipeline 的 commit hash 作為 image tag，比如 my-app:a1b2c3d，確保每次部署的 image 都是精確固定的，出了問題也能精確追溯到是哪個程式碼版本。

還有一個 YAML 欄位叫 terminationGracePeriodSeconds，決定 Pod 被刪除時等待多久才強制殺掉。預設是 30 秒，意思是當 Pod 收到 SIGTERM 訊號後，Kubernetes 等 30 秒讓應用程式優雅關閉（graceful shutdown），如果 30 秒後容器還沒退出，就強制 SIGKILL 殺掉。對於需要處理完 in-flight 請求才能關閉的服務，這個值要根據你的服務 SLA 來設定，太短可能讓請求在中途被切斷，太長則讓滾動更新進度拖慢。一般 Web API 服務設 30-60 秒就夠，有長時間批次工作的服務可能要設更長。`,
    duration: '10',
  },

  // ========== Deployment 策略 ==========
  {
    title: 'Deployment 更新策略',
    subtitle: 'RollingUpdate vs Recreate',
    section: 'Deployment',
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-green-400">✅ RollingUpdate（預設）</h3>
          <div className="bg-green-900/20 border border-green-700 p-4 rounded-lg space-y-2">
            <p className="text-slate-300 text-sm">逐步替換舊 Pod，全程維持服務</p>
            <div className="font-mono text-xs bg-slate-900 p-3 rounded">
              <p className="text-slate-400">strategy:</p>
              <p className="text-slate-400">{'  '}type: RollingUpdate</p>
              <p className="text-slate-400">{'  '}rollingUpdate:</p>
              <p className="text-green-400">{'    '}maxSurge: 1</p>
              <p className="text-green-400">{'    '}maxUnavailable: 0</p>
            </div>
            <ul className="text-slate-300 text-xs space-y-1">
              <li>✓ 零停機更新</li>
              <li>✓ 可隨時回滾</li>
              <li>⚠️ 短暫新舊版本共存</li>
            </ul>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-orange-400">⚡ Recreate</h3>
          <div className="bg-orange-900/20 border border-orange-700 p-4 rounded-lg space-y-2">
            <p className="text-slate-300 text-sm">先刪除所有舊 Pod，再建立新 Pod</p>
            <div className="font-mono text-xs bg-slate-900 p-3 rounded">
              <p className="text-slate-400">strategy:</p>
              <p className="text-orange-400">{'  '}type: Recreate</p>
            </div>
            <ul className="text-slate-300 text-xs space-y-1">
              <li>✓ 不會新舊共存</li>
              <li>✓ 適合有狀態或不相容版本</li>
              <li>⚠️ 有短暫停機時間</li>
            </ul>
          </div>
        </div>
        <div className="col-span-2 bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold">💡 maxSurge vs maxUnavailable</p>
          <p className="text-slate-300 text-sm">
            maxSurge：更新時最多額外多幾個 Pod &nbsp;｜&nbsp;
            maxUnavailable：更新時最多允許幾個 Pod 不可用
          </p>
        </div>
      </div>
    ),
    notes: `Deployment 的更新策略決定了「升級應用程式的時候，服務會不會中斷」。這是非常實用的知識，直接影響用戶體驗，也是面試常問的題目。

RollingUpdate 是預設策略，也是大多數情況下的最佳選擇。它的原理是：不要一次把所有舊 Pod 都砍掉，而是一批一批地替換。先新增幾個新版本的 Pod，等它們健康了，再刪掉幾個舊版本的 Pod，如此循環，直到全部更新完畢。這樣在整個更新過程中，服務都是可用的。

maxSurge 控制更新過程中最多可以「額外多出來」幾個 Pod。比如你原本有 3 個 Pod，maxSurge 設 1，更新時最多暫時有 4 個 Pod 在跑，用完就縮回去。maxUnavailable 控制更新過程中最多可以有幾個 Pod 不可用。設成 0 表示任何時候都不能有 Pod 停止服務，這樣就能達到真正的零停機更新。兩個參數不能同時為 0，不然更新就卡住了。

舉個真實案例：一家電商公司在雙十一促銷期間需要緊急修 Bug，使用 RollingUpdate 加上 maxUnavailable=0、maxSurge=2 的設定，在服務完全不中斷的情況下完成了部署，用戶完全沒感覺到版本更新。這就是 RollingUpdate 的威力。

Recreate 策略就簡單暴力很多，先把所有舊 Pod 全部刪掉，然後再建立新的 Pod。這段時間內服務是完全不可用的，所以會有停機時間。什麼時候用 Recreate 呢？通常是當新舊版本有資料庫 schema 不相容，或是應用程式不支援多版本共存的情況下，比如有些快取機制要求所有節點版本一致，這時候就不得不接受短暫停機。

還有一個相關指令要知道：kubectl rollout undo deployment/web-app 可以快速回滾到上一個版本。想知道歷史版本清單用 kubectl rollout history deployment/web-app，指定回滾到特定版本用 --to-revision 參數。

一個實務建議：生產環境幾乎都用 RollingUpdate，把 maxUnavailable 設成 0、maxSurge 設成 1 或以百分比設定（如 25%），這樣更新時不會影響任何流量。如果新版本有問題，馬上 rollout undo 就能快速恢復，整個 rollback 通常在幾十秒內完成，比重新 CI/CD 快多了。

另外，建議每次部署都在 metadata.annotations 記錄變更原因，這樣 rollout history 看起來就更有意義，不只是看到一堆版本號。

這裡我再補充一個實戰技巧，關於 minReadySeconds 這個欄位。它設定「新 Pod 就緒後，至少等幾秒才繼續滾動更新下一批」。預設是 0，也就是新 Pod 一 Ready 立刻繼續滾動。但 Ready 不代表服務真的穩定了——有些問題（比如記憶體洩漏、慢速的初始化錯誤）要跑幾秒才會浮現。minReadySeconds 設個 10-30 秒，可以給新版本一個「觀察期」，如果在這段期間 Readiness Probe 失敗了，滾動更新就會暫停，你有機會察覺問題、手動 rollback，而不是等到全部 Pod 都更新完才發現問題。這個欄位看起來不起眼，但在高風險部署時能救你一命。

還有一個面試常考的問題：kubectl apply 和 kubectl replace 的差別是什麼？apply 是宣告式更新（declarative），只更新 YAML 裡有的欄位，其他欄位保留；replace 是命令式替換（imperative），完全用新的 YAML 覆蓋現有資源，如果 YAML 裡沒寫的欄位就會被清除。所以平常建議都用 apply 加上 -f 選項，配合 git 版本控制管理 YAML 檔案，這就是 GitOps 的基礎。`,
    duration: '12',
  },

  // ========== 健康檢查概念 ==========
  {
    title: '健康檢查：三種 Probe',
    subtitle: 'Liveness、Readiness、Startup',
    section: '健康檢查',
    content: (
      <div className="space-y-4">
        <div className="grid gap-4">
          {[
            {
              name: 'Liveness Probe',
              icon: '💓',
              question: '容器還活著嗎？',
              action: '失敗 → 重啟容器',
              color: 'bg-red-900/30 border-red-700',
              textColor: 'text-red-400',
              example: '應用程式死鎖、無法回應請求',
            },
            {
              name: 'Readiness Probe',
              icon: '✅',
              question: '容器準備好接收流量嗎？',
              action: '失敗 → 從 Service 移除',
              color: 'bg-yellow-900/30 border-yellow-700',
              textColor: 'text-yellow-400',
              example: '啟動中載入設定、連線資料庫',
            },
            {
              name: 'Startup Probe',
              icon: '🚀',
              question: '容器啟動成功了嗎？',
              action: '失敗 → 重啟容器（保護慢啟動）',
              color: 'bg-blue-900/30 border-blue-700',
              textColor: 'text-blue-400',
              example: '舊系統啟動需要 2 分鐘',
            },
          ].map((probe, i) => (
            <div key={i} className={`${probe.color} border p-4 rounded-lg`}>
              <div className="flex items-start justify-between">
                <div>
                  <p className={`${probe.textColor} font-bold text-lg`}>
                    {probe.icon} {probe.name}
                  </p>
                  <p className="text-slate-300 text-sm">{probe.question}</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-semibold">{probe.action}</p>
                  <p className="text-slate-400 text-xs">{probe.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `健康檢查是 Kubernetes 裡非常重要的機制。沒有健康檢查，Kubernetes 就不知道你的應用程式是不是真的在正常運行，只能假設「容器在跑就代表服務正常」，但這往往是錯的。

我舉個親身經歷過的案例：有一次線上的 Node.js 服務，因為某個異步錯誤卡住了事件迴圈，HTTP 請求全部無回應，但容器 process 並沒有死，CPU 也只有幾個百分點。沒有 Liveness Probe 的話，Kubernetes 以為一切正常，不會做任何事。用戶一直在等回應，後台工程師盯著監控一頭霧水。有了 Liveness Probe 就不一樣了，幾次探測失敗之後容器自動重啟，服務就恢復正常了。這個故事說明了一件事：容器「活著」和服務「正常工作」是兩回事，健康檢查就是彌補這個認知落差的機制。

為什麼容器在跑但服務可能不正常？因為現代應用程式的「健康狀態」是多層次的。最外層是 OS 層的 process 存在（容器沒死）；第二層是應用程式能監聽 port（TCP 連線能建立）；第三層是應用程式能回應 HTTP 請求（但可能回應錯誤碼）；第四層是應用程式能正確處理業務邏輯（依賴的服務都連得到）；第五層是效能在可接受的範圍內（沒有過度節流、記憶體沒有洩漏到影響性能）。沒有健康檢查，Kubernetes 只知道第一層，你需要的是第三到第四層的保障。

三種 Probe 各有不同的用途，解決不同層次的問題：

Liveness Probe 是「活著嗎」的檢查，對應第三到第四層的問題。Kubernetes 定期問你的應用程式「你還好嗎？」如果回答不正確（HTTP 非 2xx/3xx、TCP 連不上、exec 指令非 0 回傳），代表應用程式可能卡住了（死鎖、記憶體洩漏到崩潰邊緣、事件迴圈卡住），這時候 Kubernetes 會重啟容器。注意關鍵細節：Liveness Probe 失敗是直接重啟容器，不只是從 Service 移除——這個要記清楚，不要和 Readiness 搞混。重啟意味著容器裡的所有 in-memory 狀態都清空了，所以 Liveness 的觸發門檻不能設太低，偶發的一次失敗不應該觸發重啟，建議 failureThreshold 設 3-5。

Readiness Probe 是「準備好了嗎」的檢查，對應啟動期間和暫時過載的問題。容器不一定一啟動就能處理請求。比如 Spring Boot 應用程式要幾十秒才能完全啟動，資料庫連線要建立，快取要預熱，各種初始化工作要做完。Readiness Probe 失敗時，Kubernetes 不會重啟容器，而是暫時把這個 Pod 從 Service 的 Endpoints 列表中移除，讓流量不進來，等它準備好再自動加回去。這樣滾動更新時，新 Pod 還沒完全就緒就不會接到流量，避免用戶看到錯誤。另一個重要場景是：服務在高負載下暫時過載，Readiness 失敗讓流量不再進來，給服務喘息的機會，等壓力降下來再自動恢復——這比 Liveness 直接重啟要溫和很多。

Startup Probe 是給「慢啟動應用程式」用的安全機制。有些老系統或 Java 大型應用啟動要一兩分鐘甚至更長，如果靠 Liveness Probe 來檢查，initialDelaySeconds 設太短的話可能啟動途中就被誤判為失敗，然後被重啟，然後又在啟動途中被重啟，形成「CrashLoopBackOff」的無限重啟地獄。Startup Probe 的作用是：在 Startup Probe 成功之前，完全暫停 Liveness Probe 的檢查，讓容器有充裕的時間完成啟動，成功後才把接力棒交給 Liveness 和 Readiness Probe。

三種 Probe 可以同時設定，也可以只設定其中幾種。最常見的組合是：一般 Web 服務同時設 Liveness 和 Readiness（不需要 Startup，因為啟動夠快）；Java 大型應用三種都設（慢啟動需要 Startup 保護）；純粹的 TCP 服務（如資料庫 Proxy）只設 Liveness（用 tcpSocket 探測）。根據你的應用程式特性來決定怎麼組合。下一個投影片我們會看具體的 YAML 設定方式，把這些概念轉化成實際可用的設定。

小互動：假設你有一個 Python Flask 應用，啟動時需要從 S3 下載機器學習模型（大約 30 秒），下載完之後才能處理預測請求。這種情況你會設哪些 Probe？怎麼設？（等待學員回應……好，我聽到了幾個不同的答案，讓我解釋一下最佳實踐：應該設 Readiness Probe 來確保模型載入完成再接流量，如果啟動時間不穩定的話加上 Startup Probe 保護，Liveness 則設一個輕量的 /healthz 確認 Flask 本身還在響應即可。）`,
    duration: '8',
  },

  // ========== Probe 設定方式 ==========
  {
    title: 'Probe 的三種檢查方式',
    subtitle: 'httpGet、tcpSocket、exec',
    section: '健康檢查',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          <div className="bg-slate-800 p-3 rounded-lg">
            <p className="text-green-400 font-semibold text-sm mb-2">
              🌐 httpGet — 發 HTTP 請求
            </p>
            <pre className="text-slate-300 font-mono text-xs">{`livenessProbe:
  httpGet:
    path: /healthz
    port: 8080
  initialDelaySeconds: 10  # 容器啟動後等幾秒才開始檢查
  periodSeconds: 5          # 每幾秒檢查一次
  failureThreshold: 3       # 連續失敗幾次才算失敗`}</pre>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg">
            <p className="text-blue-400 font-semibold text-sm mb-2">
              🔌 tcpSocket — 嘗試建立 TCP 連線
            </p>
            <pre className="text-slate-300 font-mono text-xs">{`readinessProbe:
  tcpSocket:
    port: 3306          # 適合資料庫、Redis 等
  initialDelaySeconds: 15
  periodSeconds: 10`}</pre>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg">
            <p className="text-purple-400 font-semibold text-sm mb-2">
              💻 exec — 在容器內執行指令
            </p>
            <pre className="text-slate-300 font-mono text-xs">{`livenessProbe:
  exec:
    command:
    - cat
    - /tmp/healthy       # 指令回傳 0 = 健康，非 0 = 失敗
  initialDelaySeconds: 5
  periodSeconds: 5`}</pre>
          </div>
        </div>
      </div>
    ),
    notes: `三種 Probe 各有三種「問問題的方式」，加起來就是九種組合，不過實務上最常用的是 httpGet 配 Liveness/Readiness。讓我們把每種方式的細節都搞清楚。

httpGet 是最常用的方式。Kubernetes 對指定的 HTTP endpoint 發 GET 請求，如果回應狀態碼是 200-399 就算健康，其他的就是失敗。幾乎所有 Web 應用程式都應該實作一個 /healthz 或 /health 的路徑，專門回傳健康狀態。這個端點通常只做輕量的檢查：應用程式本身是否正常、最基本的資料庫連線是否存在。設計這個 endpoint 有個原則：它必須夠快（回應時間 < 1 秒），不能做太重的運算或查詢，不然 Probe 的請求本身就變成性能瓶頸了。注意：/healthz 是 Kubernetes 官方慣用的路徑名稱，/health 也很常見，選一個統一就好。

httpGet 還有一個小細節：可以加上 httpHeaders 欄位傳入額外的 HTTP header，比如某些需要 Authorization token 的 health endpoint 就可以這樣設定。還可以設定 scheme: HTTPS 改用 HTTPS 協定進行探測（但 Kubernetes 不會驗證 HTTPS 憑證，即使是自簽憑證也不會失敗）。

tcpSocket 方式更簡單，只嘗試跟指定 port 建立 TCP 連線，連得上就算健康，連不上就失敗。不需要應用程式層的配合，適合沒有 HTTP API 的服務，比如資料庫、Redis、MQTT broker。有些 TCP 服務只要 port 在監聽就代表它能正常工作，這時候 tcpSocket 最省事。tcpSocket 的一個限制是：它只知道 TCP 連線能不能建立，不知道服務層是否真的能正確處理請求。所以如果 Redis 的 port 在監聽但服務本身異常了，tcpSocket 可能檢查不出來。

exec 方式是在容器內執行一個指令，指令的回傳碼 0 代表健康，非 0 代表失敗。這是最靈活的方式，可以寫成任何複雜的自訂邏輯，比如連接資料庫並查詢一個特定的健康狀態表、檢查某個 lock 檔案是否存在、執行自定義的健康腳本。舉例：MySQL 的 Liveness 可以用 exec 執行 mysqladmin ping 指令，返回碼 0 代表 MySQL 服務響應正常；MongoDB 可以執行 mongosh --eval 'db.adminCommand({ ping: 1 })' 等等。但 exec 方式有個缺點：每次探測都要在容器內啟動一個子 process，開銷比 httpGet 和 tcpSocket 大，而且子 process 的啟動時間算在探測超時裡面，所以 periodSeconds 不要設太短，timeoutSeconds 也要適當設大一點。

幾個重要的參數值得說明：initialDelaySeconds 是容器啟動後等多久才開始第一次探測，設太短容器還在啟動中就被探測了，容易誤判失敗。一般建議根據應用程式正常啟動時間設定，比如你的服務平均 20 秒啟動完成，就設 25-30 秒，留一點緩衝。如果你設了 Startup Probe 的話，就不需要在 Liveness/Readiness 裡設 initialDelaySeconds，因為 Startup 成功之前 Liveness 本來就不會跑。

periodSeconds 是多久探測一次，太短浪費資源（每個 Pod 都在頻繁探測，對服務造成額外壓力），太長反應太慢（問題發生後很久才被偵測到）。一般 Liveness 設 10-30 秒，Readiness 設 5-15 秒，取決於你的服務對問題發現速度的要求。

failureThreshold 是連續失敗幾次才真的算失敗，設成 3 代表偶發一次失敗不算，要連續 3 次才觸發行動，可以容忍短暫的網路抖動或瞬間高峰。timeoutSeconds 是每次探測等待多久，超過就算這次失敗，預設 1 秒，對於回應稍慢的服務要適當設大。

successThreshold 是「從失敗狀態回復到健康狀態需要連續成功幾次」，預設 1，也就是成功一次就算恢復。這個值對 Liveness Probe 必須是 1（因為其他值沒有意義），但 Readiness Probe 可以設成 2 或 3，確保容器真的穩定就緒才重新接流量，而不是剛成功一次就馬上接流量又失敗。

實務建議：Liveness Probe 的 failureThreshold 可以設高一點（比如 5-6），避免正常波動就觸發重啟，因為重啟是有成本的（服務短暫中斷、重新載入時間）。Readiness Probe 可以嚴格一點（failureThreshold 設 2-3），確保只有真正準備好的 Pod 才接收流量。另外，Liveness 和 Readiness 的 httpGet path 可以設成不同路徑，Liveness 只查應用本身存活（/healthz），Readiness 還額外查外部依賴的連線狀態（/ready），這樣設計更清晰也更安全，避免外部服務故障時 Liveness 也跟著失敗導致雪崩。`,
    duration: '10',
  },

  // ========== 健康檢查選擇 ==========
  {
    title: 'Liveness vs Readiness vs Startup',
    subtitle: '什麼時候用哪一種？',
    section: '健康檢查',
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-3">完整設定範例（三種 Probe 同時使用）</p>
          <pre className="font-mono text-xs text-slate-300">{`spec:
  containers:
  - name: app
    image: my-app:1.0
    startupProbe:          # 1. 先確認啟動完成（最優先）
      httpGet:
        path: /healthz
        port: 8080
      failureThreshold: 30  # 最多等 30 × 10s = 5 分鐘
      periodSeconds: 10
    readinessProbe:        # 2. 確認可以接流量
      httpGet:
        path: /ready
        port: 8080
      periodSeconds: 5
    livenessProbe:         # 3. 持續監控是否活著
      httpGet:
        path: /healthz
        port: 8080
      periodSeconds: 10
      failureThreshold: 3`}</pre>
        </div>
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="bg-blue-900/30 p-3 rounded-lg text-center">
            <p className="text-blue-400 font-semibold">Startup</p>
            <p className="text-slate-300">先跑，通過後才啟用其他 Probe</p>
          </div>
          <div className="bg-yellow-900/30 p-3 rounded-lg text-center">
            <p className="text-yellow-400 font-semibold">Readiness</p>
            <p className="text-slate-300">失敗 → 從 Service 移除，不重啟</p>
          </div>
          <div className="bg-red-900/30 p-3 rounded-lg text-center">
            <p className="text-red-400 font-semibold">Liveness</p>
            <p className="text-slate-300">失敗 → 重啟容器</p>
          </div>
        </div>
      </div>
    ),
    notes: `讓我們把三種 Probe 放在一起看，搞清楚它們的執行順序和相互關係，這是很多人搞混的地方。把這個搞清楚了，你的服務健康管理就算掌握了 80% 了。

執行順序是這樣的：容器啟動後，如果有設定 Startup Probe，Kubernetes 會先跑 Startup Probe，這個期間 Liveness 和 Readiness Probe 都是暫停的，不管你設了什麼都先不跑。等到 Startup Probe 成功，才開始同時執行 Liveness 和 Readiness 兩個 Probe。這個設計非常聰明，讓慢啟動的應用程式有足夠的緩衝時間，又不影響之後的正常監控。在這個設計下，你可以把 Liveness 的 initialDelaySeconds 設得很小甚至設 0，因為 Startup Probe 已經在保護啟動期間了。

Startup Probe 的 failureThreshold 非常關鍵。以上面的例子，failureThreshold 是 30，periodSeconds 是 10 秒，代表 Kubernetes 最多等 300 秒（5 分鐘）讓應用程式啟動。超過就重啟。這個「最大等待時間 = failureThreshold × periodSeconds」的公式要記住，根據你的應用程式實際啟動時間來設定，別設太短。建議把這個最大等待時間設成正常啟動時間的 2-3 倍，留足安全邊際，不要因為偶爾的系統資源不足而讓應用程式啟動超時。

Readiness 和 Liveness 的最大差別是「失敗之後做什麼」：Readiness 失敗只是「退出 Service 轉發列表」，容器本身完全不受影響，Pod 還在跑，等恢復健康後 Kubernetes 自動把它加回到 Service 裡。Liveness 失敗就是「直接重啟容器」，這是比較激烈的處置方式，容器裡的所有狀態都會清空。所以在設計上要謹慎判斷：如果你的應用程式在高負載下響應變慢、但還能正常工作，應該讓 Readiness 失敗（暫時不接流量等壓力降低），而不是 Liveness 失敗（重啟可能讓情況更糟、啟動時間浪費、還可能雪崩）。過度敏感的 Liveness Probe 是生產環境常見的反模式，輕易觸發重啟反而讓系統更不穩定。

一個讓很多人踩坑的錯誤設計：把 Liveness Probe 設計成包含對外部依賴的檢查（比如資料庫連線）。這樣的話，資料庫一掛，所有 Pod 的 Liveness Probe 都失敗，全部被重啟。重啟之後資料庫還是掛的，又全部重啟，形成雪崩效應，整個系統全部崩潰。這個反模式有個名字叫做「Cascade Failure 雪崩效應」，是非常危險的設計。正確做法是：Liveness Probe 只檢查應用程式本身的內部狀態（自己的進程、記憶體、事件迴圈等）；外部依賴的可用性交給 Readiness Probe 檢查，失敗時只是暫停接流量，不觸發重啟。這樣資料庫掛了，服務停止接流量（Readiness 失敗），但服務本身不會跟著崩潰，等資料庫恢復連線，Readiness 自動恢復，服務繼續工作。

如何排查 Probe 失敗的問題？kubectl describe pod [pod-name] 可以看到 Events 區塊，裡面會顯示「Liveness probe failed: ...」或「Readiness probe failed: ...」的訊息，包含失敗的原因（比如 HTTP 500、connection refused、timeout）。kubectl logs [pod-name] 可以看到應用程式本身的日誌，往往能找到更具體的錯誤訊息。如果是 exec Probe 失敗，可以用 kubectl exec -it [pod-name] -- /bin/sh 進入容器手動執行那個指令，看看實際輸出是什麼，比對預期結果。

最後一個小 tip：三個 Probe 可以針對同一個 /healthz endpoint，也可以各自用不同的 path，比如 /healthz 給 Liveness（只查自身），/ready 給 Readiness（查自身加上外部依賴的連線狀態），這樣設計更清晰也更安全。另外，health endpoint 要輕量，不要加任何認證（Kubernetes 的探測請求不帶 Authorization header），回應要快（< 100ms），回應格式可以是簡單的 200 OK 加上 {"status": "ok"} 就夠了。`,
    duration: '7',
  },

  // ========== 資源管理 ==========
  {
    title: '資源管理',
    subtitle: 'CPU / Memory Request 與 Limit',
    section: '資源管理',
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-bold text-lg mb-3">📋 Requests（保證資源）</p>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• Kubernetes 排程的依據</li>
              <li>• 節點上至少保留這麼多</li>
              <li>• 影響 Pod 分配到哪個節點</li>
              <li className="text-green-300 font-semibold">「我需要這麼多」</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-red-400 font-bold text-lg mb-3">🚧 Limits（上限資源）</p>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>• 容器最多使用的資源量</li>
              <li>• CPU 超過 → 被節流（throttle）</li>
              <li>• Memory 超過 → OOMKilled</li>
              <li className="text-red-300 font-semibold">「最多只能用這麼多」</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">單位說明</p>
          <div className="grid grid-cols-2 gap-4 font-mono text-sm">
            <div>
              <p className="text-k8s-blue">CPU</p>
              <p className="text-slate-300">250m = 0.25 個核心</p>
              <p className="text-slate-300">1000m = 1 = 1 個核心</p>
            </div>
            <div>
              <p className="text-k8s-blue">Memory</p>
              <p className="text-slate-300">128Mi = 128 Mebibytes</p>
              <p className="text-slate-300">1Gi = 1 Gibibyte</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold text-sm">
            ⚠️ Request 必須 ≤ Limit；兩者都設才是最佳實踐
          </p>
        </div>
      </div>
    ),
    notes: `資源管理是 Kubernetes 生產環境中非常重要的主題，也是很多初學者忽略的地方。設定不當可能造成一個應用程式把整個節點的資源吃光，影響同節點上的所有其他服務，形成「鄰居效應」（Noisy Neighbor Problem）。今天我要把這個主題講得非常透徹，因為它是後面 HPA、QoS 的基礎，也是生產環境最常出現問題的地方之一。

先說 Request。Request 是你告訴 Kubernetes「我這個容器至少需要這麼多資源才能正常運行」。Kubernetes 在排程 Pod 時，Scheduler 會找到有足夠「可用資源」的節點。可用資源的計算方式是：節點總資源減去已經被其他 Pod 的 Request 預留的資源。注意：這裡看的是 Request，不是實際使用量！一個節點上所有 Pod 的 Request 加起來不能超過節點容量，這叫做「可排程資源上限」（Allocatable）。但實際上因為不是每個 Pod 都會用到 Request 設的那麼多，節點可能同時跑比「靜態計算」更多的服務，這叫做超額訂閱（overcommit），是 Kubernetes 資源管理的彈性所在。超額訂閱讓你能在有限的節點上跑更多服務，降低基礎設施成本，但也帶來了節點資源超載的風險，需要 QoS 機制來做優先順序管理。

再說 Limit。Limit 是「容器最多能用多少資源」的上限，是硬限制，透過 Linux cgroup（Control Group）機制實現。CPU 如果超過 Limit，cgroup 會按比例限制這個容器的 CPU 時間片，容器會被節流（throttle）但不會被殺掉。CPU 節流很難察覺，因為容器本身不知道自己被節流了，只是每個操作都變慢了，導致 latency 升高，應用程式從外部看起來就是「變慢了」。有時候 CPU throttle 是你的 API p99 latency 突然增高的原因，但監控顯示 CPU 使用率只有 60%，這是因為那 60% 已經是 Limit 的 60%，整體看起來還好，但某些瞬間已經撞到 Limit 了。

Memory 就不一樣了，如果超過 Memory Limit，Linux 核心會立刻觸發 OOMKill（Out of Memory Kill），直接把容器殺掉並重啟。OOMKill 的特點是：殺掉的瞬間完全沒有優雅關閉（graceful shutdown）的機會，所有的 in-flight 請求都會失敗，進行中的資料操作可能損毀。所以 Memory Limit 要設得合理，太緊容易莫名其妙被 OOM（特別是 Java 應用，JVM 預設會嘗試使用盡可能多的記憶體），太寬鬆可能讓記憶體洩漏慢慢把節點拖垮。如何排查 OOMKill？kubectl describe pod 看 Events 會有「OOMKilled」的字樣，kubectl logs --previous 可以看到被殺掉之前的最後日誌。

CPU 單位：m 是 milliCPU，1000m 等於一個 CPU 核心。250m 就是四分之一個核心。現代伺服器有幾十個核心，用 milliCPU 這個精細的單位可以更靈活地分配資源。設定時要注意：如果你的服務是多執行緒的（比如 Java Spring Boot 預設會建立很多執行緒），CPU Request 要設足夠，不然多個執行緒競爭有限的 CPU 時間，性能會很差。如果是單執行緒的（比如 Node.js），CPU 不超過 1000m 就夠了，超過也用不到。

Memory 單位：Mi 是 Mebibyte（1024×1024 bytes），Gi 是 Gibibyte（1024 MiB）。別跟 MB（Megabyte，1000×1000 bytes）搞混了，兩者差距不大（Mi 比 MB 大約多 5%）但要統一用二進位的單位（Mi、Gi）。Java 應用要特別注意：JVM 的 Heap 記憶體只是總記憶體的一部分，還有 Metaspace、Thread Stack、JVM 本身等 off-heap 記憶體，實際總用量通常比 Xmx 設定大 20-50%，Memory Limit 要額外留出這些空間。一個常見的坑：把 Memory Limit 設成跟 JVM Xmx 一樣大，結果 JVM off-heap 超過了 Limit，容器被 OOMKill，卻看不出明顯的記憶體洩漏原因。

Request 和 Limit 都設定是最佳實踐。如果都不設，那個容器可以無限制使用節點資源，非常危險，一旦有記憶體洩漏就是整個節點的災難，而且 QoS 等級是 BestEffort，隨時可能被 Kubernetes 驅逐。如果只設 Request 沒設 Limit，容器有保底資源但能無限超用，資源緊張時影響其他服務。合理的做法是：CPU Request 設成 P50 的正常使用量（日常平均），CPU Limit 設成 P99 峰值的 1.5 到 2 倍；Memory Request 設成正常穩態的記憶體用量，Memory Limit 設成正常用量的 1.5 倍左右，既保留彈性又防止失控。

一個實際工具推薦：kubectl top pods 可以查看每個 Pod 當前的資源用量，kubectl top nodes 查看節點資源概況。但 kubectl top 只顯示當下瞬間的值，不代表全天的趨勢。更好的做法是搭配 Prometheus + Grafana 做長期監控，用 container_cpu_usage_seconds_total 和 container_memory_working_set_bytes 這兩個指標，觀察一週以上的趨勢，才能科學地設定 resources，不是靠猜。有些雲端平台（GKE、EKS）也提供了 VPA（Vertical Pod Autoscaler）功能，能根據歷史數據自動推薦合適的 Request/Limit 值，非常好用。`,
    duration: '12',
  },

  // ========== QoS Class ==========
  {
    title: 'QoS Class',
    subtitle: 'Guaranteed、Burstable、BestEffort',
    section: '資源管理',
    content: (
      <div className="space-y-4">
        <div className="grid gap-4">
          {[
            {
              name: 'Guaranteed',
              icon: '🏆',
              color: 'bg-green-900/30 border-green-600',
              textColor: 'text-green-400',
              condition: 'requests == limits（CPU 和 Memory 都設且相等）',
              priority: '最高優先，最後被驅逐',
              example: 'cpu req=500m limit=500m, mem req=256Mi limit=256Mi',
            },
            {
              name: 'Burstable',
              icon: '⚡',
              color: 'bg-yellow-900/30 border-yellow-600',
              textColor: 'text-yellow-400',
              condition: 'requests < limits 或只設了其中一個',
              priority: '中等優先，資源緊張時可能被驅逐',
              example: 'cpu req=100m limit=500m（大多數服務）',
            },
            {
              name: 'BestEffort',
              icon: '🎲',
              color: 'bg-red-900/30 border-red-600',
              textColor: 'text-red-400',
              condition: '沒有設定任何 requests 和 limits',
              priority: '最低優先，節點資源不足時第一個被驅逐',
              example: '不建議在生產環境使用',
            },
          ].map((qos, i) => (
            <div key={i} className={`${qos.color} border p-4 rounded-lg`}>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className={`${qos.textColor} font-bold text-lg`}>
                    {qos.icon} {qos.name}
                  </p>
                  <p className="text-slate-300 text-sm">條件：{qos.condition}</p>
                  <p className="text-slate-400 text-xs font-mono">{qos.example}</p>
                </div>
                <p className="text-white text-xs text-right w-28 shrink-0">{qos.priority}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `QoS Class（服務品質等級）是 Kubernetes 根據你設定的 Request 和 Limit 自動計算出來的，不需要手動指定，但這個等級直接影響到你的 Pod 在資源緊張時的「生存優先順序」。這是很多人設定完 resources 之後不知道的隱性影響，今天要讓大家都搞清楚。

為什麼需要 QoS？想像一個情境：節點上突然多個 Pod 同時記憶體用量暴增，節點可用記憶體見底，快要 OOM 了。Linux 核心的 OOM Killer 必須從哪個 process 開始殺？Kubernetes 的 kubelet 在此之前還有一道「驅逐（Eviction）」機制，會先根據 QoS Class 決定驅逐哪些 Pod，儘量保護高 QoS 的 Pod。所以 QoS Class 就是這個「誰先被犧牲」的排序依據。

Guaranteed 是最高等級，顧名思義就是「Kubernetes 給你保證」。條件非常明確：所有容器的 CPU 和 Memory 的 Request 和 Limit 都必須設定，而且每個資源的 req 必須等於 limit（cpu req=500m 且 cpu limit=500m，memory req=256Mi 且 memory limit=256Mi）。只要滿足這個條件，Kubernetes 保證這些 Pod 有穩定的資源供應，不會被超額訂閱的其他 Pod 擠掉。當節點記憶體不足需要驅逐 Pod 時，Guaranteed 的 Pod 是最後被犧牲的。聽起來 Guaranteed 很好，但代價是資源完全固定，不能「突發」到更高的用量。適合關鍵服務：資料庫、核心 API、付費流程、金融交易系統——這些服務寧可多付資源成本，也要保障穩定性。

Burstable 是中等等級，大多數業務服務都在這個等級。條件是：Pod 至少設定了一項 Request 或 Limit，但不滿足 Guaranteed 的嚴格相等條件。這類 Pod 平時可能只用到 Request 的資源量，但高峰時可以「突發（Burst）」到 Limit 上限，有一定的彈性。Burstable 的彈性讓你可以設定一個保守的 Request（確保排程），同時允許 Limit 高一些（偶爾高峰時多用資源）。在節點資源緊張時，Kubernetes 會優先驅逐超過自己 Request 用量的 Burstable Pod（也就是說，一個 Burstable Pod 如果目前用量低於 Request，比沒超過的 Burstable Pod 更不容易被驅逐）。

BestEffort 是最低等級，危險程度最高。沒有設定任何 Request 或 Limit 的 Pod 就是這個等級。Kubernetes 對這類 Pod 沒有任何資源保證，節點資源一緊張，它們是第一個被趕走的，而且被驅逐時不需要等待，直接強制終止。生產環境絕對不要用這個！但臨時的開發測試腳本、一次性的數據遷移工具可以接受，反正跑完就刪掉，被意外驅逐的話重跑一次也沒關係。

kubelet 的驅逐觸發機制值得了解一下。kubelet 持續監控節點的資源使用量，當節點的可用記憶體或磁碟空間低於某個門檻（eviction threshold）時，就開始驅逐。驅逐順序：BestEffort → 超過自身 Request 的 Burstable → 沒超過自身 Request 的 Burstable → Guaranteed（最後）。每驅逐一個 Pod 後重新評估，如果節點資源恢復到安全水位就停止驅逐。

如何查看 Pod 的 QoS 等級？kubectl describe pod [pod-name]，輸出裡面有 QoS Class 這個欄位，非常清楚。我們來看幾個例子：一個同時設了 cpu req=100m/limit=100m 和 mem req=256Mi/limit=256Mi 的容器，QoS 是 Guaranteed；一個只設了 cpu req=100m/limit=500m 的容器，QoS 是 Burstable；一個完全沒設 resources 的容器，QoS 是 BestEffort。

一個資源架構設計思路，供大家參考。核心有狀態服務（資料庫、訊息佇列）→ Guaranteed：這些服務數據最重要，寧可多花資源費用也要穩定。核心無狀態服務（API Server、業務邏輯）→ Burstable：Request 設成平均值（保障基本排程），Limit 設成峰值的 1.5 倍（允許突發）。離線批次工作（報表生成、資料同步）→ Burstable 但 Request 設很低：批次工作對即時性要求低，設低 Request 更容易被排程，節省成本，被驅逐了重跑就好。臨時腳本和測試工具 → BestEffort 可以接受：跑完就刪，對穩定性沒要求。千萬不要讓任何生產服務落到 BestEffort，一次節點壓力事件就可能讓你的服務消失，還不一定有告警，用戶直接看到錯誤，超難察覺。

另外，Kubernetes 還有 PriorityClass 這個機制，可以給 Pod 設定更細緻的優先順序（0-1000000000），優先級高的 Pod 在節點資源不足時會搶佔（Preempt）低優先級的 Pod。但 PriorityClass 是更進階的功能，今天先記個概念，有興趣的同學下課後可以研究官方文件。`,
    duration: '13',
  },

  // ========== 休息 ==========
  {
    title: '☕ 休息時間',
    subtitle: '休息 15 分鐘',
    content: (
      <div className="text-center space-y-8">
        <p className="text-6xl">☕ 🚶 🧘</p>
        <p className="text-2xl text-slate-300">
          前半場重點回顧完成！喝個水、活動一下。
        </p>
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-slate-400 text-sm">✅ 前半場已學</p>
            <ul className="text-slate-300 text-sm mt-2 text-left space-y-1">
              <li>• Deployment 模板與策略</li>
              <li>• 三種 Probe 健康檢查</li>
              <li>• Request / Limit / QoS</li>
            </ul>
          </div>
          <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
            <p className="text-k8s-blue text-sm font-semibold">🔜 後半場即將</p>
            <ul className="text-slate-300 text-sm mt-2 text-left space-y-1">
              <li>• HPA 自動擴縮容</li>
              <li>• DaemonSet</li>
              <li>• StatefulSet</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `好！前半場結束，我們休息 15 分鐘。站起來動一動，眼睛休息一下，喝點水，上個廁所。上課坐太久對身體不好，強迫自己站起來走走。

在休息之前，讓我幫大家做一個簡短的前半場總結。我自己教課的習慣是：每次休息前做一次「知識回顧」，這樣帶著問題休息，回來之後印象會更深。

前半場第一大塊：Deployment 深入。我們從 Pod 模板的每個欄位開始，理解了 selector.matchLabels 和 template.labels 必須一致的原因——這是 Kubernetes label selector 機制的核心，讓不同資源物件可以靈活互相關聯。然後我們討論了更新策略：RollingUpdate 是生產環境首選，maxUnavailable=0 加上 maxSurge=1 讓更新過程中服務完全不中斷；Recreate 適合新舊版本有不相容的情況，接受短暫停機換取乾淨的版本切換。rollout undo 是你的後悔藥，學會了它就再也不怕部署出問題。

前半場第二大塊：三種健康檢查 Probe。這三個我再複述一次，因為很多人在面試裡就是混淆這三個：Liveness Probe 是「我還活著嗎？」，失敗了就重啟容器，用來對付死鎖、無窮迴圈、記憶體洩漏到崩潰這類問題；Readiness Probe 是「我準備好接流量了嗎？」，失敗了就從 Service 移除但不重啟，用來保護還在啟動中或暫時過載的容器；Startup Probe 是「我啟動成功了嗎？」，專門保護慢啟動應用，期間暫停 Liveness 的檢查，防止還沒啟動完就被誤殺。三種探測方式：httpGet 最常用、tcpSocket 用在不支援 HTTP 的服務、exec 用在需要自訂邏輯的情況。最重要的設計原則：Liveness 只查自身內部狀態，不包含外部依賴的檢查，避免連鎖故障。

前半場第三大塊：資源管理與 QoS。Request 是排程依據，告訴 Kubernetes「我至少需要這麼多」；Limit 是硬上限，CPU 超過被節流（throttle，性能降低但不死），Memory 超過直接 OOMKill（立即強殺）。CPU 單位 1000m 等於一個核心，Memory 的 Mi 和 Gi 是二進位單位。QoS 由 req/limit 的設定組合自動決定：req==limit 是 Guaranteed（最高保障，最後被驅逐）；有設但不完全相等是 Burstable（中等）；都沒設是 BestEffort（生產環境禁止使用！）。節點資源緊張時，Kubernetes 按 QoS 等級從低到高驅逐 Pod，保護重要服務。

趁休息的時候可以思考幾個問題：一、如果你的 Java 應用程式啟動需要 90 秒，該怎麼設定三種 Probe？二、一個無狀態的 API 服務，CPU Request 應該設多少才合理，你會怎麼估算？三、如果同一個節點上有 Guaranteed 和 Burstable 的 Pod，節點記憶體快滿了，Kubernetes 會怎麼處置？想清楚這三個問題，代表前半場的知識真的吸收進去了。

後半場要學的三個主題都很有趣：HPA 自動擴縮容——讓系統根據實際負載自動增減 Pod 數量，高峰多開、低谷縮回，節省成本又能抗住流量高峰，是很多工程師學 Kubernetes 的核心動機；DaemonSet——確保叢集每個節點都有一個特定的 Pod，適合日誌收集代理、監控代理、網路插件這類必須覆蓋全節點的基礎設施服務；StatefulSet——解決有狀態應用的部署難題，讓資料庫、訊息佇列、分散式儲存能在 Kubernetes 上穩定運行，每個 Pod 有固定名字、固定 DNS、獨立的持久化儲存。這三個加上前半場的 Deployment、健康檢查、資源管理，今天早上學完就能建立一套相當完整的 Kubernetes 工作負載管理知識體系。

如果對前半場有任何疑問，趁這個時間來問我或助教，我們都在這裡。15 分鐘後準時回來，我們繼續後半場！`,
    duration: '1',
  },

  // ========== HPA 概念 ==========
  {
    title: 'HPA：水平自動擴縮容',
    subtitle: 'Horizontal Pod Autoscaler',
    section: 'HPA 自動擴縮容',
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-8 py-4">
          <div className="text-center">
            <p className="text-4xl">📈</p>
            <p className="text-slate-300 text-sm mt-1">CPU 負載高</p>
          </div>
          <p className="text-k8s-blue text-3xl">→</p>
          <div className="bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-white font-bold">HPA</p>
            <p className="text-k8s-blue text-xs">自動判斷</p>
          </div>
          <p className="text-k8s-blue text-3xl">→</p>
          <div className="text-center">
            <p className="text-4xl">🐳🐳🐳🐳🐳</p>
            <p className="text-green-400 text-sm mt-1">自動增加 Pod 數量</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">📋 先決條件</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>✓ 安裝 Metrics Server</li>
              <li>✓ 容器設定 CPU Request</li>
              <li>✓ Deployment 要有 replicas</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">🔧 安裝 Metrics Server</p>
            <pre className="text-green-400 font-mono text-xs">{`kubectl apply -f https://github.com/
  kubernetes-sigs/metrics-server/
  releases/latest/download/
  components.yaml`}</pre>
          </div>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-3 rounded-lg">
          <p className="text-k8s-blue font-semibold text-sm">💡 HPA 的工作原理</p>
          <p className="text-slate-300 text-sm">
            每 15 秒查詢一次 Metrics Server → 計算 Pod 目標數量 → 更新 Deployment replicas
          </p>
        </div>
      </div>
    ),
    notes: `休息結束，大家都回來了嗎？精神好一點了嗎？後半場第一個主題是 HPA，Horizontal Pod Autoscaler，水平 Pod 自動擴縮器。這個功能可以說是很多工程師學 Kubernetes 的主要動機之一，也是 Kubernetes 最能展現「雲原生彈性」的功能。

HPA 解決的核心問題是：流量不是固定的。想一想你平常接觸過的各種服務：電商平台白天流量大、晚上流量小，週末可能又比平日高；外送平台午餐和晚餐高峰流量是平常的 3-5 倍；新聞網站在有重大事件時流量可能瞬間暴增 10 倍；遊戲服務在新版本上線當天是平常的 20 倍。如果 Pod 數量是固定的，你只有兩個選擇：要麼按高峰容量準備資源（平常大量資源閒置，燒錢），要麼按平常容量準備（高峰時服務崩潰，燒用戶）。HPA 讓 Kubernetes 能夠根據實際負載自動調整 Pod 數量，負載高就自動多開幾個 Pod 分散壓力，負載低了就自動縮回來節省資源，真正做到「按需使用」。

HPA 的工作原理很清晰，理解這個原理對你設定 HPA 非常有幫助：每隔 15 秒（預設，可調整），HPA 控制器向 Metrics Server 查詢所有受管 Pod 的 CPU 或記憶體使用率，然後用一個公式計算「目標 Pod 數量」：目標數量 = ceil（當前 Pod 數 × 當前平均使用率 ÷ 目標使用率）。計算完後如果目標數量和當前數量不同，就更新 Deployment 的 replicas 欄位，Deployment 控制器收到更新後自動進行滾動更新，增加或減少 Pod。舉個例子：你有 2 個 Pod，CPU 目標是 50%，當前平均使用率是 80%。計算：ceil（2 × 80 ÷ 50）= ceil(3.2) = 4。HPA 就會把 replicas 改成 4，Deployment 新建 2 個 Pod。等 Pod 數量增加、每個 Pod 壓力降低後，CPU 使用率掉到 30%，計算：ceil(4 × 30 ÷ 50) = ceil(2.4) = 3，HPA 會縮減到 3 個 Pod（不過有冷卻時間，不會立刻縮）。

要使用 HPA，有三個前提條件，少一個都不行：

前提一，Metrics Server 是必需的。Kubernetes 預設沒有內建 Metrics Server，需要另外安裝。Metrics Server 是一個輕量級的資源監控聚合服務，從每個節點的 kubelet Summary API 收集 CPU 和記憶體使用數據，提供給 HPA 控制器和 kubectl top 指令使用。安裝方式是官方提供的一行 kubectl apply 指令，幾分鐘就完成了。安裝後用 kubectl top nodes 和 kubectl top pods 測試是否正常，能看到數據代表 Metrics Server 工作正常。注意：有些 Kubernetes 發行版（GKE、EKS、AKS）可能已經預裝了 Metrics Server，安裝前先用 kubectl get deployment metrics-server -n kube-system 確認一下，有了不要重複裝。另一個常見的坑是在某些環境（特別是 kubeadm 部署的叢集或 Docker Desktop）裡，Metrics Server 的 TLS 驗證可能會失敗，需要在部署 YAML 裡加上 --kubelet-insecure-tls 參數，詳情看官方 README 的 Installation 部分。

前提二，容器必須設定 CPU Request。HPA 計算 CPU 使用率的方式是「實際 CPU 用量 ÷ CPU Request」，得出一個百分比再和目標百分比比較。如果沒有設定 CPU Request，分母是 0，根本算不出百分比，HPA 就無法判斷何時需要擴容，會顯示 TARGETS 是 unknown 的狀態。這就是前半場我們強調「一定要設 resources」的原因之一——不只是為了 QoS，也是為了讓 HPA 能正確工作。

前提三，要有 Deployment（或其他支援的控制器）。HPA 是透過修改控制器的 replicas 欄位來擴縮的，一般來說是 Deployment，但 ReplicaSet 和 StatefulSet 也支援。單獨的 Pod 沒有 replicas 概念，所以不能用 HPA 管理。

兩個實務注意事項：第一，HPA 啟用後不要再手動修改 replicas。當你的 HPA 在控制 Deployment 的 replicas 時，不要直接用 kubectl scale deployment 去改 replicas，因為 HPA 下一次調整（15 秒後）就會把你的修改覆蓋回去，讓人困惑。把 replicas 的控制權完全交給 HPA，你只需要設好 minReplicas 和 maxReplicas 的邊界。第二，HPA 的擴縮有「穩定窗口（stabilization window）」機制：預設擴容後 3 分鐘內不會再次擴容，縮容後 5 分鐘內不會再次縮容。這是為了防止 Pod 數量因為短暫的流量波動而不停震盪。如果你需要更快的響應速度（比如某些即時性要求高的場景），可以在 HPA 的 spec.behavior 裡調整這些參數，這是 autoscaling/v2 API 版本才有的功能。`,
    duration: '10',
  },

  // ========== HPA YAML 設定 ==========
  {
    title: 'HPA YAML 設定',
    subtitle: 'kubectl autoscale 與 YAML 兩種方式',
    section: 'HPA 自動擴縮容',
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">
            方式一：快速指令（適合測試）
          </p>
          <pre className="text-green-400 font-mono text-sm">{`kubectl autoscale deployment web-app \\
  --cpu-percent=50 \\
  --min=2 \\
  --max=10`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">方式二：YAML（適合生產）</p>
          <pre className="text-slate-300 font-mono text-xs">{`apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: web-app-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: web-app
  minReplicas: 2      # 最少幾個 Pod
  maxReplicas: 10     # 最多幾個 Pod
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50  # 目標 CPU 使用率 50%`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-slate-400 text-xs">查看 HPA 狀態</p>
          <code className="text-green-400 text-sm font-mono">
            kubectl get hpa web-app-hpa
          </code>
        </div>
      </div>
    ),
    notes: `HPA 的設定方式有兩種，一種是快速指令，一種是 YAML 設定檔，各有適合的場景。讓我把兩種方式都講清楚，並說明幾個容易忽略的細節。

快速指令 kubectl autoscale 是最方便的方式，一行搞定，適合在開發環境或 Demo 時快速測試。指令解析：cpu-percent=50 是目標 CPU 使用率百分比，代表「當所有受管 Pod 的平均 CPU 使用率超過 Request 的 50% 時，HPA 開始擴容；低於一定程度時開始縮容」；--min=2 是最少 Pod 數，即使完全沒有流量也保持至少 2 個 Pod 在跑（原因後面說）；--max=10 是最多 Pod 數，這是硬上限，保護你的帳單不被打爆。這個指令背後其實是建立一個 HPA 物件，只是省略了手動寫 YAML 的步驟，你可以之後用 kubectl get hpa web-app -o yaml 看到完整的 YAML 定義。

YAML 方式更詳細也更靈活，適合版本控制（GitOps）和生產環境。我解釋幾個關鍵欄位：

apiVersion: autoscaling/v2 是重要的。不要用 v1，v1 的功能很有限，只支援 CPU，而且 metrics 的設定方式也不同。v2 支援 CPU、Memory 和自訂指標，是現在應該用的版本。

spec.scaleTargetRef 指定要控制哪個資源。這裡是 Deployment web-app，但也可以指向 StatefulSet 或 ReplicaSet。HPA 控制器會直接修改那個資源的 spec.replicas 來擴縮。

minReplicas 強烈建議設成 2 以上，絕對不要設成 0 或 1。設 0 的問題：縮到 0 後 Metrics Server 收集不到任何 Pod 的指標（沒有 Pod 在跑），HPA 不知道什麼時候該擴回來，服務就死死的趴在 0 個 Pod 的狀態，形成死結，服務永久不可用。設 1 的問題：只有 1 個 Pod 時，那個 Pod 掛掉或在滾動更新期間，服務就完全不可用了。生產環境至少設 2，確保高可用性。

maxReplicas 是保護機制，防止兩種異常情況：一是 DDoS 或意外的流量暴增，HPA 會不停擴容試圖吸收流量，如果沒有上限就會無限擴容，雲端費用可能在幾小時內暴增幾十倍；二是系統 bug 導致 Metrics 數值異常，HPA 誤判需要大量擴容。maxReplicas 要根據你的業務預期設定，以及你願意承擔的最大費用來決定。

metrics 裡的 averageUtilization: 50 意思是目標平均 CPU 使用率是 Request 的 50%。為什麼不設 80% 或 90%？因為如果設太高，從「到達目標」到「擴容完新 Pod 就緒」有一段時間差（Kubernetes 建立和啟動 Pod 需要幾十秒），這段時間現有的 Pod 可能已經過載甚至崩潰。50% 留有足夠的緩衝，讓 HPA 在壓力到達臨界點之前就開始擴容，新 Pod 就緒時還沒到崩潰邊緣。具體的目標值要根據你的服務的 CPU 使用模式來決定，不一定非要 50%，但建議不要超過 70-75%。

HPA v2 還支援 Memory 指標，設定方式和 CPU 類似，把 name: cpu 換成 name: memory，target 換成 averageValue（絕對值）或 averageUtilization（百分比）。但 Memory-based HPA 有個問題：記憶體不像 CPU 那麼容易降下來（GC 不一定立刻釋放記憶體），縮容可能不那麼及時。一般建議 Memory HPA 和 CPU HPA 一起設定，讓 HPA 根據兩個指標中「需要更多 Pod」的那個來擴縮。

進階功能 spec.behavior 讓你自訂擴縮的行為，比如設定縮容速度（每分鐘最多縮幾個 Pod）、縮容穩定窗口時間（避免頻繁縮縮擴擴）、擴容速度（立刻還是逐步擴）。這在某些場景非常有用，比如你的服務 Pod 啟動需要 2 分鐘，那縮容後再擴容的 warm-up 時間很長，可以設定縮容要更謹慎（穩定窗口長一些），避免縮了又要馬上擴回來。

排錯小指南：HPA 設定好了但不擴容，最常見的原因是：忘記安裝 Metrics Server（kubectl top pods 命令報錯就是這個問題）；容器沒設 CPU Request（TARGETS 顯示 unknown/50% 的 unknown 部分就代表拿不到指標）；CPU 使用率真的沒超過目標（這其實是正常的，代表系統在正常承載範圍內）。排查步驟：先用 kubectl describe hpa [name] 看 Events 欄位，裡面通常有很清楚的失敗原因，比如 「failed to get metrics: unable to fetch metrics from resource metrics API」就代表 Metrics Server 有問題。`,
    duration: '12',
  },

  // ========== HPA 壓力測試 ==========
  {
    title: '壓力測試：觀察 HPA 動作',
    subtitle: '用 busybox 模擬 CPU 壓力',
    section: 'HPA 自動擴縮容',
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">步驟一：建立一個 Deployment 和 HPA</p>
          <pre className="text-green-400 font-mono text-xs">{`kubectl create deployment stress-test \\
  --image=nginx --port=80
kubectl autoscale deployment stress-test \\
  --cpu-percent=30 --min=1 --max=8`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">步驟二：製造 CPU 壓力</p>
          <pre className="text-green-400 font-mono text-xs">{`kubectl run -i --tty load-generator \\
  --rm --image=busybox:1.28 \\
  --restart=Never -- /bin/sh -c \\
  "while true; do wget -q -O- \\
   http://stress-test; done"`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">步驟三：觀察 HPA 自動擴縮</p>
          <pre className="text-green-400 font-mono text-xs">{`# 每秒更新，觀察 Pod 數量變化
kubectl get hpa stress-test --watch

# 另一個視窗觀察 Pod
kubectl get pods --watch`}</pre>
        </div>
        <div className="bg-green-900/20 border border-green-700 p-3 rounded-lg">
          <p className="text-green-400 text-sm">
            🎯 預期結果：CPU 負載上升 → HPA 自動增加 Pod → 壓力分散
          </p>
        </div>
      </div>
    ),
    notes: `理論說了夠多，現在來實際看 HPA 動作。俗話說「百聞不如一見」，你親眼看到 Pod 數量自動從 1 跳到 4、跳到 6，對 HPA 的運作原理會有非常深的印象，比只讀 YAML 深十倍。讓我帶大家走過整個示範流程，並說明每個步驟的細節。

步驟一，建立示範用的 Deployment 和 HPA。這裡用 nginx 作為示範服務，因為 nginx 輕量、啟動快，適合快速示範。重要：如果用 kubectl create deployment 快速建立的話，預設不會設定 resources，需要補上。具體做法是先 create，然後 kubectl set resources deployment stress-test --requests=cpu=100m，或者直接用 kubectl edit deployment stress-test 在 spec.containers[0] 加上 resources。沒有 CPU Request 的話，HPA 的 TARGETS 會顯示 unknown，無法擴縮。我們把 CPU 目標設很低（30%），這樣比較容易觸發擴容，方便示範，生產環境一般設 50-70%。min 設 1 所以平常只有一個 Pod，max 設 8 作為上限。

步驟二，用 busybox 這個輕量工具容器製造 CPU 壓力。busybox 是每個 Kubernetes 工程師的工具箱，幾 MB 大小，但包含 wget、curl、sh 等很多基本工具，特別適合做快速的偵錯和測試。這個指令啟動一個臨時容器（--rm 參數確保 Ctrl+C 後自動刪除，不留垃圾），在裡面執行一個無限迴圈，不停對 stress-test Service 發 HTTP GET 請求。每個請求都會讓 nginx 處理並回應，消耗一定量的 CPU。注意：這個 load-generator 本身也是在叢集裡的 Pod，所以可以用 stress-test 這個 Service 名稱直接訪問，Kubernetes DNS 會解析。-i --tty 讓你能看到 wget 的輸出（每次請求成功的訊息），方便確認壓力測試在正常運行中。

步驟三，在另一個終端機視窗用 --watch 持續觀察 HPA 狀態。這是最有趣的步驟，你會看到幾件事依序發生：首先 TARGETS 欄位開始變化，比如從 10%/30% 慢慢上升到 35%/30%，超過 30% 之後，HPA 控制器在下一次評估週期（15 秒）計算出需要更多 Pod，REPLICAS 就開始增加，可能從 1 → 2 → 4 → 更多，最多到 maxReplicas 設定的 8。每次增加 Pod，壓力會被分散，TARGETS 的分子（當前使用率）會逐漸降下來，如果降到目標以下，HPA 會計算是否要縮減。

觀察細節：kubectl get hpa --watch 顯示的 TARGETS 是一個比值，比如 80%/30%，意思是所有受管 Pod 的平均 CPU 使用率是 Request 的 80%，而你的目標是 30%。HPA 看到 80/30 ≈ 2.67，加上一些容錯機制，就會把 Pod 數量至少翻倍。你還可以同時開一個視窗看 kubectl get pods --watch，觀察 Pod 從 1 個變成多個，每個新 Pod 都會先 Pending、然後 ContainerCreating、最後 Running，整個過程大概 15-30 秒，取決於 image pull 速度。

縮容觀察：等你按 Ctrl+C 停掉 load-generator，CPU 負載開始下降，不過縮容不會立刻發生。HPA 有「縮容穩定窗口（scale-down stabilization window）」，預設 5 分鐘。這 5 分鐘內 HPA 一直記錄「理論上該縮到幾個」，5 分鐘後取這段期間的最大值作為縮容目標。這個設計是為了防止一個常見問題：流量有些隨機波動，30 秒高峰、1 分鐘平靜、又 30 秒高峰，如果每次波動都縮容再擴容，Pod 生命週期極短，消耗大量資源在啟動和停止上。穩定窗口讓 HPA 確認負載真的穩定降下來了，再慢慢縮減。

生產環境的實際效益：一家做外送服務的公司分享過他們的 HPA 使用案例：午餐高峰（11:30-13:00）流量是平常的 4 倍，下午低谷（15:00-17:00）流量只有平常的 30%。用 HPA 後，API 服務從 5 個 Pod 在午餐高峰自動擴到 18 個，下午縮回 3 個（比 minReplicas=2 多一點），一個月的節點費用節省了大概 28%，而且服務穩定性比固定 5 個 Pod 時更好（因為高峰時有足夠容量）。這就是 HPA 的商業價值——節省成本和提升穩定性同時實現，不是 trade-off。

常見的第一次設定踩坑：一、TARGETS 顯示 unknown，原因是 Metrics Server 沒裝或沒有設 CPU Request；二、HPA 建好了 Pod 數量一直是 minReplicas，代表 CPU 使用率確實沒超過目標（負載太輕），可以降低目標值或增加負載來測試；三、Pod 數量一直在 maxReplicas，代表流量太大或目標值設太低，需要評估是否增大 maxReplicas 或調整目標值；四、壓力測試停了但 Pod 很久不縮，正常現象，等 5 分鐘穩定窗口過去就會縮。`,
    duration: '8',
  },

  // ========== DaemonSet 概念 ==========
  {
    title: 'DaemonSet',
    subtitle: '每個節點跑一個 Pod',
    section: 'DaemonSet',
    content: (
      <div className="space-y-4">
        <div className="flex items-center justify-center gap-4 py-2">
          {['Node 1', 'Node 2', 'Node 3'].map((node, i) => (
            <div key={i} className="bg-slate-800/70 border border-slate-600 p-4 rounded-lg text-center">
              <p className="text-k8s-blue font-semibold text-sm">{node}</p>
              <div className="mt-2 bg-green-900/30 border border-green-700 px-3 py-2 rounded">
                <p className="text-green-400 text-xs">📊 log-agent</p>
                <p className="text-slate-400 text-xs">DaemonSet Pod</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">什麼是 DaemonSet？</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• 確保每個（或特定）節點有一個 Pod</li>
              <li>• 節點加入叢集 → 自動新增 Pod</li>
              <li>• 節點移除叢集 → 自動清除 Pod</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">常見使用場景</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>📊 日誌收集（Fluentd、Filebeat）</li>
              <li>📈 節點監控（Prometheus Node Exporter）</li>
              <li>🌐 CNI 網路插件（Calico、Flannel）</li>
              <li>🛡️ 安全代理（Falco）</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg">
          <p className="text-yellow-400 text-sm font-semibold">
            💡 vs Deployment：DaemonSet 不設 replicas，由節點數量決定 Pod 數量
          </p>
        </div>
      </div>
    ),
    notes: `進入下一個工作負載類型：DaemonSet。這個類型的應用場景非常明確，一旦理解了就很難用錯。

DaemonSet 的名字很有趣，daemon 是 Unix/Linux 系統裡「背景常駐服務」的意思，就像 Linux 上的 syslogd、sshd、cron 這類服務，默默在背景跑著、從不停歇。DaemonSet 就是「確保叢集每個節點上都跑著指定背景服務的機制」。

DaemonSet 和 Deployment 最大的差別在於：Deployment 說「我要 3 個 Pod，至於跑在哪些節點上不重要」；DaemonSet 說「我要在每個節點上都有一個 Pod，至於數量跟節點數一樣就好」。所以 DaemonSet 沒有 replicas 欄位，Pod 數量不由你決定，而是由叢集中節點的數量決定的。10 個節點就有 10 個 Pod，20 個節點就有 20 個 Pod，完全自動。

DaemonSet 的生命週期跟節點同步：當你新增一個節點到叢集，DaemonSet 控制器立刻在那個節點上排程並啟動一個新的 Pod；當你移除一個節點，那個節點上的 DaemonSet Pod 也會自動被清理掉，乾乾淨淨，不需要人工介入。

DaemonSet 最典型的使用場景是「基礎設施類的支援服務」，這些服務必須覆蓋到每個節點，才能達到完整的監控或管理效果：

日誌收集：Fluentd、Filebeat、Logstash 這類工具在每個節點上收集所有 Pod 的日誌（Pod 日誌寫到節點的 /var/log/pods 目錄），然後統一送到集中的日誌系統（Elasticsearch、Grafana Loki）。如果某個節點沒有日誌收集代理，那個節點上的日誌就會斷掉。

節點監控：Prometheus 的 Node Exporter 在每個節點上收集 CPU、記憶體、磁碟、網路等硬體層面的指標。每個節點需要一個，才能全面掌握整個叢集的硬體健康狀況。

網路插件（CNI）：Calico、Flannel、Weave Net 這些 CNI 插件本身也是用 DaemonSet 部署的，每個節點都需要有網路代理才能讓 Pod 之間互通。這是 Kubernetes 叢集最底層的基礎設施。

安全審計：Falco 這類運行時安全工具在每個節點上監控系統呼叫，偵測異常行為（比如有 Pod 突然開始讀取 /etc/passwd）。

小練習：kubectl get daemonset -n kube-system，你會看到叢集本身就有幾個 DaemonSet 在跑，這說明即使是 Kubernetes 自身也大量使用 DaemonSet 來管理基礎設施服務。

DaemonSet 和 Deployment 還有一個重要差異是更新方式。Deployment 預設用 RollingUpdate 策略，DaemonSet 也支援 RollingUpdate，但邏輯略有不同：DaemonSet 的滾動更新是節點一個接一個地替換，而不是 Pod 一批一批。可以透過 updateStrategy.rollingUpdate.maxUnavailable 控制一次最多有幾個節點的 DaemonSet Pod 在更新中。DaemonSet 還有一個 OnDelete 更新策略，設定成 OnDelete 之後，只有當你手動刪除舊的 DaemonSet Pod，才會建立新版本的 Pod，這在你需要完全人工控制更新節奏的場景很有用，比如更新核心網路插件時，你不希望 Kubernetes 自動滾動更新，要一個節點一個節點地手動驗證。

另外補充一點：DaemonSet 也支援 nodeSelector 和 affinity 設定，讓你只在符合條件的節點上部署，而不是全部節點。比如你有些節點是 GPU 節點、有些是 CPU 節點，GPU 相關的監控代理只需要跑在 GPU 節點上，就可以用 nodeSelector: accelerator: nvidia 來篩選。這讓 DaemonSet 更加靈活，不一定是「所有節點一個 Pod」，而是「所有符合條件的節點各一個 Pod」。`,
    duration: '10',
  },

  // ========== DaemonSet YAML ==========
  {
    title: 'DaemonSet YAML 設定',
    subtitle: '實作：部署日誌收集代理',
    section: 'DaemonSet',
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">DaemonSet YAML 範例（日誌收集）</p>
          <pre className="text-slate-300 font-mono text-xs leading-relaxed">{`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: log-agent
  namespace: monitoring
spec:
  selector:
    matchLabels:
      app: log-agent
  template:
    metadata:
      labels:
        app: log-agent
    spec:
      containers:
      - name: fluentd
        image: fluent/fluentd:v1.16
        resources:
          limits:
            memory: "200Mi"
            cpu: "100m"
        volumeMounts:
        - name: varlog
          mountPath: /var/log
          readOnly: true
      volumes:
      - name: varlog
        hostPath:                  # 掛載節點的 /var/log
          path: /var/log`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-slate-400 text-xs mb-1">常用指令</p>
          <pre className="text-green-400 font-mono text-xs">{`kubectl get daemonset -n monitoring
kubectl get pods -n monitoring -o wide  # 確認每個節點都有 Pod`}</pre>
        </div>
      </div>
    ),
    notes: `DaemonSet 的 YAML 結構和 Deployment 非常相似，差別主要在 kind 是 DaemonSet，以及沒有 replicas 欄位。如果你習慣寫 Deployment，切換到 DaemonSet 幾乎沒有學習成本。

這個範例是部署 Fluentd 日誌收集代理，讓每個節點都有一個 Fluentd 收集日誌。重點看 volumes 和 volumeMounts 的部分：我們用了 hostPath 這種 Volume 類型，它直接把節點主機的 /var/log 目錄掛載到容器裡的 /var/log。這樣 Fluentd 就能讀取節點上所有的日誌檔案，包括系統日誌（/var/log/syslog）和所有 Pod 的日誌（/var/log/pods/）。這就是為什麼日誌收集一定要用 hostPath，因為 Pod 的日誌是寫到節點檔案系統上的，不在容器的 overlay filesystem 裡。

注意 readOnly: true 這個設定。日誌收集代理只需要讀取日誌，不需要寫入節點的 /var/log，所以設成唯讀。這是最小權限原則的體現，能用唯讀就用唯讀，降低安全風險。萬一這個容器被攻擊者入侵，唯讀掛載至少保護了節點的日誌不被篡改。

關於 namespace 的設計，把基礎設施服務（監控、日誌、安全）放在專用的 namespace（monitoring、kube-system、logging）是個好習慣，和業務應用程式隔離開來。這樣做的好處：namespace 有 ResourceQuota 可以限制資源用量、RBAC 可以精細控制存取權限、kubectl get pods 不同 namespace 不會互相干擾。

部署後用 kubectl get pods -n monitoring -o wide 可以看到每個 Pod 被分配到哪個節點，確認每個節點都有一個 Pod。如果某個節點缺少 Pod，最常見原因是那個節點有 taint（污點），而你的 DaemonSet 沒有設定對應的 tolerations 容忍這個 taint，所以排程器跳過了那個節點。這個概念叫做 Taint 和 Toleration，是 Kubernetes 進階調度的重要機制，有空可以深入研究。

一個安全警示：DaemonSet Pod 如果使用 hostPath 掛載節點目錄，表示這個容器有存取節點檔案系統的能力，安全風險較高。生產環境要謹慎選擇掛載範圍，並搭配 RBAC 和 Pod Security Standards 來限制 DaemonSet 的能力，避免成為攻擊跳板。

讓我補充一個 DaemonSet 和節點 Taint 的關係，這在實務中非常常見。Kubernetes 允許你給節點加上 taint（污點），比如給 master 節點加上 node-role.kubernetes.io/control-plane:NoSchedule 的 taint，讓一般的 Pod 不會被排程到 master 上面。DaemonSet 如果想要在有 taint 的節點上跑，就需要在 Pod template 裡加上對應的 toleration（容忍）。比如 Fluentd 日誌收集代理希望在所有節點包含 master 上都跑，就要加上對 control-plane taint 的 toleration。如果沒加，Fluentd 就不會跑在 master 上，master 上的日誌就收集不到。kubectl get daemonset -n kube-system 你會看到 kube-proxy 這個 DaemonSet 就設定了容忍所有 taint 的 toleration（operator: Exists），因為網路功能必須在每一個節點上都工作，包括 master。

部署 DaemonSet 後怎麼驗證？用 kubectl rollout status daemonset/log-agent -n monitoring 可以看更新進度，用 kubectl describe daemonset log-agent -n monitoring 可以看 Desired、Current、Ready、Up-to-date、Available 等狀態欄位，確保 Desired（目標數量，等於節點數）等於 Available（可用數量），代表每個節點都有健康的 DaemonSet Pod 在跑。如果數字不一致，用 kubectl get pods -n monitoring -o wide 加上 --field-selector 'status.phase!=Running' 快速找出有問題的 Pod，然後 kubectl describe 看 Events 確認原因。`,
    duration: '10',
  },

  // ========== StatefulSet 概念 ==========
  {
    title: 'StatefulSet',
    subtitle: '有狀態應用的管理利器',
    section: 'StatefulSet',
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-slate-400 text-sm font-semibold mb-3">Deployment Pod（無狀態）</p>
            {['pod-abc12', 'pod-xyz89', 'pod-qwe45'].map((name, i) => (
              <div key={i} className="bg-slate-700/50 p-2 rounded mb-2 text-sm font-mono">
                <span className="text-slate-400">web-deploy-</span>
                <span className="text-yellow-400">{name.slice(4)}</span>
                <p className="text-xs text-slate-500">隨機名稱、隨機 IP、共用儲存</p>
              </div>
            ))}
          </div>
          <div className="bg-k8s-blue/10 border border-k8s-blue/50 p-4 rounded-lg">
            <p className="text-k8s-blue text-sm font-semibold mb-3">StatefulSet Pod（有狀態）</p>
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-slate-700/50 p-2 rounded mb-2 text-sm font-mono">
                <span className="text-slate-400">mysql-</span>
                <span className="text-green-400">{i}</span>
                <p className="text-xs text-slate-500">
                  穩定名稱 · 穩定 DNS · 專屬 PVC
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          {[
            { icon: '🏷️', title: '穩定 Pod 名稱', desc: 'mysql-0, mysql-1...' },
            { icon: '🌐', title: '穩定 DNS', desc: '固定的網路標識' },
            { icon: '💾', title: '穩定儲存', desc: '每個 Pod 有專屬 PVC' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-3 rounded-lg">
              <p className="text-2xl">{item.icon}</p>
              <p className="text-slate-300 font-semibold">{item.title}</p>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `StatefulSet 解決了一個 Deployment 解決不了的問題：有狀態應用程式的管理。這是很多工程師第一次嘗試在 Kubernetes 上跑資料庫時會踩到的坑。

什麼叫「有狀態」？簡單說，就是這個 Pod 有「個人資料」，不能隨意替換成另一個一模一樣的 Pod。比如 MySQL 的主節點和從節點分別儲存著不同的資料，或者雖然有資料複製但各自有獨立的 binlog 位置。你不能把主節點的 Pod 刪掉後，用一個全新的 Pod 來替代它，因為新 Pod 沒有原來的資料，也不知道自己在 MySQL 叢集裡應該扮演什麼角色。

我見過一個真實案例：有個小型公司把 PostgreSQL 用 Deployment 部署到 Kubernetes，沒有掛 PVC，也沒有用 StatefulSet。結果有一天工程師不小心執行了 kubectl rollout restart，所有 Pod 被刪除重建，但新 Pod 的資料是空的，三個月的業務資料就這樣消失了。這個故事告訴我們：有狀態的服務一定要認真對待。

對比一下 Deployment 和 StatefulSet 的 Pod 有什麼不同：

Deployment 的 Pod 名稱是隨機後綴的（web-deploy-7d9b-abc12），每次 Pod 重建，名字變、IP 變、分配到哪個節點也可能變，這些 Pod 是「可互換的」，任何一個頂替任何一個都沒問題，因為它們是無狀態的。

StatefulSet 的 Pod 名稱是固定有序號的（mysql-0、mysql-1、mysql-2），序號從 0 開始，永遠不變。Pod 被刪除後重建，還是叫 mysql-0，還是掛同一個 PVC，還是有同一個 DNS 名稱。這個 Pod 是不可替換的，它有自己的「身份」。

StatefulSet 的三大核心保證：

第一，穩定的 Pod 名稱和序號。mysql-0 永遠是 mysql-0，重啟幾次都不會變。這讓應用程式可以用固定的名字來識別特定的節點，比如 Kafka 的 broker ID 就可以對應 Pod 的序號。

第二，穩定的網路標識。配合 Headless Service（clusterIP: None），每個 Pod 都有固定的 DNS 名稱：mysql-0.mysql.default.svc.cluster.local。其他服務可以直接定址到特定的 Pod，不需要透過 Service 的負載均衡。這是 MySQL 主從複製能正確設定 master host 的關鍵。

第三，穩定的儲存。StatefulSet 透過 volumeClaimTemplates 為每個 Pod 自動建立獨立的 PVC，Pod-0 有自己的 PVC、Pod-1 有自己的 PVC，互不干擾。Pod 重建後 Kubernetes 確保還是掛同一個 PVC，資料完整保留。

這三大保證讓 StatefulSet 非常適合管理資料庫（MySQL、PostgreSQL）、分散式儲存（Cassandra、MongoDB Replica Set）、訊息佇列（Kafka）等有狀態的中介軟體。`,
    duration: '10',
  },

  // ========== StatefulSet vs Deployment ==========
  {
    title: 'StatefulSet YAML 與 vs Deployment',
    subtitle: '有什麼不同？何時選哪個？',
    section: 'StatefulSet',
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2">StatefulSet 關鍵 YAML 欄位</p>
          <pre className="text-slate-300 font-mono text-xs">{`apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: mysql
spec:
  serviceName: "mysql"     # 必填！對應 Headless Service
  replicas: 3
  selector:
    matchLabels:
      app: mysql
  template:
    spec:
      containers:
      - name: mysql
        image: mysql:8.0
        volumeMounts:
        - name: data
          mountPath: /var/lib/mysql
  volumeClaimTemplates:    # 為每個 Pod 自動建立 PVC
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 10Gi`}</pre>
        </div>
        <div className="grid grid-cols-3 gap-3 text-xs text-center">
          {[
            { label: '選 Deployment', items: ['Web 服務', 'API Server', '無狀態微服務'], color: 'bg-blue-900/30 border-blue-700', textColor: 'text-blue-400' },
            { label: '選 StatefulSet', items: ['MySQL / PostgreSQL', 'Kafka / RabbitMQ', 'Elasticsearch'], color: 'bg-green-900/30 border-green-700', textColor: 'text-green-400' },
            { label: '選 DaemonSet', items: ['日誌收集', '節點監控', 'CNI 插件'], color: 'bg-purple-900/30 border-purple-700', textColor: 'text-purple-400' },
          ].map((col, i) => (
            <div key={i} className={`${col.color} border p-3 rounded-lg`}>
              <p className={`${col.textColor} font-semibold mb-2`}>{col.label}</p>
              {col.items.map((item, j) => (
                <p key={j} className="text-slate-300">{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `StatefulSet 的 YAML 結構和 Deployment 很像，但有幾個關鍵差別，搞清楚這些差別就能正確使用 StatefulSet。

第一個關鍵差別：serviceName 是必填欄位。StatefulSet 需要配合一個 Headless Service（spec.clusterIP: None）才能讓每個 Pod 有固定的 DNS 名稱。serviceName 就是指定那個 Headless Service 的名字。當 Headless Service 叫 mysql 時，Pod mysql-0 的完整 DNS 就是 mysql-0.mysql.default.svc.cluster.local。記得要單獨建立這個 Headless Service，不要忘了這一步，不然 StatefulSet 能跑起來，但 Pod 之間的 DNS 定址會有問題。

第二個關鍵差別：volumeClaimTemplates 是 StatefulSet 特有的欄位，Deployment 完全沒有這個。它定義了 PVC 的模板，StatefulSet 控制器會根據這個模板，為每個 Pod 自動建立一個獨立的 PVC。Pod 0 對應 data-mysql-0，Pod 1 對應 data-mysql-1，以此類推，命名規則是：template 的 name + 連接符 + StatefulSet 名稱 + 連接符 + Pod 序號。當 Pod 被刪除重建後，Kubernetes 確保新的 Pod 還是掛載同一個 PVC，資料完全保留，這是 StatefulSet 最核心的能力。

重要注意事項：刪除 StatefulSet 時，PVC 不會一起被刪除，需要手動清理。這是 Kubernetes 故意的設計，保護你不會因為一個 kubectl delete 就把所有資料都刪光。清理時記得先確認 PVC 裡的資料是否已經備份，然後再手動 kubectl delete pvc。

StatefulSet 的 Pod 建立和刪除都有嚴格的順序：建立時從序號 0 開始，等 Pod-0 變成 Ready 才建立 Pod-1，以此類推，一個接一個。刪除時反向，從最大序號開始，反向刪除。這個設計確保了主從架構的正確初始化順序，比如 MySQL 主節點（mysql-0）一定先啟動，從節點才能跟主節點建立複製關係。

工作負載選型決策樹，只要回答三個問題就能選對：問題一：需要在每個節點都跑一個 Pod 嗎？是 → DaemonSet；否 → 下一題。問題二：Pod 需要穩定的身份、固定 DNS、或獨立的持久儲存嗎？是 → StatefulSet；否 → 下一題。問題三：其他一般服務 → Deployment。這三個問題能幫你在 99% 的情況下做出正確選擇，剩下的 1% 是需要 Job 或 CronJob 的批次工作，那是下一堂課的主題。

讓我再補充一個細節：StatefulSet 一定要搭配 Headless Service 才能讓每個 Pod 有固定的 DNS 名稱。Headless Service 的設定非常簡單，就是在 Service spec 裡把 clusterIP 設成 None，這樣 Kubernetes 不會為它分配 cluster IP，而是把每個 Pod 的 IP 直接登錄到 DNS。有了 Headless Service，mysql-0.mysql.default.svc.cluster.local 這個 DNS 名稱就能解析到 mysql-0 這個特定 Pod 的 IP，即使 Pod 重建了，DNS 名稱不變，只是指向新 Pod 的 IP。這讓其他服務（比如應用程式設定的主節點地址）不需要因為 Pod IP 變化而更新設定。這是 StatefulSet 網路穩定性的核心機制。

另外提醒一個常見問題：刪除 StatefulSet 不會自動刪除它的 PVC，這是 Kubernetes 故意的設計——保護你的資料不被誤刪。清理環境時要記得手動執行 kubectl delete pvc 指令，把對應的 PVC 一起清理掉，否則 PV 會持續佔用儲存資源。這個特性在生產環境是保護措施，在開發環境測試時則要注意不要積累過多孤兒 PVC，可以用 kubectl get pvc 定期確認。`,
    duration: '10',
  },

  // ========== 課程總結 ==========
  {
    title: '課程總結',
    subtitle: '工作負載管理重點回顧',
    section: '總結',
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: '🚀',
              title: 'Deployment',
              points: ['RollingUpdate 零停機更新', 'Recreate 適合不相容版本升級', 'rollout undo 快速回滾'],
              color: 'bg-blue-900/30 border-blue-700',
              textColor: 'text-blue-400',
            },
            {
              icon: '❤️',
              title: '健康檢查',
              points: ['Liveness → 失敗就重啟', 'Readiness → 失敗退出 Service', 'Startup → 保護慢啟動應用'],
              color: 'bg-red-900/30 border-red-700',
              textColor: 'text-red-400',
            },
            {
              icon: '⚖️',
              title: '資源管理',
              points: ['Request = 排程依據', 'Limit = 使用上限', 'QoS 決定驅逐優先順序'],
              color: 'bg-yellow-900/30 border-yellow-700',
              textColor: 'text-yellow-400',
            },
            {
              icon: '📈',
              title: 'HPA',
              points: ['需要 Metrics Server', 'CPU Request 是計算基礎', 'minReplicas 不要設 0'],
              color: 'bg-green-900/30 border-green-700',
              textColor: 'text-green-400',
            },
            {
              icon: '🛡️',
              title: 'DaemonSet',
              points: ['每個節點一個 Pod', '節點加入自動部署', '適合監控 / 日誌收集'],
              color: 'bg-purple-900/30 border-purple-700',
              textColor: 'text-purple-400',
            },
            {
              icon: '🗄️',
              title: 'StatefulSet',
              points: ['穩定名稱：mysql-0, mysql-1', '穩定儲存：每 Pod 專屬 PVC', '適合資料庫 / 訊息佇列'],
              color: 'bg-orange-900/30 border-orange-700',
              textColor: 'text-orange-400',
            },
          ].map((item, i) => (
            <div key={i} className={`${item.color} border p-3 rounded-lg`}>
              <p className={`${item.textColor} font-bold mb-2`}>
                {item.icon} {item.title}
              </p>
              <ul className="text-slate-300 text-xs space-y-1">
                {item.points.map((p, j) => (
                  <li key={j}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `好，讓我們把今天早上學到的東西做個完整的總結。內容很多，但每個知識點都非常實用，是 Kubernetes 生產環境的日常。

Deployment 深入：今天我們不只是「會用」Deployment，而是深入理解了 Pod 模板的設計細節，特別是 selector.matchLabels 和 template.labels 必須一致這個關鍵點，以及 resources 欄位的正確設定方式。更新策略有兩種：RollingUpdate 是零停機更新，maxUnavailable=0、maxSurge=1 是推薦的生產設定；Recreate 適合新舊版本有不相容問題的場合，接受短暫停機。rollout undo 是你的後悔藥，出問題馬上用，幾十秒就能恢復。

健康檢查：三種 Probe 各司其職，不能混淆。Liveness Probe 確保容器本身存活，失敗就重啟；Readiness Probe 確保容器可以接流量，失敗就從 Service 移除但不重啟；Startup Probe 給慢啟動應用保護時間，期間暫停 Liveness 的檢查。三種 Probe 都支援 httpGet、tcpSocket、exec 三種探測方式。Liveness Probe 只檢查自身，不要把外部依賴加進去，避免雪崩效應。

資源管理：Request 是排程依據，告訴 Kubernetes「我至少需要這麼多」；Limit 是硬上限，CPU 超過被節流（throttle），Memory 超過被 OOMKill。兩個都設才是最佳實踐。QoS Class 由 Request 和 Limit 的設定組合自動決定：req==limit 是 Guaranteed（最高保障）；有設 req 或 limit 是 Burstable（中等）；都沒設是 BestEffort（最低，不建議生產使用）。節點資源緊張時，BestEffort 最先被驅逐，Guaranteed 最後。

HPA 自動擴縮：按需調整 Pod 數量，高峰擴容、低谷縮容，節省成本又能扛流量。前提：安裝 Metrics Server、設定 CPU Request、有 Deployment。設計要點：minReplicas 至少 2、maxReplicas 設合理上限、autoscale/v2 版本支援更豐富的指標和行為設定。

DaemonSet：「每個節點一個 Pod」，節點加入自動部署、節點離開自動清理。適合日誌收集（Fluentd、Filebeat）、節點監控（Node Exporter）、網路插件（Calico、Flannel）、安全審計（Falco）等基礎設施服務。用 hostPath 掛載節點目錄時注意安全，搭配 readOnly 和最小權限原則。

StatefulSet：解決有狀態應用的三大難題：穩定 Pod 名稱（mysql-0 永遠是 mysql-0）、穩定網路 DNS（配合 Headless Service）、穩定獨立儲存（volumeClaimTemplates 為每個 Pod 建立專屬 PVC）。Pod 建立和刪除有嚴格順序，保護主從架構的正確初始化。適合資料庫（MySQL、PostgreSQL）、訊息佇列（Kafka）、分散式儲存（Cassandra）。

選型決策方法：每個節點都要？DaemonSet；需要穩定身份和獨立儲存？StatefulSet；其他？Deployment。記住這個決策樹，你就不會選錯了。

下午我們繼續學習 Job、CronJob，以及 Namespace 和資源配額管理。今天的知識量比較大，有問題隨時提，也可以趁午飯時間消化一下。午飯後見！

【預期難搞學員問題 — 第五堂早上】

Q：RollingUpdate 參數該怎麼設，才不會更新時掉流量？

A：先以可用性為第一優先，控制 maxUnavailable，再搭配 readiness probe。更新速度要服從服務穩定，而不是追求一次改完。

Q：HPA 沒反應時，第一個要懷疑什麼？

A：先確認 metrics 來源是否正常，再確認 target 設定與觀測窗口。很多案例不是 HPA 壞掉，而是指標根本沒進來或樣本不足。

Q：HPA 和 VPA 可以一起開嗎？

A：可以但要有策略，否則容易互相拉扯。常見做法是 HPA 以 CPU 或 QPS 擴副本，VPA 僅建議模式做容量參考。

Q：StatefulSet 和 Deployment 最常見的誤用是什麼？

A：把需要穩定身分與持久儲存的服務放在 Deployment，或把純無狀態服務硬放 StatefulSet。選錯工作負載會增加運維成本且放大風險。

Q：能不能把 API 服務縮到 0 副本省成本？

A：可以，但要確認啟動延遲與使用者體驗可接受。若沒有事件驅動或預熱機制，冷啟動可能直接影響可用性。成本與延遲要一起算。

Q：PDB 設太嚴會有什麼副作用？

A：會讓節點維護與升級卡住，因為平台無法驅逐足夠 Pod。PDB 不是越嚴越安全，要和副本數、故障域設計一起平衡。

Q：Kubernetes 原生可以做金絲雀發布嗎？

A：可以做基礎版，例如雙 Deployment 加流量切分或手動權重策略。若要更細緻的流量治理，通常要搭配 Ingress 控制器或 Service Mesh。

Q：CrashLoopBackOff 在 Deployment 裡反覆發生，應該先看哪三件事？

A：先看上一輪容器 log，再看事件與退出碼，最後檢查設定與相依服務。不要先猜程式錯誤，很多時候是配置與探針條件不匹配。`,
    duration: '10',
  },
]
