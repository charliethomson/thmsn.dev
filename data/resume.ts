import { idify, WithId } from "~/util/idify";

export interface Resume {
  skills: WithId<ResumeEntry>[];
  expertise: WithId<ResumeEntry>[];
  work: WithId<Work>[];
}

export interface ResumeEntry {
  name: string;
  items: WithId<string>[];
}

export interface Work {
  company: Company;
  position: string;
  dates: string;
}

export interface Company {
  name: string;
  link: string;
}

export const resume: Resume = {
  skills: idify([
    {
      name: "frontend",
      items: idify(["react", "vuejs", "svelte", "bootstrap"]),
    },
    {
      name: "backend",
      items: idify(["actix-web", "rocket", "django", "expressjs", "asp.net"]),
    },
    {
      name: "database",
      items: idify(["mysql", "mongodb", "postgresql", "mariadb"]),
    },
    {
      name: "systems",
      items: idify(["rust", "c#", "c", "c++", "go"]),
    },
    {
      name: "scripting",
      items: idify(["python", "shell", "typescript", "javascript", "dart"]),
    },
    {
      name: "platforms",
      items: idify(["windows", "macos", "linux", "web"]),
    },
  ]),
  expertise: idify([
    {
      name: "backend",
      items: idify([
        "design strongly typed restful crud apis",
        "implement efficient algorithms for data transfer and transform",
        "create data flow designs",
        "implement comprehensive unit testing",
        "design applications that adhere to the standards of modern security",
        "identify real-world problems and implement robust technical solutions",
      ]),
    },
    {
      name: "frontend",
      items: idify([
        "build responsive, asynchronous web applications interfacing with public and private apis",
        "utilize iaas and paas service providers to host web applications",
        "create and maintain codebases using component based frameworks",
        "collaborate with other developers on open source codebases",
        "familiarity with agile development principles",
      ]),
    },
  ]),
  work: idify([
    {
      company: {
        name: "co-op solutions",
        link: "https://www.co-opfs.org/",
      },
      position: "application developer I",
      dates: "09/2021-present",
    },
    {
      company: {
        name: "arcane software",
        link: "https://arcane.software/",
      },
      position: "web developer",
      dates: "05/2021-present",
    },
    {
      company: {
        name: "ubreakifix",
        link: "https://www.ubreakifix.com",
      },
      position: "repair technician",
      dates: "01/2020-09/2021",
    },
  ]),
};
