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
    title: "Kubernetes 入門",
    subtitle: "從新手到叢集管理員實務班",
    section: "第一堂課",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-k8s-blue rounded-full flex items-center justify-center text-4xl">
            ☸️
          </div>
          <div>
            <p className="text-2xl font-semibold">Linux 操作入門</p>
            <p className="text-slate-400">比較 Linux 與 Windows 差異、Linux 基礎概念</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 text-base">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">講師</p>
            <p>陳彥彤</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">助教</p>
            <p>葉祈佑</p>
          </div>
        </div>
      </div>
    ),
    notes: `大家好，非常歡迎大家來到這個 Kubernetes 從新手到叢集管理員的實務課程！

我是今天的講師陳彥彤，大家可以叫我彥彤老師。旁邊這位是助教葉祈佑，如果大家在上課過程中有任何操作問題，或是電腦環境出了狀況，都可以舉手請助教過來協助，不用擔心打擾到其他人。

在正式進入 Kubernetes 之前，我們需要先打好基礎，特別是 Linux 的基礎。你可能會問：我來學 K8s，為什麼要先學 Linux？這是個很好的問題。因為 Kubernetes 完全是建構在 Linux 之上的，所有的節點、Pod、容器，底層都是 Linux 在運作。如果你不懂 Linux，你在操作 K8s 的時候會非常吃力，尤其是在除錯或是排查問題的時候。

整個課程的學習路徑是：先打好 Linux 基礎 → 學習 Docker 容器技術 → 最後進入 Kubernetes 叢集管理。每一步都建立在前一步的基礎上。

今天上午我們會花三個小時，從最基本的概念開始，帶大家認識 Linux 這個強大的作業系統。到了今天結束，你應該可以用 SSH 連上一台 Linux 主機，執行基本的指令。準備好了嗎？我們開始！

**關於這堂課的教學風格說明：**

這個課程以實作為主，理論為輔。每一個概念我都會盡量配合實際操作來說明，因為 Linux 是一個需要動手才能真正理解的系統。光是聽我講或看投影片，效果非常有限。所以等一下每次我切換到終端機演示的時候，請大家同步打開自己的終端機，跟著一起輸入指令。

不要擔心打錯字。Linux 的錯誤訊息其實非常詳細，很多時候它直接告訴你哪裡錯了，怎麼修。打錯、看到錯誤、修正、再試一次，這個循環就是學習的核心過程。職業工程師每天也在做一樣的事，差別只在於他們更快找到問題所在。

有問題的時候，請立刻舉手，不要憋著。你現在的問題，很可能是其他人也想問但不好意思開口的問題。把問題說出來，對整個班都有幫助。我們開始吧！`,
    duration: "3"
  },

  // ========== 47 小時課程總覽 ==========
  {
    title: "47 小時完整課程大綱",
    subtitle: "從 Linux 新手到 Kubernetes 叢集管理員",
    section: "課程總覽",
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { day: "Day 1", icon: "🐧", am: "Linux 基礎入門", pm: "Linux 指令實作", color: "text-green-400" },
            { day: "Day 2", icon: "🐳", am: "Docker 概念、架構與安裝", pm: "Docker 實作 + Day 3 擴充", color: "text-blue-400" },
            { day: "Day 3", icon: "🐳", am: "容器進階操作", pm: "容器資料管理實戰", color: "text-blue-400" },
            { day: "Day 4", icon: "☸️", am: "Kubernetes 架構", pm: "kubectl 與 YAML", color: "text-k8s-blue" },
            { day: "Day 5", icon: "📦", am: "工作負載管理", pm: "Service & Ingress", color: "text-k8s-blue" },
            { day: "Day 6", icon: "💾", am: "組態管理", pm: "持久化儲存", color: "text-k8s-blue" },
            { day: "Day 7", icon: "🛡️", am: "安全與監控", pm: "實戰演練 & 畢業", color: "text-yellow-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-2.5 rounded-lg">
              <span className="text-2xl w-10 text-center">{item.icon}</span>
              <span className={`font-bold w-16 ${item.color}`}>{item.day}</span>
              <div className="flex-1 grid grid-cols-2 gap-4 text-sm">
                <span className="text-slate-300">☀️ {item.am}</span>
                <span className="text-slate-400">🌙 {item.pm}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-slate-400">Linux 基礎</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-slate-400">Docker 容器</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-k8s-blue rounded-full"></div>
            <span className="text-slate-400">Kubernetes</span>
          </div>
        </div>
      </div>
    ),
    notes: `這是整個 47 小時課程的完整大綱，讓學員一開始就對整個學習旅程有清晰的概念。

**課程設計理念：**

這個課程是循序漸進的設計，每一天都建立在前一天的基礎上：

**第一階段：Linux 基礎（Day 1）**
- 上午：從零開始認識 Linux，理解為什麼要學、跟 Windows 有什麼不同、怎麼連線
- 下午：實際動手操作，學習檔案操作、目錄導覽、權限管理等核心指令

為什麼先學 Linux？因為 Docker 和 Kubernetes 都是在 Linux 上運作的。不懂 Linux，後面會很辛苦。這是地基。

**第二階段：Docker 容器化（Day 2-3）**
- Day 2 上午：環境一致性、容器概念、Docker 架構與安裝驗證
- Day 2 下午：Docker 基本指令、Nginx 容器實作，並延伸到映像、生命週期、網路、Port Mapping、Volume 與 Dockerfile
- Day 3 上午：在既有課程安排中，再次深化容器操作、網路、環境變數與資源限制
- Day 3 下午：延續資料管理與多容器實戰，補強映像建構與應用整合觀念

Docker 是 Kubernetes 的基礎。Pod 裡面跑的就是容器。不懂容器，學 K8s 只能死記硬背。

**第三階段：Kubernetes 核心（Day 4-6）**
- Day 4：K8s 架構概念 + kubectl 基本操作 + YAML 撰寫
- Day 5：Deployment、HPA、DaemonSet、StatefulSet 等工作負載，以及 Service、Ingress 讓外部可以存取
- Day 6：ConfigMap、Secret 組態管理，PV、PVC 持久化儲存

這三天是 K8s 的核心知識，學完你就能獨立操作一個 K8s 叢集。

**第四階段：企業實戰（Day 7）**
- 上午：RBAC 權限控制、Prometheus + Grafana 監控、EFK 日誌收集——企業環境必備
- 下午：三場實戰演練，把七天學的東西串在一起，最後是畢業典禮和 Q&A

**為什麼這個順序很重要？**

我見過很多人直接跳進 K8s，結果連 Pod 為什麼起不來都不會查。因為他們不會 docker logs，不會進容器裡面看，不懂 Linux 怎麼排查問題。

這個課程的設計是：先打好基礎，再往上蓋。每一天都是前一天的延伸。到最後一天，你已經具備了完整的知識鏈條。

**給學員的提醒：**

這七天的學習量很大，不要期望一次全部記住。重要的是：
1. 理解「為什麼」比記住「怎麼做」更重要
2. 課後一定要自己動手練習
3. 把學到的東西跟工作上的場景連結

七天之後，你會從「完全不懂」變成「知道該怎麼開始」。這已經是非常大的進步了。`,
    duration: "5"
  },

  // ========== 今日課程大綱 ==========
  {
    title: "今日課程大綱",
    section: "課程總覽",
    content: (
      <div className="grid gap-4">
        {[
          { time: "09:00-09:50", topic: "環境確認 + 為什麼要學 Linux", icon: "💻" },
          { time: "09:50-10:00", topic: "休息", icon: "☕" },
          { time: "10:00-10:50", topic: "Linux vs Windows + 核心概念", icon: "🐧" },
          { time: "10:50-11:00", topic: "休息", icon: "☕" },
          { time: "11:00-12:00", topic: "實作：第一次登入 Linux", icon: "🔧" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <p className="text-k8s-blue text-sm">{item.time}</p>
              <p className="text-lg">{item.topic}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    notes: `今天上午的課程安排是 50 分鐘上課、10 分鐘休息的模式，之後每堂課都會是這樣。最後一節是完整的 60 分鐘。

9:00 到 9:50 第一節：環境確認加上為什麼要學 Linux。助教先發放主機連線資訊，確保每個人能連上練習主機，然後進入 Linux 的重要性。

9:50 到 10:00 休息十分鐘。

10:00 到 10:50 第二節：Linux 和 Windows 的差異比較，以及 Linux 核心概念。

10:50 到 11:00 再休息十分鐘。

11:00 到 12:00 第三節：實作時間，完整一小時讓每個人親自用 SSH 登入 Linux 主機。有問題隨時提出來。

---

**講師備忘：課程時間管理技巧**

上午的三小時要安排得緊湊但不趕，幾個時間管理的提醒：

環境確認（9:00-9:20）要快速推進：助教先把主機資訊發給大家，同時請每個人確認終端機能開啟。遇到 SSH 工具未安裝或連線失敗的問題，助教個別處理，不要讓全班等待。20 分鐘內確認所有人都能連線，就可以繼續。

「為什麼學 Linux」那段（9:30-10:00）可以多一點互動，問問學員「你們現在工作中有沒有接觸過 Linux？遇到過什麼困難？」根據回答來調整接下來的深度。如果班上大部分都是進階學員，這段可以快一些；如果多數是新手，可以多花一點時間講真實案例。

Linux vs Windows 的比較（10:00-10:30）最容易引發討論，因為每個人對 Windows 都有使用經驗，很容易有感觸。預留一些 buffer 讓學員提問和討論，但注意不要被帶跑太遠，保持在「差異比較」這個主題上。

核心概念（10:30-11:15）是密度最高的一段，45 分鐘要講完檔案系統結構和使用者權限，速度要控制好。建議採用「講一個概念 → 立刻舉實際例子 → 讓學員提問 → 繼續下一個概念」的節奏，避免一口氣講完所有內容再問問題。

實作時間（11:15-12:00）是重中之重，一定要留足夠的時間讓所有人成功登入。如果前面的時間超了，可以適當壓縮 Q&A 或「常用指令預告」的時間，但實作時間要保護好。有學員當場連線成功，會給整個班的信心很大的加持。`,
    duration: "2"
  },

  // ========== 環境確認 ==========
  {
    title: "環境確認",
    subtitle: "確保每個人都準備好了",
    section: "",
    content: (
      <div className="space-y-6">
        <p className="text-xl">請確認你有以下工具：</p>
        <div className="grid gap-3">
          {[
            { item: "一台可以上網的電腦（Windows/Mac 都可以）", check: true },
            { item: "SSH 連線工具（Windows: PuTTY 或 Terminal）", check: true },
            { item: "課程提供的 Linux 主機 IP 與帳號", check: true },
            { item: "一顆好奇的心！", check: true },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
              <span className="text-green-400 text-xl">✓</span>
              <p>{item.item}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg mt-6">
          <p className="text-yellow-400 font-semibold">💡 小提示</p>
          <p className="text-yellow-200">如果環境有問題，請舉手找助教協助</p>
        </div>
      </div>
    ),
    notes: `在正式開始教內容之前，先確認每個人的環境都能正常連上練習主機，這樣後面的實作才能順利進行。

需要準備的東西分四類：

一、硬體：一台可以上網的電腦，Windows、Mac、或 Linux 原生都可以。

二、SSH 連線工具。Windows 10/11 內建 Terminal（Windows 終端機），在開始選單搜尋「Terminal」即可。如果是舊版 Windows，需要下載安裝 PuTTY（免費）。Mac 直接打開「終端機」應用程式（Finder → 應用程式 → 工具程式）。Linux 原生用戶直接打開終端機。

三、練習主機資訊。助教一會兒會發給大家主機的 IP 位址、帳號和初始密碼，先收好等一下用。

四、最重要的心態準備：願意動手試、不怕出錯。Linux 學習最常見的障礙不是難度太高，而是怕打錯指令。其實打錯沒關係，看懂錯誤訊息反而是學習的機會。

現在請大家確認：能打開終端機嗎？有沒有收到主機資訊？遇到問題現在就舉手，助教過去幫忙。確保每個人都準備好了再繼續。

關於 SSH 工具的安裝細節補充：

Windows 用戶詳細說明：Windows 10 版本 1809（2018年10月更新）以後，系統內建 OpenSSH Client，可以直接在 PowerShell 或 Command Prompt 裡使用 ssh 指令。確認方式：打開 PowerShell，輸入 \`ssh --version\`，如果看到版本號就代表已安裝。如果沒有，可以到「設定 → 應用程式 → 選用功能 → 新增功能」搜尋「OpenSSH 用戶端」安裝。另一個推薦選項是 Windows Terminal（微軟官方的現代終端機應用程式），從 Microsoft Store 免費下載，支援分頁、自訂配色主題、可以同時開多個終端機視窗，使用起來比內建的 cmd 好很多。如果你的電腦是公司發的，可能有軟體安裝限制，這種情況可以請助教幫你確認有沒有替代方案。

想要在 Windows 上有更接近原生 Linux 的體驗：可以考慮安裝 WSL2（Windows Subsystem for Linux 2），這是微軟官方支援的功能，讓你在 Windows 裡跑一個完整的 Linux 環境，不需要裝虛擬機。課後有興趣的同學可以試試，安裝方式：以系統管理員身份開啟 PowerShell，執行 \`wsl --install\`，然後重開機，系統會自動幫你裝好 Ubuntu。

Mac 用戶說明：Terminal.app 內建完整的 SSH，什麼都不用安裝。路徑在「應用程式 → 工具程式 → 終端機」，或是按 Cmd+Space 用 Spotlight 搜尋「Terminal」。想要更好的體驗，推薦裝 iTerm2（免費），功能更強大，可以分割視窗、設定快捷鍵、搜尋歷史輸入等。Linux 原生用戶就更不用說了，直接打開你熟悉的終端機即可。

關於練習主機的連線資訊：助教一會兒會發給大家一張小卡（或在群組傳送），上面有：主機 IP 位址、使用者帳號（student）、初始密碼。每個人的練習主機是獨立的，資源不會互相干擾。課程期間主機會保持開機，晚上回家也可以繼續練習。

重要提醒：如果你是用公司電腦或在公司網路，可能有防火牆限制，無法連線到外部的 22 port（SSH 預設 port）。如果遇到連線逾時（Connection timed out）的問題，有可能是網路封鎖，請舉手讓助教確認，我們有備用方案（透過 web-based 終端機或 VPN）。`,
    duration: "3"
  },

  // ========== VMware 環境安裝 ==========
  {
    title: "環境安裝 - VMware",
    subtitle: "建立你的 Linux 練習環境",
    section: "",
    content: (
      <div className="space-y-6">
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold text-xl mb-2">🖥️ 為什麼用 VMware？</p>
          <ul className="space-y-2 text-slate-300">
            <li>• 課程時數長，線上環境有時間限制不適用</li>
            <li>• 後面需要同時跑多台 Linux（K8s 多節點架構）</li>
            <li>• 環境完全在你電腦上，不受網路影響</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-bold mb-2">📥 步驟一</p>
            <p>下載 VMware Workstation Player</p>
            <p className="text-slate-400 text-sm">個人學習使用免費</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-bold mb-2">📦 步驟二</p>
            <p>安裝 VMware</p>
            <p className="text-slate-400 text-sm">一直下一步即可</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-bold mb-2">📂 步驟三</p>
            <p>匯入 Ubuntu.ovf</p>
            <p className="text-slate-400 text-sm">File → Open → 選 .ovf 檔</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-bold mb-2">▶️ 步驟四</p>
            <p>啟動虛擬機</p>
            <p className="text-slate-400 text-sm">帳號：user｜密碼：zaqwsx</p>
          </div>
        </div>
      </div>
    ),
    notes: `在開始學習 Linux 之前，我們要先把練習環境準備好。這門課我們會用 VMware 虛擬機器來跑 Linux。

為什麼用 VMware？

你可能會問，為什麼不直接用線上的練習環境？原因有三個：

第一，這門課時數很長。線上環境通常有時間限制，像 KillerCoda 每小時要重開一次，Play with Docker 只有 4 小時。我們不可能每小時重新設定環境。

第二，後面的課程會學到 Kubernetes 多節點架構，需要同時跑多台 Linux。線上環境大多只能跑一台，沒辦法模擬真正的叢集。

第三，VMware 裝一次，整個課程都能用。環境完全在你電腦上，不受網路影響，也不用擔心資料不見。

安裝步驟

現在請大家跟著我一起做。

步驟一：下載 VMware Workstation Player

打開瀏覽器，搜尋「VMware Workstation Player download」，或直接輸入網址：
https://www.vmware.com/products/workstation-player.html

下載免費版的 VMware Workstation Player。個人學習使用是免費的。

步驟二：安裝 VMware

下載完成後，執行安裝程式。一直按下一步就好，沒有特別需要改的設定。安裝過程大約 3-5 分鐘。

步驟三：匯入 VM 映像檔

File → Open → 選 .ovf 檔一個 .ova 檔案，這是我預先做好的 Ubuntu 虛擬機，裡面已經裝好 Docker 和 Kubernetes 需要的工具。

在 VMware 裡面，選擇「Open a Virtual Machine」，找到 Ubuntu.ovf 檔案（注意 .ovf 和 .vmdk 要放同一個資料夾），點選「Open」。匯入需要幾分鐘，這段時間大家可以先聽我講後面的內容。

步驟四：啟動虛擬機

匯入完成後，選擇這台虛擬機，點選「Play virtual machine」。等一下就會看到 Ubuntu 的登入畫面。

帳號：student
密碼：student

VM 環境說明

這台虛擬機預裝了：
- Ubuntu 22.04 LTS
- Docker
- kubectl
- kubeadm（後面建 K8s 叢集用）

整個課程都會用這個環境，請確保它能正常啟動。

如果遇到任何問題，舉手讓助教過去協助。

（等待學員完成安裝，巡視協助）`,
    duration: "30"
  },


  // ========== 講師備課：VM 環境預裝 ==========
  {
    title: "VM 環境預裝",
    subtitle: "製作學員用 OVA 映像檔的步驟",
    section: "",
    content: (
      <div className="space-y-4">
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-semibold">⚠️ 此頁為講師備課用，上課時可跳過</p>
        </div>
        <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm">
          <pre className="text-green-400 whitespace-pre-wrap">{`# 1. 更新系統
sudo apt update && sudo apt upgrade -y

# 2. 安裝 Docker
sudo apt install -y docker.io
sudo systemctl enable docker
sudo usermod -aG docker $USER

# 3. 安裝常用工具
sudo apt install -y curl wget vim git net-tools

# 4. 清理快取（減少檔案大小）
sudo apt clean
sudo apt autoremove -y`}</pre>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-bold mb-2">📦 匯出步驟</p>
          <ol className="text-slate-300 space-y-1 list-decimal list-inside">
            <li>VM 關機：<code className="bg-slate-700 px-1 rounded">sudo poweroff</code></li>
            <li>VMware → File → Export to OVF...</li>
            <li>選擇儲存位置，點 Export</li>
            <li>將 .ovf + .vmdk 打包給學員</li>
          </ol>
        </div>
      </div>
    ),
    notes: `這頁是講師備課用的筆記，記錄如何製作學員用的 OVA 映像檔。

VM 環境預裝指令：

1. 更新系統
sudo apt update && sudo apt upgrade -y

2. 安裝 Docker
sudo apt install -y docker.io
sudo systemctl enable docker
sudo usermod -aG docker $USER

3. 安裝常用工具
sudo apt install -y curl wget vim git net-tools

4. 清理快取（減少檔案大小）
sudo apt clean
sudo apt autoremove -y

匯出 OVA 步驟：

1. 在 VM 裡執行 sudo poweroff 關機
2. 等 VM 完全關閉
3. 在 VMware 選擇該 VM
4. File → Export to OVF...
5. 選擇儲存位置
6. 點 Export
7. 等待匯出完成（會產生 .ovf 和 .vmdk 檔案）
8. 將這些檔案打包給學員使用`,
    duration: "1"
  },

  // ========== 系統資訊查詢 ==========
  {
    title: "系統資訊查詢",
    subtitle: "認識你的 Linux 環境",
    section: "Linux 基礎",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-bold mb-2">📋 系統版本</p>
            <code className="text-green-400 text-sm">cat /etc/os-release</code>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-bold mb-2">🖥️ CPU 資訊</p>
            <code className="text-green-400 text-sm">cat /proc/cpuinfo | head -20</code>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-bold mb-2">💾 記憶體</p>
            <code className="text-green-400 text-sm">free -h</code>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-bold mb-2">💿 磁碟空間</p>
            <code className="text-green-400 text-sm">df -h</code>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg md:col-span-2">
            <p className="text-yellow-400 font-bold mb-2">🌐 網路資訊</p>
            <code className="text-green-400 text-sm">ip a</code>
          </div>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-3 rounded-lg">
          <p className="text-k8s-blue text-sm">💡 這些指令可以快速了解一台 Linux 機器的基本配置</p>
        </div>
      </div>
    ),
    notes: `這頁介紹幾個實用的系統資訊查詢指令，讓學員能快速了解一台 Linux 機器的基本配置。

1. 系統版本 - cat /etc/os-release
顯示作業系統名稱、版本號等資訊。這是確認系統版本最標準的方式。

2. CPU 資訊 - cat /proc/cpuinfo | head -20
/proc 是一個虛擬檔案系統，裡面存放系統運行時的資訊。cpuinfo 會顯示 CPU 型號、核心數、頻率等。

3. 記憶體 - free -h
-h 參數表示 human-readable，會用 GB、MB 等單位顯示。可以看到總記憶體、已使用、可用空間。

4. 磁碟空間 - df -h
df = disk free，顯示各個分割區的使用狀況。重點看 Use% 欄位，超過 90% 就要注意了。

5. 網路資訊 - ip a
顯示所有網路介面和 IP 位址。找 inet 開頭的那行就是 IPv4 位址。

這些指令在日常運維中非常常用，建議學員多練習幾次，熟悉輸出格式。`,
    duration: "5"
  },
  // ========== 為什麼要學 Linux ==========
  {
    title: "為什麼要學 Linux？",
    section: "動機與背景",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-k8s-blue">伺服器市場</h3>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-5xl font-bold text-green-400">96.3%</p>
            <p className="text-slate-400">全球前 100 萬網站使用 Linux</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-k8s-blue">雲端平台</h3>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-5xl font-bold text-blue-400">90%+</p>
            <p className="text-slate-400">AWS、GCP、Azure 上運行 Linux</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-k8s-blue">容器技術</h3>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-5xl font-bold text-purple-400">100%</p>
            <p className="text-slate-400">Docker/K8s 原生運行於 Linux</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-k8s-blue">職涯發展</h3>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-5xl font-bold text-orange-400">+30%</p>
            <p className="text-slate-400">具 Linux 技能薪資溢價</p>
          </div>
        </div>
      </div>
    ),
    notes: `那為什麼我們要學 Linux 呢？讓我用一些數據來說明。

首先看伺服器市場，全球前 100 萬個網站中，有超過 96% 是跑在 Linux 上面的。你平常用的 Google、Facebook、Netflix，後台全部都是 Linux。

再來看雲端平台，不管是 AWS、Google Cloud 還是 Azure，上面運行的虛擬機有超過 90% 是 Linux。即使是微軟自己的 Azure，Linux 的使用率也超過 Windows。

然後是容器技術，這也是我們這門課的主題。Docker 和 Kubernetes 是原生在 Linux 上開發的，雖然現在 Windows 和 Mac 也可以跑，但底層還是需要 Linux。

最後是職涯發展，根據人力市場調查，具備 Linux 技能的工程師，薪資比一般 IT 人員高出 20% 到 30%。

所以學會 Linux，不只是為了這門課，更是為了你的職涯發展。

讓我補充一些更具體的數字和場景，說明為什麼 Linux 在 2025 年仍然如此重要，而且重要性只增不減：

從雲端基礎設施的角度來看：Amazon EC2、Google Compute Engine、Azure Virtual Machines，這些雲端服務的底層運算單元，超過 90% 跑的是 Linux。即使是微軟自家的 Azure，Linux 虛擬機的佔比也超過 Windows Server。為什麼？因為 Linux 不需要授權費用（大量部署時費用差距可以高達數千萬）、資源消耗更低（同樣的硬體可以跑更多服務）、穩定性更高（很多 Linux 伺服器可以連續運行好幾年不重開機）。

從容器和 Kubernetes 的本質來看：Docker 的核心機制（namespace 隔離、cgroup 資源控制）是 Linux 核心的原生功能；所有 Kubernetes 的 Worker Node 都必須是 Linux（官方不支援 Windows Worker Node 跑 Linux 容器）；kubectl、helm、ArgoCD 這些工具都是在 Linux 環境設計和優化的。學 K8s 不懂 Linux，就好像學開車但不知道油門和煞車在哪裡。

從招募市場來看：在 104、Yourator、LinkedIn 搜尋 DevOps、SRE、Cloud Engineer、Platform Engineer 職缺，幾乎每一個都把 Linux 列為必備技能。更精確地說，很多職缺要求「5 年以上 Linux 管理經驗」，這代表這項技能不是能在課程學完就馬上達標的，需要時間累積——所以越早開始越好。

從個人發展的角度來看：懂 Linux，你可以在自己的電腦上跑各種服務，從個人網站、自架 GitLab、到複雜的 Kubernetes 叢集。這種「自己可以掌控技術基礎設施」的能力，讓你在工作上有更多自主性，在個人專案上有更多可能性。

實際案例：我有一個學生，原本是純前端工程師，完全不懂後端和維運。他花了三個月學 Linux、Docker、K8s，然後在新工作面試時，因為展示了能獨立部署和管理整個應用程式的能力（從寫程式到建立 CI/CD pipeline 到部署到 K8s），薪資比上一份工作高了 40%。這不是特例，而是我看到的普遍現象。技能決定薪資，而這門課的技能是市場上非常稀缺的組合。`,
    duration: "3"
  },

  // ========== K8s 與 Linux 的關係 ==========
  {
    title: "Kubernetes 與 Linux",
    subtitle: "為什麼要先學 Linux 才能學 K8s？",
    section: "課程脈絡",
    content: (
      <div className="space-y-6">
        <div className="flex items-center justify-center gap-4 text-6xl">
          <span>🐧</span>
          <span className="text-k8s-blue">→</span>
          <span>🐳</span>
          <span className="text-k8s-blue">→</span>
          <span>☸️</span>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="font-bold text-xl">Linux</p>
            <p className="text-slate-400 text-sm">作業系統基礎</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="font-bold text-xl">Docker</p>
            <p className="text-slate-400 text-sm">容器化技術</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="font-bold text-xl">Kubernetes</p>
            <p className="text-slate-400 text-sm">容器編排</p>
          </div>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold">🎯 學習路徑</p>
          <p>Linux 是地基，Docker 是磚塊，Kubernetes 是建築師</p>
        </div>
      </div>
    ),
    notes: `你可能會問，我是來學 Kubernetes 的，為什麼要先學 Linux？

讓我用一個比喻來說明。如果把 IT 技能比喻成蓋房子，Linux 就是地基，Docker 是磚塊，而 Kubernetes 就是建築師。

沒有穩固的地基，房子蓋不起來。同樣的，不懂 Linux，你在操作 Kubernetes 的時候會很痛苦。

舉個例子，當你的 Pod 出問題的時候，你需要進到容器裡面去 debug。這時候你要會基本的 Linux 指令，像是看 log、檢查檔案、查看網路連線等等。

所以我們這門課的安排是：先學 Linux 基礎，再學 Docker 容器，最後才進入 Kubernetes。這樣一步一步來，學起來會更順暢。

每個技術層的關係可以這樣理解：Linux 提供了隔離程序（namespace）和資源控制（cgroup）的核心機制；Docker 把這些機制包裝成好用的容器工具，讓你可以輕鬆打包和執行應用程式；Kubernetes 則在 Docker 之上，管理成百上千個容器，自動調度、自動恢復、自動擴縮。缺少任何一層的理解，上面的技術就像是一個黑盒子——你可以用，但出了問題完全不知道從哪裡下手。把這三層都學通，你就有能力設計、部署、維護一個完整的雲端應用架構。

讓我給你一個更具體的例子，說明不懂 Linux 在操作 K8s 時會有多痛苦：

想像你部署了一個 Web 應用程式到 Kubernetes，但它一直起不來，Pod 狀態顯示 CrashLoopBackOff（意思是容器反覆啟動然後崩潰）。這時候你需要進到 Pod 裡面去看日誌、檢查設定檔、確認程序有沒有在執行。操作方式是：\`kubectl exec -it pod名稱 -- /bin/bash\`，這個指令會讓你進入容器的 Shell。進去之後，你面對的就是純 Linux 環境。你需要用 \`cat /app/config.yaml\` 看設定檔、用 \`ls -la /app/\` 確認檔案存在、用 \`ps aux\` 看程序有沒有在跑、用 \`curl localhost:8080/health\` 測試服務有沒有回應。如果你不懂這些 Linux 指令，你就像一個不會說當地語言的旅行者，明明就在現場，卻完全不知道問題在哪裡。

另一個常見場景：Kubernetes 節點（Node）的磁碟空間滿了，所有跑在這個節點上的 Pod 都無法啟動。你 SSH 進去節點，需要用 \`df -h\` 看磁碟使用狀況、用 \`du -sh /*\` 找出哪個目錄吃掉最多空間、用 \`find / -size +100M\` 找大檔案。然後可能是 Docker 的舊 image 或 log 檔案太多，需要執行 \`docker system prune\` 或清理 log。這整個流程需要大量的 Linux 基礎指令。

所以這門課的學習路徑不是「為了學而學」，而是每一步都直接服務於你最終要達到的目標：能獨立管理 Kubernetes 叢集、能快速排查問題、能設計穩定的部署架構。Linux 是地基，沒有這個地基，其他東西都是空中樓閣。按照我們安排的順序一步一步來，你會發現每一步都踩得很紮實，不會走冤枉路。`,
    duration: "2"
  },

  // ========== Linux 是什麼 ==========
  {
    title: "Linux 是什麼？",
    section: "基礎概念",
    content: (
      <div className="space-y-6">
        <div className="flex items-start gap-6">
          <div className="text-8xl">🐧</div>
          <div className="space-y-4">
            <p className="text-xl">
              Linux 是一個<span className="text-k8s-blue font-bold">開源</span>的
              <span className="text-green-400 font-bold">作業系統核心</span>
            </p>
            <ul className="space-y-2 text-slate-300">
              <li>• 1991 年由 Linus Torvalds 創造</li>
              <li>• 基於 Unix 設計哲學</li>
              <li>• 完全免費、原始碼公開</li>
              <li>• 全球數百萬開發者共同維護</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-slate-400 italic">
            "Just for fun" — Linus Torvalds 最初只是想學習作業系統怎麼運作
          </p>
        </div>
      </div>
    ),
    notes: `那，讓我們正式進入主題。Linux 到底是什麼？

Linux 是一個開源的作業系統核心，由 Linus Torvalds 在 1991 年創建，當時他只是一個想理解作業系統原理的芬蘭大學生，把自己寫的程式碼放到網路上分享，沒想到引來全世界開發者一起貢獻。Linux 這個名字是 Linus 和 Unix 的組合，因為它借鑒了 Unix 的設計哲學，但完全是重新開發的，不是複製 Unix 的程式碼。

重要概念：Linux 嚴格來說只是作業系統的核心（kernel），負責管理硬體資源、記憶體、處理程序排程。我們日常說的「Linux 系統」，其實是 Linux 核心加上各種工具程式和使用者介面的組合，稱為「Linux 發行版」（distribution）。常見發行版有 Ubuntu、CentOS、Debian、Fedora 等，它們的核心都是 Linux，但附帶的工具和設定有所不同。

三十多年來，Linux 已成為全球最關鍵的作業系統之一，運行著網際網路的基礎設施。連微軟都在 Windows 11 裡內建了 WSL（Windows Subsystem for Linux），讓 Windows 用戶可以直接跑 Linux 環境，這充分說明了 Linux 在現代 IT 世界的地位。

讓我多說一點 Linux 的歷史和設計哲學，因為了解這些背景能幫助你理解為什麼 Linux 是現在這個樣子：

1969 年，貝爾實驗室的 Ken Thompson 和 Dennis Ritchie 創造了 Unix 作業系統，同時也發明了 C 語言。Unix 的設計哲學影響了幾乎所有後來的作業系統，核心思想可以總結為幾條原則：「每個程式只做一件事，但把那件事做好」、「程式可以互相串接（用管道連接）」、「萬物皆檔案」、「選擇可移植性而非效率」。這些原則你在學 Linux 指令的時候會一直感受到。

1991 年，21 歲的芬蘭赫爾辛基大學學生 Linus Torvalds 在一個新聞討論群組（comp.os.minix）上貼了一篇文章，大意是說他在開發一個「只是興趣」的作業系統核心，借鑒了 Unix 的設計但不是 Unix 的複製品。他說「它不會像 GNU 那麼大、那麼專業」。這個「只是興趣」的小玩意兒，三十多年後成了世界上最重要的作業系統核心之一，支撐著幾乎整個網際網路的基礎設施。Linus Torvalds 後來說這個名字（Linux = Linus + Unix）是朋友起的，他一開始想叫它 Freax（free + freak + x）。

Linux 成功的關鍵是開源精神和社群力量。Torvalds 把原始碼公開，邀請全球開發者一起貢獻，這個模式在當時非常罕見（商業軟體都是閉源的）。全球無數開發者在空閒時間貢獻修補程式、新功能、驅動程式，讓 Linux 的功能和穩定性持續超越商業競爭對手。今天 Linux 核心的程式碼由全球最大的科技公司（Google、Intel、IBM、Red Hat、Samsung）的工程師維護，他們付薪水給工程師去開發一個免費的作業系統，因為這個作業系統對他們的業務至關重要。

有趣的事實：你口袋裡的 Android 手機、你家的智慧電視、你家的 WiFi 路由器，底層很可能都在跑 Linux 核心。全球前 500 台最強的超級電腦，100% 跑 Linux。NASA 的火星探測車也跑 Linux。所以嚴格說起來，你今天學的 Linux，和火箭科學家用的是同樣的核心技術，這不是在開玩笑。`,
    duration: "3"
  },

  // ========== Linux vs Windows ==========
  {
    title: "Linux vs Windows",
    subtitle: "兩種作業系統的根本差異",
    section: "概念比較",
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-k8s-blue">比較項目</th>
              <th className="p-4">
                <span className="inline-flex items-center gap-2">
                  🐧 Linux
                </span>
              </th>
              <th className="p-4">
                <span className="inline-flex items-center gap-2">
                  🪟 Windows
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            <tr className="border-b border-slate-800">
              <td className="p-4 font-semibold">授權方式</td>
              <td className="p-4 text-green-400">開源免費（GPL）</td>
              <td className="p-4 text-orange-400">商業授權（付費）</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="p-4 font-semibold">操作介面</td>
              <td className="p-4">以命令列為主</td>
              <td className="p-4">以圖形介面為主</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="p-4 font-semibold">檔案系統</td>
              <td className="p-4">ext4, xfs, btrfs</td>
              <td className="p-4">NTFS, FAT32</td>
            </tr>
            <tr className="border-b border-slate-800">
              <td className="p-4 font-semibold">路徑分隔</td>
              <td className="p-4 font-mono text-green-400">/home/user</td>
              <td className="p-4 font-mono text-blue-400">C:\\Users\\user</td>
            </tr>
            <tr>
              <td className="p-4 font-semibold">大小寫</td>
              <td className="p-4 text-yellow-400">區分大小寫</td>
              <td className="p-4">不區分大小寫</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    notes: `現在讓我們來比較 Linux 和 Windows 的差異，這對從 Windows 背景過來的同學特別重要，了解差異能幫助你更快適應 Linux 的思維方式。

第一個差異是授權方式。Windows 是商業軟體，需要購買授權，個人版、專業版、企業版都有不同費用。Linux 的核心和大多數發行版是開源免費的，Ubuntu、CentOS、Debian 都可以免費下載使用，這是企業選擇 Linux 作為伺服器的重要原因之一。

第二個差異是操作介面。Windows 的 GUI（圖形使用者介面）是主要操作方式，命令列是輔助工具。Linux 的命令列（CLI）才是主要操作方式，特別是在伺服器環境，通常完全沒有 GUI，全靠命令列管理。這就是為什麼學 Linux 要從命令列開始。

第三個差異是路徑分隔符號。Windows 用反斜線，比如 C:\\Users\\student。Linux 用正斜線 /，比如 /home/student。另外，Linux 路徑有大小寫區分，Desktop 和 desktop 是兩個不同的目錄，這是初學者很容易踩到的坑。

第四個差異是檔案系統。Windows 有 C 槽、D 槽等磁碟機代號。Linux 只有一個根目錄 /，所有東西都掛在這個樹狀結構下，沒有磁碟代號的概念。

第五個差異是軟體安裝方式。Windows 通常是下載安裝程式雙擊安裝。Linux 用套件管理器，比如 Ubuntu 的 apt install，一行指令就能安裝軟體，而且會自動處理相依性問題。大家慢慢習慣就好，我們下堂課會詳細介紹套件管理。

讓我把這些差異用更多實際案例說清楚，特別是初學者最容易踩到的坑：

**大小寫區分是最常見的坑**：這是從 Windows 過來的新手幾乎必踩的雷。在 Windows 上，你建立了「Config.txt」，用「type config.txt」也能讀取到，因為 Windows 的 NTFS 檔案系統不區分大小寫。但在 Linux 上，「Config.txt」、「config.txt」、「CONFIG.TXT」是三個完全不同的檔案。如果你建立了「Dockerfile」（D 大寫），但執行「docker build」的時候它預設尋找「Dockerfile」（D 大寫），剛好沒問題；但如果你把它命名成「dockerfile」（全小寫），就找不到了。在 Kubernetes 的 YAML 設定檔中，key 的大小寫也完全固定，一個字母寫錯大小寫，整個設定就無效了。從今天起，養成習慣：在 Linux 上命名檔案和目錄，全部用小寫，用連字號或底線分隔，例如「my-config.yaml」或「deploy_script.sh」。

**路徑斜線造成的跨平台問題**：Windows 用反斜線「\\」，Linux/Mac 用正斜線「/」。在程式碼裡如果寫死了路徑（所謂的 hardcode），移到不同作業系統就會出錯。這就是為什麼在程式開發中要用語言提供的路徑處理模組（Python 的「os.path.join」、Node.js 的「path.join」）而不是直接拼接字串。在 Kubernetes 的 YAML 設定中，路徑一律用 Linux 格式（正斜線）。

**套件管理的深度比較**：Windows 上安裝 Nginx 的過程：去 nginx.org 下載 ZIP 壓縮檔，解壓縮，找到執行檔，手動設定環境變數，或是找第三方安裝包雙擊安裝。Linux 上安裝 Nginx：\`sudo apt install nginx\`，一行搞定，系統自動下載、安裝、設定啟動服務。更厲害的是，所有透過 apt 安裝的軟體，都可以用 \`sudo apt update && sudo apt upgrade\` 一次更新全部，不需要逐一去官網找更新。在管理幾十台伺服器的時候，這種一致性的套件管理方式讓維護工作效率大幅提升。

**Linux 沒有「磁碟代號」**：Windows 用 C:\\、D:\\ 來區分不同的磁碟或分割區。Linux 完全不同，只有一個根目錄 /，所有的磁碟、USB、網路磁碟，都「掛載」（mount）到這個樹狀結構的某個目錄下。比如 USB 隨身碟插入後，可能掛載到 /media/usb0，你就用這個路徑存取它的內容。這個設計讓檔案系統更靈活，可以輕鬆替換儲存裝置而不影響路徑結構。在 Kubernetes 中，容器的 Volume（儲存卷）就是用這種掛載方式實現的——把外部儲存掛載到容器內部的特定路徑，容器程式不需要知道這個路徑底下是什麼類型的儲存。`,
    duration: "4"
  },

  // ========== 為什麼 CLI ==========
  {
    title: "為什麼伺服器用命令列？",
    section: "概念理解",
    content: (
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-red-400">❌ 圖形介面的問題</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400">•</span>
              <span>需要顯示卡、記憶體資源</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">•</span>
              <span>遠端連線延遲高</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">•</span>
              <span>難以自動化、寫腳本</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">•</span>
              <span>操作無法複製重現</span>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-green-400">✓ 命令列的優勢</h3>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400">•</span>
              <span>資源消耗極低</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">•</span>
              <span>遠端操作快速流暢</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">•</span>
              <span>可寫成腳本自動執行</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400">•</span>
              <span>指令可複製、版本控制</span>
            </li>
          </ul>
        </div>
      </div>
    ),
    notes: `你可能會問，2025 年了，還需要用命令列？有 GUI 不是更方便嗎？讓我給你幾個現實面的理由。

第一個理由：伺服器沒有 GUI。真實的 Linux 伺服器環境，為了節省資源和降低安全攻擊面，通常完全不安裝圖形介面。你連上去就是一個終端機。學不會命令列，就無法管理伺服器。

第二個理由：自動化腳本。你可以把一系列命令列指令寫成腳本，讓系統自動執行，比如每天凌晨備份資料庫、每小時清理暫存檔案。GUI 操作很難自動化，命令列卻可以。在 DevOps 和雲端管理中，自動化是核心能力。

第三個理由：遠端管理效率高。命令列只傳輸文字，佔用的網路頻寬極小；GUI 要傳輸整個畫面，網路慢時根本無法使用。用 SSH 連到世界各地的伺服器，命令列永遠比 GUI 遠端桌面流暢。

第四個理由：強大的組合能力。Linux 的設計哲學是：每個工具只做好一件事，但可以用管道（pipe）把多個工具串在一起完成複雜任務。這種組合方式讓命令列的威力遠超過任何圖形介面。

我知道一開始命令列看起來很嚇人，但就像學開車一樣，剛開始覺得複雜，但一旦熟悉了，就會覺得它快得多。今天大家要邁出第一步。

讓我用一個真實的工作場景說明命令列的威力，讓你體會為什麼懂 CLI 的工程師效率差那麼多：

假設公司說：「我們有 50 台 Web 伺服器，需要把每台的 Nginx 設定檔裡的『worker_connections 1024』改成『worker_connections 4096』，然後重啟 Nginx 服務，並確認每台服務都正常啟動，把結果記錄到 log 檔案。」

如果你用 GUI（遠端桌面）：你要一台一台連進去，點選遠端桌面連線 → 等待畫面載入 → 找到設定檔（有些人記不住路徑還需要找一下）→ 用文字編輯器打開 → 手動找到那一行 → 修改 → 存檔 → 打開服務管理員 → 重啟 Nginx → 確認狀態 → 斷線 → 連下一台。50 台的話，保守估計每台 2-3 分鐘，總共 100-150 分鐘，而且手動操作很容易出錯（改了 48 台忘了第 49 台的特殊情況，或是某台改錯了沒發現）。

如果你會命令列，寫一個 Shell Script：
\`\`\`bash
#!/bin/bash
for server in $(cat servers.txt); do
  echo "Processing $server..."
  ssh student@$server "sudo sed -i 's/worker_connections 1024/worker_connections 4096/' /etc/nginx/nginx.conf && sudo systemctl restart nginx && systemctl is-active nginx"
  echo "$server done" >> deploy_log.txt
done
\`\`\`
這個腳本對每台主機執行 SSH、用 sed（串流編輯器）自動修改設定、重啟服務、確認狀態，全程記錄結果。執行時間：不到 2 分鐘，完全自動化，每台的操作完全一致。如果某台出問題，log 檔案會記錄下來，方便追蹤。

這就是命令列和自動化的魔力。在 DevOps 和 Kubernetes 的世界，這種自動化思維更是核心競爭力。沒有人手動管理幾百個 Pod，一切靠指令和腳本。

另外，命令列操作可以記錄在版本控制系統（如 Git）裡，形成完整的操作歷史。你三個月前改了什麼設定、為什麼改、誰改的，都有記錄可查。這種可追蹤性（auditability）在企業環境中非常重要，出了事要追責時不會找不到源頭。GUI 點擊操作沒有這種可追蹤性，除非你每次都截圖記錄。

最後，命令列讓你的技能具有可移植性。不管連線到的是 Ubuntu、CentOS 還是 Alpine，不管是 AWS 還是 GCP 還是公司自建機房的機器，基本的 Linux 命令列技能都是通用的，你不需要每換一個環境就重新學一套操作方式。`,
    duration: "3"
  },

  // ========== Linux 發行版 ==========
  {
    title: "Linux 發行版",
    subtitle: "同一個核心，不同的包裝",
    section: "生態系統",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-300">
          Linux 核心 + 工具程式 + 套件管理 = 發行版（Distribution）
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-red-400 mb-2">Red Hat 系</p>
            <ul className="text-slate-300 space-y-1 text-sm">
              <li>• RHEL（企業版）</li>
              <li>• CentOS / Rocky Linux</li>
              <li>• Fedora</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">套件管理: yum/dnf</p>
          </div>
          <div className="bg-orange-900/30 border border-orange-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-orange-400 mb-2">Debian 系</p>
            <ul className="text-slate-300 space-y-1 text-sm">
              <li>• Debian</li>
              <li>• Ubuntu</li>
              <li>• Linux Mint</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">套件管理: apt</p>
          </div>
          <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-green-400 mb-2">其他</p>
            <ul className="text-slate-300 space-y-1 text-sm">
              <li>• Arch Linux</li>
              <li>• Alpine（容器常用）</li>
              <li>• SUSE</li>
            </ul>
            <p className="text-xs text-slate-500 mt-2">各有特色</p>
          </div>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold">📌 本課程使用</p>
          <p>Ubuntu 22.04 LTS — 社群資源豐富，適合學習</p>
        </div>
      </div>
    ),
    notes: `說了這麼多，Linux 其實只是一個核心。核心加上工具程式、套件管理系統、使用者介面等，組合在一起，才形成一個完整的「Linux 發行版」（distribution，簡稱 distro）。

主要的發行版可以分幾個家族：

Debian 家族：Debian 是最重要的基礎發行版之一，它的衍生版 Ubuntu 是目前最流行的桌面和伺服器 Linux，使用 apt 套件管理器。Ubuntu 有 LTS（Long-Term Support）版本，每兩年發布一次，支援五年，非常適合生產環境。我們課程的練習環境就是用 Ubuntu。

Red Hat 家族：Red Hat Enterprise Linux（RHEL）是企業市場的老大哥，很多大公司的核心系統都在跑。CentOS 曾是 RHEL 的免費版本，但已停止支援。現在的替代品是 AlmaLinux 和 Rocky Linux，以及 Fedora（開發版本）。這個家族使用 yum/dnf 套件管理器。

Alpine Linux：非常小巧（基礎映像才幾 MB），常用在 Docker 容器裡，追求最小化原則。

在 Kubernetes 的世界裡，大多數節點和容器基於 Ubuntu 或 CentOS/RHEL 系統。了解這些發行版的差異，能幫助你在實際工作中快速上手不同的環境。課程中我們主要用 Ubuntu，但教的基礎概念在各發行版上都通用。

讓我補充一些實際工作場景下，各發行版的選擇邏輯，以及你在不同工作環境可能遇到哪個發行版：

**Ubuntu LTS 詳解**（課程使用）：Ubuntu 每兩年發布一個 LTS（Long-Term Support）版本，官方提供 5 年的安全更新支援（付費可延長到 10 年）。目前主流的 LTS 版本是 20.04 Focal Fossa 和 22.04 Jammy Jellyfish，2024 年發布了 24.04 Noble Numbat。Ubuntu 選擇 LTS 的理由很充分：作業系統版本穩定、不需要頻繁升級主要版本、遇到問題社群資源最豐富（Stack Overflow 上 Ubuntu 的問題答案是最多的）。Canonical 公司（Ubuntu 的開發商）也是 Kubernetes 的重要貢獻者，Microk8s（輕量級 K8s）就是 Canonical 開發的。

**Red Hat 系詳解**：RHEL（Red Hat Enterprise Linux）是企業市場的龍頭，銀行、電信、政府機關等大型企業普遍使用。它的最大特點是 Red Hat 提供官方技術支援，出了問題可以打電話給 Red Hat 工程師，這對需要 SLA（服務等級協議）保障的企業非常重要。RHEL 是付費的，但 CentOS Stream、Rocky Linux、AlmaLinux 是免費的 RHEL 替代品，套件管理使用 \`dnf\`（新版本）或 \`yum\`（舊版本）。如果你的目標是考取 RHCSA 或 RHCE（Red Hat 的認證），就需要熟悉 Red Hat 系的環境。Fedora 是 Red Hat 的「社群版」，新功能在這裡先試驗，稍後才進入 RHEL，桌面用戶和開發者常用。

**Alpine Linux 的特殊地位**：Alpine 在容器生態系的地位不成比例地重要。它的 Docker base image 只有 5MB（Ubuntu 約 80MB），包含一個非常小的 C 標準函式庫（musl libc）和基本工具（busybox）。在生產環境的 Docker 容器裡，為了節省磁碟空間和減少攻擊面（更少的軟體 = 更少的潛在漏洞），很多人選擇 Alpine 作為基礎映像。你在看別人的 Dockerfile 時，常常會看到 \`FROM alpine:3.18\` 或 \`FROM node:18-alpine\` 之類的寫法。Alpine 的套件管理使用 \`apk\`，與 apt 和 dnf 略有不同。

**選擇發行版的實用原則**：初學者或全端開發：Ubuntu（最多學習資源，問題最好 Google）；企業維運、準備考 Red Hat 認證：Rocky Linux 或 CentOS Stream；Docker 容器基礎映像：Alpine（最小，最安全）；進階使用者、想深入理解 Linux：Arch Linux（滾動更新，需要手動設定一切，學習曲線陡峭但理解深）。不管用哪個發行版，核心的 Linux 概念和基礎指令（ls、cd、cat、grep、chmod 等）都是完全相同的。發行版之間的差異主要是套件管理器和預設設定，通常半天就能適應。`,
    duration: "4"
  },

  // ========== Linux 檔案系統階層 ==========
  {
    title: "Linux 檔案系統結構",
    subtitle: "一切都是檔案",
    section: "核心概念",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg font-mono text-sm">
          <pre className="text-green-400">{`/                    # 根目錄 (root)
├── bin/             # 基本指令 (ls, cp, mv...)
├── etc/             # 設定檔
├── home/            # 使用者家目錄
│   └── student/     # 你的目錄在這裡
├── var/             # 可變資料 (log, cache...)
├── tmp/             # 暫存檔
├── usr/             # 使用者程式
└── root/            # root 使用者的家目錄`}</pre>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="bg-blue-900/30 p-3 rounded-lg">
            <p className="text-blue-400 font-semibold">/etc</p>
            <p className="text-slate-300">系統設定檔都在這裡</p>
          </div>
          <div className="bg-green-900/30 p-3 rounded-lg">
            <p className="text-green-400 font-semibold">/home</p>
            <p className="text-slate-300">一般使用者的家目錄</p>
          </div>
          <div className="bg-yellow-900/30 p-3 rounded-lg">
            <p className="text-yellow-400 font-semibold">/var/log</p>
            <p className="text-slate-300">系統日誌檔</p>
          </div>
          <div className="bg-purple-900/30 p-3 rounded-lg">
            <p className="text-purple-400 font-semibold">/tmp</p>
            <p className="text-slate-300">暫存檔（重開機會清空）</p>
          </div>
        </div>
      </div>
    ),
    notes: `休息回來，繼續。

Linux 有一個很重要的設計哲學：一切皆是檔案。不只是文字文件、圖片這些「檔案」，連設備、程序、網路連線在 Linux 裡都被視為檔案來操作。這個概念很強大，讓你可以用統一的方式操作所有東西。

Linux 的檔案系統是一個樹狀結構，頂端是根目錄 /（唸作 root）。所有東西都掛在這個樹下，包括硬碟、USB 隨身碟、網路磁碟，都掛載（mount）到這個樹的某個節點上。

幾個重要目錄：

/home：所有一般使用者的家目錄都在這裡。比如你的帳號是 student，你的家目錄就是 /home/student，縮寫成 ~ （tilde）。這是你登入後的預設位置，也是你有完整讀寫權限的地方。

/etc：系統設定檔都放在這裡。nginx 的設定、SSH 的設定、網路設定，幾乎所有服務的設定檔都在 /etc 裡，而且都是純文字格式，可以直接用編輯器修改。

/var：存放會隨時間變化的資料，最重要的是 /var/log，所有的系統和服務日誌都在這裡。除錯的時候第一件事就是看 log。

/tmp：暫存檔案放這裡，系統重開後會清空。

/usr：應用程式和使用者工具。/usr/bin 存放大部分指令的執行檔，/usr/lib 是函式庫。

記住這些目錄的位置，對你日後的 Linux 和 Kubernetes 操作非常有幫助。

---

**各目錄的深入說明與實際使用場景：**

**/home 目錄詳解**

/home 是所有一般使用者的「個人空間」。每新增一個使用者帳號，Linux 就會在 /home 下建立一個同名的子目錄。比如你的帳號叫 student，你的家目錄就是 /home/student。這個目錄完全屬於你——你可以在裡面建立任何子目錄、存放任何檔案，不需要特殊權限。

縮寫符號 ~ 是「家目錄」的快捷方式，無論你在哪個目錄，輸入 \`cd ~\` 就能回家。在設定檔和腳本中也常看到 ~/config 這樣的寫法，表示家目錄下的 config 子目錄。

在 Kubernetes 中，當你要把設定檔從本地傳到遠端主機或容器，通常先傳到家目錄，再移到正確位置。這是因為你確保有家目錄的寫入權限，但其他目錄可能需要 root 才能寫入。

**/etc 目錄詳解**

"etc" 最初來自 Unix 時代的縮寫，代表 "et cetera"（等等，雜項），但現在已演變成專門放「設定檔」的目錄。幾乎所有 Linux 服務的設定都在這裡，而且全部是純文字格式（通常是 plain text、YAML 或 INI 格式），可以用任何文字編輯器修改。

實際工作中常用到的 /etc 子目錄：
- /etc/nginx/：Nginx 網頁伺服器的設定（vhost、SSL 憑證路徑等）
- /etc/ssh/sshd_config：SSH 伺服器設定（允許哪些登入方式、Port 幾等）
- /etc/hostname：主機名稱
- /etc/hosts：本地 DNS 解析（IP 對應主機名稱）
- /etc/crontab：排程任務設定
- /etc/apt/sources.list：Ubuntu 的套件來源清單

重要原則：修改 /etc 下的設定前，養成備份的習慣，例如 \`sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak\`。修錯了可以還原。

**/var 目錄詳解**

var 代表 "variable"，意思是這個目錄裡的內容會持續變動。最常用的是 /var/log，這是所有服務寫入日誌的地方：
- /var/log/syslog 或 /var/log/messages：系統總日誌
- /var/log/auth.log：認證和登入相關日誌（SSH 登入記錄、sudo 使用記錄）
- /var/log/nginx/：Nginx 的存取日誌（access.log）和錯誤日誌（error.log）
- /var/log/dpkg.log：套件安裝和更新記錄

排查問題的標準流程第一步就是看 log：\`tail -f /var/log/syslog\` 可以即時監看系統日誌，\`tail -n 100 /var/log/nginx/error.log\` 可以看最近 100 行的 Nginx 錯誤。在 Kubernetes 中，Pod 的 log 也是排查問題的首要工具，原理完全相同。

**/tmp 目錄注意事項**

/tmp 是公共暫存空間，系統上所有使用者都可以在裡面建立檔案。重要提醒：這個目錄在重開機後會被清空（有些系統設定成每隔一段時間自動清理）。所以絕對不要把重要檔案存在 /tmp，這裡只適合放短暫需要的中間檔案。

**/proc 和 /sys 目錄（進階補充）**

這兩個目錄比較特殊，不是真正的磁碟目錄，而是「虛擬檔案系統」（virtual filesystem），由 Linux 核心動態產生。

/proc 目錄包含所有正在執行中的程序（process）資訊。每個程序都有一個以 PID（程序 ID）命名的子目錄，裡面有該程序的各種狀態資訊。比如 \`cat /proc/cpuinfo\` 可以看 CPU 資訊，\`cat /proc/meminfo\` 可以看記憶體使用情況。

/sys 目錄提供對硬體和核心模組的介面，讓你可以讀取和修改核心參數。例如調整網路緩衝區大小、控制 CPU 省電模式等。

這兩個目錄在 Kubernetes 的底層機制中很重要：Kubernetes 的 cgroup 控制（限制 Pod 的 CPU/記憶體使用）就是透過 /sys/fs/cgroup 實現的。你不需要現在記住這些細節，但知道它們的存在，未來看到相關設定時就不會感到陌生。`,
    duration: "4"
  },

  // ========== 使用者與權限 ==========
  {
    title: "使用者與權限",
    subtitle: "誰可以做什麼事",
    section: "核心概念",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-red-400 mb-2">root</p>
            <p className="text-slate-300">系統管理員，擁有最高權限</p>
            <p className="text-yellow-400 text-sm mt-2">⚠️ 權力越大，責任越大</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-400 mb-2">一般使用者</p>
            <p className="text-slate-300">有限的權限，只能存取自己的檔案</p>
            <p className="text-green-400 text-sm mt-2">✓ 日常操作應該用這個</p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="font-semibold text-k8s-blue mb-2">檔案權限表示法</p>
          <div className="font-mono text-lg">
            <span className="text-yellow-400">-rwx</span>
            <span className="text-green-400">r-x</span>
            <span className="text-blue-400">r--</span>
            <span className="text-slate-400 ml-4">檔案</span>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-2 text-sm text-slate-400">
            <span>擁有者權限</span>
            <span>群組權限</span>
            <span>其他人權限</span>
          </div>
        </div>
      </div>
    ),
    notes: `Linux 是一個多使用者系統，不同的人登入有不同的身份和權限。這個設計讓 Linux 非常安全，也讓多人共用同一台伺服器成為可能。

最重要的使用者是 root，這是系統管理員帳號，擁有最高權限，可以做任何事：讀取所有檔案、修改系統設定、刪除整個系統。所以有一句話：「權力越大，責任越大」。一般情況下，我們不直接用 root 登入，而是用一般帳號，需要高權限時用 sudo 指令暫時提升。這樣即使操作失誤，損害也被限制在一般使用者的權限範圍內。

每個檔案都有三組權限：
- 擁有者（owner）的權限
- 所屬群組（group）的權限  
- 其他人（others）的權限

每組權限由三個字元組成：r（read 讀取）、w（write 寫入）、x（execute 執行），減號代表沒有該權限。

執行 ls -l 可以看到檔案的詳細資訊，第一欄就是權限字串，比如：
-rwxr-xr-- 代表：普通檔案（-），擁有者有讀寫執行（rwx），群組有讀取和執行（r-x），其他人只能讀取（r--）。

在 Kubernetes 的世界裡，理解權限非常重要。容器裡的程序通常以特定使用者身份執行，掛載的檔案有特定的所有者，這些都和 Linux 的使用者權限模型直接相關。

在 Kubernetes 的世界裡，每個 Pod 裡的容器都有自己的使用者和權限設定。了解 Linux 使用者與權限的基礎，能幫助你理解為什麼某些容器操作需要特殊設定，以及如何排查權限相關的問題。

---

**使用者與權限的深入說明：**

**sudo 的正確使用姿勢**

sudo 是 "superuser do" 的縮寫，讓一般使用者可以臨時以 root 的身份執行單一指令。例如：

\`sudo apt update\` — 以 root 身份執行系統更新
\`sudo systemctl restart nginx\` — 以 root 身份重啟 Nginx 服務
\`sudo cat /etc/shadow\` — 以 root 身份讀取只有 root 才能看的密碼檔

使用 sudo 時系統會要求輸入你自己的密碼（不是 root 的密碼），確認是你本人在操作。密碼通過後，在接下來幾分鐘內（預設 15 分鐘）使用 sudo 就不用再輸入密碼了。

重要安全習慣：不要用 \`sudo su\` 或 \`sudo -i\` 切換成 root shell 然後長時間停在那裡。應該是需要高權限操作時，一個指令一個 sudo，用完就回到一般使用者模式。這樣即使你不小心在某個地方打了危險指令，也不會有 root 權限去破壞系統。

**數字表示法（八進位）**

除了 rwx 的字母表示法，Linux 權限還有數字表示法，在使用 chmod 指令時很常用：
- r = 4
- w = 2  
- x = 1
- 沒有權限 = 0

每組三個位元加起來：rwx = 4+2+1 = 7，r-x = 4+0+1 = 5，r-- = 4+0+0 = 4，--- = 0

所以 chmod 755 file 就是設定：擁有者 rwx（7），群組 r-x（5），其他人 r-x（5）。常見的數字組合：
- 755：執行檔的標準設定（擁有者可讀寫執行，其他人只能讀和執行）
- 644：普通文字檔（擁有者可讀寫，其他人只能讀）
- 600：私密檔案如 SSH 私鑰（只有擁有者可讀寫）
- 777：所有人都可以讀寫執行（盡量避免用在正式環境，有安全風險）

SSH 私鑰的檔案如果權限設成 644 或 777，SSH 會拒絕使用它，因為太不安全了（別人可以讀取你的私鑰），必須改成 600 才能正常使用。

**chown 改變所有者**

\`chown 使用者:群組 檔案\` 可以改變檔案的擁有者和所屬群組。例如：
\`sudo chown www-data:www-data /var/www/html/\` — 把網站目錄的擁有者改為 www-data（Nginx/Apache 預設以這個帳號跑），這樣 Nginx 才能讀取網站檔案。

在 Kubernetes 中，Pod 的 securityContext 設定就是在控制容器裡的程序以哪個 UID/GID 執行、掛載的 Volume 的權限是什麼。你會在 YAML 中看到類似：

\`\`\`yaml
securityContext:
  runAsUser: 1000
  runAsGroup: 3000
  fsGroup: 2000
\`\`\`

這代表容器裡的程序以 UID 1000 跑，掛載的 Volume 的群組是 2000。這直接對應到 Linux 的 UID/GID 系統。理解了今天的內容，以後看到這些設定就不會感到陌生了。

**一個實際遇到的問題案例**

有一次，一個學生部署了一個 Python Web 應用到 Kubernetes，程式啟動後一直報錯：\`Permission denied: '/app/logs/app.log'\`。

排查過程：用 \`kubectl exec\` 進入容器，執行 \`ls -la /app/\`，發現 logs 目錄的擁有者是 root（因為 Dockerfile 裡 COPY 檔案時預設是 root），但容器的程序是以 UID 1000 的一般使用者跑（Pod 的 securityContext 設定）。一般使用者沒有 root 目錄的寫入權限，所以程式無法寫入 log 檔案。

解法有兩種：在 Dockerfile 裡用 \`RUN chown -R 1000:1000 /app/logs\` 預先設好正確的所有者；或是在 Kubernetes 的 initContainer 裡執行 chown。如果你不理解 Linux 的使用者與權限系統，這類問題排查起來會非常費力。`,
    duration: "4"
  },


  // ========== 權限數字表示法 ==========
  {
    title: "權限數字表示法",
    subtitle: "421 與 777 的秘密",
    section: "Linux 基礎觀念",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-300 mb-4">
          Linux 用數字代表權限，每個位元都有對應的值
        </p>
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg text-center">
            <p className="text-5xl font-bold text-red-400">4</p>
            <p className="text-2xl mt-2">r (讀取)</p>
          </div>
          <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg text-center">
            <p className="text-5xl font-bold text-green-400">2</p>
            <p className="text-2xl mt-2">w (寫入)</p>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg text-center">
            <p className="text-5xl font-bold text-blue-400">1</p>
            <p className="text-2xl mt-2">x (執行)</p>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="font-semibold text-k8s-blue mb-2">計算方式：把權限數字加起來</p>
          <div className="grid grid-cols-2 gap-4 font-mono text-lg">
            <div><span className="text-yellow-400">rwx</span> = 4+2+1 = <span className="text-green-400">7</span></div>
            <div><span className="text-yellow-400">r-x</span> = 4+0+1 = <span className="text-green-400">5</span></div>
            <div><span className="text-yellow-400">rw-</span> = 4+2+0 = <span className="text-green-400">6</span></div>
            <div><span className="text-yellow-400">r--</span> = 4+0+0 = <span className="text-green-400">4</span></div>
          </div>
        </div>
      </div>
    ),
    notes: `權限數字表示法是 Linux 管理檔案權限的核心概念。

每個權限位元都有對應的數字值：
- r (read 讀取) = 4
- w (write 寫入) = 2
- x (execute 執行) = 1
- 沒有權限 = 0

把這三個值加起來，就得到一組權限的數字。

例如：
- rwx = 4+2+1 = 7（完整權限）
- r-x = 4+0+1 = 5（可讀可執行，不可寫）
- rw- = 4+2+0 = 6（可讀可寫，不可執行）
- r-- = 4+0+0 = 4（只能讀）
- --- = 0（沒有任何權限）

為什麼用 4、2、1 這三個數字？因為它們是二進位的基礎：4 是 100，2 是 010，1 是 001。任何數字組合都不會重複，所以可以用一個數字精確表示一組權限。`,
    duration: "2"
  },

  // ========== 常見權限組合與 chmod ==========
  {
    title: "常見權限與 chmod",
    subtitle: "如何查看與修改檔案權限",
    section: "Linux 基礎觀念",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="font-semibold text-k8s-blue mb-2">常見權限數字</p>
            <div className="space-y-2 font-mono">
              <div><span className="text-green-400">755</span> — 執行檔標準</div>
              <div><span className="text-green-400">644</span> — 一般文字檔</div>
              <div><span className="text-green-400">600</span> — SSH 私鑰</div>
              <div><span className="text-red-400">777</span> — 全開（危險！）</div>
            </div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="font-semibold text-k8s-blue mb-2">權限解讀</p>
            <div className="space-y-2 font-mono text-sm">
              <div><span className="text-yellow-400">7</span><span className="text-green-400">5</span><span className="text-blue-400">5</span> = rwx r-x r-x</div>
              <div><span className="text-yellow-400">6</span><span className="text-green-400">4</span><span className="text-blue-400">4</span> = rw- r-- r--</div>
              <div><span className="text-yellow-400">6</span><span className="text-green-400">0</span><span className="text-blue-400">0</span> = rw- --- ---</div>
              <div><span className="text-yellow-400">7</span><span className="text-green-400">7</span><span className="text-blue-400">7</span> = rwx rwx rwx</div>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># 查看檔案權限</p>
          <code className="text-green-400 text-lg">ls -l myfile.txt</code>
          <p className="text-slate-500 mt-2">-rw-r--r-- 1 user group 1024 Jan 1 12:00 myfile.txt</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># 修改檔案權限</p>
          <code className="text-green-400 text-lg">chmod 755 script.sh</code>
          <p className="text-slate-500 mt-2">讓 script.sh 變成可執行的腳本</p>
        </div>
      </div>
    ),
    notes: `這頁整理了常見的權限數字組合和實際操作指令。

常見權限數字的使用時機：
- 755：給執行檔用（擁有者可讀寫執行，其他人可讀可執行）
- 644：給一般文字檔用（擁有者可讀寫，其他人只能讀）
- 600：給敏感檔案用，如 SSH 私鑰（只有擁有者可讀寫）
- 777：所有人都有完整權限，除非有特殊需求否則不要用

三個數字分別代表：擁有者、群組、其他人的權限。

ls -l 指令會顯示檔案的詳細資訊，第一欄就是權限字串。
例如 -rw-r--r-- 代表：
- 第一個字元 - 表示是普通檔案（d 表示目錄）
- 接下來 rw- 是擁有者權限（可讀可寫不可執行）
- 再來 r-- 是群組權限（只能讀）
- 最後 r-- 是其他人權限（只能讀）

chmod 指令用來修改權限，語法是 chmod 數字 檔案名。
chmod 755 script.sh 就是把 script.sh 的權限設成 755。

你也可以用符號模式：
- chmod +x script.sh — 加上執行權限
- chmod u+w file — 給擁有者加上寫入權限
- chmod go-w file — 移除群組和其他人的寫入權限`,
    duration: "3"
  },

  // ========== SSH 連線 ==========
  {
    title: "SSH 連線",
    subtitle: "遠端登入 Linux 主機",
    section: "實作準備",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-300">
          SSH（Secure Shell）是一種加密的遠端連線協定
        </p>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># 連線語法</p>
          <code className="text-green-400 text-xl">
            ssh 使用者名稱@主機IP
          </code>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># 範例</p>
          <code className="text-green-400 text-xl">
            ssh student@192.168.1.100
          </code>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg">
          <p className="text-yellow-400 font-semibold">💡 小提示</p>
          <p className="text-yellow-200">第一次連線會問你是否信任這台主機，輸入 yes 即可</p>
        </div>
      </div>
    ),
    notes: `現在我們要來實際動手了。要操作遠端的 Linux 主機，我們需要用 SSH 連線。

SSH 全名是 Secure Shell，是一種加密的遠端連線協定，讓你可以安全地連上遠端伺服器執行指令。「加密」很重要，代表你輸入的帳號密碼和執行的指令，在網路傳輸過程中是加密的，不會被中間人竊取。

連線語法非常簡單：ssh 使用者名稱@主機IP

比如帳號是 student、主機 IP 是 192.168.1.100，就輸入：ssh student@192.168.1.100

第一次連線到一台主機，SSH 會顯示主機的「指紋」（fingerprint），問你是否信任這台主機。這是防止中間人攻擊的機制，確認 IP 正確後輸入 yes 按 Enter。SSH 會把這台主機的指紋記住，以後連線就不會再問了。

輸入密碼時，畫面上不會顯示任何東西，連星號都沒有，這是正常的 Linux 安全機制。輸入完密碼直接按 Enter 就好。

登入成功後，命令提示字元會變成類似 student@hostname:~$ 的格式，代表你正式進入了 Linux 主機。$ 表示你是一般使用者，如果是 # 則表示 root。

想要登出，輸入 exit 或按 Ctrl+D，就會回到本地終端機。

---

**SSH 的深入說明：**

**SSH 的歷史與安全性**

在 SSH 出現之前（1995 年以前），遠端連線主要靠 Telnet 協定。Telnet 的最大問題是資料完全明文傳輸，任何能攔截網路封包的人，都能看到你輸入的帳號、密碼和所有指令。在網路安全意識薄弱的年代，這造成了大量的帳號被盜和系統入侵事件。

1995 年，芬蘭赫爾辛基理工大學的 Tatu Ylönen 遭受了一次網路嗅探攻擊，自己的密碼被截取。他因此開發了 SSH，使用非對稱加密（RSA 演算法）確保連線安全。今天 SSH 已成為遠端管理 Linux 伺服器的標準協定，幾乎每一台 Linux 伺服器都會開放 SSH 服務。

**密碼登入 vs 金鑰登入**

目前我們使用的是密碼登入方式，這對學習階段來說最簡單。但在正式環境中，強烈建議改用 SSH 金鑰（key-based）登入，原因是：
1. 密碼可以被暴力破解，金鑰幾乎不可能
2. 金鑰登入不需要輸入密碼，更方便自動化腳本
3. 可以完全停用密碼登入，大幅降低被攻擊的風險

SSH 金鑰的工作原理：你在本地電腦生成一組「金鑰對」，包含公鑰（public key）和私鑰（private key）。公鑰上傳到伺服器的 ~/.ssh/authorized_keys，私鑰保留在本地。連線時，SSH 用複雜的數學運算驗證「只有持有對應私鑰的人才能發出這個請求」，完全不需要傳輸密碼。

生成 SSH 金鑰對的指令：\`ssh-keygen -t ed25519 -C "你的email"\`（ed25519 是目前最推薦的算法，比較舊的 RSA 也還可以用）。把公鑰複製到伺服器：\`ssh-copy-id student@主機IP\`。這樣下次連線就不用輸入密碼了。

**SSH Config 檔：讓連線更方便**

當你管理很多台主機時，每次都要輸入 \`ssh student@192.168.100.200\` 非常麻煩。SSH 提供了一個設定檔 ~/.ssh/config，讓你可以設定別名：

\`\`\`
Host k8s-lab
    HostName 192.168.100.200
    User student
    Port 22
    IdentityFile ~/.ssh/id_ed25519
\`\`\`

設定好後，只需輸入 \`ssh k8s-lab\` 就能連線，不用記 IP 和使用者名稱。在管理幾十台伺服器的環境，這個設定能省下大量時間。

**SSH Tunneling：進階用法預告**

SSH 還有一個強大的進階功能叫做 Port Forwarding（端口轉發），讓你可以透過 SSH 安全地存取遠端伺服器上的服務。比如遠端主機跑了一個只開在 localhost 的資料庫，正常從外部無法存取，但你可以用：\`ssh -L 5432:localhost:5432 student@主機IP\`，讓本地電腦的 5432 port 透過 SSH 隧道連到遠端主機的 5432 port。

在 Kubernetes 的實際工作中，\`kubectl port-forward\` 指令就是類似的原理——把 K8s 叢集內部的服務 port 轉發到你本地電腦，讓你可以在瀏覽器直接存取，方便 debug。這些概念你在後面的課程會用到，現在先有個印象。`,
    duration: "3"
  },

  // ========== 實作：登入 Linux ==========
  {
    title: "🔨 實作時間",
    subtitle: "登入你的第一台 Linux 主機",
    section: "動手做",
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># Step 1: 開啟終端機</p>
          <p className="text-slate-300">Windows: 搜尋「Terminal」或「PowerShell」</p>
          <p className="text-slate-300">Mac: 開啟「終端機」應用程式</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># Step 2: 輸入 SSH 指令</p>
          <code className="text-green-400">ssh student@[助教提供的IP]</code>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># Step 3: 輸入密碼</p>
          <p className="text-slate-300">密碼輸入時不會顯示，輸入完按 Enter</p>
        </div>
        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
          <p className="text-green-400 font-semibold">✓ 成功登入後會看到</p>
          <code className="text-slate-300">student@k8s-lab:~$</code>
        </div>
      </div>
    ),
    notes: `好，現在是今天最重要的環節：請大家跟著我一步一步操作，第一次登入 Linux 主機。

**Step 1：打開終端機**
Windows 用戶：在開始選單搜尋「Terminal」或「Windows 終端機」，點擊開啟。如果找不到，可以用 PowerShell 或 Command Prompt 替代。
Mac 用戶：在 Finder 打開「應用程式 → 工具程式 → 終端機」，或是直接 Spotlight 搜尋「Terminal」。
Linux 用戶：直接打開你習慣的終端機模擬器。

**Step 2：輸入 SSH 指令**
在終端機輸入：ssh student@[助教提供的IP位址]
請把方括號裡的部分換成助教給你的實際 IP。帳號固定是 student。按 Enter。

**Step 3：處理主機指紋確認**
第一次連線到這台主機，SSH 會顯示一段警告，問你：「Are you sure you want to continue connecting (yes/no)?」
這是正常的，輸入 yes 然後按 Enter。

**Step 4：輸入密碼**
輸入助教提供的密碼，注意密碼輸入時畫面不會有任何顯示，輸完直接按 Enter。如果密碼輸錯了，會提示 Permission denied，再試一次。

**Step 5：確認成功登入**
成功登入後，你會看到命令提示字元變成：student@hostname:~$
這表示你已經在 Linux 主機裡面了！~ 是你的家目錄 /home/student，$ 代表一般使用者身份。

**常見問題排查：**
如果出現 Connection timed out：IP 可能輸錯了，或是主機防火牆設定問題，舉手請助教確認。
如果出現 Permission denied (publickey)：SSH 設定問題，需要助教協助調整。
如果出現 REMOTE HOST IDENTIFICATION HAS CHANGED：代表主機指紋改變了（可能是重裝或換了不同主機），需要執行 ssh-keygen -R [IP] 清除舊記錄。

**操作確認時間（約 5 分鐘）：**
現在請大家自己操作。有問題舉手，助教會過去協助。等大家都登入成功後，我們繼續執行第一個 Linux 指令。登入成功的同學，可以先試試輸入 whoami 看看輸出什麼。

（巡視確認每位學員都成功登入）

太好了！大家都登入成功了。這是你們第一次真正進入 Linux 系統，從這個命令提示字元開始，你就是這台 Linux 主機的操作者了。

常見問題補充說明：

很多同學第一次用命令列會有點不習慣，因為打了指令之後沒有彩色的確認視窗，只是顯示一行結果（有時甚至沒有任何輸出）。這是正常的，Linux 的設計哲學是「沒有消息就是好消息」，成功執行就沒有提示，有問題才會顯示錯誤訊息。

關於密碼輸入：Linux 終端機在輸入密碼時不顯示任何字元（包括星號），這是刻意設計的安全機制，防止旁邊的人看到密碼長度。如果不確定有沒有在輸入，可以直接按 Enter 試試，輸入錯誤了再重新輸入。

登入成功的判斷：看到 student@hostname:~$ 這樣的提示字元就是成功了。~ 是你的家目錄的符號，$ 代表一般使用者。如果你看到 # 結尾，代表你是 root，要特別小心。`,
    duration: "10"
  },

  // ========== 第一個指令 ==========
  {
    title: "你的第一個 Linux 指令",
    section: "基礎指令",
    content: (
      <div className="space-y-6">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># 看看我是誰</p>
          <code className="text-green-400 text-xl">whoami</code>
          <p className="text-slate-500 mt-2">輸出: student</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># 我現在在哪裡</p>
          <code className="text-green-400 text-xl">pwd</code>
          <p className="text-slate-500 mt-2">輸出: /home/student</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2"># 這裡有什麼</p>
          <code className="text-green-400 text-xl">ls</code>
          <p className="text-slate-500 mt-2">輸出: (列出目錄內容)</p>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold">🎯 試試看！</p>
          <p>在你的終端機輸入這三個指令</p>
        </div>
      </div>
    ),
    notes: `大家都登入成功了，太棒了！現在讓我們來執行第一批 Linux 指令，感受一下命令列的操作方式。

**whoami — 我是誰**
輸入 whoami 按 Enter，Linux 會告訴你目前登入的使用者名稱。應該顯示 student。這個指令很簡單，但在 Kubernetes 的 debug 中很有用，確認你在容器裡以什麼身份在跑。

**pwd — 我在哪裡**
pwd 是 Print Working Directory 的縮寫，顯示你目前所在的完整路徑。應該顯示 /home/student，這是你的家目錄。在 Linux 裡，任何時候都要知道自己在哪個目錄，不然下指令很容易搞錯位置。

**ls — 這裡有什麼**
ls 是最常用的指令之一，列出當前目錄的內容，就像 Windows 的「開啟資料夾看裡面有什麼」。新建的使用者家目錄可能是空的或有少數幾個預設目錄。之後我們會學到 ls -l（顯示詳細資訊）、ls -a（顯示隱藏檔案）等變形。

**指令說明的使用方式**
忘記指令用法怎麼辦？有三個方法：
1. 指令 --help：比如 ls --help，快速顯示選項說明
2. man 指令：比如 man ls，打開完整的操作手冊（按 q 離開）
3. 直接 Google：「linux ls command examples」

現在大家把這三個指令都輸入一次，看看輸出。有沒有看到不一樣的結果，或是有疑問的地方？

（等待操作，回答問題）

這三個指令是 Linux 操作的起點，以後每次打開終端機，你的肌肉記憶就會自動先跑這幾個指令：whoami 確認身份，pwd 確認位置，ls 看目錄內容。

---

**第一個指令的深入探討：**

**ls 指令的各種選項**

ls 本身就是一個很豐富的指令，光是它的常用選項就很多：

\`ls -l\` — 長格式顯示，每行顯示一個檔案，包含權限、擁有者、大小、最後修改時間。這是最常用的版本，強烈建議養成用 \`ls -l\` 而不是單純 \`ls\` 的習慣。

\`ls -a\` — 顯示所有檔案，包含隱藏檔案（以 . 開頭的檔案）。Linux 的隱藏檔案就是把檔名的第一個字元設成點，沒有什麼特殊機制。比如 .bashrc、.ssh/、.gitconfig 都是常見的隱藏設定檔。

\`ls -la\` 或 \`ls -al\` — 組合使用，同時顯示詳細資訊和隱藏檔案。這是在家目錄執行時最常用的版本，你會看到很多 . 開頭的設定檔。

\`ls -lh\` — 用人類可讀的方式顯示檔案大小，比如顯示 "4.2K" 而不是 "4310"（bytes）。

\`ls -lt\` — 依照修改時間排序，最新的在最上面。查看「最近改了哪些檔案」很有用。

\`ls -lS\` — 依照檔案大小排序（大的在前），找出目錄裡的大檔案時很有用。

\`ls /etc/\` — 不只是看當前目錄，可以指定任何路徑。比如 \`ls /var/log/\` 可以在不切換目錄的情況下看 /var/log 裡有什麼。

**命令列的基本技巧：上下鍵和 Tab 補全**

學會這幾個技巧，可以讓你的命令列操作效率大幅提升：

「↑」和「↓」方向鍵：瀏覽歷史指令。你不需要重新輸入同樣的指令，按上鍵就能叫回之前的指令。SSH 連線斷掉重連後，歷史指令也還在（存在 ~/.bash_history 裡）。

Tab 鍵自動補全：這是命令列最神奇的功能之一。輸入指令或路徑的前幾個字母，按 Tab 鍵，系統會自動補全。例如輸入 \`ls /etc/ssh/\`，然後輸入 \`sshd\`，按 Tab，會自動補完成 \`sshd_config\`。如果有多個符合的選項，按兩下 Tab 會列出所有可能，讓你選擇。養成用 Tab 補全的習慣，不僅輸入更快，還能避免拼字錯誤。

Ctrl+C：取消當前指令（中斷執行中的程序）。如果不小心跑了一個很久的指令，或是指令卡住了，按 Ctrl+C 可以中斷。

Ctrl+L：清空終端機畫面（等同於 clear 指令）。當畫面太亂想清空時使用，歷史指令不會被刪除。

Ctrl+A / Ctrl+E：把游標移到行首 / 行尾。輸入很長的指令後想修改開頭的部分，按 Ctrl+A 比按很多次方向鍵快很多。

**如何讀懂 man page（說明文件）**

輸入 \`man ls\`，會打開 ls 指令的完整說明文件，也叫 "man page"（manual page）。

這個文件看起來很長、很密集，但結構是固定的：
- NAME：指令名稱和一行說明
- SYNOPSIS：語法概覽，方括號 [ ] 裡的是可選參數
- DESCRIPTION：詳細說明每個選項的用途
- EXAMPLES：使用範例（不是每個指令都有）
- SEE ALSO：相關指令

操作方式：用方向鍵或 j/k 捲動，輸入 / 然後關鍵字可以搜尋，按 n 跳到下一個搜尋結果，按 q 離開。

man page 是最權威的文件，比 Google 搜尋到的部落格更可靠，但寫法很技術性，適合查詢「這個選項的確切行為是什麼」，不適合入門學習。`,
    duration: "5"
  },

  // ========== 常用指令預告 ==========
  {
    title: "常用指令預告",
    subtitle: "下堂課會學到",
    section: "預告",
    content: (
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { cmd: "ls", desc: "列出目錄內容" },
          { cmd: "cd", desc: "切換目錄" },
          { cmd: "pwd", desc: "顯示目前位置" },
          { cmd: "mkdir", desc: "建立目錄" },
          { cmd: "cp", desc: "複製檔案" },
          { cmd: "mv", desc: "移動/重新命名" },
          { cmd: "rm", desc: "刪除檔案" },
          { cmd: "cat", desc: "顯示檔案內容" },
        ].map((item, i) => (
          <div key={i} className="bg-slate-800/50 p-3 rounded-lg flex items-center gap-4">
            <code className="text-green-400 font-bold text-lg w-16">{item.cmd}</code>
            <span className="text-slate-300">{item.desc}</span>
          </div>
        ))}
      </div>
    ),
    notes: `這些是下午和明天會學到的常用指令，先讓大家有個印象，不用現在就記住。

ls 列出目錄內容、cd 切換目錄、pwd 顯示目前位置、mkdir 建立目錄、cp 複製檔案、mv 移動或重新命名、rm 刪除檔案、cat 顯示檔案內容。

這些指令名字都來自英文縮寫：cd 是 change directory，cp 是 copy，mv 是 move，rm 是 remove，cat 是 concatenate（串接），ls 是 list。記住縮寫來源，下次忘記指令名稱時更容易想起來。

下午的課我們會一個一個詳細講解並實際操作，今天先有個印象就好。這些基礎指令是所有 Linux 操作的起點，也是進入 Docker 和 Kubernetes 的前提。掌握了這些，你就具備了自主探索 Linux 世界的能力。

---

**各指令的快速預覽與記憶技巧：**

讓我為每個指令多說一點，幫助大家在正式學習前先建立直覺：

**ls（list）— 列出目錄內容**
最基本的操作：看看這裡有什麼。就像 Windows 的資源管理員。常加 -la 選項顯示詳細資訊和隱藏檔案。記憶法：ls 就是 "list"，列清單。

**cd（change directory）— 切換目錄**
Linux 裡移動的方式。\`cd /etc\` 去 /etc，\`cd ..\` 回上一層，\`cd ~\` 回家目錄，\`cd -\` 回上一個待過的目錄（很方便！）。記憶法：cd 就是 "change directory"。

**pwd（print working directory）— 顯示目前位置**
不確定自己在哪就輸入 pwd，顯示完整路徑。是迷路時的救命指令。記憶法：pwd = "print where am I"。

**mkdir（make directory）— 建立目錄**
\`mkdir projects\` 建立 projects 目錄，\`mkdir -p projects/web/html\` 一次建立多層目錄（-p 表示連同不存在的父目錄一起建）。記憶法：mkdir = "make directory"。

**cp（copy）— 複製檔案**
\`cp 來源 目的\` 複製單一檔案，\`cp -r 來源目錄 目的目錄\` 遞迴複製整個目錄（-r = recursive）。記憶法：cp = "copy"。

**mv（move）— 移動或重新命名**
mv 有兩個用途：\`mv 舊名稱 新名稱\` 重新命名，\`mv 檔案 目錄/\` 移動到另一個目錄。Linux 沒有單獨的 rename 指令，改名就是 "移動到同一個地方但用不同名字"。記憶法：mv = "move"。

**rm（remove）— 刪除檔案（⚠️ 最危險的指令！）**
這個指令要特別小心！Linux 的 rm 沒有垃圾桶，刪了就是真的刪了，無法復原。\`rm 檔案\` 刪除單一檔案，\`rm -r 目錄\` 刪除整個目錄。記憶法：rm = "remove"，但要記住刪了無法後悔。

**🔥 經典災難指令：rm -rf /**
這個指令會刪除系統上的「所有東西」，包括作業系統本身。-r 是遞迴刪除，-f 是強制不詢問。這不是玩笑，真的有公司因為這個指令倒閉！

**真實案例：Pixar 差點毀掉《乖乖女是大明星》**
1998 年，Pixar 在製作《乖乖女是大明星》時，一位員工誤執行了類似的刪除指令。整部電影 90% 的檔案在幾秒內消失，包括兩年的製作成果。幸運的是，一位在家休產假的技術總監有備份在家裡的電腦，才讓電影得以完成。

**真實案例：GitLab 2017 事件**
GitLab 的資料庫管理員在疲勞狀態下執行了錯誤的刪除指令，導致 300GB 的生產資料庫被刪除。更慘的是，他們發現備份系統也有問題！最後透過 6 小時前的 snapshot 才勉強恢復，但還是丟失了 6 小時的用戶資料。這個事件成為業界「永遠不要在半夜累的時候操作生產系統」的經典案例。

**真實案例：hosting 公司自我毀滅**
2017 年，荷蘭的 hosting 公司 Verelox 的一位管理員執行了 \`rm -rf / --no-preserve-root\`，直接把公司所有伺服器的資料刪光，包括所有客戶的網站和資料。公司直接倒閉。

**為什麼現代 Linux 有保護？**
好消息是，現代 Linux 已經有一些保護措施。直接執行 \`rm -rf /\` 會被系統阻擋，必須加上 \`--no-preserve-root\` 才會真的執行。但這不代表你可以亂玩，\`rm -rf /*\` 或 \`rm -rf ~/*\` 一樣會造成嚴重後果。

**最佳實踐：刪除前先確認**
1. 用 \`ls\` 先看一下要刪的是什麼
2. 不確定時用 \`rm -i\`（互動模式，每個檔案都問你）
3. 重要資料刪除前先 \`mv\` 到暫存目錄，確認沒問題再真正刪除
4. 永遠不要在 root 權限下隨意執行 rm -rf

**cat（concatenate）— 顯示檔案內容**
\`cat 檔案名稱\` 把整個檔案印出來。適合查看小型設定檔。如果檔案很長，用 \`less 檔案名稱\` 可以一頁一頁瀏覽（按 q 離開）。記憶法：cat = "concatenate"（串接），最初設計是把多個檔案串接輸出，現在最常用來看單一檔案。

**🐱 有趣冷知識：cat 和 tac**
你知道 \`cat\` 反過來拼就是 \`tac\` 嗎？而且 \`tac\` 真的是一個指令！\`cat\` 從上到下顯示檔案，\`tac\` 則是從下到上（最後一行先印）。這是 Unix/Linux 設計者的幽默感。

**🎭 更多有趣的指令名稱彩蛋：**
- \`yes\` — 這個指令真的只會一直印 "y"，原本設計來自動回答需要確認的程式
- \`sl\` — 當你把 \`ls\` 打錯成 \`sl\`，螢幕上會跑出一台蒸汽火車（Steam Locomotive）！這是工程師的惡作劇，懲罰打字太快的人
- \`cowsay\` — 讓一隻 ASCII 牛說你指定的話，例如 \`cowsay "Hello K8s!"\`
- \`fortune\` — 隨機顯示一句格言或笑話
- \`cmatrix\` — 在終端機上顯示駭客任務的綠色數字雨效果

**🤓 Unix 哲學彩蛋**
為什麼 Linux 有這麼多奇怪的小工具？因為 Unix 哲學是「做一件事，把它做好」。每個小工具專注一件事，然後透過管道（pipe）組合起來，變成強大的功能。這就是為什麼 \`cat file.txt | grep "error" | wc -l\` 這種串接寫法在 Linux 中這麼常見。

**🎮 隱藏彩蛋挑戰（課後試試看）**
1. 在終端機輸入 \`apt moo\`（如果安裝了 apt-get）
2. 在 vim 裡輸入 \`:help 42\`
3. 試試 \`telnet towel.blinkenlights.nl\`（用 ASCII 看星際大戰）

**這些指令和 Kubernetes 的關係**

你可能會好奇，這些看起來很基礎的檔案操作指令，和 Kubernetes 有什麼關係？其實關係很大：

當你 SSH 進 Kubernetes 的 Worker Node 排查問題時，需要用 cd 和 ls 瀏覽 /var/log/containers/ 目錄找 log 檔案。當你要修改 Kubernetes 元件的設定（比如 kubelet 的設定）時，需要用 cat 查看、cp 備份、vim/nano 編輯。當你要清理磁碟空間（K8s 節點常見問題）時，需要用 ls -lhS 找出大檔案，用 rm 清理。當你要部署設定檔到伺服器，需要用 mkdir 建立目錄、cp 或 mv 放置檔案。

這些都不是「Linux 入門課才教的東西」，而是真實工作中天天在用的技能。`,
    duration: "2"
  },

  // ========== 中午休息 ==========
  {
    title: "中午休息",
    section: "休息",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-8 rounded-xl border border-green-500/30">
          <h3 className="text-3xl font-bold text-center text-white mb-6">☕ 午餐時間</h3>
          <p className="text-xl text-center text-slate-300">好好休息，下午見！</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg">
          <p className="text-yellow-400 font-semibold mb-2">💡 如果虛擬機有問題</p>
          <p className="text-slate-300">中午可以找助教協助排除</p>
        </div>
      </div>
    ),
    notes: `上午的課程到這邊結束，大家辛苦了！

中午好好休息、吃個飯，下午我們繼續。

如果你的虛擬機還有問題沒解決，中午可以來找助教，我們幫你處理。

下午見！`,
    duration: "1"
  },

  // ========== 上午總結 ==========
  {
    title: "上午總結",
    section: "回顧",
    content: (
      <div className="space-y-6">
        <div className="grid gap-4">
          {[
            { icon: "✅", text: "了解為什麼要學 Linux（伺服器、雲端、K8s）" },
            { icon: "✅", text: "知道 Linux 和 Windows 的主要差異" },
            { icon: "✅", text: "認識 Linux 檔案系統結構" },
            { icon: "✅", text: "理解使用者與權限的概念" },
            { icon: "✅", text: "成功用 SSH 連線到 Linux 主機" },
            { icon: "✅", text: "執行了第一個 Linux 指令" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `讓我們來回顧一下上午學到的內容。

我們了解了為什麼要學 Linux：它是伺服器、雲端、容器技術的基礎，也是職場中越來越重要的技能。

我們比較了 Linux 和 Windows 的差異：授權方式、操作介面、路徑語法、軟體安裝方式都不同。

我們認識了 Linux 的檔案系統結構：根目錄 /、家目錄 /home、設定檔目錄 /etc、日誌目錄 /var/log 等重要位置。

我們理解了使用者與權限的概念：root 是最高管理員，一般使用者用 sudo 提升權限，每個檔案有擁有者、群組、其他人的三組讀寫執行權限。

最重要的：我們成功用 SSH 連線到 Linux 主機，並且執行了第一批 Linux 指令！

這是你進入 Linux 世界的第一步。從這裡開始，我們會一點一點建立更完整的能力，最終達到管理 Kubernetes 叢集的目標。很棒的開始！

---

**上午總結的深度反思：**

**上午真正學到的是什麼？**

表面上看，上午學的東西不多——幾個概念、一些背景知識、三個簡單指令。但更重要的是，今天建立了幾個關鍵的認知框架：

第一：Linux 不是遙不可及的技術。你今天親自連上了一台 Linux 主機，輸入了指令，看到了輸出。那個「黑色終端機畫面」不再陌生，而是你可以操控的工具。這個心理障礙的突破，比任何具體技術內容都重要。

第二：理解了為什麼要學這些。你知道 Linux 在伺服器市場佔 96%、雲端平台超過 90% 用 Linux、Kubernetes 完全建立在 Linux 之上。這些「為什麼」能讓你在之後遇到困難時，有動力繼續學下去。

第三：建立了正確的學習順序認知。Linux → Docker → Kubernetes，這個順序不是隨便的。理解前一步才能真正理解下一步，跳過基礎直接學 K8s 就像在沙地上蓋樓。

**上午的學習量其實很大**

即使只學了三個指令，但今天涉及的概念包括：Linux 的歷史和設計哲學（一切皆檔案、Unix 設計原則）、作業系統的基本概念（核心 vs 發行版）、檔案系統的樹狀結構（vs Windows 的磁碟代號）、使用者身份和權限系統（root vs 一般使用者、rwx 三組權限）、網路協定（SSH 的加密原理）、命令列的基本操作方式（提示字元、輸入密碼不顯示等）。

這些概念在你接下來的學習中會一再出現，每次碰到時都會更加深刻地理解。今天種下的種子，會在之後慢慢長出來。

**對自己有信心**

很多人在學習新技術時容易自我懷疑：「這對我來說太難了嗎？」、「這是不是我不適合的領域？」

我想告訴大家：命令列和 Linux 確實有學習曲線，但它不是「天賦」決定的，而是「練習量」決定的。你今天遇到的每一個困惑，你的講師和助教當年也遇到過。區別只是他們練習了更多次。

繼續動手練習，遇到問題積極求助，這門課結束時你一定會有讓自己驚訝的進步。

**從今天到下堂課的期間**

現在距離下午一點還有將近一個小時。利用這段時間：中午好好吃飯、休息。思考一下今天學的哪些部分你還不確定，下午可以再問。回想一下你報名這門課的初衷——為什麼想學 Kubernetes？這個動力保持住。`,
    duration: "2"
  },

  // ========== Q&A ==========
  {
    title: "Q & A",
    subtitle: "有任何問題嗎？",
    content: (
      <div className="text-center space-y-8">
        <p className="text-8xl">🙋‍♀️ 🙋 🙋‍♂️</p>
        <p className="text-2xl text-slate-300">
          現在是發問時間，有任何問題都可以提出來
        </p>
        <div className="bg-slate-800/50 p-6 rounded-lg inline-block">
          <p className="text-slate-400 mb-2">聯絡方式</p>
          <p className="text-xl">課程 Line 群組 | 助教信箱</p>
        </div>
      </div>
    ),
    notes: `好，現在是開放提問時間。不管是今天上課的任何內容，還是對整個課程的疑問，都歡迎提出來。

以下是一些常見問題的預答，如果你正好有這些疑問，希望有幫助：

問：課程結束後，我需要有自己的 Linux 主機嗎？
答：不一定。練習主機在課程期間都可以繼續使用。如果想長期練習，可以考慮：用 WSL2（Windows 用戶免費）在本地跑 Linux；或是租用雲端 VM，AWS、GCP、Azure 都有免費方案；或在自己電腦上裝 VirtualBox 虛擬機。

問：學完這個課程，我能做什麼工作？
答：掌握 Linux + Docker + Kubernetes 是進入 DevOps、SRE（可靠性工程師）、雲端工程師、後端工程師等職位的重要加分項。很多公司的 JD 都會列 Kubernetes 經驗為加分或必要條件。

問：這門課有多難？我擔心跟不上。
答：這門課從零基礎設計，只要跟著做，動手練習，一定能學會。遇到卡關請立刻問，不要拖到下一堂課。

問：之後有什麼學習資源推薦？
答：官方文件是最好的資源：Kubernetes.io、Docker Docs。書籍推薦：《The Linux Command Line》（有中譯本）。網路資源：LinuxCommand.org、Linux Journey。

還有其他問題嗎？歡迎繼續提問。如果課後想到問題，記得在 Line 群組發問，或者下午的課上提出來都可以。

課程 Line 群組的使用：課後有問題可以在群組發問，助教會在 24 小時內回覆。發問時請附上你輸入的指令和完整的錯誤訊息，這樣才能幫你快速找到問題所在。記得把錯誤截圖或複製貼上，只說「跑不動」我們很難幫你除錯。

另外提醒：每次上課前先複習上一堂課的重點，效果比考前臨時抱佛腳好很多。每天花 15-20 分鐘在練習主機上練習，勝過週末一次花三小時。語言的學習（不管是程式語言還是指令列）都需要持續的練習才能建立肌肉記憶。課程 Line 群組不只是發問用的，也可以分享你覺得有趣的發現、你遇到並解決的問題。你解決問題的經過對其他學員也很有參考價值，分享出來大家一起進步。學習這條路，獨行快，眾行遠，互相支持的學習社群能幫助大家堅持到最後。有問題不要悶著，開口問是學習最快的捷徑。記住：所有的高手都曾是新手，差別只在於他們遇到困難沒有放棄，一直問、一直練、一直進步。這門課是你精彩旅程的起點，衷心期待看到大家在整個課程結束時令人驚喜的蛻變與技術成長！

感謝大家今天的參與，下午見！

**問：Linux 和 macOS 有什麼關係？它們是一樣的嗎？**
答：很好的問題！macOS 和 Linux 都屬於「類 Unix」系統，設計哲學相似，命令列指令也大部分相同（ls、cd、cat、grep 等），但它們的核心完全不同。macOS 的核心是 XNU（基於 Mach 微核心和 BSD Unix），不是 Linux 核心。所以嚴格來說，macOS 不是 Linux，但懂了 Linux，學 macOS 的命令列會很容易，反之亦然。很多 Mac 用戶在學習 Linux 時過渡非常順暢，因為很多操作習慣可以直接遷移。

【預期難搞學員問題 — 第一堂早上】

Q：你把 Container 說成輕量 VM，這樣會不會誤導？

A：會，所以講這句時要立刻補上精確版。Container 是作業系統層隔離，靠 namespace 和 cgroup；VM 是硬體層虛擬化，兩者隔離邊界和成本都不同。入門比喻可以用，但面試或實務討論一定要回到精確術語。

Q：我平常都用 Windows，本堂 Linux 基礎真的必要嗎？

A：必要，因為後面 Docker 與 Kubernetes 的除錯幾乎都在 Linux 語境。你不需要一次學到系統管理員等級，但至少要能看 log、查程序、改設定檔、排查權限。這堂課的目標是讓你後面不會卡在最底層。

Q：如果公司網路封鎖 SSH 22 port，今天實作是不是就做不了？

A：不是做不了，而是要切換方案。常見替代是改用跳板機、VPN、Web terminal，或臨時改 SSH port。重點不是死守某個連線方式，而是確保你能進到 Linux 環境完成同樣操作。

Q：macOS 使用者是不是可以直接跳過一半內容？

A：不能直接跳過。macOS 命令列體驗接近 Linux，但核心、套件管理、服務管理、檔案路徑與權限細節仍有差異。你會比較快上手，但仍要把 Linux 專屬行為補齊。

Q：指令這麼多，是背起來就好還是要理解原理？

A：先建立最小可用指令集，再配合理解原理。純背誦遇到變形題會卡住，純原理不動手又會執行慢。最佳做法是固定練高頻指令，搭配 man page 與錯誤訊息反推機制。

Q：我打字慢、常打錯，會不會跟不上後面 Kubernetes？

A：短期會慢，但不會構成長期瓶頸。先養成 tab 補全、history 重用、alias 習慣，能快速降低摩擦。課程重點不是打字速度，而是你能否定位問題並做出正確操作。

Q：上課示範常用 root，比較快，那正式環境也可以嗎？

A：正式環境不建議。示範用 root 是為了減少教學干擾，但生產要落實 least privilege，避免誤操作放大。最佳實務是一般帳號加 sudo，並保留完整審計紀錄。

Q：課程節奏快，沒聽懂是否先抄下來課後再補？

A：可以先抄，但關鍵卡點要當場問，否則後面會連鎖失真。建議每段只抓一個核心問題釐清，不要一次問太大題。課後再用練習把操作肌肉記憶補齊。`,
    duration: "5"
  },
]
