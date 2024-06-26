// src/pages/TemplatePreview.js

import React from "react";
import { useParams } from "react-router-dom";
import Temp1 from "../components/templates/Temp1";
import Temp2 from "../components/templates/Temp2";
import Temp3 from "../components/templates/Temp3";
import Temp4 from "../components/templates/Temp4";
import Temp5 from "../components/templates/Temp5";
import Temp6 from "../components/templates/Temp6";
import Temp7 from "../components/templates/Temp7";
import Temp8 from "../components/templates/Temp8";
const componentsMap = {
  Temp1: Temp1,
  Temp2: Temp2,
  Temp3: Temp3,
  Temp4: Temp4,
  Temp5: Temp5,
  Temp6: Temp6,
  Temp7: Temp7,
  Temp8: Temp8,
};

const TemplatePreview = () => {
  const { templateId } = useParams();
  const SelectedComponent =
    componentsMap[templateId] || (() => <div>Component not found</div>);

  return (
    <div class="relative h-full w-full bg-white">
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="relative z-10 mt-10 flex justify-center">
        <SelectedComponent />
      </div>
    </div>
  );
};

export default TemplatePreview;
