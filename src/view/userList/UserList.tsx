import { useTypedSelector } from "../../hooks/useTypedSelector"
export const UserList: React.FC = () => {
  const { users, loading, error } = useTypedSelector(state => state.user)
  console.log(users, loading, error)
  return (
    <>
    </>
  )
}