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
    title: '程式與服務管理',
    subtitle: '第二堂早上 — 讓 Linux 替你做事',
    section: '第二堂課',
    content: (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-k8s-blue rounded-full flex items-center justify-center text-4xl">
            ⚙️
          </div>
          <div>
            <p className="text-2xl font-semibold">程式與服務管理</p>
            <p className="text-slate-400">程序管理、背景執行、systemd、apt、環境變數</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 text-base">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">時間</p>
            <p>09:00 – 12:00（180 分鐘）</p>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold">重點</p>
            <p>讓程式在背景跑、管理系統服務</p>
          </div>
        </div>
      </div>
    ),
    notes: `早安！歡迎大家回來繼續學習。我是彥彤老師，希望大家昨晚休息得不錯，有餘力的同學昨晚應該有回家試著 SSH 連線，把昨天的三個指令再操作了一遍。睡前練習是記憶鞏固的黃金時段，所以昨晚動手的同學，今天學起來會輕鬆很多。

今天的主題叫做「程式與服務管理」，聽起來很硬，但其實是非常實用的技能。今天學完之後，你就能夠：知道系統上有哪些程式在跑、把程式放到背景去執行不佔用終端機、安裝和移除軟體套件、控制系統服務的啟動和停止、設定環境變數讓系統知道指令放在哪裡。這五個能力，是每個 Linux 工程師每天都在用的基本功。

這些技能在 Kubernetes 的日常操作裡會非常頻繁用到，特別是除錯的時候——你需要快速知道哪些 process 在跑、服務有沒有正確啟動、環境變數有沒有設好。今天打好基礎，後面學 K8s 會順很多。舉個例子：當你的 Pod 起不來，你要 exec 進去看容器內部狀況，就是今天要學的這些技能在發揮作用。

先讓我快速確認一下：大家的電腦連線都沒問題嗎？有沒有人昨晚回家試 SSH 連線有遇到問題？有的話現在就可以舉手，助教過去幫忙確認，我們稍後馬上就要用到。沒問題的同學給我一個比讚，我確認一下全員就緒，我們開始！`,
    duration: '3',
  },

  // ========== 課程大綱 ==========
  {
    title: '今日課程大綱',
    section: '課程總覽',
    content: (
      <div className="grid gap-3">
        {[
          { time: '09:00–09:15', topic: '開場與前日複習', icon: '🔄' },
          { time: '09:15–09:45', topic: '程序管理：ps, top, htop, kill, killall', icon: '🔍' },
          { time: '09:45–10:05', topic: '背景與前景：&, nohup, jobs, fg, bg', icon: '🌙' },
          { time: '10:05–10:20', topic: '休息時間', icon: '☕' },
          { time: '10:20–10:50', topic: 'systemd 與服務管理：systemctl', icon: '🛠️' },
          { time: '10:50–11:15', topic: '軟體安裝：apt update / install / remove', icon: '📦' },
          { time: '11:15–11:35', topic: '環境變數：$PATH, export, .bashrc', icon: '🌿' },
          { time: '11:35–11:40', topic: '課程總結', icon: '🎯' },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <p className="text-k8s-blue text-xs">{item.time}</p>
              <p className="text-base">{item.topic}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    notes: `讓我們看一下今天上午的課程安排，這樣大家心裡有個底。

九點到九點十五分是開場和前日複習，確認大家都還記得昨天的內容，SSH 連線都沒問題。

九點十五到九點四十五分進入程序管理，學習怎麼看系統上有哪些程式在跑，以及怎麼終止它們。

九點四十五到十點五分是背景執行，很重要的概念，學了以後你就不用一直盯著終端機等程式跑完，讓它在背景跑就好。

十點五分到十點二十分是十五分鐘休息。

十點二十到十點五十分學 systemd 服務管理，這是 Linux 現代系統的核心，控制服務的啟停。

十點五十到十一點十五分學 apt 套件管理，教你怎麼安裝和移除軟體。

十一點十五到十一點三十五分學環境變數，讓 Linux 知道你的工具放在哪裡。

最後五分鐘課程總結。整個安排非常緊湊，但每個主題都會有實作，大家務必跟上。

讓我解釋一下為什麼這個順序這樣設計，這樣大家學起來才知道整體的脈絡。我們先學程序管理，因為這是最底層的概念——任何在 Linux 上執行的東西都是程序，不管是 nginx 服務還是一個 Python 腳本，本質上都是程序在記憶體裡跑著。懂了程序是什麼、怎麼查看、怎麼終止，才能理解「服務管理」是在管理什麼。接著學背景執行，是因為很多服務都需要在背景長期跑，而不是佔用一個終端機視窗。然後學 systemd，它是管理這些後台服務的高層框架，也是現代 Linux 的基礎架構。apt 讓你有能力安裝任何你需要的工具和套件。最後的環境變數則是讓所有工具能夠正確被系統找到、讓設定能夠持久存在的關鍵機制。每一個主題都為下一個打基礎，是有邏輯順序的。

學完今天上午之後，你應該能夠做到這幾件事：在一台不熟悉的伺服器上，快速了解目前有哪些服務在跑、它們的狀態如何、資源使用情況；知道一個服務掛掉了，第一步要怎麼診斷；能夠安裝任何你需要的工具；設定好工作環境，讓指令可以在任何地方被找到、設定自己的 alias 提升效率。這些都是工程師上工第一天就需要具備的基本技能，也是後面學 Docker 和 Kubernetes 的基礎。

有幾個學習小建議跟大家分享。今天的實作很多，請務必跟著動手操作，不要只是看。看懂和會做是完全不同的兩個層次，工作中需要的是後者。如果某個步驟沒跟上，請馬上舉手，不要等到後面更複雜的內容才說不會——因為後面的內容都建立在前面的基礎上，一個環節沒學到，後面會越來越難跟上，最後只會越來越挫折。助教就在旁邊，任何時候都可以舉手求助，這不是示弱，這是聰明地利用資源。另外，今天下課後請把今天的操作回家再做一遍，不看投影片、從記憶中把整個流程跑一遍，如果卡住了再查，這種主動提取的練習，是記憶鞏固效果最好的方法，遠比反覆看教材管用得多。`,
    duration: '2',
  },

  // ========== 前日複習 ==========
  {
    title: '前日複習',
    subtitle: '溫故而知新，確認基礎打穩了',
    section: '開場複習',
    content: (
      <div className="space-y-5">
        <p className="text-lg text-slate-300">昨天我們學了哪些東西？</p>
        <div className="grid gap-3">
          {[
            {
              topic: 'Linux 基礎概念',
              detail: '一切皆是檔案、檔案系統樹狀結構、使用者與權限',
              icon: '🐧',
            },
            {
              topic: 'SSH 遠端連線',
              detail: 'ssh user@ip、第一次連線確認指紋、登出用 exit',
              icon: '🔐',
            },
            {
              topic: '基礎指令',
              detail: 'ls、cd、pwd、mkdir、cp、mv、rm、cat、nano',
              icon: '💻',
            },
            {
              topic: '檔案與目錄操作',
              detail: '相對路徑 vs 絕對路徑、~ 代表家目錄',
              icon: '📁',
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-k8s-blue">{item.topic}</p>
                <p className="text-slate-400 text-sm">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold">❓ 現場快問快答</p>
          <p className="text-slate-300">怎麼列出目前目錄的所有檔案（含隱藏）？</p>
        </div>
      </div>
    ),
    notes: `好，開始之前先來一個快速的複習。我問幾個問題，大家舉手回答，不用擔心答錯，這是為了幫助大家把昨天的記憶喚醒，同時讓我知道大家的狀況，這樣今天的課程節奏我可以調整。

第一個問題：想查看目前在哪個目錄，用什麼指令？對，就是 pwd，Print Working Directory。注意 Linux 指令大多數都是縮寫，記住它的英文全名比死背更容易記憶，pwd 就是「印出工作目錄」的意思。

第二個問題：要切換到上一層目錄，怎麼打？cd 兩個點，cd ..，對！兩個點代表上一層目錄，一個點代表目前目錄，這個符號在 Linux 裡到處都會用到，要記清楚。

第三個問題：要列出目前目錄所有檔案，包括隱藏檔案，要用什麼指令？ls -a，對！-a 是 all 的意思，Linux 的隱藏檔案是用點開頭命名的，比如 .bashrc、.ssh，這些都是重要的設定檔，今天下午我們還會接觸到 .bashrc。

第四個問題：要刪除一個目錄和裡面所有的東西，怎麼下指令？rm -rf 目錄名稱。記得 -r 是遞迴刪除子目錄，-f 是強制不詢問。這個指令要特別小心用——Linux 沒有垃圾桶這個概念，rm 刪掉就真的消失了，不像 Windows 可以從資源回收桶救回來。這也是為什麼工程師有個玩笑話：「Linux 最危險的指令就是 rm -rf /」，別在生產伺服器上試。

第五個問題：要複製一個檔案，指令是什麼？cp 來源 目標。cp 是 copy 的縮寫，cp 後面接來源路徑，再接目的地路徑，語法記清楚了。

昨天有做回家作業的同學舉個手看看？太好了！有做作業的同學今天的吸收會快很多，因為肌肉記憶已經建立起來了。沒做的同學也沒關係，今天下課後把昨天的作業補上，然後今天的實作認真跟著操作，一樣能學會。

好，基礎確認完畢。我們今天從程序管理開始，這是一個非常實用的技能，在工作中你會非常頻繁用到它——不管是日常維運還是除錯，都要懂得看系統上跑了什麼、怎麼終止不需要的程序。

讓我補充幾個昨天學到的重要概念，趁複習的機會加深印象。第一個是關於使用者與權限的概念。Linux 是多使用者的作業系統，每個檔案都有擁有者、群組，以及讀（r）、寫（w）、執行（x）三種權限。用 ls -l 看到 -rwxr-xr-- 這樣的字串，前三個字元是擁有者的權限，接下來三個是群組的權限，最後三個是其他所有人的權限。chmod 修改權限、chown 改變擁有者，這兩個指令在管理服務設定時非常常用。

關於路徑的概念也要再強調一下：絕對路徑以斜線開頭，從根目錄出發，不管你現在在哪個目錄都有效；相對路徑不以斜線開頭，相對於目前所在目錄。在後面修改設定檔的時候，你會看到大量絕對路徑，像是 /etc/nginx/nginx.conf、/var/log/syslog 這樣的路徑，這些都是 Linux 檔案系統樹上的固定位置，記幾個常用的很有幫助。

nano 的操作也要再複習一遍，因為接下來今天會大量使用：Ctrl+O 存檔（Output），按完之後還要按 Enter 確認檔名；Ctrl+X 退出；Ctrl+W 搜尋文字；Ctrl+K 剪下整行；Ctrl+U 貼回剪下的行；Ctrl+G 打開說明。很多同學會卡在「怎麼存檔退出」，熟練這幾個快捷鍵很重要。

最後，man 指令是你學 Linux 最好的夥伴。man ls 打開 ls 的完整使用手冊，man systemctl 查看 systemctl 的所有選項，按 q 退出。遇到任何不確定的指令，先用 man 查，裡面有完整的說明和範例。很多工程師工作十幾年還是每天查 man，這不代表你不行，而是善用工具的智慧。查完手冊如果還是不懂，再搜尋網路或問助教，這是學習新指令最有效率的路徑。`,
    duration: '10',
  },

  // ========== 程序管理：概念 ==========
  {
    title: '程序管理',
    subtitle: '誰在我的 Linux 裡面跑？',
    section: '程序管理',
    content: (
      <div className="space-y-5">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-lg font-semibold text-k8s-blue mb-2">什麼是「程序」（Process）？</p>
          <p className="text-slate-300">
            程式（program）是硬碟上的執行檔；程序（process）是程式被載入記憶體並實際執行時的狀態。
            每個程序都有一個唯一的 <span className="text-green-400 font-mono font-bold">PID</span>（Process ID）。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">常用工具</p>
            <ul className="space-y-2 text-slate-300 font-mono">
              <li><span className="text-green-400">ps</span> — 快照目前程序</li>
              <li><span className="text-green-400">top</span> — 即時動態監控</li>
              <li><span className="text-green-400">htop</span> — top 的進化版</li>
              <li><span className="text-green-400">kill</span> — 終止程序</li>
              <li><span className="text-green-400">killall</span> — 依名稱終止</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-semibold mb-2">為什麼重要？</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>• 找出吃掉資源的程式</li>
              <li>• 終止當掉的應用程式</li>
              <li>• 確認服務有沒有在跑</li>
              <li>• K8s 容器除錯必備</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    notes: `什麼是程序？先搞清楚這個概念很重要，因為後面的指令都圍繞著它轉。很多初學者把「程式」和「程序」搞混，今天我們來把這個概念說清楚。

用一個比喻：程式（program）就像食譜，是靜靜躺在書架上的一本書，不佔空間不消耗能量。你安裝 nginx，硬碟上就多了一堆執行檔，這就是「程式」的狀態。當你打開食譜開始做菜，這個「做菜的過程」就是程序（process）——它需要用到廚具、爐火、食材，也就是 CPU、記憶體、磁碟等資源。同一本食譜可以同時被多個人拿來做菜，這就是同一個程式可以同時跑多個程序的概念。比如你可以同時跑兩個 python3 的程序，它們共用同一份程式碼，但各自佔用獨立的記憶體空間、各自有自己的 PID。

每一個程序都有一個獨一無二的 PID（Process ID），就像每個人有自己的身份證號碼。你可以用 PID 來指定操作某個特定的程序，比如終止它或查看它的詳細資訊。PID 是從 1 開始往上計數的，系統重啟後會重新計數。

程序之間還有「父子關係」。你在 bash 裡執行一個指令，那個指令的程序就是 bash 的子程序。父程序結束了，子程序可能也跟著結束，這個機制跟今天後面要學的背景執行和 nohup 息息相關。

在 Linux 系統上，從你登入的那一刻起，就已經有幾百個甚至上千個程序在跑了：有負責系統初始化的 systemd（PID 1）、有 SSH 連線的 sshd、有你的 shell（bash 或 zsh）、有各種背景服務。這些程序共同維持著系統的運作。你可以把它想成一個龐大的生態系統，每個程序各司其職。

一個程序從誕生到消亡，會經歷幾個不同的狀態，這些狀態用 ps aux 的 STAT 欄位顯示。最常見的是 S（Sleeping），代表程序在等待某件事發生，比如等網路封包、等使用者輸入，這段時間 CPU 是閒著的。R（Runnable/Running）代表程序正在 CPU 上執行，或已就緒等待 CPU 分配時間片。D（Uninterruptible Sleep）代表程序在等待磁碟 I/O 完成，這種狀態不可被信號中斷，如果你看到大量 D 狀態程序，通常代表磁碟是系統瓶頸。T（Stopped）代表程序被暫停，就是你按 Ctrl+Z 之後的狀態。Z（Zombie）代表程序已經結束，但父程序還沒回收它的退出狀態，殭屍程序不佔 CPU 和記憶體，但大量殭屍代表有 bug 的父程序值得調查。

在容器化的世界裡，理解程序還有一個特別重要的面向：每個容器都有自己獨立的程序命名空間（PID namespace）。容器內看到的 PID 1 是容器的入口點程式（entrypoint），而不是宿主機的 systemd。這也是為什麼容器不需要 systemd、為什麼容器的應用程式要直接在前景執行而不是被 systemd 管理。理解這個，後面學容器設計的時候，你就知道為什麼容器的哲學和傳統 VM 不一樣，這是很多初學者困惑的根源。

管理這些程序是 Linux 管理員的日常工作之一，也是在 Kubernetes 裡面除錯的基礎技能——當你 kubectl exec 進一個容器，需要知道裡面什麼程序在跑、哪個程序可能出了問題，這些都是今天要學的技能。`,
    duration: '5',
  },

  // ========== ps 指令 ==========
  {
    title: 'ps — 程序快照',
    subtitle: '查看目前有哪些程序在執行',
    section: '程序管理',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          {[
            {
              cmd: 'ps',
              desc: '只顯示目前 shell 相關的程序',
              output: 'PID  TTY   TIME     CMD\n1234 pts/0 00:00:00 bash\n1567 pts/0 00:00:00 ps',
            },
            {
              cmd: 'ps aux',
              desc: '顯示所有使用者的所有程序（最常用）',
              output: 'USER  PID  %CPU %MEM  COMMAND\nroot   1   0.0  0.1  systemd\n...',
            },
            {
              cmd: 'ps aux | grep nginx',
              desc: '用 grep 過濾，只看 nginx 相關程序',
              output: 'www-data 1234 0.0 0.1 nginx: worker process',
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="bg-slate-700/50 px-4 py-2 flex items-center justify-between">
                <code className="text-green-400 font-mono font-bold">{item.cmd}</code>
                <span className="text-slate-400 text-sm">{item.desc}</span>
              </div>
              <pre className="px-4 py-2 text-xs text-slate-400 font-mono">{item.output}</pre>
            </div>
          ))}
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg text-sm">
          <p className="text-yellow-400 font-semibold">💡 aux 是什麼意思？</p>
          <p className="text-yellow-200">a = 所有使用者的程序 ｜ u = 顯示使用者名稱 ｜ x = 包含沒有終端機的程序</p>
        </div>
      </div>
    ),
    notes: `來學第一個程序管理工具：ps。ps 是 Process Status 的縮寫，就是「程序狀態」，顯示目前系統上執行中的程序快照。為什麼說是快照？因為 ps 執行一次就結束，它呈現的是那個瞬間的程序狀態，不會持續更新。

最基本的 ps 只顯示跟你目前 shell 相關的程序，通常只有兩三行——bash 和 ps 本身。這個版本在日常工作中用途有限，大多數情況你都需要看所有的程序。

實際工作中最常用的是 ps aux，這個組合會列出系統上所有使用者的所有程序。來解釋一下 aux 三個字母的意義：a 是 all，顯示所有使用者的程序，不只自己的；u 是 user-oriented，以使用者友善的格式顯示，包含使用者名稱、CPU 和記憶體使用率等欄位；x 是 without tty，包含那些沒有綁定到終端機（tty）的程序，比如背景服務。輸出欄位包括：USER（哪個使用者啟動的）、PID（程序 ID）、%CPU（CPU 使用率）、%MEM（記憶體使用率）、VSZ（虛擬記憶體大小）、RSS（實際佔用記憶體）、STAT（程序狀態）、START（啟動時間）、COMMAND（指令名稱和參數）。

STAT 欄位的值很重要：S 代表 Sleeping（等待中）、R 代表 Running（執行中）、Z 代表 Zombie（殭屍程序，已結束但父程序還沒回收）、T 代表 Stopped（暫停）。你看到 Z 的時候要注意，代表有程序沒被正確清理。

ps aux 的輸出通常很長，可能有幾百行，所以我們經常把它跟 grep 指令搭配使用，用管道符號 | 把輸出傳給 grep 過濾。比如 ps aux | grep nginx，就只看跟 nginx 相關的行。這個管道配 grep 的組合，是 Linux 最常見的操作模式之一。

管道符號 | 是 Linux 的哲學精髓：每個指令只做一件事，但可以把多個指令串起來，組合出複雜的功能。前一個指令的輸出，直接變成下一個指令的輸入，就像工廠的流水線。ps aux 把所有程序列出來，grep nginx 從中過濾找 nginx，整個過程在一行完成。以後你還會看到 ps aux | grep nginx | awk '{print $2}' 這樣的三段串接，用 awk 只取出 PID 欄位。

現在大家跟著操作：先輸入 ps，看看輸出有幾行；然後輸入 ps aux，看看有多少行（可能要滾動才能看完）；最後試試 ps aux | grep bash，過濾出 bash 相關的程序。注意你應該會看到兩行：一行是你的 bash 本身，另一行是 grep bash——因為 grep 指令執行的那個瞬間，grep bash 這個程序自己也出現在程序列表裡了。這是一個有趣的小細節，可以跟朋友講。大家操作看看，有問題舉手。

補充幾個 ps 輸出欄位的說明。VSZ 是虛擬記憶體大小，RSS 是常駐實體記憶體（Resident Set Size）。VSZ 通常遠大於 RSS，因為包含了映射但還沒用到的記憶體空間，不用擔心。真正要關心的是 RSS，代表這個程序目前實際佔用的實體記憶體。%CPU 如果超過 100，代表用到了多個 CPU 核心，在多核機器上是正常的。

STAT 欄位值得仔細看：R 是 Running（執行中）、S 是 Sleeping（等待中）、D 是 Uninterruptible Sleep（等待 I/O，不可中斷，磁碟忙碌時常見）、T 是 Stopped（已暫停）、Z 是 Zombie（殭屍程序，子程序已結束但父程序還沒回收）。看到大量的 Z 就要注意，代表程式有 bug 或是父程序有問題，沒有正確呼叫 wait() 回收子程序。少量殭屍是正常的，多了才要調查。

ps aux --sort=-%cpu 可以按 CPU 使用率降序排列，快速找到最耗資源的程序。ps axjf 以樹狀圖顯示父子程序關係，讓你一眼看出哪些程序是誰的子程序，對了解系統的程序層級很有幫助。這些進階用法在沒有 htop 的精簡環境下特別實用。`,
    duration: '10',
  },

  // ========== top / htop ==========
  {
    title: 'top 與 htop — 即時監控',
    subtitle: '動態觀察系統資源使用狀況',
    section: '程序管理',
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-k8s-blue font-bold text-xl mb-2 font-mono">top</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>✅ 系統內建，一定有</li>
              <li>✅ 即時更新 CPU、MEM</li>
              <li>⚠️ 介面比較陽春</li>
              <li className="text-slate-400 font-mono">按 q 離開 | 按 M 依記憶體排序</li>
            </ul>
          </div>
          <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
            <p className="text-green-400 font-bold text-xl mb-2 font-mono">htop</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li>✅ 彩色介面、更易讀</li>
              <li>✅ 可以用滑鼠操作</li>
              <li>✅ 直接在介面 kill 程序</li>
              <li className="text-slate-400 font-mono">需要 apt install htop</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">top 常用快捷鍵</p>
          <div className="grid grid-cols-3 gap-2 font-mono text-sm">
            {[
              { key: 'q', desc: '離開' },
              { key: 'M', desc: '依記憶體排序' },
              { key: 'P', desc: '依 CPU 排序' },
              { key: 'k', desc: '輸入 PID 終止程序' },
              { key: '1', desc: '顯示每顆 CPU' },
              { key: 'h', desc: '說明' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <kbd className="bg-slate-600 px-2 py-1 rounded text-white">{item.key}</kbd>
                <span className="text-slate-400">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    notes: `ps 是快照，執行一次就看到那個時刻的程序狀態；top 是影片，可以持續追蹤程序的動態變化。這個差異非常重要——如果你要找「哪個程序在偷偷吃掉 CPU」，ps 只能看到那一刻，有可能剛好在 CPU 沒在高峰的時候執行，就看不出來；但 top 是持續監控，幾秒刷一次，你就能觀察到動態的變化趨勢。

輸入 top 按 Enter，畫面會自動更新，大約每三秒刷一次。畫面分成上下兩個區塊。上半部是系統整體摘要：第一行顯示系統運行時間和 load average（系統平均負載，三個數字分別是過去 1 分鐘、5 分鐘、15 分鐘的平均值，數字小於 CPU 核心數代表系統不忙）；第二行是任務統計，有幾個程序在跑、幾個在 sleeping、幾個 stopped；第三行是 CPU 使用率細節，us 是使用者程式、sy 是系統核心、id 是閒置時間；第四、五行是記憶體和 Swap 的使用狀況。下半部是程序列表，預設依 CPU 使用率排序，最耗 CPU 的程序排在最上面。

這對找出「哪個程式在吃 CPU」非常有用。我在公司工作的時候，有一次資料庫伺服器突然變很慢，所有 query 都 timeout，我 SSH 進去打了 top，一眼就看到有個 Java 程序把 CPU 吃到 300%（多核心）。那個程序是一個有 bug 的批次任務跑進無窮迴圈，用 kill 把它終止，伺服器立刻恢復正常。這就是 top 的威力。按 M 可以改成依記憶體排序，P 回到 CPU 排序。按 q 離開 top。

top 的快捷鍵值得多記幾個：按 k 可以直接輸入 PID 終止程序，不用離開 top 再去打 kill 指令；按 1 可以顯示每顆 CPU 核心的獨立使用率，對多核心伺服器很有用；按 u 可以過濾特定使用者的程序；按 d 或 s 可以改變刷新間隔秒數。

htop 是 top 的加強版，有漂亮的彩色介面，彩色長條圖顯示每顆 CPU 和記憶體使用率，看起來更直覺也更好讀。它可以用鍵盤方向鍵選擇程序，直接按 F9 選擇要傳送的 signal 來終止程序，或按 F10 離開。你也可以用滑鼠點選！htop 預設沒有安裝，但等一下學了 apt 之後馬上就可以用一行指令裝好。在能選擇的情況下，我個人更推薦用 htop，因為介面直覺很多，操作也更友善。

現在大家跟著輸入 top，先感受一下這個動態的畫面。觀察一下你的系統上哪些程序在跑、CPU 和記憶體的使用率各是多少。試著按 M 和 P 切換排序方式，試試按 1 看每顆 CPU，然後按 q 離開。

還有幾個 top 的實用技巧：按 e 可以切換記憶體顯示單位，從 KB 改成 MB 或 GB，在大記憶體伺服器上更容易閱讀。Load Average 那三個數字非常重要，如果持續大於你的 CPU 核心數，代表系統處於超載狀態，任務在排隊等 CPU。在 Kubernetes 節點出問題的時候，top 是確認節點是否過載的第一個工具，過高的 load average 可能導致 Pod 調度延遲或 kubelet 心跳超時，是節點 NotReady 的常見原因之一。

Load Average 的解讀再深入一點：三個數字分別代表過去 1 分鐘、5 分鐘、15 分鐘的平均負載。如果你有 4 個 CPU 核心，那 load average 小於 4 代表系統有餘裕；等於 4 代表剛好滿負荷；大於 4 代表有任務在排隊等 CPU，系統可能感覺變慢。觀察三個數字的趨勢也很重要：如果 1 分鐘的值遠大於 15 分鐘的值，代表最近突然出現高負載，可能是某個任務突然跑起來了；如果 1 分鐘小於 15 分鐘，代表負載在下降，系統在恢復中。這個趨勢分析比單一數值更有診斷價值。

%wa 這個欄位也值得特別注意：它是 I/O wait，代表 CPU 在等待磁碟或網路 I/O 完成的時間比例。正常情況下 wa 應該很低（0-5%），如果 wa 很高（超過 20%），代表磁碟是瓶頸，CPU 在等磁碟，這時候問題不是 CPU 不夠快，而是磁碟 I/O 成為了效能瓶頸，可能需要換 SSD、換更快的儲存方案、或是減少 I/O 操作。在 Kubernetes 節點上，如果 etcd 的磁碟讀寫成為瓶頸，你就會看到 wa 飆高，同時 API server 回應變慢、Pod 調度延遲。這是一個經典的生產環境問題。

top 的 us（user space）和 sy（kernel/system space）比例也能透露一些訊息。正常情況下 us 遠大於 sy；如果 sy 異常高，可能代表有大量的系統呼叫（syscall），比如大量的 fork/exec（容器快速啟停）或網路封包處理（DDoS 攻擊），這種情況在 K8s 叢集裡有時候會出現，需要進一步用 perf 或 strace 這樣的進階工具深入分析。這些是進階知識，現在先有個印象，等你真的在生產環境遇到這類問題的時候，知道往這個方向去找原因。`,
    duration: '8',
  },

  // ========== kill / killall ==========
  {
    title: 'kill 與 killall — 終止程序',
    subtitle: '優雅地，或強制地，結束程序',
    section: '程序管理',
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-3">常用 Signal</p>
          <div className="grid grid-cols-3 gap-3 text-sm">
            {[
              { sig: 'SIGTERM (15)', cmd: 'kill PID', color: 'text-green-400', desc: '請你自己關掉（優雅終止）' },
              { sig: 'SIGKILL (9)', cmd: 'kill -9 PID', color: 'text-red-400', desc: '強制終止，不給收尾機會' },
              { sig: 'SIGHUP (1)', cmd: 'kill -1 PID', color: 'text-yellow-400', desc: '讓程序重新讀取設定' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-700/50 p-3 rounded-lg">
                <p className={`font-mono font-bold ${item.color}`}>{item.sig}</p>
                <p className="font-mono text-xs text-slate-300 mt-1">{item.cmd}</p>
                <p className="text-xs text-slate-400 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="bg-slate-700/50 px-4 py-2 text-k8s-blue font-semibold text-sm">kill（依 PID）</div>
            <pre className="px-4 py-3 text-sm text-green-400 font-mono">{`# 先找到 PID
ps aux | grep sleep
# 然後終止它
kill 1234
kill -9 1234`}</pre>
          </div>
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="bg-slate-700/50 px-4 py-2 text-k8s-blue font-semibold text-sm">killall（依程序名稱）</div>
            <pre className="px-4 py-3 text-sm text-green-400 font-mono">{`# 終止所有叫 nginx 的程序
killall nginx
# 強制終止
killall -9 firefox`}</pre>
          </div>
        </div>
        <div className="bg-red-900/30 border border-red-700 p-3 rounded-lg text-sm">
          <p className="text-red-400 font-semibold">⚠️ kill -9 的代價</p>
          <p className="text-slate-300">強制終止不給程序收尾，可能導致資料損毀或 port 沒釋放，非不得已不要用</p>
        </div>
      </div>
    ),
    notes: `知道程序在跑之後，有時候需要終止它。也許它卡住了、也許它在吃太多資源、也許你的應用程式需要重啟，這時候就需要 kill 指令。

kill 指令的名字雖然叫「殺」，但它其實是在「傳送信號」（send signal）給程序，不一定真的是要殺死它。Linux 定義了幾十種不同的信號，每種信號有不同的語意。程序收到信號之後，可以選擇怎麼回應——當然，有些信號是不能忽略的，比如 SIGKILL。

最常用的信號有三種。第一個是 SIGTERM，信號編號 15，這是 kill 指令的預設信號，如果你只打 kill PID，就是送 SIGTERM。這個信號等於禮貌地跟程序說：「請你自己關掉。」程序收到後可以選擇先做清理工作，比如把還沒寫入磁碟的資料先 flush、釋放鎖定的資源、關閉資料庫連線，然後乾淨地退出。這是最正確的終止方式，應該永遠先試這個。

第二個是 SIGKILL，信號 9，這是強制終止，沒有商量餘地。你發送這個，作業系統直接把這個程序的記憶體釋放掉，不給它任何收尾機會。這個信號程序無法忽略也無法攔截，一定會終止。但代價是可能有資料損毀（比如剛好在寫檔案一半被中斷）、暫時性的 port 沒被釋放、lock 檔案沒被清理等問題。所以 kill -9 應該是最後手段，先試 SIGTERM，等幾秒看有沒有自己關掉，如果還是不動才用 SIGKILL。

第三個是 SIGHUP，信號 1，歷史上是「終端機掛斷」的信號，但現在很多服務把它重新定義為「重新讀取設定檔」。比如 nginx 或 sshd 收到 SIGHUP 就會重新載入設定，效果跟 systemctl reload 一樣，不用真的重啟服務，所有現有連線都不會中斷。

使用方式：先用 ps aux | grep 程序名 找到 PID，記下那串數字，然後 kill PID。如果程序在幾秒內還沒消失，再用 kill -9 PID 強制終止。用 ps aux | grep 程序名 再確認一次，確定程序已經消失了。

killall 更方便，直接用程序名稱，不用找 PID。killall nginx 會把所有叫 nginx 的程序都終止掉。注意 killall 是依程序名稱完全比對的，所以 killall ngin 是找不到 nginx 的。如果想用部分名稱比對，用 pkill nginx，pkill 支援正規表示式。

現在大家來做一個小實作：在終端機輸入 sleep 300 &（& 符號稍後會詳細說明，現在先跟著打），然後用 ps aux | grep sleep 找到它的 PID，再用 kill [PID] 把它終止，最後再執行一次 ps aux | grep sleep 確認它不見了。這個流程是工程師日常除錯的標準動作，多練幾次就記住了。

除了 kill 和 killall，還有幾個實用的相關工具值得認識。pkill 和 killall 類似，但使用上更靈活——pkill 支援用正規表示式比對程序名稱，而不是完全比對。pkill nginx 會終止所有名稱包含 nginx 的程序。pkill -u student 可以終止某個特定使用者的所有程序，在多使用者環境下很有用，比如某個使用者跑的程序佔了太多資源。

pgrep 是 pkill 的「只找不殺」版本，它只輸出符合條件的程序 PID，讓你可以先確認會影響哪些程序再決定要不要終止。pgrep nginx 列出所有 nginx 程序的 PID。你可以用指令替換搭配 kill：kill $(pgrep nginx)，把 pgrep 的輸出直接傳給 kill，效果等同 killall nginx 但更靈活。

kill -l 可以列出系統支援的所有信號名稱和編號，總共有幾十個，但工作中常用的就那幾個：1（SIGHUP，重載設定）、2（SIGINT，等同 Ctrl+C）、9（SIGKILL，強制終止）、15（SIGTERM，優雅終止）、19（SIGSTOP，等同 Ctrl+Z 暫停）、18（SIGCONT，繼續暫停的程序）。特別是 kill -CONT PID 可以讓一個被 Ctrl+Z 暫停的程序在背景繼續跑，等同於先 Ctrl+Z 再 bg，但可以從另一個終端機對任意程序用，不受 shell 工作列表的限制。

殭屍程序（Zombie process）的清理也是常見問題。殭屍程序已經執行完畢，但父程序沒有呼叫 wait() 回收它的退出狀態，所以它的 PCB（程序控制區塊）還留在系統裡。你無法直接 kill 殭屍程序（它已經死了），正確做法是找到父程序（ps -o ppid= -p 殭屍PID），對父程序送 SIGCHLD 信號（kill -CHLD 父PID），觸發父程序回收子程序。如果父程序本身有問題，就直接 kill 父程序，父程序死後它的所有殭屍子程序會被 PID 1（init/systemd）收養並自動清理。少量殭屍程序是正常的，如果系統上殭屍程序越來越多，就要調查是哪個程式的 bug 導致沒有正確回收子程序。`,
    duration: '7',
  },

  // ========== 背景與前景 ==========
  {
    title: '背景執行：& 與 nohup',
    subtitle: '讓程式在背景跑，終端機還給你',
    section: '背景與前景',
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-green-400 font-mono font-bold text-xl mb-2">&amp;</p>
            <p className="text-slate-300 text-sm mb-3">在指令結尾加 &amp;，程序會在背景執行，終端機立刻回來</p>
            <pre className="text-xs text-green-400 font-mono">{`# 前景執行（會卡住）
sleep 60

# 背景執行
sleep 60 &
# → [1] 1234 (工作編號 和 PID)`}</pre>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-lg">
            <p className="text-yellow-400 font-mono font-bold text-xl mb-2">nohup</p>
            <p className="text-slate-300 text-sm mb-3">離開 SSH 後程序繼續跑（忽略 SIGHUP 信號）</p>
            <pre className="text-xs text-green-400 font-mono">{`# 離開 SSH 後繼續執行
nohup python3 server.py &

# 輸出會存到 nohup.out
tail -f nohup.out`}</pre>
          </div>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">比較：有沒有 nohup 的差異</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-400 mb-1">單純 &amp;</p>
              <p className="text-slate-300">SSH 一斷線，程序就死掉（收到 SIGHUP）</p>
            </div>
            <div>
              <p className="text-slate-400 mb-1">nohup &amp;</p>
              <p className="text-slate-300">SSH 斷線後，程序繼續存活 ✅</p>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `現在來講一個很實用的概念：背景執行。這個功能在日常的 Linux 操作和伺服器管理中，幾乎每天都會用到。

先想像一個場景：你 SSH 進一台伺服器，要跑一個資料備份的腳本，預計要跑兩個小時。如果你直接執行，終端機就會卡在那裡，你什麼都不能做，只能盯著畫面等。而且更糟糕的是：如果你的筆電睡眠了、網路不穩、或是你不小心關掉了終端機，SSH 連線一斷，備份程序就死了，前功盡棄，可能已經備份到一半的資料還要重來。這種事在我剛開始工作的時候就遇過，非常崩潰。

解決方法是把程式放到「背景」執行。最簡單的方式就是在指令後面加一個 & 符號（ampersand，發音 「ampersand」）。比如 sleep 60 &，執行後終端機會立刻回來給你，同時程序在背景繼續跑。系統會顯示工作編號和 PID，比如 [1] 1234，方括號裡的 1 是工作編號（這個 shell session 裡的第幾個工作），後面的 1234 是 PID。你拿到 PID 之後，就可以用 ps 或 kill 來管理它。

但是，只用 & 有一個致命的問題：如果你的 SSH 連線斷掉了，Shell 會傳送 SIGHUP 信號給所有的子程序，你的背景程序也會跟著死掉。這在伺服器管理上是個大問題——網路有時候不穩、有時候 VPN 會斷線、有時候你的公司網路在夜間會踢閒置連線。所以單純用 & 是不夠安全的。

解決方案是 nohup，名字就是「No Hang Up（不要因掛斷而停止）」的意思。在指令前面加上 nohup，程式就會忽略 SIGHUP 信號，即使 SSH 斷線，程序依然繼續在伺服器上跑。就算你關掉電腦、去睡覺，伺服器上的程序還是好好地跑著，第二天早上連回去，程序已經跑完了，結果乾乾淨淨地在 nohup.out 裡等著你。

nohup 的輸出預設會被寫入 nohup.out 這個檔案（在你執行指令的目錄裡），因為 SSH 斷掉之後就沒有終端機可以顯示了，所以輸出只能寫到檔案。你可以用 tail -f nohup.out 即時追蹤輸出，-f 是 follow 的意思，有新的行就會自動顯示。你也可以在指令裡明確指定輸出檔案：nohup python3 backup.py > backup.log 2>&1 &，這樣 stdout 和 stderr 都會寫進 backup.log。

所以最完整的背景執行寫法是：nohup 你的指令 &——既能讓終端機立刻回來，又能確保斷線後程序繼續跑。這個 nohup & 的組合，在沒有 systemd 可用的情況下，是最簡單的讓程序長期在背景執行的方法。在 Kubernetes 的世界裡，你可能在容器的 entrypoint script 裡看到類似的寫法。

現在大家來做個實驗：先試試 sleep 30 &，看到工作號碼和 PID；然後試試 nohup sleep 60 &，看看 nohup.out 有沒有被建立。

補充一個進階的背景執行工具：tmux（Terminal Multiplexer）。tmux 可以讓你建立可以「掛起」和「恢復」的終端機會話，即使 SSH 斷線，掛起的 tmux session 還在伺服器上繼續跑。重新連上後執行 tmux attach，就回到離開前的狀態，就像從沒有斷線一樣。tmux 的安裝非常簡單：sudo apt install tmux。基本操作只需要記三個：tmux 建立新 session；在 session 裡按 Ctrl+B 然後按 D 把 session 掛起（detach）；回到 shell 後輸入 tmux attach 重新連回。tmux 還能在同一個視窗裡分割出多個面板，讓你同時看多個終端機，是正式工作中長期管理伺服器的標準工具，強烈建議大家回家練習。相比 nohup，tmux 更強大，因為你可以隨時回來繼續互動，而不只是讓程序在背景跑。`,
    duration: '10',
  },

  // ========== jobs / fg / bg ==========
  {
    title: 'jobs, fg, bg — 工作管理',
    subtitle: '在前景與背景之間切換',
    section: '背景與前景',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          {[
            {
              cmd: 'jobs',
              desc: '列出目前 Shell 的所有背景工作',
              example: '[1]+  Running   sleep 300 &\n[2]-  Stopped  nano file.txt',
            },
            {
              cmd: 'fg %1',
              desc: '把工作 1 拉回前景',
              example: '工作 1 回到前景，終端機被它佔用',
            },
            {
              cmd: 'bg %1',
              desc: '把暫停的工作 1 繼續在背景執行',
              example: '[1]+ sleep 300 &',
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between bg-slate-700/50 px-4 py-2">
                <code className="text-green-400 font-mono font-bold">{item.cmd}</code>
                <span className="text-slate-400 text-sm">{item.desc}</span>
              </div>
              <pre className="px-4 py-2 text-xs text-slate-400 font-mono">{item.example}</pre>
            </div>
          ))}
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-1">💡 Ctrl+Z 快速暫停</p>
          <p className="text-slate-300 text-sm">
            執行中的前景程序按 Ctrl+Z 可以暫停（Stopped），再用 bg 讓它在背景繼續執行
          </p>
        </div>
        <div className="bg-slate-800/50 p-3 rounded-lg text-sm">
          <p className="text-slate-400">完整操作流程範例：</p>
          <pre className="text-green-400 font-mono text-xs mt-2">{`nano file.txt      # 開始編輯
Ctrl+Z             # 暫停，回到 shell
ls -l              # 做別的事
fg %1              # 回去繼續編輯`}</pre>
        </div>
      </div>
    ),
    notes: `學了 & 和 nohup 之後，我們來學怎麼在前景和背景之間切換，這個技能在日常 Linux 操作裡非常實用。有些同學可能會想：「現在不是都用 tmux 或 screen 嗎？」確實，tmux 是更強大的工具，但 jobs/fg/bg 這三個指令是內建在 shell 裡的，任何環境都有，不需要額外安裝，在最精簡的伺服器環境上也能用。

jobs 指令會列出目前這個 shell session 的所有工作（jobs）。所謂「工作」就是你在這個 shell 裡啟動的後台程序。輸出的格式是：工作編號（方括號裡的數字）、+ 或 - 符號（+ 代表最近一個工作，- 代表倒數第二個）、狀態（Running 執行中 / Stopped 暫停中）、指令名稱和參數。注意 jobs 只顯示當前這個 shell 的工作，如果你開了新的 SSH session，在那個 session 裡是看不到這邊的工作的。

fg 是 foreground（前景）的縮寫，fg %1 把工作編號 1 拉回前景，終端機會被這個程序佔用，它的輸出直接顯示在你的終端機上，直到程序結束或你再次暫停它。如果只輸入 fg 不帶編號，會把最近的工作（標記 + 的那個）拉到前景。

bg 是 background（背景）的縮寫，bg %1 讓工作編號 1 在背景繼續執行。這通常配合 Ctrl+Z 一起用：你在前景跑一個程序，按 Ctrl+Z 把它暫停（Stopped 狀態，程序不死只是暫停），然後用 bg %1 讓它在背景繼續執行，終端機就還給你了。

讓我給大家一個非常實用的真實場景：假設你正在用 nano 編輯一個長長的 nginx 設定檔，突然需要確認某個目錄的結構或某個設定值。你有兩個選擇：一是開第二個終端機視窗；二是直接按 Ctrl+Z 把 nano 暫停，去做你需要做的事，然後用 fg %1 回去繼續編輯 nano，完全不需要重新打開或重新設定。這在只有一個終端機視窗的情況下特別省事。

另一個實用場景：你用 vim 在編輯程式碼，需要在另一個視窗執行這段程式看看輸出，可以 Ctrl+Z 暫停 vim，執行你的程式，看完結果，fg 回 vim 繼續改程式碼。這比切視窗或開新 tab 還快。

Ctrl+C 和 Ctrl+Z 要分清楚：Ctrl+C 是送 SIGINT，直接終止程序，程序就死了；Ctrl+Z 是送 SIGTSTP，把程序暫停（suspended），程序還活著只是不跑，之後可以用 fg 或 bg 繼續。這兩個快捷鍵差很多，不要打錯。

大家現在跟著操作：輸入 sleep 200 & 讓一個程序在背景跑，再輸入 sleep 300 & 再跑一個，然後用 jobs 看看工作列表（應該看到兩個 Running 的工作）；試試 fg %1 把第一個拉回前景（終端機會被佔用），再按 Ctrl+Z 暫停它，然後用 jobs 確認它現在是 Stopped 狀態；輸入 bg %1 讓它回到背景繼續跑，再用 jobs 確認它又回到 Running 了。整個過程大家跟著操作，有問題舉手。

多說一個 disown 指令：有時候你已經把程序用 & 放在背景，後來意識到要登出了，但擔心它跟著死（因為沒用 nohup）。這時候用 disown %工作編號，把這個工作從 shell 的工作列表裡移除，登出時 shell 就不會發 SIGHUP 給它，程序可以繼續存活。disown 是「忘了加 nohup，程序已經跑起來了」這種緊急情況的救命方法。

Ctrl+C 和 Ctrl+Z 的差別要特別強調：Ctrl+C 送 SIGINT，程序通常會立刻終止，就死掉了；Ctrl+Z 送 SIGTSTP，程序只是暫停，還活著，之後可以 fg 或 bg 繼續。在前景跑一個重要任務時，不小心按到 Ctrl+C 會直接殺掉它，損失可能很大。養成習慣：要暫停用 Z，要終止才用 C，千萬別搞混。`,
    duration: '10',
  },

  // ========== 休息 ==========
  {
    title: '☕ 休息時間',
    subtitle: '休息 15 分鐘',
    content: (
      <div className="text-center space-y-8">
        <p className="text-6xl">☕ 🧘 🚶</p>
        <p className="text-2xl text-slate-300">
          休息一下，等等進入服務管理的世界！
        </p>
        <div className="bg-slate-800/50 p-6 rounded-lg inline-block">
          <p className="text-slate-400">下半場預告</p>
          <p className="text-xl text-k8s-blue">systemd、apt 套件管理、環境變數</p>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg max-w-lg mx-auto text-left">
          <p className="text-k8s-blue font-semibold">📌 思考題（休息回來討論）</p>
          <p className="text-slate-300 text-sm">你知道 nginx 是怎麼在伺服器上「自動啟動」的嗎？</p>
        </div>
      </div>
    ),
    notes: `好，我們已經學完程序管理和背景執行這一大塊，讓大家休息 15 分鐘。上廁所、喝水、活動一下筋骨。如果有同學的椅子坐了快兩個小時背很痠，可以站起來走動走動，對學習效率很有幫助。

剛才的內容滿紮實的，大家跟上了嗎？如果有任何沒跟上的地方，可以趁休息時間來問我或助教，助教就在旁邊。特別是 ps aux | grep 和 kill 的實作，如果你還沒成功做到，休息時間來找我們確認，因為等等還會繼續用到這些技能。

等等下半場的內容一樣很實用：systemd 服務管理是 Linux 現代系統的核心架構，apt 套件管理是你安裝所有軟體的主要方式，環境變數則是讓各種工具能夠正常被找到和執行的關鍵設定。三個主題都很重要，特別是 systemd，在 Kubernetes 的日常維運中非常常見。

休息前我留了一個思考題：你知道 nginx 是怎麼在伺服器開機的時候「自動」啟動的嗎？為什麼你安裝了 nginx 之後，不用每次開機都手動輸入 nginx 指令，它就自己跑起來了？等等學完 systemd，你就知道完整的答案了。可以先在心裡想想你的猜測。

趁休息的時間，讓我也幫大家複習一下前半段幾個容易混淆的概念。第一個是 SIGTERM 和 SIGKILL 的差異，這個很多人記不牢。SIGTERM 是「禮貌終止」，給程序機會清理資源、關閉連線、把緩衝區的資料寫入磁碟，然後乾淨退出；SIGKILL 是「強制終止」，作業系統直接回收程序的記憶體，不給任何收尾機會，可能導致資料不完整。在生產環境，永遠先試 SIGTERM（kill PID），等幾秒，看程序有沒有自己退出，如果還在跑才考慮 SIGKILL（kill -9 PID）。

第二個容易混淆的是 Ctrl+C 和 Ctrl+Z 的差異。Ctrl+C 送的是 SIGINT 信號，程序收到後通常立刻終止，程序就死了；Ctrl+Z 送的是 SIGTSTP，程序只是被暫停（Stopped 狀態），記憶體還在，用 fg 或 bg 可以讓它繼續。在前景跑一個重要任務時，千萬不要不小心按 Ctrl+C，那樣程序就沒了。如果你想暫停一下去做別的事，按 Ctrl+Z，需要繼續的時候再 fg 回來。

第三個是 & 和 nohup 的搭配。只用 & 把程序放背景，SSH 斷線後程序會死（因為收到 SIGHUP）；nohup 讓程序忽略 SIGHUP，所以 SSH 斷線後程序繼續存活。最安全的背景執行方式是 nohup 你的指令 &，兩個一起用。記住這個公式，工作中會一直用到。

好，趁休息把這幾個概念在腦子裡整理一下，十五分鐘後準時回來，我們繼續下半場！`,
    duration: '1',
  },

  // ========== systemd 概念 ==========
  {
    title: 'systemd — 系統初始化與服務管理',
    subtitle: 'Linux 現代服務管理的核心',
    section: 'systemd 與服務管理',
    content: (
      <div className="space-y-5">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-lg text-slate-300">
            <span className="text-k8s-blue font-bold">systemd</span> 是現代 Linux 的{' '}
            <span className="text-green-400 font-bold">第一個程序（PID 1）</span>，負責：
          </p>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li className="flex items-center gap-2">
              <span className="text-green-400">▶</span> 系統開機時啟動所有服務
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">▶</span> 管理服務的生命週期（啟動、停止、重啟）
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">▶</span> 收集和儲存系統日誌
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">▶</span> 服務崩潰時自動重啟
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center text-sm">
          {[
            { name: 'nginx', desc: 'Web 伺服器', icon: '🌐' },
            { name: 'sshd', desc: 'SSH 服務', icon: '🔐' },
            { name: 'cron', desc: '排程工作', icon: '⏰' },
            { name: 'docker', desc: 'Docker 守護程序', icon: '🐳' },
            { name: 'kubelet', desc: 'K8s 節點代理', icon: '☸️' },
            { name: 'mysql', desc: '資料庫服務', icon: '🗄️' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-3 rounded-lg">
              <p className="text-2xl">{item.icon}</p>
              <p className="text-green-400 font-mono text-xs">{item.name}</p>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `休息結束，精神好了嗎？大家回來了，我們繼續。現在來講一個非常重要的概念：systemd。這個東西是現代 Linux 的大腦之一，學懂了你對 Linux 系統的理解會上升一個層次。

當 Linux 開機的時候，硬體初始化完成、核心（kernel）載入之後，第一件事就是啟動一個叫做 systemd 的程序，它的 PID 永遠是 1，也就是系統上的第一個使用者空間程序。你可以用 ps aux | grep systemd 確認看看，或是直接看 ps aux 最上面那幾行，通常 PID 1 就是 /lib/systemd/systemd。

為什麼 PID 1 特別重要？因為在 Linux 的設計裡，PID 1 是所有孤兒程序（父程序死掉的程序）的「養父」，而且它不能死——如果 PID 1 死了，系統就 kernel panic，直接崩潰。所以 systemd 是整個系統的基礎。

systemd 的核心職責有三個：第一，開機時按照服務之間的依賴關係，以正確的順序啟動所有需要的服務（比如 nginx 依賴網路，所以要等網路啟動後才啟動 nginx）；第二，在系統運作期間，持續監控各個服務的狀態，如果某個服務崩潰了，根據設定決定要不要自動重啟——這個「自動重啟」功能對生產環境非常重要，讓服務可以自我修復；第三，在關機時按正確的順序依序停止所有服務，確保資料乾淨地寫入磁碟。

systemd 管理的單位叫做 unit，有很多種類型，其中最常用的是 service（服務）。你在伺服器上跑的幾乎所有服務，包括 nginx、MySQL、SSH、Docker、甚至 Kubernetes 的 kubelet，都是以 systemd service 的形式存在和被管理的。

你剛才思考題的答案來了：nginx 為什麼開機自動啟動？因為有人在安裝 nginx 之後執行了 systemctl enable nginx，告訴 systemd「我希望這個服務在開機的時候自動啟動」。systemd 就把 nginx.service 加到開機啟動的清單裡，下次開機就會自動拉起來。

理解 systemd 的概念，對 Kubernetes 管理員非常重要。每個 K8s 節點上都有 kubelet，它就是用 systemd 管理的。如果節點加不進叢集、節點狀態變成 NotReady，第一步就是 SSH 進去執行 systemctl status kubelet 查看狀態，再用 journalctl -u kubelet -f 追蹤日誌找問題，這是標準的 K8s 節點除錯流程。`,
    duration: '7',
  },

  // ========== systemctl 基本指令 ==========
  {
    title: 'systemctl — 控制服務',
    subtitle: '啟動、停止、重啟、查看服務狀態',
    section: 'systemd 與服務管理',
    content: (
      <div className="space-y-4">
        <div className="grid gap-2">
          {[
            { cmd: 'systemctl start nginx', icon: '▶️', desc: '啟動 nginx 服務' },
            { cmd: 'systemctl stop nginx', icon: '⏹️', desc: '停止 nginx 服務' },
            { cmd: 'systemctl restart nginx', icon: '🔄', desc: '停止後再啟動（設定有改動用這個）' },
            { cmd: 'systemctl reload nginx', icon: '🔃', desc: '重新載入設定（不中斷連線）' },
            { cmd: 'systemctl status nginx', icon: '🔍', desc: '查看服務目前狀態' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
              <span className="text-xl w-8 text-center">{item.icon}</span>
              <code className="text-green-400 font-mono flex-1">{item.cmd}</code>
              <span className="text-slate-400 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <div className="bg-slate-700/50 px-4 py-2 text-slate-400 text-sm">systemctl status nginx 輸出範例</div>
          <pre className="px-4 py-3 text-xs text-slate-300 font-mono">{`● nginx.service - A high performance web server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled)
   Active: active (running) since Mon 2026-02-17 09:00:01 UTC
  Process: 1234 ExecStart=/usr/sbin/nginx (code=exited)
 Main PID: 1235 (nginx)
   CGroup: /system.slice/nginx.service
           ├─1235 nginx: master process
           └─1236 nginx: worker process`}</pre>
        </div>
      </div>
    ),
    notes: `systemctl 是跟 systemd 溝通的主要工具，你幾乎所有跟服務有關的操作都透過它來完成。指令格式很規律：systemctl 動作 服務名稱。服務名稱就是 nginx、sshd、docker 這些，不需要加任何副檔名。

來一一解說最常用的幾個動作：

start 啟動服務，讓它從不跑的狀態開始執行。前提是服務已經安裝好了，systemd 有對應的 service 設定檔。啟動後用 status 確認它有沒有成功起來，不要假設 start 就一定成功。

stop 停止服務，讓它停下來。停止的方式是由 systemd 傳送 SIGTERM 信號給程序，等程序自己關掉（有超時機制，超時會改發 SIGKILL）。注意：stop 只是讓服務「現在」停下來，不影響它下次開機的行為——如果之前有 enable，下次開機還是會自動啟動。

restart 重啟，就是先 stop 再 start。當你修改了服務的設定檔，需要讓新設定生效，通常用這個。但 restart 會有短暫的服務中斷，從 stop 到重新 start 完成，可能有幾秒鐘服務不可用。對於線上服務要注意，如果服務支援 reload，應該優先用 reload。

reload 重新載入設定，是更優雅的方式。有些服務（像 nginx、sshd、postfix）支援在不中斷現有連線的情況下重新讀取設定。nginx 收到 reload 指令時，會 fork 一個新的 worker process 來讀取新設定，等新的 worker 準備好了，再把舊的 worker 優雅地關掉。整個過程已有的 HTTP 連線完全不中斷。對於需要高可用性的生產服務，能用 reload 就不要用 restart。

status 是最常用的！它會顯示服務的詳細狀態，資訊非常豐富：服務描述、是否已啟用（enabled/disabled）、目前是否在跑（active/inactive）、啟動時間、Main PID、記憶體使用量、最近的日誌輸出。這個指令你每天都會打，遇到問題第一步就是 systemctl status 服務名稱。

解讀 status 輸出的關鍵字：Active 那行，看括號裡的狀態：running 代表服務正在正常執行；failed 代表服務異常退出（有錯誤）；inactive (dead) 代表服務停止了。Loaded 那行後面的 enabled 代表開機會自動啟動，disabled 代表不會。如果看到 failed，接下來要看日誌找原因。

這幾個指令在 Kubernetes 節點管理裡非常常用。實際場景：某個節點突然變成 NotReady，你 SSH 進去，先執行 systemctl status kubelet 查看狀態，看是不是 failed 或 inactive；再執行 journalctl -u kubelet --since "5 minutes ago" 看最近 5 分鐘的日誌找出錯誤訊息；根據錯誤訊息修復問題後，執行 systemctl restart kubelet 重啟，然後在 master 節點上確認節點是否回到 Ready 狀態。這是標準的 K8s 節點除錯 SOP。

最後補充幾個 systemctl 的實用功能。systemctl is-active 服務名稱，快速檢查服務是否在執行，輸出只有 active 或 inactive，非常適合在 Shell 腳本裡做條件判斷，比如 if systemctl is-active nginx; then echo "OK"; fi。systemctl is-enabled 服務名稱 則告訴你是否設定開機自啟。systemctl list-units --state=failed 快速列出所有失敗的服務，是每次登入新機器做健康檢查的好習慣，一眼就能看出哪些服務需要處理。`,
    duration: '10',
  },

  // ========== systemctl enable/disable + 實作 ==========
  {
    title: 'systemctl enable / disable',
    subtitle: '設定服務是否開機自動啟動',
    section: 'systemd 與服務管理',
    content: (
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-900/30 border border-green-700 p-4 rounded-lg">
            <p className="text-green-400 font-mono font-bold text-lg mb-2">systemctl enable nginx</p>
            <p className="text-slate-300 text-sm">設定 nginx 在開機時自動啟動</p>
            <p className="text-slate-400 text-xs mt-2">（建立 symlink 到 /etc/systemd/system/）</p>
          </div>
          <div className="bg-red-900/30 border border-red-700 p-4 rounded-lg">
            <p className="text-red-400 font-mono font-bold text-lg mb-2">systemctl disable nginx</p>
            <p className="text-slate-300 text-sm">取消 nginx 開機自動啟動</p>
            <p className="text-slate-400 text-xs mt-2">（移除 symlink，不影響目前狀態）</p>
          </div>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg text-sm">
          <p className="text-k8s-blue font-semibold mb-2">💡 enable vs start 的差別</p>
          <div className="grid grid-cols-2 gap-4 text-slate-300">
            <div>
              <p className="font-semibold">start</p>
              <p>現在馬上啟動，但重開機後不會自動啟動</p>
            </div>
            <div>
              <p className="font-semibold">enable</p>
              <p>設定開機自動啟動，但現在不馬上啟動</p>
            </div>
          </div>
          <p className="text-yellow-300 mt-3 font-mono">systemctl enable --now nginx  ← 兩件事一次完成</p>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-k8s-blue font-semibold mb-2">🔨 實作：安裝並啟動 nginx</p>
          <pre className="text-green-400 font-mono text-sm">{`sudo apt install nginx -y
sudo systemctl enable --now nginx
systemctl status nginx
curl http://localhost`}</pre>
        </div>
      </div>
    ),
    notes: `enable 和 disable 是控制服務「開機是否自動啟動」的指令，這跟 start 和 stop 是完全不同的維度，搞清楚這兩組的差異非常重要。

用一個矩陣來思考，服務有兩個獨立的狀態維度：「現在是否在跑」（running/stopped）和「開機是否自動啟動」（enabled/disabled）。這兩個維度互相獨立，總共有四種組合：enabled+running（最常見，服務在跑而且開機會自動啟動）；enabled+stopped（設定開機自啟，但現在暫時停了）；disabled+running（現在手動啟動的，但重開機後就沒了）；disabled+stopped（完全停用）。

start 和 stop 只改變「現在是否在跑」，不影響開機設定。你執行 start，服務現在跑起來了，但如果它是 disabled 的，下次重開機就不會自動啟動。你執行 stop，服務現在停了，但如果它是 enabled 的，下次重開機還是會自動跑起來。

enable 只設定「開機是否自動啟動」，不影響服務現在的狀態。底層實作是在 /etc/systemd/system/ 下面的某個 target 目錄裡建立一個符號連結（symlink）指向服務的設定檔，systemd 開機時掃描這個目錄，看到哪些服務要啟動。你可以用 ls /etc/systemd/system/multi-user.target.wants/ 看看哪些服務被 enable 了。

disable 移除那個 symlink，下次開機就不會自動啟動了。注意 disable 不會停止目前正在跑的服務。

實際工作中最方便的是 enable --now，一個指令同時完成「現在啟動」和「設定開機自動啟動」兩件事，這是安裝新服務後的標準動作。

反過來，如果你要完全停用一個服務，需要兩個步驟：systemctl disable nginx（取消開機自啟）和 systemctl stop nginx（立刻停掉），或者 systemctl disable --now nginx 一次完成。

現在來做一個實作，把剛才的概念都串起來：第一步，sudo apt install nginx -y 安裝 nginx；第二步，systemctl enable --now nginx 設定並立刻啟動；第三步，systemctl status nginx 確認服務正在跑，看看 Active 行顯示什麼、Loaded 行的 enabled 有沒有出現；第四步，curl http://localhost 看看 nginx 有沒有回應，看到一堆 HTML 就代表 nginx 正常運作了！大家跟著做，遇到問題舉手。`,
    duration: '8',
  },

  // ========== 服務管理實作 ==========
  {
    title: '🔨 服務管理實作',
    subtitle: '操控 nginx — 停止、重啟、看日誌',
    section: 'systemd 與服務管理',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          {[
            { step: '1', cmd: 'systemctl stop nginx', desc: '停止 nginx，確認 curl 失敗' },
            { step: '2', cmd: 'systemctl start nginx', desc: '重新啟動 nginx，確認 curl 成功' },
            { step: '3', cmd: 'journalctl -u nginx -n 20', desc: '查看 nginx 的最近 20 行日誌' },
            { step: '4', cmd: 'journalctl -u nginx -f', desc: '即時追蹤 nginx 日誌（Ctrl+C 離開）' },
            { step: '5', cmd: 'systemctl list-units --type=service', desc: '列出所有服務狀態' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
              <span className="bg-k8s-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">
                {item.step}
              </span>
              <code className="text-green-400 font-mono flex-1 text-sm">{item.cmd}</code>
              <span className="text-slate-400 text-xs max-w-[200px]">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg text-sm">
          <p className="text-yellow-400 font-semibold">💡 journalctl</p>
          <p className="text-yellow-200">journalctl 是 systemd 的日誌工具，查看任何服務的 log 都用它</p>
        </div>
      </div>
    ),
    notes: `這個實作投影片讓大家把 systemctl 的操作都練習一遍，同時介紹另一個非常重要的工具：journalctl。記住：操作服務不只是 start 和 stop，查看日誌才是除錯的關鍵。

Step 1：systemctl stop nginx，停掉 nginx。然後用 curl http://localhost 測試，你會看到「Connection refused」或類似的連線失敗錯誤，因為服務停了，沒有程序在監聽 80 port。這是驗證「stop 確實有效」，同時也讓你感受到服務停止對外部的影響。

Step 2：systemctl start nginx，重新啟動。再用 curl http://localhost，又能看到 HTML 了。注意從 start 到服務真正可以接受連線，可能需要一兩秒，如果 curl 馬上就測試可能會失敗，等一秒再試。

Step 3：journalctl -u nginx -n 20，查看 nginx 服務最近 20 行日誌。-u 是 unit 的縮寫，指定你要看哪個服務的日誌；-n 是行數限制。日誌記錄著 nginx 何時啟動、何時停止、接受了哪些請求、有沒有發生設定檔語法錯誤，是除錯的重要依據。你剛才 stop 再 start 的動作，都會在日誌裡留下記錄。

Step 4：journalctl -u nginx -f，-f 是 follow（跟隨），即時追蹤日誌，新的日誌行會自動顯示出來，不用手動重新執行指令。這跟 tail -f 的概念一樣，但針對 systemd 服務。你可以同時開著這個追蹤畫面，在另一個終端機做操作，觀察日誌的即時變化。當你在除錯的時候，開著 journalctl -f 是很好的習慣。按 Ctrl+C 退出追蹤模式。

Step 5：systemctl list-units --type=service，列出目前系統上所有 service 類型的 unit，可以一覽系統上所有服務的狀態。每一行顯示：UNIT（服務名稱）、LOAD（是否成功載入設定）、ACTIVE（主狀態）、SUB（細部狀態）、DESCRIPTION（描述）。active 狀態的服務正常運作中；failed 狀態的服務用紅色顯示，代表出了問題，這些是你最應該優先關注的。

在 Kubernetes 的日常管理裡，journalctl -u kubelet -f 是節點出問題時的第一個反應——追蹤 kubelet 的即時日誌，看看發生了什麼錯誤，這是標準的 K8s 節點除錯起手式。大家現在跟著把這五個步驟都做一遍，確認每個步驟的輸出和預期一樣。

關於 journalctl 還有幾個非常實用的進階用法。journalctl -p err -u nginx 只顯示 nginx 的錯誤等級日誌，過濾掉 info 和 warning，讓你快速找到真正的問題。log level 從 0 到 7：0=emerg（系統無法使用）、3=err（錯誤）、4=warning（警告）、6=info（資訊）、7=debug（除錯）。數字越小越嚴重，通常你最關心的是 err（3）以上的等級。

journalctl --since "2026-01-01" --until "2026-01-02" 可以按時間範圍查看特定時段的日誌，在排查「昨晚凌晨發生的問題」時非常有用。更實用的是：journalctl -u nginx --since "5 minutes ago" 只看最近五分鐘，把範圍縮到最小，讓你快速找到剛才發生的問題。

journalctl 搭配 grep 過濾也很常用：journalctl -u nginx | grep -i "error" 找所有含 error 的行（-i 不區分大小寫）；journalctl -u nginx | grep -v "GET /health" 排除健康檢查請求的日誌，讓真正的問題更容易被看到。這個「排除噪音日誌」的技巧在高流量服務上特別重要，不然每秒幾百行的健康檢查日誌會把真正的錯誤淹沒。

journalctl -k 查看 kernel 日誌（等同 dmesg），當你遇到硬體問題、OOM（記憶體不足）殺程序、網路驅動錯誤的時候，kernel log 是重要線索。比如 journalctl -k | grep -i "out of memory" 可以確認系統有沒有發生過 OOM 事件，這是服務莫名消失的常見原因之一，OOM killer 在記憶體耗盡時會強制殺死它認為最耗記憶體的程序，整個過程在 journal 裡都有記錄。

在 K8s 的世界裡，kubectl logs 是容器日誌的查看工具，概念和用法跟 journalctl 非常相似：kubectl logs -f pod名稱 就是追蹤日誌（等同 journalctl -f）；kubectl logs --since=5m pod名稱 看最近五分鐘（等同 --since "5 minutes ago"）；kubectl logs --previous pod名稱 看容器前一次實例的日誌，這在排查 CrashLoopBackOff 時至關重要。學好今天的日誌工具習慣，在 K8s 上查日誌會完全不陌生。`,
    duration: '5',
  },

  // ========== apt 套件管理 ==========
  {
    title: 'apt — 套件管理系統',
    subtitle: '安裝軟體不再手忙腳亂',
    section: '軟體安裝',
    content: (
      <div className="space-y-5">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-lg text-slate-300">
            <span className="text-k8s-blue font-bold">apt</span>（Advanced Package Tool）是 Ubuntu/Debian 的套件管理員，
            幫你搞定<span className="text-green-400 font-bold">安裝、更新、移除</span>，以及所有<span className="text-yellow-400 font-bold">相依性</span>。
          </p>
        </div>
        <div className="grid gap-3">
          {[
            { cmd: 'sudo apt update', icon: '🔄', desc: '更新套件資料庫（先做這個！）' },
            { cmd: 'sudo apt upgrade', icon: '⬆️', desc: '升級所有已安裝套件' },
            { cmd: 'apt search nginx', icon: '🔍', desc: '搜尋套件名稱' },
            { cmd: 'apt show nginx', icon: '📋', desc: '查看套件詳細資訊' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
              <span className="text-xl">{item.icon}</span>
              <code className="text-green-400 font-mono flex-1">{item.cmd}</code>
              <span className="text-slate-400 text-sm">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg text-sm">
          <p className="text-yellow-400 font-semibold">⚠️ 為什麼要先 apt update？</p>
          <p className="text-yellow-200">
            update 不是更新軟體，而是更新「可用套件清單」，確保你安裝的是最新版本。
            apt install 前一定要先跑 apt update！
          </p>
        </div>
      </div>
    ),
    notes: `好，來學今天另一個非常重要的技能：apt 套件管理。我每次跟學生說這一段，大家都覺得「這也太方便了吧」，因為跟 Windows 比起來，Linux 的套件管理真的簡潔很多。

在 Windows，你想安裝一個軟體，需要：打開瀏覽器、搜尋軟體名稱、找到官方網站（還要分辨真的官方還是假網站）、找到正確的版本（32位元還是64位元）、下載安裝檔、雙擊執行、一路下一步（還要小心不要勾選到額外安裝的廣告軟體）。有時候安裝一個軟體還需要先去裝 VC++ redistributable、.NET runtime 等相依的環境，非常麻煩，而且容易出錯。

Linux 的套件管理系統（Package Manager）從根本上解決了這個問題。你只需要一行指令，套件管理員就幫你搞定所有事情：從官方軟體倉庫（repository）裡找到軟體；自動計算並解決所有相依性（A 需要 B，B 需要 C，全部一起裝，而且版本都是相容的）；下載並驗證完整性（有數位簽章確保下載的是沒被竄改的官方版本）；安裝到正確的系統目錄；有些套件還會自動設定好初始配置、建立系統使用者、設定 systemd service。整個過程一鍵完成，不用動手點選任何東西，也不用擔心裝到假的或有毒的版本。

Ubuntu 和 Debian 系列用的是 apt（Advanced Package Tool），Red Hat / CentOS / Fedora 系列用 yum 或 dnf，Arch Linux 用 pacman，各有各的格式和指令，但核心概念完全一樣。今天學的是 Ubuntu 的 apt，等你學了其他發行版，指令名稱會變，邏輯不變。

在安裝任何東西之前，一定要先執行 sudo apt update。這個指令的作用不是更新軟體本身，而是更新「可以安裝哪些套件、最新版本是多少、從哪個 mirror 下載」的索引資料庫，這些資料存在 /var/lib/apt/lists/ 下面。就像你要去超市買東西之前，先看一下最新的商品目錄——如果你手上的目錄是三個月前的，就算超市已經進了新貨，你的目錄裡也查不到。如果不先 update，你可能裝到舊版本，或是看到「找不到套件」的錯誤。

apt search 可以搜尋套件名稱，如果你不確定一個軟體的正確套件名，用這個找。比如 apt search text editor 可以找出所有與文字編輯器相關的套件。apt show nginx 可以查看一個套件的詳細資訊，包括版本號、安裝後大小、相依套件列表、官方說明文字等，在決定要不要安裝之前可以先查看。`,
    duration: '8',
  },

  // ========== apt install / remove ==========
  {
    title: 'apt install / remove',
    subtitle: '安裝與移除軟體套件',
    section: '軟體安裝',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          {[
            {
              cmd: 'sudo apt install htop',
              icon: '📦',
              desc: '安裝 htop',
              color: 'text-green-400',
            },
            {
              cmd: 'sudo apt install htop curl wget -y',
              icon: '📦',
              desc: '一次安裝多個套件，-y 自動確認',
              color: 'text-green-400',
            },
            {
              cmd: 'sudo apt remove htop',
              icon: '🗑️',
              desc: '移除 htop（保留設定檔）',
              color: 'text-red-400',
            },
            {
              cmd: 'sudo apt purge htop',
              icon: '💥',
              desc: '完全移除（連設定檔一起刪）',
              color: 'text-red-400',
            },
            {
              cmd: 'sudo apt autoremove',
              icon: '🧹',
              desc: '移除不再需要的相依套件（清理用）',
              color: 'text-yellow-400',
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
              <span className="text-xl">{item.icon}</span>
              <code className={`font-mono flex-1 text-sm ${item.color}`}>{item.cmd}</code>
              <span className="text-slate-400 text-xs max-w-[200px]">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <div className="bg-slate-700/50 px-4 py-2 text-k8s-blue text-sm font-semibold">🔨 實作：安裝 htop 並使用</div>
          <pre className="px-4 py-3 text-sm text-green-400 font-mono">{`sudo apt update
sudo apt install htop -y
htop`}</pre>
        </div>
      </div>
    ),
    notes: `學了 apt update，現在來學怎麼實際安裝和移除套件，這是你以後每天都會用到的操作。

安裝套件的語法是 sudo apt install 套件名稱。需要 sudo 是因為安裝軟體需要 root 權限，要把執行檔寫入 /usr/bin/、設定檔寫入 /etc/、函式庫寫入 /usr/lib/ 等系統目錄，這些都是一般使用者沒有寫入權限的地方。安裝時，apt 會計算出所有需要一起安裝的相依套件，顯示它們的名稱和需要佔用的磁碟空間，然後詢問「要繼續嗎？」加上 -y 參數就能自動回答 yes，不用手動按確認，在自動化腳本裡幾乎必用。

可以一次安裝多個套件，在 apt install 後面列出套件名稱，用空格分開，像這樣：sudo apt install htop curl wget git vim -y，一次安裝五個，省時省力。

安裝完成後，套件提供的指令通常可以直接在終端機使用，因為 apt 會把執行檔放到 PATH 裡已有的目錄（通常是 /usr/bin/）。所以 apt install htop 之後，直接打 htop 就能用，不需要自己配置 PATH。

移除套件有兩個選項，這個差別很重要。apt remove 只移除軟體的執行檔和主要檔案，但保留 /etc/ 下面的設定檔，下次重裝的時候設定還在，不用重新設定。apt purge 是完全清除，連設定檔也一起刪掉，就像全新安裝一樣乾淨。一般原則：如果你是暫時移除，之後可能重裝，用 remove；如果你確定不要了，或是想清除設定重新來過，用 purge。

apt autoremove 是定期清理的好習慣。當你安裝套件 A 的時候，apt 自動裝了相依的套件 B 和 C；後來你用 apt remove A 移除了 A，但 B 和 C 還留著，因為 apt 不確定你有沒有直接需要它們。autoremove 就是找出這些「只因為相依性而裝、現在沒有任何東西需要它們了」的孤立套件，然後一次移除，清理磁碟空間。在我的伺服器上每個月跑一次 apt autoremove，可以回收幾百 MB 的空間。

apt upgrade 是升級所有已安裝的套件到最新版本，執行前要先 apt update 更新索引。在生產伺服器上要謹慎執行，因為升級可能改變行為，建議先在測試環境驗證，再在生產環境執行。如果只想升級特定套件，用 sudo apt install 套件名稱（不加 -y 看看它想更新什麼）。

現在大家來做實作：先執行 sudo apt update，再 sudo apt install htop -y，安裝完成後直接輸入 htop 打開它。htop 的彩色介面比 top 漂亮很多，每個 CPU 核心都有獨立的長條圖，記憶體使用也很直覺。用方向鍵選程序，F9 傳送 signal，F10 或 q 離開。感受一下跟 top 的差異，然後我們繼續。

補充幾個 apt 的實用進階指令。apt-cache depends nginx 查看 nginx 依賴哪些套件，apt-cache rdepends nginx 反查哪些套件依賴 nginx。dpkg -l 列出所有已安裝套件，搭配 grep 過濾；dpkg -L nginx 列出 nginx 套件安裝了哪些檔案，很適合找設定檔和執行檔的位置。dpkg -S /usr/sbin/nginx 反過來查詢一個檔案屬於哪個套件。

在生產伺服器上執行 apt upgrade 要謹慎：建議加 --simulate 先確認哪些套件會被升級，不真正執行，確認無誤後再正式跑。apt-get clean 清空已下載的套件快取（在 /var/cache/apt/archives/ 裡），可以回收磁碟空間；apt-get autoclean 只清理舊版本的快取，保留最新版以備重裝用。定期清理快取是伺服器維護的好習慣，避免磁碟被快取慢慢塞滿。`,
    duration: '10',
  },

  // ========== apt 實作 ==========
  {
    title: '🔨 apt 綜合實作',
    subtitle: '安裝、確認、清理',
    section: '軟體安裝',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          {[
            { step: '1', cmd: 'sudo apt update && sudo apt upgrade -y', desc: '更新系統到最新狀態' },
            { step: '2', cmd: 'sudo apt install tree ncdu -y', desc: '安裝 tree（目錄視覺化）和 ncdu（磁碟分析）' },
            { step: '3', cmd: 'tree /home', desc: '用 tree 看 /home 的目錄結構' },
            { step: '4', cmd: 'ncdu /var', desc: '用 ncdu 分析 /var 的磁碟使用（q 離開）' },
            { step: '5', cmd: 'sudo apt remove tree ncdu', desc: '移除剛才安裝的套件' },
            { step: '6', cmd: 'sudo apt autoremove -y', desc: '清理不需要的相依套件' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
              <span className="bg-k8s-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">
                {item.step}
              </span>
              <code className="text-green-400 font-mono flex-1 text-xs">{item.cmd}</code>
              <span className="text-slate-400 text-xs max-w-[180px]">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-3 rounded-lg text-sm">
          <p className="text-k8s-blue font-semibold">💡 && 的意思</p>
          <p className="text-slate-300">cmd1 &amp;&amp; cmd2 表示：先執行 cmd1，成功了才執行 cmd2</p>
        </div>
      </div>
    ),
    notes: `這個實作讓大家把 apt 的完整安裝到清理流程都跑一遍，同時順便認識兩個非常好用的小工具：tree 和 ncdu。這兩個雖然不是主角，但裝了之後你會一直用到。

Step 1：sudo apt update && sudo apt upgrade -y，先更新套件清單，然後自動升級所有套件。這裡要特別說明 && 的語義：它是 shell 的邏輯「且」運算符，cmd1 && cmd2 代表「先執行 cmd1，只有在 cmd1 成功（退出碼為 0）的情況下，才執行 cmd2」。這非常有用：如果 apt update 失敗了（比如網路不通），就不會傻傻地繼續執行 upgrade。這個模式在 shell 腳本裡大量使用，讓你的腳本在出錯時能夠及早停止，而不是帶著錯誤繼續跑。

Step 2：sudo apt install tree ncdu -y，一次安裝兩個工具。tree 把目錄結構以美觀的樹狀圖顯示在終端機，非常直覺，遠比一層層 ls 看來得清晰；ncdu 的全名是 Ncurses Disk Usage，用互動式的文字介面顯示哪些目錄最佔磁碟空間，找出「誰把硬碟吃光了」的必備神器。在伺服器磁碟快滿的緊急情況下，ncdu 是你最快找到元兇的工具。

Step 3：tree /home，把 /home 目錄的結構以樹狀圖輸出。你可以看到每個使用者的家目錄，以及裡面有哪些子目錄。如果你想限制只看幾層深，可以加 -L 2 參數：tree /home -L 2 只看兩層。

Step 4：ncdu /var，分析 /var 目錄的磁碟使用情況。ncdu 啟動後需要掃描，掃完之後顯示互動式介面，以從大到小排列各個子目錄。用方向鍵上下移動，Enter 進入子目錄，左方向鍵回到上層，d 刪除（要小心！），q 離開。試試進入 /var/log 看看系統日誌有多大，這個目錄有時候會因為 log 沒有 rotate 而暴增。

Step 5 和 6：sudo apt remove tree ncdu，移除剛才安裝的套件；然後 sudo apt autoremove -y，清理它們帶來的相依套件。你可以用 which tree 確認是不是真的被移除了——如果沒輸出任何東西，代表指令已經不存在了。

這個完整的「安裝、使用、移除、清理」流程，是你以後在伺服器上管理軟體的標準循環。請大家跟著把每個步驟都做一遍，確認每個步驟的輸出和預期一樣，有問題舉手。

補充一個超實用的小技巧：apt list --installed 列出所有已安裝的套件，如果你想看系統上裝了哪些東西，或是確認某個套件有沒有被安裝，這個指令非常方便。配合 grep 過濾更好用，例如 apt list --installed | grep nginx 確認 nginx 是否已安裝。apt list --upgradable 列出所有有新版本可升級的套件，讓你在選擇性升級前先知道有哪些可以更新。

在 Kubernetes 的節點管理裡，apt 也是常用工具。當你需要在 K8s 節點上安裝 containerd、kubeadm、kubelet 的時候，都是透過 apt 來安裝的。而且 K8s 版本管理非常嚴格，通常需要先設定對應的 apt source（套件倉庫來源），然後用 apt install kubelet=1.28.0-00 這種帶版本號的方式安裝特定版本，確保叢集裡所有節點的 K8s 版本一致。用 apt-mark hold kubelet 還可以「凍結」某個套件的版本，防止 apt upgrade 把它意外升級，這在生產叢集的版本管理裡非常重要。`,
    duration: '7',
  },

  // ========== 環境變數概念 ==========
  {
    title: '環境變數',
    subtitle: 'Linux 的「全域設定」',
    section: '環境變數',
    content: (
      <div className="space-y-5">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-lg text-slate-300">
            環境變數是儲存在 Shell 環境中的<span className="text-k8s-blue font-bold">鍵值對</span>，
            讓程式知道系統的各種設定和路徑。
          </p>
        </div>
        <div className="grid gap-3">
          {[
            {
              cmd: 'echo $PATH',
              desc: '顯示指令搜尋路徑',
              output: '/usr/local/bin:/usr/bin:/bin:/usr/local/sbin',
            },
            {
              cmd: 'echo $HOME',
              desc: '顯示家目錄路徑',
              output: '/home/student',
            },
            {
              cmd: 'echo $USER',
              desc: '顯示目前使用者名稱',
              output: 'student',
            },
            {
              cmd: 'env | head -20',
              desc: '顯示所有環境變數（前 20 行）',
              output: 'TERM=xterm-256color\nSHELL=/bin/bash\n...',
            },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between bg-slate-700/50 px-4 py-2">
                <code className="text-green-400 font-mono">{item.cmd}</code>
                <span className="text-slate-400 text-sm">{item.desc}</span>
              </div>
              <pre className="px-4 py-2 text-xs text-slate-400 font-mono">{item.output}</pre>
            </div>
          ))}
        </div>
      </div>
    ),
    notes: `最後一個主題：環境變數。這個概念在 Kubernetes 裡非常非常重要，幾乎是每個容器都會用到的核心機制——你的應用程式的資料庫密碼、API key、服務端口設定，在 K8s 裡大多是透過環境變數傳進容器的。今天學好這個，對後面的課程幫助非常大。

環境變數是一種特殊的變數，儲存在你的 Shell 環境中，可以被你執行的任何程式讀取。你可以把它想成是整個 Shell 環境的「全域設定」，任何在這個 Shell 裡啟動的程式都能看到這些設定值，就像一個公告欄，所有在這個環境裡的程式都可以去看這個公告欄上的資訊。

最重要的環境變數是 PATH。PATH 告訴 Shell：「當使用者輸入一個指令名稱，要去哪些目錄裡搜尋這個指令的執行檔」。PATH 的值是用冒號分隔的目錄列表，比如 /usr/local/bin:/usr/bin:/bin:/usr/local/sbin。當你打 ls，Shell 會依序搜尋這些目錄，找到第一個叫做 ls 的執行檔，然後執行它。如果你安裝了一個新工具，但沒有把它的安裝目錄加到 PATH 裡，你輸入工具名稱就會看到「command not found」錯誤，這是初學者最常遇到的問題之一。

環境變數的命名慣例是全大寫字母加底線，比如 PATH、HOME、JAVA_HOME、KUBECONFIG。用 $ 符號加上變數名來取得它的值：echo $PATH 輸出 PATH 的值，echo $HOME 輸出家目錄路徑。這個 $ 符號告訴 Shell：「這不是一個字串，是一個變數，請把它展開成值」。

env 指令不加任何參數，會把目前 Shell 的所有環境變數都列出來，格式是 KEY=VALUE，通常有幾十到上百個。配合 | head -20 可以只看前 20 行，不然刷屏太快看不完。如果你想找特定的環境變數，可以用 env | grep JAVA 這樣的過濾方式。

常見的系統預設環境變數：HOME（目前使用者的家目錄路徑）、USER（目前使用者名稱）、SHELL（預設 Shell 的路徑，通常是 /bin/bash）、LANG（語言和地區設定，影響日期格式、排序等行為）、TERM（終端機類型，影響顏色和特殊字元的顯示）、KUBECONFIG（kubectl 要連哪個 K8s cluster 的設定，這個在後面的課程會很常用）。

在容器環境裡，環境變數更是核心機制。你會在 Kubernetes 的 Pod spec 裡看到 env: 區塊，裡面列出傳給容器的環境變數，你的應用程式透過讀取環境變數來知道「我現在在哪個環境、要連哪個資料庫、API token 是什麼」。這樣的設計讓同一個容器映像檔可以在不同環境（開發、測試、生產）下有不同的行為，只需要在部署時傳入不同的環境變數就好。`,
    duration: '8',
  },

  // ========== export / .bashrc ==========
  {
    title: 'export 與 .bashrc — 設定環境',
    subtitle: '新增自訂環境變數，並讓它永久生效',
    section: '環境變數',
    content: (
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="bg-slate-700/50 px-4 py-2 text-k8s-blue font-semibold text-sm">
              export — 設定環境變數
            </div>
            <pre className="px-4 py-3 text-sm text-green-400 font-mono">{`# 設定變數（只在此 session 有效）
export MY_NAME="Student"
echo $MY_NAME  # → Student

# 加到 PATH（讓 ~/bin 裡的指令可用）
export PATH="$HOME/bin:$PATH"`}</pre>
          </div>
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="bg-slate-700/50 px-4 py-2 text-k8s-blue font-semibold text-sm">
              .bashrc — 永久生效
            </div>
            <pre className="px-4 py-3 text-sm text-green-400 font-mono">{`# 編輯 .bashrc
nano ~/.bashrc

# 在最後加入：
export MY_NAME="Student"
export PATH="$HOME/bin:$PATH"

# 讓設定立刻生效
source ~/.bashrc`}</pre>
          </div>
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg text-sm">
          <p className="text-k8s-blue font-semibold mb-2">💡 .bashrc vs .bash_profile</p>
          <div className="grid grid-cols-2 gap-4 text-slate-300">
            <div>
              <p className="font-semibold text-slate-200">.bashrc</p>
              <p>每次開新的互動式 Shell 時載入（最常用）</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">.bash_profile</p>
              <p>只在登入時載入一次（SSH 連線進來）</p>
            </div>
          </div>
        </div>
      </div>
    ),
    notes: `學會查看環境變數之後，來學怎麼新增和讓設定永久生效。這個技能在安裝新工具（kubectl、helm、terraform 等）之後幾乎必用。

export 指令用來設定或修改環境變數，同時把這個變數「匯出」給子程序看到。什麼叫匯出？Shell 有個概念：普通變數只有目前 Shell 能看到，不會傳給子程序；export 過的變數，你在這個 Shell 裡啟動的任何子程序都能讀取。export MY_NAME="Student" 設定一個叫 MY_NAME 的變數，值是 Student。設定完馬上就能用 echo $MY_NAME 看到。如果你執行 bash 開一個新的子 Shell，在裡面 echo $MY_NAME 也能看到，因為它被 export 了。

但是有一個重要限制：用 export 設定的環境變數，只在目前這個 Shell session 有效。你一旦登出，或是開一個新的終端機視窗（新的 SSH 連線），這個設定就消失了，因為每次登入都是一個全新的 Shell 程序，沒有記憶上次設定過什麼。

要讓設定永久生效，需要把 export 指令寫入設定檔，讓每次 Shell 啟動時都自動執行。最常用的設定檔是 ~/.bashrc（使用者家目錄下的隱藏檔案），這個檔案是 Bash Shell 的設定檔，每次你開啟一個新的互動式 Shell 時（不管是開新終端機視窗、SSH 連線進來、或是輸入 bash 開子 Shell），Bash 都會自動讀取並執行這個檔案裡的所有指令。

流程是：nano ~/.bashrc 打開設定檔，移到最後面加入你的 export 指令，存檔退出（Ctrl+O 存、Ctrl+X 退出）；然後執行 source ~/.bashrc（或縮寫 . ~/.bashrc）讓目前的 Shell 立刻重新載入設定，不用登出再登入。source 的意思是「在目前的 Shell 裡執行這個檔案」，而不是開一個新的子 Shell 去執行。

修改 PATH 是最常見的需求，讓我舉一個真實場景。你按照官方文件把 kubectl 下載到 ~/kubectl，現在你要把它放到 PATH 能找到的地方。方法有兩個：一是 sudo mv ~/kubectl /usr/local/bin/（移到系統目錄，所有使用者都能用）；二是 mkdir -p ~/bin && mv ~/kubectl ~/bin/，然後在 .bashrc 加上 export PATH="$HOME/bin:$PATH"，讓這個使用者的 ~/bin 加入搜尋路徑。注意要把新目錄放在原有 PATH 的前面，這樣同名指令會優先用你的版本（如果系統已有舊版 kubectl，你裝的新版會優先被找到）。

在 Kubernetes 的實際工作中，你安裝完 kubectl 之後，安裝 helm、kustomize、argocd CLI 等工具，通常每次都需要把安裝目錄加到 PATH 或移到 /usr/local/bin/，才能在任何地方用這些指令。懂 .bashrc 和 PATH 的設定，是這些工具能正常使用的基礎。另外，KUBECONFIG 環境變數告訴 kubectl 要用哪個設定檔連哪個 cluster，這個等到後面的課程會詳細講。`,
    duration: '7',
  },

  // ========== 環境變數實作 ==========
  {
    title: '🔨 環境變數實作',
    subtitle: '設定 alias 和 PATH，讓工作更順手',
    section: '環境變數',
    content: (
      <div className="space-y-4">
        <div className="grid gap-3">
          {[
            { step: '1', cmd: 'echo $PATH', desc: '查看目前的 PATH' },
            {
              step: '2',
              cmd: 'nano ~/.bashrc',
              desc: '打開 .bashrc 準備編輯',
            },
            {
              step: '3',
              cmd: '# 加入以下內容：\nexport EDITOR=nano\nalias ll="ls -la"\nalias gs="git status"',
              desc: '新增實用 alias 和變數',
            },
            { step: '4', cmd: 'source ~/.bashrc', desc: '讓設定立刻生效' },
            { step: '5', cmd: 'll', desc: '測試 alias 是否生效' },
            { step: '6', cmd: 'echo $EDITOR', desc: '確認環境變數已設定' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800/50 p-3 rounded-lg">
              <span className="bg-k8s-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-sm flex-shrink-0 font-bold">
                {item.step}
              </span>
              <div className="flex-1 min-w-0">
                <pre className="text-green-400 font-mono text-xs whitespace-pre-wrap">{item.cmd}</pre>
              </div>
              <span className="text-slate-400 text-xs max-w-[160px]">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-yellow-500/20 border border-yellow-500/50 p-3 rounded-lg text-sm">
          <p className="text-yellow-400 font-semibold">💡 alias 是什麼？</p>
          <p className="text-yellow-200">alias 是指令的「別名」，讓你用短指令代替長指令，大幅提升效率</p>
        </div>
      </div>
    ),
    notes: `最後這個實作，我順便教大家一個超實用的技巧：alias（別名）。

alias 讓你自定義指令的別名，把常用的長指令縮短成容易記的短名字。比如 alias ll="ls -la" 之後，你只要輸入 ll，就等於輸入了 ls -la，顯示詳細資訊和隱藏檔案的目錄列表。這個 alias 非常流行，很多 Linux 系統預設就有設定 ll。

Step 1：先查看目前的 PATH，記下來，等一下可以確認有沒有變化。

Step 2：用 nano ~/.bashrc 打開設定檔。注意 .bashrc 前面有一個點，這是隱藏檔案，一般的 ls 看不到，要用 ls -a 才能看到。

Step 3：用方向鍵移到最後一行，加入三行設定：EDITOR=nano 設定預設文字編輯器（很多程式會用這個變數），ll 別名讓你快速列出詳細目錄，gs 是 git status 的縮寫（之後學 git 的時候很有用）。儲存（Ctrl+O Enter）並退出（Ctrl+X）。

Step 4：source ~/.bashrc 讓設定立刻生效，不用重新登入。

Step 5 和 6：測試確認。輸入 ll，應該看到跟 ls -la 一樣的輸出；echo $EDITOR 應該輸出 nano。

這個小小的 .bashrc 設定，能大幅提升你的日常工作效率。隨著你越來越熟悉 Linux，你會不斷新增自己的 alias 和環境變數設定，打造出一個「最順手的工作環境」。

補充一個進階技巧：unalias 指令名稱可以臨時取消一個 alias。例如你設了 alias rm="rm -i"（刪除前詢問），但跑腳本時不希望每次都問，就先 unalias rm，用完再重設。type 指令名稱可以告訴你某個指令是 alias、shell 內建、還是可執行檔，type ll 應該顯示「ll is aliased to...」，是排查「指令行為怪異」的好工具，因為有時候不知道某個指令已被 alias 覆蓋，行為就和預期不同。

工程師常用的 alias 集合，分享給大家做參考。alias la="ls -la" 是列出詳細的完整目錄。alias grep="grep --color=auto" 讓 grep 的搜尋結果用顏色高亮顯示，一眼就看到關鍵字在哪裡。alias ..="cd .."、alias ...="cd ../.. " 讓你快速跳上一層或兩層目錄。alias df="df -h" 讓磁碟使用量預設用人類可讀的格式（GB、MB）顯示。alias du="du -h" 同理。alias ps="ps aux" 讓 ps 預設就顯示所有程序的完整資訊，不用每次都打 aux。alias kube="kubectl" 對 Kubernetes 工作者非常實用，因為 kubectl 每天要打幾十次。這些 alias 加到 ~/.bashrc 後，工作效率會明顯提升。

.bashrc、.bash_profile、和 /etc/profile 的關係也稍微說明一下。/etc/profile 是全系統的設定檔，所有使用者登入時都會執行，通常由系統管理員管理。~/.bash_profile 是個人登入設定，只在登入 shell（SSH 連線、本地控制台登入）時執行一次。~/.bashrc 是個人互動式 shell 設定，每次開啟新的互動式 shell 時執行。一般建議把環境變數和 alias 都放在 ~/.bashrc，確保任何情況下開 shell 都能用。如果你的設定寫在 ~/.bash_profile 但在新的終端機視窗沒有效果，就是因為這個差異。很多工程師會在 ~/.bash_profile 裡加上一行 if [ -f ~/.bashrc ]; then . ~/.bashrc; fi，確保登入時也載入 .bashrc，兩個環境保持一致。`,
    duration: '5',
  },

  // ========== cron 排程任務 ==========
  {
    title: 'cron — 定時自動執行任務',
    subtitle: '讓 Linux 幫你定時做重複的事',
    section: '系統管理進階',
    content: (
      <div className="space-y-4">
        <div className="bg-slate-800/50 p-4 rounded-lg">
          <p className="text-lg text-slate-300">
            <span className="text-k8s-blue font-bold">cron</span> 是 Linux 的任務排程器，讓你設定{' '}
            <span className="text-green-400 font-bold">在特定時間自動執行</span> 指令或腳本。
          </p>
        </div>
        <div className="bg-slate-800 rounded-lg overflow-hidden">
          <div className="bg-slate-700/50 px-4 py-2 text-k8s-blue font-semibold text-sm">crontab 格式</div>
          <pre className="px-4 py-3 text-sm text-green-400 font-mono">{`# 分 時 日 月 週 指令
# ┌─ 分鐘 (0-59)
# │ ┌─ 小時 (0-23)
# │ │ ┌─ 日期 (1-31)
# │ │ │ ┌─ 月份 (1-12)
# │ │ │ │ ┌─ 星期 (0-7, 0和7都是週日)
# │ │ │ │ │
  * * * * * /path/to/command

# 每天 03:30 跑備份腳本
30 3 * * * /opt/scripts/backup.sh

# 每小時的第0分執行
0 * * * * /opt/scripts/health-check.sh

# 每週一早上9點
0 9 * * 1 /opt/scripts/weekly-report.sh`}</pre>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            { cmd: 'crontab -e', desc: '編輯目前使用者的 crontab' },
            { cmd: 'crontab -l', desc: '列出目前的 crontab 內容' },
            { cmd: 'crontab -r', desc: '刪除 crontab（小心！）' },
            { cmd: 'systemctl status cron', desc: '確認 cron 服務是否在跑' },
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 p-3 rounded-lg">
              <code className="text-green-400 font-mono text-xs">{item.cmd}</code>
              <p className="text-slate-400 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-3 rounded-lg text-sm">
          <p className="text-k8s-blue font-semibold">💡 K8s 中的 CronJob</p>
          <p className="text-slate-300">Kubernetes 也有 CronJob 資源，語法與 Linux cron 完全一致！</p>
        </div>
      </div>
    ),
    notes: `cron 是 Linux 系統上的定時任務排程器，名字來自希臘文的「時間（chronos）」。有了 cron，你可以讓伺服器在特定的時間自動執行任何指令或腳本，完全不需要人工干預。這在伺服器維運上非常重要：備份、日誌清理、定期健康檢查、報表產生，這些每天都要做但不需要人工操作的事，都適合用 cron 自動化。

cron 的設定是透過 crontab 檔案。每個使用者都有自己的 crontab，用 crontab -e 編輯（會打開預設的文字編輯器，可以用 EDITOR=nano crontab -e 指定用 nano）。crontab 的每一行代表一個定時任務，格式是五個時間欄位加上指令，用空格分隔。

五個時間欄位的語義：第一欄是分鐘（0-59）；第二欄是小時（0-23）；第三欄是日期（1-31）；第四欄是月份（1-12）；第五欄是星期幾（0-7，0 和 7 都代表週日）。每個欄位用 * 代表「每個」，所以五個全是 * 的話代表「每分鐘」執行一次。

幾個常用的時間設定模式：0 * * * * 代表每小時整點執行（分鐘是 0，其他全是 *）；0 3 * * * 代表每天凌晨 3 點執行（凌晨三點整）；30 3 * * 1 代表每週一凌晨 3:30 執行；0 0 1 * * 代表每月 1 號的 0:00 執行（月初）；*/5 * * * * 代表每 5 分鐘執行一次，斜線後面是間隔數值。

一個實際的例子：假設你有一台 nginx 伺服器，日誌每天都在增長，你不想手動清理，可以設定一個每天凌晨 2 點的 cron job，把一個月前的日誌壓縮封存。另一個例子：你有一個 Python 爬蟲腳本需要每小時跑一次，不想一直開著終端機等，用 cron 設定 0 * * * * /opt/scripts/crawler.py > /var/log/crawler.log 2>&1，每小時整點自動跑，輸出存到日誌。

注意幾個常見的陷阱：cron 執行時的環境和你手動 SSH 進去的環境不一樣，PATH 很精簡，你在 .bashrc 裡設的 PATH 對 cron 無效。所以在 crontab 裡最好使用絕對路徑，比如 /usr/bin/python3 而不是 python3，/opt/scripts/backup.sh 而不是 backup.sh。另一個陷阱是工作目錄：cron 執行時的當前目錄是 HOME 目錄，如果你的腳本裡有相對路徑，可能出問題，建議在腳本一開始加上 cd /你需要的目錄 確保在正確的位置執行。

cron job 的輸出如果沒有重定向，預設會發送到使用者的本地郵件。在大多數伺服器上沒有郵件服務，這些輸出就消失了。所以一定要把輸出重定向到日誌檔案：cmd > /var/log/myjob.log 2>&1（把 stdout 和 stderr 都寫入日誌），或是如果任務正常不需要輸出，用 cmd > /dev/null 2>&1 把輸出全部丟棄。不丟棄輸出、又沒有郵件服務接收，cron 就會一直嘗試寄信失敗，浪費資源。

在 Kubernetes 的世界裡，有一個完全對應的資源叫做 CronJob（K8s CronJob）。它的 schedule 欄位使用的語法和 Linux cron 完全一樣！比如 schedule: "0 3 * * *" 代表每天凌晨 3 點在 K8s 叢集裡啟動一個 Pod 執行任務。學好 Linux cron 的語法，等你學到 K8s CronJob 的時候就完全不陌生了，這是非常直接的知識遷移。K8s CronJob 的優勢是可以設定失敗重試、並行控制、歷史保留策略，比 Linux cron 有更多雲端原生的管控功能，但底層的時間語法是一樣的。

快速測試方式：如果你想確認 cron 的時間格式有沒有寫錯，可以用線上工具 crontab.guru（網址就是 crontab.guru），輸入你的時間格式，它會用人類語言告訴你「這個設定會在什麼時候執行」，非常實用，是工程師最愛的 cron 工具之一。

最後提醒：crontab -r 是刪除整個 crontab，不會有確認提示，打錯字就全刪了。在生產環境永遠要先 crontab -l 備份一下目前的內容，再 crontab -e 編輯，養成好習慣。`,
    duration: '7',
  },

  // ========== 系統故障排查 SOP ==========
  {
    title: '🔧 系統故障排查 SOP',
    subtitle: '遇到問題不慌，按步驟找原因',
    section: '系統管理進階',
    content: (
      <div className="space-y-4">
        <p className="text-slate-300 text-sm">遇到「服務掛了」或「系統很慢」，這套 SOP 能幫你快速定位問題：</p>
        <div className="grid gap-2">
          {[
            { step: '1', title: '確認現象', cmd: 'systemctl status 服務名稱', desc: '服務狀態是否 failed？' },
            { step: '2', title: '看日誌', cmd: 'journalctl -u 服務名稱 -n 50', desc: '找錯誤訊息（error/failed）' },
            { step: '3', title: '查資源', cmd: 'top 或 htop', desc: 'CPU/記憶體有沒有滿？' },
            { step: '4', title: '查磁碟', cmd: 'df -h && du -sh /var/log/*', desc: '磁碟有沒有滿？' },
            { step: '5', title: '查網路', cmd: 'ss -tlnp', desc: 'Port 有沒有被監聽？' },
            { step: '6', title: '重啟服務', cmd: 'systemctl restart 服務名稱', desc: '確認問題是否修復' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg">
              <span className="bg-k8s-blue text-white w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold">
                {item.step}
              </span>
              <div className="flex-1">
                <span className="text-slate-200 font-semibold text-sm">{item.title}：</span>
                <code className="text-green-400 font-mono text-xs">{item.cmd}</code>
              </div>
              <span className="text-slate-400 text-xs max-w-[160px]">{item.desc}</span>
            </div>
          ))}
        </div>
        <div className="bg-red-900/30 border border-red-700 p-3 rounded-lg text-sm">
          <p className="text-red-400 font-semibold">⚠️ 黃金法則</p>
          <p className="text-slate-300">先診斷再動手！不要「試著重啟看看」，要先知道為什麼才重啟</p>
        </div>
      </div>
    ),
    notes: `今天最後來一個綜合應用：系統故障排查 SOP。這個 SOP（Standard Operating Procedure，標準作業程序）是把今天學的所有技能串起來，用在最實際的場景：「某個服務掛掉了，怎麼辦？」

先說一個大原則：先診斷，再動手。很多初學者（甚至一些工作幾年的工程師）遇到問題的第一反應是「重啟看看」，這是非常不好的習慣。你不知道問題在哪就重啟，有幾個風險：一、重啟可能暫時解決表面問題，但根本原因沒有修復，幾分鐘後問題又來；二、重啟之前的日誌可能消失，你失去了診斷問題的最佳線索；三、如果問題是資料損壞，重啟可能讓情況更糟。正確的做法是先蒐集足夠的資訊，確認問題的原因，然後針對性地修復，最後再重啟確認修復成功。

**Step 1：確認現象**。用 systemctl status 服務名稱，快速確認服務的當前狀態。Active 那行的關鍵詞：active (running) 代表正常、failed 代表崩潰退出、inactive (dead) 代表服務停了。如果 status 顯示 failed，通常在輸出的最後幾行就有錯誤訊息，先讀那幾行。

**Step 2：看日誌**。journalctl -u 服務名稱 -n 50 看最近 50 行日誌，找 error、failed、cannot、permission denied 這類關鍵字。如果 50 行不夠，用 -n 200 或加上時間範圍：journalctl -u nginx --since "5 minutes ago"。在日誌裡找到錯誤訊息，這是診斷的核心。常見的錯誤類型：port 已被佔用（bind: address already in use）、設定檔語法錯誤（syntax error in 某設定檔）、找不到資源（No such file or directory）、權限不足（Permission denied）。每種錯誤都有對應的修復方法。

**Step 3：查資源**。用 top 或 htop 快速確認 CPU 和記憶體的使用情況。如果 CPU 使用率接近 100% 且持續這樣，可能是某個程序瘋狂消耗 CPU；如果記憶體使用率接近 100% 且大量 Swap 在用，可能是記憶體不足導致 OOM（Out of Memory）殺程序。Linux 的 OOM killer 會在記憶體耗盡時自動殺死它認為最佔記憶體的程序，這是服務突然消失的常見原因之一。確認方法：dmesg | grep -i "out of memory" 或 journalctl -k | grep -i oom，如果有 OOM 的記錄，代表你的服務是被 OOM killer 殺死的，需要加記憶體或優化程式。

**Step 4：查磁碟**。df -h 查看磁碟使用率，如果某個掛載點顯示 100%，就是磁碟滿了，服務可能因為無法寫入日誌或臨時檔案而崩潰。找到是哪個目錄最大用 ncdu 或 du -sh /var/log/* 查看日誌大小，通常問題就在這裡。磁碟滿了的緊急處理：先清理日誌（/var/log/ 下的 .gz 壓縮的舊日誌可以刪掉）、清理 apt 快取（sudo apt-get clean）、清理 Docker 資源（docker system prune）。

**Step 5：查網路**。ss -tlnp 查看哪些 port 正在被監聽，確認服務應該監聽的 port 是否存在。ss 是 netstat 的現代替代品（netstat 在較新的系統上可能沒有預裝）。-t 是 TCP，-l 是 listening，-n 是數字格式不解析名稱，-p 是顯示是哪個程序在監聽。如果 nginx 應該在 port 80 監聽，但 ss -tlnp | grep :80 沒有輸出，代表 nginx 沒有正常啟動或沒有在監聽。如果輸出顯示有其他程序佔用 port 80，就是 port 衝突。

**Step 6：修復並重啟**。根據前面診斷的結果修復問題（改設定、清空間、kill 衝突程序等），然後 systemctl restart 服務名稱，再用 systemctl status 和 curl 確認服務恢復正常。

這個 SOP 在 Kubernetes 節點除錯時同樣適用，把「服務名稱」換成 kubelet 或 containerd，整個流程一模一樣。學好這套思路，面對任何系統問題都不會慌，從容地一步一步找到根本原因，這是 Linux 系統管理員和 DevOps 工程師最核心的能力之一。

真實案例分享：我們曾經有一台 K8s 節點在凌晨突然變成 NotReady，告警在半夜兩點打來。登入節點，systemctl status kubelet 顯示 failed，journalctl -u kubelet -n 100 看到錯誤訊息「failed to sync pod」和一堆 I/O error，df -h 一看，根分區使用率 100%，磁碟滿了！原來是容器的日誌沒有設定大小上限，幾個跑了幾週的 Pod 的日誌把磁碟塞滿了。用 docker system prune 清理掉沒用的 image 和停止的容器，回收了 20GB，kubelet 重啟後節點回到 Ready。後來我們馬上去修改了每個 Pod 的日誌大小限制（logrotation），避免這個問題再次發生。這就是一個完整的「診斷 → 找原因 → 修復 → 預防」的閉環，而且整個過程用的全是今天學的技能。`,
    duration: '8',
  },

  // ========== 課程總結 ==========
  {
    title: '課程總結',
    subtitle: '今天學了什麼？',
    section: '課程總結',
    content: (
      <div className="space-y-5">
        <div className="grid gap-3">
          {[
            {
              topic: '程序管理',
              items: 'ps aux, top, htop, kill -9, killall',
              icon: '🔍',
            },
            {
              topic: '背景與前景',
              items: '& 背景執行、nohup 斷線存活、jobs/fg/bg 切換',
              icon: '🌙',
            },
            {
              topic: 'systemd 與服務管理',
              items: 'systemctl start/stop/restart/enable/disable/status',
              icon: '🛠️',
            },
            {
              topic: '套件管理',
              items: 'apt update / install / remove / purge / autoremove',
              icon: '📦',
            },
            {
              topic: '環境變數',
              items: '$PATH, export, alias, ~/.bashrc, source',
              icon: '🌿',
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="font-semibold text-k8s-blue">{item.topic}</p>
                <p className="text-slate-400 text-sm font-mono">{item.items}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-k8s-blue/20 border border-k8s-blue/50 p-4 rounded-lg text-sm">
          <p className="text-k8s-blue font-semibold">📝 下堂課預告</p>
          <p className="text-slate-300">下午：網路工具（ip、ping、curl、ss）與 shell 腳本入門</p>
        </div>
      </div>
    ),
    notes: `今天上午我們學了非常多東西，讓我來快速總結一下：

程序管理這塊，你現在知道怎麼用 ps aux 看所有程序，用 top 和 htop 即時監控，用 kill 和 killall 終止程序。PID 和 signal 的概念也清楚了。

背景執行這塊，你學會了 & 把程序放到背景、nohup 讓程序不因 SSH 斷線而死、jobs 查看工作列表、fg 和 bg 切換前後景、Ctrl+Z 暫停。

systemd 服務管理，你現在知道 systemd 是 PID 1、是管理所有服務的守護神，用 systemctl 可以啟動停止重啟服務，enable 設定開機自動啟動，journalctl 查看服務日誌。

apt 套件管理，一定要先 apt update，然後 apt install 安裝、apt remove 移除、apt purge 完全清除、autoremove 清理。

環境變數，$PATH 決定指令在哪裡找，export 設定變數，~/.bashrc 讓設定永久生效，alias 設定快捷方式，source 讓設定立刻生效。

這五個主題都是 Linux 日常管理的核心技能，也是之後學 Docker 和 Kubernetes 的基礎。下午我們繼續，會學網路工具和 Shell 腳本入門，大家午餐吃飽，準備下午的挑戰！有問題現在可以舉手提問。

今天上午的技能是互相連動的：你用 apt 安裝了 nginx，用 systemctl 啟動並設定開機自啟，用 ps 和 top 確認程序正常，用 journalctl 查看日誌，這就是 Linux 系統管理的完整循環。

課後練習建議：不看投影片，自己從頭把今天的操作做一遍——安裝 nginx、啟動服務、查看狀態、停止重啟、查看日誌、設定環境變數。如果能不靠提示做完，代表真的學會了，不只是「看懂了」。看懂和會做是兩個層次，工作中需要的是會做。有任何問題，課程群組隨時可以問。

讓我用一個完整的情境，把今天上午的所有主題串起來，讓大家看清楚這些技能是如何協同運作的。想像你是一位 DevOps 工程師，剛剛收到告警：網站回應很慢，可能有服務出問題。你的處理流程大概是這樣的。

SSH 進伺服器後，立刻執行 top 看 CPU 和記憶體有沒有異常。假設 CPU 正常，但記憶體使用率很高。用 ps aux --sort=-%mem 找出最耗記憶體的程序，發現 nginx worker 程序數量異常多。

執行 systemctl status nginx，確認服務狀態，看 Active 行有沒有異常訊息。接著 journalctl -u nginx -n 100 看最近的日誌，找到關鍵錯誤：連線沒有被正確關閉，導致 worker 程序不斷累積，記憶體越吃越多。

確認問題後，用 nano /etc/nginx/nginx.conf 修改 keepalive_timeout 設定，然後執行 systemctl reload nginx，讓新設定生效而不中斷現有連線。用 curl http://localhost 測試，服務回應正常了，記憶體使用率也開始下降。

最後，在 ~/.bashrc 裡加上幾個實用的 alias，比如 alias ngs="systemctl status nginx"，讓下次查看 nginx 狀態只需要打三個字母。source ~/.bashrc 讓設定立刻生效，以後就能用縮寫快速操作。

這整個問題排查流程，從登入伺服器到問題解決，用到了今天的 ps、top、systemctl、journalctl、nano、curl、alias 和 .bashrc 所有主題。缺少任何一個，整個流程就無法順暢完成。這就是今天課程設計的核心邏輯——每個技能都不是孤立的，而是互相配合，形成一套完整的 Linux 服務管理工作方式。

今天晚上的加碼挑戰（選做，強烈推薦）：試著安裝 MySQL（sudo apt install mysql-server -y），然後用今天所有的工具來探索它：systemctl status mysql 查看狀態、journalctl -u mysql -n 50 看日誌、ps aux | grep mysql 找程序、systemctl stop mysql 停止服務再 systemctl start mysql 重啟、systemctl enable mysql 設定開機自啟。能把這一整套做下來，代表今天的技能真的學進去了，而且明天學 Docker 的時候，這些基礎會讓你學得特別順。

下午的課程會學網路工具和 Shell 腳本入門，這兩個主題非常實用。網路工具讓你能夠診斷連線問題、查看 port 狀態；Shell 腳本讓你把今天手動做的事情自動化成一個腳本，一鍵執行。大家午餐好好吃，下午繼續衝刺！

【預期難搞學員問題 — 第二堂早上】

Q：systemctl 和 service 指令差在哪裡，為什麼都有人用？

A：service 多半是舊介面或相容包裝，systemctl 才是 systemd 的原生控制面。新環境建議統一用 systemctl，資訊更完整、行為更一致。混用通常會讓排障資訊切碎。

Q：kill -9 最乾脆，為什麼不直接都用它？

A：kill -9 會跳過清理流程，可能造成資料損毀或暫存未落盤。先送可被應用處理的訊號，再視情況升級到強制終止，才是生產環境可接受流程。快不等於安全。

Q：apt update 每次都跑很浪費時間，可以省略嗎？

A：可以在短時間內重複安裝時省略，但跨天或來源更新後建議先跑。否則你可能裝到舊索引導致套件找不到或版本衝突。穩定性通常比省幾秒更重要。

Q：nohup 背景執行沒有畫面，我怎麼知道程式活著？

A：要同時看程序狀態與輸出檔案，兩者缺一不可。只看 process 可能不知道是否卡死，只看 log 可能不知道是不是舊輸出。監控與驗證要成對進行。

Q：環境變數放密碼很方便，為什麼常被說不安全？

A：方便但暴露面大，診斷命令、程序資訊、錯誤轉儲都可能洩漏。正式環境應優先使用秘密管理機制與最小暴露範圍，環境變數只作為相容手段。

Q：每個人都在 .bashrc 設 alias，團隊會不會失控？

A：會，所以個人 alias 可以有，但共用流程必須文件化與腳本化。任何關鍵操作都不應依賴某人的私人快捷鍵。把一致性放在腳本而不是習慣。

Q：journalctl 訊息太多，該怎麼快速抓根因？

A：先縮時間窗，再縮服務單位，再看錯誤等級與關鍵字。不要一開始就看全部歷史，會被噪音淹沒。結構化地收斂範圍，效率會差很多。

Q：服務反覆重啟是程式問題還是 systemd 設定問題？

A：兩邊都可能。先判斷是應用異常退出，還是 restart policy 導致循環，再查退出碼與前後 log。把責任切清楚，修復才不會誤判方向。`,
    duration: '5',
  },
]
