export type Entry = {
    entryKey: string,
    entryType: "project" | "resume" | "education",
    title: string,
    category: string,
    date?: string,
    description: string,
    isExpanded?: boolean
}