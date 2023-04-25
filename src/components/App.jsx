import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { FriendListItem } from '../FriendList/FriendListItem';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

import user from '../Data/user.json';
import stat from '../Data/data.json';
import friends from '../Data/friends.json';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={stat} />

      <FriendList friends={friends} />

      <FriendListItem />

      <TransactionHistory items={transactions} />
    </div>
  );
};
