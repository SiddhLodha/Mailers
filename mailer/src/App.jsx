import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Body from "./components/Body"
import Inbox from "./components/Inbox"
import Mail from "./components/Mail"
import SendMail from "./components/SendMail"
import Login from "./components/Login"
import { useSelector } from "react-redux"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element:<Inbox />
      },
      {
        path: '/mail/:id',
        element:<Mail />
      }
    ]
  }
])

function App() {

  const {user} = useSelector(store=> store.appSlice );
  return (
    <div className="bg-[#f6f8fc] h-screen w-screen overflow-hidden">
      {
        !user? (
          <Login />
        ) : (
          <>
            <Navbar />
            <RouterProvider router={router} />
            <div className="absolute w-[30%] bottom-0 right-10 z-10">
              <SendMail />
            </div>
          </>
        )
      }
    </div>
  )
}

export default App
