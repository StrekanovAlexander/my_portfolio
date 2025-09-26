import { AppProvider } from "./context/AppContext.jsx";
import {Header, Navigation } from "./components/index.jsx";

function App() {
  return (
    <div className=" bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <AppProvider>
        <Header/>
        <Navigation />
      </AppProvider>
    </div>
  )
}

export default App
