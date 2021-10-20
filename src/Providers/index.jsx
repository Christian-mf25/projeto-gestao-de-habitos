import { AuthProvider } from "./Auth";
import { GroupProvider } from "./Group";
import { GroupsProvider } from "./SearchGroups";

const Providers = ({ children }) => {
  return (
    <>
      <AuthProvider>
        <GroupProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </GroupProvider>
      </AuthProvider>
    </>
  );
};

export default Providers;
