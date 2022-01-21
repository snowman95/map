import icon2x from "images/hexagon/2x.png";
import icon3x from "images/hexagon/3x.png";

export const useInnerStyle = (isNear) => {
  const icon = isNear ? icon3x : icon2x;
  const baseClass = `iw_inner`;
  const className = isNear ? `${baseClass}_near` : `${baseClass}`;

  const inserStyle = (address, cost) => `
    <div class="${className}">
      <div class="${baseClass}_image flex_center prevent_click" style="background-image: url('${icon}')">
        <div class="${className}_address ellipsis_line">${address}</div>
        <div class="${className}_cost">${cost}억</div>
      </div>
    </div>
  `;
  return [inserStyle];
};
