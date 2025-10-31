import React from 'react';
import { icons } from 'lucide-react';

/**
 * Renders a Lucide icon component dynamically based on its string name.
 * @param {object} props
 * @param {string} props.name - The PascalCase name of the icon (e.g., 'Home', 'Activity').
 * @param {string} [props.color] - The color of the icon.
 * @param {number} [props.size] - The size of the icon.
 * @returns {JSX.Element | null}
 */
const DynamicIcon = ({ name, color, size }) => {
  // Look up the component using the name string
  const LucideIcon = icons[name];

  // If the icon exists, render it and pass along any props
  if (LucideIcon) {
    return <LucideIcon color={color} size={size} />;
  }

  // Return null or a placeholder if the icon name is invalid
  return null;
};

export default DynamicIcon;
