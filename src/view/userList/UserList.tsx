// import { useEffect } from 'react'
// import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { User } from '../../model/user/userTypes'

export const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user)
  // const { fetchUsers } = useAction()

  // useEffect(() => {
  //   fetchUsers()
  // }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      <h2>User List</h2>
      {(users as User[]).map(
        (user) =>
          <div key={user.id}>
            {user.name}
          </div>)}
    </>
  )
}