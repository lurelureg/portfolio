import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectView from "./pages/ProjectView";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react"

function App() {
    return (
        <>
            <Navbar />
            <Flex direction="column" grow={1}>
                <Routes>
                    <Route path="/" element={<Projects />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/project/:projectId"
                        element={<ProjectView />}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Flex>
            <ScrollToTop />
            <Analytics/>
            <Footer />
        </>
    );
}

export default App;
