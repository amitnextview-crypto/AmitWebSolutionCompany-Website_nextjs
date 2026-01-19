
import './globals.css';

export const metadata = {
  title: 'Amit Web Solutions',
  description: 'Premium animated websites that convert visitors into customers'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
