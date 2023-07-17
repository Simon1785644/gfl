function NGA(props) {
  return <li style={{color:"DodgerBlue"}}>[NGA] { props.nga }</li>;
}

function Bili(props) {
  return <li style={{color:"DeepSkyBlue"}}>[bilibili] { props.bili }</li>;
}

function PTT(props) {
  return <li style={{color:"Yellow"}}>[PTT] { props.ptt }</li>;
}

function Baha(props) {
  return <li style={{color:"DarkTurquoise"}}>[巴哈姆特] { props.baha }</li>;
}

function Home() {
  const ngalinks = [
    {id: 1, link: <a href="https://hycdes.com/pages/index.html" target="_blank" rel="noreferrer">少女前线工具 by 命运の乐章 (GF tools)</a>},
    {id: 2, link: <a href="https://bbs.nga.cn/thread.php?fid=-547859&rand=771" target="_blank" rel="noreferrer">少女前线-16LAB研究院</a>},
    {id: 3, link: <a href="https://bbs.nga.cn/read.php?tid=13753602&rand=981" target="_blank" rel="noreferrer">
    [练以致用]人形、装备、妖精、重装、融合势力应用榜合集</a>}
  ];
  const bilibililinks = [
    {id: 1, link: <a href="https://space.bilibili.com/3320755/article" target="_blank" rel="noreferrer">サイ期ノ屑的個人空間</a>},
    {id: 2, link: <a href="https://space.bilibili.com/355689042/article" target="_blank" rel="noreferrer">星咏しろは的個人空間</a>},
    {id: 3, link: <a href="https://space.bilibili.com/896120/article" target="_blank" rel="noreferrer">三千院-亚里亚的個人空間</a>},
    {id: 4, link: <a href="https://www.bilibili.com/video/BV1YE411R7MY/" target="_blank" rel="noreferrer">
      生涯以及1到13章好友支援速推(Liu大官人吖~)(2019)</a>},
    {id: 4, link: <a href="https://www.bilibili.com/video/BV1Pq4y1b7E4/" target="_blank" rel="noreferrer">
      萌新开荒速推 3天打通13章(三千院-亚里亚)(2022)</a>}  
  ];
  const pttlinks = [
    {id: 1, link: <a href="https://www.ptt.cc/man/GirlsFront/D160/index.html" target="_blank" rel="noreferrer">GirlsFront精華區</a>},
    {id: 2, link: <a href="https://www.ptt.cc/bbs/GirlsFront/M.1488269433.A.C0B.html" target="_blank" rel="noreferrer">台版解鎖和諧立繪方法</a>}
  ];
  const bahalinks = [
    {id: 1, link: <a href="https://forum.gamer.com.tw/B.php?bsn=31406" target="_blank" rel="noreferrer">少女前線哈啦版</a>},
    {id: 2, link: <a href="https://forum.gamer.com.tw/C.php?bsn=31406&snA=9698&tnum=72" target="_blank" rel="noreferrer">重裝小隊︱心智升級</a>}
  ];  
  return (
    <>
      <img src="images/banner1.png" alt="banner" style={{padding:"0px 60px"}} />
      <p style={{color:"grey"}}>Just a unofficial GFL web page.</p>
      <h2>實用資訊參照(References)</h2>
      <p>部份文章久未更新，2022年以前的舊文看看就好。</p>
	    <h3>簡體中文(zh-CN)</h3>
	    <ul>
        <li><a href="https://gfwiki.org/" target="_blank" rel="noreferrer">簡中維基(部份內容久未更新)</a></li>
        {ngalinks.map((linktarget) => <NGA key={linktarget.id} nga={linktarget.link} />)}
        {bilibililinks.map((linktarget) => <Bili key={linktarget.id} bili={linktarget.link} />)}
        <li><a href="https://shimo.im/sheets/SW2bn3XhwaAgZRNx/Xvvar" target="_blank" rel="noreferrer">似君的工作表(積分模式取向)</a></li>
      </ul>
      <h3>繁體中文(zh-TW)</h3>
      <ul>
        {pttlinks.map((linktarget) => <PTT key={linktarget.id} ptt={linktarget.link} />)}
        {bahalinks.map((linktarget) => <Baha key={linktarget.id} baha={linktarget.link} />)}
      </ul>
    </>
  );
}

export default Home;
  