import CreateGuestBook from "./CreateGuestBook";
import GuestBook from "./GuestBook";
import styles from "./GuestBookSection.module.scss";
import { ReduxStateType } from "../types";
import { useSelector } from "react-redux";

const GuestBookSection = () => {
  const { data: guestBook } = useSelector((state: ReduxStateType) => state);

  return (
    <>
      <CreateGuestBook />
      <ul className={styles["list"]}>
        {guestBook.map((data) => (
          <GuestBook data={data} key={data.id} />
        ))}
      </ul>
    </>
  );
};

export default GuestBookSection;
