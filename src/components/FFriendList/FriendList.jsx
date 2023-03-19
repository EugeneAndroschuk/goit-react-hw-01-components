import PropTypes from 'prop-types';
import FriendListItem from '../FFriendListItem/FriendListItem';
import css from './FriendList.module.css';

function FriendList(props) {
    const { friends } = props;
    return (
      <ul className={css['friend-list']}>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <li key={id} className={css.item}>
            <FriendListItem status={isOnline} avatar={avatar} name={name} />
          </li>
        ))}
      </ul>
    );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};

export default FriendList;