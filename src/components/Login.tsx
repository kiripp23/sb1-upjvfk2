import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from './ThemeToggle';
import { loginUser } from '../services/database';

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await loginUser(email, password);

    if (success) {
      setIsAuthenticated(true);
      navigate("/test-form");
    } else {
      alert("Неверный email или пароль");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Вход</CardTitle>
            <ThemeToggle />
          </div>
          <CardDescription>Войдите в свой аккаунт</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="password"
                  type="password"
                  placeholder="Пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full mt-4">Войти</Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-2">
          <div className="text-sm text-muted-foreground">
            <Link to="/register" className="hover:underline">Нет аккаунта? Зарегистрируйтесь</Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <Link to="/recover-password" className="hover:underline">Забыли пароль?</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;