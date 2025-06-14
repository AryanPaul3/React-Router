import { useParams } from 'react-router';

function User() {
    const { id } = useParams();
  return (
    <div>
      User ID: {id}
    </div>
  )
}

export default User
