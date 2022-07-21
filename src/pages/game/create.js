import ProtectedLayout from "@/features/auth/ProtectedLayout";

export default function CreateGame() {
  return (
    <ProtectedLayout back="/" title="Create Game">
      <h1>Create Game</h1>
    </ProtectedLayout>
  );
}
