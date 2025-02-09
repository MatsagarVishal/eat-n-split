import { useState } from "react";
import { FormSplitBill } from "./FormSplitBill";
import { AddFriendForm } from "./AddFriendForm";
import { Friends } from "./Friends";
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

  const [friendList, setFriendList] = useState(listOFfriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  function handleAddFriend(newFriend) {
    if (!newFriend) return;
    setFriendList((friends) => [...friends, newFriend]);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((current) => (current?.id === friend.id ? null : friend));
  }
  return (
    <div className="h-screen w-screen p-5 flex items-center justify-center ">
      <div className=" grid grid-cols-2 gap-2 align-middle">
        <Friends friendList={friendList} onSelectFriend={handleSelectFriend} />
        <FormSplitBill selectedFriend={selectedFriend} />
        <AddFriendForm onFriendAdd={handleAddFriend} />
      </div>
    </div>
  );
}

export default App;


