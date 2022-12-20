
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

type Box<T> = {
  name: string;
  content: T;
}

// type Box = {
//   name: string;
//   content: unknown;
// }

// type NumberBox = {
//   name: string;
//   content: number;
// }

const stringBox: Box<string> = {
  name: 'String Box',
  content: 'A string',
}

const numberBox: Box<number> = {
  name: 'String Box',
  content: 50,
}

console.log(stringBox.content.toLocaleUpperCase())

console.log(numberBox.content * 5)
