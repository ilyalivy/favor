import React, { useState } from 'react';
import MatchFoundPopup from './MatchFoundPopup.jsx';

const Feed = () => {
    const [match, setMatch] = useState(null);
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        telegram: '',
        favorsMake: [],
        favorsNeed: [],
    });
    const [favorsList, setFavorsList] = useState([
        {
            name: 'John Doe',
            telegram: '@johndoe',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'Alice Smith',
            telegram: '@alicesmith',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'Bob Johnson',
            telegram: '@bobjohnson',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'Emily Brown',
            telegram: '@emilybrown',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'David Lee',
            telegram: '@davidlee',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'Emily Brown',
            telegram: '@emilybrown',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'David Lee',
            telegram: '@davidlee',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'Emily Brown',
            telegram: '@emilybrown',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
        {
            name: 'David Lee',
            telegram: '@davidlee',
            favorsNeed: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
            favorsMake: ['Marketing', 'Programming', 'Design', 'Walk with dog', 'Cut grass', 'Paint wall'],
        },
    ]); //to implement db fetch
    const findMatch = (formData) => {
        return favorsList.find(
            (item) =>
                item.favorsNeed.some((favor) =>
                    formData.favorsMake.includes(favor)
                ) &&
                item.favorsMake.some((favor) =>
                    formData.favorsNeed.includes(favor)
                )
        );
    };
    const handleCheckboxChange = (event, type) => {
        const { name, checked } = event.target;
        setFormData((prevFormData) => {
            const updatedArray = checked
                ? [...prevFormData[type], name]
                : prevFormData[type].filter((favor) => favor !== name);

            return {
                ...prevFormData,
                [type]: updatedArray,
            };
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const matchedItem = findMatch(formData);
        if (matchedItem) {
            setMatch(matchedItem);
        }
        console.log('No match found. Adding new favor.');
        setFavorsList([...favorsList, formData]);
        setFormVisible(false);
        setFormData({ name: '', telegram: '', favorsMake: [], favorsNeed: [] });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
            <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => setFormVisible(true)}
            >
                Add Favor
            </button>

            {formVisible && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                    <div className="relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col space-y-6"
                        >
                            <input
                                className="border-2 p-3 rounded font"
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                required
                            />
                            <input
                                className="border-2 p-3 rounded"
                                type="text"
                                placeholder="Telegram"
                                value={formData.telegram}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        telegram: e.target.value,
                                    })
                                }
                                required
                            />
                            {/* Checkbox Group for 'Favor I make' */}
                            <div className="space-y-4">
                                <span className="block text-lg font-medium">
                                    Favor I make:
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Marketing"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsMake'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Marketing</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Programming"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsMake'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Programming</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Design"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsMake'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Design</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Walk with dog"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsMake'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Walk with dog</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Cut grass"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsMake'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Cut grass</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Paint wall"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsMake'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Paint wall</span>
                                    </label>
                                </div>
                            </div>

                            {/* Checkbox Group for 'Favor I need' */}
                            <div className="space-y-4">
                                <span className="block text-lg font-medium">
                                    Favor I need:
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Marketing"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsNeed'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Marketing</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Programming"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsNeed'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Programming</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Design"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsNeed'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Design</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Walk with dog"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsNeed'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Walk with dog</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Cut grass"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsNeed'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Cut grass</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            name="Paint wall"
                                            onChange={(e) =>
                                                handleCheckboxChange(
                                                    e,
                                                    'favorsNeed'
                                                )
                                            }
                                            className="form-checkbox"
                                        />
                                        <span>Paint wall</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}

            <MatchFoundPopup
                isOpen={!!match}
                onClose={() => setMatch(null)}
                match={match}
            />

            <div className="mt-6 space-y-4">
                {favorsList.map((favor, index) => (
                    <div key={index} className="border-2 p-4 rounded shadow">
                        <p><strong>Name:</strong> {favor.name}</p>
                        <p><strong>Telegram:</strong> {favor.telegram}</p>
                        <p><strong>Favors I make:</strong> {favor.favorsMake.join(', ')}</p>
                        <p><strong>Favors I need:</strong> {favor.favorsNeed.join(', ')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
