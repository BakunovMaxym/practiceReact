import { useUserInfo } from './UserInfoContext';

const UserInfoPage = () => {
  const { userInfo } = useUserInfo();

  return (
    <div>
      {Object.entries(userInfo).map(([key, value]) => (
        <div key={key}>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
          {typeof value === 'object' ? (
            <pre style={{ fontFamily: 'inherit' }}>{JSON.stringify(value, null, 2)}</pre>
          ) : (
            <p>{value || "N/A"}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserInfoPage;
