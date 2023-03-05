import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @typedef {import("clsx").ClassValue} ClassValue
 */

/**
 * This utility function uses "clsx" for allowing objects as props in "twMerge" as they
 * are'nt supported in "twMerge" for performence issues
 *
 */
export const clsxm = (...classes: ClassValue[]) => twMerge(clsx(...classes));
