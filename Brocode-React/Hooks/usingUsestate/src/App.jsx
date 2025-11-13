// React hook : special feature that allow functional components 
//             to use react features without writing class components
//             (useState(), useEffect(), useContext(), useCallback()... and more)


// useState() : a react hook that allows the function to creation of statefull variable & a setter function
//              to update its value in the virtual Dom [name, setName]


import Counter from "./Counter"
import MyComponent from "./MyComponent"

function App() {

  return (
    <>
      <MyComponent/>
      <hr/>
      <Counter/>
    </>
  )
}

export default App
