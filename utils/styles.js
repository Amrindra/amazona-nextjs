import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },

  brand: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  grow: {
    flexGrow: 1,
  },

  main: {
    minHeight: "80vh",
  },

  section: {
    marginTop: 10,
    marginBottom: 10,
  },

  footer: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },

  form: {
    maxWidth: 800,
    margin: "0 auto",
  },
});

export default useStyles;
