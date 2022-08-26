function Login() {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white my-10 p-5 rounded-2xl shadow-md">
                <h2 className="font-bold text-2xl " >Login</h2>
                <div className="mt-6">
                    <div className="flex flex-col">
                        <label className="text-gray-600 mb-2">Email :</label>
                        <input type="text"
                            className={`border p-3 rounded-xl`}
                            placeholder="Email" />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex flex-col">
                        <label className="text-gray-600 mb-2">Password :</label>
                        <input type="text"
                            className={`border p-3 rounded-xl`}
                            placeholder="Password" />
                    </div>
                </div>
                <button className="bg-sky-400 w-full mt-5 py-4 rounded-full font-bold text-lg" >Login</button>
            </div>
        </div>
    );
}

export default Login;