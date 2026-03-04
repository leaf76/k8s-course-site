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
    title: "Docker 入門",
    subtitle: "從容器概念到實際操作",
    section: "第二堂下午",
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-4xl">
            🐳
          </div>
          <div>
            <p className="text-2xl font-semibold">Docker 入門</p>
            <p className="text-slate-400">容器化技術基礎與實作</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 text-base">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-blue-400 font-semibold">時間</p>
            <p>13:00 – 17:00（240 分鐘）</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-blue-400 font-semibold">目標</p>
            <p>能獨立執行容器，掌握常用 Docker 指令</p>
          </div>
        </div>
      </div>
    ),
    notes: `大家午休回來，精神好一點了嗎？先動一動、搓搓臉，下午的課程要開始了。

下午的主題是 Docker，也是整個課程最重要的基礎。我先說一句話：你今天學的這些東西，是現代後端工程師、DevOps 工程師、SRE 工程師的基本功。不管你之後有沒有用 Kubernetes，Docker 你一定得會——因為幾乎所有雲端服務、CI/CD 流水線，底層都是容器技術。

讓我說一個真實發生的故事。有個工程師在 MacBook 上開發了一個 Python Flask 後端，本機測試完全正常，信心滿滿推到測試機，結果直接噴 ImportError。花了大半天才找到原因——他本地用 Python 3.11，測試機用 Python 3.6，某個函式庫在這兩版的 API 行為不同。程式碼沒 Bug，問題出在「環境」不一樣。業界甚至有個梗圖：工程師說 "It works on my machine"，另一個人回 "Then we'll ship your machine"。Docker 的誕生，就是真的把「你的機器上的環境」打包起來。

上午我們學了 Linux 基本操作，打好了地基。下午要蓋磚頭了——Docker 容器技術建立在 Linux 之上，這是你邁向 Kubernetes 最重要的一步。

今天下午四個小時，我們的路徑是：先理解「為什麼需要 Docker」，再搞懂「Docker 架構」，然後大量實作：執行容器、管理容器、掛 Volume、注入環境變數、設定資源限制。每個主題我先說明概念、Demo 一遍，再讓你們親手操作。課程節奏會比上午稍快，遇到不懂的立刻舉手，不要等到課後才說「剛才沒跟上」。

準備好終端機，我們開始！`,
    duration: "5"
  },

  // ========== 課程大綱 ==========
  {
    title: "今日下午課程大綱",
    section: "課程總覽",
    content: (
      <div className="grid gap-3">
        {[
          { time: "13:00-13:05", topic: "開場說明", icon: "🎬" },
          { time: "13:05-14:05", topic: "為什麼需要 Docker / 容器 vs VM / Docker 架構 / 安裝驗證", icon: "📚" },
          { time: "14:05-14:20", topic: "休息時間", icon: "☕" },
          { time: "14:20-14:50", topic: "docker run 基本操作", icon: "🚀" },
          { time: "14:50-15:15", topic: "常用指令：ps / images / logs / exec / stop / rm", icon: "⌨️" },
          { time: "15:15-15:40", topic: "Volume 基礎：Bind Mount vs Named Volume", icon: "💾" },
          { time: "15:40-16:00", topic: "環境變數注入：-e 與 --env-file", icon: "🔧" },
          { time: "16:00-16:15", topic: "資源限制：--memory, --cpus", icon: "⚙️" },
          { time: "16:15-17:00", topic: "課程總結與 Q&A", icon: "🎯" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-blue-400 text-sm">{item.time}</p>
              <p>{item.topic}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    notes: `讓我們先看一下今天下午的課程安排，這樣你對整體節奏有個底。

前一個小時（13:05 到 14:05）是理論部分。我們要搞清楚 Docker 解決了什麼問題、容器和虛擬機有什麼本質差異、Docker 整體架構是怎麼設計的。理論不能跳過，有了正確的心智模型，後面的操作才不是死記指令，而是真的理解在做什麼。

14:05 到 14:20 有 15 分鐘休息，建議起身走動、上廁所、補充水分。因為後半段全是高密度實作，需要保持清醒。

休息之後，從 14:20 到 17:00 的兩個半小時，幾乎全部都是動手操作。docker run、常用管理指令、Volume 掛載、環境變數注入、資源限制，這些是日常使用 Docker 最高頻的功能，每個你都要親手打一遍才算真正學到。

最後 45 分鐘（16:15 到 17:00）是總結和 Q&A，這段時間非常珍貴。我會回顧今天的重點，然後開放所有問題——不管是今天沒懂的、還是對課程方向的疑問，都可以提出來。

我的建議：今天不要只是看，要跟著操作。如果某個指令沒執行成功，立刻舉手，不要跳過繼續看，因為後面的練習有依賴關係。學習 Docker 最快的方式就是動手，看別人 Demo 是學不會的。`,
    duration: "3"
  },

  // ========== 為什麼需要 Docker：環境不一致問題 ==========
  {
    title: "「在我電腦上可以跑啊！」",
    subtitle: "Works on My Machine — 開發者的噩夢",
    section: "為什麼需要 Docker",
    content: (
      <div className="space-y-6">
        <div className="bg-red-900/30 border border-red-700 p-5 rounded-lg">
          <p className="text-xl text-red-300 italic">
            "It works on my machine..."
          </p>
          <p className="text-slate-400 mt-2">— 每個開發者都說過的話</p>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-slate-800/50 p-4 rounded-lg space-y-2">
            <p className="text-3xl">💻</p>
            <p className="font-semibold text-green-400">開發環境</p>
            <p className="text-sm text-slate-400">macOS<br />Python 3.11<br />Library A v1.2</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg space-y-2">
            <p className="text-3xl">🖥️</p>
            <p className="font-semibold text-yellow-400">測試環境</p>
            <p className="text-sm text-slate-400">Ubuntu 20.04<br />Python 3.9<br />Library A v1.0</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg space-y-2">
            <p className="text-3xl">☁️</p>
            <p className="font-semibold text-red-400">生產環境</p>
            <p className="text-sm text-slate-400">CentOS 7<br />Python 3.6<br />Library A v0.9</p>
          </div>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-4 rounded-lg">
          <p className="text-yellow-400 font-semibold">💡 根本問題</p>
          <p className="text-yellow-200">軟體依賴的「環境」無法跨機器精確複製</p>
        </div>
      </div>
    ),
    notes: `來，我要說一個你們一定聽過或親身經歷過的故事，這個故事是 Docker 誕生的直接動機。

場景：某個新創公司的後端工程師，花了三天在他自己的 MacBook Pro 上開發了一個 Python Django REST API。本機跑測試，全部綠燈，沒有任何問題。他很有自信地把程式碼推到 GitHub，然後 CI/CD 流水線自動部署到測試機。結果：部署失敗，一堆紅色錯誤訊息。「ImportError: cannot import name 'zip_longest' from 'itertools'」。他完全傻眼，這個函數在他電腦上明明就存在。

他開始 debug。首先確認程式碼沒有問題——本地再跑一次，完全正常。然後 SSH 進測試機，手動執行，一樣報錯。最後發現：他的 MacBook 用的是 Python 3.11，測試機裝的是 Python 3.6。某個標準函式庫的函數在 3.6 和 3.11 之間有差異。

這個問題花了他整整五個小時才找到根源。五個小時！只因為 Python 版本不同。

「環境不一致」是軟體開發中最令人抓狂的問題之一，有幾個特點讓它特別難排查：第一，程式碼本身沒有 Bug，所以 Code Review 看不出問題；第二，在某些環境可以跑、某些不行，現象不穩定；第三，錯誤訊息往往很難直接對應到根本原因。

什麼叫做「環境」？它包含非常多層面：作業系統的版本和發行版（Ubuntu vs CentOS，哪怕同樣是 Linux 行為也可能不同）；語言 Runtime 的版本（Python 3.6、3.9、3.11 各有差異）；依賴套件和函式庫的版本（requirements.txt 裡每個套件的版本）；系統層的函式庫（glibc 版本、OpenSSL 版本等）；環境變數的設定；甚至時區和 locale 設定。任何一個細節不同，都可能導致行為差異。這就是所謂的「環境依賴」問題。

傳統的解法是：寫一份超詳細的《環境設定文件》，列出每個步驟，讓每個人照著做。但這份文件很快就會過時，而且手動操作很容易出錯，一旦步驟做錯，你可能不知道問題在哪裡，只能從頭再來。有些公司甚至維護一份幾十頁的文件，新人要花一兩天才能把環境設好。

Docker 的解法從根本上不同：**不要叫人去設定環境，把環境本身打包起來**。把應用程式加上它所需要的所有依賴——Python 版本、套件、設定檔、系統工具——打包成一個叫做 Image 的東西。拿著這個 Image，不管在誰的 MacBook、什麼測試機、哪個雲端，跑起來的行為都完全一樣。這就是容器化技術要解決的核心問題。

這個「環境打包」的想法改變了整個軟體開發的流程。在 CI/CD（持續整合和持續部署）的流水線中，每次工程師把程式碼推上去，自動化系統會用 Dockerfile 建出一個新的 Image，在這個 Image 上跑自動測試，通過後把 Image 推到 Registry，再從 Registry 部署到測試環境和生產環境。因為每個環節用的都是同一個 Image，消除了「測試環境可以但生產環境不行」的問題，讓部署變得可預測、可重複。

應用程式透過環境變數接收設定（資料庫位址、API Key 等），同一個 Image 注入不同的環境變數就能在不同環境正確運作，這個設計模式叫做 Twelve-Factor App，是雲端原生應用的最佳實踐。版本管理也變得清晰：每個 Image 有一個 tag（標籤，通常是版本號或 git commit hash），出問題要回退，只要換 tag 重啟容器，整個回退過程一分鐘以內完成。Docker 讓「部署軟體」這件事從一門藝術，變成一個可以標準化、自動化、快速執行的工程流程。`,
    duration: "10"
  },

  // ========== 環境問題深挖 ==========
  {
    title: "環境不一致的代價",
    section: "為什麼需要 Docker",
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-red-400">傳統痛點</h3>
            {[
              "手動安裝依賴，版本容易搞錯",
              "「部署文件」越寫越長，維護困難",
              "新進成員環境設定要花一整天",
              "生產環境緊急修復時誰也不確定會不會動到別的東西",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg">
                <span className="text-red-400 flex-shrink-0">✗</span>
                <p className="text-slate-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-green-400">Docker 帶來的改變</h3>
            {[
              "環境打包成 Image，一次定義到處執行",
              "新人直接 docker run，五分鐘跑起來",
              "開發、測試、生產用同一個 Image",
              "版本回退只要換個 Image tag",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg">
                <span className="text-green-400 flex-shrink-0">✓</span>
                <p className="text-slate-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-900/30 border border-blue-500/50 p-4 rounded-lg">
          <p className="text-blue-400 font-semibold">🎯 Docker 的核心承諾</p>
          <p className="text-blue-200">Build once, run anywhere — 打包一次，到處執行</p>
        </div>
      </div>
    ),
    notes: `我們來深挖一下「環境不一致」這個問題的代價，以及 Docker 帶來了什麼具體改變。

先來看傳統的痛點有多真實。

第一個痛點：手動安裝依賴。一個 Node.js 專案可能有幾十個 npm 依賴，每個依賴又有自己的依賴，形成複雜的依賴樹。如果你用 npm install 裝的版本和別人的不一樣，行為就可能不同。更麻煩的是「依賴地獄」（Dependency Hell）：Package A 需要 Library X v1.x，Package B 需要 Library X v2.x，兩個版本互相衝突，你根本沒辦法同時滿足兩邊的需求。

第二個痛點：部署文件越來越長、越來越難維護。我見過一份 PDF 超過四十頁的環境設定文件，裡面全是「步驟 1：安裝這個，步驟 2：修改這個設定檔，注意：這個步驟要在步驟 5 之前做……」。這份文件可能寫於三年前，有一半內容已經過時，但沒人敢刪，因為不知道哪部分還在用。

第三個痛點：新人上手時間。公司的環境設定步驟越多，新人就要花越多時間設定環境，而不是真正開始工作。這不只是時間浪費，也容易因為某個步驟沒做好，導致之後莫名其妙的問題，讓新人對自己的能力產生懷疑。

第四個痛點：生產環境的緊急修復更可怕。深夜兩點，生產環境掛了，你要緊急 ssh 進去 debug，在那台機器上手動裝某個工具、改某個設定……每一個手動操作都在累積「環境偏差」（Configuration Drift），讓生產環境和你理解的狀態越來越不一樣，下次出問題排查會更難。

現在來看 Docker 帶來的改變。

Image 的核心概念是：把環境的定義寫在 Dockerfile（一個文字檔），然後建置成一個不可變的 Image。這個 Image 包含了應用程式跑起來所需的一切——OS 工具、語言 Runtime、套件、設定。它是不可變的（immutable），一旦建好就固定了，不會因為時間或環境變化而改變。

新人上手的體驗變成：git clone 專案，執行一個 docker run 或 docker-compose up，等個幾分鐘，整個開發環境就跑起來了。不需要看任何文件，不需要手動裝任何東西，甚至不需要知道這個服務用什麼語言寫的。

開發、測試、生產用同一個 Image——這是 Docker 最大的承諾，也基本上做到了。你在開發環境測試過的那個 Image，不做任何改動，直接部署到生產環境。如果生產環境出問題，你可以把那個版本的 Image 拉下來在本地重現，因為環境完全一樣。

版本回退：每個 Image 都有一個 tag（標籤），通常是版本號或 Git commit hash。如果新版本出問題，你只需要把 tag 換回上一個版本，容器重啟，問題就解決了。整個回退過程可以在一分鐘內完成。

Docker 還解決了一個「規模化」問題。如果你有一百台伺服器需要部署同一個服務，傳統方式要在每台機器跑安裝腳本，任何一台出差錯就可能讓環境不一致，難以排查。用 Docker 的方式，每台機器只需要 docker pull 然後 docker run，操作完全相同，而且幾乎不可能出現「這台和那台版本不同」的問題，因為 Image 是中央化管理的，所有機器用的是同一個 Image。這個「所有節點狀態完全一致」的特性，正是 Kubernetes 能夠大規模管理容器的基礎，K8s 本質上就是在一個叢集裡自動化做 docker pull 和 docker run 的工作，只是加上了調度、健康檢查、自動修復等更豐富的功能。

Docker 的口號是 "Build once, run anywhere"——打包一次，到處執行。這個承諾在實際使用中基本做到了，也是為什麼 Docker 問世後不到十年，就成為整個雲端和 DevOps 生態的標準基礎設施。`,
    duration: "10"
  },

  // ========== 容器 vs 虛擬機：架構差異 ==========
  {
    title: "容器 vs 虛擬機",
    subtitle: "架構差異與資源效率",
    section: "容器 vs 虛擬機",
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 p-4 rounded-lg space-y-3">
          <h3 className="text-xl font-bold text-purple-400 text-center">虛擬機（VM）</h3>
          <div className="space-y-2 text-sm text-center">
            {["App A", "App B"].map((app, i) => (
              <div key={i} className="bg-purple-900/40 border border-purple-700 p-2 rounded">
                <p>{app}</p>
                <p className="text-slate-400">Guest OS（完整作業系統）</p>
                <p className="text-slate-400">虛擬硬體</p>
              </div>
            ))}
            <div className="bg-slate-700 p-2 rounded">Hypervisor（VMware / VirtualBox）</div>
            <div className="bg-slate-600 p-2 rounded">Host OS</div>
            <div className="bg-slate-500 p-2 rounded">實體硬體</div>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg space-y-3">
          <h3 className="text-xl font-bold text-blue-400 text-center">容器（Container）</h3>
          <div className="space-y-2 text-sm text-center">
            {["App A", "App B"].map((app, i) => (
              <div key={i} className="bg-blue-900/40 border border-blue-700 p-2 rounded">
                <p>{app}</p>
                <p className="text-slate-400">Libs / Bins</p>
              </div>
            ))}
            <div className="bg-blue-800/60 p-2 rounded">Docker Engine</div>
            <div className="bg-slate-600 p-2 rounded">Host OS（Linux Kernel）</div>
            <div className="bg-slate-500 p-2 rounded">實體硬體</div>
          </div>
        </div>
      </div>
    ),
    notes: `好，現在我們要理解容器和虛擬機的本質差異，這是 Docker 入門最重要的概念之一。

先說虛擬機（VM）的設計思路。VM 的核心想法是：用軟體模擬一套硬體，在這套虛擬硬體上跑一個完整的作業系統，然後在這個 OS 上跑你的應用程式。負責這個模擬的軟體叫 Hypervisor，常見的有 VMware ESXi（企業用）、VirtualBox（個人用）、AWS 和 GCP 的雲端 VM 底層也是 Hypervisor。

VM 的架構從下到上是：實體硬體 → Host OS → Hypervisor → 虛擬硬體（每個 VM 自己的） → Guest OS（一個完整的 Linux 或 Windows） → 應用程式。你的應用跑在 Guest OS 裡，Guest OS 跑在虛擬硬體上，虛擬硬體跑在 Hypervisor 上，Hypervisor 跑在 Host OS 上。中間有很多層。

這個設計有強隔離的優點，但代價是資源消耗大：每個 VM 都要跑一個完整的 Guest OS，光 OS 本身就要佔幾 GB 磁碟、幾百 MB 記憶體。啟動一個 VM 要走完整的 OS 開機流程，需要幾分鐘。

容器的設計思路完全不同，它往後退了一步，問了一個問題：如果多個應用程式都跑在同一個 Linux OS 上，我們真的需要每個都有自己的 OS 嗎？

答案是：不需要，我們只需要讓每個應用程式「以為」自己有獨立的 OS 就夠了。Linux Kernel 提供了兩個機制來實現這個「幻覺」：

Namespace（命名空間）：讓每個容器有自己獨立的視野——它看到的 process ID 是獨立的（不會看到其他容器的 process）、它看到的網路介面是獨立的、它看到的掛載點（Mount）是獨立的、它的主機名稱是獨立的。這樣每個容器都「以為」自己是一個獨立的系統。

cgroup（Control Groups）：控制每個容器能使用的資源上限——CPU、記憶體、磁碟 I/O、網路頻寬。這是後面我們講資源限制的底層機制。

Docker Engine 利用 namespace 和 cgroup，讓容器共享宿主機的 Linux Kernel，同時維持相互隔離。容器裡不需要裝完整的 OS，只需要包含應用程式和它直接需要的函式庫就夠了。

結果是：容器映像可以只有幾十 MB，啟動時間是秒級甚至毫秒級，同一台機器可以跑幾十甚至幾百個容器。

重要提醒：因為容器共享 Host 的 Kernel，容器必須是和 Host 相同 Kernel 的程式。你在 Linux 上無法直接跑 Windows 容器（需要 Windows Kernel）。Docker Desktop 在 Mac 和 Windows 上能跑 Linux 容器，是因為它偷偷在背後起了一個輕量 Linux VM，這個細節在某些場景下有實際影響。

Namespace 隔離的機制值得多了解一些。Linux Kernel 提供七種 namespace：PID namespace（讓容器的第一個程序 PID 是 1，容器裡的程序看不到宿主機的其他程序）；Network namespace（每個容器有獨立的網路介面、IP 位址和路由表）；Mount namespace（每個容器有自己的掛載點視圖）；UTS namespace（容器可以有獨立的主機名稱）；IPC、User、Cgroup namespace 各管各的隔離範圍。這七種 namespace 組合起來，讓容器在運行時「以為」自己是獨立的系統，實際上共享 Kernel。

cgroup（Control Groups）控制每個容器的資源用量，是後面資源限制功能（--memory、--cpus）的底層機制。理解了 namespace 和 cgroup，你就理解了「容器不是魔法，只是 Linux Kernel 特性的組合應用」。這也解釋了為什麼容器安全很重要——共享 Kernel 意味著如果有 Kernel 漏洞，所有容器都可能受影響。不在容器裡以 root 身份跑主程序，是 Docker 和 K8s 的安全最佳實踐之一。`,
    duration: "10"
  },

  // ========== 容器 vs VM：效能比較 ==========
  {
    title: "容器 vs 虛擬機：效率比較",
    section: "容器 vs 虛擬機",
    content: (
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="p-4 text-blue-400">比較項目</th>
              <th className="p-4">🐳 Container</th>
              <th className="p-4">🖥️ VM</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {[
              ["啟動時間", "秒級（&lt;1s）", "分鐘級（1-5 min）"],
              ["映像大小", "MB 級（幾十 MB）", "GB 級（幾 GB）"],
              ["記憶體使用", "低（共享 Kernel）", "高（獨立 OS）"],
              ["隔離程度", "程序級隔離", "硬體級隔離"],
              ["可攜性", "極高（Image 即環境）", "較差（鏡像大，依賴 Hypervisor）"],
              ["安全邊界", "共享 Kernel（風險較高）", "完全隔離（更安全）"],
            ].map(([item, container, vm], i) => (
              <tr key={i} className="border-b border-slate-800">
                <td className="p-4 font-semibold">{item}</td>
                <td className="p-4 text-green-400" dangerouslySetInnerHTML={{ __html: container }} />
                <td className="p-4 text-orange-400">{vm}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-blue-900/20 border border-blue-700 p-4 rounded-lg mt-4">
          <p className="text-blue-400 font-semibold">💡 實務上的選擇</p>
          <p className="text-slate-300 text-sm">容器用於應用部署；VM 用於強隔離需求（多租戶、不同 OS）</p>
        </div>
      </div>
    ),
    notes: `我們來逐項比較容器和虛擬機，每個指標都有它的實務意義。

啟動時間：容器幾乎是瞬間啟動，通常在一秒以內，有些輕量容器（比如跑個 shell script）甚至幾十毫秒。VM 要走完整的 OS 開機流程，通常需要一到五分鐘。在雲端彈性伸縮（Auto Scaling）的場景中，如果流量突然暴增，你需要快速擴展新的實例，容器的秒級啟動對比 VM 的分鐘級啟動，是關鍵優勢。Kubernetes 的一個核心能力——快速 scale out——就是建立在容器快速啟動這個特性上的。

映像大小：一個 Alpine Linux 的基礎 Docker Image 只有 5 MB，一個 Ubuntu 基礎 Image 大約 70 MB，就算加上你的應用程式也通常不超過幾百 MB。VM 鏡像動輒好幾 GB，因為要包含完整 OS。這個差異在網路傳輸（部署時拉 Image）和磁碟佔用上影響很大。在 CI/CD 流水線裡，每次建置都需要拉 Image，幾 MB 和幾 GB 的差異直接影響部署速度。

記憶體使用：容器只跑應用程式和必要函式庫，沒有 OS overhead。一個 nginx 容器在空閒時可能只用 5-10 MB 記憶體。VM 光 Guest OS 就要幾百 MB。同樣的機器，用容器可以密集部署更多服務，機器利用率更高，成本更低。

隔離程度：這是容器的相對弱點。VM 有完整的硬體級隔離，一個 VM 即使崩潰或被攻破，理論上影響不到其他 VM。容器共享 Kernel，如果有容器逃逸（Container Escape）漏洞，攻擊者可能從容器突破到宿主機。這在多租戶環境下是重要考量。高安全要求的場景（比如雲端服務商的客戶隔離），往往還是用 VM，或用 gVisor、Kata Containers 這類更安全的容器運行時。

可攜性：Docker Image 是標準格式，在任何有 Docker 的機器上都能跑（同 Kernel 的前提下）。VM 鏡像往往和 Hypervisor 綁定（VMware 格式、VirtualBox 格式各不相通），可攜性差。

安全邊界：容器共享 Kernel，安全邊界比 VM 薄。實務上，用容器的安全最佳實踐包括：不要在容器裡跑 root 進程、開啟 Seccomp 和 AppArmor 限制系統呼叫、使用 read-only 根檔案系統等。

實務選擇：這不是非此即彼的問題。現代雲端環境通常是 VM 上面跑容器——AWS EC2 或 GCP GCE 等 VM 上面跑 Docker，再用 Kubernetes 管理容器。VM 提供硬體級隔離和跨雲端的基礎設施，容器提供快速部署和高密度使用。理解兩者的特性，才能在架構設計時做出正確選擇。

現實的雲端架構通常是 VM 加容器的組合：底層是雲端服務商的 VM（AWS EC2、GCP Compute Engine），VM 上面跑 Kubernetes，Kubernetes 管理成千上萬個容器。這樣的架構結合了 VM 的強隔離（不同客戶的 VM 之間有硬體級隔離）和容器的高密度（每台 VM 可以跑幾十到幾百個容器，大幅提升機器利用率）。

有一個新興技術叫 microVM，試圖結合兩者優點：安全性接近 VM，啟動速度和資源消耗接近容器。AWS Firecracker（Lambda 和 Fargate 的底層）和 Google gVisor 是代表作，Kubernetes 也支援用 Kata Containers 讓特定 Pod 跑在 microVM 裡，在多租戶高安全需求的場景下很有用。

還有一個實際操作上的重要差異：VM 可以動態調整資源（比如給 VM 加 CPU 或記憶體，有些雲端支援 hot-add），但運作中的容器資源限制比較難動態調整，通常需要重新啟動容器。這對需要零停機調整資源的場景是個考量點。Kubernetes 有 Vertical Pod Autoscaler（VPA）可以自動調整 Pod 資源，是解決這個問題的方向。`,
    duration: "10"
  },

  // ========== Docker 架構 ==========
  {
    title: "Docker 架構",
    subtitle: "Daemon, Client, Registry, Image, Container",
    section: "Docker 架構",
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-2 text-center text-sm items-center">
          <div className="bg-green-900/40 border border-green-700 p-3 rounded-lg col-span-1">
            <p className="text-2xl">👤</p>
            <p className="font-semibold text-green-400">Docker Client</p>
            <p className="text-slate-400 text-xs">docker run ...</p>
          </div>
          <div className="text-slate-500 text-2xl">→</div>
          <div className="bg-blue-900/40 border border-blue-700 p-3 rounded-lg col-span-1">
            <p className="text-2xl">⚙️</p>
            <p className="font-semibold text-blue-400">Docker Daemon</p>
            <p className="text-slate-400 text-xs">dockerd</p>
          </div>
          <div className="text-slate-500 text-2xl">↔</div>
          <div className="bg-purple-900/40 border border-purple-700 p-3 rounded-lg col-span-1">
            <p className="text-2xl">📦</p>
            <p className="font-semibold text-purple-400">Registry</p>
            <p className="text-slate-400 text-xs">Docker Hub</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              label: "Image（映像）",
              color: "yellow",
              items: ["容器的唯讀模板", "由 Dockerfile 建立", "可以有多個版本（tag）", "類比：程式的安裝檔"],
            },
            {
              label: "Container（容器）",
              color: "cyan",
              items: ["Image 的執行實例", "有獨立的讀寫層", "可啟動、停止、刪除", "類比：程式執行中的 Process"],
            },
          ].map((box) => (
            <div key={box.label} className={`bg-slate-800/50 p-4 rounded-lg border border-${box.color}-700/50`}>
              <p className={`font-bold text-${box.color}-400 mb-2`}>{box.label}</p>
              <ul className="space-y-1">
                {box.items.map((item, j) => (
                  <li key={j} className="text-slate-300 text-sm flex items-start gap-2">
                    <span className={`text-${box.color}-400`}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `現在來認識 Docker 的整體架構。理解架構很重要，有了這個心智模型，你才知道自己輸入的每個指令在「做什麼」、「讓誰去做」，出問題的時候也才知道從哪裡找原因。

Docker 有五個核心組件：Client、Daemon、Registry、Image、Container。讓我們一個一個說清楚。

**Docker Client**

Docker Client 就是你在終端機輸入的 docker 指令。它是使用者和 Docker 系統互動的入口。你輸入「docker run nginx」，這個 docker 可執行檔（binary）就是 Client。Client 本身不做真正的工作，它只負責把你的指令轉換成 API 請求，透過 REST API 發送給 Docker Daemon。

有個常被忽略的事實：Docker Client 和 Daemon 可以不在同一台機器上。你可以在本地電腦用 docker 指令，連到遠端機器的 Daemon 去執行操作。這在 CI/CD 環境或遠端 debug 時很有用。

**Docker Daemon（dockerd）**

Daemon 是真正幹活的角色，它是一個在背景持續運行的服務，程序名稱叫 dockerd。負責接收來自 Client 的 API 請求，然後實際執行：下載 Image、建立容器、管理網路（建立虛擬網路介面）、管理儲存（Volume）、清理資源。Daemon 監聽在 Unix socket（/var/run/docker.sock）或 TCP port，Client 透過這個 socket 和 Daemon 通訊。

如果你用 systemctl status docker 會看到 dockerd 這個服務。Daemon 需要以 root 權限運行，因為它需要管理 namespace、cgroup 這些需要特權的 Kernel 功能。

**Registry**

Registry 是 Image 的存放倉庫，角色就像 GitHub 之於程式碼。Docker Hub（hub.docker.com）是最大的公開 Registry，上面有幾百萬個公開 Image，包括官方的 nginx、redis、postgres、mysql 等等。

當你執行 docker pull nginx，Daemon 就從 Docker Hub 把 nginx Image 下載到本地。Image 名稱格式是：倉庫名稱/映像名稱:標籤。nginx:1.25 代表 nginx 映像的 1.25 版，如果不指定標籤就預設用 latest。

公司通常也會建立私有 Registry（用 Harbor、AWS ECR、GCP Artifact Registry 等），讓自己的 Image 不對外公開。Kubernetes 課程後面會用到私有 Registry 的概念。

**Image（映像）**

Image 是容器的模板，唯讀的。可以把它想像成程式的安裝包或光碟：有了這個東西，你可以在任何支援的機器上產生一模一樣的執行環境，而且你可以產生很多份，互不影響。

Image 是分層（Layer）構成的，每一層代表 Dockerfile 裡的一個指令步驟（比如 RUN apt-get install -y nginx 就是一層）。這個分層設計非常聰明：多個 Image 可以共用相同的層，節省磁碟空間；當你更新 Image 時，只需要下載改變的層，不需要重新下載所有層。

舉例：你有個基於 ubuntu:22.04 的 Image A 和 Image B，它們都從 ubuntu:22.04 這一層開始。這個基礎層只需要在磁碟上存一份，兩個 Image 共用。

**Container（容器）**

Container 是 Image 的執行實例，是 Image 被啟動後的活的狀態。一個 Image 可以同時跑很多個 Container，就像一個程式安裝檔可以安裝到很多台機器上。

Container 在 Image 的唯讀層上面加了一個薄薄的可寫層（Container Layer）。容器裡的任何修改——新增檔案、修改設定——都寫在這個可寫層。如果你刪掉容器，這個可寫層就消失了，原始 Image 不受影響。這就是為什麼「容器的資料是暫時的」，要持久化資料就需要 Volume（後面會講）。

**完整流程**

你輸入 docker run nginx：
1. Docker Client 把請求發給 Daemon
2. Daemon 檢查本地有沒有 nginx Image，沒有就去 Docker Hub 拉
3. 拉到 Image 後，Daemon 用這個 Image 建立一個 Container
4. Daemon 設定 namespace 和 cgroup 隔離這個 Container
5. Container 啟動，你的 nginx 服務跑起來了

這個流程在你輸入指令後幾秒內完成。

讓我們深入了解 Image 的分層機制，這個設計在實際使用中非常重要。每個 Dockerfile 指令都會建立一個新的 Layer，這些 Layer 是唯讀的、可以被快取和共用的。舉個具體例子，假設你的 Dockerfile 有六個步驟：從 ubuntu 基礎開始、安裝 Python、複製依賴列表、安裝 Python 套件、複製應用程式碼、設定啟動指令。這六層中，前幾層（Ubuntu、Python 安裝、套件安裝）改動少，可以長期快取；只有最後的複製應用程式碼那層因為程式碼頻繁修改而需要重建。

Docker Build 的快取機制很聰明：如果一個 Layer 沒有改變，直接用快取，不重新執行；只有發生改變的 Layer 和它之後的 Layer 才重建。所以在寫 Dockerfile 時，要把「改動少的步驟放前面，改動多的步驟放後面」，Build 速度就能快很多。這個原則在 CI/CD 流水線裡特別重要，因為每次程式碼推上去都要 Build，如果能命中快取，幾分鐘的 Build 可以縮短到幾秒。

多個 Image 共用相同 Layer 也節省磁碟空間。你有十個基於 ubuntu:22.04 的 Image，ubuntu:22.04 這一層只需要在磁碟上存一份，十個 Image 共用，節省了九份的儲存空間。拉取 Image 時同樣：如果本地已有某些 Layer，Docker 不重複下載，只拉缺少的部分。

Registry 方面，Docker Hub 有匿名存取次數限制（每六小時 100 次），已登入用戶 200 次。大型組織通常自建私有 Registry：Harbor（開源，功能豐富，有漏洞掃描和鏡像複製功能）、AWS ECR（和 AWS IAM 整合完美）、GCP Artifact Registry、GitLab Container Registry（和 GitLab CI/CD 整合緊密）。在 Kubernetes 課程後面，我們會練習如何讓 Pod 從私有 Registry 拉取 Image，設定 imagePullSecrets，這是企業環境的標準配置。

還有一個概念：Container Runtime（容器執行引擎）。Docker 最初是用 libcontainer，後來 Docker 把容器運行的標準介面捐出去，成為 OCI（Open Container Initiative）標準。現在 Kubernetes 預設用 containerd（Docker 的一部分）或 CRI-O 作為容器執行引擎，不一定需要 Docker 本身。但 Image 格式是 OCI 標準的，用 Docker build 出來的 Image，可以在任何 OCI 兼容的執行引擎上跑，包括 Kubernetes。這就是為什麼「你學 Docker build Image，在 K8s 上一樣能用」的原因。`,
    duration: "20"
  },

  // ========== 安裝 Docker 與基本驗證 ==========
  {
    title: "安裝 Docker 與基本驗證",
    section: "環境設定",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># Ubuntu 安裝（練習機已預裝，僅供參考）</p>
          <pre className="text-green-400 text-sm">{`curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># 驗證安裝</p>
          <pre className="text-green-400 text-sm">{`docker version          # 查看版本
docker info             # 查看系統資訊
docker run hello-world  # 跑第一個容器`}</pre>
        </div>
        <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
          <p className="text-green-400 font-semibold text-sm">✓ hello-world 成功輸出</p>
          <pre className="text-slate-300 text-xs mt-2">{`Hello from Docker!
This message shows that your installation appears to be working correctly.`}</pre>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg">
          <p className="text-yellow-400 text-sm">💡 如果看到 permission denied，記得加 sudo 或重新登入讓 usermod 生效</p>
        </div>
      </div>
    ),
    notes: `我們的練習機已經預裝好 Docker 了，不需要現在手動安裝。但我還是說一下安裝過程，讓大家知道回家在自己的機器上怎麼裝。

**安裝 Docker（Ubuntu）**

最簡單的方法是用 Docker 官方提供的一鍵安裝腳本。curl -fsSL https://get.docker.com | sh，這個腳本會自動偵測你的 Linux 發行版（支援 Ubuntu、Debian、CentOS、Fedora 等），然後添加 Docker 的 APT 或 YUM repository，安裝 Docker Engine。整個過程大約幾分鐘。

安裝完後，Docker Daemon 會自動啟動，但你現在還沒辦法不加 sudo 用 docker 指令——因為 Docker socket 預設只有 root 可以存取。執行 sudo usermod -aG docker $USER，把當前使用者加到 docker 群組，然後重新登入（logout 再 login，或用 newgrp docker 讓設定立刻生效）。之後就可以不加 sudo 直接用 docker 了。

**為什麼不建議每次都 sudo docker？**

雖然加 sudo 能用，但這樣不方便（每次都要輸入密碼），而且在腳本中不適合。把使用者加到 docker 群組是正確做法，但要注意：docker 群組的成員事實上等同於 root 權限（因為可以透過 docker 掛載任何目錄、執行特權容器），所以只把信任的使用者加進去。

**驗證安裝三步驟**

第一步：docker version。這個指令顯示 Docker Client 的版本和 Docker Daemon 的版本。如果只顯示 Client 的版本，Daemon 那行顯示錯誤，代表 Daemon 沒有在運行，要用 sudo systemctl start docker 啟動它（或 sudo systemctl enable docker 設定開機自啟）。看到兩個版本號都出現，代表 Client 和 Daemon 都正常。

第二步：docker info。顯示更詳細的系統資訊，包括：當前運行中的容器數、停止的容器數、本地 Image 數、Docker Root Dir（Image 和 Volume 存放路徑）、Storage Driver（通常是 overlay2）、Kernel 版本。這個指令在 debug 問題時很有用，可以了解當前 Docker 的整體狀態。

第三步：docker run hello-world。這是真正的完整流程測試。Daemon 會先找本地有沒有 hello-world 這個 Image，沒有就去 Docker Hub 拉（會看到 "Unable to find image 'hello-world:latest' locally" 然後開始下載）。下載完建立容器，容器執行一個小程式，輸出一段說明文字，然後退出。如果你看到 "Hello from Docker!"，代表整個鏈路都通了：Client → Daemon → Registry → Image → Container 全部正常。

有趣的是，hello-world 的輸出本身就是一個 Docker 工作流程的說明：它告訴你 Daemon 從 Hub 拉了 Image、建立了容器、容器執行並輸出了這段文字。值得認真讀一遍。

**現在大家操作**

請打開終端機，連到練習機，依序執行這三個指令，確認 Docker 環境正常。特別注意 docker version 的輸出，確認 Server 部分有出現。有任何錯誤訊息，舉手讓我看。（等待 3 分鐘讓學員操作）`,
    duration: "10"
  },

  // ========== 休息 ==========
  {
    title: "☕ 休息時間",
    subtitle: "休息 15 分鐘",
    content: (
      <div className="text-center space-y-8">
        <p className="text-6xl">☕ 🚶 🧘</p>
        <p className="text-2xl text-slate-300">
          理論部分結束！休息一下，等等進入大量實作
        </p>
        <div className="bg-slate-800/50 p-6 rounded-lg inline-block">
          <p className="text-slate-400">下半場預告</p>
          <p className="text-xl text-blue-400">docker run、容器管理、Volume、環境變數、資源限制</p>
        </div>
      </div>
    ),
    notes: `好，理論部分到這裡告一段落。我們花了一個小時，搞清楚了三件事：為什麼需要 Docker（環境不一致問題）、容器和 VM 的本質差異（共享 Kernel vs 完整 OS）、Docker 的五個核心組件（Client、Daemon、Registry、Image、Container）。

這些是 Docker 的思想基礎。有了這個基礎，後面的實作才有意義——你不會只是在背指令，而是真的理解每個指令在讓哪個組件做什麼事。

現在休息 15 分鐘。建議起身走動、上廁所、去倒杯水，活動一下筋骨。後面兩個半小時全是高密度實作，要保持清醒狀態。

如果剛才理論部分有任何不清楚的地方，可以趁這個時候過來問我，我很樂意一對一解釋。休息結束後我們就直接進入實作，不會再回頭複習理論了。

14:20 準時繼續，從 docker run 開始！`,
    duration: "1"
  },

  // ========== docker run 基本操作 ==========
  {
    title: "docker run 基本操作",
    subtitle: "-d, -p, --name, -e, -v",
    section: "容器操作",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># 基本語法</p>
          <code className="text-green-400">docker run [選項] IMAGE [指令]</code>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { flag: "-d", desc: "背景執行（detach）", example: "docker run -d nginx" },
            { flag: "-p", desc: "埠映射 host:container", example: "docker run -p 8080:80 nginx" },
            { flag: "--name", desc: "指定容器名稱", example: "docker run --name web nginx" },
            { flag: "-e", desc: "設定環境變數", example: 'docker run -e ENV=prod nginx' },
            { flag: "-v", desc: "掛載 Volume", example: "docker run -v /data:/data nginx" },
            { flag: "--rm", desc: "容器停止後自動刪除", example: "docker run --rm alpine echo hi" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-3 rounded-lg">
              <code className="text-yellow-400 font-bold">{item.flag}</code>
              <p className="text-slate-300 text-sm mt-1">{item.desc}</p>
              <code className="text-green-400 text-xs mt-1 block">{item.example}</code>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `歡迎回來！現在進入最重要的實作部分。接下來每一個主題，我都會先講清楚概念，然後 Demo，然後你們跟著做。

docker run 是你和 Docker 最頻繁的互動指令。它做的事情是：如果 Image 不在本地就從 Registry 拉下來，然後根據這個 Image 建立一個新的容器並啟動它。完整語法是：docker run [選項] IMAGE [要在容器裡執行的指令和參數]

讓我們逐一說明最重要的六個選項：

**-d（detach，背景執行）**

不加 -d 的話，docker run 會把容器的標準輸出直接印到你的終端機，而且你的 shell 會被「佔住」，除非 Ctrl+C 停止，才能繼續輸入指令（但 Ctrl+C 同時也會停止容器）。這在測試時有用，可以直接看到輸出。

加了 -d，容器在背景跑，你的 shell 立刻回到可用狀態。Docker 會輸出這個容器的完整 ID（一長串 hash），然後你繼續使用終端。正式環境的服務（nginx、資料庫、API server 等）幾乎都加 -d。

試試看差異：不加 -d 跑 docker run nginx，你會看到 nginx 的啟動日誌一直印，Ctrl+C 才能回到 prompt 但容器也停了。加了 -d 跑 docker run -d nginx，馬上回到 prompt，容器在背景繼續跑。

**-p（publish，port 映射）**

容器有自己的網路命名空間，預設情況下容器的 port 和宿主機是隔離的，外面連不進去。-p 的作用是在宿主機和容器之間建立 port 對映。

格式是 -p 宿主機port:容器port。比如 -p 8080:80 的意思是：把宿主機的 8080 port 對映到容器的 80 port。你在瀏覽器打開 http://localhost:8080，請求會轉到容器內的 80 port。

為什麼要兩個 port？因為宿主機的 80 port 可能被其他服務用了，所以你可以用 8080 來避開。容器內的 port 是容器自己的網路空間，不和宿主機的 port 衝突。你可以同時跑兩個 nginx 容器，分別用 -p 8080:80 和 -p 8081:80，它們各自獨立。

可以對映多個 port：-p 8080:80 -p 443:443，每個 -p 對映一組。

**--name（容器名稱）**

不指定 --name，Docker 會自動給容器取一個隨機名字，格式是形容詞_名人，比如 "loving_einstein"、"suspicious_wozniak"。名字雖然有趣，但管理起來很麻煩——你要記得每個容器的 ID 或隨機名字。

加了 --name 就能用有意義的名字操作容器：docker logs my-nginx、docker exec -it my-nginx bash、docker stop my-nginx。正式環境一定要加 --name，讓容器名稱和它的用途對應，比如 app-server、db、redis-cache。

注意：容器名稱在同一個 Docker host 上必須唯一。如果你要建立同名容器，必須先刪掉舊的。

**-e（environment，環境變數）**

很多應用程式用環境變數接收設定（資料庫連線字串、API Key、功能開關等）。-e 讓你在啟動容器時注入環境變數，格式是 -e 變數名=值。多個環境變數用多個 -e：docker run -e DB_HOST=localhost -e DB_PORT=5432 myapp。環境變數這個主題後面有專門的一節，這裡先知道有這個選項。

**-v（volume，掛載儲存）**

容器的根檔案系統是暫時的，容器刪除後裡面的資料就消失了。-v 讓你把宿主機的目錄或 Docker Volume 掛到容器內的一個路徑，實現資料持久化。-v /host/path:/container/path，宿主機路徑在左，容器路徑在右。Volume 這個主題也有專門一節深入討論。

**--rm（容器停止後自動刪除）**

如果你只是要測試某個指令或暫時用一次容器，加 --rm 讓容器在退出後自動清理掉，不會留下一堆已停止的容器佔用磁碟。很適合一次性任務：docker run --rm alpine echo "hello"，執行完 echo 指令後，容器自動消失。

**實作練習**

現在跟著我做：

第一步：執行 docker run -d -p 8080:80 --name my-nginx nginx。你會看到 Docker 先下載 nginx Image（第一次執行需要時間），然後輸出容器 ID。

第二步：docker ps，確認容器在跑，Port 欄位應該顯示 0.0.0.0:8080->80/tcp。

第三步：打開瀏覽器，連到 http://localhost:8080 或是 http://練習機IP:8080，應該看到 nginx 的 "Welcome to nginx!" 頁面。

如果瀏覽器可以看到 nginx 頁面，恭喜你，你的第一個容器跑起來了！這就是「容器化部署」的感覺——沒有手動安裝 nginx，沒有設定系統服務，一個指令搞定。有任何問題舉手，我過來看。

讓我們更深入地探討 docker run 的進階用法，這些在日常工作中非常重要。

**-it 互動模式詳解**

-it 的全名是 --interactive --tty。-i（interactive）讓標準輸入保持開著，這樣你可以用鍵盤對容器裡的程序輸入；-t（tty）分配一個偽終端（pseudo-TTY），讓容器裡的 shell 知道它在一個終端機環境裡，這樣才有提示符（prompt）、顏色、正確的 TERM 設定等。這兩個選項幾乎總是一起用 -it。

試試：docker run -it ubuntu bash，進入 ubuntu 容器的 bash。你可以在裡面 apt install 東西、建立檔案、執行任何指令。輸入 exit 離開，容器停止（但因為沒有加 --rm，還是存在，可以用 docker ps -a 看到）。

docker run --rm -it ubuntu bash 是最常用的「一次性測試環境」組合：進去測試，離開後容器自動消失。我常用這個快速測試某個 Linux 指令、驗證某個環境的行為，用完自動清理，完全不留痕跡。

**進階的 -v 用法**

除了 Bind Mount 和 Named Volume，-v 還有第三種寫法：只寫容器路徑，不寫宿主機路徑，比如 -v /data。這會建立一個匿名 Volume（Anonymous Volume），Docker 自動給它一個 ID，存在 /var/lib/docker/volumes/ 裡。匿名 Volume 和具名 Volume 一樣，容器刪除後資料還在，但因為沒有名字很難管理，通常用 docker volume prune 統一清理，適合暫時需要持久化但不在乎資料在哪的情況。

只讀掛載很重要：-v /宿主機路徑:/容器路徑:ro，加上 :ro（read-only）後，容器只能讀這個目錄，不能寫。常用於把設定檔掛進容器，確保容器不會意外修改設定（比如 -v /etc/myapp.conf:/app/config.conf:ro）。這也是一個安全最佳實踐，最小化容器的寫入權限。

**--restart 重啟策略**

生產環境的容器應該設定重啟策略，讓容器意外崩潰後能自動恢復。--restart 選項有幾種值：
- no（預設）：不自動重啟
- on-failure：只在退出碼非 0 時重啟（加 :N 限制最多重試 N 次，如 --restart on-failure:3）
- always：不管退出原因都重啟，包括手動 stop 後重開機也會啟動
- unless-stopped：類似 always，但如果你手動 stop，重開機後不會自動啟動

例子：docker run -d --restart unless-stopped --name my-nginx nginx，nginx 崩潰後自動重啟，但你手動 docker stop 後，下次重開機不會自動啟動。這比 systemctl enable 更輕量，在不需要 systemd 的場景很有用。在 Kubernetes 裡，Pod 的重啟策略（restartPolicy）就是這個概念的進化版本。

**--network 網路設定**

Docker 有三種內建網路模式，了解它們對理解容器之間的通訊很重要：
bridge（預設）：容器有獨立的網路命名空間，通過虛擬 bridge（通常叫 docker0）和宿主機連接。不同 bridge 網路的容器預設無法互通。同一個自定義 bridge 網路的容器可以用容器名稱互相解析（Docker 內建 DNS）。
host：容器直接使用宿主機的網路命名空間，沒有網路隔離。容器裡的服務直接佔用宿主機的 port，效能最高，但隔離性最差。適合需要最低網路延遲的高效能場景。
none：容器沒有任何網路介面（只有 loopback），完全網路隔離。適合不需要網路的批次任務。

自定義網路：docker network create mynet 建立自定義 bridge 網路，然後 docker run --network mynet --name app1 myapp 讓容器 app1 加入這個網路。同網路的容器可以用名稱互通：app1 可以用 app2 這個 hostname 直接連到 app2 容器。這是 Docker Compose 的核心機制，也是 Kubernetes Service DNS 的前身。

**docker run 完整綜合範例**

讓我們做一個把所有重要選項都用到的綜合練習：

步驟一：建立自定義網路：docker network create webnet

步驟二：啟動一個有設定的 nginx：
docker run -d \
  --name mynginx \
  --network webnet \
  -p 8080:80 \
  -v /tmp/html:/usr/share/nginx/html \
  --memory 128m \
  --cpus 0.5 \
  --restart unless-stopped \
  nginx

步驟三：建立一個測試頁面：echo "<h1>My Docker Page</h1>" > /tmp/html/index.html

步驟四：用 curl http://localhost:8080 確認頁面，應看到「My Docker Page」。

步驟五：用 docker stats mynginx 監控資源使用。

步驟六：用 docker inspect mynginx 查看完整設定，找到 IP 位址、記憶體限制等資訊。

步驟七：清理：docker stop mynginx && docker rm mynginx && docker network rm webnet

這個練習把 -d（背景）、--name（命名）、--network（網路）、-p（port 映射）、-v（Volume）、--memory（記憶體限制）、--cpus（CPU 限制）、--restart（重啟策略）全部用到了，是真實生產環境部署一個服務的基本模式。大家跟著把每個步驟做一遍，遇到問題舉手。`,
    duration: "30"
  },

  // ========== 容器管理指令 ==========
  {
    title: "容器管理常用指令",
    subtitle: "ps / images / logs / exec / stop / rm",
    section: "容器操作",
    content: (
      <div className="space-y-3">
        {[
          {
            cmd: "docker ps",
            desc: "列出執行中的容器",
            detail: "加 -a 顯示所有（包含已停止）",
          },
          {
            cmd: "docker images",
            desc: "列出本地所有 Image",
            detail: "顯示 REPOSITORY, TAG, IMAGE ID, SIZE",
          },
          {
            cmd: "docker logs",
            desc: "查看容器輸出日誌",
            detail: "加 -f 持續追蹤（follow），加 --tail 50 只看最後 50 行",
          },
          {
            cmd: "docker exec",
            desc: "在執行中的容器內執行指令",
            detail: "docker exec -it 容器名 bash 進入互動式 shell",
          },
          {
            cmd: "docker stop",
            desc: "優雅停止容器（發 SIGTERM）",
            detail: "容器有時間做清理，再強制停止",
          },
          {
            cmd: "docker rm",
            desc: "刪除已停止的容器",
            detail: "加 -f 強制刪除執行中的容器",
          },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 bg-slate-800/50 p-3 rounded-lg items-start">
            <code className="text-green-400 font-bold w-32 flex-shrink-0 text-sm">{item.cmd}</code>
            <div>
              <p className="text-slate-200 text-sm">{item.desc}</p>
              <p className="text-slate-500 text-xs mt-1">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    notes: `有了容器跑起來，接下來你需要管理它們——查看狀態、看日誌、進入容器 debug、停止、刪除。這六個指令是日常操作的核心，幾乎每天都用到。

**docker ps：查看容器狀態**

docker ps 列出當前正在執行的容器。每一行是一個容器，欄位包含：
- CONTAINER ID：容器的唯一識別碼（短版 hash）
- IMAGE：用哪個 Image 建立的
- COMMAND：容器啟動時執行的主程序
- CREATED：建立時間
- STATUS：狀態（Up 幾分鐘、Exited、Paused 等）
- PORTS：Port 映射
- NAMES：容器名稱

加 -a（all）：docker ps -a，顯示所有容器，包含已停止的。你會看到 STATUS 欄顯示 "Exited (0) 5 minutes ago" 之類的。剛學 Docker 的人常遇到「我的容器哪去了？」——用 docker ps -a 找找，可能是停了但沒刪。

加 -q（quiet）：docker ps -q，只顯示容器 ID，方便搭配其他指令用。比如 docker stop $(docker ps -q) 停掉所有容器、docker rm $(docker ps -aq) 刪掉所有容器（注意：刪掉的容器資料就消失了）。

**docker images：管理本地 Image**

docker images 列出本地所有 Image，顯示 REPOSITORY（來源）、TAG（版本標籤）、IMAGE ID、CREATED（建立時間）、SIZE（大小）。剛才拉下來的 nginx Image 應該在這裡。注意 SIZE 是解壓後的大小，實際磁碟佔用可能因為分層共用而更小。

加 -a：顯示所有 Image，包含中間層（intermediate layer）。一般用不到，但在 debug build 問題時有用。

docker image prune：清理沒有任何容器使用的 Image（dangling image）。docker system prune 更徹底，清理所有停止的容器、沒用的 Image、沒用的 Volume 和網路。磁碟快滿的時候很有用。

**docker logs：查看容器日誌**

這是 debug 最常用的指令。docker logs 容器名稱（或 ID），輸出容器的 stdout 和 stderr。

關鍵選項：
- -f：follow，持續追蹤新日誌，類似 tail -f。看服務是否正常運行時很常用。Ctrl+C 停止追蹤，但容器繼續跑。
- --tail N：只顯示最後 N 行，避免日誌太多一次輸出幾萬行讓終端機卡住。建議養成習慣加 --tail 100 或 --tail 200。
- --since：從某個時間點開始，比如 --since 5m 看最近五分鐘的日誌，--since 2024-01-01T10:00:00 從某個時間點開始。
- -t：顯示時間戳記。

實際例子：docker logs -f --tail 50 my-nginx，追蹤 nginx 最新的 50 行日誌。每次你用瀏覽器連到 nginx，你都會看到新的 access log 出現。

**docker exec：進入容器執行指令**

這是 debug 的神器。docker exec 在一個「已經在跑的容器」裡執行額外的指令，不影響容器的主程序。

最常用的用法：docker exec -it 容器名稱 bash，進入容器內的互動式 bash shell。-i 是 interactive（保持標準輸入開著），-t 是 tty（建立一個偽終端），兩個加在一起 -it 讓你有像在本地 terminal 一樣的互動體驗。

進去容器之後，你就身在容器的世界裡，可以用 ls、cat、ps aux、netstat 等等指令看容器內部的狀態，非常適合排查問題。輸入 exit 或 Ctrl+D 離開，容器繼續跑，不受影響。

如果容器裡沒有 bash（有些最小化的 Image 連 bash 都沒裝），可以試試 sh：docker exec -it 容器名稱 sh。

也可以執行特定指令而不進入 shell：docker exec my-nginx cat /etc/nginx/nginx.conf，直接印出 nginx 設定檔內容。

**docker stop：優雅停止容器**

docker stop 容器名稱，向容器的主程序（PID 1）發送 SIGTERM 訊號，讓它有機會做清理（關閉資料庫連線、把暫存資料寫到磁碟、回應進行中的 HTTP 請求等）。Docker 預設等 10 秒，如果容器沒有在 10 秒內退出，才強制發 SIGKILL 殺掉。

可以用 --time 或 -t 調整等待時間：docker stop -t 30 my-nginx 等最多 30 秒讓它優雅退出。

對比：docker kill 直接發 SIGKILL，容器立刻強制停止，沒有清理的機會。只有在容器卡住、stop 沒效果的情況下才用 kill。

**docker rm：刪除容器**

容器停止後不會自動消失，還佔著磁碟空間（是那個可寫層）。docker rm 容器名稱刪除已停止的容器。如果容器還在跑，docker rm 會報錯——先 stop 再 rm，或用 docker rm -f 強制刪除（等同於 kill + rm）。

清理所有已停止容器：docker container prune，會問你確認，輸入 y 確認刪除。

**完整生命週期實作**

現在我們把剛才的 my-nginx 容器走一個完整的生命週期：
1. docker logs my-nginx（看看 nginx 的日誌）
2. docker exec -it my-nginx bash（進入容器，ls /etc/nginx 看設定目錄，exit 出來）
3. docker stop my-nginx（優雅停止）
4. docker ps（確認不在執行中）
5. docker ps -a（確認還在，狀態是 Exited）
6. docker rm my-nginx（刪除）
7. docker ps -a（確認完全消失）

大家跟著做，有問題舉手。

讓我們補充幾個容器管理的進階工具和技巧，這些在日常工作中非常實用。

**docker stats 深度使用**

docker stats 預設持續更新，加 --no-stream 只輸出一次快照：docker stats --no-stream，適合在腳本裡做資源監控，可以把輸出寫到日誌檔。加 --format 可以自定義輸出格式：docker stats --format "table {{.Container}}	{{.CPUPerc}}	{{.MemUsage}}" 只輸出你關心的欄位。在監控多個容器的場景，可以用這個格式把資料餵給 Prometheus 或其他監控系統。

MEM USAGE / LIMIT 欄：如果你沒有設 --memory 限制，LIMIT 那欄會顯示宿主機的全部記憶體，代表這個容器理論上可以用光所有記憶體。NET I/O 和 BLOCK I/O 分別是網路和磁碟的收發量，自容器啟動以來的累計值。PIDS 是容器內的進程數，如果一個程序不斷 fork 子進程（fork bomb），PIDS 數字會快速增長，這是一個異常的信號。

**docker inspect 進階用法**

docker inspect 的輸出是一個大型 JSON，包含幾乎所有你想要的資訊。用 --format 加 Go template 語法可以精確提取特定欄位：

docker inspect --format '{{.NetworkSettings.IPAddress}}' 容器名，取出容器的 IP。
docker inspect --format '{{.State.StartedAt}}' 容器名，取出容器啟動時間。
docker inspect --format '{{range .Mounts}}{{.Source}} -> {{.Destination}}{{"
"}}{{end}}' 容器名，列出所有 Volume 掛載點。
docker inspect --format '{{.HostConfig.Memory}}' 容器名，取出記憶體限制（單位 bytes，0 代表沒有限制）。

把 docker inspect 和 jq（JSON 處理工具）結合更強大：docker inspect 容器名 | jq '.[0].NetworkSettings.Networks'，用 jq 解析 JSON，取出網路設定。jq 需要 sudo apt install jq 安裝，一旦裝了你會發現它在各種場景都很有用。

**docker cp 實用場景**

docker cp 的常見用途：

從容器提取日誌：docker cp myapp:/var/log/app.log ./app.log，把容器裡的日誌複製到宿主機，方便用 grep 分析。

向容器注入設定檔（緊急修復）：如果容器有個設定檔語法錯誤導致服務異常，而你來不及重新 build Image，可以先 docker cp 一個修復後的設定檔進去，然後 docker exec 重新載入設定。這是緊急情況下的 workaround，正確做法還是修 Dockerfile 重新 build。

在容器間傳遞檔案（搭配 docker create）：docker create 不啟動容器，只建立容器實例，讓你可以用 docker cp 從 Image 裡提取檔案：docker create --name temp nginx && docker cp temp:/etc/nginx/nginx.conf ./ && docker rm temp，只是為了拿到 nginx.conf 的預設內容，不需要真的啟動 nginx。

**docker commit 和 Dockerfile 的取捨**

docker commit 把容器當前狀態存成 Image，快速但有問題：沒有記錄做了什麼修改，Image 的 Layer 歷史不清晰，別人拿到這個 Image 不知道怎麼重現，維護性很差。

Dockerfile 把每個步驟明確寫下來，任何人看 Dockerfile 就知道這個 Image 是怎麼建出來的，版本控制友好，CI/CD 自動化友好。這是正確做法。

實際工作中，commit 只用於「快速實驗，需要保存現場」，不用於任何會推到 Registry 或正式部署的 Image。下一堂課我們會學 Dockerfile，你就能從 commit 升級到正確的 Image 建置流程。

**清理策略的最佳實踐**

個人開發機：docker system prune -a 定期清理，包含停止的容器、所有沒被使用的 Image（包括已 tag 的）、網路、Volume。謹慎：這會刪掉所有沒有容器在用的 Image，包括你自己 build 的，所以如果你有想保留的 Image，要先確認有容器在用它或有另外備份到 Registry。

CI 機器：每次 pipeline 跑完後自動執行 docker system prune -f（-f 跳過確認），防止磁碟被 CI 產出的 Image 堆滿。

生產機器：謹慎操作，不要輕易清理 Image，因為你可能需要它們來快速回退。可以只 docker container prune 清理停止的容器，Image 另外管理。`,
    duration: "25"
  },

  // ========== Volume：Bind Mount vs Named Volume ==========
  {
    title: "Volume 基礎",
    subtitle: "Bind Mount vs Named Volume",
    section: "儲存管理",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-orange-900/30 border border-orange-700 p-4 rounded-lg">
            <p className="text-orange-400 font-bold text-lg mb-2">📁 Bind Mount</p>
            <p className="text-slate-300 text-sm mb-3">直接掛載宿主機的目錄或檔案到容器</p>
            <pre className="text-green-400 text-xs bg-slate-900/50 p-2 rounded">{`docker run -v /host/path:/container/path nginx`}</pre>
            <ul className="mt-3 space-y-1 text-slate-400 text-xs">
              <li>• 宿主機路徑必須存在</li>
              <li>• 適合開發時掛載原始碼</li>
              <li>• 可以直接在宿主機編輯</li>
            </ul>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
            <p className="text-blue-400 font-bold text-lg mb-2">🗃️ Named Volume</p>
            <p className="text-slate-300 text-sm mb-3">由 Docker 管理的具名儲存空間</p>
            <pre className="text-green-400 text-xs bg-slate-900/50 p-2 rounded">{`docker volume create mydata
docker run -v mydata:/data nginx`}</pre>
            <ul className="mt-3 space-y-1 text-slate-400 text-xs">
              <li>• Docker 管理存放位置</li>
              <li>• 適合正式環境資料持久化</li>
              <li>• 生命週期與容器獨立</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-slate-400 text-sm mb-2"># Volume 管理指令</p>
          <pre className="text-green-400 text-sm">{`docker volume ls            # 列出所有 Volume
docker volume inspect mydata # 查看詳細資訊
docker volume rm mydata     # 刪除 Volume`}</pre>
        </div>
      </div>
    ),
    notes: `現在來學 Volume，這是 Docker 資料持久化的核心概念。要先理解一個重要事實：容器的儲存預設是暫時的。

**為什麼需要 Volume？**

回想一下容器的架構：Image 是唯讀的，容器在 Image 上加了一個薄薄的可寫層。你在容器裡寫的任何東西——日誌、上傳的檔案、資料庫的資料——都在這個可寫層。一旦你 docker rm 刪掉容器，這個可寫層消失，資料也消失了。

場景一：你在容器裡跑了一個 MySQL 資料庫，存了三個月的訂單資料。有一天你要升級資料庫版本，docker stop 舊容器、docker rm、docker run 新容器，三個月的資料消失。

場景二：你在容器裡跑了一個應用程式，它把使用者上傳的圖片存在容器的 /uploads 目錄。每次重啟容器，上傳的圖片都不見了。

這就是為什麼需要 Volume——把容器需要持久化的資料「掛出來」存在容器外面，容器的可寫層只存暫時資料。

Volume 有兩種主要類型，用途不同：

**Bind Mount（綁定掛載）**

你指定宿主機上一個具體的絕對路徑，把它掛進容器的某個路徑。容器和宿主機共用這塊儲存空間，雙向可見、雙向可讀寫。

語法：-v /宿主機絕對路徑:/容器絕對路徑

例子：
- docker run -v /home/user/myapp:/app myapp 把宿主機的 /home/user/myapp 掛到容器的 /app
- docker run -v /home/user/nginx.conf:/etc/nginx/nginx.conf nginx 只掛一個設定檔進去

Bind Mount 最適合「開發環境」的工作流程。你在宿主機用 VS Code 修改程式碼（因為宿主機有你的 IDE、Git、所有開發工具），容器裡的應用程式即時看到修改，不需要重新 build Image，開發迭代速度很快。

Bind Mount 的缺點：路徑是宿主機的絕對路徑，換一台機器可能不一樣。如果你的 Dockerfile 或 docker-compose.yml 用了 Bind Mount，在不同機器上可能需要調整路徑。而且宿主機的路徑必須存在，不然 Docker 會報錯。

**Named Volume（具名卷）**

Named Volume 是由 Docker 管理的儲存空間。你給它一個名字，Docker 決定實際存在哪裡（在 Linux 上通常是 /var/lib/docker/volumes/卷名/_data）。

語法：-v 卷名:/容器絕對路徑

先建立：docker volume create mydata（也可以不事先建立，docker run 時 Docker 會自動建立）
使用：docker run -v mydata:/var/lib/mysql mysql

Named Volume 的最大優點是：生命週期和容器完全獨立。你可以刪掉容器，Volume 還在；你建立一個新容器，掛上同一個 Volume，資料繼續存在。這就是 MySQL 這類資料庫容器的標準做法。

Named Volume 適合「正式環境」的資料持久化，因為路徑不寫死（不依賴宿主機的目錄結構），跨機器的可攜性更好，而且 Docker 可以管理 Volume 的備份、清理等。

**兩者的實際選擇原則**

開發環境：Bind Mount，掛原始碼，邊改邊看效果。
正式環境：Named Volume，資料庫資料、使用者上傳的檔案、日誌等需要持久化的資料。

另外還有第三種：tmpfs（記憶體掛載），把資料存在記憶體而不是磁碟，容器停止後消失，適合快取或不需要持久化的暫時資料。今天不深入講，知道有這個選項即可。

**Volume 管理指令**

docker volume ls：列出所有 Named Volume，顯示 DRIVER（驅動，通常是 local）和 NAME。
docker volume inspect 卷名：顯示詳細資訊，包括實際的 Mountpoint（在宿主機的路徑），可以直接到那個路徑查看容器裡的資料。
docker volume rm 卷名：刪除 Volume（如果還有容器在使用，會報錯，要先停止並刪除容器）。
docker volume prune：刪除所有沒有容器使用的 Volume（注意：這個操作不可逆！）。

**實作練習**

練習一（Bind Mount）：
建立一個宿主機目錄：mkdir -p /tmp/nginx-html
在裡面建立一個 HTML 檔：echo "<h1>Hello from Bind Mount!</h1>" > /tmp/nginx-html/index.html
啟動 nginx 並掛載：docker run -d -p 8080:80 --name nginx-bind -v /tmp/nginx-html:/usr/share/nginx/html nginx
打開瀏覽器看 http://localhost:8080，應該看到你寫的內容。
在宿主機修改那個 HTML 檔（不需要重啟容器），重新整理瀏覽器，看到變化。

練習二（Named Volume）：
docker volume create testdata
docker run --rm -v testdata:/data busybox sh -c "echo 'hello persistent!' > /data/test.txt"
docker run --rm -v testdata:/data busybox cat /data/test.txt
第一個容器寫入，第二個容器讀取，確認資料持久化了。

讓我補充幾個 Volume 的進階概念和實際操作，這些在正式環境非常重要。

**Volume 驅動（Volume Driver）**

Named Volume 預設使用 local 驅動，把資料存在宿主機的本地磁碟。但 Docker 支援插件式的 Volume 驅動，可以把資料存到網路儲存（NFS）、雲端儲存（AWS EBS、GCP Persistent Disk、Azure Disk）、分散式儲存（Ceph、GlusterFS）等。

在多台宿主機的場景（比如 Docker Swarm 或 Kubernetes）中，如果容器可能被調度到任何一台機器，Local Volume 就不夠用了——容器跑到機器 A，資料在機器 A 的本地磁碟；如果容器被移到機器 B，機器 B 找不到那份資料。這時候需要網路儲存，讓任何機器都能存取同一份資料。Kubernetes 的 PersistentVolume（PV）和 PersistentVolumeClaim（PVC）就是在解決這個問題，是 Docker Volume 的進化版本。

**docker volume inspect 深度查看**

docker volume inspect myvolume，輸出 JSON 格式的詳細資訊：
- Name：Volume 名稱
- Driver：驅動（local）
- Mountpoint：實際在宿主機上的路徑（/var/lib/docker/volumes/myvolume/_data）
- Labels：自定義標籤
- Options：驅動選項

知道 Mountpoint 之後，你可以直接到宿主機的那個路徑查看容器裡的資料，不需要進入容器：ls /var/lib/docker/volumes/myvolume/_data。這在 debug 時很有用，特別是容器跑不起來，你想看裡面的資料是否正確。

**Volume 備份和還原**

Volume 的資料備份很重要，特別是資料庫的 Volume。標準的備份方式是用一個臨時容器讀取 Volume 的內容，然後打包成 tar 檔：

備份：docker run --rm -v myvolume:/data -v $(pwd):/backup busybox tar czf /backup/myvolume-backup.tar.gz -C /data .
還原：docker run --rm -v myvolume:/data -v $(pwd):/backup busybox tar xzf /backup/myvolume-backup.tar.gz -C /data

這個模式用一個 busybox 容器（極輕量的 Linux）作為媒介，同時掛載資料 Volume 和宿主機的備份目錄，用 tar 打包資料。這是不依賴特定資料庫工具的通用備份方法。當然，對於 MySQL 或 PostgreSQL，更好的做法是用 mysqldump 或 pg_dump 做邏輯備份，因為直接備份資料庫的二進制文件可能會有不一致的風險（如果資料庫正在寫入）。

**tmpfs：記憶體暫時掛載**

除了 Bind Mount 和 Named Volume，還有第三種：--tmpfs /容器路徑，把資料存在記憶體而不是磁碟。容器停止後記憶體釋放，資料消失。適合存放不需要持久化的暫時資料（如快取、會話 token 等），而且讀寫速度比磁碟快很多（記憶體速度）。

例子：docker run --rm --tmpfs /tmp myapp，讓容器的 /tmp 使用記憶體，速度快但不持久。在高效能場景或安全敏感場景（不想讓資料落地到磁碟）可以考慮。

**在 Kubernetes 裡的對應**

這裡提一下學完 Docker Volume 之後，在 Kubernetes 裡對應的概念，讓你對後面的課程有預期：

Docker Bind Mount → K8s 的 hostPath Volume（把節點的某個目錄掛進 Pod，不推薦用在正式環境，因為和特定節點綁定）
Docker Named Volume → K8s 的 PersistentVolumeClaim（PVC）：你聲明「我需要 10GB 的儲存」，Kubernetes 從可用的 PersistentVolume 池子裡找一個合適的分配給你，容器掛載這個 PVC
Docker tmpfs → K8s 的 emptyDir 加 medium: Memory

在 Kubernetes 裡，Volume 和 Pod 的管理複雜度比 Docker 高很多，因為要考慮多個副本、跨節點調度、備份等問題，但核心概念和 Docker Volume 是相通的，今天學好這個基礎，K8s 的 Volume 就會順很多。

**Volume 操作完整練習**

現在來做一個 Volume 的完整生命週期練習：

一、建立具名 Volume：docker volume create webdata

二、用容器把一些資料寫進去：docker run --rm -v webdata:/data busybox sh -c "echo 'Hello Volume' > /data/hello.txt && echo 'Test Data' > /data/test.txt"

三、用另一個容器讀取（驗證持久化）：docker run --rm -v webdata:/data busybox ls /data 應該看到 hello.txt 和 test.txt

四、用 Bind Mount 方式把它掛到 nginx：mkdir -p /tmp/site && docker run --rm -v webdata:/webdata busybox cp /webdata/hello.txt /tmp/site/index.html（把 Volume 的資料複製出來），然後 docker run -d -p 8080:80 -v /tmp/site:/usr/share/nginx/html --name vol-test nginx，打開瀏覽器看 http://localhost:8080。

五、清理：docker stop vol-test && docker rm vol-test && docker volume rm webdata

這個練習走過了 Named Volume 建立、資料寫入、跨容器資料共用、Volume 刪除的完整流程。`,
    duration: "25"
  },

  // ========== 環境變數注入 ==========
  {
    title: "環境變數注入",
    subtitle: "-e 與 --env-file",
    section: "設定管理",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># 方法一：-e 直接注入單一變數</p>
          <pre className="text-green-400 text-sm">{`docker run -e DB_HOST=localhost \\
           -e DB_PORT=5432 \\
           -e DB_NAME=mydb \\
           myapp:latest`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># 方法二：--env-file 批次注入</p>
          <pre className="text-green-400 text-sm">{`# 先建立 .env 檔案
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydb
APP_SECRET=my-secret-key

# 然後注入
docker run --env-file .env myapp:latest`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># 在容器內查看環境變數</p>
          <pre className="text-green-400 text-sm">{`docker exec -it myapp env | grep DB`}</pre>
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg">
          <p className="text-yellow-400 text-sm font-semibold">⚠️ 安全提醒</p>
          <p className="text-yellow-200 text-sm">.env 檔含有敏感資訊，不要 commit 到 Git！加到 .gitignore</p>
        </div>
      </div>
    ),
    notes: `環境變數注入是 Docker 設定管理最重要的模式，幾乎所有設計良好的容器化應用都靠環境變數接收設定。讓我解釋為什麼這麼設計，以及怎麼正確使用。

**為什麼應用程式要用環境變數接收設定？**

想像你有一個應用程式，它需要連接資料庫。最糟糕的做法是把連線字串寫死在程式碼裡：db_host = "192.168.1.100"。這樣做的問題：開發環境、測試環境、生產環境的資料庫 IP 都不一樣，你要維護三份不同的程式碼，或是每次部署前手動改程式碼。

稍微好一點的做法：把設定寫在設定檔裡，但設定檔也要隨著環境不同而不同，你還是需要管理多份設定檔，而且設定檔容易被 commit 到 Git 裡（包含密碼！）。

最好的做法：12-Factor App 方法論（一套雲端原生應用程式的設計準則）建議：設定從環境變數讀取。程式碼不改，不同環境只注入不同的環境變數值，就能改變行為。更重要的是，程式碼裡沒有任何密碼，安全多了。

這個模式在容器化之後變得更自然：Docker 提供了直接注入環境變數的機制，讓「不同環境用同一個 Image、不同環境變數」這件事非常方便。

**-e 選項：直接注入**

格式：-e 變數名=值。多個變數就加多個 -e：

docker run -e DB_HOST=db.example.com -e DB_PASSWORD=secret123 myapp

這種方式直觀清楚，適合變數數量少（三到五個）的情況。缺點是指令很長，而且密碼直接出現在指令列上，會被 shell history 記錄，有安全疑慮。

進階用法：-e 後面可以不加值，只給變數名，Docker 會從你的宿主機環境繼承同名的環境變數值。比如你的 shell 有 export SECRET_KEY=xxx，然後 docker run -e SECRET_KEY myapp，容器就會繼承這個值，不需要在指令裡明文寫出來。

**--env-file 選項：從檔案批次注入**

建立一個純文字檔（通常命名為 .env），格式是每行一個 KEY=VALUE，然後用 --env-file .env 注入所有變數。

.env 檔案範例：
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp_production
DB_USER=app
DB_PASSWORD=supersecretpassword
REDIS_URL=redis://localhost:6379
APP_SECRET_KEY=randomsecretkey123
LOG_LEVEL=info
DEBUG=false

然後：docker run --env-file .env myapp:latest

好處：指令保持簡短乾淨，環境變數集中管理，不同環境可以維護不同的 .env 檔（.env.development、.env.staging、.env.production），切換環境就換 --env-file 指向不同的檔案。

**安全最佳實踐**

.env 檔案裡可能包含資料庫密碼、API Key、JWT Secret 等敏感資訊，有幾個重要的安全規則：

一、.env 絕對不能 commit 到 Git。在 .gitignore 加上 .env、.env.*（或者只排除 .env.production，保留 .env.example 作為文件）。

二、可以維護一份 .env.example 或 .env.template，裡面列出所有需要的環境變數名稱，但值都用 placeholder（比如 DB_PASSWORD=your_password_here）。這個樣板可以 commit 到 Git，新人 clone 後複製一份改名為 .env，填入真實的值。

三、生產環境的敏感設定，不要用 .env 檔案，而是用 Kubernetes Secret（加密存在 etcd）或 AWS Secrets Manager、HashiCorp Vault 等專業的密鑰管理服務。

四、docker inspect 容器名稱 可以看到容器的完整設定，包括環境變數的明文值。所以連到 Docker 主機的人，原則上都能看到容器的環境變數。要注意誰有 Docker 存取權限。

**在容器內驗證環境變數**

docker exec 容器名 env，列出容器所有環境變數。加 | grep 關鍵字 過濾出特定的。

用 docker exec -it 容器名 bash 進去，然後 echo $DB_HOST，可以確認特定變數的值。

**實作練習**

建立一個 .env 檔：
echo "APP_ENV=development" > .env
echo "DEBUG=true" >> .env
echo "PORT=3000" >> .env

然後執行：docker run --rm --env-file .env alpine env

你應該看到 alpine 容器把所有系統環境變數都印出來，其中包含你定義的 APP_ENV=development、DEBUG=true、PORT=3000。確認環境變數有被正確注入。

讓我補充幾個環境變數相關的進階概念，這些在正式環境中非常重要。

**環境變數的優先級**

當你用多種方式設定同名環境變數時，有明確的優先順序：Dockerfile 的 ENV 指令設定的是 Image 的預設值，優先級最低；--env-file 指定的值覆蓋 Image 的預設值；-e 明確指定的值優先級最高，覆蓋 --env-file 的值。這個優先級讓你可以在 Image 層設合理的預設值，部署時用 --env-file 覆蓋環境特定的設定，緊急時再用 -e 覆蓋特定值。

**不該用環境變數傳遞的東西**

環境變數有一個安全問題：所有有 docker inspect 存取權限的人都能看到環境變數的明文值，而且子程序也能繼承環境變數，如果你的容器跑了多個程序，所有子程序都能讀到這些值。

因此，非常敏感的密鑰（資料庫 root 密碼、API 私鑰、TLS 私鑰）在正式環境不應該用環境變數傳遞，而應該用專門的密鑰管理系統，比如 HashiCorp Vault、AWS Secrets Manager，或 Kubernetes Secret（雖然 K8s Secret 預設只是 Base64 編碼，不是真正加密，但至少可以用 RBAC 控制誰能存取）。

**docker secret（Docker Swarm 功能）**

Docker Swarm 模式有 docker secret，把敏感資料加密存在 Swarm 的分散式 KV 儲存裡，只有需要的服務才能存取，而且在容器裡是以檔案的形式掛進 /run/secrets/，而不是環境變數，應用程式讀檔而不是讀環境變數，避免了子程序繼承的問題。雖然我們主要學 Kubernetes，但這個概念和 K8s Secret 的設計理念是相通的。

**環境變數和設定管理的最佳實踐**

在雲端原生應用的設計中，有一套被廣泛接受的「十二因素應用（Twelve-Factor App）」原則，其中第三因素就是「設定：把設定儲存在環境中（環境變數）」。這個原則的核心思想是：設定是一切在部署間會改變的東西（資料庫位址、外部服務的認證、每個部署特有的值等），這些設定不應該寫在程式碼裡，應該從環境（環境變數）讀取，讓同一份程式碼可以部署到任何環境，只要改變環境變數就能改變行為。

遵循這個原則的程式碼，配合 Docker 的 -e 和 --env-file，就能實現：同一個 Image，在開發環境連本地資料庫，在測試環境連測試資料庫，在生產環境連生產資料庫，只需要改注入的環境變數，程式碼完全不用改。這是現代雲端應用開發的基礎設計模式。

**動手整合練習**

現在來做一個整合環境變數的練習。很多應用程式（包括大部分的 Docker Hub 官方 Image）都接受環境變數作為設定。以 MySQL 官方 Image 為例（課程機已有）：

docker run -d \
  --name mydb \
  -e MYSQL_ROOT_PASSWORD=myrootpass \
  -e MYSQL_DATABASE=myapp \
  -e MYSQL_USER=appuser \
  -e MYSQL_PASSWORD=apppass \
  -p 3306:3306 \
  mysql:8.0

這五個環境變數，是 MySQL 官方 Image 的設定介面，Image 啟動時讀取這些變數來初始化資料庫。不需要改任何設定檔，純靠環境變數就完成了資料庫的初始化設定。執行後用 docker logs mydb -f 追蹤初始化過程，看到「ready for connections」就代表資料庫啟動完成。然後用 docker exec -it mydb mysql -u root -pmyrootpass -e "SHOW DATABASES;" 確認資料庫已經建立。最後 docker stop mydb && docker rm mydb 清理。`,
    duration: "20"
  },

  // ========== 資源限制 ==========
  {
    title: "資源限制",
    subtitle: "--memory, --cpus",
    section: "資源管理",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># 記憶體限制</p>
          <pre className="text-green-400 text-sm">{`docker run --memory 512m nginx    # 最多 512 MB
docker run --memory 1g nginx      # 最多 1 GB
docker run -m 256m nginx          # -m 是縮寫`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># CPU 限制</p>
          <pre className="text-green-400 text-sm">{`docker run --cpus 0.5 nginx   # 最多使用 0.5 個 CPU
docker run --cpus 2 nginx     # 最多使用 2 個 CPU`}</pre>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-slate-400 mb-2 text-sm"># 組合使用 + 查看</p>
          <pre className="text-green-400 text-sm">{`docker run -d -m 256m --cpus 0.5 --name limited nginx
docker stats limited  # 即時查看資源用量`}</pre>
        </div>
        <div className="bg-blue-900/30 border border-blue-700 p-4 rounded-lg">
          <p className="text-blue-400 font-semibold text-sm">💡 為什麼要設資源限制？</p>
          <p className="text-slate-300 text-sm">防止單一容器吃掉所有資源，影響同一主機上的其他容器或服務</p>
        </div>
      </div>
    ),
    notes: `資源限制是正式環境部署容器時不可缺少的設定，但很多初學者因為覺得「我的容器不會佔太多資源」而跳過。讓我說一個真實場景，說明為什麼這件事很重要。

**為什麼要設資源限制？**

場景：你的伺服器上跑了五個容器，其中一個是你們自己寫的 API server。某個週五下午，PM 要求做一個報表功能，工程師快速寫了一個不太優化的查詢，加班上線了。週六早上，有個使用者觸發了那個報表，查詢非常慢，API server 不斷嘗試、不斷 timeout 重試，記憶體開始洩漏，越吃越多。三十分鐘後，整台伺服器的記憶體被吃完，作業系統開始瘋狂 swap，CPU 飆到 100%，所有五個容器都慢成沒反應，包括完全不相關的其他服務也死了。

如果有設記憶體限制，這個容器在記憶體達到上限後會被 OOM Kill，只有這一個容器崩潰，其他容器繼續正常運作。損失範圍被控制了。

這就是「防禦性設計」——不是因為你確定會出問題，而是一旦出問題時有安全網。

**記憶體限制：--memory 或 -m**

--memory 設定容器的記憶體使用上限。單位：b（byte）、k（KB）、m（MB）、g（GB）。

docker run -m 512m nginx，nginx 最多只能使用 512 MB 記憶體。

當容器嘗試使用超過上限的記憶體時，Linux Kernel 的 OOM Killer（Out Of Memory Killer）會介入，殺掉容器內的進程。你會在 docker ps 看到容器退出，docker inspect 容器名 會看到 OOMKilled: true，Exit Code 是 137（128 + SIGKILL 的訊號 9）。這個 Exit Code 137 是排查記憶體問題的重要線索——容器不是自己退出的，是被 Kernel 殺的。

還有 --memory-swap 選項，設定記憶體 + swap 的總上限。如果 --memory-swap 等於 --memory，代表不允許 swap（只用 RAM）。不設的話預設允許用 2 倍 --memory 的 swap。

**CPU 限制：--cpus**

--cpus 設定容器最多可以使用的 CPU 核心數（可以是小數）。

docker run --cpus 0.5 nginx，nginx 最多使用半個核（50% 的一個 CPU 核心）。
docker run --cpus 2 nginx，最多使用兩個核。

注意：這不是把 CPU 核心「分配」給容器，而是 CPU 時間的節流（throttling）。CPU 是可以被超額使用的資源——如果其他容器閒置，這個容器可以暫時用更多；但長期平均下來，它不會超過限制。記憶體是不可壓縮資源（超過就 OOM），CPU 是可壓縮資源（超過就慢，但不會殺進程）。

還有 --cpu-shares 選項，設定相對權重（預設 1024），決定多個容器競爭 CPU 時各自能分到多少。--cpus 是絕對上限，--cpu-shares 是相對優先級，兩者可以同時使用。

**docker stats：即時監控**

docker stats 顯示所有容器的即時資源用量，包含：
- CONTAINER：容器名稱/ID
- CPU %：CPU 使用率
- MEM USAGE / LIMIT：記憶體使用量 / 上限
- MEM %：記憶體使用率
- NET I/O：網路收發量
- BLOCK I/O：磁碟讀寫量
- PIDS：容器內的進程數

docker stats 容器名，只看特定容器。Ctrl+C 停止。加 --no-stream 只輸出一次快照，不持續更新（適合在腳本裡用）。

**搭配 docker inspect 確認設定**

docker inspect 容器名，輸出容器的完整 JSON 設定。用 grep MemoryLimit 或 grep NanoCpus 找到資源限制的設定值。NanoCpus 是以奈核為單位，500000000 奈核等於 0.5 核。看到這些值確認限制真的生效了。

**Kubernetes 的連結**

在 Kubernetes 裡，每個 Pod/Container 有 requests（請求量，調度用）和 limits（上限，運行時用）兩個設定，分別對應記憶體和 CPU。Docker 的 --memory 和 --cpus 就是 K8s limits 的前身。今天理解了這個概念，Kubernetes 的資源設定會容易很多。

**實作練習**

執行：docker run -d -m 256m --cpus 0.5 --name limited nginx
然後：docker stats limited
觀察 MEM USAGE / LIMIT 欄，應該顯示 256MiB 的上限。
再用：docker inspect limited | grep -E "Memory|NanoCpus"
確認設定值正確。最後：docker stop limited && docker rm limited 清理。`,
    duration: "15"
  },

  // ========== 課程總結 ==========
  {
    title: "今日總結",
    section: "回顧",
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          {[
            { icon: "✅", text: "理解環境不一致問題，知道 Docker 為何而生" },
            { icon: "✅", text: "能說明容器和 VM 的架構差異與效能比較" },
            { icon: "✅", text: "了解 Docker 五大組件：Daemon、Client、Registry、Image、Container" },
            { icon: "✅", text: "能執行 docker run 並搭配 -d、-p、--name、-e、-v 選項" },
            { icon: "✅", text: "能用 ps / logs / exec / stop / rm 管理容器完整生命週期" },
            { icon: "✅", text: "理解 Bind Mount 和 Named Volume 的差異和使用場景" },
            { icon: "✅", text: "能用 -e 和 --env-file 注入環境變數" },
            { icon: "✅", text: "能設定 --memory 和 --cpus 資源限制並用 docker stats 監控" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
              <span className="text-xl">{item.icon}</span>
              <p className="text-slate-200 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-blue-900/30 border border-blue-500/50 p-4 rounded-lg">
          <p className="text-blue-400 font-semibold">🎯 下一步</p>
          <p className="text-slate-300 text-sm">第三堂：Dockerfile 與 Image 建置、docker-compose、進入 Kubernetes</p>
        </div>
      </div>
    ),
    notes: `讓我們來回顧今天下午學到的東西。這份清單就是你現在已經具備的能力，請認真看一遍，對應到今天做過的操作。

**你學到了什麼，為什麼重要？**

首先，「環境不一致」這個問題，你現在理解了它的根源（不同機器的軟體版本不同）、它有多麻煩（跨環境部署的噩夢）、以及 Docker 的解法（把環境打包成 Image）。這個理解不是只在 Docker 範圍內有用，它讓你理解了整個現代 DevOps 的思路：基礎設施即程式碼（IaC）、不可變部署、環境一致性。

容器和 VM 的差異，你現在知道容器是 OS 層虛擬化（共享 Kernel），VM 是硬體層虛擬化（獨立 OS）。這個差異決定了容器輕量快速的特性，也決定了它的限制（需要相同 Kernel）。在架構設計時，你可以做出更有依據的選擇。

Docker 架構的五個組件，你現在知道 docker run 這個指令背後是 Client 把請求交給 Daemon，Daemon 從 Registry 拉 Image，根據 Image 建立 Container。出問題的時候，你知道從哪個環節開始找。

docker run 的選項，你親手操作了 -d（背景執行）、-p（port 映射）、--name（命名）、-e（環境變數）、-v（Volume）、--rm（自動清理）。這些是你日後工作中每天都會用到的指令組合。

容器管理的六個指令（ps、images、logs、exec、stop、rm），你走了一個容器從建立到刪除的完整生命週期。特別是 docker exec -it 進入容器 debug 這個技能，在實際工作中價值很高。

Volume 的兩種類型，你理解了為什麼預設的容器儲存是暫時的（可寫層隨容器消失），以及 Bind Mount（開發用，掛本地路徑）和 Named Volume（正式環境，Docker 管理）各自適合的場景。

環境變數注入和安全考量，你知道為什麼用環境變數而不是設定檔（12-Factor App 原則），以及 .env 不要 commit 到 Git 這個重要安全實踐。

資源限制，你理解了為什麼要設（防止一個容器拖垮整台機器），--memory 的 OOM Kill 機制，--cpus 的節流機制，以及 docker stats 監控。

**今天學的和 Kubernetes 的關係**

今天的所有概念在 Kubernetes 裡都有直接對應：
- Docker Image → K8s 的 Pod 使用的 Container Image
- docker run -e → K8s 的 ConfigMap（普通設定）和 Secret（敏感設定）
- Docker Volume → K8s 的 PersistentVolume 和 PersistentVolumeClaim
- --memory / --cpus → K8s 的 resources.limits 和 resources.requests
- docker ps → kubectl get pods
- docker logs → kubectl logs
- docker exec -it → kubectl exec -it

Kubernetes 在 Docker 的基礎上加了「叢集管理」——多台機器、自動調度、服務發現、負載均衡、自動修復。但底層的容器和 Image 概念是一樣的。今天打好了這個基礎，下一堂課進入 K8s 會輕鬆很多。

**課後練習建議**

回去之後，試著用 Docker 跑一個你實際會用到的服務——比如 docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret mysql，或是 docker run -d -p 6379:6379 redis。然後用 docker exec 進去操作，用 docker logs 看日誌，加上 Volume 讓資料持久化。把今天課上的技能應用在真實的服務上，是最快的鞏固方式。

**給你的課後挑戰**

如果你想在回家後繼續加強，這裡有幾個難度遞增的挑戰：

挑戰一（入門）：用 Docker 跑一個 PostgreSQL 資料庫，加上 Named Volume 讓資料持久化，加上 -e 注入資料庫名稱和密碼，然後用 docker exec 進去用 psql 建立一個資料表，重啟容器確認資料還在。

挑戰二（進階）：同時跑兩個 nginx 容器，一個用 Bind Mount 掛本地的 HTML 目錄，一個用 Named Volume，分別映射到不同的 Port（8080 和 8081），確認兩個都能正常訪問。理解兩者在開發和正式環境使用場景的差別。

挑戰三（探索）：拉一個你工作中用到的服務的 Docker Image（比如 Redis、MongoDB、Elasticsearch），閱讀 Docker Hub 上它的說明文件，找出它需要哪些環境變數、預設暴露哪個 Port、推薦的 Volume 掛載路徑是什麼，然後把它跑起來。

挑戰四（綜合）：模擬一個簡單的兩層架構：一個後端 API（可以用 Python Flask 或 Node.js Express，任何你熟悉的）和一個 MySQL 資料庫，都跑在容器裡。讓 API 容器連到 DB 容器（提示：要讓兩個容器能互通，需要把它們放在同一個 Docker 網路裡，搭配 --network 選項和 docker network create）。這個練習會讓你遇到很多實際問題，解決這些問題的過程就是最好的學習。

**下一堂課預告**

下一堂課我們要學：Dockerfile（怎麼建自己的 Image）、docker-compose（用 YAML 定義多容器應用）、以及正式踏入 Kubernetes 的大門。這三個主題都建立在今天的基礎上——你今天越熟練，下一堂課就越順。加油！`,
    duration: "10"
  },

  // ========== Q&A ==========
  {
    title: "Q & A",
    subtitle: "有任何問題嗎？",
    content: (
      <div className="text-center space-y-8">
        <p className="text-6xl">🙋‍♀️ 🙋 🙋‍♂️</p>
        <p className="text-2xl text-slate-300">
          課程 Q&A 時間，有任何問題都可以提出來
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-left">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-blue-400 font-semibold mb-2">今天沒跟上的概念？</p>
            <p className="text-slate-400 text-sm">現在提出來，我們一起複習一遍</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-blue-400 font-semibold mb-2">回家練習遇到問題？</p>
            <p className="text-slate-400 text-sm">課程 Line 群組，助教 24h 內回覆</p>
          </div>
        </div>
      </div>
    ),
    notes: `好，現在是今天最後的開放問答時間。不管是今天任何主題的疑問、還是對整個課程方向的問題，都歡迎提出來。

讓我先預答幾個常見問題，如果你腦子裡有這些疑問，現在就解答：

**問：docker stop 和 docker kill 有什麼差別？**
答：stop 先發 SIGTERM（優雅結束訊號）給容器的主程序，讓它有機會做清理——關閉資料庫連線、把暫存資料寫到磁碟、回應進行中的 HTTP 請求等。Docker 等 10 秒（可用 -t 調整），如果容器沒有在這段時間內退出，才發 SIGKILL 強制殺掉。kill 跳過等待，直接發 SIGKILL，立刻強制結束，應用程式沒有任何清理機會。一般用 stop，只有容器卡住完全沒反應的時候才用 kill。

**問：為什麼容器跑起來又馬上停掉了（Exit immediately）？**
答：容器的生命週期和它的 PID 1（主程序）完全綁定。主程序一退出，容器就停止。最常見原因有兩個：一是應用程式執行完就退出了（比如 docker run alpine echo hello，echo 執行完輸出後就結束，容器跟著停）；二是應用程式啟動就報錯退出了。排查方法：docker logs 容器名，看看有沒有錯誤輸出。用 docker ps -a 看容器的 Exit Code——0 代表正常退出，非 0 代表出錯，137 代表被 OOM Kill。

**問：容器之間怎麼互相通訊？**
答：這是一個很好的問題！Docker 有網路概念。預設情況下，同一個 docker run 不帶網路設定，容器用 bridge 網路，同一個 bridge 網路的容器可以用容器名稱當 hostname 互通（需要用 --network 明確指定同一網路）。docker-compose 自動幫同一個 compose 的容器建立共用網路，彼此可以用服務名稱互通。Kubernetes 則有 Service 概念，讓一組 Pod 有一個穩定的 DNS 名稱和 ClusterIP。這些下一堂課 docker-compose 和 K8s 的部分都會詳細說明。

**問：Docker Hub 上怎麼找適合的 Image？**
答：到 hub.docker.com 搜尋。重點看兩個：一是有沒有「Official Image」的標籤（Docker 官方維護，品質比較有保障）；二是 Pull 數量和星星數（社群認可度）。看 Image 的文件，了解它需要哪些環境變數、暴露哪些 port、有哪些 tag 可選（通常有 latest、穩定版號、alpine 輕量版等）。alpine 版本通常比較小（基於 Alpine Linux，只有 5 MB），是不需要太多工具的生產環境首選。

**問：Image 有安全漏洞怎麼辦？**
答：這是正式環境必須考量的問題。工具方面：Trivy、Snyk、Docker Scout 可以掃描 Image 裡的 CVE（已知漏洞）。實踐方面：定期更新 base image 版本、用最小化 image（減少攻擊面）、不在容器裡跑 root 進程（用 USER 指令切換）。這些是 Docker 安全加固的話題，進階課程會深入。

還有什麼問題嗎？今天大家吸收了很多內容，如果一時消化不完很正常，課後做練習，很多問題在動手操作中自然就解開了。課程 Line 群組隨時可以提問，我和助教會盡快回覆。下一堂課我們進入 Dockerfile 和 docker-compose，敬請期待。今天辛苦了，大家下課！

【預期難搞學員問題 — 第二堂下午】

Q：Docker 和 VM 都能部署服務，為什麼還要多學一套？

A：兩者不是互斥，而是分工不同。VM 解決硬體隔離與基礎資源，Docker 解決交付一致性與啟動效率。現代實務常是 VM 承載容器平台。

Q：docker stop 已經會等，為什麼有時還是資料不一致？

A：因為應用本身不一定有正確處理終止訊號，或落盤策略不完整。容器平台只能給你訊號與時間窗，真正一致性仍是應用與儲存設計責任。

Q：容器一啟動就退出，除了 logs 還要看什麼？

A：要看 entrypoint、command、退出碼與相依服務狀態。很多情況是主程序設計成本來就會結束，或相依資源未就緒。把啟動鏈完整展開才會找到根因。

Q：latest tag 用起來最省事，為什麼你不建議？

A：latest 沒有版本語意，今天能跑不代表明天還一致。正式環境應固定可追溯版本，搭配掃描與回滾策略。可重現性比省一次輸入更重要。

Q：Docker Desktop 和 Linux 原生 Docker 行為完全一樣嗎？

A：不完全一樣，尤其檔案系統效能、網路路徑、資源限制與權限表現。學習時可共用概念，但排障時要先確認平台差異，避免把本機特性誤當通則。

Q：容器內跑 root 在隔離下是不是就安全？

A：不是。容器不是強邊界安全機制，root 仍會放大突破後影響範圍。實務上要最小權限、唯讀檔案系統、能力裁剪與映像來源控管一起做。

Q：映像漏洞掃描報很多 CVE，怎麼判斷要不要擋發版？

A：先看嚴重度、可利用性、是否可達，再看補丁可行性。建立明確門檻與例外流程，比看到漏洞就全面封鎖更實際。風險管理需要分級，而不是二元。

Q：容器 log 一直長大，正式環境如何處理？

A：不要把 log 當本機永久檔案，應做集中收集與保留策略。容器只負責輸出，平台負責彙整、查詢、輪轉與歸檔。這是可觀測性與成本控制的共同議題。`,
    duration: "5"
  },
]
