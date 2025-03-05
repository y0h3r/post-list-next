import { Button, Input, Card } from "@/components";
import { redirect } from "next/navigation";

export function generateMetadata() {
  return {
    title: 'Create account',
  }
}

async function createUser(formData: FormData): Promise<void> {
  'use server';
  
  const email = formData.get('email');
  const name = formData.get('name');
  const password = formData.get('password');
  
  console.log('Server received:', { email, name, password });
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  redirect('/dashboard');
}

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card.Card className="w-full max-w-md p-4 shadow-lg">
        <Card.CardHeader>
          <Card.CardTitle className="text-xl text-center">Create an Account</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent>
          <form action={createUser} method="post" className="space-y-4" autoComplete="off">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <Input 
                id="email"
                name="email"
                type="email" 
                className="w-full mt-1" 
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <Input 
                id="name"
                name="name"
                type="text" 
                className="w-full mt-1" 
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
              <Input 
                id="password"
                name="password"
                type="password" 
                className="w-full mt-1" 
                autoComplete="new-password"
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full text-gray-700">
              Sign Up
            </Button>
          </form>
        </Card.CardContent>
      </Card.Card>
    </div>
  );
}
