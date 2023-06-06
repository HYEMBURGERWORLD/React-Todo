import React from 'react';
import styled from 'styled-components';

export default function TodoToday() {
  const dayList = ['日', '月', '火', '水', '木', '金', '土'];
  const TodayBlock = styled.div`
    padding: 48px 42px;
    border-bottom: 1px solid #ced4da;

    h1 {
      margin: 0;
      font-size: 36px;
      font-weight: 600;
    }

    .day {
      color: #777;
      font-size: 48px;
      font-weight: bold;
    }

    .task {
      font-weight: bold;
      color: #5f3dc4;
    }

    .flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `;

  const day = new Date();

  return (
    <TodayBlock>
      <div className='today-info-box flex'>
        <div className=''>
          <h1>
            {day.getFullYear()}.{day.getMonth() + 1}.{day.getDate()}
          </h1>
          <div className='task'>남은 일 총 3개</div>
        </div>
        <div className='day'>{dayList[day.getDay()]}</div>
      </div>
    </TodayBlock>
  );
}
