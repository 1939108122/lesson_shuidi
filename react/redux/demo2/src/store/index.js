import { CreateStore } from 'redux'
import reducer from './reducer'

const store = CreateStore(reducer)

export default store
