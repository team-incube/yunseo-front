import { SignupInput, SignupSelect } from "./index";
import { Logo } from "../assets/Logo";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen bg-[#ffffff] flex flex-col justify-center items-center p-4">
      <div className="bg-[#f1f5f9] shadow-lg rounded-xl p-8 w-full max-w-md">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-[#3b82f6] rounded-full flex items-center justify-center">
            <Logo className="w-8 h-8 text-white" />
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#1e3a8a] mt-2">회원가입</h1>
        </div>

        <form className="space-y-4">
          <SignupInput
            id="name"
            label="이름"
            name="name"
            type="text"
            placeholder="이름을 입력하세요"
          />

          <div>
            <label className="block text-sm font-bold text-[#1e3a8a] mb-1">
              학년/반/번호
            </label>
            <div className="grid grid-cols-3 gap-3">
              <SignupSelect name="grade" defaultValue="">
                <option value="" disabled>
                  학년
                </option>
                <option value="1">1학년</option>
                <option value="2">2학년</option>
                <option value="3">3학년</option>
              </SignupSelect>

              <SignupSelect name="classnum" defaultValue="">
                <option value="" disabled>
                  반
                </option>
                <option value="1">1반</option>
                <option value="2">2반</option>
                <option value="3">3반</option>
                <option value="4">4반</option>
              </SignupSelect>

              <SignupSelect name="number" defaultValue="">
                <option value="" disabled>
                  번호
                </option>
                {Array.from({ length: 18 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}번
                  </option>
                ))}
              </SignupSelect>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-bold text-[#1e3a8a] mb-1"
            >
              이메일
            </label>
            <div className="flex gap-3">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                className="w-full border border-[#d1d5db] rounded-md px-3 py-2 bg-white
                           focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 transition"
              />
              <button
                type="button"
                className="flex-shrink-0 bg-[#3b82f6] text-white text-sm rounded-lg px-4 py-2 font-bold hover:bg-[#3b82f6]/90 transition-colors"
              >
                인증요청
              </button>
            </div>
          </div>

          <SignupInput
            id="password"
            label="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />

          <button
            type="submit"
            className="w-full bg-[#3b82f6] text-white rounded-lg px-4 py-2 font-bold hover:bg-[#3b82f6]/90 disabled:bg-gray-400 transition-colors focus:outline-none"
          >
            회원가입
          </button>
        </form>

        <div className="flex justify-center pt-4 mt-4 border-t border-gray-300">
          <div className="text-center">
            <span className="text-sm font-semibold text-[#1e3a8a]">
              이미 계정이 있으신가요?&nbsp;
            </span>
            <Link
              to="/login"
              className="text-sm font-semibold text-[#3b82f6] hover:text-[#3b82f6]/80 transition-colors"
            >
              로그인 하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
