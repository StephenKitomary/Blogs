import { Globe } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

export function Instagram() {
  return (
    <Button variant="outline" size="icon" asChild>
      <a href="https://www.instagram.com/teksafari/" target="_blank" rel="noopener noreferrer">
        <Globe />
        <span className="sr-only">Instagram</span>
      </a>
    </Button>
  );
}
