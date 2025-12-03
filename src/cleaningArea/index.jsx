import { Button } from "../components/Button";
import Trash from "../assets/Trash";

export function CleaningAreaItem({ area }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border px-3 py-3">
      <div className="space-y-1">
        <p className="font-semibold text-text">{area.name}</p>
        <p className="text-sm text-text/80">{area.description}</p>
        <p className="text-xs text-text/60">담당자: {area.assignedStudent}명</p>
      </div>

      <Button className="!bg-card hover:!bg-primary/80 !px-2.5">
        <Trash />
      </Button>
    </div>
  );
}
