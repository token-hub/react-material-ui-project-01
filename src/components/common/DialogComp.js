import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { DialogContext } from '../developers/Developers';

const Transition = React.forwardRef( function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogComp = ({ id }) => {

    const {
        isOpen,
        dialogClickHandler,
        dialogDeleteHandler,
        dialogTitle,
        dialogBody,
        transition
    } = useContext(DialogContext);

    return (
        <React.Fragment>
            <Dialog
                open={isOpen}
                TransitionComponent={Transition}
                keepMounted
                onClose={dialogClickHandler}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
               <DialogTitle id='alert-dialog-slide-title'>{dialogTitle}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-slide-description">
                        {dialogBody}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={dialogClickHandler} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={dialogDeleteHandler(id)} color="primary">
                    Delete
                  </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

DialogComp.propTypes = {
    id: PropTypes.number.isRequired,
}

export default DialogComp