import React,{Component} from 'react'
import { Input,Button} from 'antd';
import './index.less'


class Search extends Component{
  
  render(data){
    return(
    <div>
      
        <Input size="small" />
      
      
        <Button  type="primary" icon="search">Search</Button>
      
    </div>
    )
    
  }
}
export default Search