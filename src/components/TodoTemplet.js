import React from 'react';
import styled from 'styled-components';

export default function TodoTemplet({ children }) {
  const TodoTempletStyle = styled.div`
    width: 700px;
    height: 1000px;
    background-color: white;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    display: flex;
    flex-direction: column;
  `;

  return <TodoTempletStyle>{children}</TodoTempletStyle>;
}
