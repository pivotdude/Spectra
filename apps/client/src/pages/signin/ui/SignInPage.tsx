import { Layout } from '@/widgets/Layout/ui/Layout';
import { Navbar } from '@/widgets/Navbar/ui/Navbar';
import { SignInForm } from '@/widgets/SignInForm';

export function SignInPage() {
  return (
    <Layout>
      <div className="px-2 md:px-8 lg:px-40 w-full h-[900px]">
        <Navbar />
        <div className="flex w-full h-full items-center justify-center">
          <SignInForm />
        </div>
      </div>
    </Layout>
  );
}
