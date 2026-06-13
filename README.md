<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>一年级语文《四季》互动精品课件</title>

<link rel="stylesheet" href="style.css">

</head>
<body>

<!-- 顶部积分栏 -->
<div class="score-board">
    ⭐ 当前积分：
    <span id="score">0</span>
</div>

<!-- 封面 -->
<section class="page cover">

    <h1>一年级语文上册《四季》</h1>

    <h2>🌸 四季探秘大闯关 🌸</h2>

    <button onclick="nextPage()">开始学习</button>

</section>


<!-- 学习目标 -->
<section class="page">

    <h1>🎯 学习目标</h1>

    <div class="card">
        ✅ 正确流利朗读课文
    </div>

    <div class="card">
        ✅ 认识四季特点
    </div>

    <div class="card">
        ✅ 学习生字词
    </div>

    <div class="card">
        ✅ 完成三关挑战
    </div>

</section>


<!-- 情境导入 -->
<section class="page">

    <h1>🌈 猜一猜</h1>

    <div class="guess-container">

        <div class="guess-card">
            🌸 桃花
        </div>

        <div class="guess-card">
            ☀️ 荷花
        </div>

        <div class="guess-card">
            🍂 落叶
        </div>

        <div class="guess-card">
            ❄️ 雪人
        </div>

    </div>

</section>


<!-- 四季导航 -->
<section class="page">

    <h1>🌍 四季导航</h1>

    <div class="season-nav">

        <a href="#spring">🌸 春天</a>

        <a href="#summer">☀️ 夏天</a>

        <a href="#autumn">🍂 秋天</a>

        <a href="#winter">❄️ 冬天</a>

    </div>

</section>



<!-- 春天 -->
<section class="page spring" id="spring">

    <h1>🌸 春天</h1>

    <h2>草芽尖尖</h2>

    <div class="picture">
        🌱🐦
    </div>

    <p>
        草芽尖尖，他对小鸟说：
    </p>

    <h2>
        “我是春天。”
    </h2>

    <button onclick="speak('草芽尖尖，他对小鸟说，我是春天')">
        🔊 朗读
    </button>

</section>


<!-- 夏天 -->
<section class="page summer" id="summer">

    <h1>☀️ 夏天</h1>

    <h2>荷叶圆圆</h2>

    <div class="picture">
        🌿🐸
    </div>

    <p>
        荷叶圆圆，他对青蛙说：
    </p>

    <h2>
        “我是夏天。”
    </h2>

    <button onclick="speak('荷叶圆圆，他对青蛙说，我是夏天')">
        🔊 朗读
    </button>

</section>



<!-- 秋天 -->
<section class="page autumn" id="autumn">

    <h1>🍂 秋天</h1>

    <h2>谷穗弯弯</h2>

    <div class="picture">
        🌾🍎
    </div>

    <p>
        谷穗弯弯，他鞠着躬说：
    </p>

    <h2>
        “我是秋天。”
    </h2>

    <button onclick="speak('谷穗弯弯，他鞠着躬说，我是秋天')">
        🔊 朗读
    </button>

</section>



<!-- 冬天 -->
<section class="page winter" id="winter">

    <h1>❄️ 冬天</h1>

    <h2>雪人大肚子一挺</h2>

    <div class="picture">
        ⛄️❄️
    </div>

    <p>
        雪人大肚子一挺，他顽皮地说：
    </p>

    <h2>
        “我就是冬天。”
    </h2>

    <button onclick="speak('雪人大肚子一挺，他顽皮地说，我就是冬天')">
        🔊 朗读
    </button>

</section>


<!-- 生字学习 -->
<section class="page">

<h1>📖 生字学习</h1>

<div class="character-grid">

<div class="character-card">
<h2>春</h2>
<p>chūn</p>
<p>春天 春风 春雨</p>
<button onclick="speak('春')">🔊</button>
</div>

<div class="character-card">
<h2>夏</h2>
<p>xià</p>
<p>夏天 夏日</p>
<button onclick="speak('夏')">🔊</button>
</div>

<div class="character-card">
<h2>秋</h2>
<p>qiū</p>
<p>秋天 秋风</p>
<button onclick="speak('秋')">🔊</button>
</div>

<div class="character-card">
<h2>冬</h2>
<p>dōng</p>
<p>冬天 冬雪</p>
<button onclick="speak('冬')">🔊</button>
</div>

<div class="character-card">
<h2>尖</h2>
<p>jiān</p>
<p>尖尖 笔尖</p>
<button onclick="speak('尖')">🔊</button>
</div>

<div class="character-card">
<h2>圆</h2>
<p>yuán</p>
<p>圆圆 圆月</p>
<button onclick="speak('圆')">🔊</button>
</div>

</div>

</section>



<!-- 三关挑战 -->
<section class="page">

<h1>🏆 三关挑战</h1>

<div class="level-card">

<h2>第一关</h2>

<p>认识四季</p>

<button onclick="addScore(10)">
挑战成功 +10⭐
</button>

</div>


<div class="level-card">

<h2>第二关</h2>

<p>识字达人</p>

<button onclick="addScore(20)">
挑战成功 +20⭐
</button>

</div>


<div class="level-card">

<h2>第三关</h2>

<p>智慧挑战</p>

<button onclick="addScore(30)">
挑战成功 +30⭐
</button>

</div>

</section>



<!-- 奖章 -->
<section class="page">

<h1>🥇 荣誉奖章</h1>

<div class="medal-container">

<div class="medal bronze">

🥉

<h2>四季小能手</h2>

</div>


<div class="medal silver">

🥈

<h2>识字小达人</h2>

</div>


<div class="medal gold">

🥇

<h2>四季探索家</h2>

</div>

</div>

</section>



<!-- 课后拓展 -->
<section class="page">

<h1>📝 课后拓展</h1>

<div class="task-card">

🎨 任务一：画出自己最喜欢的季节

</div>

<div class="task-card">

📷 任务二：收集四季图片

</div>

<div class="task-card">

🌳 任务三：观察自然变化并记录

</div>

<div class="task-card">

🎤 任务四：背诵课文并录音上传

</div>

</section>



<!-- 总结 -->
<section class="page end">

<h1>

🌸 春有花

☀️ 夏有荷

🍂 秋有果

❄️ 冬有雪

</h1>

<h2>

谢谢大家！

</h2>

</section>



<script src="script.js"></script>

</body>
</html>
