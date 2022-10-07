import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cusines from "./Components/Cusines/Cusines";
import Layout from "./Layout/Layout";
import Contact from "./Components/Contact/Contact";
import MealDetails from "./Components/MealDetails/MealDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/cusines",
          loader: async () => {
            return fetch(
              "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
            );
          },
          element: <Cusines></Cusines>,
        },
        { path: "/contact", element: <Contact></Contact> },
        {
          path: "/food/:idMeal",
          loader: ({ params }) => {
            console.log(params);
            return fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
            );
          },
          element: <MealDetails></MealDetails>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
