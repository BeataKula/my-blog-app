import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper, Title } from "./components/AppStyles";
import "./App.css";

import AboutMePage from "./pages/AboutMePage";
import WelcomePage from "./pages/WelcomePage";
import ContactPage from "./pages/ContactPage";
import PostsListPage from "./pages/PostsListPage";
import LeftPanel from "./pages/LeftPanel";
import NoPage from "./pages/NoPage";

type AppState = {
    isActive: boolean;
};

class App extends Component<{}, AppState> {
    state = {
        isActive: true,
    };

    render() {
        const isActive = this.state.isActive;
        return (
            <>
                <header>
                    <Title>Blog Beaty</Title>
                </header>
                <Wrapper>
                    <BrowserRouter>
                        <LeftPanel />
                        <Routes>
                            <Route
                                path="/Welcome"
                                element={<WelcomePage isActive={isActive} />}
                            />
                            <Route
                                path="/AboutMe"
                                element={<AboutMePage isActive={isActive} />}
                            />
                            <Route path="/Blog" element={<PostsListPage />} />
                            <Route
                                path="/Contact"
                                element={<ContactPage isActive={isActive} />}
                            />
                            <Route
                                path="*"
                                element={<NoPage isActive={isActive} />}
                            />
                        </Routes>
                    </BrowserRouter>
                </Wrapper>
            </>
        );
    }
}
export default App;
