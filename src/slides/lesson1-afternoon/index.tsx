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

  // ===== 1. 開場回顧 (10分鐘) =====
  {
    title: "下午開場：早上重點回顧",
    subtitle: "鞏固基礎，迎接進階操作",
    section: "開場回顧",
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 font-bold mb-3">☀️ 早上學了什麼</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex gap-2"><code className="text-green-400 w-20 flex-shrink-0">whoami</code><span>確認使用者身分</span></li>
              <li className="flex gap-2"><code className="text-green-400 w-20 flex-shrink-0">pwd</code><span>目前所在目錄</span></li>
              <li className="flex gap-2"><code className="text-green-400 w-20 flex-shrink-0">ls</code><span>列出目錄內容</span></li>
              <li className="flex gap-2"><code className="text-green-400 w-20 flex-shrink-0">ssh</code><span>遠端連線到伺服器</span></li>
              <li className="flex gap-2"><code className="text-green-400 w-20 flex-shrink-0">chmod</code><span>修改檔案權限</span></li>
            </ul>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-yellow-400 font-bold mb-3">🌙 下午要學什麼</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>📁 目錄移動與瀏覽（cd/ls/pwd）</li>
              <li>🗂️ 目錄與檔案操作（mkdir/cp/mv/rm）</li>
              <li>📄 檔案內容查看（cat/less/head/tail/wc）</li>
              <li>✏️ nano 文字編輯器</li>
              <li>🔍 搜尋工具（grep/find）</li>
            </ul>
          </div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg text-sm text-center text-blue-300">
          💡 今天下午學的這些，是你每天工作都會用到的核心指令
        </div>
      </div>
    ),
    notes: `大家好，歡迎回到下午的課程！吃飽了嗎？精神好一點了吧，中午有沒有補到眠？下午的課通常是最難撐的，但今天下午的內容非常實用，我保證你會越做越有趣，因為我們要真正動手操作了。

首先讓我來幫大家複習一下早上的重點。早上我們從最基礎的地方開始——Linux 的歷史背景，為什麼 Linux 這麼重要，它和 Windows 有什麼本質上的不同。接著我們學了命令列介面（CLI）的概念，理解為什麼工程師要用文字指令而不是圖形介面。然後學了怎麼用 SSH 連線到遠端伺服器，這是你往後管理伺服器的核心技能。我們也看了 Linux 的目錄結構，了解 /etc、/var、/home、/usr 這些重要目錄分別放什麼東西。最後學了使用者和權限的概念，rwx 讀寫執行，以及 chmod 和 chown 怎麼用。

我先問一下大家，早上學的幾個基本指令還有印象嗎？whoami 是做什麼的？（等學員回答：確認目前的使用者帳號）對！pwd 呢？（等回答：顯示目前所在目錄）ls 呢？（等回答：列出目錄內容）很好！那 ssh 呢？（等回答：連接到遠端伺服器）完全正確！大家都有在聽，早上沒有白費。

如果有些指令現在還不太確定，完全沒關係。我們今天下午在做各種操作的時候，這些指令都還會繼續出現，多用幾次自然就記住了。學習 Linux 指令最好的方式就是重複使用，而不是背。

好，那我們來說說今天下午的計畫。

下午的重點有五個區塊，我依序說明：

第一個區塊是「目錄移動與瀏覽」，核心指令是 cd（切換目錄）、ls（列出內容）和 pwd（確認位置）。這三個指令加上 Tab 自動補全技巧，是你在 Linux 命令列上移動和導覽的基本技能。就像你學開車先要學方向盤和油門剎車一樣，這是最基礎的操作。

第二個區塊是「目錄和檔案操作」，包含 mkdir（建立目錄）、touch（建立空檔案）、cp（複製）、mv（移動/重命名）、rm（刪除）。這些指令讓你可以管理你的工作空間，建立、整理、搬移、清理檔案。就像整理你的辦公桌一樣，只是用指令操作。

第三個區塊是「查看檔案內容」，包含 cat、less、head、tail、wc。當你連到伺服器，要查看設定檔或日誌，這些工具讓你可以在不打開圖形編輯器的情況下，快速讀取任何檔案的內容。

第四個區塊是 nano 編輯器。當你需要修改設定檔、寫腳本，在伺服器上直接編輯文字，nano 是最容易上手的命令列編輯器。

第五個區塊是「搜尋工具」，grep 用來在檔案內容中搜尋關鍵字，find 用來在目錄樹中找特定的檔案。

這五個主題組合起來，就是一個 Linux 系統管理員或後端工程師每天工作的核心能力。不管是管理 Web 伺服器、部署應用程式、設定 Docker 容器，還是操作 Kubernetes 叢集，這些指令你每天都會用到，可能一天要用幾十次甚至幾百次。

一個重要的心態提醒：今天下午學的東西比早上多，而且更注重實際操作。我建議大家一邊聽我講，一邊在自己的終端機上跟著輸入。不要只是看，要動手做！打指令就像打字，肌肉記憶是最可靠的記憶方式。看我操作一遍，你可能覺得很簡單；但等你自己去打的時候，可能會出錯。出錯是正常的，錯了才能學到東西。

好，準備好了嗎？讓我們開始！

最後補充一個學習心態：「犯錯是學習最快的路」。今天下午你一定會打錯指令、遇到奇怪的錯誤訊息、不知道自己在哪個目錄。這些都完全正常，不需要沮喪。Linux 的錯誤訊息雖然有時候有點難看，但其實都有意義，它在告訴你哪裡不對。養成一個習慣：看到錯誤，先把錯誤訊息整個讀一遍，通常就能找到線索。如果還是不懂，複製錯誤訊息去 Google，幾乎所有你會遇到的錯誤都有人遇過，答案就在 Stack Overflow 或某個 Linux 論壇上。

有問題要問！不管是對我、對助教、還是在課程群組裡問，都沒有「笨問題」這回事。我每次上課都還是會查指令的手冊（man page），因為沒有人能記住所有選項。能力不在於記得多少，而在於知道去哪裡找答案、以及找到答案後能不能正確理解和應用。`,
    duration: "10",
  },

  // ===== 1.5 Linux 有趣彩蛋 =====
  {
    title: "🎮 Linux 有趣彩蛋",
    subtitle: "工程師的幽默感",
    section: "暖場活動",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="bg-slate-800/60 border border-yellow-600/50 p-4 rounded-xl">
            <p className="text-yellow-400 font-bold text-lg mb-2">🚂 sl — 蒸汽火車</p>
            <p className="text-slate-300 text-sm mb-2">當你把 <code className="text-green-400">ls</code> 打成 <code className="text-red-400">sl</code>...</p>
            <div className="bg-slate-900/60 p-2 rounded font-mono text-xs text-green-400">
              $ sl<br/>
              <span className="text-slate-500"># 一台 ASCII 蒸汽火車跑過螢幕！</span>
            </div>
            <p className="text-slate-400 text-xs mt-2">安裝：<code className="text-blue-300">sudo apt install sl</code></p>
          </div>
          <div className="bg-slate-800/60 border border-blue-600/50 p-4 rounded-xl">
            <p className="text-blue-400 font-bold text-lg mb-2">🐄 cowsay — 牛說話</p>
            <p className="text-slate-300 text-sm mb-2">讓一隻 ASCII 牛說你指定的話</p>
            <div className="bg-slate-900/60 p-2 rounded font-mono text-xs text-green-400">
              $ cowsay "Hello K8s!"<br/>
              <span className="text-slate-500"># 一隻牛會說出這句話</span>
            </div>
            <p className="text-slate-400 text-xs mt-2">安裝：<code className="text-blue-300">sudo apt install cowsay</code></p>
          </div>
          <div className="bg-slate-800/60 border border-green-600/50 p-4 rounded-xl">
            <p className="text-green-400 font-bold text-lg mb-2">🔮 fortune — 隨機格言</p>
            <p className="text-slate-300 text-sm mb-2">隨機顯示一句格言或笑話</p>
            <div className="bg-slate-900/60 p-2 rounded font-mono text-xs text-green-400">
              $ fortune | cowsay<br/>
              <span className="text-slate-500"># 組合技：讓牛說隨機格言</span>
            </div>
            <p className="text-slate-400 text-xs mt-2">安裝：<code className="text-blue-300">sudo apt install fortune</code></p>
          </div>
          <div className="bg-slate-800/60 border border-purple-600/50 p-4 rounded-xl">
            <p className="text-purple-400 font-bold text-lg mb-2">💊 cmatrix — 駭客任務</p>
            <p className="text-slate-300 text-sm mb-2">螢幕上顯示綠色數字雨</p>
            <div className="bg-slate-900/60 p-2 rounded font-mono text-xs text-green-400">
              $ cmatrix<br/>
              <span className="text-slate-500"># 按 q 離開 Matrix 世界</span>
            </div>
            <p className="text-slate-400 text-xs mt-2">安裝：<code className="text-blue-300">sudo apt install cmatrix</code></p>
          </div>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習（放鬆一下）</p>
          <p className="text-slate-300 text-sm">試試看：<code className="text-green-300">sudo apt install sl cowsay -y && sl && cowsay "Linux is fun!"</code></p>
        </div>
      </div>
    ),
    notes: `在結束今天的課程之前，讓我們來點輕鬆的！Linux 的工程師們其實很有幽默感，在系統裡藏了很多好玩的「彩蛋」。

**sl — 蒸汽火車（Steam Locomotive）**

這是最經典的 Linux 彩蛋。當你打字太快，把 ls（列出目錄）打成 sl 的時候，如果你安裝了這個套件，螢幕上會跑出一台完整的 ASCII 蒸汽火車！而且你按 Ctrl+C 還停不下來，火車一定要跑完才行。

這個程式的作者是日本工程師 Toyoda Masashi，他的本意就是「懲罰」打字太快太粗心的人。非常有趣的是，這個「懲罰工具」反而成為 Linux 上最受歡迎的彩蛋之一。

安裝方式：sudo apt install sl
執行：sl

你還可以加選項：
- sl -l：火車變小
- sl -a：有人從火車窗戶揮手
- sl -F：火車飛起來
- sl -e：允許 Ctrl+C 中斷

**cowsay — 牛說話**

這個程式會讓一隻 ASCII 畫的牛「說」出你指定的文字。看起來很無聊對吧？但它其實在很多地方有實際用途：

1. 讓系統訊息更顯眼——有些管理員會在伺服器的 MOTD（登入歡迎訊息）用 cowsay，讓重要警告更醒目
2. 在腳本輸出加入一點幽默感
3. 配合 fortune 使用

安裝：sudo apt install cowsay
執行：cowsay "Hello K8s!"

cowsay 還有很多其他動物可選：cowsay -l 列出所有可用的動物，然後用 -f 選擇，比如 cowsay -f tux "Linux!" 會讓企鵝說話。

**fortune — 隨機格言**

fortune 會隨機顯示一句格言、笑話或冷知識。這個程式的歷史非常悠久，早在 1970 年代的 Unix 就有了。

安裝：sudo apt install fortune
執行：fortune

經典組合技：fortune | cowsay
這會讓牛隨機說一句格言！很多人會把這行加到 .bashrc 裡，每次開終端機就看到一句隨機的話。

**cmatrix — 駭客任務效果**

還記得電影《駭客任務》裡那個著名的綠色數字雨嗎？cmatrix 就是在終端機上重現這個效果。

安裝：sudo apt install cmatrix
執行：cmatrix
按 q 離開

這個程式純粹就是好玩，沒有實際用途。但當你需要在同事面前假裝你在做很厲害的「駭客」工作時...（開玩笑的）

**更多彩蛋**

- apt moo：執行 apt moo 會出現一隻 ASCII 牛，這是 apt 套件管理器內建的彩蛋
- vim :help 42：在 vim 編輯器裡輸入這個命令，會顯示「42」的典故（出自《乞丐英雄傳》）
- yes：這個指令會無限印出 "y"，原本是設計來自動回答需要確認的程式

**為什麼 Linux 有這麼多彩蛋？**

這反映了 Unix/Linux 的文化：實用主義加上工程師的幽默感。這些程式都是工程師在業餘時間寫的，目的就是好玩。開源社群不只是在做「嚴肅的工作」，也在享受寫程式的樂趣。

現在大家可以試試看！先安裝：sudo apt install sl cowsay fortune cmatrix -y
然後玩玩看：sl、cowsay "你好"、fortune | cowsay、cmatrix

這些彩蛋雖然沒有實際工作用途，但它們代表了 Linux 社群的文化：嚴謹但不無聊，專業但有幽默感。好，輕鬆時刻結束，我們來做今天的總結！`,
    duration: "5",
  },



  // ===== 2. 目錄導覽 - cd =====
  {
    title: "cd — 切換目錄",
    subtitle: "Change Directory",
    section: "目錄導覽指令",
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { cmd: "cd /home/student", desc: "絕對路徑：從根目錄 / 出發", color: "text-green-400" },
            { cmd: "cd ../", desc: "相對路徑：移到上一層目錄", color: "text-blue-400" },
            { cmd: "cd ../../", desc: "往上兩層目錄", color: "text-blue-400" },
            { cmd: "cd ~", desc: "回到家目錄（/home/你的帳號）", color: "text-yellow-400" },
            { cmd: "cd -", desc: "回到上一個所在的目錄", color: "text-purple-400" },
            { cmd: "cd", desc: "不加參數，等同 cd ~，回家目錄", color: "text-yellow-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-800/60 p-2.5 rounded-lg">
              <code className={`${item.color} font-mono text-sm w-48 flex-shrink-0`}>{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="bg-green-900/20 border border-green-700/50 p-3 rounded-lg">
            <p className="text-green-400 font-semibold mb-1">絕對路徑</p>
            <p className="text-slate-300">永遠從根目錄 <code>/</code> 開始，例如 <code className="text-green-300">/etc/nginx/nginx.conf</code></p>
          </div>
          <div className="bg-blue-900/20 border border-blue-700/50 p-3 rounded-lg">
            <p className="text-blue-400 font-semibold mb-1">相對路徑</p>
            <p className="text-slate-300">從目前位置出發，<code>../</code> 代表上一層，<code>./</code> 代表當前層</p>
          </div>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>用絕對路徑切換到 <code className="text-green-300">cd /var/log</code></li>
            <li>用 <code className="text-yellow-300">cd ~</code> 回到家目錄</li>
            <li>用 <code className="text-purple-300">cd -</code> 回到剛才的 /var/log</li>
            <li>挑戰：<code className="text-blue-300">cd /etc/..</code> 會到哪裡？</li>
          </ol>
        </div>
      </div>
    ),
    code: `student@server:~$ pwd
/home/student
student@server:~$ cd /etc
student@server:/etc$ pwd
/etc
student@server:/etc$ cd ../
student@server:/$ cd ~
student@server:~$ cd -
/etc
student@server:/etc$`,
    notes: `好，第一個主題：cd 指令，Change Directory，切換目錄。這是你在 Linux 命令列上花最多時間用的指令之一，因為你幾乎所有操作都需要先「走」到正確的目錄，才能做後續的動作。

首先我們要理解「路徑」的概念，因為 cd 的核心就是路徑。路徑就是在 Linux 的目錄樹結構中，如何從某個點走到另一個點的描述方式。可以把它想像成地址：你要告訴 Linux「我要去哪裡」，就要用路徑來描述。

路徑分成兩種：絕對路徑和相對路徑，這是非常重要的概念，請大家記清楚。

絕對路徑永遠從根目錄 / 開始。就像你在 Google Maps 上輸入完整的街道地址一樣，不管你現在人在哪裡，都能找到那個目標。例如 /home/student 這個路徑，代表「從根目錄開始，進入 home 目錄，再進入 student 目錄」。無論你目前在哪個目錄，輸入 cd /home/student 都會帶你去那裡，不受你目前位置的影響。絕對路徑的特徵就是以 / 斜線開頭。

相對路徑則是從你目前的位置出發。有兩個特殊符號很重要：./ 代表當前目錄，../ 代表上一層目錄。比如你現在在 /home/student，輸入 cd ../ 就會把你帶到 /home（往上一層），再一次 cd ../ 就到了根目錄 /。相對路徑的特徵就是不以 / 開頭，它依賴你目前的位置。

什麼時候用絕對路徑、什麼時候用相對路徑？一般原則是：如果目標離你「很遠」（需要往上好幾層再往下），用絕對路徑比較清楚；如果目標在你附近（往上一兩層或往下幾層），用相對路徑比較快。

接下來是兩個非常實用的特殊目錄符號。

cd ~ 是回到你的家目錄（home directory）。什麼是家目錄？就是你登入系統後的預設起點位置，通常是 /home/你的使用者名稱。比如你的帳號是 student，家目錄就是 /home/student。只要輸入 cd ~ 或者單純不加參數的 cd，不管你跑到哪個角落，都能一鍵回家。這就像 GPS 的「導航回家」功能，非常好用。~ 這個符號在 Linux 裡就是「家目錄」的簡稱，你在很多地方都會看到它，比如 ~/.bashrc 就是指家目錄下的 .bashrc 檔案。

cd - 則是更有趣的功能，它會帶你回到你「上一個待過的目錄」，不是上一層，而是上一個位置。比如你從 /home/student 跑到了 /etc/nginx，然後輸入 cd -，你就立刻回到 /home/student 了。再輸入一次 cd -，又回到 /etc/nginx。這個功能在你需要在兩個目錄之間來回切換時非常方便，就像 Windows 的「上一頁」按鈕一樣，而且只需要輸入三個字元 cd -。

還有一個補充：輸入 cd 路徑的時候，你可以用 Tab 鍵自動補全（我們後面會詳細講），這樣打路徑很快，不容易打錯。

大家現在一起來試試看！先輸入 pwd 確認自己在哪裡，然後輸入 cd /etc 切到系統設定目錄，再輸入 pwd 確認位置，然後 cd ~（或 cd）回家目錄，再輸入 cd - 回到 /etc，最後再 cd - 回家目錄。把這個流程多做幾次，感受一下絕對路徑和這些特殊符號的用法，讓手指記住這些操作。

補充一個在 K8s 維運時很常見的路徑場景：當你 kubectl exec 進入 Pod 的容器之後，第一件事通常就是 pwd 確認目前在哪裡、ls 看一下目錄結構，然後再用 cd 移動到應用程式的工作目錄，比如 /app 或 /usr/src/app。這和你今天練習的流程完全一樣，只是換到了容器內部的環境。所以說，cd 這個看起來最簡單的指令，卻是你最常用、最依賴的基本技能之一。

🎯 **小練習（邊聽邊做）**
請完成以下任務，用剛學的 cd 指令：
1. 從家目錄出發，用「絕對路徑」切換到 /var/log
2. 再用 cd ~ 回到家目錄
3. 用 cd - 回到剛才的 /var/log
4. 挑戰：用一行指令 cd /etc/.. 會到哪裡？（提示：.. 是上一層）

完成後用 pwd 確認你的位置！`,
    duration: "8",
  },

  // ===== 3. 目錄導覽 - ls =====
  {
    title: "ls — 目錄列表",
    subtitle: "List Directory Contents",
    section: "目錄導覽指令",
    content: (
      <div className="space-y-3">
        <div className="grid gap-2">
          {[
            { cmd: "ls", desc: "列出當前目錄內容" },
            { cmd: "ls -l", desc: "詳細格式（長格式）：權限、擁有者、大小、時間" },
            { cmd: "ls -la", desc: "-l 詳細 + -a 顯示隱藏檔（.開頭的檔案）" },
            { cmd: "ls -lh", desc: "-l 詳細 + -h 人性化大小（KB/MB/GB 而非 bytes）" },
            { cmd: "ls -lah", desc: "三個合在一起：詳細 + 隱藏 + 人性化大小" },
            { cmd: "ls /etc", desc: "列出指定目錄的內容，不需要先 cd 過去" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-2.5 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-36 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg mt-3">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>用 <code className="text-green-300">ls -lah</code> 看看家目錄有哪些隱藏檔</li>
            <li>用 <code className="text-blue-300">ls /var/log</code> 列出系統日誌目錄（不用 cd 過去）</li>
            <li>找出 <code className="text-purple-300">ls -lah</code> 輸出中，哪個是目錄、哪個是檔案？</li>
          </ol>
        </div>
      </div>
    ),
    code: `$ ls -lah /home/student
total 36K
drwxr-xr-x 4 student student 4.0K Feb 17 09:00 .
drwxr-xr-x 3 root    root    4.0K Feb 17 08:00 ..
-rw-r--r-- 1 student student  220 Feb 17 08:00 .bash_logout
-rw-r--r-- 1 student student 3.7K Feb 17 08:00 .bashrc
drwxr-xr-x 2 student student 4.0K Feb 17 09:30 projects
-rw-rw-r-- 1 student student  512 Feb 17 09:45 notes.txt`,
    notes: `學完 cd 移動之後，我們來學 ls——列出目錄的內容。這應該是你在 Linux 上使用頻率最高的指令之一，沒有之一。每次你切換到一個新目錄，第一件事幾乎都是 ls 看一下裡面有什麼。

最基本的 ls 不加任何參數，就列出當前目錄的所有可見檔案和目錄。大多數 Linux 終端機會用不同顏色區分類型：藍色通常是目錄，白色是普通檔案，綠色是可執行檔，淺藍色是符號連結（symlink）。但是基本的 ls 輸出資訊很少，你只能看到名字。

所以我們需要了解幾個非常重要的選項，加了這些選項才能讓 ls 真正好用。

第一個是 -l，長格式（long format）。加了 -l 之後，每個檔案佔一行，顯示詳細資訊。從左到右分別是：第一欄是類型和權限（d 開頭是目錄，- 開頭是普通檔案，l 開頭是符號連結，後面接 rwx 表示讀寫執行權限）；第二欄是硬連結數；第三欄是擁有者（owner）帳號名稱；第四欄是所屬群組（group）名稱；第五欄是檔案大小（預設是 bytes）；第六欄是最後修改時間；最後才是檔案或目錄名稱。

第二個是 -a，all，顯示所有檔案包含隱藏檔。在 Linux 裡，檔名以「.」點開頭的檔案是隱藏檔，比如 .bashrc、.ssh、.profile 這些重要的設定檔。不加 -a 的話，ls 不會顯示這些隱藏檔，好像它們不存在一樣。加了 -a 才能看到全部。

第三個是 -h，human-readable，人性化大小。加了 -h 之後，檔案大小會顯示成人類容易讀的格式：不是 1048576 bytes，而是 1.0M；不是 4096 bytes，而是 4.0K。讓你一眼就能判斷檔案大小。

這三個選項通常合在一起用，組合成 ls -lah（或寫成 ls -l -a -h 也可以）。這個組合是你日後最常用的 ls 形式，顯示所有詳細資訊、包含隱藏檔、大小容易讀。強烈建議你把 ls -lah 設成肌肉記憶，每次進入一個目錄就 ls -lah 一下。

現在來看看右邊的輸出範例。你看到 drwxr-xr-x 開頭的行，d 代表這是 directory（目錄）；-rw-r--r-- 開頭的行，- 代表這是普通檔案（regular file）。student student 是擁有者帳號和所屬群組。4.0K 是大小。Feb 17 09:00 是最後修改時間。最後的 projects、notes.txt 才是名稱。

而 .（點）和 ..（兩個點）是永遠存在的特殊目錄：. 代表當前目錄本身，.. 代表上一層目錄。cd .. 就是利用這個特殊符號往上走一層。

還有一個很實用的技巧：你不需要先 cd 到某個目錄才能列出它的內容。ls /etc 可以直接列出 /etc 的內容，而不需要先 cd /etc。這在你只是想「瞄一眼」某個目錄時很方便，看完就好，不需要跑過去再跑回來。

大家現在來試試，輸入 ls -lah 看看自己的家目錄裡有什麼隱藏檔。特別注意 .bashrc 和 .profile 這兩個，它們是非常重要的 Shell 設定檔。

延伸說一下 ls 的顏色和輸出格式。大多數現代 Linux 終端機預設會用顏色區分檔案類型：藍色的是目錄；白色或淺灰色是普通文字檔案；綠色是可執行檔（有 x 權限）；淺藍色（青色）是符號連結（symlink，相當於 Windows 的捷徑）；紅色可能是壓縮檔或者有問題的連結。這些顏色是 ls --color=auto 提供的功能，大多數 Linux 發行版預設就有開啟。如果你看到的 ls 輸出沒有顏色，確認 ~/.bashrc 裡有 alias ls='ls --color=auto' 這行。

另一個補充：ls -lah 輸出最前面的「total」那一行顯示的是目錄下所有檔案實際佔用的磁碟區塊數量總和。這在快速評估一個目錄佔用多少空間時很有用。

🎯 **小練習（結合 cd + ls）**
請完成以下任務：
1. 用 cd /etc 切換到系統設定目錄
2. 用 ls -lah 列出內容，找出最大的檔案是哪一個
3. 用 ls -la /home 列出所有使用者的家目錄（不需要 cd 過去）
4. 挑戰：ls 輸出的第一欄 drwxr-xr-x 中，d 代表什麼？r、w、x 又代表什麼？

提示：答案在剛才的講解中！`,
    duration: "8",
  },

  // ===== 4. 目錄導覽 - pwd + Tab =====
  {
    title: "pwd 確認位置 + Tab 補全",
    subtitle: "Print Working Directory + 自動補全",
    section: "目錄導覽指令",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-yellow-400 font-bold mb-3">📍 pwd</p>
            <p className="text-slate-300 text-sm mb-3">Print Working Directory，顯示你目前所在的完整路徑</p>
            <code className="text-green-400 text-sm block">$ pwd</code>
            <code className="text-slate-300 text-sm block">/home/student/projects</code>
            <p className="text-slate-400 text-xs mt-3">💡 迷路了就輸入 pwd</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 font-bold mb-3">⌨️ Tab 自動補全</p>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>輸入一半，按 <kbd className="bg-slate-700 px-1.5 py-0.5 rounded text-xs">Tab</kbd> 自動補全</li>
              <li>有多個選項時，按兩下 Tab 列出所有選項</li>
              <li>補全目錄名稱、指令名稱、檔案名稱</li>
            </ul>
            <div className="mt-3 bg-slate-900/50 p-2 rounded font-mono text-xs">
              <span className="text-green-400">$ cd /ho</span>
              <span className="text-yellow-300">Tab</span>
              <span className="text-green-400"> → /home/</span>
            </div>
          </div>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-sm">
          <span className="text-yellow-400 font-bold">🏆 效率技巧：</span>
          <span className="text-slate-300"> cd /usr/lo + Tab → cd /usr/local/，方向鍵可上下翻歷史指令</span>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg mt-3">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>輸入 <code className="text-green-300">pwd</code> 確認你現在在哪裡</li>
            <li>輸入 <code className="text-blue-300">cd /u</code> 然後按 Tab，看看發生什麼</li>
            <li>按 ↑ 方向鍵，叫回上一條指令</li>
            <li>挑戰：用最少的按鍵打出 <code className="text-purple-300">cd /etc/systemd</code></li>
          </ol>
        </div>
      </div>
    ),
    notes: `好，在進入下一個主題之前，還有兩個很重要的技巧要說：pwd 確認位置，以及 Tab 自動補全。這兩個東西雖然看起來簡單，但是學好了可以大幅提升你的工作效率。

先說 pwd。pwd 是 Print Working Directory，印出工作目錄。輸入 pwd，它就告訴你目前的完整位置，顯示完整的絕對路徑。

這個指令有什麼用？你有沒有過這種感覺：在一個複雜的目錄結構裡走來走去，連續 cd 了幾次之後，突然迷失方向，不確定自己現在在哪裡。這時候輸入 pwd，立刻告訴你完整路徑，比如 /usr/local/etc/nginx，你就知道自己現在在哪個角落了。就算你的命令提示字元（shell prompt）也能顯示當前目錄，但通常只顯示最後一層的名字（比如顯示 nginx），而 pwd 給你完整路徑，更清楚。

在寫 Shell 腳本的時候，pwd 也很常用。你可以把 pwd 的輸出存成變數：CURRENT_DIR=$(pwd)，然後在腳本裡使用 $CURRENT_DIR 來引用當前路徑。這樣腳本不管在哪個目錄下執行，都能正確處理路徑。

好，現在來說最重要的效率技巧：Tab 自動補全！這是命令列操作中最能提升速度的功能，沒有之一。

什麼是 Tab 自動補全？在命令列輸入指令的時候，按 Tab 鍵，Shell 會自動幫你補全剩下的部分。無論是指令名稱、目錄路徑，還是檔案名稱，都可以 Tab 補全。

來看一個具體的例子。你要輸入 cd /home/student/projects/myapp，如果全部手動打，需要輸入很多字元，而且容易打錯。但是用 Tab 的話：輸入 cd /ho，按 Tab，Shell 自動補成 cd /home/；再輸入 st，按 Tab，補成 cd /home/student/；再輸入 pr，按 Tab，補成 cd /home/student/projects/；再輸入 my，按 Tab，補成完整路徑。整個過程你只輸入了幾個字母，Shell 幫你完成其他部分。

Tab 補全的規則：如果只有一個符合的選項，直接補全；如果有多個符合的選項，按一次 Tab 沒反應，就快速連按兩下 Tab，Shell 會把所有符合的選項列出來，讓你看有哪些選擇，然後繼續輸入更多字元縮小範圍，再按 Tab。

Tab 補全不只適用於路徑，也適用於指令名稱。比如你要輸入 systemctl 這個很長的指令，只要輸入 sys 然後按 Tab，Shell 就幫你補全了，完全不需要背完整拼法。

接著說另一個必學技巧：方向鍵的上鍵和下鍵可以翻歷史指令。你剛才輸入的每一條指令都被記錄在 Shell 的歷史（history）裡。按上鍵 ↑ 回到上一條指令，再按上鍵 ↑ 再往前一條，下鍵 ↓ 往後翻。如果你發現剛才的指令打錯了，不需要重新全部打一遍，按上鍵叫回來，用方向鍵移動游標修改，再按 Enter 執行。

還有一個組合技：Ctrl+R 可以反向搜尋歷史指令。按下 Ctrl+R 之後，輸入你記得的部分關鍵字，Shell 會找出最近符合的指令。這在你要重新執行一條很長但記不全的指令時非常好用。

這些技巧——Tab 補全、上鍵翻歷史、Ctrl+R 搜尋歷史——是讓你在命令列工作速度大幅提升的關鍵。從今天開始，強迫自己養成按 Tab 的習慣，不要手動輸入完整路徑。一開始可能要刻意提醒自己，但大概一兩週後就會變成直覺反應。這是老手和新手最明顯的差距之一。

大家現在練習一下 Tab 補全：輸入 cd /u，然後按 Tab，看看 Shell 補出什麼；再試試 cd /usr/lo，按 Tab，看看是否補出 local；試幾次感受一下這個流程。

最後補充一個小技巧：在命令列上，Ctrl+A 可以把游標移到行首，Ctrl+E 可以把游標移到行尾。當你輸入了一條很長的指令，發現最前面有打錯，不需要一直按左鍵移動，直接 Ctrl+A 跳到行首，修改完再 Ctrl+E 跳回行尾。配合 Ctrl+U（清除游標到行首的所有內容）和 Ctrl+K（清除游標到行尾的所有內容），這幾個快捷鍵能讓你在命令列上的文字編輯效率大幅提升。這些都是 Bash/Shell 的標準快捷鍵，在任何 Linux 終端機都有效。

🎯 **小練習（cd + ls + Tab）**
請完成以下任務：
1. 輸入 cd /u 然後按 Tab，觀察自動補全的結果
2. 繼續輸入 cd /usr/lo 按 Tab，應該補成 /usr/local/
3. 按上鍵 ↑ 調出上一條指令，再按 Enter 執行
4. 按 Ctrl+R，輸入 "cd"，看看是否能找到之前輸入過的 cd 指令

💡 養成習慣：從今天開始，每次輸入路徑都用 Tab 補全！`,
    duration: "9",
  },

  // ===== 5. 目錄操作 - mkdir =====
  {
    title: "mkdir — 建立目錄",
    subtitle: "Make Directory",
    section: "目錄操作",
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { cmd: "mkdir mydir", desc: "建立單一目錄" },
            { cmd: "mkdir dir1 dir2 dir3", desc: "一次建立多個目錄" },
            { cmd: "mkdir -p project/src/main", desc: "-p 建立多層嵌套目錄（含中間層）" },
            { cmd: "mkdir -p project/{src,docs,tests}", desc: "大括號展開，一次建立多個子目錄" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-3 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-52 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg mt-3">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>用 <code className="text-green-300">mkdir -p ~/k8s-lab/{"{deployments,services,configs}"}</code></li>
            <li>用 <code className="text-blue-300">ls ~/k8s-lab/</code> 確認三個目錄都建好</li>
            <li>挑戰：用一行建立 <code className="text-purple-300">~/k8s-lab/deployments/{"{dev,staging,prod}"}</code></li>
          </ol>
        </div>
      </div>
    ),
    code: `$ mkdir myproject
$ mkdir -p myproject/src/components
$ mkdir -p myproject/{src,docs,tests}
$ ls myproject/
docs  src  tests
$ ls myproject/src/
components`,
    notes: `好，進入第二個大主題：目錄和檔案操作。我們先學 mkdir，Make Directory，建立目錄。

mkdir 是一個非常直覺的指令，在 Linux 上建立目錄就靠它。最基本的用法是 mkdir 加上你想要的目錄名稱：mkdir myproject，就在當前目錄裡建立一個叫 myproject 的新目錄。你也可以一次建立多個目錄，用空格分開：mkdir dir1 dir2 dir3，這三個目錄會同時被建立。

但是，mkdir 最重要、最常用的選項是 -p，這個你一定要記起來。

為什麼需要 -p？來看一個情境：假設你要建立 project/src/main 這樣的多層目錄結構。你直接輸入 mkdir project/src/main，會得到一個錯誤：「cannot create directory 'project/src/main': No such file or directory」。為什麼？因為 project 目錄和 project/src 目錄都還不存在，mkdir 找不到路，所以失敗了。

加了 -p 之後就不一樣了。mkdir -p project/src/main，它會自動從最外層開始，依序建立 project、project/src、project/src/main，不管中間哪一層不存在，都自動補建。-p 是 parents 的意思，「同時建立所有父目錄」。即使目錄已經存在，加了 -p 也不會報錯，直接跳過，這讓你的腳本更健壯。

在實際工作中，-p 幾乎是你每次用 mkdir 都會加的選項。當你要部署一個應用程式，可能需要建立 /var/app/logs/2026/02 這樣深層的目錄，一個 mkdir -p 就搞定，不需要一層一層進去再 mkdir，節省大量時間。

還有一個非常實用的進階技巧：大括號展開（Brace Expansion）。這是 Bash Shell 的功能，不是 mkdir 本身的功能，但配合 mkdir 非常好用。

看這個例子：mkdir -p project/{src,docs,tests}。大括號裡用逗號分隔的內容，Shell 會自動展開成多個路徑：project/src、project/docs、project/tests，然後把這三個路徑都傳給 mkdir -p，一次建立三個目錄。

更複雜的例子：mkdir -p app/{frontend/{components,pages},backend/{api,models},docs} 這一行可以建立一個完整的前後端分離專案結構，包含六個目錄，全部一行搞定！這在設定新專案的時候非常有效率。

建立目錄還有一些要注意的事項：

目錄名稱中建議不要用空格，因為空格在命令列有特殊意義（分隔參數），如果非要用，可以用引號括起來：mkdir "my project"，但這樣每次引用都要加引號，很麻煩。建議用底線或連字號代替空格：mkdir my_project 或 mkdir my-project。

目錄名稱區分大小寫，Documents 和 documents 是兩個不同的目錄，這點和 Windows 不同，請特別注意。

用 ls -la 或 tree（如果安裝了的話）可以確認目錄建立是否正確。

大家現在來練習：輸入 mkdir -p ~/workshop/linux-practice，建立你今天的練習目錄，然後 cd ~/workshop/linux-practice 進去，pwd 確認位置，再 ls -lah 看一下（應該是空的）。準備好了！接下來的所有練習都在這個目錄裡進行。

補充一個很實用的目錄命名原則：在 Linux 伺服器上，目錄和檔案的命名最好遵循幾個慣例。第一，全部小寫英文，避免大小寫混用造成混淆（Linux 檔案系統本身是區分大小寫的，Documents 和 documents 是兩個不同的目錄！）。第二，用連字號（hyphen）或底線（underscore）代替空格，比如 my-project 或 my_project，而不是 my project（含空格的名稱在命令列處理起來很麻煩，每次都要加引號或用反斜線跳脫）。第三，名稱要有意義，看名稱就能猜出裡面裝什麼，而不是用 dir1、folder2 這種沒有意義的名稱。良好的目錄命名習慣從一開始就建立，往後你（或你的同事）看到目錄結構就能快速理解，維護起來也更輕鬆。

🎯 **小練習（cd + ls + mkdir 組合技）**
請完成以下任務，建立一個模擬專案結構：
1. cd ~ 回到家目錄
2. mkdir -p my-k8s-project/{deployments,services,configs}
3. ls my-k8s-project/ 確認三個目錄都建好了
4. 挑戰：用一行指令建立 my-k8s-project/deployments/{dev,staging,prod}

完成後用 ls -la my-k8s-project/deployments/ 確認結果！`,
    duration: "10",
  },

  // ===== 6. 目錄操作 - rmdir/rm-r =====
  {
    title: "rmdir / rm -r — 刪除目錄",
    subtitle: "刪除空目錄 vs 刪除整個目錄樹",
    section: "目錄操作",
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { cmd: "rmdir emptydir", desc: "刪除空目錄（目錄必須是空的）", color: "text-yellow-400" },
            { cmd: "rm -r mydir", desc: "-r 遞迴刪除：目錄和其下所有內容", color: "text-orange-400" },
            { cmd: "rm -rf mydir", desc: "-f 強制：不詢問確認，直接刪", color: "text-red-400" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-3 rounded-lg">
              <code className={`${item.color} font-mono text-sm w-44 flex-shrink-0`}>{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-red-900/30 border border-red-700 p-4 rounded-xl">
          <p className="text-red-400 font-bold text-lg mb-2">⚠️ rm -rf 的危險性</p>
          <div className="space-y-1 text-slate-300 text-sm">
            <p>• <code className="text-red-300">rm -rf /</code> 刪除整個系統（不要試！）</p>
            <p>• <code className="text-red-300">rm -rf ~</code> 刪除你的家目錄（所有個人檔案）</p>
            <p>• <code className="text-red-300">rm -rf ./</code> 刪除當前目錄所有內容</p>
            <p className="text-yellow-300 mt-2">💡 刪除前先 ls 確認，rm 沒有「垃圾桶」，刪了就沒了！</p>
          </div>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg mt-3">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習（安全刪除）</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>用 <code className="text-green-300">mkdir -p ~/del-test/a/b</code> 建立測試目錄</li>
            <li>用 <code className="text-blue-300">ls ~/del-test/</code> 確認結構</li>
            <li>用 <code className="text-yellow-300">rmdir ~/del-test/a/b</code> 刪除最深層空目錄</li>
            <li>用 <code className="text-red-300">rm -r ~/del-test</code> 刪除整個測試目錄</li>
          </ol>
        </div>
      </div>
    ),
    notes: `現在我們來學如何刪除目錄。這個主題我要講得特別仔細，因為在 Linux 上刪除是永久性的操作，沒有垃圾桶，沒有「還原」，刪了就真的沒了。

Linux 上刪除目錄有兩種方式：rmdir 和 rm -r，兩者用途不同。

rmdir 是 Remove Directory，專門用來刪除目錄。但它有一個重要限制：只能刪除空目錄。如果你要刪的目錄裡面還有任何檔案或子目錄，rmdir 會直接拒絕執行，報錯說「directory not empty」。所以 rmdir 的使用場景非常有限，通常只在你確定已經清空了某個目錄之後才會用到。它的優點是「安全」，不會誤刪有內容的目錄。

實際工作中更常用的是 rm -r（或 rm -rf）。rm 本來是刪除單個檔案的指令，加上 -r（recursive，遞迴）選項之後，就可以刪除整個目錄樹——目錄本身、裡面所有的檔案、所有的子目錄、子目錄裡的所有東西，全部一起刪掉。

-f 是 force（強制）選項。加了 -f 之後，rm 不會詢問確認，遇到唯讀檔案也不會停下來問你，直接強制刪除。rm -rf 是你在 Linux 上會遇到最強大也最危險的刪除指令組合。

我現在要非常認真地講一下 rm -rf 的危險性，請大家把我接下來說的話記清楚。

rm -rf 的特性：沒有垃圾桶、沒有確認對話框、沒有 Ctrl+Z 可以撤銷。執行完之後，資料就永遠消失了，無法恢復（除非你有備份）。這是系統管理員最怕手滑的指令之一。

投影片上列了三個最危險的用法：rm -rf / 是刪除整個系統，從根目錄開始全部清空，這會讓伺服器完全無法使用；rm -rf ~ 是刪除你的家目錄，你所有的個人檔案、設定、腳本全部消失；rm -rf ./ 或 rm -rf . 是刪除當前目錄的所有內容，如果你不小心在根目錄或重要目錄下執行，後果非常嚴重。

真實案例：2016 年有一家英國公司的系統管理員，在一行腳本裡不小心把路徑變數弄錯，導致 rm -rf 刪到了整個公司的生產伺服器資料，造成嚴重的業務中斷。還有一個廣為人知的故事是某位工程師在命令列輸入 rm -rf / 而不是 rm -rf /home/user/tmp，因為一個路徑錯誤就把整個系統刪了。這種事情每年都在世界某個角落發生。

所以請記住以下幾個自保原則：

第一，刪除之前一定先 ls，確認你要刪的目錄或檔案就是你想刪的，沒有刪到隔壁。視覺確認是最基本的防線。

第二，如果不確定，先用 rm -ri（加 -i 是 interactive，互動式）。加了 -i 之後，每刪一個檔案都會問你「是否確認刪除？」，輸入 y 才刪。雖然慢一點，但安全多了。

第三，在正式（production）伺服器上操作要格外謹慎。如果可以，先在測試環境演練，確認指令正確再在正式環境執行。

第四，重要資料一定要有備份。rm 雖然危險，但如果有好的備份機制，即使誤刪了也能還原。

今天的課程，我們不在課堂上實際練習刪除，等你對 Linux 更熟悉之後再練習。先把建立目錄和操作檔案學熟，養成「謹慎確認再刪除」的習慣，是最重要的。

最後補充一個替代做法：如果你的系統有安裝 trash-cli 這個工具，可以用 trash 指令代替 rm，它會把檔案移到垃圾桶而不是直接刪掉，讓你有機會還原。但在伺服器環境通常不會安裝，所以核心習慣還是「刪前先 ls 確認，重要資料先備份」。

再說一個進階但重要的防護機制：在你的 ~/.bashrc 裡，可以設定 alias rm='rm -i'，這樣每次輸入 rm，Shell 都會自動加上 -i 選項（互動式確認），要你按 y 才真的刪除。雖然有時候有點煩，但對新手來說是很好的保護。等你用了幾個月，對刪除操作更有信心之後，再考慮拿掉這個 alias。

另外要知道，Linux 本身的設計原則之一是「相信使用者知道自己在做什麼」。所以它不會像 Windows 那樣問你「你確定要刪除嗎？要移到資源回收桶嗎？」它假設你輸入 rm -rf 就是真的要刪，立刻執行，不廢話。這個設計讓 Linux 非常高效，但也確實需要你更謹慎。不管是初學者還是資深工程師，「刪除前先確認」這個習慣永遠不嫌多。

🎯 **小練習（安全刪除練習）**
請完成以下任務，練習安全的刪除流程：
1. mkdir -p ~/delete-test/sub1/sub2 建立測試目錄
2. ls ~/delete-test/ 先確認目錄結構
3. rmdir ~/delete-test/sub1/sub2 刪除最深層的空目錄
4. rmdir ~/delete-test/sub1 刪除 sub1（現在它是空的了）
5. rm -r ~/delete-test 刪除整個測試目錄

⚠️ 養成習慣：刪除前一定先 ls 確認！`,
    duration: "10",
  },

  // ===== 7. 檔案操作 - touch =====
  {
    title: "touch — 建立空檔案",
    subtitle: "Create Empty Files",
    section: "檔案操作",
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { cmd: "touch newfile.txt", desc: "建立新的空白檔案" },
            { cmd: "touch file1 file2 file3", desc: "一次建立多個檔案" },
            { cmd: "touch existing.txt", desc: "更新已存在檔案的時間戳記（不改內容）" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-3 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-48 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
          <p className="text-blue-400 font-semibold mb-2">實際用途</p>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• 建立空白的設定檔，之後再用 nano 填內容</li>
            <li>• 腳本裡用來建立「旗標檔案」（flag file）</li>
            <li>• 更新檔案時間戳記，觸發依賴時間的工具（如 make）</li>
          </ul>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg mt-3">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>用 <code className="text-green-300">touch ~/k8s-lab/deployments/nginx.yaml</code></li>
            <li>用 <code className="text-green-300">touch ~/k8s-lab/deployments/redis.yaml</code></li>
            <li>用 <code className="text-blue-300">ls -la ~/k8s-lab/deployments/</code> 確認檔案</li>
            <li>再次 <code className="text-purple-300">touch</code> 同一個檔案，觀察時間有沒有更新</li>
          </ol>
        </div>
      </div>
    ),
    notes: `接下來學 touch 指令。這個名字非常直覺：你「碰」（touch）一下一個檔案，如果它不存在，就建立一個空的新檔案；如果它已經存在，就更新它的最後修改時間（timestamp），但不改變檔案的實際內容。一個指令，兩種用途。

touch 的主要用途一：建立空白檔案。

在工作中，touch 最常見的使用場景是快速建立一個空白的佔位符檔案（placeholder file）。比如你要建立一個設定檔 config.json，但現在還沒有內容，可以先 touch config.json 建立好這個空白檔案，之後再用 nano 或其他編輯器填入內容。或者你在建立一個 Python 套件目錄時，需要建立 __init__.py 這個空白檔案（讓 Python 識別這是一個套件），touch __init__.py 一秒搞定。

你可以一次 touch 多個檔案，空格分隔就好：touch file1.txt file2.txt file3.txt，這三個檔案會同時被建立，都是空的（0 bytes）。這比一個一個建快很多。

touch 的主要用途二：更新時間戳記。

有些自動化工具會依靠檔案的修改時間（mtime，modification time）來決定要不要重新執行某個操作。最典型的例子是 make，這是一個 C 語言專案常用的建構工具，它通過比較原始碼和編譯產物的修改時間來判斷哪些東西需要重新編譯。如果你想讓 make 重新編譯某個檔案，但又不想真的修改它的內容，就 touch 那個原始碼檔案，修改時間更新了，make 就認為它「被修改過了」，下次執行就會重新編譯它。

在 Linux 系統裡，每個檔案都有三個時間記錄：atime（最後存取時間）、mtime（最後修改時間）、ctime（最後狀態改變時間）。touch 預設更新的是 mtime，也就是「最後修改時間」，這是 ls -l 顯示的那個時間。

使用 touch 時的小提示：如果你要建立的檔案位於某個不存在的目錄，touch 不會自動建立那個目錄，會報錯。你需要先 mkdir -p 建立目錄，再 touch 檔案。比如先 mkdir -p myproject/logs，再 touch myproject/logs/app.log。

還有一個情況要知道：touch 建立的是空白檔案（0 bytes），不是包含任何預設內容的檔案。你之後需要用 nano 或其他方式寫入內容才行。如果你想直接建立一個有內容的檔案，可以用 echo "內容" > 檔案名稱，這個我們後面學重導向的時候會提到。

大家現在來練習：先確認你在練習目錄 cd ~/workshop/linux-practice，然後 touch notes.txt readme.md config.json app.log 一次建立四個空白檔案，然後 ls -l 看看它們的大小，確認都是 0 bytes，也注意一下時間戳記欄位，剛剛建立的時間應該和現在很接近。

touch 在自動化腳本裡有一個很常見的進階用途：用來建立「鎖定檔案」（lock file）或「旗標檔案」（flag file）。什麼是鎖定檔案？假設你有一個定時執行的備份腳本，你不希望同一時間有兩個備份腳本同時跑（可能造成衝突或資源競爭）。一個常見做法是：腳本啟動時先 touch /tmp/backup.lock，執行完之後 rm /tmp/backup.lock。下一次腳本要啟動時，先用 if [ -f /tmp/backup.lock ]; then 檢查鎖定檔案是否存在，如果存在就代表有另一個實例正在執行，這次就跳過不執行。這個簡單但有效的機制，就是靠 touch 和 rm 來建立和刪除鎖定檔案實現的。在 K8s 的 Init Container 和 readiness probe 裡，也有類似的「用檔案存在與否代表狀態」的設計模式。

🎯 **小練習（mkdir + touch 組合技）**
請完成以下任務，模擬建立 K8s 設定檔：
1. cd ~/my-k8s-project 進入剛才建立的專案目錄
2. touch deployments/nginx.yaml deployments/redis.yaml
3. touch services/nginx-svc.yaml configs/app.conf
4. ls -la deployments/ 確認檔案建立成功
5. 挑戰：touch 一個已存在的檔案，再用 ls -l 觀察時間戳記有沒有更新

提示：touch 已存在的檔案只會更新時間，不會清空內容！`,
    duration: "8",
  },

  // ===== 8. 檔案操作 - cp =====
  {
    title: "cp — 複製檔案與目錄",
    subtitle: "Copy",
    section: "檔案操作",
    content: (
      <div className="space-y-3">
        <div className="grid gap-2">
          {[
            { cmd: "cp source.txt dest.txt", desc: "複製檔案（改名複製）" },
            { cmd: "cp source.txt /backup/", desc: "複製到指定目錄（保留原檔名）" },
            { cmd: "cp -r mydir/ backup/", desc: "-r 複製整個目錄（遞迴）" },
            { cmd: "cp -p source.txt dest.txt", desc: "-p 保留權限和時間戳記" },
            { cmd: "cp *.txt /backup/", desc: "萬用字元，複製所有 .txt 檔案" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-2.5 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-52 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-blue-900/20 border border-blue-700/50 p-3 rounded-lg text-sm">
          <span className="text-blue-400 font-semibold">格式：</span>
          <code className="text-green-300"> cp [選項] 來源 目的地</code>
          <span className="text-slate-400"> — 目的地是目錄時，保留原檔名；是檔名時，改名複製</span>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg mt-3">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>用 <code className="text-green-300">cp ~/k8s-lab/deployments/nginx.yaml ~/k8s-lab/deployments/nginx.yaml.bak</code></li>
            <li>用 <code className="text-blue-300">cp ~/k8s-lab/deployments/*.yaml ~/k8s-lab/configs/</code></li>
            <li>用 <code className="text-purple-300">cp -r ~/k8s-lab ~/k8s-lab-backup</code> 備份整個目錄</li>
          </ol>
        </div>
      </div>
    ),
    notes: `cp 是 copy，複製。這個指令的基本語法是：cp 來源 目的地。先寫你想複製的是什麼（來源），再寫要複製到哪裡去（目的地）。這個「來源在前，目的地在後」的順序，在很多 Linux 指令裡都是一樣的規則，比待會學的 mv 也是同樣順序，記住這個原則就不容易搞混。

目的地有兩種情況：如果目的地是一個已存在的目錄名稱，cp 會把來源檔案複製到那個目錄裡，保留原始檔名。比如 cp notes.txt /backup/，notes.txt 會被複製到 /backup/ 目錄裡，名字還是 notes.txt。如果目的地是一個不存在的檔案名稱，cp 就是「複製並改名」的效果。比如 cp notes.txt notes_backup.txt，就在同一個目錄裡建立一個內容相同的新檔案，名字是 notes_backup.txt。

要複製整個目錄，必須加 -r（recursive，遞迴）選項。如果只寫 cp mydir /backup/，不加 -r，遇到目錄會報錯說「omitting directory」，因為 cp 預設只能複製單個檔案。加了 -r 之後，cp -r mydir /backup/ 就把 mydir 和它裡面所有的檔案、所有子目錄，全部遞迴複製到 /backup/ 裡。

萬用字元 * 是 Linux Shell 非常強大的功能，配合 cp 很好用。cp *.txt /backup/ 的意思是「複製當前目錄下所有副檔名是 .txt 的檔案到 /backup/」。這個 * 叫做萬用字元（wildcard），Shell 會在執行 cp 之前，先把 *.txt 展開成所有符合條件的檔案名稱列表，然後才傳給 cp 執行。你也可以用 cp app-* /backup/ 複製所有以 app- 開頭的檔案，或 cp *.conf /etc/ 複製所有設定檔。

-p 選項是 preserve，保留原始屬性，包含權限（rwx）、擁有者（owner）、所屬群組（group）和時間戳記。平常的 cp 複製出來的檔案，所有者會是執行 cp 的那個帳號，時間戳記是複製當下的時間。加了 -p 就完整保留原始屬性，在做系統備份或遷移資料的時候非常重要，確保備份和原始完全一致。

cp 的幾個常見錯誤和注意事項：

第一，複製目錄忘記加 -r，這是最常見的錯誤。看到「omitting directory」的錯誤就知道要加 -r。

第二，目的地目錄不存在的話，cp 不會自動建立目錄，會報錯。記得先用 mkdir -p 建立好目標目錄再 cp。

第三，如果目的地已存在同名檔案，cp 預設會直接覆蓋，不會詢問確認。如果不確定目的地有沒有同名檔案，可以加 -i（interactive）選項，讓 cp 在覆蓋前先問你確認。

第四，複製大量檔案時可以加 -v（verbose），cp 會顯示每個被複製的檔案名稱，讓你確認執行進度。

現在大家來練習：確保你在 ~/workshop/linux-practice，然後執行 cp notes.txt notes_backup.txt，接著 ls -l 看看兩個檔案，大小應該都是 0（因為是空白檔案），但名字不同，時間戳記也一樣。再試試 mkdir backup 建立一個備份目錄，然後 cp *.txt backup/ 把所有 .txt 檔案複製過去，用 ls backup/ 確認。

說到 cp 在實際工作中的應用，最常見的場景之一是修改設定檔之前先備份原始版本。比如你要修改 /etc/nginx/nginx.conf，在動手修改之前，先執行 sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.bak，這樣如果改壞了，隨時可以 sudo cp /etc/nginx/nginx.conf.bak /etc/nginx/nginx.conf 還原回去。這個「改前先備份」的習慣，是系統管理員的基本自救術，我強烈建議每次修改重要系統設定檔的時候都這樣做。在 K8s 環境，你修改的通常是 YAML 設定檔，Git 版本控制提供了相同的保護機制（修改前 git status，改完 git diff 確認差異，然後 git commit），這和 cp 備份的概念一脈相承。

🎯 **小練習（cp 備份操作）**
請完成以下任務，練習系統管理員的標準備份流程：
1. cd ~/my-k8s-project/deployments 進入部署目錄
2. cp nginx.yaml nginx.yaml.bak 備份設定檔
3. ls -la 確認 .bak 備份檔案已建立
4. mkdir -p ~/backup && cp *.yaml ~/backup/ 把所有 yaml 複製到備份目錄
5. 挑戰：用 cp -r ~/my-k8s-project ~/my-k8s-project-backup 備份整個專案

💡 養成習慣：修改設定檔前一定先 cp 備份！`,
    duration: "9",
  },

  // ===== 9. 檔案操作 - mv + rm =====
  {
    title: "mv / rm — 移動重命名 / 刪除",
    subtitle: "Move & Remove",
    section: "檔案操作",
    content: (
      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-blue-400 font-semibold text-sm">mv — 移動 / 重新命名</p>
          <div className="grid gap-1.5">
            {[
              { cmd: "mv old.txt new.txt", desc: "重新命名（在同目錄移動）" },
              { cmd: "mv file.txt /backup/", desc: "移動到其他目錄" },
              { cmd: "mv dir/ /newlocation/", desc: "移動整個目錄（不需 -r）" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-800/60 p-2 rounded-lg">
                <code className="text-blue-400 font-mono text-sm w-44 flex-shrink-0">{item.cmd}</code>
                <span className="text-slate-300 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-red-400 font-semibold text-sm">rm — 刪除</p>
          <div className="grid gap-1.5">
            {[
              { cmd: "rm file.txt", desc: "刪除單一檔案" },
              { cmd: "rm -f file.txt", desc: "-f 強制刪除（忽略唯讀屬性）" },
              { cmd: "rm *.log", desc: "刪除所有 .log 檔案" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-800/60 p-2 rounded-lg">
                <code className="text-red-400 font-mono text-sm w-44 flex-shrink-0">{item.cmd}</code>
                <span className="text-slate-300 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 p-2 rounded text-xs text-yellow-300">
          ⚡ mv 比 cp + rm 效率高：在同一個磁碟分割區移動檔案，mv 幾乎瞬間完成，只是改目錄記錄
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg mt-3">
          <p className="text-yellow-400 font-bold mb-2">🎯 小練習</p>
          <ol className="text-slate-300 text-sm space-y-1 list-decimal list-inside">
            <li>用 <code className="text-blue-300">mv ~/k8s-lab/deployments/nginx.yaml.bak ~/k8s-lab/nginx-old.yaml</code></li>
            <li>用 <code className="text-blue-300">mv ~/k8s-lab/nginx-old.yaml ~/k8s-lab/configs/</code></li>
            <li>用 <code className="text-red-300">rm ~/k8s-lab/configs/nginx-old.yaml</code> 清理</li>
            <li>用 <code className="text-green-300">ls ~/k8s-lab/configs/</code> 確認結果</li>
          </ol>
        </div>
      </div>
    ),
    notes: `這一頁我們把 mv 和 rm 合在一起講，因為都是很基礎的檔案操作指令。

先說 mv，move，移動。mv 很特別，它一個指令有兩種功能：移動檔案到其他目錄，以及重新命名檔案。

為什麼重新命名也是 mv？這個問題值得解釋一下，因為理解底層原理有助於你記住指令的行為。在 Linux 的檔案系統底層，「重新命名」本質上就是「修改目錄項目裡的名稱記錄」，而「移動」也是「修改目錄項目，把它從一個目錄移到另一個」。兩個操作的底層機制非常相似，都是在修改目錄的元數據，所以 Linux 就用同一個指令 mv 來完成。Linux 系統沒有單獨的 rename 指令（雖然有些發行版有安裝 rename 工具，但那是額外的，不是核心指令）。

mv 同樣是「來源在前，目的地在後」的語法。mv old.txt new.txt 是在同一個目錄裡重命名，old.txt 就變成 new.txt 了，舊名字消失，新名字出現。mv file.txt /backup/ 是把檔案移到 /backup/ 目錄裡，名字保持不變。

mv 移動整個目錄不需要加 -r！這點和 cp 不一樣。cp 需要 -r 是因為要把所有內容複製一遍，很費時間。但 mv 在同一個磁碟分割區內移動，只是修改目錄結構的記錄，不需要真正複製資料，所以不需要 -r，幾乎是瞬間完成，哪怕目錄裡有幾十 GB 的檔案。

mv 一個很重要的特性是：如果來源和目的地在同一個磁碟分割區（partition），mv 幾乎瞬間完成，不管檔案多大，因為它只是改了一個「指針」，沒有移動實際資料。但如果跨越不同的磁碟或分割區，mv 就需要先把資料完整複製一份到新位置，再刪除原始位置，速度就受到 I/O 效能限制了。

mv 操作是不可逆的（和 rm 一樣），沒有垃圾桶。如果你把目的地同名的檔案覆蓋了，舊檔案就消失了。加 -i 選項可以讓 mv 在覆蓋前先詢問確認。

接下來說 rm，Remove，刪除檔案。

rm 刪除單個檔案：rm file.txt。-f 是 force 強制刪除，即使檔案是唯讀屬性也直接刪，不詢問確認。rm *.log 用萬用字元刪除所有 .log 檔案。

rm 的幾個常見錯誤：

一是誤用萬用字元。rm *.log 是安全的，但如果你不小心打成 rm * .log（多了一個空格），這會展開成「刪除當前目錄所有檔案，以及一個叫 .log 的檔案」，把整個目錄的內容都刪了！所以要仔細確認萬用字元的位置。

二是誤刪重要檔案。在刪除之前，把 rm 換成 ls 先確認一下：ls *.log 先看看會影響哪些檔案，確認沒問題再 rm *.log。

現在大家來練習：先建立一些測試檔案 touch test1.txt test2.txt test3.log，然後 mv test1.txt renamed.txt 把 test1.txt 重命名，ls 確認；再試 mv renamed.txt /tmp/ 移動檔案，ls 和 ls /tmp/ 確認；最後 rm test3.log 刪除 log 檔案，ls 確認已消失。

補充說一個 mv 的實際使用場景：版本備份。在 Linux 伺服器上有時候你需要快速替換一個設定檔，比如部署新版的 nginx.conf，但又想保留舊版本。常見的流程是：先 mv /etc/nginx/nginx.conf /etc/nginx/nginx.conf.20260217（改名加上日期，相當於備份舊版），再把新的 nginx.conf 複製過來。這樣舊版本還在，只是名字改了，需要還原的時候再 mv 回去就好。

最後提醒一個常被新手忽略的細節：mv 和 rm 不像 cp 有 -r 的需求差異。mv 整個目錄不需要 -r，直接 mv dir/ 就好；rm 整個目錄才需要 -r（或 -rf）。記住這個不對稱性，可以避免很多困惑。

🎯 **小練習（mv + rm 綜合練習）**
請完成以下任務，整合今天學的所有指令：
1. cd ~ && touch old-file.txt 建立測試檔案
2. mv old-file.txt new-file.txt 重新命名
3. mkdir -p ~/archive && mv new-file.txt ~/archive/ 移動到 archive 目錄
4. ls ~/archive/ 確認檔案已移動
5. rm ~/archive/new-file.txt 刪除檔案
6. rmdir ~/archive 刪除空目錄

🏆 **今日綜合挑戰**
用一行指令完成：建立 ~/test-project/{src,docs,bin} 目錄結構，然後在每個目錄建立一個 README.txt 檔案！

提示：可以用 mkdir -p 搭配 touch 完成！`,
    duration: "8",
  },

  // ===== 10. 休息 =====
  {
    title: "☕ 休息時間",
    subtitle: "10 分鐘",
    section: "休息",
    content: (
      <div className="text-center space-y-6">
        <p className="text-6xl">☕ 🧘</p>
        <p className="text-2xl text-slate-300">已學完：目錄和檔案操作！</p>
        <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto text-left text-sm">
          <div className="bg-slate-800/50 p-4 rounded-xl">
            <p className="text-green-400 font-semibold mb-2">✅ 已完成</p>
            <ul className="text-slate-300 space-y-1">
              <li>cd — 切換目錄</li>
              <li>ls -lah — 列出目錄</li>
              <li>pwd — 確認位置</li>
              <li>mkdir -p — 建立目錄</li>
              <li>touch — 建立檔案</li>
              <li>cp / mv / rm — 操作檔案</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">🔜 接下來</p>
            <ul className="text-slate-300 space-y-1">
              <li>cat / less — 查看內容</li>
              <li>head / tail — 頭尾查看</li>
              <li>wc — 統計行數字數</li>
              <li>nano — 編輯器</li>
              <li>grep / find — 搜尋</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `好！前半段的課程到這裡畫上一個完整的句點，大家辛苦了！

讓我們來快速盤點一下，這段時間你們學了哪些東西，這些東西在實際工作上有多重要：

第一組：目錄瀏覽指令。cd 切換目錄，你現在知道絕對路徑和相對路徑的差異，知道 cd ~ 回家目錄、cd - 回上一個位置；ls -lah 列出目錄內容，包含隱藏檔和詳細資訊；pwd 確認目前位置；Tab 自動補全和方向鍵翻歷史。這幾個指令是你在 Linux 終端機上「導航」的基礎，你每天工作都會用到，多到你甚至不會特別注意自己在用它們。

第二組：目錄和檔案操作指令。mkdir -p 建立多層目錄；touch 建立空白檔案；cp 複製（複製目錄要加 -r）；mv 移動和重命名（不需要 -r）；rm 刪除（要小心！）。這些指令讓你可以管理你的工作空間，就像在 Windows 的檔案總管裡操作一樣，只是換成文字指令的方式。

我要特別強調一點：你今天學的這些，不是「要考試的東西」，而是你每天上班都要用到的日常工具。就像你學騎自行車，一開始要想「左腳踩下，右腳抬起，保持平衡」，但練久了就變成直覺，不需要思考了。Linux 指令也一樣，現在你可能還需要想一下才能輸入，但多用幾週之後，這些指令就會變成你的肌肉記憶。

有幾個問題可以拿來測試自己是否真的記住了：你能不看投影片，從家目錄開始，建立一個三層的目錄結構嗎？你能複製一個目錄到 /tmp/ 嗎？你知道 rm -rf 的危險性，以及如何保護自己嗎？如果這幾個問題你都能做到，那前半段的學習目標就達成了。

休息 10 分鐘，去補充一下水分、上廁所、活動一下身體，讓大腦休息一下。人類的注意力很難連續集中超過一小時，適時休息反而能讓學習效率更高。

回來之後，我們進入下一個主題：「查看和編輯檔案的內容」。這包含了非常實用的工具：cat（快速看內容）、less（分頁瀏覽）、head/tail（看頭尾）、wc（統計）、以及 nano 編輯器。這些工具在你做系統管理、除錯（debug）、查看 log 的時候幾乎天天用到。

下半段還有兩個很強大的搜尋工具：grep 和 find，這兩個是進階但非常實用的技能，學會了之後你的工作效率會大幅提升。

好好休息，10 分鐘後見！

順帶一提，休息時間也是消化的好時機。你的大腦在你不刻意思考的時候，其實還在默默整理剛剛學到的東西，心理學上叫「離線學習（offline learning）」。所以別一直盯著筆記複習，反而去走走、喝杯水，讓大腦自然鞏固記憶效果更好。

如果你在休息時有想到任何剛才沒搞懂的問題，現在可以拿筆記下來，等一下舉手問我；或者休息的時候直接過來找我問也沒問題，我就在教室裡。

回來之後的下半段，我們學的工具更接近「日常工作」的場景，特別是 tail -f 追蹤 log 和 grep 搜尋，這兩個你往後維運系統幾乎天天都會用到。

提醒各位：休息時間記得活動一下身體，尤其是脖子和肩膀，長時間盯著螢幕打指令很容易僵硬。回來後精神好，學習效率更高。如果休息期間有任何剛才沒搞清楚的問題，把它記下來，回來後直接舉手，我們再一起看一遍。心理學研究顯示，適當的休息能幫助大腦鞏固短期記憶，所以好好放鬆這十分鐘也是學習的一部分，不是在偷懶！

利用休息空檔，我多說兩句關於學習技巧的事。很多人學指令的時候，習慣把所有指令抄在筆記本上，覺得抄了就等於記住了。但其實效果遠不如「主動練習」——自己動手打指令，犯錯，找到原因，再試一遍。這種「嘗試-錯誤-修正」的迴圈，才是真正把知識刻進大腦的方式。

學 Linux 指令有個著名的「七次規則」：你需要在一定時間內主動使用一個指令至少七次，才能把它轉化為長期記憶。所以今天下午學完這些指令，回家後也要找機會用，比如管理自己電腦上的檔案（如果有 Linux 或 Mac 環境的話），或者在課程提供的練習機器上繼續操作。

好，休息吧，十分鐘後繼續！

趁這個空檔再說一個對往後學習很有幫助的資源：Linux 的 man page（手冊頁面）。每個指令都有詳細的說明文件，直接在終端機輸入 man ls、man cp、man grep 就能看到那個指令的完整說明：所有選項、參數格式、使用範例。man page 是最權威的第一手資料，比任何教學文章都準確，因為它就是指令本身隨附的官方說明。不知道某個選項的意思？man 一下就知道。不確定指令有哪些功能？man 比 Google 快。另外，很多指令也支援 --help 選項，比如 ls --help，輸出比 man page 更簡短，適合快速查詢。從今天起，養成「遇到不確定就查 man」的習慣，這是讓你越來越獨立解決問題的關鍵能力。`,
    duration: "10",
  },

  // ===== 11. 檔案內容 - cat =====
  {
    title: "cat — 顯示檔案全部內容",
    subtitle: "Concatenate",
    section: "檔案內容查看",
    content: (
      <div className="space-y-3">
        <div className="grid gap-2">
          {[
            { cmd: "cat file.txt", desc: "把整個檔案內容輸出到終端機" },
            { cmd: "cat -n file.txt", desc: "-n 每行前面加上行號" },
            { cmd: "cat file1.txt file2.txt", desc: "連續輸出多個檔案（cat = concatenate）" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-2.5 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-48 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-3 text-sm">
          <div className="bg-green-900/20 border border-green-700/50 p-3 rounded-lg">
            <p className="text-green-400 font-semibold mb-1">✅ 適合用 cat</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 短的設定檔（幾十行以內）</li>
              <li>• 快速確認檔案內容</li>
              <li>• 合併多個小檔案</li>
            </ul>
          </div>
          <div className="bg-red-900/20 border border-red-700/50 p-3 rounded-lg">
            <p className="text-red-400 font-semibold mb-1">❌ 不適合用 cat</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 幾千行的大檔案</li>
              <li>• 需要搜尋內容</li>
              <li>• 需要上下捲動閱讀</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    code: `$ cat /etc/hostname
server01

$ cat -n /etc/hosts
     1	127.0.0.1   localhost
     2	127.0.1.1   server01
     3	
     4	# IPv6
     5	::1         localhost`,
    notes: `歡迎回來！休息得還好嗎？我們繼續，進入下一個主題：查看檔案內容。

cat 是 concatenate（串連）的縮寫，顧名思義是把多個檔案串連起來輸出。不過在實際工作中，大多數時候我們用 cat 是為了快速查看單個檔案的全部內容，把它印到螢幕上，一眼看完。

最基本的用法：cat file.txt，就把那個檔案的所有內容，從第一行到最後一行，全部一次性輸出到終端機。如果檔案很短（幾十行或幾百行以內），這非常方便，直接看就好，不需要任何操作。

cat -n 加上 -n 選項，會在每一行前面加上行號。這在你需要和別人討論「第幾行有問題」，或者除錯時定位特定行的時候非常有用。比如 cat -n /etc/nginx/nginx.conf 看 nginx 設定檔，並且標出每一行的行號。

cat 什麼時候適合用，什麼時候不適合用？

適合用 cat 的情況：短的設定檔（幾十行以內），快速確認一個小檔案的內容，以及把多個小檔案合併成一個。

不適合用 cat 的情況：幾千行甚至幾萬行的大型檔案，比如 log 日誌。如果你 cat 一個幾千行的 log 檔，整個終端機都會被刷滿，根本沒辦法看，而且你也沒辦法往上翻找特定內容。這種情況要用 less，我們下一頁就學。

cat 有一個很實用的用途是合併檔案。cat file1.txt file2.txt > combined.txt，這個 > 符號是輸出重導向（output redirection），意思是「把指令的輸出寫到檔案，而不是印到螢幕」。所以這行指令就把 file1 和 file2 的內容依序串連，寫到 combined.txt 這個新檔案裡。重導向是 Shell 非常重要的概念，之後還會再提到。

在系統管理中，cat 最常用來快速查看各種系統設定檔和資訊檔：

cat /etc/hostname 看主機名稱（這個檔案就一行）；cat /etc/hosts 看本機的域名對應（hostname resolution）；cat /etc/os-release 看作業系統版本、發行版名稱等資訊；cat /proc/cpuinfo 看 CPU 的詳細資訊（型號、核心數、頻率等，這是直接從 Linux 核心讀取的資訊）；cat /proc/meminfo 看記憶體使用狀況。

另外一個 cat 的實用技巧：cat 後面不接任何檔案，直接執行，這時 cat 會等你從鍵盤輸入，你輸入什麼就輸出什麼（每按一次 Enter 立刻輸出）。這本身沒什麼用，但配合重導向就很有用：cat > newfile.txt，然後輸入內容，按 Ctrl+D 結束，就把你輸入的內容寫到 newfile.txt 了。這是一個不用開 nano 就能快速建立簡單內容檔案的方法。

大家現在試試：cat /etc/hostname 看你的主機名稱，cat /etc/os-release 看作業系統版本資訊，感受一下 cat 輸出短檔案的效果。`,
    duration: "6",
  },

  // ===== 12. 檔案內容 - less =====
  {
    title: "less — 分頁瀏覽",
    subtitle: "滾動查看大型檔案",
    section: "檔案內容查看",
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
          <p className="text-blue-400 font-semibold mb-3">基本操作鍵</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[
              { key: "空白鍵 / f", action: "下一頁" },
              { key: "b", action: "上一頁" },
              { key: "↑↓ 方向鍵", action: "上下一行" },
              { key: "q", action: "離開 less" },
              { key: "/關鍵字", action: "向下搜尋" },
              { key: "?關鍵字", action: "向上搜尋" },
              { key: "n", action: "下一個搜尋結果" },
              { key: "G", action: "跳到檔案末尾" },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 items-center">
                <kbd className="bg-slate-700 text-blue-300 px-2 py-0.5 rounded text-xs w-28 flex-shrink-0 text-center">{item.key}</kbd>
                <span className="text-slate-300">{item.action}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-sm">
          <span className="text-yellow-400 font-bold">less vs more：</span>
          <span className="text-slate-300"> less 比 more 強大（可以往上捲動），名字是個雙關語「less is more」</span>
        </div>
      </div>
    ),
    code: `$ less /var/log/syslog
# 進入分頁瀏覽模式
# 用空白鍵往下翻
# 輸入 /error 搜尋錯誤
# 按 n 跳到下一個 error
# 按 q 離開`,
    notes: `less 是解決「cat 塞爆螢幕」問題的工具，它讓你以分頁的方式瀏覽大型檔案——一次看一頁的內容，可以上下捲動，還可以搜尋，不會把整個檔案一次刷出來。

less 的名字是一個雙關語：「less is more」（少即是多），它的前身叫做 more，而 less 比 more 更強大（可以往上捲動，more 只能往下），所以叫做 less。這是工程師的幽默。

使用方式：less 加上檔案路徑，比如 less /var/log/syslog，就進入 less 的瀏覽介面。介面會佔滿整個終端機視窗，就像進入了一個閱讀模式。

在 less 裡，你用這些按鍵操作：

移動方式：空白鍵（Space）或 f 鍵往下翻一頁；b 鍵往上翻一頁；方向鍵 ↑↓ 一行一行移動；Enter 鍵也可以往下移一行。g 小寫跳到檔案最開頭（第 1 行）；G 大寫跳到檔案最末尾（最後一行）。如果檔案很長，G 讓你直接跳到最新的 log 記錄，不需要一頁一頁翻到底。

搜尋功能是 less 最強大的地方：輸入 /（斜線）加上關鍵字，比如 /error，按 Enter，less 會找到第一個包含 error 的行並跳過去，高亮顯示那個關鍵字。然後你可以按 n（next）跳到下一個符合的行，按 N（大寫）往回跳到上一個符合的行。也可以用 ?（問號）開頭做反向搜尋。

q 是離開 less，回到命令提示字元。這是最重要的按鍵，很多新手第一次用 less 不知道怎麼出來，按了一堆鍵沒反應，其實只要按 q 就好了。

less 的一個進階功能：你可以在 less 裡按 F（大寫）進入「跟隨模式」（follow mode），效果類似 tail -f，會即時顯示新加入的內容。按 Ctrl+C 退出跟隨模式。

less 還有一個很方便的地方：它是管道（pipe）友好的。比如你可以 cat /var/log/syslog | less，或者 grep "error" /var/log/syslog | less，把 grep 過濾的結果用 less 分頁瀏覽。這是非常常見的工作方式。

在實際工作中，less 是查看 log 檔最常用的工具。一個真實的 Web 伺服器可能每天產生幾萬行甚至幾百萬行的 access log，你不可能用 cat 輸出，一定要用 less，再配合搜尋功能找到你需要的部分。

大家現在試試：less /var/log/syslog 看一下系統日誌（如果需要就加 sudo），先按空白鍵往下翻幾頁感受一下，然後輸入 /error 搜尋看看有沒有錯誤，按 n 翻找幾個，最後按 q 離開。這個流程請務必跟著操作一遍，讓手指記住這些按鍵。

在 K8s 的場景裡，你不是只有靜態的日誌檔案可以看，還可以直接用 kubectl logs 查看 Pod 的即時日誌。而 kubectl logs 的很多選項和 less 的用法概念是相通的：kubectl logs my-pod | less 讓你用 less 瀏覽 Pod 日誌；kubectl logs my-pod | grep "ERROR" 過濾錯誤；kubectl logs -f my-pod 類似 tail -f，即時追蹤 Pod 的日誌輸出。這些工具組合讓你在排查 K8s 問題的時候如魚得水。

另外補充：有些系統的 /var/log/syslog 需要 root 權限才能讀取，這時候用 sudo less /var/log/syslog。如果你看到「Permission denied」的錯誤，就是缺少了 sudo。這是一個很好的提醒：Linux 的權限機制確實在運作，並不是所有東西都能隨意查看，這也保護了系統安全。`,
    duration: "7",
  },

  // ===== 13. 檔案內容 - head/tail =====
  {
    title: "head / tail — 查看開頭與結尾",
    subtitle: "快速查看 log 的最新記錄",
    section: "檔案內容查看",
    content: (
      <div className="space-y-3">
        <div className="grid gap-2">
          {[
            { cmd: "head file.txt", desc: "顯示前 10 行（預設）" },
            { cmd: "head -n 20 file.txt", desc: "-n 指定顯示前 N 行" },
            { cmd: "tail file.txt", desc: "顯示最後 10 行（預設）" },
            { cmd: "tail -n 50 file.txt", desc: "-n 顯示最後 N 行" },
            { cmd: "tail -f /var/log/syslog", desc: "-f 即時追蹤（新內容自動顯示）" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-2.5 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-44 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-green-900/20 border border-green-700/50 p-3 rounded-lg text-sm">
          <span className="text-green-400 font-semibold">⭐ tail -f 超好用：</span>
          <span className="text-slate-300"> 在終端機即時追蹤 nginx access log、應用程式日誌，有新請求就立刻看到</span>
        </div>
      </div>
    ),
    notes: `head 和 tail 是一對互補的工具：head 看開頭，tail 看結尾。這兩個指令設計的出發點很實際，因為在很多情況下，你不需要看整個檔案，只需要看頭幾行或尾幾行就夠了。

先說 head。head file.txt 預設顯示檔案的前 10 行。加 -n 選項可以指定行數：head -n 20 file.txt 顯示前 20 行，head -n 5 file.txt 只顯示前 5 行。

head 的典型使用場景是確認一個不熟悉的檔案的格式。比如你拿到一個 CSV 資料檔，head -n 5 file.csv 先看前 5 行，確認第一行是不是標頭（header）、有哪些欄位、用什麼分隔符號。或者一個 log 檔案，head 看看它的格式是怎樣的（時間格式、欄位順序等）。

再說 tail。tail file.txt 預設顯示檔案的最後 10 行。tail -n 50 顯示最後 50 行。tail 的最大用途是查看 log 的最新記錄。為什麼？因為 log 檔案的工作方式是不斷在末尾追加新的記錄，最新的 log 條目永遠在檔案最後面。所以 tail 就是「快速看最新日誌」的標準工具。

你可能會說，直接 less 然後按 G 跳到末尾也行啊？的確，但 tail 更快、更直接，適合你只想看最近幾筆記錄的時候。

最有價值的是 tail -f！-f 是 follow（跟隨、追蹤）的意思。tail -f /var/log/nginx/access.log，程式啟動後會顯示檔案末尾的幾行，然後保持等待狀態。只要這個 log 檔案有新的內容寫入，就立刻顯示在你的終端機上，就像即時串流一樣。

tail -f 在實際工作中的使用場景非常廣泛：

當你剛啟動一個 Web 伺服器，想確認它是否正常接受請求，tail -f access.log，然後在瀏覽器訪問那個網站，你可以即時看到每一個 HTTP 請求的記錄，包括來源 IP、請求的 URL、HTTP 狀態碼（200 OK、404 Not Found、500 Server Error）。

當應用程式出現問題，tail -f app.log 或 tail -f error.log，讓你即時看到最新的錯誤訊息，比每隔幾秒手動 cat 一次快多了。

在 CI/CD 部署的時候，tail -f deploy.log 看部署進度，確認每個步驟是否成功。

按 Ctrl+C 終止 tail -f，回到命令提示字元。

還有一個進階用法：tail -f 可以同時追蹤多個檔案：tail -f /var/log/nginx/access.log /var/log/nginx/error.log。每個檔案的新內容都會顯示，並且在前面標注是哪個檔案的輸出，讓你同時監控多個日誌。

大家現在試試：tail -n 20 /var/log/syslog 看最近的系統日誌 20 行，感受一下這和 cat 及 less 的差異——cat 是全部印出來，less 是互動式瀏覽，tail 是直接看最後幾行，各有各的使用場景。`,
    duration: "7",
  },

  // ===== 14. 檔案內容 - wc =====
  {
    title: "wc — 統計工具",
    subtitle: "Word Count",
    section: "檔案內容查看",
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { cmd: "wc file.txt", desc: "輸出：行數、字數、字元數" },
            { cmd: "wc -l file.txt", desc: "-l 只顯示行數（最常用）" },
            { cmd: "wc -w file.txt", desc: "-w 只顯示字數" },
            { cmd: "wc -c file.txt", desc: "-c 只顯示字元數（bytes）" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-2.5 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-40 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl text-sm">
          <p className="text-blue-400 font-semibold mb-2">常見組合</p>
          <div className="space-y-1.5 font-mono text-xs">
            <div><code className="text-green-400">cat /var/log/syslog | wc -l</code><span className="text-slate-400"> → log 有幾行</span></div>
            <div><code className="text-green-400">ls /etc | wc -l</code><span className="text-slate-400"> → /etc 有幾個檔案</span></div>
            <div><code className="text-green-400">grep "error" app.log | wc -l</code><span className="text-slate-400"> → 有幾個 error</span></div>
          </div>
        </div>
      </div>
    ),
    code: `$ wc /etc/hosts
  9  27 225 /etc/hosts
# 9行, 27個字, 225個字元

$ wc -l /var/log/syslog
4823 /var/log/syslog`,
    notes: `wc 是 Word Count，原本是統計英文文件字數的工具，但在 Linux 系統管理中，最常用的是它的行數統計功能。雖然 wc 本身很簡單，但配合其他指令使用時非常強大。

wc 的基本輸出是三個數字：行數（lines）、字數（words）、字元數（characters）。比如 wc /etc/hosts 可能輸出「9 27 225 /etc/hosts」，代表這個檔案有 9 行、27 個「詞」（以空白字元分隔的連續字串）、225 個字元。

但大多數時候，我們只需要其中一個數字，所以用選項來指定：

wc -l 只顯示行數，這是最常用的。wc -l /var/log/syslog 告訴你這個 log 有幾千行，讓你評估日誌量有多大，決定要用 cat 還是 less。wc -w 只顯示字數。wc -c 只顯示字元數（bytes），這在確認檔案大小或者腳本裡比較兩個字串長度時有用。

現在我要介紹一個非常重要的 Shell 概念：管道（pipe），符號是 |（豎線，通常在鍵盤的 Backslash 旁邊）。管道的作用是把「左邊指令的輸出」當作「右邊指令的輸入」，讓多個指令串連起來協同工作。這是 Unix/Linux 哲學的核心精神之一：每個工具只做好一件事，但可以串在一起做複雜的事。

wc 配合 pipe 的典型用法：

ls /etc | wc -l：先用 ls 列出 /etc 目錄的所有條目，每個條目一行，然後 | 把這些輸出送給 wc -l 數行數，結果就是 /etc 裡有幾個檔案/目錄。這比 ls /etc 再用眼睛數要快得多。

grep "ERROR" app.log | wc -l：先用 grep 找出 log 裡包含 ERROR 的行，然後 wc -l 數出有幾行，就知道今天總共產生了幾個 ERROR 等級的日誌。這在每天監控系統健康狀況時很實用。

cat /etc/passwd | wc -l：數 /etc/passwd 有幾行，就知道系統有幾個帳號（每個帳號在 /etc/passwd 裡佔一行）。

find . -name "*.py" | wc -l：先用 find 列出當前目錄下所有 .py Python 檔案，再數有幾個。

管道可以串連很多層，比如 cat /var/log/syslog | grep "error" | grep -v "DEBUG" | wc -l，先過濾出含 error 的行，再過濾掉 DEBUG 的，最後數有幾行。這種多層過濾加統計的模式在 Linux 系統管理中非常常見。

大家試試看：輸入 wc -l /etc/passwd，看看你的系統有幾個使用者帳號；再輸入 ls /etc | wc -l，數數 /etc 下有幾個條目，感受一下 pipe 的用法。`,
    duration: "5",
  },

  // ===== 15. nano - 開啟與基本操作 =====
  {
    title: "nano 編輯器 — 開啟與基本操作",
    subtitle: "在終端機裡編輯檔案",
    section: "nano 編輯器",
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { cmd: "nano filename.txt", desc: "開啟或建立檔案（檔案不存在則新建）" },
            { cmd: "nano /etc/nginx/nginx.conf", desc: "開啟指定路徑的檔案" },
            { cmd: "sudo nano /etc/hosts", desc: "以管理員權限編輯系統設定檔" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-3 rounded-lg">
              <code className="text-green-400 font-mono text-sm w-52 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-900/60 border border-slate-700 p-4 rounded-xl font-mono text-xs">
          <div className="text-slate-400 mb-2">nano 介面示意：</div>
          <div className="text-white">  GNU nano 6.2       notes.txt</div>
          <div className="text-green-300 mt-1">Hello, Linux!</div>
          <div className="text-green-300">This is my first file.</div>
          <div className="text-slate-500 mt-3 border-t border-slate-700 pt-2">
            ^G Help  ^O Write Out  ^W Where Is  ^K Cut  ^T Execute
          </div>
        </div>
      </div>
    ),
    notes: `好，我們進入 nano 編輯器的學習。這一頁先說「什麼是 nano」以及「如何開啟和基本輸入」，下一頁說「快捷鍵」。

先說為什麼要學命令列文字編輯器。當你連到遠端伺服器時（比如 AWS、GCP 上的虛擬機、公司的生產伺服器），通常只有一個純文字的 SSH 終端機連線，沒有圖形介面，沒有辦法開啟 VS Code 圖形界面、沒辦法用記事本。如果你需要修改伺服器上的設定檔（比如 nginx 的 nginx.conf、環境變數的 .env 檔、定時任務的 crontab），唯一能用的就是命令列文字編輯器。

Linux 世界裡有三個主流的命令列文字編輯器：

nano：最簡單，最容易上手，底部有快捷鍵提示，進去就可以打字，適合初學者。

vim（vi improved）：Linux 上最強大、最廣泛使用的編輯器。功能強大、速度快、有大量外掛，是很多專業工程師的主力工具。但學習曲線非常陡峭：有「普通模式（Normal mode）」和「插入模式（Insert mode）」的概念，新手第一次進去常常不知道怎麼輸入文字，也不知道怎麼離開（答案是先按 Esc，再輸入 :q! 強制退出），非常令人困惑。

emacs：另一個強大的編輯器，功能甚至比 vim 更廣，可以做到幾乎任何事情，但也有很高的學習曲線。

今天我們學 nano，它對初學者最友善，而且在需要快速修改一個設定檔的時候完全夠用。等你對 Linux 越來越熟悉之後，可以再去學 vim，它的高效率操作方式在長期使用後確實很有生產力。

開啟 nano 的方式：輸入 nano 加上你要編輯的檔案路徑。如果那個檔案已存在，nano 就直接開啟它；如果不存在，nano 就建立一個新的空白檔案（但要到你存檔的時候才真正寫到磁碟）。

比如 nano ~/workshop/linux-practice/hello.txt，就開啟（或建立）那個路徑的檔案。

進入 nano 之後的介面：最上方顯示「GNU nano」版本和目前編輯的檔案名稱。中間是編輯區，你可以直接輸入文字，方向鍵移動游標。最下方有一列快捷鍵提示，顯示常用的 Ctrl 組合鍵（^符號代表 Ctrl，比如 ^G 是 Ctrl+G，^X 是 Ctrl+X）。

nano 和 vim 最大的差別在這裡：進入 nano 之後，你立刻就可以打字，不需要先切換什麼模式，和普通的記事本一樣直覺。這對新手非常友好。

如果你要編輯需要 root 權限的系統設定檔，記得加 sudo：sudo nano /etc/hosts。沒有 sudo 的話，nano 可以開啟檔案讀取內容，但存檔的時候會失敗，說沒有寫入權限。

大家現在來試試：輸入 nano ~/workshop/linux-practice/hello.txt，進入 nano，然後輸入幾行文字，比如你的名字、今天的日期、一些想說的話。先不要存檔，下一頁學了快捷鍵再存。

補充一個重要的觀念：nano 只是「最容易上手的」命令列編輯器，不代表它是「最好的」。隨著你的 Linux 使用經驗增加，很多人會轉移到 vim。vim 的學習曲線雖然陡峭，但熟練之後速度快、功能強、幾乎在任何 Linux 系統上都預設安裝（甚至在很小的容器 Image 裡也有 vi）。在 K8s 的 Pod 容器裡，你用 kubectl exec 進去的時候，可能沒有 nano，但幾乎一定有 vi（或 vim）。現在先學 nano 打好基礎，之後有興趣可以搜尋「vim 基本操作」，從 vimtutor（vim 內建的互動教學）開始。最重要的 vim 指令：進去後按 i 進入插入模式就能輸入；按 Esc 回到普通模式；輸入 :wq 存檔並離開；輸入 :q! 不存檔強制離開。記住這幾個，至少能讓你在緊急情況下不會被困在 vim 裡出不來。`,
    duration: "8",
  },

  // ===== 16. nano - 快捷鍵 =====
  {
    title: "nano 常用快捷鍵",
    subtitle: "Ctrl 組合鍵操作",
    section: "nano 編輯器",
    content: (
      <div className="space-y-3">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { key: "Ctrl + O", desc: "Write Out — 儲存（存檔）", color: "text-green-400", important: true },
            { key: "Ctrl + X", desc: "Exit — 離開 nano", color: "text-red-400", important: true },
            { key: "Ctrl + W", desc: "Where Is — 搜尋文字", color: "text-blue-400", important: true },
            { key: "Ctrl + K", desc: "Cut — 剪下整行", color: "text-yellow-400", important: false },
            { key: "Ctrl + U", desc: "Uncut — 貼上（在新位置）", color: "text-yellow-400", important: false },
            { key: "Ctrl + G", desc: "Get Help — 顯示說明", color: "text-purple-400", important: false },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 p-2.5 rounded-lg ${item.important ? 'bg-slate-700/80 border border-slate-500' : 'bg-slate-800/50'}`}>
              <kbd className={`${item.color} font-mono text-sm font-bold w-24 flex-shrink-0`}>{item.key}</kbd>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-green-900/20 border border-green-700/50 p-3 rounded-lg text-sm">
          <span className="text-green-400 font-bold">儲存流程：</span>
          <span className="text-slate-300"> Ctrl+O → Enter 確認檔名 → 檔案已儲存，可繼續編輯</span>
        </div>
      </div>
    ),
    notes: `好，繼續在 nano 裡頭，學習如何操作。如果你現在還在剛才開啟的那個 nano 檔案，很好，我們直接在裡面學這些快捷鍵。如果不小心關掉了，重新輸入 nano ~/workshop/linux-practice/hello.txt 再開一次。

nano 的快捷鍵全部都是 Ctrl 鍵加上一個字母。在 nano 的介面裡，底部提示列用 ^ 符號代表 Ctrl，所以 ^O 就是 Ctrl+O，^X 就是 Ctrl+X，以此類推。

最重要的三個快捷鍵，你一定要記：

第一個：Ctrl+O（Write Out，寫出、儲存）。按下 Ctrl+O 之後，nano 在底部會出現一個提示，問你要儲存的檔案名稱，預設就是你開啟時指定的那個檔名。直接按 Enter 確認就可以了，nano 會把目前的內容寫到那個檔案。存檔之後，你仍然留在 nano 編輯介面，可以繼續修改。

第二個：Ctrl+X（Exit，離開）。按下之後就離開 nano，回到命令提示字元。如果你有還沒儲存的修改，nano 會先問你要不要存：出現「Save modified buffer?」的提示，按 Y 是儲存後離開，按 N 是放棄修改直接離開（修改的內容消失），按 Ctrl+C 是取消（不離開，繼續留在 nano）。如果你什麼都沒改，Ctrl+X 直接離開，不問。

第三個：Ctrl+W（Where Is，搜尋）。在 nano 裡按 Ctrl+W 然後輸入關鍵字，nano 會找到第一個符合的位置並把游標移過去，同時高亮顯示。再按 Ctrl+W 加同樣關鍵字（或按方向鍵），可以繼續找下一個。這是在 nano 裡搜尋文字的方式，相當於其他編輯器的 Ctrl+F。

其他有用的快捷鍵：

Ctrl+K 是 Cut，剪下目前這一行的所有內容（整行包含換行符），剪下後這一行就消失了。Ctrl+U 是 Uncut（貼上），把最後一次 Ctrl+K 剪下的內容貼到游標所在位置。這兩個組合可以用來移動整行：Ctrl+K 剪下，移到目標位置，Ctrl+U 貼上。

Ctrl+G 是 Get Help，顯示完整的 nano 說明，列出所有快捷鍵。如果你忘了某個快捷鍵，可以用這個查。

實際工作流程提示：在真正的工作中，你通常是這樣用 nano 的。比如要修改 /etc/nginx/nginx.conf：sudo nano /etc/nginx/nginx.conf，進去之後用方向鍵定位，或用 Ctrl+W 搜尋要修改的地方，直接修改文字，修改完 Ctrl+O 存檔（按 Enter 確認），然後 Ctrl+X 離開。整個流程通常不超過一分鐘。

一個常見錯誤：很多人在伺服器上修改設定檔，nano 開啟後忘記加 sudo，修改了內容但存不了（因為沒有寫入權限），然後不知道怎麼辦。解決方式是：Ctrl+X → N 放棄修改離開 → 重新 sudo nano 正確開啟 → 再修改一次。或者 Ctrl+O 存到 /tmp 下的臨時位置，離開後再用 sudo cp 複製到正確位置。

好，現在大家把剛才輸入的文字存起來：按 Ctrl+O，底部出現提示，直接按 Enter 確認檔名，看到「Wrote X lines」就代表存成功了；然後按 Ctrl+X 離開。回到命令提示字元後，輸入 cat ~/workshop/linux-practice/hello.txt，確認你剛才寫的內容有成功儲存。`,
    duration: "7",
  },

  // ===== 17. 實作 =====
  {
    title: "🔨 實作：建立目錄結構",
    subtitle: "實際動手建立一個完整的專案目錄",
    section: "實作練習",
    content: (
      <div className="space-y-3">
        {[
          { step: "1", cmd: "mkdir -p ~/workshop/myproject/{src,docs,tests}", desc: "一次建立完整目錄結構" },
          { step: "2", cmd: "nano ~/workshop/myproject/README.md", desc: "建立 README 檔案，輸入專案說明" },
          { step: "3", cmd: "touch ~/workshop/myproject/src/main.sh", desc: "建立一個空的腳本檔" },
          { step: "4", cmd: "ls -la ~/workshop/myproject/", desc: "確認目錄結構建立正確" },
          { step: "5", cmd: "cat ~/workshop/myproject/README.md", desc: "確認 README 內容已儲存" },
          { step: "6", cmd: "ls -R ~/workshop/myproject/", desc: "-R 遞迴列出所有子目錄和檔案" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 bg-slate-800/60 p-2.5 rounded-lg">
            <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">{item.step}</span>
            <code className="text-green-400 font-mono text-xs flex-1">{item.cmd}</code>
            <span className="text-slate-400 text-xs w-36 flex-shrink-0">{item.desc}</span>
          </div>
        ))}
      </div>
    ),
    notes: `好，現在我們做一個綜合的實作，把前面學的指令串起來用。

目標是建立一個簡單的專案目錄結構，就像一個軟體專案的基本骨架。

第一步，用 mkdir -p 加上大括號展開，一次建立 src、docs、tests 三個子目錄。大括號展開是 Shell 的功能，{src,docs,tests} 會展開成三個路徑，一次建立完成。

第二步，用 nano 建立 README.md 檔案。在 README 裡寫一些內容，比如這個專案的名稱、目的、說明。可以用中文，反正 Linux 支援 UTF-8。寫完 Ctrl+O 儲存，Ctrl+X 離開。

第三步，用 touch 建立一個空的腳本檔 main.sh，之後可以用 nano 來填內容，現在先佔一個位置。

第四步，ls -la 確認目錄建立正確，看到 src、docs、tests 三個目錄。

第五步，cat README.md 確認你剛才寫的內容有正確儲存。

第六步，ls -R 是遞迴列出，它會顯示所有子目錄和裡面的內容，讓你看到整個目錄樹的結構。

大家開始做！這個實作沒有固定答案，可以自己發揮，把 README 寫得更詳細。做完的同學可以舉手讓我看看你建的目錄結構。

讓我補充一下每個步驟的細節，讓大家更清楚。

第一步：mkdir -p ~/workshop/myproject/{src,docs,tests}。這行指令裡有幾個重點：~ 代表你的家目錄；-p 確保中間每一層都自動建立；{src,docs,tests} 是 Bash 的大括號展開，Shell 會把它展開成三個路徑。如果你想確認這行指令會展開成什麼，可以先 echo mkdir -p ~/workshop/myproject/{src,docs,tests} 看一下 Shell 展開的結果，確認後再執行。

第二步：nano ~/workshop/myproject/README.md。這個 README.md 是每個軟體專案都應該有的說明文件。你可以在裡面寫：這個專案的名稱、用途、作者（你的名字）、建立日期、以及簡短的說明。Markdown 格式的 README 在 GitHub 上會被自動渲染成漂亮的格式，所以學著寫 README 是一個好習慣。寫完記得 Ctrl+O 存檔、Ctrl+X 離開。

第三步：touch ~/workshop/myproject/src/main.sh。副檔名 .sh 代表這是一個 Shell 腳本（Shell Script）。後面的課程你會學到怎麼寫腳本，現在先建立這個佔位檔案，感受一下真實專案的目錄結構是什麼樣子。

第四步：ls -la ~/workshop/myproject/。你應該會看到 src、docs、tests 三個目錄，以及 README.md 一個檔案。注意 ls -la 的輸出裡，目錄的第一個字母是 d（directory），普通檔案是 -，這是你辨識類型的方式。

第五步：cat ~/workshop/myproject/README.md。確認你剛才在 nano 裡輸入並存檔的內容真的被寫進去了。這是一個好習慣——存完東西後用 cat 或 less 確認，確保存檔動作真的成功，這在剛學 Linux 的時候特別重要。

第六步：ls -R ~/workshop/myproject/。-R（大寫 R）是 Recursive（遞迴）的縮寫，它不只列出目錄本身，還會遞迴列出所有子目錄裡的內容。輸出格式是：先印目錄名稱（後面加冒號），然後列出那個目錄裡的所有條目，再繼續深入下一層子目錄。這樣你就能一眼看到整個目錄樹的結構。

如果你有安裝 tree 指令（有些 Linux 發行版預設沒有裝），tree ~/workshop/myproject/ 可以用更漂亮的樹狀圖格式顯示目錄結構，輸出更直覺。可以試試 which tree 確認有沒有安裝，沒有的話 sudo apt install tree 安裝一下，大概幾秒鐘。

完成這個實作的時候，想一下你做了什麼：你建立了一個完整的專案骨架，包含目錄結構、說明文件、原始碼佔位檔，然後驗證了每個步驟的結果。這就是真實工作中「搭建新專案」的縮小版流程，只是真實情況下目錄更複雜、README 更詳細、main.sh 裡面有真正的程式碼。

做完的同學可以挑戰進階題：用 nano 在 src/main.sh 裡寫入第一行 #!/bin/bash（這叫做 shebang line，告訴系統用 bash 執行這個腳本），存檔後用 cat 確認；然後用 chmod +x src/main.sh 給腳本加上可執行權限，再用 ls -l src/ 確認權限欄位從 -rw-r--r-- 變成了 -rwxr-xr-x，x 就是執行（execute）權限。

整個實作背後有一個很重要的工作流程概念：「建立 → 確認 → 操作 → 再確認」。每個步驟之後都要驗證結果（用 ls 或 cat），這是專業系統管理員的習慣。在正式生產環境（Production）操作伺服器時，每個動作後都要確認，避免誤操作了卻沒發現，等問題爆發才驚覺。這個習慣從現在養成，往後你會感謝自己。

另一個值得思考的細節：這個實作建立的目錄結構（src、docs、tests）其實就是真實軟體專案的基本骨架。不管是 Python、Go、還是 Node.js 的專案，目錄組織的邏輯都差不多——原始碼放 src，文件放 docs，測試放 tests。現在你用 mkdir 手動一個一個建，以後用各語言的腳手架工具（scaffold）可以一鍵生成，但背後的邏輯完全相同。理解這個結構，對你以後看 GitHub 上的開源專案、或自己建立新專案，都很有幫助。

常見的錯誤排除：如果出現 No such file or directory，通常是路徑打錯了——先用 pwd 確認自己在哪，用 ls 看目錄內容，重新確認路徑後再試。如果 nano 打不開，用 which nano 確認有沒有安裝，沒有的話 sudo apt install nano 幾秒鐘就裝好了。遇到任何錯誤不要慌，Linux 的錯誤訊息都是有意義的，先讀懂它說什麼，再決定怎麼處理。

完成所有步驟後，你已經建立了一個有目錄結構、有說明文件、有程式碼佔位的小型專案框架。這雖然很簡單，但它代表的是一個完整的「從零開始建立專案」的流程。實際工作上你會繼續往這個框架裡填內容，但骨架搭好是第一步，從今天開始你已經能做到了。

說到這個實作，我想幫大家多想一層，聊一個在 K8s 課程後段會非常有感的概念：Infrastructure as Code（基礎設施即代碼，簡稱 IaC）。

傳統的伺服器管理方式是：工程師手動 SSH 進去，一條一條打指令把環境設定好，但這個過程完全依賴人腦記憶，沒有辦法重現，換一台機器又得重新來一遍，而且很難追蹤誰改了什麼。IaC 的核心思想是：把所有的環境設定、目錄結構、軟體安裝步驟，全部寫成可以被版本控制的腳本或設定檔，讓環境的建立變得可重現、可追蹤、可自動化。

你今天用 mkdir 手動一個一個建的目錄，在真實工作中通常會寫成一個 Shell 腳本（shell script），比如 setup.sh，裡面就是你剛才打的那幾行 mkdir、touch、cp 指令。把 setup.sh 交給新同事，他執行一次，環境就和你完全一樣了。這就是 IaC 最初步的形態。

到了 K8s 層面，這個概念更進一步——你用 YAML 格式的設定檔描述「我想要幾個 Pod、用什麼 Image、開放哪個 Port、掛載哪個 Volume」，然後 kubectl apply -f my-app.yaml，K8s 就自動幫你建立。你對環境做的所有變更都在 YAML 裡，有完整的 Git 歷史，任何人任何時候都能從這份 YAML 重建出相同的環境。

所以今天練習的目錄操作，看起來很基礎，但背後連結的是整個現代 DevOps 的核心哲學。從現在開始養成「把操作步驟寫成腳本」的習慣，是非常有價值的。

針對這個實作，我想多聊一下「為什麼要分目錄」這件事，因為這和後面的 Docker 和 K8s 都有直接關係。

在容器化（containerization）的世界裡，你的應用程式通常被打包成一個 Docker Image。這個 Image 裡面的目錄結構，直接決定了容器啟動後工作環境的樣子。所以從現在就養成「清晰的目錄結構」的習慣，未來寫 Dockerfile 的時候會自然很多。

舉一個真實的例子：假設你要把一個 Python Web 應用容器化，典型的目錄結構可能是：app/（主要程式碼）、requirements.txt（依賴套件清單）、Dockerfile（容器定義）、.env.example（環境變數範本）、tests/（測試程式碼）、docs/（文件）。這個結構和你剛才用 mkdir 建立的 src/docs/tests 幾乎是一樣的邏輯！從 Linux 基礎操作，到容器化開發，背後的組織思維是一貫的。

再一個常見的實作問題：如果你在操作過程中搞亂了，怎麼重置？很簡單：rm -rf ~/workshop/myproject 把整個目錄刪掉（注意！確認路徑正確），然後重新從第一步開始。這正是 Linux 的強大之處：出錯了就清掉重來，沒有什麼「系統還原」的繁瑣步驟，整個重建過程可能不到三十秒。在 K8s 的世界裡，這種「刪掉重建」的思維更加重要，因為 Pod 本來就是無狀態、可替換的，壞了就刪，讓系統自動重新建立一個新的。

好，繼續練習，有問題隨時舉手！`,
    duration: "20",
  },

  // ===== 18. 搜尋 - grep =====
  {
    title: "grep — 文字搜尋",
    subtitle: "Global Regular Expression Print",
    section: "搜尋指令",
    content: (
      <div className="space-y-3">
        <div className="grid gap-2">
          {[
            { cmd: `grep "error" app.log`, desc: "在 app.log 裡找包含 error 的行" },
            { cmd: `grep -r "TODO" ./src/`, desc: "-r 遞迴搜尋目錄裡所有檔案" },
            { cmd: `grep -i "error" app.log`, desc: "-i 不區分大小寫（Error/ERROR/error 都找）" },
            { cmd: `grep -n "failed" app.log`, desc: "-n 顯示行號" },
            { cmd: `grep -v "DEBUG" app.log`, desc: "-v 反向：只顯示不包含 DEBUG 的行" },
            { cmd: `grep -c "error" app.log`, desc: "-c 只顯示符合的行數" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-2 rounded-lg">
              <code className="text-green-400 font-mono text-xs w-52 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    code: `$ grep -n "error" /var/log/syslog
124: Feb 17 09:23:15 server01 kernel: [error] disk I/O
389: Feb 17 10:45:02 server01 nginx: [error] connect refused

$ grep -c "error" /var/log/syslog
2`,
    notes: `grep 是你在 Linux 上最常用的搜尋工具，用來在檔案或輸出中找包含特定文字的行。grep 的名字來自 "Global Regular Expression Print"，雖然你現在只需要知道最基本的用法。

最基本的：grep "關鍵字" 檔案名稱。比如 grep "error" /var/log/syslog，就找出 syslog 裡所有包含 error 的行，把它們輸出出來。

幾個非常實用的選項：

-r 是遞迴搜尋。grep -r "TODO" ./src/ 在 src 目錄下的所有檔案裡找 TODO，包括子目錄裡的。這在找程式碼裡的 TODO 或特定設定項目時很方便。

-i 忽略大小寫。Error、ERROR、error、eRRor 全部都找到。記得加這個，避免因為大小寫錯過結果。

-n 顯示行號。找到符合的行時，在前面顯示行號。在除錯時很有用，可以直接告訴別人「第 124 行有問題」。

-v 是反向，只顯示不包含關鍵字的行。比如 grep -v "DEBUG" app.log，過濾掉 DEBUG 等級的日誌，只看其他等級的，讓輸出更清楚。

-c 只顯示符合行的數量，不顯示內容本身。grep -c "error" app.log 告訴你有幾行錯誤，不把全部內容印出來。

grep 配合 pipe 非常強大。ps aux | grep nginx 在所有程序裡找出名稱包含 nginx 的，確認 nginx 是否在執行。cat /etc/passwd | grep student 在帳號清單裡找 student 帳號。

大家試試：grep -r "root" /etc/passwd，看輸出什麼。

再說一個 grep 很重要但常被忽略的用法：grep 的第一個參數其實可以是「正規表達式（Regular Expression，縮寫 regex）」，不只是純粹的關鍵字。正規表達式讓你可以描述「某種模式」而不是固定文字，比如 grep "^root" /etc/passwd 找以 root 開頭的行（^ 代表行首），grep "bash$" /etc/passwd 找以 bash 結尾的行（$ 代表行尾）。今天不要求你學正規表達式，但要知道 grep 支援這個強大的功能，以後有需要再深入學。

另一個常見場景：ps aux | grep nginx 查看 nginx 程序是否在執行。ps aux 列出所有執行中的程序，grep nginx 過濾出包含 nginx 的行。如果有輸出，代表 nginx 正在執行；如果沒有輸出，可能服務沒有啟動。這是系統管理員最常用的診斷指令之一。你明天學了 ps 之後會更清楚這個組合的意義。

grep 可以同時搜尋多個檔案：grep "error" *.log 找當前目錄所有 .log 結尾的檔案裡包含 error 的行，輸出時會在每行前面加上檔名，讓你知道這行來自哪個檔案。這比一個一個檔案慢慢查快很多。

還有一個進階選項 -A（After）和 -B（Before）：grep -A 3 "error" app.log 除了顯示符合的行，還會顯示那行之後的 3 行；grep -B 2 "error" app.log 顯示符合行之前的 2 行。這在看 log 的時候很有用，因為錯誤的原因往往在錯誤行的前後幾行。

在實際維運工作中，grep 最重要的應用之一是分析伺服器日誌。舉例來說，查看 Nginx access log 裡有多少 5xx 錯誤：grep -c " 5[0-9][0-9] " /var/log/nginx/access.log；或者找出最近的錯誤訊息：tail -100 /var/log/nginx/error.log | grep "error"。這種 tail 配合 grep 的管線組合，是日常維運除錯最常見的流程。記住這個模式：先用 tail 取最新幾行，再用 grep 過濾關鍵字——它能讓你在幾秒內定位問題，是系統管理員每天都在用的診斷技巧。

進一步說說 grep 在 Kubernetes 環境裡的用法——因為這才是這門課的核心目標。等你開始用 K8s 之後，你的「日誌」不再是一個檔案，而是從 kubectl 指令取得的輸出。比如 kubectl get pods -A 列出叢集中所有命名空間（namespace）的 Pod，但輸出可能很長，這時候：

kubectl get pods -A | grep "CrashLoopBackOff" 快速找出所有異常的 Pod；kubectl get pods -A | grep -v "Running" 找出所有「不是 Running 狀態」的 Pod（-v 反向過濾）；kubectl logs my-pod | grep "ERROR" 過濾 Pod 日誌中的錯誤。

這些組合在你做 K8s 維運的時候每天都會用到，而它們全部都是基於你今天學的 grep 基礎用法。所以現在把 grep 學紮實，到 K8s 的時候你就不會手忙腳亂了。`,
    duration: "12",
  },

  // ===== 19. 搜尋 - find =====
  {
    title: "find — 檔案搜尋",
    subtitle: "在目錄樹中搜尋檔案",
    section: "搜尋指令",
    content: (
      <div className="space-y-3">
        <div className="grid gap-2">
          {[
            { cmd: `find . -name "*.txt"`, desc: "在當前目錄（含子目錄）搜尋所有 .txt 檔案" },
            { cmd: `find /home -name "*.log"`, desc: "在 /home 目錄搜尋 log 檔案" },
            { cmd: `find . -type f`, desc: "-type f 只找一般檔案（不含目錄）" },
            { cmd: `find . -type d`, desc: "-type d 只找目錄" },
            { cmd: `find . -mtime -1`, desc: "最近 1 天內修改過的檔案" },
            { cmd: `find . -size +1M`, desc: "找大於 1MB 的檔案" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/60 p-2 rounded-lg">
              <code className="text-green-400 font-mono text-xs w-44 flex-shrink-0">{item.cmd}</code>
              <span className="text-slate-300 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800/60 border border-slate-600 p-3 rounded-lg text-xs font-mono">
          <span className="text-slate-400">格式：</span>
          <code className="text-green-400">find [搜尋起點] [條件...]</code>
        </div>
      </div>
    ),
    notes: `find 是在目錄樹中搜尋檔案的工具。和 grep 搜尋「檔案內容」不同，find 是搜尋「哪些檔案存在」。

find 的基本語法是：find 起始目錄 條件。起始目錄可以是 .（當前目錄）、/（根目錄，全系統搜尋）、或者任何指定路徑。

最常用的條件是 -name，按名稱搜尋，支援萬用字元。find . -name "*.txt" 找當前目錄及所有子目錄裡的 .txt 檔案。注意萬用字元要用引號括起來，不然 Shell 可能在展開。

-type 過濾類型，-type f 只找一般檔案，-type d 只找目錄。通常配合 -name 使用：find . -type f -name "*.sh" 找所有 Shell 腳本，只找檔案不找目錄。

-mtime 按修改時間搜尋。-mtime -1 是最近 1 天修改的，-mtime -7 是最近 7 天。這在排查「誰改了哪個設定檔」時很有用。

-size 按大小搜尋。find /var/log -size +50M 找 /var/log 裡超過 50MB 的 log 檔案，幫你找出佔用大量磁碟的日誌。

在實際工作中，find 最常見的使用場景是找到某個配置檔案在哪裡：比如 find / -name nginx.conf 2>/dev/null，在整個系統裡找 nginx 的設定檔，2>/dev/null 是把錯誤訊息（通常是「沒有權限」）丟掉，讓輸出更乾淨。

大家試試：find ~/workshop -name "*.md" 找你剛才建立的 README.md。

find 還有一個很實用的功能：-exec，讓你對找到的每個檔案執行一個指令。比如 find . -name "*.log" -exec rm {} \\; 找到所有 .log 檔案後直接刪除。{} 是佔位符，代表 find 找到的每個檔案名稱；\\; 是 -exec 的結尾符號。這個組合非常強大，但也很危險（直接刪除），請在確認 find 結果之後再加 -exec rm。

另一個常見用法：find /var/log -name "*.log" -size +10M 找 /var/log 目錄下超過 10MB 的 log 檔案，幫你識別哪些 log 長得太大佔用磁碟空間，再考慮是否截斷（truncate）或刪除。

find 和 grep 的搭配也很常見：find . -name "*.conf" | xargs grep "port" 先找到所有 .conf 設定檔，再用 xargs 把這些檔案名稱傳給 grep 搜尋包含 port 的行。這讓你可以在多個設定檔裡同時搜尋特定設定項目，一行指令完成，非常高效。

find 的 -iname 選項是 -name 的不區分大小寫版本，find . -iname "README*" 可以找到 README.md、readme.txt、Readme.md 等各種大小寫組合。

在 K8s 部署場景中，find 常被用在 CI/CD 的自動化腳本裡。比如一個部署腳本可能需要找到專案裡所有的 Kubernetes 資源定義檔（*.yaml），然後依序套用：find ./k8s -name "*.yaml" | xargs kubectl apply -f。這個組合先用 find 找到所有 YAML 設定檔，再透過 xargs 把它們一個一個傳給 kubectl apply 套用到叢集。這種腳本在真實的 DevOps 工作流程裡非常常見。

另一個維運場景：磁碟空間快滿的時候，find 是最好的偵察工具。find /var/log -name "*.log" -size +100M 找出所有超過 100MB 的 log 檔案，幫你決定哪些可以清理或壓縮。容器環境下，日誌管理是一個很重要的話題，因為容器不斷產生日誌，如果沒有適當的清理機制，磁碟很快就會被塞滿。

find 還支援邏輯運算，比如 find . -name "*.log" -mtime +30 找超過 30 天沒修改的 log 檔案，這些通常是可以安全歸檔或刪除的舊日誌。

大家試試最後一個練習：find ~/workshop -type f -name "*.md" 列出你今天建立的所有 Markdown 檔案，看看找不找得到 README.md。`,
    duration: "8",
  },

  // ===== 21. 課堂實作練習 =====
  {
    title: "Linux 基本操作課堂實作練習",
    subtitle: "Day 1 下午收尾練習",
    section: "課堂實作練習",
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 text-sm font-semibold mb-2">🕒 練習時間</p>
            <p className="text-3xl font-bold text-white">30 分鐘</p>
            <p className="text-slate-400 text-sm mt-2">可直接在練習主機上操作與驗證</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-green-400 text-sm font-semibold mb-2">🛠️ 完成方式</p>
            <p className="text-2xl font-bold text-white">個人操作 + 現場檢查</p>
            <p className="text-slate-400 text-sm mt-2">以高頻 Linux 基礎操作為主</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-yellow-400 text-sm font-semibold mb-2">🎯 目的</p>
            <p className="text-lg font-semibold text-white">把今天的核心指令再走一遍</p>
            <p className="text-slate-400 text-sm mt-2">重點是能正確操作，不是背誦理論</p>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-3 text-sm">
          {[
            { title: "目錄導覽", score: "4 題", desc: "pwd / cd / ls / 路徑概念" },
            { title: "檔案操作", score: "6 題", desc: "mkdir / touch / cp / mv / rm" },
            { title: "內容查看", score: "5 題", desc: "cat / tail / head / wc" },
            { title: "nano", score: "3 題", desc: "開檔與快捷鍵" },
            { title: "搜尋", score: "2 題", desc: "grep / find" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700 p-3 rounded-xl">
              <p className="text-k8s-blue font-semibold">{item.title}</p>
              <p className="text-white text-lg font-bold">{item.score}</p>
              <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-4 rounded-xl">
          <p className="text-yellow-400 font-bold mb-2">練習提醒</p>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• 需要寫指令的項目，請盡量寫完整指令。</li>
            <li>• 概念題請用自己的話簡短說明，不需要背課本。</li>
            <li>• 不確定時可以先在終端機試，再回頭整理答案。</li>
          </ul>
        </div>
      </div>
    ),
    notes: `現在開始進入第一天的收尾課堂實作練習。這份練習對應今天下午的核心內容，目的是幫學員把今天學過的指令重新走一遍，看看哪些地方已經熟、哪些地方還需要補強。

建議流程：
1. 先說明練習時間 30 分鐘，目標是把今天的操作完整走過一次
2. 鼓勵學員先完成自己有把握的項目，再回頭處理不確定的部分
3. 強調可以直接在練習主機上操作驗證，先獨立完成再一起檢討
4. 練習結束後再用講師模式逐題檢討

這份課堂實作練習的參考答案我放在接下來每一張 slide 的 notes，學員畫面不會直接看到。`,
    duration: "3",
  },

  {
    title: "實作練習 Part 1",
    subtitle: "第一部分：目錄導覽",
    section: "課堂實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 1</p>
              <p className="text-slate-300">依序完成：</p>
              <ol className="text-slate-300 list-decimal list-inside space-y-1 mt-2">
                <li>確認目前所在目錄</li>
                <li>切換到 <code className="text-green-300">/var/log</code></li>
                <li>回到家目錄</li>
              </ol>
            </div>
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 2</p>
              <p className="text-slate-300">說明以下指令功能：</p>
              <ul className="text-slate-300 space-y-1 mt-2">
                <li>• <code className="text-green-300">cd ~</code></li>
                <li>• <code className="text-green-300">cd -</code></li>
                <li>• <code className="text-green-300">cd ..</code></li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 3</p>
              <p className="text-slate-300">用 <code className="text-green-300">ls</code> 列出 <code className="text-green-300">/etc</code>：</p>
              <ul className="text-slate-300 space-y-1 mt-2">
                <li>• 顯示詳細資訊</li>
                <li>• 包含隱藏檔</li>
                <li>• 大小用人性化格式</li>
              </ul>
            </div>
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 4</p>
              <p className="text-slate-300">說明「絕對路徑」與「相對路徑」的差異，並各舉一例。</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/30 p-3 rounded-lg text-sm text-blue-200">
          練習提示：這一頁的內容都能在今天前半段的 cd / ls / pwd 操作找到。
        </div>
      </div>
    ),
    notes: `Part 1 參考答案

題目 1：
pwd
cd /var/log
cd ~

題目 2：
- cd ~：回到家目錄
- cd -：回到上一個所在的目錄
- cd ..：移到上一層目錄

題目 3：
ls -lah /etc

題目 4：
- 絕對路徑：從根目錄 / 開始的完整路徑，例如 /etc/nginx/nginx.conf
- 相對路徑：從目前位置出發的路徑，例如 ../docs/readme.txt`,
    duration: "7",
  },

  {
    title: "實作練習 Part 2",
    subtitle: "第二部分：目錄與檔案操作",
    section: "課堂實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 5</p>
              <p className="text-slate-300">用一條指令建立：</p>
              <code className="block mt-2 text-green-300 text-xs bg-slate-900/60 p-2 rounded">~/project/{"{"}src,docs,tests{"}"}</code>
            </div>
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 6</p>
              <p className="text-slate-300">在 <code className="text-green-300">~/project/src/</code> 建立空白檔：</p>
              <p className="text-slate-300 mt-1"><code className="text-green-300">app.sh</code>、<code className="text-green-300">config.txt</code></p>
            </div>
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 7</p>
              <p className="text-slate-300">把 <code className="text-green-300">~/project/src/config.txt</code> 複製到 <code className="text-green-300">~/project/docs/</code></p>
            </div>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 8</p>
              <p className="text-slate-300">把 <code className="text-green-300">~/project/docs/config.txt</code> 改名為 <code className="text-green-300">settings.txt</code></p>
            </div>
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 9</p>
              <p className="text-slate-300">說明 <code className="text-green-300">rmdir</code> 和 <code className="text-green-300">rm -r</code> 的差別。</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 10</p>
              <p className="text-slate-300">為什麼 <code className="text-red-300">rm -rf /</code> 很危險？用 <code className="text-green-300">rm</code> 刪除後可復原嗎？</p>
            </div>
          </div>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-3 rounded-lg text-sm">
          檢查重點：除了指令正確，也要看學員是否理解刪除風險與安全操作習慣。
        </div>
      </div>
    ),
    notes: `Part 2 參考答案

題目 5：
mkdir -p ~/project/{src,docs,tests}

題目 6：
touch ~/project/src/app.sh ~/project/src/config.txt

題目 7：
cp ~/project/src/config.txt ~/project/docs/

題目 8：
mv ~/project/docs/config.txt ~/project/docs/settings.txt

題目 9：
- rmdir：只能刪除空目錄
- rm -r：遞迴刪除目錄及其全部內容
- 當目錄不是空的時候，必須使用 rm -r

題目 10：
- rm -rf / 會刪除整個系統的所有檔案，造成系統無法運作
- rm 沒有垃圾桶機制，刪除後通常無法復原`,
    duration: "8",
  },

  {
    title: "實作練習 Part 3-4",
    subtitle: "第三、四部分：內容查看與 nano",
    section: "課堂實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 11</p>
              <p className="text-slate-300">顯示 <code className="text-green-300">/etc/hostname</code> 的完整內容並加上行號。</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 12</p>
              <p className="text-slate-300">說明 <code className="text-green-300">cat</code> 適合看什麼檔案，不適合看什麼檔案。</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 13</p>
              <p className="text-slate-300">查看 <code className="text-green-300">/var/log/syslog</code> 的最後 20 行。</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 14</p>
              <p className="text-slate-300">不加參數時，<code className="text-green-300">head</code> / <code className="text-green-300">tail</code> 預設顯示幾行？</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 15</p>
              <p className="text-slate-300">統計 <code className="text-green-300">/etc/hosts</code> 有幾行。</p>
            </div>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 16</p>
              <p className="text-slate-300">用 nano 開啟或建立 <code className="text-green-300">~/project/README.md</code></p>
            </div>
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 17</p>
              <p className="text-slate-300">說明以下快捷鍵：</p>
              <ul className="text-slate-300 mt-2 space-y-1">
                <li>• <code className="text-green-300">Ctrl + O</code></li>
                <li>• <code className="text-green-300">Ctrl + X</code></li>
                <li>• <code className="text-green-300">Ctrl + W</code></li>
              </ul>
            </div>
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 18</p>
              <p className="text-slate-300">如果要用管理員權限編輯 <code className="text-green-300">/etc/hosts</code>，指令怎麼寫？</p>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `Part 3-4 參考答案

題目 11：
cat -n /etc/hostname

題目 12：
- 適合：短的設定檔、快速確認內容、合併多個小檔案
- 不適合：幾千行的大檔案、需要搜尋或上下捲動閱讀的檔案

題目 13：
tail -n 20 /var/log/syslog

題目 14：
預設顯示 10 行

題目 15：
wc -l /etc/hosts

題目 16：
nano ~/project/README.md

題目 17：
- Ctrl + O：儲存檔案
- Ctrl + X：離開 nano
- Ctrl + W：搜尋文字

題目 18：
sudo nano /etc/hosts`,
    duration: "7",
  },

  {
    title: "實作練習 Part 5",
    subtitle: "第五部分：搜尋指令",
    section: "課堂實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 19</p>
              <p className="text-slate-300">用 <code className="text-green-300">grep</code> 在 <code className="text-green-300">/etc/hosts</code> 搜尋包含 <code className="text-green-300">localhost</code> 的行，並顯示行號。</p>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 20</p>
              <p className="text-slate-300">用 <code className="text-green-300">find</code> 在家目錄中搜尋所有 <code className="text-green-300">.txt</code> 檔案。</p>
            </div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-xl">
            <p className="text-blue-300 font-semibold mb-2">完成前自我檢查</p>
            <ul className="text-slate-300 space-y-2">
              <li>• 指令題是否有寫完整路徑與選項</li>
              <li>• 概念題是否有回答差異與使用情境</li>
              <li>• 危險指令是否有提到風險與不可復原</li>
              <li>• 不確定的題目是否已在終端機驗證</li>
            </ul>
          </div>
        </div>
        <div className="bg-green-500/10 border border-green-500/30 p-3 rounded-lg text-sm text-green-200">
          補強建議：完成前用 history 快速回顧今天實際敲過的指令，常常能幫你補上漏掉的細節。
        </div>
      </div>
    ),
    notes: `Part 5 參考答案

題目 19：
grep -n "localhost" /etc/hosts

題目 20：
find ~ -name "*.txt"

檢討時可以補充：
- grep 是在檔案內容裡找文字
- find 是在目錄樹裡找檔案
- 很多新手會把兩者用途混在一起，這裡可以再強調一次`,
    duration: "5",
  },

  // ===== 26. 中階延伸實作練習 =====
  {
    title: "Linux 中階延伸實作練習",
    subtitle: "Day 1 下午進階補充",
    section: "延伸實作練習",
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 text-sm font-semibold mb-2">🕒 建議時間</p>
            <p className="text-3xl font-bold text-white">45 分鐘</p>
            <p className="text-slate-400 text-sm mt-2">適合完成基礎練習後往上挑戰</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-green-400 text-sm font-semibold mb-2">🧩 練習形式</p>
            <p className="text-2xl font-bold text-white">指令組合 + 觀念驗證</p>
            <p className="text-slate-400 text-sm mt-2">開始接近真實維運的思考方式</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-yellow-400 text-sm font-semibold mb-2">🎯 目標</p>
            <p className="text-lg font-semibold text-white">把單點技能串成完整流程</p>
            <p className="text-slate-400 text-sm mt-2">從會下指令走到會判斷與驗證</p>
          </div>
        </div>
        <div className="grid md:grid-cols-5 gap-3 text-sm">
          {[
            { title: "導覽結構", count: "3 題", desc: "多層目錄、相對路徑、ls 欄位" },
            { title: "檔案操作", count: "4 題", desc: "cp -p、mv、遞迴複製、驗證" },
            { title: "內容分析", count: "5 題", desc: "tail、less、head、wc" },
            { title: "nano", count: "2 題", desc: "建立 YAML、剪貼與搜尋" },
            { title: "搜尋過濾", count: "4 題", desc: "grep / find / pipe 組合" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700 p-3 rounded-xl">
              <p className="text-k8s-blue font-semibold">{item.title}</p>
              <p className="text-white text-lg font-bold">{item.count}</p>
              <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-4 rounded-xl">
          <p className="text-yellow-400 font-bold mb-2">使用建議</p>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• 如果現場時間不夠，這段可以直接轉為課後延伸練習。</li>
            <li>• 先自己在終端機完成，再用 notes 當講師檢討參考。</li>
            <li>• 重點不是寫得快，而是知道每一步為什麼這樣做。</li>
          </ul>
        </div>
      </div>
    ),
    notes: `這一段是第一天下午的中階延伸實作練習，主要給已經完成基礎練習、想把熟練度再往上推的學員。

使用方式建議：
1. 可以當場讓速度快的學員繼續做
2. 也可以保留為課後作業，下一堂開場快速檢討
3. 帶題時請強調「驗證結果」和「理解差異」，不要只核對指令字串

參考答案同樣放在 notes，學員畫面不會直接看到。`,
    duration: "3",
  },

  {
    title: "中階延伸 Part 1",
    subtitle: "目錄結構與導覽",
    section: "延伸實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">練習 1</p>
            <p className="text-slate-300">用一條指令建立：</p>
            <code className="block mt-2 text-green-300 text-xs bg-slate-900/60 p-2 rounded">~/k8s-lab/{"{"}deployments/{"{"}dev,staging,prod{"}"},services,configs{"}"}</code>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">練習 2</p>
            <p className="text-slate-300">假設你目前在 <code className="text-green-300">/home/student/k8s-lab/deployments/dev</code>：</p>
            <ul className="text-slate-300 mt-2 space-y-1">
              <li>• <code className="text-green-300">cd /etc/..</code> 會到哪裡？</li>
              <li>• <code className="text-green-300">cd ../../services</code> 的完整絕對路徑是什麼？</li>
            </ul>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">練習 3</p>
            <p className="text-slate-300">解釋這行 <code className="text-green-300">ls -l</code> 輸出的每個欄位：</p>
            <code className="block mt-2 text-green-300 text-xs bg-slate-900/60 p-2 rounded">drwxr-xr-x 4 student student 4096 Mar 07 14:30 projects</code>
          </div>
        </div>
      </div>
    ),
    notes: `中階 Part 1 參考答案

練習 1：
mkdir -p ~/k8s-lab/{deployments/{dev,staging,prod},services,configs}

練習 2：
1. cd /etc/.. 會到根目錄 /
2. ../../services 的完整路徑是 /home/student/k8s-lab/services

練習 3：
- d：目錄
- rwxr-xr-x：owner / group / others 權限
- 4：硬連結數量
- 第一個 student：擁有者
- 第二個 student：所屬群組`,
    duration: "7",
  },

  {
    title: "中階延伸 Part 2",
    subtitle: "檔案操作組合技",
    section: "延伸實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-green-400 font-semibold mb-2">練習 4</p>
            <p className="text-slate-300">依序完成以下流程：</p>
            <ol className="text-slate-300 list-decimal list-inside mt-2 space-y-1">
              <li>建立 <code className="text-green-300">nginx.yaml</code> 與 <code className="text-green-300">redis.yaml</code></li>
              <li>複製到 <code className="text-green-300">~/k8s-lab/configs/</code></li>
              <li>把 <code className="text-green-300">nginx.yaml</code> 改名成 <code className="text-green-300">nginx-config.yaml</code></li>
              <li>遞迴備份 <code className="text-green-300">~/k8s-lab/</code> 到 <code className="text-green-300">~/k8s-lab-backup/</code></li>
              <li>刪除 <code className="text-green-300">redis.yaml</code></li>
              <li>用 <code className="text-green-300">ls -R</code> 驗證結果</li>
            </ol>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 5</p>
              <p className="text-slate-300">比較 <code className="text-green-300">cp</code> 與 <code className="text-green-300">cp -p</code> 的差異，以及什麼情況要保留 metadata。</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 6</p>
              <p className="text-slate-300">為什麼同一個磁碟分割區內，<code className="text-green-300">mv</code> 幾乎瞬間完成，而 <code className="text-green-300">cp</code> 需要等待？</p>
            </div>
            <div>
              <p className="text-green-400 font-semibold mb-1">練習 7</p>
              <p className="text-slate-300">把 <code className="text-green-300">~/k8s-lab/deployments/dev/</code> 下所有 <code className="text-green-300">.yaml</code> 複製到 <code className="text-green-300">~/k8s-lab/configs/</code></p>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `中階 Part 2 參考答案

練習 4：
touch ~/k8s-lab/deployments/dev/nginx.yaml ~/k8s-lab/deployments/dev/redis.yaml
cp ~/k8s-lab/deployments/dev/*.yaml ~/k8s-lab/configs/
mv ~/k8s-lab/configs/nginx.yaml ~/k8s-lab/configs/nginx-config.yaml
cp -r ~/k8s-lab/ ~/k8s-lab-backup/
rm ~/k8s-lab/deployments/dev/redis.yaml
ls -R ~/k8s-lab/

練習 5：
- cp：一般複製
- cp -p：保留原始權限、擁有者和時間戳記
- 備份設定檔或部署腳本時通常要保留 metadata

練習 6：
mv 在同一個分割區多半只是改 metadata，cp 則真的會複製檔案內容

練習 7：
cp ~/k8s-lab/deployments/dev/*.yaml ~/k8s-lab/configs/`,
    duration: "10",
  },

  {
    title: "中階延伸 Part 3",
    subtitle: "內容查看與分析",
    section: "延伸實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 8</p>
              <p className="text-slate-300">即時監控 <code className="text-green-300">/var/log/nginx/access.log</code>，有新請求就立刻顯示。</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 9</p>
              <p className="text-slate-300">用一行指令統計 <code className="text-green-300">/var/log/syslog</code> 的總行數。</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 10</p>
              <p className="text-slate-300">在 <code className="text-green-300">less</code> 中：</p>
              <ul className="text-slate-300 mt-2 space-y-1">
                <li>• 搜尋 <code className="text-green-300">error</code></li>
                <li>• 跳到下一個結果</li>
                <li>• 反向搜尋 <code className="text-green-300">warning</code></li>
                <li>• 跳到檔案最末尾</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 11</p>
              <p className="text-slate-300">分別顯示 <code className="text-green-300">/etc/passwd</code> 的前 5 行與最後 5 行。</p>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 12</p>
              <p className="text-slate-300">解釋 <code className="text-green-300">wc -l</code>、<code className="text-green-300">wc -w</code>、<code className="text-green-300">wc -c</code> 各自統計什麼。</p>
              <code className="block mt-2 text-green-300 text-xs bg-slate-900/60 p-2 rounded">$ wc /etc/hosts{"\n"}9 27 225 /etc/hosts</code>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `中階 Part 3 參考答案

練習 8：
tail -f /var/log/nginx/access.log

練習 9：
wc -l /var/log/syslog

練習 10：
1. /error
2. n
3. ?warning
4. G

練習 11：
head -n 5 /etc/passwd
tail -n 5 /etc/passwd

練習 12：
-l：行數
-w：字數
-c：字元 / 位元組數
9 27 225 /etc/hosts 代表 9 行、27 個字、225 個字元`,
    duration: "10",
  },

  {
    title: "中階延伸 Part 4-5",
    subtitle: "nano 與搜尋指令進階",
    section: "延伸實作練習",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 13</p>
              <p className="text-slate-300">用 <code className="text-green-300">nano</code> 建立 <code className="text-green-300">~/k8s-lab/deployments/dev/nginx.yaml</code>，輸入 Pod YAML，儲存、搜尋 <code className="text-green-300">nginx</code>、再離開。</p>
            </div>
            <div>
              <p className="text-blue-400 font-semibold mb-1">練習 14</p>
              <p className="text-slate-300">在 nano 中剪下目前一行，移到檔案最後一行再貼上，寫出快捷鍵順序。</p>
            </div>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 15</p>
              <p className="text-slate-300">分別寫出：</p>
              <ul className="text-slate-300 mt-2 space-y-1">
                <li>• 不分大小寫搜尋 <code className="text-green-300">error</code></li>
                <li>• 顯示行號</li>
                <li>• 只顯示符合的行數</li>
              </ul>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 16</p>
              <p className="text-slate-300">遞迴搜尋 <code className="text-green-300">~/k8s-lab/</code> 下所有包含 <code className="text-green-300">nginx</code> 的行。</p>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 17</p>
              <p className="text-slate-300">用 <code className="text-green-300">find</code> 找出：</p>
              <ul className="text-slate-300 mt-2 space-y-1">
                <li>• 家目錄下所有目錄</li>
                <li>• 最近 1 天內修改過的檔案</li>
                <li>• 大於 1MB 的檔案</li>
              </ul>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 18</p>
              <p className="text-slate-300">解釋：<code className="text-green-300">grep "error" /var/log/syslog | wc -l</code></p>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `中階 Part 4-5 參考答案

練習 13：
nano ~/k8s-lab/deployments/dev/nginx.yaml
Ctrl + O -> Enter
Ctrl + W -> nginx -> Enter
Ctrl + X

練習 14：
Ctrl + K -> 移到最後一行 -> Ctrl + U

練習 15：
grep -i "error" /var/log/syslog
grep -n "error" /var/log/syslog
grep -ic "error" /var/log/syslog

練習 16：
grep -r "nginx" ~/k8s-lab/

練習 17：
find ~ -type d
find ~ -mtime -1
find ~ -size +1M

練習 18：
- grep 先篩出包含 error 的行
- pipe 把結果交給 wc -l
- 最後得到 error 行數`,
    duration: "15",
  },

  // ===== 27. 進階情境實作 =====
  {
    title: "Linux 進階情境實作",
    subtitle: "Day 1 下午 Capstone Challenge",
    section: "進階情境實作",
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 text-sm font-semibold mb-2">🕒 建議時間</p>
            <p className="text-3xl font-bold text-white">60 分鐘</p>
            <p className="text-slate-400 text-sm mt-2">適合當成第一天的總整合挑戰</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-green-400 text-sm font-semibold mb-2">🧠 核心形式</p>
            <p className="text-2xl font-bold text-white">情境題 + 指令鏈</p>
            <p className="text-slate-400 text-sm mt-2">把 Linux 指令放進真實 DevOps 場景</p>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-yellow-400 text-sm font-semibold mb-2">🎯 目標</p>
            <p className="text-lg font-semibold text-white">從操作走到排查與判斷</p>
            <p className="text-slate-400 text-sm mt-2">開始出現 K8s manifest、log triage、清理策略</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 gap-3 text-sm">
          {[
            { title: "專案建置", count: "2 題", desc: "manifest、namespace、備份驗證" },
            { title: "日誌分析", count: "3 題", desc: "tail、grep、less、ls | wc" },
            { title: "搜尋過濾", count: "3 題", desc: "find、grep、pipe 鏈" },
            { title: "綜合排查", count: "2 題", desc: "故障排查、報告輸出、清理風險" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-slate-700 p-3 rounded-xl">
              <p className="text-k8s-blue font-semibold">{item.title}</p>
              <p className="text-white text-lg font-bold">{item.count}</p>
              <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-yellow-900/20 border border-yellow-600/50 p-4 rounded-xl">
          <p className="text-yellow-400 font-bold mb-2">帶題建議</p>
          <ul className="text-slate-300 text-sm space-y-1">
            <li>• 這一段更像實戰挑戰，不建議逐字背答案。</li>
            <li>• 如果第一天下午時間不足，可以保留到課後或下一堂開場檢討。</li>
            <li>• 帶題時請強調「排查順序」與「安全意識」，而不只是指令有沒有打對。</li>
          </ul>
        </div>
      </div>
    ),
    notes: `這一段進階情境實作的定位，是把第一天下午學到的所有 Linux 基礎操作，包裝成比較貼近 DevOps 現場的題目。

重點提醒：
1. 這不是要求每位學員在現場全部做完的必修項目
2. 比較適合當成進階挑戰、課後作業，或下一堂開場快速 review
3. 答案在 notes，但請優先引導學員自己說出推理過程，再對照指令`,
    duration: "3",
  },

  {
    title: "進階情境 Part 1",
    subtitle: "專案建置與 namespace 檢查",
    section: "進階情境實作",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">練習 1</p>
            <p className="text-slate-300">你是 DevOps 工程師，請依序完成：</p>
            <ol className="text-slate-300 list-decimal list-inside mt-2 space-y-1">
              <li>建立 <code className="text-green-300">~/k8s-deploy/</code> 完整目錄結構</li>
              <li>在 <code className="text-green-300">manifests/dev/deployments/</code> 用 nano 建 <code className="text-green-300">nginx-deploy.yaml</code></li>
              <li>複製到 staging 與 prod</li>
              <li>用 grep 驗證三份檔案都還含有 <code className="text-green-300">namespace: dev</code></li>
              <li>備份整個專案為 <code className="text-green-300">~/k8s-deploy-backup/</code></li>
              <li>最後用 <code className="text-green-300">ls -R</code> 確認</li>
            </ol>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">練習 2</p>
            <p className="text-slate-300">你發現三個環境都寫成 <code className="text-green-300">namespace: dev</code>：</p>
            <ol className="text-slate-300 list-decimal list-inside mt-2 space-y-1">
              <li>找出所有包含 <code className="text-green-300">namespace: dev</code> 的檔案與行號</li>
              <li>用 nano 修改 staging / prod 的 namespace</li>
              <li>用一行指令驗證三個環境的 namespace 都正確</li>
            </ol>
          </div>
        </div>
      </div>
    ),
    notes: `進階 Part 1 參考答案

練習 1：
mkdir -p ~/k8s-deploy/manifests/{dev,staging,prod}/{deployments,services}
mkdir -p ~/k8s-deploy/{scripts,docs,configs/{nginx,redis}}
nano ~/k8s-deploy/manifests/dev/deployments/nginx-deploy.yaml
cp ~/k8s-deploy/manifests/dev/deployments/nginx-deploy.yaml ~/k8s-deploy/manifests/staging/deployments/
cp ~/k8s-deploy/manifests/dev/deployments/nginx-deploy.yaml ~/k8s-deploy/manifests/prod/deployments/
grep -rn "namespace: dev" ~/k8s-deploy/
cp -r ~/k8s-deploy/ ~/k8s-deploy-backup/
ls -R ~/k8s-deploy/

練習 2：
grep -rn "namespace: dev" ~/k8s-deploy/
nano ~/k8s-deploy/manifests/staging/deployments/nginx-deploy.yaml
# Ctrl + W 搜尋 namespace: dev，改成 staging；prod 同理改成 prod
grep -rn "namespace:" ~/k8s-deploy/manifests/`,
    duration: "15",
  },

  {
    title: "進階情境 Part 2",
    subtitle: "日誌分析實戰",
    section: "進階情境實作",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-purple-400 font-semibold mb-2">練習 3</p>
            <p className="text-slate-300">以 <code className="text-green-300">/var/log/syslog</code> 為例，分別寫出：</p>
            <ul className="text-slate-300 mt-2 space-y-1">
              <li>• 總行數</li>
              <li>• 最新 50 行</li>
              <li>• 即時監控</li>
              <li>• 不分大小寫搜尋 <code className="text-green-300">error</code> 並顯示行號</li>
              <li>• 統計 <code className="text-green-300">error</code> 行數</li>
              <li>• 過濾掉 <code className="text-green-300">DEBUG</code></li>
              <li>• 搜尋 <code className="text-green-300">error</code> 後只看最後 5 筆</li>
            </ul>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 4</p>
              <p className="text-slate-300">在 <code className="text-green-300">less /var/log/syslog</code> 中：</p>
              <ul className="text-slate-300 mt-2 space-y-1">
                <li>• 搜尋 <code className="text-green-300">kernel</code> 後跳下一個</li>
                <li>• 反向搜尋 <code className="text-green-300">warning</code></li>
                <li>• 跳到檔案末尾再回開頭</li>
                <li>• 說明為什麼大檔案應該用 less，不該用 cat</li>
              </ul>
            </div>
            <div>
              <p className="text-purple-400 font-semibold mb-1">練習 5</p>
              <p className="text-slate-300">用一行組合指令完成：<span className="text-slate-200">列出 <code className="text-green-300">/etc</code> 目錄下有多少個檔案和目錄</span></p>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `進階 Part 2 參考答案

練習 3：
wc -l /var/log/syslog
tail -n 50 /var/log/syslog
tail -f /var/log/syslog
grep -in "error" /var/log/syslog
grep -ic "error" /var/log/syslog
grep -v "DEBUG" /var/log/syslog
grep -i "error" /var/log/syslog | tail -n 5

練習 4：
/kernel -> Enter
n
?warning -> Enter
G -> g
less 可分頁、搜尋、上下移動；cat 會一次全部噴出來，不適合大檔案

練習 5：
ls /etc | wc -l`,
    duration: "12",
  },

  {
    title: "進階情境 Part 3",
    subtitle: "搜尋與過濾進階",
    section: "進階情境實作",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-yellow-400 font-semibold mb-2">練習 6</p>
            <p className="text-slate-300">使用 <code className="text-green-300">find</code> 完成：</p>
            <ul className="text-slate-300 mt-2 space-y-1">
              <li>• 找出 <code className="text-green-300">~/k8s-deploy/</code> 下所有 <code className="text-green-300">.yaml</code></li>
              <li>• 找出所有空目錄</li>
              <li>• 找最近 30 分鐘內修改過的檔案</li>
              <li>• 找 <code className="text-green-300">/var/log/</code> 下大於 10MB 的檔案</li>
              <li>• 找 <code className="text-green-300">~/k8s-deploy/</code> 下所有目錄</li>
            </ul>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl space-y-3">
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 7</p>
              <p className="text-slate-300">使用 <code className="text-green-300">grep</code> 完成：</p>
              <ul className="text-slate-300 mt-2 space-y-1">
                <li>• 遞迴搜尋所有包含 <code className="text-green-300">nginx</code> 的行並顯示檔名 / 行號</li>
                <li>• 在 <code className="text-green-300">/etc/passwd</code> 找出不包含 <code className="text-green-300">nologin</code> 的行</li>
                <li>• 統計所有 YAML 內 <code className="text-green-300">image:</code> 出現次數</li>
                <li>• 搜尋 <code className="text-green-300">replicas</code> 並顯示前後各 1 行</li>
              </ul>
            </div>
            <div>
              <p className="text-yellow-400 font-semibold mb-1">練習 8</p>
              <p className="text-slate-300">解釋這條指令鏈每一段的作用：</p>
              <code className="block mt-2 text-green-300 text-xs bg-slate-900/60 p-2 rounded">find ~/k8s-deploy -name "*.yaml" -type f | grep "prod" | wc -l</code>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `進階 Part 3 參考答案

練習 6：
find ~/k8s-deploy/ -name "*.yaml"
find ~/k8s-deploy/ -type d -empty
find ~ -mmin -30
find /var/log/ -size +10M
find ~/k8s-deploy/ -type d

練習 7：
grep -rn "nginx" ~/k8s-deploy/
grep -v "nologin" /etc/passwd
grep -r "image:" ~/k8s-deploy/ --include="*.yaml" | wc -l
grep -rn -A 1 -B 1 "replicas" ~/k8s-deploy/

練習 8：
- find 先找出所有 yaml 一般檔案
- grep 再過濾只保留路徑中含 prod 的結果
- wc -l 統計符合數量
- 最終輸出是 prod 環境下有多少個 yaml 檔案`,
    duration: "12",
  },

  {
    title: "進階情境 Part 4",
    subtitle: "綜合排查與清理安全",
    section: "進階情境實作",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-red-400 font-semibold mb-2">練習 9</p>
            <p className="text-slate-300">收到應用異常告警，請依序寫出：</p>
            <ol className="text-slate-300 list-decimal list-inside mt-2 space-y-1">
              <li><code className="text-green-300">pwd</code> 確認位置</li>
              <li>切到 <code className="text-green-300">/var/log</code></li>
              <li>依時間排序列出日誌</li>
              <li>用 <code className="text-green-300">tail -f</code> 監控 syslog</li>
              <li>停止監控</li>
              <li>找最近的 error 並只看最後 20 筆</li>
              <li>把結果導到 <code className="text-green-300">~/error-report.txt</code></li>
              <li>用 <code className="text-green-300">cat</code> 確認內容</li>
              <li>統計錯誤數</li>
              <li>用 nano 在檔案最上方加入標題</li>
            </ol>
          </div>
          <div className="bg-slate-800/60 border border-slate-600 p-4 rounded-xl">
            <p className="text-red-400 font-semibold mb-2">練習 10</p>
            <p className="text-slate-300">你要清理舊檔案，請回答：</p>
            <ul className="text-slate-300 mt-2 space-y-1">
              <li>• 找出 <code className="text-green-300">/tmp</code> 超過 7 天沒修改的檔案</li>
              <li>• 找出家目錄下所有大於 100MB 的檔案</li>
              <li>• 刪除 <code className="text-green-300">~/old-project/</code> 前應先做什麼檢查？</li>
              <li>• 安全刪除整個目錄的指令是什麼？</li>
              <li>• 為什麼腳本中要避免直接寫 <code className="text-red-300">rm -rf $DIR/</code>？</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `進階 Part 4 參考答案

練習 9：
pwd
cd /var/log
ls -lt
tail -f syslog
# Ctrl + C 停止
grep -i "error" syslog | tail -n 20
grep -i "error" syslog | tail -n 20 > ~/error-report.txt
cat ~/error-report.txt
wc -l ~/error-report.txt
nano ~/error-report.txt

練習 10：
find /tmp -mtime +7
find ~ -size +100M
ls -la ~/old-project/
rm -r ~/old-project/

腳本風險說明：
- 如果 $DIR 為空，rm -rf $DIR/ 可能退化成 rm -rf /
- 生產環境中一定要先檢查變數是否為空，再執行刪除
- 安全寫法示意：[[ -n "$DIR" ]] && rm -rf "$DIR/"`,
    duration: "18",
  },

  // ===== 32. 總結 =====
  {
    title: "今日下午總結",
    subtitle: "完整指令清單 + 明日預告",
    section: "課程總結",
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-3 gap-3 text-sm">
          {[
            { title: "目錄導覽", cmds: ["cd / cd ~ / cd -", "ls -lah", "pwd + Tab補全"] },
            { title: "目錄檔案操作", cmds: ["mkdir -p", "touch / cp / mv", "rm / rm -r"] },
            { title: "內容查看", cmds: ["cat / cat -n", "less + 搜尋", "head / tail -f", "wc -l"] },
            { title: "nano 編輯", cmds: ["Ctrl+O 存檔", "Ctrl+X 離開", "Ctrl+W 搜尋"] },
            { title: "搜尋工具", cmds: ["grep -r -i -n -v", "find -name -type", "配合 pipe 使用"] },
          ].map((group, i) => (
            <div key={i} className="bg-slate-800/60 border border-slate-600 p-3 rounded-xl">
              <p className="text-blue-400 font-semibold text-xs mb-2">{group.title}</p>
              <ul className="space-y-1">
                {group.cmds.map((cmd, j) => (
                  <li key={j} className="text-slate-300 text-xs font-mono">{cmd}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-yellow-500/10 border border-yellow-500/30 p-3 rounded-lg text-sm">
          <p className="text-yellow-400 font-semibold">🌅 明日課程（第二天早上）</p>
          <p className="text-slate-300 mt-1">套件管理（apt）、程序管理（ps/top/kill）、服務管理（systemctl）、網路工具</p>
        </div>
      </div>
    ),
    notes: `好，今天下午的課程到這裡！讓我們快速回顧一下學了哪些東西。

目錄導覽：cd 搭配絕對路徑和相對路徑、cd ~ 回家目錄、cd - 回上一個目錄；ls -lah 看詳細資訊；pwd 確認位置；Tab 補全和方向鍵歷史這兩個效率技巧。

目錄和檔案操作：mkdir -p 建立多層目錄；touch 建立空檔案；cp 複製；mv 移動和重命名；rm 刪除（要小心！）。

檔案內容查看：cat 看短檔案；less 看大檔案並支援搜尋；head/tail 看頭尾；tail -f 即時追蹤；wc -l 統計行數。

nano 編輯器：進去就可以打字，Ctrl+O 存檔，Ctrl+X 離開，Ctrl+W 搜尋。

搜尋：grep 搜尋文字內容，支援 -r 遞迴、-i 忽略大小寫、-n 行號、-v 反向；find 搜尋檔案存在，支援 -name、-type、-mtime。

這兩天加起來，你已經學完了 Linux 的基礎操作能力。明天我們進入「管理」的層面：怎麼安裝軟體（apt）、怎麼管理執行中的程序（ps/kill）、怎麼管理服務（systemctl）、以及基本的網路工具。

今天學的東西量很多，沒有完全消化是正常的。課後可以在你的練習環境多試幾次，熟能生巧。有問題在 Line 群組發問，我和助教都會回答。

謝謝大家今天的努力！明天見！

回顧一下今天的學習量：從早上到下午，你學了將近二十個 Linux 指令，每個都有實際操作場景。這對很多人來說是相當大的資訊量，如果你現在覺得有點混亂，完全正常——這是「新技能剛進大腦時」的必經階段。

一個心態上的建議：不要試圖「記住所有指令」，重要的是「知道有這個工具，遇到需求時知道去查」。工程師不是靠死背，而是靠知道去哪裡找答案。在 Linux 終端機裡，man 指令（manual）是最重要的查詢工具：man ls 就顯示 ls 的完整說明，man find 顯示 find 的所有選項。每個指令都有 man page（手冊頁面），遇到不熟的選項就查一下，慢慢你就會越來越熟悉。

明天的課程，套件管理（apt install）讓你學會怎麼在 Linux 上安裝軟體；程序管理（ps、top、kill）讓你看到和控制伺服器上執行中的程式；systemctl 讓你啟動、停止、設定自動啟動服務；網路工具（ping、curl）讓你測試連線和抓取網頁。這些能力加上今天學的，就讓你具備了管理一台 Linux 伺服器的完整基礎。

今晚如果有時間，建議在你的練習環境裡自己嘗試一遍今天用過的指令，不看投影片，靠自己回想。能做到多少就做多少，這是鞏固記憶最好的方式。

最後送給大家一句話：「工具是手的延伸，指令是思維的表達。」學 Linux 不只是記一堆指令，而是培養一種思維方式——用精確的語言告訴電腦做什麼。當你越來越熟練，Linux 命令列會變成你效率最高的工作環境。遇到問題，先用 man 指令查手冊，再 Google，再問同事，這是工程師的標準查問順序。有任何課後問題，歡迎在群組發問。明天課程繼續，加油！

今天第一天完整上完，給自己一個肯定！從對 Linux 陌生，到現在能在命令列上流暢移動、建立目錄、編輯檔案、搜尋內容——這是很大的進步，繼續保持。

說到這裡，讓我解釋一下今天學的這些 Linux 基礎，和後面 K8s 課程的連結：

在 K8s 的日常操作中，你幾乎每天都在做這些事：用 kubectl exec -it pod-name -- /bin/bash 進入 Pod 的容器，然後在裡面用 ls、cat、grep 查看設定和日誌；用 tail -f 監控容器日誌；用 find 找設定檔位置；用 nano 或 vi 快速修改設定。換句話說，進入 K8s 的 Pod 之後，你面對的就是一個 Linux 環境，今天學的所有技能都可以直接套用。

如果你還有時間和精力，今晚的功課建議是：把今天下午學的每一個指令，不看投影片，靠自己想一遍，然後在終端機上試試看。不確定的就查 man，比如 man grep 可以看完整的 grep 說明文件。Linux 的 man page 是最權威的參考資料，你所有想問的問題，幾乎都能在 man 裡找到答案。

最後說一句：命令列技能就像打字速度一樣，不是靠理解就能快，要靠大量反覆練習才能讓肌肉記住。每天花個 15 到 20 分鐘在練習環境裡隨便操作，一個月後你會驚訝自己的進步有多大。加油！`,
    duration: "10",
  },

  // ===== 27. Q&A =====
  {
    title: "Q & A",
    subtitle: "今日課程的提問時間",
    section: "Q&A",
    content: (
      <div className="text-center space-y-8">
        <p className="text-7xl">🙋 🐧</p>
        <p className="text-2xl text-slate-300">學了這麼多，有什麼問題嗎？</p>
        <div className="grid md:grid-cols-2 gap-4 max-w-lg mx-auto text-left text-sm">
          <div className="bg-slate-800/50 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">課後練習建議</p>
            <ul className="text-slate-300 space-y-1">
              <li>• 建立自己的練習目錄結構</li>
              <li>• 用 nano 寫一個小筆記</li>
              <li>• 用 grep 在 /etc 找設定</li>
              <li>• 挑戰：用 find 找大檔案</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl">
            <p className="text-blue-400 font-semibold mb-2">明日課程預告</p>
            <ul className="text-slate-300 space-y-1">
              <li>📦 apt 套件管理</li>
              <li>⚙️ ps/top/kill 程序管理</li>
              <li>🔧 systemctl 服務管理</li>
              <li>🌐 ping/curl 網路工具</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `好，開放提問時間！今天學了很多，從 cd 到 grep，從 nano 到 find，你有哪些不清楚的地方？

（等待學員提問，逐一解答）

如果現在沒有問題，課後在 Line 群組裡發問也完全沒問題，我會盡快回答。

課後練習的建議：在你的練習環境裡，嘗試建立一個你自己設計的目錄結構，比如一個假想的網站專案：mkdir -p website/{frontend,backend,docs,config}，然後建立各種空白檔案，試試 cp、mv，用 nano 寫一些內容，再用 grep 找你寫的文字。

最後一個挑戰給有興趣的同學：用 find / -size +100M -type f 找出你的系統裡超過 100MB 的大檔案，看看是什麼。這個指令可能要跑一陣子，而且會產生一些「沒有權限」的錯誤，你可以加 2>/dev/null 把錯誤訊息過濾掉。

好，今天的課程到此結束，明天見！

在等大家提問的過程中，我想補充幾句話。今天你們從零開始，學到了能夠在 Linux 伺服器上移動、建立目錄、操作檔案、查看內容、編輯設定、搜尋資訊——這些組合起來，已經足以讓你完成很多真實的系統維運任務了。要對自己有信心。

課後練習小提示：打開終端機，輸入 history 指令，可以看到今天你輸入過的所有指令的歷史記錄，從頭回顧一遍，相當於複習了整天的操作。這是一個非常快速的複習方法，不需要看投影片，就看自己的歷史紀錄。

明天見！有問題歡迎在課程群組發問，我和助教都會在線上回覆。課後投影片和指令速查表都會寄給大家，隨時可以翻閱複習。今天辛苦了，好好休息！

【預期難搞學員問題 — 第一堂下午】

Q：現在都用 GUI，為什麼還要強調命令列？

A：GUI 適合單機一次性操作，但在伺服器與叢集情境，CLI 才有可重現與可自動化價值。你可以把命令列理解成可版本化的操作紀錄，這是團隊協作與除錯效率的基礎。

Q：rm -rf 這種指令風險太高，實務上怎麼避免事故？

A：先做路徑確認，再做清單預覽，再執行刪除，最後做結果驗證。高風險操作要加雙重防呆，例如先用 ls、find 檢查命中範圍，必要時建立備份。流程比指令本身更重要。

Q：grep、awk、sed 是不是老工具，現在還值得學嗎？

A：值得，因為它們幾乎在每台 Linux 都可用且效能穩定。你在容器節點、最小化映像、臨時故障節點上，往往只有這些工具能立即用。它們是跨環境最可靠的排障語言。

Q：我常遇到 Permission denied，最快排查順序是什麼？

A：先確認你是誰，再確認檔案擁有者與權限位元，最後看父目錄是否可進入。很多人只改檔案不改目錄，或只改模式不改擁有者，會反覆失敗。排查順序固定化就不會亂。

Q：Linux 大小寫區分真的有這麼嚴重嗎？

A：非常嚴重，尤其是腳本、Dockerfile、K8s YAML 鍵名與檔名。你在開發機上僥倖可用，到了 CI 或節點就可能直接失敗。命名規範一致是跨平台穩定性的第一步。

Q：管線指令很容易看不懂，應該怎麼學？

A：把管線拆回單步，每一步都先確認輸出再串下一步。先追求可讀與可驗證，再追求一行炫技。團隊維護時，可讀性永遠比短更重要。

Q：find 掃全系統很慢還會噴權限錯誤，這正常嗎？

A：正常。你應該縮小搜尋範圍、限制類型與深度，再視需求過濾錯誤輸出。工具沒有錯，問題通常是搜尋策略太寬，導致噪音與延遲。

Q：課後練習要怎麼安排，才不會三天後全忘？

A：每天 15 到 20 分鐘，固定練同一組高頻操作，比一次大量練習更有效。建議做最小任務循環：建檔、查找、過濾、修改、驗證。頻率比單次時長更關鍵。`,
    duration: "5",
  },

  // ===== 第二堂課預告 =====
  {
    title: "第二堂課預告",
    subtitle: "Day 2 - Linux 系統管理與實戰",
    section: "預告",
    content: (
      <div className="space-y-6">
        <p className="text-lg text-slate-300 text-center">明天我們將學習更進階的系統管理技能</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-900/30 border border-blue-600 p-4 rounded-xl">
            <p className="text-blue-400 font-bold text-lg mb-3">📦 套件管理</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• apt update / upgrade</li>
              <li>• apt install / remove</li>
              <li>• dpkg 套件查詢</li>
            </ul>
          </div>
          <div className="bg-green-900/30 border border-green-600 p-4 rounded-xl">
            <p className="text-green-400 font-bold text-lg mb-3">⚙️ 程序管理</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• ps / top / htop</li>
              <li>• kill / killall</li>
              <li>• 背景執行與 nohup</li>
            </ul>
          </div>
          <div className="bg-yellow-900/30 border border-yellow-600 p-4 rounded-xl">
            <p className="text-yellow-400 font-bold text-lg mb-3">🔧 服務管理</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• systemctl 基礎操作</li>
              <li>• 服務狀態查看</li>
              <li>• 開機自動啟動</li>
            </ul>
          </div>
          <div className="bg-purple-900/30 border border-purple-600 p-4 rounded-xl">
            <p className="text-purple-400 font-bold text-lg mb-3">🌐 網路工具</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• ping / curl / wget</li>
              <li>• netstat / ss</li>
              <li>• 基礎網路診斷</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg text-center">
          <p className="text-xl text-k8s-blue">🎯 明天見！記得今晚練習一下今天學的指令</p>
        </div>
      </div>
    ),
    notes: `這是第一天課程的最後一頁，預告明天的內容。

明天我們會學習：
1. apt 套件管理：如何安裝、移除、更新軟體套件
2. 程序管理：如何查看正在執行的程序、如何終止程序
3. systemctl 服務管理：如何啟動、停止、重啟系統服務
4. 網路工具：ping、curl、wget 等基礎網路診斷工具

這些技能加上今天學的基礎指令，你就具備了管理 Linux 伺服器的核心能力。

提醒學員今晚可以練習：
- 在自己的 VM 上建立目錄結構
- 用 nano 寫一些筆記
- 用 grep 搜尋自己寫的內容
- 嘗試 sl 和 cowsay 等彩蛋

明天見！`,
    duration: "2",
  },

]
