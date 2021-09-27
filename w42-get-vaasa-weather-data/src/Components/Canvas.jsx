import React, { useRef, useEffect, useState } from 'react'
import "./canvas.css"

const Canvas = props => {
    const [value, setValue] = useState(970-970)
    const canvasRef = useRef(null)
    // setValue(1030-970)
    const draw = ctx => {
        var radius = (400 / 2)*90/100
        ctx.beginPath(400, 400)
        ctx.arc(400, 400, 40, 0, 2*Math.PI)
        ctx.fillStyle = "orange";
        ctx.fill()

        ctx.beginPath(400, 400)
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        // ctx.moveTo(0,0);
        // // ctx.rotate(value);
        // ctx.lineTo(0, - radius);
        // ctx.stroke();
        // ctx.rotate(-value);
        ctx.moveTo(400,400)
        ctx.rotate(value);
        ctx.lineTo(400,radius)
        ctx.stroke()
        console.log(value+970)
    }
  console.log(value)
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    //Our first draw
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    draw(context)
    
  }, [draw])
  
  return <canvas className="canvas" width="800" height="800" ref={canvasRef} {...props}/>
}

export default Canvas
