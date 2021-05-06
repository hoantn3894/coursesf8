const styles = theme => ({
    taskForm: {
        minWidth: '560px'
    },
    textField: {
        width: '100%'
    },
    heading: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    modal: {
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        padding: theme.spacing(2, 4, 4),
        backgroundColor: '#fff',
        width: '500px'
    }
});

export default styles;