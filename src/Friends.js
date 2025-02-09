import { Friend } from "./Friend";

export function Friends({ friendList, onSelectFriend }) {
  return (
    <div className="w-72 min-h-64 flex flex-col items-center justify-center">
      <ul className="w-full flex items-center justify-between flex-col">
        {friendList.map((friend) => (
          <Friend
            friend={friend}
            onSelectFriend={onSelectFriend}
            key={friend.id}
          />
        ))}
      </ul>
    </div>
  );
}
