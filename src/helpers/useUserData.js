import { useQuery } from "@tanstack/react-query";

export function useUserData(id) {
  const usersData = useQuery(['users', id],
    () =>
      fetch('/api/users/' + id).then(res => res.json()))
  return usersData
}