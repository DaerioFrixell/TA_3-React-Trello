import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { useAction } from '../../hooks/useAction'
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { fetchUsers } from '../../model/user/userAction'
import { User } from '../../model/user/userTypes'

export const UserList = () => {
  const { users, loading, error } = useTypedSelector(state => state.user)
  const { fetchUsers } = useAction()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <h1>Идёт загрузка...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    <>
      {(users as User[]).map(
        (user, key) =>
          <div key={user.id}>
            {user.name}
          </div>)}
    </>
  )
}