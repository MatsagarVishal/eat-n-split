import { useState } from "react";

export function AddFriendForm({ onFriendAdd }) {
  const [name, setName] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const photoURL = "https://i.pravatar.cc/48?u=";
  function handleFormOnSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const id = crypto.randomUUID();
    const newFriend = {
      name: name,
      id: id,
      image: photoURL + id,
      balence: 0,
    };
    setName("");
    onFriendAdd(newFriend);
  }

  return (
    <div className="form ">
      {isFormOpen ? (
        <form
          className="flex flex-col w-64 space-y-4"
          onSubmit={handleFormOnSubmit}
        >
          <label
            className="block text-gray-700 text-xs font-bold "
            htmlFor="username"
          >
            Name Of Friend
          </label>
          <input
            id="username"
            type="text"
            placeholder="friend name"
            className="p-2 text-sm border-2 "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="block text-gray-700 text-xs font-bold "
            htmlFor="photo"
          >
            Photo
          </label>
          <input
            id="photo"
            type="text"
            placeholder="friend image"
            className="p-2 text-sm border-2 rounded read-only:cursor-not-allowed"
            value={photoURL}
            readOnly
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </form>
      ) : (
        ""
      )}
      <button
        onClick={() => setIsFormOpen(!isFormOpen)}
        className="mt-3 flex m-auto bg-gray-300 hover:bg-blue-300 hover:text-white text-gray-700 font-bold py-2 px-4 rounded"
      >
        {isFormOpen ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}
