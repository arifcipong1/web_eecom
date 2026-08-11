import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

const CardDivisionComponents = ({links, icons, titles, deskrips}) => {
  return (
    <Link
      to={links}
      className="group flex flex-col items-center bg-gray-200 border border-gray-300 rounded-lg shadow md:flex-row md:max-w-md hover:bg-red-600 my-3"
    >
      <img
        className="object-cover rounded-t-lg w-20 md:rounded-none md:rounded-s-lg mt-2 md:mt-0 md:ml-2"
        src={icons}
        alt=""
      />
      <div className="flex flex-col p-4 leading-normal">
        <h5 className="md:text-lg font-bold tracking-tight text-red-600 group-hover:text-white">
          {titles}
        </h5>
        <hr className="my-2 border-gray-500 group-hover:border-white border-1" />
        <p className="font-normal text-gray-700 text-sm text-justify group-hover:text-white">
          {deskrips}
        </p>
      </div>
    </Link>
  )
}

CardDivisionComponents.propTypes = {
  links: PropTypes.any.isRequired,
  icons: PropTypes.any.isRequired,
  titles: PropTypes.string.isRequired,
  deskrips: PropTypes.string.isRequired,
};

export default CardDivisionComponents