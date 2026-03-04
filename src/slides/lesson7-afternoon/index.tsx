import type { ReactNode } from 'react'

export interface Slide {
  title: string
  subtitle?: string
  section?: string
  content?: ReactNode
  code?: string
  image?: string
  notes?: string
  duration?: string
}

export const slides: Slide[] = [
  // ========== 開場 ==========
  {
    title: "實戰演練與課程總結",
    subtitle: "第七堂下午 — 把學過的一切串在一起",
    section: "第七堂下午",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-k8s-blue rounded-full flex items-center justify-center text-4xl">
            🏆
          </div>
          <div>
            <p className="text-2xl font-semibold">實戰演練與課程總結</p>
            <p className="text-slate-400">13:00–17:00（240 分鐘）</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6 text-base">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">今天下午</p>
            <p>三場實戰演練 + CI/CD + 最佳實踐</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">課程終點</p>
            <p>畢業典禮 & Q&A</p>
          </div>
        </div>
        <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-lg">
          <p className="text-green-400 font-semibold">🎯 今天的目標</p>
          <p className="text-green-200">用一個完整的三層式應用，把七天所學全部串連起來</p>
        </div>
      </div>
    ),
    notes: `歡迎大家回來！吃飽了嗎？精神有沒有好一點？今天下午是整個七天課程的最後一個下午，也是最重頭的實戰時段。我知道大家午餐後可能有點昏昏欲睡，但我保證，今天下午的內容會讓你們清醒過來，因為我們要動手做很多事情。

這個下午我們不會再學太多新東西，而是把這七天學的所有概念，用實際的動手操作把它們串在一起。學 Kubernetes 最大的陷阱就是「懂了很多概念，但一旦自己動手就卡關」——今天下午就是要打破這個障礙。

我相信學一個技術最好的方式，不是背文件，而是在一個完整的場景裡，把每個工具都用在它該用的地方，讓你真正體會為什麼需要它。我在業界帶過很多工程師，凡是能在實際專案裡跑過一遍完整流程的，技術成長速度都是其他人的兩三倍。

今天下午的主線是：先做一個完整的三層式應用部署，然後故意把它弄壞，練習排查故障，接著設定高可用配置，最後看看 CI/CD 怎麼跟 K8s 整合。這整個流程，就是你們將來在真實工作中會一直重複的循環：部署、壞掉、排查、修好、優化。準備好了嗎？我們開始！

如果有人今天是第一次這麼系統化地接觸 Kubernetes，也別擔心，今天下午的節奏我會盡量照顧到每個人。有卡住的地方就舉手，不要悶在那邊等——遇到問題是很正常的，我們一起解決，這才是真正的學習。`,
    duration: "4"
  },

  // ========== 下午課程大綱 ==========
  {
    title: "下午課程大綱",
    section: "課程總覽",
    content: (
      <div className="grid gap-3">
        {[
          { time: "13:00–13:15", topic: "開場回顧：七堂課精華快速複習", icon: "🔁" },
          { time: "13:15–14:00", topic: "實戰演練一：三層式應用部署", icon: "🏗️" },
          { time: "14:00–14:30", topic: "實戰演練二：故障排查三連擊", icon: "🔍" },
          { time: "14:30–14:45", topic: "休息時間", icon: "☕" },
          { time: "14:45–15:15", topic: "實戰演練三：HPA + PDB 高可用配置", icon: "📈" },
          { time: "15:15–15:40", topic: "CI/CD 與 GitOps：GitHub Actions + ArgoCD", icon: "🔄" },
          { time: "15:40–16:00", topic: "生產環境最佳實踐整理", icon: "🛡️" },
          { time: "16:00–16:15", topic: "課程總結：七天學習路徑回顧", icon: "🗺️" },
          { time: "16:15–17:00", topic: "畢業典禮與 Q&A", icon: "🎓" },
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
    notes: `讓我們看一下今天下午的完整安排。整個下午分成九個段落，我帶大家快速瀏覽一遍，讓你心裡有個底。

一開始 15 分鐘的開場回顧，我會帶大家快速掃過這七天的重點，找回手感，也讓剛才午休睡太熟的同學重新 boot up。

接著是最重頭的三場實戰演練：13:15 到 14:00 是第一場，完整部署一個三層式應用，從建立命名空間到瀏覽器看到頁面。14:00 到 14:30 是第二場，故障排查三連擊，我們會故意製造三種常見錯誤來練習診斷。中間 14:30 到 14:45 是休息時間，大家可以趁機對一下剛才不懂的地方。

休息後，14:45 到 15:15 是第三場實戰，HPA 加上 PDB 的高可用配置，這是讓應用在生產環境穩定運行的關鍵設定。15:15 到 15:40 介紹 CI/CD 和 GitOps 流程，這是現代工程團隊的日常，值得好好了解。15:40 到 16:00 整理生產環境最佳實踐，把七天學的技術串成一個可以帶回去用的清單。

最後一個小時，先做七天學習路徑的總回顧，然後進行畢業典禮和 Q&A。大家有任何問題，在 Q&A 時間盡情提出，我們把整個課程好好收個尾。今天下午的安排很緊湊，跟緊我，我們一起衝！`,
    duration: "3"
  },

  // ========== 開場回顧 ==========
  {
    title: "七天學習，快速回顧",
    subtitle: "你走了多遠？",
    section: "開場回顧",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { day: "Day 1", topic: "Linux 基礎", icon: "🐧", detail: "命令列、檔案系統、權限" },
            { day: "Day 2", topic: "Linux 實務管理", icon: "🛠️", detail: "程序、服務、套件、排錯" },
            { day: "Day 3", topic: "Docker 容器", icon: "🐳", detail: "映像、容器、Dockerfile、Compose" },
            { day: "Day 4", topic: "K8s 入門", icon: "☸️", detail: "架構、YAML、Pod、Deployment" },
            { day: "Day 5", topic: "工作負載與網路", icon: "🌐", detail: "HPA、Service、Ingress、NetworkPolicy" },
            { day: "Day 6", topic: "組態與儲存", icon: "🗄️", detail: "ConfigMap、Secret、PV/PVC、StatefulSet" },
            { day: "Day 7", topic: "實戰整合", icon: "🏆", detail: "今天，把一切串在一起！" },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg border ${i === 6 ? 'bg-k8s-blue/20 border-k8s-blue' : 'bg-slate-800/50 border-slate-700'}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <span className={`font-bold text-sm ${i === 6 ? 'text-k8s-blue' : 'text-slate-400'}`}>{item.day}</span>
              </div>
              <p className={`font-semibold ${i === 6 ? 'text-white' : 'text-slate-300'}`}>{item.topic}</p>
              <p className="text-slate-500 text-xs">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `在開始今天的實戰之前，讓我帶大家快速回顧一下這七天走過的路。這不是重新上課，而是幫大家把記憶的「快取」暖機一下，讓等一下動手的時候不用現查。

Day 1，我們從 Linux 命令列開始。很多人那天第一次用 SSH 連進一台遠端伺服器，第一次在黑色視窗裡打指令。我記得有同學問我 ls 和 dir 有什麼差別——那個問題很正常，因為這是真的從零開始。我們學了基本的檔案操作、目錄結構、檔案權限的 rwx 讀法，還有如何用 grep 找東西、用 pipe 串接指令。這些技能現在天天都在用，你進 Pod 裡除錯的時候、查 log 的時候，用的都是 Day 1 的東西。

Day 2，我們把 Linux 用到更像真實工作場景：程序與服務管理、日誌與套件安裝、環境變數與常見排錯流程。這一天讓你從「會打指令」進階到「能維運一台主機」，也為後面的容器化打下穩定基礎。

Day 3，進入 Docker。我們理解了「容器」這個革命性的概念：把應用程式和它所有的依賴打包成一個可移植的映像，不管在哪台機器上都能跑出一樣的結果。我們學了怎麼寫 Dockerfile，怎麼 build 映像，怎麼 run 容器，怎麼把映像 push 到 Registry。容器是 Kubernetes 的前提，沒有 Day 3，就沒有後面的所有東西。

Day 4，正式進入 Kubernetes。這一天是很多人的轉折點，因為 K8s 的概念層次比 Docker 複雜很多。我們學了架構、YAML、Pod 是什麼、為什麼需要 Deployment 而不是直接管理 Pod。還記得第一次 kubectl apply 成功的感覺嗎？那個瞬間真的很有成就感。

Day 5，深入工作負載與網路。Service 讓 Pod 對外提供穩定存取點，Ingress 負責統一入口路由，HPA 負責流量高峰時的自動擴縮，NetworkPolicy 負責限制不該互通的流量。這一天讓你開始用「生產環境」思維設計服務。

Day 6，聚焦組態與儲存。ConfigMap 和 Secret 讓設定與敏感資訊不再寫死在程式碼裡，Resource Quota 與調度策略讓叢集資源更可控，PV/PVC 與 StatefulSet 讓有狀態服務也能在 K8s 上穩定運行。

Day 7 就是今天。我們要用一個真實的場景，把前六天所有的知識點全部用一遍。你會發現，每一個你曾經「好像懂了」的概念，放到整合場景裡都會重新變清晰，因為你看到了它在整個系統裡扮演的角色。這種體驗是任何文件都無法給你的。開始吧！

我想在進入實戰之前，再補充一個學習心態上的重點。很多人學完理論之後會覺得「我好像都懂了，但如果讓我獨立從零開始建一個環境，我不確定能不能做到」。這種感覺是完全正常的，它叫做「知識幻覺」——你讀了步驟，腦子裡有畫面，但手上還沒有肌肉記憶。今天下午的演練，就是要把知識幻覺轉換成真實的能力。每次你的手指打出一個 kubectl 指令，看到它真正運行，看到 Pod 狀態從 Pending 變成 Running，那個瞬間就是知識轉換成能力的時刻。這個轉換是任何回顧或複習都替代不了的，所以等一下請認真地跟著每一個步驟操作，不要只是看我示範。七天的課程設計有它的遞進邏輯，今天是整個旅程的最後一站，也是最精華的一站，一起把它走完！另外我想提醒大家：學習不是一次性的事件，今天學完不代表你已經「學會了 Kubernetes」。真正的掌握是在反覆使用中建立起來的。所以我鼓勵大家在課後找時間把今天的演練再獨立做一遍，不看筆記，看看自己哪些步驟記得住、哪些會卡關，那些卡關點就是你還需要加強的地方。`,
    duration: "11"
  },

  // ========== 實戰一：架構說明 ==========
  {
    title: "實戰演練一：三層式應用部署",
    subtitle: "Frontend + Backend + Database",
    section: "實戰演練一",
    content: (
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4 text-4xl">
          <div className="bg-blue-900/50 border border-blue-700 p-4 rounded-lg text-center">
            <p>🌐</p>
            <p className="text-sm text-blue-400 mt-1">Frontend</p>
            <p className="text-xs text-slate-500">React/Nginx</p>
          </div>
          <span className="text-k8s-blue text-3xl">→</span>
          <div className="bg-green-900/50 border border-green-700 p-4 rounded-lg text-center">
            <p>⚙️</p>
            <p className="text-sm text-green-400 mt-1">Backend</p>
            <p className="text-xs text-slate-500">Node.js/Python</p>
          </div>
          <span className="text-k8s-blue text-3xl">→</span>
          <div className="bg-orange-900/50 border border-orange-700 p-4 rounded-lg text-center">
            <p>🗄️</p>
            <p className="text-sm text-orange-400 mt-1">Database</p>
            <p className="text-xs text-slate-500">PostgreSQL</p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg space-y-2 text-sm">
          <p className="text-k8s-blue font-semibold">今天要用到的 K8s 資源：</p>
          <div className="grid grid-cols-3 gap-2">
            {["Deployment × 3", "Service × 3", "Ingress × 1", "ConfigMap × 2", "Secret × 1", "PVC × 1"].map((r, i) => (
              <span key={i} className="bg-slate-700 px-2 py-1 rounded text-slate-300">{r}</span>
            ))}
          </div>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-3 rounded-lg text-sm">
          <p className="text-k8s-blue font-semibold">🎯 目標</p>
          <p>從零開始，部署一個可從瀏覽器訪問的完整 Web 應用</p>
        </div>
      </div>
    ),
    notes: `好，我們正式進入第一場實戰演練，部署一個三層式 Web 應用程式。在開始動手之前，我想先花幾分鐘說明架構，讓大家對整體有個清楚的畫面，這樣等一下每個步驟的目的就會很清楚。

三層式架構是業界最常見的 Web 應用架構。前端（Frontend）負責使用者看到的介面，通常是用 React、Vue 這類框架寫的，打包後用 Nginx 伺服靜態檔案。後端（Backend）負責業務邏輯，接收前端的 API 請求、處理資料、和資料庫溝通，用 Node.js、Python、Go 都常見。資料庫（Database）負責持久化儲存，這裡我們用 PostgreSQL。

把這三層都放進 Kubernetes 之後，各層之間的溝通是透過 Kubernetes Service 完成的。前端容器打 API 請求到 backend-svc，後端連資料庫連到 postgres-svc。從外部進來的流量則透過 Ingress 轉發：根路徑轉到前端，/api 路徑轉到後端。整個流量路徑是：使用者 → Ingress Controller → Frontend Service → Frontend Pod，或者 使用者 → Ingress → Backend Service → Backend Pod → Postgres Service → Postgres Pod。

我們這個演練會用到幾乎所有我們學過的資源類型：三個 Deployment、三個 Service、一個 Ingress、兩個 ConfigMap（一個存後端設定、一個存前端環境變數）、一個 Secret（存資料庫密碼）、一個 PVC（讓資料庫資料持久化保存，不會因為 Pod 重啟而消失）。

這不是 Hello World，這是接近真實工作環境的部署場景。從現在開始，請打開你的終端機，我們要一步一步從最底層的資料庫開始往上建。依賴順序決定部署順序：資料庫先起來，後端才能連上去；後端先起來，前端才能打到 API。跟我來！`,
    duration: "6"
  },

  // ========== 實戰一：部署 DB + Backend ==========
  {
    title: "🔨 動手做：部署 Database & Backend",
    section: "實戰演練一",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 1. 建立命名空間 & Secret</p>
          <p className="text-green-400">kubectl create ns demo-app</p>
          <p className="text-green-400">{"kubectl create secret generic db-secret \\"}</p>
          <p className="text-green-400">{"  --from-literal=POSTGRES_PASSWORD=secret123 \\"}</p>
          <p className="text-green-400">{"  -n demo-app"}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 2. 部署 PostgreSQL（附 PVC）</p>
          <p className="text-green-400">kubectl apply -f postgres-pvc.yaml -n demo-app</p>
          <p className="text-green-400">kubectl apply -f postgres-deploy.yaml -n demo-app</p>
          <p className="text-green-400">kubectl apply -f postgres-svc.yaml -n demo-app</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 3. 部署 Backend API</p>
          <p className="text-green-400">kubectl apply -f backend-configmap.yaml -n demo-app</p>
          <p className="text-green-400">kubectl apply -f backend-deploy.yaml -n demo-app</p>
          <p className="text-green-400">kubectl apply -f backend-svc.yaml -n demo-app</p>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg text-sm">
          <p className="text-yellow-400 font-semibold">✅ 驗證步驟</p>
          <p className="font-mono text-yellow-200">kubectl get pods -n demo-app</p>
          <p className="text-yellow-200">確認所有 Pod 都是 Running</p>
        </div>
      </div>
    ),
    notes: `開始動手了。打開你的終端機，確認你的 kubeconfig 是指向正確的叢集。今天的演練我們全程在 demo-app 這個命名空間裡操作，所以每個指令都要記得加 -n demo-app，或者等一下我會示範怎麼設定預設命名空間，這樣就不用每次打了。

第一步：建立命名空間。kubectl create ns demo-app。命名空間的好處是隔離性，這個演練的所有資源都在這個 ns 裡，等一下演練結束，一個 kubectl delete ns demo-app 就可以把所有資源清乾淨，不會留下殘骸影響其他工作。如果你們的叢集是共用的，命名空間也是劃分各個團隊資源的邊界。

第二步：建立 Secret。我們用 --from-literal 直接在命令列塞入資料庫密碼。這個指令背後做的事情是：把你傳入的值用 base64 編碼後，存到 etcd 裡。注意 base64 不是加密，任何人拿到 Secret 物件都可以 base64 decode 出原始值。所以在正式生產環境，我們會用 Vault、External Secrets Operator 或 Sealed Secrets 來做更安全的 Secret 管理，不會把密碼直接存在叢集的 etcd 裡。但在今天的練習環境，--from-literal 就夠用了。

第三步：部署 PostgreSQL。注意我們是先 apply PVC，再 apply Deployment。順序很重要！先建立 PersistentVolumeClaim，讓儲存空間準備好，等 Deployment 起來的時候掛載點已經就位。postgres-pvc.yaml 裡面定義了我們需要多少空間（通常是幾 GB）和存取模式（ReadWriteOnce，表示一次只能被一個節點掛載，適合資料庫）。

postgres-deploy.yaml 裡有幾個重要的設定要注意：第一，replicas 是 1，資料庫不像無狀態應用可以隨意擴縮容，要做資料庫的水平擴展需要額外的架構設計；第二，env 區塊裡的 POSTGRES_PASSWORD 是引用我們剛才建的 Secret，寫法是 valueFrom.secretKeyRef，這樣密碼就不會直接出現在 YAML 裡；第三，volumeMounts 和 volumes 把 PVC 掛載到容器的 /var/lib/postgresql/data 目錄，這是 PostgreSQL 儲存資料的路徑。

postgres-svc.yaml 建立一個 ClusterIP Service，這樣 Backend 就可以用 postgres-svc 這個 DNS 名稱連到資料庫，不需要知道 Pod 的 IP。在 Kubernetes 裡，Pod IP 是會變的（Pod 死掉重建就換 IP），但 Service 的 DNS 名稱是固定的，這是應用程式連資料庫的正確姿勢。

第四步：部署 Backend。先 apply ConfigMap，裡面存放資料庫連線字串。連線字串的主機名稱是 postgres-svc.demo-app.svc.cluster.local，但在同一個命名空間裡可以簡寫成 postgres-svc，K8s 的 DNS 會自動補全。Backend Deployment 的 env 區塊同時引用了 ConfigMap（取得連線字串）和 Secret（取得密碼），把兩種設定的來源分開是好的做法。

apply 完每個 YAML 之後，立刻跑 kubectl get pods -n demo-app 確認狀態。Pod 從 Pending 轉成 ContainerCreating 再轉成 Running 是正常的，大概等 30 秒到 1 分鐘。如果 3 分鐘後還在 Pending，就需要排查了——通常是 PVC 沒有可用的 PV，或者節點資源不足。

等兩個 Pod 都是 Running 之後，我們來驗證 Backend 真的可以連到資料庫。用 kubectl exec 進到 Backend Pod 裡，試著用 psql 或 curl 連一下資料庫的健康檢查端點。如果回應正常，恭喜，第一層和第二層之間的連線已經通了！有任何問題舉手，我們一起解決。

在等待 Pod 進入 Running 狀態的期間，我來說一個在生產環境常見的問題：資料庫 Pod 起來了，但後端 Pod 一直在 CrashLoopBackOff。這通常是因為後端啟動時嘗試連接資料庫，但資料庫還沒完全就緒（PostgreSQL 需要一點時間初始化），連線失敗導致後端程序退出，K8s 就不斷重啟。解決方法有兩個：一是在後端程式碼裡加入重試邏輯（這是更健壯的做法，讓應用自己處理短暫的連線失敗）；二是使用 Init Container，在主容器啟動之前先執行一個等待資料庫就緒的容器，確認資料庫可以連線之後，主容器才啟動。今天我們的環境是受控的，不太可能遇到這個時序問題，但在真實的生產部署中，這是值得注意的細節。

另一個常見的問題是 PVC 一直停在 Pending。這通常有幾個原因：你的叢集沒有可用的 StorageClass，沒有足夠的可用儲存空間，或者 accessModes 不符合（比如你要 ReadWriteMany 但 StorageClass 只支援 ReadWriteOnce）。用 kubectl describe pvc postgres-pvc -n demo-app 看 Events，通常會有很清楚的錯誤訊息說明原因。在我們的練習環境，StorageClass 應該是預先配置好的，如果有問題請叫我過去看。

還有一個實務上的重要技巧：當你要驗證 Backend 能不能連到資料庫時，不一定要進到容器裡。更快的方式是看 Backend 的 log：kubectl logs -f -l app=backend -n demo-app（用 -l 標籤選擇器，而不是打整個 Pod 名稱）。如果後端成功連到資料庫，log 裡通常會有「Database connected」或類似的訊息；如果失敗，會看到連線錯誤。養成用 log 快速判斷狀態的習慣，比每次都 exec 進容器要高效很多。好，大家都完成了嗎？我們繼續往前。順帶一提，在真實的生產環境中，部署資料庫到 Kubernetes 之前需要評估幾個問題：你的儲存後端是否支援你需要的 I/O 效能（SSD vs HDD、本地存儲 vs 網路存儲）？你的備份策略是什麼（定期 pg_dump、連續 WAL 備份、或者用 Velero 做整個 PVC 的快照）？你的資料庫版本升級計劃是什麼？對於需要高 I/O 效能和低延遲的資料庫，很多公司選擇把資料庫保留在傳統 VM 上，只把無狀態的應用服務遷移到 K8s，這也是一個合理的架構決策。不是所有東西都適合跑在 K8s 上，理解邊界和取捨，是成熟工程師的標誌。在今天的練習環境裡，我們把 PostgreSQL 放進 K8s 主要是為了學習目的，讓整個三層架構完整，讓大家體驗 PVC 和 Secret 的實際用法。大家完成了嗎？確認 postgres 和 backend 都是 Running 之後，我們馬上繼續部署前端和 Ingress！`,
    duration: "20"
  },

  // ========== 實戰一：部署 Frontend + Ingress ==========
  {
    title: "🔨 動手做：部署 Frontend & Ingress",
    section: "實戰演練一",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 1. 部署 Frontend (Nginx + React Build)</p>
          <p className="text-green-400">kubectl apply -f frontend-deploy.yaml -n demo-app</p>
          <p className="text-green-400">kubectl apply -f frontend-svc.yaml -n demo-app</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 2. 設定 Ingress 統一入口</p>
          <p className="text-green-400">kubectl apply -f ingress.yaml -n demo-app</p>
          <p className="text-slate-400 mt-2 mb-1"># ingress.yaml 路由規則：</p>
          <p className="text-slate-300">{"demo.local/        → frontend-svc:80"}</p>
          <p className="text-slate-300">{"demo.local/api/    → backend-svc:3000"}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 3. 完整驗證</p>
          <p className="text-green-400">kubectl get all -n demo-app</p>
          <p className="text-green-400">kubectl get ingress -n demo-app</p>
          <p className="text-green-400">curl http://demo.local/api/health</p>
        </div>
        <div className="bg-green-900/30 border border-green-700 p-3 rounded-lg text-sm">
          <p className="text-green-400 font-semibold">🎉 成功標準</p>
          <p className="text-slate-300">瀏覽器打開 http://demo.local，看到前端頁面並能讀到資料庫資料</p>
        </div>
      </div>
    ),
    notes: `資料庫和後端都起來了，現在我們把最後一層，也就是 Frontend 加上去，然後設定 Ingress 讓整個應用程式可以從外部存取。這是整個部署流程的收尾，做完之後你就可以用瀏覽器打開我們部署的應用了。

第五步：部署 Frontend。frontend-deploy.yaml 裡跑的映像是一個 Nginx 容器，Nginx 伺服的是 React build 之後的靜態檔案。這是最常見的前端部署方式：開發環境用 npm run dev，生產環境 build 成靜態檔案放到 Nginx 裡。

前端的 Deployment 相對簡單，沒有太多環境變數需要設定。但有一件事要注意：前端的 API 端點 URL 是在 build 時決定的，不是執行時。所以如果你換了 Backend 的 Service 名稱，你需要重新 build 前端映像。這是前端部署常見的一個設計考量點。

apply frontend-svc.yaml，建立一個 ClusterIP Service。前端的 Service 不需要對外，因為外部流量是透過 Ingress 進來的，Ingress 再轉給這個 Service。

第六步：設定 Ingress。這是整個三層架構的統一入口。ingress.yaml 裡定義了兩條路由規則：第一條，所有到 demo.local 根路徑（和子路徑）的請求，轉到 frontend-svc 的 80 port；第二條，所有到 demo.local/api/ 的請求，轉到 backend-svc 的 3000 port。

這個模式叫做 path-based routing（基於路徑的路由），是最常見的 Ingress 設定方式。另一種方式是 host-based routing（基於主機名稱），比如 app.example.com 轉前端、api.example.com 轉後端。兩種方式各有適用場景，path-based 適合同一個域名下的前後端分離，host-based 適合微服務各自有獨立子域名的架構。

apply 完 ingress.yaml 之後，用 kubectl get ingress -n demo-app 確認 Ingress 資源已建立，並且有取得 External IP 或 Host。如果你用的是本地叢集（kind 或 minikube），可能需要額外設定讓 Ingress 可以存取，或者用 kubectl port-forward 來測試。

最後，執行完整驗證：kubectl get all -n demo-app 看所有資源狀態，應該看到 6 個 Pod 都是 Running，6 個 Service 都在，1 個 Ingress。然後用 curl http://demo.local/api/health 測試 Backend 是否透過 Ingress 可以存取。如果回傳 200 OK，再打開瀏覽器輸入 http://demo.local，看到前端頁面並且頁面上的資料是從資料庫來的，那就大功告成了！

這是一個很大的里程碑。從零建立一個命名空間，到一個完整可用的三層 Web 應用，用了大概 15 分鐘和不到 20 個 kubectl 指令。這就是 Kubernetes 宣告式管理的威力——你只需要描述你想要什麼狀態，K8s 幫你把它實現。大家給自己鼓個掌！

讓我補充幾個在真實生產環境中，Ingress 設定的進階技巧。第一個是 TLS 終止。你的 Ingress 可以配置 HTTPS，讓所有進到叢集的流量都加密。做法是先把 SSL 憑證存成 K8s Secret（kubectl create secret tls my-tls-secret --cert=path/to/cert.crt --key=path/to/key.key），然後在 Ingress 的 spec.tls 區塊引用這個 Secret。Ingress Controller（通常是 nginx-ingress）會自動處理 TLS 握手，後端接到的流量可以是未加密的 HTTP，這個模式叫做 TLS 終止（TLS termination）。如果你用 cert-manager 這個工具，還可以自動申請和更新 Let's Encrypt 憑證，完全自動化 HTTPS 的生命週期。

第二個技巧是 Ingress 的 annotation。不同的 Ingress Controller 支援不同的 annotation，用來調整行為。比如 nginx-ingress 的常用 annotation：nginx.ingress.kubernetes.io/rewrite-target 可以重寫路徑（比如把 /api/v1/users 重寫成 /users）；nginx.ingress.kubernetes.io/proxy-body-size 可以設定上傳檔案大小限制；nginx.ingress.kubernetes.io/rate-limit 可以設定請求速率限制。這些設定讓 Ingress 不只是個路由器，而是一個功能豐富的 API 閘道。

第三個是排查 Ingress 不通的思路。如果你 apply 了 Ingress 但瀏覽器打開是 404 或 502，排查順序是這樣的：第一步，確認 Ingress 資源有正確建立（kubectl get ingress -n demo-app），看 ADDRESS 欄位是否有 IP 或 hostname；第二步，確認 Backend Service 可以正常存取（kubectl port-forward svc/frontend-svc 8080:80 -n demo-app 然後打 localhost:8080 看有沒有頁面）；第三步，看 Ingress Controller 的 log（通常在 ingress-nginx 命名空間，kubectl logs -n ingress-nginx deploy/ingress-nginx-controller）；第四步，確認 Ingress 的 host 設定和你瀏覽器輸入的 URL 一致（包括有沒有設定 /etc/hosts 或 DNS）。很多時候 Ingress 本身是對的，問題出在沒有把 demo.local 指向正確的 IP。

最後，做完整個部署，花一分鐘用 kubectl get all -n demo-app 看一遍所有資源的清單，感受一下你用這麼少的指令建立了這麼完整的系統。這種全貌感是很重要的，以後你維護或修改這個系統，腦子裡要有這張完整的地圖。我再分享一個實務技巧：kubectl get all 並不會列出 Ingress、ConfigMap、Secret、PVC 等資源，所以如果你想看命名空間裡的「真的所有東西」，需要用 kubectl get all,ingress,configmap,secret,pvc -n demo-app 或者用 kubectl api-resources 列出所有資源類型，再一一查詢。在工程實務中，很多人會用 kubectl get all -n xxx 卻發現少了 Ingress 而迷惑，知道這個細節可以避免誤解。`,
    duration: "20"
  },

  // ========== 實戰二：故障排查概覽 ==========
  {
    title: "實戰演練二：故障排查三連擊",
    subtitle: "CrashLoopBackOff｜OOMKilled｜ImagePullBackOff",
    section: "實戰演練二",
    content: (
      <div className="space-y-5">
        <p className="text-slate-300">每種錯誤都有它的「症狀→診斷→治療」流程：</p>
        <div className="space-y-3">
          <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💥</span>
              <p className="text-red-400 font-bold text-lg">CrashLoopBackOff</p>
            </div>
            <p className="text-slate-300 text-sm">容器啟動後馬上崩潰，K8s 不斷重啟，進入退避等待循環</p>
            <p className="text-slate-500 text-xs mt-1">常見原因：程式 bug、設定檔錯誤、缺少環境變數</p>
          </div>
          <div className="bg-orange-900/30 border border-orange-700 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">💾</span>
              <p className="text-orange-400 font-bold text-lg">OOMKilled</p>
            </div>
            <p className="text-slate-300 text-sm">容器使用記憶體超過 limits，被作業系統 OOM Killer 殺掉</p>
            <p className="text-slate-500 text-xs mt-1">常見原因：記憶體 limits 設太低、記憶體洩漏（leak）</p>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-700 p-4 rounded-lg">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">🚫</span>
              <p className="text-yellow-400 font-bold text-lg">ImagePullBackOff</p>
            </div>
            <p className="text-slate-300 text-sm">K8s 無法從 Registry 拉取指定的容器映像</p>
            <p className="text-slate-500 text-xs mt-1">常見原因：映像名稱/Tag 錯誤、私有 Registry 未授權</p>
          </div>
        </div>
      </div>
    ),
    notes: `部署成功了，但現實世界的應用永遠不是「apply 完就沒事了」。真正考驗工程師功力的，不是把東西部署上去，而是出了問題能不能找到根因、多快修好。接下來我們練習三種最常見的故障，我保證你在工作中一定會遇到，而且不只遇到一次。

先說說為什麼要特別練「故障排查」。很多工程師在 apply YAML 成功之後就放鬆了，但生產環境的問題往往在幾小時或幾天後才浮現——一個版本更新帶進了 bug、流量突然增加記憶體不夠用、Image Registry 的認證過期。這時候你需要在壓力下快速診斷，每多花一分鐘，就多一分鐘的服務中斷。

第一個：CrashLoopBackOff。這是最常見的錯誤狀態，新手工程師看到這個往往第一反應是「為什麼一直重啟？」字面翻譯是「崩潰循環退避」——容器啟動後馬上崩潰，K8s 嘗試重啟，但每次重啟失敗後等待時間會越來越長，從 10 秒、20 秒、40 秒……最長到 5 分鐘。這個退避策略是為了避免無限快速重啟消耗資源。常見原因包括：應用程式在啟動時讀取了不存在的設定檔、引用了不存在的環境變數、程式本身有啟動期間的 bug、或者 port 被佔用。

第二個：OOMKilled。Out Of Memory Killed，記憶體超出限制被殺。這個錯誤比較狡猾，因為容器不是自己崩潰，是被 Linux 核心的 OOM Killer 強制殺掉的。你的程式可能運行得很好，只是記憶體用量超過了 Kubernetes 設定的 limits，就被無情地殺掉了。這種情況下容器的 Exit Code 通常是 137（128 + SIGKILL 的 9）。常見原因：limits 設太低、應用程式有記憶體洩漏、或者跑了一個記憶體密集的操作沒有考慮到峰值用量。

第三個：ImagePullBackOff。Kubernetes 在建立 Pod 時，第一步是從 Registry 拉取容器映像，如果拉不到，Pod 就永遠停在這個狀態。背後可能的原因：映像名稱打錯了（包括大小寫）、Tag 不存在（常見：把 latest 當作萬能，但 latest 不一定存在）、Registry 是私有的但沒有設定認證 Secret、或者叢集的網路無法連到 Registry。

我們現在開始逐一示範這三種故障的診斷和修復過程。`,
    duration: "6"
  },

  // ========== 實戰二：排查示範 ==========
  {
    title: "🔨 故障排查：診斷工具箱",
    section: "實戰演練二",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 第一步：看整體狀態</p>
          <p className="text-green-400">kubectl get pods -n demo-app</p>
          <p className="text-slate-500 mt-1">{"→ 找出 STATUS 不是 Running 的 Pod"}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 第二步：看 Events（最重要！）</p>
          <p className="text-green-400">kubectl describe pod &lt;pod-name&gt; -n demo-app</p>
          <p className="text-slate-500 mt-1">{"→ 翻到最下面的 Events，錯誤訊息都在這"}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 第三步：看應用程式 Log</p>
          <p className="text-green-400">kubectl logs &lt;pod-name&gt; -n demo-app</p>
          <p className="text-green-400">kubectl logs &lt;pod-name&gt; --previous -n demo-app</p>
          <p className="text-slate-500 mt-1">{"→ --previous 看上一次崩潰的 log（CrashLoop 必用）"}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 進階：進入容器除錯</p>
          <p className="text-green-400">{"kubectl exec -it <pod-name> -n demo-app -- /bin/sh"}</p>
        </div>
      </div>
    ),
    notes: `在正式演練三個故障場景之前，讓我把排查工具箱介紹清楚。這四個指令，加上一套清晰的排查思路，是你在 Kubernetes 世界裡生存的核心武器。我每次排查問題都是這個順序，從不跳步驟。

第一個指令：kubectl get pods。這是所有排查的起點。你看的是 STATUS 欄位，Running 是正常，其他狀態都代表有問題。Pending 代表 Pod 還沒被調度到節點上，通常是資源不足或者 nodeSelector 找不到符合的節點；ContainerCreating 代表正在拉映像或建立容器，如果卡超過 3 分鐘就要懷疑了；CrashLoopBackOff 代表容器反覆崩潰重啟；OOMKilled 代表記憶體超限被殺；ImagePullBackOff 或 ErrImagePull 代表映像拉不到；Terminating 代表正在刪除中，如果卡住可能是有 finalizer 沒清理。

另外注意 READY 欄，格式是「就緒容器數/總容器數」。0/1 代表容器在跑但 readinessProbe 沒過，Pod 不會接到流量。RESTARTS 欄顯示重啟次數，如果一個 Pod 的 restarts 是 50，說明它已經崩潰了 50 次，肯定有問題。

第二個指令：kubectl describe pod，這是我最常用的排查工具。describe 輸出的資訊量很大，但最重要的是兩個部分：一是 Containers 區塊，顯示資源 requests/limits、掛載的 Volume、設定的環境變數（這裡可以確認環境變數有沒有正確傳進去）；二是最底下的 Events 區塊，K8s 系統事件都記錄在這裡。舉個例子，如果映像拉不到，Events 裡會看到 Failed to pull image "xxx": rpc error... 如果是 Pod 被 OOM 殺掉，Events 裡會有 OOMKilled 的記錄。幾乎所有問題，在 Events 裡都有線索。我養成了一個習慣：排查任何 Pod 問題，第一件事就是 describe 看 Events。

第三個指令：kubectl logs。看應用程式自己吐出的 log，這是排查應用層問題的關鍵。有幾個常用參數：-f 是 follow，持續輸出新的 log（像 tail -f）；--previous 或 -p 是看前一個（已死掉的）容器的 log，這對排查 CrashLoopBackOff 非常重要，因為容器可能已經重啟了，現在跑的是新的容器，你要看的是上一個容器崩潰前的最後幾行 log；-c 是指定容器名稱，一個 Pod 可以有多個容器（sidecar 模式），要看特定容器的 log 用這個參數；--since=1h 只看最近一小時的 log。

第四個指令：kubectl exec。當 log 和 describe 還不夠，你需要「進到容器裡面親眼看看」時，用這個。常見用途：確認環境變數是否正確設定（echo $DB_HOST）、測試網路連線（curl postgres-svc:5432、ping backend-svc）、查看設定檔內容（cat /app/config.json）、查看檔案系統（ls /data/）。注意：exec 只能在容器還活著的時候用，如果容器已經崩潰了，就只能用 --previous 看 log 了。

現在我們實際演練。我會故意製造這三種故障，然後帶著大家用上面的工具組一步一步找到根因並修復。

場景一，CrashLoopBackOff：我會部署一個設定了錯誤環境變數名稱的 Backend，讓它在啟動時因為找不到必要的 DB_URL 而崩潰。我們會用 describe 看 Events，用 logs --previous 看崩潰前的 log，找到問題是環境變數名稱拼錯了（DB_URL 被寫成 DB_URl），然後修正 ConfigMap 重新 rollout。

場景二，OOMKilled：我會把 Backend 的 memory limits 設成極小的值（例如 10Mi），然後讓它跑一個需要 50Mi 記憶體的操作，讓它被 OOM 殺掉。我們會用 describe 看到 OOMKilled 的 Exit Code 137，然後把 limits 調整到合理的值修復問題。

場景三，ImagePullBackOff：我會故意把 Frontend 的映像名稱打錯一個字母，讓 K8s 找不到這個映像。我們會用 describe 看到 Failed to pull image 的 Events，確認是映像名稱錯誤，修正 YAML 後重新 apply。

每一種故障的排查流程都是：get pods 發現異常 → describe 看 Events 找線索 → logs 看應用層 log → 根據線索修復 → 驗證修復有效。把這個流程刻進你的肌肉記憶裡。

實際操作場景一，CrashLoopBackOff 排查：我把 Backend 的 Deployment 改成引用一個不存在的環境變數名稱（把 DB_URL 改成 DATABASE_URL），然後 apply。你會先看到 Pod 狀態變成 CrashLoopBackOff，RESTARTS 數字開始增加。這時候執行 kubectl logs backend-xxx --previous -n demo-app，看最後幾行的錯誤訊息，可能是「Error: DATABASE_URL is not defined」或「Cannot connect to undefined」。找到了這個線索，去 backend-configmap.yaml 裡確認環境變數名稱，發現應該是 DB_URL 而不是 DATABASE_URL，修正後重新 apply ConfigMap，然後執行 kubectl rollout restart deployment/backend -n demo-app 強制觸發 Pod 重建，讓新的 ConfigMap 生效。等新 Pod 起來，確認 RESTARTS 沒有繼續增加，表示修復成功。

場景二，OOMKilled 排查：我把 Backend Deployment 的 resources.limits.memory 改成 10Mi（這對一個 Node.js 應用來說極度不夠），apply 後 Pod 起來然後迅速 OOMKilled 重啟。用 kubectl describe pod backend-xxx -n demo-app，在最下面的 Events 區塊或 Containers 區塊，你會看到 Last State 顯示 OOMKilled，Exit Code 是 137（128 + 9，9 是 SIGKILL 的訊號數字）。診斷確認之後，把 limits.memory 改成一個合理的值（比如 256Mi 或 512Mi），apply 後驗證 Pod 穩定運行不再重啟。

場景三，ImagePullBackOff 排查：我把 Frontend Deployment 的 image 名稱打錯一個字（比如從 my-frontend:v1.0 改成 my-frontned:v1.0），apply 後 Pod 一直停在 ImagePullBackOff 或 ErrImagePull 狀態。kubectl describe pod frontend-xxx -n demo-app，在 Events 裡看到 Failed to pull image "my-frontned:v1.0": rpc error: code = Unknown desc = failed to pull and unpack image ...。確認是 image 名稱拼錯了，修正 YAML 重新 apply，等 Pod 成功 pull 映像並進入 Running 狀態。

還有一個非常有用的排查場景：你的 Pod 是 Running，但服務沒有回應。這時候要懷疑的是 Service Selector 有沒有對到正確的 Pod。執行 kubectl get endpoints backend-svc -n demo-app，如果 ENDPOINTS 欄位是空的（<none>），代表這個 Service 沒有找到任何匹配的 Pod。然後比對 Service 的 selector（spec.selector）和 Pod 的 labels（metadata.labels），確認它們完全吻合。這個「Service Selector 和 Pod Labels 不符」的問題，是初學者最容易犯的錯誤之一，但用 kubectl get endpoints 很容易診斷出來。大家把這些工具和場景都試一遍，有問題隨時叫我！最後分享一個排查效率的心法：當你面對一個你完全不理解的 Kubernetes 錯誤，試試把錯誤訊息直接複製到搜尋引擎，通常 Stack Overflow、GitHub Issues 或 Kubernetes 官方文件都有相關討論。Kubernetes 的錯誤訊息設計得相對清晰，大部分的常見問題都有前人踩過坑留下記錄。善用社群的知識積累，是快速排查問題的重要能力之一。當然，今天我們在現場，有任何問題直接問我。`,
    duration: "26"
  },

  // ========== 休息 ==========
  {
    title: "☕ 休息時間",
    subtitle: "休息 15 分鐘 — 14:30–14:45",
    content: (
      <div className="text-center space-y-8">
        <p className="text-6xl">☕ 🚶 🧘</p>
        <p className="text-2xl text-slate-300">
          完成了兩場實戰演練，你很棒！
        </p>
        <div className="bg-slate-800/50 p-6 rounded-lg inline-block">
          <p className="text-slate-400">下半場預告</p>
          <ul className="text-k8s-blue text-left mt-2 space-y-1">
            <li>📈 實戰演練三：HPA + PDB 高可用配置</li>
            <li>🔄 CI/CD 與 GitOps 概念</li>
            <li>🛡️ 生產環境最佳實踐</li>
            <li>🎓 課程總結 & 畢業典禮</li>
          </ul>
        </div>
      </div>
    ),
    notes: `好，休息時間到！大家辛苦了。剛才兩場實戰演練很有份量，請起來走一走，喝點水，讓眼睛和頸椎休息一下。如果剛才有任何操作卡住、沒跟上，趁這 15 分鐘來找我或助教，我們幫你補上。14:45 準時繼續，下半場同樣精彩！請記得補充水分，和旁邊的同學聊聊剛才遇到的問題，有時候同學之間的相互解說是最有效的學習方式。`,
    duration: "2"
  },

  // ========== 實戰演練三：HPA 壓力測試 ==========
  {
    title: "🔨 動手做：HPA 壓力測試驗證",
    subtitle: "親眼看到 Pod 自動擴縮容",
    section: "實戰演練三",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 終端機 1：監控 HPA 狀態</p>
          <p className="text-green-400">watch -n 2 kubectl get hpa -n demo-app</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 終端機 2：監控 Pod 數量</p>
          <p className="text-green-400">watch -n 2 kubectl get pods -n demo-app</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 終端機 3：製造 CPU 壓力</p>
          <p className="text-green-400">{"kubectl exec -it $(kubectl get pod -n demo-app \\"}</p>
          <p className="text-green-400">{"  -l app=backend -o name | head -1) -n demo-app -- sh"}</p>
          <p className="text-yellow-400 mt-1">{"# 容器裡執行："}</p>
          <p className="text-green-400">{"while true; do true; done"}</p>
        </div>
        <div className="bg-blue-500/20 border border-blue-500/50 p-3 rounded-lg text-sm">
          <p className="text-blue-400 font-semibold">👀 觀察點</p>
          <p className="text-slate-300">TARGETS: 15%/70% → 95%/70%　→　REPLICAS: 2 → 4（約 2 分鐘）</p>
        </div>
        <div className="bg-green-900/30 border border-green-700 p-3 rounded-lg text-sm">
          <p className="text-green-400 font-semibold">✅ Ctrl+C 停壓力後</p>
          <p className="text-slate-300">等 5 分鐘，觀察 Pod 自動縮容回 minReplicas=2</p>
        </div>
      </div>
    ),
    notes: `好，概念說完了，現在我們要實際看到 HPA 在壓力下自動擴容，這是今天最有視覺衝擊感的環節之一。準備好三個終端機視窗，我們同時開著，讓數字變化一目瞭然。

第一個終端機：跑 watch -n 2 kubectl get hpa -n demo-app。watch 指令會每 2 秒自動重新執行一次，你會看到一個持續更新的畫面。重點看 TARGETS 欄位，格式是「目前使用率 / 目標使用率」，比如 15%/70% 代表現在 CPU 平均使用率是 15%，目標是 70%，所以不需要擴容。還要看 REPLICAS 欄位，顯示目前 Pod 數量和最小最大值。

第二個終端機：跑 watch -n 2 kubectl get pods -n demo-app。這個讓你直接看到 Pod 清單和數量的變化。當 HPA 決定擴容，你會看到新的 Pod 出現、從 ContainerCreating 變成 Running，整個過程非常直觀。

第三個終端機：這是關鍵操作。先取得 Backend Pod 的名稱，然後 kubectl exec 進去，在容器裡跑一個無窮迴圈消耗 CPU。這個指令組合有點長，我會貼在群組裡，直接複製貼上就好。進到容器後跑 while true; do true; done，這個 Shell 迴圈不做任何有用的事，但會把一個 CPU 核心跑到 100%。

壓力製造後，耐心等待約 1-3 分鐘。首先你會看到 TARGETS 欄位的 CPU 使用率開始上升，從 15% 逐漸爬到 50%、70%、80%、甚至更高。當超過 70% 的目標閾值，HPA 的 controller 會計算「要多少個 Pod 才能把平均 CPU 壓回 70% 以下」，然後更新 Deployment 的 replicas 數量。這個計算公式是：目標副本數 = 現有副本數 × (目前使用率 / 目標使用率)。比如目前是 2 個 Pod，CPU 是 140%，目標是 70%，那目標副本數 = 2 × (140 / 70) = 4 個 Pod。

接著在第二個終端機，你會看到新的 backend-xxx Pod 出現，狀態是 ContainerCreating，然後變成 Running。同時在第一個終端機，REPLICAS 的數字會從 2 變成 3 或 4，TARGETS 的使用率會開始下降，因為負載被分散到更多 Pod 上了。

等你看到這個變化，在第三個終端機按 Ctrl+C 停掉無窮迴圈，然後 exit 離開容器。CPU 壓力消失後，TARGETS 的使用率會快速下降到接近 0%。但 Pod 不會馬上縮容！HPA 的 scale down 有一個預設的穩定化視窗，是 5 分鐘，這是為了避免流量短暫下降就縮容、然後流量再上來又要擴容的「抖動」問題。你可以等個 5-6 分鐘，觀察 REPLICAS 數字慢慢縮回 2。

這整個過程就是 HPA 的完整生命週期：偵測負載升高 → 計算目標副本數 → 觸發擴容 → 新 Pod 就緒接流量 → 負載降低 → 等待穩定 → 縮容回最小值。記住這個循環，它就是 HPA 的工作原理，面試被問到的時候，用這個流程回答準沒問題。`,
    duration: "9",
  },


  // ========== 實戰三：HPA + PDB ==========
  {
    title: "實戰演練三：HPA + PDB 高可用配置",
    subtitle: "讓應用程式在壓力下保持穩定",
    section: "實戰演練三",
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
            <p className="text-blue-400 font-bold text-lg mb-2">📈 HPA</p>
            <p className="text-slate-300 text-sm font-semibold">Horizontal Pod Autoscaler</p>
            <p className="text-slate-400 text-sm mt-2">根據 CPU/記憶體使用率，自動調整 Pod 數量</p>
            <div className="bg-slate-800 p-2 rounded mt-3 text-xs font-mono">
              <p className="text-green-400">minReplicas: 2</p>
              <p className="text-green-400">maxReplicas: 10</p>
              <p className="text-green-400">cpu.targetAverageUtilization: 70</p>
            </div>
          </div>
          <div className="bg-purple-900/30 border border-purple-700 p-4 rounded-lg">
            <p className="text-purple-400 font-bold text-lg mb-2">🛡️ PDB</p>
            <p className="text-slate-300 text-sm font-semibold">Pod Disruption Budget</p>
            <p className="text-slate-400 text-sm mt-2">升級或維護時，確保最少幾個 Pod 保持運行</p>
            <div className="bg-slate-800 p-2 rounded mt-3 text-xs font-mono">
              <p className="text-green-400">minAvailable: 1</p>
              <p className="text-slate-400">{"# 或 maxUnavailable: 1"}</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 建立 HPA（需要先有 metrics-server）</p>
          <p className="text-green-400">{"kubectl autoscale deployment backend \\"}</p>
          <p className="text-green-400">{"  --cpu-percent=70 --min=2 --max=10 -n demo-app"}</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg text-sm font-mono">
          <p className="text-slate-400 mb-2"># 建立 PDB</p>
          <p className="text-green-400">kubectl apply -f backend-pdb.yaml -n demo-app</p>
          <p className="text-green-400">kubectl get hpa,pdb -n demo-app</p>
        </div>
      </div>
    ),
    notes: `歡迎回來！精神好了嗎？我們繼續。第三場實戰演練是 HPA 加上 PDB 的高可用配置。這兩個資源可能是你在課程裡第一次聽到，但我跟你保證，它們是生產環境的必備武器，一旦你理解了它們的運作邏輯，你會發現少了它們根本就不敢把應用放上線。

讓我先說一個真實的故事。有個電商公司把他們的後端部署到 Kubernetes 上，一開始跑得很好。某天下午突然一個促銷活動開始，流量在 5 分鐘內暴增 10 倍。因為他們沒有設定 HPA，固定的 3 個 Pod 全部撐到 CPU 100%，response time 從 200ms 拉到 10 秒，最後服務開始返回 503 錯誤。促銷活動白白損失了幾十萬的訂單。如果他們有 HPA，Kubernetes 會在 CPU 超過閾值時自動擴展 Pod，把流量撐下來。這就是為什麼 HPA 不是可選的，是必須的。

HPA，Horizontal Pod Autoscaler，水平 Pod 自動擴縮容。「水平」的意思是增減 Pod 的數量（相對於「垂直」是增減單個 Pod 的 CPU/記憶體）。HPA 持續監控目標 Deployment 的資源使用率，當使用率超過設定的閾值，自動增加 Pod 數量；當使用率下降，再縮減 Pod 數量。這個監控數據來自 metrics-server，所以 HPA 的前提是叢集裡有 metrics-server 在運行。

設定 HPA 最簡單的方式是用 kubectl autoscale 指令：--cpu-percent=70 表示目標 CPU 使用率是 70%，也就是「維持平均 CPU 使用率在 70% 左右」；--min=2 表示最少 2 個 Pod，不管流量多低都不會縮到 0，保持最低可用性；--max=10 表示最多 10 個 Pod，不讓它無限擴張吃掉所有節點資源。

這裡有個概念要釐清：HPA 的 CPU 使用率是相對於 requests 的。如果你設 requests.cpu 是 500m，然後實際使用了 400m，使用率就是 80%，觸發擴容。所以 requests 設合理的值非常重要，設太低 HPA 會過度敏感，設太高 HPA 很難觸發。

做 HPA 之後，用 kubectl describe hpa backend -n demo-app 觀察它的狀態。看 Targets 欄位：格式是「current/target」，比如 45%/70% 代表現在 CPU 是 45%，目標是 70%，所以不需要擴容。如果你想看 HPA 自動擴容的效果，可以用 ab（Apache Benchmark）或 k6 對 Backend 打壓測，觀察 Pod 數量隨著 CPU 升高而增加。

現在說 PDB，Pod Disruption Budget，Pod 中斷預算。這個名字聽起來很複雜，但概念很簡單：在做計畫性中斷（drain 節點、升級叢集、滾動更新）的時候，我允許最多幾個 Pod 同時不可用？

想像你有 3 個 Backend Pod，你要升級節點，Kubernetes 需要把節點上的 Pod 驅逐走（evict）再升級。如果沒有 PDB，K8s 可能同時把這 3 個 Pod 全部驅逐，導致服務完全中斷。設定 PDB 的 minAvailable: 1，就是告訴 K8s：「這個 Deployment 至少要有 1 個 Pod 在運行，不管你在做什麼操作，都不能讓可用 Pod 數量低於 1。」K8s 在執行 drain 的時候會尊重這個約束，一次只驅逐不超過限制數量的 Pod。

PDB 有兩種寫法：minAvailable 設最少要有幾個 Pod 可用，或者 maxUnavailable 設最多允許幾個 Pod 不可用。這兩個是等價的，用哪個看你的習慣。推薦用 maxUnavailable: 1，意思是「滾動更新或維護時，最多允許 1 個 Pod 暫時不可用」，這樣即使有一個 Pod 在遷移，服務還是有其他 Pod 繼續提供服務。

動手時間：先用 kubectl autoscale 建立 HPA，再寫一個 backend-pdb.yaml 並 apply。PDB 的 YAML 很簡單：apiVersion 是 policy/v1（注意不同 K8s 版本的 apiVersion 不同），spec 裡設 selector（選到 backend 的 Pod）和 minAvailable 或 maxUnavailable。apply 完之後用 kubectl get hpa,pdb -n demo-app 一次看兩個資源的狀態。

最後驗證 PDB 有效的方式：kubectl drain 一個節點（如果你的叢集有多個節點的話），觀察它驅逐 Pod 的時候是否有遵守 PDB 的約束，不讓可用 Pod 數量低於 minAvailable。

HPA + PDB 是一對黃金搭檔：HPA 讓你的應用能彈性應對流量波動，PDB 讓你的維護操作不會影響服務可用性。這兩個一起設，才能說你的 Kubernetes 部署達到「生產就緒」的水準。

讓我說說如何驗證 HPA 真的有效。光設定好 HPA 不夠，你需要確認它在壓力下確實會觸發擴容。一個簡單的壓力測試方法：先在 Backend Pod 裡或任意一個 Pod 裡，執行一個無限迴圈消耗 CPU（while true; do true; done &），然後觀察 kubectl get hpa -n demo-app 的 TARGETS 欄位，看 CPU 使用率是否上升。當 CPU 超過你設定的 70% 閾值，HPA 應該會在 1-2 分鐘內增加 Pod 數量。你可以開兩個終端機視窗，一個跑 watch kubectl get hpa -n demo-app，另一個跑 watch kubectl get pods -n demo-app，同時觀察 HPA 的 REPLICAS 數字和 Pod 數量的變化，那個畫面非常有說服力。

在真實生產環境中，HPA 有幾個常見的陷阱要注意。第一個是「HPA 設好了但沒有反應」——最常見的原因是 metrics-server 沒有安裝或沒有正常運行。kubectl top pods -n demo-app，如果這個指令報錯說 metrics not available，就確定是 metrics-server 的問題。可以用 kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml 安裝（需要網路）。第二個陷阱是「HPA 快速擴容，但縮容太慢」——HPA 預設的縮容行為比較保守，因為縮容太激進會造成流量高峰時手忙腳亂。可以在 HPA spec 的 behavior 區塊設定 scaleDown 的策略，比如設定縮容前的穩定視窗（stabilizationWindowSeconds）。

關於 PDB 的進階用法：PDB 也可以用百分比來設定。比如 minAvailable: 50%，表示不管 Deployment 有幾個副本，至少要有 50% 保持可用。這在副本數量動態變化（比如 HPA 正在擴縮容）的時候特別有用，因為你的 PDB 不需要跟著 HPA 的 maxReplicas 一起調整。另外，PDB 只對「計畫性中斷」（voluntary disruption）有效，比如 kubectl drain、Deployment 升級、節點維護。它不能防止節點硬體故障（non-voluntary disruption）——節點突然掛掉，上面的 Pod 還是會消失。這是 PDB 的一個常見誤解，要澄清清楚。

我們再來做一個完整的驗證流程：先確認 HPA 和 PDB 都建立成功（kubectl get hpa,pdb -n demo-app）；然後模擬一個節點排水操作（如果你的叢集有多個節點，kubectl drain <node-name> --ignore-daemonsets），觀察 Kubernetes 是否尊重 PDB 的約束，不讓可用 Pod 數量低於 minAvailable；最後 kubectl uncordon <node-name> 讓節點恢復正常排程。這個完整流程走過一遍，你就對 HPA + PDB 的實際行為有了直觀的理解。在面試時被問到「如何做 Kubernetes 叢集的無停機升級」，這就是你的答案框架：Rolling Update + readinessProbe + PDB，三者缺一不可。

最後，關於選擇 HPA 的指標：我們今天用的是 CPU，這是最常見的選擇，但不一定是最好的選擇。對於 I/O 密集型的應用，CPU 使用率可能很低，但吞吐量已經到達瓶頸。對於這類應用，更適合用自定義指標（custom metrics）來觸發 HPA，比如 RPS（每秒請求數）、佇列長度、或者回應延遲。Kubernetes 支援透過 Custom Metrics API 和 External Metrics API 讓 HPA 根據任意指標擴縮容，配合 Prometheus Adapter 就可以把 Prometheus 收集的任何指標當作 HPA 的觸發條件。這是進階話題，大家有興趣可以課後研究。在結束這個環節之前，我想強調一個容易被忽略的點：HPA 的擴容不是瞬時的，從偵測到 CPU 超標到新 Pod 真正起來可以服務，中間有一段時間差——大概 1-3 分鐘（包括 HPA 的反應時間、Pod 的啟動時間、readinessProbe 的等待時間）。這意味著 HPA 適合應對「緩慢上升的流量」，但不適合應對「瞬間湧入的流量尖峰」（比如秒殺活動、直播帶貨開播瞬間）。對於可預期的高流量事件，最好提前手動擴容，等活動結束再讓 HPA 縮容回去。另外，也可以設定 HPA 的 scaleUp.stabilizationWindowSeconds 為更短的時間，讓它對流量上升更加敏感，在短暫的流量高峰時也能快速反應。這些細節就是從「會用 HPA」到「用好 HPA」的差距。

補充一個關於 HPA 和 cluster autoscaler 的協作方式：HPA 負責在現有節點上增加 Pod，但如果現有節點的資源已經不夠，新增的 Pod 會停在 Pending 狀態——這時候 cluster autoscaler 就會偵測到有 Pending 的 Pod，自動往雲端請求新增節點，讓新節點加入叢集後，那些 Pending 的 Pod 就能被排程上去。HPA 和 cluster autoscaler 的組合，讓你的應用可以在不事先預留資源的情況下，按需彈性擴展到幾乎無上限的規模。這就是雲原生架構最吸引人的特性之一：基礎設施跟著業務需求自動伸縮，不需要人工干預。`,
    duration: "30"
  },

  // ========== CI/CD：GitHub Actions 實例 ==========
  {
    title: "GitHub Actions CI/CD Workflow 實例",
    subtitle: "從 git push 到 K8s 自動更新的完整 YAML",
    section: "CI/CD 與 GitOps",
    content: (
      <div className="space-y-3">
        <div className="bg-slate-800 p-3 rounded-lg text-xs font-mono leading-relaxed">
          <p className="text-slate-400 mb-1"># .github/workflows/deploy.yml</p>
          <p className="text-yellow-400">on:</p>
          <p className="text-white">{"  push: { branches: [main] }"}</p>
          <p className="text-yellow-400 mt-1">jobs:</p>
          <p className="text-green-400">{"  test:"}</p>
          <p className="text-slate-300">{"    runs-on: ubuntu-latest"}</p>
          <p className="text-slate-300">{"    steps: [checkout, setup-node, npm ci, npm test]"}</p>
          <p className="text-green-400 mt-1">{"  build:"}</p>
          <p className="text-slate-300">{"    needs: test   # test 通過才執行"}</p>
          <p className="text-slate-300">{"    steps:"}</p>
          <p className="text-blue-300">{"      - docker/login-action  # 用 secrets 登入"}</p>
          <p className="text-blue-300">{"      - docker/build-push-action"}</p>
          <p className="text-slate-300">{"          tags: registry/app:${{ github.sha }}"}</p>
          <p className="text-green-400 mt-1">{"  update-config:"}</p>
          <p className="text-slate-300">{"    needs: build"}</p>
          <p className="text-slate-300">{"    steps:"}</p>
          <p className="text-blue-300">{"      - git clone config-repo"}</p>
          <p className="text-blue-300">{"      - sed -i 's/OLD_SHA/${{ github.sha }}/' deploy.yaml"}</p>
          <p className="text-blue-300">{"      - git commit -m 'deploy: ${{ github.sha }}'"}</p>
          <p className="text-blue-300">{"      - git push  # 觸發 ArgoCD 同步"}</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-xs">
          {[
            { label: "① test", color: "text-green-400", desc: "測試通過才能繼續" },
            { label: "② build", color: "text-blue-400", desc: "映像 tag = git SHA" },
            { label: "③ update-config", color: "text-purple-400", desc: "推 config → ArgoCD 同步" },
          ].map((s, i) => (
            <div key={i} className="bg-slate-800/50 p-2 rounded">
              <p className={`font-semibold ${s.color}`}>{s.label}</p>
              <p className="text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `讓我們看一個實際的 GitHub Actions workflow 文件，這是我在真實專案中簡化過的版本，每個部分我都會解釋清楚，讓你回去可以直接套用到自己的專案。

整個 workflow 文件分成三個 job：test、build、update-config，它們之間有依賴關係，用 needs 關鍵字來表達。需要特別強調的是：依賴鏈是硬性的——test 失敗，build 根本不會啟動；build 失敗，update-config 也不會跑。這個設計確保了壞掉的程式碼永遠不會進入部署流程，CI 的價值就在這裡。

第一個 job，test：步驟很直白——checkout 程式碼、設定執行環境（actions/setup-node 設定 Node.js 版本）、安裝依賴、跑測試。有一個細節值得注意：安裝依賴用 npm ci 而不是 npm install。ci 模式更嚴格，它嚴格按照 package-lock.json 安裝依賴，不允許版本漂移，確保每次 CI 環境都和你本機一模一樣。這個小細節可以避免「本機可以跑，CI 卻壞了」的玄學問題。

第二個 job，build：最核心的是 docker/build-push-action，這個 GitHub Action 幫你做三件事：build 映像、打 tag、push 到 Container Registry。映像 tag 用 github.sha，也就是觸發這次 workflow 的 git commit 的 SHA 值，長得像 a3f8c21。用 SHA 作為 tag 的好處是唯一性和可追蹤性——你在 Kubernetes 裡看到 app:a3f8c21，馬上可以在 GitHub 上找到對應的 commit，知道是誰在什麼時候改了什麼。如果出了問題，審計路徑非常清晰。登入 Registry 的帳號密碼一定要放在 GitHub repository 的 Secrets 裡，用 secrets.DOCKER_TOKEN 引用，絕對不能 hard-code 在 workflow 文件裡。

第三個 job，update-config：這是 GitOps 閉環的關鍵步驟。它做的事情是：clone 放 Kubernetes YAML 的 config repository、用 sed 指令把 Deployment YAML 裡的舊映像 tag（OLD_SHA）替換成新的 git SHA、git commit 這個變更、然後 push 回 config repo。這個 push 就是觸發器——ArgoCD 偵測到 config repo 有新 commit，比較 Git 定義的狀態和叢集目前的狀態，發現映像 tag 不一樣，就自動 kubectl apply 把 Deployment 更新到新映像。整個 CI/CD 閉環完成，開發者只需要 git push，幾分鐘後新版本就在生產環境運行了。

幾個常見的坑要避免：第一，update-config job 需要對 config repo 有 push 權限，要設定一個有足夠權限的 Personal Access Token 或 Deploy Key；第二，如果你的 Docker 映像需要支援多個 CPU 架構（amd64 和 arm64），要在 build-push-action 裡加 platforms: linux/amd64,linux/arm64，不然你在 x86 機器上 build 的映像在 ARM 節點上跑不起來；第三，CI 失敗要設好通知（GitHub Actions 支援傳送 Slack 通知），讓整個團隊第一時間知道 main branch 壞了，而不是等到有人要部署的時候才發現。這份 workflow 範例是個很好的起點，大家可以直接 clone 下來改。`,
    duration: "11",
  },


  // ========== CI/CD 與 GitOps ==========
  {
    title: "CI/CD 與 GitOps 概念",
    subtitle: "讓程式碼自動從 Git 流向 Kubernetes",
    section: "CI/CD 與 GitOps",
    content: (
      <div className="space-y-5">
        <div className="flex items-center gap-3 text-sm flex-wrap">
          {[
            { label: "開發者 Push", icon: "👨‍💻" },
            { label: "GitHub", icon: "🐙" },
            { label: "Actions 觸發", icon: "⚡" },
            { label: "Build Image", icon: "🐳" },
            { label: "Push to Registry", icon: "📦" },
            { label: "ArgoCD 偵測", icon: "🔍" },
            { label: "K8s 更新", icon: "☸️" },
          ].map((s, i, arr) => (
            <div key={i} className="flex items-center gap-2">
              <div className="bg-slate-800 px-3 py-2 rounded-lg text-center">
                <p className="text-xl">{s.icon}</p>
                <p className="text-slate-400 text-xs">{s.label}</p>
              </div>
              {i < arr.length - 1 && <span className="text-k8s-blue">→</span>}
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-semibold mb-2">⚡ GitHub Actions（CI 部分）</p>
            <ul className="text-slate-300 space-y-1">
              <li>• Push 到 main 觸發 workflow</li>
              <li>• 執行測試、Build Docker Image</li>
              <li>• Push 到 Container Registry</li>
              <li>• 更新 Helm values / kustomize</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-blue-400 font-semibold mb-2">🔄 ArgoCD（CD 部分）</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 持續監聽 Git 儲存庫</li>
              <li>• 偵測到 YAML 變更就自動 sync</li>
              <li>• 視覺化顯示 K8s 資源狀態</li>
              <li>• 支援回滾到任意 Git commit</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `接下來我們看 CI/CD 和 GitOps 的概念。這一段比較偏概念和架構介紹，不做完整實作，但了解這個流程對你的工程師職涯非常重要。在面試中，說「我用過 GitOps + ArgoCD」幾乎是現代後端和 DevOps 職位的加分標配。

先說說為什麼需要 CI/CD。在沒有 CI/CD 的團隊裡，發布流程大概是這樣：開發者本機 build 一個映像，手動 push 到 Registry，SSH 到伺服器，手動跑一堆 kubectl 指令，然後祈禱沒出問題。這個流程有很多問題：容易出錯（手動操作就是容易出錯）、沒有測試保護（沒跑測試就上線的事情不罕見）、難以追蹤（誰在什麼時候 deploy 了什麼版本？）、難以回滾（要回到上個版本需要手動操作）。CI/CD 就是要把這個流程自動化、標準化、可重複、可審計。

CI，Continuous Integration（持續整合），指的是每次開發者 push 程式碼，自動跑一套測試和驗證流程，確保新的程式碼沒有破壞現有功能。CD，Continuous Delivery 或 Continuous Deployment（持續交付/持續部署），指的是把驗證通過的程式碼自動部署到環境中。

GitOps 是一種具體的 CD 實踐方式：把所有基礎設施的期望狀態，包括 K8s 的 YAML、Helm values、Kustomize 設定，全部用 Git 版本控制。你想改一個 Deployment 的副本數？不是手動 kubectl edit，而是修改 Git 裡的 YAML，提一個 PR，讓同事 review，merge 之後，工具自動幫你 apply 到叢集。Git 成為所有變更的唯一真相來源（single source of truth）。好處是：所有變更都有完整的歷史記錄（Git commit）、可以 code review（提 PR）、可以隨時回滾到任意 commit。

現在看完整的 CI/CD + GitOps 流程：

第一步，開發者在 feature branch 開發完功能，開一個 PR 到 main 分支。PR 一提出，GitHub Actions 就被觸發，自動跑 unit test 和 integration test。測試通過才能被 merge。這就是 CI 的核心——每次整合都要通過測試把關。

第二步，PR 被 merge 到 main 之後，GitHub Actions 再次被觸發，這次跑的是 CD workflow：build Docker Image，Tag 通常是 git commit SHA（這樣可以精確追蹤哪個 commit 對應哪個映像），然後 push 到 Container Registry（GCR、ECR、Docker Hub 都行）。

第三步，CI workflow 做完映像之後，還要更新 config repository 裡的 YAML。你通常會有兩個 repo：一個是 app repo（放程式碼），一個是 config repo（放 K8s YAML）。CI 會自動修改 config repo 裡的映像 tag（從舊 SHA 改成新 SHA），並提交一個 commit。這個 commit 是變更的「事實記錄」——任何人都能看到「這次部署是把映像從 abc123 換成 def456」。

第四步，ArgoCD 登場。ArgoCD 是一個跑在 K8s 叢集裡的 GitOps 工具，它持續監聽 config repo，大約每 3 分鐘同步一次（或者用 webhook 立即觸發）。一旦偵測到 config repo 有新的 commit，ArgoCD 就比較「Git 裡定義的期望狀態」和「叢集裡的實際狀態」，如果不一樣，就自動執行 kubectl apply 讓叢集狀態和 Git 同步。這就是 GitOps 的核心：Git is the source of truth，叢集的狀態要和 Git 保持一致。

ArgoCD 有一個很棒的 Web UI，可以視覺化地看到每個應用的部署狀態：哪些資源是健康的（綠燈）、哪些有問題（紅燈）、目前 deploy 的是哪個版本、和 Git 有沒有 out of sync。回滾也非常簡單：在 UI 上點「History」，找到你要的 commit，點「Rollback」，ArgoCD 就把叢集的狀態回退到那個時間點。再也不需要手動找舊的 YAML 去 apply。

這套流程建立之後，開發者的工作流程就很乾淨：寫程式碼、開 PR、merge、等幾分鐘，新版本就自動上線了。不需要任何人手動 deploy，不需要任何人記得跑哪些指令。而且每次部署都有完整的 audit trail，出了問題一眼就能看到是哪個 commit 引起的。這是現代工程團隊的正確打開方式。

讓我說一下 GitHub Actions workflow 的基本結構，讓大家有個具體的印象。一個典型的 CI workflow YAML 大概長這樣：最頂層的 on 區塊定義觸發條件（push to main、或者 pull_request）；jobs 區塊裡定義一個或多個 job，每個 job 在一個獨立的 runner 環境裡跑（通常是 ubuntu-latest）；job 裡面的 steps 是具體的操作，每個 step 可以是 uses（使用一個預建的 Action，比如 actions/checkout 取代碼、docker/build-push-action 建映像）或者 run（直接跑 shell 指令）。典型的 CI job 的 steps 大概是：checkout → setup tools → run tests → build image → push image → update config repo。理解了這個結構，你就能看懂大部分 GitHub Actions 的 workflow 文件。

 ArgoCD 的設定也值得說得更具體一些。把 ArgoCD 安裝到叢集之後（kubectl create namespace argocd && kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml），你需要在 ArgoCD 裡建立一個 Application 資源，告訴它：「我要監聽這個 Git repository 的這個路徑，把裡面的 YAML sync 到叢集的這個命名空間」。ArgoCD Application 的 spec 裡主要有兩個部分：source（Git repository URL、分支、路徑）和 destination（叢集 API server URL、命名空間）。設定好之後，ArgoCD 就會自動開始同步。

關於 GitOps 的一個重要原則：叢集的狀態應該完全由 Git 決定，任何手動的 kubectl apply 或 kubectl edit 都應該避免。為什麼？因為如果你手動修改了叢集狀態，ArgoCD 會把它偵測為「和 Git 不同步」，然後根據設定的同步策略，可能會把你的手動修改覆蓋回 Git 的狀態。這在剛開始用 GitOps 的人身上是很常見的困惑——「我明明 kubectl edit 改了設定，怎麼過幾分鐘又變回去了？」。答案就是 ArgoCD 的 auto-sync 把它改回來了。正確的做法是修改 Git repo 裡的 YAML，提 PR，merge，讓 ArgoCD 自動同步。

最後說一個大家可能有的疑問：我的公司沒有用 GitHub Actions，用的是 Jenkins 或 GitLab CI，這套 GitOps 流程還適用嗎？當然適用！GitOps 的核心是「Git 是唯一的真相來源，工具負責把 Git 狀態同步到叢集」，和你用什麼 CI 工具無關。Jenkins、GitLab CI、Tekton、CircleCI，只要 CI 工具能在 pipeline 執行完成後更新 config repo 的 YAML（image tag），ArgoCD 就能把它同步到叢集。這是 GitOps 的優雅之處：CI 和 CD 工具解耦，可以各自選擇最適合的工具。最後補充一個常見的誤解：GitOps 不是「所有東西都放到 Git 裡就好了」，它要求的是「所有叢集狀態的變更都要透過 Git 走」。如果你有手動建立的資源（kubectl create 沒有存 YAML）、或者有用 helm upgrade 直接升級而沒有更新 Git，這些都是 GitOps 的反模式。一個嚴格的 GitOps 實踐，甚至會把 ArgoCD 設定成 read-only 模式（禁止任何人直接 kubectl apply 到叢集，所有變更必須走 Git PR 流程），這樣就從根本上杜絕了 drift 的可能性。雖然聽起來很嚴格，但對於需要合規審計的企業環境，這種強制性反而是優點。`,
    duration: "25"
  },

  // ========== 生產環境最佳實踐 ==========
  {
    title: "生產環境最佳實踐",
    subtitle: "從「能動」到「放心上線」",
    section: "最佳實踐",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-green-400 font-semibold mb-2">✅ 資源管理</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 永遠設定 requests & limits</li>
              <li>• 用 LimitRange 設定命名空間預設值</li>
              <li>• 用 ResourceQuota 控制命名空間總量</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-blue-400 font-semibold mb-2">🏥 健康檢查</p>
            <ul className="text-slate-300 space-y-1">
              <li>• livenessProbe：容器是否還活著</li>
              <li>• readinessProbe：是否可以接收流量</li>
              <li>• startupProbe：啟動時間較長的應用</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-yellow-400 font-semibold mb-2">🔒 安全性</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 禁止容器以 root 身份執行</li>
              <li>• 設定 readOnlyRootFilesystem</li>
              <li>• 最小權限 RBAC，不用 cluster-admin</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-purple-400 font-semibold mb-2">🏷️ 標籤策略</p>
            <ul className="text-slate-300 space-y-1">
              <li>• app, version, env, team 標準標籤</li>
              <li>• 用標籤驅動 Service 選擇器</li>
              <li>• 方便 kubectl 篩選和監控聚合</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-red-400 font-semibold mb-2">🚀 部署策略</p>
            <ul className="text-slate-300 space-y-1">
              <li>• RollingUpdate + maxUnavailable: 0</li>
              <li>• 搭配 readinessProbe 確保零停機</li>
              <li>• 重要服務考慮 Blue/Green 部署</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-orange-400 font-semibold mb-2">📊 可觀測性</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 結構化 JSON log（方便查詢）</li>
              <li>• 暴露 /metrics 端點</li>
              <li>• 設定告警規則（SLO 導向）</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `我們把這七天學到的技術，整理成六個「生產環境最佳實踐」的類別。注意我說的不是「最好有」，而是「必須有」——這些是你要把應用真正上線到生產環境、能讓你晚上安心睡覺的最低標準。

第一個：資源管理。永遠設定 requests 和 limits，這件事的重要性怎麼強調都不為過。沒有 requests，Kubernetes 的調度器無法做出正確的節點選擇，可能把 Pod 調度到已經負載很高的節點上，造成資源爭搶。沒有 limits，一個有 memory leak 的容器可以無限吃記憶體，最終把整個節點的記憶體吃光，影響同一個節點上所有其他應用——這在生產環境是非常嚴重的爆炸半徑（blast radius）。

更進一步，用 LimitRange 在命名空間層級設定預設的 requests 和 limits，這樣即使開發者忘記設，也有一個安全的預設值。用 ResourceQuota 限制整個命名空間能使用的 CPU 和記憶體總量，避免某個命名空間的爆炸影響整個叢集。

第二個：健康檢查。三個 probe 各有用途，缺一不可。livenessProbe 讓 K8s 知道「容器還活著嗎？」——如果 liveness check 失敗，K8s 會殺掉並重啟容器，自動恢復死鎖或無響應的狀態。readinessProbe 讓 K8s 知道「容器準備好接流量了嗎？」——如果 readiness check 失敗，K8s 把這個 Pod 從 Service 的 Endpoints 移除，流量就不會打到還沒準備好的 Pod 上。這是零停機部署的關鍵：新 Pod 的 readinessProbe 通過之前，流量不會切過去。startupProbe 是給啟動時間較長的應用（比如 JVM 應用，啟動可能要 60 秒），避免在啟動期間被 liveness 誤判為掛掉而重啟，造成永遠起不來的循環。

第三個：安全性。容器不要用 root 執行是基本原則——如果容器被攻擊者突破，root 身份意味著攻擊者有更大的破壞能力。在 securityContext 裡設 runAsNonRoot: true 和 runAsUser: 1000（非 root 用戶）。readOnlyRootFilesystem: true 讓容器的根檔案系統只讀，應用程式無法在容器內寫入任意路徑，減少惡意程式碼的活動空間。RBAC 最小權限原則：每個 ServiceAccount 只給它需要的最小權限，絕對不要圖省事給 cluster-admin。cluster-admin 等於叢集裡的超級用戶，一旦這個 ServiceAccount 被攻擊者拿到，整個叢集都完蛋了。

第四個：標籤策略。統一的標籤規範看起來像是「整齊」的問題，但實際上對管理效率影響很大。建議至少要有這幾個標籤：app（應用名稱，比如 backend）、version（版本，比如 1.2.3 或 git SHA）、env（環境，比如 production、staging）、team（負責的團隊）。有了這些標籤，你可以用 kubectl get pods -l team=platform 快速找到某個團隊所有的 Pod；Prometheus 可以用 team 標籤聚合告警；Service 的 selector 用 app 和 env 標籤精確選擇正確的 Pod。

第五個：部署策略。RollingUpdate 加上 maxUnavailable: 0 是零停機部署的基礎。maxUnavailable: 0 表示在滾動更新過程中，不允許任何一個 Pod 變成不可用，這樣在任何時刻都有 100% 的副本在提供服務。但只有這個還不夠，還要搭配 readinessProbe——新 Pod 通過 readiness check 之後，才算「可用」，K8s 才會繼續關掉下一個舊 Pod。這樣才能真正確保「舊 Pod 退役之前，新 Pod 已經準備好接手」。對於需要更嚴格零停機保證的服務，可以考慮 Blue/Green 部署：同時跑新舊兩個版本，用 Service 的 selector 瞬間切換流量，確認新版本 OK 之後再關掉舊版本。

第六個：可觀測性。Log 一定要結構化成 JSON 格式，不要用純文字。結構化 Log 的好處是機器可以解析，可以用 jq 過濾、用 Loki 查詢、用 ELK 搜索。你的應用程式一定要暴露 /metrics 端點，讓 Prometheus 可以抓取指標。告警規則要基於 SLO（Service Level Objective）而不是隨便設一個閾值——比如「99.9% 的請求在 500ms 內完成」，告警就根據這個目標設計，而不是「CPU 超過 80% 就告警」這種意義模糊的規則。

我想補充幾個具體的 YAML 範例，讓這些最佳實踐不只是理念，而是你可以直接拿去用的設定。關於 securityContext，一個完整的設定大概長這樣：在 pod level 設 runAsNonRoot: true、runAsUser: 1000、fsGroup: 1000（fsGroup 讓 volume 的檔案屬於這個 group，讓非 root 用戶可以讀寫）；在 container level 設 readOnlyRootFilesystem: true、allowPrivilegeEscalation: false、capabilities.drop: ["ALL"]（丟棄所有 Linux capabilities）。這些設定結合在一起，讓你的容器在最小化的權限下運行，即使被攻破，攻擊者的活動空間也非常有限。

關於健康檢查的具體設定，有幾個參數要理解：initialDelaySeconds 是容器啟動後多久才開始執行第一次 probe，給應用程式一點啟動時間；periodSeconds 是 probe 的執行頻率；failureThreshold 是連續幾次失敗後才觸發動作（kill 或 remove from endpoints）；successThreshold 是連續幾次成功後才算恢復（只對 readiness 有意義）。調對這幾個參數，可以避免「應用程式剛啟動就被 liveness 殺掉」或「應用程式已經掛了但 readiness 還沒偵測到，流量繼續打進來」這兩種極端。

最後一個重要的實踐：Kubernetes YAML 的版本控管。所有的 YAML 檔案都應該在 Git 裡，任何對叢集的變更都應該透過 PR 進行，而不是直接 kubectl edit。這樣的好處是：每次變更都有記錄（git log）、可以 code review（PR 流程）、可以快速回滾（git revert）。當你的 YAML 加上 Git 版本控管，再加上我們之前說的 GitOps 流程，就形成了一個閉環：所有變更都在 Git 裡，ArgoCD 負責把 Git 狀態同步到叢集，誰也不需要直接操作叢集。這就是成熟的 Kubernetes 工程團隊的工作方式。所以今天學的六個最佳實踐不是孤立的，它們是一個整體：資源管理確保穩定性、健康檢查確保可用性、安全配置確保安全性、標籤策略確保可管理性、部署策略確保無停機、可觀測性確保可診斷性。缺少任何一個，系統都有明顯的弱點。把這六個都做好，你的 Kubernetes 部署才真正稱得上「生產就緒」。`,
    duration: "21"
  },

  // ========== 課程總結：七天回顧 ==========
  {
    title: "七天學習路徑回顧",
    subtitle: "你的 Kubernetes 成長地圖",
    section: "課程總結",
    content: (
      <div className="space-y-5">
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-k8s-blue/30"></div>
          {[
            { label: "Linux & Shell", desc: "命令列操作、檔案系統、使用者權限", icon: "🐧" },
            { label: "Docker & 容器化", desc: "映像建構、容器生命週期、Registry", icon: "🐳" },
            { label: "K8s 核心資源", desc: "Pod、Deployment、Service、Namespace", icon: "☸️" },
            { label: "設定與儲存", desc: "ConfigMap、Secret、PV/PVC、StorageClass", icon: "📦" },
            { label: "網路與安全", desc: "Ingress、NetworkPolicy、RBAC、PSS", icon: "🔒" },
            { label: "可觀測性", desc: "Prometheus、Grafana、Loki、告警", icon: "📊" },
            { label: "整合實戰", desc: "三層部署、故障排查、HPA/PDB、GitOps", icon: "🏆" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 mb-3 relative">
              <div className="w-12 h-12 bg-k8s-blue/20 border border-k8s-blue rounded-full flex items-center justify-center text-xl z-10 flex-shrink-0">
                {item.icon}
              </div>
              <div className="bg-slate-800/50 p-3 rounded-lg flex-1">
                <p className="font-semibold text-white">{item.label}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `讓我帶大家把七天的學習路徑完整地回顧一遍。這不只是一個知識清單，而是一段成長的旅程。我想讓你們意識到你們走了多遠的路。

七天前，這個房間裡（或這個螢幕前），很多人是第一次用 SSH 連上遠端伺服器的。我記得第一天有同學問我 ls 和 dir 的差別，有人找不到 home 目錄在哪，有人打 sudo 的時候忘記空格。這些都是真實發生過的，沒有任何嘲笑的意思，因為每個工程師都是從這裡開始的。

Linux 和 Shell：這是地基，是一切的前提。命令列不只是一個工具，它是你和系統溝通的語言。grep、awk、sed、pipe，這些在第一天聽起來像咒語的東西，現在你們每次進 Pod 裡除錯都會用到。掌握了 Shell，你才能真正理解系統在做什麼。

Docker 和容器化：這是整個現代雲原生世界的基礎。容器化的思維——把應用程式和所有依賴打包，讓它在任何環境都能一致地運行——改變了軟體交付的方式。你現在知道怎麼寫 Dockerfile，知道 build 和 run 的差別，知道什麼是 Layer Cache，知道映像和容器的關係。這些知識讓你能夠理解為什麼 Kubernetes 管理的是「Pod 裡的容器」而不是直接管理「伺服器上的程序」。

Kubernetes 核心資源：Pod、Deployment、Service 這三個是一切的骨架。Pod 是最小部署單位，Deployment 管理 Pod 的生命週期和滾動更新，Service 提供穩定的網路端點。你現在應該不需要看文件就能寫出一個基本的 Deployment YAML，知道 selector 和 labels 的匹配關係，知道 replicas 和 rolling update 的運作方式。

設定與儲存：ConfigMap 和 Secret 讓應用程式的設定和機密資訊與程式碼分離，讓同一份映像可以在開發、測試、生產三個環境用不同的設定跑起來。PVC 和 PV 解決了「容器是無狀態的，但資料庫需要持久化」的矛盾，讓 PostgreSQL、MySQL、Redis 這類有狀態的應用也能跑在 Kubernetes 上。

網路與安全：Ingress 是應用程式對外的大門，讓你不需要為每個服務都準備一個 LoadBalancer IP，省錢又省事。NetworkPolicy 是 Pod 層面的防火牆，讓你精確控制哪些 Pod 可以和哪些 Pod 通訊，大幅縮小攻擊面。RBAC 讓叢集的存取控制從「每個人都有 kubectl 就有所有權限」變成「按最小權限原則，每個角色只能做它需要做的事」。

可觀測性：Prometheus 收集指標、Grafana 畫圖、Loki 聚合 log、AlertManager 發告警。把這四個工具串在一起，你的系統就從一個「黑盒子」變成「透明的玻璃」，每個服務的健康狀態、每個 API 的延遲分布、每個 Pod 的資源消耗，都能一覽無遺。

整合實戰：今天下午的所有演練，就是把上面六天的知識點全部融合在一個真實場景裡。三層式部署、故障排查、HPA 和 PDB、CI/CD 和 GitOps、最佳實踐清單，這些不是獨立的知識點，而是一個系統的不同面向。掌握了今天的整合視角，你對 Kubernetes 的理解就從「會用一些指令」進化到「理解整個系統的設計哲學」。

這個差距，是你七天前和七天後的你的最大不同。

我在帶過很多批學員之後，觀察到一件事：真正能把課程知識轉化為工作能力的人，有一個共同的特點——他們在課程結束後的兩個禮拜內，找了一個實際的場景動手做了一遍。不是重新上課，不是又看了一遍文件，而是找一個屬於自己的需求，不管是個人的 side project、公司的一個小服務、還是自己的部落格，就把它 Kubernetes 化。這個過程很可能會卡關很多次，但每一次卡關和解決，都比看十遍教材更有價值。

所以我給每個人一個回家作業：在接下來的兩個禮拜，找一個你真正在意的應用程式（哪怕是一個最簡單的 Hello World Web App），把它完整地部署到 Kubernetes 上——建 Namespace、寫 Deployment、設 Service、加 Ingress、設定健康檢查和資源限制。如果你完成了這個作業，你可以在課程 Line 群組貼出你的 kubectl get all 結果，我很樂意給你 review 和建議。這個小小的挑戰，是從「學了 Kubernetes」到「會用 Kubernetes」的最後一步。我期待在群組裡看到大家的成果！讓我再說一個關於學習 Kubernetes 的心態建議。Kubernetes 的生態系統非常龐大，除了核心 K8s 之外，還有 Helm、ArgoCD、Istio、Knative、Tekton、Velero、Crossplane……一個新手看到這個清單可能會感到不知所措。我的建議是：不要試圖一次學完所有東西，先把核心的 Kubernetes 概念（Pod、Deployment、Service、Ingress、ConfigMap、Secret、PV/PVC、RBAC、HPA、PDB）徹底搞懂並熟練，這是基礎；然後根據你的工作需求，有方向性地學習生態系工具。如果你的公司有 Helm charts，就深入學 Helm；如果要做 GitOps，就專注 ArgoCD；如果要做流量精細控制，才考慮 Istio。聚焦比廣撒網更有效。這七天課程給了你這個「基礎」，接下來根據需求一點一點往外擴展，每一步都會比你想像的更輕鬆，因為你已經有了紮實的基礎。`,
    duration: "15"
  },

  // ========== 接下來的路 ==========
  {
    title: "結業之後，繼續前進",
    subtitle: "你的 Kubernetes 學習才剛開始",
    section: "課程總結",
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-semibold mb-2">📚 建議繼續學習</p>
            <ul className="text-slate-300 space-y-1">
              <li>• CKA / CKAD 認證</li>
              <li>• Helm Charts 深入</li>
              <li>• Service Mesh（Istio/Linkerd）</li>
              <li>• Kustomize / GitOps 實作</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-blue-400 font-semibold mb-2">🛠️ 動手練習</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 用 kind / minikube 在本機練習</li>
              <li>• 把自己的 Side Project 容器化</li>
              <li>• 貢獻 CNCF 開源專案</li>
              <li>• 寫技術部落格記錄學習</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-semibold mb-2">👥 社群資源</p>
            <ul className="text-slate-300 space-y-1">
              <li>• CNCF 官方文件 (kubernetes.io)</li>
              <li>• CNCF Slack 頻道</li>
              <li>• KubeCon 會議演講</li>
              <li>• 課程 Line 群持續交流</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-purple-400 font-semibold mb-2">🎯 短期目標設定</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 一個月內把課程實作做一遍</li>
              <li>• 三個月內考取 CKAD</li>
              <li>• 六個月內在工作中導入 K8s</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `課程即將結束，但你的 Kubernetes 學習旅程才正要開始。我想跟大家分享幾個具體的後續方向，讓這七天學到的東西能夠繼續積累，而不是三個禮拜後就都忘了。

首先說認證。CKA（Certified Kubernetes Administrator）和 CKAD（Certified Kubernetes Application Developer）是業界公認最有含金量的 Kubernetes 認證，來自 CNCF 基金會。這兩個考試都是純實作，在 2 小時的限制時間內完成一系列 kubectl 操作任務，沒有選擇題。CKAD 比較偏應用開發者，考的是我們這七天學的大部分內容：Pod、Deployment、Service、ConfigMap、Secret、Ingress、Health Probes、資源管理。建議先考 CKAD，因為它的範圍和這門課高度重疊，考過之後對你的履歷是很強的加分。CKA 更偏管理員，涵蓋叢集建置、etcd 備份、節點管理等進階內容。有了這七天的基礎，專心備考 1-2 個月應該可以通過 CKAD。

進階技術方面，有幾個方向值得深入：Helm 是 Kubernetes 的套件管理工具，讓你把一個應用的所有 K8s YAML 打包成一個可重用的 Chart，用 values.yaml 來做多環境的設定差異化。很多公司的生產環境都是用 Helm 管理應用，所以這個技能很實用。Service Mesh（Istio 或 Linkerd）是進階的流量管理工具，能做 mTLS（服務間的加密通訊）、流量可觀測性、流量分割（A/B 測試、Canary 部署）等，是大型微服務架構的標配。Kustomize 讓你不需要 Helm 就能管理多環境的 K8s 設定，是原生的 K8s 工具，kubectl 內建支援。

動手練習方面，最重要的建議：**不要停止動手**。光看文件或影片學到的，會在三個禮拜內忘得一乾二淨。在本機用 kind（Kubernetes in Docker）或 minikube 建一個練習叢集，今晚就可以裝好開始玩。把你自己有的 Side Project 容器化，然後用今天學的三層架構部署上去。這是讓知識真正「長進你身體裡」的最有效方式。

如果你有在寫技術部落格，非常鼓勵你把學到的東西寫下來。寫作是一種深度學習——你以為你懂了，但當你試著用文字解釋給別人聽，才會發現哪些地方其實沒懂透。而且寫出來的東西在面試時也是很好的作品集。

社群方面，kubernetes.io 的官方文件品質非常高，英文很好讀，幾乎所有問題都能在上面找到答案。CNCF 的 Slack 有各種主題的頻道，遇到卡關可以在上面問。每年兩次的 KubeCon 大會（北美和歐洲）的演講都會公開在 YouTube，是了解業界最新趨勢的好方式。課程的 Line 群組我會繼續維持，大家有問題歡迎在上面討論。

最後給大家一個具體的目標建議：一個月內，把今天的三層式部署演練在自己的本機重做一遍，不看筆記；三個月內，報名並通過 CKAD 考試；六個月內，找機會在工作上把 Kubernetes 用起來。有了方向，學習就有動力。加油！`,
    duration: "9"
  },

  // ========== 畢業典禮 ==========
  {
    title: "🎓 畢業典禮",
    subtitle: "七天的努力，值得被記念",
    section: "畢業典禮",
    content: (
      <div className="text-center space-y-8">
        <div className="text-8xl">🎓</div>
        <div className="space-y-4">
          <p className="text-3xl font-bold text-k8s-blue">恭喜完成課程！</p>
          <p className="text-xl text-slate-300">你從 Linux 新手，成長為能夠</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-left max-w-lg mx-auto">
          {[
            "部署完整三層式應用到 Kubernetes",
            "排查 Pod 故障並找到根本原因",
            "設定自動擴縮容 (HPA) 和高可用",
            "使用 RBAC 管理叢集存取權限",
            "設定 Ingress 暴露服務給外部",
            "用 Prometheus/Grafana 監控系統",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 bg-green-900/20 border border-green-700/50 p-2 rounded">
              <span className="text-green-400 text-base">✓</span>
              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-lg italic">「你已經不是初學者了。」</p>
      </div>
    ),
    notes: `現在是正式的畢業典禮環節。讓我們暫停一下，給這個時刻應有的重量。

七天前，你們坐在這裡，很多人是帶著忐忑的心情來的——「Kubernetes 這麼複雜，我真的學得會嗎？」、「這些英文縮寫我連發音都不確定」、「我連 Docker 都不太懂，直接跳到 K8s 會不會太跳」。這些擔心我理解，因為我第一次接觸 K8s 的時候也是這個感覺。

七天之後，看看你們做到了什麼。你能夠用 kubectl 從零開始建立一個完整的三層式 Web 應用，資料庫、後端、前端，全部跑在 Kubernetes 上，外面用 Ingress 開放存取。你遇到了 CrashLoopBackOff，不再驚慌，知道要 describe 看 Events，用 --previous 看崩潰前的 log，根據錯誤訊息找到根因。你設定了 HPA 讓應用在流量高峰自動擴展，設定了 PDB 讓維護操作不會中斷服務。你理解了 CI/CD 和 GitOps 的流程，知道現代工程團隊是怎麼把程式碼從 git push 一路自動化部署到 Kubernetes 的。你知道哪些生產環境的最佳實踐是必做的，不只是「能動」而是「能放心上線」。

這些能力，在七天前你們完全沒有，或者只有模糊的印象。這個轉變是真實的，是你們花了七天認真學習、認真動手操作換來的。每次演練遇到卡關還是繼續往前，每次出現奇怪的錯誤訊息還是翻文件找答案，這些都是你們自己努力的結果。

我想說一件事：學技術最難的不是理解概念，而是在不確定的時候繼續動手。很多人在遇到不懂的東西時會退縮，說「等我搞清楚了再試」，然後永遠沒有試。你們沒有，你們在還不確定的情況下，還是把指令打出去，看看會發生什麼，然後根據結果調整。這種學習態度，比任何知識點都更有價值，它會讓你在 Kubernetes 之後的所有技術學習裡都受益。

所以請給自己一個真心的掌聲。你已經不是初學者了。從今天開始，你是一個有 Kubernetes 實戰經驗的工程師，你有資格在履歷上寫上這個技能，有資格在技術討論中分享你的觀點，有資格繼續往更深、更廣的方向探索。恭喜你們！

我想說最後一件事。技術會一直進步，Kubernetes 本身也在不斷演化——三年前還沒有 Gateway API，五年前 Containerd 還不是主流，十年前 Kubernetes 根本還不存在。技術棧會變，但你今天建立起來的能力是不會消失的：閱讀技術文件的能力、動手試驗的勇氣、看到錯誤訊息不慌張去找根因的習慣、把複雜系統拆解成可管理模組的思維。這些是跨技術、跨時代的核心工程師素養。只要你保持學習的習慣、保持動手的慣性，不管技術怎麼演化，你都能快速跟上。這七天，只是你漫長技術旅程的一個節點，而這個節點讓你站上了一個更高的平台。往前走，加油！

在我們做 Q&A 之前，有一件事我想請大家做：填寫課後問卷。我知道大家課程結束都很想趕快休息或回家，但這個問卷的回饋對我改進課程非常重要。你哪個部分覺得講太快了？哪個實戰演練最有幫助？有什麼你希望課程增加或減少的主題？這些回饋會直接影響下一期學員的學習體驗。填寫大約需要 5 分鐘，請大家幫個忙，我非常感謝。

另外，請大家加入課程的 Line 群組（如果還沒加的話）。我會在群組裡分享一些課後補充資源，比如課程 YAML 範例的 GitHub 連結、推薦的學習資源清單、以及我覺得值得關注的 Kubernetes 相關新聞和工具。群組也是大家互相交流、分享遇到的問題和解決方案的地方。我也會定期在群組裡回答問題，你們不用擔心課後就聯絡不到我。好，現在我們開始 Q&A 環節，有任何問題請舉手！`,
    duration: "10"
  },

  // ========== Q&A ==========
  {
    title: "Q & A",
    subtitle: "任何問題，現在都是好時機",
    section: "畢業典禮",
    content: (
      <div className="space-y-8">
        <div className="text-center text-8xl">🙋</div>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">可以問的主題</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 課程任何概念的深入說明</li>
              <li>• 實際工作場景的建議</li>
              <li>• 技術選型的考量</li>
              <li>• 職涯方向的建議</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">課後聯繫方式</p>
            <ul className="text-slate-300 space-y-1">
              <li>💬 課程 Line 群組</li>
              <li>📧 講師 Email</li>
              <li>🐙 GitHub（課程範例 Repo）</li>
              <li>📝 課後問卷（請填寫！）</li>
            </ul>
          </div>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg text-center">
          <p className="text-yellow-400 font-semibold">📝 離開前，請填寫課後問卷</p>
          <p className="text-yellow-200 text-sm mt-1">你的回饋是我改進課程的最大動力，大約 5 分鐘</p>
        </div>
      </div>
    ),
    notes: `最後的 Q&A 時間，也是這門課最後的一個環節。大家可以問任何問題，真的是任何問題。不用擔心問題太基礎或太進階，不用擔心問題「跑題」，只要是你心裡有疑惑或想深入了解的，都可以提出來。這 45 分鐘是屬於你們的。

讓我先說幾句開場白。這七天的課程，我們從 Linux 基礎操作一路走到了 Kubernetes 的安全與監控，涵蓋了非常廣泛的內容。各位能夠堅持到最後，真的非常不容易。

在這個 Q&A 環節，我想先拋幾個問題給大家思考：學完這門課，你最想馬上在工作中應用的技術是什麼？你覺得哪個部分最難理解，需要再花時間研究？你有沒有遇到什麼問題，在課程中沒有得到滿意的解答？

如果沒有人立刻發問，沒關係，我先說幾個常見的後續問題。很多人學完 K8s 之後的第一個問題是：我怎麼在公司真正導入 K8s？答案是循序漸進。不要一開始就把所有服務都遷移到 K8s，先選一個非核心、低風險的服務開始，熟悉整個流程之後再擴展。第二個常見問題是：Kubernetes 和 Docker Swarm 哪個比較好？現實是 K8s 已經成為業界標準，大型生產環境幾乎都用 K8s，但如果你的服務規模很小，Docker Compose 其實就夠了。

關於繼續學習的路線，我建議大家接下來可以考慮 CKA 認證（Certified Kubernetes Administrator），這個認證在業界非常有公信力。準備過程本身也是很好的學習機會。另外，Helm 也是值得深入學習的工具，它讓 K8s 應用的部署和管理更加標準化。

感謝各位這七天的陪伴和參與，希望這門課對大家有實質的幫助。課後如果有任何問題，歡迎透過提供的聯絡方式繼續討論。祝大家在 K8s 的學習和工作道路上一切順利！

讓我分享一些我在帶課程的過程中，學員最常問的問題，也許可以給還沒想到問什麼的同學一些啟發。

第一個常見問題：「Kubernetes 適合小公司或者小型專案嗎？」這是個很好的問題，答案是「不一定」。Kubernetes 的學習曲線陡峭、運維複雜度高，對於只有一兩個服務的小型應用，可能 Docker Compose + 一台 VPS 就完全夠用，引入 K8s 反而是過度工程。一般的建議是：如果你的服務需要高可用、自動擴縮容、複雜的流量路由、多環境部署管理，或者你的工程師規模已經讓「誰來管 deploy」變成一個問題，那 K8s 的好處才會超過它帶來的複雜度。如果你只有 2 個工程師和 1 個服務，先別急著上 K8s。

第二個常見問題：「我在公司想導入 Kubernetes，但主管覺得現有的 VM 方式已經夠用，怎麼說服他？」這個問題沒有通用答案，但有幾個角度可以試：一是從成本角度，K8s 的 bin packing（資源填充）能力可以讓伺服器利用率從 30-40% 提升到 60-70%，幫公司省 VM 費用；二是從可靠性角度，K8s 的自動重啟、健康檢查、滾動更新讓 MTTR（平均修復時間）大幅縮短；三是從工程師生產力角度，標準化的部署流程讓新人上手更快，GitOps 讓部署記錄可審計。但最有力的說服，往往是一個小的 proof of concept——找一個非核心的服務，先在 K8s 上跑起來，讓數據說話。

第三個常見問題：「Kubernetes 和 Serverless（比如 AWS Lambda）有什麼差別，什麼時候選哪個？」Serverless 的優勢是「按用量付費 + 極致簡單」，你不需要管理任何伺服器或容器，程式碼 deploy 上去就能跑，不用的時候不收費。Kubernetes 的優勢是「控制力 + 靈活性 + 可移植性」，你可以跑任何容器化的應用，有完整的網路和資源控制，可以跑在任何雲或本地環境。對於需要長時間運行的服務（API server、資料庫），K8s 更合適；對於事件驅動的短時間任務（圖片壓縮、傳送郵件），Serverless 更合適。很多公司是混合使用的：核心服務跑 K8s，邊緣任務用 Lambda。

第四個常見問題：「我剛接手一個 Kubernetes 叢集，什麼都不熟，從哪裡開始？」我的建議清單：第一，先搞懂叢集有哪些 namespace（kubectl get ns），有哪些 deployment 在跑（kubectl get deploy -A）；第二，找到監控系統（Grafana dashboard），看懂各個 namespace 的 CPU 和記憶體使用狀況；第三，找到 CI/CD pipeline 的設定，理解一次 deploy 是怎麼走的；第四，找兩三個最重要的服務，仔細讀它們的 YAML，理解每個設定的用意；第五，主動製造一個低風險的變更（比如改一個設定值），走完整個 deploy 流程，驗證你理解了整個鏈路。這五個步驟，是快速接手一個不熟悉的 K8s 叢集的有效路徑。

第五個常見問題：「Kubernetes 有哪些安全漏洞是要特別注意的？」幾個最重要的安全點：第一，不要讓 Kubernetes API Server 對公網開放，應該透過 VPN 或 bastion host 存取；第二，定期輪換 Service Account token 和 kubeconfig credential；第三，開啟 Audit Logging，記錄所有對 API Server 的操作，以便事後審計；第四，掃描容器映像的已知漏洞（Trivy、Clair 等工具），在 CI pipeline 裡加入映像掃描步驟；第五，使用 Admission Controller（比如 OPA/Gatekeeper）來強制執行安全策略，比如禁止 privileged container、禁止 hostNetwork、禁止使用特定 namespace 的映像。安全是一個持續的工作，不是設定一次就完事的。

第六個常見問題：「如果我想準備 CKA 考試，大概要花多少時間，有什麼建議？」CKA 的範圍比這門課更廣，涵蓋叢集建置（kubeadm）、etcd 備份與還原、叢集升級、網路設定等。有 Kubernetes 實際使用經驗的人，通常 2-3 個月的專注備考可以通過。建議的備考策略：買一個 Killer.sh 的模擬考試環境，反覆練習（他們的模擬題比正式考題難，但考過模擬題，正式考題就不會太難）；把 kubectl 的 cheat sheet 背熟，考試是允許查 kubernetes.io 文件的，但查文件要花時間，熟悉常用指令和 YAML 結構可以節省大量時間；設定一個本地的練習環境（kind 或 minikube），每天花 1-2 小時動手練習，比看視頻有效多了。

好，還有什麼問題嗎？這個時間是你們的，不要客氣，有任何技術問題、職涯問題、選型問題，都可以提出來。我會在這裡到 17:00，一個問題都不想跳過。今天這門課能走到這一步，是每個人共同努力的結果，謝謝大家！

讓我再深入回答幾個進階問題，趁這個時間把大家可能心裡有但還沒問出口的疑惑一起解決。

關於 Kubernetes 升級的問題：很多人問「叢集 K8s 版本升級怎麼做，會停機嗎？」。K8s 的升級分兩個層面：control plane（API Server、etcd、Controller Manager、Scheduler）的升級，和 worker node 的升級。用 kubeadm 管理的叢集，可以用 kubeadm upgrade apply 升級 control plane，這個過程 control plane 會短暫不可用（幾分鐘），但 worker node 上跑的應用通常不受影響（除非應用對 API Server 有直接依賴）。Worker node 的升級通常是逐個 drain → 升級 kubelet → uncordon，配合 PDB 可以做到對應用完全無感的滾動升級。如果是用雲端託管的 K8s（GKE、EKS、AKS），升級流程更簡單，通常是在控制台點幾個按鈕，雲端提供商幫你處理所有的複雜度。

關於 Kubernetes 的 etcd 備份：etcd 是 K8s 的核心資料庫，儲存所有 K8s 資源的狀態。如果 etcd 資料損毀或丟失，整個叢集的狀態就消失了。所以 etcd 的定期備份是絕對必要的。備份指令是 etcdctl snapshot save，配合 cronjob 定期執行，把備份存到 S3 或 GCS 等物件儲存。如果你用的是雲端託管的 K8s，雲端提供商通常會幫你自動備份 etcd，但要確認備份策略和 RPO（Recovery Point Objective）是否滿足你的要求。

關於多叢集管理：當一個公司有多個 K8s 叢集（比如 dev、staging、production，或者多個地區），如何統一管理這些叢集？有幾個工具值得了解：kubectx 和 kubens 讓你快速切換 kubeconfig context；Lens 是一個 K8s 的 GUI 管理工具，可以同時連接多個叢集；ArgoCD 支援 multi-cluster 管理，可以從一個 ArgoCD 控制多個目標叢集；Rancher 是更完整的多叢集管理平台。多叢集管理是一個進階話題，但隨著業務規模擴大，你早晚會面對。

關於服務網格（Service Mesh）：有同學可能聽過 Istio 或 Linkerd，問說「這跟 Kubernetes 有什麼關係，我需要學嗎？」Service Mesh 是在 K8s 之上的一個額外層，主要解決微服務之間的通訊問題：mTLS（服務間加密）、流量可觀測性（詳細的服務間延遲和錯誤率追蹤）、流量管控（A/B 測試、Canary 部署、熔斷器）。對於服務數量少於 10 個的系統，通常不需要 Service Mesh；服務數量多、安全要求高、需要精細流量控制的場景，Service Mesh 才真正發揮價值。不要過早引入，但了解它解決什麼問題是必要的。

關於 Kubernetes 的費用控制：在雲端跑 K8s，節點成本往往是最大的支出。幾個省錢的技巧：第一，設定 Cluster Autoscaler，讓叢集根據 Pod 的需求自動新增或移除節點，空閒的節點不付錢；第二，使用 Spot/Preemptible 節點（價格比 on-demand 便宜 60-90%，但可能被雲端業者收回），配合 PDB 和多副本確保服務可用性；第三，用 VPA（Vertical Pod Autoscaler）分析應用的實際資源使用，幫你找出 requests 設太高的地方，釋放浪費的資源；第四，設定 namespace 的 ResourceQuota，防止某個團隊意外把節點資源全用光。

問題到這裡大家還有什麼想問的嗎？關於技術的、關於職涯的、關於這門課的，都可以。我在這裡陪大家到 17:00，有問題就說，別客氣！

如果大家都沒有問題，我再主動分享幾個我覺得工程師在使用 Kubernetes 時容易忽略的「軟技能」。第一個是「YAML 審查能力」。在大型團隊裡，K8s 的 YAML 也需要 code review，就像程式碼一樣。能夠看出「這個 Deployment 忘了設 liveness probe」、「這個 readinessProbe 的 initialDelaySeconds 太短，應用還沒起來就被踢出 endpoints」、「這個 resource limits 設得太寬鬆，有安全風險」——這種審查能力是高階工程師的標誌。養成這個能力的方式很簡單：多看、多寫、多問「為什麼這樣設？」。第二個是「事後分析（Postmortem）能力」。當生產環境出了問題，不是修好就算了，而是要寫一份事後分析報告：描述事件的時間線、根本原因、影響範圍、修復過程、以及防止再次發生的改進措施。Postmortem 不是為了追責，而是為了讓整個團隊從這次事件學習，防止相同的問題再次發生。這個習慣在 SRE 文化中非常重要，Google 的 Site Reliability Engineering（SRE）書籍對此有非常好的討論，強烈推薦大家看。第三個是「容量規劃（Capacity Planning）能力」。不是等到節點資源不夠了才想到要加節點，而是根據歷史使用趨勢、業務成長預測，提前規劃資源需求。結合 Prometheus 的歷史數據和 predict_linear 函數，可以預測「按照目前的成長速度，多少天後磁碟會滿？多少天後 CPU 會達到瓶頸？」，讓你提前行動而不是被動應付。

在我們正式結束之前，我想再一次感謝大家這七天的耐心和認真。教學是一種雙向的學習，每次學員的提問都讓我更深入地思考某個概念；每次看到學員在演練中遇到問題並解決問題時臉上的表情，都讓我感受到教學的意義。謝謝你們讓這七天充滿活力和意義。祝大家在接下來的技術旅程中，勇敢探索，持續成長。再見！

如果還有時間，我想多分享幾個關於 Kubernetes 學習資源的建議。書單方面，「Kubernetes in Action」（作者 Marko Luksa）是我見過最詳細、最有深度的 K8s 書籍，適合系統性深入學習；「Site Reliability Engineering」（Google SRE 書）不是純粹講 K8s，但對理解生產環境的思維框架非常重要；「The DevOps Handbook」讓你理解 DevOps 文化的背景，對理解為什麼需要 CI/CD 和 GitOps 很有幫助。線上課程方面，Kodekloud 有非常好的 CKA、CKAD 備考課程，課程內有互動式的終端機環境，不需要自己準備叢集就能練習。YouTube 頻道方面，TechWorld with Nana 的 K8s 相關影片品質很高，講解清晰，很適合補充視覺化的理解。

最後，我想說一件關於「技術社群」的事。學技術不是一個人的旅程。加入社群、參加 Meetup（台灣有 Kubernetes Taiwan User Group）、在 Twitter/X 上追蹤 K8s 相關的工程師和項目、參與開源項目的 Issue 討論，這些都是讓你持續成長、保持在技術前沿的方式。學技術最快的方法之一，是和比你厲害的人在一起，觀察他們怎麼思考問題、怎麼找解答、怎麼評估技術選型。社群是最容易接觸到這些人的地方。希望大家不只把這七天的學習帶回家，也把「持續學習、參與社群」的習慣帶回家。這才是長期在技術道路上走得遠的真正秘訣。

在最後這幾分鐘，我想給每個人留下一個「行動清單」，讓今天的結束是下一個開始的起點。這週內請做三件事：第一，把課程的 GitHub Repo clone 下來，把所有的 YAML 範例都讀一遍，對不懂的設定加上你自己的注釋，這個帶有你個人理解的 Repo 比任何筆記本都有價值；第二，在你的電腦上裝好 kind 或 minikube，建立你的第一個本地 K8s 叢集，哪怕今晚只是 kubectl get nodes 看到節點 Ready，也是一個很棒的開始；第三，決定你的下一個目標是什麼——考 CKAD？把公司的某個服務容器化？在部落格上寫一篇 Kubernetes 入門文章？把目標具體寫下來，告訴你的朋友或貼在 Line 群，讓承諾讓你繼續行動。學習這件事，從來都不是看完一門課就結束的，它是一個持續行動的旅程。你已經有了很棒的起點，接下來的每一步都由你自己來走。我非常期待看到大家的成長，也期待未來在某個技術社群、某個開源專案的 PR、或者某場 KubeCon 的講台上，再次看到大家的身影。感謝你們，再見！

在現場 Q&A 的最後，我想留幾分鐘讓大家彼此認識一下。你旁邊的同學可能是你未來的同事、技術夥伴、或者一個你在深夜排查 Bug 時可以問問題的朋友。工程師的世界比你想像的小——很多時候，某個技術問題的解決方案就藏在你認識的某個人的腦子裡。建立這個人際網絡，是參加線下課程最珍貴、也是最容易被忽略的收穫。來，和你旁邊的同學交換一下聯絡方式吧！這是今天最後一個「作業」，簡單但重要。好，時間差不多了，感謝大家今天下午的投入和配合，希望這七天的課程是你 Kubernetes 旅程一個很好的起點，我們 Line 群見！記得填問卷、加群組、和旁邊同學交換聯絡方式，這三件事都很重要，缺一不可。

【預期難搞學員問題 — 第七堂下午】

Q：所有團隊都該導入 Kubernetes 嗎？

A：不該一體適用。服務規模小、變更頻率低、運維人力有限時，K8s 可能過度工程。選型應以問題規模與維護能力決定。

Q：公司現在是 VM 架構，遷移到 K8s 的第一步是什麼？

A：先選低風險服務做試點，而不是全面遷移。建立最小成功案例後，再複製流程與治理規範。路徑比速度重要。

Q：託管 K8s 和自建 K8s 怎麼選？

A：若核心競爭力不在控制平面維運，多數情境優先託管。自建只在法規、客製或成本模型有明確優勢時才合理。

Q：面試常說要有 K8s 經驗，企業真正看重的是什麼？

A：重點通常不是背指令，而是你是否有真實故障處理與交付經驗。能說清楚一次事故的診斷與改進，比背 API 更有說服力。

Q：如果我是新進工程師，前 90 天該怎麼補齊 K8s 能力？

A：先建立叢集盤點、發布流程、監控告警、回滾演練四件事。先把日常運維主線跑通，再深入效能與安全進階。

Q：主管只看成本，怎麼說服他投資雲原生治理？

A：不要只談技術，要談可量化結果，例如故障時間下降、交付速度提升、資源利用率改善。管理層通常對可衡量收益最有感。

Q：CKA、CKAD、CKS 應該先考哪張？

A：多數人先 CKA 打底，再依職務走 CKAD 或 CKS。若你偏應用交付，CKAD 可先；若偏平台安全，CKS 放在 CKA 後最順。

Q：課程結束後，怎麼避免學完又忘？

A：把學習轉成固定節奏：每週實作、每月一次故障演練、每季整理一篇復盤。知識只有進入實際交付循環，才會變成長期能力。`,
    duration: "45"
  },
]
