export const Theme = {
  Light: "light",
  Dark: "dark",
  System: "system",
} as const;

export type Theme = typeof Theme[keyof typeof Theme];
