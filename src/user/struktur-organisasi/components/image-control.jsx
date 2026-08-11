import strukturOrganiasiEECOM24 from '../assets/struktur-organisasi-eecom-2024.png';

export default function ImageStrukturOrganisasi() {
  const handleImageClick = () => {
    const imgElement = document.getElementById('struktur-organisasi-img');
    if (!document.fullscreenElement) {
      if (imgElement.requestFullscreen) {
        imgElement.requestFullscreen();
      } else if (imgElement.mozRequestFullScreen) { // Firefox
        imgElement.mozRequestFullScreen();
      } else if (imgElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
        imgElement.webkitRequestFullscreen();
      } else if (imgElement.msRequestFullscreen) { // IE/Edge
        imgElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) { // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  return (
    <img
      id="struktur-organisasi-img"
      src={strukturOrganiasiEECOM24}
      alt="struktur-organisasi-eecom-2024"
      onClick={handleImageClick}
      className="w-full h-auto"
      style={{ cursor: 'pointer' }}
    />
  );
}