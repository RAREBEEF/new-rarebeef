/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
import React, { ReactElement, useCallback, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Clock.module.scss";
import gsap from "gsap";
import Header from "../components/Header";
import Skill from "../components/Skill";
import Button from "../components/Button";
import githubIcon from "../images/icons/github-square-brands.svg";
import velogIcon from "../images/icons/velog-square.svg";
// import audio from "../audios/alarm-sound.wav";

const Clock = (): ReactElement => {
  const [vh, setVh] = useState(window.innerHeight * 0.01);
  const [time, setTime] = useState<Array<any>>([
    "00",
    "00",
    "00",
    "0000",
    "00",
    "00",
    "0",
  ]);
  const [show, setShow] = useState<"alarm" | "date">("date");
  const [select, setSelect] = useState<number>(3);
  const [alarm, setAlarm] = useState<any>({
    h: "",
    m: "",
    s: "",
    active: false,
    ring: false,
  });
  // const [alarmSound] = useState<any>(
  //   <audio src={require("../audios/alarm-sound.wav")} />
  // );

  const focusRef = useRef<any>(null);

  React.useEffect(() => {
    // alarmSound.loop = true;

    const windowResizeListner = () => {
      setVh(window.innerHeight * 0.01);
    };

    window.addEventListener("resize", windowResizeListner);

    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const timeUpdate = setInterval((): void => {
      const date = new Date();

      setTime([
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
        date.getFullYear(),
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        date.getDay(),
      ]);

      if (alarm.active) {
        if (
          (alarm.h == time[0] || (alarm.h == "" && time[0] == "00")) &&
          (alarm.m == time[1] || (alarm.m == "" && time[1] == "00")) &&
          (alarm.s == time[2] || (alarm.s == "" && time[2] == "00"))
        ) {
          setAlarm((prevAlarm: any) => ({ ...prevAlarm, ring: true }));
          // alarmSound.play();
        }
      }
    }, 100);

    return (): void => {
      clearInterval(timeUpdate);
      window.removeEventListener("resize", windowResizeListner);
    };
  });

  const clickAnimation = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      gsap.to(e.target, 0.1, {
        repeat: 1,
        yoyo: true,
        translateY: "10vmin",
      });
    },
    []
  );

  const nextClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    clickAnimation(e);

    if (!!alarm.active) {
      setSelect(select === 3 ? 0 : select + 1);
    }

    if (
      parseInt(alarm.h) >= 24 ||
      parseInt(alarm.m) >= 60 ||
      parseInt(alarm.s) >= 60
    ) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: "", m: "", s: "" }));
    }
  };

  const prevClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    clickAnimation(e);

    if (!!alarm.active) {
      setSelect(select === 0 ? 3 : select - 1);
    }

    if (
      parseInt(alarm.h) >= 24 ||
      parseInt(alarm.m) >= 60 ||
      parseInt(alarm.s) >= 60
    ) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: "", m: "", s: "" }));
    }
  };

  const selectClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    clickAnimation(e);

    if (select === 3) {
      setAlarm((prevAlarm: any) => ({
        ...prevAlarm,
        active: !prevAlarm.active,
      }));
    } else {
      focusRef.current.focus();
      select === 0 && setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: "" }));
      select === 1 && setAlarm((prevAlarm: any) => ({ ...prevAlarm, m: "" }));
      select === 2 && setAlarm((prevAlarm: any) => ({ ...prevAlarm, s: "" }));
    }
  };

  const dateClick = (): void => {
    setShow("date");
  };

  const alarmClick = (): void => {
    setShow("alarm");
  };

  const hourInput = (e: any): void => {
    if (!e.target.value) {
      return;
    }

    if (isNaN(parseInt(e.target.value))) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: "" }));
    } else {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: e.target.value }));
    }
  };

  const minuteInput = (e: any): void => {
    if (!e.target.value) {
      return;
    }

    if (isNaN(parseInt(e.target.value))) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, m: "" }));
    } else {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, m: e.target.value }));
    }
  };

  const secondInput = (e: any): void => {
    if (!e.target.value) {
      return;
    }

    if (isNaN(parseInt(e.target.value))) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, s: "" }));
    } else {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, s: e.target.value }));
    }
  };

  const stopRinging = (): void => {
    setAlarm((prevAlarm: any) => ({ ...prevAlarm, ring: false }));
    // alarmSound.pause();
    // alarmSound.currentTime = 0;
  };

  return (
    <div className={classNames(styles.container, styles.DigitalClock)}>
      <Header
        title={["Digital", "Clock"]}
        subTitle={["with", "alarm"]}
        classes={["Clock"]}
      />
      <main className={styles.content}>
        <div
          className={classNames(styles["clock-wrapper"])}
          // style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        >
          <div
            className={classNames(
              styles["btn-wrapper"],
              alarm.ring && styles["ring"]
            )}
          >
            <div
              className={classNames(
                styles["btn"],
                styles["btn--date"],
                show === "date" && styles["active"]
              )}
              onClick={dateClick}
            >
              Time
            </div>
            <div
              className={classNames(
                styles["btn"],
                styles["btn--alarm"],
                show === "alarm" && styles["active"]
              )}
              onClick={alarmClick}
            >
              Alarm
            </div>
            <div
              className={classNames(
                styles["btn"],
                styles["btn--alarm-off"],
                alarm.ring && styles["active"]
              )}
              onClick={stopRinging}
            >
              STOP
            </div>
            <div
              className={classNames(
                styles["btn"],
                styles["btn--prev"],
                !(show === "alarm") && styles["active"]
              )}
              onClick={prevClick}
            >
              PREV
            </div>
            <div
              className={classNames(
                styles["btn"],
                styles["btn--select"],
                !(show === "alarm") && styles["active"]
              )}
              onClick={selectClick}
            >
              SELECT
            </div>
            <div
              className={classNames(
                styles["btn"],
                styles["btn--next"],
                !(show === "alarm") && styles["active"]
              )}
              onClick={nextClick}
            >
              NEXT
            </div>
          </div>
          <div
            className={classNames(
              styles["clock"],
              alarm.ring && styles["ring"]
            )}
          >
            <div className={classNames(styles["day"])}>
              <div
                className={classNames(
                  time[6] === 0 && show === "date" && styles["active"]
                )}
              >
                SUN
              </div>
              <div
                className={classNames(
                  time[6] === 1 && show === "date" && styles["active"]
                )}
              >
                MON
              </div>
              <div
                className={classNames(
                  time[6] === 2 && show === "date" && styles["active"]
                )}
              >
                TUE
              </div>
              <div
                className={classNames(
                  time[6] === 3 && show === "date" && styles["active"]
                )}
              >
                WED
              </div>
              <div
                className={classNames(
                  time[6] === 4 && show === "date" && styles["active"]
                )}
              >
                THU
              </div>
              <div
                className={classNames(
                  time[6] === 5 && show === "date" && styles["active"]
                )}
              >
                FRI
              </div>
              <div
                className={classNames(
                  time[6] === 6 && show === "date" && styles["active"]
                )}
              >
                SAT
              </div>
            </div>
            <div className={classNames(styles["date-time-wrapper"])}>
              <div
                className={classNames(
                  styles["date"],
                  show === "alarm" && styles["alarm"]
                )}
              >
                <span
                  className={classNames(
                    styles["toggle-alarm"],
                    alarm.active && styles["active"],
                    show === "alarm" && select === 3 && styles["select"]
                  )}
                >
                  ON
                </span>
                {show === "date" && ` ${time[3]} / ${time[4]} / ${time[5]}`}
                {show === "alarm" && " 0000 / 00 / 00"}
              </div>
              {show === "date" ? (
                <div
                  className={classNames(
                    styles["time"],
                    // show === "alarm" && styles["active"]
                    show !== "date" && styles["active"]
                  )}
                >
                  {show === "date" && `${time[0]}:${time[1]}:${time[2]}`}
                </div>
              ) : (
                <div
                  className={classNames(
                    styles["alarm__timer"],
                    alarm.active && styles["active"]
                  )}
                >
                  <input
                    className={classNames(select === 0 && styles["select"])}
                    type="text"
                    placeholder="00"
                    maxLength={2}
                    ref={select === 0 ? focusRef : null}
                    value={alarm.h}
                    onChange={hourInput}
                  ></input>
                  :
                  <input
                    className={classNames(select === 1 && styles["select"])}
                    type="text"
                    placeholder="00"
                    maxLength={2}
                    ref={select === 1 ? focusRef : null}
                    value={alarm.m}
                    onChange={minuteInput}
                  ></input>
                  :
                  <input
                    className={classNames(select === 2 && styles["select"])}
                    type="text"
                    placeholder="00"
                    maxLength={2}
                    ref={select === 2 ? focusRef : null}
                    value={alarm.s}
                    onChange={secondInput}
                  ></input>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={classNames(styles.summary, styles.section)}>
          <h3 className={styles["section__title"]}>Project summary</h3>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>프로젝트 이름</h4>
            <p
              className={classNames(
                styles["section__content"],
                styles["summary__text"]
              )}
            >
              Digital Clock
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>프로젝트 기간</h4>
            <p
              className={classNames(
                styles["section__content"],
                styles["summary__text"]
              )}
            >
              2022.01.09 ~ 01.19
            </p>
          </div>
          <div className={styles["summary-wrapper"]}>
            <h4 className={styles["summary__sub-title"]}>개발 인원</h4>
            <p
              className={classNames(
                styles["section__content"],
                styles["summary__text"]
              )}
            >
              1명
            </p>
          </div>
        </div>
        <div className={classNames(styles.description, styles.section)}>
          <h3 className={styles["section__title"]}>Description</h3>
          <p
            className={classNames(
              styles["description__text"],
              styles["section__content"]
            )}
          >
            {
              "알람 기능이 있는 디지털 시계입니다.\n평범한 웹의 틀에서 벗어나 새로운 것을 시도해 보고자 진행한 프로젝트이며 리퀴드 크리스탈 폰트를 사용한 디지털 시계를 최대한 비슷한 모습으로 구현해 보았습니다. 시계 상단의 버튼으로 알람을 설정하는 등의 조작이 가능합니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.section)}>
          <h3 className={styles["section__title"]}>Skills</h3>
          <ul
            className={classNames(
              styles["skill-icons"],
              styles["section__content"]
            )}
          >
            <Skill skill="HTML" />
            <Skill skill="JavaScript" />
            <Skill skill="React" />
            <Skill skill="Sass" />
            <Skill skill="Netlify" />
          </ul>
        </div>
        <div className={classNames(styles.links, styles.section)}>
          <h3 className={styles["section__title"]}>Links</h3>
          <div
            className={classNames(
              styles["links-wrapper"],
              styles["section__content"]
            )}
          >
            <Button
              icon={githubIcon}
              href="https://github.com/RAREBEEF/Clock"
              classes={["Home__project-link"]}
            />
            <Button
              icon={velogIcon}
              href="https://velog.io/@drrobot409/HTML-CSS-JS-%EB%94%94%EC%A7%80%ED%84%B8-%EC%8B%9C%EA%B3%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-feat.-%EC%95%8C%EB%9E%8C"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Clock;
