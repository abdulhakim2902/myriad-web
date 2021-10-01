import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 30px',
    },
    firstCol: {
      width: 312,
    },

    innerFirstColWrapper: {
      width: 312,
      display: 'flex',
      flexDirection: 'column',
      rowGap: 12,
    },

    secondCol: {
      flexGrow: 2,
      margin: 20,
    },

    innerSecondColWrapper: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignItems: 'center',
      rowGap: 12,
      '& > div': {
        width: '100%',
      },
    },

    thirdCol: {
      width: 312,
    },

    innerThirdColWrapper: {
      width: 312,
      display: 'flex',
      flexDirection: 'column',
      rowGap: 12,
    },
  }),
);

export default useStyles;