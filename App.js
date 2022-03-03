import { SafeAreaView } from "react-native";
import { NativeRouter, Routes, Route } from "react-router-native";
// Pages
import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import Profile from "./pages/Profile";

export default function App() {
	return (
		<SafeAreaView>
			<NativeRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
          <Route exact path="/timeline" element={<Timeline />} />
          <Route exact path="/profile" element={<Profile />} />
				</Routes>
			</NativeRouter>
		</SafeAreaView>
	);
}