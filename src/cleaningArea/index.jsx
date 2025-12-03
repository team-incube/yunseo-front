import { Button } from "../components/Button";
import { Trash } from "../assets/Trash";
import { Select } from "../components/Select";
import { MapPin } from "../assets/MapPin";

export function CleaningAreaItem({ area }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border px-3 py-3">
      <div className="space-y-1">
        <p className="font-semibold text-text">{area.name}</p>
        <p className="text-sm text-text/80">{area.description}</p>
        <p className="text-xs text-text/60">
          담당자: {area.assignedStudentIds.length}명
        </p>
      </div>

      <Button className="!bg-card hover:!bg-primary/80 !px-2.5">
        <Trash />
      </Button>
    </div>
  );
}

export function CleaningAreaAssignItem({ area, students }) {
  const assignedStudents = students.filter((s) =>
    area.assignedStudentIds.includes(s.id)
  );

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4">
      <div className="flex items-center gap-1">
        <MapPin />
        <h3 className="text-lg font-semibold text-text">{area.name}</h3>
      </div>

      <div className="space-y-2">
        <p className="font-semibold text-text">담당 학생</p>

        {assignedStudents.length === 0 ? (
          <p className="text-sm text-text/60">배정된 학생이 없습니다</p>
        ) : (
          <ul className="space-y-1">
            {assignedStudents.map((s) => (
              <li key={s.id} className="text-sm text-text">
                {s.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="space-y-3">
        <label className="text-sm font-semibold text-text">학생 추가</label>
        <div className="mt-1 w-[110px]">
          <Select className="text-sm !bg-card">
            <option>학생 선택</option>
            {students.map((stu) => (
              <option key={stu.id} value={stu.id}>
                {stu.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </div>
  );
}