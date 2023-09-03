import React from "react"
import Typewriter from "typewriter-effect"

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Software Developer", "Undergraduate", "MERN Stack Developer", "Web Application Developer", "Student"],
        autoStart: true,
        loop: true,
        deleteSpeed: 10,
        typeSpeed: 10,
      }}
    />
  )
}

export default Type
