import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(3, 0),
  },
  mainContainer: {
    position: 'relative',
    height: '400px',
    padding: theme.spacing(6, 2),
    marginBottom: theme.spacing(8)
  },
}));
