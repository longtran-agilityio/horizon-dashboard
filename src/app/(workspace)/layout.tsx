import { Suspense } from 'react';

// Layouts
import { Header, Navbar, Footer } from '@/layouts';

// Config
import { auth } from '@/auth.config';

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  const isAuthenticated = !!(await auth())?.user;

  return (
    <div className="flex min-h-screen">
      <div className="hidden xl:block">
        <Navbar isAuthenticated={isAuthenticated} />
      </div>
      <div className="flex-grow flex flex-col w-full items-center pt-4 md:pt-[50px] px-2 md:px-5 gap-5">
        <Suspense>
          <Header isAuthenticated={isAuthenticated} />
        </Suspense>
        <main className="flex-grow flex flex-col w-full max-w-screen-5xl h-auto bg-gray dark:bg-indigo-dark gap-[30px] px-0">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
