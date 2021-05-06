const styles = theme => ({
    taskBoard: {
        marginTop: '15px'
    },
    card: {
        marginTop: '10px',
        border: '1px solid #f1f1f1',
        borderRadius: '4px',
    },
    box: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shape: {
        padding: '10px 20px',
        border: '1px solid #ccc',
        color: theme.palette.primary.light,
        fontSize: theme.typography.fontSize,
        backgroundColor: theme.shape.whiteColor,
        margin: '10px 10px'
    },
    btnAdd: {
        marginRight: '10px'
    }
});

export default styles;