function UserDetailsCover({ username }) {
  return (
    <div className="container-fluid h-72 bg-cover bg-restaurant-cover">
      <div>
        <div className="container p-20 mx-0">
          <div className="container">
            <div className="flex">
              <div className="items-center col-span-2">
                <img
                  className="w-60 scale-75"
                  alt="Food"
                  src={require("../assets/images/rest_image.png")}
                />
              </div>
              <div className="pt-16">
                <h1 className="text-2xl text-white font-semibold">
                  {username}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsCover;
