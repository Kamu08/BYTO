const { createStore } = Redux;
const store = createStore(trackReducer);
const { Provider, useSelector, useDispatch } = ReactRedux;