import React from 'react';
import styled from 'styled-components';
import { MdDelete, MdDone } from 'react-icons/md';
import { css } from 'styled-components';

export default function TodoItem({ id, done, item }) {
  const Remove = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    color: #495057;
    font-size: 24px;
    transition: all 0.3s;
    &:hover {
      color: #5f3dc4;
    }
  `;

  const ItemTemplet = styled.div`
      display: flex;
      align-items: center;
      margin-bottom: 18px;
      
      &:hover{
        ${Remove} {
          cursor: pointer;
          display: flex;
        }
      }
    }
  `;

  const Check = styled.div`
    border: 2px solid #666;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 24px;
    cursor: pointer;

    ${(props) =>
      props.done &&
      css`
        border: 2px solid #5f3dc4;
      `}
  `;

  const Item = styled.div`
    flex: 1;
    font-size: 24px;
    ${(props) =>
      props.done &&
      css`
        color: #999;
        text-decoration-line: line-through;
      `}
  `;

  return (
    <ItemTemplet>
      <Check done={done} onClick={done.toggle}>
        {done && <MdDone size={36} color='#5f3dc4' className='icon' />}
      </Check>
      <Item done={done}>{item}</Item>
      <Remove>
        <MdDelete />
      </Remove>
    </ItemTemplet>
  );
}
