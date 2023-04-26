import { Profile } from '../components/Profile/Profile';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendList } from '../components/FriendList/FriendList';
import { FriendListItem } from '../components/FriendList/FriendListItem';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';

import user from '../../src/data/user.json';
import stat from '../../src/data/data.json';
import friends from '../../src/data/friends.json';
import transactions from '../../src/data/transactions.json';

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
