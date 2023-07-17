import React from 'react';

class Navibar extends React.Component {
    render() {
      return (
        <nav>
          <ul class="flex-nav">
          <li><a href="guide.html">新手指南</a></li>
          <li><a href="fire_support.html">重裝部隊</a></li>
          <li><a href="walkthrough.html">主線劇情概要及大型活動史</a></li>
          <li><a href="ranking_map.html">積分模式關卡</a></li>
          </ul>
        </nav>
      );
    }
  }

export default Navibar;