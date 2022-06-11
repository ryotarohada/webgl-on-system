import useSWR from 'swr'
import axios from 'axios'

export const useFetchUsers = () =>
  useSWR<{ id: number; name: string }[]>(`http://localhost:8080/api/user/list`)
export const addUser = (data: { name: string }) => {
  return axios.post(`http://localhost:8080/api/user/add`, data)
}
export const deleteUser = (data: { id: number }) => {
  return axios.post(`http://localhost:8080/api/user/delete`, data)
}
