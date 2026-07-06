import { FC } from "react";

const Background: FC = () => {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[2.25rem_2.25rem] mask-[radial-gradient(ellipse_90%_70%_at_50%_0%,#000_45%,transparent_100%)] sm:bg-size-[3.5rem_3.5rem] sm:mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,#000_50%,transparent_100%)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"
    />
  );
};

export default Background;
