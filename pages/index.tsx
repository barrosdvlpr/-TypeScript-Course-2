
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

class Person {
  // name: string;
  constructor(public name: string){
    // this.name = name;
  }
}

const jonhDoe = new Person("Jonh Doe")
console.log(jonhDoe.name)