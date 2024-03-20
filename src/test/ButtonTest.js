import React from 'react';
import Button from '../components/Button';
import {getEmotionImgById} from '../utils';
function ButtonTest(props) {
    return (
        <div>
            <h1> 버튼 테스트 입니다. </h1>

         <div><Button text = "기본버튼" type = "default"></Button></div>
         <div><Button text = "positive 버튼" type = "positive"></Button></div>
         <div><Button text = "negative 버튼" type = "negative"></Button></div>

         <div>
         <h1> 이미지 테스트 입니다. </h1>

            <img src = {getEmotionImgById(1)} alt="이모션 이미지" />
            <img src = {getEmotionImgById(2)} alt="이모션 이미지" />
            <img src = {getEmotionImgById(3)} alt="이모션 이미지" />
            <img src = {getEmotionImgById(4)} alt="이모션 이미지" />
            <img src = {getEmotionImgById(5)} alt="이모션 이미지" />

         </div>

        </div>
    );
}

export default ButtonTest;