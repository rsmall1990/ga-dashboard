import VisitorsCSS from "./Visitors.module.css";
import VisitorsBoxCSS from "./Visitors.module.css"

function Visitors() {
  return (
    <div className={VisitorsCSS.Visitors}>
      <h4>Website Visitors</h4>
      <h2>821</h2>
      <div className={VisitorsBoxCSS.VisitorsBox}></div>
    </div>
  );
}

export default Visitors;