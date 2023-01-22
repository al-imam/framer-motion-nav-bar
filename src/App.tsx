import classes from "./app.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

function App() {
  return (
    <nav className={classes.navbar}>
      <Ul />
    </nav>
  );
}

function Ul() {
  const [open, setOpen] = useState(false);

  return (
    <ul className={classes.navbarNav}>
      <li className={classes.navItem}>Home</li>

      <DropDown setOpen={setOpen} open={open} />

      <li className={classes.navItem}>Contact Us</li>
      <li className={classes.navItem}>About Us</li>
    </ul>
  );
}

export default App;

function DropDown({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}) {
  return (
    <motion.li
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className={classes.navItem}
    >
      <button className={classes.dropdownToggler}>Department</button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{
              scale: 0.8,
              opacity: 0,
              y: -10,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
            className={classes.dropdownMenu}
          >
            <li onClick={() => setOpen(false)}>Computer Technology</li>
            <li>Electrical Technology</li>
            <li>Civil Technology</li>
            <li>Electronics Technology</li>
            <li>Architecture Technology</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
