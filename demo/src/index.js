import './index.styl';
import {Easel} from '@ion-cloud/easel';
import {Ion} from '@ion-cloud/ion';
import {IonCloud} from '../../index';
import {demo} from './demo';
export const easel = new Easel();

const scene = new IonCloud(easel,Ion);

// Launch application if easel was able to create a canvas,
// if it wasn't then we know canvas isn't supported
const noscript = document.querySelector('noscript');

if(!easel.activated){
  noscript.innerHTML = `
  <p class="browsehappy">
    You are using an outdated browser. Please
    <a href="http://browsehappy.com/"> upgrade your browser</a>
    to improve your experience.
    <span style="color:red;"><br/>Canvas isn't supported in your browser.</span>
  </p>`;
}else{
  noscript.style.display='none';
  demo(scene);
} //end if
