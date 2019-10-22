export function demo(scene){
  scene.animate('flame',{
    startX: 250,
    startY: 200,
    width: 100,
    height: 120,
    color: 'rgba(250,50,0,0.05)',
    quantity: 100
  });
  scene.animate('vortex',{
    startX: -250,
    startY: -250,
    size: 400,
    quantity: 200,
    iterations: 300,
    callback: ()=>{
      scene.animate('laser',{
        startX: -250,
        startY: -250,
        endX: -150,
        endY: 250,
        size: 10
      });
    }
  });
  scene.draw();
  scene.clearScene=()=>{
    let w = scene.easel.viewport.w, //shorten reference
        h = scene.easel.viewport.h; //shorten reference

    // Clear screen
    scene.easel.ctx.fillStyle='#000';
    scene.easel.ctx.fillRect(0,0,w,h);

    // Draw a ground
    scene.easel.ctx.fillStyle='rgba(10,80,10,0.7)';
    scene.easel.ctx.fillRect(0,h/4*3,w,h/4);
  };
  setInterval(()=>{
    let w = scene.easel.viewport.w, //shorten reference
        h = scene.easel.viewport.h; //shorten reference

    if(scene.camera.dx===0){
      scene.camera.x--;
    }else{
      scene.camera.x++;
    } //end if
    if(scene.camera.x<(w/2-100)||scene.camera.x>(w/2+100))scene.camera.dx^=1;
  },10);
  scene.draw();
} //end app()
