import { useParams } from "react-router-dom";
import AqualinaPage from "../pages/AqualinaPage";
import Specta from "../pages/Specta";
import ComingSoon from "./ComingSoon";

const ProjectRouteHandler = () => {
    const { id } = useParams();

  // Example logic to decide which component to render
  if (id === 'SPCTA') {
    return <Specta />;
  } else if (id === 'Aqualina') {
    return <AqualinaPage />;
  }else{
    return <ComingSoon />
  }
}

export default ProjectRouteHandler