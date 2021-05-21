import {connect} from 'react-redux'
import Home from '../components/Home'
import {addTodo} from '../action/index'

const mapStateToProps=state=>({

})

const mapDispatchToProps=dispatch=>({
  addNumber:data=>dispatch(addTodo(data))
})

export default connect(mapDispatchToProps,mapStateToProps)(Home);
