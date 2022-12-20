
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}


type User = {
  name: string;
  age?: number;
  gender?: string;
}


const user: Required<User> = {
  name:"jonh Doe",
  age: 23,
  gender:"male",
}
console.log(user)