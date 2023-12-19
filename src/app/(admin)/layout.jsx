export const metadata = {
  title: "Agriq | Login",
  description:
    "A leading agriculture company helping to improve global food security by enabling millions of farmers to make better use of available resources.",
};

export default function LoginLayout({ children }) {
  return (
    <>
      <div className="w-full bg-[red]">{children}</div>
    </>
  );
}
