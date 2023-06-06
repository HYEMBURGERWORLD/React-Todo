import React from 'react';
import styled, { css } from 'styled-components';
import { MdMic, MdOutlineSubdirectoryArrowLeft } from 'react-icons/md';

export default function TodoCreate() {
  const InputFormBox = styled.div`
    width: 100%;
    border-top: 1px solid #ced4da;
    padding 36px 0;
  `;

  const InputForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
    padding: 0 30px;
    gap: 10px;
  `;

  const Input = styled.input`
    width: 100%;
    padding: 20px 30px;
    border: none;
    font-size: 20px;
    color: #666;
    outline: none;
  `;

  return (
    <InputFormBox>
      <InputForm>
        <Input autoFocus placeholder='やるべきことを作成してください' />
        <MdMic size={32} className='icon' />
        <MdOutlineSubdirectoryArrowLeft size={32} className='icon' />
      </InputForm>
    </InputFormBox>
  );
}
