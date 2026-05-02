import { IconCheckCircleFill, IconQuestionCircleFill } from "../icons/magicoon/filled";

function Table({ children, className }) {
  return (
    <div role="table" className={className}>
      {children}
    </div>
  );
}
function Header({ children }) {
  return <h4 className="bg-primary-50 px-3 py-4 rounded-lg text-label-sm text-neutral-800 lg:text-label-md">{children}</h4>;
}
function Content({ children }) {
  return <div className="*:flex *:items-center *:gap-x-4 *:p-4 *:border-neutral-100 *:border-b">{children}</div>;
}
function Row({ children }) {
  return <div>{children}</div>;
}
function FeatureName({ children }) {
  return (
    <div className="flex items-center gap-x-1 w-a min-w-2/5 lg:min-w-80.5">
      <span className="text-label-2xsm text-neutral-600 lg:text-label-sm">{children}</span>
      <IconQuestionCircleFill className="size-4 lg:size-6 text-neutral-200 shrink-0" />
    </div>
  );
}
function FeatureValue({ children }) {
  return <div className="items-center grid grid-cols-4 *:mx-auto w-full lg:*:w-22.5 h-9.5 text-neutral-600 text-center">{children}</div>;
}
function Text({ children }) {
  return <span className="text-body-2xsm lg:text-body-md">{children}</span>;
}
function TextBlue({ children }) {
  return <span className="text-body-2xsm text-primary-600 lg:text-body-md">{children}</span>;
}
function DashedLine() {
  return <span className="text-headline-xsm lg:text-headline-md leading-2">-</span>;
}
function IconCheckCircle() {
  return <IconCheckCircleFill className="size-4 lg:size-6 text-primary-500" />;
}

Table.Header = Header;
Table.Content = Content;
Table.Row = Row;
Table.FeatureName = FeatureName;
Table.FeatureValue = FeatureValue;
Table.Text = Text;
Table.TextBlue = TextBlue;
Table.DashedLine = DashedLine;
Table.IconCheckCircle = IconCheckCircle;
export default Table;
