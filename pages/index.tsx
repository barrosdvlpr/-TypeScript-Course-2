
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
  profession?: string;
}

const user: User = {
  name: 'John',
  age: 27,
  profession: 'Engineer'
}

const output: string = user.profession!

console.log(output)
