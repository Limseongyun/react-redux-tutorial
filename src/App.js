import logo from './logo.svg';
import './App.css';
import {connect, useDispatch, useSelector} from "react-redux";
import {updateUser} from "./redux/actions";

function App(props) {
  //subscribe
  const user = useSelector(state => state.user);
  const name ="lsy"
  //dispatch
  const dispatch = useDispatch();
  return (
    <div className="App">
     <p>{user}</p>
      <button onClick={() => dispatch(updateUser(name))}>a</button>
    </div>
  );
}
export default App;
// //구독
// //store의 state를 props로 매핑
// const mapStateToProps = (state) => ({
//   //왼쪽은 props, 오른쪽은 store state
//   user : state.user,
//   product : state.products
// });
//
// //dispatch
// //(액션을 디스패치하는)펑션을 props로 매핑
// const mapActionToProps = (dispatch) => ({
//   //왼쪽은 props, 오른쪽은 펑션
//   updateUser : (name)=>dispatch(updateUser(name))
// })
// export default connect(mapStateToProps,mapActionToProps)(App);
