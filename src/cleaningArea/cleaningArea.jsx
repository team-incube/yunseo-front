import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/Button";
import { Shuffle } from "../assets/Shuffle";
import { Input } from "../components/Input";
import { CleaningAreaItem } from "./index";

export default function CleaningArea() {
  const [tab, setTab] = useState("areas");
  //예시 데이터
  const cleaningAreas = [
    {
      id: 1,
      name: "복도 1층",
      description: "1층 중앙 복도 청소",
      assignedStudent: 0,
    },
    {
      id: 2,
      name: "계단",
      description: "1~2층 계단 청소",
      assignedStudent: 1,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-text hover:text-primary transition-colors"
          >
            <span className="text-lg">←</span>
            대시보드로 돌아가기
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-text mb-2">청소구역 확인</h1>
          <p className="text-text">
            각 학생의 청소 담당 구역을 확인하고 관리합니다
          </p>
        </div>

        <div className="grid grid-cols-3 rounded-md bg-card p-1">
          {[
            { key: "areas", label: "청소구역별" },
            { key: "students", label: "학생별" },
            { key: "manage", label: "구역 관리" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setTab(item.key)}
              className={`text-sm font-medium py-2 rounded-[6px] transition ${
                tab === item.key
                  ? "bg-white text-text shadow-sm font-semibold"
                  : "text-text font-semibold"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {tab === "areas" && (
          <section className="space-y-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-text">
                  청소구역별 담당자
                </h2>
                <span className="inline-flex items-center rounded-md bg-primary px-3 py-1 text-xs font-semibold text-text">
                  {cleaningAreas.length}개 구역
                </span>
              </div>

              <Button className="flex items-center gap-2 bg-primary/80 hover:!bg-primary/70">
                <Shuffle className="w-4 h-4 mr-2" />
                랜덤 배정
              </Button>
            </div>
          </section>
        )}

        {tab === "students" && (
          <section>
            <h2 className="text-xl font-bold text-text">학생별 청소구역</h2>
          </section>
        )}

        {tab === "manage" && (
          <section>
            <h2 className="text-xl font-bold text-text mb-3">청소구역 관리</h2>
            <div className="rounded-lg border border-border bg-card shadow-md">
              <div className="border-border px-4 py-3">
                <p className="font-semibold text-text mt-2 ml-2">
                  새 청소구역 추가
                </p>
              </div>
              <div className="px-4 py-4 space-y-4 mr-2 ml-2">
                <label
                  htmlFor="areaName"
                  className="block text-sm font-semibold mb-1 text-text"
                >
                  구역 이름
                </label>
                <Input
                  id="areaName"
                  name="areaName"
                  type="text"
                  placeholder="예: 교무실"
                  label=""
                  className="!bg-card"
                />
                <label
                  htmlFor="areaDescription"
                  className="block text-sm font-semibold mb-1 text-text"
                >
                  구역 설명
                </label>
                <Input
                  id="areaDescription"
                  name="areaDescription"
                  type="text"
                  placeholder="예: 교무실 청소 및 정리"
                  className="!bg-card "
                />
                <Button className="w-full">+ 구역 추가</Button>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-border bg-card shadow-md">
              <div className="border-border px-4 py-3">
                <p className="font-semibold text-text mt-2 ml-2">
                  기존 청소 구역
                </p>
              </div>
              <div className="px-4 py-4 space-y-2">
                {cleaningAreas.map((area) => (
                  <CleaningAreaItem key={area.id} area={area} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
