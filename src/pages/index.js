import Link from "next/link";
import Button from "@/ui/Button";
import { AddIcon } from "@/ui/Icons";
import ProtectedLayout from "@/features/auth/ProtectedLayout";

export default function Home() {
  return (
    <ProtectedLayout>
      <Link href="/game/create">
        <Button as="a" shadow color="limeGreen">
          <AddIcon />
          <span>Create Game</span>
        </Button>
      </Link>
    </ProtectedLayout>
  );
}
