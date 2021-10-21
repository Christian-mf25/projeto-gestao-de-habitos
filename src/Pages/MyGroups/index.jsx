import { useContext, useState } from "react";
import { GroupContext } from "../../Providers/Group";
import { useHistory } from "react-router-dom";
import { Dialog } from "@material-ui/core";
import * as C from "./styles.js";
import NewGroup from "../../Components/NewGroup";
import Api from "../../Services/API";
import Header from "../../Components/Header";
import Card from "../../Components/Card/";
import { Input, SecondaryButton } from "../../Components/Styled/style";

const Groups = () => {
  const history = useHistory();

  const { group, setGroup } = useContext(GroupContext);
  const [insertModal, setInsertModal] = useState(false);
  const { data } = useContext(GroupContext);
  const [input, setInput] = useState("");

  const token = JSON.parse(localStorage.getItem("@Productive:token"));

  const handleClickInsertModal = () => {
    setInsertModal(!insertModal);
  };
  const handleClickCloseModal = () => {
    setInsertModal(false);
  };

  return (
    <>
      <Header showM />
      <C.DivColorApp>
        <C.Container>
          {token ? (
            <div className="ul-li">
              <C.HeadSearchAndCreateGroup>
                <Input
                  label="Search Group"
                  value={input}
                  size="small"
                  variant="outlined"
                  margin="dense"
                  placeholder="Search Group"
                  onChange={(e) => setInput(e.target.value)}
                />
                <SecondaryButton
                  variant="contained"
                  size="medium"
                  onClick={handleClickInsertModal}
                >
                  Create Group
                </SecondaryButton>
              </C.HeadSearchAndCreateGroup>

              <ul className="box_list_groups">
                {input.length > 0
                  ? data
                      .filter((result) =>
                        result.name.toLowerCase().includes(input.toLowerCase())
                      )
                      .map((filter, index) => (
                        <li className="list_groups" key={index}>
                          <Card item={filter} />
                        </li>
                      ))
                  : data?.map((item, index) => (
                      <li className="list_groups" key={index}>
                        <Card item={item} />
                      </li>
                    ))}
              </ul>
              <div>
                <Dialog
                  open={insertModal}
                  onClose={handleClickCloseModal}
                  aria-labelledby="responsive-dialog-title"
                >
                  {insertModal && (
                    <NewGroup handleClickInsertModal={handleClickCloseModal} />
                  )}
                </Dialog>
              </div>
            </div>
          ) : (
            history.push("/login")
          )}
        </C.Container>
      </C.DivColorApp>
    </>
  );
};

export default Groups;
