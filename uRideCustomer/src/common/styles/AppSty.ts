import { StyleSheet } from "react-native";
import { FONT, _COL, _HEIGHT, _WIDTH } from "~/utils";

const mSty = StyleSheet.create({
    dCarIc: {
        aspectRatio: 1,
        height: 36,
        width: 36,
        justifyContent: "center",
        alignItems: "center"
    },
    onV: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderTopStartRadius: 25,
        borderBottomStartRadius: 25,
        backgroundColor: _COL.WHITE,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 5
    },
    onTxt: {
        fontSize: 14,
        color: _COL.DARK_SEAFOAM_GREEN,
        fontFamily: FONT.SEMI_BOLD,
        paddingHorizontal: 5
    },
    ownLoc: {
        position: "absolute",
        right: 20,
        bottom: 0,
        zIndex: 2,
        backgroundColor: _COL.WHITE,
        padding: 12,
        borderRadius: 10,
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 5
    },
    drawerIc: {
        zIndex: 3,
        padding: 12,
        borderRadius: 7
    },
    dTitle: {
        fontSize: 22,
        color: _COL.WHITE,
        fontFamily: FONT.BOLD,
        paddingHorizontal: 15
    },
    dSubTitle: {
        fontSize: 16,
        color: _COL.WHITE,
        fontFamily: FONT.SEMI_BOLD,
        paddingHorizontal: 15
    },
    dlable: {
        color: _COL.WHITE,
        fontFamily: FONT.REGULAR,
        fontSize: 15
    },
    dLine: {
        height: 1,
        backgroundColor: _COL.WHITE03,
        width: "90%",
        alignSelf: "center",
        borderRadius: 1
    },
    vTxt: {
        fontSize: 16,
        color: _COL.BLACK,
        fontFamily: FONT.SEMI_BOLD,
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    bLine: {
        height: 1,
        backgroundColor: _COL.BLACK01,
        width: "94%",
        alignSelf: "center",
        borderRadius: 1
    },
    docCard: {
        width: "90%",
        borderRadius: 10,
        padding: 15,
        backgroundColor: _COL.F9,
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 20
    },
    docCardTxt: {
        fontSize: 14,
        color: _COL.BLUISH,
        textAlign: "center",
        fontFamily: FONT.SEMI_BOLD
    },
    tripCard: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: _COL.WHITE,
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .01,
        shadowRadius: 2,
        elevation: 10,
        marginBottom: 20,
        overflow: "hidden"
    },
    tripCardBtn: {
        paddingBottom: 15,
        borderRadius: 10
    },
    greenTag: {
        backgroundColor: _COL.GREEN_BG,
        justifyContent: "center",
        alignItems: "center",
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 5
    },
    priTag: {
        backgroundColor: _COL.PRIMARY_BG,
        justifyContent: "center",
        alignItems: "center",
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 5
    },
    redTag: {
        backgroundColor: _COL.RED_BG,
        justifyContent: "center",
        alignItems: "center",
        borderBottomStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 5
    },
    carTypeTag: {
        backgroundColor: _COL.F8,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "baseline",
        borderBottomEndRadius: 10,
        flexDirection: "row",
        padding: 10
    },
    redTagTxt: {
        fontSize: 13,
        color: _COL.BROWNISH_PINK,
        fontFamily: FONT.REGULAR,
        paddingHorizontal: 5,
        paddingVertical: 2,
        textAlign: "center"
    },
    priTagTxt: {
        fontSize: 13,
        color: _COL.SECONDARY_DARK,
        fontFamily: FONT.REGULAR,
        paddingHorizontal: 5,
        paddingVertical: 2,
        textAlign: "center"
    },
    greenTagTxt: {
        fontSize: 13,
        color: _COL.DARK_SEAFOAM_GREEN,
        fontFamily: FONT.REGULAR,
        paddingHorizontal: 5,
        paddingVertical: 2,
        textAlign: "center"
    },
    dateT: {
        fontFamily: FONT.REGULAR,
        fontSize: 13,
        color: _COL.PRIMARY_BLACK,
        textAlign: "center",
    },
    priceT: {
        fontFamily: FONT.REGULAR,
        fontSize: 17,
        color: _COL.PRIMARY_BLACK,
        textAlign: "right",
    },
    totalT: {
        fontFamily: FONT.REGULAR,
        fontSize: 13,
        color: _COL.DARK_SEAFOAM_GREEN,
        textAlign: "right",
    },
    totalV: {
        backgroundColor: _COL.F8,
        justifyContent: "center",
        alignItems: "flex-end",
        alignSelf: "flex-end",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderTopStartRadius: _WIDTH * .5,
        borderBottomStartRadius: _WIDTH * .5,
    },
    totalV2: {
        backgroundColor: _COL.F8,
        justifyContent: "center",
        alignItems: "flex-end",
        alignSelf: "flex-end",
        paddingEnd: 15,
        paddingStart: 25,
        paddingVertical: 7,
        borderTopStartRadius: _WIDTH * .5,
        borderBottomStartRadius: _WIDTH * .5,
    },
    halfLine: {
        height: 1,
        borderRadius: 1,
        width: "70%",
        backgroundColor: _COL.E9,
        alignSelf: "baseline"
    },
    address: {
        fontFamily: FONT.REGULAR,
        fontSize: 13,
        color: _COL.PRIMARY_BLACK,
        width: "90%"
    },
    previewMap: {
        width: "100%",
        height: _HEIGHT * .25,
    },
    detailHeader: {
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: _COL.BLACK05,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: _COL.WHITE,
    },
    userImg: {
        borderRadius: 40,
        height: 40,
        width: 40,
        backgroundColor: _COL.DARK_SEAFOAM_GREEN,
        justifyContent: "center",
        alignItems: "center"
    },
    userImg3: {
        borderRadius: 40,
        height: 50,
        width: 50,
        backgroundColor: _COL.DARK_SEAFOAM_GREEN,
        justifyContent: "center",
        alignItems: "center",
        marginStart: "5%"
    },
    ratingCount: {
        fontFamily: FONT.REGULAR,
        fontSize: 14,
        color: _COL.PRIMARY_BLACK,
    },
    detailRow: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 15,
    },
    lineC: {
        width: 2,
        backgroundColor: _COL.EEE,
        marginHorizontal: "2%",
        height: "100%",
        paddingVertical: "7%",
    },
    lineR: {
        height: 2,
        backgroundColor: _COL.EEE,
        marginHorizontal: "7%",
        width: "90%"
    },
    titleTxt: {
        fontSize: 14,
        color: _COL.DARK_SEAFOAM_GREEN,
        fontFamily: FONT.SEMI_BOLD,
    },
    routeV: {
        backgroundColor: _COL.F8,
        alignItems: "center",
        padding: 10,
        marginVertical: 30,
        width: "90%"
    },
    mapCricle: {
        width: _WIDTH * .45,
        height: _WIDTH * .45,
        borderRadius: _WIDTH * .45,
        backgroundColor: _COL.WHITE,
        overflow: "hidden",
    },
    ovMain: {
        width: "100%",
        paddingTop: "5%",
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: _COL.WHITE,
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: 10,
    },
    oAddress: {
        fontFamily: FONT.MEDIUM,
        fontSize: 14,
        color: _COL.PRIMARY_BLACK,
        width: "90%"
    },
    ovUserV: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 7,
        paddingStart: 15,
        backgroundColor: _COL.F8,
        borderRadius: 7,
        marginVertical: "5%",
    },
    userImg2: {
        borderRadius: 30,
        height: 35,
        width: 35,
        backgroundColor: _COL.SECONDARY_DARK,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    callBtn: {
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        overflow: "hidden",
        backgroundColor: _COL.GREENISH_TEAL,
        paddingVertical: 0,
        margin: 0,
        marginVertical: 0,
        shadowColor: _COL.TRANSPARENT,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0
    },
    searchBar: {
        flex: 1,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: _COL.WHITE,
        shadowColor: _COL.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 10,
        zIndex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: 15,
        marginLeft: 5,
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 8,
        backgroundColor: _COL.ORANGE,
        margin: 5,
    },
    searchIn: {
        fontFamily: FONT.MEDIUM,
        fontSize: 15,
        color: _COL.PRIMARY_BLACK,
        width: "90%",
        flex: 1,
        padding: 10,
        height: "100%"
    },
    codeTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: 25,
        color: _COL.DARK_SEAFOAM_GREEN,
        paddingVertical: 15,
        paddingHorizontal: 35,
        textAlign: "center",
        backgroundColor: _COL.F8,
        borderRadius: 10,
        marginTop: "7%"
    },
    shareNote: {
        fontFamily: FONT.BOLD,
        fontSize: _WIDTH * .045,
        marginTop: "20%",
        color: _COL.BLACK,
        textAlign: "center",
    },
    shareNote2: {
        fontFamily: FONT.MEDIUM,
        fontSize: _WIDTH * .04,
        color: _COL.DARK_SEAFOAM_GREEN,
        textAlign: "center",
        marginTop: "4%"
    },
    promoCard: {
        width: "90%",
        borderRadius: 10,
        backgroundColor: _COL.WHITE,
        shadowColor: _COL.BLACK07,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .1,
        shadowRadius: 2,
        elevation: 10,
        marginBottom: "3%",
        padding: "5%",
    },
    promoTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: 25,
        color: _COL.DARK_SEAFOAM_GREEN
    },
    promoSubTxt: {
        fontFamily: FONT.SEMI_BOLD,
        fontSize: 14,
        color: _COL.PRIMARY_BLACK,
        marginVertical: 10
    },
    promoDate: {
        fontFamily: FONT.REGULAR,
        fontSize: 14,
        color: _COL.B5
    },
    fromIn: {
        fontFamily: FONT.MEDIUM,
        fontSize: 14,
        color: _COL.PRIMARY_BLACK,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: _COL.F8,
        width: _WIDTH * .825,
        marginRight: "3%",
    },
    deviderV: {
        width: "100%",
        marginVertical: "7%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    },
    devLine: {
        height: 1,
        backgroundColor: _COL.B5,
        width: "20%",
    },
    devTxt: {
        fontFamily: FONT.MEDIUM,
        fontSize: 16,
        color: _COL.B5,
        textAlign: "center"
    },
    smallLine: {
        position: "absolute",
        height: _WIDTH * .045,
        backgroundColor: _COL.BLACK03,
        right: _WIDTH * .5 - .75,
        width: 1.5
    },
    promoInV: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingStart: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: _COL.F1,
        marginHorizontal: "5%",
        flex: 1
    },
    promoIn: {
        fontFamily: FONT.MEDIUM,
        fontSize: 14,
        color: _COL.PRIMARY_BLACK,
        height: "100%",
        paddingHorizontal: 10,
        width: "80%",
    },
    sLoading: {
        padding: _WIDTH * .07,
        backgroundColor: _COL.WHITE,
        borderRadius: _WIDTH * .5,
        justifyContent: "center",
        alignItems: "center",
        aspectRatio: 1,
        zIndex: 200,
    },
    sLoadingTxt: {
        fontFamily: FONT.MEDIUM,
        fontSize: 12,
        color: _COL.DARK_SEAFOAM_GREEN,
        textAlign: "center",
        width: "100%",
        height: 20,
    }
});

export { mSty };