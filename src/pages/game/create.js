import ProtectedLayout from "@/features/auth/ProtectedLayout";
import Board from "@/features/board/Board";

export default function CreateGame() {
  return (
    <ProtectedLayout back="/" title="Create Game">
      <Board />
    </ProtectedLayout>
  );
}
