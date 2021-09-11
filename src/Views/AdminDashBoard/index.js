import { ScheduleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import React from 'react';
import CountUp from 'react-countup';
import './AdminDashBoard.scss';

function AdminDashBoard() {

	const countUp = {
		start: 0,
		duration: 2.75,
		useEasing: true,
		useGrouping: true,
		separator: ',',
	}
	return (
		<Row gutter={24, 24}>
			<Col style={{ padding: '8px 8px' }} span={6} lg={6} md={12} sm={12} xs={24}>
				<div className="dash_card">
					<div className="info-box7-block l-bg-green">
						<h4 style={{ marginBottom: 10.5, textAlign: 'left' }}>Order View</h4>
						<h2 style={{ textAlign: 'right', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
							<ScheduleOutlined style={{ fontSize: '32px', color: '#fff' }} />
							<span style={{ color: '#fff' }}>
								<CountUp
									start={0}
									end={2368}
									duration={2.75}
									useEasing
									useGrouping
									separator=","
									{...(countUp || {})}
								/></span>
						</h2>
						<p style={{ textAlign: 'left', margin: 0 }}>18% Higher Then Last Month</p>
					</div>
				</div>
			</Col>
		</Row>

	);
}

export default AdminDashBoard;
