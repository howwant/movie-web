import { RiCompassDiscoverLine } from 'react-icons/ri';
import { FiTrendingUp } from 'react-icons/fi';
import { MdOutlineWbSunny,MdOutlineLocalActivity } from 'react-icons/md';
import { BiHeartCircle } from 'react-icons/bi';
import img from '../img/bab.jpeg';
import styled from 'styled-components';

function Sidebar () {
    return(
        <SidebarStyled>
            <h1>WatchMovies</h1>
            <div className='userprofile'>
                <img src={img} alt="userimage"/>
                <span>username</span>
            </div>
            <div className='sidebar-list'>
                <h3>Main</h3>
                <ul>
                    <li><RiCompassDiscoverLine/>Discover</li>
                    <li><FiTrendingUp/>Trending</li>
                    <li><MdOutlineWbSunny/>New</li>
                    <li><MdOutlineLocalActivity/>Activity</li>
                </ul>
            </div>
            <div className='sidebar-list sidebar-line'>
                <h3>Label</h3>
                <ul>
                    <li><BiHeartCircle/>My Movie</li>
                    <li><BiHeartCircle/>Funny</li>
                    <li><BiHeartCircle/>Windless</li>
                </ul>
            </div>
        </SidebarStyled>
    );
};
const SidebarStyled = styled.div`
    border-radius: 5px 0 0 5px;
    background-color: #fff;
    width: 20%;
    h1 {
        text-align: center;
        margin-top: 70px;
        margin-bottom: 45px;
    }
    img {
        display: block;
        width: 150px;
        height: 150px;
        margin: 0 auto 20px;
        border-radius: 50%;
        box-shadow: 0px 2px 7px #666;
    }
    .userprofile {
        text-align: center;
        color: #777;
        margin-bottom: 70px;
    }
    .sidebar-list {
        margin: 0 15%;;
        color: #777;
        h3 {
            font-weight: 400;
        }
        ul {
            list-style: none;
        }
        li {
            padding: 10px 0;
            transition: 0.2s;
            cursor: pointer;
            &:hover {
                font-weight: bold;
            }
        }
        svg {
            padding-right: 11px;
            vertical-align: middle;
        }
    }
    .sidebar-line::before{
            content: "";
            width: 100%;
            height: 1px;
            background-color: #777;
            display: block;
            margin: 50px 0;
        }
`;
export default Sidebar;