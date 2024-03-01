import React from 'react';
import PropTypes from 'prop-types';

const MatchFoundPopup = ({ isOpen, onClose, match }) => {
    if (!isOpen || !match) return null;

    return (
        <div
            className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full ${
                !isOpen && 'hidden'
            }`}
        >
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Match Found!
                    </h3>
                    <div className="mt-2 px-7 py-3">
                        <p className="text-sm text-gray-500">
                            Name: {match.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            Telegram: {match.telegram}
                        </p>
                        <div className="mt-3">
                            <p className="text-sm text-gray-500">
                                User's items:
                            </p>
                            <ul className="list-disc list-inside">
                                {match.favorsNeed.map((favor, index) => (
                                    <li key={index}>{favor}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

MatchFoundPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    match: PropTypes.shape({
        name: PropTypes.string.isRequired,
        telegram: PropTypes.string.isRequired,
        favorsNeed: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
};

MatchFoundPopup.defaultProps = {
    match: null,
};

export default MatchFoundPopup;
