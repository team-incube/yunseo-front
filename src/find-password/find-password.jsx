import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Logo } from "../assets/Logo";
import { Link } from "react-router-dom";

export default function findPassword() {
    return (
        <div className="min-h-screen bg-[#ffffff] flex flex-col justify-center items-center p-4">
            <div className="bg-card shadow-lg rounded-xl p-8 w-full max-w-md">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Logo />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-text text-center mb-2 mt-2">
                    비밀번호 찾기
                </h1>

                <p className="text-muted-foreground text-center mb-6 text-xs text-text">
                    이메일 주소를 입력하시면 비밀번호 재설정 링크를 보내드립니다
                </p>

                <form className="space-y-4">
                <Input
                id="email"
                name="email"
                type="text"
                placeholder="이메일을 입력하세요"
                label="이메일 주소"
                />

                
                <Button className="w-full">재설정 링크 보내기</Button>

                
                <div className="flex justify-center pt-３ mt-４ border-t border-gray-300"></div>

                
                <div className="mt-４ text-center text-sm text-text">
                    <Link to="/signin" className="text-center text-sm mt-4 text-primary hover:underline ml-1 font-semibold">
                        ← 로그인 페이지로 돌아가기
                    </Link>
                </div>
                </form>
            </div>
        </div>

    );
    }