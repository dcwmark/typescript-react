import { createContext, useEffect, useState } from "react";

export interface User {
  name: string;
  age: number;
  isMarried: boolean;
};

interface UserContextType {
  users: User[] | null;
  addUser: (user: User) => void;
  updUser: (id: string) => void;
  delUser: (id: string) => void;
};

const contextInitialValues = {
  users: null,
  addUser: () => null,
  updUser: () => null,
  delUser: () => null,
};

export const UserContext =
  createContext<UserContextType>(contextInitialValues);

interface Props {
  children: React.ReactNode;
};

export const UserProvider = (props: Props) => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    setUsers([{
      name: 'pedro',
      age: 22,
      isMarried: false,
    }]);
  }, []);

  const addUser = (user: User) => null;
  const updUser = (id: string) => null;
  const delUser = (id: string) => null;

  return  <UserContext.Provider value={{ users, addUser, updUser, delUser }}> 
            { props.children }
          </UserContext.Provider>;
};
