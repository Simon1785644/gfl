import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul class="flex-nav">
          <li>
            <Link to="/">首頁</Link>
          </li>
          <li>
            <Link to="/guide">新手指南</Link>
          </li>
          <li>
            <Link to="/fire support">重裝部隊</Link>
          </li>
          <li>
            <Link to="/walkthrough">主線劇情概要及大型活動史</Link>
          </li>
          <li>
            <Link to="/ranking map">積分模式關卡</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;