export const useInnerStyle = (isNear) => {
  const baseClass = `iw_inner`;
  const className = isNear ? `${baseClass}_near` : `${baseClass}`;

  const inserStyle = (address, cost) => `
    <div class="${baseClass}">
      <div class="${className}_address">${address}</div>
      <div class="${className}_cost">${cost}억</div>
    </div>
  `;
  return [inserStyle];
};
