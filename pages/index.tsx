
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

const user = {
  name: 'John',
  age: 27,
}

type User = typeof user

const user2: User = {
  name: 'John',
  age: 27,
}

console.log(user)
console.log(user2)
