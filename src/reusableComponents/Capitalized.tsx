import React from "react";

export function capitalized(text: string) {
    return text.toString().replace(/\b\w/g, l => l.toUpperCase())
}