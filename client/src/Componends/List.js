import React, { useRef, useState } from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import "../CSS/List.scss";
import ListItems from './ListItems';

const List = ({ list }) =>
{
    const [sliderNo, setSliderNo] = useState(0);
    const [isMoved, setIsMoved] = useState(false);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
    const listRef = useRef();

    const handleClick = (direction) =>
    {
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction === "left" && sliderNo > 0)
        {
            setIsMoved(true)
            listRef.current.style.transform = `translateX(${230 + distance}px)`
            setSliderNo(sliderNo - 1)
        }
        if (direction === "right" && sliderNo < 10 - clickLimit)
        {
            setIsMoved(true)
            listRef.current.style.transform = `translateX(${-230 + distance}px)`
            setSliderNo(sliderNo + 1)
        }
        console.log(distance);
    }
    return (
        <div className='list'>
            <span className='listTitle'>{list.title ? list.title : "No Movies Found"}</span>
            <div className='wrapper'>
                <ArrowBackIosOutlined className='sliderArrow left' onClick={() => handleClick("left")} style={{ display: !isMoved && "none" }} />
                <div className='container' ref={listRef}>
                    {list.content.map((item, i) => (
                        <ListItems key={i} index={i} item={item} />
                    ))}
                </div>
                <ArrowForwardIosOutlined className='sliderArrow right' onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default List
