import React, { createContext, useState } from "react";

type ThemeProviderProps = {
	children: React.ReactNode;
}

export const ThemeContext = createContext({
	isDarkTheme: false,
	toggleTheme: () => { }
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

	const toggleTheme = (): void => {
		setIsDarkTheme(!isDarkTheme);
	};

	return (
		<ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;