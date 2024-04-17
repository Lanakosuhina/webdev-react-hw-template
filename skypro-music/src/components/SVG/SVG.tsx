type SVGType = {
  className: string;
  icon: string;
}
export default function SVG({ className, icon }: SVGType) {

  return (
    <svg
      className={className}>
        <use xlinkHref={`/img/icon/sprite.svg#${icon}`}></use>
    </svg >
  );
}