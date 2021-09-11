import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProduct } from '../../Actions/GetProductAction';

import MainContent from './Component/MainContent';
import TopContent from './Component/TopContent';

const UserManager = () => {

  const infor = useSelector(store => store.infor.list)
  const dispatch = useDispatch()

  const getInfo = () => {
    dispatch(getProduct())
  }

  useEffect(()=>{
    getInfo()
  },[])

  const options = [
    {
      value: 'tất cả',
      label: 'tất cả',
    },
    {
      value: '3 tháng',
      label: '3 tháng',
    },
    {
      value: 'Thời vụ',
      label: 'Thời vụ',
    }
]

  return (
    <div>
      <h1> BẢNG QUẢN LÝ NHÂN SỰ</h1>
      <TopContent values = {options}/>
      <MainContent data = {infor} />
    </div>
  );
};

export default UserManager;
