import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
	const ubuntu = new FontFaceObserver('Ubuntu');

	ubuntu.load().then(() => {
    document.documentElement.classList.add('ubuntu-loaded');
  });
}

export default Fonts;