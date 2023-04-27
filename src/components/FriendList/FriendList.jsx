import { FriendListItem } from './FriendListItem'; // елемент списку
import PropTypes from 'prop-types'; // типи пропсів
import css from './FriendList.module.css'; // стилізація компонента

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>

           {friends.map(friend => {
        return (

            <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {

  friends: PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired
  ).isRequired,
};
