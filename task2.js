const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

//Action types
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

//Initial state
const initialCakeState = {
  numOfCakes: 10,
};
const initialIceCreamState = {
  numOfIceCream: 20,
};

//Action creator
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "Redux action to buy Cake",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Redux action to buy IceCream",
  };
}

//Reducer functions
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};

//Combining reducers
const rootReducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducers);


//Printing the initial state
console.log("Initial state: ", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});

//Dispatching some actions
store.dispatch(buyCake());
store.dispatch(buyIceCream());
