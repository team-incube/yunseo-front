import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Logo } from "../assets/Logo";
import { Link } from "react-router-dom";

export default function Signin() {
    return (
        <div className="min-h-screen bg-[#ffffff] flex flex-col justify-center items-center p-4">
            <div className="bg-card shadow-lg rounded-xl p-8 w-full max-w-md">
                <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Logo />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-text text-center mb-2 mt-2">
                    반 관리 시스템
                </h1>

                <p className="text-muted-foreground text-center mb-6 text-sm text-text">
                    계정에 로그인하여 시작하세요
                </p>

                <form className="space-y-4">
                <Input
                id="username"
                name="username"
                type="text"
                placeholder="아이디를 입력하세요"
                label="아이디"
                />

                <Input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="비밀번호를 입력하세요" 
                label="비밀번호"
                />

                
                <Button className="w-full">로그인</Button>

                
                <div className="flex justify-center pt-３ mt-４ border-t border-gray-300"></div>


                <div className="flex justify-center"> 
                <Link to="/find-password" 
                className="text-text text-sm text-muted-foreground hover:text-primary transition-colors">
                비밀번호를 잊으셨나요?
                </Link>
                </div>
                <div className="mt-４ text-center text-sm text-text">
                    계정이 없으신가요? 
                    <Link to="/signup" className="text-primary hover:underline ml-1 font-semibold">
                        회원가입하기
                    </Link>
                </div>
                </form>
            </div>
        </div>
    );
}	