import Crazy from '../src/index';

const crazy = new Crazy('#app');

crazy.autoRender();
crazy.render();

document.querySelector('.crazy-button')?.addEventListener('click', () => {
  crazy.render();
});
