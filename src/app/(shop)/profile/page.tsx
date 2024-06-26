import { auth } from "@/auth.config";
import { Title } from "@/components";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil');
    redirect("/");
  }

  return (
    <div>
      <div className="min-h-screen mt-5 mb-5 bg-gray-100 flex flex-col items-center justify-center dark:bg-zinc-800">
      <div className="bg-white shadow-md rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 dark:bg-zinc-900">
        <Title title="Perfil" />
        <Separator />
        <div className="flex flex-col items-center mt-4">
          <div className="mb-4">
            {session.user.image ? (
              <Image
                className="rounded-full"
                src={session.user.image}
                alt={`${session.user.name}'s profile picture`}
                width={150}
                height={150}
              />
              
            ) : (
              <div className="bg-gray-200 h-32 w-32 rounded-full flex items-center justify-center dark:bg-zinc-700">
                <span className="text-gray-500 dark:text-white">Sin Imagen</span>
              </div>
            )}
          </div>
          <div className="text-center mb-5">
            <p className="text-xl font-semibold">{session.user.name}</p>
            <p className="text-gray-600">{session.user.email}</p>
          </div>     
        </div>
      </div>
    </div>

    </div>
  );
}
