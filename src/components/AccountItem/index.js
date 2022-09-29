import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import Image from "../Image";
import styles from './AccountItem.moddule.scss'

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <Image src="" alt="" className={cx("avatar")} />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span></span>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}></span>
      </div>
    </div>
  );
}

export default AccountItem;
