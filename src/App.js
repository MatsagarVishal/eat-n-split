import { useState } from "react";
function App() {
  const listOFfriends = [
    {
      name: "akshay",
      id: 1,
      image: "https://i.pravatar.cc/48?u=9333372",
      balence: 0,
    },
    {
      name: "harshal",
      id: 2,
      image: "https://i.pravatar.cc/48?u=9344272",
      balence: 0,
    },
    {
      name: "yash",
      id: 3,
      image: "https://i.pravatar.cc/48?u=2334372",
      balence: 0,
    },
  ];
  return (
    <div className="h-screen w-screen p-5 flex items-center justify-center ">
      <div className=" grid grid-cols-2 gap-2 align-middle">
        <Friends friendList={listOFfriends} />
        <FormSplitBill />
        <AddFriendForm />
      </div>
    </div>
  );
}

export default App;

function Friends({ friendList }) {
  return (
    <div className="w-64 min-h-64 flex flex-col items-center justify-center">
      <ul className="w-full flex items-center justify-between flex-col">
        {friendList.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}
function Friend({ friend }) {
  return (
    <li className="w-full flex items-center justify-between flex-row mb-3 p-2 rounded-sm hover:bg-slate-300 ">
      <img src={friend.image} alt="pic" className="w-11 rounded-full" />

      <span>
        <h2>{friend.name}</h2>
        {<p className="text-xs text-gray-500"></p>}
      </span>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
        select
      </button>
    </li>
  );
}
function AddFriendForm() {
  return (
    <div className="form ">
      <form className="flex flex-col w-64 space-y-4">
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
          className="p-2 text-xs border-2 "
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
          className="p-2 text-sm border-2 rounded"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </form>
      <button className="mt-3 flex m-auto bg-gray-300 hover:bg-blue-300 hover:text-white text-gray-700 font-bold py-2 px-4 rounded">
        open
      </button>
    </div>
  );
}

function FormSplitBill() {
  // const [selectedFriend, setSelectedFriend] = useState(null);
  const [totalBill, setTotalBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  return (
    <div className="form bg-orange-300 rounded p-3 w-96 flex items-center justify-center flex-col">
      <h1 className="font-bold text-xl">Split Bill with X</h1>
      <form className="form mt-4 space-y-5">
        <div className="grid grid-cols-2 gap-2 ">
          <label
            className="block text-gray-800  text-sm font-bold "
            htmlFor="titalSplit"
          >
            Total Bill
          </label>
          <input
            type="text"
            id="tatalSplit"
            className="p-1 text-sm border-2 rounded"
            value={totalBill}
            onChange={(e) => setTotalBill(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2  ">
          <label
            className="block text-gray-800  text-sm font-bold "
            htmlFor="yourExpense"
          >
            Your expenses
          </label>
          <input
            type="text"
            id="yourExpense"
            className="p-1 text-sm border-2 rounded"
            value={yourExpense}
            onChange={(e) => setYourExpense(+e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-2  ">
          <label
            className="block text-gray-800  text-sm font-bold "
            htmlFor="friendsExpense"
          >
            X's expenses
          </label>
          <input
            type="text"
            id="friendsExpense"
            className="p-1 text-sm border-2 rounded"
            disabled
          />
        </div>
        <div className="grid grid-cols-2 gap-2  ">
          <label
            className="block text-gray-800  text-sm font-bold "
            htmlFor="whoPaying"
          >
            Who is paying
          </label>
          <select id="whoPaying">
            <option value="you">you</option>
            <option value="friend">friend</option>
          </select>
        </div>
        <button className="w-full bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
          Split Bill
        </button>
      </form>
    </div>
  );
}
