import './App.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import ShopPage from "./pages/shop-page/ShopPage.tsx";

const queryClient = new QueryClient()

function App() {

  return (
      <QueryClientProvider client={queryClient}>
          <ShopPage/>
      </QueryClientProvider>
  )
}

export default App
