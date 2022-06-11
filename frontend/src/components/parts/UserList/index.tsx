import { Spinner, HStack } from '@chakra-ui/react'
import { UserCard } from '@/components/parts/UserCard'

type Props = {
  users:
    | {
        id: number
        name: string
      }[]
    | undefined
  handleDelete: (user_id: number) => void
}

export const UserList: React.FC<Props> = ({ users, handleDelete }) => {
  if (!users) {
    return <Spinner />
  }
  return (
    <HStack spacing={16} my={32}>
      {users.map((user) => (
        <UserCard
          user_id={user.id}
          user_name={user.name}
          handleDelete={handleDelete}
          key={user.id}
        />
      ))}
    </HStack>
  )
}
