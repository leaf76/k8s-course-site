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
  {
    title: "Day 7：安全與監控",
    subtitle: "讓你的 Kubernetes 叢集固若金湯",
    section: "開場",
    content: (
      <div className="space-y-6">
        <div className="text-center py-2">
          <p className="text-5xl mb-3">🛡️</p>
          <p className="text-3xl font-bold text-k8s-blue mb-2">安全是企業的核心需求</p>
          <p className="text-xl text-slate-300">七天課程的最終章，今天你將成為真正的 K8s 工程師</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-3xl mb-2">🔐</p>
            <p className="text-red-400 font-semibold">RBAC</p>
            <p className="text-slate-400 text-sm">身份與權限</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-3xl mb-2">📊</p>
            <p className="text-green-400 font-semibold">監控</p>
            <p className="text-slate-400 text-sm">Prometheus + Grafana</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-3xl mb-2">📝</p>
            <p className="text-green-400 font-semibold">日誌</p>
            <p className="text-slate-400 text-sm">EFK Stack</p>
          </div>
        </div>
        <div className="bg-yellow-400/10 border border-yellow-400/30 p-3 rounded-lg">
          <p className="text-yellow-400 text-center">🏆 學完今天，你就具備部署生產級別 K8s 叢集的完整能力！</p>
        </div>
      </div>
    ),
    notes: `各位同學早安！今天是我們七天密集課程的最後一天，首先我要給大家一個最大的掌聲！能夠從第一天堅持到第七天，這真的非常非常不容易。七天前，也許有些同學連 Linux 的基本指令還不太熟悉，ls 和 cd 都還在摸索；但現在，你們已經能夠部署 Kubernetes 叢集、建立 Deployment、設定 Service，甚至管理 ConfigMap、Secret 和 PersistentVolume 了。這樣紮實的進步，值得你們感到驕傲！

今天的主題是「安全與監控」。我知道有些同學可能覺得這些話題比較枯燥，不像部署應用程式那麼有成就感。但我要告訴大家，安全和監控才是企業生產環境最最最重視的兩件事！你在面試的時候，面試官問你 K8s，如果你答不出安全設定和監控方案，他可能就會懷疑你是否真的有生產環境的經驗。

讓我跟大家講一個真實故事。2020 年，有一家矽谷新創公司，他們的 K8s Dashboard 直接暴露在公網上，沒有設任何認證，因為開發者覺得「開發環境嘛，安全可以暫時放一邊」。結果有一天，他們的 AWS 帳單從每月一萬美金衝到了十萬美金！他們花了好幾個小時才發現，是駭客透過那個沒有保護的 Dashboard 進入叢集，跑了大量挖礦程式。更諷刺的是，這個「開發環境」叢集跟生產環境共用同一個 AWS 帳戶，所以駭客等於直接進入了生產系統！

這個故事告訴我們：安全不是「等有時間再說」的事，而是從一開始就要建立的基礎。K8s 本身設計非常安全，但如果你不去設定，就等於把大門敞開。

今天早上課程安排如下：RBAC 權限管理（40分鐘）、Pod Security（25分鐘）、Network Policy（20分鐘）、休息（15分鐘）、監控基礎（25分鐘）、日誌管理（20分鐘）、課程總結與 CKA 認證建議（15分鐘）。好，讓我們開始今天的最後一段精彩旅程！

在正式開始之前，我想跟大家分享一下今天學完之後你能做到什麼。學完 RBAC，你可以設計一套完整的存取控制策略，讓不同的團隊成員和自動化工具只擁有他們需要的最小權限；學完 Pod Security，你可以讓你的容器在最安全的設定下運行，大幅降低被攻擊的風險；學完 Network Policy，你可以實現叢集內部的網路隔離，就算有一個服務被攻陷，攻擊者也無法在叢集內部自由移動；學完 Prometheus 和 Grafana，你可以建立一個完整的監控系統，隨時掌握叢集和應用程式的健康狀態；學完 EFK Stack，你可以建立集中化的日誌系統，讓問題排查效率大幅提升。

這些技能，都是一個真正能在生產環境獨當一面的 K8s 工程師必須具備的能力。今天學完之後，你就具備了這些能力的基礎。接下來還需要大量的實踐來鞏固，但起點已經建立了，接下來就是不斷地做、不斷地踩坑、不斷地成長。祝大家今天學習順利，讓我們開始吧！

在我們開始之前，我想先做個小的互動問答。在座的同學，有沒有人上週在工作上實際使用過 K8s？舉手讓我看看。（等待）很好！對於沒有舉手的同學，今天之後你就會有信心開始在工作中嘗試了。K8s 的學習曲線確實比較陡，但只要方法對、基礎扎實，進步是非常快的。我們七天課程的設計，就是要讓你在最短的時間內，建立最紮實的基礎。

所以今天請大家把握這最後的機會，全神貫注，把每一個概念都內化。這七天的內容是你未來在雲端和 DevOps 領域發展的重要基礎，投資在學習上的時間，一定會有豐厚的回報！

記住，學習 K8s 是一段旅程，不是一個終點。今天我們把這段旅程的基礎建設得非常紮實，接下來就靠你自己不斷地往前走。加油！`,
    duration: "10"
  },
  {
    title: "前六天學習旅程回顧",
    subtitle: "從 Linux 到 K8s 的完整進化路徑",
    section: "開場",
    content: (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          {[
            { day: "Day 1", emoji: "🐧", title: "Linux 基礎", desc: "指令、檔案系統、網路" },
            { day: "Day 2", emoji: "🐳", title: "Docker 基礎", desc: "容器化概念、映像、Volume" },
            { day: "Day 3", emoji: "🐳", title: "Docker 進階", desc: "Dockerfile、Compose" },
            { day: "Day 4", emoji: "☸️", title: "K8s 基礎", desc: "架構、Pod、Deployment" },
            { day: "Day 5", emoji: "⚙️", title: "工作負載與服務", desc: "StatefulSet、Ingress" },
            { day: "Day 6", emoji: "🗄️", title: "組態與儲存", desc: "ConfigMap、Secret、PV" },
          ].map((item) => (
            <div key={item.day} className="bg-slate-800/50 p-3 rounded-lg">
              <p className="text-slate-400 text-xs">{item.day}</p>
              <p className="text-white font-semibold">{item.emoji} {item.title}</p>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-red-400/10 border border-red-400/30 p-3 rounded-lg">
          <p className="text-red-400 font-semibold text-center">Day 7 🛡️ 安全與監控 ← 你在這裡！</p>
        </div>
      </div>
    ),
    notes: `好，讓我們花幾分鐘快速回顧這六天走過的旅程。

第一天，我們從 Linux 基礎開始。Linux 是整個現代雲端架構的地基，不管是 Docker 還是 K8s，底層都跑在 Linux 上。我們學了基本指令、檔案系統結構、程序管理，以及最重要的網路概念。當時有些同學問「這跟 K8s 有什麼關係？」，相信現在你們一定明白了，Linux 知識讓你在排除 K8s 問題時事半功倍。

第二天和第三天，我們進入了 Docker 的世界。容器化是整個現代 DevOps 的基礎思維，我們學會了建立容器映像、管理 Volume、寫 Dockerfile，以及用 Docker Compose 管理多容器應用程式。Docker 讓我們理解了「不可變基礎設施」的概念，這個概念在 K8s 裡被發揮得淋漓盡致。

第四天，我們正式進入 Kubernetes 的世界！這一天是整個課程的轉折點。我們理解了 K8s 架構，知道了 Control Plane 和 Worker Node 的分工，學會了 Pod、Deployment、ReplicaSet 的關係，第一次用 kubectl 指令真正部署了應用程式。

第五天，我們深入工作負載，學習了 StatefulSet（有狀態應用）、DaemonSet（每節點一個 Pod）、以及 Ingress（HTTP 路由）。這些知識讓我們能處理更複雜的生產場景。

第六天，我們學了組態和儲存，包括 ConfigMap、Secret、PV 和 PVC。學完這些，我們的應用程式才真正達到了「生產就緒」的狀態。

今天，第七天，我們要學安全和監控。這是讓 K8s 叢集從「能跑」升級到「企業級」的最後一塊拼圖！

讓我幫大家畫一條學習脈絡：RBAC 安全設定需要理解 namespace 的概念（第四天）；Pod Security Context 建立在容器技術的理解之上（第二、三天）；Network Policy 需要理解 Pod 的標籤系統（第四天）；監控的 Prometheus 用到了 DaemonSet 和 ConfigMap（第五、六天）；日誌管理的 Fluent Bit 也是 DaemonSet 部署、掛載 HostPath Volume（第五、六天）。你看，每一個今天要學的主題，都跟前六天的某個概念有直接的連結！

我特別想說說第五天學的 DaemonSet，今天在日誌管理那個章節你就會發現，Fluent Bit 正是用 DaemonSet 部署的——因為我們需要在每個節點上都跑一個 Fluent Bit 收集日誌。這就是 DaemonSet 設計出來的目的，現在看來是不是特別清晰？學習有時候就是這樣，前面學的東西，要等到後面遇到實際場景才能真正「點亮」。

還有第六天的 Secret，今天在 RBAC 那個章節，我們會提到 default ServiceAccount 的 Token 其實就是以 Secret 的形式存放在叢集裡的。理解了這一點，你就能更深刻地理解為什麼要限制 Pod 對 Secret 的讀取權限，因為 Secret 裡面可能有非常敏感的認證資訊。

所以，前六天的學習不是孤立的知識點，而是相互連結的知識網路。今天的課程，就是這張網路的最後一塊。學完今天，你就真的能把整個 Kubernetes 的技術棧，從最底層的 Linux 到最上層的安全和可觀測性，連成一個完整的圖像。

記得要持續複習前六天的內容，安全和監控建立在這些基礎之上！帶著這樣的視角，我們繼續看今天的內容！`,
    duration: "5"
  },
  {
    title: "RBAC：K8s 的門禁系統",
    subtitle: "Role-Based Access Control 最小權限原則",
    section: "RBAC 權限管理",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-bold text-lg mb-2">什麼是 RBAC？</p>
          <p className="text-slate-300">Role-Based Access Control：根據「角色」決定「誰能做什麼」</p>
          <p className="text-slate-400 text-sm mt-2">核心原則：最小權限原則（Principle of Least Privilege）</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-semibold mb-2">✅ 正確做法</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• 只給必要的權限</li>
              <li>• 為每個應用建立專屬 SA</li>
              <li>• 定期審查權限設定</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-red-400 font-semibold mb-2">❌ 常見錯誤</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• 給所有人 cluster-admin</li>
              <li>• SA 綁定過大的權限</li>
              <li>• 忽略 default SA 的風險</li>
            </ul>
          </div>
        </div>
        <div className="bg-red-400/10 border border-red-400/30 p-3 rounded-lg">
          <p className="text-red-400 font-semibold text-sm">⚠️ 真實案例：Tesla 2018 年因 K8s Dashboard 未設認證被入侵，大量 EC2 資源被用於挖礦</p>
        </div>
      </div>
    ),
    notes: `現在我們進入今天早上最重要的主題：RBAC！

RBAC 全名是 Role-Based Access Control，中文叫「基於角色的存取控制」。這個概念不是 K8s 發明的，是軟體安全領域非常成熟的設計模式。簡單說，就是根據「你是誰」（角色）來決定「你能做什麼」（權限）。

我用大家都熟悉的場景解釋：你在公司上班，公司有不同的門禁系統。CEO 可以進所有辦公室；HR 部門的人可以進 HR 區域，但不能進財務室；工程師可以進技術部門，但不能進董事會；訪客只能在大廳活動。這就是 RBAC 的核心精神：根據「角色」決定能進入哪些「資源」。

在 K8s 裡同樣的邏輯：某個服務帳戶可以讀取特定命名空間的 Pod；某個 CI/CD 工具可以部署 Deployment 但不能刪除 namespace；某個監控工具只能讀取資源狀態但不能修改。

RBAC 的核心原則叫「最小權限原則」（Principle of Least Privilege）：每個身份，只給它完成工作所需的最小權限，不多也不少。這個原則的重要性在於：如果一個帳號被攻擊者拿到了，攻擊者能做的破壞就只限於這個帳號的權限範圍，而不是整個系統。

讓我給大家講一個非常有名的案例。2018 年，特斯拉的 AWS 環境被駭客入侵。駭客怎麼進去的？他們找到了特斯拉的 K8s 叢集，這個叢集的管理 console 沒有密碼保護，直接暴露在公網上。駭客進去之後，發現裡面有 AWS 的存取金鑰，然後利用這些金鑰在特斯拉的 AWS 帳戶裡大量創建 EC2 實例來挖礦。特斯拉說，幸好有設定監控機制，才能在損失擴大前發現問題。但如果當初有設 RBAC，K8s 的 Pod 就不會有存取 AWS API 的權限，駭客就算進去也拿不到金鑰。

這個故事的教訓是：不要以為你的系統不會被攻擊。只要連到網路的系統，就有被攻擊的可能。你的責任是讓攻擊者就算進來了，也做不了什麼。RBAC 就是這樣一層防護。

還有一個常見錯誤：很多開發環境為了方便，會給所有人或所有 ServiceAccount 綁定 cluster-admin 最高權限。這在開發時圖方便，但如果帶到生產環境，或者配置被洩漏，後果不堪設想。這就像把公司所有辦公室的萬能鑰匙發給每個人，包括實習生、訪客和外包廠商。請記住：cluster-admin 只給真正需要的人，而且要有正當理由！

講完了背景故事，我們來看 K8s 裡的 RBAC 具體是怎麼工作的。在 K8s 裡，所有的操作都要通過 API Server。不管是 kubectl get pods，還是你的應用程式呼叫 K8s API 讀取 ConfigMap，都要通過 API Server。API Server 在收到請求時，會做三件事：

第一，Authentication（認證）：確認「你是誰」。K8s 支援多種認證方式：Service Account Token（叢集內部的應用程式使用）、X.509 客戶端憑證（管理員和 kubectl 使用）、Bearer Token、OpenID Connect（整合外部 Identity Provider 如 Google、GitHub）等。

第二，Authorization（授權）：確認「你能做什麼」。RBAC 就在這個階段工作。API Server 會查看你的身份對應的 Role 和 RoleBinding，判斷你是否有權限執行這個操作。如果沒有，就返回 403 Forbidden 錯誤。

第三，Admission Control（准入控制）：進行額外的驗證和修改。Pod Security Standards 就是在這個階段工作的。

理解了這個三層架構，你就能更清楚地知道 RBAC 在整個 K8s 安全體系中的位置。

記住，RBAC 是 K8s 安全的第一道防線，設計好了能讓叢集安全性大幅提升。最好的習慣是：有疑問就查 kubectl auth can-i，確認了再繼續！`,
    duration: "11"
  },
  {
    title: "RBAC 五大核心物件",
    subtitle: "理解這五個物件，RBAC 就通了",
    section: "RBAC 權限管理",
    content: (
      <div className="space-y-3">
        {[
          { name: "ServiceAccount", color: "text-blue-400 bg-blue-500/20", desc: "應用程式的「身份證」", detail: "K8s 內的程序用來識別身份，每個 Pod 都有一個" },
          { name: "Role", color: "text-green-400 bg-green-500/20", desc: "命名空間內的「權限清單」", detail: "定義在某個 namespace 內，可對哪些資源做哪些操作" },
          { name: "ClusterRole", color: "text-yellow-400 bg-yellow-500/20", desc: "叢集範圍的「權限清單」", detail: "不限命名空間，適用叢集資源（如 Node、PV）" },
          { name: "RoleBinding", color: "text-red-400 bg-red-500/20", desc: "把身份綁定到命名空間權限", detail: "在某個 namespace 內，把 SA 和 Role/ClusterRole 連接起來" },
          { name: "ClusterRoleBinding", color: "text-purple-400 bg-purple-500/20", desc: "把身份綁定到叢集權限", detail: "在整個叢集範圍內，把 SA 和 ClusterRole 連接起來" },
        ].map((item) => (
          <div key={item.name} className="bg-slate-800/50 p-3 rounded-lg flex items-start gap-3">
            <span className={`${item.color} px-2 py-1 rounded text-xs font-mono whitespace-nowrap`}>{item.name}</span>
            <div>
              <p className="text-white text-sm font-semibold">{item.desc}</p>
              <p className="text-slate-400 text-xs">{item.detail}</p>
            </div>
          </div>
        ))}
        <div className="bg-k8s-blue/10 border border-k8s-blue/30 p-3 rounded-lg">
          <p className="text-k8s-blue text-sm text-center">SA → RoleBinding → Role（誰 → 橋樑 → 能做什麼）</p>
        </div>
      </div>
    ),
    notes: `好，現在我們來認識 RBAC 的五個核心物件。這五個物件是 RBAC 的完整拼圖，理解了它們的關係，RBAC 對你來說就沒什麼神秘的了。

第一個是 ServiceAccount（服務帳戶）。這是 K8s 內部程序的「身份證」。當你的應用程式跑在 Pod 裡，如果它需要呼叫 K8s API（比如自動擴縮容、讀取 ConfigMap 等），它就需要一個身份告訴 API Server「我是誰」。默認情況下，每個 namespace 都有一個叫 default 的 ServiceAccount，Pod 若沒有指定就會自動用這個。但你應該為每個不同的應用建立專屬 ServiceAccount，這樣才能精確控制每個應用的權限。

第二個是 Role。Role 定義了「在某個命名空間內，可以對哪些資源做哪些操作」。Role 是 namespace-scoped 的，你在 production namespace 建立的 Role，只在 production namespace 內有效。Role 裡面定義的是 rules，每條規則包含三個部分：apiGroups（API 群組，"" 代表核心 API，"apps" 代表 apps API）、resources（資源類型，如 pods、deployments）、verbs（動作，如 get、list、create、delete）。

第三個是 ClusterRole（叢集角色）。ClusterRole 跟 Role 很類似，但它是 cluster-scoped 的。Node、PersistentVolume、Namespace 這些叢集級別的資源只能在 ClusterRole 裡定義。K8s 內建了很多預設 ClusterRole，比如 cluster-admin（最高權限）、admin（namespace 管理員）、edit（讀寫大部分資源）、view（只讀）。

第四個是 RoleBinding（角色綁定）。RoleBinding 是把「身份」和「權限」連接起來的橋樑，在某個 namespace 內，把 ServiceAccount 和 Role（或 ClusterRole）連接起來。注意：RoleBinding 也可以引用 ClusterRole，效果是把 ClusterRole 的權限限制在這個 namespace 內，這是個非常有用的技巧，可以重用 ClusterRole 的定義，但限制在特定 namespace 生效。

第五個是 ClusterRoleBinding（叢集角色綁定）。ClusterRoleBinding 在整個叢集範圍內把身份和 ClusterRole 連接起來。如果用 ClusterRoleBinding 把某個 SA 綁定到 cluster-admin，這個 SA 就擁有整個叢集的完整控制權，非常危險，要謹慎使用。

讓我用一個具體例子說明。假設你有一個 CI/CD 工具需要在 production namespace 部署 Deployment：建立 ServiceAccount 叫 gitlab-runner；建立 Role 叫 deployer，定義可以對 deployments 資源做 get、list、create、update 操作；建立 RoleBinding，把 gitlab-runner 這個 SA 綁定到 deployer 這個 Role，只在 production namespace 生效。這樣 GitLab Runner 就只能在 production namespace 管理 Deployment，做不了其他事情。這就是最小權限原則的實踐！`,
    duration: "10"
  },
  {
    title: "RBAC 實作：建立與綁定",
    subtitle: "從零開始設定完整的 RBAC 策略",
    section: "RBAC 權限管理",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-green-400 font-semibold mb-2">步驟一：建立 ServiceAccount</p>
          <pre className="text-slate-300 text-xs font-mono">{`kubectl create serviceaccount app-sa -n production`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold mb-2">步驟二：建立 Role（YAML）</p>
          <pre className="text-slate-300 text-xs font-mono">{`apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
  namespace: production
rules:
- apiGroups: [""]
  resources: ["pods", "pods/log"]
  verbs: ["get", "list", "watch"]`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">步驟三：建立 RoleBinding</p>
          <pre className="text-slate-300 text-xs font-mono">{`kubectl create rolebinding read-pods-binding \\
  --role=pod-reader \\
  --serviceaccount=production:app-sa \\
  -n production`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-red-400 font-semibold mb-2">步驟四：驗證</p>
          <pre className="text-slate-300 text-xs font-mono">{`kubectl auth can-i get pods \\
  --as=system:serviceaccount:production:app-sa \\
  -n production
# 應該輸出：yes`}</pre>
        </div>
      </div>
    ),
    notes: `好，現在我們來看怎麼實際建立 RBAC。我會帶大家走完一個完整的流程：建立 ServiceAccount、建立 Role、建立 RoleBinding、最後驗證。

建立 ServiceAccount 很簡單，只需要一行指令：kubectl create serviceaccount app-sa -n production。這樣就在 production 命名空間創建了叫 app-sa 的服務帳戶。

建立 Role 的時候，最重要的是理解 rules 的結構。每條 rule 有三個字段：
- apiGroups：API 群組，空字串代表核心 API 群組（pods、services、configmaps 等都在這裡）。如果你不確定某個資源屬於哪個 apiGroup，可以用 kubectl api-resources 指令查看。比如 pods 屬於 ""（空字串），deployments 屬於 "apps"，jobs 屬於 "batch"。
- resources：資源類型。如果你想包含子資源（如 pods/log），也可以直接寫在這裡。
- verbs：允許的動作。常用的有 get（取得單一資源）、list（列出多個）、watch（監聽變化）、create（創建）、update（更新整個資源）、patch（部分更新）、delete（刪除）。

建立 RoleBinding 的時候，用命令式的 kubectl create rolebinding 很方便。注意 --serviceaccount 參數的格式是 namespace:serviceaccount-name。比如 production:app-sa 代表 production namespace 裡面的 app-sa 這個 ServiceAccount。

最後，用 kubectl auth can-i 來驗證。格式是 kubectl auth can-i [動作] [資源] --as=[身份] -n [namespace]。身份的格式是 system:serviceaccount:[namespace]:[serviceaccount-name]。如果輸出 yes，就代表設定正確；如果輸出 no，就需要檢查你的 RoleBinding 或 Role 設定。

這個驗證步驟在 CKA 考試中非常重要！當你設定完 RBAC，一定要用 kubectl auth can-i 驗證一下，確保設定是正確的。考官的評分系統就是用類似的方式來驗證你的設定是否符合要求的。

在生產環境中，所有的 RBAC 設定都應該透過 Git 管理，不要直接在叢集上用 kubectl create，因為這樣沒有版本記錄，出問題時很難追溯。建議用 kubectl apply -f 來套用 YAML 文件，並把這些 YAML 文件納入 GitOps 的工作流程。

最後，分享一個很實用的技巧：在 CKA 考試中，很多考題會要求你建立 RBAC，然後驗證。記住要先用 kubectl auth can-i 確認權限正確，再繼續做下一題。考試環境中，驗證一下能幫你避免因為設定錯誤而失分。

另外，kubectl create role 和 kubectl create clusterrole 也支援直接在命令列指定 rules，比如：kubectl create role pod-reader --verb=get,list,watch --resource=pods -n production，這樣比寫 YAML 更快，在考試中非常有用。

我再補充幾個在生產環境設計 RBAC 時非常重要的考量。

第一個是「帳號最小化」原則。每一個 ServiceAccount 只應該被一個服務使用，不要讓多個服務共用同一個 ServiceAccount。這樣的好處是：如果其中一個服務的 Token 洩漏，受影響的範圍就只限於這個服務的權限，不會波及其他服務。就像每個員工都有自己的門禁卡，而不是所有人共用一張萬能卡。

第二個是「權限審計」的習慣。定期執行 kubectl get rolebinding,clusterrolebinding --all-namespaces -o wide，列出所有的角色綁定，確認沒有不應該存在的高權限綁定。很多安全問題都是因為開發者在測試時給了一個 ServiceAccount cluster-admin 的權限，之後忘記移除，結果這個漏洞一直存在。把這個審計工作納入定期安全檢查，能有效防範這類問題。

第三個是「最小化 default ServiceAccount」。預設情況下，每個 namespace 都有一個 default ServiceAccount，Pod 如果沒有指定 serviceAccountName 就會自動使用 default。如果你的應用程式不需要存取 K8s API，你應該在 Pod 的 spec 裡設定 automountServiceAccountToken: false，這樣 K8s 就不會自動把 ServiceAccount Token 掛載到 Pod 裡，攻擊者就算進入了 Pod，也找不到可以呼叫 K8s API 的憑證。

第四個是與外部 Identity Provider 整合。在大型企業裡，通常會有統一的身份管理系統（比如 Active Directory、Okta、LDAP）。K8s 可以通過 OIDC（OpenID Connect）協定與這些系統整合，讓用戶用公司帳號登入 K8s，而不是另外管理一套 K8s 的帳號。這樣的好處是：當某個員工離職，只需要在公司的 Identity Provider 停用帳號，他對 K8s 的存取權就自動失效，不需要在 K8s 裡逐一刪除。這是企業級 K8s 安全的重要實踐。

這些 RBAC 的進階概念，是讓你從「會用 K8s」到「能安全地管理 K8s」的重要差距。掌握了這些，你在安全審計和設計企業級存取控制方案時，就有了充分的知識基礎！`,
    duration: "10"
  },
  {
    title: "Pod Security Context",
    subtitle: "讓容器在更安全的環境下運行",
    section: "Pod Security",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">完整 Security Context 設定</p>
          <pre className="text-slate-300 text-xs font-mono">{`spec:
  securityContext:          # Pod 層級
    runAsNonRoot: true
    runAsUser: 1000
    fsGroup: 2000
  containers:
  - name: app
    securityContext:        # Container 層級
      allowPrivilegeEscalation: false
      readOnlyRootFilesystem: true
      capabilities:
        drop: ["ALL"]`}</pre>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-green-400 font-semibold text-sm mb-1">最重要的設定</p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>✅ runAsNonRoot: true</li>
              <li>✅ readOnlyRootFilesystem: true</li>
              <li>✅ allowPrivilegeEscalation: false</li>
              <li>✅ capabilities: drop ALL</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-red-400 font-semibold text-sm mb-1">預設的危險</p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>❌ 預設以 root 運行</li>
              <li>❌ 可寫入根文件系統</li>
              <li>❌ 可提升權限（sudo）</li>
              <li>❌ 擁有多個 Capabilities</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `現在我們來看 Pod Security，也就是容器層面的安全設定。這個主題非常重要，因為容器安全漏洞往往是入侵者進一步橫向移動的跳板。

首先，我要告訴大家一個讓很多人驚訝的事實：K8s 的容器預設是以 root 用戶身份（UID 0）運行的！這意味著，容器內的程序具有 root 權限。如果容器有安全漏洞，攻擊者可能利用這個漏洞執行任意程式碼，甚至嘗試逃出容器（Container Escape）。

2019 年，runc（容器運行時）有一個非常嚴重的漏洞（CVE-2019-5736），可以讓攻擊者從容器內覆寫宿主機的 runc 二進位文件，進而取得宿主機的 root 權限。雖然這個漏洞已被修復，但類似的漏洞以後也可能出現。所以我們應該盡一切努力降低容器的安全風險。

Security Context 就是 K8s 提供的容器安全配置機制，分 Pod 層級和 Container 層級設定。

最重要的設定：

第一，runAsNonRoot: true。這告訴 K8s，這個 Pod 不允許以 root 運行。如果 Docker 映像預設用戶是 root，Pod 就會啟動失敗。這強迫開發者在 Dockerfile 裡指定非 root 用戶。寫 Dockerfile 時，用 USER 1000 來指定用戶 ID。

第二，readOnlyRootFilesystem: true。這讓容器的根文件系統變成只讀。就算攻擊者進入了容器，也不能在根文件系統寫入任何惡意文件。當然，你的應用如果需要寫文件，需要把那些路徑用 Volume 掛載。比如 nginx 需要寫 /var/cache 和 /var/run，就把這些目錄掛載為 emptyDir Volume。

第三，allowPrivilegeEscalation: false。這防止容器內的進程通過執行 setuid 程式（比如 sudo）來提升權限。在 runAsNonRoot 配合 allowPrivilegeEscalation: false 的情況下，就算容器有 setuid 漏洞，攻擊者也無法利用它提升到 root。

第四，capabilities: drop: ["ALL"]。Linux Capabilities 是把傳統 root 超級用戶的權限細分成很多小的「能力」，比如 NET_ADMIN（管理網路）、SYS_TIME（修改時間）等。默認情況下，容器擁有一組預設的 Capabilities。用 drop: ["ALL"] 可以把所有 Capabilities 去掉，然後如果你的應用確實需要某個特定 Capability，再用 add 精確加回來。這樣就實現了最小權限原則。

fsGroup 這個設定是設定 Volume 掛載時的群組 ID。當你的應用需要讀寫 PersistentVolume，設定 fsGroup 可以確保掛載的 Volume 具有正確的群組所有權，讓非 root 用戶的容器能夠讀寫 Volume。

在實際工作中，建議每個應用程式的 Pod 都設定這些安全選項，特別是 runAsNonRoot、readOnlyRootFilesystem 和 allowPrivilegeEscalation: false，這三個是最基本的安全底線。你的 DevOps 團隊可以把這些設定作為強制要求，通過 Pod Security Standards（下一個主題）或者 OPA Gatekeeper 來強制執行。

一個很常見的實際問題是：我把 readOnlyRootFilesystem 設為 true 之後，我的 nginx Pod 啟動失敗了！這是因為 nginx 預設需要寫入 /var/cache/nginx、/var/run、/tmp 這些目錄。解決方法是用 emptyDir Volume 掛載這些目錄：在 volumes 裡定義 emptyDir，然後在 volumeMounts 裡把需要寫入的目錄掛載進去。這樣根文件系統是只讀的，但特定的目錄可以寫入，應用程式也能正常運行。

另一個要注意的事是：如果你的容器需要綁定 1024 以下的埠（比如綁定 80 或 443），那在 Linux 下預設需要 CAP_NET_BIND_SERVICE 這個 Capability。如果你已經用 drop: ["ALL"] 去掉了所有 Capability，但應用需要綁定低埠，就需要用 add: ["NET_BIND_SERVICE"] 明確加回來。不過更好的做法是讓容器監聽高埠（比如 8080），然後在 Service 層面做埠映射。

設定好這些安全選項後，建議用 kubectl describe pod 查看 Security Context 是否如預期套用，這是確認設定正確的好方法。`,
    duration: "13"
  },
  {
    title: "Pod Security Standards",
    subtitle: "三個安全等級，適應不同場景",
    section: "Pod Security",
    content: (
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="bg-red-400/10 border border-red-400/30 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <p className="text-red-400 font-bold">Privileged 特權</p>
              <span className="text-red-400 text-xs bg-red-400/20 px-2 py-1 rounded">最寬鬆</span>
            </div>
            <p className="text-slate-300 text-sm">完全不限制。只用於系統元件（CSI 驅動、CNI 插件等），通常是 kube-system namespace</p>
          </div>
          <div className="bg-yellow-400/10 border border-yellow-400/30 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <p className="text-yellow-400 font-bold">Baseline 基準</p>
              <span className="text-yellow-400 text-xs bg-yellow-400/20 px-2 py-1 rounded">中等</span>
            </div>
            <p className="text-slate-300 text-sm">防止高風險配置。禁止特權容器、HostPID、HostNetwork。適合一般應用程式</p>
          </div>
          <div className="bg-green-400/10 border border-green-400/30 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-1">
              <p className="text-green-400 font-bold">Restricted 限制</p>
              <span className="text-green-400 text-xs bg-green-400/20 px-2 py-1 rounded">最嚴格</span>
            </div>
            <p className="text-slate-300 text-sm">強制最佳安全實踐。要求 runAsNonRoot、drop ALL capabilities 等</p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-k8s-blue font-semibold text-sm mb-1">套用到 Namespace（三種模式）</p>
          <pre className="text-slate-300 text-xs font-mono">{`kubectl label namespace production \\
  pod-security.kubernetes.io/enforce=restricted \\
  pod-security.kubernetes.io/warn=restricted \\
  pod-security.kubernetes.io/audit=restricted`}</pre>
        </div>
      </div>
    ),
    notes: `好，現在我們來看 Pod Security Standards，這是 K8s 1.25 版本正式 stable 的內建安全機制。它取代了之前的 PodSecurityPolicy（PSP，在 K8s 1.25 已被移除）。

Pod Security Standards 定義了三個安全等級，讓叢集管理員可以根據不同的 namespace 需求，選擇適合的安全限制程度。

第一個等級是 Privileged（特權）。這個等級完全沒有任何限制。你可能想問，既然沒有限制，要這個等級有什麼意義？意義在於，當你給某個 namespace 套用 Restricted 等級之後，有些特殊的系統元件（比如 Calico CNI 插件、CSI 儲存驅動）確實需要存取宿主機的資源，這些元件應該放在 Privileged 等級的 namespace 裡面，通常是 kube-system。

第二個等級是 Baseline（基準）。這是防止常見高風險配置的最低保護線。它禁止了一些明顯危險的設定，比如 privileged: true（特權容器）、hostPID: true（共用宿主機 PID 命名空間）、hostNetwork: true（共用宿主機網路）、hostIPC（共用宿主機 IPC）、以及某些危險的 capabilities（如 NET_ADMIN、SYS_ADMIN）。Baseline 的限制不多，一般應用程式都能在這個等級下正常運行。

第三個等級是 Restricted（限制）。這是最嚴格的等級，強制實施所有 Pod 安全最佳實踐。在 Restricted 等級下，容器必須 runAsNonRoot、必須 drop ALL capabilities、必須設定 seccompProfile 等。這個等級可能讓某些應用程式需要修改 Dockerfile 和 Pod 設定才能正常運行，但它提供了最好的安全保護。

怎麼套用到 namespace？用 kubectl label 指令，給 namespace 打上特定的標籤。標籤格式是 pod-security.kubernetes.io/[模式]=[等級]，其中模式有三種：
- enforce：強制執行，違反的 Pod 無法創建
- warn：只顯示警告，Pod 仍然可以創建
- audit：只記錄到 audit log，不影響 Pod 創建

實際的建議策略是：首先用 warn 和 audit 模式，觀察目前有哪些 Pod 不符合 Restricted 等級；等你修復完所有不符合規範的 Pod 之後，再切換到 enforce 模式。這樣可以避免突然強制執行導致生產服務中斷。

一個常見問題：enforce Restricted 之後，如果有一個 Pod 不符合要求，它就無法啟動，這在生產環境可能造成服務中斷。所以我建議先在 staging 環境啟用 enforce 模式，讓開發者習慣在 Restricted 等級下開發和測試，然後才在 production 環境啟用。

記住，Pod Security Standards 是 admission controller，它在 API Server 層面審核 Pod 創建請求。不符合標準的 Pod 根本不會被 API Server 接受，連進入 etcd 的機會都沒有。這是一個非常強力的防護機制。

我來補充一下 Pod Security Standards 的實際落地建議。在一個成熟的企業環境裡，通常的做法是：

kube-system namespace 設定 Privileged 等級，因為系統元件需要特殊權限。像 calico、flannel、coredns 等系統元件都在這裡，它們需要存取主機資源。

一般應用的 namespace 設定 Baseline 等級（用 enforce 模式），這樣能防止最常見的高風險配置，同時不需要應用程式做太多改動。

對於有更高安全要求的 namespace（比如金融數據處理、個人資料存儲），設定 Restricted 等級，並且要求開發團隊確保應用符合所有安全要求再部署。

一個實用的審查命令是：kubectl get pods --all-namespaces -o json | kubectl-neat | grep -v "securityContext"，這樣可以看出哪些 Pod 沒有設定 Security Context，作為安全審查的起點。

另外，OPA Gatekeeper 和 Kyverno 是兩個很流行的 Policy Engine，可以做比 Pod Security Standards 更細緻的策略控制。比如「不允許使用 latest 標籤的映像」、「必須設定 resource limits」、「容器映像必須來自受信任的 registry」等。這些策略在大型企業的 K8s 治理中非常重要。

 Pod Security Standards 是強制安全基準的最有效手段，建議所有新建的 K8s 叢集都預設啟用 Baseline 等級，有需要的服務再逐步升級到 Restricted。`,
    duration: "14"
  },
  {
    title: "Network Policy：零信任網路",
    subtitle: "預設拒絕所有，白名單逐步開放",
    section: "Network Policy",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-400/10 border border-red-400/30 p-4 rounded-lg">
            <p className="text-red-400 font-bold mb-2">❌ K8s 預設網路</p>
            <p className="text-slate-300 text-sm">所有 Pod 之間可以自由通信！前端 Pod 可以直接連到 DB Pod，沒有任何阻擋。</p>
          </div>
          <div className="bg-green-400/10 border border-green-400/30 p-4 rounded-lg">
            <p className="text-green-400 font-bold mb-2">✅ 零信任網路</p>
            <p className="text-slate-300 text-sm">預設拒絕所有流量，只開放明確需要的通信路徑。攻擊者就算進入一個 Pod，也無法橫向移動。</p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">預設拒絕所有 Ingress 流量</p>
          <pre className="text-slate-300 text-xs font-mono">{`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: default-deny-ingress
  namespace: production
spec:
  podSelector: {}   # 選擇所有 Pod
  policyTypes:
  - Ingress         # 拒絕所有入站流量`}</pre>
        </div>
        <div className="bg-yellow-400/10 border border-yellow-400/30 p-3 rounded-lg">
          <p className="text-yellow-400 text-sm">⚠️ Network Policy 需要支援的 CNI 插件（Calico、Cilium 等），flannel 不支援！</p>
        </div>
      </div>
    ),
    notes: `好，現在我們來看第三個安全主題：Network Policy（網路策略）。這個功能是實現零信任網路架構的關鍵。

首先，我要告訴大家 K8s 的預設網路行為：在 K8s 中，默認情況下，所有的 Pod 之間都可以自由通信，不管它們在哪個 namespace，也不管它們是什麼應用程式。換句話說，你的前端 Pod 可以直接連到你的 MySQL 資料庫 Pod，你的日誌收集 Pod 可以連到任何其他 Pod。這在小型的開發環境可能沒什麼問題，但在生產環境，這是非常危險的！

想像這樣的場景：你的前端應用有一個 XSS 漏洞，攻擊者利用這個漏洞在前端 Pod 上執行了任意程式碼。在沒有 Network Policy 的情況下，攻擊者可以從前端 Pod 直接連到你的資料庫，讀取所有的用戶數據，甚至修改或刪除。這就是所謂的「橫向移動」（Lateral Movement）攻擊。

Network Policy 就是用來阻止這種橫向移動的。它讓你可以明確定義哪些 Pod 可以和哪些 Pod 通信，通過什麼埠號。這就是「零信任網路」的概念：不信任任何內部流量，所有的通信都必須明確被允許。

Network Policy 的工作方式是白名單：你先部署一個「拒絕所有」的策略，然後逐步添加允許特定通信的策略。

podSelector: {} 代表選擇這個 namespace 裡的所有 Pod。policyTypes: [Ingress] 代表這個策略控制的是入站流量（Ingress 是從外部進來，Egress 是從 Pod 出去）。一個空的 ingress 規則（沒有 rules 字段）代表拒絕所有入站流量。

非常重要的一點：Network Policy 需要你的 CNI（容器網路介面）插件支援。不是所有的 CNI 都支援 Network Policy！flannel 就不支援，但 Calico、Cilium、Weave Net 都支援。如果你想在生產環境使用 Network Policy，在選擇 CNI 插件時就要考慮這一點。GKE、EKS 和 AKS 默認都支援 Network Policy，只需要在建立叢集時啟用即可。

設定 Network Policy 的基本步驟是：
1. 部署「預設拒絕所有 Ingress」策略
2. 逐一為每個應用添加需要的通信規則
3. 測試確認服務正常運行
4. 再部署「預設拒絕所有 Egress」策略（如果需要）

注意，Network Policy 是加法，不是減法。你先設定「全部拒絕」，然後一條一條地「加白名單」。

讓我用一個具體的三層架構例子說明 Network Policy 的設計思路。假設你有一個典型的 Web 應用：前端（frontend）、後端 API（backend）、資料庫（database）。

理想的網路策略應該是：
- frontend 可以被外部流量訪問（從 Ingress Controller）
- frontend 可以訪問 backend 的 API 埠（比如 8080）
- backend 可以訪問 database 的資料庫埠（比如 5432）
- database 不能發出任何出站流量（Egress 全拒）
- frontend 和 database 之間不能直接通信
- 監控系統（monitoring namespace）可以訪問所有 Pod 的 metrics 埠（9090）

這樣的策略，就算攻擊者進入了 frontend，他也只能訪問 backend；就算進入了 backend，他也只能訪問資料庫，而且只能用資料庫協議。這大大限制了攻擊者的行動空間。

在設計 Network Policy 的時候，建議用圖表畫出你的服務通信圖，然後根據這個圖一條一條地寫 NetworkPolicy，確保每條必要的通信路徑都被允許，其他的都被阻斷。

設計 Network Policy 前，先畫出服務的通信圖，確認哪些連線是必要的，然後逐一開放，其他全部拒絕，這是最可靠的做法。`,
    duration: "11"
  },
  {
    title: "Network Policy 實作",
    subtitle: "精確控制 Pod 間的網路流量",
    section: "Network Policy",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-green-400 font-semibold mb-2">只允許 frontend 連接 backend</p>
          <pre className="text-slate-300 text-xs font-mono">{`apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend-to-backend
  namespace: production
spec:
  podSelector:
    matchLabels:
      app: backend        # 套用到 backend Pod
  policyTypes:
  - Ingress
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: frontend   # 只允許 frontend 進來
    ports:
    - protocol: TCP
      port: 8080`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold text-sm mb-1">驗證 Network Policy</p>
          <pre className="text-slate-300 text-xs font-mono">{`kubectl get networkpolicy -n production
# 測試：從其他 Pod 嘗試連接（應被拒絕）
kubectl exec -it test-pod -- curl backend:8080`}</pre>
        </div>
      </div>
    ),
    notes: `好，我們來看 Network Policy 的實際設定。這是一個非常重要的技能，在 CKA 考試中也經常出現。

讓我詳細解釋這個 NetworkPolicy YAML 的每個部分：

podSelector 決定這個 NetworkPolicy 套用到哪些 Pod。matchLabels: {app: backend} 代表這個策略只套用到有 app: backend 標籤的 Pod。如果你把 podSelector 設為空（{}），就代表套用到這個 namespace 裡的所有 Pod。

policyTypes 決定這個策略控制哪個方向的流量。Ingress 是入站流量（從外部進到這個 Pod），Egress 是出站流量（從這個 Pod 出去到外部）。你可以同時設定兩個。

ingress 字段定義允許哪些入站流量。from 列表定義流量來源，可以用 podSelector（選擇 Pod）、namespaceSelector（選擇 namespace）、或兩者結合。ports 列表定義允許哪些埠號。

在這個例子中，規則是：只允許有 app: frontend 標籤的 Pod，連接到 backend Pod 的 TCP 8080 埠。任何其他來源的流量都會被拒絕。

如果你同時想允許多個來源，可以在 from 列表中加多個條目：
\`\`\`
from:
- podSelector: {matchLabels: {app: frontend}}
- podSelector: {matchLabels: {app: monitoring}}
\`\`\`

如果你想允許某個 namespace 的所有 Pod 連進來，用 namespaceSelector：
\`\`\`
from:
- namespaceSelector:
    matchLabels:
      kubernetes.io/metadata.name: monitoring
\`\`\`

還有一個常見的場景：只允許同一個 namespace 的 Pod 通信，阻止跨 namespace 的流量。這可以用 namespaceSelector 搭配 podSelector：
\`\`\`
from:
- namespaceSelector:
    matchLabels:
      kubernetes.io/metadata.name: production
  podSelector: {}  # 同 namespace 的所有 Pod
\`\`\`

測試 Network Policy 的時候，可以啟動一個臨時的 test Pod，然後用 kubectl exec 從裡面用 curl 或 wget 嘗試連接目標服務。如果 Network Policy 設定正確，不允許的連接應該會超時或被拒絕。

設定 Network Policy 是一個逐步完善的過程，建議先在開發環境測試，確認所有正常的服務通信都沒有被意外阻斷，再部署到生產環境。最重要的心態是：先求有（先部署 default-deny），再求好（逐步精細化白名單），比什麼都不做強得多。

最後，分享一個調試 Network Policy 的技巧。當你設定了 Network Policy 之後，如果服務突然無法通信，首先要排查的是：是否有 NetworkPolicy 意外阻斷了流量？

可以用這個指令查看所有 NetworkPolicy：kubectl get networkpolicy --all-namespaces。查看特定 Policy 的詳細規則：kubectl describe networkpolicy policy-name -n namespace。

如果你使用的是 Cilium CNI，可以用 Hubble UI 來視覺化 Pod 之間的流量，非常直觀地看出哪些流量被允許、哪些被拒絕。這是排查 Network Policy 問題最高效的方式。

調試 Network Policy 最快的方法是用 kubectl exec 進入一個 test Pod，然後用 curl 測試各個目標服務，這樣能直接確認哪些連線通、哪些被擋住。確認完畢之後別忘了刪除這個 test Pod，因為測試用的 Pod 通常有較寬鬆的設定，不應該長期存在在叢集裡。`,
    duration: "11"
  },
  {
    title: "☕ 中場休息",
    subtitle: "休息一下，下半場更精彩！",
    section: "休息",
    content: (
      <div className="space-y-6 text-center">
        <p className="text-6xl">☕</p>
        <p className="text-3xl font-bold text-yellow-400">中場休息 15 分鐘</p>
        <div className="bg-slate-800/50 p-6 rounded-lg text-left">
          <p className="text-k8s-blue font-semibold mb-3">休息結束後，我們將學習：</p>
          <ul className="space-y-2 text-slate-300">
            <li>📊 監控基礎 — Metrics Server + Prometheus + Grafana</li>
            <li>📝 日誌管理 — EFK Stack（Elasticsearch + Fluentd + Kibana）</li>
            <li>🏆 課程總結 — CKA 認證攻略 + 學習資源</li>
          </ul>
        </div>
        <p className="text-slate-400">上個廁所、喝個咖啡，10:40 準時繼續！</p>
      </div>
    ),
    notes: `好！前半段課程到此結束，大家辛苦了！我們剛才學了三個非常重要的 K8s 安全主題：RBAC（權限管理）、Pod Security（容器安全）、和 Network Policy（網路隔離）。這三個主題結合起來，已經能讓你的 K8s 叢集達到相當高的安全標準了。

現在給大家 15 分鐘的休息時間。請去上廁所、喝個咖啡、活動一下筋骨。

我要說的是，上半段學的安全內容，都是非常實用的技能。很多公司在做 K8s 導入的時候，安全往往是最後才想到的，結果就造成了各種安全事故。你們今天學完之後，可以在自己公司裡主動推動這些安全最佳實踐，這也是你作為工程師創造價值的地方。

休息結束之後，我們要進入監控和日誌的世界。監控和日誌是生產環境的「眼睛」，沒有了監控，你就是在黑暗中飛行，不知道你的應用程式狀態是好是壞，也不知道何時出問題。我們會介紹業界最常用的監控方案 Prometheus 和 Grafana，以及日誌管理的 EFK Stack。

10 點 40 分準時繼續，大家放輕鬆，好好休息一下！

休息時間，我再給大家分享一個思考框架，可以在喝咖啡的時候想一想。

在生產環境中，安全是一個「深度防禦」（Defense in Depth）的概念。就像城堡的防禦不只有城牆，還有護城河、城門、守衛、內部的不同區域都有各自的門禁一樣，K8s 的安全也是多層的：

第一層：叢集邊界。確保 API Server 不暴露在公網、使用強認證機制（不要用簡單的 token）、控制誰能用 kubectl 連接到叢集。

第二層：命名空間隔離。不同的團隊或環境使用不同的 namespace，用 Network Policy 隔離 namespace 之間的流量，用 RBAC 確保每個人只能訪問自己的 namespace。

第三層：Pod 和容器安全。用 Security Context 讓容器以非 root 身份運行、只讀根文件系統、禁止提升權限，用 Pod Security Standards 強制執行這些設定。

第四層：應用程式安全。確保你的應用程式自身的安全，定期掃描容器映像的漏洞（可以用 Trivy 或 Snyk），保持映像的更新。

第五層：監控和告警。就算前面四層都設好了，也需要監控來發現異常行為。異常的 API 調用、突然飆升的資源使用率、未預期的網路連接——這些都可能是攻擊的跡象。

這五層防禦加起來，才是真正的企業級 K8s 安全架構。今天我們已經涵蓋了其中很重要的幾個層面。

好，時間快到了，請大家慢慢回到位置，我們馬上開始下半段！

我還想跟大家分享一個真實的生產環境故事，關於監控的重要性。

有一家電商公司，他們的 K8s 叢集跑了十幾個微服務。某天午夜，他們的訂單服務突然開始報錯，錯誤率從 0% 跳升到 30%。但是因為沒有監控告警，沒有人知道發生了什麼事。用戶在結帳的時候不斷遇到錯誤，客服電話開始爆炸。等到早上工程師上班，才發現問題，花了一個小時才排查出是某個 ConfigMap 的配置錯誤。這中間，損失的訂單轉換、用戶的體驗傷害、品牌形象的損失，都是實實在在的商業損失。

如果他們有 Prometheus + Grafana + Alertmanager，在錯誤率超過 1% 的時候，就會自動發告警到 PagerDuty，On-call 的工程師就會在幾分鐘內收到通知，而不是等到第二天早上。這中間的差距，就是「有監控」和「沒監控」的差距。

在現代的工程文化裡，「可觀測性」（Observability）是一個核心能力。可觀測性包括三個支柱：指標（Metrics，就是 Prometheus 負責的）、日誌（Logs，就是 EFK 負責的）、追蹤（Traces，是 Jaeger 或 Zipkin 負責的，我們今天不會深入，但你知道有這個東西）。一個可觀測性完整的系統，讓工程師能夠在出問題的時候，快速定位問題在哪裡。這是高效工程團隊和一般工程團隊的重要區別。

好，時間到了，請大家回到位置，我們馬上開始！

另外，在休息的時候，我想讓大家思考一個問題：如果你現在要向你的主管解釋為什麼公司需要引入 K8s 安全和監控機制，你會怎麼說？

這是一個很實際的職場問題。技術工程師往往知道「要做什麼」，但在向管理層解釋的時候，需要轉換成「為什麼要做」、「不做會有什麼風險」、「做了有什麼收益」。

可以從這三個角度來說：
第一，成本：安全事故的成本遠高於建立安全機制的成本。Tesla 的挖礦事件讓他們損失了數萬美元的 AWS 費用。
第二，聲譽：一旦用戶資料洩漏，品牌聲譽的損失可能是無法用金錢衡量的。
第三，效率：有了好的監控系統，工程師排查問題的時間從幾個小時縮短到幾分鐘，團隊的生產力大幅提升。

學會把技術決策轉換成商業語言，是從工程師走向資深工程師、架構師的重要一步。好，真的去休息了，等一下見！

最後，讓我說一個職場上的觀察：那些在公司裡被視為「不可替代」的工程師，往往不是寫程式最快的人，而是那些能夠在出問題的時候快速定位和解決問題的人。這種能力，來自於對系統的深入了解，來自於完善的監控和日誌系統，也來自於豐富的排障經驗。今天下午你學完這些工具，就往「不可替代」這個目標又近了一步！

好了，真的請大家去休息了！15 分鐘後準時回來，我們繼續今天的最後一段精彩課程！

記得回來後不要分心，下半段同樣精彩！ 大家加油，後半段見！！~`,
    duration: "15"
  },
  {
    title: "監控基礎：Metrics Server",
    subtitle: "kubectl top 讓你即時掌握資源使用狀況",
    section: "監控基礎",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">安裝 Metrics Server</p>
          <pre className="text-slate-300 text-xs font-mono">{`kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml

# 確認安裝成功
kubectl get pods -n kube-system | grep metrics-server`}</pre>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-green-400 font-semibold mb-2">使用 kubectl top</p>
          <pre className="text-slate-300 text-xs font-mono">{`# 查看節點資源使用
kubectl top nodes

# 查看 Pod 資源使用
kubectl top pods -n production

# 查看所有命名空間
kubectl top pods --all-namespaces`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold text-sm mb-1">Metrics Server 的用途</p>
          <ul className="text-slate-400 text-xs space-y-1">
            <li>• kubectl top 即時資源監控</li>
            <li>• HPA（Horizontal Pod Autoscaler）的數據來源</li>
            <li>• VPA（Vertical Pod Autoscaler）的基礎</li>
          </ul>
        </div>
      </div>
    ),
    notes: `好，休息結束了！現在我們進入監控的世界。

監控是生產環境必不可少的基礎設施。沒有監控，你就像在黑暗中開車，不知道前方的路況，也不知道油還剩多少。在 K8s 的世界裡，我們需要監控兩個層面：基礎設施層面（節點的 CPU、記憶體、磁碟使用率）和應用程式層面（應用的請求數、錯誤率、回應時間）。

首先，我們來看最基礎的監控工具：Metrics Server。Metrics Server 是 K8s 官方的輕量級資源監控組件。它通過 Summary API 從每個節點的 kubelet 收集資源使用數據（CPU 和記憶體），然後把這些數據通過 K8s API 暴露出來。

安裝 Metrics Server 非常簡單，只需要 kubectl apply 一個 YAML 文件就好了。但要注意，在某些環境下（比如 minikube、kubeadm 自建的叢集），Metrics Server 可能因為 TLS 憑證問題而無法正常啟動。這時候你需要在 Metrics Server 的 Deployment 上加 --kubelet-insecure-tls 參數（只在非生產環境使用，因為這會跳過 TLS 驗證）。

安裝完 Metrics Server 之後，你就可以用 kubectl top 指令來查看資源使用狀況了。kubectl top nodes 會顯示每個節點的 CPU 和記憶體使用量，以及使用百分比。kubectl top pods 會顯示每個 Pod 的 CPU 和記憶體使用量。

Metrics Server 最重要的用途除了讓 kubectl top 能用之外，還是 HPA（Horizontal Pod Autoscaler）的數據來源。HPA 根據 CPU 或記憶體使用率自動調整 Pod 的副本數量。如果沒有 Metrics Server，HPA 就無法工作。

但要注意，Metrics Server 只保存最新的資源使用數據，不做歷史數據的存儲。也就是說，你只能看到「現在」的資源使用情況，不能查看「昨天」或「上週」的歷史趨勢。如果你需要歷史數據和時間序列分析，就需要 Prometheus，我們下一個主題就是它。

順帶一提，HPA（Horizontal Pod Autoscaler）的工作原理是：定期從 Metrics Server 取得 Pod 的 CPU 使用率，和目標使用率（targetCPUUtilizationPercentage）比較，如果超過了，就增加 Pod 副本數；如果低於了，就減少 Pod 副本數（但不會低於 minReplicas）。這整個自動伸縮的機制，底層完全依賴 Metrics Server。所以在任何有 HPA 的叢集裡，Metrics Server 都是不可缺少的核心組件。

你可以用 kubectl get hpa -n production 來查看 HPA 的狀態，裡面會顯示當前的 CPU 使用率、目標使用率、當前副本數和目標副本數，非常直觀。

我補充一個在實際工作中很常遇到的場景：某個工程師反映「我的 kubectl top 指令沒有輸出，說 Error from server (ServiceUnavailable)」。這幾乎都是因為 Metrics Server 沒有安裝，或是安裝了但還沒有正常啟動。解決步驟是：先用 kubectl get pods -n kube-system | grep metrics-server 確認 Metrics Server 的 Pod 狀態；如果是 CrashLoopBackOff，用 kubectl logs -n kube-system 查看錯誤；最常見的問題是 TLS 憑證驗證失敗，在非生產環境可以在 Metrics Server 的啟動參數加上 --kubelet-insecure-tls 來跳過驗證。

還有一個容易讓人困惑的地方：Metrics Server 只能看到容器的 CPU 和記憶體使用量，看不到磁碟 I/O、網路流量、自定義業務指標等。如果你需要這些數據，就需要 Prometheus——它通過「Exporter」機制，可以收集幾乎任何你想要的指標。

談到資源使用監控，有一個很重要的最佳實踐是：一定要為每個 Pod 設定 Resource Requests 和 Limits！Requests 告訴 K8s Scheduler「這個 Pod 需要多少資源」，讓 Scheduler 能夠把 Pod 調度到有足夠資源的節點；Limits 設定 Pod 能使用的資源上限，防止某個 Pod 耗盡整個節點的資源，影響到同節點其他的 Pod。Metrics Server 的數據加上 Resource Limits，讓你能清楚地看到每個 Pod 使用了多少配額，有沒有接近上限。

如果某個 Pod 的 CPU 使用率長期都在 95% 以上接近 Limits，那就需要考慮增加 Limits 或者優化應用程式的性能；如果 CPU 使用率長期只有 10-20%，那可能 Limits 設太高了，可以適當降低，這樣能讓節點承載更多的 Pod，提升資源利用率。這種基於實際使用數據來調整資源配置的工作，就是 FinOps（雲端財務最佳化）的一部分，是很多公司的工程師現在很重視的技能。`,
    duration: "8"
  },
  {
    title: "Prometheus：強大的監控系統",
    subtitle: "時間序列數據庫 + 主動拉取 + PromQL",
    section: "監控基礎",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">Prometheus 核心概念</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>📈 時間序列數據庫（TSDB）</li>
              <li>🔄 主動拉取（Pull）模型</li>
              <li>🏷️ 標籤（Labels）系統</li>
              <li>⚠️ Alertmanager 告警</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-semibold mb-2">PromQL 基礎查詢</p>
            <pre className="text-slate-300 text-xs font-mono">{`# CPU 使用率
rate(cpu_usage[5m])

# 記憶體使用
container_memory_usage_bytes

# 請求錯誤率
rate(http_requests_total{
  status="500"}[5m])`}</pre>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-yellow-400 font-semibold mb-2">安裝 kube-prometheus-stack</p>
          <pre className="text-slate-300 text-xs font-mono">{`helm repo add prometheus-community \\
  https://prometheus-community.github.io/helm-charts
helm install prometheus prometheus-community/kube-prometheus-stack \\
  -n monitoring --create-namespace`}</pre>
        </div>
      </div>
    ),
    notes: `好，現在我們來看業界最廣泛使用的監控系統：Prometheus。Prometheus 是 CNCF（雲原生計算基金會）的畢業項目，是 K8s 生態系統中事實上的標準監控解決方案。

Prometheus 的核心是一個時間序列數據庫（Time Series Database，TSDB）。時間序列數據庫是專門設計來儲存有時間戳的指標數據的。比如「2024-01-15 10:00:00，CPU 使用率 45%」「2024-01-15 10:01:00，CPU 使用率 48%」，這樣一系列帶時間戳的數據點。

Prometheus 的數據收集方式叫做「Scrape」（主動拉取）。Prometheus Server 會定期（默認每 15 秒）訪問各個監控目標（Target）的 /metrics HTTP 端點，拉取指標數據。這跟傳統的 Push 方式（被監控的應用主動把數據推送到監控系統）不同，Pull 方式的好處是：監控系統對被監控目標有完整的控制權，可以隨時添加或移除監控目標，而不需要在應用程式端做任何改動。

在 K8s 環境裡，Prometheus 通過 ServiceMonitor 和 PodMonitor 這兩個 CRD（自定義資源）來配置監控目標。ServiceMonitor 告訴 Prometheus 去監控哪些 Service（背後的 Pod），PodMonitor 直接指定要監控哪些 Pod。

Prometheus 的查詢語言叫 PromQL（Prometheus Query Language）。PromQL 是一個功能非常強大的查詢語言，讓你可以對時間序列數據做複雜的計算和聚合。基本的查詢很簡單，比如 container_memory_usage_bytes 會列出所有容器的記憶體使用量。更複雜的查詢可以用 rate() 函數來計算速率，用 sum() 來聚合，用標籤選擇器來過濾。

安裝 Prometheus 最簡單的方式是用 kube-prometheus-stack 這個 Helm Chart。它會自動安裝 Prometheus、Grafana、AlertManager，以及一套預設的告警規則和 Grafana 儀表板。只需要幾行 Helm 指令就能搞定。

Prometheus 還有告警功能，通過 Alertmanager 來管理和發送告警。你可以設定各種告警規則，比如「如果某個 Pod 的記憶體使用率超過 80% 持續 5 分鐘，就發告警到 Slack」。Alertmanager 還支援告警路由、靜默（Silence）和聚合，避免告警風暴的問題。

讓我再補充一個重要的概念：Prometheus 的數據模型。Prometheus 裡的每一個指標都有一個名稱（metric name）和一組標籤（labels）。標籤是鍵值對，用來區分同一個指標的不同維度。比如 http_requests_total 這個指標，可以有 method="GET"、path="/api/users"、status="200" 這些標籤。通過標籤，你可以對指標進行非常靈活的過濾和聚合。

在 K8s 環境裡，kube-state-metrics 是一個很重要的組件，它把 K8s 物件的狀態（比如 Deployment 的期望副本數、實際副本數、Pod 的狀態等）轉換成 Prometheus 指標暴露出來。kube-prometheus-stack 會自動安裝 kube-state-metrics，讓你可以監控 K8s 物件的狀態，而不只是資源使用率。

舉個例子，kube_deployment_status_replicas_unavailable 這個指標告訴你有多少個 Deployment 的副本是不可用的。如果你設定一個告警規則：當 kube_deployment_status_replicas_unavailable > 0 持續超過 5 分鐘時告警，就能及時發現部署問題。

我想再分享幾個在生產環境用 Prometheus 的重要心得。

第一個心得是關於「四個黃金訊號」（Four Golden Signals）。這是 Google SRE 書裡提出的概念，指的是監控任何一個服務時，最重要的四個指標：Latency（延遲，請求需要多少時間才能得到回應）、Traffic（流量，每秒有多少請求）、Errors（錯誤率，有多少請求失敗了）、Saturation（飽和度，系統資源被用了多少、還有多少餘裕）。這四個指標足以讓你在大多數情況下迅速判斷一個服務是否健康。在設計應用程式的 Prometheus 指標時，確保這四個黃金訊號都有被覆蓋到，是一個很好的起點。

第二個心得是 Prometheus 的儲存管理。Prometheus 預設把數據存在本地磁碟，保留 15 天。在大型叢集裡，指標數量非常多，15 天的數據可能佔用幾十 GB 的磁碟。如果你需要更長的保留期（比如 90 天用於趨勢分析），或者需要高可用的 Prometheus，可以考慮 Thanos 或 Cortex 這兩個方案，它們讓 Prometheus 的數據可以儲存到 S3 或 GCS 這類物件存儲系統，實現長期保留和高可用。

第三個心得是善用 Prometheus 的 Recording Rules（預計算規則）。有些 PromQL 查詢很複雜，每次執行都需要大量計算。Recording Rules 讓你可以預先計算這些查詢，把結果存成新的指標，這樣在 Grafana 裡查詢的時候就非常快，不會因為複雜查詢讓 Prometheus 負載過高。這對需要展示大量歷史數據的儀表板特別重要。

第四個心得是 Prometheus Operator 的價值。kube-prometheus-stack 裡的 Prometheus Operator 讓你可以用 ServiceMonitor 和 PrometheusRule 這樣的 CRD 來管理 Prometheus 的配置，而不是直接修改 Prometheus 的 ConfigMap。這完全符合 GitOps 的精神：所有配置都用 YAML 描述，納入 Git 版本管理，通過 CI/CD 自動部署。當你的 SRE 團隊擴大，有多個人需要維護 Prometheus 配置時，用 CRD 的方式管理比手動修改 ConfigMap 安全可靠得多。

Prometheus 是一個非常強大但也相當複雜的系統，業界有整本書專門在討論如何在生產環境運行 Prometheus。今天我們涵蓋的是最核心的概念和入門知識，真正在生產環境用的話，還需要持續深入學習。但掌握了今天這些基礎，你就有了很好的起點！`,
    duration: "11"
  },
  {
    title: "Alertmanager 告警設定",
    subtitle: "讓問題在你睡著前先叫醒你",
    section: "監控基礎",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">PrometheusRule 告警規則範例</p>
          <pre className="text-slate-300 text-xs font-mono">{String.raw`apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: app-alerts
  namespace: monitoring
spec:
  groups:
  - name: app.rules
    rules:
    - alert: HighErrorRate
      expr: |
        rate(http_requests_total{status=~"5.."}[5m]) > 0.05
      for: 5m
      labels:
        severity: critical
      annotations:
        summary: "Pod {{ $labels.pod }} 錯誤率過高"
        description: "錯誤率 {{ $value | humanizePercentage }} 超過 5%"`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold text-sm mb-1">Alertmanager 路由設定（發 Slack）</p>
          <pre className="text-slate-300 text-xs font-mono">{String.raw`route:
  receiver: slack-critical
  routes:
  - match: {severity: critical}
    receiver: slack-critical
receivers:
- name: slack-critical
  slack_configs:
  - channel: '#k8s-alerts'
    api_url: 'https://hooks.slack.com/T.../...'
    title: '{{ .CommonAnnotations.summary }}'
    text: '{{ .CommonAnnotations.description }}'`}</pre>
        </div>
        <div className="bg-red-400/10 border border-red-400/30 p-3 rounded-lg">
          <p className="text-red-400 text-sm font-semibold">⚠️ 告警疲勞（Alert Fatigue）：告警太多反而沒人看，設定 for: 5m 避免瞬間抖動觸發告警！</p>
        </div>
      </div>
    ),
    notes: `好，現在我們來看整個監控體系中非常重要的一環：Alertmanager 告警設定。Prometheus 可以幫你收集所有指標，Grafana 可以讓你漂亮地展示它們，但這兩個都是「你主動去看」的工具。在生產環境，你不可能 24 小時盯著儀表板。這時候就需要 Alertmanager——它讓系統在出問題的時候主動叫你。

Alertmanager 的告警流程分三步：第一步，在 Prometheus 中定義 PrometheusRule（告警規則），告訴 Prometheus「什麼情況下要告警」；第二步，Prometheus 計算 PromQL 表達式，如果條件持續滿足（by: 5m 的意思是持續 5 分鐘），就把告警事件發送給 Alertmanager；第三步，Alertmanager 根據設定的路由規則，把告警發送到對應的渠道——Slack、PagerDuty、Email、Line 等等。

PrometheusRule 是 kube-prometheus-stack 提供的 CRD。讓我解釋這個 YAML 的關鍵部分：

expr 是 PromQL 表達式，rate(http_requests_total{status=~"5.."}[5m]) 計算的是最近 5 分鐘內 HTTP 5xx 錯誤的速率。如果這個值大於 0.05（也就是每秒超過 0.05 個錯誤），就觸發告警。

for: 5m 是一個非常重要的設定，意思是「條件必須持續 5 分鐘才觸發告警」。沒有 for，一個瞬間的流量高峰就會觸發告警，這叫做「抖動」（flapping）。有了 for: 5m，系統先等 5 分鐘確認這不是瞬間問題，才真正發告警。

labels 裡的 severity 是告警的嚴重程度，常見的有 critical（需要立即處理，半夜也要叫醒 on-call）、warning（需要注意但可以等到明天處理）、info（只是提示信息）。

annotations 裡的 summary 和 description 是人類可讀的告警說明。支援 Go template 語法，可以用 {{ $labels.pod }} 引用標籤的值，用 {{ $value | humanizePercentage }} 把數字格式化成百分比。

Alertmanager 的 receiver 設定決定告警發往哪裡。Slack 是最常用的選擇，設定 api_url（Slack 的 Incoming Webhook URL）和 channel 就好了。title 和 text 用 Go template 格式化告警內容。

最後要提醒大家一個重要概念：「告警疲勞」（Alert Fatigue）。如果你設定的告警太多、太頻繁，工程師就會開始忽略告警通知，這比沒有告警系統還要危險！設定告警的黃金原則是：每一條告警都應該是需要人介入處理的事件。監控趨勢用 Grafana 看，不要用告警。建議從少量、高信噪比的告警開始，然後根據實際的 on-call 經驗逐步調整。

在實際工作中，告警規則的設計是一個持續迭代的過程。建議從最關鍵的幾個指標開始（比如錯誤率、Pod 崩潰次數），先把高優先級的告警設好，然後根據 on-call 的反饋持續調整。每次收到告警之後，問自己：這個告警是否需要人立即介入？如果不需要，就考慮降低嚴重程度或增加 for 時間。告警規則就像程式碼一樣，需要持續維護和優化，才能發揮最大的價值。

有一個很有用的概念叫「SLO（Service Level Objective，服務等級目標）」驅動的告警。傳統的告警是基於資源指標的（比如 CPU 超過 80% 告警），但這種告警跟用戶體驗的關聯不夠直接。SLO 驅動的告警是基於用戶能感知的指標：比如「99.9% 的請求延遲要在 200ms 以內」、「每個月的錯誤率不超過 0.1%」。當你監控到系統即將違反這些 SLO（稱為 Error Budget Burn Rate 過高），就發出告警。這種方式的好處是，每一條告警都直接對應到用戶體驗的影響，工程師能立刻理解告警的業務意義，從而做出更準確的優先級判斷。雖然 SLO 驅動的告警設計起來比較複雜，但它是 Google SRE 文化中非常核心的實踐，也是現代可靠性工程的發展方向。

總結來說，好的告警系統讓你在問題影響用戶之前就能發現並修復，這是 SRE（網站可靠性工程）文化的核心精神！`,
    duration: "10"
  },
  {
    title: "Grafana：視覺化儀表板",
    subtitle: "把數據變成漂亮的儀表板",
    section: "監控基礎",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">Grafana 功能</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>📊 多種圖表類型</li>
              <li>🔗 多數據源支援</li>
              <li>📦 預建 Dashboard</li>
              <li>⚠️ 告警整合</li>
              <li>👥 團隊協作</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-semibold mb-2">K8s 常用儀表板</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• ID 315：K8s 叢集概覽</li>
              <li>• ID 6417：K8s Pod 詳情</li>
              <li>• ID 8919：Node Exporter</li>
              <li>• ID 13646：K8s 網路監控</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold text-sm mb-1">存取 Grafana</p>
          <pre className="text-slate-300 text-xs font-mono">{`# Port Forward 到本地
kubectl port-forward svc/prometheus-grafana 3000:80 -n monitoring
# 預設帳號：admin / prom-operator`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-slate-400 text-sm">💡 grafana.com/dashboards 有超過 5000 個社群貢獻的儀表板可以直接匯入使用</p>
        </div>
      </div>
    ),
    notes: `好，現在我們來看 Grafana。Grafana 是一個開源的視覺化儀表板工具，它本身不存儲數據，而是從各種數據源（包括 Prometheus）拉取數據，然後用漂亮的圖表展示出來。

Grafana 的強大之處在於它支援非常多種數據源：Prometheus、InfluxDB、Elasticsearch、MySQL、PostgreSQL，甚至是 Grafana 自己的 Grafana Loki（專為日誌設計的輕量級存儲）。這讓你可以在同一個 Grafana 儀表板上，同時展示來自不同數據源的數據。

Grafana 最受歡迎的功能是它的預建儀表板生態。在 grafana.com/dashboards 網站上，有超過 5000 個社群貢獻的儀表板，你可以直接匯入使用，根本不需要自己從頭建立。對於 K8s 監控，最常用的幾個儀表板 ID 是：315（Kubernetes cluster monitoring，叢集整體概覽）、6417（Kubernetes Pods，Pod 詳細資訊）、8919（Node Exporter Full，節點詳情）。

匯入儀表板非常簡單：在 Grafana 左側菜單點「+」，選「Import」，輸入儀表板 ID，選擇 Prometheus 作為數據源，然後點 Import，幾秒鐘就好了。

如果你用 kube-prometheus-stack Helm Chart 安裝的 Grafana，它已經預裝了很多 K8s 相關的儀表板，你裝完就可以直接用，非常方便。

Grafana 的告警功能也很強大，可以在 Grafana 裡直接設定告警規則，當指標超過閾值時，發送通知到 Slack、PagerDuty、Email 等渠道。不過在 kube-prometheus-stack 的架構裡，告警通常是在 Prometheus Alertmanager 那層處理，Grafana 的告警更多是作為補充。

對於想要深入學習 Grafana 的同學，我推薦去看 Grafana 的官方課程，他們有免費的 Grafana 101 課程，非常適合入門。

最後一個建議：在 Grafana 裡，善用 Variables 功能。你可以定義變數（比如 namespace、pod_name），讓儀表板用戶可以動態選擇要查看的命名空間或 Pod，而不是每次都要修改查詢。這讓同一個儀表板可以複用於不同的服務和環境，大大提升儀表板的實用性。

讓我多分享幾個 Grafana 的實用技巧。第一個是「儀表板 as Code」——Grafana 支援把儀表板的設定匯出成 JSON 格式，然後納入 Git 版本控管。這樣當你的儀表板設定好之後，可以把 JSON 文件提交到 Git repo，其他人想要在新環境部署同樣的儀表板，只需要匯入 JSON 就好了，不需要手動重建。搭配 Grafana 的 Provisioning 功能（把儀表板 JSON 放到特定目錄，Grafana 會自動載入），就能在自動化部署的時候也把儀表板一起部署好。

第二個是 Grafana Annotations（注解）。Annotations 讓你可以在圖表上打一個時間點的標記，比如「這個時間點我們做了一次部署」、「這個時間點系統發生了重啟」。有了這些標記，當你看到圖表上某個時間點的異常，可以立刻對照是不是有哪個操作導致的。在 CI/CD 流程裡，可以設定每次部署完成後，自動往 Grafana 發一個 Annotation，這樣就能在儀表板上清楚地看到每次部署對系統指標的影響。

第三個是 Grafana Explore 功能。Explore 是一個交互式的查詢介面，特別適合臨時查詢和排查問題。你可以在 Explore 裡用 PromQL 自由探索各種指標，不需要在儀表板上加 Panel，查完就走。這對新手學習 PromQL 特別有用，你可以即時看到查詢結果，理解每個 PromQL 函數的效果。

第四個是 Grafana 的多租戶管理。在大型企業裡，不同的團隊可能需要看不同的儀表板，但又不想讓他們看到其他團隊的數據。Grafana 支援通過 Organization 和 Team 來管理存取控制，不同的 Organization 之間完全隔離，不同的 Team 可以有不同的儀表板存取權限。

說到 Grafana 的未來，Grafana Labs 這幾年不只在做視覺化工具，還推出了整個可觀測性平台：Grafana Loki（日誌）、Grafana Tempo（分散式追蹤）、Grafana Mimir（大規模 Prometheus）。這個生態的優點是所有工具都無縫整合在 Grafana 裡，讓你可以在一個介面裡同時看指標、日誌、追蹤，做關聯分析。這是可觀測性領域非常重要的發展趨勢，值得持續關注。

更多儀表板和 Grafana 使用技巧，可以去 grafana.com 官網查看文件！`,
    duration: "7"
  },
  {
    title: "日誌管理：EFK Stack",
    subtitle: "Elasticsearch + Fluentd + Kibana 集中化日誌",
    section: "日誌管理",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-yellow-400 font-semibold">Elasticsearch</p>
            <p className="text-slate-400 text-xs mt-1">分散式搜索引擎，儲存和索引所有日誌</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-3xl mb-2">🌊</p>
            <p className="text-green-400 font-semibold">Fluentd / Fluent Bit</p>
            <p className="text-slate-400 text-xs mt-1">DaemonSet 部署，從每個節點收集日誌並轉發</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg text-center">
            <p className="text-3xl mb-2">📊</p>
            <p className="text-k8s-blue font-semibold">Kibana</p>
            <p className="text-slate-400 text-xs mt-1">視覺化介面，搜索、過濾和分析日誌</p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-slate-300 text-sm mb-2">資料流向：</p>
          <p className="text-k8s-blue text-center font-mono text-sm">Pod 日誌 → Fluent Bit（DaemonSet）→ Elasticsearch → Kibana</p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold text-sm mb-1">現代替代方案：Loki Stack</p>
          <p className="text-slate-400 text-xs">Grafana Loki + Promtail：輕量級、與 Prometheus 生態整合、成本較低</p>
        </div>
      </div>
    ),
    notes: `好，現在我們來看日誌管理。監控告訴你「發生了什麼」（CPU 使用率上升），日誌告訴你「為什麼會發生」（具體的錯誤訊息）。兩者是互補的。

在 K8s 環境裡，日誌管理面臨一個特殊的挑戰：Pod 是臨時的（ephemeral）。當一個 Pod 死掉並被重新創建，之前的日誌就消失了。如果你的 Pod 因為 OOM（記憶體不足）崩潰了，你想要查看崩潰前的日誌來排查原因，但 Pod 已經重建，日誌已經不在了。這就是為什麼我們需要集中化的日誌管理：把所有 Pod 的日誌即時轉發到一個持久化的存儲系統，不管 Pod 死活，日誌都保留著。

EFK Stack 是業界最常用的 K8s 日誌解決方案，由三個組件組成：

Elasticsearch 是一個分散式的搜索引擎和數據存儲系統。它使用 Lucene 作為底層，支援強大的全文搜索功能，並且可以水平擴展以處理大量數據。在 EFK Stack 中，Elasticsearch 負責存儲和索引所有的日誌數據，讓你可以快速搜索。

Fluentd（或更輕量的 Fluent Bit）是日誌收集和轉發器。它以 DaemonSet 的方式部署，也就是在每個 K8s 節點上都跑一個 Fluentd/Fluent Bit 的 Pod。這個 Pod 會讀取節點上所有容器的日誌（通常在 /var/log/containers/ 目錄下），進行解析和過濾，然後把日誌轉發到 Elasticsearch。Fluent Bit 比 Fluentd 更輕量，資源消耗更少，在 K8s 環境中越來越受歡迎。

Kibana 是 Elasticsearch 的視覺化介面。通過 Kibana，你可以搜索日誌、創建儀表板、設置告警等。Kibana 的 Discover 功能讓你可以用 KQL（Kibana Query Language）語法快速搜索日誌，比如 kubernetes.namespace: production AND level: error 來搜索 production namespace 裡的錯誤日誌。

需要提一下的是，現在也有很多公司在用 Grafana Loki 來替代 EFK Stack。Loki 是 Grafana Labs 推出的輕量級日誌存儲系統，它的設計思想跟 Prometheus 很像：不對日誌內容建立全文索引（這樣節省大量存儲和計算資源），只對日誌的標籤（labels）建立索引。Loki 的優點是資源消耗少、成本低、與 Grafana 無縫整合；缺點是搜索功能沒有 Elasticsearch 強大。如果你的日誌量不是特別大，Loki 是一個很好的選擇。

關於 EFK vs Loki 的選擇，我再補充幾個判斷標準：

如果你的日誌量非常大（每天幾個 TB），Elasticsearch 的全文索引功能雖然強大，但存儲成本和計算資源消耗也很大。這種情況下，Loki 的成本優勢就非常明顯了。

如果你需要對日誌內容做複雜的全文搜索（比如在所有日誌裡搜索特定的錯誤碼或用戶 ID），Elasticsearch 的搜索能力是 Loki 無法比擬的。

如果你的團隊已經在用 Grafana 看 Prometheus 指標，那使用 Loki 可以讓你在同一個 Grafana 介面裡同時看指標和日誌，甚至可以把指標和日誌關聯起來看（Grafana 的 Correlate 功能），大大提升排障效率。

很多中小型公司現在都在從 EFK 遷移到 Loki，因為運維更簡單、成本更低。但 Elasticsearch 的生態和功能仍然是業界最成熟的，如果你在大型企業工作，遇到 EFK 的機率仍然很高。`,
    duration: "10"
  },
  {
    title: "集中化日誌實作",
    subtitle: "部署 EFK，讓日誌永遠找得到",
    section: "日誌管理",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-green-400 font-semibold mb-2">Fluent Bit DaemonSet 關鍵設定</p>
          <pre className="text-slate-300 text-xs font-mono">{`apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluent-bit
  namespace: logging
spec:
  selector:
    matchLabels:
      app: fluent-bit
  template:
    spec:
      volumes:
      - name: varlog
        hostPath:
          path: /var/log       # 掛載節點日誌目錄
      containers:
      - name: fluent-bit
        image: fluent/fluent-bit:latest
        volumeMounts:
        - name: varlog
          mountPath: /var/log`}</pre>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg">
          <p className="text-k8s-blue font-semibold text-sm mb-1">查看 Pod 日誌</p>
          <pre className="text-slate-300 text-xs font-mono">{`# 即時追蹤日誌
kubectl logs -f pod-name -n production

# 查看崩潰前的日誌（-p = previous）
kubectl logs pod-name -p -n production

# 查看多個 Pod 的日誌（用 label selector）
kubectl logs -l app=backend -n production`}</pre>
        </div>
      </div>
    ),
    notes: `好，我們來看一下日誌管理的實際操作。

首先，即使沒有 EFK Stack，K8s 自己也有基本的日誌功能，就是 kubectl logs 指令。kubectl logs 讀取的是容器的標準輸出（stdout）和標準錯誤（stderr）。這是最基本的日誌查看方式，對於開發和簡單的排錯非常有用。

常用的 kubectl logs 選項：-f（follow，即時追蹤日誌，就像 tail -f）、-p（previous，查看上一個已崩潰容器的日誌，這對排查崩潰原因非常重要）、--tail=100（只顯示最後 100 行）、--since=1h（只顯示最近 1 小時的日誌）、-c container-name（如果 Pod 有多個容器，指定要查看哪個）。

但是 kubectl logs 只能查看當前存在的 Pod 的日誌，而且日誌數量是有限的（默認保存最後幾個 MB）。這就是為什麼我們需要 EFK Stack。

在 EFK Stack 的設定中，最關鍵的是 Fluent Bit 的 DaemonSet。這個 DaemonSet 需要把節點的 /var/log 目錄掛載進來，因為 K8s 的容器日誌就存放在 /var/log/containers/ 下面，格式是 pod-name_namespace_container-name-container-id.log。

Fluent Bit 的配置文件（通常是 ConfigMap）需要設定：
- Input：從哪裡讀取日誌（通常是 tail，跟蹤 /var/log/containers/*.log）
- Filter：對日誌進行解析和過濾（比如解析 JSON 格式的日誌，添加 K8s 元數據如 namespace、Pod 名稱等）
- Output：把日誌發送到哪裡（Elasticsearch 的地址和認證信息）

一個最佳實踐是：讓你的應用程式輸出結構化日誌（JSON 格式）。結構化日誌比純文字日誌更容易解析、搜索和分析。比如，輸出 {"level":"error","message":"database connection failed","timestamp":"2024-01-15T10:00:00Z"} 這樣的 JSON 日誌，在 Kibana 裡就可以直接按照 level、message 等字段來過濾，非常方便。

在 Kibana 裡，你可以用 Discover 功能搜索日誌：選擇時間範圍，用 KQL 語法輸入查詢條件，比如 kubernetes.namespace_name: production AND log.level: error。這樣就能快速找到 production namespace 裡的所有錯誤日誌，不管那個 Pod 現在是否還在運行。

另外，Kubernetes Audit Log（稽核日誌）也是一個非常重要的安全監控手段，和應用日誌是不同的東西。K8s Audit Log 記錄了所有對 API Server 的操作：誰在什麼時間做了什麼。比如「用戶 admin 在 10:30 刪除了 production namespace 的 Deployment」、「ServiceAccount app-sa 在 10:31 嘗試列出 Secrets 但被拒絕」。

啟用 Audit Log 需要在 API Server 的設定中指定 audit policy 文件和 audit log 的路徑。在生產環境，建議把 Audit Log 也整合到你的 EFK 或 Loki 系統中，並設定告警規則（比如：有人嘗試存取 Secrets 被拒絕、有人刪除了 PV 等高風險操作）。這樣你就能在安全事件發生時，有完整的稽核記錄可以追溯。

日誌管理設定完之後，建議定期查看 Kibana 的 Discover 功能，確認日誌收集正常，沒有遺漏任何重要的 namespace 或服務。另外，設定日誌保留策略也很重要，生產環境通常保留 30-90 天，既要能追查問題，又要控制儲存成本。`,
    duration: "11"
  },
  {
    title: "Kibana 日誌查詢實戰",
    subtitle: "KQL 查詢 + 結構化日誌 = 排障神器",
    section: "日誌管理",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-green-400 font-semibold mb-2">常用 KQL 查詢語法</p>
          <pre className="text-slate-300 text-xs font-mono">{String.raw`# 找 production namespace 的錯誤
kubernetes.namespace_name: "production" AND log.level: "error"

# 找特定 Pod 的最近日誌
kubernetes.pod_name: "backend-*" AND @timestamp > now-30m

# 找包含特定關鍵字的日誌
message: "connection refused" OR message: "timeout"

# 組合查詢：特定服務的高延遲日誌
service.name: "payment-api" AND responseTimeMs > 3000`}</pre>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-k8s-blue font-semibold text-sm mb-1">📋 事件排查 SOP</p>
            <ol className="text-slate-400 text-xs space-y-1 list-decimal list-inside">
              <li>Grafana 告警通知</li>
              <li>看指標確認受影響服務</li>
              <li>Kibana 搜尋該服務錯誤日誌</li>
              <li>用 requestId 追蹤完整呼叫鏈</li>
              <li>找到根因，修復並復盤</li>
            </ol>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-yellow-400 font-semibold text-sm mb-1">✅ 結構化日誌最佳實踐</p>
            <pre className="text-slate-300 text-xs font-mono">{String.raw`{
  "level": "error",
  "service": "checkout",
  "requestId": "req-abc123",
  "userId": "u-456",
  "error": "DB timeout",
  "durationMs": 5012
}`}</pre>
          </div>
        </div>
      </div>
    ),
    notes: `好，現在我們來看 Kibana 的實際操作和日誌查詢技巧。掌握了這些技巧，你在排查生產問題的時候效率會大幅提升。

Kibana 的核心查詢語言是 KQL（Kibana Query Language）。KQL 的語法非常直觀，讓我逐一說明：

最基本的查詢是 field: value，比如 kubernetes.namespace_name: "production" 就是找所有來自 production 命名空間的日誌。用 AND 和 OR 可以組合多個條件，括號可以控制優先級。

萬用字元（Wildcard）非常好用：kubernetes.pod_name: "backend-*" 可以找到所有名稱以 backend- 開頭的 Pod 的日誌，不管後面的 hash 是什麼。這在 Deployment 創建的 Pod 名稱有隨機後綴時特別有用。

範圍查詢用 > 、< 、>= 、<= ，比如 responseTimeMs > 3000 找出所有回應時間超過 3 秒的請求，這對找出慢查詢非常有效。

@timestamp > now-30m 這樣的相對時間查詢，可以快速聚焦在最近一段時間的日誌，不需要手動選擇時間範圍。

接下來我要強調一個非常重要的最佳實踐：結構化日誌（Structured Logging）。

傳統的日誌長這樣：「2024-01-15 10:00:00 ERROR checkout service: database connection timeout after 5012ms, userId=u-456, requestId=req-abc123」這樣的純文字日誌，在 Kibana 裡只能做全文搜索，沒辦法按照欄位篩選或統計。

結構化日誌改用 JSON 格式輸出，每個重要的字段都作為獨立的 JSON key。這樣 Fluentd/Fluent Bit 在收集日誌時會自動解析 JSON，把每個字段都索引到 Elasticsearch。然後在 Kibana 裡，你可以直接按照 userId、requestId、durationMs 等字段來過濾和聚合，威力強大很多。

最有用的字段是 requestId（請求追蹤 ID）。每個進入系統的請求都應該有一個唯一的 requestId，這個 ID 在整個請求的處理過程中一直傳遞下去（包括微服務之間的呼叫）。當你在 Kibana 裡搜索這個 requestId，就能找到這個請求在每個服務裡的日誌，把完整的請求路徑串起來，快速定位問題在哪個環節發生的。

實際的排查流程通常是這樣的：首先 Grafana 告警告訴你錯誤率上升了；然後看 Grafana 儀表板確認是哪個服務出問題、從什麼時間點開始；接著打開 Kibana，搜索那個服務那個時間段的 error 日誌；從日誌裡找到某個有問題的 requestId；用這個 requestId 再搜索，追蹤整個請求的完整路徑；最後找到根因，可能是資料庫超時、某個上游服務異常等。

這套組合技——Prometheus 負責告警、Grafana 負責呈現趨勢、Kibana 負責深入排查日誌——就是現代生產環境可觀測性實踐的標準工作流程。掌握了這套流程，你在面試時說「我有生產環境排障經驗」就有底氣了！`,
    duration: "8"
  },
  {
    title: "CKA 認證攻略",
    subtitle: "考試重點 × 備考策略 × 實用技巧",
    section: "課程總結",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">考試基本資訊</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>⏰ 時長：2 小時</li>
              <li>📝 題型：實作（操作 K8s）</li>
              <li>✅ 通過分數：66 分</li>
              <li>🌐 可開瀏覽器查文件</li>
              <li>💰 費用：約 395 美金</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-semibold mb-2">考試重點分布</p>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• 儲存 (10%)</li>
              <li>• 工作負載與調度 (15%)</li>
              <li>• 服務與網路 (20%)</li>
              <li>• 叢集架構、安裝設定 (25%)</li>
              <li>• 故障排除 (30%)</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-400/10 border border-green-400/30 p-3 rounded-lg">
          <p className="text-green-400 font-semibold text-sm mb-1">備考資源推薦</p>
          <ul className="text-slate-300 text-xs space-y-1">
            <li>• killer.sh — 官方提供的模擬考試環境（購票後附贈兩次）</li>
            <li>• Kubernetes 官方文件（考試可以查，要熟悉結構）</li>
            <li>• Killercoda 免費 K8s 練習場景</li>
          </ul>
        </div>
      </div>
    ),
    notes: `好，接下來我給想要考取 CKA 認證的同學一些建議。CKA 全名是 Certified Kubernetes Administrator，是 CNCF（雲原生計算基金會）官方認可的 K8s 管理員認證，也是目前業界最受重視的 K8s 認證之一。

CKA 考試的形式很特別：它不是選擇題，而是完全的實作考試。你會在一個真實的 K8s 環境中操作，回答各種實際問題，比如「在 production namespace 建立一個 Deployment，3 個副本，使用 nginx:1.19 映像」或者「診斷並修復 node01 節點上的問題」。考試時間是 2 小時，題目大約 15-20 道，通過分數是 66 分。

考試的一個重要特點是：你可以開瀏覽器，訪問 Kubernetes 官方文件（kubernetes.io/docs）。這不代表你不需要記東西，但它確實讓你在忘記某個 YAML 格式的時候可以查一下。

考試重點的分布要特別注意：故障排除（Troubleshooting）佔了 30%，是最大的部分！所以練習排查各種 K8s 問題（Pod 啟動失敗、節點不可用、Service 連不上等）是非常重要的。其次是叢集架構和安裝設定（25%），服務與網路（20%）。

我的備考建議：

第一，熟練使用 kubectl 的命令式指令（imperative commands）。考試時間很緊，如果你每次都要手寫 YAML，會來不及。很多操作可以直接用 kubectl create deployment、kubectl expose、kubectl create configmap 這些指令快速完成，然後再用 kubectl get 和 kubectl edit 來修改。

第二，學好 kubectl explain。當你忘記某個資源的字段名稱，可以用 kubectl explain pod.spec.containers.securityContext 來查看，不需要切換到瀏覽器。

第三，熟悉 vim 或 nano。考試環境是 Linux，你需要用終端機文字編輯器來修改 YAML 文件。如果你不熟悉 vim，至少要會基本操作：i 進入插入模式，ESC 退出插入模式，:wq 存檔並退出，:q! 不存檔退出。

第四，一定要在 killer.sh 上練習。killer.sh 是官方提供的模擬考試環境，它的題目比真實考試更難，但環境非常接近。建議至少做兩遍，第一遍不懂的就查，第二遍計時自己做。

第五，善用 --dry-run=client -o yaml 技巧。這讓你可以用命令式指令生成 YAML 模板，然後再修改。比如 kubectl create deployment myapp --image=nginx --dry-run=client -o yaml > myapp.yaml，這樣就快速生成了一個 Deployment 的 YAML 模板，你只需要修改需要改的部分就好了。

最後給大家一個非常實用的考前準備建議：在家裡用 minikube 或 kind 建立一個練習環境，每天做 5-10 道練習題，持續一個月。重點練習以下操作：排查 Pod 啟動失敗（ImagePullBackOff、CrashLoopBackOff、Pending 等）；etcd 的備份和恢復；升級叢集版本；建立各種 RBAC 設定；設定 NetworkPolicy；處理 Node NotReady 問題。

另外，考試前一定要確保你能快速打出常用的 kubectl 指令，不需要查文件。特別是 kubectl get events --sort-by=.lastTimestamp、kubectl describe pod、kubectl logs --previous 這些排查問題的指令，要做到肌肉記憶的程度。祝大家考試順利！

最後祝大家 CKA 一次通過！記得考試當天要早點睡，考試前確認好網路環境和相機，準時進入考試。加油！`,
    duration: "11"
  },
  {
    title: "學習資源與課程結語",
    subtitle: "持續學習，成為 K8s 高手！",
    section: "課程總結",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-k8s-blue font-semibold text-sm mb-2">📚 官方資源</p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>• kubernetes.io/docs</li>
              <li>• CNCF 官方 YouTube</li>
              <li>• K8s GitHub 倉庫</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-green-400 font-semibold text-sm mb-2">🎮 練習平台</p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>• Killercoda.com（免費）</li>
              <li>• killer.sh（付費，考試附贈）</li>
              <li>• Play with Kubernetes（免費）</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-yellow-400 font-semibold text-sm mb-2">📖 推薦書籍</p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>• Kubernetes in Action</li>
              <li>• The Kubernetes Book</li>
              <li>• Programming Kubernetes</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-3 rounded-lg">
            <p className="text-red-400 font-semibold text-sm mb-2">🌐 社群</p>
            <ul className="text-slate-400 text-xs space-y-1">
              <li>• CNCF Slack (#kubernetes)</li>
              <li>• Stack Overflow</li>
              <li>• Reddit r/kubernetes</li>
            </ul>
          </div>
        </div>
        <div className="bg-k8s-blue/10 border border-k8s-blue/30 p-4 rounded-lg text-center">
          <p className="text-k8s-blue text-lg font-bold">🎉 上午課程完成！</p>
          <p className="text-slate-300 text-sm mt-1">下午 13:00 見，我們將學習最佳實踐、架構模式和職涯發展！</p>
        </div>
      </div>
    ),
    notes: `好！今天早上的課程到這裡就結束了！讓我先給大家一個回顧，今天早上我們學了什麼。

我們學了 K8s 安全的三大支柱：RBAC（確保只有正確的人能做正確的事）、Pod Security（確保容器在安全的環境下運行）、Network Policy（確保 Pod 之間的通信是受控的）。我們還學了監控的 Prometheus + Grafana，以及日誌管理的 EFK Stack，最後看了 CKA 認證的備考攻略。

現在給大家推薦一些後續的學習資源。

官方文件是最好的學習資源，kubernetes.io/docs 上面有非常完整的文件和教程。如果你想深入了解某個功能，去官方文件查是最準確的。另外，CNCF 的官方 YouTube 頻道有非常多高質量的演講和教程，包括 KubeCon 的演講，這些演講都是業界頂尖工程師分享的真實生產經驗，非常值得觀看。

練習平台方面，Killercoda 是我最推薦的免費練習平台。它有大量的 K8s 練習場景，從基礎到進階都有，而且是真實的 K8s 環境，不需要在自己電腦上安裝任何東西。

書籍方面，Kubernetes in Action（第二版）是業界公認的最佳 K8s 入門書，作者 Marko Luksa 把 K8s 的每個概念都解釋得非常清楚。The Kubernetes Book 是另一本適合入門的書，篇幅比較短，適合快速上手。

社群方面，CNCF 的 Slack 工作區有一個 #kubernetes 頻道，你可以在那裡提問，通常很快就會有人回答。Stack Overflow 的 kubernetes 標籤也是一個很好的資源，很多常見問題都已經有詳細的解答了。

最後，我想說的是：學習 K8s 的最好方式是動手實踐。不要光看教程，要在自己的環境裡動手部署、動手設定、動手排錯。每次動手的時候，你都會遇到新的問題，解決了這些問題，你的技能就會真正提升。

好，我們午餐休息，下午一點見！下午我們要學習 K8s 的最佳實踐、架構設計模式、CI/CD，以及最重要的——職涯發展建議。下午的課程對你的職涯規劃非常有幫助，不要缺席！

在我們去吃午餐之前，我想跟大家做一個小小的思考練習。請問問自己：在這七天的學習裡，哪一個概念讓你最有「啊哈！原來如此」的感覺？是理解了 Pod 和 Deployment 的關係？是第一次成功跑起來一個 Ingress 路由？還是今天搞清楚了 RBAC 的五個核心物件？記住這個感覺，因為這就是學習的本質——把複雜的事物理解成自己能掌握的東西，然後在此基礎上繼續建立新的理解。

我想說的是，七天的密集課程只是一個開始，不是終點。K8s 的世界非常廣大，還有很多我們來不及深入的主題：Service Mesh（Istio、Linkerd）、GitOps 工作流程（Argo CD、Flux）、多叢集管理、成本最佳化（FinOps）、K8s Operator 開發等等。這些都是業界非常熱門的技術，也是資深 K8s 工程師的必備知識。但這些都不是一週能學會的，而是要在有了紮實基礎之後，在實際工作中慢慢積累。

給大家一個具體的行動計劃建議：這週做一個事情，在你的電腦上用 minikube 或 kind 建立一個本地 K8s 叢集，然後把你工作中現有的某個應用程式（就算只是一個簡單的 Web 服務）容器化，部署到這個本地叢集，加上 Service、Ingress、ConfigMap、HPA。這個小小的實踐，會讓你學到的知識真正固化成技能。

下個月，如果你有辦法在工作中用 K8s 的環境（哪怕只是 staging 環境），嘗試把你們公司的某個服務部署上去，並且設定好 RBAC 和監控。能在真實工作環境中應用，是最快的學習方式。

三個月後，考慮報名 CKA 考試。三個月的練習，配合 killer.sh 的模擬考試，通過 CKA 是完全可行的目標。CKA 認證對履歷的加分非常大，很多公司在篩選 K8s 工程師的時候，CKA 是一個重要的篩選條件。

六個月後，如果你一直有在實踐，你對 K8s 的理解應該已經達到能夠獨立設計和維護生產叢集的程度了。這時候可以開始研究更進階的主題，或者考慮 CKS（Certified Kubernetes Security Specialist）認證，這是安全方面的進階認證。

當然，這只是一個建議的路徑，每個人的情況不同，步調也不同。重要的是保持持續學習的習慣，不要因為離開這個課堂就停止成長。

最後，我想說的是：你們今天完成了一件了不起的事——在七天之內，從基礎開始，建立了一套完整的 Kubernetes 知識體系。這不是每個人都做得到的事情，值得你為自己感到驕傲。接下來的路，雖然還很長，但你已經有了很好的起點。Keep learning, keep building, keep shipping！

感謝大家七天的陪伴和信任，希望這次課程是你 Kubernetes 學習旅程中一個重要的里程碑！加油，大家都會有很好的未來！

【預期難搞學員問題 — 第七堂早上】

Q：RBAC 最小權限在專案初期很花時間，值得嗎？

A：值得，因為權限債通常會在事故時一次還清且利息很高。先把高風險操作切開授權，再逐步細化，是成本可控的做法。

Q：臨時給 cluster-admin 最快，為什麼你不建議常態化？

A：因為它會破壞責任邊界，且難以審計。可以有緊急流程，但必須有時效、審批與追蹤，不應成為日常捷徑。

Q：Pod Security Restricted 會卡住舊服務，怎麼平滑導入？

A：先 audit 再 warn，最後 enforce，並提供修正範本給開發團隊。安全治理要有過渡期，否則只會得到大量例外申請。

Q：NetworkPolicy 開了後 DNS 常壞掉，核心原因是什麼？

A：通常是遺漏到 DNS 與系統命名空間的必要流量。政策收斂時要先列出基礎依賴，不然看似安全其實是服務不可用。

Q：Prometheus 指標越多越好嗎？

A：不是。高基數指標會快速吃掉成本與查詢效能。要以故障定位價值為導向，保留關鍵訊號而非蒐集一切。

Q：告警太多會疲勞，應該先做哪件事？

A：先清理無行動價值的告警，讓每一則都可對應明確處置。告警系統目標是促成有效反應，不是製造噪音。

Q：日誌要保留多久才合理？

A：看法規、資安需求與成本平衡。通常會分熱資料與冷資料分層保存，避免全部高成本長留。策略必須可審計且可執行。

Q：request ID 和 trace ID 都要嗎？

A：在微服務場景通常都要。request ID 便於入口追蹤，trace ID 串跨服務鏈路，兩者結合才能在事故時快速還原全貌。`,
    duration: "6"
  },
]
