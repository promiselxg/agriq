import Link from "next/link";

const Breadcrumb = ({ prevUrl, prevLabel, activeLabel }) => {
  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/dashboard">Home</Link>
          </li>
          {prevLabel && prevUrl && (
            <li>
              <Link href={prevUrl}>{prevLabel}</Link>
            </li>
          )}
          <li>{activeLabel}</li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
