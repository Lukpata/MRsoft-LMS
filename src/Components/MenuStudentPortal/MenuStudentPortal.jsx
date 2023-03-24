import React from "react";
import classes from "./MenuStudentPortal.module.css";
import MenuItem from "../MenuItem/MenuItem";
import { FolderNotch, Notepad, NotePencil, Notification } from "phosphor-react";

const MenuStudentPortal = () => {
  return (
    <div className={classes.sideMenu}>
      <MenuItem icon={<FolderNotch size={32} />} title="My Courses" url="/" />

      <MenuItem icon={<Notepad size={32} />} title="Assignments" url="/" />

      <MenuItem icon={<NotePencil size={32} />} title="Exams" url="/quiz" />
      <MenuItem
        icon={<Notification size={32} />}
        title="Notification Board"
        url="/"
      />
    </div>
  );
};

export default MenuStudentPortal;
