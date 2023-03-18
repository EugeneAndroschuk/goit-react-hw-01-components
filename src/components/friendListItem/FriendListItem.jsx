import PropTypes from 'prop-types'
import css from './FriendListItem.module.css';

function FriendListItem(props) {
  const { status, avatar, name } = props;
    return (
      <li className={css.item}>
        {status ? (
          <span
            className={css.status}
            style={{ backgroundColor: 'green' }}
          ></span>
        ) : (
          <span
            className={css.status}
            style={{ backgroundColor: 'red' }}
          ></span>
        )}
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default FriendListItem;