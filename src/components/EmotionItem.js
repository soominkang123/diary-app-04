import React from 'react';
import './EmotionItem.css';

// 새 글쓰기 에서 emotionList 의 배열의 객체 5개를 출력
function EmotionItem({id, name, img, onClick, isSelected}) {

    const handleOnClick = () => {
        onClick(id); 
    }

    return (
        <div
           className={["EmotionItem", 
             isSelected ? `EmotionItem_on_${id}`: 'EmotionItmem_off'].join(" ")}
           onClick={handleOnClick}
        >
            <img alt={`emotion${id}`} src = {img} />
            <span>{name}</span>
        </div>
    );
}

export default EmotionItem;