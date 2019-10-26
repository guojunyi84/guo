import React,{Component} from 'react'
import Micon from '../icon/icon'
import { Timeline ,Card , Comment, Tooltip, List ,form} from 'antd';
import ReactEcharts from 'echarts-for-react';
import './index.less'
import moment from 'moment';

const data = [
  {

    author: '鸣人',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
        终于当上火影了!
      </p>
    ),

  },
  {

    author: '佐助',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
       吊车尾~~
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {

    author: '小樱',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
       佐助,你好帅
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    author: '雏田',
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    content: (
      <p>
       鸣人君。。。那个。。。我。。喜欢你..
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
];



class Home extends Component{
	constructor() {
		super()
		this.state={
			option : {
			    title : {
			        text: '最近50天项目完成数量',
					x:'center'
			    },
			    tooltip : {
			        trigger: 'axis'
			    },
			    toolbox: {
			        show : true,
			    },
			    calculable : true,
			    xAxis : [
			        {
			            type : 'category',
			            data : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49]
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'完成项目数',
			            type:'bar',
			            data:[10,12,14,15,17,18,18,17,16,15,13,12,10,9,8,8,8,9,11,14,18,22,27,33,38,44,50,56,60,64,67,69,69,68,66,62,58,52,45,39,37,31,24,17,11,7,4,3,3,6],
			        },
			       
			    ]
			},
			option1:{
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data: ['2019-10-15' , '2019-10-16','2019-10-17','2019-10-18', '2019-10-19','2019-10-20', '2019-10-21']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [{
			        data: [1200, 1400, 808, 811, 626, 488, 1600],
			        type: 'line',
			        areaStyle: {}
			    }]
			}

		}
	}
  render(){
    return(
      <div className='home-box'>
       <Micon></Micon>
	   <div className='home-list' >
	   <ReactEcharts option={this.state.option} />
	   </div>
	   <Card title="建站日志" extra={<a href="#">More</a>} style={{ width: 390,marginLeft:30,float:'left' }}>
	   <Timeline>
	       <Timeline.Item color="green">更多模块开发中</Timeline.Item>
	       <Timeline.Item color="green">使用TS重构</Timeline.Item>
	       <Timeline.Item color="red">模块化探索</Timeline.Item>
	       <Timeline.Item>封装Ajax实现跨域请求</Timeline.Item>
	       <Timeline.Item color="gray">引人Redux,Fetch</Timeline.Item>
	       <Timeline.Item color="gray">引人Less,React-Router(4.x)</Timeline.Item>
	     </Timeline>
	   
		
	   </Card>
	   <Card title="消息栏" extra={<a href="#">More</a>} style={{ width: 390,marginLeft:30,float:'left'}}>
	   <List
	       className="comment-list"
	  
	       itemLayout="horizontal"
	       dataSource={data}
	       renderItem={item => (
	         <li style={{height:63}}>
	           <Comment
	             actions={item.actions}
	             author={item.author}
	             avatar={item.avatar}
	             content={item.content}
	             datetime={item.datetime}
	           />
	         </li>
	       )}
	     />,
	   
	   </Card>
	   <Card title="访问用户量统计" extra={<a href="#">More</a>} style={{ width: 390,height:380,marginLeft:30,float:'left'}}>
	   <ReactEcharts option={this.state.option1} />
	   </Card>
      </div>
    )
    
  }
}
export default Home