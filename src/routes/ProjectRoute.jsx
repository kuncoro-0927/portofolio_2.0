import DetailProject from "../pages/DetailProject";
import { Routes, Route } from "react-router-dom";
function ProjectRoute() {
  return (
    <>
      <Routes>
        <Route path="/project/:slug" element={<DetailProject />} />
      </Routes>
    </>
  );
}

export default ProjectRoute;
