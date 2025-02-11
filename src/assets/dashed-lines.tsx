import { JSX, SVGProps, memo } from "react";

export const DashedLineLeft = memo(
  (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        width="41"
        height="175"
        viewBox="0 0 41 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 66.5H5.5C12.1274 66.5 17.5 61.1274 17.5 54.5V13C17.5 6.37258 22.8726 1 29.5 1H40"
          stroke="url(#paint0_linear_3_4)"
          strokeDasharray="6 6"
        />
        <path
          d="M0.5 81H5.71519C12.3426 81 17.7152 86.3726 17.7152 93V162C17.7152 168.627 23.0878 174 29.7152 174H40.5"
          stroke="url(#paint1_linear_3_4)"
          strokeDasharray="6 6"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_4"
            x1="44"
            y1="67"
            x2="-0.5"
            y2="67"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BFDBFE" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3_4"
            x1="0.5"
            y1="81"
            x2="45"
            y2="81"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D4ED8" />
            <stop offset="1" stopColor="#BFDBFE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
DashedLineLeft.displayName = "DashedLineLeft";

export const DashedLineRight = memo(
  (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        width="228"
        height="48"
        viewBox="0 0 228 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="220.5"
          cy="41"
          r="6"
          fill="#BFDBFE"
          stroke="#1D4ED8"
          strokeWidth="2"
        />
        <path
          d="M220.5 40.5003V13C220.5 6.37258 215.127 1 208.5 1H0.5"
          stroke="url(#paint0_linear_3_4)"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_3_4"
            x1="0.5"
            y1="1"
            x2="220.5"
            y2="0.999998"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1D4ED8" />
            <stop offset="1" stopColor="#BFDBFE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
DashedLineRight.displayName = "DashedLineRight";

export const DashedLine = memo(
  (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
    return (
      <svg
        {...props}
        width="80"
        height="2"
        viewBox="0 0 80 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 1L79.5 1.00001"
          stroke="url(#paint0_linear_57_230)"
          strokeDasharray="4 4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_57_230"
            x1="0.5"
            y1="1.5"
            x2="79.5"
            y2="1.50001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#BFDBFE" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
);
DashedLine.displayName = "DashedLine";
