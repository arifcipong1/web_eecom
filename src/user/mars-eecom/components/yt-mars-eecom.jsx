import PropTypes from 'prop-types';

const YoutubeMarsEECOM = ({linkYtEmbed}) => {
  return (
    <div className="md:pl-20 md:mb-5">
      <h4 className="text-sm md:text-base mb-2 font-semibold text-red-500">Mars UKM-FT EECOM : SECOND TO NONE</h4>
      <iframe className="md:w-96 h-48 md:h-60 rounded-lg shadow-xl" 
        src={linkYtEmbed} 
        title="MARS UKM-FT EECOM : SECOND TO NONE" 
        allow="accelerometer;" 
        allowfullscreen>
      </iframe>
    </div>
  )
}

YoutubeMarsEECOM.propTypes = {
  linkYtEmbed: PropTypes.string.isRequired,
};

export default YoutubeMarsEECOM;
