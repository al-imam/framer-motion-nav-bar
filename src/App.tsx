import classes from "./app.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "./hook/useMedia";

function App() {
  return (
    <nav className={classes.navbar}>
      <Ul />
    </nav>
  );
}

const departments = [
  "Computer",
  "Electrical",
  "Civil",
  "Electronics",
  "Architecture",
];

function Ul() {
  const [open, setOpen] = useState(false);

  return (
    <ul className={classes.navbarNav}>
      <li className={classes.navItem}>Home</li>

      <DropDown option={departments} title="Departments" />
      <DropDown option={departments} title="Fuck" />
      <DropDown option={departments} title="Sex" />

      <li className={classes.navItem}>Contact Us</li>
      <li className={classes.navItem}>About Us</li>
    </ul>
  );
}

export default App;

function DropDown({ option, title }: { option: string[]; title: string }) {
  const large = useMediaQuery("(min-width: 1080px)");
  const [open, setOpen] = useState(false);
  const [tap, setTap] = useState(false);
  return (
    <motion.li
      onMouseEnter={() => large && setOpen(true)}
      onMouseLeave={() => large && setOpen(false)}
      className={classes.navItem}
      style={
        tap
          ? {
              display: "flex",
              flexDirection: "column",
              position: "relative",
              justifyContent: "normal",
            }
          : {}
      }
    >
      <button
        className={classes.dropdownToggler}
        onClick={() => large || setTap((p) => !p)}
      >
        {title}
      </button>
      <AnimatePresence>
        {(open || tap) && (
          <motion.ul
            variants={
              large
                ? {
                    rest: {
                      scale: 0.8,
                      opacity: 0,
                      y: -10,
                    },
                    animate: {
                      scale: 1,
                      opacity: 1,
                    },
                  }
                : {
                    rest: {
                      y: -200,
                    },
                    animate: {
                      y: 0,
                    },
                  }
            }
            initial="rest"
            animate="animate"
            exit="rest"
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
            className={classes.dropdownMenu}
          >
            {option.map((el) => {
              return (
                <li key={el} onClick={() => (setOpen(false), setTap(false))}>
                  {el}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
