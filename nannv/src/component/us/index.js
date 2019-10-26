import React,{Component} from 'react'
import axios from "axios"
import {Card} from 'antd'
import ReactEcharts from 'echarts-for-react';
class UserList extends Component{
    constructor() {
      super()
      this.state = {
        option: {
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['55%', '60%'],
              data:[],

            }
          ]
        }
      }
  }

componentDidMount(){
  axios.get("/api/admin/music/getMusic")
      .then((data)=>{
        console.log("sdfg",data)

       let option =JSON.parse(JSON.stringify(this.state.option))


        console.log("和壑",option)
       option.series[0].data=data.list.map(_i => ({value:_i.musicNum,name: _i.musicType})).reduce((total,current)=>{
           let isHave = false
           total.map(_i => {
               if(_i.name == current.name){
                   _i.value += current.value;
                   isHave = true;
               }
           })
           if(!isHave) total.push(current)
           return total
       },[])

          //然后在获取到值以后需要修改页面

          // console.log("niaho",data.list.map(_i => ({value:_i.musicNum,name: _i.musicType})))
        console.log("ddddd",this)
          console.log('你好',this.state.option)
          console.log("啦啦",this.state.option.series[0].data)
        this.setState({option})

      })
}
  render(){
    return(
         <Card>
        <ReactEcharts option={this.state.option} />
    <hr/>
        </Card>

    )
    
  }
}
export default UserList