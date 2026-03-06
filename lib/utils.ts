// @mostajs/ui — Utility functions
// Author: Dr Hamid MADANI drmdh@msn.com
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
