import React, { useState } from 'react'

export function Example(): JSX.Element {
  const [expanded, setExpanded] = useState<boolean>(false)
  return (
    <div className="h-full bg-red-50 w-full flex">
      <div className="flex-grow">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab facilis
        dolores accusantium error reprehenderit adipisci recusandae porro ea
        minima fugiat, quas eligendi deserunt molestias, nisi quaerat delectus
        doloribus aspernatur. Cupiditate!
      </div>
    </div>
  )
}
