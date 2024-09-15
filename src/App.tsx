import './App.css';
import { Person } from './Person';
import { UserProvider } from './UserContextProvider';

function App() {
  return (
    <UserProvider>
      <Person name={ "Pedro" } age={ 22 } isMarried={ false } />{" "}
      <Person name={ "Colin" } age={ 25 } isMarried={ true } />{" "}
    </UserProvider>
  );
}

export default App;

