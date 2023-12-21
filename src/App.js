import { Routes, Route, BrowserRouter } from "react-router-dom";

// import styles from "./App.module.css";
import Home from "./pages/home";
import NotFound from "./pages/notFound";
import Contact from "./pages/contact";
import ScrollToTop from "./components/ScrollToTop";
import Work from "./pages/work";

export default function App() {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route
						path={"/home"}
						element={<Home />}
					/>
					<Route
						path={"/"}
						element={<Home />}
					/>
					<Route
						path={"/work"}
						element={<Work />}
					/>
					<Route
						path={"/contact"}
						element={<Contact />}
					/>
					<Route
						path={"*"}
						element={<NotFound />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
