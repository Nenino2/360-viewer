const imageUrl = new URLSearchParams(window.location.search).get('img');
if (imageUrl) {
    const panorama = new PANOLENS.ImagePanorama( imageUrl );
    const viewer = new PANOLENS.Viewer({ container: document.querySelector( '#panolens-separate-container' )});
    viewer.add( panorama );
    console.log('loaded');
} else {
    console.warn('No image found')
}