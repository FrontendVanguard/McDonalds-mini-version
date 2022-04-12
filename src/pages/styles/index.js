import {
    SIZES,
    COLORS
} from './../../constants/theme'

export const gStyles = {
    MainPage: {
        padding: SIZES.padding,

        paddingBottom: 75,
        backgroundColor: COLORS.black,
    },
    FoodsPageContainer: {
        padding: SIZES.padding,
        
        paddingTop: 45,
        paddingBottom: 75,
        backgroundColor: COLORS.black,
        height: 850,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    Item: {
        width: "40%",
        justifyContent: 'center',
        alignItems:"center",
    },
    ItemImage: {
        width: 120,
        height: 120
    },
    canNumper: {
        position: 'absolute', 
        color: COLORS.red,
        top: 35,
        right: 0
    },
    CanContainer: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 45,
        paddingBottom: 75,
        backgroundColor: COLORS.black,
        height: 850,
        padding: SIZES.padding,
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 0,
        backgroundColor: COLORS.black,
        paddingBottom: 8,
    },
    CanItem: {
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    CanItemText: {
        fontSize: 18,
        marginRight: 15,
    },
    CanPriceText: {
        fontSize: 12,
        marginRight: 10,
    },
    CanItemInformation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    CanItemDelivery: {
        flexDirection: 'row',
        padding: 8,
        paddingLeft: 0,
        paddingBottom: 18,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}