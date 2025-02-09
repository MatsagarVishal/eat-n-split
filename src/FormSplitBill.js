import { useState } from "react";

export function FormSplitBill({ selectedFriend }) {
  const [totalBill, setTotalBill] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  let friendsExpense = totalBill - yourExpense;
  const [whoPaying, setWhoPaying] = useState("you");
  function handleSubmit(e) {
    e.preventDefault();
    if (whoPaying === "you") {
      selectedFriend.balence += yourExpense;
    } else {
      selectedFriend.balence -= yourExpense;
    }
    setYourExpense(0);
    setTotalBill(0);
    setWhoPaying("you");
  }
  return (
    <>
      {selectedFriend != null ? (
        <div className="form border-2 rounded p-3 w-96 flex items-center justify-center flex-col">
          <h1 className="font-bold text-xl">
            Split Bill with {selectedFriend?.name}
          </h1>
          <form className="form mt-4 space-y-5" onSubmit={handleSubmit}>
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
                onChange={(e) => setTotalBill(() => +e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-2  ">
              <label
                className="block text-gray-800 text-sm font-bold "
                htmlFor="yourExpense"
              >
                Your expenses
              </label>
              <input
                type="text"
                id="yourExpense"
                className="p-1 text-sm border-2 rounded "
                value={yourExpense}
                onChange={(e) =>
                  setYourExpense((prev) =>
                    +e.target.value <= totalBill ? +e.target.value : prev
                  )
                }
              />
            </div>
            <div className="grid grid-cols-2 gap-2  ">
              <label
                className="block text-gray-800  text-sm font-bold  "
                htmlFor="friendsExpense"
              >
                {selectedFriend?.name}'s expenses
              </label>
              <input
                type="text"
                id="friendsExpense"
                className="p-1 text-sm border-1 rounded bg-gray-300"
                value={friendsExpense}
                readOnly
              />
            </div>
            <div className="grid grid-cols-2 gap-2  ">
              <label
                className="block text-gray-800  text-sm font-bold"
                htmlFor="whoPaying"
              >
                Who is paying
              </label>
              <select
                id="whoPaying"
                value={whoPaying}
                onChange={(e) => setWhoPaying(() => +e.target.value)}
              >
                <option value="you">you</option>
                <option value="friend">{selectedFriend?.name}</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            >
              Split Bill
            </button>
          </form>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
