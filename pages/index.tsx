
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

type Item = {
  name: string;
  description: string;
  price: number;
  currency: string;
}

type PricelessItem = Omit<Item, "price" | "currency">

const item: PricelessItem = {
  name: "laptop Bag",
  description: "Leather Bag for laptop",
  // price: 34,
  // currency: "USD",
}

console.log(item);