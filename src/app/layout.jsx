import '../styles/globals.css';
import QueryProvider from '../providers/QueryProvider';
import ThemeProvider from '../providers/ThemeProvider';
import FloatingSnackbar from '../components/layout/FloatingSnackbar';

export const metadata = {
  title: 'OXY12',
  description: 'OXY12 is a cutting-edge web application built with Next.js, designed to provide users with an exceptional experience. With its sleek design and powerful features, OXY12 is the ultimate platform for all your needs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <ThemeProvider>
            {children}
            <FloatingSnackbar />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
