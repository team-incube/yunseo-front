import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "../components/Button";
import { Shuffle } from "../assets/Shuffle";

export default function CleaningArea() {
  const [tab, setTab] = useState("areas");

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
          <p className="text-text">각 학생의 청소 담당 구역을 확인하고 관리합니다</p>
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
              <h2 className="text-xl font-bold text-text">청소구역별 담당자</h2>

              <Button className="flex items-center gap-2 bg-primary/80 hover:!bg-primary/70">
                <Shuffle className="w-4 h-4" />
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
            <h2 className="text-xl font-bold text-text">구역 관리</h2>
          </section>
        )}
      </main>
    </div>
  );
}
