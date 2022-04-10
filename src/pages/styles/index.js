import {
    SIZES,
    COLORS
} from './../../constants/theme'

export const gStyles = {
    MainPage: {
        padding: SIZES.padding,
        paddingTop: 55,
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
        alignItems:"center"
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
    }
}