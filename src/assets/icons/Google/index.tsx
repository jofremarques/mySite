import { SvgProps } from '../types';

export const GoogleIcon = (props: SvgProps) => {
  const { width, height, style, className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} style={style} viewBox="0 0 14 14" fill="none">
        <path d="M13.5151 6.8031C13.5151 6.35019 13.4782 5.89728 13.4044 5.45361H7.14258V8.01394H10.73C10.5825 8.83657 10.1029 9.57602 9.40201 10.0382V11.7019H11.5416C12.7958 10.5465 13.5151 8.83657 13.5151 6.8031Z" fill="#4285F4" />
        <path d="M7.14275 13.3106C8.93186 13.3106 10.4443 12.7191 11.5417 11.7023L9.40219 10.0386C8.80275 10.4453 8.0373 10.6763 7.14275 10.6763C5.40898 10.6763 3.94266 9.50247 3.41699 7.93115H1.21289V9.65036C2.338 11.8964 4.63432 13.3106 7.14275 13.3106Z" fill="#34A853" />
        <path d="M3.41698 7.93097C3.14027 7.10834 3.14027 6.21176 3.41698 5.37989V3.66992H1.21253C0.262491 5.54626 0.262491 7.7646 1.21253 9.64094L3.41698 7.93097Z" fill="#FBBC04" />
        <path d="M7.14275 2.63467C8.09264 2.61619 9.00563 2.97667 9.68807 3.63293L11.5878 1.72885C10.3797 0.601201 8.79352 -0.0180839 7.14275 0.000402267C4.63432 0.000402267 2.338 1.42383 1.21289 3.6699L3.41699 5.38911C3.94266 3.80854 5.40898 2.63467 7.14275 2.63467Z" fill="#EA4335" />
      </svg>
    </div>
  );
};