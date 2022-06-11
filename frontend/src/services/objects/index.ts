import useSWR from 'swr'
import axios from 'axios'

export const useObjects = () =>
  useSWR<
    {
      id: string
      name: string
      scale_x: number
      scale_y: number
      scale_z: number
      pos_x: number
      pos_y: number
      pos_z: number
    }[]
  >(`http://localhost:8080/api/objects/list`)
export const addObjects = (data: {
  id: string
  name: string
  scale_x: number
  scale_y: number
  scale_z: number
  pos_x: number
  pos_y: number
  pos_z: number
}) => {
  return axios.post(`http://localhost:8080/api/objects/add`, data)
}
export const deleteObjects = (data: { id: number }) => {
  return axios.post(`http://localhost:8080/api/objects/delete`, data)
}
