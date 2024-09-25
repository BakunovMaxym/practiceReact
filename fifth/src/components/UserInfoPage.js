import { useUserInfo } from './UserInfoContext';

const UserInfoPage = () => {
  const { userInfo } = useUserInfo();

  return (
    <div>
      {Object.entries(userInfo).map(([key, value]) => (
        <p key={key}>
          {key.charAt(0).toUpperCase() + key.slice(1)}: 
          {typeof value === 'object' ? JSON.stringify(value) : value || "N/A"}
        </p>
      ))}
    </div>
  );
};

export default UserInfoPage;
