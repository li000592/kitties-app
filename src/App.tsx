import React, { useState } from "react"
import { useAppDispatch, useAppSelector } from "./app/hooks"
import "./App.css"
import { useFetchBreedsQuery } from "./features/cats/catsApiSlice"

function App() {
  const dispatch = useAppDispatch()
  const { data = [], isFetching } = useFetchBreedsQuery(5)
  console.log(data, isFetching)
  if (isFetching)
    return (
      <div className='App'>
        <h5>loading...</h5>
      </div>
    )
  return (
    <div className='App'>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map((breed) => {
            return (
              <tr key={breed.id}>
                <th>{breed.name}</th>
                <th>
                  <img src={breed.url} alt={breed.name} height='250' />
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default App
