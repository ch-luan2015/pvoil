import React, { useState } from 'react';
import {  Space, Table, Tag, Typography, Modal, Image, Button } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Document, Page } from 'react-pdf';
import EditPage from './Component/EditPage';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../../Actions/DeleteProductAction';
import Swal from 'sweetalert2';
import { getProduct } from '../../../../Actions/GetProductAction';

const { Text } = Typography;

const MainContent = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleImage, setIsModalVisibleImage] = useState(false);

  const clickDeleteProduct = (id) => {
    Swal.fire({
      title: 'Bạn chắc chắn muốn xóa?',
      showCancelButton: true,
      confirmButtonText: `Xóa`,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(id,callBack))
      }
    })
  }

  const callBack = () => {
    dispatch(getProduct())
  }

   const onDocumentLoadSuccess= ({ numPages }) => {
    setNumPages(numPages);
  }

  const showModal = (param) => {
    param === 'application/pdf' ? setIsModalVisible(true) : setIsModalVisibleImage(true)
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleOkImage = () => {
    setIsModalVisibleImage(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    const handleCancelImage = () => {
    setIsModalVisibleImage(false);
  };

  const columns = [
  {
    title: 'Họ & Tên',
    dataIndex: 'name',
  },
  {
    title: 'Chức vụ, Số CMND',
    dataIndex: 'position',
  },
  {
    title: 'Loại HĐ',
    key: 'tags',
    dataIndex: 'tags',
    render: function Tags(tags) {
      return(
      <>
        {tags.map(tag => {
          let color = tag === '3 tháng'? 'geekblue' : 'green';
          if (tag === 'nghỉ việc') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    )},
  },
  {
    title: 'Lương Căn Bản',
    dataIndex: 'salary',
  },
  {
    title: 'Phụ cấp trách nhiệm',
    dataIndex: 'allowance',
  },
  {
    title: 'Tiền ăn',
    dataIndex: 'money',
  },
  {
    title: 'Thu nhập khác',
    dataIndex: 'other',
  },
   {
    title: 'BHXH-BHYT',
    dataIndex: 'insurance',
  },
   {
    title: 'Thuế TNCN',
    dataIndex: 'tax',
  },
   {
    title: 'Thực lĩnh',
    dataIndex: 'real',
  },
   {
    title: 'FileHDLD',
    dataIndex: 'files',
    render: function Files(files) {
      return(
       <div>
        {files.map(f => (
          f.type === 'application/pdf' ?
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} width={1000} key={f}>
              <Document
                file={f.pdf}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>Page {pageNumber} of {numPages}</p>
            </Modal>
            :
            <Modal visible={isModalVisibleImage} onOk={handleOkImage} onCancel={handleCancelImage} width={1000} key={f}>
              <Image
                src = {f.image}
              />
            </Modal>
        ))}
        {files.map(f => (
          <Link key={f} to='#' onClick={()=>showModal(f.type)}>View File</Link>
        ))}
      </div>
    )}
  },
   {
    title: 'Action',
    dataIndex: '',
    key: 'action',
    render: function actions(information) {
      return(
      <Space size="middle">
        <EditPage information={information} />
        <Button danger onClick={()=>clickDeleteProduct(information.id)}>Xóa</Button>
      </Space>
    )},
  },
];

  return (
    <>
      <Table
      columns={columns}
      dataSource={data}
      pagination={true}
      bordered
      summary={pageData => {
        let totalSalary = 0;
        let totalAllowance = 0;
        let totalMoney = 0;
        let totalOther = 0;
        let totalInsurance = 0;
        let totalTax = 0;
        let totalReal = 0;

        pageData.forEach(({ salary, allowance, money, other, insurance, tax, real }) => {
          totalSalary += salary;
          totalAllowance += allowance;
          totalMoney += money;
          totalOther += other;
          totalInsurance += insurance;
          totalTax += tax;
          totalReal += real;
        });
        console.log(pageData)
          return (
          (pageData.length > 0) ?
            <Table.Summary.Row>
              <Table.Summary.Cell colSpan='3' align='center'>Tổng Cộng:</Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalSalary}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalAllowance}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalMoney}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalOther}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalInsurance}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalTax}</Text>
              </Table.Summary.Cell>
              <Table.Summary.Cell>
                <Text type="danger">{totalReal}</Text>
              </Table.Summary.Cell>
            </Table.Summary.Row> :
              <></>
        );
      }}
    />
    </>
  );
};

MainContent.propTypes = {
  data: PropTypes.array.isRequired,
};

MainContent.defaultProps = {
  data: [],
};

export default MainContent;
