
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
  image: string;
}

type ItemPreview = Pick<Item, "name" | "image">

const item: Item = {
  name: "Macbook",
  description: "Macbook Pro",
  price: 3923,
  currency: "USD",
  image: "https://cdn.apple.com/mbpro.png"
}

const ItemPreview: ItemPreview ={
  name: item.name,
  image: item.image,
}


console.log(ItemPreview)

console.log(item)
