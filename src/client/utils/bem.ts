export function bemClassNameFactory(block: any) {
  return (element: any, modificator: any) => {
    if (!element) return block;
    const baseName = `${block}__${element}`;
    return modificator ? `${baseName} ${baseName}_${modificator}` : baseName;
  };
}
