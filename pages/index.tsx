
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

// type AgesType = {
//   [name: string]: number;
// }

type NamesType = "Jonh Doe" | "Jane Doe" | "baby Doe" | "Jannie Doe"

type AgesType = Record<NamesType, number>;

const ages: AgesType = {
  "Jonh Doe": 29,
  "Jane Doe": 25,
  "baby Doe": 5,
  "Jannie Doe": 50,
}

console.log(ages)