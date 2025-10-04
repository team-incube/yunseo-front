import { useState, useEffect } from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-background flex flex-col justify-center items-center p-4">
      <div className="bg-card shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-8 h-8 text-white"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
          </div>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text mt-2">회원가입</h1>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-bold text-text mb-1"
            >
              이름
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              className="w-full border border-border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-text mb-1">
              학년/반/번호
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative">
                <select
                  name="grade"
                  className="appearance-none w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
                >
                 <option value="" disabled>
                    학년
                  </option>
                  <option value="1">1학년</option>
                  <option value="2">2학년</option>
                  <option value="3">3학년</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </div>

              <div className="relative">
                <select
                  name="classnum"
                  className="appearance-none w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
                >
                  <option value="" disabled>
                    반
                  </option>
                  <option value="1">1반</option>
                  <option value="2">2반</option>
                  <option value="3">3반</option>
                  <option value="4">4반</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </div>

              <div className="relative">
                <select
                  name="number"
                  className="appearance-none w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
                >
                  <option value="" disabled>
                    번호
                  </option>
                  {Array.from({ length: 18 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}번
                    </option>
                  ))}
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-text mb-1"
            >
              이메일
            </label>
            <div className="flex gap-3">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
              />
              <button
                type="button"
                className="flex-shrink-0 bg-primary text-white text-sm rounded-lg px-4 py-2 font-bold hover:bg-primary/90 disabled:bg-border transition-colors"
              >
                인증요청
              </button>
            </div>
          </div>
          {/*기능 구현 후 인증번호 입력칸 만들기*/}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-bold text-text mb-1"
            >
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>
          <div>
            <label
              htmlFor="confirm"
              className="block text-sm font-bold text-text mb-1"
            >
              비밀번호 확인
            </label>
            <input
              id="confirm"
              type="password"
              name="confirm"
              placeholder="비밀번호를 다시 입력하세요"
              className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg px-4 py-2 font-bold hover:bg-primary/90 disabled:bg-gray-400 transition-colors focus:outline-none"
          >
            회원가입
          </button>
        </form>
        <div className="flex justify-center pt-4 mt-4 border-t border-gray-300">
          <div className="text-center">
            <span className="text-sm font-semibold text-text">
              이미 계정이 있으신가요?&nbsp;
            </span>
            <a
              href="/"
              className="text-sm font-semibold text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              로그인하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
