import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const onlineStatusClassName = isOnline 
  ? css.friendList_green 
  : css.friendList_red;

  return (
    <li className={css.friendList_item}>
      <span className={onlineStatusClassName}></span>

      <img
        className={css.friendList_avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friendList_name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};