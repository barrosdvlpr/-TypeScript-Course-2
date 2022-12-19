
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}


type User = {
  name: string;
  age: number;
  gender: string;
}

// type partialUser = {
//   name?: string;
//   age?: number;
//   gender?: string;
// }

type partialUser = Partial<User>

const user: partialUser = {
  // name:"jonh Doe",
  // gender:"male",
}

console.log(user)