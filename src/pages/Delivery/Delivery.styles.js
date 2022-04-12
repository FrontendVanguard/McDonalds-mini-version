import {
    SIZES,
    COLORS
} from './../../constants/theme'

export const deliveryStyles = {
    deliveryContainer: {
        padding: SIZES.padding,
        paddingBottom: 75,
        backgroundColor: COLORS.black,
        height: 850,
    },
    adressContainer: {
        marginTop: 20,

        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    adressElement: {
        width: '30%',
        marginLeft: 10,
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 12,
        padding: 10
    },
    commentary: {
        width: '96%',
        marginLeft: 10,
        marginTop: 20,
        height: 60,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10
    },
    deliveryText: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 12,
    },
    checkBoxContainer: {
        marginLeft: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        width: '60%',
        marginTop: 10,
        marginLeft: 10
    },
    cvcInput: {
        width: '30%',
        marginLeft: 10,
        height: 45,
        marginTop: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10
    }
}