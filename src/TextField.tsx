import { useRef, useState } from "react";

const TextField: React.FC<{ text: string, ok?: boolean, i?: number, fn?: (bob: string) => string}> = () => {
  const [count, setCount] = useState<number | null>(5)


  // useRef is little weird, just hover over it for tips
  const inputRef = useRef<HTMLInputElement>(null)

  return ( 
    <div>
      <input ref={inputRef}/>
    </div>
   );
}
 
export default TextField;