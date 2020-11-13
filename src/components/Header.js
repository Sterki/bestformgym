import React, { useEffect, useState } from "react";
import "./Header.css";
import Navi from "./Navi";
import logoempresa from "./../static/images/image_logoempresa.jpg";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, NavLink } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const [scrollPoss, setScrollPoss] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });
  const [state, setState] = React.useState({
    top: false,
  });
  const classes = useStyles();
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleScroll = () => {
    const position = window.pageYOffset;
    let headerid = document.getElementById("headerid");
    let headernew = document.getElementById("headernew");
    setScrollPoss(position);
    // console.log(position);
    if (position > 200) {
      headerid?.classList.add("headernewclass");
      headernew?.classList.add("headernew");
    } else {
      headerid?.classList.remove("headernewclass");
      headernew?.classList.remove("headernew");
    }
  };
  useEffect(() => {
    function handleRezise() {
      setDimensions({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleRezise);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {dimensions.width >= 900 ? (
        <div className="header" id="headernew">
          <div className="header__container">
            <Link to="/" className="header__img">
              <img id="headerid" src={logoempresa} alt="logoempresa" />
            </Link>
            <Navi />
          </div>
        </div>
      ) : (
        <>
          <div className="header__appbar">
            <AppBar position="static" style={{ backgroundColor: "#0c66a5" }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <div>
                    {["top"].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Button>
                          <MenuIcon
                            style={{
                              color: "white",
                              padding: "0rem",
                            }}
                            onClick={toggleDrawer(anchor, true)}
                          />
                        </Button>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          <div className="header__navlinks">
                            <NavLink
                              to="/"
                              className="header__navlinksnav"
                              exact
                              activeClassName="activo"
                            >
                              Home
                            </NavLink>
                            <NavLink
                              to="/uber"
                              className="header__navlinksnav"
                              activeClassName="activo"
                            >
                              Uber uns
                            </NavLink>
                            <NavLink
                              to="/erfolgsgeschichten"
                              className="header__navlinksnav"
                              activeClassName="activo"
                            >
                              Erfolgsgeschichten
                            </NavLink>
                            <NavLink
                              to="/service"
                              className="header__navlinksnav"
                              activeClassName="activo"
                            >
                              Service
                            </NavLink>
                            <NavLink
                              to="/trainingszeiten"
                              className="header__navlinksnav"
                              activeClassName="activo"
                            >
                              Trainingszeiten
                            </NavLink>
                            <NavLink
                              to="/kontakt"
                              className="header__navlinksnav"
                              activeClassName="activo"
                            >
                              Kontakt
                            </NavLink>
                          </div>
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </div>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                  BestFormGym
                </Typography>
              </Toolbar>
            </AppBar>
          </div>
        </>
      )}
    </>
  );
}

export default Header;
