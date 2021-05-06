const styles = theme => ({
    taskItem: {

    },
    card: {
        marginTop: '10px',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    editIcon: {
        backgroundColor: '#107fe8',
        marginRight: '8px',
        cursor: 'pointer'
    },
    deleteIcon: {
        backgroundColor: '#ff003b',
        "&:hover": {
            backgroundColor: '#ff003b',
        }
    },
    cardImage: {
        cardImage: '100px',
        height: '200px'
    },
    cardText: {
        padding: '4px 0'
    },
    cardIcon: {
        width: '40px',
        height: '40px',
        borderRadius: '50%'
    }
});

export default styles;