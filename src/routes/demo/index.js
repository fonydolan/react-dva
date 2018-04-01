import { connect } from 'dva';
import styles from './index.less'

const Demo = ({ count, dispatch }) => {
    return <div>
        <span>{count || 'default'}</span>
        <button onClick={() => { dispatch({ type: 'demo/add' }); }}>+</button>
    </div>
}
function mapStateToProps(state) {
    var data = state.demo;
    return { count: data.current };
}
export default connect(mapStateToProps)(Demo);