import PostList from './PostList';
import React, { useState, useEffect }from 'react'
import { testDataList } from '../Data';
import { Link } from 'react-router-dom';
import './Post.css';

const PostMain = () => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        setDataList(testDataList);
    }, [])

    return (
        <>
            <h2 align="center">Q&A 게시판</h2>
            <button type='button'>
                <Link to='/PostWriter'>글쓰기</Link>
            </button>
            <PostList dataList={dataList}/>
        </>
    )
}
export default PostMain;