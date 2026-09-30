import brandingData from '../../../components/Data/BloginnerData';

export function generateStaticParams() {
  return brandingData.map(({ id }) => ({ id: String(id) }));
}

export default function BlogLayout({ children }) {
  return children;
}