import { User } from "./UserContextProvider";

export const Person = (props: User) => {

  return (
    <div>
      <p>Name: { props.name }</p>
      <p>Age: { props.age }</p>
      <p>This person { props.isMarried ? "is married" : "is single" }</p>
    </div>
  );
};