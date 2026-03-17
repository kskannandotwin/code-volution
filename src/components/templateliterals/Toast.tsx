/* 
Positin prop can be one of the following:
- 'top-left'
- 'top-right'
- 'bottom-left'
- 'bottom-right'
- 'top-center'
- 'bottom-center'
- 'center'
- 'left-center'
- 'right-center'
*/

type HorizontalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${VerticalPosition}-${HorizontalPosition}`, "center-center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return (
    <div>
      <h2>Toast notification position - {position}</h2>
    </div>
  );
};
