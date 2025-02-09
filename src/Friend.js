export function Friend({ friend, onSelectFriend }) {
  return (
    <li className="w-full flex items-center justify-between flex-row mb-3 p-2 rounded-sm hover:bg-slate-300 ">
      <img src={friend.image} alt="pic" className="w-11 rounded-full" />

      <span>
        <h2>{friend.name}</h2>
        {
          <p className="text-xs text-cyan-500">
            {friend.balence === 0
              ? `You and ${friend.name} are even`
              : friend.balence < 0
              ? `you owe ${friend.name} ${Math.abs(friend.balence)}`
              : `${friend.name} owes you ${friend.balence}`}
          </p>
        }
      </span>
      <button
        onClick={() => onSelectFriend(friend)}
        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        select
      </button>
    </li>
  );
}
