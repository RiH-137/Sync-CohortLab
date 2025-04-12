import { UserPlus, FileEdit, Users, LineChart } from "lucide-react";

export const howItWorks = [
  {
    title: "Expert Setup",
    description: "Provide details about your field and skills for customized assistance",
    icon: <UserPlus className="w-8 h-8 text-primary" />,
  },
  {
    title: "Document Creation",
    description: "Develop ATS-compliant resumes and impactful cover letters",
    icon: <FileEdit className="w-8 h-8 text-primary" />,
  },
  {
    title: "Interview Simulation",
    description:
      "Train with AI-driven practice interviews designed for your specific position",
    icon: <Users className="w-8 h-8 text-primary" />,
  },
  {
    title: "Progress Monitoring",
    description: "Observe advancements with comprehensive performance analysis",
    icon: <LineChart className="w-8 h-8 text-primary" />,
  },
];