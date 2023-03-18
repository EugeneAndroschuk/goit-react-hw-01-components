import PropTypes from 'prop-types';
import FriendListItem from "components/friendListItem/FriendListItem";
import css from './FriendList.module.css';

function FriendList(props) {
    const { friends } = props;
    return (
      <ul className={css['friend-list']}>
        {friends.map(({id, isOnline, avatar, name,}) => (
            <FriendListItem key={id} status={isOnline} avatar={avatar} name={name} />
        ))}
      </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
}

export default FriendList;