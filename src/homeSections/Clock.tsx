/* eslint-disable eqeqeq */
/* eslint-disable no-mixed-operators */
import React, { useCallback, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./Clock.module.scss";
import gsap from "gsap";
import Header from "../components/Header";
import Skill from "../components/Skill";
import Button from "../components/Button";
import icon from "../images/clock-icon.png";
// import alarmAudioFile from "../audios/alarm-sound.wav";

export default function Clock() {
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
  const [alarmSound] = useState<any>(new Audio("../audios/alarm-sound.wav"));

  const focusRef = useRef<any>(null);

  React.useEffect(() => {
    alarmSound.loop = true;
    const resize = () => {
      setVh(window.innerHeight * 0.01);
    };

    window.addEventListener("resize", resize);

    document.documentElement.style.setProperty("--vh", `${vh}px`);

    const timeUpdate = setInterval(() => {
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
          alarmSound.play();
        }
      }
    }, 100);

    return () => {
      clearInterval(timeUpdate);
      window.removeEventListener("resize", resize);
    };
  });

  const clickAnimation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.target, 0.1, {
      repeat: 1,
      yoyo: true,
      translateY: "10vmin",
    });
  }, []);

  const nextClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      clickAnimation(e);

      alarm.active && setSelect(select === 3 ? 0 : select + 1);

      if (
        parseInt(alarm.h) >= 24 ||
        parseInt(alarm.m) >= 60 ||
        parseInt(alarm.s) >= 60
      ) {
        setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: "", m: "", s: "" }));
      }
    },
    [select, alarm.h, alarm.m, alarm.s, alarm.active, clickAnimation]
  );

  const prevClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      clickAnimation(e);

      alarm.active && setSelect(select === 0 ? 3 : select - 1);

      if (
        parseInt(alarm.h) >= 24 ||
        parseInt(alarm.m) >= 60 ||
        parseInt(alarm.s) >= 60
      ) {
        setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: "", m: "", s: "" }));
      }
    },
    [select, alarm.h, alarm.m, alarm.s, alarm.active, clickAnimation]
  );

  const selectClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
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
    },
    [clickAnimation, select]
  );

  const dateClick = useCallback(() => {
    setShow("date");
  }, []);

  const alarmClick = useCallback(() => {
    setShow("alarm");
  }, []);

  const hourInput = useCallback((e: any) => {
    if (isNaN(parseInt(e.target.value))) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: "" }));
    } else {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, h: e.target.value }));
    }
  }, []);

  const minuteInput = useCallback((e: any) => {
    if (isNaN(parseInt(e.target.value))) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, m: "" }));
    } else {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, m: e.target.value }));
    }
  }, []);

  const secondInput = useCallback((e: any) => {
    if (isNaN(parseInt(e.target.value))) {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, s: "" }));
    } else {
      setAlarm((prevAlarm: any) => ({ ...prevAlarm, s: e.target.value }));
    }
  }, []);

  const stopRinging = useCallback(() => {
    setAlarm((prevAlarm: any) => ({ ...prevAlarm, ring: false }));
    alarmSound.pause();
    alarmSound.currentTime = 0;
  }, [alarmSound]);

  return (
    <div className={styles["container"]}>
      <Header
        title={["Digital", "Clock"]}
        subTitle={["with", "alarm"]}
        classes={["Clock"]}
      />
      <div className={styles.content}>
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
        <div className={classNames(styles.summary, styles.box)}>
          <h3 className={styles["box__title"]}>Project summary</h3>
          <table className={styles["summary__table"]}>
            <tbody className={styles["summary__table__tbody"]}>
              <tr>
                <td>프로젝트 이름</td>
                <td>Meta Beef</td>
              </tr>
              <tr>
                <td>프로젝트 기간</td>
                <td>2022.01.26 ~ 02.24</td>
              </tr>
              <tr>
                <td>개발 인원</td>
                <td>1명</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={classNames(styles.description, styles.box)}>
          <h3 className={styles["box__title"]}>Description</h3>
          <p className={styles["description__text"]}>
            {
              "디지털 시계를 구현한 웹사이트로\n평범한 웹사이트의 틀에서 벗어나\n새로운 것을 만들어보기 위해 시작한 프로젝트입니다.\n리퀴드 크리스탈 폰트를 사용한 시계를\n최대한 비슷한 모습으로 구현하고자 노력했습니다."
            }
          </p>
        </div>
        <div className={classNames(styles.skills, styles.box)}>
          <h3 className={styles["box__title"]}>Skills</h3>
          <div className={styles["skill-icons"]}>
            <Skill skill="html" />
            <Skill skill="javascript" />
            <Skill skill="react" />
            <Skill skill="sass" />
            <Skill skill="netlify" />
          </div>
        </div>
        <div className={classNames(styles.links, styles.box)}>
          <h3 className={styles["box__title"]}>Links</h3>
          <div className={styles["links-wrapper"]}>
            <Button
              text="Github Repository"
              href="https://github.com/RAREBEEF/Clock"
              classes={["Home__project-link"]}
            />
            <Button
              text="Blog post"
              href="https://velog.io/@drrobot409/HTML-CSS-JS-%EB%94%94%EC%A7%80%ED%84%B8-%EC%8B%9C%EA%B3%84-%EB%A7%8C%EB%93%A4%EA%B8%B0-feat.-%EC%95%8C%EB%9E%8C"
              classes={["Home__project-link"]}
            />
            <Button
              icon={icon}
              href="https://clockbyrarebeef.netlify.app/"
              classes={["Home__project-link"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
