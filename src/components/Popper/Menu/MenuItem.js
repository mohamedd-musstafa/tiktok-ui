import classNames from "classnames/bind";
import React from "react";
import Button from "../../Button";
import styles from "./Menu.module.scss";

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
  return (
    <Button
      leftIcon={data.icon}
      to={data.to}
      className={cx("menu-item")}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

export default MenuItem;
