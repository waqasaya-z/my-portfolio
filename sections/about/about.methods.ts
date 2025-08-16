import { IAboutTranslation } from "@/types/app.types";

interface CodeGeneratorOptions {
  isRTL?: boolean;
  indentSize?: number;
}

export const generateCodeString = (
  data: IAboutTranslation,
  options: CodeGeneratorOptions = {}
): string => {
  const { isRTL = false, indentSize = 2 } = options;

  const indent = (level: number) => {
    const spaces = "·".repeat(level * indentSize);
    return isRTL ? spaces : spaces;
  };

  const className = data.class || "Waqas Ayaz";
  const constructorData = data.constructor || {
    name: "Waqas Ayaz",
    email: "developer@waqasayaz.com"
  };

  const formatArrayItem = (
    item: Record<string, string> | string,
    indentLevel: number
  ) => {
    if (typeof item === "string") {
      return `${indent(indentLevel)}'${item}'`;
    }

    const [key, value] = Object.entries(item)[0];
    if (isRTL) {
      return `${indent(indentLevel)}{ '${value}' : '${key}' }`;
    } else {
      return `${indent(indentLevel)}{ '${key}' : '${value}' }`;
    }
  };

  const workExperienceItems = data.workExperience
    .map((item) => formatArrayItem(item, 3))
    .join("\n");

  const educationItems = data.education
    .map((item) => formatArrayItem(item, 3))
    .join("\n");

  const skillsItems = data.skills.map((skill) => `'${skill}'`).join(", ");

  const formattedSkills =
    skillsItems.length > 100
      ? skillsItems.replace(/(.{1,100}),/g, "$1,\n" + indent(3))
      : skillsItems;

  const codeString = `class ${className} {
${indent(1)}constructor() {
${indent(2)}this.name = '${constructorData.name}'
${indent(2)}this.email = '${constructorData.email}'
${indent(1)}}
${indent(1)}workExperience() {
${indent(2)}return [
${workExperienceItems}
${indent(2)}]
${indent(1)}}
${indent(1)}education() {
${indent(2)}return [
${educationItems}
${indent(2)}]
${indent(1)}}
${indent(1)}skills() {
${indent(2)}return [ ${formattedSkills}]
${indent(1)}}
}`;

  return codeString;
};
