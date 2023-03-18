import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
    // scss記法が可能
    const containerStyle = css`
        border: solid 1px #aaa;
        border-radius: 20px;
        padding: 8px;
        margin: 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    `;
    
    // inline-style like な記法
    // cssに続けて({})内にCSS記述, キャメルケース, 文字列と数値指定
    const titleStyle = css({
        margin: 0,
        color: "#aaa",
    });
    
  
    return (
        // classNameをcssに変更
        <div css={containerStyle}>
            <p css={titleStyle}>text</p>
            <SButton>push</SButton>
        </div>
    );
};
    
const SButton = styled.button`
    background-color: #ddd;
    border: none;
    padding: 8px;
    border-radius: 8px;
    &:hover {
        background-color: #aaa;
        color: #fff;
        cursor: pointer;
    }
`;