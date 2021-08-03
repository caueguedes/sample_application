import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: '100vh',
  },
  warning_icon: {
    width: 50,
    height: 50
  }
}));