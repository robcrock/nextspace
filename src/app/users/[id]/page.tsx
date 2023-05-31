import { prisma } from "@/lib/prisma";
import { Metadata } from "next";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profiles of ${user?.name ?? "Unknown"}` };
}

export default async function UserProfile({ params }: IProps) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};
  return (
    <div>
      <h1>{name}</h1>
      <img src={image ?? "/mememan.webp"} alt={`${name}'s profile`} />
      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
}
