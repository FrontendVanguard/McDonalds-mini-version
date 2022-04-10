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
        marginTop: -150,
        paddingTop: 55,
        paddingBottom: 75,
        backgroundColor: COLORS.black,
        height: 800,
        marginTop: 30,
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
    }
}