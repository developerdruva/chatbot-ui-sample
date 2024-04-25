const initialValues = {
    themeMode: true
}
export const ThemeModeReducer = (state = initialValues, action) => {
    switch (action.type) {
        case 'THEME_MODE':
            return {
                ...state,
                themeMode: action.payload
            }
        default:
            return state
    }
}