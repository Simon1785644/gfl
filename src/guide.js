import React from 'react';
import ReactDOM from 'react-dom/client';
import Navibar from './header.js';
import './guide.css'; 

function Guide() {
    return (
        <>
            <h2>新手指南</h2>
            <h3>開局</h3>
            <p>主畫面右上四項資源以z字看，依序是人力/彈藥/口糧/零件。
            勿腦衝花光資源造槍。五星槍要大量核心補滿伍，適度的養。
            每日任務自己規劃一下優先順序，哪些必須優先、哪些可以先不管。
            鑽石第一優先是開啟更多梯隊，才能兼顧作戰與後勤。</p>

            <h4>戰鬥</h4>
            <h4>後勤支援</h4>
            <p>如同Kancolle的遠征系統，但不耗口糧彈藥。
            儘量推圖以解鎖更多的後勤方案，目前後勤至第13章。</p>

            <h4>模擬作戰</h4>
            <ul>
                <li><h5>資料採樣</h5></li>
                <p>前期什麼都缺，先以手上槍枝組個較佳隊伍打即可。</p>

                <li><h5>雲圖迴廊</h5></li>
                <p>後期解鎖，很缺記憶碎片再打。</p>

                <li><h5>融合演習</h5></li>
                <p>後期解鎖，有開啟每日必打，配隊見巴哈姆特、PTT專版。</p>

                <li><h5>模擬作戰-其他</h5></li>
                <p>後期再抽空打打防禦演習。
                靶機專訓是用來測試隊伍組合、練習拉槍用。
                剩下比較沒意義。</p>
            </ul>

            <h4>據點設施</h4>
            <p>請參閱首頁連結討論區文章。</p>

            <h3>新人推圖指南</h3>
            <p>[2019]<a href="https://www.bilibili.com/video/BV1YE411R7MY/" target="_blank" rel="noreferrer">
                [bilibili]生涯以及1到13章好友支援速推(Liu大官人吖~)</a></p>    
            <p>[2022]<a href="https://www.bilibili.com/video/BV1Pq4y1b7E4/" target="_blank" rel="noreferrer">
                [bilibili]萌新开荒速推 3天打通13章(三千院-亚里亚)</a></p>

            <h3>專有名詞對照</h3>
            <ul>
                <li><h5>槍種</h5></li>
                <p>HG(Handgun) - 手槍
                SMG(Submachine Gun) - 衝鋒槍
                AR(Assault Rifle) - 突擊步槍
                RF(Rifle) - 步槍
                SG(Shotgun) - 霰彈槍
                MG(Machine Gun) - 機槍</p>

                <li><h5>技術類</h5></li>
                <p>拉槍、卡抬手：泛指利用拖曳人形走位，以增加敵人瞄準—攻擊時間，爭取我方輸出時間或閃避傷害的作法。
                拉槍後撤退：戰鬥畫面於拉槍走位後，點該人形選擇撤退，利用撤退時無敵，吸掉敵方一輪傷害。</p>
        
                <li><h5>策略類</h5></li>
                <p>換位救援：先與人質互換位置，再進行救援的作法，於步數吃緊或戰略考量時用。但不代表每次救援一定要先換位！
                包圍佔領：例如無法直接抵達敵方指揮部、打不過的鐵血木星砲，利用包圍方式佔領或使其弱化再打。
                拖屍：除了坦及必要的輸出手，其餘均不補充彈藥口糧，以節省資源消耗，提高練等效率。必須於設置關閉自動補給。</p>
            </ul>

            <a href="index.html">返回首頁</a>
        </>
   );
}

const container = document.getElementById('react-gfl');
const root = ReactDOM.createRoot(container);
root.render( 
  <>
  <Navibar />
  <Guide />
  </>
);

export default Guide;