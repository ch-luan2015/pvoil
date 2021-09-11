import { Cascader, Col, DatePicker, Input, Row } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';
import './TopContent.scss'

const {Search} = Input;

const TopContent = (props) => {
  const {values} = props;
  return (
    <div className='list-filter'>
      <Row>
        <Col span={6}>
          <Search placeholder="Tìm theo tên"
            allowClear
            enterButton
          />
        </Col>
        <Col span={6}>
          <Cascader options={values} allowClear placeholder="Loại HĐ" />,
        </Col>
         <Col span={6}>
           <DatePicker allowClear picker="month" />
        </Col>
         <Col span={6}>
          <Cascader options={values} allowClear placeholder="Chức vụ" />,
        </Col>
      </Row>
    </div>
  );
};

TopContent.propTypes = {
  values: PropTypes.array.isRequired,
};

TopContent.defaultProps = {
  values: [],
};

export default TopContent;
