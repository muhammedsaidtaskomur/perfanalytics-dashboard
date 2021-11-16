import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {getAnalyticsAsync} from './redux/analytics/analyticSlice'
import AnalyticsChart from './components/AnalyticsChart'

function App() {
  const dispatch = useDispatch()
  const datas = useSelector(state=>state.analyticSlice.datas)

  useEffect(() => {
    dispatch(getAnalyticsAsync())
  }, [dispatch])

  return (
    <div className="App">
      <AnalyticsChart data={datas}/>
    </div>
    
  );
}

export default App;
