import React from 'react';
import { useGet_UsersQuery } from '../../../generated/graphql';


export function UserList() {
  // our query's result, data, is typed!
  const [{data, fetching}] = useGet_UsersQuery();
  console.log(fetching, data);
  return (
    <div>
      <h3>Listed Users</h3>
            {fetching ? (
              <p>Loading ...</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>ID</th>
                  </tr>
                </thead>
                <tbody>
                  {data && data.allUsers?.map(user => (
                    <tr>
                      <td>{user?.name}</td>
                      <td>{user?.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
    </div>
  );
}

export default UserList;

