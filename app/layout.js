import './globals.css';

export const metadata = {
  title: "AmitWebSolution – High Converting Business Websites",
  description:
    "Premium website designer & developer building fast, SEO-optimized websites for businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="mBt9pJk7MgShnY53Su_xOzZQXQBuunHWQ_VgWeEs_ZE"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
