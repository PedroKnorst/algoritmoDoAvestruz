import { useEffect, useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const [getMoney, setGetMoney] = useState(0);
  const [putMoney, setPutMoney] = useState(0);
  const [loadingGetMoney, setLoadingGetMoney] = useState(false);
  const [loadingPutMoney, setLoadingPutMoney] = useState(false);

  useEffect(() => {
    if (loadingGetMoney && loadingPutMoney) {
      alert("Erro! Você realizou as duas operações ao mesmo tempo!");
      location.reload();
      return;
    }
  }, [loadingGetMoney, loadingPutMoney]);

  const handleGetMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGetMoney(e.target.valueAsNumber);
  };

  const handlePutMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPutMoney(e.target.valueAsNumber);
  };

  const onPutMoney = () => {
    setLoadingPutMoney(true);
    setTimeout(() => {
      setLoadingPutMoney(false);
      alert(`${putMoney} reais foram depositados na sua conta!`);
    }, 4000);
    clearTimeout(4000);
  };

  const onGetMoney = () => {
    setLoadingGetMoney(true);
    setTimeout(() => {
      setLoadingGetMoney(false);
      alert(`${getMoney} reais foram sacados da sua conta!`);
    }, 4000);
    clearTimeout(4000);
  };

  return (
    <main className="max-w-[1280px] flex flex-col gap-6">
      <section>
        <h1 className="text-center text-5xl text-white font-[600]">
          Bem vindo!
        </h1>
        <h3 className="text-center text-2xl text-white font-[600]">
          O que deseja fazer?
        </h3>
      </section>
      <section className="flex gap-6">
        <div className="border px-10 py-5 border-yellow-400 rounded-3xl shadow-[10px_10px_15px_-10px_rgb(250,204,21)] flex flex-col gap-2">
          <Input
            onChange={handleGetMoney}
            type="number"
            label="Sacar Dinheiro"
            id="getMoney"
          />
          <Button onClick={onGetMoney}>Sacar</Button>
          <div
            className={`w-8 self-center h-8 ${
              loadingGetMoney
                ? "border-y-2 animate-spin border-yellow-400 rounded-full"
                : ""
            }`}
          />
        </div>
        <div className="border px-10 py-5 border-yellow-400 shadow-[10px_10px_15px_-10px_rgb(250,204,21)] rounded-3xl flex flex-col gap-2">
          <Input
            onChange={handlePutMoney}
            type="number"
            label="Depositar Dinheiro"
            id="putMoney"
          />
          <Button onClick={onPutMoney}>Depositar</Button>
          <div
            className={`w-8 self-center h-8 ${
              loadingPutMoney
                ? "border-y-2 animate-spin border-yellow-400 rounded-full"
                : ""
            }`}
          />
        </div>
      </section>
      <h4 className="text-center text-xl text-red-600 font-[600]">
        Aviso: Realize apenas uma operação por vez
      </h4>
    </main>
  );
}

export default App;
