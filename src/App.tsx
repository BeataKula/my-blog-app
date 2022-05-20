import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Wrapper, Title } from "./components/AppStyles";

import AboutMePage from "./pages/AboutMePage";
import WelcomePage from "./pages/WelcomePage";
import ContactPage from "./pages/ContactPage";
import PostList from "./pages/PostList";
import LeftPanel from "./pages/LeftPanel";
import NoPage from "./pages/NoPage";

class App extends Component<{}, {}> {
    render() {
        return (
            <>
                <header>
                    <Title>Blog Beaty 1</Title>
                </header>
                <Wrapper>
                    <BrowserRouter>
                        <LeftPanel />
                        <Routes>
                            <Route path="/Welcome" element={<WelcomePage />} />
                            <Route path="/AboutMe" element={<AboutMePage />} />
                            <Route path="/Blog" element={<PostList />} />
                            <Route path="/Contact" element={<ContactPage />} />
                            <Route path="*" element={<NoPage />} />
                        </Routes>
                    </BrowserRouter>
                </Wrapper>
            </>
        );
    }
}

export default App;
