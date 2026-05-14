import { Link } from "react-router-dom";
import Button from "../components/ui/Button/Button";

export default function NotFoundPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center">
      <p className="font-display font-black text-8xl text-accent/20 dark:text-accent/10 leading-none mb-2">
        404
      </p>
      <h1 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">
        Хуудас олдсонгүй
      </h1>
      <p className="text-gray-400 mb-8 text-sm">
        Та хайж буй хуудас устсан эсвэл буруу хаяг оруулсан байна.
      </p>
      <Link to="/tasks">
        <Button variant="primary">← Нүүр хуудас руу буцах</Button>
      </Link>
    </div>
  );
}