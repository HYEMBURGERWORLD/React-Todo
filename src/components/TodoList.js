import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

export default function TodoList() {
  const ListTemplet = styled.div`
    padding: 42px 32px;
    flex: 1;
    overflow-y: auto;
  `;

  return (
    <ListTemplet>
      <TodoItem item='멋들어지게 세수하기' done={true}></TodoItem>
      <TodoItem item='장보기' done={false}></TodoItem>
      <TodoItem item='콩이 빗질하기' done={false}></TodoItem>
    </ListTemplet>
  );
}
