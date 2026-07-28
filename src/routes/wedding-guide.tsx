import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/wedding-guide")({
  component: WeddingGuideLayout,
});

function WeddingGuideLayout() {
  return <Outlet />;
}
