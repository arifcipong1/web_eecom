import PropTypes from 'prop-types';

const SliderMember = ({ data }) => {
  return (
    <div className="py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {data.member.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Photo Area */}
            <div className="relative bg-gradient-to-br from-red-500 to-red-700 flex justify-center items-center pt-7 pb-4">
              {/* Decorative circles */}
              <div className="absolute top-0 left-0 w-16 h-16 bg-white/10 rounded-full -translate-x-6 -translate-y-6" />
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-white/10 rounded-full translate-x-4 translate-y-4" />

              <div className="relative">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="h-40 w-40 object-cover rounded-full border-4 border-white shadow-lg"
                />
                {/* Angkatan badge */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full shadow border border-red-100 whitespace-nowrap">
                  Batch {member.akt}
                </span>
              </div>
            </div>

            {/* Info Area */}
            <div className="flex flex-col items-center text-center px-3 pt-5 pb-4">
              <h5 className="text-sm font-bold text-slate-800 leading-tight">
                {member.name}
              </h5>
              <span className="mt-1 text-xs font-semibold text-red-600 bg-red-50 px-3 py-0.5 rounded-full">
                {member.as}
              </span>
              <p className="mt-1 text-xs text-slate-400">
                {member.major}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SliderMember.propTypes = {
  data: PropTypes.any.isRequired
};

export default SliderMember;