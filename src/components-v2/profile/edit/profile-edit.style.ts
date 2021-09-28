import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 30,
      background: '#FFF',
      borderRadius: 10,
    },
    title: {
      marginBottom: 30,
      fontSize: theme.typography.h5.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
    },
    action: {
      background: theme.palette.primary.main,
      color: '#FFF',
      '&:hover': {
        color: theme.palette.primary.main,
        background: 'rgba(255, 255, 255, 0.8)',
      },
      position: 'absolute',
      padding: '4px',
    },
    box: {
      position: 'relative',
    },
    position: {
      right: '0px',
      bottom: '0px',
    },
    label: {
      background: '#FFF',
      paddingLeft: 6,
      paddingRight: 6,
    },
    pictureBox: {
      border: '1px dashed #E5E5E5',
      padding: 20,
      background: '#FFF',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '126px',
    },
    bgBox: {
      border: '1px dashed #E5E5E5',
      padding: 20,
      background: '#FFF',
      borderRadius: 5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: '107px',
    },
    marker: {
      fontSize: '12px',
      color: theme.palette.text.secondary,
      marginBottom: '34px',
    },
    username: {
      marginBottom: '12px',
    },
    media: {
      height: '206px',
      width: '100%',
      objectFit: 'cover',
      borderRadius: theme.spacing(1),
    },
    avatar: {
      boxSizing: 'border-box',
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }),
);