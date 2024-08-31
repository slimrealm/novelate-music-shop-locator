interface SmallLineWithCommasProps {
  string: string;
  needsComma: boolean;
}

const ShopListSmallLineWithCommas: React.FC<SmallLineWithCommasProps> = ({ string, needsComma }) => {
  if (needsComma) {
    return <span>{string}, </span>;
  } else {
    return <span>{string}</span>;
  }
};

export default ShopListSmallLineWithCommas;
