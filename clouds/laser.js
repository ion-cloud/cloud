export function laser(parameters){
  let {startX,startY,endX,endY,size} = parameters,
      status = 200,
      laser = new this.Ion(this.easel);

  startX = startX || 0;
  startY = startY || 0;
  endX = endX || 0;
  endY = endY || 0;
  size = size || 10;
  laser.states = ['initial'];
  laser.clear = false;
  laser.color = 'rgba(250,250,150,0.5)';
  laser.startX = ()=> this.camera.x+endX;
  laser.startY = ()=> this.camera.y+endY;
  laser.endX = ()=> this.camera.x+endX-size/2+Math.random()*size;
  laser.endY = ()=> this.camera.y+endY-size/2+Math.random()*size;
  laser.windX = ()=> Math.random()*1.5-0.75;
  laser.windY = ()=> Math.random()*1.5-0.75;
  laser.size = ()=> Math.floor(Math.random()*2+2);
  laser.tweenType = ()=> Math.floor(Math.random()*5+10);
  laser.tweenDuration = ()=> Math.floor(Math.random()*50+100);
  laser.onParticleEnd = function onParticleEnd(particle){
    this.collection.splice(particle.id,1);

    //eslint-disable-next-line no-return-assign
    this.collection.forEach((p,i)=>p.id=i); //re-index
  };
  laser.onCreate = ()=> status--;
  laser.populate();
  laser.draw = ()=>{
    this.easel.ctx.strokeStyle=`rgba(100,100,250,${0.1/200*status})`;
    this.easel.ctx.lineWidth=17;
    if(status>0){
      this.easel.ctx.beginPath();
      this.easel.ctx.moveTo(this.camera.x+startX+3,this.camera.y+startY);
      this.easel.ctx.lineTo(this.camera.x+endX+3,this.camera.y+endY);
      this.easel.ctx.stroke();
      this.easel.ctx.strokeStyle='#DDF';
      this.easel.ctx.lineWidth=2;
      this.easel.ctx.beginPath();
      this.easel.ctx.moveTo(this.camera.x+startX+3,this.camera.y+startY);
      this.easel.ctx.lineTo(this.camera.x+endX+3,this.camera.y+endY);
      this.easel.ctx.stroke();
    } //end if
  };
  return laser;
} //end laser()
