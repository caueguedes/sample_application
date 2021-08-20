import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    justifyContent: 'space-evenly'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: '170px'
  },
  cardContent: {
    flexGrow: 1,
  },
  bottlesPaginator: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    '& nav': {
      display: "flex",
      justifyContent: 'center'
    }
  },
}));