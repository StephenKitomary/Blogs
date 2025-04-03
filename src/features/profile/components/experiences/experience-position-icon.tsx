import {
  BriefcaseBusinessIcon,
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
} from "lucide-react";

import { ExperiencePositionIcon } from "../../types/experiences";

export function ExperienceIcon({
  icon,
  size = 16,
}: {
  icon: ExperiencePositionIcon | undefined;
  size?: number;
}) {
  switch (icon) {
    case "code": {
      return (
        <CodeXmlIcon className="text-sky-500 dark:text-sky-400" size={size} />
      );
    }

    case "design": {
      return (
        <DraftingCompassIcon
          className="text-teal-500 dark:text-teal-400"
          size={size}
        />
      );
    }

    case "education": {
      return <GraduationCapIcon className="text-info-foreground" size={size} />;
    }

    case "business": {
      return (
        <BriefcaseBusinessIcon
          className="text-orange-500 dark:text-orange-400"
          size={size}
        />
      );
    }

    default: {
      return (
        <BriefcaseBusinessIcon
          className="text-orange-500 dark:text-orange-400"
          size={size}
        />
      );
    }
  }
}
