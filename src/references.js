import './Style.css';

function CNLink(props) {
  return <li>[NGA] { props.ngalink }</li>;
}

function CNLink2(props) {
  return <li>[bilibili] { props.blink }</li>;
}

function Infos() {
  const links = [
    {id: 1, link: <a href="https://hycdes.com/pages/index.html" target="_blank" rel="noreferrer">少女前线工具 by 命运の乐章 (GF tools)</a>},
    {id: 2, link: <a href="https://bbs.nga.cn/thread.php?fid=-547859&rand=771" target="_blank" rel="noreferrer">少女前线-16LAB研究院</a>},
    {id: 3, link: <a href="https://bbs.nga.cn/read.php?tid=13753602&rand=981" target="_blank" rel="noreferrer">
    [练以致用]人形、装备、妖精、重装、融合势力应用榜合集</a>}
  ];
  const links2 = [
    {id: 1, link: <a href="https://space.bilibili.com/3320755/article" target="_blank" rel="noreferrer">サイ期ノ屑的個人空間</a>},
    {id: 2, link: <a href="https://space.bilibili.com/355689042/article" target="_blank" rel="noreferrer">星咏しろは的個人空間</a>},
    {id: 3, link: <a href="https://space.bilibili.com/896120/article" target="_blank" rel="noreferrer">三千院-亚里亚的個人空間</a>}
  ]; 
  return (
    <>
      <h2>實用資訊參照(References)</h2>
      <p>部份文章久未更新，2022年以前的舊文看看就好。</p>
	    <h3>簡體中文(zh-CN)</h3>
	    <ul>
        <li><a href="https://gfwiki.org/" target="_blank" rel="noreferrer">簡中維基(部份內容久未更新)</a></li>
        {links.map((linktarget) => <CNLink key={linktarget.id} ngalink={linktarget.link} />)}
        {links2.map((linktarget) => <CNLink2 key={linktarget.id} blink={linktarget.link} />)}
        <li><a href="https://shimo.im/sheets/SW2bn3XhwaAgZRNx/Xvvar" target="_blank" rel="noreferrer">似君的工作表(積分模式取向)</a></li>
      </ul>
      <h3>繁體中文(zh-TW)</h3>
      <ul>
      <li><a href="https://www.ptt.cc/man/GirlsFront/D160/index.html" target="_blank" rel="noreferrer">[PTT]GirlsFront精華區</a></li>
      <li><a href="https://www.ptt.cc/bbs/GirlsFront/M.1488269433.A.C0B.html" target="_blank" rel="noreferrer">[PTT]台版解鎖和諧立繪方法</a></li>
      <li><a href="https://forum.gamer.com.tw/B.php?bsn=31406" target="_blank" rel="noreferrer">[巴哈姆特]少女前線哈啦版</a></li>
      <li><a href="https://forum.gamer.com.tw/C.php?bsn=31406&snA=9698&tnum=72" rel="noreferrer">[巴哈姆特]重裝小隊︱心智升級</a></li>
      </ul>
    </>
  );
}

export default Infos;
