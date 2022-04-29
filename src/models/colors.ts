export const ColorPallete: Colors = {
    green: {
        name: "green",
        hex: "#2EB228"
    },
    yellow: {
        name: "yellow",
        hex: "#F2EF18"
    },
    orange: {
        name: "orange",
        hex: "#E86B2A"
    },
    red: {
        name: "red",
        hex: "#DB3C33"
    },
    blue: {
        name: "blue",
        hex: "#0d47a1",
    }
}


export interface Colors {
    red: Color,
    orange: Color,
    yellow: Color,
    green: Color,
    blue: Color,
}

export interface Color {
    hex: string
    name: string,
}