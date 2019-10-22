export function vortex(parameters){
  let {startX,startY,size,quantity,iterations,callback} = parameters,
      vortex = new this.Ion(this.easel);

  startX = startX || 0;
  startY = startY || 0;
  size = size || 300;
  iterations = iterations || Infinity;
  vortex.quantity = quantity;
  vortex.states = ['initial'];
  vortex.clear = false;
  vortex.color = 'rgba(200,200,255,0.7)';
  vortex.startX = ()=> Math.abs(this.camera.x+Math.random()*size-size/2+startX)+1;
  vortex.startY = ()=> Math.abs(this.camera.y+Math.random()*size-size/2+startY)+1;
  vortex.endX = ()=> this.camera.x+startX;
  vortex.endY = ()=> this.camera.y+startY;
  vortex.size = ()=> Math.random()*4+1;
  vortex.tweenType = 'ease-out-circular';
  vortex.tweenDuration = ()=> Math.floor(Math.random()*100+100);
  vortex.onParticleEnd = function onParticleEnd(particle){
    if(iterations<50&&iterations>0){
      if(typeof callback === 'function'){
        callback();
        callback = undefined; //clear so doesn't run again
      } //end if
      iterations--;
    }else if(iterations>0){
      iterations--;
      this.reevaluate(particle);
    }else if(iterations===0){
      vortex.finished = true;
    }//end if
  };
  vortex.onMove = function onMove(particle){
    particle.endX = vortex.endX();
    particle.endY = vortex.endY();
  };
  vortex.populate(15);
  return vortex;
} //end vortex()
