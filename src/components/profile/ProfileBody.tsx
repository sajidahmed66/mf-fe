const ProfileBody = () => {
    return (
        <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div className="w-full flex flex-col 2xl:w-1/3">
                <div className="flex-1 bg-inherit rounded-lg shadow-xl p-8">
                    <h4 className="text-xl text-inherit  font-bold">Personal Info</h4>
                    <ul className="mt-2 text-inherit">
                        <li className="flex border-y py-2">
                            <span className="font-bold w-24">Full name:</span>
                            <span className="text-inherit">Amanda S. Ross</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Birthday:</span>
                            <span className="text-inherit">24 Jul, 1991</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Joined:</span>
                            <span className="text-inherit">10 Jan 2022 (25 days ago)</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Mobile:</span>
                            <span className="text-inherit">(123) 123-1234</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Email:</span>
                            <span className="text-inherit">amandaross@example.com</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Location:</span>
                            <span className="text-inherit">New York, US</span>
                        </li>
                        <li className="flex border-b py-2">
                            <span className="font-bold w-24">Languages:</span>
                            <span className="text-inherit">English, Spanish</span>
                        </li>


                    </ul>
                </div>
                {/* TODO activity log is it a good idea to have an activity log  */}
                {/* <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8">
                    <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
                    <div className="relative px-4">
                        <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>


                        <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <p className="text-sm">Profile informations changed.</p>
                                <p className="text-xs text-gray-500">3 min ago</p>
                            </div>
                        </div>
                        <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <p className="text-sm">
                                    Connected with <a href="#" className="text-blue-600 font-bold">Colby Covington</a>.</p>
                                <p className="text-xs text-gray-500">15 min ago</p>
                            </div>
                        </div>
                        <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <p className="text-sm">Invoice <a href="#" className="text-blue-600 font-bold">#4563</a> was created.</p>
                                <p className="text-xs text-gray-500">57 min ago</p>
                            </div>
                        </div>

                        <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <p className="text-sm">
                                    Message received from <a href="#" className="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
                                <p className="text-xs text-gray-500">1 hour ago</p>
                            </div>
                        </div>

                        <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <p className="text-sm">New order received <a href="#" className="text-blue-600 font-bold">#OR9653</a>.</p>
                                <p className="text-xs text-gray-500">2 hours ago</p>
                            </div>
                        </div>

                        <div className="flex items-center w-full my-6 -ml-1.5">
                            <div className="w-1/12 z-10">
                                <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-11/12">
                                <p className="text-sm">
                                    Message received from <a href="#" className="text-blue-600 font-bold">Jane Stillman</a>.</p>
                                <p className="text-xs text-gray-500">2 hours ago</p>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
            {/* about */}
            <div className="flex flex-col w-full 2xl:w-2/3">
                <div className="flex-1 bg-inherit rounded-lg shadow-xl p-8">
                    <h4 className="text-xl text-inherit font-bold">About</h4>
                    <p className="mt-2 text-inherit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileBody