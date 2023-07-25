import { topDealUsers } from '../../data';
import './topBox.scss';

const TopBox = () => {
  return (
    <div className='topBox'>
      <h1>Top deals</h1>
      <div className='list'>
        {topDealUsers.map((user) => (
          <div key={user.id} className='listItem'>
            <div className='user'>
              <img src={user.img} alt={user.username} />
              <div className='userTexts'>
                <span className='username'>{user.username}</span>
                <div className='span email'>{user.email}</div>
              </div>
            </div>
            <span className='amount'>{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopBox;
