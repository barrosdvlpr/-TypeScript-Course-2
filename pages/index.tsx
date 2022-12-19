
export default function Home() {
  return (
    <div>
      Hello World
    </div>
  )
}

function handler(eventType: `on${string}`){
  console.log(`handling${eventType}`)
}

handler("onClick")
handler("onKeydown")
handler("onKeyup")
handler("onEnter")

handler("oncliker")
// handler("escapeey")