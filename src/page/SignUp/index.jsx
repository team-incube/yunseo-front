import { useState, useEffect } from "react";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    grade: "",
    classnum: "",
    number: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newError = {};
    const emailRegex = /^[A-Za-z0-9._%+-]+@gsm\.hs\.kr$/;
    const pwRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;

    if (!form.name) newError.name = "이름을 입력해 주세요";
    if (!form.grade) newError.grade = "학년을 선택해 주세요";
    if (!form.classnum) newError.classnum = "반을 선택해 주세요";
    if (!form.number) newError.number = "번호를 선택해 주세요";
    if (!form.email) {
      newError.email = "이메일을 입력해 주세요";
    } else if (!emailRegex.test(form.email)) {
      newError.email = "@gsm.hs.kr만 사용 가능합니다";
    }
    if (!form.password) {
      newError.password = "비밀번호를 입력해 주세요";
    } else if (!pwRegex.test(form.password)) {
      newError.password =
        "영문, 숫자, 특수문자를 포함한 8자 이상 비밀번호를 입력해 주세요";
    }

    setErrors(newError);
    return Object.keys(newError).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      //서버로 데이터 전송
      console.log("데이터:", form);
      setMessage("회원가입이 완료되었습니다.");
    } else {
      setMessage("");
    }
  };

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
        <form className="space-y-4" onSubmit={handleSubmit}>
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
              value={form.name}
              onChange={handleChange}
              className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
            {errors.name && (
              <p className="text-error text-xs mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-bold text-text mb-1">
              학년/반/번호
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div className="relative">
                <select
                  name="grade"
                  value={form.grade}
                  onChange={handleChange}
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
                {errors.grade && (
                  <p className="text-error text-xs mt-1">{errors.grade}</p>
                )}
              </div>

              <div className="relative">
                <select
                  name="classnum"
                  value={form.classnum}
                  onChange={handleChange}
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
                {errors.classnum && (
                  <p className="text-error text-xs mt-1">{errors.classnum}</p>
                )}
              </div>

              <div className="relative">
                <select
                  name="number"
                  value={form.number}
                  onChange={handleChange}
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
                {errors.number && (
                  <p className="text-error text-xs mt-1">{errors.number}</p>
                )}
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
                value={form.email}
                onChange={handleChange}
                className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
              />
              <button
                type="button"
                className="flex-shrink-0 bg-primary text-white text-sm rounded-lg px-4 py-2 font-bold hover:bg-primary/90 disabled:bg-border transition-colors"
              >
                인증요청
              </button>
            </div>
            {errors.email && (
              <p className="text-error text-xs mt-1">{errors.email}</p>
            )}
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
              value={form.password}
              onChange={handleChange}
              className="w-full border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring transition"
            />
            {errors.password && (
              <p className="text-error text-xs mt-1">{errors.password}</p>
            )}
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
            <span className="text-sm font-medium text-text">
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
        {message && (
          <p className="text-green-600 text-center font-semibold mt-4">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
