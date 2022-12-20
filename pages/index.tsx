
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

type User = {
  readonly name: string;
  readonly age: number;
  readonly education: {
    readonly degree: string
  }
  skills: ReadonlyArray<string>;
}

const user = {
  name: 'John Doe',
  age: 26,
  education: {
    degree: "SE"
  },
  skills: ["JavaScript", "TypeScript"]
  
}

// user.name = 'John Doe';
// user.age = 22;
// user.education = {
//   degree: "IT"
// }

// user.education.degree = "IT"
// user.skills = ["Building"]
// user.skills.push("Deploying")

console.log(user)
