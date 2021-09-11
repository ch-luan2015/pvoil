import React from 'react';
import { Card } from 'antd';
import './index.scss';
import CountUp from 'react-countup';
import { UserOutlined } from '@ant-design/icons';

  const CardItem = () => {
    const countUp = {
        start: 0,
        duration: 2.75,
        useEasing: true,
        useGrouping: true,
        separator: ',',
    }
    return (
        <Card
            className="numberCard"
            bordered={false}
            bodyStyle={{ padding: 10 }}
        >
            <span className="iconWarp" >
                <UserOutlined />
            </span>
            <div className="content">
                <p className="title">dsfsdfsdf</p>
                <p className="number">
                    <CountUp
                        start={0}
                        end={2368}
                        duration={2.75}
                        useEasing
                        useGrouping
                        separator=","
                        {...(countUp || {})}
                    />
                </p>
            </div>
        </Card>
    );
  }

export default CardItem;
