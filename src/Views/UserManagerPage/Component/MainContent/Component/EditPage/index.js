import React, { useState } from 'react';
import { Button, Modal, Form, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { editProduct } from '../../../../../../Actions/EditProductAction';
import { getProduct } from '../../../../../../Actions/GetProductAction';

const EditPage = (props) => {

  let { information } = props
  const dispatch = useDispatch();

  const onCreate = (values) => {
    console.log(values);
    let id = values.id
    dispatch(editProduct(id,values,callBack))
    setVisible(false);
  }

  const callBack = () => {
    dispatch(getProduct())
  }

  const CollectionCreateForm = ( {visible, onCreate, onCancel, information, fields} ) => {

  const [form] = Form.useForm();
  const [idInfo] = useState(information.id)
  const [ fileUrl ] = useState(information.files);

  return (
    <Modal
      visible={visible}
      title="Thêm Sản Phẩm"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      width={1000}
      onOk={() => {
        form
          .validateFields()
          .then(async (values) => {
            let {name, position, salary, allowance, money, other, insurance, tax, real ,tags} = await values
            let product = await {id: idInfo, name, position, salary, allowance, money, other, insurance, tax, real, files: fileUrl, tags}
            onCreate(product);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        fields={fields}
      >
        <Row>
          <Col span={12} style={{paddingLeft: '24px'}}>
            <Form.Item
              name="name"
              label="Họ & Tên"
              rules={[
                {
                  required: true,
                  message: 'Please input the name of collection!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name="position" label="Chức vụ, Số CMND	">
              <Input />
            </Form.Item>
            <Form.Item name="salary" label="Lương Căn Bản	">
              <Input />
            </Form.Item>
            <Form.Item name="allowance" label="Phụ cấp trách nhiệm">
              <Input />
            </Form.Item>
            <Form.Item name="money" label="Tiền ăn">
              <Input />
            </Form.Item>
            <Form.Item name="other" label="Thu nhập khác">
              <Input />
            </Form.Item>
            <Form.Item name="insurance" label="BHXH-BHYT">
              <Input />
            </Form.Item>
            <Form.Item name="tax" label="Thuế TNCN">
              <Input />
            </Form.Item>
            <Form.Item name="real" label="Thực lĩnh">
              <Input />
            </Form.Item>
            <Form.Item name="tags" label="Loại HĐ">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
  const [visible, setVisible] = useState(false);
  const [fields] = useState([
    {
      name: 'name',
      value: information.name,
    },
    {
      name: 'position',
      value: information.position,
    },
    {
      name: 'salary',
      value: information.salary,
    },
    {
      name: 'allowance',
      value: information.allowance,
    },
    {
      name: 'money',
      value: information.money,
    },
    {
      name: 'other',
      value: information.other,
    },
    {
      name: 'insurance',
      value: information.insurance,
    },
    {
      name: 'tax',
      value: information.tax,
    },
    {
      name: 'real',
      value: information.real,
    },
    {
      name: 'tags',
      value: information.tags,
    },
  ])

  return (
    <div>
      <Button
        type="primary"
        ghost
        onClick={() => {
          setVisible(true);
        }}
      >
        Edit
      </Button>
      <CollectionCreateForm
        visible={visible}
        fields={fields}
        information={props.information}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

EditPage.propTypes = {
  fields : PropTypes.string,
  information: PropTypes.object.isRequired,
  visible: PropTypes.bool,
  onCreate: PropTypes.func,
  onCancel: PropTypes.func,
}

export default EditPage;
