export const cssClassName = (classes: string[]) => {
  return classes.filter(Boolean).join(' ');
}

export const conditionalClass = (condition: boolean, className: string | string[], defaultClass: string | string[] = '') => {
  const classes = Array.isArray(className) ? cssClassName(className) : className;
  const defaultClasses = Array.isArray(defaultClass) ? cssClassName(defaultClass) : defaultClass;
  return condition ? classes : defaultClasses;
}