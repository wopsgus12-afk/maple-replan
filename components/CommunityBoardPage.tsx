"use client";

import { Suspense } from "react";
import { AppQueryProvider } from "@/hooks/useClientAppQuery";
import { BoardView } from "@/components/BoardView";
import { ToastProvider } from "@/components/Toast";
import type { BoardKind } from "@/lib/board";

type Props = {
  kind: BoardKind;
  basePath: string;
};

function BoardInner({ kind, basePath }: Props) {
  return <BoardView kind={kind} basePath={basePath} />;
}

export function CommunityBoardPage({ kind, basePath }: Props) {
  return (
    <ToastProvider>
      <AppQueryProvider>
        <Suspense
          fallback={
            <p className="text-sm text-maple-muted">게시판 불러오는 중…</p>
          }
        >
          <BoardInner kind={kind} basePath={basePath} />
        </Suspense>
      </AppQueryProvider>
    </ToastProvider>
  );
}
